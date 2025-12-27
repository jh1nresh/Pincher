'use client';

import { usePrivy } from '@privy-io/react-auth';
import { useState, useEffect } from 'react';
import { createPublicClient, http, formatUnits, erc20Abi } from 'viem';
import { baseSepolia } from 'viem/chains';

const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e';

interface UserProfileProps {
    isOpen: boolean;
    onClose: () => void;
    onToggle: () => void;
}

export default function UserProfile({ isOpen, onClose, onToggle }: UserProfileProps) {
  const { user, logout, authenticated } = usePrivy();
  const [balance, setBalance] = useState<string>('0.00');
  const [ethBalance, setEthBalance] = useState<string>('0.00');
  const [copied, setCopied] = useState(false);
  const [faucetStatus, setFaucetStatus] = useState<'idle' | 'claiming' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (authenticated && user?.wallet?.address && isOpen) {
        fetchBalance();
    }
  }, [authenticated, user?.wallet?.address, isOpen]);

  const fetchBalance = async () => {
    try {
        const client = createPublicClient({
            chain: baseSepolia,
            transport: http(),
        });

        // Fetch USDC Balance
        // @ts-expect-error - viem type inference mismatch
        const usdcData = await client.readContract({
            address: USDC_ADDRESS,
            abi: erc20Abi,
            functionName: 'balanceOf',
            args: [user!.wallet!.address as `0x${string}`],
        });
        
        const usdcFormatted = formatUnits(usdcData as bigint, 6);
        setBalance(parseFloat(usdcFormatted).toFixed(2));

        // Fetch ETH Balance
        const ethData = await client.getBalance({ 
            address: user!.wallet!.address as `0x${string}` 
        });
        const ethFormatted = formatUnits(ethData, 18);
        setEthBalance(parseFloat(ethFormatted).toFixed(4));

    } catch (e) {
        console.error("Balance fetch error", e);
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
      setTimeout(() => {
          fetchBalance();
          setFaucetStatus('idle');
      }, 3000);
    } catch (e) {
        console.error("Faucet error", e);
        setFaucetStatus('error');
        setTimeout(() => setFaucetStatus('idle'), 3000);
    }
  };

  if (!authenticated) return null;

  const displayName = user?.email?.address || 
    (user?.wallet?.address ? `${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}` : 'User');

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
            className="fixed inset-0 bg-black/40 z-60 backdrop-blur-sm transition-opacity md:hidden"
            onClick={onClose}
        />
      )}

      {/* --- MOBILE: Bottom Sheet --- */}
      <div 
        className={`
            fixed z-70 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden
            bottom-0 left-0 right-0 h-[85vh] w-full rounded-t-3xl
            ${isOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
         {/* Mobile Pull Handle */}
         <div className="w-full flex justify-center pt-3 pb-1" onClick={onClose}>
            <div className="w-12 h-1.5 bg-gray-300 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="px-6 py-6 border-b border-gray-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
                    {displayName[0].toUpperCase()}
                 </div>
                 <div>
                    <h2 className="text-lg font-bold text-black leading-tight">{displayName}</h2>
                    <p className="text-xs text-gray-400 font-mono">{user?.wallet?.address?.slice(0, 6)}...{user?.wallet?.address?.slice(-4)}</p>
                 </div>
            </div>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>

        {/* Content (Mobile) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <ProfileContent 
                balance={balance} 
                ethBalance={ethBalance} 
                user={user} 
                copied={copied} 
                setCopied={setCopied} 
                fetchBalance={fetchBalance} 
                logout={logout} 
                claimFaucet={claimFaucet}
                faucetStatus={faucetStatus}
            />
        </div>
      </div>


      {/* --- DESKTOP: Top Right Avatar + Dropdown --- */}
      <div className="hidden md:block absolute top-4 right-4 z-60">
          <button 
             onClick={onToggle}
             className="flex items-center gap-2 bg-white rounded-full p-1 pr-4 shadow-md border border-gray-100 hover:shadow-lg transition-all"
          >
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                  {displayName[0].toUpperCase()}
              </div>
              <span className="text-xs font-bold text-gray-700 font-mono">
                  {user?.wallet?.address ? `${user.wallet.address.slice(0, 6)}...${user.wallet.address.slice(-4)}` : 'Profile'}
              </span>
          </button>

          {isOpen && (
              <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2">
                  <div className="p-4 bg-gray-50 border-b border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
                              {displayName[0].toUpperCase()}
                          </div>
                          <div>
                              <p className="text-sm font-bold text-black">{displayName}</p>
                              <p className="text-[10px] text-gray-400 font-mono break-all">{user?.wallet?.address}</p>
                          </div>
                      </div>
                  </div>
                  <div className="p-4">
                      <ProfileContent 
                         balance={balance} 
                         ethBalance={ethBalance} 
                         user={user} 
                         copied={copied} 
                         setCopied={setCopied} 
                         fetchBalance={fetchBalance} 
                         logout={logout}
                         isDesktop 
                         claimFaucet={claimFaucet}
                         faucetStatus={faucetStatus}
                      />
                  </div>
              </div>
          )}
      </div>
    </>
  );
}

// Sub-component to share content between Mobile and Desktop
function ProfileContent({ balance, ethBalance, user, copied, setCopied, fetchBalance, logout, isDesktop, claimFaucet, faucetStatus }: any) {
    return (
        <div className="space-y-6">
            {/* Wallet Info */}
            <div className={`rounded-xl ${isDesktop ? 'px-1' : ''}`}>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-gray-900">Wallet Balance</span>
                    <button onClick={fetchBalance} className="text-xs font-medium text-gray-500 hover:text-black transition-colors">Refresh</button>
                </div>
                
                <div className="space-y-3">
                    {/* USDC */}
                    <div className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                <span className="font-bold text-xs text-black">$</span>
                            </div>
                            <span className="font-bold text-sm text-black">USDC</span>
                        </div>
                        <span className="font-mono font-bold text-sm text-black">{balance}</span>
                    </div>

                    {/* ETH */}
                    <div className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:border-gray-300 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                <span className="font-bold text-xs text-black">Ξ</span>
                            </div>
                            <span className="font-bold text-sm text-black">ETH</span>
                        </div>
                        <span className="font-mono font-bold text-sm text-black">{ethBalance}</span>
                    </div>
                </div>
            </div>

            {/* Faucet Top-up */}
            {parseFloat(balance) < 0.1 && (
                <div className={`rounded-xl ${isDesktop ? 'px-1' : ''}`}>
                     <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold text-gray-900">Dev Tools</span>
                    </div>
                    <button
                        onClick={claimFaucet}
                        disabled={faucetStatus === 'claiming' || faucetStatus === 'success'}
                        className="w-full py-3 bg-black text-white hover:bg-gray-800 rounded-lg font-bold text-xs shadow-sm disabled:opacity-50 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                    >
                        {faucetStatus === 'claiming' ? (
                             <span className="flex items-center gap-2">
                                <svg className="animate-spin h-3 w-3 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
                                Sending...
                             </span>
                        ) : faucetStatus === 'success' ? (
                            'Funds Sent!'
                        ) : (
                            'Get 0.05 Test-USDC'
                        )}
                    </button>
                    <p className="text-[10px] text-gray-400 mt-2 text-center">
                        Only available on Base Sepolia Testnet
                    </p>
                </div>
            )}

            {/* External Faucets */}
            <div className={`rounded-xl ${isDesktop ? 'px-1' : ''}`}>
                 <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold text-gray-900">Official Faucets</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <a
                        href="https://portal.cdp.coinbase.com/products/faucet?projectId=866bc23f-cf9a-4445-b8c3-937b1853d5bb&token=ETH&network=base-sepolia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 bg-white border border-gray-200 hover:border-black text-black rounded-lg font-bold text-[10px] flex items-center justify-center gap-2 transition-all hover:shadow-sm"
                    >
                         <span className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-[8px]">Ξ</span>
                         Base ETH
                    </a>
                    <a
                        href="https://faucet.circle.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 bg-white border border-gray-200 hover:border-black text-black rounded-lg font-bold text-[10px] flex items-center justify-center gap-2 transition-all hover:shadow-sm"
                    >
                        <span className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-[8px]">$</span>
                        Circle USDC
                    </a>
                </div>
            </div>

             {/* Actions */}
             <div className={`space-y-2 pt-2 ${isDesktop ? 'px-1' : ''}`}>
                <button 
                  onClick={() => {
                        if(user?.wallet?.address) {
                            navigator.clipboard.writeText(user.wallet.address);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                        }
                   }}
                   className="w-full py-2 px-3 rounded-lg border border-gray-100 text-xs font-bold text-gray-600 hover:bg-gray-50 hover:text-black hover:border-gray-300 transition-all flex justify-between items-center"
                >
                    Copy Address
                    {copied && <span className="text-black">✓</span>}
                </button>
                
                 <a 
                    href={`https://sepolia.basescan.org/address/${user?.wallet?.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2 px-3 rounded-lg border border-gray-100 text-xs font-bold text-gray-600 hover:bg-gray-50 hover:text-black hover:border-gray-300 transition-all"
                >
                    View on Explorer ↗
                </a>

                <button 
                    onClick={logout}
                    className="w-full py-2 px-3 rounded-lg text-red-500 text-xs font-bold hover:bg-red-50 transition-all text-left pl-3"
                >
                    Sign Out
                </button>
             </div>
        </div>
    );
}
