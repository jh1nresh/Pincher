/**
 * Example: Integrating Supabase with Privy Authentication
 *
 * This example shows how to sync Privy user authentication with Supabase
 */

import { useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { supabase } from './supabase';

export function useSupabaseAuth() {
  const { authenticated, user } = usePrivy();

  useEffect(() => {
    if (authenticated && user) {
      // Example: Store user data in Supabase when they log in
      const syncUserToSupabase = async () => {
        try {
          const { data, error } = await supabase
            .from('users')
            .upsert({
              id: user.id,
              email: user.email?.address,
              wallet_address: user.wallet?.address,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            })
            .select();

          if (error) {
            console.error('Error syncing user to Supabase:', error);
          } else {
            console.log('User synced to Supabase:', data);
          }
        } catch (err) {
          console.error('Error:', err);
        }
      };

      syncUserToSupabase();
    }
  }, [authenticated, user]);

  return { authenticated, user };
}

// Example: Fetch user data from Supabase
export async function getUserData(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return data;
}

// Example: Create a ride (for your carpooling app)
export async function createRide(rideData: {
  user_id: string;
  origin: string;
  destination: string;
  departure_time: string;
  seats_available: number;
  price_per_seat: number;
}) {
  const { data, error } = await supabase
    .from('rides')
    .insert(rideData)
    .select()
    .single();

  if (error) {
    console.error('Error creating ride:', error);
    return null;
  }

  return data;
}

// Example: Search for available rides
export async function searchRides(origin: string, destination: string) {
  const { data, error } = await supabase
    .from('rides')
    .select('*')
    .eq('origin', origin)
    .eq('destination', destination)
    .gt('seats_available', 0)
    .order('departure_time', { ascending: true });

  if (error) {
    console.error('Error searching rides:', error);
    return [];
  }

  return data;
}
