export enum ViewState {
  SEARCH = 'SEARCH',
  SYNC_DECK = 'SYNC_DECK',
  COORDINATION = 'COORDINATION',
  HANDSHAKE = 'HANDSHAKE',
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
