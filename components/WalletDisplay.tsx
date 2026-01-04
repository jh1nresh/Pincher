'use client';

import { useState, useEffect } from 'react';
import { useWallets, usePrivy } from '@privy-io/react-auth';
import { createPublicClient, http, formatEther } from 'viem';
import { baseSepolia } from 'viem/chains';

interface WalletDisplayProps {
  onHistoryClick?: () => void;
}

export function WalletDisplay({ onHistoryClick }: WalletDisplayProps) {
  const { wallets } = useWallets();
  const { logout, user } = usePrivy();
  const [balance, setBalance] = useState<string>('0.0000');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const wallet = wallets[0];
  
  // Fetch balance
  useEffect(() => {
    if (!wallet) return;
    
    const fetchBalance = async () => {
      try {
        const publicClient = createPublicClient({
          chain: baseSepolia,
          transport: http()
        });
        
        const balanceWei = await publicClient.getBalance({ 
          address: wallet.address as `0x${string}` 
        });
        
        const balanceEth = formatEther(balanceWei);
        setBalance(parseFloat(balanceEth).toFixed(4));
      } catch (error) {
        console.error('Failed to fetch balance:', error);
        setBalance('0.0000');
      }
    };
    
    fetchBalance();
    // Refresh balance every 10 seconds
    const interval = setInterval(fetchBalance, 10000);
    return () => clearInterval(interval);
  }, [wallet]);
  
  // Truncate address to show first 6 and last 4 characters
  const truncateAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  
  const handleLogout = async () => {
    await logout();
    setIsDropdownOpen(false);
  };
  
  if (!wallet || !user) {
    return (
      <div className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-200 shadow-lg">
        <span className="text-xs font-bold text-gray-400">Not Connected</span>
      </div>
    );
  }
  
  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="bg-white/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="text-left">
            <div className="text-xs font-black text-black font-mono">
              {truncateAddress(wallet.address)}
            </div>
            <div className="text-[10px] text-gray-600 font-bold">
              {balance} ETH
            </div>
          </div>
          <svg 
            className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-72 bg-white/80 backdrop-blur-md rounded-3xl border border-gray-100 shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
          {/* User Info Section */}
          <div className="p-5 border-b border-gray-100">
            <div className="text-xs text-gray-500 font-black uppercase tracking-wide mb-2">Connected Wallet</div>
            <div className="text-xs font-mono font-bold text-black break-all bg-gray-50/50 p-2 rounded-lg">
              {wallet.address}
            </div>
          </div>
          
          {/* Balance Section */}
          <div className="p-5 border-b border-gray-100">
            <div className="text-xs text-gray-500 font-black uppercase tracking-wide mb-2">Balance</div>
            <div className="bg-linear-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm p-4 rounded-2xl border border-gray-100">
              <div className="text-xl font-black text-black">
                {balance}
              </div>
              <div className="text-xs font-bold text-gray-600 mt-1">ETH (Base Sepolia)</div>
            </div>
          </div>
          
          {/* Network Info */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 font-black uppercase tracking-wide">Network</span>
              <div className="flex items-center gap-2 bg-blue-50/50 px-3 py-1.5 rounded-full border border-blue-100">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-black text-black">Base Sepolia</span>
              </div>
            </div>
          </div>
          
          {/* History Button (If handler provided) */}
          {onHistoryClick && (
            <div className="p-4 border-b border-gray-100">
               <button 
                 onClick={() => {
                   onHistoryClick();
                   setIsDropdownOpen(false);
                 }}
                 className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group"
               >
                 <div className="flex items-center gap-3">
                   <div className="bg-gray-100 p-2 rounded-lg group-hover:bg-white border border-transparent group-hover:border-gray-200 transition-all">
                     <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                   <div className="text-left">
                     <div className="text-sm font-black text-black">Ride History</div>
                     <div className="text-[10px] font-bold text-gray-400">View past trips</div>
                   </div>
                 </div>
                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                 </svg>
               </button>
            </div>
          )}

          {/* Logout Button */}
          <div className="p-4">
            <button
              onClick={handleLogout}
              className="w-full bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-xl font-black text-sm shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
