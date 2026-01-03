import { NextResponse } from "next/server";
import { parseEther, parseUnits } from "viem";
import { agentWallet, publicClient, agentAccount } from "@/lib/server-wallet";

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

    if (!agentWallet || !agentAccount) {
      console.error("Agent Wallet not initialized (Check FAUCET_PRIVATE_KEY)");
      return NextResponse.json({ error: "Server Wallet Check Failed" }, { status: 500 });
    }

    console.log(`Faucet request for: ${address}`);
    console.log(`Sender Address: ${agentAccount.address}`);

    // Check Balance
    const balance = await publicClient.getBalance({ address: agentAccount.address });
    console.log(`Agent ETH Balance: ${balance.toString()}`);

    if (balance < parseEther("0.0002")) {
        console.error("Agent has insufficient ETH for gas + faucet");
        return NextResponse.json({ error: "Faucet Dry (Insufficient ETH)" }, { status: 500 });
    }

    // 1. Send ETH (0.0001 ETH) for gas
    const ethHash = await agentWallet.sendTransaction({
      to: address,
      value: parseEther("0.0001"),
    });
    console.log(`Sent ETH: ${ethHash}`);

    // 2. Send USDC (0.05 USDC)
    const { request } = await publicClient.simulateContract({
      account: agentAccount,
      address: USDC_ADDRESS,
      abi: ERC20_ABI,
      functionName: 'transfer',
      args: [address, parseUnits("0.05", 6)], // USDC has 6 decimals
    });
    const usdcHash = await agentWallet.writeContract(request);
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
