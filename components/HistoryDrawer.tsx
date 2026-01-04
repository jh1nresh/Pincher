'use client';

import { useState, useEffect } from 'react';
import { getUserRides, RideHistoryItem } from '@/app/actions/getRides';

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  walletAddress: string;
}

export function HistoryDrawer({ isOpen, onClose, walletAddress }: HistoryDrawerProps) {
  const [rides, setRides] = useState<RideHistoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (isOpen && walletAddress) {
      setLoading(true);
      getUserRides(walletAddress)
        .then(res => {
          if (res.success && res.data) {
            setRides(res.data);
          }
        })
        .finally(() => setLoading(false));
    }
  }, [isOpen, walletAddress]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer Panel */}
      <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h2 className="text-xl font-black text-black">Ride History</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {loading && (
              <div className="flex justify-center py-10">
                <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {!loading && rides.length === 0 && (
              <div className="text-center py-10 text-gray-400">
                <p>No rides found.</p>
              </div>
            )}

            {rides.map((ride) => (
              <div key={ride.id} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase">
                      {new Date(ride.created_at).toLocaleDateString()} • {new Date(ride.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                    <h3 className="text-sm font-black text-black mt-1">
                      {ride.pickup_address?.split(',')[0]} → {ride.dropoff_address?.split(',')[0]}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black text-black">${ride.fare_amount}</div>
                    <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                      COMPLETED
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <a 
                    href={`https://sepolia.basescan.org/tx/${ride.tx_hash}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-bold"
                  >
                    <span>Tx Hash</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  
                  {/* Map Link (Google Maps Direction) */}
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&origin=${ride.pickup_lat},${ride.pickup_lng}&destination=${ride.dropoff_lat},${ride.dropoff_lng}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="text-xs text-gray-500 hover:text-black font-medium"
                  >
                    View Route ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
