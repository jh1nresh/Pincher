'use client';

import React, { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { supabase } from '@/lib/supabase';

interface SearchProps {
  onConfirm: (origin: string, destination: string, matches: any[]) => void;
  onHost: (tripId: string) => void;
}

interface TripRoom {
  id: string;
  origin: string;
  destination: string;
  departure_time: string;
  status: string;
}

const Search: React.FC<SearchProps> = ({ onConfirm, onHost }) => {
  const { user } = usePrivy();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [activeTab, setActiveTab] = useState<'origin' | 'destination'>('origin');
  const [isSearching, setIsSearching] = useState(false);
  const [availableTrips, setAvailableTrips] = useState<TripRoom[]>([]);
  
  const [vehicleInfo, setVehicleInfo] = useState({ plate: '', model: '', color: '' });
  const [showHostForm, setShowHostForm] = useState(false);

  // Hot spots in SoCal area
  const hotSpots = [
    { name: 'Union Station', icon: 'train' },
    { name: 'Beverly Hills', icon: 'diamond' },
    { name: 'LAX Airport', icon: 'flight_takeoff' },
    { name: 'Hollywood', icon: 'movie' },
    { name: 'Crypto Arena', icon: 'sports_basketball' },
    { name: 'Santa Monica', icon: 'waves' }
  ];

  // Fetch available trip rooms on mount
  useEffect(() => {
    const fetchTrips = async () => {
      const { data } = await supabase
        .from('trip_rooms')
        .select('*')
        .eq('status', 'open')
        .order('created_at', { ascending: false })
        .limit(20);
      
      if (data) {
        setAvailableTrips(data);
      }
    };
    
    fetchTrips();
  }, []);

  const handleSpotClick = (name: string) => {
    if (activeTab === 'origin') {
      if (name === destination) {
        setDestination('');
      }
      setOrigin(name);
      setActiveTab('destination');
    } else {
      if (name === origin) return;
      setDestination(name);
    }
  };

  const handleSearch = async () => {
    if (!origin || !destination) return;
    setIsSearching(true);

    // Check if there are matching trips
    const { data: matches } = await supabase
      .from('trip_rooms')
      .select('*')
      .eq('origin', origin)
      .eq('destination', destination)
      .eq('status', 'open')
      .limit(5);

    // Small delay for UX
    setTimeout(() => {
      onConfirm(origin, destination, matches || []);
    }, 1500);
  };

  const handleHostTrip = async () => {
    if (!origin || !destination || !user) return;
    
    if (!showHostForm) {
      setShowHostForm(true);
      return;
    }

    if (!vehicleInfo.plate || !vehicleInfo.model) {
      alert('Please enter vehicle details');
      return;
    }

    setIsSearching(true);

    // Create a new trip room as host
    const { data, error } = await supabase.from('trip_rooms').insert({
      creator_id: user.id,
      origin: origin,
      destination: destination,
      departure_time: new Date(Date.now() + 30 * 60000).toISOString(),
      status: 'open',
      min_passengers: 2,
      max_passengers: 4,
      license_plate: vehicleInfo.plate,
      vehicle_type: vehicleInfo.model,
      vehicle_color: vehicleInfo.color
    }).select().single();

    if (error) {
      console.error('Failed to create trip room:', error);
      setIsSearching(false);
      return;
    }

    // Add host as driver
    await supabase.from('trip_passengers').insert({
      trip_id: data.id,
      user_id: user.id,
      user_name: 'Driver',
      is_driver: true,
      status: 'joined',
      joined_at: new Date().toISOString()
    });

    console.log('Created trip room:', data);
    onHost(data.id);
  };

  if (isSearching) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-10 h-full bg-transparent page-transition">
        <div className="relative mb-12">
          <div className="size-40 border-2 border-action-green/5 border-t-action-green rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="material-symbols-outlined text-action-green animate-pulse text-5xl">smart_toy</span>
          </div>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-white uppercase italic tracking-[0.2em] font-display">Smart Mobility Engine</h2>
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] animate-pulse">Scanning for {origin} → {destination}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center px-6 py-8 h-full max-w-xl mx-auto w-full page-transition">
      <div className="w-full flex justify-between items-end mb-10 shrink-0">
        <div className="space-y-1">
          <p className="text-[10px] font-black text-action-green uppercase tracking-[0.4em]">Smart Mobility</p>
          <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter font-display">Protocol Route</h1>
        </div>
        {availableTrips.length > 0 && (
          <div className="text-right">
            <p className="text-[9px] font-black text-slate-500 uppercase">{availableTrips.length} Active Trips</p>
          </div>
        )}
      </div>

      <div className="w-full glass-panel rounded-4xl p-3 flex items-stretch gap-2 mb-10 shrink-0 border-white/5 relative shadow-2xl">
        <button 
          onClick={() => setActiveTab('origin')}
          className={`flex-1 py-6 rounded-3xl transition-all flex flex-col items-center relative z-10 ${activeTab === 'origin' ? 'bg-white/10 ring-1 ring-white/20 shadow-xl' : 'opacity-40 hover:opacity-60'}`}
        >
          <p className="text-[8px] font-black text-slate-500 uppercase mb-1">Pickup Node</p>
          <p className="text-xs font-black text-white truncate px-2">{origin || 'Select Origin'}</p>
        </button>
        <div className="flex items-center text-action-green opacity-40"><span className="material-symbols-outlined text-sm">double_arrow</span></div>
        <button 
          onClick={() => setActiveTab('destination')}
          className={`flex-1 py-6 rounded-3xl transition-all flex flex-col items-center relative z-10 ${activeTab === 'destination' ? 'bg-white/10 ring-1 ring-white/20 shadow-xl' : 'opacity-40 hover:opacity-60'}`}
        >
          <p className="text-[8px] font-black text-slate-500 uppercase mb-1">Drop Target</p>
          <p className="text-xs font-black text-white truncate px-2">{destination || 'Select Destination'}</p>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto w-full pr-1 scrollbar-hide">
        {showHostForm ? (
          <div className="space-y-4 p-1">
             <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-2 px-2">Vehicle Configuration</p>
             <input 
               placeholder="LICENSE PLATE (e.g. 8XYZ123)" 
               className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm text-white placeholder:text-slate-600 outline-none focus:border-action-green/50 transition-colors uppercase font-mono"
               value={vehicleInfo.plate}
               onChange={e => setVehicleInfo({...vehicleInfo, plate: e.target.value.toUpperCase()})}
             />
             <input 
               placeholder="VEHICLE MODEL (e.g. Tesla Model 3)" 
               className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm text-white placeholder:text-slate-600 outline-none focus:border-action-green/50 transition-colors"
               value={vehicleInfo.model}
               onChange={e => setVehicleInfo({...vehicleInfo, model: e.target.value})}
             />
              <input 
               placeholder="COLOR (e.g. White)" 
               className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-sm text-white placeholder:text-slate-600 outline-none focus:border-action-green/50 transition-colors"
               value={vehicleInfo.color}
               onChange={e => setVehicleInfo({...vehicleInfo, color: e.target.value})}
             />
             <button onClick={() => setShowHostForm(false)} className="text-xs text-slate-500 uppercase tracking-widest hover:text-white mt-4 w-full text-center">Back to Selection</button>
          </div>
        ) : (
          <>
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-5 px-2">Available Smart Hubs</p>
            <div className="grid grid-cols-2 gap-4 pb-8">
              {hotSpots.map((spot) => {
                const isSelectedAsOrigin = origin === spot.name;
                const isSelectedAsDest = destination === spot.name;
                const isDisabled = (activeTab === 'destination' && isSelectedAsOrigin) || (activeTab === 'origin' && isSelectedAsDest);

                return (
                  <button 
                    key={spot.name}
                    disabled={isDisabled}
                    onClick={() => handleSpotClick(spot.name)}
                    className={`h-32 border rounded-4xl flex flex-col items-center justify-center gap-3 transition-all relative overflow-hidden group ${
                      (isSelectedAsOrigin || isSelectedAsDest)
                      ? 'bg-action-green/10 border-action-green/50 shadow-[0_0_30px_rgba(0,255,0,0.1)]' 
                      : isDisabled ? 'opacity-10 grayscale border-white/5 bg-transparent cursor-not-allowed' : 'bg-white/3 border-white/5 hover:bg-white/8 hover:border-white/20'
                    }`}
                  >
                    <div className={`size-12 rounded-2xl flex items-center justify-center transition-all ${
                       (isSelectedAsOrigin || isSelectedAsDest) ? 'bg-action-green text-black' : 'bg-white/5 text-slate-400 group-hover:text-white'
                    }`}>
                      <span className="material-symbols-outlined text-2xl">{spot.icon}</span>
                    </div>
                    <p className="text-[10px] font-black text-white uppercase tracking-widest">{spot.name}</p>
                    
                    {(isSelectedAsOrigin || isSelectedAsDest) && (
                      <div className={`absolute top-4 right-4 size-2 rounded-full animate-pulse ${isSelectedAsOrigin ? 'bg-action-green shadow-[0_0_8px_#00FF00]' : 'bg-blue-400 shadow-[0_0_8px_#60a5fa]'}`}></div>
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      <div className="pt-8 w-full shrink-0 space-y-3">
        {!showHostForm && (
          <button 
            disabled={!origin || !destination}
            onClick={handleSearch}
            className={`w-full py-6 rounded-4xl font-black text-base uppercase tracking-[0.3em] transition-all shadow-2xl ${origin && destination ? 'bg-white text-black hover:scale-[1.02] active:scale-95' : 'bg-white/5 text-slate-800 border border-white/5 cursor-not-allowed'}`}
          >
            Find Rides
          </button>
        )}
        <button 
          disabled={!origin || !destination}
          onClick={handleHostTrip}
          className={`w-full py-5 rounded-3xl font-black text-sm uppercase tracking-[0.2em] transition-all ${origin && destination ? 'bg-action-green/10 border border-action-green/30 text-action-green hover:bg-action-green/20' : 'bg-white/3 text-slate-700 border border-white/5 cursor-not-allowed'}`}
        >
          {showHostForm ? 'Confirm & Host' : 'Host a Ride'}
        </button>
      </div>
    </div>
  );
};

export default Search;
