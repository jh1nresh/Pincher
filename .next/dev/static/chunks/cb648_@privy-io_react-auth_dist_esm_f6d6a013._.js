(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/internal-context-e-Eni5bG.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I",
    ()=>O,
    "P",
    ()=>o,
    "a",
    ()=>_,
    "b",
    ()=>u,
    "c",
    ()=>i,
    "d",
    ()=>p,
    "e",
    ()=>n,
    "f",
    ()=>l,
    "g",
    ()=>E,
    "h",
    ()=>r,
    "i",
    ()=>d,
    "j",
    ()=>T,
    "k",
    ()=>S,
    "l",
    ()=>N,
    "m",
    ()=>c,
    "n",
    ()=>h,
    "o",
    ()=>A,
    "u",
    ()=>I
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$ofetch$2f$dist$2f$shared$2f$ofetch$2e$CWycOUEr$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__FetchError$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/ofetch/dist/shared/ofetch.CWycOUEr.mjs [app-client] (ecmascript) <export F as FetchError>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var a;
class i extends Error {
    toString() {
        return `${this.type}${this.privyErrorCode ? `-${this.privyErrorCode}` : ""}: ${this.message}${this.cause ? ` [cause: ${this.cause}]` : ""}`;
    }
    constructor(e, t, s){
        super(e), t instanceof Error && (this.cause = t), this.privyErrorCode = s;
    }
}
class n extends i {
    constructor(e, t, s, a, i, n){
        super(s, a, i), this.type = e, this.status = t, this.data = n;
    }
}
class _ extends i {
    constructor(e, t, s){
        super(e, t, s), this.type = "client_error";
    }
}
class r extends _ {
    constructor(){
        super("Request timed out", void 0, "client_request_timeout");
    }
}
class o extends i {
    constructor(e, t, s){
        super(e, t, s), this.type = "connector_error";
    }
}
const l = (t)=>{
    if (t instanceof i) return t;
    if (!(t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$ofetch$2f$dist$2f$shared$2f$ofetch$2e$CWycOUEr$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__FetchError$3e$__["FetchError"])) return d(t);
    if (!t.response) return new n("api_error", null, t.message, t);
    let { type: s, message: a, error: _, code: r } = t.data;
    return new n(s || "ApiError", t.response.status, a || _, t, r, t.data);
}, d = (e)=>e instanceof i ? e : e instanceof Error ? new _(e.message, e) : new _(`Internal error: ${e}`);
var u = ((a = {}).OAUTH_ACCOUNT_SUSPENDED = "oauth_account_suspended", a.MISSING_OR_INVALID_PRIVY_APP_ID = "missing_or_invalid_privy_app_id", a.MISSING_OR_INVALID_PRIVY_ACCOUNT_ID = "missing_or_invalid_privy_account_id", a.MISSING_OR_INVALID_TOKEN = "missing_or_invalid_token", a.INVALID_DATA = "invalid_data", a.INVALID_CAPTCHA = "invalid_captcha", a.LINKED_TO_ANOTHER_USER = "linked_to_another_user", a.CANNOT_LINK_MORE_OF_TYPE = "cannot_link_more_of_type", a.FAILED_TO_LINK_ACCOUNT = "failed_to_link_account", a.FAILED_TO_UPDATE_ACCOUNT = "failed_to_update_account", a.USER_EXITED_UPDATE_FLOW = "exited_update_flow", a.ALLOWLIST_REJECTED = "allowlist_rejected", a.OAUTH_USER_DENIED = "oauth_user_denied", a.OAUTH_UNEXPECTED = "oauth_unexpected", a.UNKNOWN_AUTH_ERROR = "unknown_auth_error", a.USER_EXITED_AUTH_FLOW = "exited_auth_flow", a.USER_EXITED_LINK_FLOW = "exited_link_flow", a.USER_EXITED_SET_PASSWORD_FLOW = "user_exited_set_password_flow", a.MUST_BE_AUTHENTICATED = "must_be_authenticated", a.UNKNOWN_CONNECT_WALLET_ERROR = "unknown_connect_wallet_error", a.GENERIC_CONNECT_WALLET_ERROR = "generic_connect_wallet_error", a.CLIENT_REQUEST_TIMEOUT = "client_request_timeout", a.INVALID_CREDENTIALS = "invalid_credentials", a.MISSING_MFA_CREDENTIALS = "missing_or_invalid_mfa", a.UNKNOWN_MFA_ERROR = "unknown_mfa_error", a.EMBEDDED_WALLET_ALREADY_EXISTS = "embedded_wallet_already_exists", a.EMBEDDED_WALLET_NOT_FOUND = "embedded_wallet_not_found", a.EMBEDDED_WALLET_CREATE_ERROR = "embedded_wallet_create_error", a.UNKNOWN_EMBEDDED_WALLET_ERROR = "unknown_embedded_wallet_error", a.EMBEDDED_WALLET_PASSWORD_UNCONFIRMED = "embedded_wallet_password_unconfirmed", a.EMBEDDED_WALLET_PASSWORD_ALREADY_EXISTS = "embedded_wallet_password_already_exists", a.EMBEDDED_WALLET_RECOVERY_ALREADY_EXISTS = "embedded_wallet_recovery_already_exists", a.TRANSACTION_FAILURE = "transaction_failure", a.UNSUPPORTED_CHAIN_ID = "unsupported_chain_id", a.NOT_SUPPORTED = "not_supported", a.CAPTCHA_TIMEOUT = "captcha_timeout", a.INVALID_MESSAGE = "invalid_message", a.UNABLE_TO_SIGN = "unable_to_sign", a.CAPTCHA_FAILURE = "captcha_failure", a.CAPTCHA_DISABLED = "captcha_disabled", a.SESSION_STORAGE_UNAVAILABLE = "session_storage_unavailable", a.TOO_MANY_REQUESTS = "too_many_requests", a.USER_LIMIT_REACHED = "max_accounts_reached", a.DISALLOWED_LOGIN_METHOD = "disallowed_login_method", a.DISALLOWED_PLUS_EMAIL = "disallowed_plus_email", a.PASSKEY_NOT_ALLOWED = "passkey_not_allowed", a.USER_DOES_NOT_EXIST = "user_does_not_exist", a.INSUFFICIENT_BALANCE = "insufficient_balance", a.ACCOUNT_TRANSFER_REQUIRED = "account_transfer_required", a.BUFFER_NOT_DEFINED = "buffer_not_defined", a.UNSUPPORTED_WALLET_TYPE = "unsupported_wallet_type", a.NO_SOLANA_ACCOUNTS = "no_solana_accounts", a.UNKNOWN_FUNDING_ERROR = "unknown_funding_error", a);
class E extends _ {
    constructor(){
        super("Method called before `ready`. Ensure you wait until `ready` is true before calling.");
    }
}
class c extends _ {
    constructor(e = "Embedded wallet error", t){
        super(e, t, "unknown_embedded_wallet_error");
    }
}
class A extends _ {
    constructor(e = "User must be authenticated"){
        super(e, void 0, "must_be_authenticated");
    }
}
class S extends _ {
    constructor(e){
        super("This application is in development mode and must be upgraded to production to log in new users.", e, "max_accounts_reached");
    }
}
class T extends o {
    constructor(){
        super("No Solana accounts found in wallet", void 0, "no_solana_accounts");
    }
}
const h = ()=>{
    throw Error("You need to wrap your application with the <PrivyProvider> initialized with your app id.");
}, N = (e)=>()=>{
        throw Error(e.trim());
    }, p = ()=>{}, O = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    setAuthenticated: h,
    setUser: h,
    setIsNewUser: h,
    isNewUserThisSession: !1,
    walletConnectionStatus: null,
    setWalletConnectionStatus: h,
    connectors: [],
    rpcConfig: {
        rpcUrls: {}
    },
    showFiatPrices: !0,
    chains: [],
    clientAnalyticsId: null,
    pendingTransaction: null,
    client: null,
    privy: null,
    appId: "notAdded",
    onCustomAuthAuthenticated: h,
    hideWalletUIs: {
        current: !1
    },
    nativeTokenSymbolForChainId: h,
    initializeWalletProxy: h,
    getAuthMeta: h,
    getAuthFlow: h,
    closePrivyModal: h,
    openPrivyModal: h,
    connectWallet: h,
    initLoginWithWallet: h,
    loginWithWallet: h,
    initLoginWithFarcaster: h,
    loginWithFarcaster: h,
    loginWithCode: h,
    initLoginWithEmail: h,
    initLoginWithSms: h,
    initUpdateEmail: h,
    initUpdatePhone: h,
    resendEmailCode: h,
    resendSmsCode: h,
    initLoginWithHeadlessOAuth: h,
    loginWithHeadlessOAuth: h,
    crossAppAuthFlow: h,
    initLoginWithOAuth: h,
    loginWithOAuth: h,
    passkeyAuthState: {
        status: "initial"
    },
    setPasskeyAuthState: h,
    initSignupWithPasskey: h,
    signupWithPasskey: h,
    initLoginWithPasskey: h,
    loginWithPasskey: h,
    initLinkWithPasskey: h,
    linkWithPasskey: h,
    refreshSessionAndUser: h,
    walletProxy: null,
    createAnalyticsEvent: h,
    acceptTerms: h,
    getUsdTokenPrice: h,
    getUsdPriceForSol: h,
    getSplTokenMetadata: h,
    recoverEmbeddedWallet: h,
    updateWallets: h,
    fundWallet: h,
    openModal: h,
    setReadyToTrue: h,
    requestFarcasterSignerStatus: h,
    initLoginWithTelegram: h,
    loginWithTelegram: h,
    generateSiweMessage: h,
    generateSiweMessageForSmartWallet: h,
    loginWithSiwe: h,
    linkWithSiwe: h,
    linkSmartWallet: h,
    delegateWallet: h,
    revokeDelegatedWallets: h,
    connectCoinbaseSmartWallet: h,
    connectBaseAccount: h,
    initiateAccountTransfer: h,
    emailOtpState: {
        status: "initial"
    },
    setEmailOtpState: h,
    smsOtpState: {
        status: "initial"
    },
    setSmsOtpState: h,
    siweState: {
        status: "initial"
    },
    setSiweState: h,
    oAuthState: {
        status: "initial"
    },
    setOAuthState: h,
    telegramAuthState: {
        status: "initial"
    },
    setTelegramAuthState: h,
    isHeadlessOAuthLoading: !1,
    isHeadlessSigning: h,
    inProgressAuthFlowRef: {
        current: null
    },
    inProgressLoginOrLinkMethodRef: {
        current: null
    },
    baseAccountSdk: void 0,
    setBaseAccountSdk: h
}), I = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(O);
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/context-DRLoVlsO.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "C",
    ()=>_,
    "D",
    ()=>d,
    "H",
    ()=>B,
    "I",
    ()=>k,
    "M",
    ()=>P,
    "O",
    ()=>D,
    "P",
    ()=>w,
    "R",
    ()=>m,
    "S",
    ()=>E,
    "V",
    ()=>p,
    "W",
    ()=>O,
    "a",
    ()=>x,
    "b",
    ()=>S,
    "c",
    ()=>ie,
    "d",
    ()=>C,
    "e",
    ()=>A,
    "f",
    ()=>F,
    "g",
    ()=>M,
    "h",
    ()=>R,
    "i",
    ()=>b,
    "j",
    ()=>v,
    "k",
    ()=>y,
    "l",
    ()=>u,
    "m",
    ()=>re,
    "n",
    ()=>L,
    "o",
    ()=>W,
    "p",
    ()=>I,
    "q",
    ()=>g,
    "r",
    ()=>h,
    "s",
    ()=>H,
    "t",
    ()=>f,
    "u",
    ()=>le,
    "v",
    ()=>U,
    "w",
    ()=>j,
    "x",
    ()=>q
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$dedupe$2d$supported$2d$chains$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/dedupe-supported-chains.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$default$2d$supported$2d$chains$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/default-supported-chains.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$mainnet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/mainnet.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/tinycolor2/esm/tinycolor.js [app-client] (ecmascript)");
;
;
;
;
const d = "https://auth.privy.io", u = 2e4, g = 1400, h = 2500, f = 4e3, p = "3.10.0", _ = "privy:token", b = "privy-token", m = "privy:refresh_token", v = "privy-refresh-token", w = "privy:pat", k = "privy:id_token", y = "privy-id-token", F = "privy-session", C = "privy:caid", M = (e)=>`privy:guest:${e}`, A = (e)=>`privy:cross-app:${e}`, E = "privy:state_code", x = "privy:code_verifier", B = "privy:headless_oauth", D = "privy:oauth_disable_signup", W = (e)=>`privy:wallet:${e}`, S = "privy:connections", L = 12e4, H = 1, I = "0x1", O = 3e4, U = "https://api.moonpay.com/v1", P = "https://api.moonpay.com/v1", q = "pk_live_hirbpu0cVcLHrjktC9l7fbc9ctjv0SL", j = "pk_test_fqWjXZMSFwloh7orvJsRfjiUHXJqFzI", R = "deprecated", T = {
    appearance: {
        landingHeader: "Log in or sign up",
        theme: "light",
        walletList: [
            "detected_ethereum_wallets",
            "detected_solana_wallets",
            "metamask",
            "coinbase_wallet",
            "rainbow",
            "base_account",
            "wallet_connect",
            "phantom"
        ]
    },
    walletConnectCloudProjectId: "34357d3c125c2bcf2ce2bc3309d98715",
    _render: {
        standalone: !1
    },
    fundingMethodConfig: {
        moonpay: {
            useSandbox: !1
        }
    }
};
let N = new Set([
    "coinbase_wallet",
    "base_account",
    "cryptocom",
    "metamask",
    "okx_wallet",
    "phantom",
    "rainbow",
    "uniswap",
    "zerion",
    "universal_profile",
    "bybit_wallet",
    "ronin_wallet",
    "haha_wallet",
    "wallet_connect",
    "wallet_connect_qr",
    "wallet_connect_qr_solana",
    "detected_solana_wallets",
    "detected_ethereum_wallets",
    "rabby_wallet",
    "safe",
    "solflare",
    "backpack",
    "jupiter",
    "binance",
    "binanceus",
    "bitget_wallet",
    "kraken_wallet"
]), $ = (e)=>N.has(e), z = (e, t, a)=>a.indexOf(e) === t;
const Y = ({ input: e, overrides: t })=>t ? t.primary.concat(t.overflow ?? []).filter($).filter(z) : e ? e.filter($).filter(z) : T.appearance.walletList;
let G = /paymaster\.biconomy\.io\/api/i, J = {
    mode: "SPONSORED",
    calculateGasLimits: !0,
    expiryDuration: 300,
    sponsorshipInfo: {
        webhookData: {},
        smartAccountInfo: {
            name: "BICONOMY",
            version: "2.0.0"
        }
    }
};
const V = (e, t)=>e && G.test(e) ? J : t && t.policy_id ? {
        policyId: t.policy_id
    } : void 0;
function K(e, t) {
    let a = Math.max(0, Math.min(1, e.toHsl().l + t));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ...e.toHsl(),
        l: a
    });
}
function X(e, t) {
    let a = e.getLuminance(), n = t.getLuminance();
    return (Math.max(a, n) + .05) / (Math.min(a, n) + .05);
}
function Z(e, t) {
    if (!e) {
        let e = t ? ee : te;
        return {
            accent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e.background.interactive),
            accentLight: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e.background.interactive),
            accentHover: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e.background["interactive-hover"]),
            accentDark: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e.background["interactive-clicked"]),
            accentDarkest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e.background["interactive-disabled"])
        };
    }
    let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e);
    return {
        accent: a,
        accentLight: K(a, .15),
        accentHover: K(a, .3),
        accentDark: K(a, -.06),
        accentDarkest: K(a, -.6)
    };
}
function Q({ backgroundTheme: e, accentHex: t }) {
    let a, n;
    "light" === e ? a = !1 : "dark" === e ? a = !0 : (a = .5 >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e).getLuminance(), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(e).toHslString());
    let o = a ? "dark" : "light", r = a ? ee : te, { accent: l, accentLight: i, accentHover: s, accentDark: d, accentDarkest: u } = Z(t, a), g = function(e) {
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(te.text.default), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ee.text.default), n = X(e, t), o = X(e, a), r = e.toHsl();
        return r.h >= 220 && r.h <= 300 && o >= 3 ? ee.text.default : n > o ? te.text.default : ee.text.default;
    }(l), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(g), f = X(l, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$tinycolor2$2f$esm$2f$tinycolor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(r.background.default)) >= 3;
    return {
        colorScheme: o,
        background: n || r.background.default,
        background2: r.background.elevated,
        background3: r.background.interactive,
        foreground: r.text.default,
        foreground2: r.text.muted,
        foreground3: r.text.placeholder,
        foreground4: r.border.default,
        accent: l.toHslString(),
        accentLight: i.toHslString(),
        accentHover: s.toHslString(),
        accentDark: d.toHslString(),
        accentDarkest: u.toHslString(),
        foregroundAccent: h.toHslString(),
        success: r.background.success,
        successDark: r.text.success,
        successLight: r.background.success,
        error: r.text.error,
        errorLight: r.background.error,
        warn: r.background.warning,
        warnLight: r.background.warning,
        warningDark: r.text.warning,
        errorDark: r.text.error,
        successBg: r.background.success,
        errorBg: r.background.error,
        errorBgHover: r.background["error-hover"],
        warnBg: r.background.warning,
        infoBg: r.background.info,
        infoBgHover: r.background["info-hover"],
        borderDefault: r.border.default,
        borderHover: r.border["default-hover"],
        borderFocus: r.border.focused,
        borderError: r.border.error,
        borderSuccess: r.border.success,
        borderWarning: r.border.warning,
        borderInfo: r.border.info,
        borderInteractive: r.border.interactive,
        borderInteractiveHover: r.border["interactive-hover"],
        backgroundHover: r.background["default-hover"],
        backgroundClicked: r.background["default-clicked"],
        backgroundDisabled: r.background["default-disabled"],
        backgroundInteractive: r.background.interactive,
        backgroundInteractiveHover: r.background["interactive-hover"],
        backgroundInteractiveClicked: r.background["interactive-clicked"],
        backgroundInteractiveDisabled: r.background["interactive-disabled"],
        foregroundHover: r.text.default,
        foregroundClicked: r.text.default,
        foregroundDisabled: r.text["default-disabled"],
        foregroundInteractive: r.text.interactive,
        foregroundInteractiveHover: r.text["interactive-hover"],
        accentHasGoodContrast: f ? "1" : "0",
        linkNavigationColor: f ? l.toHslString() : r.text.default,
        linkNavigationDecoration: f ? "none" : "underline",
        iconDefault: r.icon.default,
        iconMuted: r.icon.muted,
        iconSubtle: r.icon.subtle,
        iconInverse: r.icon.inverse,
        iconSuccess: r.icon.success,
        iconWarning: r.icon.warning,
        iconError: r.icon.error,
        iconInteractive: r.icon.interactive,
        iconDefaultHover: r.icon["default-hover"],
        iconMutedHover: r.icon["muted-hover"],
        iconSubtleHover: r.icon["subtle-hover"],
        iconDefaultClicked: r.icon["default-clicked"],
        iconMutedClicked: r.icon["muted-clicked"],
        iconSubtleClicked: r.icon["subtle-clicked"],
        iconDefaultDisabled: r.icon["default-disabled"],
        iconMutedDisabled: r.icon["muted-disabled"],
        iconSubtleDisabled: r.icon["subtle-disabled"],
        iconErrorHover: r.icon["error-hover"],
        iconInteractiveHover: r.icon["interactive-hover"],
        iconErrorClicked: r.icon["error-clicked"],
        iconInteractiveClicked: r.icon["interactive-clicked"],
        iconMutedDisabledAlt: r.icon["muted-disabled"],
        iconSubtleDisabledAlt: r.icon["subtle-disabled"]
    };
}
const ee = {
    background: {
        default: "#020713",
        elevated: "#1A2230",
        "default-hover": "#101724",
        "default-clicked": "#1A2230",
        "default-disabled": "#020713",
        success: "#0E3E2D",
        warning: "#373827",
        error: "#2E0C18",
        interactive: "#8B86FF",
        "error-hover": "#441821",
        "interactive-hover": "#7B73E5",
        "interactive-clicked": "#6560CC",
        "interactive-disabled": "#141824",
        info: "#1F2937",
        "info-hover": "#141824"
    },
    icon: {
        default: "#F8F8F8",
        muted: "#9BA2AE",
        subtle: "#7B8491",
        inverse: "#020713",
        success: "#88E3B5",
        warning: "#FDF27B",
        error: "#EF4444",
        interactive: "#88B6FF",
        "default-hover": "#F8F8F8",
        "muted-hover": "#AEB3BD",
        "subtle-hover": "#8B939E",
        "default-clicked": "#F8F8F8",
        "muted-clicked": "#9097A5",
        "subtle-clicked": "#78818E",
        "default-disabled": "#404452",
        "muted-disabled": "#404452",
        "subtle-disabled": "#404452",
        "error-hover": "#F05555",
        "interactive-hover": "#7B73E5",
        "error-clicked": "#EF4444",
        "interactive-clicked": "#6560CC"
    },
    text: {
        default: "#F8F8F8",
        muted: "#9BA2AE",
        placeholder: "#7B8491",
        success: "#ACEECB",
        warning: "#FEF9A0",
        error: "#FCA5A5",
        interactive: "#A29EFF",
        "default-disabled": "#404452",
        "interactive-hover": "#8C88E5"
    },
    border: {
        default: "#1F2937",
        interactive: "#88B0FF",
        focused: "#F8F8FC",
        info: "#5B83D3",
        success: "#317056",
        warning: "#FBBF24",
        error: "#F87171",
        "default-hover": "#34304A",
        "interactive-hover": "#88B0FF"
    }
}, te = {
    background: {
        default: "#FFFFFF",
        elevated: "#F1F2F9",
        "default-hover": "#F8F9FC",
        "default-clicked": "#F1F2F9",
        "default-disabled": "#FFFFFF",
        success: "#DCFCE7",
        warning: "#FEF3C7",
        error: "#FEE2E2",
        interactive: "#5B4FFF",
        "error-hover": "#FECACA",
        "interactive-hover": "#4F46E5",
        "interactive-clicked": "#4338CA",
        "interactive-disabled": "#F1F2F9",
        info: "#E0E7FF",
        "info-hover": "#EEF2FF"
    },
    icon: {
        default: "#110F2A",
        muted: "#64668B",
        subtle: "#9498B8",
        inverse: "#FFFFFF",
        success: "#33B287",
        warning: "#F59E0B",
        error: "#EF4444",
        interactive: "#564FFF",
        "default-hover": "#1D1B35",
        "muted-hover": "#64668B",
        "subtle-hover": "#888AAE",
        "default-clicked": "#060C23",
        "muted-clicked": "#64668B",
        "subtle-clicked": "#788804",
        "default-disabled": "#CBCDE1",
        "muted-disabled": "#CBCDE1",
        "subtle-disabled": "#CBCDE1",
        "error-hover": "#F06060",
        "interactive-hover": "#4F46E5",
        "error-clicked": "#DC3838",
        "interactive-clicked": "#2BA482"
    },
    text: {
        default: "#040217",
        muted: "#64668B",
        placeholder: "#9498B8",
        success: "#135638",
        warning: "#906218",
        error: "#991B1B",
        interactive: "#5B4FFF",
        "default-disabled": "#CBCDE1",
        "interactive-hover": "#5B4FFF"
    },
    border: {
        default: "#E2E3F0",
        interactive: "#5B4FFF",
        focused: "#949DF9",
        info: "#F1F2F9",
        success: "#87D7B7",
        warning: "#FACD63",
        error: "#F69393",
        "default-hover": "#E2E3F0",
        "interactive-hover": "#5B4FFF"
    }
};
function ae(e, t, a, n, o) {
    let r, c, d, u, g, h, f, p, _, b, m, v, w, k, y, F, C, M = a ? console.warn : ()=>{}, A = [];
    if (t?.loginMethods) for (let e of (r = t.loginMethods.includes("email"), c = t.loginMethods.includes("sms"), u = t.loginMethods.includes("wallet"), g = t.loginMethods.includes("google"), h = t.loginMethods.includes("twitter"), f = t.loginMethods.includes("discord"), m = t.loginMethods.includes("spotify"), v = t.loginMethods.includes("instagram"), p = t.loginMethods.includes("tiktok"), _ = t.loginMethods.includes("line"), b = t.loginMethods.includes("twitch"), k = t.loginMethods.includes("github"), w = t.loginMethods.includes("linkedin"), y = t.loginMethods.includes("apple"), F = t.loginMethods.includes("farcaster"), C = t.loginMethods.includes("telegram"), d = t.loginMethods.includes("passkey"), t.loginMethods))"string" == typeof e && e.startsWith("privy:") && A.push(e);
    else r = e.email_auth, c = e.sms_auth, u = e.wallet_auth || e.solana_wallet_auth, g = e.google_oauth, h = e.twitter_oauth, f = e.discord_oauth, k = e.github_oauth, m = e.spotify_oauth, v = e.instagram_oauth, p = e.tiktok_oauth, _ = e.line_oauth, b = e.twitch_oauth, w = e.linkedin_oauth, y = e.apple_oauth, F = e.farcaster_auth, C = e.telegram_auth, d = e.passkey_auth;
    e.passkey_auth && (d = !0), "undefined" != typeof window && "function" != typeof window.PublicKeyCredential && (d = !1);
    let E = [
        r,
        c
    ].filter(Boolean), x = [
        g,
        h,
        f,
        k,
        m,
        v,
        p,
        _,
        w,
        y,
        F,
        C
    ].filter(Boolean), B = [
        u
    ].filter(Boolean), D = t?.loginMethods?.includes("passkey") ?? !1, W = e.passkeys_for_signup_enabled ?? !1, S = [
        d && (W || D)
    ].filter(Boolean);
    if (E.length + x.length + B.length + S.length + A.length === 0) throw Error("You must enable at least one login method");
    let L = void 0 !== t?.appearance?.showWalletLoginFirst ? t?.appearance?.showWalletLoginFirst : e.show_wallet_login_first;
    L && 0 === B.length ? (M("You should only enable `showWalletLoginFirst` when `wallet` logins are also enabled. `showWalletLoginFirst` has been set to false"), L = !1) : L || x.length + E.length !== 0 || (M("You should only disable `showWalletLoginFirst` when `email`, `sms`, or social logins are also enabled. `showWalletLoginFirst` has been set to true"), L = !0);
    let H = t?.externalWallets?.walletConnect?.enabled ?? !0;
    t?.loginMethods && t.loginMethodsAndOrder && M("You should only configure one of `loginMethods` or `loginMethodsAndOrder`");
    let I = Y({
        input: t?.appearance?.walletList,
        overrides: t?.loginMethodsAndOrder
    });
    if ((I.includes("wallet_connect_qr") || I.includes("wallet_connect")) && I.includes("wallet_connect_qr_solana")) throw Error("wallet_connect_qr and wallet_connect_qr_solana cannot both be present in walletList due to WalletConnect session conflicts.");
    let O = (({ input: e })=>{
        if (!e || !e.primary[0]) return;
        let t = [
            e.primary[0]
        ], a = [];
        for (let a of (e.primary.length > 4 && console.warn("You should not specify greater than 4 login methods in `loginMethodsAndOrder.primary`"), e.primary.slice(1)))t.includes(a) ? console.warn(`Duplicated login method: ${a}`) : t.push(a);
        for (let n of e.overflow ?? [])t.includes(n) || a.includes(n) ? console.warn(`Duplicated login method: ${n}`) : a.push(n);
        return {
            primary: t,
            overflow: a
        };
    })({
        input: t?.loginMethodsAndOrder
    }), U = t?.intl?.defaultCountry ?? "US", { chains: P, defaultChain: q } = function({ supportedChains: e, defaultChainFromConfig: t }) {
        let a;
        if (e) {
            if (0 === e.length) throw Error("`supportedChains` must contain at least one chain");
            a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$dedupe$2d$supported$2d$chains$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dedupeSupportedChains"])(e);
        } else a = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$default$2d$supported$2d$chains$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SUPPORTED_CHAINS"]
        ];
        let n = e ? a[0] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$mainnet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"], o = t ?? n;
        if (!a.find((e)=>e.id === o.id)) throw Error("`defaultChain` must be included in `supportedChains`");
        return {
            chains: a,
            defaultChain: o
        };
    }({
        supportedChains: t?.supportedChains,
        defaultChainFromConfig: t?.defaultChain
    }), j = !!t?.defaultChain, R = t?.customAuth?.getCustomAccessToken && !1 !== t?.customAuth?.enabled, N = R ? "all-users" : e.embedded_wallet_config.ethereum.create_on_login, $ = e.embedded_wallet_config.solana.create_on_login;
    e.solana_wallet_auth && !t?.externalWallets?.solana?.connectors && console.warn("App configuration has Solana wallet login enabled, but no Solana wallet connectors have been passed to Privy. Make sure to pass Solana connectors to the `config.externalWallets.solana.connectors` field of the `PrivyProvider`");
    let z = e.telegram_auth_config ? {
        botId: e.telegram_auth_config.bot_id,
        botName: e.telegram_auth_config.bot_name,
        linkEnabled: e.telegram_auth_config.link_enabled,
        seamlessAuthEnabled: e.telegram_auth_config.seamless_auth_enabled
    } : void 0, G = e.funding_config ? {
        methods: e.funding_config.methods,
        options: e.funding_config.options,
        defaultRecommendedAmount: e.funding_config.default_recommended_amount,
        defaultRecommendedCurrency: e.funding_config.default_recommended_currency,
        promptFundingOnWalletCreation: e.funding_config.prompt_funding_on_wallet_creation,
        crossChainBridgingEnabled: e.funding_config.cross_chain_bridging_enabled
    } : void 0, J = e.smart_wallet_config;
    return {
        id: e.id,
        appClientId: o,
        name: e.name,
        allowlistConfig: {
            errorTitle: e.allowlist_config.error_title,
            errorDetail: e.allowlist_config.error_detail,
            errorCtaText: e.allowlist_config.cta_text,
            errorCtaLink: e.allowlist_config.cta_link
        },
        legacyWalletUiConfig: e.legacy_wallet_ui_config,
        appearance: {
            logo: t?.appearance?.logo ?? e.logo_url ?? void 0,
            landingHeader: t?.appearance?.landingHeader ?? T.appearance.landingHeader,
            loginMessage: "string" == typeof t?.appearance?.loginMessage ? t?.appearance?.loginMessage.slice(0, 100) : t?.appearance?.loginMessage,
            footerLogo: t?.appearance?.footerLogo,
            palette: Q({
                backgroundTheme: t?.appearance?.theme ?? T.appearance.theme,
                accentHex: t?.appearance?.accentColor ?? e.accent_color
            }),
            loginGroupPriority: L ? "web3-first" : "web2-first",
            hideDirectWeb2Inputs: !!t?.appearance?.hideDirectWeb2Inputs,
            walletList: I,
            walletChainType: t?.appearance?.walletChainType ?? (({ evmWalletAuth: e, solanaWalletAuth: t })=>e && t ? "ethereum-and-solana" : e ? "ethereum-only" : t ? "solana-only" : "ethereum-only")({
                evmWalletAuth: e.wallet_auth ?? !1,
                solanaWalletAuth: e.solana_wallet_auth ?? !1
            })
        },
        loginMethods: {
            wallet: u,
            email: r,
            sms: c,
            passkey: d,
            google: g,
            twitter: h,
            discord: f,
            github: k,
            spotify: m,
            instagram: v,
            tiktok: p,
            line: _,
            twitch: b,
            linkedin: w,
            apple: y,
            farcaster: F,
            telegram: C
        },
        customOAuthProviders: (e.custom_oauth_providers ?? []).filter((e)=>!1 !== e.enabled),
        crossAppProviders: A,
        disablePlusEmails: e.disable_plus_emails,
        loginMethodsAndOrder: O,
        legal: {
            termsAndConditionsUrl: t?.legal?.termsAndConditionsUrl ?? e.terms_and_conditions_url,
            privacyPolicyUrl: t?.legal?.privacyPolicyUrl ?? e.privacy_policy_url,
            requireUsersAcceptTerms: e.require_users_accept_terms ?? !1
        },
        walletConnectCloudProjectId: t?.walletConnectCloudProjectId ?? e.wallet_connect_cloud_project_id ?? T.walletConnectCloudProjectId,
        rpcConfig: {
            rpcUrls: {},
            rpcTimeouts: t?.externalWallets?.signatureRequestTimeouts ?? {}
        },
        chains: P,
        defaultChain: q,
        intl: {
            defaultCountry: U,
            textLocalization: t?.intl?.textLocalization
        },
        shouldEnforceDefaultChainOnConnect: j,
        captcha: {
            enabledProvider: e.enabled_captcha_provider ?? null,
            siteKey: e.captcha_site_key
        },
        externalWallets: {
            coinbaseWallet: {
                config: {
                    appName: e.name,
                    appLogoUrl: e.logo_url,
                    preference: {
                        options: "all",
                        ...t?.externalWallets?.coinbaseWallet?.config?.preference
                    },
                    ...t?.externalWallets?.coinbaseWallet?.config
                }
            },
            baseAccount: {
                config: {
                    appName: e.name,
                    appLogoUrl: e.logo_url,
                    ...t?.externalWallets?.baseAccount?.config,
                    preference: {
                        ...t?.externalWallets?.baseAccount?.config?.preference,
                        telemetry: !1
                    }
                }
            },
            walletConnect: {
                enabled: H
            },
            solana: {
                connectors: t?.externalWallets?.solana?.connectors
            },
            disableAllExternalWallets: t?.externalWallets?.disableAllExternalWallets ?? !1
        },
        embeddedWallets: {
            requireUserOwnedRecoveryOnCreate: !R && (e.embedded_wallet_config.require_user_owned_recovery_on_create ?? !1),
            userOwnedRecoveryOptions: R ? [
                "user-passcode"
            ] : e.embedded_wallet_config.user_owned_recovery_options,
            priceDisplay: t?.embeddedWallets?.priceDisplay ?? {
                primary: "fiat-currency",
                secondary: "native-token"
            },
            ethereum: {
                createOnLogin: t?.embeddedWallets?.ethereum?.createOnLogin ?? N
            },
            solana: {
                createOnLogin: t?.embeddedWallets?.solana?.createOnLogin ?? $
            },
            disableAutomaticMigration: t?.embeddedWallets?.disableAutomaticMigration ?? !1,
            mode: e.embedded_wallet_config.mode,
            showWalletUIs: t?.embeddedWallets?.showWalletUIs ?? e.enforce_wallet_uis ?? !0,
            extendedCalldataDecoding: t?.embeddedWallets?.extendedCalldataDecoding ?? !1,
            transactionScanning: {
                enabled: t?.embeddedWallets?.transactionScanning?.enabled ?? !1,
                domain: t?.embeddedWallets?.transactionScanning?.domain ?? n ?? "https://auth.privy.io"
            }
        },
        mfa: {
            methods: e.mfa_methods ?? [],
            noPromptOnMfaRequired: t?.mfa?.noPromptOnMfaRequired ?? !1
        },
        passkeys: {
            shouldUnlinkOnUnenrollMfa: t?.passkeys?.shouldUnlinkOnUnenrollMfa,
            shouldUnenrollMfaOnUnlink: t?.passkeys?.shouldUnenrollMfaOnUnlink,
            registration: t?.passkeys?.registration
        },
        customAuth: R ? {
            enabled: !0,
            ...t.customAuth
        } : void 0,
        loginConfig: {
            telegramAuthConfiguration: z,
            passkeysForSignupEnabled: e.passkeys_for_signup_enabled
        },
        headless: !!t?.headless,
        render: {
            standalone: t?._render?.standalone ?? T._render.standalone
        },
        fundingConfig: G,
        fundingMethodConfig: {
            ...t?.fundingMethodConfig ?? T.fundingMethodConfig,
            moonpay: {
                ...t?.fundingMethodConfig?.moonpay ?? T.fundingMethodConfig.moonpay,
                useSandbox: t?.fundingMethodConfig?.moonpay.useSandbox ?? T.fundingMethodConfig.moonpay.useSandbox
            }
        },
        whatsAppEnabled: !!e.whatsapp_enabled,
        customOAuthRedirectUrl: t?.customOAuthRedirectUrl,
        allowOAuthInEmbeddedBrowsers: t?.allowOAuthInEmbeddedBrowsers ?? !1,
        solanaRpcs: {
            "solana:mainnet": t?.solana?.rpcs?.["solana:mainnet"] ?? null,
            "solana:devnet": t?.solana?.rpcs?.["solana:devnet"] ?? null,
            "solana:testnet": t?.solana?.rpcs?.["solana:testnet"] ?? null
        },
        smartWallets: J?.enabled ? {
            enabled: J.enabled,
            smartWalletVersion: J.smart_wallet_version,
            smartWalletType: J.smart_wallet_type,
            configuredNetworks: J.configured_networks.map((e)=>({
                    chainId: e.chain_id,
                    bundlerUrl: e.bundler_url,
                    paymasterUrl: e.paymaster_url,
                    paymasterContext: V(e.paymaster_url, e.paymaster_context)
                }))
        } : {
            enabled: J?.enabled ?? !1
        }
    };
}
const ne = {
    show_wallet_login_first: !0,
    allowlist_config: {
        error_title: null,
        error_detail: null,
        cta_text: null,
        cta_link: null
    },
    wallet_auth: !0,
    email_auth: !0,
    sms_auth: !1,
    google_oauth: !1,
    twitter_oauth: !1,
    discord_oauth: !1,
    github_oauth: !1,
    linkedin_oauth: !1,
    apple_oauth: !1,
    disable_plus_emails: !1,
    terms_and_conditions_url: null,
    privacy_policy_url: null,
    embedded_wallet_config: {
        create_on_login: "off",
        ethereum: {
            create_on_login: "off"
        },
        solana: {
            create_on_login: "off"
        },
        require_user_owned_recovery_on_create: !1,
        user_owned_recovery_options: [
            "user-passcode"
        ],
        mode: "user-controlled-server-wallets-only"
    },
    captcha_site_key: "",
    enforce_wallet_uis: !1,
    legacy_wallet_ui_config: !1,
    id: "",
    name: "",
    passkeys_for_signup_enabled: !1,
    whatsapp_enabled: !1
};
let oe = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    appConfig: ae(ne, void 0, !1),
    isServerConfigLoaded: !1
});
const re = ({ children: o, client: r, legacyClient: l, clientConfig: i, appClientId: s })=>{
    let [c, d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>ae(c ?? ne, i, !!c, "undefined" != typeof window ? window.location.origin : void 0, s), [
        c,
        i,
        s
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!c) return;
        let e = function(e) {
            if (!e) return {};
            let { appearance: t, supportedChains: a, defaultChain: n, externalWallets: o, ...r } = e;
            return {
                ...r,
                ...a ? {
                    supportedChains: a.map((e)=>e.id)
                } : void 0,
                ...n ? {
                    defaultChain: n.id
                } : void 0,
                ...o ? {
                    walletConnect: o.walletConnect ? {
                        enabled: o.walletConnect.enabled
                    } : void 0,
                    coinbaseWallet: o.coinbaseWallet,
                    solana: {
                        connectors: o.solana?.connectors?.get().map((e)=>e.walletClientType)
                    }
                } : void 0
            };
        }(i), t = (function(e, t = 0) {
            let a = 3735928559 ^ t, n = 1103547991 ^ t;
            for(let t, o = 0; o < e.length; o++)a = Math.imul(a ^ (t = e.charCodeAt(o)), 2654435761), n = Math.imul(n ^ t, 1597334677);
            return a = Math.imul(a ^ a >>> 16, 2246822507) ^ Math.imul(n ^ n >>> 13, 3266489909), 4294967296 * (2097151 & (n = Math.imul(n ^ n >>> 16, 2246822507) ^ Math.imul(a ^ a >>> 13, 3266489909))) + (a >>> 0);
        })(JSON.stringify(e)).toString(), a = `privy:sent:${c.id}:${t}`;
        localStorage.getItem(a) || (l.createAnalyticsEvent({
            eventName: "sdk_initialize",
            payload: e
        }), localStorage.setItem(a, "t"));
    }, [
        i,
        c
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        c || (async ()=>{
            try {
                await r.initialize();
                let e = r.app.getConfig();
                e.custom_api_url && l.updateApiUrl(e.custom_api_url), d(e);
            } catch (e) {
                console.warn("Error generating app config: ", e);
            }
        })();
    }, []), /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(oe.Provider, {
        value: {
            appConfig: u,
            isServerConfigLoaded: !!c
        },
        children: o
    });
}, le = ()=>{
    let { appConfig: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(oe);
    return e;
}, ie = ()=>{
    let { isServerConfigLoaded: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(oe);
    return e;
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/get-is-unified-wallet-gMDXpX6C.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "M",
    ()=>W,
    "P",
    ()=>I,
    "a",
    ()=>P,
    "b",
    ()=>m,
    "c",
    ()=>h,
    "d",
    ()=>S,
    "e",
    ()=>f,
    "f",
    ()=>b,
    "g",
    ()=>j,
    "h",
    ()=>v,
    "i",
    ()=>o,
    "j",
    ()=>k,
    "k",
    ()=>A,
    "l",
    ()=>w,
    "m",
    ()=>g,
    "n",
    ()=>_,
    "o",
    ()=>y,
    "u",
    ()=>M
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/context-DRLoVlsO.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/internal-context-e-Eni5bG.mjs [app-client] (ecmascript)");
;
;
;
;
;
function o(e) {
    return "string" == typeof e && /^custom:[a-zA-Z0-9_-]+$/i.test(e);
}
function c(e) {
    return e ? new Date(1e3 * e) : null;
}
function p(e, t) {
    return e.slice().sort((e, t)=>(e.firstVerifiedAt?.getTime() ?? 0) - (t.firstVerifiedAt?.getTime() ?? 0)).find((e)=>e.type === t);
}
const m = (e)=>e ? f(e).find((e)=>0 === e.walletIndex) ?? null : null, f = (e)=>e ? _(e, "ethereum") : [], _ = (e, t)=>e.linkedAccounts.filter((e)=>"wallet" === e.type && "privy" === e.walletClientType && !e.imported && e.chainType === t), y = (e)=>e ? _(e, "solana") : [], h = (e)=>e ? y(e).find((e)=>0 === e.walletIndex) ?? null : null, b = (e)=>(e?.linkedAccounts ?? []).filter((e)=>"wallet" === e.type && "privy" === e.walletClientType && e.imported && "ethereum" === e.chainType), k = (e)=>(e?.linkedAccounts ?? []).filter((e)=>"wallet" === e.type && e.imported && "privy" === e.walletClientType && "solana" === e.chainType), g = (t, i)=>t === i || !(!t.startsWith("0x") || !i.startsWith("0x")) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(t) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(i), v = (e, t)=>e?.linkedAccounts.find((e)=>"wallet" === e.type && "privy" === e.walletClientType && g(e.address, t)) || null, A = (e, t)=>e.find((e)=>g(e.address, t)) || null, j = (e)=>m(e) ?? h(e);
function w(e) {
    if (!e) return null;
    let t = function(e) {
        let t = [];
        for (let i of e){
            let e = i.type;
            switch(i.type){
                case "wallet":
                    let a = {
                        id: i.id,
                        address: i.address,
                        type: i.type,
                        imported: i.imported,
                        delegated: i.delegated,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at),
                        chainType: i.chain_type,
                        walletClientType: i.wallet_client_type,
                        connectorType: i.connector_type,
                        recoveryMethod: i.recovery_method,
                        walletIndex: i.wallet_index,
                        publicKey: i.public_key
                    };
                    t.push(a);
                    break;
                case "smart_wallet":
                    let r = {
                        address: i.address,
                        type: i.type,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at),
                        smartWalletType: i.smart_wallet_type,
                        smartWalletVersion: i.smart_wallet_version
                    };
                    t.push(r);
                    break;
                case "cross_app":
                    let s = {
                        type: i.type,
                        subject: i.subject,
                        embeddedWallets: i.embedded_wallets,
                        smartWallets: i.smart_wallets,
                        providerApp: {
                            id: i.provider_app_id
                        },
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(s);
                    break;
                case "email":
                    let l = {
                        address: i.address,
                        type: i.type,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(l);
                    break;
                case "phone":
                    let n = {
                        number: i.phoneNumber,
                        type: i.type,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(n);
                    break;
                case "google_oauth":
                    let u = {
                        subject: i.subject,
                        email: i.email,
                        name: i.name,
                        type: i.type,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(u);
                    break;
                case "spotify_oauth":
                    let d = {
                        subject: i.subject,
                        email: i.email,
                        name: i.name,
                        type: i.type,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(d);
                    break;
                case "instagram_oauth":
                    let p = {
                        subject: i.subject,
                        username: i.username,
                        type: i.type,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(p);
                    break;
                case "twitter_oauth":
                    let m = {
                        subject: i.subject,
                        username: i.username,
                        name: i.name,
                        type: i.type,
                        profilePictureUrl: i.profile_picture_url,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(m);
                    break;
                case "discord_oauth":
                    let f = {
                        subject: i.subject,
                        username: i.username,
                        email: i.email,
                        type: i.type,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(f);
                    break;
                case "github_oauth":
                    let _ = {
                        subject: i.subject,
                        username: i.username,
                        name: i.name,
                        email: i.email,
                        type: i.type,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(_);
                    break;
                case "tiktok_oauth":
                    let y = {
                        subject: i.subject,
                        username: i.username,
                        name: i.name,
                        type: i.type,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(y);
                    break;
                case "line_oauth":
                    let h = {
                        subject: i.subject,
                        name: i.name,
                        email: i.email,
                        profilePictureUrl: i.profile_picture_url,
                        type: i.type,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(h);
                    break;
                case "twitch_oauth":
                    let b = {
                        subject: i.subject,
                        username: i.username,
                        type: i.type,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(b);
                    break;
                case "linkedin_oauth":
                    let k = {
                        subject: i.subject,
                        name: i.name,
                        email: i.email,
                        vanityName: i.vanity_name,
                        type: i.type,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(k);
                    break;
                case "apple_oauth":
                    let g = {
                        subject: i.subject,
                        email: i.email,
                        type: i.type,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(g);
                    break;
                case "custom_auth":
                    t.push({
                        type: i.type,
                        customUserId: i.custom_user_id,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    });
                    break;
                case "farcaster":
                    let v = {
                        type: i.type,
                        fid: i.fid,
                        ownerAddress: i.owner_address,
                        displayName: i.display_name,
                        username: i.username,
                        bio: i.bio,
                        pfp: i.profile_picture_url,
                        url: i.homepage_url,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at),
                        signerPublicKey: i.signer_public_key
                    };
                    t.push(v);
                    break;
                case "passkey":
                    let A = {
                        type: i.type,
                        enrolledInMfa: i.enrolled_in_mfa,
                        credentialId: i.credential_id,
                        publicKey: i.public_key,
                        authenticatorName: i.authenticator_name,
                        createdWithDevice: i.created_with_device,
                        createdWithOs: i.created_with_os,
                        createdWithBrowser: i.created_with_browser,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(A);
                    break;
                case "telegram":
                    let j = {
                        type: i.type,
                        telegramUserId: i.telegram_user_id,
                        firstName: i.first_name,
                        lastName: i.last_name,
                        username: i.username,
                        photoUrl: i.photo_url,
                        firstVerifiedAt: c(i.first_verified_at),
                        latestVerifiedAt: c(i.latest_verified_at)
                    };
                    t.push(j);
                    break;
                default:
                    if (o(i.type)) {
                        let e = {
                            type: i.type,
                            subject: i.subject,
                            name: i.name,
                            username: i.username,
                            email: i.email,
                            profilePictureUrl: i.profile_picture_url,
                            firstVerifiedAt: c(i.first_verified_at),
                            latestVerifiedAt: c(i.latest_verified_at)
                        };
                        t.push(e);
                        break;
                    }
                    console.warn(`Unrecognized account type: ${e}. Please consider upgrading the Privy SDK.`);
            }
        }
        return t;
    }(e.linked_accounts), i = p(t, "wallet"), a = p(t, "smart_wallet"), r = p(t, "email"), s = p(t, "phone"), l = p(t, "google_oauth"), n = p(t, "twitter_oauth"), u = p(t, "discord_oauth"), d = p(t, "github_oauth"), m = p(t, "spotify_oauth"), f = p(t, "instagram_oauth"), _ = p(t, "tiktok_oauth"), y = p(t, "line_oauth"), h = p(t, "twitch_oauth"), b = p(t, "linkedin_oauth"), k = p(t, "apple_oauth"), g = p(t, "farcaster"), v = p(t, "telegram"), A = e.mfa_methods.map(({ type: e, verified_at: t })=>({
            type: e,
            verifiedAt: c(t)
        }));
    return {
        id: e.id,
        createdAt: c(e.created_at),
        linkedAccounts: t,
        email: r && {
            address: r?.address
        },
        phone: s && {
            number: s?.number
        },
        wallet: i && {
            id: i.id,
            address: i.address,
            chainType: i.chainType,
            walletClientType: i.walletClientType,
            connectorType: i.connectorType,
            recoveryMethod: i.recoveryMethod,
            imported: i.imported,
            delegated: i.delegated,
            walletIndex: i.walletIndex,
            publicKey: i.publicKey
        },
        smartWallet: a && {
            address: a.address,
            smartWalletType: a.smartWalletType,
            smartWalletVersion: a.smartWalletVersion
        },
        google: l && {
            subject: l.subject,
            email: l.email,
            name: l.name
        },
        twitter: n && {
            subject: n.subject,
            username: n.username,
            name: n.name,
            profilePictureUrl: n.profilePictureUrl
        },
        discord: u && {
            subject: u.subject,
            username: u.username,
            email: u.email
        },
        github: d && {
            subject: d.subject,
            username: d.username,
            name: d.name,
            email: d.email
        },
        spotify: m && {
            subject: m.subject,
            email: m.email,
            name: m.name
        },
        instagram: f && {
            subject: f.subject,
            username: f.username
        },
        tiktok: _ && {
            subject: _.subject,
            username: _.username,
            name: _.name
        },
        line: y && {
            subject: y.subject,
            name: y.name,
            email: y.email,
            profilePictureUrl: y.profilePictureUrl
        },
        twitch: h && {
            subject: h.subject,
            username: h.username
        },
        linkedin: b && {
            subject: b.subject,
            name: b.name,
            email: b.email,
            vanityName: b.vanityName
        },
        apple: k && {
            subject: k.subject,
            email: k.email
        },
        farcaster: g && {
            fid: g.fid,
            ownerAddress: g.ownerAddress,
            displayName: g.displayName,
            username: g.username,
            bio: g.bio,
            pfp: g.pfp,
            url: g.url,
            signerPublicKey: g.signerPublicKey
        },
        telegram: v && {
            telegramUserId: v.telegramUserId,
            firstName: v.firstName,
            lastName: v.lastName,
            username: v.username,
            photoUrl: v.photoUrl
        },
        delegatedWallets: [],
        mfaMethods: A.map((e)=>e.type),
        hasAcceptedTerms: e.has_accepted_terms ?? !1,
        isGuest: e.is_guest,
        customMetadata: e.custom_metadata
    };
}
function V({ src: e, ...i }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("img", {
        src: e,
        ...i,
        style: {
            display: "none"
        }
    });
}
const T = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    currentScreen: null,
    lastScreen: null,
    navigate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    navigateBack: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    resetNavigation: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    setModalData: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    onUserCloseViaDialogOrKeybindRef: void 0
}), W = (e)=>{
    let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(), [r, d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(e.initialScreen), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        e.open || (o.current = null);
    }, [
        e.open
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        o.current = null;
    }, [
        e.initialScreen
    ]);
    let c = {
        data: e.data,
        setModalData: e.setModalData,
        currentScreen: e.initialScreen,
        lastScreen: r,
        navigate: (t, i = !0)=>{
            e.setInitialScreen(t), i && d(e.initialScreen);
        },
        navigateBack: ()=>{
            e.setInitialScreen(r);
        },
        resetNavigation: ()=>{
            e.setInitialScreen(null), d(null);
        },
        onUserCloseViaDialogOrKeybindRef: o
    }; /*#__PURE__*/ 
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(T.Provider, {
        value: c,
        children: [
            ("string" == typeof a.appearance.logo || "img" === a.appearance.logo?.type) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(V, {
                src: "string" == typeof a.appearance.logo ? a.appearance.logo : a.appearance.logo.props.src
            }),
            e.children
        ]
    });
}, P = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(T), I = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    ready: !1,
    authenticated: !1,
    user: null,
    walletConnectors: null,
    connectWallet: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    login: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    connectOrCreateWallet: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkEmail: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkPhone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkFarcaster: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkWallet: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    startCrossAppAuthFlow: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkGoogle: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkTwitter: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkTwitch: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkDiscord: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkGithub: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkSpotify: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkInstagram: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkTelegram: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkTiktok: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkLine: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkLinkedIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkApple: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    linkPasskey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    updateEmail: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    updatePhone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    logout: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    getAccessToken: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkEmail: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkPhone: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkWallet: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkGoogle: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkTwitter: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkTwitch: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkDiscord: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkGithub: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkSpotify: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkInstagram: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkTiktok: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkLine: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkLinkedIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkApple: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkCrossAppAccount: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkFarcaster: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkTelegram: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unlinkPasskey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    signMessage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    signTypedData: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    enrollInMfa: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    initEnrollmentWithSms: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    initEnrollmentWithTotp: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    initEnrollmentWithPasskey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    promptMfa: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    init: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    submitEnrollmentWithSms: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    submitEnrollmentWithTotp: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    submitEnrollmentWithPasskey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    unenroll: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    submit: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    cancel: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    sendTransaction: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    signTransaction: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    exportWallet: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    setWalletPassword: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    setWalletRecovery: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    requestFarcasterSignerFromWarpcast: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    getFarcasterSignerPublicKey: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    signFarcasterMessage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    signMessageWithCrossAppWallet: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    signTypedDataWithCrossAppWallet: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    sendTransactionWithCrossAppWallet: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    signTransactionWithCrossAppWallet: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["n"],
    isModalOpen: !1,
    mfaMethods: []
}), M = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(I), S = (e)=>!!e.id && "privy-v2" === e.recoveryMethod;
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/events-context-CI0iqAXA.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "P",
    ()=>t,
    "a",
    ()=>u,
    "e",
    ()=>a,
    "p",
    ()=>r,
    "u",
    ()=>s
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const r = {
    login: {
        onComplete: [],
        onError: []
    },
    logout: {
        onSuccess: []
    },
    connectWallet: {
        onSuccess: [],
        onError: []
    },
    connectOrCreateWallet: {
        onSuccess: [],
        onError: []
    },
    createWallet: {
        onSuccess: [],
        onError: []
    },
    linkAccount: {
        onSuccess: [],
        onError: []
    },
    update: {
        onSuccess: [],
        onError: []
    },
    configureMfa: {
        onMfaRequired: []
    },
    setWalletPassword: {
        onSuccess: [],
        onError: []
    },
    setWalletRecovery: {
        onSuccess: [],
        onError: []
    },
    signMessage: {
        onSuccess: [],
        onError: []
    },
    signTypedData: {
        onSuccess: [],
        onError: []
    },
    sendTransaction: {
        onSuccess: [],
        onError: []
    },
    signTransaction: {
        onSuccess: [],
        onError: []
    },
    accessToken: {
        onAccessTokenGranted: [],
        onAccessTokenRemoved: []
    },
    oAuthAuthorization: {
        onOAuthTokenGrant: []
    },
    fundWallet: {
        onUserExited: []
    },
    fundSolanaWallet: {
        onUserExited: []
    },
    customAuth: {
        onAuthenticated: [],
        onUnauthenticated: []
    }
}, t = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(void 0);
let c = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(t);
function s(o, e) {
    if (!e) return;
    let r = c().current[o];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        for (let [n, t] of Object.entries(e))Object.prototype.hasOwnProperty.call(r, n) || console.warn(`Invalid event type "${n}" for action "${o}"`), r[n]?.push(t);
        return ()=>{
            for (let [n, t] of Object.entries(e))Object.prototype.hasOwnProperty.call(r, n) || console.warn(`Invalid event type "${n}" for action "${o}"`), r[n] = r[n]?.filter((o)=>o !== t);
        };
    }, [
        e
    ]);
}
function a(o, e, n, ...r) {
    for (let t of o.current[e][n])t(...r);
}
function u() {
    let o = c();
    return (e, n, ...r)=>a(o, e, n, ...r);
}
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useWallets-kObl6ZLS.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "U",
    ()=>o,
    "g",
    ()=>i,
    "t",
    ()=>a,
    "u",
    ()=>n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/get-is-unified-wallet-gMDXpX6C.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const a = (e)=>{
    if ("ethereum" === e.chainType) return {
        entropyId: e.address,
        entropyIdVerifier: "ethereum-address-verifier"
    };
    if ("solana" === e.chainType) return {
        entropyId: e.address,
        entropyIdVerifier: "solana-address-verifier"
    };
    throw Error("Failed to get account entropy details");
}, i = (r, t)=>{
    if (t?.imported) return a(t);
    let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(r);
    if (!i) throw Error("Failed to find primary wallet");
    return a(i);
}, o = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function n() {
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(o);
    return null === e ? (console.warn("`useWallets` was called outside the PrivyProvider component"), {
        wallets: [],
        ready: !1
    }) : e;
}
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/usePrivy-BWtc2XF-.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "P",
    ()=>N,
    "S",
    ()=>B,
    "a",
    ()=>I,
    "b",
    ()=>U,
    "c",
    ()=>$,
    "d",
    ()=>x,
    "e",
    ()=>j,
    "f",
    ()=>V,
    "g",
    ()=>Y,
    "h",
    ()=>X,
    "i",
    ()=>J,
    "j",
    ()=>O,
    "k",
    ()=>F,
    "o",
    ()=>C,
    "p",
    ()=>P,
    "r",
    ()=>_,
    "s",
    ()=>k,
    "u",
    ()=>G
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$react$2d$device$2d$detect$2f$dist$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/react-device-detect/dist/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/internal-context-e-Eni5bG.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/get-is-unified-wallet-gMDXpX6C.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$events$2d$context$2d$CI0iqAXA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/events-context-CI0iqAXA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$wallet$2d$api$2f$create$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/js-sdk-core/dist/esm/wallet-api/create.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useWallets-kObl6ZLS.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/context-DRLoVlsO.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function D(e) {
    return {
        name: e.metadata?.shortName || e.name || "",
        universalLink: e.mobile.universal,
        deepLink: e.mobile.native
    };
}
function U(t, a) {
    let n = D(a);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$react$2d$device$2d$detect$2f$dist$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMobile"] && n.universalLink) return L(n.universalLink, t);
    if (n.deepLink) return b(n.deepLink, t);
    if (n.universalLink) return L(n.universalLink, t);
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"](`Unsupported wallet ${a.id}`);
}
function I(e, r) {
    let t = D(r);
    if (t.universalLink) return L(t.universalLink, e);
}
let S = "WALLETCONNECT_DEEPLINK_CHOICE";
function x() {
    try {
        localStorage.removeItem(S);
    } catch  {}
}
function k({ href: e, name: r }) {
    try {
        localStorage.setItem(S, JSON.stringify({
            href: e,
            name: r
        }));
    } catch  {}
}
function _() {
    try {
        localStorage.removeItem(S);
    } catch  {}
}
function M(e) {
    return e.startsWith("http://") || e.startsWith("https://");
}
function b(e, r) {
    if (M(e)) return L(e, r);
    let t = e;
    return t.includes("://") || (t = e.replaceAll("/", "").replaceAll(":", ""), t = `${t}://`), t.endsWith("/") || (t = `${t}/`), {
        redirect: `${t}wc?uri=${encodeURIComponent(r)}`,
        href: t
    };
}
function L(e, r) {
    if (!M(e)) return b(e, r);
    let t = e;
    return t.endsWith("/") || (t = `${t}/`), {
        redirect: `${t}wc?uri=${encodeURIComponent(r)}`,
        href: t
    };
}
function C(e, r) {
    window.open(e, r, "noreferrer noopener");
}
const P = ({ address: e, nonce: r })=>`${window.location.host} wants you to sign in with your Solana account:\n${e}\n\n${`You are proving you own ${e}.`}\n\nURI: ${window.location.origin}\nVersion: 1\nChain ID: mainnet\nNonce: ${r}\nIssued At: ${(new Date).toISOString()}\nResources:\n- https://privy.io`;
let R = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    plugins: {
        current: {}
    }
});
const N = ({ children: e })=>{
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({}); /*#__PURE__*/ 
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(R.Provider, {
        value: {
            plugins: r
        },
        children: e
    });
}, O = (...e)=>{
    let { plugins: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(R);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        for (let t of e)r.current[t.id] = t;
        return ()=>{
            for (let t of e)delete r.current[t.id];
        };
    }, [
        r
    ]);
}, $ = ()=>{
    let { plugins: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(R);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])((r)=>e.current[r], [
        e
    ]);
}, B = Symbol("solana-funding-plugin"), j = Symbol("solana-ledger-plugin"), K = (e, { chainType: r, walletIndex: t } = {})=>e?.linkedAccounts.filter((e)=>!("wallet" !== e.type || "privy" !== e.walletClientType || void 0 !== t && e.walletIndex !== t || void 0 !== r && e.chainType !== r)) ?? [], z = (e)=>e.reduce((e, r)=>!e || e.walletIndex < r.walletIndex ? r : e, null), F = async ({ user: e, accessToken: r, proxy: t, refreshSessionAndUser: a, privy: n, appConfig: o, recoverEmbeddedWallet: i, setUser: l, walletIndex: s, chainType: d, recoveryMethod: p, recoveryPassword: y, recoveryAccessToken: E })=>{
    if (0 === s) if ("user-controlled-server-wallets-only" === o.embeddedWallets.mode) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$wallet$2d$api$2f$create$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])(n, {
        request: {
            chain_type: d
        }
    });
    else if ("ethereum" === d) {
        let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(e);
        a && await i({
            address: a.address
        }), await t.create({
            accessToken: r,
            solanaAddress: a?.address,
            recoveryMethod: p,
            recoveryPassword: y,
            recoveryAccessToken: E
        });
    } else {
        if ("solana" !== d) throw Error("Invalid input to create wallet");
        {
            let a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])(e);
            a && await i({
                address: a.address
            }), await t.createSolana({
                accessToken: r,
                ethereumAddress: a?.address,
                recoveryMethod: p,
                recoveryPassword: y,
                recoveryAccessToken: E
            });
        }
    }
    else if ("user-controlled-server-wallets-only" === o.embeddedWallets.mode) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$js$2d$sdk$2d$core$2f$dist$2f$esm$2f$wallet$2d$api$2f$create$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])(n, {
        request: {
            chain_type: d
        }
    });
    else {
        let { entropyId: a, entropyIdVerifier: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(e);
        await i(), await t.addWallet({
            accessToken: r,
            entropyId: a,
            entropyIdVerifier: n,
            chainType: d,
            hdWalletIndex: s
        });
    }
    let m = await a(), w = K(m, {
        chainType: d,
        walletIndex: s
    })[0];
    return l(m), {
        user: m,
        account: w
    };
};
let H = async ({ accessToken: e, appConfig: r, privy: a, emitPrivyEvent: n, proxy: o, refreshSessionAndUser: i, recoverEmbeddedWallet: l, user: s, walletIndex: d, setModalData: c, openModal: u, chainType: y, setUser: E })=>{
    if (d < 0) throw n("createWallet", "onError", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].EMBEDDED_WALLET_CREATE_ERROR), Error(`A negative walletIndex (${d}) is invalid.`);
    let m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["g"])(s);
    if (d > 0 && !m) throw n("createWallet", "onError", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].EMBEDDED_WALLET_NOT_FOUND), Error("Must have an existing embedded wallet to create an additional wallet.");
    if (r.embeddedWallets.requireUserOwnedRecoveryOnCreate && "user-controlled-server-wallets-only" === r.embeddedWallets.mode) throw n("createWallet", "onError", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].EMBEDDED_WALLET_CREATE_ERROR), Error("User owned recovery not yet supported for this app.");
    if (!m && r.embeddedWallets.requireUserOwnedRecoveryOnCreate) return await q({
        emitPrivyEvent: n,
        setModalData: c,
        openModal: u,
        chainType: y
    });
    let w = K(s, {
        chainType: y,
        walletIndex: d
    })[0];
    if (w) return {
        user: s,
        account: w
    };
    if (0 === d && !o) return q({
        emitPrivyEvent: n,
        setModalData: c,
        openModal: u,
        chainType: y
    });
    if (!o) throw n("createWallet", "onError", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].UNKNOWN_EMBEDDED_WALLET_ERROR), Error("Failed to connect to wallet proxy");
    return F({
        appConfig: r,
        walletIndex: d,
        chainType: y,
        user: s,
        accessToken: e,
        proxy: o,
        refreshSessionAndUser: i,
        privy: a,
        recoverEmbeddedWallet: l,
        setUser: E
    });
}, q = async ({ emitPrivyEvent: e, setModalData: r, openModal: a, chainType: n })=>new Promise((o, i)=>{
        r({
            createWallet: {
                onSuccess: ({ user: r, account: t })=>{
                    e("createWallet", "onSuccess", {
                        wallet: t
                    }), o({
                        user: r,
                        account: t
                    });
                },
                onFailure: (r)=>{
                    e("createWallet", "onError", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].UNKNOWN_EMBEDDED_WALLET_ERROR), i(r);
                },
                callAuthOnSuccessOnClose: !1,
                shouldCreateEth: "ethereum" === n,
                shouldCreateSol: "solana" === n
            }
        }), a("EmbeddedWalletOnAccountCreateScreen");
    });
const V = ()=>{
    let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$events$2d$context$2d$CI0iqAXA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(), { setModalData: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(), { initializeWalletProxy: o, recoverEmbeddedWallet: i, setUser: l, openModal: s, refreshSessionAndUser: d, privy: c, client: u } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])();
    return {
        create: async ({ chainType: a, options: p, latestUser: y })=>{
            let E = y;
            if (E || (E = await d()), !E) throw r("createWallet", "onError", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].MUST_BE_AUTHENTICATED), Error("User must be authenticated before creating a Privy wallet");
            return await (async ({ appConfig: e, getAccessToken: r, initializeWalletProxy: a, user: n, privy: o, emitPrivyEvent: i, recoverEmbeddedWallet: l, setModalData: s, openModal: d, setUser: c, options: u, timeoutDuration: p, refreshSessionAndUser: y, chainType: E })=>{
                let [m, w] = await Promise.all([
                    a(p),
                    r()
                ]);
                if (!w || !n) throw i("createWallet", "onError", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].MUST_BE_AUTHENTICATED), Error("User must be authenticated before creating a Privy wallet");
                if (!m && e.customAuth?.enabled) throw i("createWallet", "onError", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].UNKNOWN_EMBEDDED_WALLET_ERROR), Error("Failed to connect to wallet proxy");
                if (u && "walletIndex" in u && "number" == typeof u.walletIndex) {
                    if ("user-controlled-server-wallets-only" === e.embeddedWallets.mode) throw i("createWallet", "onError", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].INVALID_DATA), Error("Invalid input, use `createAdditional` instead of `walletIndex` to create additional wallets.");
                    return H({
                        accessToken: w,
                        appConfig: e,
                        privy: o,
                        emitPrivyEvent: i,
                        openModal: d,
                        proxy: m,
                        refreshSessionAndUser: y,
                        recoverEmbeddedWallet: l,
                        setModalData: s,
                        user: n,
                        walletIndex: u.walletIndex,
                        chainType: E,
                        setUser: c
                    });
                }
                let f = u && "createAdditional" in u && u.createAdditional, h = K(n, {
                    chainType: E
                });
                if (h[0] && !f) throw i("createWallet", "onError", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].EMBEDDED_WALLET_ALREADY_EXISTS), Error("User already has an embedded wallet.");
                return H({
                    accessToken: w,
                    appConfig: e,
                    privy: o,
                    emitPrivyEvent: i,
                    openModal: d,
                    proxy: m,
                    recoverEmbeddedWallet: l,
                    setModalData: s,
                    user: n,
                    walletIndex: (z(h)?.walletIndex ?? -1) + 1,
                    chainType: E,
                    refreshSessionAndUser: y,
                    setUser: c
                });
            })({
                appConfig: e,
                privy: c,
                getAccessToken: ()=>u.getAccessToken(),
                refreshSessionAndUser: d,
                initializeWalletProxy: o,
                user: E,
                emitPrivyEvent: r,
                recoverEmbeddedWallet: i,
                setModalData: n,
                openModal: s,
                setUser: l,
                options: p,
                timeoutDuration: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["W"],
                chainType: a
            });
        }
    };
};
function Y(e) {
    let { create: r } = V();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$events$2d$context$2d$CI0iqAXA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])("createWallet", e), {
        createWallet: async (e)=>{
            e && "target" in e && e && (e = void 0);
            let { account: t } = await r({
                chainType: "ethereum",
                options: e
            });
            return t;
        }
    };
}
const J = async ({ emitPrivyEvent: e, getAccessToken: a, initializeWalletProxy: n, refreshSessionAndUser: o, user: i, appConfig: l }, { privateKey: s, chainType: d, additionalSigners: c })=>{
    if (!i) throw e("linkAccount", "onError", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].MUST_BE_AUTHENTICATED, {
        linkMethod: "siwe"
    }), new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("User must be authenticated before linking an account.");
    let u = "user-controlled-server-wallets-only" === l.embeddedWallets.mode ? "tee" : "on-device";
    if (c && "on-device" === u) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("Specifying additionalSigners is only supported for TEE execution and this app uses On-device execution. Learn more https://docs.privy.io/recipes/tee-wallet-migration-guide");
    let [p, y] = await Promise.all([
        a(),
        n(15e3)
    ]);
    if (!y || !p) throw e("linkAccount", "onError", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].MUST_BE_AUTHENTICATED, {
        linkMethod: "siwe"
    }), new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"]("User must be authenticated before linking an account.");
    let { address: w } = await y.importWallet({
        privateKey: s,
        accessToken: p,
        chainType: d,
        mode: u,
        additionalSigners: c
    }), f = await o(), h = "solana" === d ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["j"])(f) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"])(f), v = h?.find((e)=>e.address === w);
    if (!v) throw e("createWallet", "onError", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"].UNKNOWN_EMBEDDED_WALLET_ERROR), Error("Failed to import wallet");
    return e("createWallet", "onSuccess", {
        wallet: v
    }), v;
}, X = ()=>{
    let { user: e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(), { client: r, refreshSessionAndUser: t, initializeWalletProxy: n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$internal$2d$context$2d$e$2d$Eni5bG$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])(), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$events$2d$context$2d$CI0iqAXA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$context$2d$DRLoVlsO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])();
    return {
        importWallet: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(({ privateKey: a, additionalSigners: l })=>J({
                getAccessToken: ()=>r.getAccessToken(),
                user: e,
                initializeWalletProxy: n,
                refreshSessionAndUser: t,
                emitPrivyEvent: o,
                appConfig: i
            }, {
                privateKey: a,
                chainType: "ethereum",
                additionalSigners: l
            }), [
            e,
            r,
            t,
            n,
            o,
            i
        ])
    };
}, G = ()=>{
    let { importWallet: e } = X(), { createWallet: r } = Y();
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$get$2d$is$2d$unified$2d$wallet$2d$gMDXpX6C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P"]),
        importWallet: e,
        createWallet: r
    };
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/usePrivy-BWtc2XF-.mjs [app-client] (ecmascript) <export u as usePrivy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePrivy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$usePrivy$2d$BWtc2XF$2d2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/usePrivy-BWtc2XF-.mjs [app-client] (ecmascript)");
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useWallets-kObl6ZLS.mjs [app-client] (ecmascript) <export u as useWallets>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWallets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$dist$2f$esm$2f$useWallets$2d$kObl6ZLS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/dist/esm/useWallets-kObl6ZLS.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=cb648_%40privy-io_react-auth_dist_esm_f6d6a013._.js.map