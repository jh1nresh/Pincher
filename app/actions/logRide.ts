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
  console.log('[logRide] Starting with data:', JSON.stringify(data, null, 2));
  
  try {
    let txVerified = false;
    
    // 1. Try to verify Transaction on Chain (but don't block if it fails for demo)
    if (data.tx_hash && data.tx_hash.startsWith('0x')) {
      try {
        const txReceipt = await publicClient.getTransactionReceipt({ 
          hash: data.tx_hash as `0x${string}` 
        });
        txVerified = txReceipt.status === 'success';
        console.log('[logRide] Tx verification:', txVerified);
      } catch (txError) {
        console.log('[logRide] Tx verification skipped (tx not found yet):', txError);
        // Continue anyway for demo
      }
    }

    // 2. Log to Supabase (always attempt for demo)
    console.log('[logRide] Inserting to Supabase...');
    const { data: insertedData, error } = await supabase
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
          status: txVerified ? 'COMPLETED' : 'PENDING'
        }
      ])
      .select();

    if (error) {
      console.error('[logRide] Supabase Error:', error);
      return { success: false, error: error.message };
    }

    console.log('[logRide] ✅ Successfully inserted:', insertedData);
    return { success: true, id: insertedData?.[0]?.id };
  } catch (err: any) {
    console.error('[logRide] Unexpected Error:', err);
    return { success: false, error: err.message || 'Internal Server Error' };
  }
}
