import { NextResponse } from "next/server";
import { createWalletClient, http, parseEther, publicActions, parseUnits } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";

const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e';
const ERC20_ABI = [
  {
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

export async function POST(req: Request) {
  try {
    const { address } = await req.json();

    if (!address) {
      return NextResponse.json({ error: "Address is required" }, { status: 400 });
    }

    const pKey = process.env.FAUCET_PRIVATE_KEY;
    if (!pKey) {
      console.error("FAUCET_PRIVATE_KEY not set");
      return NextResponse.json({ error: "Faucet configuration error" }, { status: 500 });
    }

    // Setup Wallet Client
    const account = privateKeyToAccount(pKey as `0x${string}`);
    const client = createWalletClient({
      account,
      chain: baseSepolia,
      transport: http(),
    }).extend(publicActions);

    console.log(`Faucet request for: ${address}`);

    // 1. Send ETH (0.0001 ETH) for gas
    // @ts-expect-error - viem strict type mismatch for kzg on Base Sepolia
    const ethHash = await client.sendTransaction({
      to: address,
      value: parseEther("0.0001"),
    });
    console.log(`Sent ETH: ${ethHash}`);

    // 2. Send USDC (0.05 USDC)
    const { request } = await client.simulateContract({
      address: USDC_ADDRESS,
      abi: ERC20_ABI,
      functionName: 'transfer',
      args: [address, parseUnits("0.05", 6)], // USDC has 6 decimals
    });
    const usdcHash = await client.writeContract(request);
    console.log(`Sent USDC: ${usdcHash}`);

    return NextResponse.json({
      success: true,
      txHashes: {
        eth: ethHash,
        usdc: usdcHash
      },
      message: "Sent 0.0001 ETH and 0.05 USDC"
    });
  } catch (error: any) {
    console.error("Faucet Error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}
