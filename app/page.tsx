'use client';

import { useState, useEffect } from 'react';
import { LocationInput, Hotzone } from '@/components/LocationInput';
import { RideOptimizer, Waypoint } from '@/components/RideOptimizer';
import { MatchCounter } from '@/components/MatchCounter';
import { MatchingWithNeighbors } from '@/components/MatchingWithNeighbors';
import { CommunityAuthCard } from '@/components/CommunityAuthCard';
import { BackgroundBeams } from '@/components/BackgroundBeams';
import { WalletDisplay } from '@/components/WalletDisplay';
import { matchNodes, MatchResult } from '@/lib/nodes/matcher';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { parseEther, createWalletClient, custom } from 'viem';
import { baseSepolia } from 'viem/chains';

export default function HomePage() {
  // Generative UI State
  const [ui, setUi] = useState<React.ReactNode>(null);
  const [matchCounter, setMatchCounter] = useState<React.ReactNode>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingMatch, setPendingMatch] = useState<MatchResult | null>(null);
  
  // Hotzone & Map State
  const [selectedPickup, setSelectedPickup] = useState<Hotzone | null>(null);
  const [selectedDropoff, setSelectedDropoff] = useState<Hotzone | null>(null);
  const [mapFlyTo, setMapFlyTo] = useState<{ lat: number; lng: number; zoom?: number } | null>(null);
  
  // Privy Hooks
  const { user, ready, authenticated, login } = usePrivy();
  const { wallets } = useWallets();

  // Simulation Logs
  const [logs, setLogs] = useState<React.ReactNode[]>([]);
  const [step, setStep] = useState(0);

  const addLog = (msg: React.ReactNode) => setLogs(prev => [
      ...prev, 
      <div key={Date.now() + Math.random()}>
          <span className="text-gray-400">[{new Date().toLocaleTimeString()}]</span> {msg}
      </div>
  ]);
  
  // Force Login on Load
  useEffect(() => {
    if (ready && !authenticated) {
        // Automatically show login modal or just rely on the full-screen blocker
    }
  }, [ready, authenticated, login]);

  // Auto-resume flow after Privy login
  useEffect(() => {
    if (user && pendingMatch) {
      addLog("✅ Login successful! Resuming simulation flow...");
      const { waypoints, savings, originalFare, optimizedFare, rationale } = pendingMatch;
      const start = waypoints[0]?.name || 'Unknown';
      const end = waypoints[waypoints.length - 1]?.name || 'Unknown';
      renderRideOptimizer(pendingMatch, start, end);
      setPendingMatch(null); // Clear pending match
    }
  }, [user, pendingMatch]);
  
  const handleHotzoneSelect = (hotzone: Hotzone, type: 'pickup' | 'dropoff') => {
    if (type === 'pickup') {
      setSelectedPickup(hotzone);
    } else {
      setSelectedDropoff(hotzone);
    }
    // Fly map to selected hotzone
    setMapFlyTo({ lat: hotzone.coordinates.lat, lng: hotzone.coordinates.lng, zoom: 12 });
    addLog(`Selected ${type}: ${hotzone.displayName} (${hotzone.virtualPickup})`);
  };

  const handleLocationSubmit = async (start: string, end: string) => {
    setLogs([]);
    setStep(1);
    setUi(null);
    setMatchCounter(null);
    setShowConfirmation(false);
    addLog("Initializing x402 v2 MCP Client...");

    // Step 1: Request Fare (Virtual)
    setTimeout(async () => {
        addLog(`Requesting Ride: ${start} -> ${end}`);
        addLog("Calling MCP Tool: get_uber_fare...");
        
        // Simulating 402 Challenge
        addLog("⚠️ Received HTTP 402 Payment Required");
        addLog("x402 Header: eyJhbW91bnQiOiI1MDAwMCIsInRva2VuIjoiV1JBUFBFRF9VU0RDIiwicmVjaXBpZW50IjoiMHg4Ny4uIn0=");
        
        // Agent Logic Logs
        setTimeout(async () => {
            addLog("🤖 Agent Reasoning: Fetching Real-time Vendor Data...");
            addLog("📊 Comparison: Uber ($45.00, 1.0x) vs Lyft ($52.12, 1.2x Surge)");
            
            setStep(2);
            

            // Call Matcher Node
            const matchResult = await matchNodes(start, end);
            
            // Show MatchCounter
            const neighborCount = Math.floor(Math.random() * 4) + 1; // 1-5 neighbors
            setMatchCounter(
              <MatchCounter 
                neighborCount={neighborCount}
                savings={matchResult.savings}
                route={`${start} → ${end}`}
              />
            );

            setTimeout(() => {
                // Step 3: Visual Slowdown - Matching
                addLog("Matching with nearby carpool neighbors...");
                setUi(<MatchingWithNeighbors />);

                setTimeout(() => {
                    // Step 4: Auth Check - Value-First Approach
                    setPendingMatch(matchResult); // Store for auto-resume after login
                    
                    if (!user) {
                        addLog("⚠️ Authentication required to proceed. Showing CommunityAuthCard...");
                        setUi(
                            <CommunityAuthCard
                                savings={matchResult.savings}
                                neighborCount={neighborCount}
                                route={`${start} → ${end}`}
                            />
                        );
                    } else {
                        // Authenticated: Show payment directly
                        addLog("✓ User authenticated. Rendering RideOptimizer Card with HITL Controls...");
                        renderRideOptimizer(matchResult, start, end);
                    }
                }, 2000);
            }, 1000);
        }, 500);
    }, 1000);
  };

  // Helper function to render RideOptimizer (used for both auth flows)
  const renderRideOptimizer = (matchResult: MatchResult, start: string, end: string) => {
    const handlePayment = async () => {
        addLog("👆 User clicked 'Pay with x402'");
        
        // Prioritize Privy Embedded Wallet
        const wallet = wallets.find(w => w.walletClientType === 'privy') || wallets[0];
        
        if (!wallet) {
            addLog("❌ No active wallet found. Please connect via Onboarding first.");
        } else {
            // Switch to Base Sepolia if needed
            const chainId = '84532'; // Base Sepolia
            if (wallet.chainId !== `caip154:eip155:${chainId}`) {
                 try {
                     await wallet.switchChain(Number(chainId));
                 } catch (e) {
                      addLog(`⚠️ Failed to switch chain: ${e}`);
                 }
            }

            addLog("🔐 Requesting Transaction Signature on Base Sepolia (84532)...");
            addLog(`💱 Converting Quote ($${matchResult.optimizedFare}) to ETH...`);
            
            try {
                const provider = await wallet.getEthereumProvider();
                const viemWalletClient = createWalletClient({
                  chain: baseSepolia,
                  transport: custom(provider)
                });

                // @ts-expect-error - Privy provider types mismatch
                const txHash = await viemWalletClient.sendTransaction({
                    account: wallet.address as `0x${string}`,
                    to: '0x32eaca925bd351d5af34e10d944c20772ae8a25c' as `0x${string}`,
                    value: parseEther('0.0001') // Micro-payment for Demo (Display shows ~$33)
                });

                addLog(
                    <span>
                        ✅ Transaction Sent! Hash:{' '}
                        <a 
                            href={`https://sepolia.basescan.org/tx/${txHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline hover:text-blue-800 font-bold"
                        >
                            View on BaseScan ↗
                        </a>
                    </span>
                );
            } catch (error: any) {
                 addLog(<span className="text-red-500">❌ Transaction Rejected: {error.message}</span>);
                 return; // Stop if rejected
            }
        }

        addLog("HITL: User Approval Signal Received.");
        addLog("Funds Locked in Escrow Vault.");
        addLog("Ride Dispatched! Driver [HailingAgent] arriving in 5 mins.");
        addLog(`CALLING UBER SANDBOX API with Waypoints: ${JSON.stringify(matchResult.waypoints.map(w => w.name))}`);
        setStep(4);
    };
    
    setUi(
        <RideOptimizer
            savings={matchResult.savings}
            originalFare={matchResult.originalFare}
            optimizedFare={matchResult.optimizedFare}
            waypoints={[]} // Legacy
            structuredWaypoints={matchResult.waypoints}
             rationale={matchResult.rationale}
            onPayment={handlePayment}
            flyToLocation={mapFlyTo}
        />
    );
  };

  // 🔒 Login Guard - Render login prompt if not authenticated
  if (ready && !authenticated) {
    return (
        <div className="relative min-h-screen flex items-center justify-center font-sans overflow-hidden px-4 md:px-0">
            {/* Bright Background */}
            <BackgroundBeams />
            
            <div className="z-10 w-full max-w-md animate-in fade-in zoom-in duration-500">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-100 text-center mx-auto">
                    
                    {/* Logo Area */}
                    <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-2 flex items-center justify-center">
                         <img src="/pincher-v1.5.png" alt="Pincher Logo" className="w-full h-full object-contain" />
                    </div>

                    {/* Tagline */}
                    <p className="text-gray-500 mb-6 md:mb-8 font-medium text-base md:text-lg">
                        Share Rides. Smart Fares.
                    </p>

                    <button
                        onClick={login}
                        className="w-full bg-black text-white text-base md:text-lg font-bold py-3.5 md:py-4 px-6 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
                    >
                        <span>Sign up / Log in</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                    
                    <div className="mt-6 md:mt-8 text-xs text-gray-400 font-medium">
                        © 2026 Pincher Inc.
                    </div>
                </div>
            </div>
        </div>
    );
  }

  // Main UI (Only rendered if authenticated)
  return (
    <div className="relative min-h-screen p-4 md:p-8 font-sans pb-20 md:pb-8">
      {/* Background Effects - Always persistent */}
      <BackgroundBeams />
      
      {/* Wallet Display - Mobile Optimized Position */}
      <div className="absolute top-4 right-4 md:right-8 z-50">
        <WalletDisplay />
      </div>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 relative z-10 pt-16 md:pt-0">
        
        {/* Left: Control & Logs */}
        <div className="space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-3xl font-black text-black border-b border-gray-200 pb-4 hidden md:block">
                Pincher
            </h1>
            
            {/* Mobile Title */}
            <h1 className="text-2xl font-black text-black md:hidden">
                Pincher
            </h1>
            
            <LocationInput 
              onSubmit={handleLocationSubmit} 
              onHotzoneSelect={handleHotzoneSelect}
              disabled={step > 0 && step < 4} 
            />

            <div className={`bg-white rounded-xl border border-gray-200 p-4 h-64 md:h-96 overflow-y-auto font-mono text-xs text-black ${step === 0 ? 'hidden md:block' : 'block'}`}>
                {logs.length === 0 && <span className="text-gray-400">Ready to start...</span>}
                {logs.map((log, idx) => (
                    <div key={idx} className="py-0.5 whitespace-pre-wrap break-all">
                        {log}
                    </div>
                ))}
            </div>
        </div>

        {/* Right: Generative UI Stream */}
        <div className="space-y-4">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wide hidden md:block">Generative UI Stream</h2>
            {matchCounter}
            {ui || <div className="bg-white p-8 rounded-xl border border-gray-200 text-center text-gray-400 text-sm hidden md:block">Waiting for simulation...</div>}
        </div>
      </div>
    </div>
  );
}
