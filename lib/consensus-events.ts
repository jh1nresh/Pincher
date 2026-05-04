export type LocationPrecision = "exact" | "neighborhood" | "hidden";

export interface EventCoordinate {
  lat: number;
  lng: number;
}

export interface ConsensusSideEvent {
  id: string;
  name: string;
  lumaUrl: string;
  startsAt: string;
  endsAt: string;
  day: "2026-05-03" | "2026-05-04" | "2026-05-05" | "2026-05-06" | "2026-05-07";
  venueName: string;
  address: string;
  neighborhood: string;
  locationPrecision: LocationPrecision;
  coordinate?: EventCoordinate;
  registrationStatus: "open" | "waitlist" | "approval" | "sold_out" | "unknown";
}

export const CONSENSUS_CALENDAR_URL = "https://luma.com/cryptosideevents";
export const CONSENSUS_TELEGRAM_URL = "https://t.me/cryptosideevents";

export const CONSENSUS_VENUE = {
  id: "miami_beach_convention_center",
  name: "Miami Beach Convention Center",
  shortName: "Consensus Venue",
  address: "1901 Convention Ctr Dr, Miami Beach, FL 33139, USA",
  coordinate: { lat: 25.7949047, lng: -80.1332699 },
};

export const CONSENSUS_EVENT_DAYS = [
  { id: "2026-05-03", label: "May 3" },
  { id: "2026-05-04", label: "May 4" },
  { id: "2026-05-05", label: "May 5" },
  { id: "2026-05-06", label: "May 6" },
  { id: "2026-05-07", label: "May 7" },
] as const;

export const CONSENSUS_SIDE_EVENTS: ConsensusSideEvent[] = [
  {
    id: "superteam-vip-welcome-reception",
    name: "Superteam: VIP Welcome Reception",
    lumaUrl: "https://luma.com/superteam-welcome",
    startsAt: "2026-05-03T23:00:00.000Z",
    endsAt: "2026-05-04T02:00:00.000Z",
    day: "2026-05-03",
    venueName: "Venetian Islands",
    address: "Register to see address",
    neighborhood: "Venetian Islands",
    locationPrecision: "hidden",
    coordinate: { lat: 25.79, lng: -80.1775 },
    registrationStatus: "sold_out",
  },
  {
    id: "tokenized-capital-summit",
    name: "Tokenized Capital Summit 2026 Miami",
    lumaUrl: "https://luma.com/tokenizedcapitalsummit2026Miami",
    startsAt: "2026-05-04T12:00:00.000Z",
    endsAt: "2026-05-05T00:00:00.000Z",
    day: "2026-05-04",
    venueName: "Miami Marriott Biscayne Bay",
    address: "Miami Marriott Biscayne Bay, 1633 N Bayshore Dr, Miami, FL 33132, USA",
    neighborhood: "Biscayne Bay",
    locationPrecision: "exact",
    coordinate: { lat: 25.7909309, lng: -80.1865475 },
    registrationStatus: "waitlist",
  },
  {
    id: "founders-investors-breakfast",
    name: "Founders & Investors Circle - Breakfast by Frachtis",
    lumaUrl: "https://luma.com/6ge8xjzc",
    startsAt: "2026-05-04T13:00:00.000Z",
    endsAt: "2026-05-04T15:00:00.000Z",
    day: "2026-05-04",
    venueName: "South Beach",
    address: "Register to see address",
    neighborhood: "South Beach",
    locationPrecision: "hidden",
    coordinate: { lat: 25.795, lng: -80.1275 },
    registrationStatus: "waitlist",
  },
  {
    id: "digital-asset-yield-summit",
    name: "Digital Asset Yield Summit Miami",
    lumaUrl: "https://luma.com/digital-asset-yield-summit-miami",
    startsAt: "2026-05-04T13:00:00.000Z",
    endsAt: "2026-05-04T22:00:00.000Z",
    day: "2026-05-04",
    venueName: "Brickell",
    address: "Register to see address",
    neighborhood: "Brickell",
    locationPrecision: "neighborhood",
    coordinate: { lat: 25.7675, lng: -80.1925 },
    registrationStatus: "open",
  },
  {
    id: "blockchain-gainz-miami",
    name: "Blockchain Gainz Miami",
    lumaUrl: "https://luma.com/blockchaingainzmiami",
    startsAt: "2026-05-04T13:00:00.000Z",
    endsAt: "2026-05-04T15:00:00.000Z",
    day: "2026-05-04",
    venueName: "Muscle Beach South Beach",
    address: "Muscle Beach South Beach, 873 Ocean Dr, Miami Beach, FL 33139, USA",
    neighborhood: "South Beach",
    locationPrecision: "exact",
    coordinate: { lat: 25.7788123, lng: -80.1305957 },
    registrationStatus: "open",
  },
  {
    id: "halborn-lounge",
    name: "Halborn Lounge @ HederaCon",
    lumaUrl: "https://luma.com/halbornlounge",
    startsAt: "2026-05-04T13:00:00.000Z",
    endsAt: "2026-05-04T23:00:00.000Z",
    day: "2026-05-04",
    venueName: "Faena Forum",
    address: "Faena Forum, 3300 Collins Ave, Miami Beach, FL 33140, USA",
    neighborhood: "Mid-Beach",
    locationPrecision: "exact",
    coordinate: { lat: 25.808177, lng: -80.1241546 },
    registrationStatus: "open",
  },
  {
    id: "rayls-clubhaus",
    name: "Rayls ClubHaus - Consensus Miami",
    lumaUrl: "https://luma.com/tqyk8b2m",
    startsAt: "2026-05-04T14:00:00.000Z",
    endsAt: "2026-05-04T23:30:00.000Z",
    day: "2026-05-04",
    venueName: "Register to see location",
    address: "Register to see address",
    neighborhood: "Miami",
    locationPrecision: "hidden",
    registrationStatus: "open",
  },
  {
    id: "merkle-meet",
    name: "Merkle Meet 2026 Miami Hosted by Duane Morris",
    lumaUrl: "https://luma.com/mbf5nmdn",
    startsAt: "2026-05-04T14:30:00.000Z",
    endsAt: "2026-05-04T22:00:00.000Z",
    day: "2026-05-04",
    venueName: "Duane Morris LLP",
    address: "Duane Morris LLP, 201 S Biscayne Blvd # 3400, Miami, FL 33131, USA",
    neighborhood: "Downtown Miami",
    locationPrecision: "exact",
    coordinate: { lat: 25.7721613, lng: -80.1867802 },
    registrationStatus: "open",
  },
  {
    id: "live-crypto-trading-workshop",
    name: "Live Crypto Trading Workshop - Miami",
    lumaUrl: "https://luma.com/8tsv4igl",
    startsAt: "2026-05-04T16:00:00.000Z",
    endsAt: "2026-05-04T20:00:00.000Z",
    day: "2026-05-04",
    venueName: "Downtown Miami",
    address: "Register to see address",
    neighborhood: "Downtown Miami",
    locationPrecision: "neighborhood",
    coordinate: { lat: 25.7725, lng: -80.19 },
    registrationStatus: "waitlist",
  },
  {
    id: "agentic-day-miami",
    name: "Agentic Day Miami: The AI Infrastructure Economy",
    lumaUrl: "https://luma.com/21ejzr4u",
    startsAt: "2026-05-04T16:00:00.000Z",
    endsAt: "2026-05-04T23:30:00.000Z",
    day: "2026-05-04",
    venueName: "Tesla Miami Design District",
    address: "Tesla Miami Design District, 4039 NE 1st Ave, Miami, FL 33137, USA",
    neighborhood: "Design District",
    locationPrecision: "exact",
    coordinate: { lat: 25.8139615, lng: -80.193282 },
    registrationStatus: "open",
  },
  {
    id: "cocktails-confidentiality",
    name: "Cocktails & Confidentiality with Fhenix, Crypto Nomads and ETHGlobal",
    lumaUrl: "https://luma.com/bm9zw0mp",
    startsAt: "2026-05-04T22:00:00.000Z",
    endsAt: "2026-05-05T00:00:00.000Z",
    day: "2026-05-04",
    venueName: "Flamingo / Lummus",
    address: "Register to see address",
    neighborhood: "Flamingo / Lummus",
    locationPrecision: "neighborhood",
    coordinate: { lat: 25.7775, lng: -80.1325 },
    registrationStatus: "open",
  },
  {
    id: "institutional-digital-asset-forum",
    name: "Institutional Digital Asset Forum",
    lumaUrl: "https://luma.com/33mvb8ui",
    startsAt: "2026-05-05T18:30:00.000Z",
    endsAt: "2026-05-05T23:00:00.000Z",
    day: "2026-05-05",
    venueName: "Miami Beach Botanical Garden",
    address: "Miami Beach Botanical Garden, 2000 Convention Ctr Dr, Miami Beach, FL 33139, USA",
    neighborhood: "City Center",
    locationPrecision: "exact",
    coordinate: { lat: 25.7956364, lng: -80.1354799 },
    registrationStatus: "open",
  },
  {
    id: "aws-circle-agentic-nanopayments",
    name: "AWS + Circle Present: Agentic Nanopayments",
    lumaUrl: "https://luma.com/7d1kf5z9",
    startsAt: "2026-05-05T18:30:00.000Z",
    endsAt: "2026-05-05T19:30:00.000Z",
    day: "2026-05-05",
    venueName: "Miami Beach Convention Center",
    address: "Miami Beach Convention Center, 1901 Convention Ctr Dr, Miami Beach, FL 33139, USA",
    neighborhood: "Consensus Venue",
    locationPrecision: "exact",
    coordinate: { lat: 25.7949047, lng: -80.1332699 },
    registrationStatus: "open",
  },
  {
    id: "evening-with-sui-miami",
    name: "An Evening with Sui: Miami",
    lumaUrl: "https://luma.com/EveningwithSuiMiami",
    startsAt: "2026-05-05T23:00:00.000Z",
    endsAt: "2026-05-06T03:00:00.000Z",
    day: "2026-05-05",
    venueName: "The Temple House",
    address: "The Temple House, 1415 Euclid Ave, Miami Beach, FL 33139, USA",
    neighborhood: "Miami Beach",
    locationPrecision: "exact",
    coordinate: { lat: 25.7860148, lng: -80.1349544 },
    registrationStatus: "open",
  },
  {
    id: "founders-investors-brunch",
    name: "Founders & Investors Brunch",
    lumaUrl: "https://luma.com/to0calcr",
    startsAt: "2026-05-06T15:00:00.000Z",
    endsAt: "2026-05-06T18:00:00.000Z",
    day: "2026-05-06",
    venueName: "Miami",
    address: "Register to see address",
    neighborhood: "Miami",
    locationPrecision: "hidden",
    coordinate: { lat: 25.7625, lng: -80.1925 },
    registrationStatus: "waitlist",
  },
  {
    id: "bnb-miami",
    name: "BNB Miami",
    lumaUrl: "https://luma.com/5a62xfax",
    startsAt: "2026-05-06T15:00:00.000Z",
    endsAt: "2026-05-06T22:00:00.000Z",
    day: "2026-05-06",
    venueName: "Perez Art Museum Miami",
    address: "Perez Art Museum Miami, 1103 Biscayne Blvd, Miami, FL 33132, USA",
    neighborhood: "Biscayne Bay",
    locationPrecision: "exact",
    coordinate: { lat: 25.7859307, lng: -80.1861912 },
    registrationStatus: "open",
  },
  {
    id: "founders-vcs-brunch-lunch",
    name: "Founders & VCs Brunch and Lunch Consensus 2026",
    lumaUrl: "https://luma.com/brynz8uq",
    startsAt: "2026-05-06T15:00:00.000Z",
    endsAt: "2026-05-06T18:00:00.000Z",
    day: "2026-05-06",
    venueName: "Miami",
    address: "Register to see address",
    neighborhood: "Miami",
    locationPrecision: "neighborhood",
    coordinate: { lat: 25.7625, lng: -80.1925 },
    registrationStatus: "open",
  },
  {
    id: "builder-nights-multichain",
    name: "Builder Nights Multichain Fest",
    lumaUrl: "https://luma.com/bnmiami",
    startsAt: "2026-05-06T21:00:00.000Z",
    endsAt: "2026-05-07T02:00:00.000Z",
    day: "2026-05-06",
    venueName: "Wynwood Art District",
    address: "Register to see address",
    neighborhood: "Wynwood Art District",
    locationPrecision: "hidden",
    coordinate: { lat: 25.7975, lng: -80.2 },
    registrationStatus: "approval",
  },
  {
    id: "sui-live",
    name: "Sui Live",
    lumaUrl: "https://luma.com/SuiLive",
    startsAt: "2026-05-07T13:00:00.000Z",
    endsAt: "2026-05-07T20:00:00.000Z",
    day: "2026-05-07",
    venueName: "Faena Forum",
    address: "Faena Forum, 3300 Collins Ave, Miami Beach, FL 33140, USA",
    neighborhood: "Mid-Beach",
    locationPrecision: "exact",
    coordinate: { lat: 25.808177, lng: -80.1241546 },
    registrationStatus: "open",
  },
  {
    id: "near-engineering-sovereignty",
    name: "NEAR: Engineering Sovereignty in the Age of Agents",
    lumaUrl: "https://luma.com/w1nkdm1w",
    startsAt: "2026-05-07T16:00:00.000Z",
    endsAt: "2026-05-07T22:00:00.000Z",
    day: "2026-05-07",
    venueName: "City Center",
    address: "Register to see address",
    neighborhood: "City Center",
    locationPrecision: "neighborhood",
    coordinate: { lat: 25.795, lng: -80.135 },
    registrationStatus: "approval",
  },
];

export function getEventsForDay(day: ConsensusSideEvent["day"]) {
  return CONSENSUS_SIDE_EVENTS.filter(event => event.day === day);
}

export function formatMiamiTime(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function formatMiamiDateTime(iso: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function getLocationLabel(event: ConsensusSideEvent) {
  if (event.locationPrecision === "exact") return event.venueName;
  if (event.locationPrecision === "hidden") return `${event.neighborhood} - exact location hidden`;
  return event.neighborhood;
}

export function getDefaultLeaveAt(event: ConsensusSideEvent, minutesBefore = 30) {
  return new Date(new Date(event.startsAt).getTime() - minutesBefore * 60 * 1000);
}

export function estimateRideCostCents(event: ConsensusSideEvent) {
  if (!event.coordinate) return 4500;

  const latMiles = Math.abs(event.coordinate.lat - CONSENSUS_VENUE.coordinate.lat) * 69;
  const lngMiles = Math.abs(event.coordinate.lng - CONSENSUS_VENUE.coordinate.lng) * 60;
  const distanceMiles = Math.max(0.5, Math.sqrt(latMiles ** 2 + lngMiles ** 2));

  return Math.round((1800 + distanceMiles * 320) / 100) * 100;
}

export function estimateSplitCents(event: ConsensusSideEvent, riders = 4) {
  return Math.ceil(estimateRideCostCents(event) / riders);
}
