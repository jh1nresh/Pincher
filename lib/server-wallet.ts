import { createWalletClient, createPublicClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";

// Reuse the Faucet Key for the Agent (or a dedicated AGENT_PRIVATE_KEY)
const PRIVATE_KEY = process.env.FAUCET_PRIVATE_KEY as `0x${string}`;

if (!PRIVATE_KEY) {
  console.warn("⚠️ AGENT WARNING: FAUCET_PRIVATE_KEY is missing. Agent wallet will fail.");
}

// 1. Account Setup
let account = null;
try {
  let key = process.env.FAUCET_PRIVATE_KEY || "";
  
  // Sanitize: Remove whitespace and newlines
  key = key.trim().replace(/[\n\r]/g, "");

  console.log("Debug: FAUCET_PRIVATE_KEY sanitized length:", key.length);

  // Auto-fix: Prepend 0x if missing
  if (key && !key.startsWith("0x")) {
    console.log("⚠️ Auto-fixing key: Prepending '0x'");
    key = `0x${key}`;
  }

  if (key && key.startsWith("0x")) {
    // Validate hex string format
    if (!/^0x[0-9a-fA-F]{64}$/.test(key)) {
       console.error("❌ Agent Wallet Error: Invalid Private Key format (Regex check failed). Length:", key.length);
       throw new Error("Invalid Private Key format");
    }
    account = privateKeyToAccount(key as `0x${string}`);
  } else {
    console.warn("❌ Key missing or invalid format (must start with 0x)");
  }
} catch (e) {
  console.error("❌ Agent Wallet Error: Invalid Private Key format. Check .env.local");
}
export const agentAccount = account;

// 2. Public Client (Read Blockchain)
export const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

// 3. Wallet Client (Write/Sign Transactions)
export const agentWallet = agentAccount
  ? createWalletClient({
      account: agentAccount!,
      chain: baseSepolia,
      transport: http(),
    })
  : (null as any);

// Helper: Check Agent Balance
/**
 *
 */
export async function getAgentBalance() {
  if (!agentAccount) return "0";
  const balance = await publicClient.getBalance({ address: agentAccount.address });
  // Return formatted string if needed, or keeping explicit bigint elsewhere
  return balance;
}
