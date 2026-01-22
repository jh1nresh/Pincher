import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  
  // Check if Stripe is configured
  if (!secretKey) {
    return NextResponse.json(
      { error: 'Stripe is not configured. Add STRIPE_SECRET_KEY to .env.local' },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey);

  try {
    const { amount = 295, matchId } = await request.json();
    
    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Pincher Match Fee',
              description: `Match ID: ${matchId || 'N/A'}`,
            },
            unit_amount: amount, // Amount in cents ($2.95 = 295)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/trips?payment=success&session_id={CHECKOUT_SESSION_ID}&trip_id=${matchId}`,
      cancel_url: `${request.nextUrl.origin}/trips?payment=cancelled`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
