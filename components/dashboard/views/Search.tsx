'use client';

import React, { useState } from 'react';

interface SearchProps {
  onConfirm: (origin: string, destination: string, hasMatches: boolean) => void;
  onHost: () => void;
}

const Search: React.FC<SearchProps> = ({ onConfirm, onHost }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [activeTab, setActiveTab] = useState<'origin' | 'destination'>('origin');
  const [isSearching, setIsSearching] = useState(false);

  const hotSpots = [
    { name: 'Union Station', icon: 'train' },
    { name: 'Beverly Hills', icon: 'diamond' },
    { name: 'LAX Airport', icon: 'flight_takeoff' },
    { name: 'Hollywood', icon: 'movie' },
    { name: 'Crypto Arena', icon: 'sports_basketball' },
    { name: 'Santa Monica', icon: 'waves' }
  ];

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

  const handleSearch = () => {
    if (!origin || !destination) return;
    setIsSearching(true);
    setTimeout(() => {
      onConfirm(origin, destination, true);
    }, 2000);
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
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] animate-pulse">Scanning L2 Mesh Nodes for {origin}...</p>
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
          <p className="text-[8px] font-black text-slate-500 uppercase mb-1">Target Target</p>
          <p className="text-xs font-black text-white truncate px-2">{destination || 'Select Destination'}</p>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto w-full pr-1 scrollbar-hide">
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
                className={`h-32 border rounded-[2rem] flex flex-col items-center justify-center gap-3 transition-all relative overflow-hidden group ${
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
      </div>

      <div className="pt-8 w-full shrink-0">
        <button 
          disabled={!origin || !destination}
          onClick={handleSearch}
          className={`w-full py-8 rounded-4xl font-black text-base uppercase tracking-[0.4em] transition-all shadow-2xl ${origin && destination ? 'bg-white text-black hover:scale-[1.02] active:scale-95' : 'bg-white/5 text-slate-800 border border-white/5 cursor-not-allowed'}`}
        >
          Confirm Route
        </button>
      </div>
    </div>
  );
};

export default Search;
