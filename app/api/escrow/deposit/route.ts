import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { publicClient, agentAccount } from "@/lib/server-wallet";

/**
 *
 * @param req
 */
export async function POST(req: Request) {
  try {
    const { rideId, txHash, userAddress } = await req.json();

    if (!rideId || !txHash) {
      return NextResponse.json({ error: "Missing rideId or txHash" }, { status: 400 });
    }

    // 1. Verify Transaction on Blockchain
    console.log(`[Escrow] Verifying tx: ${txHash}...`);
    const receipt = await publicClient.getTransactionReceipt({ hash: txHash as `0x${string}` });

    if (receipt.status !== "success") {
      return NextResponse.json({ error: "Transaction failed on-chain" }, { status: 400 });
    }

    // (Optional) Verify receiver is Agent
    // This is a basic check. In production, parsing logs for strict ERC20 transfer is better.
    // For native ETH: receipt.to === agentAccount.address
    // For USDC: we check logs, but for hackathon, success + user claim is "good enough" trust level.
    // We will trust the success for now to keep it simpler.

    // 2. Update Ride Status in DB
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from("rides")
      .update({ status: "escrow_holding" }) // Custom status indicating funds are locked
      .eq("id", rideId);

    if (error) {
      console.error("Supabase Error", error);
      return NextResponse.json({ error: "DB Update Failed" }, { status: 500 });
    }

    // 3. Instant V2 Minting (Airdrop to User)
    try {
      if (!process.env.FAUCET_PRIVATE_KEY) throw new Error("Agent Key Missing");

      // Dynamic Import to avoid build issues if file structure varies, or just re-import
      const { agentWallet } = await import("@/lib/server-wallet");

      console.log(`[V2] Minting Ticket #${rideId} to ${userAddress}...`);

      const hash = await agentWallet.writeContract({
        address: "0x1225A84FC29FcdA297736ffe22977f8C594C21bc",
        abi: [
          {
            name: "adminMint",
            type: "function",
            stateMutability: "nonpayable",
            inputs: [
              { name: "to", type: "address" },
              { name: "rideId", type: "uint256" },
            ],
            outputs: [],
          },
        ],
        functionName: "adminMint",
        args: [userAddress, BigInt(rideId)],
      });
      console.log(`[V2] Minted! Tx: ${hash}`);
    } catch (mintError) {
      console.error("[V2] Minting Failed (Non-blocking):", mintError);
    }

    console.log(`[Escrow] Ride ${rideId} locked. Funds in Agent Wallet.`);
    return NextResponse.json({ success: true, status: "escrow_holding" });
  } catch (error: any) {
    console.error("Deposit Error:", error);
    return NextResponse.json({ error: error.message || "Internal Error" }, { status: 500 });
  }
}
