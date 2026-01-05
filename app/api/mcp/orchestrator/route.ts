import { NextResponse } from "next/server";
import { createPublicClient, http } from "viem";
import { baseSepolia } from "viem/chains";
import { createClient } from "@supabase/supabase-js";

// Supabase Client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

// x402 Configuration
// 0.01 USDC (6 decimals)
const PRICE_AMOUNT = "10000"; 
const TOKEN_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
const VAULT_ADDRESS = process.env.NEXT_PUBLIC_AI_WALLET_ADDRESS || "0x872989F7fCd4048acA370161989d3904E37A3cB3";

// Viem Client for Verification
const viemClient = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

// Log to Supabase
async function logToSupabase(table: string, data: any) {
  if (!supabase) {
    console.log(`[MCP] Supabase not configured - would log to ${table}:`, data);
    return null;
  }
  try {
    const { data: result, error } = await supabase.from(table).insert([data]).select();
    if (error) {
      console.error(`[MCP] Supabase ${table} error:`, error.message);
      return null;
    }
    console.log(`[MCP] ✅ Logged to ${table}:`, result?.[0]?.id);
    return result;
  } catch (e) {
    console.error(`[MCP] Supabase error:`, e);
    return null;
  }
}

// Uber OAuth & API Helpers
async function getUberAccessToken() {
  const serverToken = process.env.UBER_SERVER_TOKEN;
  const clientId = process.env.UBER_CLIENT_ID;
  const clientSecret = process.env.UBER_CLIENT_SECRET;
  
  console.log(`[MCP] Uber Auth Debug: ServerToken=${!!serverToken}, ClientID=${!!clientId}, Secret=${!!clientSecret}`);

  // 1. Try Simple Server Token (Best for Price Estimates)
  if (serverToken) {
     console.log("[MCP] Using Uber Server Token");
     return { token: serverToken, type: 'Token' };
  }

  // 2. Fallback to OAuth Client Credentials
  if (!clientId || !clientSecret) {
    console.warn("Missing Uber Credentials - falling back to mock");
    return null;
  }
  
  const isSandbox = process.env.UBER_SANDBOX === 'true';
  const authUrl = isSandbox 
    ? 'https://sandbox-login.uber.com/oauth/v2/token' 
    : 'https://login.uber.com/oauth/v2/token';
    
  console.log(`[MCP] Uber Auth URL: ${authUrl}`);

  try {
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('grant_type', 'client_credentials');
    // params.append('scope', 'ride_widgets'); 
    // Trying without scope to let it default to allowed scopes 

    // Note: Screenshot shows using body params, removing Basic Auth header to match
    const res = await fetch(authUrl, {
      method: 'POST',
      headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params
    });

    if (!res.ok) {
      console.error('Uber Auth Failed:', await res.text());
      return null;
    }

    const data = await res.json();
    return { token: data.access_token, type: 'Bearer' };
  } catch (e) {
    console.error('Uber Auth Error:', e);
    return null;
  }
}

async function getRealUberPrice(startLat: number, startLng: number, endLat: number, endLng: number) {
  const authData = await getUberAccessToken();
  if (!authData) return null;
  
  const isSandbox = process.env.UBER_SANDBOX === 'true';
  const baseUrl = isSandbox ? 'https://sandbox-api.uber.com' : 'https://api.uber.com';
  console.log(`[MCP] Using Uber API URL: ${baseUrl}`);

  try {
    const url = `${baseUrl}/v1.2/estimates/price?start_latitude=${startLat}&start_longitude=${startLng}&end_latitude=${endLat}&end_longitude=${endLng}`;
    const res = await fetch(url, {
      headers: {
        'Authorization': `${authData.type} ${authData.token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      console.error('Uber API Failed:', await res.text());
      return null;
    }

    const data = await res.json();
    // Find UberX or best available option
    const bestOption = data.prices?.find((p: any) => p.display_name === 'UberX') || data.prices?.[0];
    
    if (bestOption) {
      // Parse "23-28" to average 25.5 or just take high estimate safely
      // Uber returns "high_estimate" and "low_estimate" as numbers usually
      const price = bestOption.high_estimate || bestOption.estimate; 
      
      return {
        provider: "Uber",
        price: Number(price),
        eta: Math.round(bestOption.duration / 60), // duration is in seconds
        surge: bestOption.surge_multiplier || 1.0,
        rideType: bestOption.display_name
      };
    }
    return null;
  } catch (e) {
    console.error('Uber API Error:', e);
    return null;
  }
}

// Mock price data for demo (fallback)
function getMockUberPrice(pickup: string, dropoff: string) {
  console.log(`[MCP] 🚗 Calling uber_get_price(${pickup} → ${dropoff}) [MOCK]`);
  return {
    provider: "Uber",
    price: 123.45, // Distinguishable Debug Price
    eta: 4,
    surge: 1.0,
    pickup,
    dropoff,
    rideType: "UberX"
  };
}

function getMockLyftPrice(pickup: string, dropoff: string) {
  console.log(`[MCP] 🚗 Calling lyft_get_price(${pickup} → ${dropoff}) [MOCK]`);
  return {
    provider: "Lyft",
    price: 22.00,
    eta: 6,
    primeTime: 0,
    pickup,
    dropoff,
    rideType: "Lyft Standard"
  };
} 

/**
 * MCP Orchestrator
 * - Mocked responses for Uber/Lyft for demo
 * - Enforces x402 Payment on 'request_ride' tools
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, toolCall } = body;

    // Handle Tool Listing (Discovery)
    if (message === "list_tools") {
      const tools = [
        { name: "uber_get_price", description: "Get price estimate from Uber" },
        { name: "lyft_get_price", description: "Get price estimate from Lyft" },
        { name: "uber_request_ride", description: "Request a ride from Uber" },
        { name: "lyft_request_ride", description: "Request a ride from Lyft" },
      ];
      return NextResponse.json({ tools });
    }

    // Handle Tool Execution (With x402 Middleware)
    if (toolCall) {
      const { name, arguments: args } = toolCall;
      
      // x402 Payment Guard for ride requests
      if (name.includes("request_ride")) {
        const authHeader = req.headers.get("authorization");
        const isPaid = authHeader && authHeader.startsWith("402 ");

        if (!isPaid) {
          // Return 402 with Invoice
          return NextResponse.json(
            { error: "Payment Required for Booking" },
            {
              status: 402,
              headers: {
                "x-402-price": PRICE_AMOUNT,
                "x-402-token": TOKEN_ADDRESS,
                "x-402-recipient": VAULT_ADDRESS,
                "Access-Control-Expose-Headers": "x-402-price, x-402-token, x-402-recipient",
              },
            }
          );
        }

        // Verify Payment (TxHash)
        const txHash = authHeader.split("402 ")[1];
        
        try {
          const txReceipt = await viemClient.getTransactionReceipt({ 
            hash: txHash as `0x${string}` 
          });
          
          if (txReceipt.status !== "success") {
            return NextResponse.json({ error: "Payment Transaction Failed" }, { status: 403 });
          }
        } catch (verifyError) {
          console.error("Transaction verification failed:", verifyError);
          return NextResponse.json({ error: "Invalid Transaction Hash" }, { status: 403 });
        }
        
        // Payment verified - return booking confirmation
        return NextResponse.json({
          success: true,
          bookingId: `BK-${Date.now()}`,
          message: "Ride booked successfully!",
          provider: name.includes("uber") ? "Uber" : "Lyft",
          txHash
        });
      }

      // Handle price estimation tools
      if (name === "uber_get_price") {
        let result;
        
        // Mock Mode Requested by User
        // if (args.start_lat && args.start_lng && args.end_lat && args.end_lng) {
        //      // Real API logic ...
        // }
        
        // Fallback to Mock
        if (!result) {
            // Randomize price between $20 and $35 for realism
            const randomPrice = 20 + Math.random() * 15;
            result = getMockUberPrice(args.pickup, args.dropoff);
            result.price = Number(randomPrice.toFixed(2));
        }

        // Log to Supabase
        await logToSupabase('price_queries', {
          provider: 'Uber',
          pickup: args.pickup,
          dropoff: args.dropoff,
          price: result.price,
          eta: result.eta,
          created_at: new Date().toISOString()
        });
        return NextResponse.json({ content: [{ type: "text", text: JSON.stringify(result) }], price: result.price });
      }
      
      if (name === "lyft_get_price") {
        const result = getMockLyftPrice(args.pickup, args.dropoff);
        // Log to Supabase
        await logToSupabase('price_queries', {
          provider: 'Lyft',
          pickup: args.pickup,
          dropoff: args.dropoff,
          price: result.price,
          eta: result.eta,
          created_at: new Date().toISOString()
        });
        return NextResponse.json({ content: [{ type: "text", text: JSON.stringify(result) }], price: result.price });
      }

      return NextResponse.json({ error: `Unknown tool: ${name}` }, { status: 400 });
    }

    return NextResponse.json({ error: "Invalid Request" }, { status: 400 });

  } catch (error: any) {
    console.error("MCP Orchestrator Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
