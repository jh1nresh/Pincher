
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { rideId } = await req.json();

    if (!rideId) {
      return NextResponse.json({ error: 'Missing rideId' }, { status: 400 });
    }

    const { error } = await supabase
      .from('rides')
      .update({ status: 'completed' })
      .eq('id', rideId);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error completing ride:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
