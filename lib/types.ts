export enum ViewState {
  SEARCH = 'SEARCH',
  NO_MATCHES = 'NO_MATCHES',
  SYNC_DECK = 'SYNC_DECK',
  COORDINATION = 'COORDINATION',
  HANDSHAKE = 'HANDSHAKE',
  PAYMENT_SELECT = 'PAYMENT_SELECT',
  PAYMENT_SUCCESS = 'PAYMENT_SUCCESS',
  ACTIVE_TRIP = 'ACTIVE_TRIP',
  HOST_WAITING = 'HOST_WAITING',
  PROFILE = 'PROFILE'
}

export interface Message {
  id: string;
  sender: 'Jordan' | 'You';
  text: string;
  timestamp: string;
}

export type PaymentMethod = 'venmo' | 'zelle' | 'usdc';

export type PaymentStatus = 'unpaid' | 'pending_p2p' | 'pending_escrow' | 'paid' | 'refunded';

export interface UserProfile {
  user_id: string;
  display_name?: string;
  venmo_handle?: string;
  zelle_handle?: string;
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
  payer_venmo?: string;
  payer_zelle?: string;
  status: 'open' | 'full' | 'splitting' | 'completed';
  created_at: string;
}

export interface TripPassenger {
  id: string;
  trip_id: string;
  user_id: string;
  user_name?: string;
  payment_method?: PaymentMethod;
  payment_status: PaymentStatus;
  is_driver: boolean;
  joined_at: string;
}
