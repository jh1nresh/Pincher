import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Constants for the payment
// 0.01 USDC (USDC has 6 decimals, so 10000 = 0.01)
const PRICE_AMOUNT = "10000";
// Base Sepolia USDC Address
const TOKEN_ADDRESS = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";
// Your Wallet Address (The Facilitator/Receiver) - Replace with your own for testing!
const RECIPIENT_ADDRESS = "0x872989F7fCd4048acA370161989d3904E37A3cB3";

/**
 *
 * @param req
 */
export async function GET(req: Request) {
  // 1. Get the Authorization Header
  const authHeader = req.headers.get("authorization");

  // 2. Check if the user has paid
  const isPaid = authHeader && authHeader.startsWith("402 ");

  if (!isPaid) {
    // 3. Return 402 Payment Required
    return NextResponse.json(
      { error: "Payment Required" },
      {
        status: 402,
        headers: {
          "x-402-price": PRICE_AMOUNT,
          "x-402-token": TOKEN_ADDRESS,
          "x-402-recipient": RECIPIENT_ADDRESS,
          "Access-Control-Expose-Headers": "x-402-price, x-402-token, x-402-recipient",
        },
      },
    );
  }

  // 4. Return the Protected Data (if paid)
  // Fetch real data from Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: "Supabase configuration missing" }, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: protectedRides, error } = await supabase.from("rides").select("id, wechat_id");

  if (error) {
    console.error("Supabase Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data: protectedRides });
}
