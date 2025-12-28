'use client';

import { useState, useEffect } from 'react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { createPublicClient, http, formatEther, formatUnits } from 'viem';
import { baseSepolia } from 'viem/chains';
import Image from 'next/image';

const client = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

interface UserOnboardingProps {
  onComplete: () => void;
}

export default function UserOnboarding({ onComplete }: UserOnboardingProps) {
  const { login, authenticated, user, ready, createWallet, logout } = usePrivy();
  const { wallets } = useWallets();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [balance, setBalance] = useState<{ eth: string; usdc: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [faucetStatus, setFaucetStatus] = useState<'idle' | 'claiming' | 'success' | 'error'>('idle');

  // Step 1 -> 2: Auto transition when authenticated
  useEffect(() => {
    if (authenticated && user?.wallet?.address) {
      setStep(2);
      checkBalance(user.wallet.address);
    }
  }, [authenticated, user]);

  const checkBalance = async (address: string) => {
    setLoading(true);
    try {
      const ethBal = await client.getBalance({ address: address as `0x${string}` });
      
      const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e';
      // @ts-expect-error - viem type mismatch
      const usdcBal = await client.readContract({
        address: USDC_ADDRESS,
        abi: [{ name: 'balanceOf', type: 'function', inputs: [{ name: 'owner', type: 'address' }], outputs: [{ name: 'balance', type: 'uint256' }], stateMutability: 'view' }],
        functionName: 'balanceOf',
        args: [address as `0x${string}`],
      }) as bigint;

      const eth = formatEther(ethBal);
      const usdc = formatUnits(usdcBal, 6);

      setBalance({ eth, usdc });
    } catch (e) {
      console.error("Balance check failed", e);
    } finally {
      setLoading(false);
    }
  };

  const claimFaucet = async () => {
    if (!user?.wallet?.address) return;
    setFaucetStatus('claiming');
    try {
      const res = await fetch('/api/faucet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address: user.wallet.address }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      
      setFaucetStatus('success');
      // Re-check balance after short delay
      setTimeout(() => checkBalance(user.wallet.address!), 3000);
    } catch (e) {
      console.error("Faucet error", e);
      setFaucetStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-gray-100/50 backdrop-blur-sm">
      <div className="w-[90%] max-w-[340px] bg-white border border-gray-100 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Brand Welcome */}
          <div className="relative w-24 h-24 mb-2">
            <Image
                src="/pincher-v1.5.png"
                alt="Pincher Logo"
                fill
                className="object-contain"
                priority
            />
          </div>
          <h2 className="text-xl font-black text-black tracking-tight mb-1">
            Welcome to Pincher
          </h2>
          <p className="text-xs font-medium text-gray-400 mb-6">
            Share Rides. Smart Fares.
          </p>

          <div className="space-y-6 w-full text-left">
            
            {/* Step 1: Identity */}
            {step === 1 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Step 1/2</span>
                  <span className="text-xs font-bold text-black uppercase tracking-widest">Identity</span>
                </div>
                
                <div className="flex flex-col gap-3">
                    {/* State 1: Not Authenticated -> Login */}
                    {!authenticated && (
                        <button
                          onClick={login}
                          disabled={!ready}
                          className="w-full py-4 bg-black hover:bg-gray-800 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {ready ? 'Login / Sign Up' : 'Initializing...'}
                        </button>
                    )}

                    {/* State 2: Authenticated but No Wallet -> Create Wallet */}
                    {authenticated && !user?.wallet && (
                         <button
                            onClick={async () => {
                                try {
                                    console.log("Creating wallet for authenticated user...");
                                    await createWallet();
                                } catch (e: any) {
                                    console.error("Wallet creation error:", e);
                                    alert(`Wallet Creation Failed: ${e.message}`);
                                }
                            }}
                            disabled={!ready}
                            className="w-full py-4 bg-black hover:bg-gray-800 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-3 shadow-md hover:shadow-lg active:scale-[0.98]"
                        >
                            Create Wallet
                        </button>
                    )}

                    {/* Debug/Reset for stuck states */}
                    {authenticated && (
                        <div className="text-center">
                            <button
                                onClick={async () => {
                                    await logout();
                                    window.location.reload();
                                }}
                                className="text-xs text-gray-400 hover:text-red-500 underline"
                            >
                                Reset Session
                            </button>
                        </div>
                    )}
                </div>
              </div>
            )}

            {/* Step 2: Fuel */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                 <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Step 2/2</span>
                  <span className="text-xs font-bold text-black uppercase tracking-widest">Gas & Tokens</span>
                </div>
                
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-4">
                     <span className="text-xs text-gray-500 font-medium">Wallet Balance</span>
                     {loading ? (
                         <span className="text-xs text-gray-400 animate-pulse">Scanning...</span>
                     ) : (
                         <div className="text-right">
                             <div className="text-sm font-bold text-black">{balance?.usdc || '0.00'} USDC</div>
                             <div className="text-[10px] font-mono text-gray-400">{balance?.eth || '0.00'} ETH</div>
                         </div>
                     )}
                  </div>

                  {balance && parseFloat(balance.usdc) < 0.01 && (
                      <button
                        onClick={claimFaucet}
                        disabled={faucetStatus === 'claiming' || faucetStatus === 'success'}
                        className="w-full py-3 bg-black text-white hover:bg-gray-900 rounded-lg font-bold text-sm shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all relative overflow-hidden active:scale-[0.98]"
                      >
                         {faucetStatus === 'claiming' ? (
                             <span className="flex items-center justify-center gap-2">
                                 <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
                                 Sending Test Tokens...
                             </span>
                         ) : faucetStatus === 'success' ? (
                             'Funds Received!'
                         ) : (
                             'Claim 0.05 USDC & 0.0001 ETH'
                         )}
                      </button>
                  )}
                  {balance && parseFloat(balance.usdc) >= 0.01 && (
                      <div className="text-center text-xs text-green-700 font-bold py-2 bg-green-50 rounded-lg border border-green-100">
                          Ready to use!
                      </div>
                  )}
                </div>

                {/* Step 3 Action moved here */}
                <button
                    onClick={onComplete}
                    disabled={balance ? parseFloat(balance.usdc) < 0.01 : true}
                    className="w-full py-4 bg-black text-white hover:bg-gray-900 disabled:bg-gray-200 disabled:text-gray-400 rounded-xl font-bold text-lg tracking-wide transition-all shadow-lg active:scale-[0.98]"
                >
                    Start Ride
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}



