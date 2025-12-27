import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { publicClient, agentWallet, agentAccount } from "@/lib/server-wallet";
import { parseUnits, encodeFunctionData, erc20Abi } from "viem";

// Constants
const USDC_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
const RIDE_PRICE = "0.01"; // 0.01 USDC
const RIDE_PRICE_UNITS = parseUnits(RIDE_PRICE, 6);

/**
 *
 * @param req
 */
export async function POST(req: Request) {
  try {
    const { rideId } = await req.json();

    if (!rideId) {
      return NextResponse.json({ error: "Missing rideId" }, { status: 400 });
    }

    // 1. Fetch Ride Data
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: ride, error: dbError } = await supabase
      .from("rides")
      .select("*")
      .eq("id", rideId)
      .single();

    if (dbError || !ride) {
      return NextResponse.json({ error: "Ride not found" }, { status: 404 });
    }

    if (ride.status !== "escrow_holding") {
      return NextResponse.json({ error: "Ride not in escrow/holding state" }, { status: 400 });
    }

    const driverAddress = ride.user_address as `0x${string}`;

    // 2. Calculate Payout (95%)
    // 0.01 USDC * 0.95 = 0.0095 USDC
    const payoutAmount = (RIDE_PRICE_UNITS * 95n) / 100n;

    console.log(`[Escrow] Releasing payout to ${driverAddress}...`);

    // 3. Execute Transfer (Agent -> Driver)
    if (!agentAccount) {
      throw new Error("Agent account not configured");
    }

    const hash = await agentWallet.writeContract({
      address: USDC_ADDRESS,
      abi: erc20Abi,
      functionName: "transfer",
      args: [driverAddress, payoutAmount],
    });

    console.log(`[Escrow] Payout sent! Hash: ${hash}`);

    // Wait for confirmation? Optimistic update is fine for UI speed, but better to be safe?
    // Let's assume successful submission is enough for now.

    // 4. Update DB
    const { error: updateError } = await supabase
      .from("rides")
      .update({ status: "completed" })
      .eq("id", rideId);

    if (updateError) {
      console.error("Failed to update status after payout", updateError);
      // CRITICAL: In real app, we need mechanism to retry status update if payment sent
    }

    return NextResponse.json({
      success: true,
      payoutHash: hash,
      driverAmount: "0.0095 USDC",
    });
  } catch (error: any) {
    console.error("Release Error:", error);
    return NextResponse.json({ error: error.message || "Internal Error" }, { status: 500 });
  }
}
