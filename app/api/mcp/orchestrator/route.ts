import { NextResponse } from "next/server";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { createPublicClient, http } from "viem";
import { baseSepolia } from "viem/chains";

// Configuration
const UBER_MCP_COMMAND = "npx";
const UBER_MCP_ARGS = ["-y", "@199-mcp/mcp-uber"];
const LYFT_MCP_URL = process.env.LYFT_MCP_URL || "";

// x402 Configuration
// 0.01 USDC (6 decimals)
const PRICE_AMOUNT = "10000"; 
const TOKEN_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
const VAULT_ADDRESS = "0x872989F7fCd4048acA370161989d3904E37A3cB3"; // Should be env var

// Viem Client for Verification
const viemClient = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

/**
 * MCP Orchestrator
 * - Aggregates tools from Uber (Local) and Lyft (Remote)
 * - Enforces x402 Payment on 'request_ride' tools
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, toolCall } = body; // Simplified protocol for this example

    // 1. Initialize Clients
    // Uber (Local)
    const uberTransport = new StdioClientTransport({
      command: UBER_MCP_COMMAND,
      args: UBER_MCP_ARGS,
    });
    const uberClient = new Client(
      { name: "pincher-uber-client", version: "1.0.0" },
      { capabilities: {} }
    );

    // Lyft (Remote) - Only if URL is provided
    let lyftClient: Client | null = null;
    if (LYFT_MCP_URL) {
      const lyftTransport = new SSEClientTransport(new URL(LYFT_MCP_URL));
      lyftClient = new Client(
        { name: "pincher-lyft-client", version: "1.0.0" },
        { capabilities: {} }
      );
      await lyftClient.connect(lyftTransport);
    }

    await uberClient.connect(uberTransport);

    // 2. Handle Tool Listing (Discovery)
    if (message === "list_tools") {
      const uberTools = await uberClient.listTools();
      let lyftTools: any[] = [];
      
      if (lyftClient) {
         try {
             const result = await lyftClient.listTools();
             lyftTools = result.tools || [];
         } catch (e) {
             console.error("Lyft MCP listing failed", e);
         }
      }

      // Merge and Prefix
      const aggregatedTools = [
        ...uberTools.tools.map((t: any) => ({ ...t, name: `uber_${t.name}` })),
        ...lyftTools.map((t: any) => ({ ...t, name: `lyft_${t.name}` })),
      ];

      return NextResponse.json({ tools: aggregatedTools });
    }

    // 3. Handle Tool Execution (With x402 Middleware)
    if (toolCall) {
      const { name, arguments: args } = toolCall;
      
      // A. x402 Payment Guard
      // Check if tool name implies cost (request_ride, book, pay)
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

         // Verify Payment (EIP-712 / TxHash)
         const txHash = authHeader.split("402 ")[1];
         // Simple Verification: Check Status
         const txReceipt = await viemClient.getTransactionReceipt({ hash: txHash as `0x${string}` });
         
         if (txReceipt.status !== "success") {
             return NextResponse.json({ error: "Payment Transaction Failed" }, { status: 403 });
         }
         
         // In production: Verify 'to' address and 'value' from logs
      }

      // B. Routing
      let result;
      if (name.startsWith("uber_")) {
        const originalName = name.replace("uber_", "");
        result = await uberClient.callTool({ name: originalName, arguments: args });
      } else if (name.startsWith("lyft_") && lyftClient) {
        const originalName = name.replace("lyft_", "");
        result = await lyftClient.callTool({ name: originalName, arguments: args });
      } else {
        throw new Error(`Unknown tool: ${name}`);
      }

      return NextResponse.json(result);
    }

    return NextResponse.json({ error: "Invalid Request" }, { status: 400 });

  } catch (error: any) {
    console.error("MCP Orchestrator Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
