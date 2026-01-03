'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

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

// Southern California Hotzone Definitions
export const HOTZONES: Hotzone[] = [
  {
    id: 'lax',
    name: 'LAX',
    displayName: 'LAX Airport',
    coordinates: { lat: 33.9425, lng: -118.4080 }, // LAX official coordinates
    color: 'bg-blue-500',
    icon: '', // Removed emoji
    backgroundImage: '/hotzones/lax.png',
    virtualPickup: 'Terminal Loop Pickup Area'
  },
  {
    id: 'sgv',
    name: 'SGV',
    displayName: 'San Gabriel Valley',
    coordinates: { lat: 34.0333, lng: -118.0370 }, // SGV center coordinates
    color: 'bg-green-500',
    icon: '', // Removed emoji
    backgroundImage: '/hotzones/sgv.png',
    virtualPickup: '10 Freeway @ Valley Blvd'
  },
  {
    id: 'irvine',
    name: 'Irvine',
    displayName: 'Irvine Spectrum',
    coordinates: { lat: 33.6503, lng: -117.7436 }, // Irvine Spectrum Center
    color: 'bg-purple-500',
    icon: '', // Removed emoji
    backgroundImage: '/hotzones/irvine.png',
    virtualPickup: '405 Freeway @ Spectrum Center'
  },
  {
    id: 'disneyland',
    name: 'Disneyland',
    displayName: 'Disneyland Resort',
    coordinates: { lat: 33.8125, lng: -117.9190 }, // Disneyland official coordinates
    color: 'bg-pink-500',
    icon: '', // Removed emoji
    backgroundImage: '/hotzones/disneyland.png',
    virtualPickup: 'Magic Way Pickup Zone'
  },
  {
    id: 'dtla',
    name: 'DTLA',
    displayName: 'Downtown LA',
    coordinates: { lat: 34.0562, lng: -118.2365 }, // Union Station coordinates
    color: 'bg-yellow-500',
    icon: '', // Removed emoji
    backgroundImage: '/hotzones/dtla.png',
    virtualPickup: 'Union Station Plaza'
  }
];

interface LocationInputProps {
  onSubmit: (start: string, end: string) => void;
  onHotzoneSelect?: (hotzone: Hotzone, type: 'pickup' | 'dropoff') => void;
  disabled?: boolean;
}

export function LocationInput({ onSubmit, onHotzoneSelect, disabled }: LocationInputProps) {
  const [selectedPickup, setSelectedPickup] = useState<Hotzone | null>(null);
  const [selectedDropoff, setSelectedDropoff] = useState<Hotzone | null>(null);

  const handlePickupSelect = (hotzone: Hotzone) => {
    setSelectedPickup(hotzone);
    onHotzoneSelect?.(hotzone, 'pickup');
  };

  const handleDropoffSelect = (hotzone: Hotzone) => {
    setSelectedDropoff(hotzone);
    onHotzoneSelect?.(hotzone, 'dropoff');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPickup && selectedDropoff) {
      onSubmit(selectedPickup.displayName, selectedDropoff.displayName);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md p-4 md:p-6 rounded-3xl shadow-lg border border-gray-100">
      <h3 className="text-sm md:text-base font-black text-black uppercase tracking-wide mb-4">Select Hotzones</h3>
      
      <div className="space-y-4 md:space-y-6">
        {/* Pickup Location */}
        <div>
          <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
            📍 Pickup Location
          </label>
          <div className="grid grid-cols-2 gap-1.5 md:gap-2">
            {HOTZONES.map((hotzone) => (
              <motion.button
                key={`pickup-${hotzone.id}`}
                type="button"
                onClick={() => handlePickupSelect(hotzone)}
                disabled={disabled}
                whileHover={{ scale: disabled ? 1 : 1.05 }}
                whileTap={{ scale: disabled ? 1 : 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`
                  relative p-0 rounded-xl font-bold text-xs transition-all overflow-hidden h-20 md:h-24
                  ${selectedPickup?.id === hotzone.id 
                    ? 'shadow-lg ring-2 ring-offset-2 ring-black' 
                    : 'hover:shadow-md'
                  }
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${hotzone.backgroundImage})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                {/* Text Content */}
                <div className="relative z-10 h-full flex items-end p-3">
                  <div className="text-white font-black text-sm drop-shadow-lg">{hotzone.name}</div>
                </div>
              </motion.button>
            ))}
          </div>
          {selectedPickup && (
            <div className="mt-2 text-[10px] text-gray-500 font-bold">
              Virtual pickup: {selectedPickup.virtualPickup}
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="relative flex justify-center">
          <div className="absolute w-[2px] h-full bg-gray-100 -z-10 top-0 bottom-0"></div>
          <div className="bg-gray-200 text-gray-500 rounded-full p-1 text-[10px]">▼</div>
        </div>

        {/* Dropoff Location */}
        <div>
          <label className="block text-[10px] font-bold text-gray-400 uppercase mb-2">
            🎯 Dropoff Destination
          </label>
          <div className="grid grid-cols-2 gap-1.5 md:gap-2">
            {HOTZONES.map((hotzone) => (
              <motion.button
                key={`dropoff-${hotzone.id}`}
                type="button"
                onClick={() => handleDropoffSelect(hotzone)}
                disabled={disabled || selectedPickup?.id === hotzone.id}
                whileHover={{ scale: (disabled || selectedPickup?.id === hotzone.id) ? 1 : 1.05 }}
                whileTap={{ scale: (disabled || selectedPickup?.id === hotzone.id) ? 1 : 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`
                  relative p-0 rounded-xl font-bold text-xs transition-all overflow-hidden h-20 md:h-24
                  ${selectedDropoff?.id === hotzone.id 
                    ? 'shadow-lg ring-2 ring-offset-2 ring-black' 
                    : 'hover:shadow-md'
                  }
                  disabled:opacity-30 disabled:cursor-not-allowed
                `}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${hotzone.backgroundImage})` }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                {/* Text Content */}
                <div className="relative z-10 h-full flex items-end p-3">
                  <div className="text-white font-black text-sm drop-shadow-lg">{hotzone.name}</div>
                </div>
              </motion.button>
            ))}
          </div>
          {selectedDropoff && (
            <div className="mt-2 text-[10px] text-gray-500 font-bold">
              Virtual dropoff: {selectedDropoff.virtualPickup}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={disabled || !selectedPickup || !selectedDropoff}
          className="w-full bg-black text-white py-4 rounded-xl font-bold mt-4 shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {disabled ? 'Processing...' : 'Find Dynamic Path'}
        </button>
      </div>
    </form>
  );
}
