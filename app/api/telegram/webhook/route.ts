import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import {
  CONSENSUS_CALENDAR_URL,
  CONSENSUS_SIDE_EVENTS,
  CONSENSUS_VENUE,
  ConsensusSideEvent,
  estimateRideCostCents,
  formatMiamiTime,
  getDefaultLeaveAt,
  getLocationLabel,
} from "@/lib/consensus-events";

type TelegramChatId = number | string;

interface TelegramUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
}

interface TelegramMessage {
  message_id?: number;
  message_thread_id?: number;
  chat?: { id?: TelegramChatId; is_forum?: boolean };
  from?: TelegramUser;
  text?: string;
  reply_to_message?: TelegramMessage;
}

interface TelegramCallbackQuery {
  id: string;
  from: TelegramUser;
  message?: TelegramMessage;
  data?: string;
}

interface TelegramUpdate {
  message?: TelegramMessage;
  callback_query?: TelegramCallbackQuery;
}

interface RideRoom {
  id: string;
  creator_id: string;
  origin: string;
  destination: string;
  departure_time: string;
  max_passengers: number;
  estimated_cost?: number;
  destination_address?: string;
  destination_hotzone_id?: string;
  payment_method_info?: Record<string, unknown>;
  payer_id?: string;
  status: string;
}

interface RidePassenger {
  id: string;
  trip_id: string;
  user_id: string;
  user_name?: string;
  payment_status?: string;
}

const BOT_API_BASE = "https://api.telegram.org/bot";
const ROOM_ID_LENGTH = 8;
const CUSTOM_EVENT_ID_PREFIX = "custom-";
const AUTO_CLOSE_AFTER_HOURS = 2;
const CONSENSUS_YEAR = 2026;
const EVENT_ID_PROMPT_PREFIX = "Event ID:";

interface RideRoomMeta {
  type?: string;
  payer_name?: string;
  telegram_chat_id?: TelegramChatId;
  telegram_topic_id?: number;
  telegram_topic_status?: "open" | "closed" | "unavailable";
  closed_by?: string;
  closed_at?: string;
  close_reason?: string;
}

function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Missing Supabase env. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

function getTelegramName(user?: TelegramUser) {
  if (!user) return "Guest";
  if (user.username) return `@${user.username}`;
  return [user.first_name, user.last_name].filter(Boolean).join(" ") || `tg:${user.id}`;
}

function getTelegramUserId(user: TelegramUser) {
  return `telegram:${user.id}`;
}

function getRoomMeta(room: RideRoom): RideRoomMeta {
  return (room.payment_method_info || {}) as RideRoomMeta;
}

function getRideQuery(text: string) {
  return text
    .replace(/^\/ride(@\w+)?/i, "")
    .replace(/\b(?:may\s*[3-8]|5\/[3-8](?:\/2026)?)\b/i, "")
    .replace(/\b\d{1,2}(:\d{2})?\s*(am|pm)?\b/i, "")
    .trim();
}

function slugifyCustomDestination(value: string) {
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 42);

  return `${CUSTOM_EVENT_ID_PREFIX}${slug || "event"}`;
}

function findEventFromCommand(text: string) {
  const query = getRideQuery(text).toLowerCase();

  if (!query) return undefined;

  return (
    CONSENSUS_SIDE_EVENTS.find(event => event.name.toLowerCase().includes(query)) ||
    CONSENSUS_SIDE_EVENTS.find(event => event.neighborhood.toLowerCase().includes(query)) ||
    CONSENSUS_SIDE_EVENTS.find(event => event.id.toLowerCase().includes(query)) ||
    undefined
  );
}

function parseCommandDate(text: string, event?: ConsensusSideEvent) {
  if (event) {
    return new Intl.DateTimeFormat("en-CA", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(event.startsAt));
  }

  const explicitDay = text.match(/\b(?:may\s*([3-8])|5\/([3-8])(?:\/2026)?)\b/i);
  if (explicitDay) {
    return `${CONSENSUS_YEAR}-05-${String(Number(explicitDay[1] || explicitDay[2])).padStart(2, "0")}`;
  }

  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function parseLeaveAt(text: string, event?: ConsensusSideEvent) {
  const textWithoutDate = text.replace(/\b(?:may\s*[3-8]|5\/[3-8](?:\/2026)?)\b/i, "");
  const explicitTime = textWithoutDate.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b/i);
  if (!explicitTime) {
    return event ? getDefaultLeaveAt(event, 30) : new Date(Date.now() + 60 * 60 * 1000);
  }

  const eventDate = parseCommandDate(text, event);

  let hour = Number(explicitTime[1]);
  const minute = explicitTime[2] ? Number(explicitTime[2]) : 0;
  const meridiem = explicitTime[3]?.toLowerCase();

  if (meridiem === "pm" && hour < 12) hour += 12;
  if (meridiem === "am" && hour === 12) hour = 0;
  if (!meridiem && hour < 8) hour += 12;

  const paddedHour = String(hour).padStart(2, "0");
  const paddedMinute = String(minute).padStart(2, "0");
  return new Date(`${eventDate}T${paddedHour}:${paddedMinute}:00-04:00`);
}

function formatRoomShortId(roomId: string) {
  return roomId.slice(0, ROOM_ID_LENGTH);
}

function getPickerEvents() {
  return [...CONSENSUS_SIDE_EVENTS]
    .filter(event => event.day >= "2026-05-04" && event.day <= "2026-05-08")
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime())
    .slice(0, 18);
}

function hasLeaveTime(text: string) {
  return /\b\d{1,2}(:\d{2})?\s*(am|pm)?\b/i.test(text);
}

function buildRideText(room: RideRoom, passengers: RidePassenger[], event?: ConsensusSideEvent) {
  const estimatedTotal = room.estimated_cost || (event ? estimateRideCostCents(event) : 4200);
  const split = Math.ceil(estimatedTotal / (room.max_passengers || 4));
  const waitingList = passengers.length
    ? passengers
        .map(
          passenger =>
            `- ${passenger.user_name || passenger.user_id}${passenger.payment_status === "paid" ? " · paid" : ""}`,
        )
        .join("\n")
    : "- nobody yet";

  return [
    `Ride group ${formatRoomShortId(room.id)}`,
    "",
    `To: ${room.destination}`,
    `From: ${room.origin || CONSENSUS_VENUE.name}`,
    `Leave: ${formatMiamiTime(room.departure_time)}`,
    `Waiting: ${passengers.length}/${room.max_passengers || 4}`,
    `Est. split: ${(split / 100).toFixed(2)} USDC`,
    event ? `Location: ${getLocationLabel(event)}` : undefined,
    "",
    waitingList,
    "",
    `Commands: /join ${formatRoomShortId(room.id)} · /leave ${formatRoomShortId(room.id)} · /payer ${formatRoomShortId(room.id)} · /close ${formatRoomShortId(room.id)}`,
  ]
    .filter(Boolean)
    .join("\n");
}

function buildRideKeyboard(roomId: string) {
  const shortId = formatRoomShortId(roomId);
  return {
    inline_keyboard: [
      [
        { text: "Join", callback_data: `join:${shortId}` },
        { text: "Leave", callback_data: `leave:${shortId}` },
      ],
      [
        { text: "I'll call Uber", callback_data: `payer:${shortId}` },
        { text: "Close", callback_data: `close:${shortId}` },
      ],
    ],
  };
}

function buildHelpText() {
  return [
    "Pincher ride bot for Consensus Miami",
    "",
    "Use it in this group to find people heading from the venue to side events.",
    "",
    "Commands:",
    "/ride - pick an event, then reply with time",
    "/ride <event keyword> <time> - start a ride directly",
    "/events - list known side events",
    "/rides - list open ride groups",
    "/join <id> - join a ride",
    "/leave <id> - leave a ride",
    "/payer <id> - mark yourself as the Uber caller",
    "/close <id> - close a ride after it is done or wrong",
    "/paid <id> [txhash] - mark your split as paid",
    "",
    `Side events source: ${CONSENSUS_CALENDAR_URL}`,
  ].join("\n");
}

function buildRideUsageText() {
  return [
    "Choose a side event, then reply with your leave time.",
    "",
    "You can also type:",
    "/ride <event keyword> <time>",
    "",
    "Examples:",
    "/ride bnb 5/6 6:00",
    "/ride coinbase dinner 8:00",
    "",
    "Use /events to see known side events.",
  ].join("\n");
}

function buildEventPickerKeyboard() {
  const rows = getPickerEvents().map((event, index) => {
    const day = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      month: "short",
      day: "numeric",
    }).format(new Date(event.startsAt));

    return [
      {
        text: `${day} ${formatMiamiTime(event.startsAt)} · ${event.name}`.slice(0, 64),
        callback_data: `ride_event:${index}`,
      },
    ];
  });

  return { inline_keyboard: rows };
}

function buildEventTimePrompt(event: ConsensusSideEvent) {
  return [
    `Selected: ${event.name}`,
    `When do you want to leave from ${CONSENSUS_VENUE.shortName}?`,
    "",
    "Reply with a time, e.g. 6:30 or 5/6 6:00.",
    `${EVENT_ID_PROMPT_PREFIX} ${event.id}`,
  ].join("\n");
}

function getSelectedEventFromReply(message: TelegramMessage) {
  const replyText = message.reply_to_message?.text || "";
  const match = replyText.match(new RegExp(`${EVENT_ID_PROMPT_PREFIX}\\s+([a-z0-9-]+)`, "i"));
  if (!match) return undefined;

  return CONSENSUS_SIDE_EVENTS.find(event => event.id === match[1]);
}

function buildEventsText() {
  const events = getPickerEvents();

  const lines = events.map(event => {
    const day = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      month: "short",
      day: "numeric",
    }).format(new Date(event.startsAt));

    return `- ${day} ${formatMiamiTime(event.startsAt)} · ${event.name} · ${event.neighborhood}`;
  });

  return [
    "Known Consensus side events:",
    "",
    ...lines,
    "",
    "Start a ride with:",
    "/ride <event keyword> <time>",
    "",
    `Full calendar: ${CONSENSUS_CALENDAR_URL}`,
  ].join("\n");
}

async function telegram(method: string, body: Record<string, unknown>) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return { ok: false, skipped: "TELEGRAM_BOT_TOKEN is not configured" };

  const res = await fetch(`${BOT_API_BASE}${token}/${method}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });

  return res.json();
}

async function sendMessage(
  chatId: TelegramChatId,
  text: string,
  replyMarkup?: unknown,
  messageThreadId?: number,
) {
  return telegram("sendMessage", {
    chat_id: chatId,
    message_thread_id: messageThreadId,
    text,
    reply_markup: replyMarkup,
    disable_web_page_preview: true,
  });
}

async function editMessage(
  chatId: TelegramChatId,
  messageId: number,
  text: string,
  replyMarkup?: unknown,
) {
  return telegram("editMessageText", {
    chat_id: chatId,
    message_id: messageId,
    text,
    reply_markup: replyMarkup,
    disable_web_page_preview: true,
  });
}

async function answerCallback(callbackQueryId: string, text?: string) {
  return telegram("answerCallbackQuery", {
    callback_query_id: callbackQueryId,
    text,
    show_alert: false,
  });
}

async function createForumTopic(chatId: TelegramChatId, name: string) {
  return telegram("createForumTopic", {
    chat_id: chatId,
    name: name.slice(0, 128),
  });
}

async function closeForumTopic(chatId: TelegramChatId, messageThreadId: number) {
  return telegram("closeForumTopic", {
    chat_id: chatId,
    message_thread_id: messageThreadId,
  });
}

async function getChatMember(chatId: TelegramChatId, userId: number) {
  return telegram("getChatMember", {
    chat_id: chatId,
    user_id: userId,
  });
}

async function findRoomByShortId(shortId: string) {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("trip_rooms")
    .select("*")
    .ilike("id", `${shortId}%`)
    .in("status", ["open", "full", "splitting"])
    .limit(1)
    .maybeSingle();

  if (error) throw error;
  return data as RideRoom | null;
}

async function getPassengers(roomId: string) {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("trip_passengers")
    .select("*")
    .eq("trip_id", roomId)
    .order("joined_at", { ascending: true });

  if (error) throw error;
  return (data || []) as RidePassenger[];
}

async function updateRoomMeta(room: RideRoom, patch: RideRoomMeta) {
  const meta = { ...getRoomMeta(room), ...patch };
  const { data, error } = await getSupabaseServerClient()
    .from("trip_rooms")
    .update({ payment_method_info: meta })
    .eq("id", room.id)
    .select()
    .single();

  if (error) throw error;
  return data as RideRoom;
}

async function upsertPassenger(roomId: string, user: TelegramUser, paymentStatus = "unpaid") {
  const supabase = getSupabaseServerClient();
  const userId = getTelegramUserId(user);
  const userName = getTelegramName(user);

  const { data: existing, error: findError } = await supabase
    .from("trip_passengers")
    .select("id")
    .eq("trip_id", roomId)
    .eq("user_id", userId)
    .maybeSingle();

  if (findError) throw findError;

  if (existing?.id) {
    const { error } = await supabase
      .from("trip_passengers")
      .update({ user_name: userName, payment_status: paymentStatus })
      .eq("id", existing.id);
    if (error) throw error;
    return;
  }

  const { error } = await supabase.from("trip_passengers").insert({
    trip_id: roomId,
    user_id: userId,
    user_name: userName,
    payment_status: paymentStatus,
    is_driver: false,
    joined_at: new Date().toISOString(),
  });

  if (error) throw error;
}

async function createRideRoom(
  chatId: TelegramChatId,
  user: TelegramUser | undefined,
  text: string,
) {
  const supabase = getSupabaseServerClient();
  const event = findEventFromCommand(text);
  const customDestination = getRideQuery(text) || "Custom side event";
  const leaveAt = parseLeaveAt(text, event);
  const estimatedCost = event ? estimateRideCostCents(event) : 4500;

  const { data: room, error } = await supabase
    .from("trip_rooms")
    .insert({
      creator_id: user ? getTelegramUserId(user) : `telegram-chat:${chatId}`,
      origin: CONSENSUS_VENUE.name,
      origin_hotzone_id: CONSENSUS_VENUE.id,
      origin_address: CONSENSUS_VENUE.address,
      destination: event?.name || customDestination,
      destination_hotzone_id: event?.id || slugifyCustomDestination(customDestination),
      destination_address: event?.address || "Ask in the ride thread",
      departure_time: leaveAt.toISOString(),
      status: "open",
      min_passengers: 2,
      max_passengers: 4,
      estimated_cost: estimatedCost,
    })
    .select()
    .single();

  if (error) throw error;

  if (user) await upsertPassenger(room.id, user);

  const passengers = await getPassengers(room.id);
  return { room: room as RideRoom, passengers, event };
}

function buildTopicTitle(room: RideRoom) {
  return `${formatRoomShortId(room.id)} · ${formatMiamiTime(room.departure_time)} · ${room.destination}`.slice(
    0,
    128,
  );
}

async function ensureRideTopic(chatId: TelegramChatId, room: RideRoom) {
  const meta = getRoomMeta(room);
  if (meta.telegram_topic_id) return room;

  const topic = await createForumTopic(chatId, buildTopicTitle(room));
  if (!topic?.ok || !topic.result?.message_thread_id) {
    console.warn("createForumTopic skipped:", topic);
    return updateRoomMeta(room, {
      telegram_chat_id: chatId,
      telegram_topic_status: "unavailable",
    });
  }

  return updateRoomMeta(room, {
    telegram_chat_id: chatId,
    telegram_topic_id: topic.result.message_thread_id,
    telegram_topic_status: "open",
  });
}

async function updateRoomMessage(room: RideRoom, chatId: TelegramChatId, messageId?: number) {
  const passengers = await getPassengers(room.id);
  const event = CONSENSUS_SIDE_EVENTS.find(item => item.id === room.destination_hotzone_id);
  const text = buildRideText(room, passengers, event);
  const keyboard = buildRideKeyboard(room.id);
  const meta = getRoomMeta(room);

  if (messageId) return editMessage(chatId, messageId, text, keyboard);
  return sendMessage(chatId, text, keyboard, meta.telegram_topic_id);
}

async function handleJoin(room: RideRoom, user: TelegramUser) {
  await upsertPassenger(room.id, user);
  const passengers = await getPassengers(room.id);

  if (passengers.length >= (room.max_passengers || 4)) {
    await getSupabaseServerClient().from("trip_rooms").update({ status: "full" }).eq("id", room.id);
  }
}

async function handleLeave(room: RideRoom, user: TelegramUser) {
  const supabase = getSupabaseServerClient();
  const { error } = await supabase
    .from("trip_passengers")
    .delete()
    .eq("trip_id", room.id)
    .eq("user_id", getTelegramUserId(user));

  if (error) throw error;

  await supabase.from("trip_rooms").update({ status: "open" }).eq("id", room.id);
}

async function handlePayer(room: RideRoom, user: TelegramUser) {
  const supabase = getSupabaseServerClient();
  const { error } = await supabase
    .from("trip_rooms")
    .update({
      payer_id: getTelegramUserId(user),
      payment_method_info: {
        ...getRoomMeta(room),
        type: "usdc",
        payer_name: getTelegramName(user),
      },
    })
    .eq("id", room.id);

  if (error) throw error;
  await upsertPassenger(room.id, user);
}

async function handlePaid(room: RideRoom, user: TelegramUser, txHash?: string) {
  const supabase = getSupabaseServerClient();
  await upsertPassenger(room.id, user, "paid");

  if (!txHash) return;

  const split = Math.ceil((room.estimated_cost || 4200) / (room.max_passengers || 4));
  const { error } = await supabase.from("payment_confirmations").insert({
    trip_id: room.id,
    payer_id: getTelegramUserId(user),
    recipient_id: room.payer_id || room.creator_id,
    amount: split,
    method: "usdc",
    status: "pending",
    payer_confirmed: true,
    tx_hash: txHash,
    created_at: new Date().toISOString(),
  });

  if (error) console.warn("payment_confirmations insert failed:", error);
}

async function isChatAdmin(chatId: TelegramChatId, user: TelegramUser) {
  const result = await getChatMember(chatId, user.id);
  const status = result?.result?.status;
  return status === "creator" || status === "administrator";
}

async function canCloseRoom(room: RideRoom, chatId: TelegramChatId, user: TelegramUser) {
  const userId = getTelegramUserId(user);
  if (room.creator_id === userId || room.payer_id === userId) return true;
  return isChatAdmin(chatId, user);
}

async function closeRoom(
  room: RideRoom,
  chatId: TelegramChatId,
  user?: TelegramUser,
  reason = "manual",
) {
  const meta = getRoomMeta(room);
  const closedMeta: RideRoomMeta = {
    ...meta,
    telegram_chat_id: meta.telegram_chat_id || chatId,
    telegram_topic_status: "closed",
    closed_by: user ? getTelegramUserId(user) : "system",
    closed_at: new Date().toISOString(),
    close_reason: reason,
  };

  const { data, error } = await getSupabaseServerClient()
    .from("trip_rooms")
    .update({
      status: "completed",
      payment_method_info: closedMeta,
    })
    .eq("id", room.id)
    .select()
    .single();

  if (error) throw error;

  if (meta.telegram_topic_id) {
    const topicResult = await closeForumTopic(
      meta.telegram_chat_id || chatId,
      meta.telegram_topic_id,
    );
    if (!topicResult?.ok) console.warn("closeForumTopic skipped:", topicResult);
  }

  return data as RideRoom;
}

async function closeExpiredRooms() {
  const cutoff = new Date(Date.now() - AUTO_CLOSE_AFTER_HOURS * 60 * 60 * 1000).toISOString();
  const supabase = getSupabaseServerClient();
  const { data: rooms, error } = await supabase
    .from("trip_rooms")
    .select("*")
    .in("status", ["open", "full", "splitting"])
    .lt("departure_time", cutoff)
    .eq("origin_hotzone_id", CONSENSUS_VENUE.id)
    .limit(25);

  if (error) throw error;
  if (!rooms?.length) return 0;

  await Promise.all(
    (rooms as RideRoom[]).map(async room => {
      const meta = getRoomMeta(room);
      await supabase
        .from("trip_rooms")
        .update({
          status: "completed",
          payment_method_info: {
            ...meta,
            telegram_topic_status: meta.telegram_topic_id ? "closed" : meta.telegram_topic_status,
            closed_by: "system",
            closed_at: new Date().toISOString(),
            close_reason: "expired",
          },
        })
        .eq("id", room.id);

      if (meta.telegram_chat_id && meta.telegram_topic_id) {
        const topicResult = await closeForumTopic(meta.telegram_chat_id, meta.telegram_topic_id);
        if (!topicResult?.ok) console.warn("close expired topic skipped:", topicResult);
      }
    }),
  );

  return rooms.length;
}

async function listOpenRides(chatId: TelegramChatId) {
  await closeExpiredRooms();

  const supabase = getSupabaseServerClient();
  const { data: rooms, error } = await supabase
    .from("trip_rooms")
    .select("*")
    .in("status", ["open", "full", "splitting"])
    .eq("origin_hotzone_id", CONSENSUS_VENUE.id)
    .order("departure_time", { ascending: true })
    .limit(10);

  if (error) throw error;
  if (!rooms?.length) {
    return sendMessage(
      chatId,
      `No open ride groups yet.\n\nStart one with /ride <event keyword> <time>\nCalendar: ${CONSENSUS_CALENDAR_URL}`,
    );
  }

  const lines = await Promise.all(
    (rooms as RideRoom[]).map(async (room, index) => {
      const passengers = await getPassengers(room.id);
      const names =
        passengers.map(passenger => passenger.user_name || passenger.user_id).join(", ") ||
        "nobody yet";
      return `${index + 1}. ${room.destination} · ${formatMiamiTime(room.departure_time)} · ${passengers.length}/${room.max_passengers || 4}\n   ${formatRoomShortId(room.id)} · ${names}`;
    }),
  );

  return sendMessage(
    chatId,
    ["Open ride groups:", "", ...lines, "", "Use /join <id> or tap Join on a ride card."].join(
      "\n",
    ),
  );
}

async function handleTextMessage(message: TelegramMessage) {
  const text = message.text || "";
  const chatId = message.chat?.id;
  if (!chatId) return { ok: true, ignored: true };

  const command = text.trim().toLowerCase();
  const selectedEvent = getSelectedEventFromReply(message);

  if (selectedEvent && message.from) {
    if (!hasLeaveTime(text)) {
      return sendMessage(
        chatId,
        `Reply with a leave time for ${selectedEvent.name}, e.g. 6:30 or 5/6 6:00.`,
        undefined,
        message.message_thread_id,
      );
    }

    const rideCommand = `/ride ${selectedEvent.id} ${text.trim()}`;
    const {
      room: createdRoom,
      passengers,
      event,
    } = await createRideRoom(chatId, message.from, rideCommand);
    const room = await ensureRideTopic(chatId, createdRoom);
    const meta = getRoomMeta(room);
    const rideText = buildRideText(room, passengers, event);
    const keyboard = buildRideKeyboard(room.id);

    if (meta.telegram_topic_id) {
      await sendMessage(chatId, rideText, keyboard, meta.telegram_topic_id);
      return sendMessage(
        chatId,
        `Ride group ${formatRoomShortId(room.id)} opened for ${room.destination}.\nA forum topic was created for pickup coordination. Tap Join if you want in.`,
        keyboard,
        message.message_thread_id,
      );
    }

    return sendMessage(chatId, rideText, keyboard, message.message_thread_id);
  }

  if (command.startsWith("/start") || command.startsWith("/help")) {
    return sendMessage(chatId, buildHelpText());
  }

  if (command.startsWith("/events")) {
    return sendMessage(chatId, buildEventsText());
  }

  if (command.startsWith("/rides")) {
    return listOpenRides(chatId);
  }

  if (command.startsWith("/ride")) {
    if (!getRideQuery(text)) {
      return sendMessage(
        chatId,
        buildRideUsageText(),
        buildEventPickerKeyboard(),
        message.message_thread_id,
      );
    }

    const {
      room: createdRoom,
      passengers,
      event,
    } = await createRideRoom(chatId, message.from, text);
    const room = await ensureRideTopic(chatId, createdRoom);
    const meta = getRoomMeta(room);
    const rideText = buildRideText(room, passengers, event);
    const keyboard = buildRideKeyboard(room.id);

    if (meta.telegram_topic_id) {
      await sendMessage(chatId, rideText, keyboard, meta.telegram_topic_id);
      return sendMessage(
        chatId,
        `Ride group ${formatRoomShortId(room.id)} opened for ${room.destination}.\nA forum topic was created for pickup coordination. Tap Join if you want in.`,
        keyboard,
      );
    }

    return sendMessage(chatId, rideText, keyboard);
  }

  const actionMatch = text.match(
    /^\/(join|leave|payer|paid|close)(@\w+)?\s+([a-f0-9-]{6,36})(?:\s+(\S+))?/i,
  );
  if (!actionMatch || !message.from) return { ok: true, ignored: true };

  const [, action, , shortId, txHash] = actionMatch;
  const room = await findRoomByShortId(shortId);
  if (!room) return sendMessage(chatId, `Ride ${shortId} was not found. Try /rides.`);

  if (action === "close") {
    if (!(await canCloseRoom(room, chatId, message.from))) {
      return sendMessage(
        chatId,
        `Only the ride creator, Uber caller, or a group admin can close ${shortId}.`,
      );
    }

    await closeRoom(room, chatId, message.from);
    return sendMessage(chatId, `Ride ${shortId} closed.`);
  }

  if (action === "join") await handleJoin(room, message.from);
  if (action === "leave") await handleLeave(room, message.from);
  if (action === "payer") await handlePayer(room, message.from);
  if (action === "paid") await handlePaid(room, message.from, txHash);

  return updateRoomMessage(room, chatId);
}

async function handleCallback(callback: TelegramCallbackQuery) {
  const chatId = callback.message?.chat?.id;
  const messageId = callback.message?.message_id;
  const [action, shortId] = (callback.data || "").split(":");

  if (!chatId || !shortId) {
    return answerCallback(callback.id);
  }

  if (action === "ride_event") {
    const event = getPickerEvents()[Number(shortId)];
    if (!event) return answerCallback(callback.id, "Event not found");

    await answerCallback(callback.id, "Event selected");
    return sendMessage(
      chatId,
      buildEventTimePrompt(event),
      {
        force_reply: true,
        input_field_placeholder: "6:30",
      },
      callback.message?.message_thread_id,
    );
  }

  if (!["join", "leave", "payer", "paid", "close"].includes(action)) {
    return answerCallback(callback.id);
  }

  const room = await findRoomByShortId(shortId);
  if (!room) return answerCallback(callback.id, `Ride ${shortId} was not found`);

  if (action === "close") {
    if (!(await canCloseRoom(room, chatId, callback.from))) {
      return answerCallback(
        callback.id,
        "Only the ride creator, Uber caller, or a group admin can close this ride",
      );
    }

    await answerCallback(callback.id, "Ride closed");
    if (messageId) await editMessage(chatId, messageId, `Ride ${shortId} closed.`, undefined);
    await closeRoom(room, chatId, callback.from);
    return { ok: true, closed: shortId };
  }

  if (action === "join") await handleJoin(room, callback.from);
  if (action === "leave") await handleLeave(room, callback.from);
  if (action === "payer") await handlePayer(room, callback.from);
  if (action === "paid") await handlePaid(room, callback.from);

  await answerCallback(callback.id, action === "paid" ? "Marked as paid" : "Updated");
  return updateRoomMessage(room, chatId, messageId);
}

export async function POST(request: NextRequest) {
  try {
    const update = (await request.json()) as TelegramUpdate;

    await closeExpiredRooms().catch(error => console.warn("closeExpiredRooms skipped:", error));

    if (update.callback_query) {
      const telegramResult = await handleCallback(update.callback_query);
      return NextResponse.json({ ok: true, telegram: telegramResult });
    }

    if (update.message) {
      const telegramResult = await handleTextMessage(update.message);
      return NextResponse.json({ ok: true, telegram: telegramResult });
    }

    return NextResponse.json({ ok: true, ignored: true });
  } catch (error) {
    console.error("Telegram webhook error:", error);
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "unknown error" },
      { status: 500 },
    );
  }
}
