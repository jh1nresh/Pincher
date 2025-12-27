import { NextResponse } from "next/server";
import { agentAccount } from "@/lib/server-wallet";

/**
 *
 */
export async function GET() {
  if (!agentAccount) {
    return NextResponse.json({ error: "Agent not configured" }, { status: 500 });
  }
  return NextResponse.json({ address: agentAccount.address });
}
