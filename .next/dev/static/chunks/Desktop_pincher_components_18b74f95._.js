(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/pincher/components/SplitBillOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplitBillOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function SplitBillOverlay({ show, agents, totalAmount, onComplete, isLiveMode, userAddress, txStatus = 'IDLE', txHash }) {
    _s();
    const [internalStep, setInternalStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('IDLE');
    // Sync internal animation with external status if in Live Mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplitBillOverlay.useEffect": ()=>{
            if (!show) {
                setInternalStep('IDLE');
                return;
            }
            if (isLiveMode) {
                // In Live Mode, we listen to txStatus
                if (txStatus === 'WAITING') setInternalStep('SENDING'); // Stall at sending
                if (txStatus === 'PENDING') setInternalStep('CONFIRMING');
                if (txStatus === 'SUCCESS') {
                    setInternalStep('DONE');
                    setTimeout(onComplete, 2000);
                }
            } else {
                // Simulation Mode (Original Animation)
                setInternalStep('SENDING');
                setTimeout({
                    "SplitBillOverlay.useEffect": ()=>{
                        setInternalStep('CONFIRMING');
                        setTimeout({
                            "SplitBillOverlay.useEffect": ()=>{
                                setInternalStep('DONE');
                                setTimeout({
                                    "SplitBillOverlay.useEffect": ()=>{
                                        onComplete();
                                        setInternalStep('IDLE');
                                    }
                                }["SplitBillOverlay.useEffect"], 1500);
                            }
                        }["SplitBillOverlay.useEffect"], 1500);
                    }
                }["SplitBillOverlay.useEffect"], 2000);
            }
        }
    }["SplitBillOverlay.useEffect"], [
        show,
        isLiveMode,
        txStatus,
        onComplete
    ]);
    if (!show && internalStep === 'IDLE') return null;
    const splitAmount = (totalAmount / 4).toFixed(4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-[600px] h-[400px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-24 h-24 rounded-2xl border-2 flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-500 ${internalStep === 'CONFIRMING' || isLiveMode && txStatus === 'WAITING' ? 'bg-blue-600 border-blue-400 scale-110' : internalStep === 'DONE' ? 'bg-green-600 border-green-400 scale-100' : 'bg-slate-900 border-slate-700'}`,
                            children: internalStep === 'DONE' ? '✅' : isLiveMode && txStatus === 'WAITING' ? '✍️' : internalStep === 'CONFIRMING' ? '⏳' : '🏦'
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-white font-mono font-bold text-xl bg-black/50 px-4 py-2 rounded-lg border border-white/10",
                            children: "ESCROW VAULT"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this),
                        internalStep === 'DONE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-20 flex flex-col items-center animate-in zoom-in slide-in-from-bottom-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-green-500/20 text-green-400 border border-green-500/50 px-4 py-1 rounded-full text-sm font-bold mb-1",
                                    children: "ON-CHAIN CONFIRMED"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                    lineNumber: 76,
                                    columnNumber: 30
                                }, this),
                                txHash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://sepolia.basescan.org/tx/${txHash}`,
                                    target: "_blank",
                                    className: "text-[10px] text-blue-400 hover:underline",
                                    children: "View on BaseScan ↗"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                    lineNumber: 80,
                                    columnNumber: 34
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                            lineNumber: 75,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, this),
                agents.slice(0, 4).map((agent, i)=>{
                    const isTop = i < 2;
                    const isLeft = i % 2 === 0;
                    const top = isTop ? '15%' : '85%';
                    const left = isLeft ? '15%' : '85%';
                    const isUser = isLiveMode && userAddress && agent.address.toLowerCase() === userAddress.toLowerCase();
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-full h-full pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute flex flex-col items-center gap-2 transition-all duration-500",
                                style: {
                                    top,
                                    left,
                                    transform: 'translate(-50%, -50%)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-16 h-16 rounded-full border-4 ${isUser ? 'border-yellow-400 shadow-[0_0_20px_gold]' : 'border-white/20'} flex items-center justify-center text-3xl shadow-lg relative ${agent.color} z-10`,
                                        children: [
                                            agent.avatar,
                                            internalStep === 'SENDING' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-8 text-red-400 font-bold text-sm animate-fade-out-up",
                                                children: [
                                                    "-",
                                                    splitAmount
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                                lineNumber: 110,
                                                columnNumber: 42
                                            }, this),
                                            isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -bottom-2 bg-yellow-400 text-black text-[10px] font-bold px-2 rounded-full",
                                                children: "YOU"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                                lineNumber: 117,
                                                columnNumber: 42
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                        lineNumber: 105,
                                        columnNumber: 34
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-bold text-slate-200 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10",
                                        children: agent.name.split(' (')[0]
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                        lineNumber: 122,
                                        columnNumber: 34
                                    }, this),
                                    isUser && txStatus === 'WAITING' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-20 w-32 text-center text-xs font-bold text-blue-400 animate-pulse bg-black/80 p-2 rounded border border-blue-500/50",
                                        children: "Receiving Payment..."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                        lineNumber: 128,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                lineNumber: 101,
                                columnNumber: 30
                            }, this),
                            internalStep !== 'IDLE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute inset-0 w-full h-full pointer-events-none overflow-visible",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                            id: `arrow-${i}`,
                                            markerWidth: "10",
                                            markerHeight: "10",
                                            refX: "9",
                                            refY: "3",
                                            orient: "auto",
                                            markerUnits: "strokeWidth",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M0,0 L0,6 L9,3 z",
                                                fill: internalStep === 'DONE' ? '#4ade80' : '#60a5fa'
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                                lineNumber: 139,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                            lineNumber: 138,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                        lineNumber: 137,
                                        columnNumber: 37
                                    }, this),
                                    (()=>{
                                        const startX = isLeft ? 90 : 510;
                                        const startY = isTop ? 60 : 340;
                                        const endX = 300;
                                        const endY = 200;
                                        // If this is the User node, we don't draw a line FROM it, we draw TO it (conceptually via Escrow)
                                        // For simplicity: All agents send to Center. Center resolves to User.
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: startX,
                                                    y1: startY,
                                                    x2: endX,
                                                    y2: endY,
                                                    stroke: internalStep === 'DONE' ? '#4ade80' : 'rgba(255,255,255,0.1)',
                                                    strokeWidth: "2",
                                                    strokeDasharray: "4 4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 49
                                                }, this),
                                                (internalStep === 'SENDING' || internalStep === 'CONFIRMING') && !isUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    r: "6",
                                                    fill: "#60a5fa",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                                        dur: "1.5s",
                                                        repeatCount: "indefinite",
                                                        fill: "freeze",
                                                        path: `M${startX},${startY} L${endX},${endY}`,
                                                        keyPoints: "0;1",
                                                        keyTimes: "0;1",
                                                        calcMode: "linear"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 57
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 53
                                                }, this)
                                            ]
                                        }, void 0, true);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                                lineNumber: 136,
                                columnNumber: 33
                            }, this)
                        ]
                    }, agent.id, true, {
                        fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
                        lineNumber: 99,
                        columnNumber: 25
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
            lineNumber: 64,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/pincher/components/SplitBillOverlay.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, this);
}
_s(SplitBillOverlay, "Rjml1Axpfib5sP1elq8FkiUAEfk=");
_c = SplitBillOverlay;
var _c;
__turbopack_context__.k.register(_c, "SplitBillOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/components/LiveMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HOTSPOT_COORDS",
    ()=>HOTSPOT_COORDS,
    "default",
    ()=>LiveMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@vis.gl/react-google-maps/dist/index.modern.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
// --- Constants ---
const IRVINE_CENTER = {
    lat: 33.6846,
    lng: -117.8265
};
const MAP_ID = 'PINCHER_DEMO_MAP'; // Use a real styling ID if available, or string
const HOTSPOT_COORDS = {
    'UCI Campus (Engineering Hall)': {
        lat: 33.6405,
        lng: -117.8443
    },
    'Irvine Spectrum Center': {
        lat: 33.6509,
        lng: -117.7441
    },
    'John Wayne Airport (SNA)': {
        lat: 33.6762,
        lng: -117.8674
    },
    'Newport Beach Pier': {
        lat: 33.6073,
        lng: -117.9293
    },
    'Tustin District Legacy': {
        lat: 33.6951,
        lng: -117.8306
    },
    'Diamond Jamboree Plaza': {
        lat: 33.6980,
        lng: -117.8377
    },
    'Google Irvine Office': {
        lat: 33.6595,
        lng: -117.8540
    },
    'HUB': IRVINE_CENTER
};
// --- Sub-Component for Directions & Geometry ---
function DirectionsAndPath({ from, to, progress, onPathUpdate, onPositionUpdate }) {
    _s();
    const map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"])();
    const routesLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapsLibrary"])('routes');
    const geometryLibrary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapsLibrary"])('geometry');
    const [directionsService, setDirectionsService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [directionsRenderer, setDirectionsRenderer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const [currentPath, setCurrentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Init Services
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DirectionsAndPath.useEffect": ()=>{
            if (!routesLibrary || !map) return;
            setDirectionsService(new routesLibrary.DirectionsService());
            setDirectionsRenderer(new routesLibrary.DirectionsRenderer({
                map,
                suppressMarkers: true,
                polylineOptions: {
                    strokeColor: '#8b5cf6',
                    strokeWeight: 5
                }
            }));
        }
    }["DirectionsAndPath.useEffect"], [
        routesLibrary,
        map
    ]);
    // Fetch Route
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DirectionsAndPath.useEffect": ()=>{
            if (!directionsService || !directionsRenderer) return;
            if (from === 'HUB' || to === 'HUB') return;
            const start = HOTSPOT_COORDS[from];
            const end = HOTSPOT_COORDS[to];
            if (!start || !end) return;
            directionsService.route({
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            }).then({
                "DirectionsAndPath.useEffect": (response)=>{
                    directionsRenderer.setDirections(response);
                    // Extract Path for Interpolation
                    const route = response.routes[0];
                    if (route && route.overview_path) {
                        setCurrentPath(route.overview_path);
                        onPathUpdate(route.overview_path);
                    }
                    // Auto-fit bounds
                    const bounds = new google.maps.LatLngBounds();
                    bounds.extend(start);
                    bounds.extend(end);
                    map?.fitBounds(bounds, 50);
                }
            }["DirectionsAndPath.useEffect"]).catch({
                "DirectionsAndPath.useEffect": (e)=>console.error("Directions Error", e)
            }["DirectionsAndPath.useEffect"]);
        }
    }["DirectionsAndPath.useEffect"], [
        directionsService,
        directionsRenderer,
        from,
        to,
        map
    ]);
    // Calculate Interpolated Position based on Progress
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DirectionsAndPath.useEffect": ()=>{
            if (!geometryLibrary || currentPath.length === 0 || progress <= 0) {
                onPositionUpdate(null);
                return;
            }
            if (progress >= 100) {
                onPositionUpdate(currentPath[currentPath.length - 1]);
                return;
            }
            // Logic: 
            // 1. Total Length
            // 2. Target Length = Total * (progress/100)
            // 3. Find segment
            try {
                const totalDist = geometryLibrary.spherical.computeLength(currentPath);
                const targetDist = totalDist * (progress / 100);
                let distCovered = 0;
                for(let i = 0; i < currentPath.length - 1; i++){
                    const p1 = currentPath[i];
                    const p2 = currentPath[i + 1];
                    const segDist = geometryLibrary.spherical.computeDistanceBetween(p1, p2);
                    if (distCovered + segDist >= targetDist) {
                        // Found segment
                        const remaining = targetDist - distCovered;
                        const fraction = remaining / segDist;
                        const interpolated = geometryLibrary.spherical.interpolate(p1, p2, fraction);
                        onPositionUpdate(interpolated);
                        return;
                    }
                    distCovered += segDist;
                }
            } catch (e) {
                console.error("Geometry math error", e);
            }
        }
    }["DirectionsAndPath.useEffect"], [
        geometryLibrary,
        currentPath,
        progress
    ]);
    return null;
}
_s(DirectionsAndPath, "0Dfl7ssGyFPTsEqFp1EP/VyCWJA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapsLibrary"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapsLibrary"]
    ];
});
_c = DirectionsAndPath;
function LiveMap({ agents, from, to, progress }) {
    _s1();
    const apiKey = ("TURBOPACK compile-time value", "AIzaSyAT5jr_r_gNpxfMVnDB3z5KOm5e5OBUsnk");
    // State to hold the current interpolated position of the "Car"
    const [carPosition, setCarPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [path, setPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["APIProvider"], {
        apiKey: apiKey,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full relative tranisiton-colors duration-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Map"], {
                defaultCenter: IRVINE_CENTER,
                defaultZoom: 12,
                mapId: MAP_ID,
                disableDefaultUI: true,
                className: "w-full h-full rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DirectionsAndPath, {
                        from: from,
                        to: to,
                        progress: progress,
                        onPathUpdate: setPath,
                        onPositionUpdate: setCarPosition
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                        lineNumber: 157,
                        columnNumber: 19
                    }, this),
                    Object.entries(HOTSPOT_COORDS).map(([name, coords])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                            position: coords,
                            title: name,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-gray-400 rounded-full opacity-50 hover:opacity-100 hover:scale-150 transition-all cursor-help"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                                lineNumber: 168,
                                columnNumber: 27
                            }, this)
                        }, name, false, {
                            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                            lineNumber: 167,
                            columnNumber: 23
                        }, this)),
                    HOTSPOT_COORDS[from] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                        position: HOTSPOT_COORDS[from],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl animate-bounce",
                            children: "🚩"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                            lineNumber: 175,
                            columnNumber: 26
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                        lineNumber: 174,
                        columnNumber: 22
                    }, this),
                    HOTSPOT_COORDS[to] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                        position: HOTSPOT_COORDS[to],
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-2xl animate-bounce delay-75",
                            children: "🏁"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                            lineNumber: 180,
                            columnNumber: 26
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                        lineNumber: 179,
                        columnNumber: 22
                    }, this),
                    agents.map((agent, i)=>{
                        let pos = null;
                        if (agent.status === 'MOVING' && carPosition) {
                            // Follow the car (slightly offset so they don't stack)
                            // Use geometry to offset? Or simpler: 
                            // Just convert LatLng to literal and add tiny jitter
                            const lat = typeof carPosition.lat === 'function' ? carPosition.lat() : carPosition.lat;
                            const lng = typeof carPosition.lng === 'function' ? carPosition.lng() : carPosition.lng;
                            // Offset pattern: 2x2 grid around car
                            const offsetLat = Math.floor(i / 2) * 0.0002 - 0.0001;
                            const offsetLng = i % 2 * 0.0002 - 0.0001;
                            pos = {
                                lat: lat + offsetLat,
                                lng: lng + offsetLng
                            };
                        } else if (agent.status === 'LOCKED' && HOTSPOT_COORDS[from]) {
                            // Gather at start
                            const base = HOTSPOT_COORDS[from];
                            pos = {
                                lat: base.lat + Math.sin(i) * 0.001,
                                lng: base.lng + Math.cos(i) * 0.001
                            };
                        } else {
                            // Idle / Scanning
                            // Spread around Irvine Center or From
                            const base = HOTSPOT_COORDS[from] || IRVINE_CENTER;
                            pos = {
                                lat: base.lat + Math.sin(i * 2) * 0.008,
                                lng: base.lng + Math.cos(i * 2) * 0.008
                            };
                        }
                        if (!pos) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$vis$2e$gl$2f$react$2d$google$2d$maps$2f$dist$2f$index$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdvancedMarker"], {
                            position: pos,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-lg ${agent.color} transition-all duration-300 ease-linear`,
                                children: agent.avatar
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                                lineNumber: 215,
                                columnNumber: 32
                            }, this)
                        }, agent.id, false, {
                            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                            lineNumber: 214,
                            columnNumber: 28
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
                lineNumber: 150,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
            lineNumber: 149,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/pincher/components/LiveMap.tsx",
        lineNumber: 148,
        columnNumber: 9
    }, this);
}
_s1(LiveMap, "spPCEdrgwSREYDcWJND/DrBWi60=");
_c1 = LiveMap;
var _c, _c1;
__turbopack_context__.k.register(_c, "DirectionsAndPath");
__turbopack_context__.k.register(_c1, "LiveMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/components/PaymentToast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
'use client';
;
;
function PaymentToast({ show, from, to, amount }) {
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-95843090f74f4f03" + " " + "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-95843090f74f4f03" + " " + "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-95843090f74f4f03" + " " + "absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce-custom",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-95843090f74f4f03" + " " + "w-12 h-12 bg-yellow-400 rounded-full border-4 border-yellow-600 shadow-[0_0_30px_gold] flex items-center justify-center text-2xl font-bold text-yellow-900",
                            children: "$"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-95843090f74f4f03" + " " + "absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 text-yellow-400 px-4 py-2 rounded-full border border-yellow-500 backdrop-blur-md animate-fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-95843090f74f4f03" + " " + "font-bold",
                                children: from
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, this),
                            " paid ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-95843090f74f4f03" + " " + "font-mono text-white",
                                children: [
                                    amount,
                                    " USDC"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
                                lineNumber: 27,
                                columnNumber: 62
                            }, this),
                            " via x402"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
                lineNumber: 17,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "95843090f74f4f03",
                children: "@keyframes bounce-custom{0%,to{transform:translate(-50%)}50%{transform:translate(-50%,-100px)scale(1.2)}}.animate-bounce-custom.jsx-95843090f74f4f03{animation:1s ease-in-out infinite bounce-custom}.animate-fade-in-up.jsx-95843090f74f4f03{animation:.5s ease-out forwards fadeInUp}@keyframes fadeInUp{0%{opacity:0;transform:translate(-50%,20px)}to{opacity:1;transform:translate(-50%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pincher/components/PaymentToast.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = PaymentToast;
var _c;
__turbopack_context__.k.register(_c, "PaymentToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/components/MiniReceipt.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MiniReceipt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
'use client';
;
;
function MiniReceipt({ show, txHash, amount, from, to }) {
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-5267024ed3e70cfe" + " " + "absolute top-20 right-4 z-50 animate-slide-in-right",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-5267024ed3e70cfe" + " " + "bg-white rounded-lg shadow-xl border-l-4 border-green-500 overflow-hidden w-64 ring-1 ring-black/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-5267024ed3e70cfe" + " " + "p-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5267024ed3e70cfe" + " " + "flex items-center justify-between mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-5267024ed3e70cfe" + " " + "text-[10px] font-bold text-gray-500 uppercase tracking-wider",
                                    children: "On-Chain Receipt"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 19,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5267024ed3e70cfe" + " " + "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 20,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5267024ed3e70cfe" + " " + "flex items-center gap-2 mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5267024ed3e70cfe" + " " + "p-1.5 bg-green-100 rounded text-green-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        className: "jsx-5267024ed3e70cfe" + " " + "w-4 h-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M5 13l4 4L19 7",
                                            className: "jsx-5267024ed3e70cfe"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 25,
                                            columnNumber: 100
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                        lineNumber: 25,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5267024ed3e70cfe",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "text-sm font-bold text-gray-900",
                                            children: [
                                                amount,
                                                " USDC"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 28,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "text-[10px] text-gray-500",
                                            children: "Split Settlement Confirmed"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 29,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 27,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-5267024ed3e70cfe" + " " + "space-y-1 bg-gray-50 p-2 rounded border border-gray-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5267024ed3e70cfe" + " " + "flex justify-between text-[10px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "text-gray-400",
                                            children: "From"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 35,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "font-mono text-gray-700",
                                            children: from
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 36,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 34,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5267024ed3e70cfe" + " " + "flex justify-between text-[10px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "text-gray-400",
                                            children: "To"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 39,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "font-mono text-gray-700",
                                            children: to
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 40,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-5267024ed3e70cfe" + " " + "flex justify-between text-[10px] items-center pt-1 mt-1 border-t border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-5267024ed3e70cfe" + " " + "text-gray-400",
                                            children: "Tx"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 43,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://sepolia.basescan.org/tx/${txHash}`,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "jsx-5267024ed3e70cfe" + " " + "font-mono text-blue-600 hover:underline truncate w-24 text-right",
                                            children: [
                                                txHash.slice(0, 6),
                                                "...",
                                                txHash.slice(-4)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                            lineNumber: 44,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "5267024ed3e70cfe",
                children: "@keyframes slideInRight{0%{opacity:0;transform:translate(100%)}to{opacity:1;transform:translate(0)}}.animate-slide-in-right.jsx-5267024ed3e70cfe{animation:.5s cubic-bezier(.16,1,.3,1) forwards slideInRight}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pincher/components/MiniReceipt.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = MiniReceipt;
var _c;
__turbopack_context__.k.register(_c, "MiniReceipt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pincher/components/DemoDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$SplitBillOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/SplitBillOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/clients/createPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/utils/unit/formatUnits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/node_modules/abitype/dist/esm/human-readable/parseAbi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/chains/definitions/baseSepolia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/usePrivy-BWtc2XF-.mjs [app-client] (ecmascript) <export u as usePrivy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useWallets$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useWallets-kObl6ZLS.mjs [app-client] (ecmascript) <export u as useWallets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$LiveMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/LiveMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$PaymentToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/PaymentToast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$MiniReceipt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/components/MiniReceipt.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e'; // Base Sepolia
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPublicClient"])({
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"],
    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])()
});
// --- Constants ---
const INITIAL_AGENTS = [
    {
        id: 'grok',
        name: 'Grok (xAI)',
        provider: 'Direct',
        address: '0x71C...9A2',
        balance: 12.50,
        creditScore: 720,
        co2Saved: 14.5,
        inventory: [
            'Basic Pass'
        ],
        lastSeen: Date.now(),
        status: 'IDLE',
        color: 'bg-blue-500',
        avatar: '🚀'
    },
    {
        id: 'gemini',
        name: 'Gemini (Google)',
        provider: 'MPC',
        address: '0x88B...1C4',
        balance: 6.20,
        creditScore: 810,
        co2Saved: 28.2,
        inventory: [
            'Genesis Key'
        ],
        lastSeen: Date.now(),
        status: 'IDLE',
        color: 'bg-purple-500',
        avatar: '✨'
    },
    {
        id: 'gpt',
        name: 'GPT-4 (OpenAI)',
        provider: 'MPC',
        address: '0x2A9...88F',
        balance: 100.00,
        creditScore: 785,
        co2Saved: 42.0,
        inventory: [
            'OG Badge',
            'VIP'
        ],
        lastSeen: Date.now(),
        status: 'IDLE',
        color: 'bg-green-500',
        avatar: '🧠'
    },
    {
        id: 'deepseek',
        name: 'DeepSeek (V3)',
        provider: 'Direct',
        address: '0x99C...3D1',
        balance: 4.80,
        creditScore: 650,
        co2Saved: 5.1,
        inventory: [],
        lastSeen: Date.now(),
        status: 'IDLE',
        color: 'bg-cyan-500',
        avatar: '🐳'
    }
];
const HOTSPOTS = [
    'UCI Campus (Engineering Hall)',
    'Irvine Spectrum Center',
    'John Wayne Airport (SNA)',
    'Newport Beach Pier',
    'Tustin District Legacy',
    'Diamond Jamboree Plaza',
    'Google Irvine Office'
];
const CYCLE_DURATION = 60; // seconds for faster demo loop
function DemoDashboard() {
    _s();
    const [tick, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [cycleCount, setCycleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [agents, setAgents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_AGENTS);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [chatMessages, setChatMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [globalStatus, setGlobalStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('SYSTEM IDLE');
    const [currentRoute, setCurrentRoute] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        from: 'HUB',
        to: 'HUB'
    });
    const [isLiveMode, setIsLiveMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Live Chain Toggle
    // Award-Winning Features: Protocol Metrics
    const [protocolMetrics, setProtocolMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        tvl: 12450.50,
        yieldApy: 4.82,
        totalYield: 142.30,
        activeContracts: 12
    });
    const [isSurge, setIsSurge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // New state for surge pricing
    const { user, login, authenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"])();
    const { wallets } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useWallets$3e$__["useWallets"])(); // Get connected wallet
    const [showSplitOverlay, setShowSplitOverlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Toast State
    const [paymentToast, setPaymentToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        from: '',
        to: '',
        amount: 0
    });
    const [miniReceipt, setMiniReceipt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        txHash: '',
        amount: 0,
        from: '',
        to: ''
    });
    const addLog = (msg)=>setLogs((prev)=>[
                `[${new Date().toLocaleTimeString()}] ${msg}`,
                ...prev
            ].slice(0, 10));
    const addChat = (sender, content, type = 'CHAT')=>{
        setChatMessages((prev)=>[
                ...prev,
                {
                    id: Date.now(),
                    sender,
                    content,
                    type,
                    timestamp: new Date().toLocaleTimeString([], {
                        hour12: false,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    })
                }
            ].slice(-8)); // Increase history slightly
    };
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [txStatus, setTxStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('IDLE');
    const [realTxHash, setRealTxHash] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Helper to trigger Real Payment (Agents -> User)
    const triggerBackendPayout = async ()=>{
        if (!user?.wallet?.address) {
            addLog("⚠️ Connect Wallet for Live Chain Mode!");
            return;
        }
        setIsPaused(true); // Pause loop while agents "process" payment
        setTxStatus('WAITING');
        addLog("Agents initiatiing payment on-chain...");
        try {
            const response = await fetch('/api/agent-pay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userAddress: user.wallet.address
                })
            });
            const data = await response.json();
            if (data.success) {
                setTxStatus('PENDING'); // Visual: "Incoming..."
                setRealTxHash(data.txHash);
                addLog(`✅ Payment Sent! Hash: ${data.txHash.slice(0, 6)}...`);
                // Visual delay for "Confirmation"
                setTimeout(()=>{
                    setTxStatus('SUCCESS');
                }, 4000);
            } else {
                throw new Error(data.error);
            }
        } catch (e) {
            console.error("Payout Error", e);
            setTxStatus('ERROR');
            setIsPaused(false);
            addLog(`❌ Payment Failed: ${e.message}`);
        }
    };
    // --- Simulation Loop ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoDashboard.useEffect": ()=>{
            // Standard Interval
            const interval = setInterval({
                "DemoDashboard.useEffect.interval": ()=>{
                    if (isPaused) return; // PAUSE THE LOOP
                    setTick({
                        "DemoDashboard.useEffect.interval": (t)=>{
                            const next = t + 1;
                            if (next > CYCLE_DURATION) {
                                setCycleCount({
                                    "DemoDashboard.useEffect.interval": (c)=>c + 1
                                }["DemoDashboard.useEffect.interval"]);
                                return 0;
                            }
                            return next;
                        }
                    }["DemoDashboard.useEffect.interval"]);
                }
            }["DemoDashboard.useEffect.interval"], 1000); // 1 tick = 1 second
            return ({
                "DemoDashboard.useEffect": ()=>clearInterval(interval)
            })["DemoDashboard.useEffect"];
        }
    }["DemoDashboard.useEffect"], [
        isPaused
    ]); // Dependency added
    // --- Logic Triggers based on Tick ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoDashboard.useEffect": ()=>{
            // ... (Existing Phase 1 & 2 Logic) ...
            // Phase 1: SCANNING (0-10s)
            if (tick === 1) {
                setGlobalStatus('SCANNING NETWORK');
                updateAllAgents('SCANNING');
                // Randomize Route
                const start = HOTSPOTS[Math.floor(Math.random() * HOTSPOTS.length)];
                const end = HOTSPOTS[Math.floor(Math.random() * HOTSPOTS.length)];
                setCurrentRoute({
                    from: start,
                    to: end
                });
                addLog(`Cycle #${cycleCount} Started. Route: ${start.split('(')[0]} -> ${end.split('(')[0]}.`);
            }
            if (tick === 3) {
                if (Math.random() > 0.7) {
                    setIsSurge(true);
                    addLog('⚠️ ALERT: Uber Surge Pricing Active (2.5x). Re-negotiating...');
                    addChat('DeepSeek (V3)', 'ANALYSIS: Surge detected (2.5x multiplier). Cost basis exceeds standard deviation. Requesting re-vote.', 'DECISION');
                } else {
                    addLog('Standard Fare applied. Agents responding.');
                    addChat('GPT-4 (OpenAI)', 'CALCULATION: Gas < 5 gwei. Route Efficiency 98%. OPTIMAL.', 'DECISION');
                }
            }
            // Phase 2: NEGOTIATING (10-25s)
            if (tick === 10) {
                setGlobalStatus('NEGOTIATING CONTRACT');
                addLog('Standard Fare applied. Agents responding.');
                addChat('GPT-4 (OpenAI)', 'Analyzing gas fees. Optimal split calculated.');
            }
            if (tick === 15) {
                // Simple logic check
                const poorAgent = agents.find({
                    "DemoDashboard.useEffect.poorAgent": (a)=>a.balance < 5
                }["DemoDashboard.useEffect.poorAgent"]);
                if (poorAgent) {
                    addChat(poorAgent.name, `System Prompt Override: EXTREME FRUGALITY. My balance is ${poorAgent.balance}. I trigger veto unless we split 5 ways.`);
                } else {
                    addChat('DeepSeek (V3)', 'Payment logic verified. 0.001 ETH required for escrow.');
                }
            }
            if (tick === 18) {
                addChat('Gemini (Google)', 'Consensus reached. Locking funds now.');
            }
            // Phase 3: LOCKING (20-28s) - Payment Visualization
            if (tick === 20) {
                setGlobalStatus('LOCKING FUNDS');
                setShowSplitOverlay(true);
                // --- REAL TX TRIGGER ---
                if (isLiveMode && user?.wallet) {
                    triggerBackendPayout();
                }
            }
            if (tick === 28) {
                // Actual Balance Deduct happens after visualization
                updateAllAgents('LOCKED');
                const cost = 0.1;
                setAgents({
                    "DemoDashboard.useEffect": (prev)=>prev.map({
                            "DemoDashboard.useEffect": (a)=>({
                                    ...a,
                                    balance: parseFloat((a.balance - cost).toFixed(2))
                                })
                        }["DemoDashboard.useEffect"])
                }["DemoDashboard.useEffect"]);
                addLog(`Escrow Contract Funded: ${cost * 4} USDC total.`);
                // Trigger Receipt
                setMiniReceipt({
                    show: true,
                    txHash: realTxHash || '0x7f2c8...3a1d',
                    amount: cost * 4,
                    from: 'Multiple Senders',
                    to: 'Escrow Vault'
                });
                setTimeout({
                    "DemoDashboard.useEffect": ()=>setMiniReceipt({
                            "DemoDashboard.useEffect": (prev)=>({
                                    ...prev,
                                    show: false
                                })
                        }["DemoDashboard.useEffect"])
                }["DemoDashboard.useEffect"], 8000);
            }
            // ... (Existing Phase 4 & 5) ...
            // Phase 4: MOVING (30-50s)
            if (tick === 30) {
                setGlobalStatus('MOVING TO DESTINATION');
                updateAllAgents('MOVING');
                const dest = currentRoute.to.split(' ')[0];
                addLog(`Dispatch signal sent to Uber API. Vehicle en route to ${dest}.`);
            }
            if (tick === 40) {
                const dest = currentRoute.to.split(' ')[0];
                addChat('Grok (xAI)', `Traffic data update: 12 mins to ${dest}.`);
            }
            // Phase 5: SETTLED (55s)
            if (tick === 55) {
                setGlobalStatus('SETTLED');
                const totalYield = 0.05;
                const trafficBonus = 0; // Assuming no traffic bonus for now, as calculation is not provided in diff
                // Reset Real Tx State for next cycle
                setRealTxHash('');
                setTxStatus('IDLE');
                setIsSurge(false); // Reset surge state
                const scoreDelta = Math.floor(Math.random() * 5) + 2; // +2 to +6
                const co2Delta = 2.4; // constant per trip
                setAgents({
                    "DemoDashboard.useEffect": (prev)=>prev.map({
                            "DemoDashboard.useEffect": (a)=>{
                                // Penalty for low balance
                                let newScore = a.creditScore + scoreDelta;
                                if (a.balance < 5) newScore -= 10;
                                return {
                                    ...a,
                                    status: 'IDLE',
                                    lastSeen: Date.now(),
                                    balance: parseFloat((a.balance + totalYield).toFixed(2)),
                                    creditScore: Math.min(850, Math.max(300, newScore)),
                                    co2Saved: parseFloat((a.co2Saved + co2Delta).toFixed(1))
                                };
                            }
                        }["DemoDashboard.useEffect"])
                }["DemoDashboard.useEffect"]);
                addLog(`Trip Complete. CO2 Saved: ${co2Delta}kg. Yield: ${totalYield} (Traffic Bonus: ${trafficBonus > 0 ? 'YES' : 'NO'}).`);
                addChat('System', 'EXECUTION: Escrow released. Yield distributed via Aave V3. Carbon NFT Minted.', 'SYSTEM');
                // Update Metrics
                setProtocolMetrics({
                    "DemoDashboard.useEffect": (prev)=>({
                            ...prev,
                            tvl: prev.tvl + 0.5,
                            totalYield: prev.totalYield + totalYield
                        })
                }["DemoDashboard.useEffect"]);
            }
        }
    }["DemoDashboard.useEffect"], [
        tick,
        cycleCount,
        currentRoute.from,
        isLiveMode
    ]); // Depend on ISLiveMode 
    // --- Live Chain Data Fetcher ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoDashboard.useEffect": ()=>{
            async function fetchBalances() {
                if (!isLiveMode) return;
                // Replace Agent 1 with User if connected
                let updatedAgents = [
                    ...agents
                ];
                if (user?.wallet?.address) {
                    updatedAgents[0] = {
                        ...updatedAgents[0],
                        address: user.wallet.address,
                        name: 'YOU (Agent 1)'
                    };
                }
                // Fetch real balances
                try {
                    const balances = await Promise.all(updatedAgents.map({
                        "DemoDashboard.useEffect.fetchBalances": async (agent)=>{
                            if (agent.address.includes('...')) return agent.balance; // Skip mocks
                            const bal = await client.readContract({
                                address: USDC_ADDRESS,
                                abi: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$node_modules$2f$abitype$2f$dist$2f$esm$2f$human$2d$readable$2f$parseAbi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAbi"])([
                                    'function balanceOf(address) view returns (uint256)'
                                ]),
                                functionName: 'balanceOf',
                                args: [
                                    agent.address
                                ]
                            });
                            return parseFloat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatUnits"])(bal, 6)); // USDC 6 decimals
                        }
                    }["DemoDashboard.useEffect.fetchBalances"]));
                    setAgents({
                        "DemoDashboard.useEffect.fetchBalances": (prev)=>prev.map({
                                "DemoDashboard.useEffect.fetchBalances": (a, i)=>({
                                        ...a,
                                        balance: balances[i]
                                    })
                            }["DemoDashboard.useEffect.fetchBalances"])
                    }["DemoDashboard.useEffect.fetchBalances"]);
                    addLog('🔗 On-Chain Data Synced (Base Sepolia)');
                } catch (e) {
                    console.error("Chain Read Error", e);
                }
            }
            if (isLiveMode && tick % 10 === 0) fetchBalances(); // Poll every 10s
        }
    }["DemoDashboard.useEffect"], [
        isLiveMode,
        tick,
        user
    ]);
    const updateAllAgents = (status)=>{
        setAgents((prev)=>prev.map((a)=>({
                    ...a,
                    status
                })));
    };
    // --- Render Helpers ---
    const getProgressWidth = ()=>{
        const pct = tick / CYCLE_DURATION * 100;
        return `${pct}%`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen bg-black overflow-hidden font-mono text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$LiveMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    agents: agents,
                    from: currentRoute.from,
                    to: currentRoute.to,
                    progress: tick >= 30 && tick <= 55 ? (tick - 30) / 25 * 100 : 0
                }, void 0, false, {
                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                    lineNumber: 348,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$SplitBillOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                show: showSplitOverlay,
                agents: agents,
                totalAmount: 0.4,
                onComplete: ()=>{
                    setShowSplitOverlay(false);
                    if (isLiveMode) setIsPaused(false);
                },
                isLiveMode: isLiveMode,
                userAddress: user?.wallet?.address,
                txStatus: txStatus,
                txHash: realTxHash
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-20 border-b border-white/5 bg-black/20 backdrop-blur-xl flex items-center justify-between px-8 shrink-0 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-black italic bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-tighter drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]",
                                    children: [
                                        "PINCHER ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/20 font-thin not-italic ml-1",
                                            children: "PROTOCOL"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                            lineNumber: 374,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                    lineNumber: 373,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 372,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center gap-6 bg-white/5 rounded-full px-6 py-2 border border-white/10 shadow-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col leading-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] text-cyan-400/70 font-bold uppercase tracking-widest",
                                                children: "TVL Locked"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 381,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-cyan-100 font-mono tracking-wider",
                                                children: [
                                                    "$",
                                                    protocolMetrics.tvl.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 382,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 380,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px h-6 bg-white/10"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 384,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col leading-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[9px] text-purple-400/70 font-bold uppercase tracking-widest",
                                                children: "Yield APY"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 386,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-purple-300 font-mono tracking-wider animate-pulse",
                                                children: [
                                                    protocolMetrics.yieldApy,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 387,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 385,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 379,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-1 bg-black/40 rounded-full border border-white/10 text-slate-400 font-mono text-[10px] tracking-widest flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 392,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "CYCLE #",
                                            cycleCount
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 393,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-600",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 394,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "T+",
                                            tick,
                                            "s"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 395,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-600",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 396,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-cyan-400 font-bold",
                                        children: globalStatus
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 397,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 391,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsLiveMode(!isLiveMode),
                                className: `px-5 py-2 rounded-full text-xs font-bold border transition-all duration-300 ${isLiveMode ? 'bg-green-500/10 border-green-500 text-green-400 shadow-[0_0_20px_rgba(74,222,128,0.3)]' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:border-white/20'}`,
                                children: isLiveMode ? '● LIVE MAINNET' : '○ SIMULATION'
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 403,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (!authenticated) login();
                                    else if (user?.wallet) {
                                        navigator.clipboard.writeText(user.wallet.address);
                                        addLog('Address copied to clipboard!');
                                    }
                                },
                                className: `relative group px-6 py-2 rounded-full text-xs font-bold border transition-all duration-300 overflow-hidden ${authenticated ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]' : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/30'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 427,
                                        columnNumber: 17
                                    }, this),
                                    authenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_cyan]"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 430,
                                                columnNumber: 24
                                            }, this),
                                            user?.wallet?.address.slice(0, 6),
                                            "..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 429,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tracking-widest",
                                        children: "⚡ CONNECT"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 434,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-6 z-10 flex flex-col gap-3",
                children: agents.map((agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group flex items-center gap-3 bg-black/40 backdrop-blur-md p-2 pr-4 rounded-xl border border-white/5 transition-all duration-300 hover:scale-105 hover:bg-black/60 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-inner ${agent.color.replace('bg-', 'bg-opacity-20 text-white border border-white/10 ' + agent.color.replace('bg-', 'border-').replace('500', '400'))}`,
                                children: agent.avatar
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 444,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-slate-200 leading-none uppercase tracking-wider group-hover:text-cyan-300 transition-colors",
                                        children: agent.name.split(' (')[0]
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 448,
                                        columnNumber: 22
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-green-400 font-mono leading-none mt-1",
                                        children: [
                                            "$",
                                            agent.balance.toFixed(2)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 449,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 447,
                                columnNumber: 18
                            }, this),
                            agent.status === 'MOVING' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1.5 h-1.5 bg-green-500 rounded-full animate-ping ml-2"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 451,
                                columnNumber: 48
                            }, this)
                        ]
                    }, agent.id, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 443,
                        columnNumber: 14
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-24 right-6 z-10 flex flex-col gap-2 w-80 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 p-4 overflow-hidden flex flex-col border border-white/10 bg-black/60 backdrop-blur-xl rounded-2xl shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-cyan-400 uppercase tracking-[0.2em] text-[10px] font-bold mb-4 flex items-center gap-2 border-b border-white/5 pb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                    lineNumber: 460,
                                    columnNumber: 21
                                }, this),
                                "NEURAL LINK"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                            lineNumber: 459,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: chatMessages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-2 rounded border-l-2 animate-in fade-in slide-in-from-right-4 duration-300 ${msg.type === 'DECISION' ? 'bg-cyan-900/20 border-cyan-500' : msg.type === 'SYSTEM' ? 'bg-purple-900/20 border-purple-500' : 'bg-white/5 border-slate-600'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-baseline mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `${msg.type === 'DECISION' ? 'text-cyan-400 font-mono uppercase text-[9px] tracking-wider' : msg.type === 'SYSTEM' ? 'text-purple-400 font-mono uppercase text-[9px] tracking-wider' : 'text-slate-300 font-bold text-[10px]'}`,
                                                    children: msg.sender
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] text-slate-600 font-mono",
                                                    children: msg.timestamp
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                    lineNumber: 476,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                            lineNumber: 470,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${msg.type === 'DECISION' ? 'text-cyan-100 font-mono text-[10px]' : 'text-slate-300 text-xs leading-relaxed'}`,
                                            children: [
                                                msg.type === 'DECISION' ? '> ' : '',
                                                msg.content
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                            lineNumber: 478,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, msg.id, true, {
                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                    lineNumber: 465,
                                    columnNumber: 25
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                            lineNumber: 463,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                    lineNumber: 458,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 w-full flex justify-center pb-10 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pointer-events-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$PaymentToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            show: paymentToast.show,
                            from: paymentToast.from,
                            to: paymentToast.to,
                            amount: paymentToast.amount
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                            lineNumber: 490,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$components$2f$MiniReceipt$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            show: miniReceipt.show,
                            txHash: miniReceipt.txHash,
                            amount: miniReceipt.amount,
                            from: miniReceipt.from,
                            to: miniReceipt.to
                        }, void 0, false, {
                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                            lineNumber: 496,
                            columnNumber: 14
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                    lineNumber: 489,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-full h-1 bg-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-linear shadow-[0_0_10px_rgba(168,85,247,0.5)]",
                    style: {
                        width: getProgressWidth()
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                    lineNumber: 508,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 507,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
        lineNumber: 344,
        columnNumber: 5
    }, this);
}
_s(DemoDashboard, "pEonJjkHPCRsKbxxP/Wr9ko4kX8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__usePrivy$3e$__["usePrivy"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__u__as__useWallets$3e$__["useWallets"]
    ];
});
_c = DemoDashboard;
var _c;
__turbopack_context__.k.register(_c, "DemoDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_pincher_components_18b74f95._.js.map