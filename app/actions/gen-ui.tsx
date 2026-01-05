'use server';

import { RideOptimizer } from '@/components/RideOptimizer';
import React from 'react';

// Common Fetch Wrapper for MCP Orchestrator
async function callMcpOrchestrator(toolName: string, args: any, authHeader?: string) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (authHeader) {
    headers['Authorization'] = authHeader;
  }

  const res = await fetch(`${baseUrl}/api/mcp/orchestrator`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      toolCall: {
        name: toolName,
        arguments: args
      }
    })
  });

  // Handle 402 specifically
  if (res.status === 402) {
    const price = res.headers.get('x-402-price');
    const token = res.headers.get('x-402-token');
    const recipient = res.headers.get('x-402-recipient');
    return { 
      status: 402, 
      error: 'Payment Required', 
      details: { price, token, recipient } 
    };
  }

  if (!res.ok) {
    throw new Error(`MCP Error: ${res.statusText}`);
  }

  return res.json();
}

/**
 * Server Action to Finalize Booking
 * Called by PaymentChallenge (Client Component) after signature/tx
 */
export async function confirmBooking(rideId: string, signature: string, txHash: string) {
    console.log(`Confirming booking for ${rideId} with Hash: ${txHash}`);
    // Call MCP with Payment Headers
    // Header format: "402 <txHash>"
    const response = await callMcpOrchestrator('request_ride', { rideId }, `402 ${txHash}`);
    return response;
}

/**
 * Simplified MCP Orchestration Flow - Returns ride data, not streamable UI
 * Avoids RSC streaming hydration issues
 */
export async function getRideOptions(
  pickup: string, 
  dropoff: string,
  pickupCoords?: { lat: number; lng: number },
  dropoffCoords?: { lat: number; lng: number }
): Promise<{
  success: boolean;
  uberPrice?: number;
  lyftPrice?: number;
  error?: string;
  paymentRequired?: {
    amount: string;
    recipient: string;
    rideId: string;
  };
}> {
  try {
    // Call MCP for Uber price
    console.log(`[gen-ui] Getting prices for: ${pickup} -> ${dropoff}`);
    
    let uberPrice = 0.01; // Default
    let lyftPrice = 0.01; // Default
    
    try {
      const args: any = { pickup, dropoff };
      
      console.log(`[gen-ui] Debug Coords: Pickup=${JSON.stringify(pickupCoords)}, Dropoff=${JSON.stringify(dropoffCoords)}`);

      if (pickupCoords && dropoffCoords) {
        args.start_lat = pickupCoords.lat;
        args.start_lng = pickupCoords.lng;
        args.end_lat = dropoffCoords.lat;
        args.end_lng = dropoffCoords.lng;
      }
      
      console.log(`[gen-ui] Call MCP Args:`, JSON.stringify(args));
      
      const uberData = await callMcpOrchestrator('uber_get_price', args);
      console.log('[gen-ui] Uber response:', uberData);
      if (uberData?.price) {
        uberPrice = uberData.price;
      }
    } catch (e) {
      console.log('[gen-ui] Uber fallback to 0.01');
    }
    
    // Lyft uses fallback for demo  
    console.log('[gen-ui] Using Lyft fallback price');
    
    return {
      success: true,
      uberPrice,
      lyftPrice
    };
  } catch (error: any) {
    console.error('[gen-ui] Error:', error);
    return {
      success: false,
      error: error.message || 'Unknown error'
    };
  }
}

/**
 * Request a ride - triggers 402 payment flow
 */
export async function requestRide(
  provider: string,
  rideId: string = 'RIDE-' + Date.now()
): Promise<{
  success: boolean;
  dispatched?: boolean;
  paymentRequired?: {
    amount: string;
    recipient: string;
    rideId: string;
  };
  error?: string;
}> {
  try {
    const response = await callMcpOrchestrator('request_ride', { 
      provider, 
      rideId,
      ride_type: provider === 'Uber' ? 'UberX' : 'Lyft'
    });
    
    if (response.status === 402) {
      const { price, recipient } = response.details;
      return {
        success: true,
        paymentRequired: {
          amount: (parseInt(price) / 1000000).toFixed(2),
          recipient: recipient || '0x872989F7fCd4048acA370161989d3904E37A3cB3',
          rideId
        }
      };
    }
    
    if (response.success) {
      return {
        success: true,
        dispatched: true
      };
    }
    
    return {
      success: false,
      error: JSON.stringify(response)
    };
  } catch (error: any) {
    console.error('[gen-ui] requestRide error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}

// Legacy export for backwards compatibility - but simplified
export async function streamRideOptimization(
  pickup: string, 
  dropoff: string,
  pickupCoords?: { lat: number; lng: number },
  dropoffCoords?: { lat: number; lng: number }
) {
  // Get ride options from MCP
  const options = await getRideOptions(pickup, dropoff, pickupCoords, dropoffCoords);
  
  if (!options.success) {
    // Return simple error JSX - this is serializable
    return { 
      ui: null,
      error: options.error,
      data: null
    };
  }
  
  // Return data that the client can use to render RideOptimizer
  return { 
    ui: null, // Client will render its own component
    error: null,
    data: {
      uberPrice: options.uberPrice,
      lyftPrice: options.lyftPrice,
      pickup,
      dropoff
    }
  };
}
