"use client";

import { useState } from "react";
import { getLocalUser } from "@/lib/local-user";

interface WalletBadgeProps {
  address?: string;
  showFull?: boolean;
  className?: string;
}

export default function WalletBadge({
  address,
  showFull = false,
  className = "",
}: WalletBadgeProps) {
  const [localUser] = useState(() => getLocalUser());

  const walletAddress = address;

  const displayValue = walletAddress
    ? showFull
      ? walletAddress
      : `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : `${localUser.id.slice(0, 10)}...${localUser.id.slice(-4)}`;

  if (!displayValue) {
    return (
      <div
        className={`font-mono text-xs bg-gray-100 text-gray-400 rounded-lg px-2 py-1 ${className}`}
      >
        Not connected
      </div>
    );
  }

  return (
    <div
      className={`font-mono text-xs bg-gray-100 text-gray-700 rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-200 transition-colors ${className}`}
      onClick={() => navigator.clipboard.writeText(walletAddress || localUser.id)}
      title={walletAddress ? "Click to copy wallet" : "Local rider ID (click to copy)"}
    >
      {walletAddress ? "Wallet " : "Rider "}
      {displayValue}
    </div>
  );
}
