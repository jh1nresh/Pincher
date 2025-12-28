module.exports = [
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Desktop/pincher/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "evmAddress",
    ()=>evmAddress,
    "paywall",
    ()=>paywall,
    "proxy",
    ()=>proxy,
    "server",
    ()=>server,
    "svmAddress",
    ()=>svmAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$next$2f$dist$2f$esm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@x402/next/dist/esm/index.js [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$core$2f$dist$2f$esm$2f$server$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@x402/core/dist/esm/server/index.mjs [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$core$2f$dist$2f$esm$2f$chunk$2d$RCHDDVGC$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@x402/core/dist/esm/chunk-RCHDDVGC.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$evm$2f$dist$2f$esm$2f$exact$2f$server$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@x402/evm/dist/esm/exact/server/index.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$svm$2f$dist$2f$esm$2f$exact$2f$server$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@x402/svm/dist/esm/exact/server/index.mjs [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$paywall$2f$dist$2f$esm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@x402/paywall/dist/esm/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$paywall$2f$dist$2f$esm$2f$evm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@x402/paywall/dist/esm/evm/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$paywall$2f$dist$2f$esm$2f$svm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@x402/paywall/dist/esm/svm/index.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$extensions$2f$dist$2f$esm$2f$bazaar$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@x402/extensions/dist/esm/bazaar/index.mjs [middleware] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$extensions$2f$dist$2f$esm$2f$chunk$2d$STXY3Q5R$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@x402/extensions/dist/esm/chunk-STXY3Q5R.mjs [middleware] (ecmascript)");
;
;
;
;
;
;
;
;
const facilitatorUrl = process.env.FACILITATOR_URL || "https://facilitator.x402.org";
const evmAddress = process.env.EVM_ADDRESS || "0x0000000000000000000000000000000000000000";
const svmAddress = process.env.SVM_ADDRESS || "0x0000000000000000000000000000000000000000";
if (!process.env.FACILITATOR_URL) {
    console.warn("⚠️  FACILITATOR_URL not set, using default:", facilitatorUrl);
}
if (!process.env.EVM_ADDRESS || !process.env.SVM_ADDRESS) {
    console.warn("⚠️  EVM_ADDRESS or SVM_ADDRESS not set, using defaults");
}
// Create HTTP facilitator client
const facilitatorClient = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$core$2f$dist$2f$esm$2f$chunk$2d$RCHDDVGC$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["HTTPFacilitatorClient"]({
    url: facilitatorUrl
});
const server = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$core$2f$dist$2f$esm$2f$server$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["x402ResourceServer"](facilitatorClient);
// Register schemes
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$evm$2f$dist$2f$esm$2f$exact$2f$server$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["registerExactEvmScheme"])(server);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$svm$2f$dist$2f$esm$2f$exact$2f$server$2f$index$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["registerExactSvmScheme"])(server);
const paywall = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$paywall$2f$dist$2f$esm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["createPaywall"])().withNetwork(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$paywall$2f$dist$2f$esm$2f$evm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["evmPaywall"]).withNetwork(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$paywall$2f$dist$2f$esm$2f$svm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["svmPaywall"]).withConfig({
    appName: process.env.APP_NAME || "Next x402 Demo",
    appLogo: process.env.APP_LOGO || "/x402-icon-blue.png",
    testnet: true
}).build();
const proxy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$next$2f$dist$2f$esm$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__$3c$locals$3e$__["paymentProxy"])({
    "/protected": {
        accepts: [
            {
                scheme: "exact",
                price: "$0.001",
                network: "eip155:84532",
                payTo: evmAddress
            },
            {
                scheme: "exact",
                price: "$0.001",
                network: "solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",
                payTo: svmAddress
            }
        ],
        description: "Premium music: x402 Remix",
        mimeType: "text/html",
        extensions: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$x402$2f$extensions$2f$dist$2f$esm$2f$chunk$2d$STXY3Q5R$2e$mjs__$5b$middleware$5d$__$28$ecmascript$29$__["declareDiscoveryExtension"])({})
        }
    }
}, server, undefined, paywall);
const config = {
    matcher: [
        "/protected/:path*"
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8266c4a8._.js.map