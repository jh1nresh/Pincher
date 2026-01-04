'use server';

import { supabase } from '@/lib/supabase';

export interface RideLogData {
  user_wallet: string;
  pickup_lat: number;
  pickup_lng: number;
  pickup_address?: string;
  dropoff_lat: number;
  dropoff_lng: number;
  dropoff_address?: string;
  fare_amount: number;
  tx_hash: string;
}

import { createPublicClient, http } from 'viem';
import { baseSepolia } from 'viem/chains';

const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http()
});

export async function logRide(data: RideLogData) {
  try {
    // 1. Verify Transaction on Chain
    if (!data.tx_hash) throw new Error("Missing Transaction Hash");
    
    // In a real production app, we would wait for 1 confirmation.
    // Here we check if the transaction exists and succeeded.
    const txReceipt = await publicClient.getTransactionReceipt({ 
      hash: data.tx_hash as `0x${string}` 
    });

    if (txReceipt.status !== 'success') {
       return { success: false, error: 'Transaction failed on-chain' };
    }

    // Optional: Verify Recipient (Needs parsing logs for ERC20 or checking 'to' for native)
    // For now, confirm existence and success is sufficient for MVP security.

    // 2. Log to Supabase
    const { error } = await supabase
      .from('rides')
      .insert([
        {
          user_wallet: data.user_wallet,
          pickup_lat: data.pickup_lat,
          pickup_lng: data.pickup_lng,
          pickup_address: data.pickup_address,
          dropoff_lat: data.dropoff_lat,
          dropoff_lng: data.dropoff_lng,
          dropoff_address: data.dropoff_address,
          fare_amount: data.fare_amount,
          tx_hash: data.tx_hash,
          status: 'COMPLETED'
        }
      ]);

    if (error) {
      console.error('Supabase Log Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error('Unexpected Logging Error:', err);
    return { success: false, error: err.message || 'Internal Server Error' };
  }
}
