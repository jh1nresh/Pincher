'use server';

import { createStreamableUI } from 'ai/rsc';
import { streamUI } from 'ai/rsc';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';
import { RideOptimizer } from '@/components/RideOptimizer';
import { PaymentChallenge } from '@/components/PaymentChallenge';
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

  const res = await fetch(`${baseUrl}/app/api/mcp/orchestrator`, {
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
 * Main AI Orchestration Flow
 */
export async function streamRideOptimization(
  pickup: string, 
  dropoff: string
) {
  const ui = createStreamableUI(
    <div className="animate-pulse p-4 text-sm text-gray-500 font-mono border rounded-xl">
      Thinking... (Connecting to MCP Swarm)
    </div>
  );

  (async () => {
    try {
      const result = await streamUI({
        model: openai('gpt-4-turbo'),
        system: `You are a neutral Ride Dispatcher Agent.
        1. You have access to both Uber and Lyft tools via MCP.
        2. First, check prices on BOTH platforms for the user's route (${pickup} to ${dropoff}).
        3. Compare them and calculate savings.
        4. Present a "Best Offer" to the user using the 'showRideOptions' tool.
        5. If the user wants to book, call 'bookRide'.
        
        Current Context: User wants to go from ${pickup} to ${dropoff}.
        `,
        initial: <div className="hidden">Init</div>,
        tools: {
          checkUber: {
            description: 'Get price estimate from Uber',
            parameters: z.object({
              pickup: z.string(),
              dropoff: z.string()
            }),
            generate: async (args) => {
              ui.update(<div className="text-gray-500 text-xs font-mono">Checking Uber...</div>);
              const data = await callMcpOrchestrator('uber_get_price', args);
              return <div className="text-xs text-gray-400">Uber Estimate: {JSON.stringify(data)}</div>;
            }
          },
          checkLyft: {
            description: 'Get price estimate from Lyft',
            parameters: z.object({
              pickup: z.string(),
              dropoff: z.string()
            }),
            generate: async (args) => {
              ui.update(<div className="text-gray-500 text-xs font-mono">Checking Lyft...</div>);
              // Fallback for demo if Lyft remote is down
              try {
                  const data = await callMcpOrchestrator('lyft_get_cost', args);
                  return <div className="text-xs text-gray-400">Lyft Estimate: {JSON.stringify(data)}</div>;
              } catch (e) {
                  const fallback = { price: 45.00, currency: 'USD', provider: 'Lyft' };
                  return <div className="text-xs text-gray-400">Lyft Estimate (Fallback): {JSON.stringify(fallback)}</div>;
              }
            }
          },
          showRideOptions: {
            description: 'Display the comparison UI to the user',
            parameters: z.object({
              uberPrice: z.number(),
              lyftPrice: z.number(),
              savings: z.string(),
              recommendedProvider: z.string()
            }),
            generate: async ({ uberPrice, lyftPrice, savings }) => {
              return (
                <RideOptimizer
                  savings={savings}
                  originalFare={Math.max(uberPrice, lyftPrice).toFixed(2)}
                  optimizedFare={Math.min(uberPrice, lyftPrice).toFixed(2)}
                  waypoints={[pickup, 'x402 Node', dropoff]}
                  // Recipient for payment is the Vault
                  recipientAddress="0x872989F7fCd4048acA370161989d3904E37A3cB3" 
                />
              );
            }
          },
          bookRide: {
            description: 'Book the selected ride. Requires Payment.',
            parameters: z.object({
              provider: z.string(),
              rideId: z.string()
            }),
            generate: async (args) => {
                // Call MCP without Auth first -> triggers 402
                const response = await callMcpOrchestrator('request_ride', args);
                
                // HANDLE 402: Render Payment Challenge
                if (response.status === 402) {
                    const { price, recipient } = response.details;
                    return (
                        <PaymentChallenge
                            rideId={args.rideId || 'RIDE-123'}
                            amount={(parseInt(price) / 1000000).toFixed(2)} // Convert from Wei/USDC units
                            recipientAddress={recipient}
                            onSignatureComplete={confirmBooking.bind(null, args.rideId)}
                            onCancel={async () => {'use server'; /* No-op server action */}} 
                        />
                    );
                }

                if (response.success) {
                    return (
                        <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                            <h3 className="text-green-800 font-bold">Ride Dispatched!</h3>
                            <p className="text-sm text-green-600">Driver is on the way.</p>
                        </div>
                    );
                }
                
                return <div>Error booking ride: {JSON.stringify(response)}</div>;
            }
          }
        },
      });

      ui.done(result.value);
    } catch (e) {
      console.error(e);
      ui.error(<div>Error in AI Agent</div>);
    }
  })();

  return { ui: ui.value };
}
