import { NextResponse } from 'next/server';

export interface X402PaymentDetails {
  amount: string; // e.g. "50000" for 0.05 USDC
  token: string;  // Token Address or "ETH"
  recipient: string;
  chainId: number;
}

export function createX402Response(details: X402PaymentDetails) {
  // Enforce Base Sepolia Configuration
  const updatedDetails = {
      ...details,
      token: "0x036CbD53842c5426634e7929541eC2318f3dCF7e", // Base Sepolia USDC
      chainId: 84532 // Base Sepolia Chain ID
  };

  const jsonString = JSON.stringify(updatedDetails);
  const base64Details = Buffer.from(jsonString).toString('base64');
  
  // x402 v2 Header: X-402-Payment-Required or WWW-Authenticate
  return new NextResponse('Payment Required', {
    status: 402,
    headers: {
      'Content-Type': 'text/plain',
      'X-402-Payment-Details': base64Details,
      'WWW-Authenticate': `X402 custom_data="${base64Details}" chain_id="84532" token="${updatedDetails.token}"`
    }
  });
}
