module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Desktop/pincher/lib/server-wallet.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "agentAccount",
    ()=>agentAccount,
    "agentWallet",
    ()=>agentWallet,
    "getAgentBalance",
    ()=>getAgentBalance,
    "publicClient",
    ()=>publicClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/clients/createWalletClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/clients/createPublicClient.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/clients/transports/http.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$privateKeyToAccount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/accounts/privateKeyToAccount.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/chains/definitions/baseSepolia.js [app-route] (ecmascript)");
;
;
;
// Reuse the Faucet Key for the Agent (or a dedicated AGENT_PRIVATE_KEY)
const PRIVATE_KEY = process.env.FAUCET_PRIVATE_KEY;
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
        account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$privateKeyToAccount$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["privateKeyToAccount"])(key);
    } else {
        console.warn("❌ Key missing or invalid format (must start with 0x)");
    }
} catch (e) {
    console.error("❌ Agent Wallet Error: Invalid Private Key format. Check .env.local");
}
const agentAccount = account;
const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createPublicClient"])({
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["baseSepolia"],
    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["http"])()
});
const agentWallet = agentAccount ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createWalletClient"])({
    account: agentAccount,
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["baseSepolia"],
    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["http"])()
}) : null;
async function getAgentBalance() {
    if (!agentAccount) return "0";
    const balance = await publicClient.getBalance({
        address: agentAccount.address
    });
    // Return formatted string if needed, or keeping explicit bigint elsewhere
    return balance;
}
}),
"[project]/Desktop/pincher/app/api/escrow/deposit/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@supabase/supabase-js/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$lib$2f$server$2d$wallet$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/lib/server-wallet.ts [app-route] (ecmascript)");
;
;
;
async function POST(req) {
    try {
        const { rideId, txHash, userAddress } = await req.json();
        if (!rideId || !txHash) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing rideId or txHash"
            }, {
                status: 400
            });
        }
        // 1. Verify Transaction on Blockchain
        console.log(`[Escrow] Verifying tx: ${txHash}...`);
        const receipt = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$lib$2f$server$2d$wallet$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["publicClient"].getTransactionReceipt({
            hash: txHash
        });
        if (receipt.status !== "success") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Transaction failed on-chain"
            }, {
                status: 400
            });
        }
        // (Optional) Verify receiver is Agent
        // This is a basic check. In production, parsing logs for strict ERC20 transfer is better.
        // For native ETH: receipt.to === agentAccount.address
        // For USDC: we check logs, but for hackathon, success + user claim is "good enough" trust level.
        // We will trust the success for now to keep it simpler.
        // 2. Insert Booking & Update Ride Status
        const supabaseUrl = ("TURBOPACK compile-time value", "https://ksfucvikvbnkocjkrvev.supabase.co");
        const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzZnVjdmlrdmJua29jamtydmV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2MDQ3NTQsImV4cCI6MjA4MjE4MDc1NH0.dvnPd1IMH1ANvjySFAnq5EhR_m-qTfb4xKmR845qfSg");
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
        // A. Insert Booking
        const { error: bookingError } = await supabase.from("bookings").insert([
            {
                ride_id: rideId,
                user_address: userAddress,
                tx_hash: txHash
            }
        ]);
        if (bookingError) {
            console.error("Booking Insert Failed", bookingError);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Booking Failed (DB)"
            }, {
                status: 500
            });
        }
        // B. Check Count & Update Status
        const { count, error: countError } = await supabase.from("bookings").select("*", {
            count: 'exact',
            head: true
        }).eq("ride_id", rideId);
        // Default limit = 4
        if (count !== null && count >= 4) {
            await supabase.from("rides").update({
                status: "full"
            }).eq("id", rideId);
        } else {
            // Ensure it is at least 'escrow_holding' if it was 'active' to show it's live? 
            // Actually user wants "Active" until Full. 
            // But our UI uses 'escrow_holding' to show yellow "Escrow".
            // Let's keep 'escrow_holding' which signifies "At least one person paid".
            // BUT logic: "Active" = joins allowed. "Full" = joins disabled.
            // Current UI: 'escrow_holding' allows joins (Passenger Actions).
            // So we keep 'escrow_holding'.
            await supabase.from("rides").update({
                status: "escrow_holding"
            }).eq("id", rideId);
        }
        // 3. Instant V2 Minting (Airdrop to User)
        try {
            if (!process.env.FAUCET_PRIVATE_KEY) throw new Error("Agent Key Missing");
            // Dynamic Import to avoid build issues if file structure varies, or just re-import
            const { agentWallet } = await __turbopack_context__.A("[project]/Desktop/pincher/lib/server-wallet.ts [app-route] (ecmascript, async loader)");
            console.log(`[V2] Minting Ticket #${rideId} to ${userAddress}...`);
            const hash = await agentWallet.writeContract({
                address: "0x1225A84FC29FcdA297736ffe22977f8C594C21bc",
                abi: [
                    {
                        name: "adminMint",
                        type: "function",
                        stateMutability: "nonpayable",
                        inputs: [
                            {
                                name: "to",
                                type: "address"
                            },
                            {
                                name: "rideId",
                                type: "uint256"
                            }
                        ],
                        outputs: []
                    }
                ],
                functionName: "adminMint",
                args: [
                    userAddress,
                    BigInt(rideId)
                ]
            });
            console.log(`[V2] Minted! Tx: ${hash}`);
        } catch (mintError) {
            console.error("[V2] Minting Failed (Non-blocking):", mintError);
        }
        console.log(`[Escrow] Ride ${rideId} locked. Funds in Agent Wallet.`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            status: "escrow_holding"
        });
    } catch (error) {
        console.error("Deposit Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Internal Error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__58f22b46._.js.map