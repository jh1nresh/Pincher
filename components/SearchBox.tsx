import { useState, useEffect, useRef } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { supabase } from '@/lib/supabase';

interface SearchBoxProps {
  onPickupChange?: (location: string, coords?: { lat: number; lng: number }) => void;
  onDropoffChange?: (location: string, coords?: { lat: number; lng: number }) => void;
  className?: string;
  externalPickupCoords?: { lat: number; lng: number };
  externalDropoffCoords?: { lat: number; lng: number };
  onRideCreated?: () => void;
  isSidebarOpen?: boolean;
  onOpenProfile?: () => void;
}

export default function SearchBox({ 
  onPickupChange, 
  onDropoffChange, 
  className = "",
  externalPickupCoords,
  externalDropoffCoords,
  onRideCreated,
  isSidebarOpen,
  onOpenProfile
}: SearchBoxProps) {
  const { user, authenticated, login, logout } = usePrivy();
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [pickupCoords, setPickupCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [dropoffCoords, setDropoffCoords] = useState<{ lat: number; lng: number } | null>(null);
  
  const displayName = user?.email?.address || 
    (user?.wallet?.address ? `${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}` : 'User');
  
  // ... (Existing Geolocation & Places Logic)
  // Sync with External Coordinates (e.g. Map Drag)
  useEffect(() => {
    if (externalPickupCoords && 
       (!pickupCoords || externalPickupCoords.lat !== pickupCoords.lat || externalPickupCoords.lng !== pickupCoords.lng)) {
        setPickupCoords(externalPickupCoords);
        if (window.google && window.google.maps) {
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ location: externalPickupCoords }).then((response) => {
                if (response.results[0]) setPickup(response.results[0].formatted_address);
            }).catch((e) => console.error("Reverse geocode failed", e));
        }
    }
  }, [externalPickupCoords]);

  useEffect(() => {
    if (externalDropoffCoords && 
       (!dropoffCoords || externalDropoffCoords.lat !== dropoffCoords.lat || externalDropoffCoords.lng !== dropoffCoords.lng)) {
        setDropoffCoords(externalDropoffCoords);
        if (window.google && window.google.maps) {
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ location: externalDropoffCoords }).then((response) => {
                if (response.results[0]) setDropoff(response.results[0].formatted_address);
            }).catch((e) => console.error("Reverse geocode failed", e));
        }
    }
  }, [externalDropoffCoords]);

  const [wechatId, setWechatId] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [loading, setLoading] = useState(false);
  const [locating, setLocating] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [placesApiReady, setPlacesApiReady] = useState(false);

  const pickupInputRef = useRef<HTMLInputElement>(null);
  const dropoffInputRef = useRef<HTMLInputElement>(null);
  const pickupAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const dropoffAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  // Places API Check
  useEffect(() => {
    const checkPlacesAPI = () => {
      if (window.google && window.google.maps && window.google.maps.places) {
        setPlacesApiReady(true);
        return true;
      }
      return false;
    };
    if (checkPlacesAPI()) return;
    const interval = setInterval(() => {
      if (checkPlacesAPI()) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Autocomplete Setup
  useEffect(() => {
    if (!placesApiReady || !window.google || !window.google.maps || !window.google.maps.places) return;

    if (pickupInputRef.current && !pickupAutocompleteRef.current) {
      pickupAutocompleteRef.current = new google.maps.places.Autocomplete(pickupInputRef.current, {
          componentRestrictions: { country: 'us' },
          fields: ['formatted_address', 'geometry', 'name'],
          types: ['establishment', 'geocode'],
      });
      pickupAutocompleteRef.current.addListener('place_changed', () => {
        const place = pickupAutocompleteRef.current?.getPlace();
        if (place?.geometry?.location) {
          const address = place.formatted_address || place.name || '';
          const coords = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
          setPickup(address);
          setPickupCoords(coords);
          onPickupChange?.(address, coords);
        }
      });
    }

    if (dropoffInputRef.current && !dropoffAutocompleteRef.current) {
      dropoffAutocompleteRef.current = new google.maps.places.Autocomplete(dropoffInputRef.current, {
          componentRestrictions: { country: 'us' },
          fields: ['formatted_address', 'geometry', 'name'],
          types: ['establishment', 'geocode'],
      });
      dropoffAutocompleteRef.current.addListener('place_changed', () => {
        const place = dropoffAutocompleteRef.current?.getPlace();
        if (place?.geometry?.location) {
          const address = place.formatted_address || place.name || '';
          const coords = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
          setDropoff(address);
          setDropoffCoords(coords);
          onDropoffChange?.(address, coords);
          if (pickup) setShowDetails(true);
        }
      });
    }
  }, [placesApiReady, onPickupChange, onDropoffChange, pickup]);

  const handleGetCurrentLocation = async () => {
    // ... (logic from before)
     if (!navigator.geolocation) { alert('Geolocation not supported'); return; }
     if (!window.google || !window.google.maps) { alert('Map loading...'); return; }
     setLocating(true);
     navigator.geolocation.getCurrentPosition(
       async (position) => {
         const { latitude, longitude } = position.coords;
         try {
           const geocoder = new google.maps.Geocoder();
           const result = await geocoder.geocode({ location: { lat: latitude, lng: longitude } });
           if (result.results?.[0]) {
             const address = result.results[0].formatted_address;
             const coords = { lat: latitude, lng: longitude };
             setPickup(address);
             setPickupCoords(coords);
             onPickupChange?.(address, coords);
           }
         } catch (e) {
             console.error(e);
         } finally {
             setLocating(false);
         }
       },
       (error) => { console.error(error); setLocating(false); }
     );
  };

  const handleSubmit = async () => {
     if (!authenticated) { login(); return; }
     if (!pickup || !dropoff || !wechatId) { alert('Please fill fields'); return; }
     setLoading(true);
     try {
       const { error } = await supabase.from('rides').insert([{
           user_address: user?.wallet?.address || user?.email?.address || 'unknown',
           pickup_location: pickup,
           dropoff_location: dropoff,
           departure_time: departureTime || new Date().toISOString(),
           wechat_id: wechatId,
           status: 'active',
           pickup_lat: pickupCoords?.lat,
           pickup_lng: pickupCoords?.lng,
           dropoff_lat: dropoffCoords?.lat,
           dropoff_lng: dropoffCoords?.lng,
       }]).select().single();
       if (error) throw error;
       alert('Ride published!');
       setDropoffCoords(null); setWechatId(''); setDepartureTime(''); setShowDetails(false);
       onRideCreated?.();
     } catch (e: any) {
         console.error(e);
         alert(e.message);
     } finally {
         setLoading(false);
     }
  };

  const handleManualGeocode = async (address: string, isPickup: boolean) => {
     if (!address || !window.google || !window.google.maps) return;
     const geocoder = new google.maps.Geocoder();
     const result = await geocoder.geocode({ address });
     if (result.results?.[0]) {
         const loc = result.results[0].geometry.location;
         const coord = { lat: loc.lat(), lng: loc.lng() };
         const addr = result.results[0].formatted_address;
         if (isPickup) {
             setPickup(addr); setPickupCoords(coord); onPickupChange?.(addr, coord);
         } else {
             setDropoff(addr); setDropoffCoords(coord); onDropoffChange?.(addr, coord);
             if (pickup) setShowDetails(true);
         }
     }
  };

  const handleSwap = () => {
     // ... swap logic
     const p = pickup, pc = pickupCoords;
     setPickup(dropoff); setPickupCoords(dropoffCoords); onPickupChange?.(dropoff, dropoffCoords || undefined);
     setDropoff(p); setDropoffCoords(pc); onDropoffChange?.(p, pc || undefined);
  };

  // If sidebar is open on mobile, hide the search box to resolve blocking issue
  // But on Desktop, it just slides.
  // We'll use CSS to handle this.

  return (
    <>
      <div 
        className={`fixed md:absolute top-20 left-4 z-30 w-[94%] max-w-[400px] transition-all duration-300 ease-in-out font-sans ${className} ${isSidebarOpen ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto' : 'opacity-100'}`}
      >
        {!placesApiReady && (
            <div className="mb-2 bg-yellow-50 text-yellow-600 text-xs p-2 rounded border border-yellow-200">Map Loading...</div>
        )}

        <div className="bg-white rounded-xl shadow-xl border border-gray-100 relative overflow-visible">
          
          {/* Profile Button (Google Maps Style - Inside/Attached to SearchBox) - Mobile Only */}
          {authenticated && (
             <div className="absolute -top-12 right-0 md:hidden z-50">
                <button 
                  onClick={onOpenProfile}
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                    {displayName[0].toUpperCase()}
                </button>
             </div>
          )}

          <div className="flex gap-0 pt-2 pb-2 pl-2 pr-12 relative min-h-[100px]">
             {/* Left Column connectors */}
             <div className="flex flex-col items-center pt-3 w-8 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-black shrink-0"></div>
                  <div className="w-px bg-gray-300 h-8 my-1"></div>
                  <div className="w-2 h-2 bg-black shrink-0"></div>
             </div>

             {/* Inputs */}
             <div className="flex-1 flex flex-col gap-2">
                 <input
                    ref={pickupInputRef}
                    className="w-full bg-gray-50 rounded-lg px-3 py-2 text-sm font-medium text-gray-900 focus:outline-none focus:ring-1 focus:ring-black/10 transition-all placeholder-gray-500"
                    placeholder="Pickup location"
                    value={pickup}
                    onChange={(e) => {
                        setPickup(e.target.value);
                        if(e.target.value==='') { setPickupCoords(null); onPickupChange?.('', undefined); }
                    }}
                    onKeyDown={(e) => e.key==='Enter' && !placesApiReady && handleManualGeocode(pickup, true)}
                 />
                 <input
                    ref={dropoffInputRef}
                     className="w-full bg-gray-50 rounded-lg px-3 py-2 text-sm font-medium text-gray-900 focus:outline-none focus:ring-1 focus:ring-black/10 transition-all placeholder-gray-500"
                    placeholder="Dropoff destination"
                    value={dropoff}
                    onChange={(e) => {
                        setDropoff(e.target.value);
                        if(e.target.value==='') { setDropoffCoords(null); onDropoffChange?.('', undefined); }
                    }}
                     onKeyDown={(e) => e.key==='Enter' && !placesApiReady && handleManualGeocode(dropoff, false)}
                 />
             </div>

             {/* Swap Button overlaps/floats or sits bottom right? */}
             <button
                onClick={handleSwap}
                className="absolute bottom-3 right-3 p-1.5 text-gray-400 hover:text-black transition-colors"
                title="Swap"
             >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
             </button>
             
             {/* Locate Button inside pickup? */}
             <button
                onClick={handleGetCurrentLocation}
                className="absolute top-4 right-3 p-1.5 text-gray-400 hover:text-blue-500 transition-colors"
                title="Current Location"
             >
                 {locating ? <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20z" opacity="0.3"/><path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/></svg> : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
             </button>

          </div>

          {/* Details & Submit Section */}
          {(showDetails || (pickup && dropoff)) && (
              <div className="px-3 pb-3 pt-0 animate-in slide-in-from-top-2">
                 {showDetails ? (
                     <div className="space-y-3 pt-2 border-t border-gray-100">
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <label className="text-[10px] uppercase font-bold text-gray-400">Time</label>
                                <input 
                                    type="datetime-local" 
                                    className="w-full bg-gray-100 border border-gray-200 rounded p-2 text-xs font-bold text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black" 
                                    value={departureTime} 
                                    onChange={e=>setDepartureTime(e.target.value)} 
                                />
                            </div>
                            <div className="flex-1">
                                <label className="text-[10px] uppercase font-bold text-gray-400">WeChat</label>
                                <input 
                                    className="w-full bg-gray-100 border border-gray-200 rounded p-2 text-xs font-bold text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black" 
                                    placeholder="ID" 
                                    value={wechatId} 
                                    onChange={e=>setWechatId(e.target.value)} 
                                />
                            </div>
                        </div>
                        <button onClick={handleSubmit} disabled={loading||!wechatId} className="w-full bg-black text-white py-3 rounded-lg font-bold text-sm shadow-lg hover:bg-gray-800 disabled:opacity-50">
                            {loading?'Processing...': authenticated?'Request Ride':'Connect Wallet'}
                        </button>
                     </div>
                 ) : (
                     <button onClick={()=>setShowDetails(true)} className="w-full bg-black text-white py-3 rounded-lg font-bold text-sm shadow-lg hover:bg-gray-800 mt-2">
                         Continue
                     </button>
                 )}
              </div>
          )}
        </div>
      </div>
    </>
  );
}

