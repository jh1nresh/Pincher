
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { agentWallet } from "@/lib/server-wallet";
import { parseUnits } from "viem";

const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e';
const REFUND_AMOUNT = parseUnits('0.01', 6);

const ERC20_ABI = [
  {
    name: "transfer",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    outputs: [{ name: "", type: "bool" }],
  },
] as const;

export async function POST(req: Request) {
  try {
    const { rideId, userAddress } = await req.json();

    if (!rideId || !userAddress) {
      return NextResponse.json({ error: "Missing rideId or userAddress" }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    // 1. Verify User has a booking
    const { data: booking, error: findError } = await supabase
      .from("bookings")
      .select("id")
      .eq("ride_id", rideId)
      .eq("user_address", userAddress)
      .single();

    if (findError || !booking) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    // 2. Process Refund (Agent -> User)
    console.log(`[Refund] Sending 0.01 USDC to ${userAddress}...`);
    try {
        const hash = await agentWallet.writeContract({
            address: USDC_ADDRESS,
            abi: ERC20_ABI,
            functionName: "transfer",
            args: [userAddress, REFUND_AMOUNT],
        });
        console.log(`[Refund] Tx Hash: ${hash}`);
    } catch (txError: any) {
        console.error("Refund Tx Failed:", txError);
        // We might choose to abort here, or proceed if we want to allow cancel even if refund fails (bad UX).
        // For safety, let's abort.
        return NextResponse.json({ error: "Refund Transaction Failed" }, { status: 500 });
    }

    // 3. Delete Booking
    const { error: delError } = await supabase
      .from("bookings")
      .delete()
      .eq("id", booking.id);

    if (delError) {
        console.error("Booking Delete Failed", delError);
        return NextResponse.json({ error: "Booking Deletion Failed" }, { status: 500 });
    }

    // 4. Update Ride Status (if it was Full, make it Available)
    // We check count again properly
    const { count } = await supabase
      .from("bookings")
      .select("*", { count: 'exact', head: true })
      .eq("ride_id", rideId);
    
    // If count < 4 and status is 'full', unlock it
    // Actually we can just force update status if current status is 'full'
    // But checking current status is safer.
    const { data: ride } = await supabase.from('rides').select('status').eq('id', rideId).single();
    if (ride?.status === 'full' && (count || 0) < 4) {
        await supabase.from('rides').update({ status: 'escrow_holding' }).eq('id', rideId);
    }

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("Cancel Error:", error);
    return NextResponse.json({ error: error.message || "Internal Error" }, { status: 500 });
  }
}
