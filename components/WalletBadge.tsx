'use client';

import { usePrivy } from '@privy-io/react-auth';

interface WalletBadgeProps {
  address?: string;
  showFull?: boolean;
  className?: string;
}

export default function WalletBadge({ address, showFull = false, className = '' }: WalletBadgeProps) {
  const { user } = usePrivy();
  
  // Use provided address, or try to find wallet from various sources
  const walletAddress = address 
    || user?.wallet?.address 
    || (user?.linkedAccounts?.find((a: any) => a.type === 'wallet') as any)?.address;
  
  // Fallback to user ID if no wallet found (for email/social logins)
  const displayValue = walletAddress 
    ? (showFull ? walletAddress : `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`)
    : user?.id 
      ? `${user.id.slice(0, 10)}...${user.id.slice(-4)}`
      : null;
  
  if (!displayValue) {
    return (
      <div className={`font-mono text-xs bg-gray-100 text-gray-400 rounded-lg px-2 py-1 ${className}`}>
        Not connected
      </div>
    );
  }

  return (
    <div 
      className={`font-mono text-xs bg-gray-100 text-gray-700 rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-200 transition-colors ${className}`}
      onClick={() => navigator.clipboard.writeText(walletAddress || user?.id || '')}
      title={walletAddress ? "Click to copy wallet" : "User ID (click to copy)"}
    >
      {walletAddress ? '💎 ' : '👤 '}{displayValue}
    </div>
  );
}

