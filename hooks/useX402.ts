import { useState, useCallback } from "react";
import { useWallets } from "@privy-io/react-auth";
import { createWalletClient, custom, parseUnits, encodeFunctionData } from "viem";
import { baseSepolia } from "viem/chains";

const ERC20_ABI = [
  {
    inputs: [
      { name: "to", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

/**
 *
 */
export function useX402() {
  const { wallets } = useWallets();
  const [loading, setLoading] = useState(false);
  const [paying, setPaying] = useState(false);

  const fetchWithPayment = useCallback(
    async (url: string, options: RequestInit = {}) => {
      setLoading(true);
      try {
        // 1. Initial Request
        const res = await fetch(url, options);

        // 2. If 200 OK (or anything other than 402), just return
        if (res.status !== 402) {
          return res;
        }

        // 3. Handle 402 Payment Required
        const wallet = wallets[0];
        if (!wallet) {
          alert("Please login/connect wallet to pay.");
          throw new Error("No wallet connected for payment");
        }

        const price = res.headers.get("x-402-price");
        const token = res.headers.get("x-402-token");
        const recipient = res.headers.get("x-402-recipient");

        if (!price || !token || !recipient) {
          throw new Error("Missing x402 headers");
        }

        // Trigger Payment Flow
        setPaying(true);
        await wallet.switchChain(baseSepolia.id);

        const provider = await wallet.getEthereumProvider();
        const client = createWalletClient({
          account: wallet.address as `0x${string}`,
          chain: baseSepolia,
          transport: custom(provider),
        });

        const data = encodeFunctionData({
          abi: ERC20_ABI,
          functionName: "transfer",
          args: [recipient as `0x${string}`, BigInt(price)],
        });

        // @ts-expect-error - KZG needed for blob txs but this is simple transfer
        const hash = await client.sendTransaction({
          to: token as `0x${string}`,
          data,
        });

        console.log("Payment sent:", hash);
        setPaying(false);

        // 4. Retry Request with Proof
        const newHeaders = new Headers(options.headers);
        newHeaders.set("Authorization", `402 ${hash}`);

        const retryRes = await fetch(url, {
          ...options,
          headers: newHeaders,
        });

        return retryRes;
      } catch (error) {
        console.error("x402 Error:", error);
        throw error;
      } finally {
        setLoading(false);
        setPaying(false);
      }
    },
    [wallets],
  );

  return { fetchWithPayment, loading, paying };
}
