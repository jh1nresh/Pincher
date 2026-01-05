'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CarpoolMatchCardProps {
  route: { pickup: string; dropoff: string };
  onMatchConfirmed: () => void;
  onCancel: () => void;
}

export function CarpoolMatchCard({ route, onMatchConfirmed, onCancel }: CarpoolMatchCardProps) {
  const [phase, setPhase] = useState<'searching' | 'found' | 'confirmed'>('searching');

  useEffect(() => {
    // Phase 1: Searching (2 seconds)
    const searchTimer = setTimeout(() => {
      setPhase('found');
    }, 2000);

    // Phase 2: Found → Confirmed (2 more seconds)
    const confirmTimer = setTimeout(() => {
      setPhase('confirmed');
    }, 4000);

    // Phase 3: Callback after showing success (1.5 more seconds)
    const doneTimer = setTimeout(() => {
      onMatchConfirmed();
    }, 5500);

    return () => {
      clearTimeout(searchTimer);
      clearTimeout(confirmTimer);
      clearTimeout(doneTimer);
    };
  }, [onMatchConfirmed]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-5 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">🚗</span>
          </div>
          <div>
            <h3 className="text-sm font-black text-gray-800">
              {phase === 'searching' && '🤖 AI Finding Carpool Partners...'}
              {phase === 'found' && '✓ Partners Found!'}
              {phase === 'confirmed' && '🎉 Carpool Confirmed!'}
            </h3>
            <p className="text-xs text-gray-500">{route.pickup} → {route.dropoff}</p>
          </div>
        </div>
        {phase === 'searching' && (
          <button 
            onClick={onCancel}
            className="text-xs text-gray-400 hover:text-gray-600 font-bold"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Content based on phase */}
      {phase === 'searching' && (
        <div className="text-center py-6">
          <div className="flex justify-center gap-2 mb-3">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>
          </div>
          <p className="text-sm text-gray-600 font-medium">Searching for riders on same route...</p>
        </div>
      )}

      {phase === 'found' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/60 rounded-xl p-4 border border-green-100"
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            {/* You */}
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-xl mb-1">👤</div>
              <div className="text-[10px] font-bold text-gray-600">You</div>
            </div>
            
            {/* Plus Sign */}
            <div className="text-2xl text-gray-300 font-bold">+</div>
            
            {/* Co-riders */}
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl mb-1">👨</div>
              <div className="text-[10px] font-bold text-gray-600">Alex</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl mb-1">👩</div>
              <div className="text-[10px] font-bold text-gray-600">Sarah</div>
            </div>
          </div>
          
          <div className="text-center text-sm font-bold text-green-600">
            ✓ 2 riders agreed to carpool
          </div>
        </motion.div>
      )}

      {phase === 'confirmed' && (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-green-100 border border-green-200 rounded-xl p-4 text-center"
        >
          <div className="text-3xl mb-2">🎉</div>
          <div className="text-lg font-black text-green-700">Carpool Match Success!</div>
          <div className="text-sm text-green-600 mt-1">3 riders sharing · Save $15.00 each</div>
        </motion.div>
      )}
    </div>
  );
}
