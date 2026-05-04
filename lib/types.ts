export enum ViewState {
  SEARCH = "SEARCH",
  NO_MATCHES = "NO_MATCHES",
  SYNC_DECK = "SYNC_DECK",
  COORDINATION = "COORDINATION",
  ACTIVE_TRIP = "ACTIVE_TRIP",
  HOST_WAITING = "HOST_WAITING",
  PROFILE = "PROFILE",
}

export interface Message {
  id: string;
  sender: "Jordan" | "You";
  text: string;
  timestamp: string;
}

export interface UserProfile {
  user_id: string;
  display_name?: string;
  points: number;
}

export interface TripRoom {
  id: string;
  creator_id: string;
  origin: string;
  destination: string;
  departure_time: string;
  min_passengers: number;
  max_passengers: number;
  estimated_cost?: number;
  actual_cost?: number;
  payer_id?: string;
  status: "open" | "full" | "splitting" | "completed";
  created_at: string;
}

export interface TripPassenger {
  id: string;
  trip_id: string;
  user_id: string;
  user_name?: string;
  payment_status: "unpaid" | "paid";
  is_driver: boolean;
  joined_at: string;
}
