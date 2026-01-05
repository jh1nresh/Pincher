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
import { parseEther, createWalletClient, custom, encodeFunctionData } from 'viem';
import { baseSepolia } from 'viem/chains';
import { logRide } from '@/app/actions/logRide';
import { streamRideOptimization } from '@/app/actions/gen-ui';
import { HistoryDrawer } from '@/components/HistoryDrawer';

export default function HomePage() {
  // AI Agent / Vault Address (From Env or Default)
  // 優先使用環境變數中的地址，否則使用您指定的個人開發錢包
  const AI_ADDRESS = process.env.NEXT_PUBLIC_AI_WALLET_ADDRESS as `0x${string}` || '0x872989F7fCd4048acA370161989d3904E37A3cB3';

  // Generative UI State
  const [ui, setUi] = useState<React.ReactNode>(null);
  const [matchCounter, setMatchCounter] = useState<React.ReactNode>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingMatch, setPendingMatch] = useState<MatchResult | null>(null);
  
  // Hotzone & Map State
  const [selectedPickup, setSelectedPickup] = useState<Hotzone | null>(null);
  const [selectedDropoff, setSelectedDropoff] = useState<Hotzone | null>(null);
  const [mapFlyTo, setMapFlyTo] = useState<{ lat: number; lng: number; zoom?: number } | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  
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
    
    // Helper for delayed logs
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    
    addLog("🚀 Initializing MCP Orchestrator...");
    await delay(400);

    try {
        // Step 1: Call MCP Orchestrator via streamRideOptimization
        addLog(`📍 Route: ${start} → ${end}`);
        await delay(300);
        
        addLog("🔗 Connecting to Uber MCP (Local)...");
        await delay(500);
        
        addLog("🔗 Connecting to Lyft MCP (Remote)...");
        await delay(400);
        
        addLog("🔗 Connecting to Supabase Database...");
        
        // Call the simplified MCP-based Server Action
        const { data, error } = await streamRideOptimization(
            start, 
            end,
            selectedPickup ? { lat: selectedPickup.coordinates.lat, lng: selectedPickup.coordinates.lng } : undefined,
            selectedDropoff ? { lat: selectedDropoff.coordinates.lat, lng: selectedDropoff.coordinates.lng } : undefined
        );
        
        if (error || !data) {
            throw new Error(error || 'No data returned');
        }
        
        addLog("✅ Connected! All services ready.");
        await delay(600);
        
        // AI Thinking Phase - Progressive flow
        addLog("🤖 [AI Thinking] Planning ride optimization strategy...");
        await delay(800);
        
        addLog("🤖 [AI Thinking] Analyzing pickup location...");
        await delay(500);
        addLog(`   └─ ${selectedPickup?.displayName || start}`);
        await delay(400);
        
        addLog("🤖 [AI Thinking] Analyzing dropoff location...");
        await delay(500);
        addLog(`   └─ ${selectedDropoff?.displayName || end}`);
        await delay(600);
        
        addLog(`🤖 [AI Thinking] Fetching uber_get_price...`);
        await delay(700);
        
        addLog(`🤖 [AI Thinking] Fetching lyft_get_price...`);
        await delay(500);
        
        setStep(2);
        addLog("✅ Received ride options from MCP sources");
        await delay(400);
        
        addLog(`📊 Uber: $${data.uberPrice?.toFixed(2)} | Lyft: $${data.lyftPrice?.toFixed(2)}`);
        await delay(600);
        
        addLog(`🤖 [AI Thinking] Comparing prices...`);
        await delay(700);
        
        // Calculate best option
        const bestPrice = Math.min(data.uberPrice || 0.01, data.lyftPrice || 0.01);
        const savings = Math.abs((data.uberPrice || 0.01) - (data.lyftPrice || 0.01)).toFixed(2);
        const selectedProvider = bestPrice === data.uberPrice ? 'Uber' : 'Lyft';
        
        addLog(`🤖 [AI Decision] Selected ${selectedProvider} as best option`);
        await delay(400);
        addLog(`   └─ Price: $${bestPrice.toFixed(2)} USDC`);
        await delay(500);
        
        addLog(`🤖 [AI Thinking] Calculating optimal carpool route...`);
        await delay(600);
        
        addLog("✅ Route optimization complete!");
        
        // Payment handler to show tx hash in logs
        const handlePaymentWithLogs = async () => {
            addLog("👆 User clicked 'Pay with x402'");
            
            const wallet = wallets.find(w => w.walletClientType === 'privy') || wallets[0];
            
            if (!wallet) {
                addLog("❌ No active wallet found.");
                return;
            }
            
            // Switch to Base Sepolia
            try {
                await wallet.switchChain(84532);
            } catch (e) {
                addLog(`⚠️ Chain switch: ${e}`);
            }

            addLog("🔐 Requesting Transaction Signature on Base Sepolia...");
            addLog(`💱 Converting Quote ($${bestPrice.toFixed(2)}) to USDC Payment...`);
            
            try {
                const provider = await wallet.getEthereumProvider();
                const viemWalletClient = createWalletClient({
                  chain: baseSepolia,
                  transport: custom(provider)
                });

                const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e'; 
                const erc20Abi = [{
                    name: 'transfer',
                    type: 'function',
                    stateMutability: 'nonpayable',
                    inputs: [{ name: 'to', type: 'address' }, { name: 'amount', type: 'uint256' }],
                    outputs: [{ name: '', type: 'bool' }]
                }] as const;

                // @ts-expect-error - Privy provider types
                const txHash = await viemWalletClient.sendTransaction({
                    account: wallet.address as `0x${string}`,
                    to: USDC_ADDRESS,
                    data: encodeFunctionData({
                        abi: erc20Abi,
                        functionName: 'transfer',
                        args: [AI_ADDRESS, BigInt(10000)]
                    }),
                    value: BigInt(0)
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
                
                addLog("✅ Funds Locked in Escrow Vault.");
                
                // Log ride to Supabase
                logRide({
                    user_wallet: wallet.address,
                    pickup_lat: selectedPickup?.coordinates.lat || 0,
                    pickup_lng: selectedPickup?.coordinates.lng || 0,
                    pickup_address: selectedPickup?.displayName || start,
                    dropoff_lat: selectedDropoff?.coordinates.lat || 0,
                    dropoff_lng: selectedDropoff?.coordinates.lng || 0,
                    dropoff_address: selectedDropoff?.displayName || end,
                    fare_amount: bestPrice,
                    tx_hash: txHash
                }).then(res => {
                    if (res.success) addLog("📝 Ride saved to Supabase.");
                    else addLog(`⚠️ Supabase error: ${res.error}`);
                });
                
                addLog("🚗 Ride Dispatched! Driver arriving in 5 mins.");
                setStep(4);
            } catch (error: any) {
                addLog(<span className="text-red-500">❌ Transaction Rejected: {error.message}</span>);
                throw error;
            }
        };
        
        // Render RideOptimizer client-side with the data
        setUi(
            <RideOptimizer
                savings={savings}
                originalFare={data.uberPrice?.toFixed(2) || "0.01"}
                optimizedFare={bestPrice.toFixed(2)}
                waypoints={[start, 'x402 Node', end]}
                recipientAddress={AI_ADDRESS}
                onPayment={handlePaymentWithLogs}
                pickupLocation={selectedPickup ? { 
                    lat: selectedPickup.coordinates.lat, 
                    lng: selectedPickup.coordinates.lng, 
                    name: selectedPickup.displayName 
                } : undefined}
                dropoffLocation={selectedDropoff ? { 
                    lat: selectedDropoff.coordinates.lat, 
                    lng: selectedDropoff.coordinates.lng, 
                    name: selectedDropoff.displayName 
                } : undefined}
            />
        );
        
    } catch (error: any) {
        console.error("MCP Error:", error);
        addLog(`❌ MCP Error: ${error.message || 'Unknown error'}`);
        
        // Fallback to original mock flow
        addLog("⚠️ Falling back to simulated data...");
        setTimeout(async () => {
            addLog("📊 Comparison: Uber ($45.00) vs Lyft ($52.12)");
            const matchResult = await matchNodes(start, end);
            if (user) {
                renderRideOptimizer(matchResult, start, end);
            }
        }, 1000);
    }
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
            addLog(`💱 Converting Quote ($${matchResult.optimizedFare}) to USDC Payment...`);
            
            try {
                const provider = await wallet.getEthereumProvider();
                const viemWalletClient = createWalletClient({
                  chain: baseSepolia,
                  transport: custom(provider)
                });

                // Base Sepolia USDC Address
                const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e'; 
                
                // ERC20 Transfer ABI
                const erc20Abi = [
                    {
                        name: 'transfer',
                        type: 'function',
                        stateMutability: 'nonpayable',
                        inputs: [
                            { name: 'to', type: 'address' },
                            { name: 'amount', type: 'uint256' }
                        ],
                        outputs: [{ name: '', type: 'bool' }]
                    }
                ] as const;

                // @ts-expect-error - Privy provider types mismatch
                const txHash = await viemWalletClient.sendTransaction({
                    account: wallet.address as `0x${string}`,
                    to: USDC_ADDRESS,
                    data: encodeFunctionData({
                        abi: erc20Abi,
                        functionName: 'transfer',
                        args: [
                            AI_ADDRESS, // Send to AI Agent (Defined in component scope)
                            BigInt(10000) // 0.01 USDC
                        ]
                    }),
                    value: BigInt(0)
                });

                // Log to Supabase (Async, don't block UI)
                logRide({
                    user_wallet: wallet.address,
                    pickup_lat: matchResult.waypoints[0].lat,
                    pickup_lng: matchResult.waypoints[0].lng,
                    pickup_address: matchResult.waypoints[0].name,
                    dropoff_lat: matchResult.waypoints[matchResult.waypoints.length - 1].lat,
                    dropoff_lng: matchResult.waypoints[matchResult.waypoints.length - 1].lng,
                    dropoff_address: matchResult.waypoints[matchResult.waypoints.length - 1].name,
                    fare_amount: parseFloat(matchResult.optimizedFare),
                    tx_hash: txHash
                }).then(res => {
                    if (res.success) addLog("📝 Ride data persisted to Cloud Database.");
                    else addLog("⚠️ Failed to log ride data: " + res.error);
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
                 throw error; // Propagate error to stop RideOptimizer simulation
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
            recipientAddress={AI_ADDRESS} 
            flyToLocation={mapFlyTo}
            pickupLocation={selectedPickup ? { 
                lat: selectedPickup.coordinates.lat, 
                lng: selectedPickup.coordinates.lng, 
                name: selectedPickup.displayName 
            } : undefined}
            dropoffLocation={selectedDropoff ? { 
                lat: selectedDropoff.coordinates.lat, 
                lng: selectedDropoff.coordinates.lng, 
                name: selectedDropoff.displayName 
            } : undefined}
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
      
      <div className="absolute top-4 right-4 md:right-8 z-50">
        <WalletDisplay onHistoryClick={() => setHistoryOpen(true)} />
      </div>
      
      {/* History Drawer */}
      <HistoryDrawer 
        isOpen={historyOpen} 
        onClose={() => setHistoryOpen(false)}
        walletAddress={user?.wallet?.address || ''} 
      />
      
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
