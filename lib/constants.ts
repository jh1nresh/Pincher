export interface Hotzone {
  id: string;
  name: string;
  displayName: string;
  coordinates: { lat: number; lng: number };
  color: string;
  icon: string;
  backgroundImage?: string;
  virtualPickup?: string;
}

// Irvine & LA Hotzone Definitions
export const HOTZONES: Hotzone[] = [
  {
    id: 'uci_flagpoles',
    name: 'UCI Flagpoles',
    displayName: 'UCI Student Center',
    coordinates: { lat: 33.6493, lng: -117.8427 },
    color: 'bg-blue-600',
    icon: '🎓',
    backgroundImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=300',
    virtualPickup: 'Student Center Bus Loop'
  },
  {
    id: 'utc_trader_joes',
    name: 'UTC',
    displayName: 'University Town Center',
    coordinates: { lat: 33.650, lng: -117.838 },
    color: 'bg-green-600',
    icon: '🛒',
    backgroundImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=300',
    virtualPickup: 'Trader Joe\'s Main Entrance'
  },
  {
    id: '99_ranch_culver',
    name: '99 Ranch',
    displayName: '99 Ranch (Culver)',
    coordinates: { lat: 33.688, lng: -117.785 },
    color: 'bg-red-600',
    icon: '🥦',
    backgroundImage: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=300',
    virtualPickup: 'Main Entrance by Daiso'
  },
  {
    id: 'irvine_spectrum',
    name: 'Spectrum',
    displayName: 'Irvine Spectrum',
    coordinates: { lat: 33.650, lng: -117.744 },
    color: 'bg-purple-600',
    icon: '🎡',
    backgroundImage: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=300',
    virtualPickup: 'Target Entrance'
  },
  {
    id: 'lax',
    name: 'LAX',
    displayName: 'LAX Airport',
    coordinates: { lat: 33.9416, lng: -118.4085 },
    color: 'bg-blue-500',
    icon: '✈️',
    backgroundImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=300',
    virtualPickup: 'Terminal Loop'
  },
  {
    id: 'diamond_jamboree',
    name: 'DJ',
    displayName: 'Diamond Jamboree',
    coordinates: { lat: 33.6993, lng: -117.8354 },
    color: 'bg-red-500',
    icon: '🍜',
    backgroundImage: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=300',
    virtualPickup: 'H Mart Entrance'
  },
  {
    id: 'south_coast_plaza',
    name: 'SCP',
    displayName: 'South Coast Plaza',
    coordinates: { lat: 33.6904, lng: -117.8890 },
    color: 'bg-yellow-600',
    icon: '🛍️',
    backgroundImage: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=300',
    virtualPickup: 'Valet Circle'
  },
  {
    id: 'sna_airport',
    name: 'SNA',
    displayName: 'John Wayne Airport',
    coordinates: { lat: 33.6762, lng: -117.8675 },
    color: 'bg-blue-400',
    icon: '✈️',
    backgroundImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=300',
    virtualPickup: 'Arrivals Terminal B'
  },
  {
    id: 'disneyland',
    name: 'Disney',
    displayName: 'Disneyland',
    coordinates: { lat: 33.8125, lng: -117.9190 },
    color: 'bg-pink-600',
    icon: '🏰',
    backgroundImage: 'https://images.unsplash.com/photo-1555569949-c1ca323db2eb?auto=format&fit=crop&q=80&w=300',
    virtualPickup: 'Downtown Disney Dropoff'
  },
  {
    id: 'universal_studios',
    name: 'Universal',
    displayName: 'Universal Studios',
    coordinates: { lat: 34.1381, lng: -118.3533 },
    color: 'bg-blue-800',
    icon: '🎬',
    backgroundImage: 'https://images.unsplash.com/photo-1599827552599-043b81ea301e?auto=format&fit=crop&q=80&w=300',
    virtualPickup: 'Curbside Dropoff'
  },
  {
    id: 'ucla',
    name: 'UCLA',
    displayName: 'UCLA',
    coordinates: { lat: 34.0689, lng: -118.4452 },
    color: 'bg-blue-600',
    icon: '🐻',
    backgroundImage: 'https://images.unsplash.com/photo-1580974852862-c581c640d048?auto=format&fit=crop&q=80&w=300',
    virtualPickup: 'Ackerman Turnaround'
  },
  {
    id: 'usc',
    name: 'USC',
    displayName: 'USC',
    coordinates: { lat: 34.0224, lng: -118.2851 },
    color: 'bg-red-800',
    icon: '✌️',
    backgroundImage: 'https://images.unsplash.com/photo-1592234063234-a7dd95c479e5?auto=format&fit=crop&q=80&w=300',
    virtualPickup: 'McCarthy Way Structure'
  }
];
