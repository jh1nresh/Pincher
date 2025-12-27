import { NextResponse } from "next/server";
import { agentAccount, agentWallet } from "@/lib/server-wallet";
import { parseEther } from "viem";

export async function POST(req: Request) {
  try {
    const { userAddress } = await req.json();

    if (!userAddress) {
      return NextResponse.json({ error: "Missing userAddress" }, { status: 400 });
    }

    if (!agentWallet || !agentAccount) {
        return NextResponse.json({ error: "Server Wallet Not Configured" }, { status: 500 });
    }

    // 1. Send 0.0001 ETH from Agent Wallet to User
    // Simulates the "Split Payment" from the 3 other agents
    console.log(`\n==========================================`);
    console.log(`💰 [AgentPay] INITIATING PAYMENT`);
    console.log(`   -> To User: ${userAddress}`);
    console.log(`   -> Amount: 0.0001 ETH (Split Share)`);
    console.log(`==========================================\n`);
    
    const hash = await agentWallet.sendTransaction({
        to: userAddress,
        value: parseEther("0.0001"), 
    });

    console.log(`\n✅ [AgentPay] SUCCESS!`);
    console.log(`   -> Tx Hash: https://sepolia.basescan.org/tx/${hash}\n`);

    return NextResponse.json({ success: true, txHash: hash });

  } catch (error: any) {
    console.error("[AgentPay] Error:", error);
    return NextResponse.json({ error: error.message || "Payment Failed" }, { status: 500 });
  }
}
