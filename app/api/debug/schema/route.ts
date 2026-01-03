
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  
  // 1. Fetch one ride to see columns
  const { data: ride } = await supabase.from('rides').select('*').limit(1);
  
  // 2. Try to fetch 'bookings' table to see if it exists
  const { data: bookings, error: bookingError } = await supabase.from('bookings').select('*').limit(1);

  return NextResponse.json({ 
      rideExample: ride?.[0] || 'No rides found', 
      bookingsTableExists: !bookingError,
      bookingError: bookingError
  });
}
