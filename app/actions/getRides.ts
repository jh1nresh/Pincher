'use server';

import { supabase } from '@/lib/supabase';
import { RideLogData } from './logRide';

export interface RideHistoryItem extends RideLogData {
  id: string;
  created_at: string;
  status: string;
}

export async function getUserRides(walletAddress: string) {
  try {
    const { data, error } = await supabase
      .from('rides')
      .select('*')
      .eq('user_wallet', walletAddress)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase Fetch Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data: data as RideHistoryItem[] };
  } catch (err) {
    console.error('Unexpected Supabase Error:', err);
    return { success: false, error: 'Internal Server Error' };
  }
}
