/* eslint-disable jsdoc/require-jsdoc */
import { createClient } from "@supabase/supabase-js";
import {
  CONSENSUS_CALENDAR_URL,
  CONSENSUS_SIDE_EVENTS,
  CONSENSUS_TELEGRAM_URL,
  CONSENSUS_VENUE,
  ConsensusSideEvent,
  EventCoordinate,
  estimateRideCostCents,
  formatMiamiTime,
  getDefaultLeaveAt,
  getLocationLabel,
} from "@/lib/consensus-events";

type JsonRpcId = string | number | null;
type McpContent = { type: "text"; text: string };

interface JsonRpcRequest {
  jsonrpc?: "2.0";
  id?: JsonRpcId;
  method?: string;
  params?: Record<string, unknown>;
}

interface McpRequestOptions {
  access?: "public" | "full";
}

interface RideRoom {
  id: string;
  creator_id: string;
  origin: string;
  origin_address?: string;
  destination: string;
  departure_time: string;
  max_passengers?: number;
  estimated_cost?: number;
  actual_cost?: number;
  payer_id?: string;
  destination_address?: string;
  destination_hotzone_id?: string;
  payment_method_info?: Record<string, unknown>;
  status: string;
  created_at?: string;
}

interface RidePassenger {
  id: string;
  trip_id: string;
  user_id: string;
  user_name?: string;
  contact_info?: string;
  payment_status?: string;
  joined_at?: string;
}

interface RideOrigin {
  name: string;
  address: string;
  coordinate?: EventCoordinate;
  coordinateSource?: "command" | "venue";
}

const ROOM_ID_LENGTH = 8;
const CUSTOM_EVENT_ID_PREFIX = "custom-";
const CONSENSUS_YEAR = 2026;
const ACTIVE_ROOM_STATUSES = ["open", "full", "splitting"];
const DEFAULT_MATCH_WINDOW_MINUTES = 30;
const PUBLIC_TOOLS = new Set(["list_side_events"]);

export const PINCHER_MCP_PROTOCOL_VERSION = "2025-06-18";

function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Missing Supabase env. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

function asString(value: unknown, fallback = "") {
  return typeof value === "string" ? value.trim() : fallback;
}

function asNumber(value: unknown, fallback: number) {
  const nextValue = Number(value);
  return Number.isFinite(nextValue) ? nextValue : fallback;
}

function asPositiveInt(value: unknown, fallback: number, max = 50) {
  const nextValue = Math.floor(asNumber(value, fallback));
  if (nextValue < 1) return fallback;
  return Math.min(nextValue, max);
}

function formatRoomShortId(roomId: string) {
  return roomId.slice(0, ROOM_ID_LENGTH);
}

function slugifyCustomDestination(value: string) {
  const slug = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 42);

  return `${CUSTOM_EVENT_ID_PREFIX}${slug || "event"}`;
}

function getEventById(eventId?: string) {
  if (!eventId) return undefined;
  return CONSENSUS_SIDE_EVENTS.find(event => event.id === eventId);
}

function findEventFromQuery(query: string) {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return undefined;

  return (
    CONSENSUS_SIDE_EVENTS.find(event => event.id.toLowerCase().includes(normalizedQuery)) ||
    CONSENSUS_SIDE_EVENTS.find(event => event.name.toLowerCase().includes(normalizedQuery)) ||
    CONSENSUS_SIDE_EVENTS.find(event => event.venueName.toLowerCase().includes(normalizedQuery)) ||
    CONSENSUS_SIDE_EVENTS.find(event => event.address.toLowerCase().includes(normalizedQuery)) ||
    CONSENSUS_SIDE_EVENTS.find(event => event.neighborhood.toLowerCase().includes(normalizedQuery))
  );
}

function isValidCoordinate(coordinate: EventCoordinate) {
  return (
    Number.isFinite(coordinate.lat) &&
    Number.isFinite(coordinate.lng) &&
    Math.abs(coordinate.lat) <= 90 &&
    Math.abs(coordinate.lng) <= 180
  );
}

function parseCoordinateFromText(text?: string): EventCoordinate | undefined {
  if (!text) return undefined;

  const decodedText = (() => {
    try {
      return decodeURIComponent(text);
    } catch {
      return text;
    }
  })();
  const match = decodedText.match(/(?:gps:)?(-?\d{1,2}(?:\.\d+)?)\s*,\s*(-?\d{1,3}(?:\.\d+)?)/i);
  if (!match) return undefined;

  const coordinate = {
    lat: Number(match[1]),
    lng: Number(match[2]),
  };

  return isValidCoordinate(coordinate) ? coordinate : undefined;
}

function resolveOrigin(originInput?: string): RideOrigin {
  const origin = (originInput || "").trim();
  const coordinate = parseCoordinateFromText(origin);

  if (!origin) {
    return {
      name: CONSENSUS_VENUE.name,
      address: CONSENSUS_VENUE.address,
      coordinate: CONSENSUS_VENUE.coordinate,
      coordinateSource: "venue",
    };
  }

  return {
    name: coordinate ? "GPS pickup" : origin.slice(0, 80),
    address: coordinate ? "Shared GPS pickup" : origin.slice(0, 160),
    coordinate,
    coordinateSource: coordinate ? "command" : undefined,
  };
}

function parseLeaveAt(leaveTime?: string, event?: ConsensusSideEvent) {
  const value = (leaveTime || "").trim();
  if (!value) {
    return event ? getDefaultLeaveAt(event, 30) : new Date(Date.now() + 60 * 60 * 1000);
  }

  const isoTime = new Date(value);
  if (Number.isFinite(isoTime.getTime()) && /t/i.test(value)) return isoTime;

  const dateMatch = value.match(/\b(?:may\s*([3-8])|5\/([3-8])(?:\/2026)?)\b/i);
  const textWithoutDate = value.replace(/\b(?:may\s*[3-8]|5\/[3-8](?:\/2026)?)\b/i, "");
  const timeMatch = textWithoutDate.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b/i);

  if (!timeMatch) {
    return event ? getDefaultLeaveAt(event, 30) : new Date(Date.now() + 60 * 60 * 1000);
  }

  const eventDate =
    dateMatch &&
    `${CONSENSUS_YEAR}-05-${String(Number(dateMatch[1] || dateMatch[2])).padStart(2, "0")}`;
  const defaultDate = event
    ? new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/New_York",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date(event.startsAt))
    : `${CONSENSUS_YEAR}-05-04`;

  let hour = Number(timeMatch[1]);
  const minute = timeMatch[2] ? Number(timeMatch[2]) : 0;
  const meridiem = timeMatch[3]?.toLowerCase();

  if (meridiem === "pm" && hour < 12) hour += 12;
  if (meridiem === "am" && hour === 12) hour = 0;
  if (!meridiem && hour < 8) hour += 12;

  return new Date(
    `${eventDate || defaultDate}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00-04:00`,
  );
}

function serializeEvent(event: ConsensusSideEvent) {
  return {
    id: event.id,
    name: event.name,
    day: event.day,
    starts_at: event.startsAt,
    ends_at: event.endsAt,
    venue_name: event.venueName,
    location: getLocationLabel(event),
    address: event.address,
    neighborhood: event.neighborhood,
    registration_status: event.registrationStatus,
    luma_url: event.lumaUrl,
  };
}

async function getPassengers(roomId: string) {
  const { data, error } = await getSupabaseServerClient()
    .from("trip_passengers")
    .select("*")
    .eq("trip_id", roomId)
    .order("joined_at", { ascending: true });

  if (error) throw error;
  return (data || []) as RidePassenger[];
}

function serializePassenger(passenger: RidePassenger) {
  return {
    user_id: passenger.user_id,
    user_name: passenger.user_name,
    contact_info: passenger.contact_info,
    payment_status: passenger.payment_status || "unpaid",
    joined_at: passenger.joined_at,
  };
}

function serializeRoom(room: RideRoom, passengers: RidePassenger[] = []) {
  const event = getEventById(room.destination_hotzone_id);
  const riderCount = passengers.length;
  const maxRiders = room.max_passengers || 4;
  const estimatedCost = room.estimated_cost || (event ? estimateRideCostCents(event) : undefined);

  return {
    id: room.id,
    short_id: formatRoomShortId(room.id),
    status: room.status,
    destination: room.destination,
    destination_address: room.destination_address,
    event: event ? serializeEvent(event) : undefined,
    origin: room.origin,
    origin_address: room.origin_address,
    leave_at: room.departure_time,
    leave_at_label: formatMiamiTime(room.departure_time),
    riders: riderCount,
    max_riders: maxRiders,
    open_seats: Math.max(0, maxRiders - riderCount),
    estimated_cost_cents: estimatedCost,
    estimated_split_cents:
      estimatedCost && riderCount ? Math.ceil(estimatedCost / Math.max(1, riderCount)) : undefined,
    payer_id: room.payer_id,
    passengers: passengers.map(serializePassenger),
    telegram_group_url: CONSENSUS_TELEGRAM_URL,
    created_at: room.created_at,
  };
}

async function findRoomByShortId(shortId: string) {
  const normalizedId = shortId.trim().toLowerCase();
  const isFullUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{12}$/.test(
    normalizedId,
  );

  if (isFullUuid) {
    const { data, error } = await getSupabaseServerClient()
      .from("trip_rooms")
      .select("*")
      .eq("id", normalizedId)
      .in("status", ACTIVE_ROOM_STATUSES)
      .maybeSingle();

    if (error) throw error;
    return (data || null) as RideRoom | null;
  }

  const { data, error } = await getSupabaseServerClient()
    .from("trip_rooms")
    .select("*")
    .in("status", ACTIVE_ROOM_STATUSES)
    .order("created_at", { ascending: false })
    .limit(200);

  if (error) throw error;
  return (
    ((data || []) as RideRoom[]).find(room => room.id.toLowerCase().startsWith(normalizedId)) ||
    null
  );
}

async function toolListSideEvents(params: Record<string, unknown>) {
  const query = asString(params.query).toLowerCase();
  const day = asString(params.day);
  const limit = asPositiveInt(params.limit, 20, 60);

  const events = CONSENSUS_SIDE_EVENTS.filter(event => {
    if (day && event.day !== day) return false;
    if (!query) return true;
    return [
      event.id,
      event.name,
      event.venueName,
      event.address,
      event.neighborhood,
      event.registrationStatus,
    ]
      .join(" ")
      .toLowerCase()
      .includes(query);
  })
    .sort((a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime())
    .slice(0, limit)
    .map(serializeEvent);

  return {
    events,
    calendar_url: CONSENSUS_CALENDAR_URL,
    telegram_group_url: CONSENSUS_TELEGRAM_URL,
  };
}

async function toolFindRides(params: Record<string, unknown>) {
  const destination = asString(params.destination);
  const eventId = asString(params.event_id);
  const event = getEventById(eventId) || findEventFromQuery(destination);
  const leaveAt = parseLeaveAt(asString(params.leave_time), event);
  const windowMinutes = asPositiveInt(
    params.time_window_minutes,
    DEFAULT_MATCH_WINDOW_MINUTES,
    240,
  );
  const limit = asPositiveInt(params.limit, 10, 30);
  const windowMs = windowMinutes * 60 * 1000;

  const { data, error } = await getSupabaseServerClient()
    .from("trip_rooms")
    .select("*")
    .in("status", ACTIVE_ROOM_STATUSES)
    .order("departure_time", { ascending: true })
    .limit(120);

  if (error) throw error;

  const rooms = ((data || []) as RideRoom[]).filter(room => {
    if (event && room.destination_hotzone_id !== event.id) return false;
    if (!event && destination) {
      const haystack = [room.destination, room.destination_address, room.destination_hotzone_id]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(destination.toLowerCase())) return false;
    }

    return Math.abs(new Date(room.departure_time).getTime() - leaveAt.getTime()) <= windowMs;
  });

  const rides = await Promise.all(
    rooms.slice(0, limit).map(async room => serializeRoom(room, await getPassengers(room.id))),
  );

  return {
    rides,
    query: {
      destination: event?.name || destination || undefined,
      leave_time: leaveAt.toISOString(),
      time_window_minutes: windowMinutes,
    },
  };
}

async function toolCreateRide(params: Record<string, unknown>) {
  const eventId = asString(params.event_id);
  const destination = asString(params.destination);
  const event = getEventById(eventId) || findEventFromQuery(destination);
  const customDestination = destination || "Custom side event";
  const leaveAt = parseLeaveAt(asString(params.leave_time), event);
  const origin = resolveOrigin(asString(params.origin));
  const creatorId = asString(params.creator_id, "mcp:guest");
  const creatorName = asString(params.creator_name, "MCP rider");

  const { data: room, error } = await getSupabaseServerClient()
    .from("trip_rooms")
    .insert({
      creator_id: creatorId,
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
      estimated_cost: event ? estimateRideCostCents(event) : 4500,
      payment_method_info: {
        type: "manual_or_base_usdc",
        source: "mcp",
        creator_name: creatorName,
        origin_coordinate: origin.coordinate,
        origin_coordinate_source: origin.coordinateSource,
      },
    })
    .select()
    .single();

  if (error) throw error;

  const { error: passengerError } = await getSupabaseServerClient()
    .from("trip_passengers")
    .insert({
      trip_id: room.id,
      user_id: creatorId,
      user_name: creatorName,
      contact_info: asString(params.contact_info) || undefined,
      payment_status: "unpaid",
      is_driver: false,
      joined_at: new Date().toISOString(),
    });

  if (passengerError) throw passengerError;

  const passengers = await getPassengers(room.id);
  return {
    ride: serializeRoom(room as RideRoom, passengers),
    handoff: {
      telegram_group_url: CONSENSUS_TELEGRAM_URL,
      telegram_command: `/join ${formatRoomShortId(room.id)}`,
      note: "MCP created the ride record. Use Telegram for live coordination and topic discussion.",
    },
  };
}

async function toolJoinRide(params: Record<string, unknown>) {
  const rideId = asString(params.ride_id);
  const userId = asString(params.user_id);
  const userName = asString(params.user_name, userId || "MCP rider");
  if (!rideId) throw new Error("ride_id is required.");
  if (!userId) throw new Error("user_id is required.");

  const room = await findRoomByShortId(rideId);
  if (!room) throw new Error(`Ride ${rideId} was not found or is not open.`);

  const existing = await getPassengers(room.id);
  const alreadyJoined = existing.some(passenger => passenger.user_id === userId);
  if (!alreadyJoined) {
    if (existing.length >= (room.max_passengers || 4)) {
      throw new Error(`Ride ${formatRoomShortId(room.id)} is already full.`);
    }

    const { error } = await getSupabaseServerClient()
      .from("trip_passengers")
      .insert({
        trip_id: room.id,
        user_id: userId,
        user_name: userName,
        contact_info: asString(params.contact_info) || undefined,
        payment_status: "unpaid",
        is_driver: false,
        joined_at: new Date().toISOString(),
      });

    if (error) throw error;
  }

  const passengers = await getPassengers(room.id);
  if (passengers.length >= (room.max_passengers || 4) && room.status === "open") {
    await getSupabaseServerClient().from("trip_rooms").update({ status: "full" }).eq("id", room.id);
    room.status = "full";
  }

  return {
    result: alreadyJoined ? "already_joined" : "joined",
    ride: serializeRoom(room, passengers),
    handoff: {
      telegram_group_url: CONSENSUS_TELEGRAM_URL,
      telegram_command: `/join ${formatRoomShortId(room.id)}`,
      note: "Use the Telegram group/topic for live pickup coordination.",
    },
  };
}

async function toolGetRideStatus(params: Record<string, unknown>) {
  const rideId = asString(params.ride_id);
  if (!rideId) throw new Error("ride_id is required.");

  const room = await findRoomByShortId(rideId);
  if (!room) throw new Error(`Ride ${rideId} was not found or is not open.`);

  return { ride: serializeRoom(room, await getPassengers(room.id)) };
}

async function toolGetSettlement(params: Record<string, unknown>) {
  const rideId = asString(params.ride_id);
  if (!rideId) throw new Error("ride_id is required.");

  const room = await findRoomByShortId(rideId);
  if (!room) throw new Error(`Ride ${rideId} was not found or is not open.`);

  const passengers = await getPassengers(room.id);
  const event = getEventById(room.destination_hotzone_id);
  const totalCostCents =
    room.actual_cost || room.estimated_cost || (event ? estimateRideCostCents(event) : 4500);
  const payerId = asString(params.payer_id, room.payer_id || room.creator_id);
  const payerWallet = asString(params.payer_wallet);
  const riderCount = Math.max(1, passengers.length);
  const splitCents = Math.ceil(totalCostCents / riderCount);

  return {
    ride: serializeRoom(room, passengers),
    settlement: {
      payer_id: payerId,
      payer_wallet: payerWallet || undefined,
      token: "USDC",
      network: "Base",
      total_cost_cents: totalCostCents,
      rider_count: riderCount,
      suggested_split_cents: splitCents,
      instructions:
        "Pincher does not custody funds or verify chain transactions. Use Base MCP/Base Account to prepare a USDC transfer, then record the tx hash in Telegram if desired.",
    },
  };
}

const TOOLS = [
  {
    name: "list_side_events",
    description: "List Consensus Miami side events that Pincher can use as ride destinations.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Optional event, venue, or neighborhood search." },
        day: { type: "string", description: "Optional day, e.g. 2026-05-04." },
        limit: { type: "number", description: "Maximum events to return." },
      },
    },
  },
  {
    name: "find_rides",
    description: "Find open ride groups near a destination and leave time.",
    inputSchema: {
      type: "object",
      properties: {
        event_id: { type: "string", description: "Known Consensus side event id." },
        destination: {
          type: "string",
          description: "Destination/event text if event_id is unknown.",
        },
        leave_time: { type: "string", description: "ISO time or local event time like 5/4 6:30." },
        time_window_minutes: { type: "number", description: "Match window around leave_time." },
        limit: { type: "number", description: "Maximum rides to return." },
      },
    },
  },
  {
    name: "create_ride",
    description: "Create a Pincher ride record for a side event or custom destination.",
    inputSchema: {
      type: "object",
      required: ["leave_time", "creator_id"],
      properties: {
        event_id: { type: "string", description: "Known side event id." },
        destination: { type: "string", description: "Custom destination if event_id is unknown." },
        leave_time: { type: "string", description: "ISO time or local event time like 5/4 6:30." },
        origin: {
          type: "string",
          description: "Pickup name/address or lat,lng. Defaults to venue.",
        },
        creator_id: {
          type: "string",
          description: "Stable caller id, e.g. telegram:123 or wallet.",
        },
        creator_name: { type: "string", description: "Display name for the rider." },
        contact_info: { type: "string", description: "Optional contact hint." },
      },
    },
  },
  {
    name: "join_ride",
    description: "Join an existing Pincher ride by full or short ride id.",
    inputSchema: {
      type: "object",
      required: ["ride_id", "user_id"],
      properties: {
        ride_id: { type: "string", description: "Full UUID or short 8-character ride id." },
        user_id: { type: "string", description: "Stable rider id." },
        user_name: { type: "string", description: "Display name for the rider." },
        contact_info: { type: "string", description: "Optional contact hint." },
      },
    },
  },
  {
    name: "get_ride_status",
    description: "Get riders, timing, destination, and Telegram handoff for a ride.",
    inputSchema: {
      type: "object",
      required: ["ride_id"],
      properties: {
        ride_id: { type: "string", description: "Full UUID or short 8-character ride id." },
      },
    },
  },
  {
    name: "get_settlement",
    description: "Get suggested Base USDC settlement instructions for a ride split.",
    inputSchema: {
      type: "object",
      required: ["ride_id"],
      properties: {
        ride_id: { type: "string", description: "Full UUID or short 8-character ride id." },
        payer_id: { type: "string", description: "Optional ride booker/payer id." },
        payer_wallet: { type: "string", description: "Optional Base wallet or Basename." },
      },
    },
  },
];

async function callTool(name: string, params: Record<string, unknown>) {
  switch (name) {
    case "list_side_events":
      return toolListSideEvents(params);
    case "find_rides":
      return toolFindRides(params);
    case "create_ride":
      return toolCreateRide(params);
    case "join_ride":
      return toolJoinRide(params);
    case "get_ride_status":
      return toolGetRideStatus(params);
    case "get_settlement":
      return toolGetSettlement(params);
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

function toolResult(result: unknown) {
  const text = JSON.stringify(result, null, 2);
  return {
    content: [{ type: "text", text }] satisfies McpContent[],
    structuredContent: result,
  };
}

function jsonRpcResult(id: JsonRpcId | undefined, result: unknown) {
  return { jsonrpc: "2.0", id: id ?? null, result };
}

function jsonRpcError(id: JsonRpcId | undefined, code: number, message: string) {
  return { jsonrpc: "2.0", id: id ?? null, error: { code, message } };
}

export function getPincherMcpMetadata() {
  return {
    name: "pincher",
    version: "0.1.0",
    description:
      "Pincher coordinates conference ride groups and hands off optional settlement to Base USDC.",
    protocol_version: PINCHER_MCP_PROTOCOL_VERSION,
    endpoint: "/api/mcp",
    tools: TOOLS.map(tool => ({ name: tool.name, description: tool.description })),
  };
}

export async function handlePincherMcpRequest(
  request: JsonRpcRequest | JsonRpcRequest[],
  options: McpRequestOptions = { access: "full" },
) {
  if (Array.isArray(request)) {
    return Promise.all(request.map(item => handlePincherMcpRequest(item, options))) as Promise<
      unknown[]
    >;
  }

  if (!request?.method) return jsonRpcError(request?.id, -32600, "Invalid JSON-RPC request.");

  try {
    if (request.method === "initialize") {
      return jsonRpcResult(request.id, {
        protocolVersion: asString(request.params?.protocolVersion) || PINCHER_MCP_PROTOCOL_VERSION,
        capabilities: { tools: {} },
        serverInfo: { name: "pincher", version: "0.1.0" },
      });
    }

    if (request.method === "notifications/initialized") {
      return { ok: true };
    }

    if (request.method === "tools/list") {
      return jsonRpcResult(request.id, { tools: TOOLS });
    }

    if (request.method === "tools/call") {
      const name = asString(request.params?.name);
      const args =
        request.params?.arguments && typeof request.params.arguments === "object"
          ? (request.params.arguments as Record<string, unknown>)
          : {};

      if (!name) return jsonRpcError(request.id, -32602, "Tool name is required.");
      if (options.access !== "full" && !PUBLIC_TOOLS.has(name)) {
        return jsonRpcError(request.id, -32001, "MCP_API_KEY is required for ride tools.");
      }

      return jsonRpcResult(request.id, toolResult(await callTool(name, args)));
    }

    return jsonRpcError(request.id, -32601, `Unsupported method: ${request.method}`);
  } catch (error) {
    return jsonRpcError(
      request.id,
      -32000,
      error instanceof Error ? error.message : "Pincher MCP tool failed.",
    );
  }
}
