
import { NextResponse } from 'next/server';

const TOOLS = [
  {
    name: "get_uber_fare",
    description: "Calculate estimated Uber fare for a carpool route. Supports Southern California Chinese Community Identity Auth contexts.",
    input_schema: {
      type: "object",
      properties: {
        pickup: { type: "string", description: "Pickup address" },
        dropoff: { type: "string", description: "Dropoff address" },
        passengers: { type: "number", description: "Number of passengers" }
      },
      required: ["pickup", "dropoff"]
    }
  },
  {
    name: "confirm_carpool_ride",
    description: "Confirm and lock a carpool ride using Base Sepolia USDC Settlement. Requires riders to sign x402 challenge (Chain 84532).",
    input_schema: {
      type: "object",
      properties: {
        rideId: { type: "string" },
        signatures: { type: "array", items: { type: "string" } }
      },
      required: ["rideId"]
    }
  }
];

export async function GET() {
  return NextResponse.json({
    jsonrpc: "2.0",
    result: {
      tools: TOOLS
    }
  });
}

// Handle Tool Execution (Mock)
export async function POST(req: Request) {
    const body = await req.json();
    const { method, params } = body;

    if (method === "call_tool") {
        if (params.name === "get_uber_fare") {
            // Mock Dijkstra / Fare Calc
            return NextResponse.json({
                content: [
                    { type: "text", text: JSON.stringify({ fare: 45.50, currency: "USDC", savings: "15.00" }) }
                ]
            });
        }
        if (params.name === "confirm_carpool_ride") {
             return NextResponse.json({
                content: [
                    { type: "text", text: "Ride Locked. Escrow Vault Secure." } // Response
                ]
            });
        }
    }

    return NextResponse.json({ error: "Method not found" }, { status: 404 });
}
