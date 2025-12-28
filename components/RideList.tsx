import { useEffect, useState, useMemo } from 'react';
import { supabase } from '@/lib/supabase';
import { calculateMatchScore, Coordinates } from '@/lib/agent';
import { useWallets, usePrivy } from '@privy-io/react-auth';
import { createWalletClient, custom, parseUnits, encodeFunctionData } from 'viem';
import { baseSepolia } from 'viem/chains';

const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e';
const BOOKING_PRICE_USDC = 0.01;
const BOOKING_PRICE_UNITS = parseUnits(BOOKING_PRICE_USDC.toString(), 6);

const ERC20_ABI = [
  {
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

interface Ride {
  id: number;
  created_at: string;
  user_address: string;
  pickup_location: string;
  dropoff_location: string;
  departure_time: string;
  wechat_id: string;
  status: string;
  // Real coordinates from DB
  pickup_lat?: number;
  pickup_lng?: number;
  dropoff_lat?: number;
  dropoff_lng?: number;
  // Mock fields for UI demo
  price?: number;
  seats?: number;
  match_score?: number;
  ride_pickup_coords?: Coordinates;
  ride_dropoff_coords?: Coordinates;
  distance_from_user?: number;
  isUnlocked?: boolean;
}

interface RideListProps {
  pickupCoords?: Coordinates;
  dropoffCoords?: Coordinates;
  onTopMatchUpdate?: (topMatch: Ride) => void;
  refreshTrigger?: number;
}

// ... (existing code)
import RideChat from './RideChat';


const SHORT_USDC_ADDRESS = `${USDC_ADDRESS.slice(0, 6)}...${USDC_ADDRESS.slice(-4)}`;
const V2_CONTRACT_ADDRESS = "0x1225A84FC29FcdA297736ffe22977f8C594C21bc"; // Deployed on Base Sepolia

export default function RideList({ pickupCoords, dropoffCoords, onTopMatchUpdate, refreshTrigger = 0 }: RideListProps) {
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<number | null>(null); // rideId
  const [activeChatId, setActiveChatId] = useState<number | null>(null); // For chat toggle
  const [expandedRideId, setExpandedRideId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
      setExpandedRideId(prev => prev === id ? null : id);
  };
  
  const onToggleChat = (rideId: number) => {
      setActiveChatId(prev => prev === rideId ? null : rideId);
  };

  const [successTicket, setSuccessTicket] = useState<{ id: number; tx: string } | null>(null);
  const { wallets } = useWallets();
  const { user } = usePrivy();
  
  // -- Action Handlers --
  const handleBook = async (ride: Ride) => {
    try {
        setActionLoading(ride.id);
        
        // Prioritize Privy embedded wallet
        const wallet = wallets.find(w => w.walletClientType === 'privy') || wallets[0];
        
        if (!wallet) {
            alert("Connect wallet first!");
            return;
        }

        const configRes = await fetch('/api/escrow/config');
        const { address: agentAddress } = await configRes.json();
        if (!agentAddress) throw new Error("Agent address missing");

        await wallet.switchChain(baseSepolia.id);
        const provider = await wallet.getEthereumProvider();
        const client = createWalletClient({
            account: wallet.address as `0x${string}`,
            chain: baseSepolia,
            transport: custom(provider),
        });

        const data = encodeFunctionData({
            abi: ERC20_ABI,
            functionName: 'transfer',
            args: [agentAddress as `0x${string}`, BOOKING_PRICE_UNITS],
        });

        // @ts-expect-error - KZG param not needed for simple transfer
        const hash = await client.sendTransaction({ to: USDC_ADDRESS, data });

        const depositRes = await fetch('/api/escrow/deposit', {
            method: 'POST',
            body: JSON.stringify({ rideId: ride.id, txHash: hash, userAddress: wallet.address })
        });
        
        if (!depositRes.ok) throw new Error("Deposit failed");

        setRides(prev => prev.map(r => r.id === ride.id ? { ...r, status: 'escrow_holding', isUnlocked: true } : r));
        addToBooked(ride.id);
        setSuccessTicket({ id: ride.id, tx: hash });

    } catch (e: any) {
        console.error("Booking failed:", e);
        if (!e.message?.includes("User rejected")) {
            alert(`Booking Failed: ${e.shortMessage || e.message}`);
        }
    } finally {
        setActionLoading(null);
    }
  };

  function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
    const R = 6371; 
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  const handleRelease = async (ride: Ride) => {
      if (!navigator.geolocation) {
          alert("Geolocation is not supported");
          return;
      }

      setActionLoading(ride.id);

      navigator.geolocation.getCurrentPosition(async (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          
          if (ride.dropoff_lat && ride.dropoff_lng) {
              const distKm = getDistanceFromLatLonInKm(userLat, userLng, ride.dropoff_lat, ride.dropoff_lng);
              if (distKm * 0.621371 > 0.5) {
                  alert(`Too far from destination! You are ${(distKm * 0.621371).toFixed(2)} miles away.`);
                  setActionLoading(null);
                  return;
              }
          }

          try {
            const res = await fetch('/api/escrow/release', {
                method: 'POST',
                body: JSON.stringify({ rideId: ride.id })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);

            setRides(prev => prev.map(r => r.id === ride.id ? { ...r, status: 'completed' } : r));
            alert(`Funds Released!`);

          } catch (e: any) {
             alert(`Release Failed: ${e.message}`);
          } finally {
            setActionLoading(null);
          }
      }, () => {
          alert("Could not get your location.");
          setActionLoading(null);
      });
  };

  const openInUber = (ride: Ride) => {
      const pLat = ride.ride_pickup_coords?.lat;
      const pLng = ride.ride_pickup_coords?.lng;
      const dLat = ride.ride_dropoff_coords?.lat;
      const dLng = ride.ride_dropoff_coords?.lng;

      if (!pLat || !pLng || !dLat || !dLng) {
          alert("Missing coordinates.");
          return;
      }
      
      const baseUrl = "https://m.uber.com/ul/";
      const params = new URLSearchParams({
        action: 'setPickup',
        client_id: 'pincher_demo',
        'pickup[latitude]': pLat.toString(),
        'pickup[longitude]': pLng.toString(),
        'pickup[nickname]': ride.pickup_location,
        'dropoff[latitude]': dLat.toString(),
        'dropoff[longitude]': dLng.toString(),
        'dropoff[nickname]': ride.dropoff_location,
      });
      
      window.open(`${baseUrl}?${params.toString()}`, '_blank');
  };

  const handleCopyWeChat = (text: string) => {
      navigator.clipboard.writeText(text);
      alert("WeChat ID Copied!");
  };


  const [bookedRideIds, setBookedRideIds] = useState<number[]>([]);

  useEffect(() => {
      const stored = localStorage.getItem('pincher_booked_rides');
      if (stored) {
          try {
              setBookedRideIds(JSON.parse(stored));
          } catch (e) { console.error("Failed to parse booked rides", e); }
      }
  }, []);

  const addToBooked = (id: number) => {
      const updated = [...bookedRideIds, id];
      setBookedRideIds(updated);
      localStorage.setItem('pincher_booked_rides', JSON.stringify(updated));
  }

  useEffect(() => {
    fetchRides();
  }, [refreshTrigger]);

  async function fetchRides() {
    try {
      const { data, error } = await supabase
        .from('rides')
        .select('*')
        .order('departure_time', { ascending: true });

      if (error) throw error;
      
      const enrichedRides = (data || []).map((ride: any, index: number) => {
        const hasRealCoords = ride.pickup_lat && ride.pickup_lng && ride.dropoff_lat && ride.dropoff_lng;
        let pLat, pLng, dLat, dLng;

        if (hasRealCoords) {
             pLat = ride.pickup_lat;
             pLng = ride.pickup_lng;
             dLat = ride.dropoff_lat;
             dLng = ride.dropoff_lng;
        } else {
            const latOffset = (index % 5 - 2) * 0.005; 
            const lngOffset = (index % 3 - 1) * 0.005;
            pLat = 33.6846 + latOffset;
            pLng = -117.8265 + lngOffset;
            dLat = 33.7 + latOffset;
            dLng = -117.8 + lngOffset;
        }

        return {
          ...ride,
          price: 10 + (ride.id % 25), 
          seats: 1 + (ride.id % 3),
          ride_pickup_coords: { lat: pLat, lng: pLng },
          ride_dropoff_coords: { lat: dLat, lng: dLng },
          match_score: 0,
          isUnlocked: ride.status === 'completed' || ride.status === 'escrow_holding'
        }
      });
      
      setRides(enrichedRides);
    } catch (error: any) {
      console.error('Error fetching rides:', error?.message || error);
    } finally {
      setLoading(false);
    }
  }

  const sortedRides = useMemo(() => {
    if (!rides.length) return [];
    if (!pickupCoords) return rides;

    const scored = rides.map(ride => {
        if (!ride.ride_pickup_coords || !ride.ride_dropoff_coords) return ride;
        const { score, distance } = calculateMatchScore(
            pickupCoords,
            dropoffCoords,
            ride.ride_pickup_coords,
            ride.ride_dropoff_coords
        );
        return { ...ride, match_score: score, distance_from_user: distance };
    });

    return scored.sort((a, b) => (b.match_score || 0) - (a.match_score || 0));
  }, [rides, pickupCoords, dropoffCoords]);

  useEffect(() => {
    if (onTopMatchUpdate && sortedRides.length > 0) {
        onTopMatchUpdate(sortedRides[0]);
    }
  }, [sortedRides, onTopMatchUpdate]);



  const displayedRides = sortedRides.filter(r => {
      const GRACE_PERIOD_MS = 2 * 60 * 60 * 1000; 
      const isExpired = new Date(r.departure_time).getTime() < (Date.now() - GRACE_PERIOD_MS);
      if (r.status === 'completed' || r.status === 'cancelled') return false;
      if (r.status === 'escrow_holding') {
          const isOrganizer = user?.wallet?.address && r.user_address && 
                              user.wallet.address.toLowerCase() === r.user_address.toLowerCase();
          const isPassenger = bookedRideIds.includes(r.id);
          return isOrganizer || isPassenger;
      }
      if (r.status === 'active') return !isExpired;
      return true;
  });

  if (loading) return (
      <div className="flex justify-center p-8">
          <div className="w-6 h-6 border-2 border-slate-200 border-t-black rounded-full animate-spin"></div>
      </div>
  );


  return (
    <div className="space-y-4">
      {/* ... (Header remains same) ... */}
      
      {displayedRides.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
             {/* ... (Empty state remains same) ... */}
             <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl opacity-50">🚗</span>
             </div>
             <p className="text-sm text-gray-900 font-bold">No rides nearby</p>
        </div>
      ) : (
        <div className="space-y-3 pb-20 px-1">
          {displayedRides.map((ride) => {
            const date = new Date(ride.departure_time);
            const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const isBooking = actionLoading === ride.id;
            const isExpanded = expandedRideId === ride.id;
            
            return (
                <div
                key={ride.id}
                onClick={() => toggleExpand(ride.id)}
                className={`group px-4 py-3 bg-white border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-all cursor-pointer ${
                    ride.status === 'escrow_holding' ? 'bg-yellow-50/50' : 
                    ride.status === 'completed' ? 'bg-green-50/50' : ''
                }`}
                >
                <div className="flex flex-col gap-2">
                    {/* Header: Time & Price & Status */}
                    <div className="flex justify-between items-center">
                         <div className="flex items-center gap-2">
                             <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                                 {timeStr}
                             </span>
                             {(ride.match_score || 0) > 80 && (
                                <span className="text-[10px] font-bold text-green-600 flex items-center gap-0.5">
                                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    {ride.match_score}% Match
                                </span>
                             )}
                         </div>
                         <div className="flex items-center gap-2">
                             {ride.status === 'escrow_holding' && (
                                 <span className="text-[9px] font-bold text-yellow-600 bg-yellow-100 px-1.5 py-0.5 rounded uppercase">Escrow</span>
                             )}
                             <span className="text-sm font-black text-black">0.01 USDC</span>
                             {/* Chevron */}
                             <svg className={`w-3 h-3 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                         </div>
                    </div>

                    {/* Route Display */}
                    {isExpanded ? (
                        // EXPANDED VIEW: Full Addresses
                        <div className="flex flex-col gap-3 mt-1 py-2 border-l-2 border-black pl-3 ml-1 animate-in fade-in duration-200">
                            <div>
                                <p className="text-[9px] uppercase font-bold text-gray-400">Pickup</p>
                                <p className="text-xs font-bold text-black">{ride.pickup_location}</p>
                            </div>
                            <div>
                                <p className="text-[9px] uppercase font-bold text-gray-400">Dropoff</p>
                                <p className="text-xs font-bold text-black">{ride.dropoff_location}</p>
                            </div>
                            {ride.distance_from_user !== undefined && (
                                <p className="text-[10px] text-gray-500 italic">
                                    {(ride.distance_from_user * 0.621371).toFixed(1)} miles addition
                                </p>
                            )}
                        </div>
                    ) : (
                        // COLLAPSED VIEW: Summary Line
                        <div className="flex items-center gap-2 text-xs text-gray-900 font-bold leading-tight">
                            <span className="truncate max-w-[45%]">{ride.pickup_location.split(',')[0]}</span>
                            <span className="text-gray-300">➜</span>
                            <span className="truncate max-w-[45%]">{ride.dropoff_location.split(',')[0]}</span>
                        </div>
                    )}

                    {/* Action Area */}
                    <div className="mt-1" onClick={(e) => e.stopPropagation()}>
                        {ride.status === 'active' && (
                            <button
                                onClick={() => handleBook(ride)}
                                disabled={isBooking}
                                className="w-full py-2 bg-black text-white rounded-md text-[10px] font-bold uppercase tracking-wider hover:bg-gray-800 disabled:bg-gray-200 disabled:text-gray-400 transition-colors flex items-center justify-center gap-2"
                            >
                                {isBooking ? 'Processing...' : 'Pay Deposit (0.01 USDC) & Join'}
                            </button>
                        )}
                        
                        {ride.status === 'escrow_holding' && (
                             <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-dashed border-gray-100">
                                <div className="flex items-center justify-between">
                                     <span className="text-[9px] font-bold text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded uppercase">Ride In Progress</span>
                                     <div className="flex items-center gap-1 text-[10px] text-gray-500">
                                        <span className="font-bold select-all">{ride.wechat_id}</span>
                                        <button onClick={(e) => {e.stopPropagation(); handleCopyWeChat(ride.wechat_id);}} className="hover:text-black" title="Copy">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 012 2v-8a2 2 0 01-2-2h-8a2 2 0 01-2 2v8a2 2 0 012 2z" /></svg>
                                        </button>
                                     </div>
                                </div>

                                <div className="flex gap-2">
                                    {/* Organizer Actions */}
                                    {user?.wallet?.address && ride.user_address && 
                                     user.wallet.address.toLowerCase() === ride.user_address.toLowerCase() ? (
                                        <div className="flex items-center gap-1 w-full">
                                            <button
                                                onClick={() => openInUber(ride)}
                                                className="flex-1 py-1.5 bg-black text-white rounded text-[10px] font-bold hover:bg-gray-800"
                                            >
                                                Open Uber
                                            </button>
                                            <button
                                                onClick={() => alert("Simulated: Customer support contacted.")}
                                                className="flex-1 py-1.5 bg-gray-100 text-gray-600 rounded text-[10px] font-bold hover:bg-gray-200"
                                            >
                                                Support
                                            </button>
                                        </div>
                                    ) : (
                                        /* Passenger Actions */
                                        <button
                                            onClick={() => handleRelease(ride)}
                                            disabled={isBooking}
                                            className="w-full py-2 bg-green-600 text-white rounded text-[10px] font-bold hover:bg-green-700 disabled:bg-green-400 shadow-sm"
                                        >
                                            {isBooking ? 'Verifying...' : '✅ Confirm Pickup'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        )}
                        
                         {ride.status === 'completed' && (
                             <div className="w-full py-2 bg-gray-100 text-gray-500 rounded-md text-[10px] font-bold uppercase tracking-wider text-center cursor-default">
                                 Completed
                             </div>
                        )}
                        
                        
                        {/* Expanded Chat Toggle */}
                        {isExpanded && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onToggleChat(ride.id);
                                }}
                                className="mt-2 w-full text-[10px] font-bold text-gray-400 hover:text-black hover:bg-gray-50 py-1.5 rounded border border-transparent hover:border-gray-100 transition-all flex items-center justify-center gap-1"
                            >
                                {activeChatId === ride.id ? 'Hide Chat' : '💬 Open Chat'}
                            </button>
                        )}
                    </div>

                    {/* Render Chat if Open */}
                    {activeChatId === ride.id && (
                        <div className="mt-2 pt-2 border-t border-gray-100" onClick={(e) => e.stopPropagation()}>
                             <RideChat rideId={ride.id} />
                        </div>
                    )}
                </div>
                </div>
            );
          })}
        </div>
      )}

      {/* Success Modal - Uber White Style */}
      {successTicket && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-sm bg-white rounded-xl shadow-2xl p-6 relative overflow-hidden">
                <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h3 className="text-xl font-black text-black tracking-tight mb-2">
                        Ride Confirmed
                    </h3>
                    <p className="text-sm text-gray-500 mb-6 max-w-[240px]">
                        Deposit locked. Driver is on the way.
                    </p>

                    {/* Ticket Details */}
                    <div className="w-full bg-gray-50 rounded-lg p-3 mb-6 border border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Ticket ID</span>
                            <span className="text-xs font-mono font-bold text-black">#{successTicket.id.toString().padStart(4, '0')}</span>
                        </div>
                        <div className="w-full h-px bg-gray-200 my-2"></div>
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Status</span>
                            <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">ACTIVE</span>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="w-full space-y-3">
                        <button
                            onClick={() => setSuccessTicket(null)}
                            className="w-full py-3 rounded-lg bg-black text-white font-bold text-sm hover:bg-gray-800 transition-all active:scale-[0.98]"
                        >
                            Track Driver
                        </button>
                        
                        <a 
                            href={`https://sepolia.basescan.org/tx/${successTicket.tx}`}
                            target="_blank"
                            rel="noreferrer"
                            className="block w-full text-center py-2 text-xs font-medium text-gray-400 hover:text-black transition-colors"
                        >
                            View Receipt on BaseScan ↗
                        </a>
                    </div>
                </div>
            </div>
        </div>
      )}

    </div>
  );
}
