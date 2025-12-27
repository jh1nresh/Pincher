(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/pincher/components/DemoDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// --- Constants ---
const INITIAL_AGENTS = [
    {
        id: 'grok',
        name: 'Grok (xAI)',
        provider: 'Direct',
        address: '0x71C...9A2',
        balance: 12.50,
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
    const [isSurge, setIsSurge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const addLog = (msg)=>setLogs((prev)=>[
                `[${new Date().toLocaleTimeString()}] ${msg}`,
                ...prev
            ].slice(0, 10));
    const addChat = (sender, content)=>{
        setChatMessages((prev)=>[
                ...prev,
                {
                    id: Date.now(),
                    sender,
                    content,
                    timestamp: new Date().toLocaleTimeString([], {
                        hour12: false,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    })
                }
            ].slice(-6));
    };
    // --- Simulation Loop ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoDashboard.useEffect": ()=>{
            const interval = setInterval({
                "DemoDashboard.useEffect.interval": ()=>{
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
            }["DemoDashboard.useEffect.interval"], 1000); // 1 sec tick
            return ({
                "DemoDashboard.useEffect": ()=>clearInterval(interval)
            })["DemoDashboard.useEffect"];
        }
    }["DemoDashboard.useEffect"], []);
    // --- Logic Triggers based on Tick ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoDashboard.useEffect": ()=>{
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
                setIsSurge(false); // Reset surge
                addLog(`Cycle #${cycleCount} Started. Route: ${start.split('(')[0]} -> ${end.split('(')[0]}`);
            }
            if (tick === 3) {
                addChat('Grok (xAI)', `Detected high-value route opportunity from ${currentRoute.from.split(' ')[0]}. Broadcasting.`);
            }
            // Phase 2: NEGOTIATING (10-25s)
            if (tick === 10) {
                setGlobalStatus('NEGOTIATING CONTRACT');
                // Fuzzy Logic: Random Surge Event (30% chance)
                if (Math.random() > 0.7) {
                    setIsSurge(true);
                    addLog('⚠️ ALERT: Uber Surge Pricing Active (2.5x). Re-negotiating...');
                    addChat('DeepSeek (V3)', 'Surge detected. Base fare increased to 0.5 USDC. Recalculating utility...');
                } else {
                    addLog('Standard Fate applied. Agents responding.');
                    addChat('GPT-4 (OpenAI)', 'Analyzing gas fees. Optimal split calculated.');
                }
            }
            if (tick === 15) {
                // Fuzzy Logic: Low Balance Check
                const poorAgent = agents.find({
                    "DemoDashboard.useEffect.poorAgent": (a)=>a.balance < 5
                }["DemoDashboard.useEffect.poorAgent"]);
                if (poorAgent) {
                    addChat(poorAgent.name, `System Prompt Override: EXTREME FRUGALITY. My balance is ${poorAgent.balance}. I trigger veto unless we split 5 ways.`);
                } else if (isSurge) {
                    addChat('Gemini (Google)', 'Surge accepted. Time urgency priority is HIGH.');
                } else {
                    addChat('DeepSeek (V3)', 'Payment logic verified. 0.001 ETH required for escrow.');
                }
            }
            if (tick === 18) {
                if (isSurge) {
                    addChat('Grok (xAI)', 'Whatever. Just pay it. I need to get there.');
                } else {
                    addChat('Gemini (Google)', 'Consensus reached. Locking funds now.');
                }
            }
            // Phase 3: LOCKING (25-30s)
            if (tick === 25) {
                setGlobalStatus('LOCKING FUNDS');
                updateAllAgents('LOCKED');
                // Simulate Payment (Cost depends on Surge)
                const cost = isSurge ? 0.5 : 0.1;
                setAgents({
                    "DemoDashboard.useEffect": (prev)=>prev.map({
                            "DemoDashboard.useEffect": (a)=>({
                                    ...a,
                                    balance: parseFloat((a.balance - cost).toFixed(2))
                                })
                        }["DemoDashboard.useEffect"])
                }["DemoDashboard.useEffect"]);
                addLog(`Escrow Contract Funded: ${cost * 4} USDC total (${isSurge ? 'SURGE' : 'Standard'}).`);
            }
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
                // Simulate Yield/Refund
                const yieldAmount = 0.05;
                setAgents({
                    "DemoDashboard.useEffect": (prev)=>prev.map({
                            "DemoDashboard.useEffect": (a)=>({
                                    ...a,
                                    status: 'IDLE',
                                    balance: parseFloat((a.balance + yieldAmount).toFixed(2))
                                })
                        }["DemoDashboard.useEffect"])
                }["DemoDashboard.useEffect"]);
                addLog('Trip Complete. Funds Released + Yield Distributed.');
                addChat('System', 'Protocol Cycle Complete.');
            }
        }
    }["DemoDashboard.useEffect"], [
        tick,
        cycleCount,
        currentRoute.from,
        isSurge
    ]); // Updated deps
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
        className: "flex flex-col h-screen w-full bg-slate-950 font-mono text-xs md:text-sm overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-14 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-6 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500",
                                children: "THE PERPETUAL CARPOOLER"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 187,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-1 bg-slate-800 rounded text-slate-400",
                                children: [
                                    "Cycle #",
                                    cycleCount,
                                    " | T+",
                                    tick,
                                    "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-1 bg-green-900/30 text-green-400 border border-green-900 rounded font-bold animate-pulse",
                                children: [
                                    globalStatus,
                                    " ",
                                    isSurge && '⚡️ SURGE'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-slate-500",
                        children: "Pincher Protocol V2 (Autonomous Mode)"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 grid grid-cols-12 gap-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-3 border-r border-slate-800 bg-slate-900/50 p-4 flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-slate-500 uppercase tracking-widest text-xs font-bold mb-2",
                                children: "Active Agents"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this),
                            agents.map((agent)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-800 border border-slate-700 p-3 rounded-lg flex items-center justify-between hover:border-slate-500 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-8 h-8 rounded-full flex items-center justify-center text-lg ${agent.color.replace('bg-', 'bg-opacity-20 text-')}`,
                                                    children: agent.avatar
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-slate-200",
                                                            children: agent.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-slate-500 font-mono",
                                                            children: agent.address
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                            lineNumber: 210,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-green-400 font-mono font-bold",
                                                    children: [
                                                        "$",
                                                        agent.balance
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `text-[10px] ${agent.status === 'IDLE' ? 'text-slate-500' : 'text-blue-400'}`,
                                                    children: agent.status
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                            lineNumber: 219,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, agent.id, true, {
                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                    lineNumber: 209,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto bg-slate-900 p-3 rounded border border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-slate-500 mb-2",
                                        children: "Protocol Stats"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Total Volume"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 231,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: "$4,829.20"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 232,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 230,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Active Loops"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 235,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 236,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 234,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-6 bg-slate-950 relative overflow-hidden flex items-center justify-center border-r border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-10",
                                style: {
                                    backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                                    backgroundSize: '40px 40px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-[500px] h-[500px] border border-slate-800 rounded-full bg-slate-900/50 flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_purple] z-10"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 251,
                                        columnNumber: 18
                                    }, this),
                                    agents.map((agent, i)=>{
                                        // Calculate mock position based on tick
                                        const angle = (tick * 5 + i * 90) % 360;
                                        const radius = tick > 30 && tick < 55 ? 50 : 200; // Move closer when MOVING
                                        const rad = angle * (Math.PI / 180);
                                        const x = Math.cos(rad) * radius;
                                        const y = Math.sin(rad) * radius;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute w-3 h-3 rounded-full ${agent.color} transition-all duration-1000 ease-linear shadow-lg`,
                                            style: {
                                                transform: `translate(${x}px, ${y}px)`
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 bg-black/50 px-1 rounded whitespace-nowrap",
                                                children: agent.name.split(' ')[0]
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 268,
                                                columnNumber: 29
                                            }, this)
                                        }, agent.id, false, {
                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                            lineNumber: 263,
                                            columnNumber: 26
                                        }, this);
                                    }),
                                    tick > 25 && tick < 55 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "absolute inset-0 w-full h-full pointer-events-none animate-pulse",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "250",
                                            cy: "250",
                                            r: "100",
                                            fill: "none",
                                            stroke: "rgba(168, 85, 247, 0.2)",
                                            strokeWidth: "100"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                            lineNumber: 278,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 277,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 left-4 text-xs text-slate-600",
                                children: "Lat: 33.6846 N | Lng: 117.8265 W"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-3 flex flex-col bg-slate-900/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-4 overflow-hidden flex flex-col border-b border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-slate-500 uppercase tracking-widest text-xs font-bold mb-4",
                                        children: "Agent Communication Link"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 292,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 space-y-3 overflow-y-auto",
                                        children: [
                                            chatMessages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-600 text-center mt-10",
                                                children: "Waiting for trigger..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                lineNumber: 294,
                                                columnNumber: 51
                                            }, this),
                                            chatMessages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-slate-800/80 p-2 rounded border-l-2 border-purple-500 animate-in fade-in slide-in-from-right-4 duration-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-baseline mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-purple-300 font-bold text-xs",
                                                                    children: msg.sender
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-slate-500",
                                                                    children: msg.timestamp
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-300 leading-relaxed",
                                                            children: msg.content
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                            lineNumber: 301,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, msg.id, true, {
                                                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                                    lineNumber: 296,
                                                    columnNumber: 25
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 293,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 291,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1/3 bg-black p-4 font-mono text-[10px] text-green-500 overflow-y-auto border-t border-slate-800",
                                children: logs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1 opacity-80",
                                        children: [
                                            "> ",
                                            log
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                        lineNumber: 310,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1 bg-slate-800 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-blue-500 transition-all duration-1000 ease-linear",
                    style: {
                        width: getProgressWidth()
                    }
                }, void 0, false, {
                    fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                    lineNumber: 319,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pincher/components/DemoDashboard.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s(DemoDashboard, "gx/mS2A4b7xG12vhwlk5tV0qYWs=");
_c = DemoDashboard;
var _c;
__turbopack_context__.k.register(_c, "DemoDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_pincher_components_DemoDashboard_tsx_a8aceb11._.js.map