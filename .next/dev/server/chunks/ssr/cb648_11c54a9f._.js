module.exports = [
"[project]/Desktop/pincher/node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function CheckCircleIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](CheckCircleIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/js-sdk-core/dist/esm/utils/formatters.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatLamportsAmount",
    ()=>o,
    "formatTokenAmount",
    ()=>i,
    "formatWalletAddress",
    ()=>n,
    "formatWeiAmount",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/utils/unit/formatEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/utils/unit/formatUnits.js [app-ssr] (ecmascript)");
;
function n(e) {
    return e ? `${e.slice(0, 5)}…${e.slice(-4)}` : "";
}
function t({ wei: r, precision: n = 3 }) {
    return parseFloat((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(r)).toFixed(n).replace(/0+$/, "").replace(/\.$/, "");
}
function i({ amount: e, decimals: n }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(BigInt(e), n);
}
function o({ lamports: e }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatUnits$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatUnits"])(e, 9);
}
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/Button-BCV6mjvS.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "B",
    ()=>c,
    "E",
    ()=>g,
    "P",
    ()=>n,
    "S",
    ()=>b,
    "a",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useActiveWallet$2d$BeOB3HTh$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useActiveWallet-BeOB3HTh.mjs [app-ssr] (ecmascript)");
;
;
;
const c = ({ variant: o = "primary", size: e = "lg", children: a, success: l, ...d })=>{
    switch(o){
        case "secondary":
            /*#__PURE__*/ return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(b, {
                size: e,
                ...d,
                children: a
            });
        case "error":
            /*#__PURE__*/ return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(b, {
                $warn: !0,
                size: e,
                ...d,
                children: a
            });
        case "muted":
            /*#__PURE__*/ return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(p, {
                size: e,
                ...d,
                children: a
            });
        default:
            /*#__PURE__*/ return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(n, {
                size: e,
                success: l,
                ...d,
                children: a
            });
    }
}, i = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].button.withConfig({
    displayName: "BaseButton",
    componentId: "sc-e537b447-0"
})([
    "display:flex;flex-direction:row;align-items:center;justify-content:center;user-select:none;&{width:auto;cursor:pointer;border-radius:",
    ";font-size:14px;font-style:normal;font-weight:500;line-height:22px;letter-spacing:-0.016px;}&&{height:",
    ";padding:0 ",
    ";}"
], ({ $size: r })=>"sm" === r ? "6px" : "var(--privy-border-radius-sm)", ({ $size: r })=>"sm" === r ? "28px" : "48px", ({ $size: r })=>"sm" === r ? "10px" : "16px"), n = ({ children: a, loading: l, disabled: c, success: i, size: n = "lg", loadingText: t = "Loading...", as: s, onClick: b, ...p })=>{
    let u = "a" === s, y = !(!l && !c); /*#__PURE__*/ 
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(v, {
        as: s,
        disabled: u ? void 0 : y,
        "aria-disabled": u ? y : void 0,
        $success: i,
        $size: n,
        onClick: (r)=>{
            u && y ? r.preventDefault() : b?.(r);
        },
        ...p,
        children: l ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useActiveWallet$2d$BeOB3HTh$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["G"], {}),
                t ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    style: {
                        marginLeft: "8px"
                    },
                    children: t
                }) : null
            ]
        }) : a
    });
}, t = ({ children: o, loading: e, disabled: a, ...l })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(s, {
        disabled: a,
        ...l,
        children: e ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useActiveWallet$2d$BeOB3HTh$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["G"], {
            color: "var(--privy-color-foreground-accent)"
        }) : o
    });
let s = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"])(i).withConfig({
    displayName: "StyledPrimaryButtonWithoutGray",
    componentId: "sc-e537b447-1"
})([
    "position:relative;&&{background-color:var(--privy-color-accent);color:var(--privy-color-foreground-accent);transition:background-color 200ms ease;}&:hover{background-color:var(--privy-color-accent-dark);}&:active{background-color:var(--privy-color-accent-dark);}&:disabled,&:hover:disabled,&:active:disabled{cursor:not-allowed;color:var(--privy-color-foreground-disabled);background-color:var(--privy-color-accent-dark);}"
]), v = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"])(i).withConfig({
    displayName: "StyledPrimaryButton",
    componentId: "sc-e537b447-2"
})([
    "position:relative;&&{background-color:",
    ";color:var(--privy-color-foreground-accent);transition:background-color 200ms ease;}&:hover{background-color:",
    ";}&:active{background-color:",
    ";}&:focus{outline:none;box-shadow:0 0 0 3px #949df9;}&:disabled{background-color:var(--privy-color-background-2);border:1px solid var(--privy-color-border-default);color:var(--privy-color-foreground-disabled);cursor:not-allowed;}&:hover:disabled,&:active:disabled{background-color:var(--privy-color-background-2);border:1px solid var(--privy-color-border-default);color:var(--privy-color-foreground-disabled);cursor:not-allowed;}",
    ""
], (r)=>r.$warn ? "var(--privy-color-error-dark)" : "var(--privy-color-accent)", (r)=>r.$warn ? "var(--privy-color-error-dark)" : "var(--privy-color-accent-dark)", (r)=>r.$warn ? "var(--privy-color-error-dark)" : "var(--privy-color-accent-dark)", (r)=>r.disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])([
        "&&&,&&&:hover,&&&:active{background-color:var(--privy-color-background-2);border:1px solid var(--privy-color-border-default);color:var(--privy-color-foreground-disabled);cursor:not-allowed;}"
    ]));
const b = ({ children: a, loading: l, disabled: c, size: i = "lg", loadingText: n = "Loading...", as: t, onClick: s, ...v })=>{
    let b = "a" === t, p = !(!l && !c); /*#__PURE__*/ 
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(u, {
        as: t,
        disabled: b ? void 0 : p,
        "aria-disabled": b ? p : void 0,
        $size: i,
        onClick: (r)=>{
            b && p ? r.preventDefault() : s?.(r);
        },
        ...v,
        children: l ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useActiveWallet$2d$BeOB3HTh$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["G"], {}),
                n ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    style: {
                        marginLeft: "8px"
                    },
                    children: n
                }) : null
            ]
        }) : a
    });
}, p = ({ children: a, loading: l, disabled: c, size: i = "lg", loadingText: n = "Loading...", as: t, onClick: s, ...v })=>{
    let b = "a" === t, p = !(!l && !c); /*#__PURE__*/ 
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(y, {
        as: t,
        disabled: b ? void 0 : p,
        "aria-disabled": b ? p : void 0,
        $size: i,
        onClick: (r)=>{
            b && p ? r.preventDefault() : s?.(r);
        },
        ...v,
        children: l ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useActiveWallet$2d$BeOB3HTh$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["G"], {}),
                n ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                    style: {
                        marginLeft: "8px"
                    },
                    children: n
                }) : null
            ]
        }) : a
    });
};
let u = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"])(i).withConfig({
    displayName: "StyledSecondaryButton",
    componentId: "sc-e537b447-3"
})([
    "&&{border-width:1px;border-style:solid;border-color:",
    ";background-color:var(--privy-color-background);color:",
    ";transition:border-color 200ms ease,color 200ms ease,background-color 200ms ease;}&:hover{border-color:",
    ";background-color:",
    ";color:",
    ";}&:active{border-color:",
    ";background-color:",
    ";color:",
    ";}&:disabled{border-color:var(--privy-color-border-default);background-color:var(--privy-color-background-2);color:var(--privy-color-foreground-disabled);cursor:not-allowed;}&:hover:disabled,&:active:disabled{border-color:var(--privy-color-border-default);background-color:var(--privy-color-background-2);color:var(--privy-color-foreground-disabled);cursor:not-allowed;}",
    ""
], (r)=>r.$warn ? "var(--privy-color-border-error)" : "var(--privy-color-accent)", (r)=>r.$warn ? "var(--privy-color-error-dark)" : "var(--privy-color-accent)", (r)=>r.$warn ? "var(--privy-color-border-error)" : "var(--privy-color-border-interactive-hover)", (r)=>r.$warn ? "var(--privy-color-error-light)" : "var(--privy-color-info-bg-hover)", (r)=>r.$warn ? "var(--privy-color-error-dark)" : "var(--privy-color-accent)", (r)=>r.$warn ? "var(--privy-color-border-error)" : "var(--privy-color-border-interactive)", (r)=>r.$warn ? "var(--privy-color-error-bg-hover)" : "var(--privy-color-info-bg)", (r)=>r.$warn ? "var(--privy-color-error-dark)" : "var(--privy-color-accent)", (r)=>r.disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])([
        "&&&,&&&:hover,&&&:active{border-color:var(--privy-color-border-default);background-color:var(--privy-color-background-2);color:var(--privy-color-foreground-disabled);cursor:not-allowed;}"
    ])), y = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"])(i).withConfig({
    displayName: "StyledMutedButton",
    componentId: "sc-e537b447-4"
})([
    "&&{border-width:1px;border-style:solid;border-color:var(--privy-color-border-default);background-color:transparent;color:var(--privy-color-text-muted);transition:border-color 200ms ease,color 200ms ease,background-color 200ms ease;}&:hover{border-color:var(--privy-color-border-default);background-color:var(--privy-color-info-bg-hover);color:var(--privy-color-foreground-2);}&:active{border-color:var(--privy-color-border-default);background-color:var(--privy-color-info-bg);color:var(--privy-color-foreground-2);}&:focus{outline:none;box-shadow:0 0 0 3px #949df9;}&:disabled{border-color:var(--privy-color-border-default);background-color:var(--privy-color-background-2);color:var(--privy-color-foreground-disabled);cursor:not-allowed;}&:hover:disabled,&:active:disabled{border-color:var(--privy-color-border-default);background-color:var(--privy-color-background-2);color:var(--privy-color-foreground-disabled);cursor:not-allowed;}",
    ""
], (r)=>r.disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])([
        "&&&,&&&:hover,&&&:active{border-color:var(--privy-color-border-default);background-color:var(--privy-color-background-2);color:var(--privy-color-foreground-disabled);cursor:not-allowed;}"
    ]));
const g = ({ children: e, onClick: a, disabled: l, isSubmitting: c, ...i })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(f, {
        $isSubmitting: c,
        onClick: a,
        disabled: l,
        ...i,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                children: e
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useActiveWallet$2d$BeOB3HTh$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["G"], {})
            })
        ]
    });
let f = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].button.withConfig({
    displayName: "StyledEmbeddedButton",
    componentId: "sc-e537b447-7"
})([
    "&&{color:var(--privy-color-accent);font-size:16px;font-style:normal;font-weight:500;line-height:24px;cursor:pointer;border-radius:0px var(--privy-border-radius-mdlg) var(--privy-border-radius-mdlg) 0px;border:none;transition:color 200ms ease;@media (min-width:441px){font-size:14px;}:hover{color:var(--privy-color-accent-dark);}&& > :first-child{opacity:",
    ";}&& > :last-child{position:absolute;display:flex;top:50%;left:50%;transform:translate3d(-50%,-50%,0);opacity:",
    ";}:disabled,:hover:disabled{color:var(--privy-color-foreground-disabled);cursor:not-allowed;}}"
], (r)=>r.$isSubmitting ? 0 : 1, (r)=>r.$isSubmitting ? 1 : 0);
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/Layouts-Bmf8DxNP.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "B",
    ()=>i,
    "C",
    ()=>n,
    "F",
    ()=>d,
    "H",
    ()=>o,
    "R",
    ()=>l,
    "S",
    ()=>p,
    "a",
    ()=>c,
    "b",
    ()=>r,
    "c",
    ()=>a,
    "d",
    ()=>s,
    "e",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const i = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "BottomPusherContainer",
    componentId: "sc-cb963810-0"
})([
    "display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;margin-top:auto;gap:16px;flex-grow:100;"
]), t = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "CenteredItem",
    componentId: "sc-cb963810-1"
})([
    "display:flex;flex-direction:column;align-items:center;justify-content:center;flex-grow:1;width:100%;"
]), o = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "HorizontallyCenteredItem",
    componentId: "sc-cb963810-2"
})([
    "display:flex;flex-direction:column;align-items:center;width:100%;"
]), n = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"])(t).withConfig({
    displayName: "CenteredItemWithPadding",
    componentId: "sc-cb963810-3"
})([
    "padding:20px 0;"
]), a = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"])(t).withConfig({
    displayName: "CenteredItemWithGap",
    componentId: "sc-cb963810-4"
})([
    "gap:16px;"
]), d = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "FlexContainer",
    componentId: "sc-cb963810-5"
})([
    "display:flex;flex-direction:column;width:100%;"
]), c = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "FixedGappedContainer",
    componentId: "sc-cb963810-6"
})([
    "display:flex;flex-direction:column;gap:8px;"
]), p = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "StyledCalloutSection",
    componentId: "sc-cb963810-8"
})([
    "display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;text-align:left;gap:8px;padding:16px;margin-top:16px;margin-bottom:16px;width:100%;background:var(--privy-color-background-2);border-radius:var(--privy-border-radius-md);&& h4{color:var(--privy-color-foreground-3);font-size:14px;text-decoration:underline;font-weight:medium;}&& p{color:var(--privy-color-foreground-3);font-size:14px;}"
]), r = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "RefactorSpacerTop",
    componentId: "sc-cb963810-9"
})([
    "height:16px;"
]), l = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "RefactorSpacerBottom",
    componentId: "sc-cb963810-10"
})([
    "height:12px;"
]), s = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "ConfigurableSpacer",
    componentId: "sc-cb963810-12"
})([
    "height:",
    "px;"
], (e)=>e.height ?? "12");
;
}),
"[project]/Desktop/pincher/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function ArrowLeftIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](ArrowLeftIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Desktop/pincher/node_modules/@heroicons/react/24/outline/esm/QuestionMarkCircleIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function QuestionMarkCircleIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](QuestionMarkCircleIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Desktop/pincher/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function XMarkIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18 18 6M6 6l12 12"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](XMarkIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/ModalHeader-BTru6YQw.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "B",
    ()=>s,
    "M",
    ()=>y,
    "T",
    ()=>h,
    "a",
    ()=>v
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/context-DRLoVlsO.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$QuestionMarkCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@heroicons/react/24/outline/esm/QuestionMarkCircleIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/internal-context-e-Eni5bG.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function t(c) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 460 40",
        ...c,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("g", {
            fill: c.color || "var(--privy-color-foreground)",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: "M0 15.4v15.38h4.64V19.96h3.58c2.47 0 3.63-.01 3.77-.02 1-.08 1.49-.15 2.18-.3a9.45 9.45 0 0 0 4.6-2.37c1.66-1.57 2.64-3.87 2.81-6.56.02-.3.02-1.19 0-1.49-.1-1.77-.56-3.35-1.36-4.72A8.84 8.84 0 0 0 15.14.57c-.93-.3-1.75-.43-3.09-.54C11.9.02 10.2 0 5.93 0H0ZM10.85 4c1.85.05 3.1.45 4.16 1.3.22.17.54.49.69.68a5.97 5.97 0 0 1 1.19 3.13c.04.35.04 1.36 0 1.71-.08.68-.23 1.3-.44 1.85a4.8 4.8 0 0 1-1.09 1.68A5.63 5.63 0 0 1 12 15.92c-.6.08-.4.08-4.01.09H4.64V3.98h2.9c1.6 0 3.08 0 3.31.02ZM187.65 5.71v5.72h-.27l-.09-.14a15.9 15.9 0 0 0-1.21-1.73c-.43-.5-1-.95-1.7-1.36-.54-.3-1.05-.5-1.73-.63a8.98 8.98 0 0 0-1.7-.17 8.84 8.84 0 0 0-7.8 4.03 12.95 12.95 0 0 0-2.03 6.39c-.07.98-.06 2.15.02 3.13.2 2.47.87 4.53 2.02 6.25a8.98 8.98 0 0 0 10.22 3.65 6.5 6.5 0 0 0 2.8-1.93c.41-.51.84-1.1 1.1-1.55l.1-.17h.37v3.58h4.38V0h-4.48Zm-5.24 5.54c1.3.14 2.3.6 3.17 1.48.9.9 1.5 2.09 1.85 3.64.36 1.6.39 3.72.06 5.43a8.13 8.13 0 0 1-1.54 3.62 5.1 5.1 0 0 1-3.93 1.96 6.13 6.13 0 0 1-2.32-.31 5.87 5.87 0 0 1-3.33-3.5c-.39-1-.62-2.05-.72-3.32-.03-.32-.04-1.35-.02-1.73.08-1.56.4-2.91.96-4.05a6.2 6.2 0 0 1 1.06-1.58 5.08 5.08 0 0 1 3.6-1.66c.25-.02.9 0 1.16.02ZM210.07 15.39l.01 15.38h4.38l.01-3.57h.37l.09.15c.24.44.84 1.26 1.21 1.7a6.79 6.79 0 0 0 2.57 1.75 9.3 9.3 0 0 0 6.86-.49 9.28 9.28 0 0 0 4.05-4.07A13.05 13.05 0 0 0 231 21.6c.21-1.73.18-3.7-.09-5.32a13.03 13.03 0 0 0-1.5-4.3 9.1 9.1 0 0 0-3.75-3.63 9.15 9.15 0 0 0-4.43-.96 7.46 7.46 0 0 0-2.8.5A7.07 7.07 0 0 0 216 9.7c-.4.52-.82 1.12-1.1 1.59l-.07.14h-.27V0h-4.5Zm11.13-4.14c1.07.1 1.94.44 2.7 1.04a6.1 6.1 0 0 1 1.64 1.98c.43.84.78 2 .94 3.11.15 1.16.16 2.4.02 3.54a9.34 9.34 0 0 1-1.39 4.03 5.33 5.33 0 0 1-2.69 2.15c-.9.3-2.04.38-3.06.2a5.14 5.14 0 0 1-3.45-2.37 6.03 6.03 0 0 1-.45-.8c-.5-1.03-.8-2.2-.92-3.58-.04-.49-.06-.89-.05-1.53.01-.76.05-1.23.13-1.85.38-2.53 1.47-4.38 3.15-5.31a5.46 5.46 0 0 1 2.3-.63 10 10 0 0 1 1.13.02ZM69.05 2.17l-.01 2.77V7.7h-3.36v3.6h3.36v6.8l.01 7.15c.06 1.4.4 2.44 1.1 3.37a5.8 5.8 0 0 0 2.97 2.07c.91.3 1.83.42 2.9.38a8.71 8.71 0 0 0 2.66-.48l-.8-3.7-.38.06a4.96 4.96 0 0 1-2.43-.06c-.33-.1-.56-.25-.8-.49-.4-.41-.6-.88-.7-1.67-.02-.2-.02-.62-.03-6.82v-6.6h4.73V7.7h-4.73V2.16h-4.49ZM133.34 2.17V7.7h-3.39v3.6h3.38v6.9l.01 7.17a5.66 5.66 0 0 0 2.36 4.49c.85.6 2.03 1.03 3.26 1.17.85.1 2.03.05 2.81-.1.3-.06.75-.18 1-.26l.2-.06v-.05l-.81-3.67-.37.06a4.99 4.99 0 0 1-1.8.09c-.85-.13-1.32-.4-1.7-.97a2.63 2.63 0 0 1-.39-1.04c-.06-.4-.06 0-.06-7.1V11.3h4.7V7.7h-4.7l-.01-2.77V2.16h-4.49ZM293.41 2.36a14.56 14.56 0 0 0-13.7 16.07 14.59 14.59 0 0 0 21.86 11.08 14.5 14.5 0 0 0 7.11-14.07 14.61 14.61 0 0 0-6.53-10.73 14.49 14.49 0 0 0-8.74-2.35ZM350.8 2.36a10.17 10.17 0 0 0-7.56 4.2c-.16.2-.45.63-.58.83l-.05.1h-.47l-.01-4.36h-7.36v36.4h7.82V27.27h.49l.05.07a11.3 11.3 0 0 0 7.49 4.15 10.52 10.52 0 0 0 9.38-4.1c1.66-2.1 2.73-4.9 3.07-8.06.1-.87.13-1.4.13-2.37 0-.8 0-1.1-.07-1.76a15.95 15.95 0 0 0-3.23-8.72 12.8 12.8 0 0 0-1.85-1.84 10.49 10.49 0 0 0-7.26-2.28Zm-.94 6.05c1.27.15 2.33.65 3.2 1.5.98.96 1.67 2.31 2.03 4 .34 1.57.38 3.68.12 5.39a9.78 9.78 0 0 1-1.04 3.25c-.14.25-.44.69-.6.89a5.35 5.35 0 0 1-4.31 2.07 5.25 5.25 0 0 1-4.41-1.9 7.35 7.35 0 0 1-1.26-2.32 14.09 14.09 0 0 1-.62-4.83c.05-1.98.38-3.53 1.02-4.85a5.63 5.63 0 0 1 2.5-2.65c.66-.34 1.3-.5 2.14-.58.18-.02 1.04 0 1.23.03ZM363.63 3.1l-.01 3.2v3.16h1.43c1.26.01 1.44.02 1.54.04.42.09.66.28.79.62.08.23.08.08.08 2.96a911.57 911.57 0 0 1 .03 10.18v7.54h7.82v-7.4l.01-7.83c.03-.94.11-1.63.27-2.28.46-1.9 1.54-2.93 3.35-3.23.52-.08.2-.08 5-.08h4.4V3.08h-3.1c-3.48 0-3.91.01-4.67.1-1.83.2-3.04.79-3.96 1.88-.5.6-.9 1.32-1.26 2.26l-.06.17h-.46V3.09h-5.6c-4.46 0-5.6 0-5.6.02ZM390.8 16.95V30.8h3.87l3.86-.01V3.09h-7.73ZM400.6 3.1l-.01.4v.38l4.66 13.4 4.69 13.47.02.05h10.3l.03-.05 4.67-13.45 4.67-13.4V3.1h-7.43l-6.7 19.26h-.5l-3.28-9.5-3.31-9.64-.05-.12h-3.88l-3.88.01ZM430.98 3.1c-.01 0-.02.19-.02.4v.39l5.08 14.59c2.8 8.02 5.08 14.6 5.08 14.61.01.02-.22.02-4.8.02h-4.82v6.42h4.95c5.09 0 5.23 0 5.87-.06 3.15-.28 5.29-1.63 6.63-4.15.28-.55.44-.95.87-2.16L459 6.78l1-2.89v-.8h-7.43l-6.69 19.26h-.5l-3.27-9.46-3.31-9.64-.06-.16h-3.88l-3.88.01ZM36.57 7.36c-1.36.1-2.6.6-3.62 1.45a5.65 5.65 0 0 0-1.67 2.42l-.05.13H31V7.7h-4.35v23.08h4.5v-7.3c0-8 0-7.34.08-7.82a4.89 4.89 0 0 1 2.06-3.18c.83-.58 1.74-.89 2.87-.98a11.87 11.87 0 0 1 2.8.25H39v-4.3l-.21-.02c-.61-.07-1.74-.1-2.22-.07ZM51.08 7.41c-2.33.12-4.3.84-5.95 2.16a9.89 9.89 0 0 0-2.03 2.2 12.5 12.5 0 0 0-2 5.78 18.04 18.04 0 0 0 0 3.65 12.13 12.13 0 0 0 2.26 6.05 9.74 9.74 0 0 0 5 3.52c2.11.64 4.7.64 6.8 0a9.78 9.78 0 0 0 4.88-3.37c1.38-1.78 2.19-4 2.4-6.58.13-1.46.06-3.06-.18-4.42a11.24 11.24 0 0 0-3.58-6.6 10 10 0 0 0-5.75-2.35c-.56-.06-1.31-.07-1.85-.04Zm1.42 3.78c.88.1 1.62.34 2.28.75a6.13 6.13 0 0 1 1.99 2.15 10.31 10.31 0 0 1 1.2 5c.02 1.23-.12 2.44-.42 3.51a7.14 7.14 0 0 1-1.81 3.32c-.61.6-1.2.98-1.95 1.24a6 6 0 0 1-2 .3 5.7 5.7 0 0 1-2.72-.6 5 5 0 0 1-1.28-.94A7.1 7.1 0 0 1 46 22.73c-.57-1.99-.6-4.46-.08-6.5a7.24 7.24 0 0 1 2.03-3.67 5.13 5.13 0 0 1 3.35-1.4 11 11 0 0 1 1.2.03ZM92.05 7.4c-.96.06-1.56.15-2.3.33a9.62 9.62 0 0 0-6.09 4.66 13.5 13.5 0 0 0-1.71 7c0 .83 0 1.04.06 1.6.16 1.77.58 3.32 1.29 4.7A9.72 9.72 0 0 0 90.28 31c1.84.37 4.08.32 5.85-.13a9.07 9.07 0 0 0 5.02-3.1A7.64 7.64 0 0 0 102.5 25l-2.11-.39-2.11-.38-.08.13a4.72 4.72 0 0 1-2.35 2.55 6.3 6.3 0 0 1-2.23.58c-.29.03-1.13.03-1.44 0a6.35 6.35 0 0 1-3.02-1.04 5.93 5.93 0 0 1-2.02-2.43 8.44 8.44 0 0 1-.72-3.18v-.26h16.38v-.81c0-1.83-.06-2.76-.25-3.87-.2-1.22-.53-2.24-1.05-3.28a8.9 8.9 0 0 0-2.66-3.26 10.1 10.1 0 0 0-5.34-1.94 18.3 18.3 0 0 0-1.46-.03Zm1.3 3.75c1.2.13 2.19.55 3.05 1.3a5.8 5.8 0 0 1 1.78 2.96c.13.51.21 1.17.21 1.66v.15H86.43v-.12c.08-.97.3-1.78.72-2.61.5-1 1.2-1.8 2.14-2.42a5.32 5.32 0 0 1 2.9-.95c.2-.01.97 0 1.17.03ZM116.79 7.41c-2 .1-3.73.65-5.22 1.65a10.7 10.7 0 0 0-4.25 6.06 16.1 16.1 0 0 0-.5 5.8c.2 2.17.84 4.13 1.88 5.76.58.9 1.32 1.73 2.15 2.4a9.37 9.37 0 0 0 3.6 1.8 12.06 12.06 0 0 0 3.92.34 10.2 10.2 0 0 0 3.84-.95 8.31 8.31 0 0 0 4.76-6.75l.01-.04h-4.37l-.05.16a4.87 4.87 0 0 1-4.24 3.75c-.59.07-1.32.06-1.93-.05a5.47 5.47 0 0 1-3.5-2.27c-.56-.75-1-1.73-1.26-2.79a13.8 13.8 0 0 1-.16-5.24 7.77 7.77 0 0 1 2.1-4.3 5.48 5.48 0 0 1 2.15-1.3 6.4 6.4 0 0 1 3.89.1c.59.21 1.03.5 1.5.96a5.32 5.32 0 0 1 1.46 2.5l.04.15h4.37v-.06a8.22 8.22 0 0 0-5.31-6.94 10.98 10.98 0 0 0-4.88-.74ZM156.2 7.41a9.87 9.87 0 0 0-6 2.29 11.02 11.02 0 0 0-3.41 5.43c-.52 1.78-.68 3.9-.48 5.97.17 1.8.63 3.38 1.37 4.8a9.68 9.68 0 0 0 5.91 4.86c1.65.48 3.63.61 5.53.36 3.72-.49 6.55-2.62 7.56-5.69.12-.39.13-.42.1-.43-.02 0-4.13-.75-4.19-.75-.03 0-.04 0-.1.16-.18.42-.45.9-.72 1.22-.16.2-.49.53-.7.7-.67.54-1.5.9-2.43 1.08-.48.08-.83.11-1.41.11-.64 0-1.07-.04-1.6-.15a5.76 5.76 0 0 1-3.93-2.83 8 8 0 0 1-.99-3.79v-.16h16.38v-1.11l-.02-1.43c-.1-2.25-.53-4-1.35-5.59a9.24 9.24 0 0 0-6.18-4.75c-1.04-.26-2.2-.36-3.33-.3Zm1.45 3.74a5.35 5.35 0 0 1 3.66 1.94 6.1 6.1 0 0 1 1.38 4.01v.12h-11.97v-.06c0-.02 0-.14.02-.25a6.6 6.6 0 0 1 2.15-4.32 5.73 5.73 0 0 1 3.5-1.46c.25-.02 1 0 1.26.02ZM233.58 7.82l8.37 23.22a49.22 49.22 0 0 1-.67 1.9 5.36 5.36 0 0 1-1.14 1.8c-.41.4-.82.58-1.48.69-.27.04-1.03.03-1.35 0a8.05 8.05 0 0 1-1.1-.23l-1.08 3.67c0 .02.32.14.66.22.83.21 1.57.29 2.56.28.56-.01.8-.03 1.24-.1 2.71-.4 4.66-2.09 5.86-5.08l9.64-26.44c0-.02-4.82-.06-4.83-.05l-2.93 8.96-2.91 8.94h-.24l-.22-.65-2.91-8.95-2.7-8.3H233.53ZM293.05 35.8c-1.18.04-1.93.09-2.8.16-2.52.24-4.53.69-5.43 1.23-.7.41-.76.86-.2 1.28.88.66 3.29 1.19 6.36 1.4a48.55 48.55 0 0 0 5.75.05c3.47-.19 6.24-.78 7.11-1.5.22-.19.3-.34.3-.53 0-.1 0-.12-.04-.22-.35-.69-2.32-1.3-5.25-1.63a41.09 41.09 0 0 0-5.8-.24Zm0 0"
            })
        })
    });
}
let d = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].span.withConfig({
    displayName: "TermsAndConditionsContainer",
    componentId: "sc-ff3bd734-0"
})([
    "margin-top:16px;font-size:13px;text-align:center;color:var(--privy-color-foreground-3);display:block;&& > a{color:var(--privy-color-accent);}"
]);
function h({ app: { legal: { privacyPolicyUrl: e, termsAndConditionsUrl: a, requireUsersAcceptTerms: i } }, alwaysShowImplicitConsent: r }) {
    let n = !(!e || !a);
    return i && !r || !a && !e ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(d, {}) : /*#__PURE__*/ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(d, {
        children: [
            "By logging in I agree to the",
            " ",
            a && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("a", {
                href: a,
                target: "_blank",
                children: n ? "Terms" : "Terms of Service"
            }),
            n && " & ",
            e && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("a", {
                href: e,
                target: "_blank",
                children: "Privacy Policy"
            })
        ]
    });
}
const s = ({ className: c })=>{
    let { appearance: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(); /*#__PURE__*/ 
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(v, {
        className: c,
        children: e.footerLogo ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(p, {
            href: "https://www.privy.io/",
            target: "_blank",
            id: "protected-by-privy",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(t, {
                color: "currentColor",
                height: 13,
                width: 150
            })
        })
    });
};
let p = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].a.withConfig({
    displayName: "PrivyLink",
    componentId: "sc-ff3bd734-1"
})([
    "&&{padding:0;color:var(--privy-color-foreground-3);}"
]);
const v = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "ModalFooter",
    componentId: "sc-ff3bd734-2"
})([
    "display:flex;align-items:center;justify-content:center;padding-top:8px;padding-bottom:12px;gap:8px;font-size:13px;&& a{padding:0.5rem 0;&:hover{text-decoration:none;}}@media all and (display-mode:standalone){padding-bottom:30px;}"
]), m = ({ backFn: c })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(x, {
            onClick: c,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                height: "16px",
                width: "16px",
                strokeWidth: 2
            })
        })
    }), f = ({ infoFn: c })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(u, {
            "aria-label": "info",
            onClick: c,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$QuestionMarkCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                height: "22px",
                width: "22px",
                strokeWidth: 2
            })
        })
    }), g = (c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(x, {
            "aria-label": "close modal",
            onClick: c.onClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                height: "16px",
                width: "16px",
                strokeWidth: 2
            })
        })
    }), y = ({ backFn: e, infoFn: i, onClose: r, title: n, closeable: t = !0, className: d })=>{
    let { closePrivyModal: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(); /*#__PURE__*/ 
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(w, {
        className: d,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(b, {
                children: [
                    e && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(m, {
                        backFn: e
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        style: {
                            height: 24
                        }
                    }),
                    i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(f, {
                        infoFn: i
                    })
                ]
            }),
            n && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Z, {
                id: "privy-dialog-title",
                children: n
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(C, {
                children: !s.render.standalone && t && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(g, {
                    onClose: r || (()=>h())
                })
            })
        ]
    });
};
let x = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].button.withConfig({
    displayName: "StyledButton",
    componentId: "sc-bc3cd0df-0"
})([
    "&&{cursor:pointer;display:flex;opacity:0.6;background-color:var(--privy-color-background-2);border-radius:var(--privy-border-radius-full);padding:4px;> svg{margin:auto;color:var(--privy-color-foreground);}:hover{opacity:1;}}"
]), u = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"])(x).withConfig({
    displayName: "TransparentStyledButton",
    componentId: "sc-bc3cd0df-1"
})([
    "&&{background-color:transparent;}"
]), w = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "StyledHeader",
    componentId: "sc-bc3cd0df-2"
})([
    "padding:16px 0;display:flex;align-items:center;justify-content:space-between;h2{font-size:16px;line-height:24px;font-weight:600;color:var(--privy-color-foreground);}"
]), b = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "LeftActionContainer",
    componentId: "sc-bc3cd0df-3"
})([
    "flex:1;align-items:center;display:flex;gap:8px;"
]), C = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "RightActionContainer",
    componentId: "sc-bc3cd0df-4"
})([
    "flex:1;display:flex;justify-content:flex-end;"
]), Z = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "TitleContainer",
    componentId: "sc-bc3cd0df-5"
})([
    "overflow:hidden;white-space:nowrap;max-width:100%;text-overflow:ellipsis;text-align:center;color:var(--privy-color-foreground-2);"
]);
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/ScreenHeader-Biz1wq02.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>r,
    "S",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
;
const o = ({ title: n, description: o, children: r, ...c })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(l, {
        ...c,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                    children: n
                }),
                "string" == typeof o ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    children: o
                }) : o,
                r
            ]
        })
    }), r = ({ title: i, description: n, icon: o, children: r, ...l })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(c, {
        ...l,
        children: [
            o || null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                children: i
            }),
            n && "string" == typeof n ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                children: n
            }) : n,
            r
        ]
    });
let l = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "StyledSection",
    componentId: "sc-523a75d6-1"
})([
    "display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;text-align:left;gap:8px;width:100%;margin-bottom:24px;&& h3{font-size:17px;color:var(--privy-color-foreground);}&& p{color:var(--privy-color-foreground-2);font-size:14px;}"
]), c = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"])(l).withConfig({
    displayName: "CenteredStyledSection",
    componentId: "sc-523a75d6-2"
})([
    "align-items:center;text-align:center;gap:16px;h3{margin-bottom:24px;}"
]);
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/FundWalletMethodHeader-CS84Ots9.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "t",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/get-is-unified-wallet-gMDXpX6C.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$ModalHeader$2d$BTru6YQw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/ModalHeader-BTru6YQw.mjs [app-ssr] (ecmascript)");
;
;
;
function t({ title: t }) {
    let { currentScreen: i, navigateBack: r, navigate: d, data: o, setModalData: u } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(); /*#__PURE__*/ 
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$ModalHeader$2d$BTru6YQw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["M"], {
        title: t,
        backFn: "ManualTransferScreen" === i ? r : i === o?.funding?.methodScreen ? o.funding.comingFromSendTransactionScreen ? ()=>d("SendTransactionScreen") : void 0 : o?.funding?.methodScreen ? ()=>{
            let n = o.funding;
            n.usingDefaultFundingMethod && (n.usingDefaultFundingMethod = !1), u({
                funding: n,
                solanaFundingData: o?.solanaFundingData
            }), d(n.methodScreen);
        } : void 0
    });
}
;
}),
"[project]/Desktop/pincher/node_modules/@heroicons/react/24/outline/esm/WalletIcon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function WalletIcon({ title, titleId, ...props }, svgRef) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
    }));
}
const ForwardRef = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](WalletIcon);
const __TURBOPACK__default__export__ = ForwardRef;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/InjectedWalletIcon-DLcYOGDj.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I",
    ()=>i
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$WalletIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@heroicons/react/24/outline/esm/WalletIcon.js [app-ssr] (ecmascript)");
;
;
const i = ({ icon: i, name: o })=>"string" == typeof i ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("img", {
        alt: `${o || "wallet"} logo`,
        src: i,
        style: {
            height: 24,
            width: 24,
            borderRadius: 4
        }
    }) : void 0 === i ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$WalletIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        style: {
            height: 24,
            width: 24
        }
    }) : i ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(i, {
        style: {
            height: 24,
            width: 24
        }
    }) : null;
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/index-CJMgUOnw.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "N",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
;
const t = ({ size: n, centerIcon: t })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(r, {
        $size: n,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(o, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(a, {}),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(d, {}),
                t ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(s, {
                    children: t
                }) : null
            ]
        })
    });
let r = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "LoadingContainer",
    componentId: "sc-ebc93df8-0"
})([
    "--spinner-size:",
    ";display:inline-flex;justify-content:center;align-items:center;@media all and (display-mode:standalone){margin-bottom:30px;}"
], (e)=>e.$size ? e.$size : "96px"), o = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "SpinnerContainer",
    componentId: "sc-ebc93df8-1"
})([
    "position:relative;height:var(--spinner-size);width:var(--spinner-size);opacity:1;animation:fadein 200ms ease;"
]), s = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "CenterIconContainer",
    componentId: "sc-ebc93df8-2"
})([
    "position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;svg,img{width:calc(var(--spinner-size) * 0.4);height:calc(var(--spinner-size) * 0.4);border-radius:var(--privy-border-radius-full);}"
]), a = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "CircleFixed",
    componentId: "sc-ebc93df8-3"
})([
    "position:absolute;top:0;right:0;bottom:0;left:0;width:var(--spinner-size);height:var(--spinner-size);&&{border:4px solid var(--privy-color-border-default);border-radius:50%;}"
]), d = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].div.withConfig({
    displayName: "CircleRotate",
    componentId: "sc-ebc93df8-4"
})([
    "position:absolute;top:0;right:0;bottom:0;left:0;width:var(--spinner-size);height:var(--spinner-size);animation:spin 1200ms linear infinite;&&{border:4px solid;border-color:var(--privy-color-icon-subtle) transparent transparent transparent;border-radius:50%;}@keyframes spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}"
]);
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/LoadingSkeleton-CHdaq3pb.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "L",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
let i = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyframes"])([
    "from,to{background:var(--privy-color-foreground-4);color:var(--privy-color-foreground-4);}50%{background:var(--privy-color-foreground-accent);color:var(--privy-color-foreground-accent);}"
]);
const n = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])([
    "",
    ""
], (o)=>o.$isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])([
        "width:35%;animation:",
        " 2s linear infinite;border-radius:var(--privy-border-radius-sm);"
    ], i) : "");
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/Value-B4M62ove.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "L",
    ()=>r,
    "V",
    ()=>i,
    "a",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$LoadingSkeleton$2d$CHdaq3pb$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/LoadingSkeleton-CHdaq3pb.mjs [app-ssr] (ecmascript)");
;
;
const r = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].span.withConfig({
    displayName: "LabelSm",
    componentId: "sc-6c002d6-0"
})([
    "color:var(--privy-color-foreground-3);font-size:0.875rem;font-weight:400;line-height:1.375rem;"
]), a = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"])(r).withConfig({
    displayName: "LabelSmPrimary",
    componentId: "sc-6c002d6-1"
})([
    "color:var(--privy-color-accent);"
]), i = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].span.withConfig({
    displayName: "Value",
    componentId: "sc-72aa026-0"
})([
    "color:var(--privy-color-foreground);font-size:0.875rem;font-weight:500;line-height:1.375rem;word-break:break-all;text-align:right;",
    ""
], __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$LoadingSkeleton$2d$CHdaq3pb$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["L"]);
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/Row-CG0lSY5Z.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "R",
    ()=>o,
    "a",
    ()=>e
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/styled-components/dist/styled-components.esm.js [app-ssr] (ecmascript)");
;
const e = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].span.withConfig({
    displayName: "Rows",
    componentId: "sc-b764aab6-0"
})([
    "display:flex;flex-direction:column;gap:0.35rem;width:100%;"
]), o = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["styled"].span.withConfig({
    displayName: "Row",
    componentId: "sc-b764aab6-1"
})([
    "display:flex;width:100%;justify-content:space-between;gap:0.5rem;"
]);
;
}),
"[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND",
    ()=>SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND,
    "SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED",
    ()=>SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED,
    "SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT",
    ()=>SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT,
    "SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT",
    ()=>SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT,
    "SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND",
    ()=>SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND,
    "SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED",
    ()=>SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED,
    "SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS",
    ()=>SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS,
    "SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH",
    ()=>SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH,
    "SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY",
    ()=>SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY,
    "SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS",
    ()=>SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS,
    "SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE",
    ()=>SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE,
    "SOLANA_ERROR__ADDRESSES__MALFORMED_PDA",
    ()=>SOLANA_ERROR__ADDRESSES__MALFORMED_PDA,
    "SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED",
    ()=>SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED,
    "SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED",
    ()=>SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED,
    "SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE",
    ()=>SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE,
    "SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER",
    ()=>SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER,
    "SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE",
    ()=>SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE,
    "SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE",
    ()=>SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE,
    "SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED",
    ()=>SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED,
    "SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY",
    ()=>SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY,
    "SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS",
    ()=>SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS,
    "SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL",
    ()=>SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL,
    "SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH",
    ()=>SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH,
    "SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH",
    ()=>SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH,
    "SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH",
    ()=>SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH,
    "SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE",
    ()=>SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE,
    "SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH",
    ()=>SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH,
    "SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH",
    ()=>SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH,
    "SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH",
    ()=>SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH,
    "SOLANA_ERROR__CODECS__EXPECTED_ZERO_VALUE_TO_MATCH_ITEM_FIXED_SIZE",
    ()=>SOLANA_ERROR__CODECS__EXPECTED_ZERO_VALUE_TO_MATCH_ITEM_FIXED_SIZE,
    "SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH",
    ()=>SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH,
    "SOLANA_ERROR__CODECS__INVALID_CONSTANT",
    ()=>SOLANA_ERROR__CODECS__INVALID_CONSTANT,
    "SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT",
    ()=>SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT,
    "SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT",
    ()=>SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT,
    "SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT",
    ()=>SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT,
    "SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS",
    ()=>SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS,
    "SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE",
    ()=>SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE,
    "SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE",
    ()=>SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE,
    "SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE",
    ()=>SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE,
    "SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE",
    ()=>SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE,
    "SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES",
    ()=>SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES,
    "SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE",
    ()=>SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE,
    "SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED",
    ()=>SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING,
    "SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL,
    "SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE,
    "SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT,
    "SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW,
    "SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR,
    "SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS,
    "SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH,
    "SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM,
    "SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX,
    "SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC,
    "SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT,
    "SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE,
    "SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND,
    "SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR,
    "SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER,
    "SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE,
    "SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY,
    "SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID,
    "SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS,
    "SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA,
    "SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER,
    "SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT,
    "SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR,
    "SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA,
    "SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC,
    "SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS,
    "SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT,
    "SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE,
    "SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID,
    "SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS,
    "SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION,
    "SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE,
    "SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE,
    "SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE,
    "SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE,
    "SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED,
    "SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION,
    "SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT,
    "SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN,
    "SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID,
    "SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR",
    ()=>SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR,
    "SOLANA_ERROR__INSTRUCTION_PLANS__EMPTY_INSTRUCTION_PLAN",
    ()=>SOLANA_ERROR__INSTRUCTION_PLANS__EMPTY_INSTRUCTION_PLAN,
    "SOLANA_ERROR__INSTRUCTION_PLANS__FAILED_TO_EXECUTE_TRANSACTION_PLAN",
    ()=>SOLANA_ERROR__INSTRUCTION_PLANS__FAILED_TO_EXECUTE_TRANSACTION_PLAN,
    "SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN",
    ()=>SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN,
    "SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_PACKER_ALREADY_COMPLETE",
    ()=>SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_PACKER_ALREADY_COMPLETE,
    "SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS",
    ()=>SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS,
    "SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA",
    ()=>SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA,
    "SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH",
    ()=>SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH,
    "SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH",
    ()=>SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH,
    "SOLANA_ERROR__INVALID_NONCE",
    ()=>SOLANA_ERROR__INVALID_NONCE,
    "SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING",
    ()=>SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING,
    "SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED",
    ()=>SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED,
    "SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_INSTRUCTION_PLAN_KIND",
    ()=>SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_INSTRUCTION_PLAN_KIND,
    "SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_TRANSACTION_PLAN_KIND",
    ()=>SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_TRANSACTION_PLAN_KIND,
    "SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE",
    ()=>SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE,
    "SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING",
    ()=>SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING,
    "SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE",
    ()=>SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE,
    "SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR",
    ()=>SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR,
    "SOLANA_ERROR__JSON_RPC__INVALID_PARAMS",
    ()=>SOLANA_ERROR__JSON_RPC__INVALID_PARAMS,
    "SOLANA_ERROR__JSON_RPC__INVALID_REQUEST",
    ()=>SOLANA_ERROR__JSON_RPC__INVALID_REQUEST,
    "SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND",
    ()=>SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND,
    "SOLANA_ERROR__JSON_RPC__PARSE_ERROR",
    ()=>SOLANA_ERROR__JSON_RPC__PARSE_ERROR,
    "SOLANA_ERROR__JSON_RPC__SCAN_ERROR",
    ()=>SOLANA_ERROR__JSON_RPC__SCAN_ERROR,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_EPOCH_REWARDS_PERIOD_ACTIVE",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_EPOCH_REWARDS_PERIOD_ACTIVE,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_UNREACHABLE",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_UNREACHABLE,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_NOT_EPOCH_BOUNDARY",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_NOT_EPOCH_BOUNDARY,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE,
    "SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION",
    ()=>SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION,
    "SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH",
    ()=>SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH,
    "SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH",
    ()=>SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH,
    "SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH",
    ()=>SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH,
    "SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY",
    ()=>SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY,
    "SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE",
    ()=>SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE,
    "SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE",
    ()=>SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE,
    "SOLANA_ERROR__MALFORMED_BIGINT_STRING",
    ()=>SOLANA_ERROR__MALFORMED_BIGINT_STRING,
    "SOLANA_ERROR__MALFORMED_JSON_RPC_ERROR",
    ()=>SOLANA_ERROR__MALFORMED_JSON_RPC_ERROR,
    "SOLANA_ERROR__MALFORMED_NUMBER_STRING",
    ()=>SOLANA_ERROR__MALFORMED_NUMBER_STRING,
    "SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND",
    ()=>SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND,
    "SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN",
    ()=>SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN,
    "SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED",
    ()=>SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED,
    "SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED",
    ()=>SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED,
    "SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT",
    ()=>SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT,
    "SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID",
    ()=>SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID,
    "SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD",
    ()=>SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD,
    "SOLANA_ERROR__RPC__INTEGER_OVERFLOW",
    ()=>SOLANA_ERROR__RPC__INTEGER_OVERFLOW,
    "SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR",
    ()=>SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR,
    "SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN",
    ()=>SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN,
    "SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS",
    ()=>SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS,
    "SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER",
    ()=>SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER,
    "SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER",
    ()=>SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER,
    "SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER",
    ()=>SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER,
    "SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER",
    ()=>SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER,
    "SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER",
    ()=>SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER,
    "SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER",
    ()=>SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER,
    "SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER",
    ()=>SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER,
    "SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER",
    ()=>SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER,
    "SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS",
    ()=>SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS,
    "SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING",
    ()=>SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING,
    "SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED",
    ()=>SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED,
    "SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY",
    ()=>SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY,
    "SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED",
    ()=>SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED,
    "SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT",
    ()=>SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT,
    "SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED",
    ()=>SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED,
    "SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED",
    ()=>SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED,
    "SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED",
    ()=>SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED,
    "SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED",
    ()=>SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED,
    "SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED",
    ()=>SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED,
    "SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE",
    ()=>SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE,
    "SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING,
    "SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE,
    "SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE,
    "SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND,
    "SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND,
    "SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED,
    "SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND,
    "SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP,
    "SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE,
    "SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION,
    "SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE,
    "SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT,
    "SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE,
    "SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX,
    "SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA,
    "SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX,
    "SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER,
    "SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT,
    "SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION,
    "SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT,
    "SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT,
    "SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED,
    "SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE,
    "SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND,
    "SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED,
    "SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED,
    "SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE,
    "SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE,
    "SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS,
    "SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION,
    "SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN,
    "SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION,
    "SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT,
    "SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT,
    "SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT,
    "SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT,
    "SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT",
    ()=>SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT,
    "SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION",
    ()=>SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION,
    "SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING",
    ()=>SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING,
    "SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES",
    ()=>SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES,
    "SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT",
    ()=>SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT,
    "SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME",
    ()=>SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME,
    "SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME",
    ()=>SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME,
    "SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING",
    ()=>SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING,
    "SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE",
    ()=>SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE,
    "SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING",
    ()=>SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING,
    "SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND",
    ()=>SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND,
    "SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT",
    ()=>SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT,
    "SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT",
    ()=>SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT,
    "SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING",
    ()=>SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING,
    "SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING",
    ()=>SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING,
    "SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE",
    ()=>SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE,
    "SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING",
    ()=>SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING,
    "SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES",
    ()=>SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES,
    "SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE",
    ()=>SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE,
    "SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH",
    ()=>SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH,
    "SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING",
    ()=>SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING,
    "SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE",
    ()=>SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE,
    "SolanaError",
    ()=>SolanaError,
    "getSolanaErrorFromInstructionError",
    ()=>getSolanaErrorFromInstructionError,
    "getSolanaErrorFromJsonRpcError",
    ()=>getSolanaErrorFromJsonRpcError,
    "getSolanaErrorFromTransactionError",
    ()=>getSolanaErrorFromTransactionError,
    "isSolanaError",
    ()=>isSolanaError,
    "safeCaptureStackTrace",
    ()=>safeCaptureStackTrace
]);
// src/codes.ts
var SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED = 1;
var SOLANA_ERROR__INVALID_NONCE = 2;
var SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND = 3;
var SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE = 4;
var SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH = 5;
var SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE = 6;
var SOLANA_ERROR__MALFORMED_BIGINT_STRING = 7;
var SOLANA_ERROR__MALFORMED_NUMBER_STRING = 8;
var SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE = 9;
var SOLANA_ERROR__MALFORMED_JSON_RPC_ERROR = 10;
var SOLANA_ERROR__JSON_RPC__PARSE_ERROR = -32700;
var SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR = -32603;
var SOLANA_ERROR__JSON_RPC__INVALID_PARAMS = -32602;
var SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND = -32601;
var SOLANA_ERROR__JSON_RPC__INVALID_REQUEST = -32600;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_UNREACHABLE = -32019;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_NOT_EPOCH_BOUNDARY = -32018;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_EPOCH_REWARDS_PERIOD_ACTIVE = -32017;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED = -32016;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION = -32015;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET = -32014;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH = -32013;
var SOLANA_ERROR__JSON_RPC__SCAN_ERROR = -32012;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE = -32011;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX = -32010;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED = -32009;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT = -32008;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED = -32007;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE = -32006;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY = -32005;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE = -32004;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE = -32003;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE = -32002;
var SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP = -32001;
var SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH = 28e5;
var SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE = 2800001;
var SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS = 2800002;
var SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY = 2800003;
var SOLANA_ERROR__ADDRESSES__MALFORMED_PDA = 2800004;
var SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE = 2800005;
var SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED = 2800006;
var SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED = 2800007;
var SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE = 2800008;
var SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED = 2800009;
var SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER = 2800010;
var SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS = 2800011;
var SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND = 323e4;
var SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND = 32300001;
var SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT = 3230002;
var SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT = 3230003;
var SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED = 3230004;
var SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT = 361e4;
var SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED = 3610001;
var SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED = 3610002;
var SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED = 3610003;
var SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED = 3610004;
var SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED = 3610005;
var SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED = 3610006;
var SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY = 3610007;
var SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED = 3611e3;
var SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH = 3704e3;
var SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH = 3704001;
var SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH = 3704002;
var SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE = 3704003;
var SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY = 3704004;
var SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS = 4128e3;
var SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA = 4128001;
var SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH = 4128002;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN = 4615e3;
var SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR = 4615001;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT = 4615002;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA = 4615003;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA = 4615004;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL = 4615005;
var SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS = 4615006;
var SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID = 4615007;
var SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE = 4615008;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED = 4615009;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT = 4615010;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION = 4615011;
var SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID = 4615012;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND = 4615013;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED = 4615014;
var SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE = 4615015;
var SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED = 4615016;
var SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX = 4615017;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED = 4615018;
var SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED = 4615019;
var SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS = 4615020;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED = 4615021;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE = 4615022;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED = 4615023;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING = 4615024;
var SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC = 4615025;
var SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM = 4615026;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR = 4615027;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED = 4615028;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE = 4615029;
var SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT = 4615030;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID = 4615031;
var SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH = 4615032;
var SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT = 4615033;
var SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED = 4615034;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED = 4615035;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS = 4615036;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC = 4615037;
var SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED = 4615038;
var SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION = 4615039;
var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE = 4615040;
var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE = 4615041;
var SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE = 4615042;
var SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE = 4615043;
var SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY = 4615044;
var SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR = 4615045;
var SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT = 4615046;
var SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER = 4615047;
var SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW = 4615048;
var SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR = 4615049;
var SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER = 4615050;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED = 4615051;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED = 4615052;
var SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED = 4615053;
var SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS = 4615054;
var SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS = 5508e3;
var SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER = 5508001;
var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER = 5508002;
var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER = 5508003;
var SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER = 5508004;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER = 5508005;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER = 5508006;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER = 5508007;
var SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER = 5508008;
var SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS = 5508009;
var SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING = 5508010;
var SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED = 5508011;
var SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES = 5663e3;
var SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE = 5663001;
var SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME = 5663002;
var SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME = 5663003;
var SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE = 5663004;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING = 5663005;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE = 5663006;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND = 5663007;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING = 5663008;
var SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING = 5663009;
var SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING = 5663010;
var SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING = 5663011;
var SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING = 5663012;
var SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING = 5663013;
var SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE = 5663014;
var SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION = 5663015;
var SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES = 5663016;
var SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH = 5663017;
var SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT = 5663018;
var SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT = 5663019;
var SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT = 5663020;
var SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN = 705e4;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE = 7050001;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE = 7050002;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND = 7050003;
var SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND = 7050004;
var SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE = 7050005;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE = 7050006;
var SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED = 7050007;
var SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND = 7050008;
var SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP = 7050009;
var SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE = 7050010;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX = 7050011;
var SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE = 7050012;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION = 7050013;
var SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE = 7050014;
var SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE = 7050015;
var SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING = 7050016;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT = 7050017;
var SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION = 7050018;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT = 7050019;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT = 7050020;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT = 7050021;
var SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS = 7050022;
var SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND = 7050023;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER = 7050024;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA = 7050025;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX = 7050026;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT = 7050027;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT = 7050028;
var SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT = 7050029;
var SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION = 7050030;
var SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT = 7050031;
var SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED = 7050032;
var SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT = 7050033;
var SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED = 7050034;
var SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED = 7050035;
var SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION = 7050036;
var SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN = 7618e3;
var SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_PACKER_ALREADY_COMPLETE = 7618001;
var SOLANA_ERROR__INSTRUCTION_PLANS__EMPTY_INSTRUCTION_PLAN = 7618002;
var SOLANA_ERROR__INSTRUCTION_PLANS__FAILED_TO_EXECUTE_TRANSACTION_PLAN = 7618003;
var SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY = 8078e3;
var SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH = 8078001;
var SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH = 8078002;
var SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH = 8078003;
var SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH = 8078004;
var SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH = 8078005;
var SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH = 8078006;
var SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS = 8078007;
var SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE = 8078008;
var SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT = 8078009;
var SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT = 8078010;
var SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE = 8078011;
var SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE = 8078012;
var SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH = 8078013;
var SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE = 8078014;
var SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT = 8078015;
var SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE = 8078016;
var SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE = 8078017;
var SOLANA_ERROR__CODECS__INVALID_CONSTANT = 8078018;
var SOLANA_ERROR__CODECS__EXPECTED_ZERO_VALUE_TO_MATCH_ITEM_FIXED_SIZE = 8078019;
var SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL = 8078020;
var SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES = 8078021;
var SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS = 8078022;
var SOLANA_ERROR__RPC__INTEGER_OVERFLOW = 81e5;
var SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN = 8100001;
var SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR = 8100002;
var SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD = 8100003;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN = 819e4;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID = 8190001;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED = 8190002;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED = 8190003;
var SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT = 8190004;
var SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING = 99e5;
var SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE = 9900001;
var SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING = 9900002;
var SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE = 9900003;
var SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED = 9900004;
var SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_INSTRUCTION_PLAN_KIND = 9900005;
var SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_TRANSACTION_PLAN_KIND = 9900006;
// src/context.ts
function encodeValue(value) {
    if (Array.isArray(value)) {
        const commaSeparatedValues = value.map(encodeValue).join("%2C%20");
        return "%5B" + commaSeparatedValues + /* "]" */ "%5D";
    } else if (typeof value === "bigint") {
        return `${value}n`;
    } else {
        return encodeURIComponent(String(value != null && Object.getPrototypeOf(value) === null ? // Plain objects with no prototype don't have a `toString` method.
        // Convert them before stringifying them.
        {
            ...value
        } : value));
    }
}
function encodeObjectContextEntry([key, value]) {
    return `${key}=${encodeValue(value)}`;
}
function encodeContextObject(context) {
    const searchParamsString = Object.entries(context).map(encodeObjectContextEntry).join("&");
    return Buffer.from(searchParamsString, "utf8").toString("base64");
}
// src/messages.ts
var SolanaErrorMessages = {
    [SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND]: "Account not found at address: $address",
    [SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED]: "Not all accounts were decoded. Encoded accounts found at addresses: $addresses.",
    [SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT]: "Expected decoded account at address: $address",
    [SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT]: "Failed to decode account data at address: $address",
    [SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND]: "Accounts not found at addresses: $addresses",
    [SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED]: "Unable to find a viable program address bump seed.",
    [SOLANA_ERROR__ADDRESSES__INVALID_BASE58_ENCODED_ADDRESS]: "$putativeAddress is not a base58-encoded address.",
    [SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH]: "Expected base58 encoded address to decode to a byte array of length 32. Actual length: $actualLength.",
    [SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY]: "The `CryptoKey` must be an `Ed25519` public key.",
    [SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS]: "$putativeOffCurveAddress is not a base58-encoded off-curve address.",
    [SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE]: "Invalid seeds; point must fall off the Ed25519 curve.",
    [SOLANA_ERROR__ADDRESSES__MALFORMED_PDA]: "Expected given program derived address to have the following format: [Address, ProgramDerivedAddressBump].",
    [SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED]: "A maximum of $maxSeeds seeds, including the bump seed, may be supplied when creating an address. Received: $actual.",
    [SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED]: "The seed at index $index with length $actual exceeds the maximum length of $maxSeedLength bytes.",
    [SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE]: "Expected program derived address bump to be in the range [0, 255], got: $bump.",
    [SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER]: "Program address cannot end with PDA marker.",
    [SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE]: "Expected base58-encoded address string of length in the range [32, 44]. Actual length: $actualLength.",
    [SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE]: "Expected base58-encoded blockash string of length in the range [32, 44]. Actual length: $actualLength.",
    [SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED]: "The network has progressed past the last block for which this transaction could have been committed.",
    [SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY]: "Codec [$codecDescription] cannot decode empty byte arrays.",
    [SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS]: "Enum codec cannot use lexical values [$stringValues] as discriminators. Either remove all lexical values or set `useValuesAsDiscriminators` to `false`.",
    [SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL]: "Sentinel [$hexSentinel] must not be present in encoded bytes [$hexEncodedBytes].",
    [SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH]: "Encoder and decoder must have the same fixed size, got [$encoderFixedSize] and [$decoderFixedSize].",
    [SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH]: "Encoder and decoder must have the same max size, got [$encoderMaxSize] and [$decoderMaxSize].",
    [SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH]: "Encoder and decoder must either both be fixed-size or variable-size.",
    [SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE]: "Enum discriminator out of range. Expected a number in [$formattedValidDiscriminators], got $discriminator.",
    [SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH]: "Expected a fixed-size codec, got a variable-size one.",
    [SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH]: "Codec [$codecDescription] expected a positive byte length, got $bytesLength.",
    [SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH]: "Expected a variable-size codec, got a fixed-size one.",
    [SOLANA_ERROR__CODECS__EXPECTED_ZERO_VALUE_TO_MATCH_ITEM_FIXED_SIZE]: "Codec [$codecDescription] expected zero-value [$hexZeroValue] to have the same size as the provided fixed-size item [$expectedSize bytes].",
    [SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH]: "Codec [$codecDescription] expected $expected bytes, got $bytesLength.",
    [SOLANA_ERROR__CODECS__INVALID_CONSTANT]: "Expected byte array constant [$hexConstant] to be present in data [$hexData] at offset [$offset].",
    [SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT]: "Invalid discriminated union variant. Expected one of [$variants], got $value.",
    [SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT]: "Invalid enum variant. Expected one of [$stringValues] or a number in [$formattedNumericalValues], got $variant.",
    [SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT]: "Invalid literal union variant. Expected one of [$variants], got $value.",
    [SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS]: "Expected [$codecDescription] to have $expected items, got $actual.",
    [SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE]: "Invalid value $value for base $base with alphabet $alphabet.",
    [SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE]: "Literal union discriminator out of range. Expected a number between $minRange and $maxRange, got $discriminator.",
    [SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE]: "Codec [$codecDescription] expected number to be in the range [$min, $max], got $value.",
    [SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE]: "Codec [$codecDescription] expected offset to be in the range [0, $bytesLength], got $offset.",
    [SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES]: "Expected sentinel [$hexSentinel] to be present in decoded bytes [$hexDecodedBytes].",
    [SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE]: "Union variant out of range. Expected an index between $minRange and $maxRange, got $variant.",
    [SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED]: "No random values implementation could be found.",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_ALREADY_INITIALIZED]: "instruction requires an uninitialized account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_FAILED]: "instruction tries to borrow reference for an account which is already borrowed",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_BORROW_OUTSTANDING]: "instruction left account with an outstanding borrowed reference",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_SIZE_CHANGED]: "program other than the account's owner changed the size of the account data",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_DATA_TOO_SMALL]: "account data too small for instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_EXECUTABLE]: "instruction expected an executable account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ACCOUNT_NOT_RENT_EXEMPT]: "An account does not have enough lamports to be rent-exempt",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ARITHMETIC_OVERFLOW]: "Program arithmetic overflowed",
    [SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR]: "Failed to serialize or deserialize account data: $encodedData",
    [SOLANA_ERROR__INSTRUCTION_ERROR__BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS]: "Builtin programs must consume compute units",
    [SOLANA_ERROR__INSTRUCTION_ERROR__CALL_DEPTH]: "Cross-program invocation call depth too deep",
    [SOLANA_ERROR__INSTRUCTION_ERROR__COMPUTATIONAL_BUDGET_EXCEEDED]: "Computational budget exceeded",
    [SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM]: "custom program error: #$code",
    [SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_INDEX]: "instruction contains duplicate accounts",
    [SOLANA_ERROR__INSTRUCTION_ERROR__DUPLICATE_ACCOUNT_OUT_OF_SYNC]: "instruction modifications of multiply-passed account differ",
    [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT]: "executable accounts must be rent exempt",
    [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_DATA_MODIFIED]: "instruction changed executable accounts data",
    [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_LAMPORT_CHANGE]: "instruction changed the balance of an executable account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__EXECUTABLE_MODIFIED]: "instruction changed executable bit of an account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_DATA_MODIFIED]: "instruction modified data of an account it does not own",
    [SOLANA_ERROR__INSTRUCTION_ERROR__EXTERNAL_ACCOUNT_LAMPORT_SPEND]: "instruction spent from the balance of an account it does not own",
    [SOLANA_ERROR__INSTRUCTION_ERROR__GENERIC_ERROR]: "generic instruction error",
    [SOLANA_ERROR__INSTRUCTION_ERROR__ILLEGAL_OWNER]: "Provided owner is not allowed",
    [SOLANA_ERROR__INSTRUCTION_ERROR__IMMUTABLE]: "Account is immutable",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_AUTHORITY]: "Incorrect authority provided",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INCORRECT_PROGRAM_ID]: "incorrect program id for instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INSUFFICIENT_FUNDS]: "insufficient funds for instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_DATA]: "invalid account data for instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ACCOUNT_OWNER]: "Invalid account owner",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ARGUMENT]: "invalid program argument",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_ERROR]: "program returned invalid error code",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_INSTRUCTION_DATA]: "invalid instruction data",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_REALLOC]: "Failed to reallocate account data",
    [SOLANA_ERROR__INSTRUCTION_ERROR__INVALID_SEEDS]: "Provided seeds do not result in a valid address",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED]: "Accounts data allocations exceeded the maximum allowed per transaction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_ACCOUNTS_EXCEEDED]: "Max accounts exceeded",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED]: "Max instruction trace length exceeded",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MAX_SEED_LENGTH_EXCEEDED]: "Length of the seed is too long for address generation",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_ACCOUNT]: "An account required by the instruction is missing",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MISSING_REQUIRED_SIGNATURE]: "missing required signature for instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__MODIFIED_PROGRAM_ID]: "instruction illegally modified the program id of an account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__NOT_ENOUGH_ACCOUNT_KEYS]: "insufficient account keys for instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__PRIVILEGE_ESCALATION]: "Cross-program invocation with unauthorized signer or writable account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_ENVIRONMENT_SETUP_FAILURE]: "Failed to create program execution environment",
    [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPILE]: "Program failed to compile",
    [SOLANA_ERROR__INSTRUCTION_ERROR__PROGRAM_FAILED_TO_COMPLETE]: "Program failed to complete",
    [SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_DATA_MODIFIED]: "instruction modified data of a read-only account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__READONLY_LAMPORT_CHANGE]: "instruction changed the balance of a read-only account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__REENTRANCY_NOT_ALLOWED]: "Cross-program invocation reentrancy not allowed for this instruction",
    [SOLANA_ERROR__INSTRUCTION_ERROR__RENT_EPOCH_MODIFIED]: "instruction modified rent epoch of an account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__UNBALANCED_INSTRUCTION]: "sum of account balances before and after instruction do not match",
    [SOLANA_ERROR__INSTRUCTION_ERROR__UNINITIALIZED_ACCOUNT]: "instruction requires an initialized account",
    [SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN]: "",
    [SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_PROGRAM_ID]: "Unsupported program id",
    [SOLANA_ERROR__INSTRUCTION_ERROR__UNSUPPORTED_SYSVAR]: "Unsupported sysvar",
    [SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_INSTRUCTION_PLAN_KIND]: "Invalid instruction plan kind: $kind.",
    [SOLANA_ERROR__INSTRUCTION_PLANS__EMPTY_INSTRUCTION_PLAN]: "The provided instruction plan is empty.",
    [SOLANA_ERROR__INSTRUCTION_PLANS__FAILED_TO_EXECUTE_TRANSACTION_PLAN]: "The provided transaction plan failed to execute. See the `transactionPlanResult` attribute and the `cause` error for more details.",
    [SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_CANNOT_ACCOMMODATE_PLAN]: "The provided message has insufficient capacity to accommodate the next instruction(s) in this plan. Expected at least $numBytesRequired free byte(s), got $numFreeBytes byte(s).",
    [SOLANA_ERROR__INVARIANT_VIOLATION__INVALID_TRANSACTION_PLAN_KIND]: "Invalid transaction plan kind: $kind.",
    [SOLANA_ERROR__INSTRUCTION_PLANS__MESSAGE_PACKER_ALREADY_COMPLETE]: "No more instructions to pack; the message packer has completed the instruction plan.",
    [SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS]: "The instruction does not have any accounts.",
    [SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA]: "The instruction does not have any data.",
    [SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH]: "Expected instruction to have progress address $expectedProgramAddress, got $actualProgramAddress.",
    [SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH]: "Expected base58 encoded blockhash to decode to a byte array of length 32. Actual length: $actualLength.",
    [SOLANA_ERROR__INVALID_NONCE]: "The nonce `$expectedNonceValue` is no longer valid. It has advanced to `$actualNonceValue`",
    [SOLANA_ERROR__INVARIANT_VIOLATION__CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING]: "Invariant violation: Found no abortable iterable cache entry for key `$cacheKey`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
    [SOLANA_ERROR__INVARIANT_VIOLATION__DATA_PUBLISHER_CHANNEL_UNIMPLEMENTED]: "Invariant violation: This data publisher does not publish to the channel named `$channelName`. Supported channels include $supportedChannelNames.",
    [SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE]: "Invariant violation: WebSocket message iterator state is corrupt; iterated without first resolving existing message promise. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
    [SOLANA_ERROR__INVARIANT_VIOLATION__SUBSCRIPTION_ITERATOR_STATE_MISSING]: "Invariant violation: WebSocket message iterator is missing state storage. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
    [SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE]: "Invariant violation: Switch statement non-exhaustive. Received unexpected value `$unexpectedValue`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
    [SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR]: "JSON-RPC error: Internal JSON-RPC error ($__serverMessage)",
    [SOLANA_ERROR__JSON_RPC__INVALID_PARAMS]: "JSON-RPC error: Invalid method parameter(s) ($__serverMessage)",
    [SOLANA_ERROR__JSON_RPC__INVALID_REQUEST]: "JSON-RPC error: The JSON sent is not a valid `Request` object ($__serverMessage)",
    [SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND]: "JSON-RPC error: The method does not exist / is not available ($__serverMessage)",
    [SOLANA_ERROR__JSON_RPC__PARSE_ERROR]: "JSON-RPC error: An error occurred on the server while parsing the JSON text ($__serverMessage)",
    [SOLANA_ERROR__JSON_RPC__SCAN_ERROR]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_EPOCH_REWARDS_PERIOD_ACTIVE]: "Epoch rewards period still active at slot $slot",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_UNREACHABLE]: "Failed to query long-term storage; please try again",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED]: "Minimum context slot has not been reached",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NODE_UNHEALTHY]: "Node is unhealthy; behind by $numSlotsBehind slots",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_NO_SNAPSHOT]: "No snapshot",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE]: "Transaction simulation failed",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_NOT_EPOCH_BOUNDARY]: "Rewards cannot be found because slot $slot is not the epoch boundary. This may be due to gap in the queried node's local ledger or long-term storage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE]: "Transaction history is not available from this node",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE]: "$__serverMessage",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH]: "Transaction signature length mismatch",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE]: "Transaction signature verification failure",
    [SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION]: "$__serverMessage",
    [SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH]: "Key pair bytes must be of length 64, got $byteLength.",
    [SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH]: "Expected private key bytes with length 32. Actual length: $actualLength.",
    [SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH]: "Expected base58-encoded signature to decode to a byte array of length 64. Actual length: $actualLength.",
    [SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY]: "The provided private key does not match the provided public key.",
    [SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE]: "Expected base58-encoded signature string of length in the range [64, 88]. Actual length: $actualLength.",
    [SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE]: "Lamports value must be in the range [0, 2e64-1]",
    [SOLANA_ERROR__MALFORMED_BIGINT_STRING]: "`$value` cannot be parsed as a `BigInt`",
    [SOLANA_ERROR__MALFORMED_JSON_RPC_ERROR]: "$message",
    [SOLANA_ERROR__MALFORMED_NUMBER_STRING]: "`$value` cannot be parsed as a `Number`",
    [SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND]: "No nonce account could be found at address `$nonceAccountAddress`",
    [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CANNOT_CREATE_SUBSCRIPTION_PLAN]: "The notification name must end in 'Notifications' and the API must supply a subscription plan creator function for the notification '$notificationName'.",
    [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED]: "WebSocket was closed before payload could be added to the send buffer",
    [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED]: "WebSocket connection closed",
    [SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT]: "WebSocket failed to connect",
    [SOLANA_ERROR__RPC_SUBSCRIPTIONS__EXPECTED_SERVER_SUBSCRIPTION_ID]: "Failed to obtain a subscription id from the server",
    [SOLANA_ERROR__RPC__API_PLAN_MISSING_FOR_RPC_METHOD]: "Could not find an API plan for RPC method: `$method`",
    [SOLANA_ERROR__RPC__INTEGER_OVERFLOW]: "The $argumentLabel argument to the `$methodName` RPC method$optionalPathLabel was `$value`. This number is unsafe for use with the Solana JSON-RPC because it exceeds `Number.MAX_SAFE_INTEGER`.",
    [SOLANA_ERROR__RPC__TRANSPORT_HTTP_ERROR]: "HTTP error ($statusCode): $message",
    [SOLANA_ERROR__RPC__TRANSPORT_HTTP_HEADER_FORBIDDEN]: "HTTP header(s) forbidden: $headers. Learn more at https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name.",
    [SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS]: "Multiple distinct signers were identified for address `$address`. Please ensure that you are using the same signer instance for each address.",
    [SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER]: "The provided value does not implement the `KeyPairSigner` interface",
    [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER]: "The provided value does not implement the `MessageModifyingSigner` interface",
    [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER]: "The provided value does not implement the `MessagePartialSigner` interface",
    [SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER]: "The provided value does not implement any of the `MessageSigner` interfaces",
    [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER]: "The provided value does not implement the `TransactionModifyingSigner` interface",
    [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER]: "The provided value does not implement the `TransactionPartialSigner` interface",
    [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER]: "The provided value does not implement the `TransactionSendingSigner` interface",
    [SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER]: "The provided value does not implement any of the `TransactionSigner` interfaces",
    [SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS]: "More than one `TransactionSendingSigner` was identified.",
    [SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING]: "No `TransactionSendingSigner` was identified. Please provide a valid `TransactionWithSingleSendingSigner` transaction.",
    [SOLANA_ERROR__SIGNER__WALLET_MULTISIGN_UNIMPLEMENTED]: "Wallet account signers do not support signing multiple messages/transactions in a single operation",
    [SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY]: "Cannot export a non-extractable key.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED]: "No digest implementation could be found.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__DISALLOWED_IN_INSECURE_CONTEXT]: "Cryptographic operations are only allowed in secure browser contexts. Read more here: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED]: "This runtime does not support the generation of Ed25519 key pairs.\n\nInstall @solana/webcrypto-ed25519-polyfill and call its `install` function before generating keys in environments that do not support Ed25519.\n\nFor a list of runtimes that currently support Ed25519 operations, visit https://github.com/WICG/webcrypto-secure-curves/issues/20.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED]: "No signature verification implementation could be found.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED]: "No key generation implementation could be found.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED]: "No signing implementation could be found.",
    [SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED]: "No key export implementation could be found.",
    [SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE]: "Timestamp value must be in the range [-(2n ** 63n), (2n ** 63n) - 1]. `$value` given",
    [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_BORROW_OUTSTANDING]: "Transaction processing left an account with an outstanding borrowed reference",
    [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_IN_USE]: "Account in use",
    [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_LOADED_TWICE]: "Account loaded twice",
    [SOLANA_ERROR__TRANSACTION_ERROR__ACCOUNT_NOT_FOUND]: "Attempt to debit an account but found no record of a prior credit.",
    [SOLANA_ERROR__TRANSACTION_ERROR__ADDRESS_LOOKUP_TABLE_NOT_FOUND]: "Transaction loads an address table account that doesn't exist",
    [SOLANA_ERROR__TRANSACTION_ERROR__ALREADY_PROCESSED]: "This transaction has already been processed",
    [SOLANA_ERROR__TRANSACTION_ERROR__BLOCKHASH_NOT_FOUND]: "Blockhash not found",
    [SOLANA_ERROR__TRANSACTION_ERROR__CALL_CHAIN_TOO_DEEP]: "Loader call chain is too deep",
    [SOLANA_ERROR__TRANSACTION_ERROR__CLUSTER_MAINTENANCE]: "Transactions are currently disabled due to cluster maintenance",
    [SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION]: "Transaction contains a duplicate instruction ($index) that is not allowed",
    [SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_FEE]: "Insufficient funds for fee",
    [SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT]: "Transaction results in an account ($accountIndex) with insufficient funds for rent",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_FOR_FEE]: "This account may not be used to pay transaction fees",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ACCOUNT_INDEX]: "Transaction contains an invalid account reference",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_DATA]: "Transaction loads an address table account with invalid data",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_INDEX]: "Transaction address table lookup uses an invalid index",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_ADDRESS_LOOKUP_TABLE_OWNER]: "Transaction loads an address table account with an invalid owner",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT]: "LoadedAccountsDataSizeLimit set for transaction must be greater than 0.",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_PROGRAM_FOR_EXECUTION]: "This program may not be used for executing instructions",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_RENT_PAYING_ACCOUNT]: "Transaction leaves an account with a lower balance than rent-exempt minimum",
    [SOLANA_ERROR__TRANSACTION_ERROR__INVALID_WRITABLE_ACCOUNT]: "Transaction loads a writable account that cannot be written",
    [SOLANA_ERROR__TRANSACTION_ERROR__MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED]: "Transaction exceeded max loaded accounts data size cap",
    [SOLANA_ERROR__TRANSACTION_ERROR__MISSING_SIGNATURE_FOR_FEE]: "Transaction requires a fee but has no signature present",
    [SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_ACCOUNT_NOT_FOUND]: "Attempt to load a program that does not exist",
    [SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED]: "Execution of the program referenced by account at index $accountIndex is temporarily restricted.",
    [SOLANA_ERROR__TRANSACTION_ERROR__RESANITIZATION_NEEDED]: "ResanitizationNeeded",
    [SOLANA_ERROR__TRANSACTION_ERROR__SANITIZE_FAILURE]: "Transaction failed to sanitize accounts offsets correctly",
    [SOLANA_ERROR__TRANSACTION_ERROR__SIGNATURE_FAILURE]: "Transaction did not pass signature verification",
    [SOLANA_ERROR__TRANSACTION_ERROR__TOO_MANY_ACCOUNT_LOCKS]: "Transaction locked too many accounts",
    [SOLANA_ERROR__TRANSACTION_ERROR__UNBALANCED_TRANSACTION]: "Sum of account balances before and after transaction do not match",
    [SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN]: "The transaction failed with the error `$errorName`",
    [SOLANA_ERROR__TRANSACTION_ERROR__UNSUPPORTED_VERSION]: "Transaction version is unsupported",
    [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT]: "Transaction would exceed account data limit within the block",
    [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT]: "Transaction would exceed total account data limit",
    [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT]: "Transaction would exceed max account limit within the block",
    [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_BLOCK_COST_LIMIT]: "Transaction would exceed max Block Cost Limit",
    [SOLANA_ERROR__TRANSACTION_ERROR__WOULD_EXCEED_MAX_VOTE_COST_LIMIT]: "Transaction would exceed max Vote Cost Limit",
    [SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION]: "Attempted to sign a transaction with an address that is not a signer for it",
    [SOLANA_ERROR__TRANSACTION__ADDRESS_MISSING]: "Transaction is missing an address at index: $index.",
    [SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES]: "Transaction has no expected signers therefore it cannot be encoded",
    [SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT]: "Transaction size $transactionSize exceeds limit of $transactionSizeLimit bytes",
    [SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME]: "Transaction does not have a blockhash lifetime",
    [SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME]: "Transaction is not a durable nonce transaction",
    [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING]: "Contents of these address lookup tables unknown: $lookupTableAddresses",
    [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE]: "Lookup of address at index $highestRequestedIndex failed for lookup table `$lookupTableAddress`. Highest known index is $highestKnownIndex. The lookup table may have been extended since its contents were retrieved",
    [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING]: "No fee payer set in CompiledTransaction",
    [SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND]: "Could not find program address at index $index",
    [SOLANA_ERROR__TRANSACTION__FAILED_TO_ESTIMATE_COMPUTE_LIMIT]: "Failed to estimate the compute unit consumption for this transaction message. This is likely because simulating the transaction failed. Inspect the `cause` property of this error to learn more",
    [SOLANA_ERROR__TRANSACTION__FAILED_WHEN_SIMULATING_TO_ESTIMATE_COMPUTE_LIMIT]: "Transaction failed when it was simulated in order to estimate the compute unit consumption. The compute unit estimate provided is for a transaction that failed when simulated and may not be representative of the compute units this transaction would consume if successful. Inspect the `cause` property of this error to learn more",
    [SOLANA_ERROR__TRANSACTION__FEE_PAYER_MISSING]: "Transaction is missing a fee payer.",
    [SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING]: "Could not determine this transaction's signature. Make sure that the transaction has been signed by its fee payer.",
    [SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE]: "Transaction first instruction is not advance nonce account instruction.",
    [SOLANA_ERROR__TRANSACTION__INVALID_NONCE_TRANSACTION_INSTRUCTIONS_MISSING]: "Transaction with no instructions cannot be durable nonce transaction.",
    [SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES]: "This transaction includes an address (`$programAddress`) which is both invoked and set as the fee payer. Program addresses may not pay fees",
    [SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE]: "This transaction includes an address (`$programAddress`) which is both invoked and marked writable. Program addresses may not be writable",
    [SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH]: "The transaction message expected the transaction to have $signerAddressesLength signatures, got $signaturesLength.",
    [SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING]: "Transaction is missing signatures for addresses: $addresses.",
    [SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE]: "Transaction version must be in the range [0, 127]. `$actualVersion` given"
};
// src/message-formatter.ts
var START_INDEX = "i";
var TYPE = "t";
function getHumanReadableErrorMessage(code, context = {}) {
    const messageFormatString = SolanaErrorMessages[code];
    if (messageFormatString.length === 0) {
        return "";
    }
    let state;
    function commitStateUpTo(endIndex) {
        if (state[TYPE] === 2 /* Variable */ ) {
            const variableName = messageFormatString.slice(state[START_INDEX] + 1, endIndex);
            fragments.push(variableName in context ? // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            `${context[variableName]}` : `$${variableName}`);
        } else if (state[TYPE] === 1 /* Text */ ) {
            fragments.push(messageFormatString.slice(state[START_INDEX], endIndex));
        }
    }
    const fragments = [];
    messageFormatString.split("").forEach((char, ii)=>{
        if (ii === 0) {
            state = {
                [START_INDEX]: 0,
                [TYPE]: messageFormatString[0] === "\\" ? 0 /* EscapeSequence */  : messageFormatString[0] === "$" ? 2 /* Variable */  : 1 /* Text */ 
            };
            return;
        }
        let nextState;
        switch(state[TYPE]){
            case 0 /* EscapeSequence */ :
                nextState = {
                    [START_INDEX]: ii,
                    [TYPE]: 1 /* Text */ 
                };
                break;
            case 1 /* Text */ :
                if (char === "\\") {
                    nextState = {
                        [START_INDEX]: ii,
                        [TYPE]: 0 /* EscapeSequence */ 
                    };
                } else if (char === "$") {
                    nextState = {
                        [START_INDEX]: ii,
                        [TYPE]: 2 /* Variable */ 
                    };
                }
                break;
            case 2 /* Variable */ :
                if (char === "\\") {
                    nextState = {
                        [START_INDEX]: ii,
                        [TYPE]: 0 /* EscapeSequence */ 
                    };
                } else if (char === "$") {
                    nextState = {
                        [START_INDEX]: ii,
                        [TYPE]: 2 /* Variable */ 
                    };
                } else if (!char.match(/\w/)) {
                    nextState = {
                        [START_INDEX]: ii,
                        [TYPE]: 1 /* Text */ 
                    };
                }
                break;
        }
        if (nextState) {
            if (state !== nextState) {
                commitStateUpTo(ii);
            }
            state = nextState;
        }
    });
    commitStateUpTo();
    return fragments.join("");
}
function getErrorMessage(code, context = {}) {
    if ("TURBOPACK compile-time truthy", 1) {
        return getHumanReadableErrorMessage(code, context);
    } else //TURBOPACK unreachable
    ;
}
// src/error.ts
function isSolanaError(e, code) {
    const isSolanaError2 = e instanceof Error && e.name === "SolanaError";
    if (isSolanaError2) {
        if (code !== void 0) {
            return e.context.__code === code;
        }
        return true;
    }
    return false;
}
var SolanaError = class extends Error {
    /**
   * Indicates the root cause of this {@link SolanaError}, if any.
   *
   * For example, a transaction error might have an instruction error as its root cause. In this
   * case, you will be able to access the instruction error on the transaction error as `cause`.
   */ cause = this.cause;
    /**
   * Contains context that can assist in understanding or recovering from a {@link SolanaError}.
   */ context;
    constructor(...[code, contextAndErrorOptions]){
        let context;
        let errorOptions;
        if (contextAndErrorOptions) {
            Object.entries(Object.getOwnPropertyDescriptors(contextAndErrorOptions)).forEach(([name, descriptor])=>{
                if (name === "cause") {
                    errorOptions = {
                        cause: descriptor.value
                    };
                } else {
                    if (context === void 0) {
                        context = {};
                    }
                    Object.defineProperty(context, name, descriptor);
                }
            });
        }
        const message = getErrorMessage(code, context);
        super(message, errorOptions);
        this.context = context === void 0 ? {} : context;
        this.context.__code = code;
        this.name = "SolanaError";
    }
};
// src/stack-trace.ts
function safeCaptureStackTrace(...args) {
    if ("captureStackTrace" in Error && typeof Error.captureStackTrace === "function") {
        Error.captureStackTrace(...args);
    }
}
// src/rpc-enum-errors.ts
function getSolanaErrorFromRpcError({ errorCodeBaseOffset, getErrorContext, orderedErrorNames, rpcEnumError }, constructorOpt) {
    let rpcErrorName;
    let rpcErrorContext;
    if (typeof rpcEnumError === "string") {
        rpcErrorName = rpcEnumError;
    } else {
        rpcErrorName = Object.keys(rpcEnumError)[0];
        rpcErrorContext = rpcEnumError[rpcErrorName];
    }
    const codeOffset = orderedErrorNames.indexOf(rpcErrorName);
    const errorCode = errorCodeBaseOffset + codeOffset;
    const errorContext = getErrorContext(errorCode, rpcErrorName, rpcErrorContext);
    const err = new SolanaError(errorCode, errorContext);
    safeCaptureStackTrace(err, constructorOpt);
    return err;
}
// src/instruction-error.ts
var ORDERED_ERROR_NAMES = [
    // Keep synced with RPC source: https://github.com/anza-xyz/agave/blob/master/sdk/program/src/instruction.rs
    // If this list ever gets too large, consider implementing a compression strategy like this:
    // https://gist.github.com/steveluscher/aaa7cbbb5433b1197983908a40860c47
    "GenericError",
    "InvalidArgument",
    "InvalidInstructionData",
    "InvalidAccountData",
    "AccountDataTooSmall",
    "InsufficientFunds",
    "IncorrectProgramId",
    "MissingRequiredSignature",
    "AccountAlreadyInitialized",
    "UninitializedAccount",
    "UnbalancedInstruction",
    "ModifiedProgramId",
    "ExternalAccountLamportSpend",
    "ExternalAccountDataModified",
    "ReadonlyLamportChange",
    "ReadonlyDataModified",
    "DuplicateAccountIndex",
    "ExecutableModified",
    "RentEpochModified",
    "NotEnoughAccountKeys",
    "AccountDataSizeChanged",
    "AccountNotExecutable",
    "AccountBorrowFailed",
    "AccountBorrowOutstanding",
    "DuplicateAccountOutOfSync",
    "Custom",
    "InvalidError",
    "ExecutableDataModified",
    "ExecutableLamportChange",
    "ExecutableAccountNotRentExempt",
    "UnsupportedProgramId",
    "CallDepth",
    "MissingAccount",
    "ReentrancyNotAllowed",
    "MaxSeedLengthExceeded",
    "InvalidSeeds",
    "InvalidRealloc",
    "ComputationalBudgetExceeded",
    "PrivilegeEscalation",
    "ProgramEnvironmentSetupFailure",
    "ProgramFailedToComplete",
    "ProgramFailedToCompile",
    "Immutable",
    "IncorrectAuthority",
    "BorshIoError",
    "AccountNotRentExempt",
    "InvalidAccountOwner",
    "ArithmeticOverflow",
    "UnsupportedSysvar",
    "IllegalOwner",
    "MaxAccountsDataAllocationsExceeded",
    "MaxAccountsExceeded",
    "MaxInstructionTraceLengthExceeded",
    "BuiltinProgramsMustConsumeComputeUnits"
];
function getSolanaErrorFromInstructionError(index, instructionError) {
    const numberIndex = Number(index);
    return getSolanaErrorFromRpcError({
        errorCodeBaseOffset: 4615001,
        getErrorContext (errorCode, rpcErrorName, rpcErrorContext) {
            if (errorCode === SOLANA_ERROR__INSTRUCTION_ERROR__UNKNOWN) {
                return {
                    errorName: rpcErrorName,
                    index: numberIndex,
                    ...rpcErrorContext !== void 0 ? {
                        instructionErrorContext: rpcErrorContext
                    } : null
                };
            } else if (errorCode === SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM) {
                return {
                    code: Number(rpcErrorContext),
                    index: numberIndex
                };
            } else if (errorCode === SOLANA_ERROR__INSTRUCTION_ERROR__BORSH_IO_ERROR) {
                return {
                    encodedData: rpcErrorContext,
                    index: numberIndex
                };
            }
            return {
                index: numberIndex
            };
        },
        orderedErrorNames: ORDERED_ERROR_NAMES,
        rpcEnumError: instructionError
    }, getSolanaErrorFromInstructionError);
}
// src/transaction-error.ts
var ORDERED_ERROR_NAMES2 = [
    // Keep synced with RPC source: https://github.com/anza-xyz/agave/blob/master/sdk/src/transaction/error.rs
    // If this list ever gets too large, consider implementing a compression strategy like this:
    // https://gist.github.com/steveluscher/aaa7cbbb5433b1197983908a40860c47
    "AccountInUse",
    "AccountLoadedTwice",
    "AccountNotFound",
    "ProgramAccountNotFound",
    "InsufficientFundsForFee",
    "InvalidAccountForFee",
    "AlreadyProcessed",
    "BlockhashNotFound",
    // `InstructionError` intentionally omitted; delegated to `getSolanaErrorFromInstructionError`
    "CallChainTooDeep",
    "MissingSignatureForFee",
    "InvalidAccountIndex",
    "SignatureFailure",
    "InvalidProgramForExecution",
    "SanitizeFailure",
    "ClusterMaintenance",
    "AccountBorrowOutstanding",
    "WouldExceedMaxBlockCostLimit",
    "UnsupportedVersion",
    "InvalidWritableAccount",
    "WouldExceedMaxAccountCostLimit",
    "WouldExceedAccountDataBlockLimit",
    "TooManyAccountLocks",
    "AddressLookupTableNotFound",
    "InvalidAddressLookupTableOwner",
    "InvalidAddressLookupTableData",
    "InvalidAddressLookupTableIndex",
    "InvalidRentPayingAccount",
    "WouldExceedMaxVoteCostLimit",
    "WouldExceedAccountDataTotalLimit",
    "DuplicateInstruction",
    "InsufficientFundsForRent",
    "MaxLoadedAccountsDataSizeExceeded",
    "InvalidLoadedAccountsDataSizeLimit",
    "ResanitizationNeeded",
    "ProgramExecutionTemporarilyRestricted",
    "UnbalancedTransaction"
];
function getSolanaErrorFromTransactionError(transactionError) {
    if (typeof transactionError === "object" && "InstructionError" in transactionError) {
        return getSolanaErrorFromInstructionError(...transactionError.InstructionError);
    }
    return getSolanaErrorFromRpcError({
        errorCodeBaseOffset: 7050001,
        getErrorContext (errorCode, rpcErrorName, rpcErrorContext) {
            if (errorCode === SOLANA_ERROR__TRANSACTION_ERROR__UNKNOWN) {
                return {
                    errorName: rpcErrorName,
                    ...rpcErrorContext !== void 0 ? {
                        transactionErrorContext: rpcErrorContext
                    } : null
                };
            } else if (errorCode === SOLANA_ERROR__TRANSACTION_ERROR__DUPLICATE_INSTRUCTION) {
                return {
                    index: Number(rpcErrorContext)
                };
            } else if (errorCode === SOLANA_ERROR__TRANSACTION_ERROR__INSUFFICIENT_FUNDS_FOR_RENT || errorCode === SOLANA_ERROR__TRANSACTION_ERROR__PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED) {
                return {
                    accountIndex: Number(rpcErrorContext.account_index)
                };
            }
        },
        orderedErrorNames: ORDERED_ERROR_NAMES2,
        rpcEnumError: transactionError
    }, getSolanaErrorFromTransactionError);
}
// src/json-rpc-error.ts
function getSolanaErrorFromJsonRpcError(putativeErrorResponse) {
    let out;
    if (isRpcErrorResponse(putativeErrorResponse)) {
        const { code: rawCode, data, message } = putativeErrorResponse;
        const code = Number(rawCode);
        if (code === SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE) {
            const { err, ...preflightErrorContext } = data;
            const causeObject = err ? {
                cause: getSolanaErrorFromTransactionError(err)
            } : null;
            out = new SolanaError(SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE, {
                ...preflightErrorContext,
                ...causeObject
            });
        } else {
            let errorContext;
            switch(code){
                case SOLANA_ERROR__JSON_RPC__INTERNAL_ERROR:
                case SOLANA_ERROR__JSON_RPC__INVALID_PARAMS:
                case SOLANA_ERROR__JSON_RPC__INVALID_REQUEST:
                case SOLANA_ERROR__JSON_RPC__METHOD_NOT_FOUND:
                case SOLANA_ERROR__JSON_RPC__PARSE_ERROR:
                case SOLANA_ERROR__JSON_RPC__SCAN_ERROR:
                case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_CLEANED_UP:
                case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_NOT_AVAILABLE:
                case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET:
                case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX:
                case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED:
                case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_SLOT_SKIPPED:
                case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE:
                case SOLANA_ERROR__JSON_RPC__SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION:
                    errorContext = {
                        __serverMessage: message
                    };
                    break;
                default:
                    if (typeof data === "object" && !Array.isArray(data)) {
                        errorContext = data;
                    }
            }
            out = new SolanaError(code, errorContext);
        }
    } else {
        const message = typeof putativeErrorResponse === "object" && putativeErrorResponse !== null && "message" in putativeErrorResponse && typeof putativeErrorResponse.message === "string" ? putativeErrorResponse.message : "Malformed JSON-RPC error with no message attribute";
        out = new SolanaError(SOLANA_ERROR__MALFORMED_JSON_RPC_ERROR, {
            error: putativeErrorResponse,
            message
        });
    }
    safeCaptureStackTrace(out, getSolanaErrorFromJsonRpcError);
    return out;
}
function isRpcErrorResponse(value) {
    return typeof value === "object" && value !== null && "code" in value && "message" in value && (typeof value.code === "number" || typeof value.code === "bigint") && typeof value.message === "string";
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addCodecSentinel",
    ()=>addCodecSentinel,
    "addCodecSizePrefix",
    ()=>addCodecSizePrefix,
    "addDecoderSentinel",
    ()=>addDecoderSentinel,
    "addDecoderSizePrefix",
    ()=>addDecoderSizePrefix,
    "addEncoderSentinel",
    ()=>addEncoderSentinel,
    "addEncoderSizePrefix",
    ()=>addEncoderSizePrefix,
    "assertByteArrayHasEnoughBytesForCodec",
    ()=>assertByteArrayHasEnoughBytesForCodec,
    "assertByteArrayIsNotEmptyForCodec",
    ()=>assertByteArrayIsNotEmptyForCodec,
    "assertByteArrayOffsetIsNotOutOfRange",
    ()=>assertByteArrayOffsetIsNotOutOfRange,
    "assertIsFixedSize",
    ()=>assertIsFixedSize,
    "assertIsVariableSize",
    ()=>assertIsVariableSize,
    "combineCodec",
    ()=>combineCodec,
    "containsBytes",
    ()=>containsBytes,
    "createCodec",
    ()=>createCodec,
    "createDecoder",
    ()=>createDecoder,
    "createEncoder",
    ()=>createEncoder,
    "fixBytes",
    ()=>fixBytes,
    "fixCodecSize",
    ()=>fixCodecSize,
    "fixDecoderSize",
    ()=>fixDecoderSize,
    "fixEncoderSize",
    ()=>fixEncoderSize,
    "getEncodedSize",
    ()=>getEncodedSize,
    "isFixedSize",
    ()=>isFixedSize,
    "isVariableSize",
    ()=>isVariableSize,
    "mergeBytes",
    ()=>mergeBytes,
    "offsetCodec",
    ()=>offsetCodec,
    "offsetDecoder",
    ()=>offsetDecoder,
    "offsetEncoder",
    ()=>offsetEncoder,
    "padBytes",
    ()=>padBytes,
    "padLeftCodec",
    ()=>padLeftCodec,
    "padLeftDecoder",
    ()=>padLeftDecoder,
    "padLeftEncoder",
    ()=>padLeftEncoder,
    "padRightCodec",
    ()=>padRightCodec,
    "padRightDecoder",
    ()=>padRightDecoder,
    "padRightEncoder",
    ()=>padRightEncoder,
    "resizeCodec",
    ()=>resizeCodec,
    "resizeDecoder",
    ()=>resizeDecoder,
    "resizeEncoder",
    ()=>resizeEncoder,
    "reverseCodec",
    ()=>reverseCodec,
    "reverseDecoder",
    ()=>reverseDecoder,
    "reverseEncoder",
    ()=>reverseEncoder,
    "transformCodec",
    ()=>transformCodec,
    "transformDecoder",
    ()=>transformDecoder,
    "transformEncoder",
    ()=>transformEncoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
;
// src/add-codec-sentinel.ts
// src/bytes.ts
var mergeBytes = (byteArrays)=>{
    const nonEmptyByteArrays = byteArrays.filter((arr)=>arr.length);
    if (nonEmptyByteArrays.length === 0) {
        return byteArrays.length ? byteArrays[0] : new Uint8Array();
    }
    if (nonEmptyByteArrays.length === 1) {
        return nonEmptyByteArrays[0];
    }
    const totalLength = nonEmptyByteArrays.reduce((total, arr)=>total + arr.length, 0);
    const result = new Uint8Array(totalLength);
    let offset = 0;
    nonEmptyByteArrays.forEach((arr)=>{
        result.set(arr, offset);
        offset += arr.length;
    });
    return result;
};
function padBytes(bytes, length) {
    if (bytes.length >= length) return bytes;
    const paddedBytes = new Uint8Array(length).fill(0);
    paddedBytes.set(bytes);
    return paddedBytes;
}
var fixBytes = (bytes, length)=>padBytes(bytes.length <= length ? bytes : bytes.slice(0, length), length);
function containsBytes(data, bytes, offset) {
    const slice = offset === 0 && data.length === bytes.length ? data : data.slice(offset, offset + bytes.length);
    if (slice.length !== bytes.length) return false;
    return bytes.every((b, i)=>b === slice[i]);
}
function getEncodedSize(value, encoder) {
    return "fixedSize" in encoder ? encoder.fixedSize : encoder.getSizeFromValue(value);
}
function createEncoder(encoder) {
    return Object.freeze({
        ...encoder,
        encode: (value)=>{
            const bytes = new Uint8Array(getEncodedSize(value, encoder));
            encoder.write(value, bytes, 0);
            return bytes;
        }
    });
}
function createDecoder(decoder) {
    return Object.freeze({
        ...decoder,
        decode: (bytes, offset = 0)=>decoder.read(bytes, offset)[0]
    });
}
function createCodec(codec) {
    return Object.freeze({
        ...codec,
        decode: (bytes, offset = 0)=>codec.read(bytes, offset)[0],
        encode: (value)=>{
            const bytes = new Uint8Array(getEncodedSize(value, codec));
            codec.write(value, bytes, 0);
            return bytes;
        }
    });
}
function isFixedSize(codec) {
    return "fixedSize" in codec && typeof codec.fixedSize === "number";
}
function assertIsFixedSize(codec) {
    if (!isFixedSize(codec)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_FIXED_LENGTH"]);
    }
}
function isVariableSize(codec) {
    return !isFixedSize(codec);
}
function assertIsVariableSize(codec) {
    if (!isVariableSize(codec)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_VARIABLE_LENGTH"]);
    }
}
function combineCodec(encoder, decoder) {
    if (isFixedSize(encoder) !== isFixedSize(decoder)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH"]);
    }
    if (isFixedSize(encoder) && isFixedSize(decoder) && encoder.fixedSize !== decoder.fixedSize) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENCODER_DECODER_FIXED_SIZE_MISMATCH"], {
            decoderFixedSize: decoder.fixedSize,
            encoderFixedSize: encoder.fixedSize
        });
    }
    if (!isFixedSize(encoder) && !isFixedSize(decoder) && encoder.maxSize !== decoder.maxSize) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENCODER_DECODER_MAX_SIZE_MISMATCH"], {
            decoderMaxSize: decoder.maxSize,
            encoderMaxSize: encoder.maxSize
        });
    }
    return {
        ...decoder,
        ...encoder,
        decode: decoder.decode,
        encode: encoder.encode,
        read: decoder.read,
        write: encoder.write
    };
}
// src/add-codec-sentinel.ts
function addEncoderSentinel(encoder, sentinel) {
    const write = (value, bytes, offset)=>{
        const encoderBytes = encoder.encode(value);
        if (findSentinelIndex(encoderBytes, sentinel) >= 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENCODED_BYTES_MUST_NOT_INCLUDE_SENTINEL"], {
                encodedBytes: encoderBytes,
                hexEncodedBytes: hexBytes(encoderBytes),
                hexSentinel: hexBytes(sentinel),
                sentinel
            });
        }
        bytes.set(encoderBytes, offset);
        offset += encoderBytes.length;
        bytes.set(sentinel, offset);
        offset += sentinel.length;
        return offset;
    };
    if (isFixedSize(encoder)) {
        return createEncoder({
            ...encoder,
            fixedSize: encoder.fixedSize + sentinel.length,
            write
        });
    }
    return createEncoder({
        ...encoder,
        ...encoder.maxSize != null ? {
            maxSize: encoder.maxSize + sentinel.length
        } : {},
        getSizeFromValue: (value)=>encoder.getSizeFromValue(value) + sentinel.length,
        write
    });
}
function addDecoderSentinel(decoder, sentinel) {
    const read = (bytes, offset)=>{
        const candidateBytes = offset === 0 ? bytes : bytes.slice(offset);
        const sentinelIndex = findSentinelIndex(candidateBytes, sentinel);
        if (sentinelIndex === -1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__SENTINEL_MISSING_IN_DECODED_BYTES"], {
                decodedBytes: candidateBytes,
                hexDecodedBytes: hexBytes(candidateBytes),
                hexSentinel: hexBytes(sentinel),
                sentinel
            });
        }
        const preSentinelBytes = candidateBytes.slice(0, sentinelIndex);
        return [
            decoder.decode(preSentinelBytes),
            offset + preSentinelBytes.length + sentinel.length
        ];
    };
    if (isFixedSize(decoder)) {
        return createDecoder({
            ...decoder,
            fixedSize: decoder.fixedSize + sentinel.length,
            read
        });
    }
    return createDecoder({
        ...decoder,
        ...decoder.maxSize != null ? {
            maxSize: decoder.maxSize + sentinel.length
        } : {},
        read
    });
}
function addCodecSentinel(codec, sentinel) {
    return combineCodec(addEncoderSentinel(codec, sentinel), addDecoderSentinel(codec, sentinel));
}
function findSentinelIndex(bytes, sentinel) {
    return bytes.findIndex((byte, index, arr)=>{
        if (sentinel.length === 1) return byte === sentinel[0];
        return containsBytes(arr, sentinel, index);
    });
}
function hexBytes(bytes) {
    return bytes.reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
}
function assertByteArrayIsNotEmptyForCodec(codecDescription, bytes, offset = 0) {
    if (bytes.length - offset <= 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__CANNOT_DECODE_EMPTY_BYTE_ARRAY"], {
            codecDescription
        });
    }
}
function assertByteArrayHasEnoughBytesForCodec(codecDescription, expected, bytes, offset = 0) {
    const bytesLength = bytes.length - offset;
    if (bytesLength < expected) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_BYTE_LENGTH"], {
            bytesLength,
            codecDescription,
            expected
        });
    }
}
function assertByteArrayOffsetIsNotOutOfRange(codecDescription, offset, bytesLength) {
    if (offset < 0 || offset > bytesLength) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__OFFSET_OUT_OF_RANGE"], {
            bytesLength,
            codecDescription,
            offset
        });
    }
}
// src/add-codec-size-prefix.ts
function addEncoderSizePrefix(encoder, prefix) {
    const write = (value, bytes, offset)=>{
        const encoderBytes = encoder.encode(value);
        offset = prefix.write(encoderBytes.length, bytes, offset);
        bytes.set(encoderBytes, offset);
        return offset + encoderBytes.length;
    };
    if (isFixedSize(prefix) && isFixedSize(encoder)) {
        return createEncoder({
            ...encoder,
            fixedSize: prefix.fixedSize + encoder.fixedSize,
            write
        });
    }
    const prefixMaxSize = isFixedSize(prefix) ? prefix.fixedSize : prefix.maxSize ?? null;
    const encoderMaxSize = isFixedSize(encoder) ? encoder.fixedSize : encoder.maxSize ?? null;
    const maxSize = prefixMaxSize !== null && encoderMaxSize !== null ? prefixMaxSize + encoderMaxSize : null;
    return createEncoder({
        ...encoder,
        ...maxSize !== null ? {
            maxSize
        } : {},
        getSizeFromValue: (value)=>{
            const encoderSize = getEncodedSize(value, encoder);
            return getEncodedSize(encoderSize, prefix) + encoderSize;
        },
        write
    });
}
function addDecoderSizePrefix(decoder, prefix) {
    const read = (bytes, offset)=>{
        const [bigintSize, decoderOffset] = prefix.read(bytes, offset);
        const size = Number(bigintSize);
        offset = decoderOffset;
        if (offset > 0 || bytes.length > size) {
            bytes = bytes.slice(offset, offset + size);
        }
        assertByteArrayHasEnoughBytesForCodec("addDecoderSizePrefix", size, bytes);
        return [
            decoder.decode(bytes),
            offset + size
        ];
    };
    if (isFixedSize(prefix) && isFixedSize(decoder)) {
        return createDecoder({
            ...decoder,
            fixedSize: prefix.fixedSize + decoder.fixedSize,
            read
        });
    }
    const prefixMaxSize = isFixedSize(prefix) ? prefix.fixedSize : prefix.maxSize ?? null;
    const decoderMaxSize = isFixedSize(decoder) ? decoder.fixedSize : decoder.maxSize ?? null;
    const maxSize = prefixMaxSize !== null && decoderMaxSize !== null ? prefixMaxSize + decoderMaxSize : null;
    return createDecoder({
        ...decoder,
        ...maxSize !== null ? {
            maxSize
        } : {},
        read
    });
}
function addCodecSizePrefix(codec, prefix) {
    return combineCodec(addEncoderSizePrefix(codec, prefix), addDecoderSizePrefix(codec, prefix));
}
// src/fix-codec-size.ts
function fixEncoderSize(encoder, fixedBytes) {
    return createEncoder({
        fixedSize: fixedBytes,
        write: (value, bytes, offset)=>{
            const variableByteArray = encoder.encode(value);
            const fixedByteArray = variableByteArray.length > fixedBytes ? variableByteArray.slice(0, fixedBytes) : variableByteArray;
            bytes.set(fixedByteArray, offset);
            return offset + fixedBytes;
        }
    });
}
function fixDecoderSize(decoder, fixedBytes) {
    return createDecoder({
        fixedSize: fixedBytes,
        read: (bytes, offset)=>{
            assertByteArrayHasEnoughBytesForCodec("fixCodecSize", fixedBytes, bytes, offset);
            if (offset > 0 || bytes.length > fixedBytes) {
                bytes = bytes.slice(offset, offset + fixedBytes);
            }
            if (isFixedSize(decoder)) {
                bytes = fixBytes(bytes, decoder.fixedSize);
            }
            const [value] = decoder.read(bytes, 0);
            return [
                value,
                offset + fixedBytes
            ];
        }
    });
}
function fixCodecSize(codec, fixedBytes) {
    return combineCodec(fixEncoderSize(codec, fixedBytes), fixDecoderSize(codec, fixedBytes));
}
// src/offset-codec.ts
function offsetEncoder(encoder, config) {
    return createEncoder({
        ...encoder,
        write: (value, bytes, preOffset)=>{
            const wrapBytes = (offset)=>modulo(offset, bytes.length);
            const newPreOffset = config.preOffset ? config.preOffset({
                bytes,
                preOffset,
                wrapBytes
            }) : preOffset;
            assertByteArrayOffsetIsNotOutOfRange("offsetEncoder", newPreOffset, bytes.length);
            const postOffset = encoder.write(value, bytes, newPreOffset);
            const newPostOffset = config.postOffset ? config.postOffset({
                bytes,
                newPreOffset,
                postOffset,
                preOffset,
                wrapBytes
            }) : postOffset;
            assertByteArrayOffsetIsNotOutOfRange("offsetEncoder", newPostOffset, bytes.length);
            return newPostOffset;
        }
    });
}
function offsetDecoder(decoder, config) {
    return createDecoder({
        ...decoder,
        read: (bytes, preOffset)=>{
            const wrapBytes = (offset)=>modulo(offset, bytes.length);
            const newPreOffset = config.preOffset ? config.preOffset({
                bytes,
                preOffset,
                wrapBytes
            }) : preOffset;
            assertByteArrayOffsetIsNotOutOfRange("offsetDecoder", newPreOffset, bytes.length);
            const [value, postOffset] = decoder.read(bytes, newPreOffset);
            const newPostOffset = config.postOffset ? config.postOffset({
                bytes,
                newPreOffset,
                postOffset,
                preOffset,
                wrapBytes
            }) : postOffset;
            assertByteArrayOffsetIsNotOutOfRange("offsetDecoder", newPostOffset, bytes.length);
            return [
                value,
                newPostOffset
            ];
        }
    });
}
function offsetCodec(codec, config) {
    return combineCodec(offsetEncoder(codec, config), offsetDecoder(codec, config));
}
function modulo(dividend, divisor) {
    if (divisor === 0) return 0;
    return (dividend % divisor + divisor) % divisor;
}
function resizeEncoder(encoder, resize) {
    if (isFixedSize(encoder)) {
        const fixedSize = resize(encoder.fixedSize);
        if (fixedSize < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH"], {
                bytesLength: fixedSize,
                codecDescription: "resizeEncoder"
            });
        }
        return createEncoder({
            ...encoder,
            fixedSize
        });
    }
    return createEncoder({
        ...encoder,
        getSizeFromValue: (value)=>{
            const newSize = resize(encoder.getSizeFromValue(value));
            if (newSize < 0) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH"], {
                    bytesLength: newSize,
                    codecDescription: "resizeEncoder"
                });
            }
            return newSize;
        }
    });
}
function resizeDecoder(decoder, resize) {
    if (isFixedSize(decoder)) {
        const fixedSize = resize(decoder.fixedSize);
        if (fixedSize < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__EXPECTED_POSITIVE_BYTE_LENGTH"], {
                bytesLength: fixedSize,
                codecDescription: "resizeDecoder"
            });
        }
        return createDecoder({
            ...decoder,
            fixedSize
        });
    }
    return decoder;
}
function resizeCodec(codec, resize) {
    return combineCodec(resizeEncoder(codec, resize), resizeDecoder(codec, resize));
}
// src/pad-codec.ts
function padLeftEncoder(encoder, offset) {
    return offsetEncoder(resizeEncoder(encoder, (size)=>size + offset), {
        preOffset: ({ preOffset })=>preOffset + offset
    });
}
function padRightEncoder(encoder, offset) {
    return offsetEncoder(resizeEncoder(encoder, (size)=>size + offset), {
        postOffset: ({ postOffset })=>postOffset + offset
    });
}
function padLeftDecoder(decoder, offset) {
    return offsetDecoder(resizeDecoder(decoder, (size)=>size + offset), {
        preOffset: ({ preOffset })=>preOffset + offset
    });
}
function padRightDecoder(decoder, offset) {
    return offsetDecoder(resizeDecoder(decoder, (size)=>size + offset), {
        postOffset: ({ postOffset })=>postOffset + offset
    });
}
function padLeftCodec(codec, offset) {
    return combineCodec(padLeftEncoder(codec, offset), padLeftDecoder(codec, offset));
}
function padRightCodec(codec, offset) {
    return combineCodec(padRightEncoder(codec, offset), padRightDecoder(codec, offset));
}
// src/reverse-codec.ts
function copySourceToTargetInReverse(source, target_WILL_MUTATE, sourceOffset, sourceLength, targetOffset = 0) {
    while(sourceOffset < --sourceLength){
        const leftValue = source[sourceOffset];
        target_WILL_MUTATE[sourceOffset + targetOffset] = source[sourceLength];
        target_WILL_MUTATE[sourceLength + targetOffset] = leftValue;
        sourceOffset++;
    }
    if (sourceOffset === sourceLength) {
        target_WILL_MUTATE[sourceOffset + targetOffset] = source[sourceOffset];
    }
}
function reverseEncoder(encoder) {
    assertIsFixedSize(encoder);
    return createEncoder({
        ...encoder,
        write: (value, bytes, offset)=>{
            const newOffset = encoder.write(value, bytes, offset);
            copySourceToTargetInReverse(bytes, bytes, offset, offset + encoder.fixedSize);
            return newOffset;
        }
    });
}
function reverseDecoder(decoder) {
    assertIsFixedSize(decoder);
    return createDecoder({
        ...decoder,
        read: (bytes, offset)=>{
            const reversedBytes = bytes.slice();
            copySourceToTargetInReverse(bytes, reversedBytes, offset, offset + decoder.fixedSize);
            return decoder.read(reversedBytes, offset);
        }
    });
}
function reverseCodec(codec) {
    return combineCodec(reverseEncoder(codec), reverseDecoder(codec));
}
// src/transform-codec.ts
function transformEncoder(encoder, unmap) {
    return createEncoder({
        ...isVariableSize(encoder) ? {
            ...encoder,
            getSizeFromValue: (value)=>encoder.getSizeFromValue(unmap(value))
        } : encoder,
        write: (value, bytes, offset)=>encoder.write(unmap(value), bytes, offset)
    });
}
function transformDecoder(decoder, map) {
    return createDecoder({
        ...decoder,
        read: (bytes, offset)=>{
            const [value, newOffset] = decoder.read(bytes, offset);
            return [
                map(value, bytes, offset),
                newOffset
            ];
        }
    });
}
function transformCodec(codec, unmap, map) {
    return createCodec({
        ...transformEncoder(codec, unmap),
        read: map ? transformDecoder(codec, map).read : codec.read
    });
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidBaseString",
    ()=>assertValidBaseString,
    "getBase10Codec",
    ()=>getBase10Codec,
    "getBase10Decoder",
    ()=>getBase10Decoder,
    "getBase10Encoder",
    ()=>getBase10Encoder,
    "getBase16Codec",
    ()=>getBase16Codec,
    "getBase16Decoder",
    ()=>getBase16Decoder,
    "getBase16Encoder",
    ()=>getBase16Encoder,
    "getBase58Codec",
    ()=>getBase58Codec,
    "getBase58Decoder",
    ()=>getBase58Decoder,
    "getBase58Encoder",
    ()=>getBase58Encoder,
    "getBase64Codec",
    ()=>getBase64Codec,
    "getBase64Decoder",
    ()=>getBase64Decoder,
    "getBase64Encoder",
    ()=>getBase64Encoder,
    "getBaseXCodec",
    ()=>getBaseXCodec,
    "getBaseXDecoder",
    ()=>getBaseXDecoder,
    "getBaseXEncoder",
    ()=>getBaseXEncoder,
    "getBaseXResliceCodec",
    ()=>getBaseXResliceCodec,
    "getBaseXResliceDecoder",
    ()=>getBaseXResliceDecoder,
    "getBaseXResliceEncoder",
    ()=>getBaseXResliceEncoder,
    "getUtf8Codec",
    ()=>getUtf8Codec,
    "getUtf8Decoder",
    ()=>getUtf8Decoder,
    "getUtf8Encoder",
    ()=>getUtf8Encoder,
    "padNullCharacters",
    ()=>padNullCharacters,
    "removeNullCharacters",
    ()=>removeNullCharacters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/assertions.ts
function assertValidBaseString(alphabet4, testValue, givenValue = testValue) {
    if (!testValue.match(new RegExp(`^[${alphabet4}]*$`))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
            alphabet: alphabet4,
            base: alphabet4.length,
            value: givenValue
        });
    }
}
var getBaseXEncoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) return value.length;
            const base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            return leadingZeroes.length + Math.ceil(base10Number.toString(16).length / 2);
        },
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) {
                bytes.set(new Uint8Array(leadingZeroes.length).fill(0), offset);
                return offset + leadingZeroes.length;
            }
            let base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            const tailBytes = [];
            while(base10Number > 0n){
                tailBytes.unshift(Number(base10Number % 256n));
                base10Number /= 256n;
            }
            const bytesToAdd = [
                ...Array(leadingZeroes.length).fill(0),
                ...tailBytes
            ];
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getBaseXDecoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes, offset) {
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                0
            ];
            let trailIndex = bytes.findIndex((n)=>n !== 0);
            trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
            const leadingZeroes = alphabet4[0].repeat(trailIndex);
            if (trailIndex === bytes.length) return [
                leadingZeroes,
                rawBytes.length
            ];
            const base10Number = bytes.slice(trailIndex).reduce((sum, byte)=>sum * 256n + BigInt(byte), 0n);
            const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
            return [
                leadingZeroes + tailChars,
                rawBytes.length
            ];
        }
    });
};
var getBaseXCodec = (alphabet4)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXEncoder(alphabet4), getBaseXDecoder(alphabet4));
function partitionLeadingZeroes(value, zeroCharacter) {
    const [leadingZeros, tailChars] = value.split(new RegExp(`((?!${zeroCharacter}).*)`));
    return [
        leadingZeros,
        tailChars
    ];
}
function getBigIntFromBaseX(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    let sum = 0n;
    for (const char of value){
        sum *= base;
        sum += BigInt(alphabet4.indexOf(char));
    }
    return sum;
}
function getBaseXFromBigInt(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    const tailChars = [];
    while(value > 0n){
        tailChars.unshift(alphabet4[Number(value % base)]);
        value /= base;
    }
    return tailChars.join("");
}
// src/base10.ts
var alphabet = "0123456789";
var getBase10Encoder = ()=>getBaseXEncoder(alphabet);
var getBase10Decoder = ()=>getBaseXDecoder(alphabet);
var getBase10Codec = ()=>getBaseXCodec(alphabet);
var INVALID_STRING_ERROR_BASE_CONFIG = {
    alphabet: "0123456789abcdef",
    base: 16
};
function charCodeToBase16(char) {
    if (char >= 48 /* ZERO */  && char <= 57 /* NINE */ ) return char - 48 /* ZERO */ ;
    if (char >= 65 /* A_UP */  && char <= 70 /* F_UP */ ) return char - (65 /* A_UP */  - 10);
    if (char >= 97 /* A_LO */  && char <= 102 /* F_LO */ ) return char - (97 /* A_LO */  - 10);
}
var getBase16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.ceil(value.length / 2),
        write (value, bytes, offset) {
            const len = value.length;
            const al = len / 2;
            if (len === 1) {
                const c = value.charCodeAt(0);
                const n = charCodeToBase16(c);
                if (n === void 0) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                bytes.set([
                    n
                ], offset);
                return 1 + offset;
            }
            const hexBytes = new Uint8Array(al);
            for(let i = 0, j = 0; i < al; i++){
                const c1 = value.charCodeAt(j++);
                const c2 = value.charCodeAt(j++);
                const n1 = charCodeToBase16(c1);
                const n2 = charCodeToBase16(c2);
                if (n1 === void 0 || n2 === void 0 && !Number.isNaN(c2)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
                        ...INVALID_STRING_ERROR_BASE_CONFIG,
                        value
                    });
                }
                hexBytes[i] = !Number.isNaN(c2) ? n1 << 4 | (n2 ?? 0) : n1;
            }
            bytes.set(hexBytes, offset);
            return hexBytes.length + offset;
        }
    });
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
var getBase16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBase16Encoder(), getBase16Decoder());
// src/base58.ts
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Encoder = ()=>getBaseXEncoder(alphabet2);
var getBase58Decoder = ()=>getBaseXDecoder(alphabet2);
var getBase58Codec = ()=>getBaseXCodec(alphabet2);
var getBaseXResliceEncoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>Math.floor(value.length * bits / 8),
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const charIndices = [
                ...value
            ].map((c)=>alphabet4.indexOf(c));
            const reslicedBytes = reslice(charIndices, bits, 8, false);
            bytes.set(reslicedBytes, offset);
            return reslicedBytes.length + offset;
        }
    });
var getBaseXResliceDecoder = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes, offset = 0) {
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                rawBytes.length
            ];
            const charIndices = reslice([
                ...bytes
            ], 8, bits, true);
            return [
                charIndices.map((i)=>alphabet4[i]).join(""),
                rawBytes.length
            ];
        }
    });
var getBaseXResliceCodec = (alphabet4, bits)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBaseXResliceEncoder(alphabet4, bits), getBaseXResliceDecoder(alphabet4, bits));
function reslice(input, inputBits, outputBits, useRemainder) {
    const output = [];
    let accumulator = 0;
    let bitsInAccumulator = 0;
    const mask = (1 << outputBits) - 1;
    for (const value of input){
        accumulator = accumulator << inputBits | value;
        bitsInAccumulator += inputBits;
        while(bitsInAccumulator >= outputBits){
            bitsInAccumulator -= outputBits;
            output.push(accumulator >> bitsInAccumulator & mask);
        }
    }
    if (useRemainder && bitsInAccumulator > 0) {
        output.push(accumulator << outputBits - bitsInAccumulator & mask);
    }
    return output;
}
// src/base64.ts
var alphabet3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var getBase64Encoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
            getSizeFromValue: (value)=>Buffer.from(value, "base64").length,
            write (value, bytes, offset) {
                assertValidBaseString(alphabet3, value.replace(/=/g, ""));
                const buffer = Buffer.from(value, "base64");
                bytes.set(buffer, offset);
                return buffer.length + offset;
            }
        });
    }
};
var getBase64Decoder = ()=>{
    {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
            read: (bytes, offset = 0)=>[
                    Buffer.from(bytes, offset).toString("base64"),
                    bytes.length
                ]
        });
    }
};
var getBase64Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBase64Encoder(), getBase64Decoder());
// src/null-characters.ts
var removeNullCharacters = (value)=>// eslint-disable-next-line no-control-regex
    value.replace(/\u0000/g, "");
var padNullCharacters = (value, chars)=>value.padEnd(chars, "\0");
// ../text-encoding-impl/dist/index.node.mjs
var e = globalThis.TextDecoder;
var o = globalThis.TextEncoder;
// src/utf8.ts
var getUtf8Encoder = ()=>{
    let textEncoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>(textEncoder ||= new o()).encode(value).length,
        write: (value, bytes, offset)=>{
            const bytesToAdd = (textEncoder ||= new o()).encode(value);
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getUtf8Decoder = ()=>{
    let textDecoder;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = (textDecoder ||= new e()).decode(bytes.slice(offset));
            return [
                removeNullCharacters(value),
                bytes.length
            ];
        }
    });
};
var getUtf8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getUtf8Encoder(), getUtf8Decoder());
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/assertions/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertDigestCapabilityIsAvailable",
    ()=>assertDigestCapabilityIsAvailable,
    "assertKeyExporterIsAvailable",
    ()=>assertKeyExporterIsAvailable,
    "assertKeyGenerationIsAvailable",
    ()=>assertKeyGenerationIsAvailable,
    "assertPRNGIsAvailable",
    ()=>assertPRNGIsAvailable,
    "assertSigningCapabilityIsAvailable",
    ()=>assertSigningCapabilityIsAvailable,
    "assertVerificationCapabilityIsAvailable",
    ()=>assertVerificationCapabilityIsAvailable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
;
// src/crypto.ts
function assertPRNGIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.getRandomValues !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CRYPTO__RANDOM_VALUES_FUNCTION_UNIMPLEMENTED"]);
    }
}
var cachedEd25519Decision;
async function isEd25519CurveSupported(subtle) {
    if (cachedEd25519Decision === void 0) {
        cachedEd25519Decision = new Promise((resolve)=>{
            subtle.generateKey("Ed25519", /* extractable */ false, [
                "sign",
                "verify"
            ]).then(()=>{
                resolve(cachedEd25519Decision = true);
            }).catch(()=>{
                resolve(cachedEd25519Decision = false);
            });
        });
    }
    if (typeof cachedEd25519Decision === "boolean") {
        return cachedEd25519Decision;
    } else {
        return await cachedEd25519Decision;
    }
}
function assertDigestCapabilityIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.digest !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__DIGEST_UNIMPLEMENTED"]);
    }
}
async function assertKeyGenerationIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.generateKey !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__GENERATE_FUNCTION_UNIMPLEMENTED"]);
    }
    if (!await isEd25519CurveSupported(globalThis.crypto.subtle)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__ED25519_ALGORITHM_UNIMPLEMENTED"]);
    }
}
function assertKeyExporterIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.exportKey !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__EXPORT_FUNCTION_UNIMPLEMENTED"]);
    }
}
function assertSigningCapabilityIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.sign !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__SIGN_FUNCTION_UNIMPLEMENTED"]);
    }
}
function assertVerificationCapabilityIsAvailable() {
    if (typeof globalThis.crypto === "undefined" || typeof globalThis.crypto.subtle?.verify !== "function") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__VERIFY_FUNCTION_UNIMPLEMENTED"]);
    }
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "address",
    ()=>address,
    "assertIsAddress",
    ()=>assertIsAddress,
    "assertIsOffCurveAddress",
    ()=>assertIsOffCurveAddress,
    "assertIsProgramDerivedAddress",
    ()=>assertIsProgramDerivedAddress,
    "createAddressWithSeed",
    ()=>createAddressWithSeed,
    "getAddressCodec",
    ()=>getAddressCodec,
    "getAddressComparator",
    ()=>getAddressComparator,
    "getAddressDecoder",
    ()=>getAddressDecoder,
    "getAddressEncoder",
    ()=>getAddressEncoder,
    "getAddressFromPublicKey",
    ()=>getAddressFromPublicKey,
    "getProgramDerivedAddress",
    ()=>getProgramDerivedAddress,
    "getPublicKeyFromAddress",
    ()=>getPublicKeyFromAddress,
    "isAddress",
    ()=>isAddress,
    "isOffCurveAddress",
    ()=>isOffCurveAddress,
    "isProgramDerivedAddress",
    ()=>isProgramDerivedAddress,
    "offCurveAddress",
    ()=>offCurveAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/assertions/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
// src/address.ts
var memoizedBase58Encoder;
var memoizedBase58Decoder;
function getMemoizedBase58Encoder() {
    if (!memoizedBase58Encoder) memoizedBase58Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Encoder"])();
    return memoizedBase58Encoder;
}
function getMemoizedBase58Decoder() {
    if (!memoizedBase58Decoder) memoizedBase58Decoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Decoder"])();
    return memoizedBase58Decoder;
}
function isAddress(putativeAddress) {
    if (// Lowest address (32 bytes of zeroes)
    putativeAddress.length < 32 || // Highest address (32 bytes of 255)
    putativeAddress.length > 44) {
        return false;
    }
    const base58Encoder = getMemoizedBase58Encoder();
    try {
        return base58Encoder.encode(putativeAddress).byteLength === 32;
    } catch  {
        return false;
    }
}
function assertIsAddress(putativeAddress) {
    if (// Lowest address (32 bytes of zeroes)
    putativeAddress.length < 32 || // Highest address (32 bytes of 255)
    putativeAddress.length > 44) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE"], {
            actualLength: putativeAddress.length
        });
    }
    const base58Encoder = getMemoizedBase58Encoder();
    const bytes = base58Encoder.encode(putativeAddress);
    const numBytes = bytes.byteLength;
    if (numBytes !== 32) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH"], {
            actualLength: numBytes
        });
    }
}
function address(putativeAddress) {
    assertIsAddress(putativeAddress);
    return putativeAddress;
}
function getAddressEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixEncoderSize"])(getMemoizedBase58Encoder(), 32), (putativeAddress)=>address(putativeAddress));
}
function getAddressDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixDecoderSize"])(getMemoizedBase58Decoder(), 32);
}
function getAddressCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getAddressEncoder(), getAddressDecoder());
}
function getAddressComparator() {
    return new Intl.Collator("en", {
        caseFirst: "lower",
        ignorePunctuation: false,
        localeMatcher: "best fit",
        numeric: false,
        sensitivity: "variant",
        usage: "sort"
    }).compare;
}
// src/vendor/noble/ed25519.ts
var D = 37095705934669439343138083508754565189542113879843219016388785533085940283555n;
var P = 57896044618658097711785492504343953926634992332820282019728792003956564819949n;
var RM1 = 19681161376707505956807079304988542015446066515923890162744021073123829784752n;
function mod(a) {
    const r = a % P;
    return r >= 0n ? r : P + r;
}
function pow2(x, power) {
    let r = x;
    while(power-- > 0n){
        r *= r;
        r %= P;
    }
    return r;
}
function pow_2_252_3(x) {
    const x2 = x * x % P;
    const b2 = x2 * x % P;
    const b4 = pow2(b2, 2n) * b2 % P;
    const b5 = pow2(b4, 1n) * x % P;
    const b10 = pow2(b5, 5n) * b5 % P;
    const b20 = pow2(b10, 10n) * b10 % P;
    const b40 = pow2(b20, 20n) * b20 % P;
    const b80 = pow2(b40, 40n) * b40 % P;
    const b160 = pow2(b80, 80n) * b80 % P;
    const b240 = pow2(b160, 80n) * b80 % P;
    const b250 = pow2(b240, 10n) * b10 % P;
    const pow_p_5_8 = pow2(b250, 2n) * x % P;
    return pow_p_5_8;
}
function uvRatio(u, v) {
    const v3 = mod(v * v * v);
    const v7 = mod(v3 * v3 * v);
    const pow = pow_2_252_3(u * v7);
    let x = mod(u * v3 * pow);
    const vx2 = mod(v * x * x);
    const root1 = x;
    const root2 = mod(x * RM1);
    const useRoot1 = vx2 === u;
    const useRoot2 = vx2 === mod(-u);
    const noRoot = vx2 === mod(-u * RM1);
    if (useRoot1) x = root1;
    if (useRoot2 || noRoot) x = root2;
    if ((mod(x) & 1n) === 1n) x = mod(-x);
    if (!useRoot1 && !useRoot2) {
        return null;
    }
    return x;
}
function pointIsOnCurve(y, lastByte) {
    const y2 = mod(y * y);
    const u = mod(y2 - 1n);
    const v = mod(D * y2 + 1n);
    const x = uvRatio(u, v);
    if (x === null) {
        return false;
    }
    const isLastByteOdd = (lastByte & 128) !== 0;
    if (x === 0n && isLastByteOdd) {
        return false;
    }
    return true;
}
// src/curve-internal.ts
function byteToHex(byte) {
    const hexString = byte.toString(16);
    if (hexString.length === 1) {
        return `0${hexString}`;
    } else {
        return hexString;
    }
}
function decompressPointBytes(bytes) {
    const hexString = bytes.reduce((acc, byte, ii)=>`${byteToHex(ii === 31 ? byte & -129 : byte)}${acc}`, "");
    const integerLiteralString = `0x${hexString}`;
    return BigInt(integerLiteralString);
}
function compressedPointBytesAreOnCurve(bytes) {
    if (bytes.byteLength !== 32) {
        return false;
    }
    const y = decompressPointBytes(bytes);
    return pointIsOnCurve(y, bytes[31]);
}
// src/curve.ts
function isOffCurveAddress(putativeOffCurveAddress) {
    const addressBytes = getAddressCodec().encode(putativeOffCurveAddress);
    return compressedPointBytesAreOnCurve(addressBytes) === false;
}
function assertIsOffCurveAddress(putativeOffCurveAddress) {
    if (!isOffCurveAddress(putativeOffCurveAddress)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_OFF_CURVE_ADDRESS"]);
    }
}
function offCurveAddress(putativeOffCurveAddress) {
    assertIsOffCurveAddress(putativeOffCurveAddress);
    return putativeOffCurveAddress;
}
function isProgramDerivedAddress(value) {
    return Array.isArray(value) && value.length === 2 && typeof value[0] === "string" && typeof value[1] === "number" && value[1] >= 0 && value[1] <= 255 && isAddress(value[0]);
}
function assertIsProgramDerivedAddress(value) {
    const validFormat = Array.isArray(value) && value.length === 2 && typeof value[0] === "string" && typeof value[1] === "number";
    if (!validFormat) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__MALFORMED_PDA"]);
    }
    if (value[1] < 0 || value[1] > 255) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__PDA_BUMP_SEED_OUT_OF_RANGE"], {
            bump: value[1]
        });
    }
    assertIsAddress(value[0]);
}
var MAX_SEED_LENGTH = 32;
var MAX_SEEDS = 16;
var PDA_MARKER_BYTES = [
    // The string 'ProgramDerivedAddress'
    80,
    114,
    111,
    103,
    114,
    97,
    109,
    68,
    101,
    114,
    105,
    118,
    101,
    100,
    65,
    100,
    100,
    114,
    101,
    115,
    115
];
async function createProgramDerivedAddress({ programAddress, seeds }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertDigestCapabilityIsAvailable"])();
    if (seeds.length > MAX_SEEDS) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED"], {
            actual: seeds.length,
            maxSeeds: MAX_SEEDS
        });
    }
    let textEncoder;
    const seedBytes = seeds.reduce((acc, seed, ii)=>{
        const bytes = typeof seed === "string" ? (textEncoder ||= new TextEncoder()).encode(seed) : seed;
        if (bytes.byteLength > MAX_SEED_LENGTH) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED"], {
                actual: bytes.byteLength,
                index: ii,
                maxSeedLength: MAX_SEED_LENGTH
            });
        }
        acc.push(...bytes);
        return acc;
    }, []);
    const base58EncodedAddressCodec = getAddressCodec();
    const programAddressBytes = base58EncodedAddressCodec.encode(programAddress);
    const addressBytesBuffer = await crypto.subtle.digest("SHA-256", new Uint8Array([
        ...seedBytes,
        ...programAddressBytes,
        ...PDA_MARKER_BYTES
    ]));
    const addressBytes = new Uint8Array(addressBytesBuffer);
    if (compressedPointBytesAreOnCurve(addressBytes)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE"]);
    }
    return base58EncodedAddressCodec.decode(addressBytes);
}
async function getProgramDerivedAddress({ programAddress, seeds }) {
    let bumpSeed = 255;
    while(bumpSeed > 0){
        try {
            const address2 = await createProgramDerivedAddress({
                programAddress,
                seeds: [
                    ...seeds,
                    new Uint8Array([
                        bumpSeed
                    ])
                ]
            });
            return [
                address2,
                bumpSeed
            ];
        } catch (e) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolanaError"])(e, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_SEEDS_POINT_ON_CURVE"])) {
                bumpSeed--;
            } else {
                throw e;
            }
        }
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED"]);
}
async function createAddressWithSeed({ baseAddress, programAddress, seed }) {
    const { encode, decode } = getAddressCodec();
    const seedBytes = typeof seed === "string" ? new TextEncoder().encode(seed) : seed;
    if (seedBytes.byteLength > MAX_SEED_LENGTH) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__MAX_PDA_SEED_LENGTH_EXCEEDED"], {
            actual: seedBytes.byteLength,
            index: 0,
            maxSeedLength: MAX_SEED_LENGTH
        });
    }
    const programAddressBytes = encode(programAddress);
    if (programAddressBytes.length >= PDA_MARKER_BYTES.length && programAddressBytes.slice(-PDA_MARKER_BYTES.length).every((byte, index)=>byte === PDA_MARKER_BYTES[index])) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__PDA_ENDS_WITH_PDA_MARKER"]);
    }
    const addressBytesBuffer = await crypto.subtle.digest("SHA-256", new Uint8Array([
        ...encode(baseAddress),
        ...seedBytes,
        ...programAddressBytes
    ]));
    const addressBytes = new Uint8Array(addressBytesBuffer);
    return decode(addressBytes);
}
async function getAddressFromPublicKey(publicKey) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertKeyExporterIsAvailable"])();
    if (publicKey.type !== "public" || publicKey.algorithm.name !== "Ed25519") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_ED25519_PUBLIC_KEY"]);
    }
    const publicKeyBytes = await crypto.subtle.exportKey("raw", publicKey);
    return getAddressDecoder().decode(new Uint8Array(publicKeyBytes));
}
async function getPublicKeyFromAddress(address2) {
    const addressBytes = getAddressEncoder().encode(address2);
    return await crypto.subtle.importKey("raw", addressBytes, {
        name: "Ed25519"
    }, true, [
        "verify"
    ]);
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Endian",
    ()=>Endian,
    "assertNumberIsBetweenForCodec",
    ()=>assertNumberIsBetweenForCodec,
    "getF32Codec",
    ()=>getF32Codec,
    "getF32Decoder",
    ()=>getF32Decoder,
    "getF32Encoder",
    ()=>getF32Encoder,
    "getF64Codec",
    ()=>getF64Codec,
    "getF64Decoder",
    ()=>getF64Decoder,
    "getF64Encoder",
    ()=>getF64Encoder,
    "getI128Codec",
    ()=>getI128Codec,
    "getI128Decoder",
    ()=>getI128Decoder,
    "getI128Encoder",
    ()=>getI128Encoder,
    "getI16Codec",
    ()=>getI16Codec,
    "getI16Decoder",
    ()=>getI16Decoder,
    "getI16Encoder",
    ()=>getI16Encoder,
    "getI32Codec",
    ()=>getI32Codec,
    "getI32Decoder",
    ()=>getI32Decoder,
    "getI32Encoder",
    ()=>getI32Encoder,
    "getI64Codec",
    ()=>getI64Codec,
    "getI64Decoder",
    ()=>getI64Decoder,
    "getI64Encoder",
    ()=>getI64Encoder,
    "getI8Codec",
    ()=>getI8Codec,
    "getI8Decoder",
    ()=>getI8Decoder,
    "getI8Encoder",
    ()=>getI8Encoder,
    "getShortU16Codec",
    ()=>getShortU16Codec,
    "getShortU16Decoder",
    ()=>getShortU16Decoder,
    "getShortU16Encoder",
    ()=>getShortU16Encoder,
    "getU128Codec",
    ()=>getU128Codec,
    "getU128Decoder",
    ()=>getU128Decoder,
    "getU128Encoder",
    ()=>getU128Encoder,
    "getU16Codec",
    ()=>getU16Codec,
    "getU16Decoder",
    ()=>getU16Decoder,
    "getU16Encoder",
    ()=>getU16Encoder,
    "getU32Codec",
    ()=>getU32Codec,
    "getU32Decoder",
    ()=>getU32Decoder,
    "getU32Encoder",
    ()=>getU32Encoder,
    "getU64Codec",
    ()=>getU64Codec,
    "getU64Decoder",
    ()=>getU64Decoder,
    "getU64Encoder",
    ()=>getU64Encoder,
    "getU8Codec",
    ()=>getU8Codec,
    "getU8Decoder",
    ()=>getU8Decoder,
    "getU8Encoder",
    ()=>getU8Encoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/assertions.ts
function assertNumberIsBetweenForCodec(codecDescription, min, max, value) {
    if (value < min || value > max) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__NUMBER_OUT_OF_RANGE"], {
            codecDescription,
            max,
            min,
            value
        });
    }
}
// src/common.ts
var Endian = /* @__PURE__ */ ((Endian2)=>{
    Endian2[Endian2["Little"] = 0] = "Little";
    Endian2[Endian2["Big"] = 1] = "Big";
    return Endian2;
})(Endian || {});
function isLittleEndian(config) {
    return config?.endian === 1 /* Big */  ? false : true;
}
function numberEncoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: input.size,
        write (value, bytes, offset) {
            if (input.range) {
                assertNumberIsBetweenForCodec(input.name, input.range[0], input.range[1], value);
            }
            const arrayBuffer = new ArrayBuffer(input.size);
            input.set(new DataView(arrayBuffer), value, isLittleEndian(input.config));
            bytes.set(new Uint8Array(arrayBuffer), offset);
            return offset + input.size;
        }
    });
}
function numberDecoderFactory(input) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: input.size,
        read (bytes, offset = 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayIsNotEmptyForCodec"])(input.name, bytes, offset);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])(input.name, input.size, bytes, offset);
            const view = new DataView(toArrayBuffer(bytes, offset, input.size));
            return [
                input.get(view, isLittleEndian(input.config)),
                offset + input.size
            ];
        }
    });
}
function toArrayBuffer(bytes, offset, length) {
    const bytesOffset = bytes.byteOffset + (offset ?? 0);
    const bytesLength = length ?? bytes.byteLength;
    return bytes.buffer.slice(bytesOffset, bytesOffset + bytesLength);
}
// src/f32.ts
var getF32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f32",
        set: (view, value, le)=>view.setFloat32(0, Number(value), le),
        size: 4
    });
var getF32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat32(0, le),
        name: "f32",
        size: 4
    });
var getF32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF32Encoder(config), getF32Decoder(config));
var getF64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "f64",
        set: (view, value, le)=>view.setFloat64(0, Number(value), le),
        size: 8
    });
var getF64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getFloat64(0, le),
        name: "f64",
        size: 8
    });
var getF64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getF64Encoder(config), getF64Decoder(config));
var getI128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i128",
        range: [
            -BigInt("0x7fffffffffffffffffffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigInt64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getI128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigInt64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "i128",
        size: 16
    });
var getI128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI128Encoder(config), getI128Decoder(config));
var getI16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i16",
        range: [
            -Number("0x7fff") - 1,
            Number("0x7fff")
        ],
        set: (view, value, le)=>view.setInt16(0, Number(value), le),
        size: 2
    });
var getI16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt16(0, le),
        name: "i16",
        size: 2
    });
var getI16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI16Encoder(config), getI16Decoder(config));
var getI32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i32",
        range: [
            -Number("0x7fffffff") - 1,
            Number("0x7fffffff")
        ],
        set: (view, value, le)=>view.setInt32(0, Number(value), le),
        size: 4
    });
var getI32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getInt32(0, le),
        name: "i32",
        size: 4
    });
var getI32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI32Encoder(config), getI32Decoder(config));
var getI64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "i64",
        range: [
            -BigInt("0x7fffffffffffffff") - 1n,
            BigInt("0x7fffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigInt64(0, BigInt(value), le),
        size: 8
    });
var getI64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigInt64(0, le),
        name: "i64",
        size: 8
    });
var getI64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI64Encoder(config), getI64Decoder(config));
var getI8Encoder = ()=>numberEncoderFactory({
        name: "i8",
        range: [
            -Number("0x7f") - 1,
            Number("0x7f")
        ],
        set: (view, value)=>view.setInt8(0, Number(value)),
        size: 1
    });
var getI8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getInt8(0),
        name: "i8",
        size: 1
    });
var getI8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getI8Encoder(), getI8Decoder());
var getShortU16Encoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            if (value <= 127) return 1;
            if (value <= 16383) return 2;
            return 3;
        },
        maxSize: 3,
        write: (value, bytes, offset)=>{
            assertNumberIsBetweenForCodec("shortU16", 0, 65535, value);
            const shortU16Bytes = [
                0
            ];
            for(let ii = 0;; ii += 1){
                const alignedValue = Number(value) >> ii * 7;
                if (alignedValue === 0) {
                    break;
                }
                const nextSevenBits = 127 & alignedValue;
                shortU16Bytes[ii] = nextSevenBits;
                if (ii > 0) {
                    shortU16Bytes[ii - 1] |= 128;
                }
            }
            bytes.set(shortU16Bytes, offset);
            return offset + shortU16Bytes.length;
        }
    });
var getShortU16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        maxSize: 3,
        read: (bytes, offset)=>{
            let value = 0;
            let byteCount = 0;
            while(++byteCount){
                const byteIndex = byteCount - 1;
                const currentByte = bytes[offset + byteIndex];
                const nextSevenBits = 127 & currentByte;
                value |= nextSevenBits << byteIndex * 7;
                if ((currentByte & 128) === 0) {
                    break;
                }
            }
            return [
                value,
                offset + byteCount
            ];
        }
    });
var getShortU16Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getShortU16Encoder(), getShortU16Decoder());
var getU128Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u128",
        range: [
            0n,
            BigInt("0xffffffffffffffffffffffffffffffff")
        ],
        set: (view, value, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const rightMask = 0xffffffffffffffffn;
            view.setBigUint64(leftOffset, BigInt(value) >> 64n, le);
            view.setBigUint64(rightOffset, BigInt(value) & rightMask, le);
        },
        size: 16
    });
var getU128Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>{
            const leftOffset = le ? 8 : 0;
            const rightOffset = le ? 0 : 8;
            const left = view.getBigUint64(leftOffset, le);
            const right = view.getBigUint64(rightOffset, le);
            return (left << 64n) + right;
        },
        name: "u128",
        size: 16
    });
var getU128Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU128Encoder(config), getU128Decoder(config));
var getU16Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u16",
        range: [
            0,
            Number("0xffff")
        ],
        set: (view, value, le)=>view.setUint16(0, Number(value), le),
        size: 2
    });
var getU16Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint16(0, le),
        name: "u16",
        size: 2
    });
var getU16Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU16Encoder(config), getU16Decoder(config));
var getU32Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u32",
        range: [
            0,
            Number("0xffffffff")
        ],
        set: (view, value, le)=>view.setUint32(0, Number(value), le),
        size: 4
    });
var getU32Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getUint32(0, le),
        name: "u32",
        size: 4
    });
var getU32Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU32Encoder(config), getU32Decoder(config));
var getU64Encoder = (config = {})=>numberEncoderFactory({
        config,
        name: "u64",
        range: [
            0n,
            BigInt("0xffffffffffffffff")
        ],
        set: (view, value, le)=>view.setBigUint64(0, BigInt(value), le),
        size: 8
    });
var getU64Decoder = (config = {})=>numberDecoderFactory({
        config,
        get: (view, le)=>view.getBigUint64(0, le),
        name: "u64",
        size: 8
    });
var getU64Codec = (config = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU64Encoder(config), getU64Decoder(config));
var getU8Encoder = ()=>numberEncoderFactory({
        name: "u8",
        range: [
            0,
            Number("0xff")
        ],
        set: (view, value)=>view.setUint8(0, Number(value)),
        size: 1
    });
var getU8Decoder = ()=>numberDecoderFactory({
        get: (view)=>view.getUint8(0),
        name: "u8",
        size: 1
    });
var getU8Codec = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getU8Encoder(), getU8Decoder());
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/codecs-data-structures/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertValidNumberOfItemsForCodec",
    ()=>assertValidNumberOfItemsForCodec,
    "getArrayCodec",
    ()=>getArrayCodec,
    "getArrayDecoder",
    ()=>getArrayDecoder,
    "getArrayEncoder",
    ()=>getArrayEncoder,
    "getBitArrayCodec",
    ()=>getBitArrayCodec,
    "getBitArrayDecoder",
    ()=>getBitArrayDecoder,
    "getBitArrayEncoder",
    ()=>getBitArrayEncoder,
    "getBooleanCodec",
    ()=>getBooleanCodec,
    "getBooleanDecoder",
    ()=>getBooleanDecoder,
    "getBooleanEncoder",
    ()=>getBooleanEncoder,
    "getBytesCodec",
    ()=>getBytesCodec,
    "getBytesDecoder",
    ()=>getBytesDecoder,
    "getBytesEncoder",
    ()=>getBytesEncoder,
    "getConstantCodec",
    ()=>getConstantCodec,
    "getConstantDecoder",
    ()=>getConstantDecoder,
    "getConstantEncoder",
    ()=>getConstantEncoder,
    "getDiscriminatedUnionCodec",
    ()=>getDiscriminatedUnionCodec,
    "getDiscriminatedUnionDecoder",
    ()=>getDiscriminatedUnionDecoder,
    "getDiscriminatedUnionEncoder",
    ()=>getDiscriminatedUnionEncoder,
    "getEnumCodec",
    ()=>getEnumCodec,
    "getEnumDecoder",
    ()=>getEnumDecoder,
    "getEnumEncoder",
    ()=>getEnumEncoder,
    "getHiddenPrefixCodec",
    ()=>getHiddenPrefixCodec,
    "getHiddenPrefixDecoder",
    ()=>getHiddenPrefixDecoder,
    "getHiddenPrefixEncoder",
    ()=>getHiddenPrefixEncoder,
    "getHiddenSuffixCodec",
    ()=>getHiddenSuffixCodec,
    "getHiddenSuffixDecoder",
    ()=>getHiddenSuffixDecoder,
    "getHiddenSuffixEncoder",
    ()=>getHiddenSuffixEncoder,
    "getLiteralUnionCodec",
    ()=>getLiteralUnionCodec,
    "getLiteralUnionDecoder",
    ()=>getLiteralUnionDecoder,
    "getLiteralUnionEncoder",
    ()=>getLiteralUnionEncoder,
    "getMapCodec",
    ()=>getMapCodec,
    "getMapDecoder",
    ()=>getMapDecoder,
    "getMapEncoder",
    ()=>getMapEncoder,
    "getNullableCodec",
    ()=>getNullableCodec,
    "getNullableDecoder",
    ()=>getNullableDecoder,
    "getNullableEncoder",
    ()=>getNullableEncoder,
    "getSetCodec",
    ()=>getSetCodec,
    "getSetDecoder",
    ()=>getSetDecoder,
    "getSetEncoder",
    ()=>getSetEncoder,
    "getStructCodec",
    ()=>getStructCodec,
    "getStructDecoder",
    ()=>getStructDecoder,
    "getStructEncoder",
    ()=>getStructEncoder,
    "getTupleCodec",
    ()=>getTupleCodec,
    "getTupleDecoder",
    ()=>getTupleDecoder,
    "getTupleEncoder",
    ()=>getTupleEncoder,
    "getUnionCodec",
    ()=>getUnionCodec,
    "getUnionDecoder",
    ()=>getUnionDecoder,
    "getUnionEncoder",
    ()=>getUnionEncoder,
    "getUnitCodec",
    ()=>getUnitCodec,
    "getUnitDecoder",
    ()=>getUnitDecoder,
    "getUnitEncoder",
    ()=>getUnitEncoder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
// src/array.ts
function assertValidNumberOfItemsForCodec(codecDescription, expected, actual) {
    if (expected !== actual) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_NUMBER_OF_ITEMS"], {
            actual,
            codecDescription,
            expected
        });
    }
}
function maxCodecSizes(sizes) {
    return sizes.reduce((all, size)=>all === null || size === null ? null : Math.max(all, size), 0);
}
function sumCodecSizes(sizes) {
    return sizes.reduce((all, size)=>all === null || size === null ? null : all + size, 0);
}
function getFixedSize(codec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFixedSize"])(codec) ? codec.fixedSize : null;
}
function getMaxSize(codec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFixedSize"])(codec) ? codec.fixedSize : codec.maxSize ?? null;
}
// src/array.ts
function getArrayEncoder(item, config = {}) {
    const size = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])();
    const fixedSize = computeArrayLikeCodecSize(size, getFixedSize(item));
    const maxSize = computeArrayLikeCodecSize(size, getMaxSize(item)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize !== null ? {
            fixedSize
        } : {
            getSizeFromValue: (array)=>{
                const prefixSize = typeof size === "object" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(array.length, size) : 0;
                return prefixSize + [
                    ...array
                ].reduce((all, value)=>all + (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(value, item), 0);
            },
            maxSize
        },
        write: (array, bytes, offset)=>{
            if (typeof size === "number") {
                assertValidNumberOfItemsForCodec("array", size, array.length);
            }
            if (typeof size === "object") {
                offset = size.write(array.length, bytes, offset);
            }
            array.forEach((value)=>{
                offset = item.write(value, bytes, offset);
            });
            return offset;
        }
    });
}
function getArrayDecoder(item, config = {}) {
    const size = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])();
    const itemSize = getFixedSize(item);
    const fixedSize = computeArrayLikeCodecSize(size, itemSize);
    const maxSize = computeArrayLikeCodecSize(size, getMaxSize(item)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize !== null ? {
            fixedSize
        } : {
            maxSize
        },
        read: (bytes, offset)=>{
            const array = [];
            if (typeof size === "object" && bytes.slice(offset).length === 0) {
                return [
                    array,
                    offset
                ];
            }
            if (size === "remainder") {
                while(offset < bytes.length){
                    const [value, newOffset2] = item.read(bytes, offset);
                    offset = newOffset2;
                    array.push(value);
                }
                return [
                    array,
                    offset
                ];
            }
            const [resolvedSize, newOffset] = typeof size === "number" ? [
                size,
                offset
            ] : size.read(bytes, offset);
            offset = newOffset;
            for(let i = 0; i < resolvedSize; i += 1){
                const [value, newOffset2] = item.read(bytes, offset);
                offset = newOffset2;
                array.push(value);
            }
            return [
                array,
                offset
            ];
        }
    });
}
function getArrayCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getArrayEncoder(item, config), getArrayDecoder(item, config));
}
function computeArrayLikeCodecSize(size, itemSize) {
    if (typeof size !== "number") return null;
    if (size === 0) return 0;
    return itemSize === null ? null : itemSize * size;
}
function getBitArrayEncoder(size, config = {}) {
    const parsedConfig = typeof config === "boolean" ? {
        backward: config
    } : config;
    const backward = parsedConfig.backward ?? false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: size,
        write (value, bytes, offset) {
            const bytesToAdd = [];
            for(let i = 0; i < size; i += 1){
                let byte = 0;
                for(let j = 0; j < 8; j += 1){
                    const feature = Number(value[i * 8 + j] ?? 0);
                    byte |= feature << (backward ? j : 7 - j);
                }
                if (backward) {
                    bytesToAdd.unshift(byte);
                } else {
                    bytesToAdd.push(byte);
                }
            }
            bytes.set(bytesToAdd, offset);
            return size;
        }
    });
}
function getBitArrayDecoder(size, config = {}) {
    const parsedConfig = typeof config === "boolean" ? {
        backward: config
    } : config;
    const backward = parsedConfig.backward ?? false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: size,
        read (bytes, offset) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertByteArrayHasEnoughBytesForCodec"])("bitArray", size, bytes, offset);
            const booleans = [];
            let slice = bytes.slice(offset, offset + size);
            slice = backward ? slice.reverse() : slice;
            slice.forEach((byte)=>{
                for(let i = 0; i < 8; i += 1){
                    if (backward) {
                        booleans.push(Boolean(byte & 1));
                        byte >>= 1;
                    } else {
                        booleans.push(Boolean(byte & 128));
                        byte <<= 1;
                    }
                }
            });
            return [
                booleans,
                offset + size
            ];
        }
    });
}
function getBitArrayCodec(size, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBitArrayEncoder(size, config), getBitArrayDecoder(size, config));
}
function getBooleanEncoder(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])(), (value)=>value ? 1 : 0);
}
function getBooleanDecoder(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])(), (value)=>Number(value) === 1);
}
function getBooleanCodec(config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBooleanEncoder(config), getBooleanDecoder(config));
}
function getBytesEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>value.length,
        write: (value, bytes, offset)=>{
            bytes.set(value, offset);
            return offset + value.length;
        }
    });
}
function getBytesDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        read: (bytes, offset)=>{
            const slice = bytes.slice(offset);
            return [
                slice,
                offset + slice.length
            ];
        }
    });
}
function getBytesCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBytesEncoder(), getBytesDecoder());
}
var getBase16Decoder = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (bytes, offset) {
            const value = bytes.slice(offset).reduce((str, byte)=>str + byte.toString(16).padStart(2, "0"), "");
            return [
                value,
                bytes.length
            ];
        }
    });
function getConstantEncoder(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: constant.length,
        write: (_, bytes, offset)=>{
            bytes.set(constant, offset);
            return offset + constant.length;
        }
    });
}
function getConstantDecoder(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: constant.length,
        read: (bytes, offset)=>{
            const base16 = getBase16Decoder();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(bytes, constant, offset)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_CONSTANT"], {
                    constant,
                    data: bytes,
                    hexConstant: base16.decode(constant),
                    hexData: base16.decode(bytes),
                    offset
                });
            }
            return [
                void 0,
                offset + constant.length
            ];
        }
    });
}
function getConstantCodec(constant) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getConstantEncoder(constant), getConstantDecoder(constant));
}
function getTupleEncoder(items) {
    const fixedSize = sumCodecSizes(items.map(getFixedSize));
    const maxSize = sumCodecSizes(items.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize === null ? {
            getSizeFromValue: (value)=>items.map((item, index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(value[index], item)).reduce((all, one)=>all + one, 0),
            maxSize
        } : {
            fixedSize
        },
        write: (value, bytes, offset)=>{
            assertValidNumberOfItemsForCodec("tuple", items.length, value.length);
            items.forEach((item, index)=>{
                offset = item.write(value[index], bytes, offset);
            });
            return offset;
        }
    });
}
function getTupleDecoder(items) {
    const fixedSize = sumCodecSizes(items.map(getFixedSize));
    const maxSize = sumCodecSizes(items.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize === null ? {
            maxSize
        } : {
            fixedSize
        },
        read: (bytes, offset)=>{
            const values = [];
            items.forEach((item)=>{
                const [newValue, newOffset] = item.read(bytes, offset);
                values.push(newValue);
                offset = newOffset;
            });
            return [
                values,
                offset
            ];
        }
    });
}
function getTupleCodec(items) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getTupleEncoder(items), getTupleDecoder(items));
}
function getUnionEncoder(variants, getIndexFromValue) {
    const fixedSize = getUnionFixedSize(variants);
    const write = (variant, bytes, offset)=>{
        const index = getIndexFromValue(variant);
        assertValidVariantIndex(variants, index);
        return variants[index].write(variant, bytes, offset);
    };
    if (fixedSize !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
            fixedSize,
            write
        });
    }
    const maxSize = getUnionMaxSize(variants);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...maxSize !== null ? {
            maxSize
        } : {},
        getSizeFromValue: (variant)=>{
            const index = getIndexFromValue(variant);
            assertValidVariantIndex(variants, index);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(variant, variants[index]);
        },
        write
    });
}
function getUnionDecoder(variants, getIndexFromBytes) {
    const fixedSize = getUnionFixedSize(variants);
    const read = (bytes, offset)=>{
        const index = getIndexFromBytes(bytes, offset);
        assertValidVariantIndex(variants, index);
        return variants[index].read(bytes, offset);
    };
    if (fixedSize !== null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
            fixedSize,
            read
        });
    }
    const maxSize = getUnionMaxSize(variants);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...maxSize !== null ? {
            maxSize
        } : {},
        read
    });
}
function getUnionCodec(variants, getIndexFromValue, getIndexFromBytes) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getUnionEncoder(variants, getIndexFromValue), getUnionDecoder(variants, getIndexFromBytes));
}
function assertValidVariantIndex(variants, index) {
    if (typeof variants[index] === "undefined") {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__UNION_VARIANT_OUT_OF_RANGE"], {
            maxRange: variants.length - 1,
            minRange: 0,
            variant: index
        });
    }
}
function getUnionFixedSize(variants) {
    if (variants.length === 0) return 0;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFixedSize"])(variants[0])) return null;
    const variantSize = variants[0].fixedSize;
    const sameSizedVariants = variants.every((variant)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFixedSize"])(variant) && variant.fixedSize === variantSize);
    return sameSizedVariants ? variantSize : null;
}
function getUnionMaxSize(variants) {
    return maxCodecSizes(variants.map((variant)=>getMaxSize(variant)));
}
// src/discriminated-union.ts
function getDiscriminatedUnionEncoder(variants, config = {}) {
    const discriminatorProperty = config.discriminator ?? "__kind";
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    return getUnionEncoder(variants.map(([, variant], index)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            variant
        ]), (value)=>[
                index,
                value
            ])), (value)=>getVariantDiscriminator(variants, value[discriminatorProperty]));
}
function getDiscriminatedUnionDecoder(variants, config = {}) {
    const discriminatorProperty = config.discriminator ?? "__kind";
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    return getUnionDecoder(variants.map(([discriminator, variant])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            variant
        ]), ([, value])=>({
                [discriminatorProperty]: discriminator,
                ...value
            }))), (bytes, offset)=>Number(prefix.read(bytes, offset)[0]));
}
function getDiscriminatedUnionCodec(variants, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getDiscriminatedUnionEncoder(variants, config), getDiscriminatedUnionDecoder(variants, config));
}
function getVariantDiscriminator(variants, discriminatorValue) {
    const discriminator = variants.findIndex(([key])=>discriminatorValue === key);
    if (discriminator < 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_DISCRIMINATED_UNION_VARIANT"], {
            value: discriminatorValue,
            variants: variants.map(([key])=>key)
        });
    }
    return discriminator;
}
// src/enum-helpers.ts
function getEnumStats(constructor) {
    const numericalValues = [
        ...new Set(Object.values(constructor).filter((v)=>typeof v === "number"))
    ].sort();
    const enumRecord = Object.fromEntries(Object.entries(constructor).slice(numericalValues.length));
    const enumKeys = Object.keys(enumRecord);
    const enumValues = Object.values(enumRecord);
    const stringValues = [
        .../* @__PURE__ */ new Set([
            ...enumKeys,
            ...enumValues.filter((v)=>typeof v === "string")
        ])
    ];
    return {
        enumKeys,
        enumRecord,
        enumValues,
        numericalValues,
        stringValues
    };
}
function getEnumIndexFromVariant({ enumKeys, enumValues, variant }) {
    const valueIndex = findLastIndex(enumValues, (value)=>value === variant);
    if (valueIndex >= 0) return valueIndex;
    return enumKeys.findIndex((key)=>key === variant);
}
function getEnumIndexFromDiscriminator({ discriminator, enumKeys, enumValues, useValuesAsDiscriminators }) {
    if (!useValuesAsDiscriminators) {
        return discriminator >= 0 && discriminator < enumKeys.length ? discriminator : -1;
    }
    return findLastIndex(enumValues, (value)=>value === discriminator);
}
function findLastIndex(array, predicate) {
    let l = array.length;
    while(l--){
        if (predicate(array[l], l, array)) return l;
    }
    return -1;
}
function formatNumericalValues(values) {
    if (values.length === 0) return "";
    let range = [
        values[0],
        values[0]
    ];
    const ranges = [];
    for(let index = 1; index < values.length; index++){
        const value = values[index];
        if (range[1] + 1 === value) {
            range[1] = value;
        } else {
            ranges.push(range[0] === range[1] ? `${range[0]}` : `${range[0]}-${range[1]}`);
            range = [
                value,
                value
            ];
        }
    }
    ranges.push(range[0] === range[1] ? `${range[0]}` : `${range[0]}-${range[1]}`);
    return ranges.join(", ");
}
// src/enum.ts
function getEnumEncoder(constructor, config = {}) {
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    const useValuesAsDiscriminators = config.useValuesAsDiscriminators ?? false;
    const { enumKeys, enumValues, numericalValues, stringValues } = getEnumStats(constructor);
    if (useValuesAsDiscriminators && enumValues.some((value)=>typeof value === "string")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS"], {
            stringValues: enumValues.filter((v)=>typeof v === "string")
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(prefix, (variant)=>{
        const index = getEnumIndexFromVariant({
            enumKeys,
            enumValues,
            variant
        });
        if (index < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_ENUM_VARIANT"], {
                formattedNumericalValues: formatNumericalValues(numericalValues),
                numericalValues,
                stringValues,
                variant
            });
        }
        return useValuesAsDiscriminators ? enumValues[index] : index;
    });
}
function getEnumDecoder(constructor, config = {}) {
    const prefix = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    const useValuesAsDiscriminators = config.useValuesAsDiscriminators ?? false;
    const { enumKeys, enumValues, numericalValues } = getEnumStats(constructor);
    if (useValuesAsDiscriminators && enumValues.some((value)=>typeof value === "string")) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__CANNOT_USE_LEXICAL_VALUES_AS_ENUM_DISCRIMINATORS"], {
            stringValues: enumValues.filter((v)=>typeof v === "string")
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(prefix, (value)=>{
        const discriminator = Number(value);
        const index = getEnumIndexFromDiscriminator({
            discriminator,
            enumKeys,
            enumValues,
            useValuesAsDiscriminators
        });
        if (index < 0) {
            const validDiscriminators = useValuesAsDiscriminators ? numericalValues : [
                ...Array(enumKeys.length).keys()
            ];
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__ENUM_DISCRIMINATOR_OUT_OF_RANGE"], {
                discriminator,
                formattedValidDiscriminators: formatNumericalValues(validDiscriminators),
                validDiscriminators
            });
        }
        return enumValues[index];
    });
}
function getEnumCodec(constructor, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getEnumEncoder(constructor, config), getEnumDecoder(constructor, config));
}
function getHiddenPrefixEncoder(encoder, prefixedEncoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
        ...prefixedEncoders,
        encoder
    ]), (value)=>[
            ...prefixedEncoders.map(()=>void 0),
            value
        ]);
}
function getHiddenPrefixDecoder(decoder, prefixedDecoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
        ...prefixedDecoders,
        decoder
    ]), (tuple)=>tuple[tuple.length - 1]);
}
function getHiddenPrefixCodec(codec, prefixedCodecs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getHiddenPrefixEncoder(codec, prefixedCodecs), getHiddenPrefixDecoder(codec, prefixedCodecs));
}
function getHiddenSuffixEncoder(encoder, suffixedEncoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
        encoder,
        ...suffixedEncoders
    ]), (value)=>[
            value,
            ...suffixedEncoders.map(()=>void 0)
        ]);
}
function getHiddenSuffixDecoder(decoder, suffixedDecoders) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
        decoder,
        ...suffixedDecoders
    ]), (tuple)=>tuple[0]);
}
function getHiddenSuffixCodec(codec, suffixedCodecs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getHiddenSuffixEncoder(codec, suffixedCodecs), getHiddenSuffixDecoder(codec, suffixedCodecs));
}
function getLiteralUnionEncoder(variants, config = {}) {
    const discriminator = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(discriminator, (variant)=>{
        const index = variants.indexOf(variant);
        if (index < 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_LITERAL_UNION_VARIANT"], {
                value: variant,
                variants
            });
        }
        return index;
    });
}
function getLiteralUnionDecoder(variants, config = {}) {
    const discriminator = config.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(discriminator, (index)=>{
        if (index < 0 || index >= variants.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__LITERAL_UNION_DISCRIMINATOR_OUT_OF_RANGE"], {
                discriminator: index,
                maxRange: variants.length - 1,
                minRange: 0
            });
        }
        return variants[Number(index)];
    });
}
function getLiteralUnionCodec(variants, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getLiteralUnionEncoder(variants, config), getLiteralUnionDecoder(variants, config));
}
function getMapEncoder(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getArrayEncoder(getTupleEncoder([
        key,
        value
    ]), config), (map)=>[
            ...map.entries()
        ]);
}
function getMapDecoder(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getArrayDecoder(getTupleDecoder([
        key,
        value
    ]), config), (entries)=>new Map(entries));
}
function getMapCodec(key, value, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getMapEncoder(key, value, config), getMapDecoder(key, value, config));
}
function getUnitEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: 0,
        write: (_value, _bytes, offset)=>offset
    });
}
function getUnitDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        fixedSize: 0,
        read: (_bytes, offset)=>[
                void 0,
                offset
            ]
    });
}
function getUnitCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getUnitEncoder(), getUnitDecoder());
}
// src/nullable.ts
function getNullableEncoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getUnitEncoder(), (_boolean)=>void 0);
        }
        return getBooleanEncoder({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixEncoderSize"])(getUnitEncoder(), item.fixedSize);
        }
        if (!config.noneValue) {
            return getUnitEncoder();
        }
        return getConstantEncoder(config.noneValue);
    })();
    return getUnionEncoder([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            noneValue
        ]), (_value)=>[
                false,
                void 0
            ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getTupleEncoder([
            prefix,
            item
        ]), (value)=>[
                true,
                value
            ])
    ], (variant)=>Number(variant !== null));
}
function getNullableDecoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getUnitDecoder(), ()=>false);
        }
        return getBooleanDecoder({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixDecoderSize"])(getUnitDecoder(), item.fixedSize);
        }
        if (!config.noneValue) {
            return getUnitDecoder();
        }
        return getConstantDecoder(config.noneValue);
    })();
    return getUnionDecoder([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            noneValue
        ]), ()=>null),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getTupleDecoder([
            prefix,
            item
        ]), ([, value])=>value)
    ], (bytes, offset)=>{
        if (config.prefix === null && !config.noneValue) {
            return Number(offset < bytes.length);
        }
        if (config.prefix === null && config.noneValue != null) {
            const zeroValue = config.noneValue === "zeroes" ? new Uint8Array(noneValue.fixedSize).fill(0) : config.noneValue;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(bytes, zeroValue, offset) ? 0 : 1;
        }
        return Number(prefix.read(bytes, offset)[0]);
    });
}
function getNullableCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getNullableEncoder(item, config), getNullableDecoder(item, config));
}
function getSetEncoder(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])(getArrayEncoder(item, config), (set)=>[
            ...set
        ]);
}
function getSetDecoder(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(getArrayDecoder(item, config), (entries)=>new Set(entries));
}
function getSetCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getSetEncoder(item, config), getSetDecoder(item, config));
}
function getStructEncoder(fields) {
    const fieldCodecs = fields.map(([, codec])=>codec);
    const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
    const maxSize = sumCodecSizes(fieldCodecs.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        ...fixedSize === null ? {
            getSizeFromValue: (value)=>fields.map(([key, codec])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncodedSize"])(value[key], codec)).reduce((all, one)=>all + one, 0),
            maxSize
        } : {
            fixedSize
        },
        write: (struct, bytes, offset)=>{
            fields.forEach(([key, codec])=>{
                offset = codec.write(struct[key], bytes, offset);
            });
            return offset;
        }
    });
}
function getStructDecoder(fields) {
    const fieldCodecs = fields.map(([, codec])=>codec);
    const fixedSize = sumCodecSizes(fieldCodecs.map(getFixedSize));
    const maxSize = sumCodecSizes(fieldCodecs.map(getMaxSize)) ?? void 0;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        ...fixedSize === null ? {
            maxSize
        } : {
            fixedSize
        },
        read: (bytes, offset)=>{
            const struct = {};
            fields.forEach(([key, codec])=>{
                const [value, newOffset] = codec.read(bytes, offset);
                offset = newOffset;
                struct[key] = value;
            });
            return [
                struct,
                offset
            ];
        }
    });
}
function getStructCodec(fields) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getStructEncoder(fields), getStructDecoder(fields));
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/rpc-types/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsBlockhash",
    ()=>assertIsBlockhash,
    "assertIsLamports",
    ()=>assertIsLamports,
    "assertIsStringifiedBigInt",
    ()=>assertIsStringifiedBigInt,
    "assertIsStringifiedNumber",
    ()=>assertIsStringifiedNumber,
    "assertIsUnixTimestamp",
    ()=>assertIsUnixTimestamp,
    "blockhash",
    ()=>blockhash,
    "commitmentComparator",
    ()=>commitmentComparator,
    "devnet",
    ()=>devnet,
    "getBlockhashCodec",
    ()=>getBlockhashCodec,
    "getBlockhashComparator",
    ()=>getBlockhashComparator,
    "getBlockhashDecoder",
    ()=>getBlockhashDecoder,
    "getBlockhashEncoder",
    ()=>getBlockhashEncoder,
    "getDefaultLamportsCodec",
    ()=>getDefaultLamportsCodec,
    "getDefaultLamportsDecoder",
    ()=>getDefaultLamportsDecoder,
    "getDefaultLamportsEncoder",
    ()=>getDefaultLamportsEncoder,
    "getLamportsCodec",
    ()=>getLamportsCodec,
    "getLamportsDecoder",
    ()=>getLamportsDecoder,
    "getLamportsEncoder",
    ()=>getLamportsEncoder,
    "isBlockhash",
    ()=>isBlockhash,
    "isLamports",
    ()=>isLamports,
    "isStringifiedBigInt",
    ()=>isStringifiedBigInt,
    "isStringifiedNumber",
    ()=>isStringifiedNumber,
    "isUnixTimestamp",
    ()=>isUnixTimestamp,
    "lamports",
    ()=>lamports,
    "mainnet",
    ()=>mainnet,
    "stringifiedBigInt",
    ()=>stringifiedBigInt,
    "stringifiedNumber",
    ()=>stringifiedNumber,
    "testnet",
    ()=>testnet,
    "unixTimestamp",
    ()=>unixTimestamp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
// src/blockhash.ts
function isBlockhash(putativeBlockhash) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(putativeBlockhash);
}
function assertIsBlockhash(putativeBlockhash) {
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsAddress"])(putativeBlockhash);
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolanaError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__STRING_LENGTH_OUT_OF_RANGE"])) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE"], error.context);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolanaError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ADDRESSES__INVALID_BYTE_LENGTH"])) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH"], error.context);
        }
        throw error;
    }
}
function blockhash(putativeBlockhash) {
    assertIsBlockhash(putativeBlockhash);
    return putativeBlockhash;
}
function getBlockhashEncoder() {
    const addressEncoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        fixedSize: 32,
        write: (value, bytes, offset)=>{
            assertIsBlockhash(value);
            return addressEncoder.write(value, bytes, offset);
        }
    });
}
function getBlockhashDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])();
}
function getBlockhashCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBlockhashEncoder(), getBlockhashDecoder());
}
function getBlockhashComparator() {
    return new Intl.Collator("en", {
        caseFirst: "lower",
        ignorePunctuation: false,
        localeMatcher: "best fit",
        numeric: false,
        sensitivity: "variant",
        usage: "sort"
    }).compare;
}
// src/cluster-url.ts
function mainnet(putativeString) {
    return putativeString;
}
function devnet(putativeString) {
    return putativeString;
}
function testnet(putativeString) {
    return putativeString;
}
function getCommitmentScore(commitment) {
    switch(commitment){
        case "finalized":
            return 2;
        case "confirmed":
            return 1;
        case "processed":
            return 0;
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INVARIANT_VIOLATION__SWITCH_MUST_BE_EXHAUSTIVE"], {
                unexpectedValue: commitment
            });
    }
}
function commitmentComparator(a, b) {
    if (a === b) {
        return 0;
    }
    return getCommitmentScore(a) < getCommitmentScore(b) ? -1 : 1;
}
var maxU64Value = 18446744073709551615n;
var memoizedU64Encoder;
var memoizedU64Decoder;
function getMemoizedU64Encoder() {
    if (!memoizedU64Encoder) memoizedU64Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])();
    return memoizedU64Encoder;
}
function getMemoizedU64Decoder() {
    if (!memoizedU64Decoder) memoizedU64Decoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])();
    return memoizedU64Decoder;
}
function isLamports(putativeLamports) {
    return putativeLamports >= 0 && putativeLamports <= maxU64Value;
}
function assertIsLamports(putativeLamports) {
    if (putativeLamports < 0 || putativeLamports > maxU64Value) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE"]);
    }
}
function lamports(putativeLamports) {
    assertIsLamports(putativeLamports);
    return putativeLamports;
}
function getDefaultLamportsEncoder() {
    return getLamportsEncoder(getMemoizedU64Encoder());
}
function getLamportsEncoder(innerEncoder) {
    return innerEncoder;
}
function getDefaultLamportsDecoder() {
    return getLamportsDecoder(getMemoizedU64Decoder());
}
function getLamportsDecoder(innerDecoder) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])(innerDecoder, (value)=>lamports(typeof value === "bigint" ? value : BigInt(value)));
}
function getDefaultLamportsCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getDefaultLamportsEncoder(), getDefaultLamportsDecoder());
}
function getLamportsCodec(innerCodec) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getLamportsEncoder(innerCodec), getLamportsDecoder(innerCodec));
}
function isStringifiedBigInt(putativeBigInt) {
    try {
        BigInt(putativeBigInt);
        return true;
    } catch  {
        return false;
    }
}
function assertIsStringifiedBigInt(putativeBigInt) {
    try {
        BigInt(putativeBigInt);
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__MALFORMED_BIGINT_STRING"], {
            value: putativeBigInt
        });
    }
}
function stringifiedBigInt(putativeBigInt) {
    assertIsStringifiedBigInt(putativeBigInt);
    return putativeBigInt;
}
function isStringifiedNumber(putativeNumber) {
    return !Number.isNaN(Number(putativeNumber));
}
function assertIsStringifiedNumber(putativeNumber) {
    if (Number.isNaN(Number(putativeNumber))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__MALFORMED_NUMBER_STRING"], {
            value: putativeNumber
        });
    }
}
function stringifiedNumber(putativeNumber) {
    assertIsStringifiedNumber(putativeNumber);
    return putativeNumber;
}
var maxI64Value = 9223372036854775807n;
var minI64Value = -9223372036854775808n;
function isUnixTimestamp(putativeTimestamp) {
    return putativeTimestamp >= minI64Value && putativeTimestamp <= maxI64Value;
}
function assertIsUnixTimestamp(putativeTimestamp) {
    if (putativeTimestamp < minI64Value || putativeTimestamp > maxI64Value) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE"], {
            value: putativeTimestamp
        });
    }
}
function unixTimestamp(putativeTimestamp) {
    assertIsUnixTimestamp(putativeTimestamp);
    return putativeTimestamp;
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/instructions/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountRole",
    ()=>AccountRole,
    "assertIsInstructionForProgram",
    ()=>assertIsInstructionForProgram,
    "assertIsInstructionWithAccounts",
    ()=>assertIsInstructionWithAccounts,
    "assertIsInstructionWithData",
    ()=>assertIsInstructionWithData,
    "downgradeRoleToNonSigner",
    ()=>downgradeRoleToNonSigner,
    "downgradeRoleToReadonly",
    ()=>downgradeRoleToReadonly,
    "isInstructionForProgram",
    ()=>isInstructionForProgram,
    "isInstructionWithAccounts",
    ()=>isInstructionWithAccounts,
    "isInstructionWithData",
    ()=>isInstructionWithData,
    "isSignerRole",
    ()=>isSignerRole,
    "isWritableRole",
    ()=>isWritableRole,
    "mergeRoles",
    ()=>mergeRoles,
    "upgradeRoleToSigner",
    ()=>upgradeRoleToSigner,
    "upgradeRoleToWritable",
    ()=>upgradeRoleToWritable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
;
// src/instruction.ts
function isInstructionForProgram(instruction, programAddress) {
    return instruction.programAddress === programAddress;
}
function assertIsInstructionForProgram(instruction, programAddress) {
    if (instruction.programAddress !== programAddress) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INSTRUCTION__PROGRAM_ID_MISMATCH"], {
            actualProgramAddress: instruction.programAddress,
            expectedProgramAddress: programAddress
        });
    }
}
function isInstructionWithAccounts(instruction) {
    return instruction.accounts !== void 0;
}
function assertIsInstructionWithAccounts(instruction) {
    if (instruction.accounts === void 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_ACCOUNTS"], {
            data: instruction.data,
            programAddress: instruction.programAddress
        });
    }
}
function isInstructionWithData(instruction) {
    return instruction.data !== void 0;
}
function assertIsInstructionWithData(instruction) {
    if (instruction.data === void 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INSTRUCTION__EXPECTED_TO_HAVE_DATA"], {
            accountAddresses: instruction.accounts?.map((a)=>a.address),
            programAddress: instruction.programAddress
        });
    }
}
// src/roles.ts
var AccountRole = /* @__PURE__ */ ((AccountRole2)=>{
    AccountRole2[AccountRole2["WRITABLE_SIGNER"] = /* 3 */ 3] = "WRITABLE_SIGNER";
    AccountRole2[AccountRole2["READONLY_SIGNER"] = /* 2 */ 2] = "READONLY_SIGNER";
    AccountRole2[AccountRole2["WRITABLE"] = /* 1 */ 1] = "WRITABLE";
    AccountRole2[AccountRole2["READONLY"] = /* 0 */ 0] = "READONLY";
    return AccountRole2;
})(AccountRole || {});
var IS_SIGNER_BITMASK = 2;
var IS_WRITABLE_BITMASK = 1;
function downgradeRoleToNonSigner(role) {
    return role & -3;
}
function downgradeRoleToReadonly(role) {
    return role & -2;
}
function isSignerRole(role) {
    return role >= 2 /* READONLY_SIGNER */ ;
}
function isWritableRole(role) {
    return (role & IS_WRITABLE_BITMASK) !== 0;
}
function mergeRoles(roleA, roleB) {
    return roleA | roleB;
}
function upgradeRoleToSigner(role) {
    return role | IS_SIGNER_BITMASK;
}
function upgradeRoleToWritable(role) {
    return role | IS_WRITABLE_BITMASK;
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/functional/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
// src/pipe.ts
function pipe(init, ...fns) {
    return fns.reduce((acc, fn)=>fn(acc), init);
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/transaction-messages/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appendTransactionMessageInstruction",
    ()=>appendTransactionMessageInstruction,
    "appendTransactionMessageInstructions",
    ()=>appendTransactionMessageInstructions,
    "assertIsTransactionMessageWithBlockhashLifetime",
    ()=>assertIsTransactionMessageWithBlockhashLifetime,
    "assertIsTransactionMessageWithDurableNonceLifetime",
    ()=>assertIsTransactionMessageWithDurableNonceLifetime,
    "compileTransactionMessage",
    ()=>compileTransactionMessage,
    "compressTransactionMessageUsingAddressLookupTables",
    ()=>compressTransactionMessageUsingAddressLookupTables,
    "createTransactionMessage",
    ()=>createTransactionMessage,
    "decompileTransactionMessage",
    ()=>decompileTransactionMessage,
    "getCompiledTransactionMessageCodec",
    ()=>getCompiledTransactionMessageCodec,
    "getCompiledTransactionMessageDecoder",
    ()=>getCompiledTransactionMessageDecoder,
    "getCompiledTransactionMessageEncoder",
    ()=>getCompiledTransactionMessageEncoder,
    "getTransactionVersionCodec",
    ()=>getTransactionVersionCodec,
    "getTransactionVersionDecoder",
    ()=>getTransactionVersionDecoder,
    "getTransactionVersionEncoder",
    ()=>getTransactionVersionEncoder,
    "isAdvanceNonceAccountInstruction",
    ()=>isAdvanceNonceAccountInstruction,
    "isTransactionMessageWithBlockhashLifetime",
    ()=>isTransactionMessageWithBlockhashLifetime,
    "isTransactionMessageWithDurableNonceLifetime",
    ()=>isTransactionMessageWithDurableNonceLifetime,
    "prependTransactionMessageInstruction",
    ()=>prependTransactionMessageInstruction,
    "prependTransactionMessageInstructions",
    ()=>prependTransactionMessageInstructions,
    "setTransactionMessageFeePayer",
    ()=>setTransactionMessageFeePayer,
    "setTransactionMessageLifetimeUsingBlockhash",
    ()=>setTransactionMessageLifetimeUsingBlockhash,
    "setTransactionMessageLifetimeUsingDurableNonce",
    ()=>setTransactionMessageLifetimeUsingDurableNonce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/rpc-types/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-data-structures/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/instructions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/functional/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// src/blockhash.ts
function isTransactionMessageWithBlockhashLifetime(transactionMessage) {
    return "lifetimeConstraint" in transactionMessage && typeof transactionMessage.lifetimeConstraint.blockhash === "string" && typeof transactionMessage.lifetimeConstraint.lastValidBlockHeight === "bigint" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$rpc$2d$types$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBlockhash"])(transactionMessage.lifetimeConstraint.blockhash);
}
function assertIsTransactionMessageWithBlockhashLifetime(transactionMessage) {
    if (!isTransactionMessageWithBlockhashLifetime(transactionMessage)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__EXPECTED_BLOCKHASH_LIFETIME"]);
    }
}
function setTransactionMessageLifetimeUsingBlockhash(blockhashLifetimeConstraint, transactionMessage) {
    if ("lifetimeConstraint" in transactionMessage && transactionMessage.lifetimeConstraint && "blockhash" in transactionMessage.lifetimeConstraint && transactionMessage.lifetimeConstraint.blockhash === blockhashLifetimeConstraint.blockhash && transactionMessage.lifetimeConstraint.lastValidBlockHeight === blockhashLifetimeConstraint.lastValidBlockHeight) {
        return transactionMessage;
    }
    return Object.freeze({
        ...transactionMessage,
        lifetimeConstraint: Object.freeze(blockhashLifetimeConstraint)
    });
}
function assertValidBaseString(alphabet4, testValue, givenValue = testValue) {
    if (!testValue.match(new RegExp(`^[${alphabet4}]*$`))) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__CODECS__INVALID_STRING_FOR_BASE"], {
            alphabet: alphabet4,
            base: alphabet4.length,
            value: givenValue
        });
    }
}
var getBaseXEncoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>{
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) return value.length;
            const base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            return leadingZeroes.length + Math.ceil(base10Number.toString(16).length / 2);
        },
        write (value, bytes, offset) {
            assertValidBaseString(alphabet4, value);
            if (value === "") return offset;
            const [leadingZeroes, tailChars] = partitionLeadingZeroes(value, alphabet4[0]);
            if (!tailChars) {
                bytes.set(new Uint8Array(leadingZeroes.length).fill(0), offset);
                return offset + leadingZeroes.length;
            }
            let base10Number = getBigIntFromBaseX(tailChars, alphabet4);
            const tailBytes = [];
            while(base10Number > 0n){
                tailBytes.unshift(Number(base10Number % 256n));
                base10Number /= 256n;
            }
            const bytesToAdd = [
                ...Array(leadingZeroes.length).fill(0),
                ...tailBytes
            ];
            bytes.set(bytesToAdd, offset);
            return offset + bytesToAdd.length;
        }
    });
};
var getBaseXDecoder = (alphabet4)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        read (rawBytes, offset) {
            const bytes = offset === 0 ? rawBytes : rawBytes.slice(offset);
            if (bytes.length === 0) return [
                "",
                0
            ];
            let trailIndex = bytes.findIndex((n)=>n !== 0);
            trailIndex = trailIndex === -1 ? bytes.length : trailIndex;
            const leadingZeroes = alphabet4[0].repeat(trailIndex);
            if (trailIndex === bytes.length) return [
                leadingZeroes,
                rawBytes.length
            ];
            const base10Number = bytes.slice(trailIndex).reduce((sum, byte)=>sum * 256n + BigInt(byte), 0n);
            const tailChars = getBaseXFromBigInt(base10Number, alphabet4);
            return [
                leadingZeroes + tailChars,
                rawBytes.length
            ];
        }
    });
};
function partitionLeadingZeroes(value, zeroCharacter) {
    const [leadingZeros, tailChars] = value.split(new RegExp(`((?!${zeroCharacter}).*)`));
    return [
        leadingZeros,
        tailChars
    ];
}
function getBigIntFromBaseX(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    let sum = 0n;
    for (const char of value){
        sum *= base;
        sum += BigInt(alphabet4.indexOf(char));
    }
    return sum;
}
function getBaseXFromBigInt(value, alphabet4) {
    const base = BigInt(alphabet4.length);
    const tailChars = [];
    while(value > 0n){
        tailChars.unshift(alphabet4[Number(value % base)]);
        value /= base;
    }
    return tailChars.join("");
}
var alphabet2 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var getBase58Encoder = ()=>getBaseXEncoder(alphabet2);
var getBase58Decoder = ()=>getBaseXDecoder(alphabet2);
var memoizedAddressTableLookupEncoder;
function getAddressTableLookupEncoder() {
    if (!memoizedAddressTableLookupEncoder) {
        const indexEncoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])(), {
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Encoder"])()
        });
        memoizedAddressTableLookupEncoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
            [
                "lookupTableAddress",
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
            ],
            [
                "writableIndexes",
                indexEncoder
            ],
            [
                "readonlyIndexes",
                indexEncoder
            ]
        ]);
    }
    return memoizedAddressTableLookupEncoder;
}
var memoizedAddressTableLookupDecoder;
function getAddressTableLookupDecoder() {
    if (!memoizedAddressTableLookupDecoder) {
        const indexEncoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])(), {
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Decoder"])()
        });
        memoizedAddressTableLookupDecoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
            [
                "lookupTableAddress",
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
            ],
            [
                "writableIndexes",
                indexEncoder
            ],
            [
                "readonlyIndexes",
                indexEncoder
            ]
        ]);
    }
    return memoizedAddressTableLookupDecoder;
}
var memoizedU8Encoder;
function getMemoizedU8Encoder() {
    if (!memoizedU8Encoder) memoizedU8Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])();
    return memoizedU8Encoder;
}
var memoizedU8Decoder;
function getMemoizedU8Decoder() {
    if (!memoizedU8Decoder) memoizedU8Decoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])();
    return memoizedU8Decoder;
}
function getMessageHeaderEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "numSignerAccounts",
            getMemoizedU8Encoder()
        ],
        [
            "numReadonlySignerAccounts",
            getMemoizedU8Encoder()
        ],
        [
            "numReadonlyNonSignerAccounts",
            getMemoizedU8Encoder()
        ]
    ]);
}
function getMessageHeaderDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "numSignerAccounts",
            getMemoizedU8Decoder()
        ],
        [
            "numReadonlySignerAccounts",
            getMemoizedU8Decoder()
        ],
        [
            "numReadonlyNonSignerAccounts",
            getMemoizedU8Decoder()
        ]
    ]);
}
var memoizedGetInstructionEncoder;
function getInstructionEncoder() {
    if (!memoizedGetInstructionEncoder) {
        memoizedGetInstructionEncoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
            [
                "programAddressIndex",
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
            ],
            [
                "accountIndices",
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])(), {
                    size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Encoder"])()
                })
            ],
            [
                "data",
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addEncoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesEncoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Encoder"])())
            ]
        ]), // Convert an instruction to have all fields defined
        (instruction)=>{
            if (instruction.accountIndices !== void 0 && instruction.data !== void 0) {
                return instruction;
            }
            return {
                ...instruction,
                accountIndices: instruction.accountIndices ?? [],
                data: instruction.data ?? new Uint8Array(0)
            };
        });
    }
    return memoizedGetInstructionEncoder;
}
var memoizedGetInstructionDecoder;
function getInstructionDecoder() {
    if (!memoizedGetInstructionDecoder) {
        memoizedGetInstructionDecoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
            [
                "programAddressIndex",
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
            ],
            [
                "accountIndices",
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])(), {
                    size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Decoder"])()
                })
            ],
            [
                "data",
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDecoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesDecoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Decoder"])())
            ]
        ]), // Convert an instruction to exclude optional fields if they are empty
        (instruction)=>{
            if (instruction.accountIndices.length && instruction.data.byteLength) {
                return instruction;
            }
            const { accountIndices, data, ...rest } = instruction;
            return {
                ...rest,
                ...accountIndices.length ? {
                    accountIndices
                } : null,
                ...data.byteLength ? {
                    data
                } : null
            };
        });
    }
    return memoizedGetInstructionDecoder;
}
var VERSION_FLAG_MASK = 128;
function getTransactionVersionEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (value)=>value === "legacy" ? 0 : 1,
        maxSize: 1,
        write: (value, bytes, offset)=>{
            if (value === "legacy") {
                return offset;
            }
            if (value < 0 || value > 127) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__VERSION_NUMBER_OUT_OF_RANGE"], {
                    actualVersion: value
                });
            }
            bytes.set([
                value | VERSION_FLAG_MASK
            ], offset);
            return offset + 1;
        }
    });
}
function getTransactionVersionDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDecoder"])({
        maxSize: 1,
        read: (bytes, offset)=>{
            const firstByte = bytes[offset];
            if ((firstByte & VERSION_FLAG_MASK) === 0) {
                return [
                    "legacy",
                    offset
                ];
            } else {
                const version = firstByte ^ VERSION_FLAG_MASK;
                return [
                    version,
                    offset + 1
                ];
            }
        }
    });
}
function getTransactionVersionCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getTransactionVersionEncoder(), getTransactionVersionDecoder());
}
// src/codecs/message.ts
function getCompiledMessageLegacyEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])(getPreludeStructEncoderTuple());
}
function getCompiledMessageVersionedEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        ...getPreludeStructEncoderTuple(),
        [
            "addressTableLookups",
            getAddressTableLookupArrayEncoder()
        ]
    ]), (value)=>{
        if (value.version === "legacy") {
            return value;
        }
        return {
            ...value,
            addressTableLookups: value.addressTableLookups ?? []
        };
    });
}
function getPreludeStructEncoderTuple() {
    const lifetimeTokenEncoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnionEncoder"])([
        // Use a 32-byte constant encoder for a missing lifetime token (index 0).
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConstantEncoder"])(new Uint8Array(32)),
        // Use a 32-byte base58 encoder for a valid lifetime token (index 1).
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixEncoderSize"])(getBase58Encoder(), 32)
    ], (value)=>value === void 0 ? 0 : 1);
    return [
        [
            "version",
            getTransactionVersionEncoder()
        ],
        [
            "header",
            getMessageHeaderEncoder()
        ],
        [
            "staticAccounts",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])(), {
                size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Encoder"])()
            })
        ],
        [
            "lifetimeToken",
            lifetimeTokenEncoder
        ],
        [
            "instructions",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayEncoder"])(getInstructionEncoder(), {
                size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Encoder"])()
            })
        ]
    ];
}
function getPreludeStructDecoderTuple() {
    return [
        [
            "version",
            getTransactionVersionDecoder()
        ],
        [
            "header",
            getMessageHeaderDecoder()
        ],
        [
            "staticAccounts",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])(), {
                size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Decoder"])()
            })
        ],
        [
            "lifetimeToken",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixDecoderSize"])(getBase58Decoder(), 32)
        ],
        [
            "instructions",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayDecoder"])(getInstructionDecoder(), {
                size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Decoder"])()
            })
        ],
        [
            "addressTableLookups",
            getAddressTableLookupArrayDecoder()
        ]
    ];
}
function getAddressTableLookupArrayEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayEncoder"])(getAddressTableLookupEncoder(), {
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Encoder"])()
    });
}
function getAddressTableLookupArrayDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayDecoder"])(getAddressTableLookupDecoder(), {
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Decoder"])()
    });
}
function getCompiledTransactionMessageEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEncoder"])({
        getSizeFromValue: (compiledMessage)=>{
            if (compiledMessage.version === "legacy") {
                return getCompiledMessageLegacyEncoder().getSizeFromValue(compiledMessage);
            } else {
                return getCompiledMessageVersionedEncoder().getSizeFromValue(compiledMessage);
            }
        },
        write: (compiledMessage, bytes, offset)=>{
            if (compiledMessage.version === "legacy") {
                return getCompiledMessageLegacyEncoder().write(compiledMessage, bytes, offset);
            } else {
                return getCompiledMessageVersionedEncoder().write(compiledMessage, bytes, offset);
            }
        }
    });
}
function getCompiledTransactionMessageDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])(getPreludeStructDecoderTuple()), ({ addressTableLookups, ...restOfMessage })=>{
        if (restOfMessage.version === "legacy" || !addressTableLookups?.length) {
            return restOfMessage;
        }
        return {
            ...restOfMessage,
            addressTableLookups
        };
    });
}
function getCompiledTransactionMessageCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getCompiledTransactionMessageEncoder(), getCompiledTransactionMessageDecoder());
}
function upsert(addressMap, address, update) {
    addressMap[address] = update(addressMap[address] ?? {
        role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY
    });
}
var TYPE = Symbol("AddressMapTypeProperty");
function getAddressMapFromInstructions(feePayer, instructions) {
    const addressMap = {
        [feePayer]: {
            [TYPE]: 0 /* FEE_PAYER */ ,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].WRITABLE_SIGNER
        }
    };
    const addressesOfInvokedPrograms = /* @__PURE__ */ new Set();
    for (const instruction of instructions){
        upsert(addressMap, instruction.programAddress, (entry)=>{
            addressesOfInvokedPrograms.add(instruction.programAddress);
            if (TYPE in entry) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWritableRole"])(entry.role)) {
                    switch(entry[TYPE]){
                        case 0 /* FEE_PAYER */ :
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_CANNOT_PAY_FEES"], {
                                programAddress: instruction.programAddress
                            });
                        default:
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE"], {
                                programAddress: instruction.programAddress
                            });
                    }
                }
                if (entry[TYPE] === 2 /* STATIC */ ) {
                    return entry;
                }
            }
            return {
                [TYPE]: 2 /* STATIC */ ,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY
            };
        });
        let addressComparator;
        if (!instruction.accounts) {
            continue;
        }
        for (const account of instruction.accounts){
            upsert(addressMap, account.address, (entry)=>{
                const { // eslint-disable-next-line @typescript-eslint/no-unused-vars
                address: _, ...accountMeta } = account;
                if (TYPE in entry) {
                    switch(entry[TYPE]){
                        case 0 /* FEE_PAYER */ :
                            return entry;
                        case 1 /* LOOKUP_TABLE */ :
                            {
                                const nextRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeRoles"])(entry.role, accountMeta.role);
                                if ("lookupTableAddress" in accountMeta) {
                                    const shouldReplaceEntry = // Consider using the new LOOKUP_TABLE if its address is different...
                                    entry.lookupTableAddress !== accountMeta.lookupTableAddress && // ...and sorts before the existing one.
                                    (addressComparator ||= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressComparator"])())(accountMeta.lookupTableAddress, entry.lookupTableAddress) < 0;
                                    if (shouldReplaceEntry) {
                                        return {
                                            [TYPE]: 1 /* LOOKUP_TABLE */ ,
                                            ...accountMeta,
                                            role: nextRole
                                        };
                                    }
                                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSignerRole"])(accountMeta.role)) {
                                    return {
                                        [TYPE]: 2 /* STATIC */ ,
                                        role: nextRole
                                    };
                                }
                                if (entry.role !== nextRole) {
                                    return {
                                        ...entry,
                                        role: nextRole
                                    };
                                } else {
                                    return entry;
                                }
                            }
                        case 2 /* STATIC */ :
                            {
                                const nextRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeRoles"])(entry.role, accountMeta.role);
                                if (// Check to see if this address represents a program that is invoked
                                // in this transaction.
                                addressesOfInvokedPrograms.has(account.address)) {
                                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWritableRole"])(accountMeta.role)) {
                                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE"], {
                                            programAddress: account.address
                                        });
                                    }
                                    if (entry.role !== nextRole) {
                                        return {
                                            ...entry,
                                            role: nextRole
                                        };
                                    } else {
                                        return entry;
                                    }
                                } else if ("lookupTableAddress" in accountMeta && // Static accounts can be 'upgraded' to lookup table accounts as
                                // long as they are not require to sign the transaction.
                                !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSignerRole"])(entry.role)) {
                                    return {
                                        ...accountMeta,
                                        [TYPE]: 1 /* LOOKUP_TABLE */ ,
                                        role: nextRole
                                    };
                                } else {
                                    if (entry.role !== nextRole) {
                                        return {
                                            ...entry,
                                            role: nextRole
                                        };
                                    } else {
                                        return entry;
                                    }
                                }
                            }
                    }
                }
                if ("lookupTableAddress" in accountMeta) {
                    return {
                        ...accountMeta,
                        [TYPE]: 1 /* LOOKUP_TABLE */ 
                    };
                } else {
                    return {
                        ...accountMeta,
                        [TYPE]: 2 /* STATIC */ 
                    };
                }
            });
        }
    }
    return addressMap;
}
function getOrderedAccountsFromAddressMap(addressMap) {
    let addressComparator;
    const orderedAccounts = Object.entries(addressMap).sort(([leftAddress, leftEntry], [rightAddress, rightEntry])=>{
        if (leftEntry[TYPE] !== rightEntry[TYPE]) {
            if (leftEntry[TYPE] === 0 /* FEE_PAYER */ ) {
                return -1;
            } else if (rightEntry[TYPE] === 0 /* FEE_PAYER */ ) {
                return 1;
            } else if (leftEntry[TYPE] === 2 /* STATIC */ ) {
                return -1;
            } else if (rightEntry[TYPE] === 2 /* STATIC */ ) {
                return 1;
            }
        }
        const leftIsSigner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSignerRole"])(leftEntry.role);
        if (leftIsSigner !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSignerRole"])(rightEntry.role)) {
            return leftIsSigner ? -1 : 1;
        }
        const leftIsWritable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWritableRole"])(leftEntry.role);
        if (leftIsWritable !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWritableRole"])(rightEntry.role)) {
            return leftIsWritable ? -1 : 1;
        }
        addressComparator ||= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressComparator"])();
        if (leftEntry[TYPE] === 1 /* LOOKUP_TABLE */  && rightEntry[TYPE] === 1 /* LOOKUP_TABLE */  && leftEntry.lookupTableAddress !== rightEntry.lookupTableAddress) {
            return addressComparator(leftEntry.lookupTableAddress, rightEntry.lookupTableAddress);
        } else {
            return addressComparator(leftAddress, rightAddress);
        }
    }).map(([address, addressMeta])=>({
            address,
            ...addressMeta
        }));
    return orderedAccounts;
}
function getCompiledAddressTableLookups(orderedAccounts) {
    const index = {};
    for (const account of orderedAccounts){
        if (!("lookupTableAddress" in account)) {
            continue;
        }
        const entry = index[account.lookupTableAddress] ||= {
            readonlyIndexes: [],
            writableIndexes: []
        };
        if (account.role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].WRITABLE) {
            entry.writableIndexes.push(account.addressIndex);
        } else {
            entry.readonlyIndexes.push(account.addressIndex);
        }
    }
    return Object.keys(index).sort((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressComparator"])()).map((lookupTableAddress)=>({
            lookupTableAddress,
            ...index[lookupTableAddress]
        }));
}
function getCompiledMessageHeader(orderedAccounts) {
    let numReadonlyNonSignerAccounts = 0;
    let numReadonlySignerAccounts = 0;
    let numSignerAccounts = 0;
    for (const account of orderedAccounts){
        if ("lookupTableAddress" in account) {
            break;
        }
        const accountIsWritable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWritableRole"])(account.role);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSignerRole"])(account.role)) {
            numSignerAccounts++;
            if (!accountIsWritable) {
                numReadonlySignerAccounts++;
            }
        } else if (!accountIsWritable) {
            numReadonlyNonSignerAccounts++;
        }
    }
    return {
        numReadonlyNonSignerAccounts,
        numReadonlySignerAccounts,
        numSignerAccounts
    };
}
// src/compile/instructions.ts
function getAccountIndex(orderedAccounts) {
    const out = {};
    for (const [index, account] of orderedAccounts.entries()){
        out[account.address] = index;
    }
    return out;
}
function getCompiledInstructions(instructions, orderedAccounts) {
    const accountIndex = getAccountIndex(orderedAccounts);
    return instructions.map(({ accounts, data, programAddress })=>{
        return {
            programAddressIndex: accountIndex[programAddress],
            ...accounts ? {
                accountIndices: accounts.map(({ address })=>accountIndex[address])
            } : null,
            ...data ? {
                data
            } : null
        };
    });
}
// src/compile/lifetime-token.ts
function getCompiledLifetimeToken(lifetimeConstraint) {
    if ("nonce" in lifetimeConstraint) {
        return lifetimeConstraint.nonce;
    }
    return lifetimeConstraint.blockhash;
}
// src/compile/static-accounts.ts
function getCompiledStaticAccounts(orderedAccounts) {
    const firstLookupTableAccountIndex = orderedAccounts.findIndex((account)=>"lookupTableAddress" in account);
    const orderedStaticAccounts = firstLookupTableAccountIndex === -1 ? orderedAccounts : orderedAccounts.slice(0, firstLookupTableAccountIndex);
    return orderedStaticAccounts.map(({ address })=>address);
}
// src/compile/message.ts
function compileTransactionMessage(transactionMessage) {
    const addressMap = getAddressMapFromInstructions(transactionMessage.feePayer.address, transactionMessage.instructions);
    const orderedAccounts = getOrderedAccountsFromAddressMap(addressMap);
    const lifetimeConstraint = transactionMessage.lifetimeConstraint;
    return {
        ...transactionMessage.version !== "legacy" ? {
            addressTableLookups: getCompiledAddressTableLookups(orderedAccounts)
        } : null,
        ...lifetimeConstraint ? {
            lifetimeToken: getCompiledLifetimeToken(lifetimeConstraint)
        } : null,
        header: getCompiledMessageHeader(orderedAccounts),
        instructions: getCompiledInstructions(transactionMessage.instructions, orderedAccounts),
        staticAccounts: getCompiledStaticAccounts(orderedAccounts),
        version: transactionMessage.version
    };
}
function findAddressInLookupTables(address, role, addressesByLookupTableAddress) {
    for (const [lookupTableAddress, addresses] of Object.entries(addressesByLookupTableAddress)){
        for(let i = 0; i < addresses.length; i++){
            if (address === addresses[i]) {
                return {
                    address,
                    addressIndex: i,
                    lookupTableAddress,
                    role
                };
            }
        }
    }
}
function compressTransactionMessageUsingAddressLookupTables(transactionMessage, addressesByLookupTableAddress) {
    const lookupTableAddresses = new Set(Object.values(addressesByLookupTableAddress).flatMap((a)=>a));
    const newInstructions = [];
    let updatedAnyInstructions = false;
    for (const instruction of transactionMessage.instructions){
        if (!instruction.accounts) {
            newInstructions.push(instruction);
            continue;
        }
        const newAccounts = [];
        let updatedAnyAccounts = false;
        for (const account of instruction.accounts){
            if ("lookupTableAddress" in account || !lookupTableAddresses.has(account.address) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSignerRole"])(account.role)) {
                newAccounts.push(account);
                continue;
            }
            const lookupMetaAccount = findAddressInLookupTables(account.address, account.role, addressesByLookupTableAddress);
            newAccounts.push(Object.freeze(lookupMetaAccount));
            updatedAnyAccounts = true;
            updatedAnyInstructions = true;
        }
        newInstructions.push(Object.freeze(updatedAnyAccounts ? {
            ...instruction,
            accounts: newAccounts
        } : instruction));
    }
    return Object.freeze(updatedAnyInstructions ? {
        ...transactionMessage,
        instructions: newInstructions
    } : transactionMessage);
}
// src/create-transaction-message.ts
function createTransactionMessage(config) {
    return Object.freeze({
        instructions: Object.freeze([]),
        version: config.version
    });
}
var RECENT_BLOCKHASHES_SYSVAR_ADDRESS = "SysvarRecentB1ockHashes11111111111111111111";
var SYSTEM_PROGRAM_ADDRESS = "11111111111111111111111111111111";
function createAdvanceNonceAccountInstruction(nonceAccountAddress, nonceAuthorityAddress) {
    return {
        accounts: [
            {
                address: nonceAccountAddress,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].WRITABLE
            },
            {
                address: RECENT_BLOCKHASHES_SYSVAR_ADDRESS,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY
            },
            {
                address: nonceAuthorityAddress,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER
            }
        ],
        data: new Uint8Array([
            4,
            0,
            0,
            0
        ]),
        programAddress: SYSTEM_PROGRAM_ADDRESS
    };
}
function isAdvanceNonceAccountInstruction(instruction) {
    return instruction.programAddress === SYSTEM_PROGRAM_ADDRESS && // Test for `AdvanceNonceAccount` instruction data
    instruction.data != null && isAdvanceNonceAccountInstructionData(instruction.data) && // Test for exactly 3 accounts
    instruction.accounts?.length === 3 && // First account is nonce account address
    instruction.accounts[0].address != null && instruction.accounts[0].role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].WRITABLE && // Second account is recent blockhashes sysvar
    instruction.accounts[1].address === RECENT_BLOCKHASHES_SYSVAR_ADDRESS && instruction.accounts[1].role === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY && // Third account is nonce authority account
    instruction.accounts[2].address != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSignerRole"])(instruction.accounts[2].role);
}
function isAdvanceNonceAccountInstructionData(data) {
    return data.byteLength === 4 && data[0] === 4 && data[1] === 0 && data[2] === 0 && data[3] === 0;
}
// src/durable-nonce.ts
function isTransactionMessageWithDurableNonceLifetime(transactionMessage) {
    return "lifetimeConstraint" in transactionMessage && typeof transactionMessage.lifetimeConstraint.nonce === "string" && transactionMessage.instructions[0] != null && isAdvanceNonceAccountInstruction(transactionMessage.instructions[0]);
}
function assertIsTransactionMessageWithDurableNonceLifetime(transactionMessage) {
    if (!isTransactionMessageWithDurableNonceLifetime(transactionMessage)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__EXPECTED_NONCE_LIFETIME"]);
    }
}
function isAdvanceNonceAccountInstructionForNonce(instruction, nonceAccountAddress, nonceAuthorityAddress) {
    return instruction.accounts[0].address === nonceAccountAddress && instruction.accounts[2].address === nonceAuthorityAddress;
}
function setTransactionMessageLifetimeUsingDurableNonce({ nonce, nonceAccountAddress, nonceAuthorityAddress }, transactionMessage) {
    let newInstructions;
    const firstInstruction = transactionMessage.instructions[0];
    if (firstInstruction && isAdvanceNonceAccountInstruction(firstInstruction)) {
        if (isAdvanceNonceAccountInstructionForNonce(firstInstruction, nonceAccountAddress, nonceAuthorityAddress)) {
            if (isTransactionMessageWithDurableNonceLifetime(transactionMessage) && transactionMessage.lifetimeConstraint.nonce === nonce) {
                return transactionMessage;
            } else {
                newInstructions = [
                    firstInstruction,
                    ...transactionMessage.instructions.slice(1)
                ];
            }
        } else {
            newInstructions = [
                Object.freeze(createAdvanceNonceAccountInstruction(nonceAccountAddress, nonceAuthorityAddress)),
                ...transactionMessage.instructions.slice(1)
            ];
        }
    } else {
        newInstructions = [
            Object.freeze(createAdvanceNonceAccountInstruction(nonceAccountAddress, nonceAuthorityAddress)),
            ...transactionMessage.instructions
        ];
    }
    return Object.freeze({
        ...transactionMessage,
        instructions: Object.freeze(newInstructions),
        lifetimeConstraint: Object.freeze({
            nonce
        })
    });
}
// src/fee-payer.ts
function setTransactionMessageFeePayer(feePayer, transactionMessage) {
    if ("feePayer" in transactionMessage && feePayer === transactionMessage.feePayer?.address && isAddressOnlyFeePayer(transactionMessage.feePayer)) {
        return transactionMessage;
    }
    const out = {
        ...transactionMessage,
        feePayer: Object.freeze({
            address: feePayer
        })
    };
    Object.freeze(out);
    return out;
}
function isAddressOnlyFeePayer(feePayer) {
    return !!feePayer && "address" in feePayer && typeof feePayer.address === "string" && Object.keys(feePayer).length === 1;
}
// src/instructions.ts
function appendTransactionMessageInstruction(instruction, transactionMessage) {
    return appendTransactionMessageInstructions([
        instruction
    ], transactionMessage);
}
function appendTransactionMessageInstructions(instructions, transactionMessage) {
    return Object.freeze({
        ...transactionMessage,
        instructions: Object.freeze([
            ...transactionMessage.instructions,
            ...instructions
        ])
    });
}
function prependTransactionMessageInstruction(instruction, transactionMessage) {
    return prependTransactionMessageInstructions([
        instruction
    ], transactionMessage);
}
function prependTransactionMessageInstructions(instructions, transactionMessage) {
    return Object.freeze({
        ...transactionMessage,
        instructions: Object.freeze([
            ...instructions,
            ...transactionMessage.instructions
        ])
    });
}
// src/decompile-message.ts
function getAccountMetas(message) {
    const { header } = message;
    const numWritableSignerAccounts = header.numSignerAccounts - header.numReadonlySignerAccounts;
    const numWritableNonSignerAccounts = message.staticAccounts.length - header.numSignerAccounts - header.numReadonlyNonSignerAccounts;
    const accountMetas = [];
    let accountIndex = 0;
    for(let i = 0; i < numWritableSignerAccounts; i++){
        accountMetas.push({
            address: message.staticAccounts[accountIndex],
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].WRITABLE_SIGNER
        });
        accountIndex++;
    }
    for(let i = 0; i < header.numReadonlySignerAccounts; i++){
        accountMetas.push({
            address: message.staticAccounts[accountIndex],
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER
        });
        accountIndex++;
    }
    for(let i = 0; i < numWritableNonSignerAccounts; i++){
        accountMetas.push({
            address: message.staticAccounts[accountIndex],
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].WRITABLE
        });
        accountIndex++;
    }
    for(let i = 0; i < header.numReadonlyNonSignerAccounts; i++){
        accountMetas.push({
            address: message.staticAccounts[accountIndex],
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY
        });
        accountIndex++;
    }
    return accountMetas;
}
function getAddressLookupMetas(compiledAddressTableLookups, addressesByLookupTableAddress) {
    const compiledAddressTableLookupAddresses = compiledAddressTableLookups.map((l)=>l.lookupTableAddress);
    const missing = compiledAddressTableLookupAddresses.filter((a)=>addressesByLookupTableAddress[a] === void 0);
    if (missing.length > 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING"], {
            lookupTableAddresses: missing
        });
    }
    const readOnlyMetas = [];
    const writableMetas = [];
    for (const lookup of compiledAddressTableLookups){
        const addresses = addressesByLookupTableAddress[lookup.lookupTableAddress];
        const readonlyIndexes = lookup.readonlyIndexes;
        const writableIndexes = lookup.writableIndexes;
        const highestIndex = Math.max(...readonlyIndexes, ...writableIndexes);
        if (highestIndex >= addresses.length) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE"], {
                highestKnownIndex: addresses.length - 1,
                highestRequestedIndex: highestIndex,
                lookupTableAddress: lookup.lookupTableAddress
            });
        }
        const readOnlyForLookup = readonlyIndexes.map((r)=>({
                address: addresses[r],
                addressIndex: r,
                lookupTableAddress: lookup.lookupTableAddress,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY
            }));
        readOnlyMetas.push(...readOnlyForLookup);
        const writableForLookup = writableIndexes.map((w)=>({
                address: addresses[w],
                addressIndex: w,
                lookupTableAddress: lookup.lookupTableAddress,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].WRITABLE
            }));
        writableMetas.push(...writableForLookup);
    }
    return [
        ...writableMetas,
        ...readOnlyMetas
    ];
}
function convertInstruction(instruction, accountMetas) {
    const programAddress = accountMetas[instruction.programAddressIndex]?.address;
    if (!programAddress) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND"], {
            index: instruction.programAddressIndex
        });
    }
    const accounts = instruction.accountIndices?.map((accountIndex)=>accountMetas[accountIndex]);
    const { data } = instruction;
    return Object.freeze({
        programAddress,
        ...accounts && accounts.length ? {
            accounts: Object.freeze(accounts)
        } : {},
        ...data && data.length ? {
            data
        } : {}
    });
}
function getLifetimeConstraint(messageLifetimeToken, firstInstruction, lastValidBlockHeight) {
    if (!firstInstruction || !isAdvanceNonceAccountInstruction(firstInstruction)) {
        return {
            blockhash: messageLifetimeToken,
            lastValidBlockHeight: lastValidBlockHeight ?? 2n ** 64n - 1n
        };
    } else {
        const nonceAccountAddress = firstInstruction.accounts[0].address;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsAddress"])(nonceAccountAddress);
        const nonceAuthorityAddress = firstInstruction.accounts[2].address;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsAddress"])(nonceAuthorityAddress);
        return {
            nonce: messageLifetimeToken,
            nonceAccountAddress,
            nonceAuthorityAddress
        };
    }
}
function decompileTransactionMessage(compiledTransactionMessage, config) {
    const feePayer = compiledTransactionMessage.staticAccounts[0];
    if (!feePayer) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__FAILED_TO_DECOMPILE_FEE_PAYER_MISSING"]);
    }
    const accountMetas = getAccountMetas(compiledTransactionMessage);
    const accountLookupMetas = "addressTableLookups" in compiledTransactionMessage && compiledTransactionMessage.addressTableLookups !== void 0 && compiledTransactionMessage.addressTableLookups.length > 0 ? getAddressLookupMetas(compiledTransactionMessage.addressTableLookups, config?.addressesByLookupTableAddress ?? {}) : [];
    const transactionMetas = [
        ...accountMetas,
        ...accountLookupMetas
    ];
    const instructions = compiledTransactionMessage.instructions.map((compiledInstruction)=>convertInstruction(compiledInstruction, transactionMetas));
    const firstInstruction = instructions[0];
    const lifetimeConstraint = getLifetimeConstraint(compiledTransactionMessage.lifetimeToken, firstInstruction, config?.lastValidBlockHeight);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])(createTransactionMessage({
        version: compiledTransactionMessage.version
    }), (m)=>setTransactionMessageFeePayer(feePayer, m), (m)=>instructions.reduce((acc, instruction)=>appendTransactionMessageInstruction(instruction, acc), m), (m)=>"blockhash" in lifetimeConstraint ? setTransactionMessageLifetimeUsingBlockhash(lifetimeConstraint, m) : setTransactionMessageLifetimeUsingDurableNonce(lifetimeConstraint, m));
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/keys/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertIsSignature",
    ()=>assertIsSignature,
    "createKeyPairFromBytes",
    ()=>createKeyPairFromBytes,
    "createKeyPairFromPrivateKeyBytes",
    ()=>createKeyPairFromPrivateKeyBytes,
    "createPrivateKeyFromBytes",
    ()=>createPrivateKeyFromBytes,
    "generateKeyPair",
    ()=>generateKeyPair,
    "getPublicKeyFromPrivateKey",
    ()=>getPublicKeyFromPrivateKey,
    "isSignature",
    ()=>isSignature,
    "signBytes",
    ()=>signBytes,
    "signature",
    ()=>signature,
    "verifySignature",
    ()=>verifySignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/assertions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
// src/key-pair.ts
// src/algorithm.ts
var ED25519_ALGORITHM_IDENTIFIER = // Resist the temptation to convert this to a simple string; As of version 133.0.3, Firefox
// requires the object form of `AlgorithmIdentifier` and will throw a `DOMException` otherwise.
Object.freeze({
    name: "Ed25519"
});
function addPkcs8Header(bytes) {
    return new Uint8Array([
        /**
     * PKCS#8 header
     */ 48,
        // ASN.1 sequence tag
        46,
        // Length of sequence (46 more bytes)
        2,
        // ASN.1 integer tag
        1,
        // Length of integer
        0,
        // Version number
        48,
        // ASN.1 sequence tag
        5,
        // Length of sequence
        6,
        // ASN.1 object identifier tag
        3,
        // Length of object identifier
        // Edwards curve algorithms identifier https://oid-rep.orange-labs.fr/get/1.3.101.112
        43,
        // iso(1) / identified-organization(3) (The first node is multiplied by the decimal 40 and the result is added to the value of the second node)
        101,
        // thawte(101)
        // Ed25519 identifier
        112,
        // id-Ed25519(112)
        /**
     * Private key payload
     */ 4,
        // ASN.1 octet string tag
        34,
        // String length (34 more bytes)
        // Private key bytes as octet string
        4,
        // ASN.1 octet string tag
        32,
        // String length (32 bytes)
        ...bytes
    ]);
}
async function createPrivateKeyFromBytes(bytes, extractable = false) {
    const actualLength = bytes.byteLength;
    if (actualLength !== 32) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__INVALID_PRIVATE_KEY_BYTE_LENGTH"], {
            actualLength
        });
    }
    const privateKeyBytesPkcs8 = addPkcs8Header(bytes);
    return await crypto.subtle.importKey("pkcs8", privateKeyBytesPkcs8, ED25519_ALGORITHM_IDENTIFIER, extractable, [
        "sign"
    ]);
}
async function getPublicKeyFromPrivateKey(privateKey, extractable = false) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertKeyExporterIsAvailable"])();
    if (privateKey.extractable === false) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SUBTLE_CRYPTO__CANNOT_EXPORT_NON_EXTRACTABLE_KEY"], {
            key: privateKey
        });
    }
    const jwk = await crypto.subtle.exportKey("jwk", privateKey);
    return await crypto.subtle.importKey("jwk", {
        crv: "Ed25519",
        ext: extractable,
        key_ops: [
            "verify"
        ],
        kty: "OKP",
        x: jwk.x
    }, "Ed25519", extractable, [
        "verify"
    ]);
}
var base58Encoder;
function assertIsSignature(putativeSignature) {
    if (!base58Encoder) base58Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Encoder"])();
    if (// Lowest value (64 bytes of zeroes)
    putativeSignature.length < 64 || // Highest value (64 bytes of 255)
    putativeSignature.length > 88) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__SIGNATURE_STRING_LENGTH_OUT_OF_RANGE"], {
            actualLength: putativeSignature.length
        });
    }
    const bytes = base58Encoder.encode(putativeSignature);
    const numBytes = bytes.byteLength;
    if (numBytes !== 64) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__INVALID_SIGNATURE_BYTE_LENGTH"], {
            actualLength: numBytes
        });
    }
}
function isSignature(putativeSignature) {
    if (!base58Encoder) base58Encoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Encoder"])();
    if (// Lowest value (64 bytes of zeroes)
    putativeSignature.length < 64 || // Highest value (64 bytes of 255)
    putativeSignature.length > 88) {
        return false;
    }
    const bytes = base58Encoder.encode(putativeSignature);
    const numBytes = bytes.byteLength;
    if (numBytes !== 64) {
        return false;
    }
    return true;
}
async function signBytes(key, data) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertSigningCapabilityIsAvailable"])();
    const signedData = await crypto.subtle.sign(ED25519_ALGORITHM_IDENTIFIER, key, data);
    return new Uint8Array(signedData);
}
function signature(putativeSignature) {
    assertIsSignature(putativeSignature);
    return putativeSignature;
}
async function verifySignature(key, signature2, data) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertVerificationCapabilityIsAvailable"])();
    return await crypto.subtle.verify(ED25519_ALGORITHM_IDENTIFIER, key, signature2, data);
}
// src/key-pair.ts
async function generateKeyPair() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertKeyGenerationIsAvailable"])();
    const keyPair = await crypto.subtle.generateKey(/* algorithm */ ED25519_ALGORITHM_IDENTIFIER, // Native implementation status: https://github.com/WICG/webcrypto-secure-curves/issues/20
    /* extractable */ false, // Prevents the bytes of the private key from being visible to JS.
    /* allowed uses */ [
        "sign",
        "verify"
    ]);
    return keyPair;
}
async function createKeyPairFromBytes(bytes, extractable = false) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$assertions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertPRNGIsAvailable"])();
    if (bytes.byteLength !== 64) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__INVALID_KEY_PAIR_BYTE_LENGTH"], {
            byteLength: bytes.byteLength
        });
    }
    const [publicKey, privateKey] = await Promise.all([
        crypto.subtle.importKey("raw", bytes.slice(32), ED25519_ALGORITHM_IDENTIFIER, /* extractable */ true, [
            "verify"
        ]),
        createPrivateKeyFromBytes(bytes.slice(0, 32), extractable)
    ]);
    const randomBytes = new Uint8Array(32);
    crypto.getRandomValues(randomBytes);
    const signedData = await signBytes(privateKey, randomBytes);
    const isValid = await verifySignature(publicKey, signedData, randomBytes);
    if (!isValid) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__KEYS__PUBLIC_KEY_MUST_MATCH_PRIVATE_KEY"]);
    }
    return {
        privateKey,
        publicKey
    };
}
async function createKeyPairFromPrivateKeyBytes(bytes, extractable = false) {
    const privateKeyPromise = createPrivateKeyFromBytes(bytes, extractable);
    const [publicKey, privateKey] = await Promise.all([
        // This nested promise makes things efficient by
        // creating the public key in parallel with the
        // second private key creation, if it is needed.
        (extractable ? privateKeyPromise : createPrivateKeyFromBytes(bytes, true)).then(async (privateKey2)=>await getPublicKeyFromPrivateKey(privateKey2, true)),
        privateKeyPromise
    ]);
    return {
        privateKey,
        publicKey
    };
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/transactions/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRANSACTION_PACKET_HEADER",
    ()=>TRANSACTION_PACKET_HEADER,
    "TRANSACTION_PACKET_SIZE",
    ()=>TRANSACTION_PACKET_SIZE,
    "TRANSACTION_SIZE_LIMIT",
    ()=>TRANSACTION_SIZE_LIMIT,
    "assertIsFullySignedTransaction",
    ()=>assertIsFullySignedTransaction,
    "assertIsSendableTransaction",
    ()=>assertIsSendableTransaction,
    "assertIsTransactionMessageWithinSizeLimit",
    ()=>assertIsTransactionMessageWithinSizeLimit,
    "assertIsTransactionWithinSizeLimit",
    ()=>assertIsTransactionWithinSizeLimit,
    "compileTransaction",
    ()=>compileTransaction,
    "getBase64EncodedWireTransaction",
    ()=>getBase64EncodedWireTransaction,
    "getSignatureFromTransaction",
    ()=>getSignatureFromTransaction,
    "getTransactionCodec",
    ()=>getTransactionCodec,
    "getTransactionDecoder",
    ()=>getTransactionDecoder,
    "getTransactionEncoder",
    ()=>getTransactionEncoder,
    "getTransactionMessageSize",
    ()=>getTransactionMessageSize,
    "getTransactionSize",
    ()=>getTransactionSize,
    "isFullySignedTransaction",
    ()=>isFullySignedTransaction,
    "isSendableTransaction",
    ()=>isSendableTransaction,
    "isTransactionMessageWithinSizeLimit",
    ()=>isTransactionMessageWithinSizeLimit,
    "isTransactionWithinSizeLimit",
    ()=>isTransactionWithinSizeLimit,
    "partiallySignTransaction",
    ()=>partiallySignTransaction,
    "signTransaction",
    ()=>signTransaction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-data-structures/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/transaction-messages/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/keys/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
// src/codecs/transaction-codec.ts
function getSignaturesToEncode(signaturesMap) {
    const signatures = Object.values(signaturesMap);
    if (signatures.length === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__CANNOT_ENCODE_WITH_EMPTY_SIGNATURES"]);
    }
    return signatures.map((signature)=>{
        if (!signature) {
            return new Uint8Array(64).fill(0);
        }
        return signature;
    });
}
function getSignaturesEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixEncoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesEncoder"])(), 64), {
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Encoder"])()
    }), getSignaturesToEncode);
}
// src/codecs/transaction-codec.ts
function getTransactionEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "signatures",
            getSignaturesEncoder()
        ],
        [
            "messageBytes",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesEncoder"])()
        ]
    ]);
}
function getTransactionDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "signatures",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixDecoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesDecoder"])(), 64), {
                size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Decoder"])()
            })
        ],
        [
            "messageBytes",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBytesDecoder"])()
        ]
    ]), decodePartiallyDecodedTransaction);
}
function getTransactionCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getTransactionEncoder(), getTransactionDecoder());
}
function decodePartiallyDecodedTransaction(transaction) {
    const { messageBytes, signatures } = transaction;
    const signerAddressesDecoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTupleDecoder"])([
        // read transaction version
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionVersionDecoder"])(),
        // read first byte of header, `numSignerAccounts`
        // padRight to skip the next 2 bytes, `numReadOnlySignedAccounts` and `numReadOnlyUnsignedAccounts` which we don't need
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["padRightDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])(), 2),
        // read static addresses
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])(), {
            size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getShortU16Decoder"])()
        })
    ]);
    const [_txVersion, numRequiredSignatures, staticAddresses] = signerAddressesDecoder.decode(messageBytes);
    const signerAddresses = staticAddresses.slice(0, numRequiredSignatures);
    if (signerAddresses.length !== signatures.length) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__MESSAGE_SIGNATURES_MISMATCH"], {
            numRequiredSignatures,
            signaturesLength: signatures.length,
            signerAddresses
        });
    }
    const signaturesMap = {};
    signerAddresses.forEach((address, index)=>{
        const signatureForAddress = signatures[index];
        if (signatureForAddress.every((b)=>b === 0)) {
            signaturesMap[address] = null;
        } else {
            signaturesMap[address] = signatureForAddress;
        }
    });
    return {
        messageBytes,
        signatures: Object.freeze(signaturesMap)
    };
}
function compileTransaction(transactionMessage) {
    const compiledMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileTransactionMessage"])(transactionMessage);
    const messageBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCompiledTransactionMessageEncoder"])().encode(compiledMessage);
    const transactionSigners = compiledMessage.staticAccounts.slice(0, compiledMessage.header.numSignerAccounts);
    const signatures = {};
    for (const signerAddress of transactionSigners){
        signatures[signerAddress] = null;
    }
    let lifetimeConstraint;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransactionMessageWithBlockhashLifetime"])(transactionMessage)) {
        lifetimeConstraint = {
            blockhash: transactionMessage.lifetimeConstraint.blockhash,
            lastValidBlockHeight: transactionMessage.lifetimeConstraint.lastValidBlockHeight
        };
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransactionMessageWithDurableNonceLifetime"])(transactionMessage)) {
        lifetimeConstraint = {
            nonce: transactionMessage.lifetimeConstraint.nonce,
            nonceAccountAddress: transactionMessage.instructions[0].accounts[0].address
        };
    }
    return Object.freeze({
        ...lifetimeConstraint ? {
            lifetimeConstraint
        } : void 0,
        messageBytes,
        signatures: Object.freeze(signatures)
    });
}
var base58Decoder;
function getSignatureFromTransaction(transaction) {
    if (!base58Decoder) base58Decoder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Decoder"])();
    const signatureBytes = Object.values(transaction.signatures)[0];
    if (!signatureBytes) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__FEE_PAYER_SIGNATURE_MISSING"]);
    }
    const transactionSignature = base58Decoder.decode(signatureBytes);
    return transactionSignature;
}
function uint8ArraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, index)=>value === arr2[index]);
}
async function partiallySignTransaction(keyPairs, transaction) {
    let newSignatures;
    let unexpectedSigners;
    await Promise.all(keyPairs.map(async (keyPair)=>{
        const address = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressFromPublicKey"])(keyPair.publicKey);
        const existingSignature = transaction.signatures[address];
        if (existingSignature === void 0) {
            unexpectedSigners ||= /* @__PURE__ */ new Set();
            unexpectedSigners.add(address);
            return;
        }
        if (unexpectedSigners) {
            return;
        }
        const newSignature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signBytes"])(keyPair.privateKey, transaction.messageBytes);
        if (existingSignature !== null && uint8ArraysEqual(newSignature, existingSignature)) {
            return;
        }
        newSignatures ||= {};
        newSignatures[address] = newSignature;
    }));
    if (unexpectedSigners && unexpectedSigners.size > 0) {
        const expectedSigners = Object.keys(transaction.signatures);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__ADDRESSES_CANNOT_SIGN_TRANSACTION"], {
            expectedAddresses: expectedSigners,
            unexpectedAddresses: [
                ...unexpectedSigners
            ]
        });
    }
    if (!newSignatures) {
        return transaction;
    }
    return Object.freeze({
        ...transaction,
        signatures: Object.freeze({
            ...transaction.signatures,
            ...newSignatures
        })
    });
}
async function signTransaction(keyPairs, transaction) {
    const out = await partiallySignTransaction(keyPairs, transaction);
    assertIsFullySignedTransaction(out);
    Object.freeze(out);
    return out;
}
function isFullySignedTransaction(transaction) {
    return Object.entries(transaction.signatures).every(([_, signatureBytes])=>!!signatureBytes);
}
function assertIsFullySignedTransaction(transaction) {
    const missingSigs = [];
    Object.entries(transaction.signatures).forEach(([address, signatureBytes])=>{
        if (!signatureBytes) {
            missingSigs.push(address);
        }
    });
    if (missingSigs.length > 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__SIGNATURES_MISSING"], {
            addresses: missingSigs
        });
    }
}
function getBase64EncodedWireTransaction(transaction) {
    const wireTransactionBytes = getTransactionEncoder().encode(transaction);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64Decoder"])().decode(wireTransactionBytes);
}
var TRANSACTION_PACKET_SIZE = 1280;
var TRANSACTION_PACKET_HEADER = 40 + 8;
var TRANSACTION_SIZE_LIMIT = TRANSACTION_PACKET_SIZE - TRANSACTION_PACKET_HEADER;
function getTransactionSize(transaction) {
    return getTransactionEncoder().getSizeFromValue(transaction);
}
function isTransactionWithinSizeLimit(transaction) {
    return getTransactionSize(transaction) <= TRANSACTION_SIZE_LIMIT;
}
function assertIsTransactionWithinSizeLimit(transaction) {
    const transactionSize = getTransactionSize(transaction);
    if (transactionSize > TRANSACTION_SIZE_LIMIT) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT"], {
            transactionSize,
            transactionSizeLimit: TRANSACTION_SIZE_LIMIT
        });
    }
}
// src/sendable-transaction.ts
function isSendableTransaction(transaction) {
    return isFullySignedTransaction(transaction) && isTransactionWithinSizeLimit(transaction);
}
function assertIsSendableTransaction(transaction) {
    assertIsFullySignedTransaction(transaction);
    assertIsTransactionWithinSizeLimit(transaction);
}
function getTransactionMessageSize(transactionMessage) {
    return getTransactionSize(compileTransaction(transactionMessage));
}
function isTransactionMessageWithinSizeLimit(transactionMessage) {
    return getTransactionMessageSize(transactionMessage) <= TRANSACTION_SIZE_LIMIT;
}
function assertIsTransactionMessageWithinSizeLimit(transactionMessage) {
    const transactionSize = getTransactionMessageSize(transactionMessage);
    if (transactionSize > TRANSACTION_SIZE_LIMIT) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__TRANSACTION__EXCEEDS_SIZE_LIMIT"], {
            transactionSize,
            transactionSizeLimit: TRANSACTION_SIZE_LIMIT
        });
    }
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useSolanaRpcClient-Brcjny8C.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>c,
    "b",
    ()=>f,
    "f",
    ()=>l,
    "g",
    ()=>m,
    "s",
    ()=>u,
    "u",
    ()=>d,
    "w",
    ()=>p
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/transactions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/context-DRLoVlsO.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/internal-context-e-Eni5bG.mjs [app-ssr] (ecmascript)");
;
;
;
;
function c(n) {
    return new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionDecoder"])().decode(n).messageBytes);
}
async function l({ solanaClient: r, tx: e }) {
    let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64Decoder"])().decode(c(e)), { value: t } = await r.rpc.getFeeForMessage(o).send();
    return t ?? 0n;
}
async function u({ solanaClient: r, tx: e, replaceRecentBlockhash: o }) {
    let { value: t } = await r.rpc.simulateTransaction((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64Decoder"])().decode(e), {
        commitment: "confirmed",
        encoding: "base64",
        sigVerify: !1,
        replaceRecentBlockhash: o
    }).send();
    if ("BlockhashNotFound" === t.err && o) throw Error("Simulation failed: Blockhash not found");
    return "BlockhashNotFound" === t.err ? await u({
        solanaClient: r,
        tx: e,
        replaceRecentBlockhash: !0
    }) : {
        logs: t.logs ?? [],
        error: t.err,
        hasError: !!t.err,
        hasFunds: t.logs?.every((r)=>!/insufficient funds/gi.test(r) && !/insufficient lamports/gi.test(r)) ?? !0
    };
}
const f = (...r)=>{
    if ("undefined" == typeof Buffer) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("Buffer is not defined.", void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].BUFFER_NOT_DEFINED);
    return Buffer.from(...r);
};
async function p({ rpcSubscriptions: r, signature: n, timeout: e }) {
    let o = new AbortController, t = await r.signatureNotifications(n, {
        commitment: "confirmed"
    }).subscribe({
        abortSignal: o.signal
    }), a = await Promise.race([
        new Promise((r)=>{
            setTimeout(()=>{
                o.abort(), r(Error("Transaction confirmation timed out"));
            }, e);
        }),
        new Promise(async (r)=>{
            for await (let n of t){
                if (o.abort(), n.value.err) return r(Error("Transaction confirmation failed"));
                r(void 0);
            }
        })
    ]);
    if (a instanceof Error) throw a;
}
function m({ rpc: r, rpcSubscriptions: n, chain: o, blockExplorerUrl: t }) {
    let a = function({ rpc: r, rpcSubscriptions: n }) {
        return async (o)=>new Promise(async (t, a)=>{
                try {
                    let a = await r.sendTransaction(f(o).toString("base64"), {
                        preflightCommitment: "confirmed",
                        encoding: "base64"
                    }).send();
                    await p({
                        rpcSubscriptions: n,
                        signature: a,
                        timeout: 1e4
                    }), t({
                        signature: new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Encoder"])().encode(a))
                    });
                } catch (r) {
                    a(r);
                }
            });
    }({
        rpc: r,
        rpcSubscriptions: n
    });
    return {
        rpc: r,
        rpcSubscriptions: n,
        chain: o,
        blockExplorerUrl: t,
        sendAndConfirmTransaction: a
    };
}
function d() {
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Object.fromEntries([
            "solana:mainnet",
            "solana:devnet",
            "solana:testnet"
        ].map((n)=>[
                n,
                r.solanaRpcs[n] ? m({
                    chain: n,
                    rpc: r.solanaRpcs[n].rpc,
                    rpcSubscriptions: r.solanaRpcs[n].rpcSubscriptions,
                    blockExplorerUrl: r.solanaRpcs[n].blockExplorerUrl ?? `https://explorer.solana.com?cluster=${n.replace("solana:", "")}`
                }) : null
            ])), [
        r.solanaRpcs
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((r)=>{
        if (!n[r]) throw Error(`No RPC configuration found for chain ${r}`);
        return n[r];
    }, [
        n
    ]);
}
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useWallets-D4IJeaog.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "S",
    ()=>P,
    "a",
    ()=>ve,
    "g",
    ()=>C,
    "u",
    ()=>me
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/transactions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$client$2f$Privy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/js-sdk-core/dist/esm/client/Privy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$wallet$2d$api$2f$rpc$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/js-sdk-core/dist/esm/wallet-api/rpc.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$solana$2f$ConnectedStandardSolanaWallet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/js-sdk-core/dist/esm/solana/ConnectedStandardSolanaWallet.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/internal-context-e-Eni5bG.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/get-is-unified-wallet-gMDXpX6C.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/usePrivy-BWtc2XF-.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useWallets-kObl6ZLS.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$scure$2f$base$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@scure/base/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/context-DRLoVlsO.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$use$2d$sign$2d$with$2d$user$2d$signer$2d$eEm9Olt_$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/use-sign-with-user-signer-eEm9Olt_.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$prepareFundingModalData$2d$BVTcQcmw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/prepareFundingModalData-BVTcQcmw.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useSolanaRpcClient-Brcjny8C.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const P = [
    "solana:mainnet",
    "solana:devnet",
    "solana:testnet"
];
function C(n) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Decoder"])().decode(n);
}
function F(e, n) {
    if (!Object.prototype.hasOwnProperty.call(e, n)) throw TypeError("attempted to use private field on non-instance");
    return e;
}
var U = 0, D = "__private_" + U++ + "__implementation";
function N(e, n) {
    if (!Object.prototype.hasOwnProperty.call(e, n)) throw TypeError("attempted to use private field on non-instance");
    return e;
}
var B = 0;
function R(e) {
    return "__private_" + B++ + "_" + e;
}
var x = /*#__PURE__*/ R("_address"), L = /*#__PURE__*/ R("_publicKey"), V = /*#__PURE__*/ R("_chains"), Q = /*#__PURE__*/ R("_features"), G = /*#__PURE__*/ R("_label"), K = /*#__PURE__*/ R("_icon");
class J {
    get address() {
        return N(this, x)[x];
    }
    get publicKey() {
        return N(this, L)[L].slice();
    }
    get chains() {
        return N(this, V)[V].slice();
    }
    get features() {
        return N(this, Q)[Q].slice();
    }
    get label() {
        return N(this, G)[G];
    }
    get icon() {
        return N(this, K)[K];
    }
    constructor({ address: e, publicKey: n, label: t, icon: a }){
        Object.defineProperty(this, x, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, L, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, V, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, Q, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, G, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, K, {
            writable: !0,
            value: void 0
        }), N(this, x)[x] = e, N(this, L)[L] = n, N(this, V)[V] = P, N(this, G)[G] = t, N(this, K)[K] = a, N(this, Q)[Q] = [
            "solana:signAndSendTransaction",
            "solana:signTransaction",
            "solana:signMessage"
        ], new.target === J && Object.freeze(this);
    }
}
function Y(e, n) {
    if (!Object.prototype.hasOwnProperty.call(e, n)) throw TypeError("attempted to use private field on non-instance");
    return e;
}
var k = 0;
function H(e) {
    return "__private_" + k++ + "_" + e;
}
var Z = /*#__PURE__*/ H("_listeners"), z = /*#__PURE__*/ H("_version"), q = /*#__PURE__*/ H("_name"), X = /*#__PURE__*/ H("_icon"), $ = /*#__PURE__*/ H("_injection"), ee = /*#__PURE__*/ H("_isPrivyWallet"), ne = /*#__PURE__*/ H("_accounts"), te = /*#__PURE__*/ H("_on"), ae = /*#__PURE__*/ H("_emit"), se = /*#__PURE__*/ H("_off"), ie = /*#__PURE__*/ H("_connected"), re = /*#__PURE__*/ H("_connect"), oe = /*#__PURE__*/ H("_disconnect"), ce = /*#__PURE__*/ H("_signMessage"), le = /*#__PURE__*/ H("_signAndSendTransaction"), de = /*#__PURE__*/ H("_signTransaction");
function ue(e, ...n) {
    Y(this, Z)[Z][e]?.forEach((e)=>e.apply(null, n));
}
function ge(e, n) {
    Y(this, Z)[Z][e] = Y(this, Z)[Z][e]?.filter((e)=>n !== e);
}
function he(e, s, i) {
    let r = structuredClone((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionDecoder"])().decode(e)), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["address"])(s);
    return o in r.signatures && (r.signatures[o] = i), new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionEncoder"])().encode(r));
}
function pe() {
    let { isHeadlessSigning: e, walletProxy: n, initializeWalletProxy: t, recoverEmbeddedWallet: a, openModal: s, privy: i, client: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), { user: o } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), { setModalData: l } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(), { signWithUserSigner: h } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$use$2d$sign$2d$with$2d$user$2d$signer$2d$eEm9Olt_$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])();
    return {
        signMessage: ({ message: d, address: p, options: A })=>new Promise(async (y, v)=>{
                let T = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(o, p);
                if ("privy" !== T?.walletClientType) return void v(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("Wallet is not a Privy wallet", void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].EMBEDDED_WALLET_NOT_FOUND));
                let { entropyId: b, entropyIdVerifier: O } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(o, T), S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(T), _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(d).toString("base64");
                if (_.length < 1) return void v(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("Message must be a non-empty string", void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].INVALID_MESSAGE));
                let E = async ()=>{
                    let e;
                    if (!o) throw Error("User must be authenticated before signing with a Privy wallet");
                    let s = await r.getAccessToken();
                    if (!s) throw Error("User must be authenticated to use their embedded wallet.");
                    let l = n ?? await t(15e3);
                    if (!l) throw Error("Failed to initialize embedded wallet proxy.");
                    if (!await a({
                        address: T.address
                    })) throw Error("Unable to connect to wallet");
                    if (S) {
                        let n = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$wallet$2d$api$2f$rpc$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rpc"])(i, h, {
                            chain_type: "solana",
                            method: "signMessage",
                            params: {
                                message: _,
                                encoding: "base64"
                            },
                            wallet_id: T.id
                        });
                        if (!n.data || !("signature" in n.data)) throw Error("Failed to sign message");
                        e = n.data.signature;
                    } else {
                        let { response: n } = await l.rpc({
                            accessToken: s,
                            entropyId: b,
                            entropyIdVerifier: O,
                            chainType: "solana",
                            hdWalletIndex: T.walletIndex ?? 0,
                            requesterAppId: A?.uiOptions?.requesterAppId,
                            request: {
                                method: "signMessage",
                                params: {
                                    message: _
                                }
                            }
                        });
                        e = n.data.signature;
                    }
                    return e;
                };
                if (e({
                    showWalletUIs: A?.uiOptions?.showWalletUIs
                })) try {
                    let e = await E(), n = new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(e, "base64"));
                    y({
                        signature: n
                    });
                } catch (e) {
                    v(e);
                }
                else l({
                    signMessage: {
                        method: "solana_signMessage",
                        data: _,
                        confirmAndSign: E,
                        onSuccess: (e)=>{
                            y({
                                signature: new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(e, "base64"))
                            });
                        },
                        onFailure: (e)=>{
                            v(e);
                        },
                        uiOptions: A?.uiOptions ?? {}
                    },
                    connectWallet: {
                        recoveryMethod: T.recoveryMethod,
                        connectingWalletAddress: T.address,
                        entropyId: b,
                        entropyIdVerifier: O,
                        isUnifiedWallet: S,
                        onCompleteNavigateTo: "SignRequestScreen",
                        onFailure: (e)=>{
                            v(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("Failed to connect to wallet", e, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].UNKNOWN_CONNECT_WALLET_ERROR));
                        }
                    }
                }), s("EmbeddedWalletConnectingScreen");
            })
    };
}
function fe() {
    let { isHeadlessSigning: e, openModal: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), { setModalData: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(), { signMessage: a } = pe(), { user: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])();
    return {
        signTransaction: async ({ transaction: i, options: r, chain: o = "solana:mainnet", address: c })=>{
            async function l(e) {
                let { signature: n } = await a({
                    message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(e),
                    address: c,
                    options: {
                        ...r,
                        uiOptions: {
                            ...r?.uiOptions,
                            showWalletUIs: !1
                        }
                    }
                });
                return {
                    signedTransaction: he(e, c, n)
                };
            }
            return e({
                showWalletUIs: r?.uiOptions?.showWalletUIs
            }) ? l(i) : new Promise(async (e, a)=>{
                let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(s, c);
                if ("privy" !== d?.walletClientType) return void a(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("Wallet is not a Privy wallet", void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].EMBEDDED_WALLET_NOT_FOUND));
                let { entropyId: h, entropyIdVerifier: p } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(s, d), A = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(d);
                function y(e) {
                    return (n)=>{
                        a(n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"] ? n : new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("Failed to connect to wallet", n, e));
                    };
                }
                let v = {
                    account: d,
                    transaction: i,
                    chain: o,
                    signOnly: !0,
                    uiOptions: r?.uiOptions || {},
                    onConfirm: l,
                    onSuccess: e,
                    onFailure: y(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].TRANSACTION_FAILURE)
                };
                t({
                    connectWallet: {
                        recoveryMethod: d.recoveryMethod,
                        connectingWalletAddress: d.address,
                        entropyId: h,
                        entropyIdVerifier: p,
                        isUnifiedWallet: A,
                        onCompleteNavigateTo: "StandardSignAndSendTransactionScreen",
                        onFailure: y(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].UNKNOWN_CONNECT_WALLET_ERROR)
                    },
                    standardSignAndSendTransaction: v
                }), n("EmbeddedWalletConnectingScreen");
            });
        }
    };
}
let we = new class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"] {
    setImplementation(e) {
        F(this, D)[D] = e;
    }
    async signMessage(e) {
        return F(this, D)[D].signMessage(e);
    }
    async signAndSendTransaction(e) {
        return F(this, D)[D].signAndSendTransaction(e);
    }
    async signTransaction(e) {
        return F(this, D)[D].signTransaction(e);
    }
    constructor(e){
        super(), Object.defineProperty(this, D, {
            writable: !0,
            value: void 0
        }), F(this, D)[D] = e;
    }
}({
    signTransaction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])("signTransaction was not injected"),
    signAndSendTransaction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])("signAndSendTransaction was not injected"),
    signMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])("signMessage was not injected")
}), Ae = new class {
    get version() {
        return Y(this, z)[z];
    }
    get name() {
        return Y(this, q)[q];
    }
    get icon() {
        return Y(this, X)[X];
    }
    get chains() {
        return P.slice();
    }
    get features() {
        return {
            "standard:connect": {
                version: "1.0.0",
                connect: Y(this, re)[re]
            },
            "standard:disconnect": {
                version: "1.0.0",
                disconnect: Y(this, oe)[oe]
            },
            "standard:events": {
                version: "1.0.0",
                on: Y(this, te)[te]
            },
            "solana:signAndSendTransaction": {
                version: "1.0.0",
                supportedTransactionVersions: [
                    "legacy",
                    0
                ],
                signAndSendTransaction: Y(this, le)[le]
            },
            "solana:signTransaction": {
                version: "1.0.0",
                supportedTransactionVersions: [
                    "legacy",
                    0
                ],
                signTransaction: Y(this, de)[de]
            },
            "solana:signMessage": {
                version: "1.0.0",
                signMessage: Y(this, ce)[ce]
            },
            "privy:": {
                privy: {
                    signMessage: Y(this, $)[$].signMessage,
                    signTransaction: Y(this, $)[$].signTransaction,
                    signAndSendTransaction: Y(this, $)[$].signAndSendTransaction
                }
            }
        };
    }
    get accounts() {
        return Y(this, ne)[ne].slice();
    }
    get isPrivyWallet() {
        return Y(this, ee)[ee];
    }
    constructor({ name: e, icon: n, version: t, injection: a, wallets: s }){
        Object.defineProperty(this, ae, {
            value: ue
        }), Object.defineProperty(this, se, {
            value: ge
        }), Object.defineProperty(this, Z, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, z, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, q, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, X, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, $, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, ee, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, ne, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, te, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, ie, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, re, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, oe, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, ce, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, le, {
            writable: !0,
            value: void 0
        }), Object.defineProperty(this, de, {
            writable: !0,
            value: void 0
        }), Y(this, Z)[Z] = {}, Y(this, te)[te] = (e, n)=>(Y(this, Z)[Z][e]?.push(n) || (Y(this, Z)[Z][e] = [
                n
            ]), ()=>Y(this, se)[se](e, n)), Y(this, ie)[ie] = (e)=>{
            null != e && (Y(this, ne)[ne] = e.map(({ address: e })=>new J({
                    address: e,
                    publicKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$scure$2f$base$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base58"].decode(e)
                }))), Y(this, ae)[ae]("change", {
                accounts: this.accounts
            });
        }, Y(this, re)[re] = async ()=>(Y(this, ae)[ae]("change", {
                accounts: this.accounts
            }), {
                accounts: this.accounts
            }), Y(this, oe)[oe] = async ()=>{
            Y(this, ae)[ae]("change", {
                accounts: this.accounts
            });
        }, Y(this, ce)[ce] = async (...e)=>{
            let n = [];
            for (let { account: t, ...a } of e){
                let { signature: e } = await Y(this, $)[$].signMessage({
                    ...a,
                    address: t.address
                });
                n.push({
                    signedMessage: a.message,
                    signature: e
                });
            }
            return n;
        }, Y(this, le)[le] = async (...e)=>{
            let n = [];
            for (let t of e){
                let { signature: e } = await Y(this, $)[$].signAndSendTransaction({
                    ...t,
                    transaction: t.transaction,
                    address: t.account.address,
                    chain: t.chain || "solana:mainnet",
                    options: t.options
                });
                n.push({
                    signature: e
                });
            }
            return n;
        }, Y(this, de)[de] = async (...e)=>{
            let n = [];
            for (let { transaction: t, account: a, options: s, chain: i } of e){
                let { signedTransaction: e } = await Y(this, $)[$].signTransaction({
                    transaction: t,
                    address: a.address,
                    chain: i || "solana:mainnet",
                    options: s
                });
                n.push({
                    signedTransaction: e
                });
            }
            return n;
        }, Y(this, q)[q] = e, Y(this, X)[X] = n, Y(this, z)[z] = t, Y(this, $)[$] = a, Y(this, ne)[ne] = [], Y(this, ee)[ee] = !0, a.on("accountChanged", Y(this, ie)[ie], this), Y(this, ie)[ie](s);
    }
}({
    name: "Privy",
    version: "1.0.0",
    icon: "data:image/png;base64,AAABAAEAFBQAAAAAIABlAQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAUAAAAFAgGAAAAjYkdDQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAQVJREFUeJxiYMANZIC4E4ivAPFPIP4FxDeAuB+IlfDowwBMQFwJxF+B+D8O/AOI66Bq8QJGIF6ExyB0vAqImfEZmEeCYTDcgMswPiB+T4aB34FYApuBsWQYBsP52AycToGBK7EZuJECAw9jM3AVBQbuwWZgIwUGTsZmoDkFBnpiMxAEjpJh2FV8iVsbiD+TYBgoDVrgMgwGnID4HRGGgTKBGyHDYEAaiBdCSxh0g/5AU4Q8sYYhAzEgjoGmABBOgFo2eACowFABYn0oVgViAVINkQTiZUD8DIj/ATF6GILEXgLxCiCWIsZAbiAuBeKtQHwHiEHJ6C8UfwHie0C8E4jLoWpRAAAAAP//rcbhsQAAAAZJREFUAwBYFs3VKJ0cuQAAAABJRU5ErkJggg==",
    wallets: [],
    injection: we
});
function ye() {
    let { ready: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), { user: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), { signMessage: t } = pe(), { signTransaction: a } = fe(), { signAndSendTransaction: r } = function() {
        let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), { isHeadlessSigning: n, openModal: t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), { setModalData: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(), { signTransaction: s } = fe(), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), { user: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), { signWithUserSigner: l } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$use$2d$sign$2d$with$2d$user$2d$signer$2d$eEm9Olt_$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])();
        return {
            signAndSendTransaction: async ({ transaction: d, address: h, chain: p = "solana:mainnet", options: A })=>{
                let y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(r, h);
                if ("privy" !== y?.walletClientType) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("Wallet is not a Privy wallet", void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].EMBEDDED_WALLET_NOT_FOUND);
                let v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(y);
                async function T(n) {
                    if (A?.sponsor) return await (async (n)=>{
                        if (!v) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("Sponsoring transactions is only supported for wallets on the TEE stack", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].INVALID_DATA);
                        let t = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$client$2f$Privy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
                            appId: e.id,
                            clientId: e.appClientId,
                            storage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$prepareFundingModalData$2d$BVTcQcmw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"]
                        }), a = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$wallet$2d$api$2f$rpc$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rpc"])(t, l, {
                            chain_type: "solana",
                            method: "signAndSendTransaction",
                            sponsor: !0,
                            params: {
                                transaction: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(n).toString("base64"),
                                encoding: "base64"
                            },
                            caip2: `solana:${(await i(p).rpc.getGenesisHash().send()).substring(0, 32)}`,
                            wallet_id: y.id
                        });
                        if (a.data && "hash" in a.data) return {
                            signature: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$scure$2f$base$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base58"].decode(a.data.hash)
                        };
                        throw Error("Failed to sign and send transaction");
                    })(n);
                    let { signedTransaction: t } = await s({
                        transaction: n,
                        address: h,
                        chain: p,
                        options: {
                            ...A,
                            uiOptions: {
                                ...A?.uiOptions,
                                showWalletUIs: !1
                            }
                        }
                    }), { signature: a } = await i(p).sendAndConfirmTransaction(t);
                    return {
                        signature: a
                    };
                }
                return n({
                    showWalletUIs: A?.uiOptions?.showWalletUIs
                }) ? T(d) : new Promise(async (n, s)=>{
                    let i, o, { entropyId: c, entropyIdVerifier: l } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(r, y);
                    function f(e) {
                        return (n)=>{
                            s(n instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"] ? n : new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("Failed to connect to wallet", n, e));
                        };
                    }
                    let w = {
                        account: y,
                        transaction: d,
                        chain: p,
                        signOnly: !1,
                        uiOptions: A?.uiOptions || {},
                        onConfirm: T,
                        onSuccess: n,
                        onFailure: f(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].TRANSACTION_FAILURE),
                        isSponsored: !!A?.sponsor
                    }, b = {
                        recoveryMethod: y.recoveryMethod,
                        connectingWalletAddress: y.address,
                        entropyId: c,
                        entropyIdVerifier: l,
                        isUnifiedWallet: v,
                        onCompleteNavigateTo: "StandardSignAndSendTransactionScreen",
                        onFailure: f(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].UNKNOWN_CONNECT_WALLET_ERROR)
                    };
                    e.fundingConfig && (i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$prepareFundingModalData$2d$BVTcQcmw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])({
                        address: h,
                        appConfig: e,
                        methodScreen: "FundingMethodSelectionScreen",
                        fundWalletConfig: {
                            ...A,
                            asset: "native-currency",
                            chain: p
                        },
                        externalSolanaFundingScreen: "FundSolWalletWithExternalSolanaWallet"
                    }), o = {
                        amount: e.fundingConfig.defaultRecommendedAmount,
                        asset: "SOL",
                        chain: p,
                        destinationAddress: h,
                        afterSuccessScreen: "StandardSignAndSendTransactionScreen",
                        sourceWalletData: void 0
                    }), a({
                        connectWallet: b,
                        standardSignAndSendTransaction: w,
                        funding: i,
                        solanaFundingData: o
                    }), t("EmbeddedWalletConnectingScreen");
                });
            }
        };
    }(), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let e = [
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(n).sort((e, n)=>(e.walletIndex ?? 0) - (n.walletIndex ?? 0))
        ], t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(n);
        return t.length ? [
            ...e,
            ...t
        ] : e;
    }, [
        n
    ]), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            signMessage: async ({ message: e, address: n, options: a })=>await t({
                    message: e,
                    address: n,
                    options: a
                }),
            signTransaction: async ({ transaction: e, address: n, chain: t, options: s })=>await a({
                    transaction: e,
                    address: n,
                    chain: t,
                    options: s
                }),
            async signAndSendTransaction ({ transaction: e, address: n, chain: t, options: a }) {
                let { signature: s } = await r({
                    transaction: e,
                    address: n,
                    chain: t,
                    options: a
                });
                return {
                    signature: s
                };
            }
        }), [
        t,
        a,
        r
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        we?.setImplementation(h);
    }, [
        h
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var n;
        !e || (n = Ae.accounts).length === l.length && n.every((e, n)=>e.address === l[n]?.address) || we?.emit("accountChanged", l);
    }, [
        e,
        l
    ]), {
        ready: e,
        wallet: Ae
    };
}
function ve() {
    let { client: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), { ready: n, wallet: t } = ye(), [a, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]), [o, c] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let e = [
            t,
            ...a.filter((e)=>"solana" === e.chainType && !!e.wallet.features).map((e)=>e.wallet)
        ];
        c(e);
        let n = a.flatMap((n)=>{
            let t = ()=>c([
                    ...e
                ]);
            return n.on("walletsUpdated", t), {
                connector: n,
                off: t
            };
        }), s = e.map((n)=>n.features["standard:events"]?.on("change", ()=>{
                c([
                    ...e
                ]);
            }));
        return ()=>{
            s.forEach((e)=>e?.()), n.forEach(({ connector: e, off: n })=>e.off("walletsUpdated", n));
        };
    }, [
        a
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        s(e.connectors?.walletConnectors.filter((e)=>"solana" === e.chainType) ?? []);
        let n = ()=>{
            s(e.connectors?.walletConnectors.filter((e)=>"solana" === e.chainType) ?? []);
        };
        return e.connectors?.on("connectorInitialized", n), ()=>{
            e.connectors?.off("connectorInitialized", n);
        };
    }, [
        n,
        e.connectors
    ]), {
        ready: n,
        wallets: o
    };
}
function me() {
    let { ready: e, wallets: n } = ve();
    return {
        ready: e,
        wallets: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>n.flatMap((e)=>e.accounts.map((n)=>new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$solana$2f$ConnectedStandardSolanaWallet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectedStandardSolanaWallet"]({
                        wallet: e,
                        account: n
                    }))), [
            n
        ])
    };
}
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/add-chain-to-default-chains.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToDefaultChains",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$default$2d$supported$2d$chains$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/default-supported-chains.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function t(t) {
    let n = t.filter((o)=>!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$default$2d$supported$2d$chains$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SUPPORTED_CHAIN_IDS"].has(o.id));
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$default$2d$supported$2d$chains$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SUPPORTED_CHAINS"].concat(n);
}
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useGetSolPrice-Cfm8o9C5.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "u",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/internal-context-e-Eni5bG.mjs [app-ssr] (ecmascript)");
;
;
const t = ({ enabled: t = !0 } = {})=>{
    let { showFiatPrices: i, getUsdPriceForSol: a } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), [c, l] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!0), [s, n] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(void 0), [d, f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(void 0);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            if (i && t) try {
                l(!0);
                let r = await a();
                r ? f(r) : n(Error("Unable to fetch SOL price"));
            } catch (r) {
                n(r);
            } finally{
                l(!1);
            }
            else l(!1);
        })();
    }, []), {
        solPrice: d,
        isSolPriceLoading: c,
        solPriceError: s
    };
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useGetTokenPrice-CDPxMEO-.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "u",
    ()=>c
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$add$2d$chain$2d$to$2d$default$2d$chains$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/add-chain-to-default-chains.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/context-DRLoVlsO.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/internal-context-e-Eni5bG.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useGetSolPrice$2d$Cfm8o9C5$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useGetSolPrice-Cfm8o9C5.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function c(c) {
    let { tokenPrice: a, isTokenPriceLoading: s, tokenPriceError: l } = ((t)=>{
        let { showFiatPrices: c, getUsdTokenPrice: a, chains: s } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), [l, P] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!0), [d, k] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(void 0), [m, f] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(void 0);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            t ||= __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"];
            let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$add$2d$chain$2d$to$2d$default$2d$chains$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addToDefaultChains"])(s).find((r)=>r.id === Number(t));
            (async ()=>{
                if (c) {
                    if (!r) return P(!1), void k(Error(`Unable to fetch token price on chain id ${t}`));
                    try {
                        P(!0);
                        let e = await a(r);
                        e ? f(e) : k(Error(`Unable to fetch token price on chain id ${r.id}`));
                    } catch (r) {
                        k(r);
                    } finally{
                        P(!1);
                    }
                } else P(!1);
            })();
        }, [
            t
        ]), {
            tokenPrice: m,
            isTokenPriceLoading: l,
            tokenPriceError: d
        };
    })("solana" === c ? -1 : c), { solPrice: P, isSolPriceLoading: d, solPriceError: k } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useGetSolPrice$2d$Cfm8o9C5$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])({
        enabled: "solana" === c
    });
    return "solana" === c ? {
        tokenPrice: P,
        isTokenPriceLoading: d,
        tokenPriceError: k
    } : {
        tokenPrice: a,
        isTokenPriceLoading: s,
        tokenPriceError: l
    };
}
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/analytics-mkkvFRju.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "O",
    ()=>t
]);
const t = "sdk_fiat_on_ramp_completed_with_status";
;
}),
"[project]/Desktop/pincher/node_modules/@solana/accounts/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_ACCOUNT_SIZE",
    ()=>BASE_ACCOUNT_SIZE,
    "assertAccountDecoded",
    ()=>assertAccountDecoded,
    "assertAccountExists",
    ()=>assertAccountExists,
    "assertAccountsDecoded",
    ()=>assertAccountsDecoded,
    "assertAccountsExist",
    ()=>assertAccountsExist,
    "decodeAccount",
    ()=>decodeAccount,
    "fetchEncodedAccount",
    ()=>fetchEncodedAccount,
    "fetchEncodedAccounts",
    ()=>fetchEncodedAccounts,
    "fetchJsonParsedAccount",
    ()=>fetchJsonParsedAccount,
    "fetchJsonParsedAccounts",
    ()=>fetchJsonParsedAccounts,
    "parseBase58RpcAccount",
    ()=>parseBase58RpcAccount,
    "parseBase64RpcAccount",
    ()=>parseBase64RpcAccount,
    "parseJsonRpcAccount",
    ()=>parseJsonRpcAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
// src/account.ts
var BASE_ACCOUNT_SIZE = 128;
function decodeAccount(encodedAccount, decoder) {
    try {
        if ("exists" in encodedAccount && !encodedAccount.exists) {
            return encodedAccount;
        }
        return Object.freeze({
            ...encodedAccount,
            data: decoder.decode(encodedAccount.data)
        });
    } catch  {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ACCOUNTS__FAILED_TO_DECODE_ACCOUNT"], {
            address: encodedAccount.address
        });
    }
}
function accountExists(account) {
    return !("exists" in account) || "exists" in account && account.exists;
}
function assertAccountDecoded(account) {
    if (accountExists(account) && account.data instanceof Uint8Array) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ACCOUNTS__EXPECTED_DECODED_ACCOUNT"], {
            address: account.address
        });
    }
}
function assertAccountsDecoded(accounts) {
    const encoded = accounts.filter((a)=>accountExists(a) && a.data instanceof Uint8Array);
    if (encoded.length > 0) {
        const encodedAddresses = encoded.map((a)=>a.address);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ACCOUNTS__EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED"], {
            addresses: encodedAddresses
        });
    }
}
function parseBase64RpcAccount(address, rpcAccount) {
    if (!rpcAccount) return Object.freeze({
        address,
        exists: false
    });
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase64Encoder"])().encode(rpcAccount.data[0]);
    return Object.freeze({
        ...parseBaseAccount(rpcAccount),
        address,
        data,
        exists: true
    });
}
function parseBase58RpcAccount(address, rpcAccount) {
    if (!rpcAccount) return Object.freeze({
        address,
        exists: false
    });
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBase58Encoder"])().encode(typeof rpcAccount.data === "string" ? rpcAccount.data : rpcAccount.data[0]);
    return Object.freeze({
        ...parseBaseAccount(rpcAccount),
        address,
        data,
        exists: true
    });
}
function parseJsonRpcAccount(address, rpcAccount) {
    if (!rpcAccount) return Object.freeze({
        address,
        exists: false
    });
    const data = rpcAccount.data.parsed.info;
    return Object.freeze({
        ...parseBaseAccount(rpcAccount),
        address,
        data,
        exists: true
    });
}
function parseBaseAccount(rpcAccount) {
    return Object.freeze({
        executable: rpcAccount.executable,
        lamports: rpcAccount.lamports,
        programAddress: rpcAccount.owner,
        space: rpcAccount.space
    });
}
// src/fetch-account.ts
async function fetchEncodedAccount(rpc, address, config = {}) {
    const { abortSignal, ...rpcConfig } = config;
    const response = await rpc.getAccountInfo(address, {
        ...rpcConfig,
        encoding: "base64"
    }).send({
        abortSignal
    });
    return parseBase64RpcAccount(address, response.value);
}
async function fetchJsonParsedAccount(rpc, address, config = {}) {
    const { abortSignal, ...rpcConfig } = config;
    const { value: account } = await rpc.getAccountInfo(address, {
        ...rpcConfig,
        encoding: "jsonParsed"
    }).send({
        abortSignal
    });
    return !!account && typeof account === "object" && "parsed" in account.data ? parseJsonRpcAccount(address, account) : parseBase64RpcAccount(address, account);
}
async function fetchEncodedAccounts(rpc, addresses, config = {}) {
    const { abortSignal, ...rpcConfig } = config;
    const response = await rpc.getMultipleAccounts(addresses, {
        ...rpcConfig,
        encoding: "base64"
    }).send({
        abortSignal
    });
    return response.value.map((account, index)=>parseBase64RpcAccount(addresses[index], account));
}
async function fetchJsonParsedAccounts(rpc, addresses, config = {}) {
    const { abortSignal, ...rpcConfig } = config;
    const response = await rpc.getMultipleAccounts(addresses, {
        ...rpcConfig,
        encoding: "jsonParsed"
    }).send({
        abortSignal
    });
    return response.value.map((account, index)=>{
        return !!account && typeof account === "object" && "parsed" in account.data ? parseJsonRpcAccount(addresses[index], account) : parseBase64RpcAccount(addresses[index], account);
    });
}
function assertAccountExists(account) {
    if (!account.exists) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ACCOUNTS__ACCOUNT_NOT_FOUND"], {
            address: account.address
        });
    }
}
function assertAccountsExist(accounts) {
    const missingAccounts = accounts.filter((a)=>!a.exists);
    if (missingAccounts.length > 0) {
        const missingAddresses = missingAccounts.map((a)=>a.address);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__ACCOUNTS__ONE_OR_MORE_ACCOUNTS_NOT_FOUND"], {
            addresses: missingAddresses
        });
    }
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/programs/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isProgramError",
    ()=>isProgramError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
;
// src/program-error.ts
function isProgramError(error, transactionMessage, programAddress, code) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSolanaError"])(error, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__INSTRUCTION_ERROR__CUSTOM"])) {
        return false;
    }
    const instructionProgramAddress = transactionMessage.instructions[error.context.index]?.programAddress;
    if (!instructionProgramAddress || instructionProgramAddress !== programAddress) {
        return false;
    }
    return typeof code === "undefined" || error.context.code === code;
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/signers/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addSignersToInstruction",
    ()=>addSignersToInstruction,
    "addSignersToTransactionMessage",
    ()=>addSignersToTransactionMessage,
    "assertIsKeyPairSigner",
    ()=>assertIsKeyPairSigner,
    "assertIsMessageModifyingSigner",
    ()=>assertIsMessageModifyingSigner,
    "assertIsMessagePartialSigner",
    ()=>assertIsMessagePartialSigner,
    "assertIsMessageSigner",
    ()=>assertIsMessageSigner,
    "assertIsTransactionMessageWithSingleSendingSigner",
    ()=>assertIsTransactionMessageWithSingleSendingSigner,
    "assertIsTransactionModifyingSigner",
    ()=>assertIsTransactionModifyingSigner,
    "assertIsTransactionPartialSigner",
    ()=>assertIsTransactionPartialSigner,
    "assertIsTransactionSendingSigner",
    ()=>assertIsTransactionSendingSigner,
    "assertIsTransactionSigner",
    ()=>assertIsTransactionSigner,
    "createKeyPairSignerFromBytes",
    ()=>createKeyPairSignerFromBytes,
    "createKeyPairSignerFromPrivateKeyBytes",
    ()=>createKeyPairSignerFromPrivateKeyBytes,
    "createNoopSigner",
    ()=>createNoopSigner,
    "createSignableMessage",
    ()=>createSignableMessage,
    "createSignerFromKeyPair",
    ()=>createSignerFromKeyPair,
    "generateKeyPairSigner",
    ()=>generateKeyPairSigner,
    "getSignersFromInstruction",
    ()=>getSignersFromInstruction,
    "getSignersFromTransactionMessage",
    ()=>getSignersFromTransactionMessage,
    "isKeyPairSigner",
    ()=>isKeyPairSigner,
    "isMessageModifyingSigner",
    ()=>isMessageModifyingSigner,
    "isMessagePartialSigner",
    ()=>isMessagePartialSigner,
    "isMessageSigner",
    ()=>isMessageSigner,
    "isTransactionMessageWithSingleSendingSigner",
    ()=>isTransactionMessageWithSingleSendingSigner,
    "isTransactionModifyingSigner",
    ()=>isTransactionModifyingSigner,
    "isTransactionPartialSigner",
    ()=>isTransactionPartialSigner,
    "isTransactionSendingSigner",
    ()=>isTransactionSendingSigner,
    "isTransactionSigner",
    ()=>isTransactionSigner,
    "partiallySignTransactionMessageWithSigners",
    ()=>partiallySignTransactionMessageWithSigners,
    "setTransactionMessageFeePayerSigner",
    ()=>setTransactionMessageFeePayerSigner,
    "signAndSendTransactionMessageWithSigners",
    ()=>signAndSendTransactionMessageWithSigners,
    "signTransactionMessageWithSigners",
    ()=>signTransactionMessageWithSigners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/errors/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/instructions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/keys/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/transactions/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
// src/deduplicate-signers.ts
function deduplicateSigners(signers) {
    const deduplicated = {};
    signers.forEach((signer)=>{
        if (!deduplicated[signer.address]) {
            deduplicated[signer.address] = signer;
        } else if (deduplicated[signer.address] !== signer) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS"], {
                address: signer.address
            });
        }
    });
    return Object.values(deduplicated);
}
function isTransactionModifyingSigner(value) {
    return "modifyAndSignTransactions" in value && typeof value.modifyAndSignTransactions === "function";
}
function assertIsTransactionModifyingSigner(value) {
    if (!isTransactionModifyingSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_MODIFYING_SIGNER"], {
            address: value.address
        });
    }
}
function isTransactionPartialSigner(value) {
    return "signTransactions" in value && typeof value.signTransactions === "function";
}
function assertIsTransactionPartialSigner(value) {
    if (!isTransactionPartialSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_PARTIAL_SIGNER"], {
            address: value.address
        });
    }
}
function isTransactionSendingSigner(value) {
    return "signAndSendTransactions" in value && typeof value.signAndSendTransactions === "function";
}
function assertIsTransactionSendingSigner(value) {
    if (!isTransactionSendingSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SENDING_SIGNER"], {
            address: value.address
        });
    }
}
// src/transaction-signer.ts
function isTransactionSigner(value) {
    return isTransactionPartialSigner(value) || isTransactionModifyingSigner(value) || isTransactionSendingSigner(value);
}
function assertIsTransactionSigner(value) {
    if (!isTransactionSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_TRANSACTION_SIGNER"], {
            address: value.address
        });
    }
}
// src/account-signer-meta.ts
function getSignersFromInstruction(instruction) {
    return deduplicateSigners((instruction.accounts ?? []).flatMap((account)=>"signer" in account ? account.signer : []));
}
function getSignersFromTransactionMessage(transaction) {
    return deduplicateSigners([
        ...transaction.feePayer && isTransactionSigner(transaction.feePayer) ? [
            transaction.feePayer
        ] : [],
        ...transaction.instructions.flatMap(getSignersFromInstruction)
    ]);
}
function addSignersToInstruction(signers, instruction) {
    if (!instruction.accounts || instruction.accounts.length === 0) {
        return instruction;
    }
    const signerByAddress = new Map(deduplicateSigners(signers).map((signer)=>[
            signer.address,
            signer
        ]));
    return Object.freeze({
        ...instruction,
        accounts: instruction.accounts.map((account)=>{
            const signer = signerByAddress.get(account.address);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSignerRole"])(account.role) || "signer" in account || !signer) {
                return account;
            }
            return Object.freeze({
                ...account,
                signer
            });
        })
    });
}
function addSignersToTransactionMessage(signers, transactionMessage) {
    const feePayerSigner = hasAddressOnlyFeePayer(transactionMessage) ? signers.find((signer)=>signer.address === transactionMessage.feePayer.address) : void 0;
    if (!feePayerSigner && transactionMessage.instructions.length === 0) {
        return transactionMessage;
    }
    return Object.freeze({
        ...transactionMessage,
        ...feePayerSigner ? {
            feePayer: feePayerSigner
        } : null,
        instructions: transactionMessage.instructions.map((instruction)=>addSignersToInstruction(signers, instruction))
    });
}
function hasAddressOnlyFeePayer(message) {
    return !!message && "feePayer" in message && !!message.feePayer && typeof message.feePayer.address === "string" && !isTransactionSigner(message.feePayer);
}
// src/fee-payer-signer.ts
function setTransactionMessageFeePayerSigner(feePayer, transactionMessage) {
    Object.freeze(feePayer);
    const out = {
        ...transactionMessage,
        feePayer
    };
    Object.freeze(out);
    return out;
}
function isMessagePartialSigner(value) {
    return "signMessages" in value && typeof value.signMessages === "function";
}
function assertIsMessagePartialSigner(value) {
    if (!isMessagePartialSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_PARTIAL_SIGNER"], {
            address: value.address
        });
    }
}
// src/keypair-signer.ts
function isKeyPairSigner(value) {
    return "keyPair" in value && typeof value.keyPair === "object" && isMessagePartialSigner(value) && isTransactionPartialSigner(value);
}
function assertIsKeyPairSigner(value) {
    if (!isKeyPairSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_KEY_PAIR_SIGNER"], {
            address: value.address
        });
    }
}
async function createSignerFromKeyPair(keyPair) {
    const address = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressFromPublicKey"])(keyPair.publicKey);
    const out = {
        address,
        keyPair,
        signMessages: (messages)=>Promise.all(messages.map(async (message)=>Object.freeze({
                    [address]: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signBytes"])(keyPair.privateKey, message.content)
                }))),
        signTransactions: (transactions)=>Promise.all(transactions.map(async (transaction)=>{
                const signedTransaction = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partiallySignTransaction"])([
                    keyPair
                ], transaction);
                return Object.freeze({
                    [address]: signedTransaction.signatures[address]
                });
            }))
    };
    return Object.freeze(out);
}
async function generateKeyPairSigner() {
    return await createSignerFromKeyPair(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateKeyPair"])());
}
async function createKeyPairSignerFromBytes(bytes, extractable) {
    return await createSignerFromKeyPair(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createKeyPairFromBytes"])(bytes, extractable));
}
async function createKeyPairSignerFromPrivateKeyBytes(bytes, extractable) {
    return await createSignerFromKeyPair(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$keys$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createKeyPairFromPrivateKeyBytes"])(bytes, extractable));
}
function isMessageModifyingSigner(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(value.address) && "modifyAndSignMessages" in value && typeof value.modifyAndSignMessages === "function";
}
function assertIsMessageModifyingSigner(value) {
    if (!isMessageModifyingSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_MODIFYING_SIGNER"], {
            address: value.address
        });
    }
}
function isMessageSigner(value) {
    return isMessagePartialSigner(value) || isMessageModifyingSigner(value);
}
function assertIsMessageSigner(value) {
    if (!isMessageSigner(value)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__EXPECTED_MESSAGE_SIGNER"], {
            address: value.address
        });
    }
}
// src/noop-signer.ts
function createNoopSigner(address) {
    const out = {
        address,
        signMessages: (messages)=>Promise.resolve(messages.map(()=>Object.freeze({}))),
        signTransactions: (transactions)=>Promise.resolve(transactions.map(()=>Object.freeze({})))
    };
    return Object.freeze(out);
}
function isTransactionMessageWithSingleSendingSigner(transaction) {
    try {
        assertIsTransactionMessageWithSingleSendingSigner(transaction);
        return true;
    } catch  {
        return false;
    }
}
function assertIsTransactionMessageWithSingleSendingSigner(transaction) {
    const signers = getSignersFromTransactionMessage(transaction);
    const sendingSigners = signers.filter(isTransactionSendingSigner);
    if (sendingSigners.length === 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING"]);
    }
    const sendingOnlySigners = sendingSigners.filter((signer)=>!isTransactionPartialSigner(signer) && !isTransactionModifyingSigner(signer));
    if (sendingOnlySigners.length > 1) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS"]);
    }
}
// src/sign-transaction.ts
async function partiallySignTransactionMessageWithSigners(transactionMessage, config) {
    const { partialSigners, modifyingSigners } = categorizeTransactionSigners(deduplicateSigners(getSignersFromTransactionMessage(transactionMessage).filter(isTransactionSigner)), {
        identifySendingSigner: false
    });
    return await signModifyingAndPartialTransactionSigners(transactionMessage, modifyingSigners, partialSigners, config);
}
async function signTransactionMessageWithSigners(transactionMessage, config) {
    const signedTransaction = await partiallySignTransactionMessageWithSigners(transactionMessage, config);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsFullySignedTransaction"])(signedTransaction);
    return signedTransaction;
}
async function signAndSendTransactionMessageWithSigners(transaction, config) {
    assertIsTransactionMessageWithSingleSendingSigner(transaction);
    const abortSignal = config?.abortSignal;
    const { partialSigners, modifyingSigners, sendingSigner } = categorizeTransactionSigners(deduplicateSigners(getSignersFromTransactionMessage(transaction).filter(isTransactionSigner)));
    abortSignal?.throwIfAborted();
    const signedTransaction = await signModifyingAndPartialTransactionSigners(transaction, modifyingSigners, partialSigners, config);
    if (!sendingSigner) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SolanaError"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$errors$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SOLANA_ERROR__SIGNER__TRANSACTION_SENDING_SIGNER_MISSING"]);
    }
    abortSignal?.throwIfAborted();
    const [signature] = await sendingSigner.signAndSendTransactions([
        signedTransaction
    ], config);
    abortSignal?.throwIfAborted();
    return signature;
}
function categorizeTransactionSigners(signers, config = {}) {
    const identifySendingSigner = config.identifySendingSigner ?? true;
    const sendingSigner = identifySendingSigner ? identifyTransactionSendingSigner(signers) : null;
    const otherSigners = signers.filter((signer)=>signer !== sendingSigner && (isTransactionModifyingSigner(signer) || isTransactionPartialSigner(signer)));
    const modifyingSigners = identifyTransactionModifyingSigners(otherSigners);
    const partialSigners = otherSigners.filter(isTransactionPartialSigner).filter((signer)=>!modifyingSigners.includes(signer));
    return Object.freeze({
        modifyingSigners,
        partialSigners,
        sendingSigner
    });
}
function identifyTransactionSendingSigner(signers) {
    const sendingSigners = signers.filter(isTransactionSendingSigner);
    if (sendingSigners.length === 0) return null;
    const sendingOnlySigners = sendingSigners.filter((signer)=>!isTransactionModifyingSigner(signer) && !isTransactionPartialSigner(signer));
    if (sendingOnlySigners.length > 0) {
        return sendingOnlySigners[0];
    }
    return sendingSigners[0];
}
function identifyTransactionModifyingSigners(signers) {
    const modifyingSigners = signers.filter(isTransactionModifyingSigner);
    if (modifyingSigners.length === 0) return [];
    const nonPartialSigners = modifyingSigners.filter((signer)=>!isTransactionPartialSigner(signer));
    if (nonPartialSigners.length > 0) return nonPartialSigners;
    return [
        modifyingSigners[0]
    ];
}
async function signModifyingAndPartialTransactionSigners(transactionMessage, modifyingSigners = [], partialSigners = [], config) {
    const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileTransaction"])(transactionMessage);
    const modifiedTransaction = await modifyingSigners.reduce(async (transaction2, modifyingSigner)=>{
        config?.abortSignal?.throwIfAborted();
        const [tx] = await modifyingSigner.modifyAndSignTransactions([
            await transaction2
        ], config);
        return Object.freeze(tx);
    }, Promise.resolve(transaction));
    config?.abortSignal?.throwIfAborted();
    const signatureDictionaries = await Promise.all(partialSigners.map(async (partialSigner)=>{
        const [signatures] = await partialSigner.signTransactions([
            modifiedTransaction
        ], config);
        return signatures;
    }));
    return Object.freeze({
        ...modifiedTransaction,
        signatures: Object.freeze(signatureDictionaries.reduce((signatures, signatureDictionary)=>{
            return {
                ...signatures,
                ...signatureDictionary
            };
        }, modifiedTransaction.signatures ?? {}))
    });
}
var o = globalThis.TextEncoder;
// src/signable-message.ts
function createSignableMessage(content, signatures = {}) {
    return Object.freeze({
        content: typeof content === "string" ? new o().encode(content) : content,
        signatures: Object.freeze({
            ...signatures
        })
    });
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana-program/system/dist/src/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADVANCE_NONCE_ACCOUNT_DISCRIMINATOR",
    ()=>ADVANCE_NONCE_ACCOUNT_DISCRIMINATOR,
    "ALLOCATE_DISCRIMINATOR",
    ()=>ALLOCATE_DISCRIMINATOR,
    "ALLOCATE_WITH_SEED_DISCRIMINATOR",
    ()=>ALLOCATE_WITH_SEED_DISCRIMINATOR,
    "ASSIGN_DISCRIMINATOR",
    ()=>ASSIGN_DISCRIMINATOR,
    "ASSIGN_WITH_SEED_DISCRIMINATOR",
    ()=>ASSIGN_WITH_SEED_DISCRIMINATOR,
    "AUTHORIZE_NONCE_ACCOUNT_DISCRIMINATOR",
    ()=>AUTHORIZE_NONCE_ACCOUNT_DISCRIMINATOR,
    "CREATE_ACCOUNT_DISCRIMINATOR",
    ()=>CREATE_ACCOUNT_DISCRIMINATOR,
    "CREATE_ACCOUNT_WITH_SEED_DISCRIMINATOR",
    ()=>CREATE_ACCOUNT_WITH_SEED_DISCRIMINATOR,
    "INITIALIZE_NONCE_ACCOUNT_DISCRIMINATOR",
    ()=>INITIALIZE_NONCE_ACCOUNT_DISCRIMINATOR,
    "NonceState",
    ()=>NonceState,
    "NonceVersion",
    ()=>NonceVersion,
    "SYSTEM_ERROR__ACCOUNT_ALREADY_IN_USE",
    ()=>SYSTEM_ERROR__ACCOUNT_ALREADY_IN_USE,
    "SYSTEM_ERROR__ADDRESS_WITH_SEED_MISMATCH",
    ()=>SYSTEM_ERROR__ADDRESS_WITH_SEED_MISMATCH,
    "SYSTEM_ERROR__INVALID_ACCOUNT_DATA_LENGTH",
    ()=>SYSTEM_ERROR__INVALID_ACCOUNT_DATA_LENGTH,
    "SYSTEM_ERROR__INVALID_PROGRAM_ID",
    ()=>SYSTEM_ERROR__INVALID_PROGRAM_ID,
    "SYSTEM_ERROR__MAX_SEED_LENGTH_EXCEEDED",
    ()=>SYSTEM_ERROR__MAX_SEED_LENGTH_EXCEEDED,
    "SYSTEM_ERROR__NONCE_BLOCKHASH_NOT_EXPIRED",
    ()=>SYSTEM_ERROR__NONCE_BLOCKHASH_NOT_EXPIRED,
    "SYSTEM_ERROR__NONCE_NO_RECENT_BLOCKHASHES",
    ()=>SYSTEM_ERROR__NONCE_NO_RECENT_BLOCKHASHES,
    "SYSTEM_ERROR__NONCE_UNEXPECTED_BLOCKHASH_VALUE",
    ()=>SYSTEM_ERROR__NONCE_UNEXPECTED_BLOCKHASH_VALUE,
    "SYSTEM_ERROR__RESULT_WITH_NEGATIVE_LAMPORTS",
    ()=>SYSTEM_ERROR__RESULT_WITH_NEGATIVE_LAMPORTS,
    "SYSTEM_PROGRAM_ADDRESS",
    ()=>SYSTEM_PROGRAM_ADDRESS,
    "SystemAccount",
    ()=>SystemAccount,
    "SystemInstruction",
    ()=>SystemInstruction,
    "TRANSFER_SOL_DISCRIMINATOR",
    ()=>TRANSFER_SOL_DISCRIMINATOR,
    "TRANSFER_SOL_WITH_SEED_DISCRIMINATOR",
    ()=>TRANSFER_SOL_WITH_SEED_DISCRIMINATOR,
    "UPGRADE_NONCE_ACCOUNT_DISCRIMINATOR",
    ()=>UPGRADE_NONCE_ACCOUNT_DISCRIMINATOR,
    "WITHDRAW_NONCE_ACCOUNT_DISCRIMINATOR",
    ()=>WITHDRAW_NONCE_ACCOUNT_DISCRIMINATOR,
    "decodeNonce",
    ()=>decodeNonce,
    "fetchAllMaybeNonce",
    ()=>fetchAllMaybeNonce,
    "fetchAllNonce",
    ()=>fetchAllNonce,
    "fetchMaybeNonce",
    ()=>fetchMaybeNonce,
    "fetchNonce",
    ()=>fetchNonce,
    "getAdvanceNonceAccountDiscriminatorBytes",
    ()=>getAdvanceNonceAccountDiscriminatorBytes,
    "getAdvanceNonceAccountInstruction",
    ()=>getAdvanceNonceAccountInstruction,
    "getAdvanceNonceAccountInstructionDataCodec",
    ()=>getAdvanceNonceAccountInstructionDataCodec,
    "getAdvanceNonceAccountInstructionDataDecoder",
    ()=>getAdvanceNonceAccountInstructionDataDecoder,
    "getAdvanceNonceAccountInstructionDataEncoder",
    ()=>getAdvanceNonceAccountInstructionDataEncoder,
    "getAllocateDiscriminatorBytes",
    ()=>getAllocateDiscriminatorBytes,
    "getAllocateInstruction",
    ()=>getAllocateInstruction,
    "getAllocateInstructionDataCodec",
    ()=>getAllocateInstructionDataCodec,
    "getAllocateInstructionDataDecoder",
    ()=>getAllocateInstructionDataDecoder,
    "getAllocateInstructionDataEncoder",
    ()=>getAllocateInstructionDataEncoder,
    "getAllocateWithSeedDiscriminatorBytes",
    ()=>getAllocateWithSeedDiscriminatorBytes,
    "getAllocateWithSeedInstruction",
    ()=>getAllocateWithSeedInstruction,
    "getAllocateWithSeedInstructionDataCodec",
    ()=>getAllocateWithSeedInstructionDataCodec,
    "getAllocateWithSeedInstructionDataDecoder",
    ()=>getAllocateWithSeedInstructionDataDecoder,
    "getAllocateWithSeedInstructionDataEncoder",
    ()=>getAllocateWithSeedInstructionDataEncoder,
    "getAssignDiscriminatorBytes",
    ()=>getAssignDiscriminatorBytes,
    "getAssignInstruction",
    ()=>getAssignInstruction,
    "getAssignInstructionDataCodec",
    ()=>getAssignInstructionDataCodec,
    "getAssignInstructionDataDecoder",
    ()=>getAssignInstructionDataDecoder,
    "getAssignInstructionDataEncoder",
    ()=>getAssignInstructionDataEncoder,
    "getAssignWithSeedDiscriminatorBytes",
    ()=>getAssignWithSeedDiscriminatorBytes,
    "getAssignWithSeedInstruction",
    ()=>getAssignWithSeedInstruction,
    "getAssignWithSeedInstructionDataCodec",
    ()=>getAssignWithSeedInstructionDataCodec,
    "getAssignWithSeedInstructionDataDecoder",
    ()=>getAssignWithSeedInstructionDataDecoder,
    "getAssignWithSeedInstructionDataEncoder",
    ()=>getAssignWithSeedInstructionDataEncoder,
    "getAuthorizeNonceAccountDiscriminatorBytes",
    ()=>getAuthorizeNonceAccountDiscriminatorBytes,
    "getAuthorizeNonceAccountInstruction",
    ()=>getAuthorizeNonceAccountInstruction,
    "getAuthorizeNonceAccountInstructionDataCodec",
    ()=>getAuthorizeNonceAccountInstructionDataCodec,
    "getAuthorizeNonceAccountInstructionDataDecoder",
    ()=>getAuthorizeNonceAccountInstructionDataDecoder,
    "getAuthorizeNonceAccountInstructionDataEncoder",
    ()=>getAuthorizeNonceAccountInstructionDataEncoder,
    "getCreateAccountDiscriminatorBytes",
    ()=>getCreateAccountDiscriminatorBytes,
    "getCreateAccountInstruction",
    ()=>getCreateAccountInstruction,
    "getCreateAccountInstructionDataCodec",
    ()=>getCreateAccountInstructionDataCodec,
    "getCreateAccountInstructionDataDecoder",
    ()=>getCreateAccountInstructionDataDecoder,
    "getCreateAccountInstructionDataEncoder",
    ()=>getCreateAccountInstructionDataEncoder,
    "getCreateAccountWithSeedDiscriminatorBytes",
    ()=>getCreateAccountWithSeedDiscriminatorBytes,
    "getCreateAccountWithSeedInstruction",
    ()=>getCreateAccountWithSeedInstruction,
    "getCreateAccountWithSeedInstructionDataCodec",
    ()=>getCreateAccountWithSeedInstructionDataCodec,
    "getCreateAccountWithSeedInstructionDataDecoder",
    ()=>getCreateAccountWithSeedInstructionDataDecoder,
    "getCreateAccountWithSeedInstructionDataEncoder",
    ()=>getCreateAccountWithSeedInstructionDataEncoder,
    "getInitializeNonceAccountDiscriminatorBytes",
    ()=>getInitializeNonceAccountDiscriminatorBytes,
    "getInitializeNonceAccountInstruction",
    ()=>getInitializeNonceAccountInstruction,
    "getInitializeNonceAccountInstructionDataCodec",
    ()=>getInitializeNonceAccountInstructionDataCodec,
    "getInitializeNonceAccountInstructionDataDecoder",
    ()=>getInitializeNonceAccountInstructionDataDecoder,
    "getInitializeNonceAccountInstructionDataEncoder",
    ()=>getInitializeNonceAccountInstructionDataEncoder,
    "getNonceCodec",
    ()=>getNonceCodec,
    "getNonceDecoder",
    ()=>getNonceDecoder,
    "getNonceEncoder",
    ()=>getNonceEncoder,
    "getNonceSize",
    ()=>getNonceSize,
    "getNonceStateCodec",
    ()=>getNonceStateCodec,
    "getNonceStateDecoder",
    ()=>getNonceStateDecoder,
    "getNonceStateEncoder",
    ()=>getNonceStateEncoder,
    "getNonceVersionCodec",
    ()=>getNonceVersionCodec,
    "getNonceVersionDecoder",
    ()=>getNonceVersionDecoder,
    "getNonceVersionEncoder",
    ()=>getNonceVersionEncoder,
    "getSystemErrorMessage",
    ()=>getSystemErrorMessage,
    "getTransferSolDiscriminatorBytes",
    ()=>getTransferSolDiscriminatorBytes,
    "getTransferSolInstruction",
    ()=>getTransferSolInstruction,
    "getTransferSolInstructionDataCodec",
    ()=>getTransferSolInstructionDataCodec,
    "getTransferSolInstructionDataDecoder",
    ()=>getTransferSolInstructionDataDecoder,
    "getTransferSolInstructionDataEncoder",
    ()=>getTransferSolInstructionDataEncoder,
    "getTransferSolWithSeedDiscriminatorBytes",
    ()=>getTransferSolWithSeedDiscriminatorBytes,
    "getTransferSolWithSeedInstruction",
    ()=>getTransferSolWithSeedInstruction,
    "getTransferSolWithSeedInstructionDataCodec",
    ()=>getTransferSolWithSeedInstructionDataCodec,
    "getTransferSolWithSeedInstructionDataDecoder",
    ()=>getTransferSolWithSeedInstructionDataDecoder,
    "getTransferSolWithSeedInstructionDataEncoder",
    ()=>getTransferSolWithSeedInstructionDataEncoder,
    "getUpgradeNonceAccountDiscriminatorBytes",
    ()=>getUpgradeNonceAccountDiscriminatorBytes,
    "getUpgradeNonceAccountInstruction",
    ()=>getUpgradeNonceAccountInstruction,
    "getUpgradeNonceAccountInstructionDataCodec",
    ()=>getUpgradeNonceAccountInstructionDataCodec,
    "getUpgradeNonceAccountInstructionDataDecoder",
    ()=>getUpgradeNonceAccountInstructionDataDecoder,
    "getUpgradeNonceAccountInstructionDataEncoder",
    ()=>getUpgradeNonceAccountInstructionDataEncoder,
    "getWithdrawNonceAccountDiscriminatorBytes",
    ()=>getWithdrawNonceAccountDiscriminatorBytes,
    "getWithdrawNonceAccountInstruction",
    ()=>getWithdrawNonceAccountInstruction,
    "getWithdrawNonceAccountInstructionDataCodec",
    ()=>getWithdrawNonceAccountInstructionDataCodec,
    "getWithdrawNonceAccountInstructionDataDecoder",
    ()=>getWithdrawNonceAccountInstructionDataDecoder,
    "getWithdrawNonceAccountInstructionDataEncoder",
    ()=>getWithdrawNonceAccountInstructionDataEncoder,
    "identifySystemInstruction",
    ()=>identifySystemInstruction,
    "isSystemError",
    ()=>isSystemError,
    "parseAdvanceNonceAccountInstruction",
    ()=>parseAdvanceNonceAccountInstruction,
    "parseAllocateInstruction",
    ()=>parseAllocateInstruction,
    "parseAllocateWithSeedInstruction",
    ()=>parseAllocateWithSeedInstruction,
    "parseAssignInstruction",
    ()=>parseAssignInstruction,
    "parseAssignWithSeedInstruction",
    ()=>parseAssignWithSeedInstruction,
    "parseAuthorizeNonceAccountInstruction",
    ()=>parseAuthorizeNonceAccountInstruction,
    "parseCreateAccountInstruction",
    ()=>parseCreateAccountInstruction,
    "parseCreateAccountWithSeedInstruction",
    ()=>parseCreateAccountWithSeedInstruction,
    "parseInitializeNonceAccountInstruction",
    ()=>parseInitializeNonceAccountInstruction,
    "parseTransferSolInstruction",
    ()=>parseTransferSolInstruction,
    "parseTransferSolWithSeedInstruction",
    ()=>parseTransferSolWithSeedInstruction,
    "parseUpgradeNonceAccountInstruction",
    ()=>parseUpgradeNonceAccountInstruction,
    "parseWithdrawNonceAccountInstruction",
    ()=>parseWithdrawNonceAccountInstruction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-data-structures/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/accounts/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$programs$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/programs/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/instructions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/signers/dist/index.node.mjs [app-ssr] (ecmascript)");
;
// src/generated/accounts/nonce.ts
var NonceState = /* @__PURE__ */ ((NonceState2)=>{
    NonceState2[NonceState2["Uninitialized"] = 0] = "Uninitialized";
    NonceState2[NonceState2["Initialized"] = 1] = "Initialized";
    return NonceState2;
})(NonceState || {});
function getNonceStateEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnumEncoder"])(NonceState, {
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
    });
}
function getNonceStateDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnumDecoder"])(NonceState, {
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
    });
}
function getNonceStateCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getNonceStateEncoder(), getNonceStateDecoder());
}
var NonceVersion = /* @__PURE__ */ ((NonceVersion2)=>{
    NonceVersion2[NonceVersion2["Legacy"] = 0] = "Legacy";
    NonceVersion2[NonceVersion2["Current"] = 1] = "Current";
    return NonceVersion2;
})(NonceVersion || {});
function getNonceVersionEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnumEncoder"])(NonceVersion, {
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
    });
}
function getNonceVersionDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnumDecoder"])(NonceVersion, {
        size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
    });
}
function getNonceVersionCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getNonceVersionEncoder(), getNonceVersionDecoder());
}
// src/generated/accounts/nonce.ts
function getNonceEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "version",
            getNonceVersionEncoder()
        ],
        [
            "state",
            getNonceStateEncoder()
        ],
        [
            "authority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ],
        [
            "blockhash",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ],
        [
            "lamportsPerSignature",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ]
    ]);
}
function getNonceDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "version",
            getNonceVersionDecoder()
        ],
        [
            "state",
            getNonceStateDecoder()
        ],
        [
            "authority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ],
        [
            "blockhash",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ],
        [
            "lamportsPerSignature",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ]
    ]);
}
function getNonceCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getNonceEncoder(), getNonceDecoder());
}
function decodeNonce(encodedAccount) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeAccount"])(encodedAccount, getNonceDecoder());
}
async function fetchNonce(rpc, address, config) {
    const maybeAccount = await fetchMaybeNonce(rpc, address, config);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAccountExists"])(maybeAccount);
    return maybeAccount;
}
async function fetchMaybeNonce(rpc, address, config) {
    const maybeAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchEncodedAccount"])(rpc, address, config);
    return decodeNonce(maybeAccount);
}
async function fetchAllNonce(rpc, addresses, config) {
    const maybeAccounts = await fetchAllMaybeNonce(rpc, addresses, config);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAccountsExist"])(maybeAccounts);
    return maybeAccounts;
}
async function fetchAllMaybeNonce(rpc, addresses, config) {
    const maybeAccounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchEncodedAccounts"])(rpc, addresses, config);
    return maybeAccounts.map((maybeAccount)=>decodeNonce(maybeAccount));
}
function getNonceSize() {
    return 80;
}
var SYSTEM_PROGRAM_ADDRESS = "11111111111111111111111111111111";
var SystemAccount = /* @__PURE__ */ ((SystemAccount2)=>{
    SystemAccount2[SystemAccount2["Nonce"] = 0] = "Nonce";
    return SystemAccount2;
})(SystemAccount || {});
var SystemInstruction = /* @__PURE__ */ ((SystemInstruction2)=>{
    SystemInstruction2[SystemInstruction2["CreateAccount"] = 0] = "CreateAccount";
    SystemInstruction2[SystemInstruction2["Assign"] = 1] = "Assign";
    SystemInstruction2[SystemInstruction2["TransferSol"] = 2] = "TransferSol";
    SystemInstruction2[SystemInstruction2["CreateAccountWithSeed"] = 3] = "CreateAccountWithSeed";
    SystemInstruction2[SystemInstruction2["AdvanceNonceAccount"] = 4] = "AdvanceNonceAccount";
    SystemInstruction2[SystemInstruction2["WithdrawNonceAccount"] = 5] = "WithdrawNonceAccount";
    SystemInstruction2[SystemInstruction2["InitializeNonceAccount"] = 6] = "InitializeNonceAccount";
    SystemInstruction2[SystemInstruction2["AuthorizeNonceAccount"] = 7] = "AuthorizeNonceAccount";
    SystemInstruction2[SystemInstruction2["Allocate"] = 8] = "Allocate";
    SystemInstruction2[SystemInstruction2["AllocateWithSeed"] = 9] = "AllocateWithSeed";
    SystemInstruction2[SystemInstruction2["AssignWithSeed"] = 10] = "AssignWithSeed";
    SystemInstruction2[SystemInstruction2["TransferSolWithSeed"] = 11] = "TransferSolWithSeed";
    SystemInstruction2[SystemInstruction2["UpgradeNonceAccount"] = 12] = "UpgradeNonceAccount";
    return SystemInstruction2;
})(SystemInstruction || {});
function identifySystemInstruction(instruction) {
    const data = "data" in instruction ? instruction.data : instruction;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(0), 0)) {
        return 0 /* CreateAccount */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(1), 0)) {
        return 1 /* Assign */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(2), 0)) {
        return 2 /* TransferSol */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(3), 0)) {
        return 3 /* CreateAccountWithSeed */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(4), 0)) {
        return 4 /* AdvanceNonceAccount */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(5), 0)) {
        return 5 /* WithdrawNonceAccount */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(6), 0)) {
        return 6 /* InitializeNonceAccount */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(7), 0)) {
        return 7 /* AuthorizeNonceAccount */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(8), 0)) {
        return 8 /* Allocate */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(9), 0)) {
        return 9 /* AllocateWithSeed */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(10), 0)) {
        return 10 /* AssignWithSeed */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(11), 0)) {
        return 11 /* TransferSolWithSeed */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(12), 0)) {
        return 12 /* UpgradeNonceAccount */ ;
    }
    throw new Error("The provided instruction could not be identified as a system instruction.");
}
// src/generated/errors/system.ts
var SYSTEM_ERROR__ACCOUNT_ALREADY_IN_USE = 0;
var SYSTEM_ERROR__RESULT_WITH_NEGATIVE_LAMPORTS = 1;
var SYSTEM_ERROR__INVALID_PROGRAM_ID = 2;
var SYSTEM_ERROR__INVALID_ACCOUNT_DATA_LENGTH = 3;
var SYSTEM_ERROR__MAX_SEED_LENGTH_EXCEEDED = 4;
var SYSTEM_ERROR__ADDRESS_WITH_SEED_MISMATCH = 5;
var SYSTEM_ERROR__NONCE_NO_RECENT_BLOCKHASHES = 6;
var SYSTEM_ERROR__NONCE_BLOCKHASH_NOT_EXPIRED = 7;
var SYSTEM_ERROR__NONCE_UNEXPECTED_BLOCKHASH_VALUE = 8;
var systemErrorMessages;
if (("TURBOPACK compile-time value", "development") !== "production") {
    systemErrorMessages = {
        [SYSTEM_ERROR__ACCOUNT_ALREADY_IN_USE]: `an account with the same address already exists`,
        [SYSTEM_ERROR__ADDRESS_WITH_SEED_MISMATCH]: `provided address does not match addressed derived from seed`,
        [SYSTEM_ERROR__INVALID_ACCOUNT_DATA_LENGTH]: `cannot allocate account data of this length`,
        [SYSTEM_ERROR__INVALID_PROGRAM_ID]: `cannot assign account to this program id`,
        [SYSTEM_ERROR__MAX_SEED_LENGTH_EXCEEDED]: `length of requested seed is too long`,
        [SYSTEM_ERROR__NONCE_BLOCKHASH_NOT_EXPIRED]: `stored nonce is still in recent_blockhashes`,
        [SYSTEM_ERROR__NONCE_NO_RECENT_BLOCKHASHES]: `advancing stored nonce requires a populated RecentBlockhashes sysvar`,
        [SYSTEM_ERROR__NONCE_UNEXPECTED_BLOCKHASH_VALUE]: `specified nonce does not match stored nonce`,
        [SYSTEM_ERROR__RESULT_WITH_NEGATIVE_LAMPORTS]: `account does not have enough SOL to perform the operation`
    };
}
function getSystemErrorMessage(code) {
    if ("TURBOPACK compile-time truthy", 1) {
        return systemErrorMessages[code];
    }
    //TURBOPACK unreachable
    ;
}
function isSystemError(error, transactionMessage, code) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$programs$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProgramError"])(error, transactionMessage, SYSTEM_PROGRAM_ADDRESS, code);
}
function expectAddress(value) {
    if (!value) {
        throw new Error("Expected a Address.");
    }
    if (typeof value === "object" && "address" in value) {
        return value.address;
    }
    if (Array.isArray(value)) {
        return value[0];
    }
    return value;
}
function getAccountMetaFactory(programAddress, optionalAccountStrategy) {
    return (account)=>{
        if (!account.value) {
            return;
        }
        const writableRole = account.isWritable ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].WRITABLE : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY;
        return Object.freeze({
            address: expectAddress(account.value),
            role: isTransactionSigner(account.value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upgradeRoleToSigner"])(writableRole) : writableRole,
            ...isTransactionSigner(account.value) ? {
                signer: account.value
            } : {}
        });
    };
}
function isTransactionSigner(value) {
    return !!value && typeof value === "object" && "address" in value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransactionSigner"])(value);
}
// src/generated/instructions/advanceNonceAccount.ts
var ADVANCE_NONCE_ACCOUNT_DISCRIMINATOR = 4;
function getAdvanceNonceAccountDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(ADVANCE_NONCE_ACCOUNT_DISCRIMINATOR);
}
function getAdvanceNonceAccountInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: ADVANCE_NONCE_ACCOUNT_DISCRIMINATOR
        }));
}
function getAdvanceNonceAccountInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ]
    ]);
}
function getAdvanceNonceAccountInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getAdvanceNonceAccountInstructionDataEncoder(), getAdvanceNonceAccountInstructionDataDecoder());
}
function getAdvanceNonceAccountInstruction(input, config) {
    const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
    const originalAccounts = {
        nonceAccount: {
            value: input.nonceAccount ?? null,
            isWritable: true
        },
        recentBlockhashesSysvar: {
            value: input.recentBlockhashesSysvar ?? null,
            isWritable: false
        },
        nonceAuthority: {
            value: input.nonceAuthority ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    if (!accounts.recentBlockhashesSysvar.value) {
        accounts.recentBlockhashesSysvar.value = "SysvarRecentB1ockHashes11111111111111111111";
    }
    const getAccountMeta = getAccountMetaFactory();
    const instruction = {
        accounts: [
            getAccountMeta(accounts.nonceAccount),
            getAccountMeta(accounts.recentBlockhashesSysvar),
            getAccountMeta(accounts.nonceAuthority)
        ],
        programAddress,
        data: getAdvanceNonceAccountInstructionDataEncoder().encode({})
    };
    return instruction;
}
function parseAdvanceNonceAccountInstruction(instruction) {
    if (instruction.accounts.length < 3) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            nonceAccount: getNextAccount(),
            recentBlockhashesSysvar: getNextAccount(),
            nonceAuthority: getNextAccount()
        },
        data: getAdvanceNonceAccountInstructionDataDecoder().decode(instruction.data)
    };
}
var ALLOCATE_DISCRIMINATOR = 8;
function getAllocateDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(ALLOCATE_DISCRIMINATOR);
}
function getAllocateInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ],
        [
            "space",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: ALLOCATE_DISCRIMINATOR
        }));
}
function getAllocateInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ],
        [
            "space",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ]
    ]);
}
function getAllocateInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getAllocateInstructionDataEncoder(), getAllocateInstructionDataDecoder());
}
function getAllocateInstruction(input, config) {
    const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
    const originalAccounts = {
        newAccount: {
            value: input.newAccount ?? null,
            isWritable: true
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const getAccountMeta = getAccountMetaFactory();
    const instruction = {
        accounts: [
            getAccountMeta(accounts.newAccount)
        ],
        programAddress,
        data: getAllocateInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseAllocateInstruction(instruction) {
    if (instruction.accounts.length < 1) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            newAccount: getNextAccount()
        },
        data: getAllocateInstructionDataDecoder().decode(instruction.data)
    };
}
var ALLOCATE_WITH_SEED_DISCRIMINATOR = 9;
function getAllocateWithSeedDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(ALLOCATE_WITH_SEED_DISCRIMINATOR);
}
function getAllocateWithSeedInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ],
        [
            "base",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ],
        [
            "seed",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addEncoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUtf8Encoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])())
        ],
        [
            "space",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "programAddress",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: ALLOCATE_WITH_SEED_DISCRIMINATOR
        }));
}
function getAllocateWithSeedInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ],
        [
            "base",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ],
        [
            "seed",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDecoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUtf8Decoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])())
        ],
        [
            "space",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "programAddress",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ]
    ]);
}
function getAllocateWithSeedInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getAllocateWithSeedInstructionDataEncoder(), getAllocateWithSeedInstructionDataDecoder());
}
function getAllocateWithSeedInstruction(input, config) {
    const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
    const originalAccounts = {
        newAccount: {
            value: input.newAccount ?? null,
            isWritable: true
        },
        baseAccount: {
            value: input.baseAccount ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const getAccountMeta = getAccountMetaFactory();
    const instruction = {
        accounts: [
            getAccountMeta(accounts.newAccount),
            getAccountMeta(accounts.baseAccount)
        ],
        programAddress,
        data: getAllocateWithSeedInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseAllocateWithSeedInstruction(instruction) {
    if (instruction.accounts.length < 2) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            newAccount: getNextAccount(),
            baseAccount: getNextAccount()
        },
        data: getAllocateWithSeedInstructionDataDecoder().decode(instruction.data)
    };
}
var ASSIGN_DISCRIMINATOR = 1;
function getAssignDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(ASSIGN_DISCRIMINATOR);
}
function getAssignInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ],
        [
            "programAddress",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: ASSIGN_DISCRIMINATOR
        }));
}
function getAssignInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ],
        [
            "programAddress",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ]
    ]);
}
function getAssignInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getAssignInstructionDataEncoder(), getAssignInstructionDataDecoder());
}
function getAssignInstruction(input, config) {
    const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
    const originalAccounts = {
        account: {
            value: input.account ?? null,
            isWritable: true
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const getAccountMeta = getAccountMetaFactory();
    const instruction = {
        accounts: [
            getAccountMeta(accounts.account)
        ],
        programAddress,
        data: getAssignInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseAssignInstruction(instruction) {
    if (instruction.accounts.length < 1) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            account: getNextAccount()
        },
        data: getAssignInstructionDataDecoder().decode(instruction.data)
    };
}
var ASSIGN_WITH_SEED_DISCRIMINATOR = 10;
function getAssignWithSeedDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(ASSIGN_WITH_SEED_DISCRIMINATOR);
}
function getAssignWithSeedInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ],
        [
            "base",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ],
        [
            "seed",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addEncoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUtf8Encoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])())
        ],
        [
            "programAddress",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: ASSIGN_WITH_SEED_DISCRIMINATOR
        }));
}
function getAssignWithSeedInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ],
        [
            "base",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ],
        [
            "seed",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDecoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUtf8Decoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])())
        ],
        [
            "programAddress",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ]
    ]);
}
function getAssignWithSeedInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getAssignWithSeedInstructionDataEncoder(), getAssignWithSeedInstructionDataDecoder());
}
function getAssignWithSeedInstruction(input, config) {
    const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
    const originalAccounts = {
        account: {
            value: input.account ?? null,
            isWritable: true
        },
        baseAccount: {
            value: input.baseAccount ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const getAccountMeta = getAccountMetaFactory();
    const instruction = {
        accounts: [
            getAccountMeta(accounts.account),
            getAccountMeta(accounts.baseAccount)
        ],
        programAddress,
        data: getAssignWithSeedInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseAssignWithSeedInstruction(instruction) {
    if (instruction.accounts.length < 2) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            account: getNextAccount(),
            baseAccount: getNextAccount()
        },
        data: getAssignWithSeedInstructionDataDecoder().decode(instruction.data)
    };
}
var AUTHORIZE_NONCE_ACCOUNT_DISCRIMINATOR = 7;
function getAuthorizeNonceAccountDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(AUTHORIZE_NONCE_ACCOUNT_DISCRIMINATOR);
}
function getAuthorizeNonceAccountInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ],
        [
            "newNonceAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: AUTHORIZE_NONCE_ACCOUNT_DISCRIMINATOR
        }));
}
function getAuthorizeNonceAccountInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ],
        [
            "newNonceAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ]
    ]);
}
function getAuthorizeNonceAccountInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getAuthorizeNonceAccountInstructionDataEncoder(), getAuthorizeNonceAccountInstructionDataDecoder());
}
function getAuthorizeNonceAccountInstruction(input, config) {
    const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
    const originalAccounts = {
        nonceAccount: {
            value: input.nonceAccount ?? null,
            isWritable: true
        },
        nonceAuthority: {
            value: input.nonceAuthority ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const getAccountMeta = getAccountMetaFactory();
    const instruction = {
        accounts: [
            getAccountMeta(accounts.nonceAccount),
            getAccountMeta(accounts.nonceAuthority)
        ],
        programAddress,
        data: getAuthorizeNonceAccountInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseAuthorizeNonceAccountInstruction(instruction) {
    if (instruction.accounts.length < 2) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            nonceAccount: getNextAccount(),
            nonceAuthority: getNextAccount()
        },
        data: getAuthorizeNonceAccountInstructionDataDecoder().decode(instruction.data)
    };
}
var CREATE_ACCOUNT_DISCRIMINATOR = 0;
function getCreateAccountDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(CREATE_ACCOUNT_DISCRIMINATOR);
}
function getCreateAccountInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ],
        [
            "lamports",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "space",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "programAddress",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: CREATE_ACCOUNT_DISCRIMINATOR
        }));
}
function getCreateAccountInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ],
        [
            "lamports",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "space",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "programAddress",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ]
    ]);
}
function getCreateAccountInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getCreateAccountInstructionDataEncoder(), getCreateAccountInstructionDataDecoder());
}
function getCreateAccountInstruction(input, config) {
    const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
    const originalAccounts = {
        payer: {
            value: input.payer ?? null,
            isWritable: true
        },
        newAccount: {
            value: input.newAccount ?? null,
            isWritable: true
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const byteDelta = [
        Number(args.space) + __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_ACCOUNT_SIZE"]
    ].reduce((a, b)=>a + b, 0);
    const getAccountMeta = getAccountMetaFactory();
    const instruction = {
        accounts: [
            getAccountMeta(accounts.payer),
            getAccountMeta(accounts.newAccount)
        ],
        programAddress,
        data: getCreateAccountInstructionDataEncoder().encode(args)
    };
    return Object.freeze({
        ...instruction,
        byteDelta
    });
}
function parseCreateAccountInstruction(instruction) {
    if (instruction.accounts.length < 2) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            payer: getNextAccount(),
            newAccount: getNextAccount()
        },
        data: getCreateAccountInstructionDataDecoder().decode(instruction.data)
    };
}
var CREATE_ACCOUNT_WITH_SEED_DISCRIMINATOR = 3;
function getCreateAccountWithSeedDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(CREATE_ACCOUNT_WITH_SEED_DISCRIMINATOR);
}
function getCreateAccountWithSeedInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ],
        [
            "base",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ],
        [
            "seed",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addEncoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUtf8Encoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])())
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "space",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "programAddress",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: CREATE_ACCOUNT_WITH_SEED_DISCRIMINATOR
        }));
}
function getCreateAccountWithSeedInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ],
        [
            "base",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ],
        [
            "seed",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDecoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUtf8Decoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])())
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "space",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "programAddress",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ]
    ]);
}
function getCreateAccountWithSeedInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getCreateAccountWithSeedInstructionDataEncoder(), getCreateAccountWithSeedInstructionDataDecoder());
}
function getCreateAccountWithSeedInstruction(input, config) {
    const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
    const originalAccounts = {
        payer: {
            value: input.payer ?? null,
            isWritable: true
        },
        newAccount: {
            value: input.newAccount ?? null,
            isWritable: true
        },
        baseAccount: {
            value: input.baseAccount ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const getAccountMeta = getAccountMetaFactory();
    const instruction = {
        accounts: [
            getAccountMeta(accounts.payer),
            getAccountMeta(accounts.newAccount),
            getAccountMeta(accounts.baseAccount)
        ].filter((x)=>x !== void 0),
        programAddress,
        data: getCreateAccountWithSeedInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseCreateAccountWithSeedInstruction(instruction) {
    if (instruction.accounts.length < 2) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    let optionalAccountsRemaining = instruction.accounts.length - 2;
    const getNextOptionalAccount = ()=>{
        if (optionalAccountsRemaining === 0) return void 0;
        optionalAccountsRemaining -= 1;
        return getNextAccount();
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            payer: getNextAccount(),
            newAccount: getNextAccount(),
            baseAccount: getNextOptionalAccount()
        },
        data: getCreateAccountWithSeedInstructionDataDecoder().decode(instruction.data)
    };
}
var INITIALIZE_NONCE_ACCOUNT_DISCRIMINATOR = 6;
function getInitializeNonceAccountDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(INITIALIZE_NONCE_ACCOUNT_DISCRIMINATOR);
}
function getInitializeNonceAccountInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ],
        [
            "nonceAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: INITIALIZE_NONCE_ACCOUNT_DISCRIMINATOR
        }));
}
function getInitializeNonceAccountInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ],
        [
            "nonceAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ]
    ]);
}
function getInitializeNonceAccountInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getInitializeNonceAccountInstructionDataEncoder(), getInitializeNonceAccountInstructionDataDecoder());
}
function getInitializeNonceAccountInstruction(input, config) {
    const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
    const originalAccounts = {
        nonceAccount: {
            value: input.nonceAccount ?? null,
            isWritable: true
        },
        recentBlockhashesSysvar: {
            value: input.recentBlockhashesSysvar ?? null,
            isWritable: false
        },
        rentSysvar: {
            value: input.rentSysvar ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    if (!accounts.recentBlockhashesSysvar.value) {
        accounts.recentBlockhashesSysvar.value = "SysvarRecentB1ockHashes11111111111111111111";
    }
    if (!accounts.rentSysvar.value) {
        accounts.rentSysvar.value = "SysvarRent111111111111111111111111111111111";
    }
    const getAccountMeta = getAccountMetaFactory();
    const instruction = {
        accounts: [
            getAccountMeta(accounts.nonceAccount),
            getAccountMeta(accounts.recentBlockhashesSysvar),
            getAccountMeta(accounts.rentSysvar)
        ],
        programAddress,
        data: getInitializeNonceAccountInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseInitializeNonceAccountInstruction(instruction) {
    if (instruction.accounts.length < 3) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            nonceAccount: getNextAccount(),
            recentBlockhashesSysvar: getNextAccount(),
            rentSysvar: getNextAccount()
        },
        data: getInitializeNonceAccountInstructionDataDecoder().decode(instruction.data)
    };
}
var TRANSFER_SOL_DISCRIMINATOR = 2;
function getTransferSolDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(TRANSFER_SOL_DISCRIMINATOR);
}
function getTransferSolInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: TRANSFER_SOL_DISCRIMINATOR
        }));
}
function getTransferSolInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ]
    ]);
}
function getTransferSolInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getTransferSolInstructionDataEncoder(), getTransferSolInstructionDataDecoder());
}
function getTransferSolInstruction(input, config) {
    const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
    const originalAccounts = {
        source: {
            value: input.source ?? null,
            isWritable: true
        },
        destination: {
            value: input.destination ?? null,
            isWritable: true
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const getAccountMeta = getAccountMetaFactory();
    const instruction = {
        accounts: [
            getAccountMeta(accounts.source),
            getAccountMeta(accounts.destination)
        ],
        programAddress,
        data: getTransferSolInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseTransferSolInstruction(instruction) {
    if (instruction.accounts.length < 2) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            source: getNextAccount(),
            destination: getNextAccount()
        },
        data: getTransferSolInstructionDataDecoder().decode(instruction.data)
    };
}
var TRANSFER_SOL_WITH_SEED_DISCRIMINATOR = 11;
function getTransferSolWithSeedDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(TRANSFER_SOL_WITH_SEED_DISCRIMINATOR);
}
function getTransferSolWithSeedInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "fromSeed",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addEncoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUtf8Encoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])())
        ],
        [
            "fromOwner",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: TRANSFER_SOL_WITH_SEED_DISCRIMINATOR
        }));
}
function getTransferSolWithSeedInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "fromSeed",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDecoderSizePrefix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUtf8Decoder"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])())
        ],
        [
            "fromOwner",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ]
    ]);
}
function getTransferSolWithSeedInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getTransferSolWithSeedInstructionDataEncoder(), getTransferSolWithSeedInstructionDataDecoder());
}
function getTransferSolWithSeedInstruction(input, config) {
    const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
    const originalAccounts = {
        source: {
            value: input.source ?? null,
            isWritable: true
        },
        baseAccount: {
            value: input.baseAccount ?? null,
            isWritable: false
        },
        destination: {
            value: input.destination ?? null,
            isWritable: true
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const getAccountMeta = getAccountMetaFactory();
    const instruction = {
        accounts: [
            getAccountMeta(accounts.source),
            getAccountMeta(accounts.baseAccount),
            getAccountMeta(accounts.destination)
        ],
        programAddress,
        data: getTransferSolWithSeedInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseTransferSolWithSeedInstruction(instruction) {
    if (instruction.accounts.length < 3) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            source: getNextAccount(),
            baseAccount: getNextAccount(),
            destination: getNextAccount()
        },
        data: getTransferSolWithSeedInstructionDataDecoder().decode(instruction.data)
    };
}
var UPGRADE_NONCE_ACCOUNT_DISCRIMINATOR = 12;
function getUpgradeNonceAccountDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(UPGRADE_NONCE_ACCOUNT_DISCRIMINATOR);
}
function getUpgradeNonceAccountInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: UPGRADE_NONCE_ACCOUNT_DISCRIMINATOR
        }));
}
function getUpgradeNonceAccountInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ]
    ]);
}
function getUpgradeNonceAccountInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getUpgradeNonceAccountInstructionDataEncoder(), getUpgradeNonceAccountInstructionDataDecoder());
}
function getUpgradeNonceAccountInstruction(input, config) {
    const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
    const originalAccounts = {
        nonceAccount: {
            value: input.nonceAccount ?? null,
            isWritable: true
        }
    };
    const accounts = originalAccounts;
    const getAccountMeta = getAccountMetaFactory();
    const instruction = {
        accounts: [
            getAccountMeta(accounts.nonceAccount)
        ],
        programAddress,
        data: getUpgradeNonceAccountInstructionDataEncoder().encode({})
    };
    return instruction;
}
function parseUpgradeNonceAccountInstruction(instruction) {
    if (instruction.accounts.length < 1) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            nonceAccount: getNextAccount()
        },
        data: getUpgradeNonceAccountInstructionDataDecoder().decode(instruction.data)
    };
}
var WITHDRAW_NONCE_ACCOUNT_DISCRIMINATOR = 5;
function getWithdrawNonceAccountDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])().encode(WITHDRAW_NONCE_ACCOUNT_DISCRIMINATOR);
}
function getWithdrawNonceAccountInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])()
        ],
        [
            "withdrawAmount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: WITHDRAW_NONCE_ACCOUNT_DISCRIMINATOR
        }));
}
function getWithdrawNonceAccountInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])()
        ],
        [
            "withdrawAmount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ]
    ]);
}
function getWithdrawNonceAccountInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getWithdrawNonceAccountInstructionDataEncoder(), getWithdrawNonceAccountInstructionDataDecoder());
}
function getWithdrawNonceAccountInstruction(input, config) {
    const programAddress = config?.programAddress ?? SYSTEM_PROGRAM_ADDRESS;
    const originalAccounts = {
        nonceAccount: {
            value: input.nonceAccount ?? null,
            isWritable: true
        },
        recipientAccount: {
            value: input.recipientAccount ?? null,
            isWritable: true
        },
        recentBlockhashesSysvar: {
            value: input.recentBlockhashesSysvar ?? null,
            isWritable: false
        },
        rentSysvar: {
            value: input.rentSysvar ?? null,
            isWritable: false
        },
        nonceAuthority: {
            value: input.nonceAuthority ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    if (!accounts.recentBlockhashesSysvar.value) {
        accounts.recentBlockhashesSysvar.value = "SysvarRecentB1ockHashes11111111111111111111";
    }
    if (!accounts.rentSysvar.value) {
        accounts.rentSysvar.value = "SysvarRent111111111111111111111111111111111";
    }
    const getAccountMeta = getAccountMetaFactory();
    const instruction = {
        accounts: [
            getAccountMeta(accounts.nonceAccount),
            getAccountMeta(accounts.recipientAccount),
            getAccountMeta(accounts.recentBlockhashesSysvar),
            getAccountMeta(accounts.rentSysvar),
            getAccountMeta(accounts.nonceAuthority)
        ],
        programAddress,
        data: getWithdrawNonceAccountInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseWithdrawNonceAccountInstruction(instruction) {
    if (instruction.accounts.length < 5) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            nonceAccount: getNextAccount(),
            recipientAccount: getNextAccount(),
            recentBlockhashesSysvar: getNextAccount(),
            rentSysvar: getNextAccount(),
            nonceAuthority: getNextAccount()
        },
        data: getWithdrawNonceAccountInstructionDataDecoder().decode(instruction.data)
    };
}
;
 //# sourceMappingURL=index.mjs.map
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana/options/dist/index.node.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOptionCodec",
    ()=>getOptionCodec,
    "getOptionDecoder",
    ()=>getOptionDecoder,
    "getOptionEncoder",
    ()=>getOptionEncoder,
    "isNone",
    ()=>isNone,
    "isOption",
    ()=>isOption,
    "isSome",
    ()=>isSome,
    "none",
    ()=>none,
    "some",
    ()=>some,
    "unwrapOption",
    ()=>unwrapOption,
    "unwrapOptionRecursively",
    ()=>unwrapOptionRecursively,
    "wrapNullable",
    ()=>wrapNullable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-data-structures/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
;
;
;
// src/option.ts
var some = (value)=>({
        __option: "Some",
        value
    });
var none = ()=>({
        __option: "None"
    });
var isOption = (input)=>!!(input && typeof input === "object" && "__option" in input && (input.__option === "Some" && "value" in input || input.__option === "None"));
var isSome = (option)=>option.__option === "Some";
var isNone = (option)=>option.__option === "None";
// src/unwrap-option.ts
function unwrapOption(option, fallback) {
    if (isSome(option)) return option.value;
    return fallback ? fallback() : null;
}
var wrapNullable = (nullable)=>nullable !== null ? some(nullable) : none();
// src/option-codec.ts
function getOptionEncoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnitEncoder"])(), (_boolean)=>void 0);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBooleanEncoder"])({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixEncoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnitEncoder"])(), item.fixedSize);
        }
        if (!config.noneValue) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnitEncoder"])();
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConstantEncoder"])(config.noneValue);
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnionEncoder"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTupleEncoder"])([
            prefix,
            noneValue
        ]), (_value)=>[
                false,
                void 0
            ]),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTupleEncoder"])([
            prefix,
            item
        ]), (value)=>[
                true,
                isOption(value) && isSome(value) ? value.value : value
            ])
    ], (variant)=>{
        const option = isOption(variant) ? variant : wrapNullable(variant);
        return Number(isSome(option));
    });
}
function getOptionDecoder(item, config = {}) {
    const prefix = (()=>{
        if (config.prefix === null) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnitDecoder"])(), ()=>false);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBooleanDecoder"])({
            size: config.prefix ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        });
    })();
    const noneValue = (()=>{
        if (config.noneValue === "zeroes") {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertIsFixedSize"])(item);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fixDecoderSize"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnitDecoder"])(), item.fixedSize);
        }
        if (!config.noneValue) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnitDecoder"])();
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConstantDecoder"])(config.noneValue);
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUnionDecoder"])([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTupleDecoder"])([
            prefix,
            noneValue
        ]), ()=>none()),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTupleDecoder"])([
            prefix,
            item
        ]), ([, value])=>some(value))
    ], (bytes, offset)=>{
        if (config.prefix === null && !config.noneValue) {
            return Number(offset < bytes.length);
        }
        if (config.prefix === null && config.noneValue != null) {
            const zeroValue = config.noneValue === "zeroes" ? new Uint8Array(noneValue.fixedSize).fill(0) : config.noneValue;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(bytes, zeroValue, offset) ? 0 : 1;
        }
        return Number(prefix.read(bytes, offset)[0]);
    });
}
function getOptionCodec(item, config = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getOptionEncoder(item, config), getOptionDecoder(item, config));
}
// src/unwrap-option-recursively.ts
function unwrapOptionRecursively(input, fallback) {
    if (!input || ArrayBuffer.isView(input)) {
        return input;
    }
    const next = (x)=>fallback ? unwrapOptionRecursively(x, fallback) : unwrapOptionRecursively(x);
    if (isOption(input)) {
        if (isSome(input)) return next(input.value);
        return fallback ? fallback() : null;
    }
    if (Array.isArray(input)) {
        return input.map(next);
    }
    if (typeof input === "object") {
        return Object.fromEntries(Object.entries(input).map(([k, v])=>[
                k,
                next(v)
            ]));
    }
    return input;
}
;
 //# sourceMappingURL=index.node.mjs.map
 //# sourceMappingURL=index.node.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@solana-program/token/dist/src/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AMOUNT_TO_UI_AMOUNT_DISCRIMINATOR",
    ()=>AMOUNT_TO_UI_AMOUNT_DISCRIMINATOR,
    "APPROVE_CHECKED_DISCRIMINATOR",
    ()=>APPROVE_CHECKED_DISCRIMINATOR,
    "APPROVE_DISCRIMINATOR",
    ()=>APPROVE_DISCRIMINATOR,
    "ASSOCIATED_TOKEN_ERROR__INVALID_OWNER",
    ()=>ASSOCIATED_TOKEN_ERROR__INVALID_OWNER,
    "ASSOCIATED_TOKEN_PROGRAM_ADDRESS",
    ()=>ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
    "AccountState",
    ()=>AccountState,
    "AssociatedTokenInstruction",
    ()=>AssociatedTokenInstruction,
    "AuthorityType",
    ()=>AuthorityType,
    "BURN_CHECKED_DISCRIMINATOR",
    ()=>BURN_CHECKED_DISCRIMINATOR,
    "BURN_DISCRIMINATOR",
    ()=>BURN_DISCRIMINATOR,
    "CLOSE_ACCOUNT_DISCRIMINATOR",
    ()=>CLOSE_ACCOUNT_DISCRIMINATOR,
    "CREATE_ASSOCIATED_TOKEN_DISCRIMINATOR",
    ()=>CREATE_ASSOCIATED_TOKEN_DISCRIMINATOR,
    "CREATE_ASSOCIATED_TOKEN_IDEMPOTENT_DISCRIMINATOR",
    ()=>CREATE_ASSOCIATED_TOKEN_IDEMPOTENT_DISCRIMINATOR,
    "FREEZE_ACCOUNT_DISCRIMINATOR",
    ()=>FREEZE_ACCOUNT_DISCRIMINATOR,
    "GET_ACCOUNT_DATA_SIZE_DISCRIMINATOR",
    ()=>GET_ACCOUNT_DATA_SIZE_DISCRIMINATOR,
    "INITIALIZE_ACCOUNT2_DISCRIMINATOR",
    ()=>INITIALIZE_ACCOUNT2_DISCRIMINATOR,
    "INITIALIZE_ACCOUNT3_DISCRIMINATOR",
    ()=>INITIALIZE_ACCOUNT3_DISCRIMINATOR,
    "INITIALIZE_ACCOUNT_DISCRIMINATOR",
    ()=>INITIALIZE_ACCOUNT_DISCRIMINATOR,
    "INITIALIZE_IMMUTABLE_OWNER_DISCRIMINATOR",
    ()=>INITIALIZE_IMMUTABLE_OWNER_DISCRIMINATOR,
    "INITIALIZE_MINT2_DISCRIMINATOR",
    ()=>INITIALIZE_MINT2_DISCRIMINATOR,
    "INITIALIZE_MINT_DISCRIMINATOR",
    ()=>INITIALIZE_MINT_DISCRIMINATOR,
    "INITIALIZE_MULTISIG2_DISCRIMINATOR",
    ()=>INITIALIZE_MULTISIG2_DISCRIMINATOR,
    "INITIALIZE_MULTISIG_DISCRIMINATOR",
    ()=>INITIALIZE_MULTISIG_DISCRIMINATOR,
    "MINT_TO_CHECKED_DISCRIMINATOR",
    ()=>MINT_TO_CHECKED_DISCRIMINATOR,
    "MINT_TO_DISCRIMINATOR",
    ()=>MINT_TO_DISCRIMINATOR,
    "RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR",
    ()=>RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR,
    "REVOKE_DISCRIMINATOR",
    ()=>REVOKE_DISCRIMINATOR,
    "SET_AUTHORITY_DISCRIMINATOR",
    ()=>SET_AUTHORITY_DISCRIMINATOR,
    "SYNC_NATIVE_DISCRIMINATOR",
    ()=>SYNC_NATIVE_DISCRIMINATOR,
    "THAW_ACCOUNT_DISCRIMINATOR",
    ()=>THAW_ACCOUNT_DISCRIMINATOR,
    "TOKEN_ERROR__ACCOUNT_FROZEN",
    ()=>TOKEN_ERROR__ACCOUNT_FROZEN,
    "TOKEN_ERROR__ALREADY_IN_USE",
    ()=>TOKEN_ERROR__ALREADY_IN_USE,
    "TOKEN_ERROR__AUTHORITY_TYPE_NOT_SUPPORTED",
    ()=>TOKEN_ERROR__AUTHORITY_TYPE_NOT_SUPPORTED,
    "TOKEN_ERROR__FIXED_SUPPLY",
    ()=>TOKEN_ERROR__FIXED_SUPPLY,
    "TOKEN_ERROR__INSUFFICIENT_FUNDS",
    ()=>TOKEN_ERROR__INSUFFICIENT_FUNDS,
    "TOKEN_ERROR__INVALID_INSTRUCTION",
    ()=>TOKEN_ERROR__INVALID_INSTRUCTION,
    "TOKEN_ERROR__INVALID_MINT",
    ()=>TOKEN_ERROR__INVALID_MINT,
    "TOKEN_ERROR__INVALID_NUMBER_OF_PROVIDED_SIGNERS",
    ()=>TOKEN_ERROR__INVALID_NUMBER_OF_PROVIDED_SIGNERS,
    "TOKEN_ERROR__INVALID_NUMBER_OF_REQUIRED_SIGNERS",
    ()=>TOKEN_ERROR__INVALID_NUMBER_OF_REQUIRED_SIGNERS,
    "TOKEN_ERROR__INVALID_STATE",
    ()=>TOKEN_ERROR__INVALID_STATE,
    "TOKEN_ERROR__MINT_CANNOT_FREEZE",
    ()=>TOKEN_ERROR__MINT_CANNOT_FREEZE,
    "TOKEN_ERROR__MINT_DECIMALS_MISMATCH",
    ()=>TOKEN_ERROR__MINT_DECIMALS_MISMATCH,
    "TOKEN_ERROR__MINT_MISMATCH",
    ()=>TOKEN_ERROR__MINT_MISMATCH,
    "TOKEN_ERROR__NATIVE_NOT_SUPPORTED",
    ()=>TOKEN_ERROR__NATIVE_NOT_SUPPORTED,
    "TOKEN_ERROR__NON_NATIVE_HAS_BALANCE",
    ()=>TOKEN_ERROR__NON_NATIVE_HAS_BALANCE,
    "TOKEN_ERROR__NON_NATIVE_NOT_SUPPORTED",
    ()=>TOKEN_ERROR__NON_NATIVE_NOT_SUPPORTED,
    "TOKEN_ERROR__NOT_RENT_EXEMPT",
    ()=>TOKEN_ERROR__NOT_RENT_EXEMPT,
    "TOKEN_ERROR__OVERFLOW",
    ()=>TOKEN_ERROR__OVERFLOW,
    "TOKEN_ERROR__OWNER_MISMATCH",
    ()=>TOKEN_ERROR__OWNER_MISMATCH,
    "TOKEN_ERROR__UNINITIALIZED_STATE",
    ()=>TOKEN_ERROR__UNINITIALIZED_STATE,
    "TOKEN_PROGRAM_ADDRESS",
    ()=>TOKEN_PROGRAM_ADDRESS,
    "TRANSFER_CHECKED_DISCRIMINATOR",
    ()=>TRANSFER_CHECKED_DISCRIMINATOR,
    "TRANSFER_DISCRIMINATOR",
    ()=>TRANSFER_DISCRIMINATOR,
    "TokenAccount",
    ()=>TokenAccount,
    "TokenInstruction",
    ()=>TokenInstruction,
    "UI_AMOUNT_TO_AMOUNT_DISCRIMINATOR",
    ()=>UI_AMOUNT_TO_AMOUNT_DISCRIMINATOR,
    "decodeMint",
    ()=>decodeMint,
    "decodeMultisig",
    ()=>decodeMultisig,
    "decodeToken",
    ()=>decodeToken,
    "fetchAllMaybeMint",
    ()=>fetchAllMaybeMint,
    "fetchAllMaybeMultisig",
    ()=>fetchAllMaybeMultisig,
    "fetchAllMaybeToken",
    ()=>fetchAllMaybeToken,
    "fetchAllMint",
    ()=>fetchAllMint,
    "fetchAllMultisig",
    ()=>fetchAllMultisig,
    "fetchAllToken",
    ()=>fetchAllToken,
    "fetchMaybeMint",
    ()=>fetchMaybeMint,
    "fetchMaybeMultisig",
    ()=>fetchMaybeMultisig,
    "fetchMaybeToken",
    ()=>fetchMaybeToken,
    "fetchMint",
    ()=>fetchMint,
    "fetchMultisig",
    ()=>fetchMultisig,
    "fetchToken",
    ()=>fetchToken,
    "findAssociatedTokenPda",
    ()=>findAssociatedTokenPda,
    "getAccountStateCodec",
    ()=>getAccountStateCodec,
    "getAccountStateDecoder",
    ()=>getAccountStateDecoder,
    "getAccountStateEncoder",
    ()=>getAccountStateEncoder,
    "getAmountToUiAmountDiscriminatorBytes",
    ()=>getAmountToUiAmountDiscriminatorBytes,
    "getAmountToUiAmountInstruction",
    ()=>getAmountToUiAmountInstruction,
    "getAmountToUiAmountInstructionDataCodec",
    ()=>getAmountToUiAmountInstructionDataCodec,
    "getAmountToUiAmountInstructionDataDecoder",
    ()=>getAmountToUiAmountInstructionDataDecoder,
    "getAmountToUiAmountInstructionDataEncoder",
    ()=>getAmountToUiAmountInstructionDataEncoder,
    "getApproveCheckedDiscriminatorBytes",
    ()=>getApproveCheckedDiscriminatorBytes,
    "getApproveCheckedInstruction",
    ()=>getApproveCheckedInstruction,
    "getApproveCheckedInstructionDataCodec",
    ()=>getApproveCheckedInstructionDataCodec,
    "getApproveCheckedInstructionDataDecoder",
    ()=>getApproveCheckedInstructionDataDecoder,
    "getApproveCheckedInstructionDataEncoder",
    ()=>getApproveCheckedInstructionDataEncoder,
    "getApproveDiscriminatorBytes",
    ()=>getApproveDiscriminatorBytes,
    "getApproveInstruction",
    ()=>getApproveInstruction,
    "getApproveInstructionDataCodec",
    ()=>getApproveInstructionDataCodec,
    "getApproveInstructionDataDecoder",
    ()=>getApproveInstructionDataDecoder,
    "getApproveInstructionDataEncoder",
    ()=>getApproveInstructionDataEncoder,
    "getAssociatedTokenErrorMessage",
    ()=>getAssociatedTokenErrorMessage,
    "getAuthorityTypeCodec",
    ()=>getAuthorityTypeCodec,
    "getAuthorityTypeDecoder",
    ()=>getAuthorityTypeDecoder,
    "getAuthorityTypeEncoder",
    ()=>getAuthorityTypeEncoder,
    "getBurnCheckedDiscriminatorBytes",
    ()=>getBurnCheckedDiscriminatorBytes,
    "getBurnCheckedInstruction",
    ()=>getBurnCheckedInstruction,
    "getBurnCheckedInstructionDataCodec",
    ()=>getBurnCheckedInstructionDataCodec,
    "getBurnCheckedInstructionDataDecoder",
    ()=>getBurnCheckedInstructionDataDecoder,
    "getBurnCheckedInstructionDataEncoder",
    ()=>getBurnCheckedInstructionDataEncoder,
    "getBurnDiscriminatorBytes",
    ()=>getBurnDiscriminatorBytes,
    "getBurnInstruction",
    ()=>getBurnInstruction,
    "getBurnInstructionDataCodec",
    ()=>getBurnInstructionDataCodec,
    "getBurnInstructionDataDecoder",
    ()=>getBurnInstructionDataDecoder,
    "getBurnInstructionDataEncoder",
    ()=>getBurnInstructionDataEncoder,
    "getCloseAccountDiscriminatorBytes",
    ()=>getCloseAccountDiscriminatorBytes,
    "getCloseAccountInstruction",
    ()=>getCloseAccountInstruction,
    "getCloseAccountInstructionDataCodec",
    ()=>getCloseAccountInstructionDataCodec,
    "getCloseAccountInstructionDataDecoder",
    ()=>getCloseAccountInstructionDataDecoder,
    "getCloseAccountInstructionDataEncoder",
    ()=>getCloseAccountInstructionDataEncoder,
    "getCreateAssociatedTokenDiscriminatorBytes",
    ()=>getCreateAssociatedTokenDiscriminatorBytes,
    "getCreateAssociatedTokenIdempotentDiscriminatorBytes",
    ()=>getCreateAssociatedTokenIdempotentDiscriminatorBytes,
    "getCreateAssociatedTokenIdempotentInstruction",
    ()=>getCreateAssociatedTokenIdempotentInstruction,
    "getCreateAssociatedTokenIdempotentInstructionAsync",
    ()=>getCreateAssociatedTokenIdempotentInstructionAsync,
    "getCreateAssociatedTokenIdempotentInstructionDataCodec",
    ()=>getCreateAssociatedTokenIdempotentInstructionDataCodec,
    "getCreateAssociatedTokenIdempotentInstructionDataDecoder",
    ()=>getCreateAssociatedTokenIdempotentInstructionDataDecoder,
    "getCreateAssociatedTokenIdempotentInstructionDataEncoder",
    ()=>getCreateAssociatedTokenIdempotentInstructionDataEncoder,
    "getCreateAssociatedTokenInstruction",
    ()=>getCreateAssociatedTokenInstruction,
    "getCreateAssociatedTokenInstructionAsync",
    ()=>getCreateAssociatedTokenInstructionAsync,
    "getCreateAssociatedTokenInstructionDataCodec",
    ()=>getCreateAssociatedTokenInstructionDataCodec,
    "getCreateAssociatedTokenInstructionDataDecoder",
    ()=>getCreateAssociatedTokenInstructionDataDecoder,
    "getCreateAssociatedTokenInstructionDataEncoder",
    ()=>getCreateAssociatedTokenInstructionDataEncoder,
    "getFreezeAccountDiscriminatorBytes",
    ()=>getFreezeAccountDiscriminatorBytes,
    "getFreezeAccountInstruction",
    ()=>getFreezeAccountInstruction,
    "getFreezeAccountInstructionDataCodec",
    ()=>getFreezeAccountInstructionDataCodec,
    "getFreezeAccountInstructionDataDecoder",
    ()=>getFreezeAccountInstructionDataDecoder,
    "getFreezeAccountInstructionDataEncoder",
    ()=>getFreezeAccountInstructionDataEncoder,
    "getGetAccountDataSizeDiscriminatorBytes",
    ()=>getGetAccountDataSizeDiscriminatorBytes,
    "getGetAccountDataSizeInstruction",
    ()=>getGetAccountDataSizeInstruction,
    "getGetAccountDataSizeInstructionDataCodec",
    ()=>getGetAccountDataSizeInstructionDataCodec,
    "getGetAccountDataSizeInstructionDataDecoder",
    ()=>getGetAccountDataSizeInstructionDataDecoder,
    "getGetAccountDataSizeInstructionDataEncoder",
    ()=>getGetAccountDataSizeInstructionDataEncoder,
    "getInitializeAccount2DiscriminatorBytes",
    ()=>getInitializeAccount2DiscriminatorBytes,
    "getInitializeAccount2Instruction",
    ()=>getInitializeAccount2Instruction,
    "getInitializeAccount2InstructionDataCodec",
    ()=>getInitializeAccount2InstructionDataCodec,
    "getInitializeAccount2InstructionDataDecoder",
    ()=>getInitializeAccount2InstructionDataDecoder,
    "getInitializeAccount2InstructionDataEncoder",
    ()=>getInitializeAccount2InstructionDataEncoder,
    "getInitializeAccount3DiscriminatorBytes",
    ()=>getInitializeAccount3DiscriminatorBytes,
    "getInitializeAccount3Instruction",
    ()=>getInitializeAccount3Instruction,
    "getInitializeAccount3InstructionDataCodec",
    ()=>getInitializeAccount3InstructionDataCodec,
    "getInitializeAccount3InstructionDataDecoder",
    ()=>getInitializeAccount3InstructionDataDecoder,
    "getInitializeAccount3InstructionDataEncoder",
    ()=>getInitializeAccount3InstructionDataEncoder,
    "getInitializeAccountDiscriminatorBytes",
    ()=>getInitializeAccountDiscriminatorBytes,
    "getInitializeAccountInstruction",
    ()=>getInitializeAccountInstruction,
    "getInitializeAccountInstructionDataCodec",
    ()=>getInitializeAccountInstructionDataCodec,
    "getInitializeAccountInstructionDataDecoder",
    ()=>getInitializeAccountInstructionDataDecoder,
    "getInitializeAccountInstructionDataEncoder",
    ()=>getInitializeAccountInstructionDataEncoder,
    "getInitializeImmutableOwnerDiscriminatorBytes",
    ()=>getInitializeImmutableOwnerDiscriminatorBytes,
    "getInitializeImmutableOwnerInstruction",
    ()=>getInitializeImmutableOwnerInstruction,
    "getInitializeImmutableOwnerInstructionDataCodec",
    ()=>getInitializeImmutableOwnerInstructionDataCodec,
    "getInitializeImmutableOwnerInstructionDataDecoder",
    ()=>getInitializeImmutableOwnerInstructionDataDecoder,
    "getInitializeImmutableOwnerInstructionDataEncoder",
    ()=>getInitializeImmutableOwnerInstructionDataEncoder,
    "getInitializeMint2DiscriminatorBytes",
    ()=>getInitializeMint2DiscriminatorBytes,
    "getInitializeMint2Instruction",
    ()=>getInitializeMint2Instruction,
    "getInitializeMint2InstructionDataCodec",
    ()=>getInitializeMint2InstructionDataCodec,
    "getInitializeMint2InstructionDataDecoder",
    ()=>getInitializeMint2InstructionDataDecoder,
    "getInitializeMint2InstructionDataEncoder",
    ()=>getInitializeMint2InstructionDataEncoder,
    "getInitializeMintDiscriminatorBytes",
    ()=>getInitializeMintDiscriminatorBytes,
    "getInitializeMintInstruction",
    ()=>getInitializeMintInstruction,
    "getInitializeMintInstructionDataCodec",
    ()=>getInitializeMintInstructionDataCodec,
    "getInitializeMintInstructionDataDecoder",
    ()=>getInitializeMintInstructionDataDecoder,
    "getInitializeMintInstructionDataEncoder",
    ()=>getInitializeMintInstructionDataEncoder,
    "getInitializeMultisig2DiscriminatorBytes",
    ()=>getInitializeMultisig2DiscriminatorBytes,
    "getInitializeMultisig2Instruction",
    ()=>getInitializeMultisig2Instruction,
    "getInitializeMultisig2InstructionDataCodec",
    ()=>getInitializeMultisig2InstructionDataCodec,
    "getInitializeMultisig2InstructionDataDecoder",
    ()=>getInitializeMultisig2InstructionDataDecoder,
    "getInitializeMultisig2InstructionDataEncoder",
    ()=>getInitializeMultisig2InstructionDataEncoder,
    "getInitializeMultisigDiscriminatorBytes",
    ()=>getInitializeMultisigDiscriminatorBytes,
    "getInitializeMultisigInstruction",
    ()=>getInitializeMultisigInstruction,
    "getInitializeMultisigInstructionDataCodec",
    ()=>getInitializeMultisigInstructionDataCodec,
    "getInitializeMultisigInstructionDataDecoder",
    ()=>getInitializeMultisigInstructionDataDecoder,
    "getInitializeMultisigInstructionDataEncoder",
    ()=>getInitializeMultisigInstructionDataEncoder,
    "getMintCodec",
    ()=>getMintCodec,
    "getMintDecoder",
    ()=>getMintDecoder,
    "getMintEncoder",
    ()=>getMintEncoder,
    "getMintSize",
    ()=>getMintSize,
    "getMintToCheckedDiscriminatorBytes",
    ()=>getMintToCheckedDiscriminatorBytes,
    "getMintToCheckedInstruction",
    ()=>getMintToCheckedInstruction,
    "getMintToCheckedInstructionDataCodec",
    ()=>getMintToCheckedInstructionDataCodec,
    "getMintToCheckedInstructionDataDecoder",
    ()=>getMintToCheckedInstructionDataDecoder,
    "getMintToCheckedInstructionDataEncoder",
    ()=>getMintToCheckedInstructionDataEncoder,
    "getMintToDiscriminatorBytes",
    ()=>getMintToDiscriminatorBytes,
    "getMintToInstruction",
    ()=>getMintToInstruction,
    "getMintToInstructionDataCodec",
    ()=>getMintToInstructionDataCodec,
    "getMintToInstructionDataDecoder",
    ()=>getMintToInstructionDataDecoder,
    "getMintToInstructionDataEncoder",
    ()=>getMintToInstructionDataEncoder,
    "getMultisigCodec",
    ()=>getMultisigCodec,
    "getMultisigDecoder",
    ()=>getMultisigDecoder,
    "getMultisigEncoder",
    ()=>getMultisigEncoder,
    "getMultisigSize",
    ()=>getMultisigSize,
    "getRecoverNestedAssociatedTokenDiscriminatorBytes",
    ()=>getRecoverNestedAssociatedTokenDiscriminatorBytes,
    "getRecoverNestedAssociatedTokenInstruction",
    ()=>getRecoverNestedAssociatedTokenInstruction,
    "getRecoverNestedAssociatedTokenInstructionAsync",
    ()=>getRecoverNestedAssociatedTokenInstructionAsync,
    "getRecoverNestedAssociatedTokenInstructionDataCodec",
    ()=>getRecoverNestedAssociatedTokenInstructionDataCodec,
    "getRecoverNestedAssociatedTokenInstructionDataDecoder",
    ()=>getRecoverNestedAssociatedTokenInstructionDataDecoder,
    "getRecoverNestedAssociatedTokenInstructionDataEncoder",
    ()=>getRecoverNestedAssociatedTokenInstructionDataEncoder,
    "getRevokeDiscriminatorBytes",
    ()=>getRevokeDiscriminatorBytes,
    "getRevokeInstruction",
    ()=>getRevokeInstruction,
    "getRevokeInstructionDataCodec",
    ()=>getRevokeInstructionDataCodec,
    "getRevokeInstructionDataDecoder",
    ()=>getRevokeInstructionDataDecoder,
    "getRevokeInstructionDataEncoder",
    ()=>getRevokeInstructionDataEncoder,
    "getSetAuthorityDiscriminatorBytes",
    ()=>getSetAuthorityDiscriminatorBytes,
    "getSetAuthorityInstruction",
    ()=>getSetAuthorityInstruction,
    "getSetAuthorityInstructionDataCodec",
    ()=>getSetAuthorityInstructionDataCodec,
    "getSetAuthorityInstructionDataDecoder",
    ()=>getSetAuthorityInstructionDataDecoder,
    "getSetAuthorityInstructionDataEncoder",
    ()=>getSetAuthorityInstructionDataEncoder,
    "getSyncNativeDiscriminatorBytes",
    ()=>getSyncNativeDiscriminatorBytes,
    "getSyncNativeInstruction",
    ()=>getSyncNativeInstruction,
    "getSyncNativeInstructionDataCodec",
    ()=>getSyncNativeInstructionDataCodec,
    "getSyncNativeInstructionDataDecoder",
    ()=>getSyncNativeInstructionDataDecoder,
    "getSyncNativeInstructionDataEncoder",
    ()=>getSyncNativeInstructionDataEncoder,
    "getThawAccountDiscriminatorBytes",
    ()=>getThawAccountDiscriminatorBytes,
    "getThawAccountInstruction",
    ()=>getThawAccountInstruction,
    "getThawAccountInstructionDataCodec",
    ()=>getThawAccountInstructionDataCodec,
    "getThawAccountInstructionDataDecoder",
    ()=>getThawAccountInstructionDataDecoder,
    "getThawAccountInstructionDataEncoder",
    ()=>getThawAccountInstructionDataEncoder,
    "getTokenCodec",
    ()=>getTokenCodec,
    "getTokenDecoder",
    ()=>getTokenDecoder,
    "getTokenEncoder",
    ()=>getTokenEncoder,
    "getTokenErrorMessage",
    ()=>getTokenErrorMessage,
    "getTokenSize",
    ()=>getTokenSize,
    "getTransferCheckedDiscriminatorBytes",
    ()=>getTransferCheckedDiscriminatorBytes,
    "getTransferCheckedInstruction",
    ()=>getTransferCheckedInstruction,
    "getTransferCheckedInstructionDataCodec",
    ()=>getTransferCheckedInstructionDataCodec,
    "getTransferCheckedInstructionDataDecoder",
    ()=>getTransferCheckedInstructionDataDecoder,
    "getTransferCheckedInstructionDataEncoder",
    ()=>getTransferCheckedInstructionDataEncoder,
    "getTransferDiscriminatorBytes",
    ()=>getTransferDiscriminatorBytes,
    "getTransferInstruction",
    ()=>getTransferInstruction,
    "getTransferInstructionDataCodec",
    ()=>getTransferInstructionDataCodec,
    "getTransferInstructionDataDecoder",
    ()=>getTransferInstructionDataDecoder,
    "getTransferInstructionDataEncoder",
    ()=>getTransferInstructionDataEncoder,
    "getUiAmountToAmountDiscriminatorBytes",
    ()=>getUiAmountToAmountDiscriminatorBytes,
    "getUiAmountToAmountInstruction",
    ()=>getUiAmountToAmountInstruction,
    "getUiAmountToAmountInstructionDataCodec",
    ()=>getUiAmountToAmountInstructionDataCodec,
    "getUiAmountToAmountInstructionDataDecoder",
    ()=>getUiAmountToAmountInstructionDataDecoder,
    "getUiAmountToAmountInstructionDataEncoder",
    ()=>getUiAmountToAmountInstructionDataEncoder,
    "identifyAssociatedTokenInstruction",
    ()=>identifyAssociatedTokenInstruction,
    "identifyTokenAccount",
    ()=>identifyTokenAccount,
    "identifyTokenInstruction",
    ()=>identifyTokenInstruction,
    "isAssociatedTokenError",
    ()=>isAssociatedTokenError,
    "isTokenError",
    ()=>isTokenError,
    "parseAmountToUiAmountInstruction",
    ()=>parseAmountToUiAmountInstruction,
    "parseApproveCheckedInstruction",
    ()=>parseApproveCheckedInstruction,
    "parseApproveInstruction",
    ()=>parseApproveInstruction,
    "parseBurnCheckedInstruction",
    ()=>parseBurnCheckedInstruction,
    "parseBurnInstruction",
    ()=>parseBurnInstruction,
    "parseCloseAccountInstruction",
    ()=>parseCloseAccountInstruction,
    "parseCreateAssociatedTokenIdempotentInstruction",
    ()=>parseCreateAssociatedTokenIdempotentInstruction,
    "parseCreateAssociatedTokenInstruction",
    ()=>parseCreateAssociatedTokenInstruction,
    "parseFreezeAccountInstruction",
    ()=>parseFreezeAccountInstruction,
    "parseGetAccountDataSizeInstruction",
    ()=>parseGetAccountDataSizeInstruction,
    "parseInitializeAccount2Instruction",
    ()=>parseInitializeAccount2Instruction,
    "parseInitializeAccount3Instruction",
    ()=>parseInitializeAccount3Instruction,
    "parseInitializeAccountInstruction",
    ()=>parseInitializeAccountInstruction,
    "parseInitializeImmutableOwnerInstruction",
    ()=>parseInitializeImmutableOwnerInstruction,
    "parseInitializeMint2Instruction",
    ()=>parseInitializeMint2Instruction,
    "parseInitializeMintInstruction",
    ()=>parseInitializeMintInstruction,
    "parseInitializeMultisig2Instruction",
    ()=>parseInitializeMultisig2Instruction,
    "parseInitializeMultisigInstruction",
    ()=>parseInitializeMultisigInstruction,
    "parseMintToCheckedInstruction",
    ()=>parseMintToCheckedInstruction,
    "parseMintToInstruction",
    ()=>parseMintToInstruction,
    "parseRecoverNestedAssociatedTokenInstruction",
    ()=>parseRecoverNestedAssociatedTokenInstruction,
    "parseRevokeInstruction",
    ()=>parseRevokeInstruction,
    "parseSetAuthorityInstruction",
    ()=>parseSetAuthorityInstruction,
    "parseSyncNativeInstruction",
    ()=>parseSyncNativeInstruction,
    "parseThawAccountInstruction",
    ()=>parseThawAccountInstruction,
    "parseTransferCheckedInstruction",
    ()=>parseTransferCheckedInstruction,
    "parseTransferInstruction",
    ()=>parseTransferInstruction,
    "parseUiAmountToAmountInstruction",
    ()=>parseUiAmountToAmountInstruction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-data-structures/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/options/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/addresses/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-numbers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-core/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/accounts/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$programs$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/programs/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/instructions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/codecs-strings/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/signers/dist/index.node.mjs [app-ssr] (ecmascript)");
;
// src/generated/accounts/mint.ts
function getMintEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "mintAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])(), {
                prefix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])(),
                noneValue: "zeroes"
            })
        ],
        [
            "supply",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "isInitialized",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBooleanEncoder"])()
        ],
        [
            "freezeAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])(), {
                prefix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])(),
                noneValue: "zeroes"
            })
        ]
    ]);
}
function getMintDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "mintAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])(), {
                prefix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])(),
                noneValue: "zeroes"
            })
        ],
        [
            "supply",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "isInitialized",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBooleanDecoder"])()
        ],
        [
            "freezeAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])(), {
                prefix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])(),
                noneValue: "zeroes"
            })
        ]
    ]);
}
function getMintCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getMintEncoder(), getMintDecoder());
}
function decodeMint(encodedAccount) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeAccount"])(encodedAccount, getMintDecoder());
}
async function fetchMint(rpc, address, config) {
    const maybeAccount = await fetchMaybeMint(rpc, address, config);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAccountExists"])(maybeAccount);
    return maybeAccount;
}
async function fetchMaybeMint(rpc, address, config) {
    const maybeAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchEncodedAccount"])(rpc, address, config);
    return decodeMint(maybeAccount);
}
async function fetchAllMint(rpc, addresses, config) {
    const maybeAccounts = await fetchAllMaybeMint(rpc, addresses, config);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAccountsExist"])(maybeAccounts);
    return maybeAccounts;
}
async function fetchAllMaybeMint(rpc, addresses, config) {
    const maybeAccounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchEncodedAccounts"])(rpc, addresses, config);
    return maybeAccounts.map((maybeAccount)=>decodeMint(maybeAccount));
}
function getMintSize() {
    return 82;
}
function getMultisigEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "m",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "isInitialized",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBooleanEncoder"])()
        ],
        [
            "signers",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])(), {
                size: 11
            })
        ]
    ]);
}
function getMultisigDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "m",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "isInitialized",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBooleanDecoder"])()
        ],
        [
            "signers",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getArrayDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])(), {
                size: 11
            })
        ]
    ]);
}
function getMultisigCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getMultisigEncoder(), getMultisigDecoder());
}
function decodeMultisig(encodedAccount) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeAccount"])(encodedAccount, getMultisigDecoder());
}
async function fetchMultisig(rpc, address, config) {
    const maybeAccount = await fetchMaybeMultisig(rpc, address, config);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAccountExists"])(maybeAccount);
    return maybeAccount;
}
async function fetchMaybeMultisig(rpc, address, config) {
    const maybeAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchEncodedAccount"])(rpc, address, config);
    return decodeMultisig(maybeAccount);
}
async function fetchAllMultisig(rpc, addresses, config) {
    const maybeAccounts = await fetchAllMaybeMultisig(rpc, addresses, config);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAccountsExist"])(maybeAccounts);
    return maybeAccounts;
}
async function fetchAllMaybeMultisig(rpc, addresses, config) {
    const maybeAccounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchEncodedAccounts"])(rpc, addresses, config);
    return maybeAccounts.map((maybeAccount)=>decodeMultisig(maybeAccount));
}
function getMultisigSize() {
    return 355;
}
var AccountState = /* @__PURE__ */ ((AccountState2)=>{
    AccountState2[AccountState2["Uninitialized"] = 0] = "Uninitialized";
    AccountState2[AccountState2["Initialized"] = 1] = "Initialized";
    AccountState2[AccountState2["Frozen"] = 2] = "Frozen";
    return AccountState2;
})(AccountState || {});
function getAccountStateEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnumEncoder"])(AccountState);
}
function getAccountStateDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnumDecoder"])(AccountState);
}
function getAccountStateCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getAccountStateEncoder(), getAccountStateDecoder());
}
var AuthorityType = /* @__PURE__ */ ((AuthorityType2)=>{
    AuthorityType2[AuthorityType2["MintTokens"] = 0] = "MintTokens";
    AuthorityType2[AuthorityType2["FreezeAccount"] = 1] = "FreezeAccount";
    AuthorityType2[AuthorityType2["AccountOwner"] = 2] = "AccountOwner";
    AuthorityType2[AuthorityType2["CloseAccount"] = 3] = "CloseAccount";
    return AuthorityType2;
})(AuthorityType || {});
function getAuthorityTypeEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnumEncoder"])(AuthorityType);
}
function getAuthorityTypeDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnumDecoder"])(AuthorityType);
}
function getAuthorityTypeCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getAuthorityTypeEncoder(), getAuthorityTypeDecoder());
}
// src/generated/accounts/token.ts
function getTokenEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "mint",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ],
        [
            "owner",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "delegate",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])(), {
                prefix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])(),
                noneValue: "zeroes"
            })
        ],
        [
            "state",
            getAccountStateEncoder()
        ],
        [
            "isNative",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])(), {
                prefix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])(),
                noneValue: "zeroes"
            })
        ],
        [
            "delegatedAmount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "closeAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])(), {
                prefix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Encoder"])(),
                noneValue: "zeroes"
            })
        ]
    ]);
}
function getTokenDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "mint",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ],
        [
            "owner",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "delegate",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])(), {
                prefix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])(),
                noneValue: "zeroes"
            })
        ],
        [
            "state",
            getAccountStateDecoder()
        ],
        [
            "isNative",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])(), {
                prefix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])(),
                noneValue: "zeroes"
            })
        ],
        [
            "delegatedAmount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "closeAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])(), {
                prefix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU32Decoder"])(),
                noneValue: "zeroes"
            })
        ]
    ]);
}
function getTokenCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getTokenEncoder(), getTokenDecoder());
}
function decodeToken(encodedAccount) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeAccount"])(encodedAccount, getTokenDecoder());
}
async function fetchToken(rpc, address, config) {
    const maybeAccount = await fetchMaybeToken(rpc, address, config);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAccountExists"])(maybeAccount);
    return maybeAccount;
}
async function fetchMaybeToken(rpc, address, config) {
    const maybeAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchEncodedAccount"])(rpc, address, config);
    return decodeToken(maybeAccount);
}
async function fetchAllToken(rpc, addresses, config) {
    const maybeAccounts = await fetchAllMaybeToken(rpc, addresses, config);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAccountsExist"])(maybeAccounts);
    return maybeAccounts;
}
async function fetchAllMaybeToken(rpc, addresses, config) {
    const maybeAccounts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$accounts$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchEncodedAccounts"])(rpc, addresses, config);
    return maybeAccounts.map((maybeAccount)=>decodeToken(maybeAccount));
}
function getTokenSize() {
    return 165;
}
var ASSOCIATED_TOKEN_PROGRAM_ADDRESS = "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";
var AssociatedTokenInstruction = /* @__PURE__ */ ((AssociatedTokenInstruction2)=>{
    AssociatedTokenInstruction2[AssociatedTokenInstruction2["CreateAssociatedToken"] = 0] = "CreateAssociatedToken";
    AssociatedTokenInstruction2[AssociatedTokenInstruction2["CreateAssociatedTokenIdempotent"] = 1] = "CreateAssociatedTokenIdempotent";
    AssociatedTokenInstruction2[AssociatedTokenInstruction2["RecoverNestedAssociatedToken"] = 2] = "RecoverNestedAssociatedToken";
    return AssociatedTokenInstruction2;
})(AssociatedTokenInstruction || {});
function identifyAssociatedTokenInstruction(instruction) {
    const data = "data" in instruction ? instruction.data : instruction;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(0), 0)) {
        return 0 /* CreateAssociatedToken */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(1), 0)) {
        return 1 /* CreateAssociatedTokenIdempotent */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(2), 0)) {
        return 2 /* RecoverNestedAssociatedToken */ ;
    }
    throw new Error("The provided instruction could not be identified as a associatedToken instruction.");
}
var TOKEN_PROGRAM_ADDRESS = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
var TokenAccount = /* @__PURE__ */ ((TokenAccount2)=>{
    TokenAccount2[TokenAccount2["Mint"] = 0] = "Mint";
    TokenAccount2[TokenAccount2["Token"] = 1] = "Token";
    TokenAccount2[TokenAccount2["Multisig"] = 2] = "Multisig";
    return TokenAccount2;
})(TokenAccount || {});
function identifyTokenAccount(account) {
    const data = "data" in account ? account.data : account;
    if (data.length === 82) {
        return 0 /* Mint */ ;
    }
    if (data.length === 165) {
        return 1 /* Token */ ;
    }
    if (data.length === 355) {
        return 2 /* Multisig */ ;
    }
    throw new Error("The provided account could not be identified as a token account.");
}
var TokenInstruction = /* @__PURE__ */ ((TokenInstruction2)=>{
    TokenInstruction2[TokenInstruction2["InitializeMint"] = 0] = "InitializeMint";
    TokenInstruction2[TokenInstruction2["InitializeAccount"] = 1] = "InitializeAccount";
    TokenInstruction2[TokenInstruction2["InitializeMultisig"] = 2] = "InitializeMultisig";
    TokenInstruction2[TokenInstruction2["Transfer"] = 3] = "Transfer";
    TokenInstruction2[TokenInstruction2["Approve"] = 4] = "Approve";
    TokenInstruction2[TokenInstruction2["Revoke"] = 5] = "Revoke";
    TokenInstruction2[TokenInstruction2["SetAuthority"] = 6] = "SetAuthority";
    TokenInstruction2[TokenInstruction2["MintTo"] = 7] = "MintTo";
    TokenInstruction2[TokenInstruction2["Burn"] = 8] = "Burn";
    TokenInstruction2[TokenInstruction2["CloseAccount"] = 9] = "CloseAccount";
    TokenInstruction2[TokenInstruction2["FreezeAccount"] = 10] = "FreezeAccount";
    TokenInstruction2[TokenInstruction2["ThawAccount"] = 11] = "ThawAccount";
    TokenInstruction2[TokenInstruction2["TransferChecked"] = 12] = "TransferChecked";
    TokenInstruction2[TokenInstruction2["ApproveChecked"] = 13] = "ApproveChecked";
    TokenInstruction2[TokenInstruction2["MintToChecked"] = 14] = "MintToChecked";
    TokenInstruction2[TokenInstruction2["BurnChecked"] = 15] = "BurnChecked";
    TokenInstruction2[TokenInstruction2["InitializeAccount2"] = 16] = "InitializeAccount2";
    TokenInstruction2[TokenInstruction2["SyncNative"] = 17] = "SyncNative";
    TokenInstruction2[TokenInstruction2["InitializeAccount3"] = 18] = "InitializeAccount3";
    TokenInstruction2[TokenInstruction2["InitializeMultisig2"] = 19] = "InitializeMultisig2";
    TokenInstruction2[TokenInstruction2["InitializeMint2"] = 20] = "InitializeMint2";
    TokenInstruction2[TokenInstruction2["GetAccountDataSize"] = 21] = "GetAccountDataSize";
    TokenInstruction2[TokenInstruction2["InitializeImmutableOwner"] = 22] = "InitializeImmutableOwner";
    TokenInstruction2[TokenInstruction2["AmountToUiAmount"] = 23] = "AmountToUiAmount";
    TokenInstruction2[TokenInstruction2["UiAmountToAmount"] = 24] = "UiAmountToAmount";
    return TokenInstruction2;
})(TokenInstruction || {});
function identifyTokenInstruction(instruction) {
    const data = "data" in instruction ? instruction.data : instruction;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(0), 0)) {
        return 0 /* InitializeMint */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(1), 0)) {
        return 1 /* InitializeAccount */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(2), 0)) {
        return 2 /* InitializeMultisig */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(3), 0)) {
        return 3 /* Transfer */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(4), 0)) {
        return 4 /* Approve */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(5), 0)) {
        return 5 /* Revoke */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(6), 0)) {
        return 6 /* SetAuthority */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(7), 0)) {
        return 7 /* MintTo */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(8), 0)) {
        return 8 /* Burn */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(9), 0)) {
        return 9 /* CloseAccount */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(10), 0)) {
        return 10 /* FreezeAccount */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(11), 0)) {
        return 11 /* ThawAccount */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(12), 0)) {
        return 12 /* TransferChecked */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(13), 0)) {
        return 13 /* ApproveChecked */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(14), 0)) {
        return 14 /* MintToChecked */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(15), 0)) {
        return 15 /* BurnChecked */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(16), 0)) {
        return 16 /* InitializeAccount2 */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(17), 0)) {
        return 17 /* SyncNative */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(18), 0)) {
        return 18 /* InitializeAccount3 */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(19), 0)) {
        return 19 /* InitializeMultisig2 */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(20), 0)) {
        return 20 /* InitializeMint2 */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(21), 0)) {
        return 21 /* GetAccountDataSize */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(22), 0)) {
        return 22 /* InitializeImmutableOwner */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(23), 0)) {
        return 23 /* AmountToUiAmount */ ;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["containsBytes"])(data, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(24), 0)) {
        return 24 /* UiAmountToAmount */ ;
    }
    throw new Error("The provided instruction could not be identified as a token instruction.");
}
// src/generated/errors/associatedToken.ts
var ASSOCIATED_TOKEN_ERROR__INVALID_OWNER = 0;
var associatedTokenErrorMessages;
if (("TURBOPACK compile-time value", "development") !== "production") {
    associatedTokenErrorMessages = {
        [ASSOCIATED_TOKEN_ERROR__INVALID_OWNER]: `Associated token account owner does not match address derivation`
    };
}
function getAssociatedTokenErrorMessage(code) {
    if ("TURBOPACK compile-time truthy", 1) {
        return associatedTokenErrorMessages[code];
    }
    //TURBOPACK unreachable
    ;
}
function isAssociatedTokenError(error, transactionMessage, code) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$programs$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProgramError"])(error, transactionMessage, ASSOCIATED_TOKEN_PROGRAM_ADDRESS, code);
}
var TOKEN_ERROR__NOT_RENT_EXEMPT = 0;
var TOKEN_ERROR__INSUFFICIENT_FUNDS = 1;
var TOKEN_ERROR__INVALID_MINT = 2;
var TOKEN_ERROR__MINT_MISMATCH = 3;
var TOKEN_ERROR__OWNER_MISMATCH = 4;
var TOKEN_ERROR__FIXED_SUPPLY = 5;
var TOKEN_ERROR__ALREADY_IN_USE = 6;
var TOKEN_ERROR__INVALID_NUMBER_OF_PROVIDED_SIGNERS = 7;
var TOKEN_ERROR__INVALID_NUMBER_OF_REQUIRED_SIGNERS = 8;
var TOKEN_ERROR__UNINITIALIZED_STATE = 9;
var TOKEN_ERROR__NATIVE_NOT_SUPPORTED = 10;
var TOKEN_ERROR__NON_NATIVE_HAS_BALANCE = 11;
var TOKEN_ERROR__INVALID_INSTRUCTION = 12;
var TOKEN_ERROR__INVALID_STATE = 13;
var TOKEN_ERROR__OVERFLOW = 14;
var TOKEN_ERROR__AUTHORITY_TYPE_NOT_SUPPORTED = 15;
var TOKEN_ERROR__MINT_CANNOT_FREEZE = 16;
var TOKEN_ERROR__ACCOUNT_FROZEN = 17;
var TOKEN_ERROR__MINT_DECIMALS_MISMATCH = 18;
var TOKEN_ERROR__NON_NATIVE_NOT_SUPPORTED = 19;
var tokenErrorMessages;
if (("TURBOPACK compile-time value", "development") !== "production") {
    tokenErrorMessages = {
        [TOKEN_ERROR__ACCOUNT_FROZEN]: `Account is frozen`,
        [TOKEN_ERROR__ALREADY_IN_USE]: `Already in use`,
        [TOKEN_ERROR__AUTHORITY_TYPE_NOT_SUPPORTED]: `Account does not support specified authority type`,
        [TOKEN_ERROR__FIXED_SUPPLY]: `Fixed supply`,
        [TOKEN_ERROR__INSUFFICIENT_FUNDS]: `Insufficient funds`,
        [TOKEN_ERROR__INVALID_INSTRUCTION]: `Invalid instruction`,
        [TOKEN_ERROR__INVALID_MINT]: `Invalid Mint`,
        [TOKEN_ERROR__INVALID_NUMBER_OF_PROVIDED_SIGNERS]: `Invalid number of provided signers`,
        [TOKEN_ERROR__INVALID_NUMBER_OF_REQUIRED_SIGNERS]: `Invalid number of required signers`,
        [TOKEN_ERROR__INVALID_STATE]: `State is invalid for requested operation`,
        [TOKEN_ERROR__MINT_CANNOT_FREEZE]: `This token mint cannot freeze accounts`,
        [TOKEN_ERROR__MINT_DECIMALS_MISMATCH]: `The provided decimals value different from the Mint decimals`,
        [TOKEN_ERROR__MINT_MISMATCH]: `Account not associated with this Mint`,
        [TOKEN_ERROR__NATIVE_NOT_SUPPORTED]: `Instruction does not support native tokens`,
        [TOKEN_ERROR__NON_NATIVE_HAS_BALANCE]: `Non-native account can only be closed if its balance is zero`,
        [TOKEN_ERROR__NON_NATIVE_NOT_SUPPORTED]: `Instruction does not support non-native tokens`,
        [TOKEN_ERROR__NOT_RENT_EXEMPT]: `Lamport balance below rent-exempt threshold`,
        [TOKEN_ERROR__OVERFLOW]: `Operation overflowed`,
        [TOKEN_ERROR__OWNER_MISMATCH]: `Owner does not match`,
        [TOKEN_ERROR__UNINITIALIZED_STATE]: `State is unititialized`
    };
}
function getTokenErrorMessage(code) {
    if ("TURBOPACK compile-time truthy", 1) {
        return tokenErrorMessages[code];
    }
    //TURBOPACK unreachable
    ;
}
function isTokenError(error, transactionMessage, code) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$programs$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isProgramError"])(error, transactionMessage, TOKEN_PROGRAM_ADDRESS, code);
}
function expectAddress(value) {
    if (!value) {
        throw new Error("Expected a Address.");
    }
    if (typeof value === "object" && "address" in value) {
        return value.address;
    }
    if (Array.isArray(value)) {
        return value[0];
    }
    return value;
}
function getAccountMetaFactory(programAddress, optionalAccountStrategy) {
    return (account)=>{
        if (!account.value) {
            return Object.freeze({
                address: programAddress,
                role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY
            });
        }
        const writableRole = account.isWritable ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].WRITABLE : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY;
        return Object.freeze({
            address: expectAddress(account.value),
            role: isTransactionSigner(account.value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upgradeRoleToSigner"])(writableRole) : writableRole,
            ...isTransactionSigner(account.value) ? {
                signer: account.value
            } : {}
        });
    };
}
function isTransactionSigner(value) {
    return !!value && typeof value === "object" && "address" in value && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTransactionSigner"])(value);
}
// src/generated/instructions/amountToUiAmount.ts
var AMOUNT_TO_UI_AMOUNT_DISCRIMINATOR = 23;
function getAmountToUiAmountDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(AMOUNT_TO_UI_AMOUNT_DISCRIMINATOR);
}
function getAmountToUiAmountInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: AMOUNT_TO_UI_AMOUNT_DISCRIMINATOR
        }));
}
function getAmountToUiAmountInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ]
    ]);
}
function getAmountToUiAmountInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getAmountToUiAmountInstructionDataEncoder(), getAmountToUiAmountInstructionDataDecoder());
}
function getAmountToUiAmountInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        mint: {
            value: input.mint ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.mint)
        ],
        programAddress,
        data: getAmountToUiAmountInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseAmountToUiAmountInstruction(instruction) {
    if (instruction.accounts.length < 1) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            mint: getNextAccount()
        },
        data: getAmountToUiAmountInstructionDataDecoder().decode(instruction.data)
    };
}
var APPROVE_DISCRIMINATOR = 4;
function getApproveDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(APPROVE_DISCRIMINATOR);
}
function getApproveInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: APPROVE_DISCRIMINATOR
        }));
}
function getApproveInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ]
    ]);
}
function getApproveInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getApproveInstructionDataEncoder(), getApproveInstructionDataDecoder());
}
function getApproveInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        source: {
            value: input.source ?? null,
            isWritable: true
        },
        delegate: {
            value: input.delegate ?? null,
            isWritable: false
        },
        owner: {
            value: input.owner ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = (args.multiSigners ?? []).map((signer)=>({
            address: signer.address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER,
            signer
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.source),
            getAccountMeta(accounts.delegate),
            getAccountMeta(accounts.owner),
            ...remainingAccounts
        ],
        programAddress,
        data: getApproveInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseApproveInstruction(instruction) {
    if (instruction.accounts.length < 3) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            source: getNextAccount(),
            delegate: getNextAccount(),
            owner: getNextAccount()
        },
        data: getApproveInstructionDataDecoder().decode(instruction.data)
    };
}
var APPROVE_CHECKED_DISCRIMINATOR = 13;
function getApproveCheckedDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(APPROVE_CHECKED_DISCRIMINATOR);
}
function getApproveCheckedInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: APPROVE_CHECKED_DISCRIMINATOR
        }));
}
function getApproveCheckedInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getApproveCheckedInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getApproveCheckedInstructionDataEncoder(), getApproveCheckedInstructionDataDecoder());
}
function getApproveCheckedInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        source: {
            value: input.source ?? null,
            isWritable: true
        },
        mint: {
            value: input.mint ?? null,
            isWritable: false
        },
        delegate: {
            value: input.delegate ?? null,
            isWritable: false
        },
        owner: {
            value: input.owner ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = (args.multiSigners ?? []).map((signer)=>({
            address: signer.address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER,
            signer
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.source),
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.delegate),
            getAccountMeta(accounts.owner),
            ...remainingAccounts
        ],
        programAddress,
        data: getApproveCheckedInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseApproveCheckedInstruction(instruction) {
    if (instruction.accounts.length < 4) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            source: getNextAccount(),
            mint: getNextAccount(),
            delegate: getNextAccount(),
            owner: getNextAccount()
        },
        data: getApproveCheckedInstructionDataDecoder().decode(instruction.data)
    };
}
var BURN_DISCRIMINATOR = 8;
function getBurnDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(BURN_DISCRIMINATOR);
}
function getBurnInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: BURN_DISCRIMINATOR
        }));
}
function getBurnInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ]
    ]);
}
function getBurnInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBurnInstructionDataEncoder(), getBurnInstructionDataDecoder());
}
function getBurnInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        account: {
            value: input.account ?? null,
            isWritable: true
        },
        mint: {
            value: input.mint ?? null,
            isWritable: true
        },
        authority: {
            value: input.authority ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = (args.multiSigners ?? []).map((signer)=>({
            address: signer.address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER,
            signer
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.account),
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.authority),
            ...remainingAccounts
        ],
        programAddress,
        data: getBurnInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseBurnInstruction(instruction) {
    if (instruction.accounts.length < 3) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            account: getNextAccount(),
            mint: getNextAccount(),
            authority: getNextAccount()
        },
        data: getBurnInstructionDataDecoder().decode(instruction.data)
    };
}
var BURN_CHECKED_DISCRIMINATOR = 15;
function getBurnCheckedDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(BURN_CHECKED_DISCRIMINATOR);
}
function getBurnCheckedInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: BURN_CHECKED_DISCRIMINATOR
        }));
}
function getBurnCheckedInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getBurnCheckedInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getBurnCheckedInstructionDataEncoder(), getBurnCheckedInstructionDataDecoder());
}
function getBurnCheckedInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        account: {
            value: input.account ?? null,
            isWritable: true
        },
        mint: {
            value: input.mint ?? null,
            isWritable: true
        },
        authority: {
            value: input.authority ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = (args.multiSigners ?? []).map((signer)=>({
            address: signer.address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER,
            signer
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.account),
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.authority),
            ...remainingAccounts
        ],
        programAddress,
        data: getBurnCheckedInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseBurnCheckedInstruction(instruction) {
    if (instruction.accounts.length < 3) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            account: getNextAccount(),
            mint: getNextAccount(),
            authority: getNextAccount()
        },
        data: getBurnCheckedInstructionDataDecoder().decode(instruction.data)
    };
}
var CLOSE_ACCOUNT_DISCRIMINATOR = 9;
function getCloseAccountDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(CLOSE_ACCOUNT_DISCRIMINATOR);
}
function getCloseAccountInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: CLOSE_ACCOUNT_DISCRIMINATOR
        }));
}
function getCloseAccountInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getCloseAccountInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getCloseAccountInstructionDataEncoder(), getCloseAccountInstructionDataDecoder());
}
function getCloseAccountInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        account: {
            value: input.account ?? null,
            isWritable: true
        },
        destination: {
            value: input.destination ?? null,
            isWritable: true
        },
        owner: {
            value: input.owner ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = (args.multiSigners ?? []).map((signer)=>({
            address: signer.address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER,
            signer
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.account),
            getAccountMeta(accounts.destination),
            getAccountMeta(accounts.owner),
            ...remainingAccounts
        ],
        programAddress,
        data: getCloseAccountInstructionDataEncoder().encode({})
    };
    return instruction;
}
function parseCloseAccountInstruction(instruction) {
    if (instruction.accounts.length < 3) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            account: getNextAccount(),
            destination: getNextAccount(),
            owner: getNextAccount()
        },
        data: getCloseAccountInstructionDataDecoder().decode(instruction.data)
    };
}
async function findAssociatedTokenPda(seeds, config = {}) {
    const { programAddress = "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL" } = config;
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProgramDerivedAddress"])({
        programAddress,
        seeds: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])().encode(seeds.owner),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])().encode(seeds.tokenProgram),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])().encode(seeds.mint)
        ]
    });
}
// src/generated/instructions/createAssociatedToken.ts
var CREATE_ASSOCIATED_TOKEN_DISCRIMINATOR = 0;
function getCreateAssociatedTokenDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(CREATE_ASSOCIATED_TOKEN_DISCRIMINATOR);
}
function getCreateAssociatedTokenInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: CREATE_ASSOCIATED_TOKEN_DISCRIMINATOR
        }));
}
function getCreateAssociatedTokenInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getCreateAssociatedTokenInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getCreateAssociatedTokenInstructionDataEncoder(), getCreateAssociatedTokenInstructionDataDecoder());
}
async function getCreateAssociatedTokenInstructionAsync(input, config) {
    const programAddress = config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        payer: {
            value: input.payer ?? null,
            isWritable: true
        },
        ata: {
            value: input.ata ?? null,
            isWritable: true
        },
        owner: {
            value: input.owner ?? null,
            isWritable: false
        },
        mint: {
            value: input.mint ?? null,
            isWritable: false
        },
        systemProgram: {
            value: input.systemProgram ?? null,
            isWritable: false
        },
        tokenProgram: {
            value: input.tokenProgram ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    if (!accounts.tokenProgram.value) {
        accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    }
    if (!accounts.ata.value) {
        accounts.ata.value = await findAssociatedTokenPda({
            owner: expectAddress(accounts.owner.value),
            tokenProgram: expectAddress(accounts.tokenProgram.value),
            mint: expectAddress(accounts.mint.value)
        });
    }
    if (!accounts.systemProgram.value) {
        accounts.systemProgram.value = "11111111111111111111111111111111";
    }
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.payer),
            getAccountMeta(accounts.ata),
            getAccountMeta(accounts.owner),
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.systemProgram),
            getAccountMeta(accounts.tokenProgram)
        ],
        programAddress,
        data: getCreateAssociatedTokenInstructionDataEncoder().encode({})
    };
    return instruction;
}
function getCreateAssociatedTokenInstruction(input, config) {
    const programAddress = config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        payer: {
            value: input.payer ?? null,
            isWritable: true
        },
        ata: {
            value: input.ata ?? null,
            isWritable: true
        },
        owner: {
            value: input.owner ?? null,
            isWritable: false
        },
        mint: {
            value: input.mint ?? null,
            isWritable: false
        },
        systemProgram: {
            value: input.systemProgram ?? null,
            isWritable: false
        },
        tokenProgram: {
            value: input.tokenProgram ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    if (!accounts.tokenProgram.value) {
        accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    }
    if (!accounts.systemProgram.value) {
        accounts.systemProgram.value = "11111111111111111111111111111111";
    }
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.payer),
            getAccountMeta(accounts.ata),
            getAccountMeta(accounts.owner),
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.systemProgram),
            getAccountMeta(accounts.tokenProgram)
        ],
        programAddress,
        data: getCreateAssociatedTokenInstructionDataEncoder().encode({})
    };
    return instruction;
}
function parseCreateAssociatedTokenInstruction(instruction) {
    if (instruction.accounts.length < 6) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            payer: getNextAccount(),
            ata: getNextAccount(),
            owner: getNextAccount(),
            mint: getNextAccount(),
            systemProgram: getNextAccount(),
            tokenProgram: getNextAccount()
        },
        data: getCreateAssociatedTokenInstructionDataDecoder().decode(instruction.data)
    };
}
var CREATE_ASSOCIATED_TOKEN_IDEMPOTENT_DISCRIMINATOR = 1;
function getCreateAssociatedTokenIdempotentDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(CREATE_ASSOCIATED_TOKEN_IDEMPOTENT_DISCRIMINATOR);
}
function getCreateAssociatedTokenIdempotentInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: CREATE_ASSOCIATED_TOKEN_IDEMPOTENT_DISCRIMINATOR
        }));
}
function getCreateAssociatedTokenIdempotentInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getCreateAssociatedTokenIdempotentInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getCreateAssociatedTokenIdempotentInstructionDataEncoder(), getCreateAssociatedTokenIdempotentInstructionDataDecoder());
}
async function getCreateAssociatedTokenIdempotentInstructionAsync(input, config) {
    const programAddress = config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        payer: {
            value: input.payer ?? null,
            isWritable: true
        },
        ata: {
            value: input.ata ?? null,
            isWritable: true
        },
        owner: {
            value: input.owner ?? null,
            isWritable: false
        },
        mint: {
            value: input.mint ?? null,
            isWritable: false
        },
        systemProgram: {
            value: input.systemProgram ?? null,
            isWritable: false
        },
        tokenProgram: {
            value: input.tokenProgram ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    if (!accounts.tokenProgram.value) {
        accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    }
    if (!accounts.ata.value) {
        accounts.ata.value = await findAssociatedTokenPda({
            owner: expectAddress(accounts.owner.value),
            tokenProgram: expectAddress(accounts.tokenProgram.value),
            mint: expectAddress(accounts.mint.value)
        });
    }
    if (!accounts.systemProgram.value) {
        accounts.systemProgram.value = "11111111111111111111111111111111";
    }
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.payer),
            getAccountMeta(accounts.ata),
            getAccountMeta(accounts.owner),
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.systemProgram),
            getAccountMeta(accounts.tokenProgram)
        ],
        programAddress,
        data: getCreateAssociatedTokenIdempotentInstructionDataEncoder().encode({})
    };
    return instruction;
}
function getCreateAssociatedTokenIdempotentInstruction(input, config) {
    const programAddress = config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        payer: {
            value: input.payer ?? null,
            isWritable: true
        },
        ata: {
            value: input.ata ?? null,
            isWritable: true
        },
        owner: {
            value: input.owner ?? null,
            isWritable: false
        },
        mint: {
            value: input.mint ?? null,
            isWritable: false
        },
        systemProgram: {
            value: input.systemProgram ?? null,
            isWritable: false
        },
        tokenProgram: {
            value: input.tokenProgram ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    if (!accounts.tokenProgram.value) {
        accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    }
    if (!accounts.systemProgram.value) {
        accounts.systemProgram.value = "11111111111111111111111111111111";
    }
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.payer),
            getAccountMeta(accounts.ata),
            getAccountMeta(accounts.owner),
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.systemProgram),
            getAccountMeta(accounts.tokenProgram)
        ],
        programAddress,
        data: getCreateAssociatedTokenIdempotentInstructionDataEncoder().encode({})
    };
    return instruction;
}
function parseCreateAssociatedTokenIdempotentInstruction(instruction) {
    if (instruction.accounts.length < 6) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            payer: getNextAccount(),
            ata: getNextAccount(),
            owner: getNextAccount(),
            mint: getNextAccount(),
            systemProgram: getNextAccount(),
            tokenProgram: getNextAccount()
        },
        data: getCreateAssociatedTokenIdempotentInstructionDataDecoder().decode(instruction.data)
    };
}
var FREEZE_ACCOUNT_DISCRIMINATOR = 10;
function getFreezeAccountDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(FREEZE_ACCOUNT_DISCRIMINATOR);
}
function getFreezeAccountInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: FREEZE_ACCOUNT_DISCRIMINATOR
        }));
}
function getFreezeAccountInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getFreezeAccountInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getFreezeAccountInstructionDataEncoder(), getFreezeAccountInstructionDataDecoder());
}
function getFreezeAccountInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        account: {
            value: input.account ?? null,
            isWritable: true
        },
        mint: {
            value: input.mint ?? null,
            isWritable: false
        },
        owner: {
            value: input.owner ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = (args.multiSigners ?? []).map((signer)=>({
            address: signer.address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER,
            signer
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.account),
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.owner),
            ...remainingAccounts
        ],
        programAddress,
        data: getFreezeAccountInstructionDataEncoder().encode({})
    };
    return instruction;
}
function parseFreezeAccountInstruction(instruction) {
    if (instruction.accounts.length < 3) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            account: getNextAccount(),
            mint: getNextAccount(),
            owner: getNextAccount()
        },
        data: getFreezeAccountInstructionDataDecoder().decode(instruction.data)
    };
}
var GET_ACCOUNT_DATA_SIZE_DISCRIMINATOR = 21;
function getGetAccountDataSizeDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(GET_ACCOUNT_DATA_SIZE_DISCRIMINATOR);
}
function getGetAccountDataSizeInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: GET_ACCOUNT_DATA_SIZE_DISCRIMINATOR
        }));
}
function getGetAccountDataSizeInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getGetAccountDataSizeInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getGetAccountDataSizeInstructionDataEncoder(), getGetAccountDataSizeInstructionDataDecoder());
}
function getGetAccountDataSizeInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        mint: {
            value: input.mint ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.mint)
        ],
        programAddress,
        data: getGetAccountDataSizeInstructionDataEncoder().encode({})
    };
    return instruction;
}
function parseGetAccountDataSizeInstruction(instruction) {
    if (instruction.accounts.length < 1) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            mint: getNextAccount()
        },
        data: getGetAccountDataSizeInstructionDataDecoder().decode(instruction.data)
    };
}
var INITIALIZE_ACCOUNT_DISCRIMINATOR = 1;
function getInitializeAccountDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(INITIALIZE_ACCOUNT_DISCRIMINATOR);
}
function getInitializeAccountInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: INITIALIZE_ACCOUNT_DISCRIMINATOR
        }));
}
function getInitializeAccountInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getInitializeAccountInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getInitializeAccountInstructionDataEncoder(), getInitializeAccountInstructionDataDecoder());
}
function getInitializeAccountInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        account: {
            value: input.account ?? null,
            isWritable: true
        },
        mint: {
            value: input.mint ?? null,
            isWritable: false
        },
        owner: {
            value: input.owner ?? null,
            isWritable: false
        },
        rent: {
            value: input.rent ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    if (!accounts.rent.value) {
        accounts.rent.value = "SysvarRent111111111111111111111111111111111";
    }
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.account),
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.owner),
            getAccountMeta(accounts.rent)
        ],
        programAddress,
        data: getInitializeAccountInstructionDataEncoder().encode({})
    };
    return instruction;
}
function parseInitializeAccountInstruction(instruction) {
    if (instruction.accounts.length < 4) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            account: getNextAccount(),
            mint: getNextAccount(),
            owner: getNextAccount(),
            rent: getNextAccount()
        },
        data: getInitializeAccountInstructionDataDecoder().decode(instruction.data)
    };
}
var INITIALIZE_ACCOUNT2_DISCRIMINATOR = 16;
function getInitializeAccount2DiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(INITIALIZE_ACCOUNT2_DISCRIMINATOR);
}
function getInitializeAccount2InstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "owner",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: INITIALIZE_ACCOUNT2_DISCRIMINATOR
        }));
}
function getInitializeAccount2InstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "owner",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ]
    ]);
}
function getInitializeAccount2InstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getInitializeAccount2InstructionDataEncoder(), getInitializeAccount2InstructionDataDecoder());
}
function getInitializeAccount2Instruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        account: {
            value: input.account ?? null,
            isWritable: true
        },
        mint: {
            value: input.mint ?? null,
            isWritable: false
        },
        rent: {
            value: input.rent ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    if (!accounts.rent.value) {
        accounts.rent.value = "SysvarRent111111111111111111111111111111111";
    }
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.account),
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.rent)
        ],
        programAddress,
        data: getInitializeAccount2InstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseInitializeAccount2Instruction(instruction) {
    if (instruction.accounts.length < 3) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            account: getNextAccount(),
            mint: getNextAccount(),
            rent: getNextAccount()
        },
        data: getInitializeAccount2InstructionDataDecoder().decode(instruction.data)
    };
}
var INITIALIZE_ACCOUNT3_DISCRIMINATOR = 18;
function getInitializeAccount3DiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(INITIALIZE_ACCOUNT3_DISCRIMINATOR);
}
function getInitializeAccount3InstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "owner",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: INITIALIZE_ACCOUNT3_DISCRIMINATOR
        }));
}
function getInitializeAccount3InstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "owner",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ]
    ]);
}
function getInitializeAccount3InstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getInitializeAccount3InstructionDataEncoder(), getInitializeAccount3InstructionDataDecoder());
}
function getInitializeAccount3Instruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        account: {
            value: input.account ?? null,
            isWritable: true
        },
        mint: {
            value: input.mint ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.account),
            getAccountMeta(accounts.mint)
        ],
        programAddress,
        data: getInitializeAccount3InstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseInitializeAccount3Instruction(instruction) {
    if (instruction.accounts.length < 2) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            account: getNextAccount(),
            mint: getNextAccount()
        },
        data: getInitializeAccount3InstructionDataDecoder().decode(instruction.data)
    };
}
var INITIALIZE_IMMUTABLE_OWNER_DISCRIMINATOR = 22;
function getInitializeImmutableOwnerDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(INITIALIZE_IMMUTABLE_OWNER_DISCRIMINATOR);
}
function getInitializeImmutableOwnerInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: INITIALIZE_IMMUTABLE_OWNER_DISCRIMINATOR
        }));
}
function getInitializeImmutableOwnerInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getInitializeImmutableOwnerInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getInitializeImmutableOwnerInstructionDataEncoder(), getInitializeImmutableOwnerInstructionDataDecoder());
}
function getInitializeImmutableOwnerInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        account: {
            value: input.account ?? null,
            isWritable: true
        }
    };
    const accounts = originalAccounts;
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.account)
        ],
        programAddress,
        data: getInitializeImmutableOwnerInstructionDataEncoder().encode({})
    };
    return instruction;
}
function parseInitializeImmutableOwnerInstruction(instruction) {
    if (instruction.accounts.length < 1) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            account: getNextAccount()
        },
        data: getInitializeImmutableOwnerInstructionDataDecoder().decode(instruction.data)
    };
}
var INITIALIZE_MINT_DISCRIMINATOR = 0;
function getInitializeMintDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(INITIALIZE_MINT_DISCRIMINATOR);
}
function getInitializeMintInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "mintAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ],
        [
            "freezeAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])())
        ]
    ]), (value)=>({
            ...value,
            discriminator: INITIALIZE_MINT_DISCRIMINATOR,
            freezeAuthority: value.freezeAuthority ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["none"])()
        }));
}
function getInitializeMintInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "mintAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ],
        [
            "freezeAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])())
        ]
    ]);
}
function getInitializeMintInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getInitializeMintInstructionDataEncoder(), getInitializeMintInstructionDataDecoder());
}
function getInitializeMintInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        mint: {
            value: input.mint ?? null,
            isWritable: true
        },
        rent: {
            value: input.rent ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    if (!accounts.rent.value) {
        accounts.rent.value = "SysvarRent111111111111111111111111111111111";
    }
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.rent)
        ],
        programAddress,
        data: getInitializeMintInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseInitializeMintInstruction(instruction) {
    if (instruction.accounts.length < 2) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            mint: getNextAccount(),
            rent: getNextAccount()
        },
        data: getInitializeMintInstructionDataDecoder().decode(instruction.data)
    };
}
var INITIALIZE_MINT2_DISCRIMINATOR = 20;
function getInitializeMint2DiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(INITIALIZE_MINT2_DISCRIMINATOR);
}
function getInitializeMint2InstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "mintAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])()
        ],
        [
            "freezeAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])())
        ]
    ]), (value)=>({
            ...value,
            discriminator: INITIALIZE_MINT2_DISCRIMINATOR,
            freezeAuthority: value.freezeAuthority ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["none"])()
        }));
}
function getInitializeMint2InstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "mintAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])()
        ],
        [
            "freezeAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])())
        ]
    ]);
}
function getInitializeMint2InstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getInitializeMint2InstructionDataEncoder(), getInitializeMint2InstructionDataDecoder());
}
function getInitializeMint2Instruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        mint: {
            value: input.mint ?? null,
            isWritable: true
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.mint)
        ],
        programAddress,
        data: getInitializeMint2InstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseInitializeMint2Instruction(instruction) {
    if (instruction.accounts.length < 1) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            mint: getNextAccount()
        },
        data: getInitializeMint2InstructionDataDecoder().decode(instruction.data)
    };
}
var INITIALIZE_MULTISIG_DISCRIMINATOR = 2;
function getInitializeMultisigDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(INITIALIZE_MULTISIG_DISCRIMINATOR);
}
function getInitializeMultisigInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "m",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: INITIALIZE_MULTISIG_DISCRIMINATOR
        }));
}
function getInitializeMultisigInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "m",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getInitializeMultisigInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getInitializeMultisigInstructionDataEncoder(), getInitializeMultisigInstructionDataDecoder());
}
function getInitializeMultisigInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        multisig: {
            value: input.multisig ?? null,
            isWritable: true
        },
        rent: {
            value: input.rent ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    if (!accounts.rent.value) {
        accounts.rent.value = "SysvarRent111111111111111111111111111111111";
    }
    const remainingAccounts = args.signers.map((address)=>({
            address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.multisig),
            getAccountMeta(accounts.rent),
            ...remainingAccounts
        ],
        programAddress,
        data: getInitializeMultisigInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseInitializeMultisigInstruction(instruction) {
    if (instruction.accounts.length < 2) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            multisig: getNextAccount(),
            rent: getNextAccount()
        },
        data: getInitializeMultisigInstructionDataDecoder().decode(instruction.data)
    };
}
var INITIALIZE_MULTISIG2_DISCRIMINATOR = 19;
function getInitializeMultisig2DiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(INITIALIZE_MULTISIG2_DISCRIMINATOR);
}
function getInitializeMultisig2InstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "m",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: INITIALIZE_MULTISIG2_DISCRIMINATOR
        }));
}
function getInitializeMultisig2InstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "m",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getInitializeMultisig2InstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getInitializeMultisig2InstructionDataEncoder(), getInitializeMultisig2InstructionDataDecoder());
}
function getInitializeMultisig2Instruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        multisig: {
            value: input.multisig ?? null,
            isWritable: true
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = args.signers.map((address)=>({
            address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.multisig),
            ...remainingAccounts
        ],
        programAddress,
        data: getInitializeMultisig2InstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseInitializeMultisig2Instruction(instruction) {
    if (instruction.accounts.length < 1) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            multisig: getNextAccount()
        },
        data: getInitializeMultisig2InstructionDataDecoder().decode(instruction.data)
    };
}
var MINT_TO_DISCRIMINATOR = 7;
function getMintToDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(MINT_TO_DISCRIMINATOR);
}
function getMintToInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: MINT_TO_DISCRIMINATOR
        }));
}
function getMintToInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ]
    ]);
}
function getMintToInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getMintToInstructionDataEncoder(), getMintToInstructionDataDecoder());
}
function getMintToInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        mint: {
            value: input.mint ?? null,
            isWritable: true
        },
        token: {
            value: input.token ?? null,
            isWritable: true
        },
        mintAuthority: {
            value: input.mintAuthority ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = (args.multiSigners ?? []).map((signer)=>({
            address: signer.address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER,
            signer
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.token),
            getAccountMeta(accounts.mintAuthority),
            ...remainingAccounts
        ],
        programAddress,
        data: getMintToInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseMintToInstruction(instruction) {
    if (instruction.accounts.length < 3) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            mint: getNextAccount(),
            token: getNextAccount(),
            mintAuthority: getNextAccount()
        },
        data: getMintToInstructionDataDecoder().decode(instruction.data)
    };
}
var MINT_TO_CHECKED_DISCRIMINATOR = 14;
function getMintToCheckedDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(MINT_TO_CHECKED_DISCRIMINATOR);
}
function getMintToCheckedInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: MINT_TO_CHECKED_DISCRIMINATOR
        }));
}
function getMintToCheckedInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getMintToCheckedInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getMintToCheckedInstructionDataEncoder(), getMintToCheckedInstructionDataDecoder());
}
function getMintToCheckedInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        mint: {
            value: input.mint ?? null,
            isWritable: true
        },
        token: {
            value: input.token ?? null,
            isWritable: true
        },
        mintAuthority: {
            value: input.mintAuthority ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = (args.multiSigners ?? []).map((signer)=>({
            address: signer.address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER,
            signer
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.token),
            getAccountMeta(accounts.mintAuthority),
            ...remainingAccounts
        ],
        programAddress,
        data: getMintToCheckedInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseMintToCheckedInstruction(instruction) {
    if (instruction.accounts.length < 3) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            mint: getNextAccount(),
            token: getNextAccount(),
            mintAuthority: getNextAccount()
        },
        data: getMintToCheckedInstructionDataDecoder().decode(instruction.data)
    };
}
var RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR = 2;
function getRecoverNestedAssociatedTokenDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR);
}
function getRecoverNestedAssociatedTokenInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: RECOVER_NESTED_ASSOCIATED_TOKEN_DISCRIMINATOR
        }));
}
function getRecoverNestedAssociatedTokenInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getRecoverNestedAssociatedTokenInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getRecoverNestedAssociatedTokenInstructionDataEncoder(), getRecoverNestedAssociatedTokenInstructionDataDecoder());
}
async function getRecoverNestedAssociatedTokenInstructionAsync(input, config) {
    const programAddress = config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        nestedAssociatedAccountAddress: {
            value: input.nestedAssociatedAccountAddress ?? null,
            isWritable: true
        },
        nestedTokenMintAddress: {
            value: input.nestedTokenMintAddress ?? null,
            isWritable: false
        },
        destinationAssociatedAccountAddress: {
            value: input.destinationAssociatedAccountAddress ?? null,
            isWritable: true
        },
        ownerAssociatedAccountAddress: {
            value: input.ownerAssociatedAccountAddress ?? null,
            isWritable: false
        },
        ownerTokenMintAddress: {
            value: input.ownerTokenMintAddress ?? null,
            isWritable: false
        },
        walletAddress: {
            value: input.walletAddress ?? null,
            isWritable: true
        },
        tokenProgram: {
            value: input.tokenProgram ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    if (!accounts.tokenProgram.value) {
        accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    }
    if (!accounts.ownerAssociatedAccountAddress.value) {
        accounts.ownerAssociatedAccountAddress.value = await findAssociatedTokenPda({
            owner: expectAddress(accounts.walletAddress.value),
            tokenProgram: expectAddress(accounts.tokenProgram.value),
            mint: expectAddress(accounts.ownerTokenMintAddress.value)
        });
    }
    if (!accounts.nestedAssociatedAccountAddress.value) {
        accounts.nestedAssociatedAccountAddress.value = await findAssociatedTokenPda({
            owner: expectAddress(accounts.ownerAssociatedAccountAddress.value),
            tokenProgram: expectAddress(accounts.tokenProgram.value),
            mint: expectAddress(accounts.nestedTokenMintAddress.value)
        });
    }
    if (!accounts.destinationAssociatedAccountAddress.value) {
        accounts.destinationAssociatedAccountAddress.value = await findAssociatedTokenPda({
            owner: expectAddress(accounts.walletAddress.value),
            tokenProgram: expectAddress(accounts.tokenProgram.value),
            mint: expectAddress(accounts.nestedTokenMintAddress.value)
        });
    }
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.nestedAssociatedAccountAddress),
            getAccountMeta(accounts.nestedTokenMintAddress),
            getAccountMeta(accounts.destinationAssociatedAccountAddress),
            getAccountMeta(accounts.ownerAssociatedAccountAddress),
            getAccountMeta(accounts.ownerTokenMintAddress),
            getAccountMeta(accounts.walletAddress),
            getAccountMeta(accounts.tokenProgram)
        ],
        programAddress,
        data: getRecoverNestedAssociatedTokenInstructionDataEncoder().encode({})
    };
    return instruction;
}
function getRecoverNestedAssociatedTokenInstruction(input, config) {
    const programAddress = config?.programAddress ?? ASSOCIATED_TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        nestedAssociatedAccountAddress: {
            value: input.nestedAssociatedAccountAddress ?? null,
            isWritable: true
        },
        nestedTokenMintAddress: {
            value: input.nestedTokenMintAddress ?? null,
            isWritable: false
        },
        destinationAssociatedAccountAddress: {
            value: input.destinationAssociatedAccountAddress ?? null,
            isWritable: true
        },
        ownerAssociatedAccountAddress: {
            value: input.ownerAssociatedAccountAddress ?? null,
            isWritable: false
        },
        ownerTokenMintAddress: {
            value: input.ownerTokenMintAddress ?? null,
            isWritable: false
        },
        walletAddress: {
            value: input.walletAddress ?? null,
            isWritable: true
        },
        tokenProgram: {
            value: input.tokenProgram ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    if (!accounts.tokenProgram.value) {
        accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    }
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.nestedAssociatedAccountAddress),
            getAccountMeta(accounts.nestedTokenMintAddress),
            getAccountMeta(accounts.destinationAssociatedAccountAddress),
            getAccountMeta(accounts.ownerAssociatedAccountAddress),
            getAccountMeta(accounts.ownerTokenMintAddress),
            getAccountMeta(accounts.walletAddress),
            getAccountMeta(accounts.tokenProgram)
        ],
        programAddress,
        data: getRecoverNestedAssociatedTokenInstructionDataEncoder().encode({})
    };
    return instruction;
}
function parseRecoverNestedAssociatedTokenInstruction(instruction) {
    if (instruction.accounts.length < 7) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            nestedAssociatedAccountAddress: getNextAccount(),
            nestedTokenMintAddress: getNextAccount(),
            destinationAssociatedAccountAddress: getNextAccount(),
            ownerAssociatedAccountAddress: getNextAccount(),
            ownerTokenMintAddress: getNextAccount(),
            walletAddress: getNextAccount(),
            tokenProgram: getNextAccount()
        },
        data: getRecoverNestedAssociatedTokenInstructionDataDecoder().decode(instruction.data)
    };
}
var REVOKE_DISCRIMINATOR = 5;
function getRevokeDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(REVOKE_DISCRIMINATOR);
}
function getRevokeInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: REVOKE_DISCRIMINATOR
        }));
}
function getRevokeInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getRevokeInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getRevokeInstructionDataEncoder(), getRevokeInstructionDataDecoder());
}
function getRevokeInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        source: {
            value: input.source ?? null,
            isWritable: true
        },
        owner: {
            value: input.owner ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = (args.multiSigners ?? []).map((signer)=>({
            address: signer.address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER,
            signer
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.source),
            getAccountMeta(accounts.owner),
            ...remainingAccounts
        ],
        programAddress,
        data: getRevokeInstructionDataEncoder().encode({})
    };
    return instruction;
}
function parseRevokeInstruction(instruction) {
    if (instruction.accounts.length < 2) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            source: getNextAccount(),
            owner: getNextAccount()
        },
        data: getRevokeInstructionDataDecoder().decode(instruction.data)
    };
}
var SET_AUTHORITY_DISCRIMINATOR = 6;
function getSetAuthorityDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(SET_AUTHORITY_DISCRIMINATOR);
}
function getSetAuthorityInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "authorityType",
            getAuthorityTypeEncoder()
        ],
        [
            "newAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressEncoder"])())
        ]
    ]), (value)=>({
            ...value,
            discriminator: SET_AUTHORITY_DISCRIMINATOR
        }));
}
function getSetAuthorityInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "authorityType",
            getAuthorityTypeDecoder()
        ],
        [
            "newAuthority",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$options$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptionDecoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$addresses$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAddressDecoder"])())
        ]
    ]);
}
function getSetAuthorityInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getSetAuthorityInstructionDataEncoder(), getSetAuthorityInstructionDataDecoder());
}
function getSetAuthorityInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        owned: {
            value: input.owned ?? null,
            isWritable: true
        },
        owner: {
            value: input.owner ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = (args.multiSigners ?? []).map((signer)=>({
            address: signer.address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER,
            signer
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.owned),
            getAccountMeta(accounts.owner),
            ...remainingAccounts
        ],
        programAddress,
        data: getSetAuthorityInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseSetAuthorityInstruction(instruction) {
    if (instruction.accounts.length < 2) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            owned: getNextAccount(),
            owner: getNextAccount()
        },
        data: getSetAuthorityInstructionDataDecoder().decode(instruction.data)
    };
}
var SYNC_NATIVE_DISCRIMINATOR = 17;
function getSyncNativeDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(SYNC_NATIVE_DISCRIMINATOR);
}
function getSyncNativeInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: SYNC_NATIVE_DISCRIMINATOR
        }));
}
function getSyncNativeInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getSyncNativeInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getSyncNativeInstructionDataEncoder(), getSyncNativeInstructionDataDecoder());
}
function getSyncNativeInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        account: {
            value: input.account ?? null,
            isWritable: true
        }
    };
    const accounts = originalAccounts;
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.account)
        ],
        programAddress,
        data: getSyncNativeInstructionDataEncoder().encode({})
    };
    return instruction;
}
function parseSyncNativeInstruction(instruction) {
    if (instruction.accounts.length < 1) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            account: getNextAccount()
        },
        data: getSyncNativeInstructionDataDecoder().decode(instruction.data)
    };
}
var THAW_ACCOUNT_DISCRIMINATOR = 11;
function getThawAccountDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(THAW_ACCOUNT_DISCRIMINATOR);
}
function getThawAccountInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: THAW_ACCOUNT_DISCRIMINATOR
        }));
}
function getThawAccountInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getThawAccountInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getThawAccountInstructionDataEncoder(), getThawAccountInstructionDataDecoder());
}
function getThawAccountInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        account: {
            value: input.account ?? null,
            isWritable: true
        },
        mint: {
            value: input.mint ?? null,
            isWritable: false
        },
        owner: {
            value: input.owner ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = (args.multiSigners ?? []).map((signer)=>({
            address: signer.address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER,
            signer
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.account),
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.owner),
            ...remainingAccounts
        ],
        programAddress,
        data: getThawAccountInstructionDataEncoder().encode({})
    };
    return instruction;
}
function parseThawAccountInstruction(instruction) {
    if (instruction.accounts.length < 3) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            account: getNextAccount(),
            mint: getNextAccount(),
            owner: getNextAccount()
        },
        data: getThawAccountInstructionDataDecoder().decode(instruction.data)
    };
}
var TRANSFER_DISCRIMINATOR = 3;
function getTransferDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(TRANSFER_DISCRIMINATOR);
}
function getTransferInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: TRANSFER_DISCRIMINATOR
        }));
}
function getTransferInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ]
    ]);
}
function getTransferInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getTransferInstructionDataEncoder(), getTransferInstructionDataDecoder());
}
function getTransferInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        source: {
            value: input.source ?? null,
            isWritable: true
        },
        destination: {
            value: input.destination ?? null,
            isWritable: true
        },
        authority: {
            value: input.authority ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = (args.multiSigners ?? []).map((signer)=>({
            address: signer.address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER,
            signer
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.source),
            getAccountMeta(accounts.destination),
            getAccountMeta(accounts.authority),
            ...remainingAccounts
        ],
        programAddress,
        data: getTransferInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseTransferInstruction(instruction) {
    if (instruction.accounts.length < 3) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            source: getNextAccount(),
            destination: getNextAccount(),
            authority: getNextAccount()
        },
        data: getTransferInstructionDataDecoder().decode(instruction.data)
    };
}
var TRANSFER_CHECKED_DISCRIMINATOR = 12;
function getTransferCheckedDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(TRANSFER_CHECKED_DISCRIMINATOR);
}
function getTransferCheckedInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Encoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: TRANSFER_CHECKED_DISCRIMINATOR
        }));
}
function getTransferCheckedInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "amount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU64Decoder"])()
        ],
        [
            "decimals",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ]
    ]);
}
function getTransferCheckedInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getTransferCheckedInstructionDataEncoder(), getTransferCheckedInstructionDataDecoder());
}
function getTransferCheckedInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        source: {
            value: input.source ?? null,
            isWritable: true
        },
        mint: {
            value: input.mint ?? null,
            isWritable: false
        },
        destination: {
            value: input.destination ?? null,
            isWritable: true
        },
        authority: {
            value: input.authority ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const remainingAccounts = (args.multiSigners ?? []).map((signer)=>({
            address: signer.address,
            role: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$instructions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccountRole"].READONLY_SIGNER,
            signer
        }));
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.source),
            getAccountMeta(accounts.mint),
            getAccountMeta(accounts.destination),
            getAccountMeta(accounts.authority),
            ...remainingAccounts
        ],
        programAddress,
        data: getTransferCheckedInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseTransferCheckedInstruction(instruction) {
    if (instruction.accounts.length < 4) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            source: getNextAccount(),
            mint: getNextAccount(),
            destination: getNextAccount(),
            authority: getNextAccount()
        },
        data: getTransferCheckedInstructionDataDecoder().decode(instruction.data)
    };
}
var UI_AMOUNT_TO_AMOUNT_DISCRIMINATOR = 24;
function getUiAmountToAmountDiscriminatorBytes() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])().encode(UI_AMOUNT_TO_AMOUNT_DISCRIMINATOR);
}
function getUiAmountToAmountInstructionDataEncoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transformEncoder"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructEncoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Encoder"])()
        ],
        [
            "uiAmount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUtf8Encoder"])()
        ]
    ]), (value)=>({
            ...value,
            discriminator: UI_AMOUNT_TO_AMOUNT_DISCRIMINATOR
        }));
}
function getUiAmountToAmountInstructionDataDecoder() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$data$2d$structures$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStructDecoder"])([
        [
            "discriminator",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$numbers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getU8Decoder"])()
        ],
        [
            "uiAmount",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$strings$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUtf8Decoder"])()
        ]
    ]);
}
function getUiAmountToAmountInstructionDataCodec() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$codecs$2d$core$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["combineCodec"])(getUiAmountToAmountInstructionDataEncoder(), getUiAmountToAmountInstructionDataDecoder());
}
function getUiAmountToAmountInstruction(input, config) {
    const programAddress = config?.programAddress ?? TOKEN_PROGRAM_ADDRESS;
    const originalAccounts = {
        mint: {
            value: input.mint ?? null,
            isWritable: false
        }
    };
    const accounts = originalAccounts;
    const args = {
        ...input
    };
    const getAccountMeta = getAccountMetaFactory(programAddress);
    const instruction = {
        accounts: [
            getAccountMeta(accounts.mint)
        ],
        programAddress,
        data: getUiAmountToAmountInstructionDataEncoder().encode(args)
    };
    return instruction;
}
function parseUiAmountToAmountInstruction(instruction) {
    if (instruction.accounts.length < 1) {
        throw new Error("Not enough accounts");
    }
    let accountIndex = 0;
    const getNextAccount = ()=>{
        const accountMeta = instruction.accounts[accountIndex];
        accountIndex += 1;
        return accountMeta;
    };
    return {
        programAddress: instruction.programAddress,
        accounts: {
            mint: getNextAccount()
        },
        data: getUiAmountToAmountInstructionDataDecoder().decode(instruction.data)
    };
}
;
 //# sourceMappingURL=index.mjs.map
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/getFormattedUsdFromLamports-B6EqSEho.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>o,
    "D",
    ()=>t,
    "J",
    ()=>r,
    "L",
    ()=>s,
    "R",
    ()=>d,
    "S",
    ()=>a,
    "T",
    ()=>e,
    "a",
    ()=>n,
    "g",
    ()=>C
]);
const s = 1e9, a = "11111111111111111111111111111111", e = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA", n = "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb", o = "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL", d = [
    "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C",
    "CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"
], r = [
    "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"
], t = {
    "solana:mainnet": {
        EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: {
            symbol: "USDC",
            decimals: 6,
            address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
        },
        Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB: {
            symbol: "USDT",
            decimals: 6,
            address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
        },
        So11111111111111111111111111111111111111112: {
            symbol: "SOL",
            decimals: 9,
            address: "So11111111111111111111111111111111111111112"
        }
    },
    "solana:devnet": {
        "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU": {
            symbol: "USDC",
            decimals: 6,
            address: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"
        },
        EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS: {
            symbol: "USDT",
            decimals: 6,
            address: "EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"
        },
        So11111111111111111111111111111111111111112: {
            symbol: "SOL",
            decimals: 9,
            address: "So11111111111111111111111111111111111111112"
        }
    },
    "solana:testnet": {}
};
function C(a, e) {
    let n = parseFloat(a.toString()) / s, o = b.format(e * n);
    return "$0.00" === o ? "<$0.01" : o;
}
let b = new Intl.NumberFormat(void 0, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
});
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/getUsdcMintAddress-DFI1hv05.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "g",
    ()=>r
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getFormattedUsdFromLamports$2d$B6EqSEho$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/getFormattedUsdFromLamports-B6EqSEho.mjs [app-ssr] (ecmascript)");
;
function r(r) {
    let [e] = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getFormattedUsdFromLamports$2d$B6EqSEho$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["D"][r]).find(([t, r])=>"USDC" === r.symbol) ?? [];
    return e;
}
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/getChainName-DjpPdUSc.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "g",
    ()=>e
]);
function e(e) {
    switch(e){
        case "solana:mainnet":
            return "Solana";
        case "solana:devnet":
            return "Devnet";
        case "solana:testnet":
            return "Testnet";
    }
}
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/FundSolWalletWithExternalSolanaWallet-BIk-6GIl.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FundSolWalletWithExternalSolanaWallet",
    ()=>nt,
    "default",
    ()=>nt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$utils$2f$formatters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/js-sdk-core/dist/esm/utils/formatters.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$Button$2d$BCV6mjvS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/Button-BCV6mjvS.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$Layouts$2d$Bmf8DxNP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/Layouts-Bmf8DxNP.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$ModalHeader$2d$BTru6YQw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/ModalHeader-BTru6YQw.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$ScreenHeader$2d$Biz1wq02$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/ScreenHeader-Biz1wq02.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$FundWalletMethodHeader$2d$CS84Ots9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/FundWalletMethodHeader-CS84Ots9.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$InjectedWalletIcon$2d$DLcYOGDj$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/InjectedWalletIcon-DLcYOGDj.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$index$2d$CJMgUOnw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/index-CJMgUOnw.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$Value$2d$B4M62ove$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/Value-B4M62ove.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$Row$2d$CG0lSY5Z$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/Row-CG0lSY5Z.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/context-DRLoVlsO.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/internal-context-e-Eni5bG.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/get-is-unified-wallet-gMDXpX6C.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$D4IJeaog$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useWallets-D4IJeaog.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useGetTokenPrice$2d$CDPxMEO$2d2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useGetTokenPrice-CDPxMEO-.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$analytics$2d$mkkvFRju$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/analytics-mkkvFRju.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2d$program$2f$system$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana-program/system/dist/src/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/functional/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/transaction-messages/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/signers/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana/transactions/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2d$program$2f$token$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@solana-program/token/dist/src/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getFormattedUsdFromLamports$2d$B6EqSEho$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/getFormattedUsdFromLamports-B6EqSEho.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getUsdcMintAddress$2d$DFI1hv05$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/getUsdcMintAddress-DFI1hv05.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useSolanaRpcClient-Brcjny8C.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getChainName$2d$DjpPdUSc$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/getChainName-DjpPdUSc.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$prepareFundingModalData$2d$BVTcQcmw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/prepareFundingModalData-BVTcQcmw.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$react$2d$device$2d$detect$2f$dist$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/react-device-detect/dist/lib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/tinycolor2/esm/tinycolor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$eventemitter3$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/eventemitter3/index.mjs [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function K({ rows: a }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$Row$2d$CG0lSY5Z$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"], {
        children: a.filter((t)=>!!t).map((a, n)=>null != a.value || a.isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$Row$2d$CG0lSY5Z$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$Value$2d$B4M62ove$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["L"], {
                        children: a.label
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$Value$2d$B4M62ove$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["V"], {
                        $isLoading: a.isLoading,
                        children: a.value
                    })
                ]
            }, n) : null)
    });
}
function Z(t) {
    return BigInt(Math.floor(1e9 * parseFloat(t)));
}
function tt(t) {
    return +et.format(parseFloat(t.toString()) / 1e9);
}
let et = Intl.NumberFormat(void 0, {
    maximumFractionDigits: 8
});
async function at({ tx: t, solanaClient: e, amount: a, asset: n, tokenPrice: o }) {
    if (!t) return null;
    if ("SOL" === n && o) {
        let n = Z(a), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getFormattedUsdFromLamports$2d$B6EqSEho$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(n, o), s = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])({
            solanaClient: e,
            tx: t
        });
        return {
            amountInUsd: r,
            feeInUsd: o ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getFormattedUsdFromLamports$2d$B6EqSEho$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(s, o) : void 0,
            totalInUsd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getFormattedUsdFromLamports$2d$B6EqSEho$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(n + s, o)
        };
    }
    if ("USDC" === n && o) {
        let n = "$" + a, r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])({
            solanaClient: e,
            tx: t
        }), s = function(t, e) {
            let a = parseFloat(t.toString()) / __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getFormattedUsdFromLamports$2d$B6EqSEho$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["L"] * e;
            return a < .01 ? 0 : a;
        }(r, o);
        return {
            amountInUsd: n,
            feeInUsd: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getFormattedUsdFromLamports$2d$B6EqSEho$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(r, o),
            totalInUsd: "$" + (parseFloat(a) + s).toFixed(2)
        };
    }
    if ("SOL" === n) {
        let n = Z(a), o = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])({
            solanaClient: e,
            tx: t
        });
        return {
            amountInSol: a + " SOL",
            feeInSol: tt(o) + " SOL",
            totalInSol: tt(n + o) + " SOL"
        };
    }
    return {
        amountInUsdc: a + " USDC",
        feeInSol: tt(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])({
            solanaClient: e,
            tx: t
        })) + " SOL"
    };
}
const nt = {
    component: function() {
        let I = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), { closePrivyModal: w, createAnalyticsEvent: v } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), { data: S, setModalData: G, navigate: z } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(), { wallets: tt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$D4IJeaog$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(), [et, nt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("preparing"), [ot, rt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(), [st, it] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(), [lt, mt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
        if (!S?.solanaFundingData) throw Error("Funding config is missing");
        if (!S.solanaFundingData.sourceWalletData) throw Error("Funding config is missing source wallet data");
        let { amount: ct, asset: dt, chain: ut, sourceWalletData: pt, destinationAddress: ft, afterSuccessScreen: gt } = S.solanaFundingData, ht = tt.find((t)=>t.address === pt.address && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$prepareFundingModalData$2d$BVTcQcmw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(pt.walletClientType) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$prepareFundingModalData$2d$BVTcQcmw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(t.standardWallet.name)), It = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])()(ut), { tokenPrice: wt, isTokenPriceLoading: vt } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useGetTokenPrice$2d$CDPxMEO$2d2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])("solana");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if ("preparing" !== et || vt || !ht) return;
            let t = "SOL" === dt ? Z(ct) : function(t) {
                return BigInt(Math.floor(1e6 * parseFloat(t)));
            }(ct);
            it({
                amount: ("SOL" === dt && wt ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getFormattedUsdFromLamports$2d$B6EqSEho$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(t, wt) : ct) ?? ct
            }), ("SOL" === dt ? async function({ solanaClient: t, source: e, destination: a, amountInLamports: n }) {
                let { value: o } = await t.rpc.getLatestBlockhash().send(), r = {
                    address: e
                }, s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTransactionMessage"])({
                    version: 0
                }), (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTransactionMessageFeePayerSigner"])(r, t), (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTransactionMessageLifetimeUsingBlockhash"])(o, t), (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2d$program$2f$system$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransferSolInstruction"])({
                        amount: n,
                        source: r,
                        destination: a
                    }), t), (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileTransaction"])(t));
                return new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionEncoder"])().encode(s));
            }({
                solanaClient: It,
                source: ht.address,
                destination: ft,
                amountInLamports: t
            }) : async function({ solanaClient: t, source: e, destination: a, amountInBaseUnits: n }) {
                let o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getUsdcMintAddress$2d$DFI1hv05$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(t.chain), { value: r } = await t.rpc.getLatestBlockhash().send(), s = {
                    address: e
                }, [i] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2d$program$2f$token$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findAssociatedTokenPda"])({
                    mint: o,
                    owner: e,
                    tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getFormattedUsdFromLamports$2d$B6EqSEho$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"]
                }), [l] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2d$program$2f$token$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findAssociatedTokenPda"])({
                    mint: o,
                    owner: a,
                    tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getFormattedUsdFromLamports$2d$B6EqSEho$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"]
                }), [m, c] = await Promise.all([
                    t.rpc.getAccountInfo(i, {
                        commitment: "confirmed",
                        encoding: "jsonParsed"
                    }).send().catch(()=>null),
                    t.rpc.getAccountInfo(l, {
                        commitment: "confirmed",
                        encoding: "jsonParsed"
                    }).send().catch(()=>null)
                ]);
                if (!m?.value) throw Error(`Source token account does not exist for address: ${e}`);
                let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2d$program$2f$token$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCreateAssociatedTokenIdempotentInstruction"])({
                    payer: s,
                    ata: l,
                    owner: a,
                    mint: o
                }), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$functional$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pipe"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTransactionMessage"])({
                    version: 0
                }), (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$signers$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTransactionMessageFeePayerSigner"])(s, t), (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setTransactionMessageLifetimeUsingBlockhash"])(r, t), (t)=>c?.value ? t : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])(d, t), (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transaction$2d$messages$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendTransactionMessageInstruction"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2d$program$2f$token$2f$dist$2f$src$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransferInstruction"])({
                        source: i,
                        destination: l,
                        authority: s,
                        amount: n
                    }), t), (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileTransaction"])(t));
                return new Uint8Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$solana$2f$transactions$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransactionEncoder"])().encode(u));
            }({
                solanaClient: It,
                source: ht.address,
                destination: ft,
                amountInBaseUnits: t
            })).then(rt).catch((t)=>{
                nt("error"), mt(t);
            });
        }, [
            et,
            ct,
            dt,
            ut,
            ht,
            ft,
            vt,
            wt
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            "preparing" === et && ot && at({
                tx: ot,
                solanaClient: It,
                amount: ct,
                asset: dt,
                tokenPrice: wt
            }).then((t)=>{
                nt("loaded"), it({
                    amount: t?.amountInUsd ?? t?.amountInUsdc ?? t?.amountInSol ?? ct,
                    fee: t?.feeInUsd ?? t?.feeInSol,
                    total: t?.totalInUsd ?? t?.totalInSol
                });
            }).catch((t)=>{
                nt("error"), mt(t);
            });
        }, [
            ot,
            ct,
            dt,
            et,
            wt
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            "error" === et && lt && (G({
                errorModalData: {
                    error: lt,
                    previousScreen: "FundSolWalletWithExternalSolanaWallet"
                },
                solanaFundingData: S.solanaFundingData
            }), z("ErrorScreen", !1));
        }, [
            et,
            z
        ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if ("success" !== et) return;
            let t = setTimeout(gt ? ()=>z(gt) : w, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"]);
            return ()=>clearTimeout(t);
        }, [
            et
        ]), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], "success" === et ? {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$FundWalletMethodHeader$2d$CS84Ots9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {}),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$Layouts$2d$Bmf8DxNP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"], {}),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$Layouts$2d$Bmf8DxNP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            color: "var(--privy-color-success)",
                            width: "64px",
                            height: "64px"
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$ScreenHeader$2d$Biz1wq02$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"], {
                            title: "Success!",
                            description: `You’ve successfully added ${ct} ${dt} to your ${I.name} wallet. It may take a minute before the funds are available to use.`
                        })
                    ]
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$Layouts$2d$Bmf8DxNP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R"], {}),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$ModalHeader$2d$BTru6YQw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["B"], {})
            ]
        } : "preparing" === et || "loaded" === et || "sending" === et ? {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$FundWalletMethodHeader$2d$CS84Ots9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {}),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$Layouts$2d$Bmf8DxNP$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"], {
                    style: {
                        marginTop: "16px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$InjectedWalletIcon$2d$DLcYOGDj$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"], {
                        icon: ht?.standardWallet.icon,
                        name: ht?.standardWallet.name
                    })
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$ScreenHeader$2d$Biz1wq02$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"], {
                    style: {
                        marginTop: "8px",
                        marginBottom: "12px"
                    },
                    title: "sending" === et && ht ? `Confirming with ${ht.standardWallet.name}` : "Confirm transaction"
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(K, {
                    rows: [
                        {
                            label: "Source",
                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$utils$2f$formatters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatWalletAddress"])(pt.address)
                        },
                        {
                            label: "Destination",
                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$utils$2f$formatters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatWalletAddress"])(ft)
                        },
                        {
                            label: "Network",
                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$getChainName$2d$DjpPdUSc$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(ut)
                        },
                        {
                            label: "Amount",
                            value: st?.amount,
                            isLoading: "preparing" === et
                        },
                        {
                            label: "Estimated fee",
                            value: st?.fee,
                            isLoading: "preparing" === et
                        },
                        {
                            label: "Total",
                            value: st?.total,
                            isLoading: "preparing" === et
                        }
                    ]
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$Button$2d$BCV6mjvS$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"], {
                    style: {
                        marginTop: "1rem"
                    },
                    loading: "preparing" === et || "sending" === et,
                    onClick: function() {
                        "loaded" === et && ot && ht && (nt("sending"), (async function({ transaction: t, chain: e, sourceWallet: a, solanaClient: n }) {
                            let { hasFunds: o } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])({
                                solanaClient: n,
                                tx: t
                            });
                            if (!o) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"](`Wallet ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$utils$2f$formatters$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatWalletAddress"])(a.address)} does not have enough funds.`, void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].INSUFFICIENT_BALANCE);
                            let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$D4IJeaog$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])((await a.signAndSendTransaction({
                                transaction: t,
                                chain: e
                            }).catch((t)=>{
                                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("Transaction was rejected by the user", t, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"].TRANSACTION_FAILURE);
                            })).signature);
                            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useSolanaRpcClient$2d$Brcjny8C$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])({
                                rpcSubscriptions: n.rpcSubscriptions,
                                signature: r,
                                timeout: 2e4
                            }), r;
                        })({
                            solanaClient: It,
                            transaction: ot,
                            chain: ut,
                            sourceWallet: ht
                        }).then((t)=>{
                            nt("success"), v({
                                eventName: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$analytics$2d$mkkvFRju$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["O"],
                                payload: {
                                    provider: "external",
                                    status: "success",
                                    txHash: t,
                                    address: ht.address,
                                    value: ct,
                                    chainType: "solana",
                                    clusterName: ut,
                                    token: dt,
                                    destinationAddress: ft,
                                    destinationValue: ct,
                                    destinationChainType: "solana",
                                    destinationClusterName: ut,
                                    destinationToken: dt
                                }
                            });
                        }).catch((t)=>{
                            nt("error"), mt(t);
                        }));
                    },
                    children: "Confirm"
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$ModalHeader$2d$BTru6YQw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["B"], {})
            ]
        } : {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$FundWalletMethodHeader$2d$CS84Ots9$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"], {}),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$index$2d$CJMgUOnw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["N"], {}),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    style: {
                        marginTop: "1rem"
                    }
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$ModalHeader$2d$BTru6YQw$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["B"], {})
            ]
        });
    }
};
;
}),
];

//# sourceMappingURL=cb648_11c54a9f._.js.map