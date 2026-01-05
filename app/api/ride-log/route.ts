import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      pickup_location, 
      dropoff_location, 
      selected_provider,
      original_price,
      optimized_price,
      savings,
      carpool_matched,
      wallet_address,
      tx_hash
    } = body;

    if (!supabaseUrl || !supabaseKey) {
      console.warn('Supabase not configured');
      return NextResponse.json({ success: true, message: 'Logged locally (Supabase not configured)' });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert ride record
    const { data, error } = await supabase
      .from('rides')
      .insert([
        {
          pickup_location,
          dropoff_location,
          selected_provider,
          original_price: parseFloat(original_price) || 0,
          optimized_price: parseFloat(optimized_price) || 0,
          savings: parseFloat(savings) || 0,
          carpool_matched: carpool_matched || false,
          wallet_address,
          tx_hash,
          status: 'pending',
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      // Don't fail the request - just log the error
      return NextResponse.json({ 
        success: true, 
        message: 'Ride created (DB logging failed)',
        error: error.message 
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Ride logged to database',
      ride_id: data?.[0]?.id 
    });

  } catch (error: any) {
    console.error('Ride log error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to log ride' },
      { status: 500 }
    );
  }
}

// GET: Fetch ride history for a wallet
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const walletAddress = searchParams.get('wallet');

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ rides: [], message: 'Supabase not configured' });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    let query = supabase.from('rides').select('*').order('created_at', { ascending: false });
    
    if (walletAddress) {
      query = query.eq('wallet_address', walletAddress);
    }

    const { data, error } = await query.limit(20);

    if (error) {
      throw error;
    }

    return NextResponse.json({ rides: data || [] });

  } catch (error: any) {
    console.error('Fetch rides error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch rides' },
      { status: 500 }
    );
  }
}
