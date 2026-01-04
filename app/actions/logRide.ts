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

export async function logRide(data: RideLogData) {
  try {
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
  } catch (err) {
    console.error('Unexpected Supabase Error:', err);
    return { success: false, error: 'Internal Server Error' };
  }
}
