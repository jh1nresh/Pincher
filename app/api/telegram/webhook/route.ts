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
  origin_address?: string;
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
const ACTIVE_ROOM_STATUSES = ["open", "full", "splitting"];
const RIDE_CREATE_RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RIDE_CREATE_RATE_LIMIT_MAX = 3;
const RIDE_ACTION_RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RIDE_ACTION_RATE_LIMIT_MAX = 20;
const SIMILAR_RIDE_WINDOW_MS = 30 * 60 * 1000;
const NEARBY_EVENT_DISTANCE_MILES = 0.8;

type PassengerUpsertResult = "joined" | "already_joined" | "updated";
type PassengerLeaveResult = "left" | "creator_cannot_leave";

interface RideRoomMeta {
  type?: string;
  creator_name?: string;
  payer_name?: string;
  telegram_chat_id?: TelegramChatId;
  telegram_topic_id?: number;
  telegram_topic_title?: string;
  telegram_topic_status?: "open" | "closed" | "unavailable";
  closed_by?: string;
  closed_at?: string;
  close_reason?: string;
  ready_reminded_at?: string;
}

const rideCreateRateLimit = new Map<string, number[]>();
const rideActionRateLimit = new Map<string, number[]>();

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

function isUsableOpenRoom(room: RideRoom) {
  if (!["open", "full", "splitting"].includes(room.status)) return false;
  const topicStatus = getRoomMeta(room).telegram_topic_status;
  return topicStatus !== "unavailable" && topicStatus !== "closed";
}

function roomBelongsToChat(room: RideRoom, chatId: TelegramChatId) {
  const roomChatId = getRoomMeta(room).telegram_chat_id;
  return !roomChatId || String(roomChatId) === String(chatId);
}

function getAllowedChatIds() {
  return (process.env.TELEGRAM_ALLOWED_CHAT_IDS || "")
    .split(",")
    .map(value => value.trim())
    .filter(Boolean);
}

function isAllowedChat(chatId: TelegramChatId) {
  const allowedChatIds = getAllowedChatIds();
  if (!allowedChatIds.length) return true;
  return allowedChatIds.includes(String(chatId));
}

function getRateLimitKey(chatId: TelegramChatId, user?: TelegramUser) {
  return `${chatId}:${user?.id || "unknown"}`;
}

function isRateLimited(
  store: Map<string, number[]>,
  key: string,
  windowMs: number,
  maxAttempts: number,
) {
  const now = Date.now();
  const recentAttempts = (store.get(key) || []).filter(timestamp => now - timestamp < windowMs);

  if (recentAttempts.length >= maxAttempts) {
    store.set(key, recentAttempts);
    return true;
  }

  store.set(key, [...recentAttempts, now]);
  return false;
}

function isRideCreateRateLimited(chatId: TelegramChatId, user?: TelegramUser) {
  return isRateLimited(
    rideCreateRateLimit,
    getRateLimitKey(chatId, user),
    RIDE_CREATE_RATE_LIMIT_WINDOW_MS,
    RIDE_CREATE_RATE_LIMIT_MAX,
  );
}

function isRideActionRateLimited(chatId: TelegramChatId, user?: TelegramUser) {
  return isRateLimited(
    rideActionRateLimit,
    getRateLimitKey(chatId, user),
    RIDE_ACTION_RATE_LIMIT_WINDOW_MS,
    RIDE_ACTION_RATE_LIMIT_MAX,
  );
}

function isCronAuthorized(request: NextRequest) {
  const secret = process.env.CRON_SECRET || process.env.AUTO_CLOSE_SECRET;
  if (!secret) return true;

  const authHeader = request.headers.get("authorization");
  const key = request.nextUrl.searchParams.get("key");
  return authHeader === `Bearer ${secret}` || key === secret;
}

function stripOriginFromText(text: string) {
  return text
    .replace(/\s+\b(?:from|pickup(?:\s+at)?|leaving\s+from)\b\s+.+$/i, "")
    .replace(/\s+(?:從|上車點|出發點)\s*[^，,]+$/i, "")
    .trim();
}

function getRideQuery(text: string) {
  const textWithoutOrigin = stripOriginFromText(text);

  return textWithoutOrigin
    .replace(/^\/ride(@\w+)?/i, "")
    .replace(/\b(?:may\s*[3-8]|5\/[3-8](?:\/2026)?)\b/i, "")
    .replace(/\b\d{1,2}(:\d{2})?\s*(am|pm)?\b/i, "")
    .trim();
}

function cleanOriginText(value?: string) {
  return (value || "")
    .replace(/\b(?:may\s*[3-8]|5\/[3-8](?:\/2026)?)\b/gi, " ")
    .replace(/\b\d{1,2}(?::\d{2})?\s*(?:am|pm)?\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
}

function getOriginInput(text: string) {
  const englishMatch = text.match(
    /\b(?:from|pickup(?:\s+at)?|leaving\s+from)\b\s+(.+?)(?=\s+\b(?:to|for|at)\b|\s+\d{1,2}(?::\d{2})?\s*(?:am|pm)?\b|$)/i,
  );
  const chineseMatch = text.match(
    /(?:從|上車點|出發點)\s*([^，,]+?)(?=\s*(?:去|到)|\s*\d{1,2}(?::\d{2})?\s*(?:am|pm)?\b|$)/i,
  );
  return cleanOriginText(englishMatch?.[1] || chineseMatch?.[1]);
}

function getRideOrigin(text: string) {
  const origin = getOriginInput(text);

  return {
    name: origin || CONSENSUS_VENUE.name,
    address: origin || CONSENSUS_VENUE.address,
  };
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

  return findEventFromQuery(query);
}

function findEventFromQuery(query: string) {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) return undefined;

  return (
    CONSENSUS_SIDE_EVENTS.find(event => event.id.toLowerCase().includes(normalizedQuery)) ||
    CONSENSUS_SIDE_EVENTS.find(event => event.name.toLowerCase().includes(normalizedQuery)) ||
    CONSENSUS_SIDE_EVENTS.find(event => event.venueName.toLowerCase().includes(normalizedQuery)) ||
    CONSENSUS_SIDE_EVENTS.find(event => event.address.toLowerCase().includes(normalizedQuery)) ||
    CONSENSUS_SIDE_EVENTS.find(event =>
      event.neighborhood.toLowerCase().includes(normalizedQuery),
    ) ||
    undefined
  );
}

function getLeaveAtText(text: string) {
  const dateMatch = text.match(/\b(?:may\s*[3-8]|5\/[3-8](?:\/2026)?)\b/i);
  const textWithoutDate = text.replace(/\b(?:may\s*[3-8]|5\/[3-8](?:\/2026)?)\b/i, "");
  const timeMatch = textWithoutDate.match(/\b\d{1,2}(?::\d{2})?\s*(?:am|pm)?\b/i);

  return [dateMatch?.[0], timeMatch?.[0]].filter(Boolean).join(" ");
}

function getNaturalDestinationQuery(text: string) {
  const destinationMatch = text.match(
    /\b(?:to|for)\b\s+(.+?)(?=\s+\b(?:from|pickup|leaving|at)\b|\s+\d{1,2}(?::\d{2})?\s*(?:am|pm)?\b|$)/i,
  );
  const chineseDestinationMatch = text.match(
    /(?:去|到)\s*([^，,]+?)(?=\s*(?:從|上車點|出發點)|\s*\d{1,2}(?::\d{2})?\s*(?:am|pm)?\b|$)/i,
  );
  const explicitDestination = (destinationMatch?.[1] || chineseDestinationMatch?.[1] || "").trim();

  if (explicitDestination.length >= 3) {
    return explicitDestination;
  }

  return text
    .replace(/@\w+/g, " ")
    .replace(/\b(?:may\s*[3-8]|5\/[3-8](?:\/2026)?)\b/gi, " ")
    .replace(/\b\d{1,2}(?::\d{2})?\s*(?:am|pm)?\b/gi, " ")
    .replace(
      /\b(?:anyone|who|wants?|want|going|heading|leaving|leave|from|venue|ride|rides|carpool|uber|split|share|to|at|for)\b/gi,
      " ",
    )
    .replace(/誰要|有人要|一起|拼車|叫車|搭車|去|到|從|會場|出發|嗎|呢|？|\?/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getNaturalRideRequest(text: string) {
  const trimmedText = text.trim();
  if (!trimmedText || trimmedText.startsWith("/")) return undefined;
  if (!hasLeaveTime(trimmedText)) return undefined;

  const destinationQuery = getNaturalDestinationQuery(trimmedText);
  const event = findEventFromQuery(destinationQuery) || findEventFromQuery(trimmedText);
  const hasRideIntent =
    /誰要|有人要|一起|拼車|叫車|搭車|去|到|會場|出發|anyone|going|heading|ride|carpool|uber|split|share/i.test(
      trimmedText,
    );

  if (!event && (!hasRideIntent || destinationQuery.length < 3)) return undefined;

  const leaveAtText = getLeaveAtText(trimmedText);
  if (!leaveAtText) return undefined;

  return {
    event,
    destination: event?.id || destinationQuery,
    rideCommand: [
      `/ride ${event?.id || destinationQuery} ${leaveAtText}`,
      getOriginInput(trimmedText) ? `from ${getOriginInput(trimmedText)}` : undefined,
    ]
      .filter(Boolean)
      .join(" "),
  };
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

function compactTopicPart(value?: string) {
  return (value || "")
    .replace(/\s+/g, " ")
    .replace(/\b(2026|Miami|The|A|An)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
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
    "/ride <event keyword> <time> from <pickup> - start from another pickup point",
    "Or just ask: anyone going to Marriott at 6:30?",
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
    "/ride <event keyword> <time> from <pickup>",
    "",
    "Examples:",
    "/ride bnb 5/6 6:00",
    "/ride coinbase dinner 8:00",
    "/ride sui 6:30 from Fontainebleau lobby",
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
    "Optional: add pickup, e.g. 6:30 from Fontainebleau lobby.",
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

async function deleteMessage(chatId: TelegramChatId, messageId: number) {
  return telegram("deleteMessage", {
    chat_id: chatId,
    message_id: messageId,
  });
}

async function deleteMessageQuietly(chatId: TelegramChatId, messageId?: number) {
  if (!messageId) return;

  const result = await deleteMessage(chatId, messageId);
  if (!result?.ok) console.warn("deleteMessage skipped:", result);
}

async function cleanupRidePromptMessages(chatId: TelegramChatId, message: TelegramMessage) {
  await Promise.all([
    deleteMessageQuietly(chatId, message.message_id),
    deleteMessageQuietly(chatId, message.reply_to_message?.message_id),
  ]);
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

async function editForumTopic(chatId: TelegramChatId, messageThreadId: number, name: string) {
  return telegram("editForumTopic", {
    chat_id: chatId,
    message_thread_id: messageThreadId,
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
  const normalizedId = shortId.trim().toLowerCase();
  const isFullUuid =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(normalizedId);

  if (isFullUuid) {
    const { data, error } = await supabase
      .from("trip_rooms")
      .select("*")
      .eq("id", normalizedId)
      .in("status", ACTIVE_ROOM_STATUSES)
      .maybeSingle();

    if (error) throw error;
    const room = data as RideRoom | null;
    return room && isUsableOpenRoom(room) ? room : null;
  }

  const { data, error } = await supabase
    .from("trip_rooms")
    .select("*")
    .in("status", ACTIVE_ROOM_STATUSES)
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) throw error;
  return (
    ((data || []) as RideRoom[]).find(
      room => room.id.toLowerCase().startsWith(normalizedId) && isUsableOpenRoom(room),
    ) || null
  );
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

function getRoomEvent(room: RideRoom) {
  return CONSENSUS_SIDE_EVENTS.find(event => event.id === room.destination_hotzone_id);
}

function normalizePlace(value?: string) {
  return (value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\b(miami|2026|the|a|an|usa|fl|33139|33132|33131|33140|beach)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getDistanceMiles(a?: { lat: number; lng: number }, b?: { lat: number; lng: number }) {
  if (!a || !b) return Number.POSITIVE_INFINITY;

  const toRadians = (value: number) => (value * Math.PI) / 180;
  const earthRadiusMiles = 3958.8;
  const dLat = toRadians(b.lat - a.lat);
  const dLng = toRadians(b.lng - a.lng);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;

  return 2 * earthRadiusMiles * Math.asin(Math.sqrt(h));
}

function areRideDestinationsSimilar(a: RideRoom, b: RideRoom) {
  if (a.destination_hotzone_id && a.destination_hotzone_id === b.destination_hotzone_id)
    return true;

  const aEvent = getRoomEvent(a);
  const bEvent = getRoomEvent(b);
  if (getDistanceMiles(aEvent?.coordinate, bEvent?.coordinate) <= NEARBY_EVENT_DISTANCE_MILES) {
    return true;
  }

  const aNeighborhood = aEvent?.neighborhood;
  const bNeighborhood = bEvent?.neighborhood;
  if (
    aNeighborhood &&
    bNeighborhood &&
    aNeighborhood === bNeighborhood &&
    !["Miami", "Miami Beach"].includes(aNeighborhood)
  ) {
    return true;
  }

  const aPlace = normalizePlace(a.destination_address || a.destination);
  const bPlace = normalizePlace(b.destination_address || b.destination);
  if (!aPlace || !bPlace) return false;

  return aPlace.includes(bPlace) || bPlace.includes(aPlace);
}

function areRideTimesSimilar(a: RideRoom, b: RideRoom) {
  return (
    Math.abs(new Date(a.departure_time).getTime() - new Date(b.departure_time).getTime()) <=
    SIMILAR_RIDE_WINDOW_MS
  );
}

function areRideOriginsSimilar(a: RideRoom, b: RideRoom) {
  const aPlace = normalizePlace(a.origin);
  const bPlace = normalizePlace(b.origin);

  if (!aPlace || !bPlace) return true;
  if (aPlace === bPlace) return true;

  return aPlace.includes(bPlace) || bPlace.includes(aPlace);
}

async function findSimilarOpenRooms(room: RideRoom, limit = 3, chatId?: TelegramChatId) {
  const { data, error } = await getSupabaseServerClient()
    .from("trip_rooms")
    .select("*")
    .in("status", ["open", "splitting"])
    .eq("origin_hotzone_id", CONSENSUS_VENUE.id)
    .order("departure_time", { ascending: true })
    .limit(80);

  if (error) throw error;

  const rooms = ((data || []) as RideRoom[]).filter(candidate => {
    if (candidate.id === room.id) return false;
    if (!isUsableOpenRoom(candidate)) return false;
    if (chatId && !roomBelongsToChat(candidate, chatId)) return false;
    if (!areRideTimesSimilar(room, candidate)) return false;
    if (!areRideOriginsSimilar(room, candidate)) return false;
    return areRideDestinationsSimilar(room, candidate);
  });

  const roomsWithSpace = await Promise.all(
    rooms.map(async candidate => ({
      room: candidate,
      passengers: await getPassengers(candidate.id),
    })),
  );

  return roomsWithSpace
    .filter(
      ({ room: candidate, passengers }) => passengers.length < (candidate.max_passengers || 4),
    )
    .sort(
      (a, b) =>
        Math.abs(
          new Date(a.room.departure_time).getTime() - new Date(room.departure_time).getTime(),
        ) -
        Math.abs(
          new Date(b.room.departure_time).getTime() - new Date(room.departure_time).getTime(),
        ),
    )
    .slice(0, limit);
}

function buildSimilarRideKeyboard(rooms: RideRoom[], roomToClose?: RideRoom) {
  return {
    inline_keyboard: [
      ...rooms.map(room => [
        {
          text: `Join ${formatRoomShortId(room.id)}`,
          callback_data: `join:${formatRoomShortId(room.id)}`,
        },
      ]),
      roomToClose
        ? [
            {
              text: `Close ${formatRoomShortId(roomToClose.id)}`,
              callback_data: `close:${formatRoomShortId(roomToClose.id)}`,
            },
          ]
        : [],
    ].filter(row => row.length),
  };
}

async function sendSimilarRideSuggestions(
  chatId: TelegramChatId,
  room: RideRoom,
  messageThreadId?: number,
) {
  const similarRooms = await findSimilarOpenRooms(room, 3, chatId);
  if (!similarRooms.length) return;

  const lines = similarRooms.map(({ room: similarRoom, passengers }) => {
    return `- ${formatRoomShortId(similarRoom.id)} · ${formatMiamiTime(similarRoom.departure_time)} · from ${similarRoom.origin} · ${similarRoom.destination} · ${passengers.length}/${similarRoom.max_passengers || 4}`;
  });

  const text = [
    `Pincher found ${similarRooms.length === 1 ? "a similar ride" : "similar rides"} within 30 min:`,
    "",
    ...lines,
    "",
    "If this is the same plan, join the existing ride and close the duplicate.",
  ].join("\n");

  const keyboard = buildSimilarRideKeyboard(
    similarRooms.map(({ room: similarRoom }) => similarRoom),
    room,
  );
  const meta = getRoomMeta(room);

  await sendMessage(chatId, text, keyboard, meta.telegram_topic_id || messageThreadId);

  await Promise.all(
    similarRooms.map(async ({ room: similarRoom }) => {
      const similarMeta = getRoomMeta(similarRoom);
      if (!similarMeta.telegram_topic_id) return;

      await sendMessage(
        chatId,
        [
          `Pincher found a possible merge: ${formatRoomShortId(room.id)} is also going to ${room.destination} around ${formatMiamiTime(room.departure_time)}.`,
          "",
          "Coordinate here if it is the same ride.",
        ].join("\n"),
        buildSimilarRideKeyboard([room]),
        similarMeta.telegram_topic_id,
      );
    }),
  );
}

async function sendExistingRideMatches(
  chatId: TelegramChatId,
  candidate: RideRoom,
  matches: Awaited<ReturnType<typeof findSimilarOpenRooms>>,
  messageThreadId?: number,
) {
  const lines = matches.map(({ room, passengers }) => {
    return `- ${formatRoomShortId(room.id)} · ${formatMiamiTime(room.departure_time)} · from ${room.origin} · ${room.destination} · ${passengers.length}/${room.max_passengers || 4}`;
  });

  return sendMessage(
    chatId,
    [
      `Pincher found existing rides close to ${formatMiamiTime(candidate.departure_time)} for ${candidate.destination}:`,
      "",
      ...lines,
      "",
      "Tap Join if one works. If not, use /ride to open a new one.",
    ].join("\n"),
    buildSimilarRideKeyboard(matches.map(({ room }) => room)),
    messageThreadId,
  );
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

async function upsertPassenger(
  roomId: string,
  user: TelegramUser,
  paymentStatus = "unpaid",
): Promise<PassengerUpsertResult> {
  const supabase = getSupabaseServerClient();
  const userId = getTelegramUserId(user);
  const userName = getTelegramName(user);

  const { data: existing, error: findError } = await supabase
    .from("trip_passengers")
    .select("id,user_name,payment_status")
    .eq("trip_id", roomId)
    .eq("user_id", userId)
    .maybeSingle();

  if (findError) throw findError;

  if (existing?.id) {
    const nextPaymentStatus =
      paymentStatus === "unpaid" && existing.payment_status
        ? existing.payment_status
        : paymentStatus;

    if (existing.user_name === userName && existing.payment_status === nextPaymentStatus) {
      return "already_joined";
    }

    const { error } = await supabase
      .from("trip_passengers")
      .update({ user_name: userName, payment_status: nextPaymentStatus })
      .eq("id", existing.id);
    if (error) throw error;
    return "updated";
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
  return "joined";
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
  const origin = getRideOrigin(text);

  const { data: room, error } = await supabase
    .from("trip_rooms")
    .insert({
      creator_id: user ? getTelegramUserId(user) : `telegram-chat:${chatId}`,
      origin: origin.name,
      origin_hotzone_id: CONSENSUS_VENUE.id,
      origin_address: origin.address,
      destination: event?.name || customDestination,
      destination_hotzone_id: event?.id || slugifyCustomDestination(customDestination),
      destination_address: event?.address || "Ask in the ride thread",
      departure_time: leaveAt.toISOString(),
      status: "open",
      min_passengers: 2,
      max_passengers: 4,
      estimated_cost: estimatedCost,
      payment_method_info: {
        type: "usdc",
        creator_name: user ? getTelegramName(user) : undefined,
      },
    })
    .select()
    .single();

  if (error) throw error;

  if (user) await upsertPassenger(room.id, user);

  const passengers = await getPassengers(room.id);
  return { room: room as RideRoom, passengers, event };
}

function buildTopicTitle(room: RideRoom) {
  const meta = getRoomMeta(room);
  const eventName = compactTopicPart(room.destination);
  const creator = compactTopicPart(meta.creator_name || room.creator_id.replace(/^telegram:/, ""));
  const title = `${formatMiamiTime(room.departure_time)} · ${eventName} · ${creator}`;

  return title.length <= 128
    ? title
    : `${formatMiamiTime(room.departure_time)} · ${eventName}`.slice(0, 128);
}

function buildCandidateRoom(
  chatId: TelegramChatId,
  user: TelegramUser | undefined,
  request: ReturnType<typeof getNaturalRideRequest>,
) {
  if (!request) return undefined;

  const event = request.event;
  const destination = event?.name || request.destination;
  const origin = getRideOrigin(request.rideCommand);

  return {
    id: "candidate",
    creator_id: user ? getTelegramUserId(user) : `telegram-chat:${chatId}`,
    origin: origin.name,
    destination,
    departure_time: parseLeaveAt(request.rideCommand, event).toISOString(),
    max_passengers: 4,
    estimated_cost: event ? estimateRideCostCents(event) : 4500,
    origin_address: origin.address,
    destination_address: event?.address || destination,
    destination_hotzone_id: event?.id || slugifyCustomDestination(destination),
    payment_method_info: {
      type: "usdc",
      creator_name: user ? getTelegramName(user) : undefined,
    },
    status: "open",
  } satisfies RideRoom;
}

async function ensureRideTopic(chatId: TelegramChatId, room: RideRoom) {
  const meta = getRoomMeta(room);
  if (meta.telegram_topic_id) return syncRideTopicTitle(chatId, room);

  const topicTitle = buildTopicTitle(room);
  const topic = await createForumTopic(chatId, topicTitle);
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
    telegram_topic_title: topicTitle,
    telegram_topic_status: "open",
  });
}

async function syncRideTopicTitle(chatId: TelegramChatId, room: RideRoom) {
  const meta = getRoomMeta(room);
  if (!meta.telegram_topic_id) return room;

  let creatorName = meta.creator_name;
  if (!creatorName) {
    const passengers = await getPassengers(room.id);
    creatorName = passengers.find(passenger => passenger.user_id === room.creator_id)?.user_name;
  }

  const topicTitle = buildTopicTitle({
    ...room,
    payment_method_info: { ...meta, creator_name: creatorName },
  });
  if (meta.telegram_topic_title === topicTitle) return room;

  const topicResult = await editForumTopic(
    meta.telegram_chat_id || chatId,
    meta.telegram_topic_id,
    topicTitle,
  );

  if (!topicResult?.ok) {
    console.warn("editForumTopic skipped:", topicResult);
    return room;
  }

  return updateRoomMeta(room, {
    creator_name: creatorName,
    telegram_chat_id: meta.telegram_chat_id || chatId,
    telegram_topic_title: topicTitle,
  });
}

async function updateRoomMessage(room: RideRoom, chatId: TelegramChatId, messageId?: number) {
  const syncedRoom = await syncRideTopicTitle(chatId, room);
  const passengers = await getPassengers(room.id);
  const event = CONSENSUS_SIDE_EVENTS.find(item => item.id === syncedRoom.destination_hotzone_id);
  const text = buildRideText(syncedRoom, passengers, event);
  const keyboard = buildRideKeyboard(syncedRoom.id);
  const meta = getRoomMeta(syncedRoom);

  if (messageId) return editMessage(chatId, messageId, text, keyboard);
  return sendMessage(chatId, text, keyboard, meta.telegram_topic_id);
}

async function maybeSendRideReadyReminder(room: RideRoom, chatId: TelegramChatId) {
  const passengers = await getPassengers(room.id);
  const maxPassengers = room.max_passengers || 4;
  const meta = getRoomMeta(room);

  if (meta.ready_reminded_at) return;
  if (passengers.length < Math.max(3, maxPassengers - 1)) return;

  await sendMessage(
    chatId,
    [
      `Ride ${formatRoomShortId(room.id)} is ${passengers.length}/${maxPassengers}.`,
      'If you are ready, one person can tap "I\'ll call Uber" and coordinate pickup in this topic.',
    ].join("\n"),
    undefined,
    meta.telegram_topic_id,
  );

  await updateRoomMeta(room, { ready_reminded_at: new Date().toISOString() });
}

async function handleJoin(room: RideRoom, user: TelegramUser) {
  const result = await upsertPassenger(room.id, user);
  const passengers = await getPassengers(room.id);

  if (passengers.length >= (room.max_passengers || 4)) {
    await getSupabaseServerClient().from("trip_rooms").update({ status: "full" }).eq("id", room.id);
  }

  return result;
}

async function handleLeave(room: RideRoom, user: TelegramUser): Promise<PassengerLeaveResult> {
  if (room.creator_id === getTelegramUserId(user)) {
    return "creator_cannot_leave" as const;
  }

  const supabase = getSupabaseServerClient();
  const { error } = await supabase
    .from("trip_passengers")
    .delete()
    .eq("trip_id", room.id)
    .eq("user_id", getTelegramUserId(user));

  if (error) throw error;

  await supabase.from("trip_rooms").update({ status: "open" }).eq("id", room.id);
  return "left" as const;
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
    .in("status", ACTIVE_ROOM_STATUSES)
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
    .in("status", ACTIVE_ROOM_STATUSES)
    .eq("origin_hotzone_id", CONSENSUS_VENUE.id)
    .order("departure_time", { ascending: true })
    .limit(10);

  if (error) throw error;
  const usableRooms = ((rooms || []) as RideRoom[]).filter(
    room => isUsableOpenRoom(room) && roomBelongsToChat(room, chatId),
  );

  if (!usableRooms.length) {
    return sendMessage(
      chatId,
      `No open ride groups yet.\n\nStart one with /ride <event keyword> <time>\nCalendar: ${CONSENSUS_CALENDAR_URL}`,
    );
  }

  const lines = await Promise.all(
    usableRooms.map(async (room, index) => {
      const passengers = await getPassengers(room.id);
      const names =
        passengers.map(passenger => passenger.user_name || passenger.user_id).join(", ") ||
        "nobody yet";
      return `${index + 1}. ${room.destination} · ${formatMiamiTime(room.departure_time)} · from ${room.origin} · ${passengers.length}/${room.max_passengers || 4}\n   ${formatRoomShortId(room.id)} · ${names}`;
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
  if (!isAllowedChat(chatId)) return { ok: true, ignored: "chat_not_allowed" };

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

    if (isRideCreateRateLimited(chatId, message.from)) {
      return sendMessage(
        chatId,
        "Too many ride groups opened recently. Try again in a few minutes.",
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
      const result = await sendMessage(
        chatId,
        `Ride group ${formatRoomShortId(room.id)} opened for ${room.destination}.\nA forum topic was created for pickup coordination. Tap Join if you want in.`,
        keyboard,
        message.message_thread_id,
      );
      await cleanupRidePromptMessages(chatId, message);
      await sendSimilarRideSuggestions(chatId, room, message.message_thread_id);
      return result;
    }

    const result = await sendMessage(chatId, rideText, keyboard, message.message_thread_id);
    await cleanupRidePromptMessages(chatId, message);
    await sendSimilarRideSuggestions(chatId, room, message.message_thread_id);
    return result;
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
      const result = await sendMessage(
        chatId,
        buildRideUsageText(),
        buildEventPickerKeyboard(),
        message.message_thread_id,
      );
      await deleteMessageQuietly(chatId, message.message_id);
      return result;
    }

    if (isRideCreateRateLimited(chatId, message.from)) {
      return sendMessage(
        chatId,
        "Too many ride groups opened recently. Try again in a few minutes.",
        undefined,
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
      const result = await sendMessage(
        chatId,
        `Ride group ${formatRoomShortId(room.id)} opened for ${room.destination}.\nA forum topic was created for pickup coordination. Tap Join if you want in.`,
        keyboard,
      );
      await deleteMessageQuietly(chatId, message.message_id);
      await sendSimilarRideSuggestions(chatId, room, message.message_thread_id);
      return result;
    }

    const result = await sendMessage(chatId, rideText, keyboard);
    await deleteMessageQuietly(chatId, message.message_id);
    await sendSimilarRideSuggestions(chatId, room, message.message_thread_id);
    return result;
  }

  const naturalRideRequest = getNaturalRideRequest(text);
  if (naturalRideRequest && message.from) {
    const candidate = buildCandidateRoom(chatId, message.from, naturalRideRequest);
    const matches = candidate ? await findSimilarOpenRooms(candidate, 3, chatId) : [];

    if (matches.length) {
      const result = await sendExistingRideMatches(
        chatId,
        candidate as RideRoom,
        matches,
        message.message_thread_id,
      );
      await deleteMessageQuietly(chatId, message.message_id);
      return result;
    }

    if (isRideCreateRateLimited(chatId, message.from)) {
      return sendMessage(
        chatId,
        "Too many ride groups opened recently. Try again in a few minutes.",
        undefined,
        message.message_thread_id,
      );
    }

    const {
      room: createdRoom,
      passengers,
      event,
    } = await createRideRoom(chatId, message.from, naturalRideRequest.rideCommand);
    const room = await ensureRideTopic(chatId, createdRoom);
    const meta = getRoomMeta(room);
    const rideText = buildRideText(room, passengers, event);
    const keyboard = buildRideKeyboard(room.id);

    if (meta.telegram_topic_id) {
      await sendMessage(chatId, rideText, keyboard, meta.telegram_topic_id);
      const result = await sendMessage(
        chatId,
        `No existing match found, so Pincher opened ride group ${formatRoomShortId(room.id)} for ${room.destination}.`,
        keyboard,
        message.message_thread_id,
      );
      await deleteMessageQuietly(chatId, message.message_id);
      return result;
    }

    const result = await sendMessage(chatId, rideText, keyboard, message.message_thread_id);
    await deleteMessageQuietly(chatId, message.message_id);
    return result;
  }

  const actionMatch = text.match(
    /^\/(join|leave|payer|paid|close)(@\w+)?\s+([a-f0-9-]{6,36})(?:\s+(\S+))?/i,
  );
  if (!actionMatch || !message.from) return { ok: true, ignored: true };

  const [, action, , shortId, txHash] = actionMatch;
  if (isRideActionRateLimited(chatId, message.from)) {
    return sendMessage(chatId, "Too many ride actions. Try again in a minute.");
  }

  const room = await findRoomByShortId(shortId);
  if (!room) return sendMessage(chatId, `Ride ${shortId} was not found. Try /rides.`);
  if (!roomBelongsToChat(room, chatId)) {
    return sendMessage(chatId, `Ride ${shortId} belongs to a different Telegram group.`);
  }

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

  if (action === "join") {
    const result = await handleJoin(room, message.from);
    await updateRoomMessage(room, chatId);
    await maybeSendRideReadyReminder(room, chatId);
    return sendMessage(
      chatId,
      result === "already_joined"
        ? `You're already in ride ${formatRoomShortId(room.id)}.`
        : `Joined ride ${formatRoomShortId(room.id)}.`,
      undefined,
      message.message_thread_id,
    );
  }

  if (action === "leave") {
    const result = await handleLeave(room, message.from);
    if (result === "creator_cannot_leave") {
      return sendMessage(
        chatId,
        `Ride creators should close ${formatRoomShortId(room.id)} instead of leaving it.`,
        undefined,
        message.message_thread_id,
      );
    }
  }
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

  if (!isAllowedChat(chatId)) {
    return answerCallback(callback.id, "This group is not enabled for Pincher");
  }

  if (action === "ride_event") {
    const event = getPickerEvents()[Number(shortId)];
    if (!event) return answerCallback(callback.id, "Event not found");

    await answerCallback(callback.id, "Event selected");
    const result = await sendMessage(
      chatId,
      buildEventTimePrompt(event),
      {
        force_reply: true,
        input_field_placeholder: "6:30",
      },
      callback.message?.message_thread_id,
    );
    await deleteMessageQuietly(chatId, messageId);
    return result;
  }

  if (!["join", "leave", "payer", "paid", "close"].includes(action)) {
    return answerCallback(callback.id);
  }

  if (isRideActionRateLimited(chatId, callback.from)) {
    return answerCallback(callback.id, "Too many ride actions. Try again in a minute.");
  }

  const room = await findRoomByShortId(shortId);
  if (!room) return answerCallback(callback.id, `Ride ${shortId} was not found`);
  if (!roomBelongsToChat(room, chatId)) {
    return answerCallback(callback.id, "This ride belongs to another group");
  }

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

  let callbackText = action === "paid" ? "Marked as paid" : "Updated";

  if (action === "join") {
    const result = await handleJoin(room, callback.from);
    callbackText = result === "already_joined" ? "You're already in this ride" : "Joined ride";
    await maybeSendRideReadyReminder(room, chatId);
  }
  if (action === "leave") {
    const result = await handleLeave(room, callback.from);
    callbackText =
      result === "creator_cannot_leave"
        ? "Ride creators should close the ride instead"
        : "Left ride";
  }
  if (action === "payer") await handlePayer(room, callback.from);
  if (action === "paid") await handlePaid(room, callback.from);

  await answerCallback(callback.id, callbackText);
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

export async function GET(request: NextRequest) {
  try {
    const task = request.nextUrl.searchParams.get("task") || "close-expired";
    if (task !== "close-expired") {
      return NextResponse.json({ ok: false, error: "unknown task" }, { status: 400 });
    }

    if (!isCronAuthorized(request)) {
      return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
    }

    const closed = await closeExpiredRooms();
    return NextResponse.json({ ok: true, task, closed });
  } catch (error) {
    console.error("Telegram cron error:", error);
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "unknown error" },
      { status: 500 },
    );
  }
}
