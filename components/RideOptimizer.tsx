// Interactive RideOptimizer Component
'use client';

import { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react';
import dynamic from 'next/dynamic';
import { useWallets, usePrivy } from '@privy-io/react-auth';
import { ConnectWalletCard } from './ConnectWalletCard';
import { PaymentChallenge } from './PaymentChallenge';

// Dynamic import for Leaflet map (No SSR)
const RideMap = dynamic(() => import('./RideMap'), { 
    loading: () => <div className="h-[200px] w-full bg-gray-100 animate-pulse rounded-xl" />,
    ssr: false 
});

export interface Waypoint {
  name: string;
  id: string;
  lat?: number;  // Support dynamic coordinates
  lng?: number;
  latitude?: number;  // Alternative API format
  longitude?: number;
  identity?: {  // Mock Privy Identity
    name: string;
    trustScore: string;
    did: string;
  };
}

interface RideOptimizerProps {
  savings: string;
  originalFare: string;
  optimizedFare: string;
  waypoints: string[]; // Legacy
  structuredWaypoints?: Waypoint[]; // New structured data
  rationale?: string; // New AI Rationale
  flyToLocation?: { lat: number; lng: number; zoom?: number } | null;
  onPayment?: () => Promise<void> | void;
  recipientAddress?: string;
  onReorder?: (newOrder: string[]) => void;
}

// Hardcoded Coordinates for Demo
const COORDINATES: Record<string, { lat: number, lng: number }> = {
    'wp-1': { lat: 33.655, lng: -117.749 }, // Irvine Spectrum
    'wp-2': { lat: 33.729, lng: -117.793 }, // Tustin Marketplace
    'wp-3': { lat: 33.812, lng: -117.919 }  // Disneyland
};

export function RideOptimizer({ 
  savings, 
  originalFare, 
  optimizedFare, 
  waypoints, 
  structuredWaypoints,
  rationale,
  flyToLocation,
  onPayment,
  recipientAddress
}: RideOptimizerProps) {
  
  // Wallet Authentication
  const { wallets } = useWallets();
  const { authenticated } = usePrivy();
  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const [showPaymentChallenge, setShowPaymentChallenge] = useState(false);
  const [txHash, setTxHash] = useState('');
  
  // State for HITL Features
  const [currentWaypoints, setCurrentWaypoints] = useState<Waypoint[]>(
     structuredWaypoints || waypoints.map((w, i) => ({ 
        name: w, 
        id: `wp-${i+1}`, // Adjusted to match COORDINATES keys
        identity: { name: `User ${i+1}`, trustScore: '4.8', did: `did:privy:${i}` } 
     }))
  );
  
  const [currentFare, setCurrentFare] = useState(optimizedFare);
  const [showIdentity, setShowIdentity] = useState<string | null>(null); // ID of waypoint to show
  const [isRationaleOpen, setIsRationaleOpen] = useState(false);
  
  // Tracking State
  const [trackingMode, setTrackingMode] = useState(false);
  const [driverPos, setDriverPos] = useState<{lat: number, lng: number} | null>(null);
  // Vendor state removed - assuming AI selected best option

  // Initialize Driver at Start
  useEffect(() => {
      setDriverPos(COORDINATES['wp-1']);
  }, []);

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const newOrder = [...currentWaypoints];
    [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
    
    setCurrentWaypoints(newOrder);
    
    // HITL: Manual change triggers price update (Simulation)
    const oldPrice = parseFloat(currentFare);
    const penalty = 2.20; // Inefficiency penalty
    setCurrentFare((oldPrice + penalty).toFixed(2));
  };

  const handlePay = () => {
      // Check wallet connection first
      if (!authenticated || !wallets || wallets.length === 0) {
          setShowConnectWallet(true);
          return;
      }
      
      // Show payment challenge modal
      setShowPaymentChallenge(true);
  };
  
  const handleSignatureComplete = async (signature: string, transactionHash: string) => {
      setTxHash(transactionHash);
      setShowPaymentChallenge(false);
      
      try {
          // Call parent onPayment callback and WAIT for it (Real Transaction)
          if (onPayment) {
              await onPayment();
          }
          
          // Start driver simulation ONLY after payment confirmed
          setTrackingMode(true);
          startDriverSimulation();
      } catch (error) {
          console.error("Payment failed or rejected:", error);
          // Do not start simulation
      }
  };
  
  const handleCancelPayment = () => {
      setShowPaymentChallenge(false);
  };

  const startDriverSimulation = () => {
      // Move through all waypoints sequentially
      const validWaypoints = currentWaypoints.filter(wp => wp.lat && wp.lng);
      if (validWaypoints.length < 2) return;
      
      let currentSegment = 0;
      
      const moveToNextSegment = () => {
          if (currentSegment >= validWaypoints.length - 1) {
              return; // Reached final destination
          }
          
          const start = { lat: validWaypoints[currentSegment].lat!, lng: validWaypoints[currentSegment].lng! };
          const end = { lat: validWaypoints[currentSegment + 1].lat!, lng: validWaypoints[currentSegment + 1].lng! };
          let progress = 0;
          
          const interval = setInterval(() => {
              progress += 0.02; // Slower for smoother animation
              
              if (progress >= 1) {
                  clearInterval(interval);
                  currentSegment++;
                  // Move to next segment after a short pause
                  setTimeout(moveToNextSegment, 1000);
                  return;
              }
              
              const newLat = start.lat + (end.lat - start.lat) * progress;
              const newLng = start.lng + (end.lng - start.lng) * progress;
              setDriverPos({ lat: newLat, lng: newLng });
          }, 100);
      };
      
      // Start with first waypoint position
      setDriverPos({ lat: validWaypoints[0].lat!, lng: validWaypoints[0].lng! });
      setTimeout(moveToNextSegment, 500);
  };

  const mapWaypoints = currentWaypoints
    .filter(wp => wp.lat !== undefined && wp.lng !== undefined)
    .map(wp => ({
      name: wp.name,
      id: wp.id,
      lat: wp.lat!,
      lng: wp.lng!
    }));

  return (
    <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 overflow-hidden font-sans">
      
      {/* Map Section */}
      <div className="relative">
        <RideMap 
            waypoints={mapWaypoints} 
            driverPosition={driverPos}
            isTracking={trackingMode}
            flyToLocation={flyToLocation}
        />
        {!trackingMode && (
             <div className="absolute top-4 right-4 z-400">
                  <div className="bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg flex items-center gap-1.5 border border-white/20">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      Service provided by Uber
                  </div>
             </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">
          <div className="flex justify-between items-start mb-4 md:mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-black">Ride Optimizer AI</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] md:text-xs font-bold text-gray-500">
                    {trackingMode ? 'DRIVER TRACKING ACTIVE' : 'OPTIMIZED ROUTE FOUND'}
                </span>
              </div>
            </div>
            {!trackingMode && (
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200 shadow-sm">
                  Save ${savings}
                </div>
            )}
            {trackingMode && (
                <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-200 shadow-sm animate-pulse">
                  Funds Locked
                </div>
            )}
          </div>

          {!trackingMode && (
             <>
                  <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                         <span className="text-black font-medium">Original Uber Fare</span>
                         <span className="line-through text-gray-400">${originalFare}</span>
                      </div>
                      <div className="flex justify-between text-sm font-bold">
                         <span className="text-black">Optimized Carpool</span>
                         <div className="flex flex-col items-end">
                             <span className={`${currentFare !== optimizedFare ? 'text-orange-600' : 'text-green-600'} transition-colors duration-500`}>
                                ${currentFare}
                             </span>
                             {currentFare !== optimizedFare && <span className="text-[10px] text-orange-500 font-normal">(HITL Modified)</span>}
                         </div>
                      </div>
                  </div>

                  {/* HITL Waypoint Editor */}
                  <div className="mt-4 pt-3 border-t border-gray-100 mb-4">
                     <div className="flex justify-between items-center mb-2">
                         <p className="text-xs font-bold text-black uppercase">Refined Waypoints (HITL)</p>
                         <span className="text-[10px] text-gray-400">Click name for ID</span>
                     </div>
                     
                     <div className="flex flex-col gap-2">
                         {currentWaypoints.map((wp, idx) => (
                             <div key={wp.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors">
                                  <div className="flex items-center gap-2 relative">
                                      <div className={`w-2 h-2 rounded-full ${idx === 0 || idx === currentWaypoints.length - 1 ? 'bg-black' : 'bg-gray-400'}`}></div>
                                      
                                      {/* Identity Popover */}
                                      <div className="relative flex items-center gap-2">
                                          <button 
                                             onClick={() => setShowIdentity(showIdentity === wp.id ? null : wp.id)}
                                             className="text-xs font-bold text-gray-700 hover:text-blue-600 transition-colors text-left"
                                          >
                                              {wp.name}
                                          </button>
                                          
                                          {/* Verified Badge */}
                                          {idx > 0 && idx < currentWaypoints.length - 1 && (
                                            <span className="inline-flex items-center gap-0.5 bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-[9px] font-bold border border-green-200">
                                              ✓ {wp.name.includes('Gabriel') || wp.name.includes('SGV') ? '626' : 'OC'} Resident
                                            </span>
                                          )}
                                          
                                          {/* Popover Content */}
                                          {showIdentity === wp.id && wp.identity && (
                                              <div className="absolute top-6 left-0 z-50 bg-black text-white p-3 rounded-xl shadow-xl w-48 text-[10px] animate-in fade-in zoom-in duration-200 ring-1 ring-white/20">
                                                  <div className="font-bold text-yellow-400 text-xs mb-1">{wp.identity.name}</div>
                                                  <div className="grid grid-cols-2 gap-y-1 opacity-90">
                                                      <span>Trust:</span> <span className="text-right font-mono">{wp.identity.trustScore}★</span>
                                                      <span>DID:</span> <span className="text-right font-mono truncate pl-2">{wp.identity.did}</span>
                                                  </div>
                                                  <div className="mt-2 pt-2 border-t border-white/20 text-center text-gray-400 text-[9px]">
                                                      Verified Community Member
                                                  </div>
                                              </div>
                                          )}
                                      </div>
                                  </div>

                                 {/* HITL Controls */}
                                 {idx > 0 && idx < currentWaypoints.length - 1 && (
                                     <button 
                                        onClick={() => handleMoveUp(idx)}
                                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white rounded shadow-sm text-[10px] font-bold text-gray-500 transition-all active:scale-95"
                                        title="Move Up (Recalc Price)"
                                     >
                                         ▲
                                     </button>
                                 )}
                             </div>
                         ))}
                     </div>
                  </div>
                  
                  {/* AI Rationale Accordion */}
                  <div className="mb-6">
                      <button 
                        onClick={() => setIsRationaleOpen(!isRationaleOpen)}
                        className="flex items-center gap-1 text-[10px] font-bold text-gray-500 hover:text-black uppercase tracking-wider mb-2"
                      >
                          <span>☕ AI Decision Basis</span>
                          <span className={`transition-transform duration-300 ${isRationaleOpen ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${isRationaleOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 text-[11px] text-blue-800 leading-relaxed shadow-inner">
                              <p className="mb-1 font-bold text-blue-900 border-b border-blue-200 pb-1">Agent Reasoning Log:</p>
                              {rationale || "System optimized for cost/time balance."}
                              <p className="mt-1 text-blue-600/70 italic">&gt; Comparison: Uber ($45) vs Lyft ($52). Selected Uber due to lower surge multiplier (1.0x vs 1.2x).</p>
                          </div>
                      </div>
                  </div>

                  <button 
                    onClick={handlePay}
                    className="w-full bg-black text-white py-4 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] relative overflow-hidden group"
                  >
                     <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                     <span className="relative z-10 flex items-center justify-center gap-2">
                        <span>Pay ${currentFare} with x402</span>
                        <span className="bg-gray-800 px-1.5 py-0.5 rounded text-[10px] border border-gray-700">USDC</span>
                     </span>
                  </button>
             </>
          )}

          {trackingMode && (
              <div className="mt-2 space-y-3">
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-bold text-black uppercase">Ride Status</span>
                          <span className="text-xs font-mono text-green-600">CONFIRMED</span>
                      </div>
                      <div className="space-y-2">
                          <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-lg">👨‍✈️</div>
                              <div>
                                  <div className="text-xs font-bold text-black">Driver: Michael</div>
                                  <div className="text-[10px] text-gray-500">Tesla Model 3 • 5★</div>
                              </div>
                          </div>
                          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-black animate-progress-indeterminate"></div>
                          </div>
                          <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                              <span>Connecting to Uber Sandbox...</span>
                              <span>Arriving in 4m</span>
                          </div>
                      </div>
                  </div>
              </div>
          )}
      </div>
      
      {/* Connect Wallet Modal */}
      {showConnectWallet && <ConnectWalletCard />}
      
      {/* Payment Challenge Modal */}
      {showPaymentChallenge && (
        <PaymentChallenge
          rideId={`ride-${Date.now()}`}
          amount={currentFare}
          recipientAddress={recipientAddress || '0x...'}
          onSignatureComplete={handleSignatureComplete}
          onCancel={handleCancelPayment}
        />
      )}
    </div>
  );
}
