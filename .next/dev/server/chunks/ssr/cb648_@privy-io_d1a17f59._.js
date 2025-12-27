module.exports = [
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/smart-wallets.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GetSmartWalletConfig",
    ()=>p,
    "PostSmartWalletConfig",
    ()=>a
]);
const p = {
    path: "/api/v1/apps/:app_id/smart_wallets",
    method: "GET"
}, a = {
    path: "/api/v1/apps/:app_id/smart_wallets",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/cross-app.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GetCrossAppConnections",
    ()=>p
]);
const p = {
    path: "/api/v1/apps/:app_id/cross-app/connections",
    method: "GET"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/wallet-api.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WalletCreate",
    ()=>t,
    "WalletExport",
    ()=>w,
    "WalletGet",
    ()=>l,
    "WalletGetBalance",
    ()=>e,
    "WalletGetTransactions",
    ()=>o,
    "WalletRawSign",
    ()=>h,
    "WalletRpc",
    ()=>p,
    "WalletUpdate",
    ()=>i,
    "WalletsGet",
    ()=>a,
    "WalletsRevoke",
    ()=>d
]);
const a = {
    path: "/api/v1/wallets",
    method: "GET"
}, t = {
    path: "/api/v1/wallets",
    method: "POST"
}, l = {
    path: "/api/v1/wallets/:wallet_id",
    method: "GET"
}, e = {
    path: "/api/v1/wallets/:wallet_id/balance",
    method: "GET"
}, p = {
    path: "/api/v1/wallets/:wallet_id/rpc",
    method: "POST"
}, h = {
    path: "/api/v1/wallets/:wallet_id/raw_sign",
    method: "POST"
}, i = {
    path: "/api/v1/wallets/:wallet_id",
    method: "PATCH"
}, w = {
    path: "/api/v1/wallets/:wallet_id/export",
    method: "POST"
}, d = {
    path: "/api/v1/wallets/revoke",
    method: "POST"
}, o = {
    path: "/api/v1/wallets/:wallet_id/transactions",
    method: "GET"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/types.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPathWithParams",
    ()=>e
]);
const e = (e, c)=>c ? Object.entries(c).reduce((e, [c, r])=>e.replace(`:${c}`, `${r}`), e) : e;
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/apps.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppConfig",
    ()=>p
]);
const p = {
    path: "/api/v1/apps/:app_id",
    method: "GET"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/analytics-events.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnalyticsEvent",
    ()=>t
]);
const t = {
    path: "/api/v1/analytics_events",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/sessions.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logout",
    ()=>o,
    "RefreshSession",
    ()=>s
]);
const s = {
    path: "/api/v1/sessions",
    method: "POST"
}, o = {
    path: "/api/v1/sessions/logout",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/terms.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AcceptTermsOnUser",
    ()=>e
]);
const e = {
    path: "/api/v1/users/me/accept_terms",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/custom-jwt-account.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CustomJWTAuthenticate",
    ()=>t,
    "CustomJWTLink",
    ()=>a
]);
const t = {
    path: "/api/v1/custom_jwt_account/authenticate",
    method: "POST"
}, a = {
    path: "/api/v1/custom_jwt_account/link",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/passwordless.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PasswordlessAuthenticate",
    ()=>s,
    "PasswordlessInit",
    ()=>a,
    "PasswordlessLink",
    ()=>p,
    "PasswordlessUnlink",
    ()=>t,
    "PasswordlessUpdate",
    ()=>e
]);
const s = {
    path: "/api/v1/passwordless/authenticate",
    method: "POST"
}, a = {
    path: "/api/v1/passwordless/init",
    method: "POST"
}, p = {
    path: "/api/v1/passwordless/link",
    method: "POST"
}, t = {
    path: "/api/v1/passwordless/unlink",
    method: "POST"
}, e = {
    path: "/api/v1/passwordless/update",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/farcaster.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FarcasterAuthenticate",
    ()=>t,
    "FarcasterInit",
    ()=>a,
    "FarcasterLink",
    ()=>e,
    "FarcasterStatus",
    ()=>i,
    "FarcasterUnlink",
    ()=>h,
    "FarcasterV2Authenticate",
    ()=>r,
    "FarcasterV2Init",
    ()=>p
]);
const a = {
    path: "/api/v1/farcaster/init",
    method: "POST"
}, t = {
    path: "/api/v1/farcaster/authenticate",
    method: "POST"
}, e = {
    path: "/api/v1/farcaster/link",
    method: "POST"
}, h = {
    path: "/api/v1/farcaster/unlink",
    method: "POST"
}, i = {
    path: "/api/v1/farcaster/status",
    method: "GET"
}, p = {
    path: "/api/v2/farcaster/init",
    method: "POST"
}, r = {
    path: "/api/v2/farcaster/authenticate",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/guest.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GuestAuthenticate",
    ()=>t
]);
const t = {
    path: "/api/v1/guest/authenticate",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/oauth.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OAuthAuthenticate",
    ()=>t,
    "OAuthInit",
    ()=>a,
    "OAuthLink",
    ()=>h,
    "OAuthUnlink",
    ()=>o
]);
const t = {
    path: "/api/v1/oauth/authenticate",
    method: "POST"
}, a = {
    path: "/api/v1/oauth/init",
    method: "POST"
}, h = {
    path: "/api/v1/oauth/link",
    method: "POST"
}, o = {
    path: "/api/v1/oauth/unlink",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/passkey.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PasskeyAuthenticate",
    ()=>a,
    "PasskeyAuthenticateInit",
    ()=>e,
    "PasskeyLink",
    ()=>t,
    "PasskeyLinkInit",
    ()=>i,
    "PasskeyRegister",
    ()=>s,
    "PasskeyRegisterInit",
    ()=>p,
    "PasskeyUnlink",
    ()=>h
]);
const t = {
    path: "/api/v1/passkeys/link",
    method: "POST"
}, a = {
    path: "/api/v1/passkeys/authenticate",
    method: "POST"
}, s = {
    path: "/api/v1/passkeys/register",
    method: "POST"
}, e = {
    path: "/api/v1/passkeys/authenticate/init",
    method: "POST"
}, p = {
    path: "/api/v1/passkeys/register/init",
    method: "POST"
}, i = {
    path: "/api/v1/passkeys/link/init",
    method: "POST"
}, h = {
    path: "/api/v1/passkeys/unlink",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/passwordless-sms.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PasswordlessSmsAuthenticate",
    ()=>s,
    "PasswordlessSmsInit",
    ()=>a,
    "PasswordlessSmsLink",
    ()=>p,
    "PasswordlessSmsUnlink",
    ()=>t,
    "PasswordlessSmsUpdate",
    ()=>e
]);
const s = {
    path: "/api/v1/passwordless_sms/authenticate",
    method: "POST"
}, a = {
    path: "/api/v1/passwordless_sms/init",
    method: "POST"
}, p = {
    path: "/api/v1/passwordless_sms/link",
    method: "POST"
}, t = {
    path: "/api/v1/passwordless_sms/unlink",
    method: "POST"
}, e = {
    path: "/api/v1/passwordless_sms/update",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/siwe.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiweAuthenticate",
    ()=>i,
    "SiweInit",
    ()=>t,
    "SiweLink",
    ()=>a,
    "SiweLinkSmartWallet",
    ()=>e,
    "SiweUnlink",
    ()=>h
]);
const t = {
    path: "/api/v1/siwe/init",
    method: "POST"
}, i = {
    path: "/api/v1/siwe/authenticate",
    method: "POST"
}, a = {
    path: "/api/v1/siwe/link",
    method: "POST"
}, e = {
    path: "/api/v1/siwe/link_smart_wallet",
    method: "POST"
}, h = {
    path: "/api/v1/siwe/unlink",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/siws.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiwsAuthenticate",
    ()=>i,
    "SiwsInit",
    ()=>t,
    "SiwsLink",
    ()=>a,
    "SiwsUnlink",
    ()=>h
]);
const t = {
    path: "/api/v1/siws/init",
    method: "POST"
}, i = {
    path: "/api/v1/siws/authenticate",
    method: "POST"
}, a = {
    path: "/api/v1/siws/link",
    method: "POST"
}, h = {
    path: "/api/v1/siws/unlink",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/coinbase.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoinbaseOnRampInit",
    ()=>n,
    "CoinbaseOnRampStatus",
    ()=>a
]);
const n = {
    path: "/api/v1/funding/coinbase_on_ramp/init",
    method: "POST"
}, a = {
    path: "/api/v1/funding/coinbase_on_ramp/status",
    method: "GET"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/moonpay.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoonpayOnRampSign",
    ()=>o
]);
const o = {
    path: "/api/v1/plugins/moonpay_on_ramp/sign",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/mfa-passkey.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MfaPasskeyEnrollment",
    ()=>p,
    "MfaPasskeyInit",
    ()=>a,
    "MfaPasskeyVerify",
    ()=>e
]);
const a = {
    path: "/api/v1/mfa/passkeys/init",
    method: "POST"
}, e = {
    path: "/api/v1/mfa/passkeys/verify",
    method: "POST"
}, p = {
    path: "/api/v1/mfa/passkeys/enrollment",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/mfa-passwordless-sms.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MfaPasswordlessSmsEnroll",
    ()=>s,
    "MfaPasswordlessSmsInit",
    ()=>p,
    "MfaPasswordlessSmsUnenroll",
    ()=>e,
    "MfaPasswordlessSmsVerify",
    ()=>a
]);
const s = {
    path: "/api/v1/mfa/passwordless_sms/enroll",
    method: "POST"
}, a = {
    path: "/api/v1/mfa/passwordless_sms/verify",
    method: "POST"
}, p = {
    path: "/api/v1/mfa/passwordless_sms/init",
    method: "POST"
}, e = {
    path: "/api/v1/mfa/passwordless_sms/unenroll",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/recovery.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecoveryConfigurationICloud",
    ()=>h,
    "RecoveryKeyMaterial",
    ()=>e,
    "RecoveryOAuthAuthenticate",
    ()=>t,
    "RecoveryOAuthCallbackICloudExpo",
    ()=>i,
    "RecoveryOAuthInit",
    ()=>a,
    "RecoveryOAuthInitICloud",
    ()=>o
]);
const e = {
    path: "/api/v1/embedded_wallets/:address/recovery/key_material",
    method: "POST"
}, a = {
    path: "/api/v1/recovery/oauth/init",
    method: "POST"
}, t = {
    path: "/api/v1/recovery/oauth/authenticate",
    method: "POST"
}, o = {
    path: "/api/v1/recovery/oauth/init_icloud",
    method: "POST"
}, i = {
    path: "/api/v1/recovery/oauth/callback_icloud/:app_id/expo_ios",
    method: "GET"
}, h = {
    path: "/api/v1/recovery/configuration_icloud",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/mfa-auth-passkey.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MfaAuthPasskeyEnrollment",
    ()=>e,
    "MfaAuthPasskeyInit",
    ()=>a,
    "MfaAuthPasskeyVerify",
    ()=>t
]);
const a = {
    path: "/api/v1/mfa_auth/passkeys/init",
    method: "POST"
}, t = {
    path: "/api/v1/mfa_auth/passkeys/verify",
    method: "POST"
}, e = {
    path: "/api/v1/mfa_auth/passkeys/enrollment",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/routes/dist/esm/mfa-auth-totp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MfaAuthTotpEnroll",
    ()=>t,
    "MfaAuthTotpInit",
    ()=>p,
    "MfaAuthTotpUnenroll",
    ()=>h,
    "MfaAuthTotpVerify",
    ()=>a
]);
const t = {
    path: "/api/v1/mfa_auth/totp/enroll",
    method: "POST"
}, a = {
    path: "/api/v1/mfa_auth/totp/verify",
    method: "POST"
}, p = {
    path: "/api/v1/mfa_auth/totp/init",
    method: "POST"
}, h = {
    path: "/api/v1/mfa_auth/totp/unenroll",
    method: "POST"
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/arbitrum.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arbitrum",
    ()=>t
]);
const t = {
    id: 42161,
    name: "Arbitrum One",
    network: "arbitrum",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        privy: {
            http: [
                "https://arbitrum-mainnet.rpc.privy.systems"
            ]
        },
        alchemy: {
            http: [
                "https://arb-mainnet.g.alchemy.com/v2"
            ],
            webSocket: [
                "wss://arb-mainnet.g.alchemy.com/v2"
            ]
        },
        infura: {
            http: [
                "https://arbitrum-mainnet.infura.io/v3"
            ],
            webSocket: [
                "wss://arbitrum-mainnet.infura.io/ws/v3"
            ]
        },
        default: {
            http: [
                "https://arb1.arbitrum.io/rpc"
            ]
        },
        public: {
            http: [
                "https://arb1.arbitrum.io/rpc"
            ]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "Arbiscan",
            url: "https://arbiscan.io"
        },
        default: {
            name: "Arbiscan",
            url: "https://arbiscan.io"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/arbitrumSepolia.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arbitrumSepolia",
    ()=>r
]);
const r = {
    id: 421614,
    name: "Arbitrum Sepolia",
    network: "arbitrum-sepolia",
    nativeCurrency: {
        name: "Arbitrum Sepolia Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        privy: {
            http: [
                "https://arbitrum-sepolia.rpc.privy.systems"
            ]
        },
        default: {
            http: [
                "https://sepolia-rollup.arbitrum.io/rpc"
            ]
        },
        public: {
            http: [
                "https://sepolia-rollup.arbitrum.io/rpc"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Blockscout",
            url: "https://sepolia-explorer.arbitrum.io"
        }
    },
    testnet: !0
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/avalanche.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "avalanche",
    ()=>a
]);
const a = {
    id: 43114,
    name: "Avalanche",
    network: "avalanche",
    nativeCurrency: {
        decimals: 18,
        name: "Avalanche",
        symbol: "AVAX"
    },
    rpcUrls: {
        default: {
            http: [
                "https://api.avax.network/ext/bc/C/rpc"
            ]
        },
        public: {
            http: [
                "https://api.avax.network/ext/bc/C/rpc"
            ]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "SnowTrace",
            url: "https://snowtrace.io"
        },
        default: {
            name: "SnowTrace",
            url: "https://snowtrace.io"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/avalancheFuji.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "avalancheFuji",
    ()=>t
]);
const t = {
    id: 43113,
    name: "Avalanche Fuji",
    network: "avalanche-fuji",
    nativeCurrency: {
        decimals: 18,
        name: "Avalanche Fuji",
        symbol: "AVAX"
    },
    rpcUrls: {
        default: {
            http: [
                "https://api.avax-test.network/ext/bc/C/rpc"
            ]
        },
        public: {
            http: [
                "https://api.avax-test.network/ext/bc/C/rpc"
            ]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "SnowTrace",
            url: "https://testnet.snowtrace.io"
        },
        default: {
            name: "SnowTrace",
            url: "https://testnet.snowtrace.io"
        }
    },
    testnet: !0
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/base.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "base",
    ()=>e
]);
const e = {
    id: 8453,
    network: "base",
    name: "Base",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        privy: {
            http: [
                "https://base-mainnet.rpc.privy.systems"
            ]
        },
        default: {
            http: [
                "https://mainnet.base.org"
            ]
        },
        public: {
            http: [
                "https://mainnet.base.org"
            ]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "Basescan",
            url: "https://basescan.org"
        },
        default: {
            name: "Basescan",
            url: "https://basescan.org"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/baseSepolia.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baseSepolia",
    ()=>e
]);
const e = {
    id: 84532,
    network: "base-sepolia",
    name: "Base Sepolia",
    nativeCurrency: {
        name: "Sepolia Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        privy: {
            http: [
                "https://base-sepolia.rpc.privy.systems"
            ]
        },
        default: {
            http: [
                "https://sepolia.base.org"
            ]
        },
        public: {
            http: [
                "https://sepolia.base.org"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Blockscout",
            url: "https://base-sepolia.blockscout.com"
        }
    },
    testnet: !0
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/berachainArtio.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "berachainArtio",
    ()=>t
]);
const t = {
    id: 80085,
    network: "berachain-artio",
    name: "Berachain Artio",
    nativeCurrency: {
        name: "BERA",
        symbol: "BERA",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                "https://berachain-artio.rpc.privy.systems"
            ]
        },
        public: {
            http: [
                "https://berachain-artio.rpc.privy.systems"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Beratrail",
            url: "https://artio.beratrail.io"
        }
    },
    testnet: !0
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/bsc.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bsc",
    ()=>t
]);
const t = {
    id: 56,
    network: "bsc",
    name: "Binance Smart Chain",
    nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18
    },
    rpcUrls: {
        privy: {
            http: [
                "https://bsc-mainnet.rpc.privy.systems"
            ]
        },
        default: {
            http: [
                "https://56.rpc.thirdweb.com"
            ]
        },
        public: {
            http: [
                "https://56.rpc.thirdweb.com"
            ]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "BscScan",
            url: "https://bscscan.com"
        },
        default: {
            name: "BscScan",
            url: "https://bscscan.com"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/celo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "celo",
    ()=>e
]);
const e = {
    id: 42220,
    name: "Celo Mainnet",
    network: "celo",
    nativeCurrency: {
        decimals: 18,
        name: "CELO",
        symbol: "CELO"
    },
    rpcUrls: {
        default: {
            http: [
                "https://forno.celo.org"
            ]
        },
        infura: {
            http: [
                "https://celo-mainnet.infura.io/v3"
            ]
        },
        public: {
            http: [
                "https://forno.celo.org"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Celo Explorer",
            url: "https://explorer.celo.org/mainnet"
        },
        etherscan: {
            name: "CeloScan",
            url: "https://celoscan.io"
        }
    },
    testnet: !1
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/celoAlfajores.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "celoAlfajores",
    ()=>e
]);
const e = {
    id: 44787,
    name: "Celo Alfajores Testnet",
    network: "celo-alfajores",
    nativeCurrency: {
        decimals: 18,
        name: "CELO",
        symbol: "CELO"
    },
    rpcUrls: {
        default: {
            http: [
                "https://alfajores-forno.celo-testnet.org"
            ]
        },
        infura: {
            http: [
                "https://celo-alfajores.infura.io/v3"
            ]
        },
        public: {
            http: [
                "https://alfajores-forno.celo-testnet.org"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Celo Explorer",
            url: "https://explorer.celo.org/alfajores"
        },
        etherscan: {
            name: "CeloScan",
            url: "https://alfajores.celoscan.io/"
        }
    },
    testnet: !0
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/filecoin.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filecoin",
    ()=>i
]);
const i = {
    id: 314,
    name: "Filecoin - Mainnet",
    network: "filecoin-mainnet",
    nativeCurrency: {
        decimals: 18,
        name: "filecoin",
        symbol: "FIL"
    },
    rpcUrls: {
        default: {
            http: [
                "https://api.node.glif.io/rpc/v1"
            ]
        },
        public: {
            http: [
                "https://api.node.glif.io/rpc/v1"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Filfox",
            url: "https://filfox.info/en"
        },
        filscan: {
            name: "Filscan",
            url: "https://filscan.io"
        },
        filscout: {
            name: "Filscout",
            url: "https://filscout.io/en"
        },
        glif: {
            name: "Glif",
            url: "https://explorer.glif.io"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/filecoinCalibration.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filecoinCalibration",
    ()=>i
]);
const i = {
    id: 314159,
    name: "Filecoin - Calibration testnet",
    network: "filecoin-calibration",
    nativeCurrency: {
        decimals: 18,
        name: "testnet filecoin",
        symbol: "tFIL"
    },
    rpcUrls: {
        default: {
            http: [
                "https://api.calibration.node.glif.io/rpc/v1"
            ]
        },
        public: {
            http: [
                "https://api.calibration.node.glif.io/rpc/v1"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Filscan",
            url: "https://calibration.filscan.io"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/garnetHolesky.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "garnetHolesky",
    ()=>t
]);
const t = {
    id: 17069,
    name: "Garnet Holesky",
    network: "garnet-holesky",
    nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                "https://rpc.garnetchain.com"
            ]
        },
        public: {
            http: [
                "https://rpc.garnetchain.com"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Blockscout",
            url: "https://explorer.garnetchain.com"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/holesky.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "holesky",
    ()=>e
]);
const e = {
    id: 17e3,
    name: "Holesky",
    network: "holesky",
    nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                "https://ethereum-holesky.publicnode.com"
            ]
        },
        public: {
            http: [
                "https://ethereum-holesky.publicnode.com"
            ]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "EtherScan",
            url: "https://holesky.etherscan.io"
        },
        default: {
            name: "EtherScan",
            url: "https://holesky.etherscan.io"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/linea.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "linea",
    ()=>e
]);
const e = {
    id: 59144,
    network: "linea-mainnet",
    name: "Linea Mainnet",
    nativeCurrency: {
        name: "Linea Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                "https://rpc.linea.build"
            ],
            webSocket: [
                "wss://rpc.linea.build"
            ]
        },
        public: {
            http: [
                "https://rpc.linea.build"
            ],
            webSocket: [
                "wss://rpc.linea.build"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Etherscan",
            url: "https://lineascan.build"
        },
        etherscan: {
            name: "Etherscan",
            url: "https://lineascan.build"
        }
    },
    testnet: !1
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/lineaTestnet.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lineaTestnet",
    ()=>e
]);
const e = {
    id: 59140,
    network: "linea-testnet",
    name: "Linea Goerli Testnet",
    nativeCurrency: {
        name: "Linea Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        infura: {
            http: [
                "https://linea-goerli.infura.io/v3"
            ],
            webSocket: [
                "wss://linea-goerli.infura.io/ws/v3"
            ]
        },
        default: {
            http: [
                "https://rpc.goerli.linea.build"
            ],
            webSocket: [
                "wss://rpc.goerli.linea.build"
            ]
        },
        public: {
            http: [
                "https://rpc.goerli.linea.build"
            ],
            webSocket: [
                "wss://rpc.goerli.linea.build"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Etherscan",
            url: "https://goerli.lineascan.build"
        },
        etherscan: {
            name: "Etherscan",
            url: "https://goerli.lineascan.build"
        }
    },
    testnet: !0
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/lukso.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lukso",
    ()=>e
]);
const e = {
    id: 42,
    network: "lukso",
    name: "LUKSO",
    nativeCurrency: {
        name: "LUKSO",
        symbol: "LYX",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                "https://rpc.mainnet.lukso.network"
            ],
            webSocket: [
                "wss://ws-rpc.mainnet.lukso.network"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "LUKSO Mainnet Explorer",
            url: "https://explorer.execution.mainnet.lukso.network"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/mainnet.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mainnet",
    ()=>t
]);
const t = {
    id: 1,
    network: "homestead",
    name: "Ethereum",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        privy: {
            http: [
                "https://mainnet.rpc.privy.systems"
            ]
        },
        alchemy: {
            http: [
                "https://eth-mainnet.g.alchemy.com/v2"
            ],
            webSocket: [
                "wss://eth-mainnet.g.alchemy.com/v2"
            ]
        },
        infura: {
            http: [
                "https://mainnet.infura.io/v3"
            ],
            webSocket: [
                "wss://mainnet.infura.io/ws/v3"
            ]
        },
        default: {
            http: [
                "https://cloudflare-eth.com"
            ]
        },
        public: {
            http: [
                "https://cloudflare-eth.com"
            ]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "Etherscan",
            url: "https://etherscan.io"
        },
        default: {
            name: "Etherscan",
            url: "https://etherscan.io"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/optimism.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "optimism",
    ()=>t
]);
const t = {
    id: 10,
    name: "OP Mainnet",
    network: "optimism",
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        privy: {
            http: [
                "https://optimism-mainnet.rpc.privy.systems"
            ]
        },
        alchemy: {
            http: [
                "https://opt-mainnet.g.alchemy.com/v2"
            ],
            webSocket: [
                "wss://opt-mainnet.g.alchemy.com/v2"
            ]
        },
        infura: {
            http: [
                "https://optimism-mainnet.infura.io/v3"
            ],
            webSocket: [
                "wss://optimism-mainnet.infura.io/ws/v3"
            ]
        },
        default: {
            http: [
                "https://mainnet.optimism.io"
            ]
        },
        public: {
            http: [
                "https://mainnet.optimism.io"
            ]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "Etherscan",
            url: "https://optimistic.etherscan.io"
        },
        default: {
            name: "Optimism Explorer",
            url: "https://explorer.optimism.io"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/optimismSepolia.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "optimismSepolia",
    ()=>t
]);
const t = {
    id: 11155420,
    name: "Optimism Sepolia",
    network: "optimism-sepolia",
    nativeCurrency: {
        name: "Sepolia Ether",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        privy: {
            http: [
                "https://optimism-sepolia.rpc.privy.systems"
            ]
        },
        default: {
            http: [
                "https://sepolia.optimism.io"
            ]
        },
        public: {
            http: [
                "https://sepolia.optimism.io"
            ]
        },
        infura: {
            http: [
                "https://optimism-sepolia.infura.io/v3"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Blockscout",
            url: "https://optimism-sepolia.blockscout.com"
        }
    },
    testnet: !0
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/polygon.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "polygon",
    ()=>o
]);
const o = {
    id: 137,
    name: "Polygon Mainnet",
    network: "polygon",
    nativeCurrency: {
        name: "POL",
        symbol: "POL",
        decimals: 18
    },
    rpcUrls: {
        privy: {
            http: [
                "https://polygon-mainnet.rpc.privy.systems"
            ]
        },
        alchemy: {
            http: [
                "https://polygon-mainnet.g.alchemy.com/v2"
            ],
            webSocket: [
                "wss://polygon-mainnet.g.alchemy.com/v2"
            ]
        },
        infura: {
            http: [
                "https://polygon-mainnet.infura.io/v3"
            ],
            webSocket: [
                "wss://polygon-mainnet.infura.io/ws/v3"
            ]
        },
        default: {
            http: [
                "https://polygon-rpc.com"
            ]
        },
        public: {
            http: [
                "https://polygon-rpc.com"
            ]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "PolygonScan",
            url: "https://polygonscan.com"
        },
        default: {
            name: "PolygonScan",
            url: "https://polygonscan.com"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/polygonAmoy.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "polygonAmoy",
    ()=>o
]);
const o = {
    id: 80002,
    name: "Polygon Amoy",
    network: "polygon-amoy",
    nativeCurrency: {
        name: "POL",
        symbol: "POL",
        decimals: 18
    },
    rpcUrls: {
        privy: {
            http: [
                "https://polygon-amoy.rpc.privy.systems"
            ]
        },
        infura: {
            http: [
                "https://polygon-amoy.infura.io/v3"
            ],
            webSocket: [
                "wss://polygon-amoy.infura.io/ws/v3"
            ]
        },
        default: {
            http: [
                "https://rpc-amoy.polygon.technology"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "OK LINK",
            url: "https://www.oklink.com/amoy"
        }
    },
    testnet: !0
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/redstone.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "redstone",
    ()=>e
]);
const e = {
    id: 690,
    name: "Redstone",
    network: "redstone",
    nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                "https://rpc.redstonechain.com"
            ]
        },
        public: {
            http: [
                "https://rpc.redstonechain.com"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Blockscout",
            url: "https://explorer.redstone.xyz/"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/sepolia.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sepolia",
    ()=>e
]);
const e = {
    id: 11155111,
    network: "sepolia",
    name: "Sepolia",
    nativeCurrency: {
        name: "Sepolia Ether",
        symbol: "SEP",
        decimals: 18
    },
    rpcUrls: {
        privy: {
            http: [
                "https://sepolia.rpc.privy.systems"
            ]
        },
        alchemy: {
            http: [
                "https://eth-sepolia.g.alchemy.com/v2"
            ],
            webSocket: [
                "wss://eth-sepolia.g.alchemy.com/v2"
            ]
        },
        infura: {
            http: [
                "https://sepolia.infura.io/v3"
            ],
            webSocket: [
                "wss://sepolia.infura.io/ws/v3"
            ]
        },
        default: {
            http: [
                "https://rpc.sepolia.org"
            ]
        },
        public: {
            http: [
                "https://rpc.sepolia.org"
            ]
        }
    },
    blockExplorers: {
        etherscan: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io"
        },
        default: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io"
        }
    },
    testnet: !0
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/zora.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zora",
    ()=>r
]);
const r = {
    id: 7777777,
    name: "Zora",
    network: "zora",
    nativeCurrency: {
        decimals: 18,
        name: "Ether",
        symbol: "ETH"
    },
    rpcUrls: {
        default: {
            http: [
                "https://rpc.zora.energy"
            ],
            webSocket: [
                "wss://rpc.zora.energy"
            ]
        },
        public: {
            http: [
                "https://rpc.zora.energy"
            ],
            webSocket: [
                "wss://rpc.zora.energy"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Explorer",
            url: "https://explorer.zora.energy"
        }
    }
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/zoraSepolia.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zoraSepolia",
    ()=>e
]);
const e = {
    id: 999999999,
    name: "Zora Sepolia",
    network: "zora-sepolia",
    nativeCurrency: {
        decimals: 18,
        name: "Zora Sepolia",
        symbol: "ETH"
    },
    rpcUrls: {
        default: {
            http: [
                "https://sepolia.rpc.zora.energy"
            ],
            webSocket: [
                "wss://sepolia.rpc.zora.energy"
            ]
        },
        public: {
            http: [
                "https://sepolia.rpc.zora.energy"
            ],
            webSocket: [
                "wss://sepolia.rpc.zora.energy"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Zora Sepolia Explorer",
            url: "https://sepolia.explorer.zora.energy/"
        }
    },
    testnet: !0
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/zoraTestnet.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zoraTestnet",
    ()=>e
]);
const e = {
    id: 999,
    name: "Zora Goerli Testnet",
    network: "zora-testnet",
    nativeCurrency: {
        decimals: 18,
        name: "Zora Goerli",
        symbol: "ETH"
    },
    rpcUrls: {
        default: {
            http: [
                "https://testnet.rpc.zora.energy"
            ],
            webSocket: [
                "wss://testnet.rpc.zora.energy"
            ]
        },
        public: {
            http: [
                "https://testnet.rpc.zora.energy"
            ],
            webSocket: [
                "wss://testnet.rpc.zora.energy"
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Explorer",
            url: "https://testnet.explorer.zora.energy"
        }
    },
    testnet: !0
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/default-supported-chains.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SUPPORTED_CHAINS",
    ()=>x,
    "DEFAULT_SUPPORTED_CHAIN_IDS",
    ()=>C
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$arbitrum$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/arbitrum.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$arbitrumSepolia$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/arbitrumSepolia.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$avalanche$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/avalanche.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$avalancheFuji$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/avalancheFuji.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$base$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/base.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$baseSepolia$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/baseSepolia.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$berachainArtio$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/berachainArtio.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$bsc$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/bsc.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$celo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/celo.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$celoAlfajores$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/celoAlfajores.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$filecoin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/filecoin.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$filecoinCalibration$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/filecoinCalibration.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$garnetHolesky$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/garnetHolesky.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$holesky$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/holesky.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$linea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/linea.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$lineaTestnet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/lineaTestnet.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$lukso$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/lukso.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$mainnet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/mainnet.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$optimism$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/optimism.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$optimismSepolia$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/optimismSepolia.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$polygon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/polygon.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$polygonAmoy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/polygonAmoy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$redstone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/redstone.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$sepolia$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/sepolia.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$zora$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/zora.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$zoraSepolia$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/zoraSepolia.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$zoraTestnet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/definitions/zoraTestnet.mjs [app-ssr] (ecmascript)");
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
const x = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$mainnet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mainnet"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$sepolia$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sepolia"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$holesky$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["holesky"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$arbitrum$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arbitrum"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$arbitrumSepolia$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arbitrumSepolia"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$optimism$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optimism"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$optimismSepolia$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optimismSepolia"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$polygon$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polygon"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$polygonAmoy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polygonAmoy"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$celo$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["celo"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$celoAlfajores$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["celoAlfajores"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$filecoin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filecoin"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$filecoinCalibration$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filecoinCalibration"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$base$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["base"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$baseSepolia$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSepolia"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$berachainArtio$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["berachainArtio"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$bsc$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["bsc"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$lukso$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lukso"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$linea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["linea"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$lineaTestnet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lineaTestnet"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$avalanche$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["avalanche"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$avalancheFuji$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["avalancheFuji"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$zora$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zora"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$zoraTestnet$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zoraTestnet"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$zoraSepolia$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zoraSepolia"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$redstone$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redstone"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$definitions$2f$garnetHolesky$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["garnetHolesky"]
], C = new Set(x.map((i)=>i.id));
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/add-privy-rpc-to-chain.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPrivyRpcToChain",
    ()=>r
]);
function r(r, p) {
    return {
        ...r,
        rpcUrls: {
            ...r.rpcUrls,
            privy: {
                http: [
                    p
                ]
            }
        }
    };
}
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/dedupe-supported-chains.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dedupeSupportedChains",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$add$2d$privy$2d$rpc$2d$to$2d$chain$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/chains/dist/esm/ethereum/add-privy-rpc-to-chain.mjs [app-ssr] (ecmascript)");
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
;
const t = (t)=>t.map((t)=>{
        if (t.rpcUrls.privyWalletOverride) return t;
        let n = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$default$2d$supported$2d$chains$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SUPPORTED_CHAINS"].find((i)=>i.id === t.id), s = n?.rpcUrls.privy?.http[0];
        return s ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$chains$2f$dist$2f$esm$2f$ethereum$2f$add$2d$privy$2d$rpc$2d$to$2d$chain$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addPrivyRpcToChain"])(t, s) : t;
    });
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/ethereum/dist/esm/to-viem-transaction-serializable.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STRING_TO_NUMBER_TXN_TYPE",
    ()=>i,
    "toViemTransactionSerializable",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/utils/data/isHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
;
let r = {
    0: "legacy",
    1: "eip2930",
    2: "eip1559",
    3: "eip4844",
    4: "eip7702"
};
const i = {
    legacy: 0,
    eip2930: 1,
    eip1559: 2,
    eip4844: 3,
    eip7702: 4
};
let s = (e)=>void 0 !== e ? BigInt(e) : void 0;
function t(i) {
    let t, { type: c = 2, ...o } = "string" == typeof i ? JSON.parse(i) : i;
    o.accessList && Array.isArray(o.accessList) ? t = o.accessList.map((e)=>Array.isArray(e) ? {
            address: e[0],
            storageKeys: e[1]
        } : e) : o.accessList && (t = Object.entries(o.accessList).map((e)=>({
            address: e[0],
            storageKeys: e[1]
        })));
    let d = Number(o.chainId ?? 1), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isHex"])(o.data) ? o.data : o.data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toHex"])(Uint8Array.from(o.data)) : void 0, p = o.nonce ? Number(o.nonce) : void 0, m = {
        chainId: d,
        data: n,
        nonce: p,
        value: s(o.value),
        gas: s(o.gas ?? o.gasLimit)
    }, y = Number(c);
    if (0 === y) return {
        ...o,
        type: r[y],
        ...m,
        gasPrice: s(o.gasPrice),
        accessList: void 0,
        maxFeePerGas: void 0,
        maxPriorityFeePerGas: void 0
    };
    if (1 === y) return {
        ...o,
        type: r[y],
        ...m,
        gasPrice: s(o.gasPrice),
        accessList: t,
        maxFeePerGas: void 0,
        maxPriorityFeePerGas: void 0
    };
    if (2 === y) return {
        ...o,
        type: r[y],
        ...m,
        nonce: p,
        accessList: t,
        maxFeePerGas: s(o.maxFeePerGas),
        maxPriorityFeePerGas: s(o.maxPriorityFeePerGas),
        gasPrice: void 0,
        maxFeePerBlobGas: void 0
    };
    throw Error(`Unsupported transaction type: ${c}`);
}
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/api-base/dist/esm/constants/error-codes.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrivyErrorCode",
    ()=>e
]);
var _, e = ((_ = {}).OAUTH_ACCOUNT_SUSPENDED = "oauth_account_suspended", _.MISSING_OR_INVALID_PRIVY_APP_ID = "missing_or_invalid_privy_app_id", _.MISSING_OR_INVALID_PRIVY_CLIENT_ID = "missing_or_invalid_privy_client_id", _.MISSING_OR_INVALID_PRIVY_ACCOUNT_ID = "missing_or_invalid_privy_account_id", _.MISSING_OR_INVALID_TOKEN = "missing_or_invalid_token", _.MISSING_MFA_ENROLLMENT = "missing_mfa_enrollment", _.MISSING_OR_INVALID_MFA = "missing_or_invalid_mfa", _.EXPIRED_OR_INVALID_MFA_TOKEN = "expired_or_invalid_mfa_token", _.INVALID_DATA = "invalid_data", _.INVALID_CREDENTIALS = "invalid_credentials", _.INVALID_CAPTCHA = "invalid_captcha", _.LINKED_TO_ANOTHER_USER = "linked_to_another_user", _.ALLOWLIST_REJECTED = "allowlist_rejected", _.CANNOT_UNLINK_EMBEDDED_WALLET = "cannot_unlink_embedded_wallet", _.CANNOT_UNLINK_SOLE_ACCOUNT = "cannot_unlink_sole_account", _.CANNOT_LINK_MORE_OF_TYPE = "cannot_link_more_of_type", _.LINKED_ACCOUNT_NOT_FOUND = "linked_account_not_found", _.TOO_MANY_REQUESTS = "too_many_requests", _.RESOURCE_CONFLICT = "resource_conflict", _.INVALID_ORIGIN = "invalid_origin", _.MISSING_ORIGIN = "missing_origin", _.INVALID_NATIVE_APP_ID = "invalid_native_app_id", _.TOKEN_ALREADY_USED = "token_already_used", _.ALREADY_LOGGED_OUT = "already_logged_out", _.NOT_SUPPORTED = "not_supported", _.USER_UNSUBSCRIBED = "user_unsubscribed", _.MAX_APPS_REACHED = "max_apps_reached", _.USER_LIMIT_REACHED = "max_accounts_reached", _.DEVICE_REVOKED = "device_revoked", _.WALLET_PASSWORD_EXISTS = "wallet_password_exists", _.OAUTH_STATE_MISMATCH = "oauth_state_mismatch", _.MAX_DENYLIST_ENTRIES_REACHED = "max_denylist_entries_reached", _.MAX_TEST_ACCOUNTS_REACHED = "max_test_accounts_reached", _.DISALLOWED_LOGIN_METHOD = "disallowed_login_method", _.DISALLOWED_PLUS_EMAIL = "disallowed_plus_email", _.DISALLOWED_RECOVERY_METHOD = "disallowed_recovery_method", _.LEGACY_DASHBOARD_LOGIN_CONFIGURATION = "legacy_dashboard_login_configuration", _.CANNOT_SET_PASSWORD = "cannot_set_password", _.INVALID_PKCE_PARAMETERS = "invalid_pkce_parameters", _.INVALID_APP_URL_SCHEME_CONFIGURATION = "invalid_app_url_scheme_configuration", _.CROSS_APP_CONNECTION_NOT_ALLOWED = "cross_app_connection_not_allowed", _.USER_DOES_NOT_EXIST = "user_does_not_exist", _.ALREADY_EXISTS = "resource_already_exists", _.ACCOUNT_TRANSFER_REQUIRED = "account_transfer_required", _.USER_HAS_NOT_DELEGATED_WALLET = "user_has_not_delegated_wallet", _.FEATURE_NOT_ENABLED = "feature_not_enabled", _.INSUFFICIENT_FUNDS = "insufficient_funds", _.TRANSACTION_BROADCAST_FAILURE = "transaction_broadcast_failure", _.TRANSACTION_EXECUTION_FAILURE = "transaction_execution_failure", _.INVALID_POLICY_FORMAT = "invalid_policy_format", _.POLICY_VIOLATION = "policy_violation", _.AUTHORIZATION_KEY_HAS_ASSOCIATED_WALLETS = "authorization_key_has_associated_wallets", _.INVALID_REQUEST = "invalid_request", _.SIGNUP_DISABLED = "signup_disabled", _);
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/api-base/dist/esm/classes/api-error.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AccountTransferRequiredError",
    ()=>m,
    "AllowlistRejectedError",
    ()=>n,
    "ForbiddenError",
    ()=>o,
    "HttpError",
    ()=>r,
    "InsufficientBalanceError",
    ()=>p,
    "InternalServerError",
    ()=>E,
    "InvalidInputError",
    ()=>e,
    "LegacyInvalidInputError",
    ()=>i,
    "NotFoundError",
    ()=>c,
    "PaymentFailedError",
    ()=>h,
    "RequestTimeoutError",
    ()=>a,
    "ResourceConflictError",
    ()=>l,
    "TooManyRequestsError",
    ()=>d,
    "UnauthorizedError",
    ()=>t,
    "UnsupportedMediaType",
    ()=>u
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$api$2d$base$2f$dist$2f$esm$2f$constants$2f$error$2d$codes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/api-base/dist/esm/constants/error-codes.mjs [app-ssr] (ecmascript)");
;
class r extends Error {
    toString() {
        return `${this.name}: ${this.message}${this.cause ? ` [cause: ${this.cause}]` : ""}`;
    }
    constructor(s, r, e, t){
        super(r), this.status = s, this.code = e, this.name = "HttpError", this.responseData = t;
    }
}
class e extends r {
    constructor(r, e){
        super(400, r, e || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$api$2d$base$2f$dist$2f$esm$2f$constants$2f$error$2d$codes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrivyErrorCode"].INVALID_DATA), this.name = "InvalidInputError";
    }
}
class t extends r {
    constructor(s, r){
        super(401, s, r), this.name = "UnauthorizedError";
    }
}
class n extends t {
    constructor(r){
        super(r || "User is not allowed to login to this app.", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$api$2d$base$2f$dist$2f$esm$2f$constants$2f$error$2d$codes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrivyErrorCode"].ALLOWLIST_REJECTED), this.name = "AllowlistRejectedError";
    }
}
class o extends r {
    constructor(s, r){
        super(403, s, r), this.name = "ForbiddenError";
    }
}
class c extends r {
    constructor(s){
        super(404, s), this.name = "NotFoundError";
    }
}
class a extends r {
    constructor(s, r){
        super(408, s, r), this.name = "RequestTimeoutError";
    }
}
class u extends r {
    constructor(s){
        super(415, s), this.name = "UnsupportedMediaType";
    }
}
class i extends r {
    constructor(s, r){
        super(422, s, r), this.name = "LegacyInvalidInputError";
    }
}
class d extends r {
    constructor(r){
        super(429, r || "Too many requests. Please wait to try again.", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$api$2d$base$2f$dist$2f$esm$2f$constants$2f$error$2d$codes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrivyErrorCode"].TOO_MANY_REQUESTS), this.name = "TooManyRequestsError";
    }
}
class l extends r {
    constructor(r){
        super(409, r || "Conflict encountered while trying to modify resource.", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$api$2d$base$2f$dist$2f$esm$2f$constants$2f$error$2d$codes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrivyErrorCode"].RESOURCE_CONFLICT), this.name = "ResourceConflictError";
    }
}
class p extends r {
    constructor(r){
        super(400, r || "Insufficient balance.", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$api$2d$base$2f$dist$2f$esm$2f$constants$2f$error$2d$codes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrivyErrorCode"].INSUFFICIENT_FUNDS), this.name = "InsufficientBalanceError";
    }
}
class h extends r {
    constructor(s){
        super(402, s || "Payment failed.");
    }
}
class E extends r {
    constructor(s){
        super(500, s || "Service unavailable."), this.name = "InternalServerError";
    }
}
class m extends r {
    constructor(r){
        super(400, "Account transfer required", __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$api$2d$base$2f$dist$2f$esm$2f$constants$2f$error$2d$codes$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrivyErrorCode"].ACCOUNT_TRANSFER_REQUIRED, r), this.data = r, this.name = "AccountTransferRequiredError";
    }
}
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/popup/dist/esm/get-options.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getOptions",
    ()=>e
]);
const e = ({ w: e, h: n })=>{
    let t = void 0 !== window.screenLeft ? window.screenLeft : window.screenX, i = void 0 !== window.screenTop ? window.screenTop : window.screenY, o = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width, d = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    return `toolbar=0,location=0,menubar=0,height=${n},width=${e},popup=1,left=${(o - e) / 2 / (o / window.screen.availWidth) + t},top=${(d - n) / 2 / (d / window.screen.availHeight) + i}`;
};
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/popup/dist/esm/trigger.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trigger",
    ()=>t
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$popup$2f$dist$2f$esm$2f$get$2d$options$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/popup/dist/esm/get-options.mjs [app-ssr] (ecmascript)");
;
const t = (t)=>window.open(t?.location, void 0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$popup$2f$dist$2f$esm$2f$get$2d$options$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOptions"])({
        w: 440,
        h: 680
    }));
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/base-x/src/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base(ALPHABET) {
    if (ALPHABET.length >= 255) {
        throw new TypeError('Alphabet too long');
    }
    const BASE_MAP = new Uint8Array(256);
    for(let j = 0; j < BASE_MAP.length; j++){
        BASE_MAP[j] = 255;
    }
    for(let i = 0; i < ALPHABET.length; i++){
        const x = ALPHABET.charAt(i);
        const xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + ' is ambiguous');
        }
        BASE_MAP[xc] = i;
    }
    const BASE = ALPHABET.length;
    const LEADER = ALPHABET.charAt(0);
    const FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    const iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        // eslint-disable-next-line no-empty
        if (source instanceof Uint8Array) {} else if (ArrayBuffer.isView(source)) {
            source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
            source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
            throw new TypeError('Expected Uint8Array');
        }
        if (source.length === 0) {
            return '';
        }
        // Skip & count leading zeroes.
        let zeroes = 0;
        let length = 0;
        let pbegin = 0;
        const pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        const size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        const b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            let carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            let i = 0;
            for(let it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        let it2 = size - length;
        while(it2 !== size && b58[it2] === 0){
            it2++;
        }
        // Translate the result into a string.
        let str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2){
            str += ALPHABET.charAt(b58[it2]);
        }
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== 'string') {
            throw new TypeError('Expected String');
        }
        if (source.length === 0) {
            return new Uint8Array();
        }
        let psz = 0;
        // Skip and count leading '1's.
        let zeroes = 0;
        let length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        const size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        const b256 = new Uint8Array(size);
        // Process the characters.
        while(psz < source.length){
            // Find code of next character
            const charCode = source.charCodeAt(psz);
            // Base map can not be indexed using char code
            if (charCode > 255) {
                return;
            }
            // Decode character
            let carry = BASE_MAP[charCode];
            // Invalid character
            if (carry === 255) {
                return;
            }
            let i = 0;
            for(let it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        let it4 = size - length;
        while(it4 !== size && b256[it4] === 0){
            it4++;
        }
        const vch = new Uint8Array(zeroes + (size - it4));
        let j = zeroes;
        while(it4 !== size){
            vch[j++] = b256[it4++];
        }
        return vch;
    }
    function decode(string) {
        const buffer = decodeUnsafe(string);
        if (buffer) {
            return buffer;
        }
        throw new Error('Non-base' + BASE + ' character');
    }
    return {
        encode,
        decodeUnsafe,
        decode
    };
}
const __TURBOPACK__default__export__ = base;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/bs58/src/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/base-x/src/esm/index.js [app-ssr] (ecmascript)");
;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ALPHABET);
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/compare.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compare",
    ()=>compare
]);
function compare(a, b) {
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] < b[i]) {
            return -1;
        }
        if (a[i] > b[i]) {
            return 1;
        }
    }
    if (a.byteLength > b.byteLength) {
        return 1;
    }
    if (a.byteLength < b.byteLength) {
        return -1;
    }
    return 0;
}
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asUint8Array",
    ()=>asUint8Array
]);
function asUint8Array(buf) {
    if (globalThis.Buffer != null) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    return buf;
}
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "allocUnsafe",
    ()=>allocUnsafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
function alloc(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.alloc(size));
    }
    return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.allocUnsafe(size));
    }
    return new Uint8Array(size);
}
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/concat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
;
function concat(arrays, length) {
    if (!length) {
        length = arrays.reduce((acc, curr)=>acc + curr.length, 0);
    }
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allocUnsafe"])(length);
    let offset = 0;
    for (const arr of arrays){
        output.set(arr, offset);
        offset += arr.length;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(output);
}
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/equals.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "equals",
    ()=>equals
]);
function equals(a, b) {
    if (a === b) {
        return true;
    }
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/util/bases.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/multiformats/esm/src/basics.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)");
;
;
function createCodec(name, prefix, encode, decode) {
    return {
        name,
        prefix,
        encoder: {
            name,
            prefix,
            encode
        },
        decoder: {
            decode
        }
    };
}
const string = createCodec('utf8', 'u', (buf)=>{
    const decoder = new TextDecoder('utf8');
    return 'u' + decoder.decode(buf);
}, (str)=>{
    const encoder = new TextEncoder();
    return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', (buf)=>{
    let string = 'a';
    for(let i = 0; i < buf.length; i++){
        string += String.fromCharCode(buf[i]);
    }
    return string;
}, (str)=>{
    str = str.substring(1);
    const buf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allocUnsafe"])(str.length);
    for(let i = 0; i < str.length; i++){
        buf[i] = str.charCodeAt(i);
    }
    return buf;
});
const BASES = {
    utf8: string,
    'utf-8': string,
    hex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"].base16,
    latin1: ascii,
    ascii: ascii,
    binary: ascii,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"]
};
const __TURBOPACK__default__export__ = BASES;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/from-string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromString",
    ()=>fromString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/util/bases.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
;
function fromString(string, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.from(string, 'utf-8'));
    }
    return base.decoder.decode(`${base.prefix}${string}`);
}
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/to-string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toString",
    ()=>toString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/util/bases.js [app-ssr] (ecmascript)");
;
function toString(array, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
    }
    return base.encoder.encode(array).substring(1);
}
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/xor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xor",
    ()=>xor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
;
function xor(a, b) {
    if (a.length !== b.length) {
        throw new Error('Inputs should have the same length');
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allocUnsafe"])(a.length);
    for(let i = 0; i < a.length; i++){
        result[i] = a[i] ^ b[i];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(result);
}
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/compare.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$equals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/equals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/to-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$xor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/uint8arrays/esm/src/xor.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_LOG_SIZE_IN_BYTES_DEFAULT",
    ()=>i,
    "PINO_CUSTOM_CONTEXT_KEY",
    ()=>l,
    "PINO_LOGGER_DEFAULTS",
    ()=>b,
    "formatChildLoggerContext",
    ()=>m,
    "generateChildLogger",
    ()=>X,
    "generateClientLogger",
    ()=>I,
    "generatePlatformLogger",
    ()=>Y,
    "generateServerLogger",
    ()=>O,
    "getDefaultLoggerOptions",
    ()=>D,
    "getLoggerContext",
    ()=>w,
    "setLoggerContext",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$pino__$5b$external$5d$__$28$pino$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$logger$2f$node_modules$2f$pino$29$__ = __turbopack_context__.i("[externals]/pino [external] (pino, cjs, [project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/@walletconnect/logger/node_modules/pino)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-ssr] (ecmascript)");
;
;
;
const b = {
    level: "info"
}, l = "custom_context", i = 1e3 * 1024;
var C = Object.defineProperty, B = (r, e, t)=>e in r ? C(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, s = (r, e, t)=>B(r, typeof e != "symbol" ? e + "" : e, t);
class S {
    constructor(e){
        s(this, "nodeValue"), s(this, "sizeInBytes"), s(this, "next"), this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
    }
    get value() {
        return this.nodeValue;
    }
    get size() {
        return this.sizeInBytes;
    }
}
class v {
    constructor(e){
        s(this, "lengthInNodes"), s(this, "sizeInBytes"), s(this, "head"), s(this, "tail"), s(this, "maxSizeInBytes"), this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0;
    }
    append(e) {
        const t = new S(e);
        if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
        for(; this.size + t.size > this.maxSizeInBytes;)this.shift();
        this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
    }
    shift() {
        if (!this.head) return;
        const e = this.head;
        this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size;
    }
    toArray() {
        const e = [];
        let t = this.head;
        for(; t !== null;)e.push(t.value), t = t.next;
        return e;
    }
    get length() {
        return this.lengthInNodes;
    }
    get size() {
        return this.sizeInBytes;
    }
    toOrderedArray() {
        return Array.from(this);
    }
    [Symbol.iterator]() {
        let e = this.head;
        return {
            next: ()=>{
                if (!e) return {
                    done: !0,
                    value: null
                };
                const t = e.value;
                return e = e.next, {
                    done: !1,
                    value: t
                };
            }
        };
    }
}
var _ = Object.defineProperty, x = (r, e, t)=>e in r ? _(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, a = (r, e, t)=>x(r, typeof e != "symbol" ? e + "" : e, t);
class L {
    constructor(e, t = i){
        a(this, "logs"), a(this, "level"), a(this, "levelValue"), a(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e ?? "error", this.levelValue = __TURBOPACK__imported__module__$5b$externals$5d2f$pino__$5b$external$5d$__$28$pino$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$logger$2f$node_modules$2f$pino$29$__["levels"].values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e, t) {
        t === __TURBOPACK__imported__module__$5b$externals$5d2f$pino__$5b$external$5d$__$28$pino$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$logger$2f$node_modules$2f$pino$29$__["levels"].values.error ? console.error(e) : t === __TURBOPACK__imported__module__$5b$externals$5d2f$pino__$5b$external$5d$__$28$pino$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$logger$2f$node_modules$2f$pino$29$__["levels"].values.warn ? console.warn(e) : t === __TURBOPACK__imported__module__$5b$externals$5d2f$pino__$5b$external$5d$__$28$pino$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$logger$2f$node_modules$2f$pino$29$__["levels"].values.debug ? console.debug(e) : t === __TURBOPACK__imported__module__$5b$externals$5d2f$pino__$5b$external$5d$__$28$pino$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$logger$2f$node_modules$2f$pino$29$__["levels"].values.trace ? console.trace(e) : console.log(e);
    }
    appendToLogs(e) {
        this.logs.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
            timestamp: new Date().toISOString(),
            log: e
        }));
        const t = typeof e == "string" ? JSON.parse(e).level : e.level;
        t >= this.levelValue && this.forwardToConsole(e, t);
    }
    getLogs() {
        return this.logs;
    }
    clearLogs() {
        this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
        return Array.from(this.logs);
    }
    logsToBlob(e) {
        const t = this.getLogArray();
        return t.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
            extraMetadata: e
        })), new Blob(t, {
            type: "application/json"
        });
    }
}
var z = Object.defineProperty, T = (r, e, t)=>e in r ? z(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, k = (r, e, t)=>T(r, typeof e != "symbol" ? e + "" : e, t);
class E {
    constructor(e, t = i){
        k(this, "baseChunkLogger"), this.baseChunkLogger = new L(e, t);
    }
    write(e) {
        this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
        return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
        const t = URL.createObjectURL(this.logsToBlob(e)), o = document.createElement("a");
        o.href = t, o.download = `walletconnect-logs-${new Date().toISOString()}.txt`, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(t);
    }
}
var A = Object.defineProperty, $ = (r, e, t)=>e in r ? A(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, N = (r, e, t)=>$(r, typeof e != "symbol" ? e + "" : e, t);
class j {
    constructor(e, t = i){
        N(this, "baseChunkLogger"), this.baseChunkLogger = new L(e, t);
    }
    write(e) {
        this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
        return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
    }
}
var P = Object.defineProperty, V = Object.defineProperties, G = Object.getOwnPropertyDescriptors, p = Object.getOwnPropertySymbols, M = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable, f = (r, e, t)=>e in r ? P(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, g = (r, e)=>{
    for(var t in e || (e = {}))M.call(e, t) && f(r, t, e[t]);
    if (p) for (var t of p(e))U.call(e, t) && f(r, t, e[t]);
    return r;
}, h = (r, e)=>V(r, G(e));
function D(r) {
    return h(g({}, r), {
        level: r?.level || b.level
    });
}
function y(r, e, t = l) {
    return r[t] = e, r;
}
function w(r, e = l) {
    return r[e] || "";
}
function m(r, e, t = l) {
    const o = w(r, t);
    return o.trim() ? `${o}/${e}` : e;
}
function X(r, e, t = l) {
    const o = m(r, e, t), u = r.child({
        context: o
    });
    return y(u, o, t);
}
function I(r) {
    var e, t;
    const o = new E((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
    return {
        logger: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$pino__$5b$external$5d$__$28$pino$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$logger$2f$node_modules$2f$pino$29$__["default"])(h(g({}, r.opts), {
            level: "trace",
            browser: h(g({}, (t = r.opts) == null ? void 0 : t.browser), {
                write: (u)=>o.write(u)
            })
        })),
        chunkLoggerController: o
    };
}
function O(r) {
    var e;
    const t = new j((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
    return {
        logger: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$pino__$5b$external$5d$__$28$pino$2c$__cjs$2c$__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$logger$2f$node_modules$2f$pino$29$__["default"])(h(g({}, r.opts), {
            level: "trace"
        }), t),
        chunkLoggerController: t
    };
}
function Y(r) {
    return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? {
        logger: r.loggerOverride,
        chunkLoggerController: null
    } : ("TURBOPACK compile-time value", "undefined") < "u" ? I(r) : O(r);
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/@walletconnect/types/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ICore",
    ()=>h,
    "ICrypto",
    ()=>g,
    "IEchoClient",
    ()=>O,
    "IEngine",
    ()=>V,
    "IEngineEvents",
    ()=>K,
    "IEventClient",
    ()=>R,
    "IExpirer",
    ()=>S,
    "IJsonRpcHistory",
    ()=>I,
    "IKeyChain",
    ()=>j,
    "IMessageTracker",
    ()=>y,
    "IPairing",
    ()=>$,
    "IPublisher",
    ()=>m,
    "IRelayer",
    ()=>d,
    "ISignClient",
    ()=>J,
    "ISignClientEvents",
    ()=>H,
    "IStore",
    ()=>f,
    "ISubscriber",
    ()=>P,
    "ISubscriberTopicMap",
    ()=>C,
    "IVerify",
    ()=>M
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@walletconnect/events/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@walletconnect/events/dist/esm/events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
;
;
var a = Object.defineProperty, u = (e, s, r)=>s in e ? a(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, c = (e, s, r)=>u(e, typeof s != "symbol" ? s + "" : s, r);
class h extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super(), this.opts = s, c(this, "protocol", "wc"), c(this, "version", 2);
    }
}
class g {
    constructor(s, r, t){
        this.core = s, this.logger = r;
    }
}
var p = Object.defineProperty, b = (e, s, r)=>s in e ? p(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, v = (e, s, r)=>b(e, typeof s != "symbol" ? s + "" : s, r);
class I extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r, v(this, "records", new Map);
    }
}
class y {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super();
    }
}
class f {
    constructor(s, r, t, q){
        this.core = s, this.logger = r, this.name = t;
    }
}
var E = Object.defineProperty, x = (e, s, r)=>s in e ? E(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, w = (e, s, r)=>x(e, typeof s != "symbol" ? s + "" : s, r);
class C {
    constructor(){
        w(this, "map", new Map);
    }
}
class P extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class j {
    constructor(s, r){
        this.core = s, this.logger = r;
    }
}
class S extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r;
    }
}
class $ {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class M {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.store = t;
    }
}
class O {
    constructor(s, r){
        this.projectId = s, this.logger = r;
    }
}
class R {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.telemetryEnabled = t;
    }
}
var T = Object.defineProperty, k = (e, s, r)=>s in e ? T(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, i = (e, s, r)=>k(e, typeof s != "symbol" ? s + "" : s, r);
class H extends __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["default"] {
    constructor(){
        super();
    }
}
class J {
    constructor(s){
        this.opts = s, i(this, "protocol", "wc"), i(this, "version", 2);
    }
}
class K extends __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"] {
    constructor(){
        super();
    }
}
class V {
    constructor(s){
        this.client = s;
    }
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/@walletconnect/universal-provider/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniversalProvider",
    ()=>ns,
    "default",
    ()=>N
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/@walletconnect/sign-client/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/@walletconnect/utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@walletconnect/jsonrpc-http-connection/dist/index.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
;
;
;
;
;
;
function _(t) {
    return t == null || typeof t != "object" && typeof t != "function";
}
function Z(t) {
    return Object.getOwnPropertySymbols(t).filter((e)=>Object.prototype.propertyIsEnumerable.call(t, e));
}
function T(t) {
    return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const Fe = "[object RegExp]", ee = "[object String]", te = "[object Number]", se = "[object Boolean]", ie = "[object Arguments]", He = "[object Symbol]", Ue = "[object Date]", Be = "[object Map]", Le = "[object Set]", Me = "[object Array]", ze = "[object ArrayBuffer]", Ge = "[object Object]", We = "[object DataView]", Je = "[object Uint8Array]", Ke = "[object Uint8ClampedArray]", Ve = "[object Uint16Array]", Ye = "[object Uint32Array]", Xe = "[object Int8Array]", ke = "[object Int16Array]", Qe = "[object Int32Array]", Ze = "[object Float32Array]", Te = "[object Float64Array]";
function x(t) {
    return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function et(t, e) {
    return y(t, void 0, t, new Map, e);
}
function y(t, e, s, i = new Map, r = void 0) {
    const a = r?.(t, e, s, i);
    if (a != null) return a;
    if (_(t)) return t;
    if (i.has(t)) return i.get(t);
    if (Array.isArray(t)) {
        const n = new Array(t.length);
        i.set(t, n);
        for(let c = 0; c < t.length; c++)n[c] = y(t[c], c, s, i, r);
        return Object.hasOwn(t, "index") && (n.index = t.index), Object.hasOwn(t, "input") && (n.input = t.input), n;
    }
    if (t instanceof Date) return new Date(t.getTime());
    if (t instanceof RegExp) {
        const n = new RegExp(t.source, t.flags);
        return n.lastIndex = t.lastIndex, n;
    }
    if (t instanceof Map) {
        const n = new Map;
        i.set(t, n);
        for (const [c, o] of t)n.set(c, y(o, c, s, i, r));
        return n;
    }
    if (t instanceof Set) {
        const n = new Set;
        i.set(t, n);
        for (const c of t)n.add(y(c, void 0, s, i, r));
        return n;
    }
    if (typeof Buffer < "u" && Buffer.isBuffer(t)) return t.subarray();
    if (x(t)) {
        const n = new (Object.getPrototypeOf(t)).constructor(t.length);
        i.set(t, n);
        for(let c = 0; c < t.length; c++)n[c] = y(t[c], c, s, i, r);
        return n;
    }
    if (t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
    if (t instanceof DataView) {
        const n = new DataView(t.buffer.slice(0), t.byteOffset, t.byteLength);
        return i.set(t, n), m(n, t, s, i, r), n;
    }
    if (typeof File < "u" && t instanceof File) {
        const n = new File([
            t
        ], t.name, {
            type: t.type
        });
        return i.set(t, n), m(n, t, s, i, r), n;
    }
    if (t instanceof Blob) {
        const n = new Blob([
            t
        ], {
            type: t.type
        });
        return i.set(t, n), m(n, t, s, i, r), n;
    }
    if (t instanceof Error) {
        const n = new t.constructor;
        return i.set(t, n), n.message = t.message, n.name = t.name, n.stack = t.stack, n.cause = t.cause, m(n, t, s, i, r), n;
    }
    if (typeof t == "object" && tt(t)) {
        const n = Object.create(Object.getPrototypeOf(t));
        return i.set(t, n), m(n, t, s, i, r), n;
    }
    return t;
}
function m(t, e, s = t, i, r) {
    const a = [
        ...Object.keys(e),
        ...Z(e)
    ];
    for(let n = 0; n < a.length; n++){
        const c = a[n], o = Object.getOwnPropertyDescriptor(t, c);
        (o == null || o.writable) && (t[c] = y(e[c], c, s, i, r));
    }
}
function tt(t) {
    switch(T(t)){
        case ie:
        case Me:
        case ze:
        case We:
        case se:
        case Ue:
        case Ze:
        case Te:
        case Xe:
        case ke:
        case Qe:
        case Be:
        case te:
        case Ge:
        case Fe:
        case Le:
        case ee:
        case He:
        case Je:
        case Ke:
        case Ve:
        case Ye:
            return !0;
        default:
            return !1;
    }
}
function st(t, e) {
    return et(t, (s, i, r, a)=>{
        const n = e?.(s, i, r, a);
        if (n != null) return n;
        if (typeof t == "object") switch(Object.prototype.toString.call(t)){
            case te:
            case ee:
            case se:
                {
                    const c = new t.constructor(t?.valueOf());
                    return m(c, t), c;
                }
            case ie:
                {
                    const c = {};
                    return m(c, t), c.length = t.length, c[Symbol.iterator] = t[Symbol.iterator], c;
                }
            default:
                return;
        }
    });
}
function ne(t) {
    return st(t);
}
function re(t) {
    return t !== null && typeof t == "object" && T(t) === "[object Arguments]";
}
function ae(t) {
    return typeof t == "object" && t !== null;
}
function it() {}
function nt(t) {
    return x(t);
}
function rt(t) {
    if (typeof t != "object" || t == null) return !1;
    if (Object.getPrototypeOf(t) === null) return !0;
    if (Object.prototype.toString.call(t) !== "[object Object]") {
        const s = t[Symbol.toStringTag];
        return s == null || !Object.getOwnPropertyDescriptor(t, Symbol.toStringTag)?.writable ? !1 : t.toString() === `[object ${s}]`;
    }
    let e = t;
    for(; Object.getPrototypeOf(e) !== null;)e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(t) === e;
}
function at(t) {
    if (_(t)) return t;
    if (Array.isArray(t) || x(t) || t instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && t instanceof SharedArrayBuffer) return t.slice(0);
    const e = Object.getPrototypeOf(t), s = e.constructor;
    if (t instanceof Date || t instanceof Map || t instanceof Set) return new s(t);
    if (t instanceof RegExp) {
        const i = new s(t);
        return i.lastIndex = t.lastIndex, i;
    }
    if (t instanceof DataView) return new s(t.buffer.slice(0));
    if (t instanceof Error) {
        const i = new s(t.message);
        return i.stack = t.stack, i.name = t.name, i.cause = t.cause, i;
    }
    if (typeof File < "u" && t instanceof File) return new s([
        t
    ], t.name, {
        type: t.type,
        lastModified: t.lastModified
    });
    if (typeof t == "object") {
        const i = Object.create(e);
        return Object.assign(i, t);
    }
    return t;
}
function ct(t, ...e) {
    const s = e.slice(0, -1), i = e[e.length - 1];
    let r = t;
    for(let a = 0; a < s.length; a++){
        const n = s[a];
        r = $(r, n, i, new Map);
    }
    return r;
}
function $(t, e, s, i) {
    if (_(t) && (t = Object(t)), e == null || typeof e != "object") return t;
    if (i.has(e)) return at(i.get(e));
    if (i.set(e, t), Array.isArray(e)) {
        e = e.slice();
        for(let a = 0; a < e.length; a++)e[a] = e[a] ?? void 0;
    }
    const r = [
        ...Object.keys(e),
        ...Z(e)
    ];
    for(let a = 0; a < r.length; a++){
        const n = r[a];
        let c = e[n], o = t[n];
        if (re(c) && (c = {
            ...c
        }), re(o) && (o = {
            ...o
        }), typeof Buffer < "u" && Buffer.isBuffer(c) && (c = ne(c)), Array.isArray(c)) if (typeof o == "object" && o != null) {
            const l = [], p = Reflect.ownKeys(o);
            for(let f = 0; f < p.length; f++){
                const u = p[f];
                l[u] = o[u];
            }
            o = l;
        } else o = [];
        const h = s(o, c, n, t, e, i);
        h != null ? t[n] = h : Array.isArray(c) || ae(o) && ae(c) ? t[n] = $(o, c, s, i) : o == null && rt(c) ? t[n] = $({}, c, s, i) : o == null && nt(c) ? t[n] = ne(c) : (o === void 0 || c !== void 0) && (t[n] = c);
    }
    return t;
}
function ot(t, ...e) {
    return ct(t, ...e, it);
}
const ce = "error", pt = "wss://relay.walletconnect.org", ht = "wc", oe = "universal_provider", A = `${ht}@2:${oe}:`, pe = "https://rpc.walletconnect.org/v1/", he = "generic", lt = `${pe}bundler`, v = "call_status", ut = 86400, F = {
    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
};
var dt = Object.defineProperty, ft = Object.defineProperties, mt = Object.getOwnPropertyDescriptors, le = Object.getOwnPropertySymbols, gt = Object.prototype.hasOwnProperty, yt = Object.prototype.propertyIsEnumerable, ue = (t, e, s)=>e in t ? dt(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : t[e] = s, E = (t, e)=>{
    for(var s in e || (e = {}))gt.call(e, s) && ue(t, s, e[s]);
    if (le) for (var s of le(e))yt.call(e, s) && ue(t, s, e[s]);
    return t;
}, vt = (t, e)=>ft(t, mt(e));
function de(t, e, s) {
    var i;
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseChainId"])(t);
    return ((i = e.rpcMap) == null ? void 0 : i[r.reference]) || `${pe}?chainId=${r.namespace}:${r.reference}&projectId=${s}`;
}
function wt(t) {
    return t.includes(":") ? t.split(":")[1] : t;
}
function fe(t) {
    return t.map((e)=>`${e.split(":")[0]}:${e.split(":")[1]}`);
}
function bt(t, e) {
    const s = Object.keys(e.namespaces).filter((r)=>r.includes(t));
    if (!s.length) return [];
    const i = [];
    return s.forEach((r)=>{
        const a = e.namespaces[r].accounts;
        i.push(...a);
    }), i;
}
function me(t) {
    return Object.fromEntries(Object.entries(t).filter(([e, s])=>{
        var i, r;
        return ((i = s?.chains) == null ? void 0 : i.length) && ((r = s?.chains) == null ? void 0 : r.length) > 0;
    }));
}
function C(t = {}, e = {}) {
    const s = me(ge(t)), i = me(ge(e));
    return ot(s, i);
}
function ge(t) {
    var e, s, i, r, a;
    const n = {};
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidObject"])(t)) return n;
    for (const [c, o] of Object.entries(t)){
        const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCaipNamespace"])(c) ? [
            c
        ] : o.chains, l = o.methods || [], p = o.events || [], f = o.rpcMap || {}, u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])(c);
        n[u] = vt(E(E({}, n[u]), o), {
            chains: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeArrays"])(h, (e = n[u]) == null ? void 0 : e.chains),
            methods: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeArrays"])(l, (s = n[u]) == null ? void 0 : s.methods),
            events: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeArrays"])(p, (i = n[u]) == null ? void 0 : i.events)
        }), ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidObject"])(f) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidObject"])(((r = n[u]) == null ? void 0 : r.rpcMap) || {})) && (n[u].rpcMap = E(E({}, f), (a = n[u]) == null ? void 0 : a.rpcMap));
    }
    return n;
}
function ye(t) {
    return t.includes(":") ? t.split(":")[2] : t;
}
function ve(t) {
    const e = {};
    for (const [s, i] of Object.entries(t)){
        const r = i.methods || [], a = i.events || [], n = i.accounts || [], c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCaipNamespace"])(s) ? [
            s
        ] : i.chains ? i.chains : fe(i.accounts);
        e[s] = {
            chains: c,
            methods: r,
            events: a,
            accounts: n
        };
    }
    return e;
}
function H(t) {
    return typeof t == "number" ? t : t.includes("0x") ? parseInt(t, 16) : (t = t.includes(":") ? t.split(":")[1] : t, isNaN(Number(t)) ? t : Number(t));
}
function Pt(t) {
    try {
        const e = JSON.parse(t);
        return typeof e == "object" && e !== null && !Array.isArray(e);
    } catch  {
        return !1;
    }
}
const we = {}, w = (t)=>we[t], U = (t, e)=>{
    we[t] = e;
};
var Ot = Object.defineProperty, be = Object.getOwnPropertySymbols, It = Object.prototype.hasOwnProperty, St = Object.prototype.propertyIsEnumerable, Pe = (t, e, s)=>e in t ? Ot(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : t[e] = s, Oe = (t, e)=>{
    for(var s in e || (e = {}))It.call(e, s) && Pe(t, s, e[s]);
    if (be) for (var s of be(e))St.call(e, s) && Pe(t, s, e[s]);
    return t;
};
const Ie = "eip155", $t = [
    "atomic",
    "flow-control",
    "paymasterService",
    "sessionKeys",
    "auxiliaryFunds"
], At = (t)=>t && t.startsWith("0x") ? BigInt(t).toString(10) : t, B = (t)=>t && t.startsWith("0x") ? t : `0x${BigInt(t).toString(16)}`, Se = (t)=>Object.keys(t).filter((e)=>$t.includes(e)).reduce((e, s)=>(e[s] = Et(t[s]), e), {}), Et = (t)=>typeof t == "string" && Pt(t) ? JSON.parse(t) : t, Ct = (t, e, s)=>{
    const { sessionProperties: i = {}, scopedProperties: r = {} } = t, a = {};
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidObject"])(r) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidObject"])(i)) return;
    const n = Se(i);
    for (const c of s){
        const o = At(c);
        if (!o) continue;
        a[B(o)] = n;
        const h = r?.[`${Ie}:${o}`];
        if (h) {
            const l = h?.[`${Ie}:${o}:${e}`];
            a[B(o)] = Oe(Oe({}, a[B(o)]), Se(l || h));
        }
    }
    for (const [c, o] of Object.entries(a))Object.keys(o).length === 0 && delete a[c];
    return Object.keys(a).length > 0 ? a : void 0;
};
var jt = Object.defineProperty, Nt = (t, e, s)=>e in t ? jt(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : t[e] = s, qt = (t, e, s)=>Nt(t, typeof e != "symbol" ? e + "" : e, s);
let L;
class J {
    constructor(e){
        qt(this, "storage"), this.storage = e;
    }
    async getItem(e) {
        return await this.storage.getItem(e);
    }
    async setItem(e, s) {
        return await this.storage.setItem(e, s);
    }
    async removeItem(e) {
        return await this.storage.removeItem(e);
    }
    static getStorage(e) {
        return L || (L = new J(e)), L;
    }
}
var Dt = Object.defineProperty, Rt = Object.defineProperties, _t = Object.getOwnPropertyDescriptors, $e = Object.getOwnPropertySymbols, xt = Object.prototype.hasOwnProperty, Ft = Object.prototype.propertyIsEnumerable, Ae = (t, e, s)=>e in t ? Dt(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : t[e] = s, Ht = (t, e)=>{
    for(var s in e || (e = {}))xt.call(e, s) && Ae(t, s, e[s]);
    if ($e) for (var s of $e(e))Ft.call(e, s) && Ae(t, s, e[s]);
    return t;
}, Ut = (t, e)=>Rt(t, _t(e));
async function Bt(t, e) {
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseChainId"])(t.result.capabilities.caip345.caip2), i = t.result.capabilities.caip345.transactionHashes, r = await Promise.allSettled(i.map((p)=>Lt(s.reference, p, e))), a = r.filter((p)=>p.status === "fulfilled").map((p)=>p.value).filter((p)=>p);
    r.filter((p)=>p.status === "rejected").forEach((p)=>console.warn("Failed to fetch transaction receipt:", p.reason));
    const n = !a.length || a.some((p)=>!p), c = a.every((p)=>p?.status === "0x1"), o = a.every((p)=>p?.status === "0x0"), h = a.some((p)=>p?.status === "0x0");
    let l;
    return n ? l = 100 : c ? l = 200 : o ? l = 500 : h && (l = 600), {
        id: t.result.id,
        version: t.request.version,
        atomic: t.request.atomicRequired,
        chainId: t.request.chainId,
        capabilities: t.result.capabilities,
        receipts: a,
        status: l
    };
}
async function Lt(t, e, s) {
    return await s(parseInt(t)).request((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])("eth_getTransactionReceipt", [
        e
    ]));
}
async function Mt({ sendCalls: t, storage: e }) {
    const s = await e.getItem(v);
    await e.setItem(v, Ut(Ht({}, s), {
        [t.result.id]: {
            request: t.request,
            result: t.result,
            expiry: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calcExpiry"])(ut)
        }
    }));
}
async function zt({ resultId: t, storage: e }) {
    const s = await e.getItem(v);
    if (s) {
        delete s[t], await e.setItem(v, s);
        for(const i in s)(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpired"])(s[i].expiry) && delete s[i];
        await e.setItem(v, s);
    }
}
async function Gt({ resultId: t, storage: e }) {
    const s = await e.getItem(v), i = s?.[t];
    if (i && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isExpired"])(i.expiry)) return i;
    await zt({
        resultId: t,
        storage: e
    });
}
var Wt = Object.defineProperty, Jt = Object.defineProperties, Kt = Object.getOwnPropertyDescriptors, Ee = Object.getOwnPropertySymbols, Vt = Object.prototype.hasOwnProperty, Yt = Object.prototype.propertyIsEnumerable, M = (t, e, s)=>e in t ? Wt(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : t[e] = s, z = (t, e)=>{
    for(var s in e || (e = {}))Vt.call(e, s) && M(t, s, e[s]);
    if (Ee) for (var s of Ee(e))Yt.call(e, s) && M(t, s, e[s]);
    return t;
}, G = (t, e)=>Jt(t, Kt(e)), g = (t, e, s)=>M(t, typeof e != "symbol" ? e + "" : e, s);
class Xt {
    constructor(e){
        g(this, "name", "eip155"), g(this, "client"), g(this, "chainId"), g(this, "namespace"), g(this, "httpProviders"), g(this, "events"), g(this, "storage"), this.namespace = e.namespace, this.events = w("events"), this.client = w("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain()), this.storage = J.getStorage(this.client.core.storage);
    }
    async request(e) {
        switch(e.request.method){
            case "eth_requestAccounts":
                return this.getAccounts();
            case "eth_accounts":
                return this.getAccounts();
            case "wallet_switchEthereumChain":
                return await this.handleSwitchChain(e);
            case "eth_chainId":
                return parseInt(this.getDefaultChain());
            case "wallet_getCapabilities":
                return await this.getCapabilities(e);
            case "wallet_getCallsStatus":
                return await this.getCallStatus(e);
            case "wallet_sendCalls":
                return await this.sendCalls(e);
        }
        return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request);
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e);
    }
    setDefaultChain(e, s) {
        this.httpProviders[e] || this.setHttpProvider(parseInt(e), s);
        const i = this.chainId;
        this.chainId = parseInt(e), this.events.emit(F.DEFAULT_CHAIN_CHANGED, {
            currentCaipChainId: `${this.name}:${e}`,
            previousCaipChainId: `${this.name}:${i}`
        });
    }
    requestAccounts() {
        return this.getAccounts();
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId.toString();
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1];
    }
    createHttpProvider(e, s) {
        const i = s || de(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HttpConnection"](i, w("disableProviderPing")));
    }
    setHttpProvider(e, s) {
        const i = this.createHttpProvider(e, s);
        i && (this.httpProviders[e] = i);
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach((s)=>{
            var i;
            const r = parseInt(wt(s));
            e[r] = this.createHttpProvider(r, (i = this.namespace.rpcMap) == null ? void 0 : i[s]);
        }), e;
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [
            ...new Set(e.filter((s)=>s.split(":")[1] === this.chainId.toString()).map((s)=>s.split(":")[2]))
        ] : [];
    }
    getHttpProvider(e) {
        const s = e || this.chainId;
        return this.httpProviders[s] || (this.httpProviders = G(z({}, this.httpProviders), {
            [s]: this.createHttpProvider(s)
        }), this.httpProviders[s]);
    }
    async handleSwitchChain(e) {
        var s, i;
        let r = e.request.params ? (s = e.request.params[0]) == null ? void 0 : s.chainId : "0x0";
        r = r.startsWith("0x") ? r : `0x${r}`;
        const a = parseInt(r, 16);
        if (this.isChainApproved(a)) this.setDefaultChain(`${a}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
            topic: e.topic,
            request: {
                method: e.request.method,
                params: [
                    {
                        chainId: r
                    }
                ]
            },
            chainId: (i = this.namespace.chains) == null ? void 0 : i[0]
        }), this.setDefaultChain(`${a}`);
        else throw new Error(`Failed to switch to chain 'eip155:${a}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null;
    }
    isChainApproved(e) {
        return this.namespace.chains.includes(`${this.name}:${e}`);
    }
    async getCapabilities(e) {
        var s, i, r, a, n;
        const c = (i = (s = e.request) == null ? void 0 : s.params) == null ? void 0 : i[0], o = ((a = (r = e.request) == null ? void 0 : r.params) == null ? void 0 : a[1]) || [];
        if (!c) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
        const h = this.client.session.get(e.topic), l = ((n = h?.sessionProperties) == null ? void 0 : n.capabilities) || {}, p = `${c}${o.join(",")}`, f = l?.[p];
        if (f) return f;
        let u;
        try {
            u = Ct(h, c, o);
        } catch (q) {
            console.warn("Failed to extract capabilities from session", q);
        }
        if (u) return u;
        const K = await this.client.request(e);
        try {
            await this.client.session.update(e.topic, {
                sessionProperties: G(z({}, h.sessionProperties || {}), {
                    capabilities: G(z({}, l || {}), {
                        [p]: K
                    })
                })
            });
        } catch (q) {
            console.warn("Failed to update session with capabilities", q);
        }
        return K;
    }
    async getCallStatus(e) {
        var s, i, r;
        const a = this.client.session.get(e.topic), n = (s = a.sessionProperties) == null ? void 0 : s.bundler_name;
        if (n) {
            const h = this.getBundlerUrl(e.chainId, n);
            try {
                return await this.getUserOperationReceipt(h, e);
            } catch (l) {
                console.warn("Failed to fetch call status from bundler", l, h);
            }
        }
        const c = (i = a.sessionProperties) == null ? void 0 : i.bundler_url;
        if (c) try {
            return await this.getUserOperationReceipt(c, e);
        } catch (h) {
            console.warn("Failed to fetch call status from custom bundler", h, c);
        }
        const o = await Gt({
            resultId: (r = e.request.params) == null ? void 0 : r[0],
            storage: this.storage
        });
        if (o) try {
            return await Bt(o, this.getHttpProvider.bind(this));
        } catch (h) {
            console.warn("Failed to fetch call status from stored send calls", h, o);
        }
        if (this.namespace.methods.includes(e.request.method)) return await this.client.request(e);
        throw new Error("Fetching call status not approved by the wallet.");
    }
    async getUserOperationReceipt(e, s) {
        var i;
        const r = new URL(e), a = await fetch(r, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcRequest"])("eth_getUserOperationReceipt", [
                (i = s.request.params) == null ? void 0 : i[0]
            ]))
        });
        if (!a.ok) throw new Error(`Failed to fetch user operation receipt - ${a.status}`);
        return await a.json();
    }
    getBundlerUrl(e, s) {
        return `${lt}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${s}`;
    }
    async sendCalls(e) {
        var s, i, r;
        const a = await this.client.request(e), n = (s = e.request.params) == null ? void 0 : s[0], c = a?.id, o = a?.capabilities || {}, h = (i = o?.caip345) == null ? void 0 : i.caip2, l = (r = o?.caip345) == null ? void 0 : r.transactionHashes;
        return !c || !h || !(l != null && l.length) || await Mt({
            sendCalls: {
                request: n,
                result: a
            },
            storage: this.storage
        }), a;
    }
}
var kt = Object.defineProperty, Qt = (t, e, s)=>e in t ? kt(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : t[e] = s, b = (t, e, s)=>Qt(t, typeof e != "symbol" ? e + "" : e, s);
class Zt {
    constructor(e){
        b(this, "name", he), b(this, "client"), b(this, "httpProviders"), b(this, "events"), b(this, "namespace"), b(this, "chainId"), this.namespace = e.namespace, this.events = w("events"), this.client = w("client"), this.chainId = this.getDefaultChain(), this.name = this.getNamespaceName(), this.httpProviders = this.createHttpProviders();
    }
    updateNamespace(e) {
        this.namespace.chains = [
            ...new Set((this.namespace.chains || []).concat(e.chains || []))
        ], this.namespace.accounts = [
            ...new Set((this.namespace.accounts || []).concat(e.accounts || []))
        ], this.namespace.methods = [
            ...new Set((this.namespace.methods || []).concat(e.methods || []))
        ], this.namespace.events = [
            ...new Set((this.namespace.events || []).concat(e.events || []))
        ], this.httpProviders = this.createHttpProviders();
    }
    requestAccounts() {
        return this.getAccounts();
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider(e.chainId).request(e.request);
    }
    setDefaultChain(e, s) {
        this.httpProviders[e] || this.setHttpProvider(e, s);
        const i = this.chainId;
        this.chainId = e, this.events.emit(F.DEFAULT_CHAIN_CHANGED, {
            currentCaipChainId: `${this.name}:${e}`,
            previousCaipChainId: `${this.name}:${i}`
        });
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1];
    }
    getNamespaceName() {
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseChainId"])(e).namespace;
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [
            ...new Set(e.filter((s)=>s.split(":")[1] === this.chainId.toString()).map((s)=>s.split(":")[2]))
        ] : [];
    }
    createHttpProviders() {
        var e, s;
        const i = {};
        return (s = (e = this.namespace) == null ? void 0 : e.accounts) == null || s.forEach((r)=>{
            var a, n;
            const c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseChainId"])(r), o = (n = (a = this.namespace) == null ? void 0 : a.rpcMap) == null ? void 0 : n[`${c.namespace}:${c.reference}`];
            i[c.reference] = this.createHttpProvider(r, o);
        }), i;
    }
    getHttpProvider(e) {
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseChainId"])(e).reference, i = this.httpProviders[s];
        if (typeof i > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return i;
    }
    setHttpProvider(e, s) {
        const i = this.createHttpProvider(e, s);
        i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, s) {
        const i = s || de(e, this.namespace, this.client.core.projectId);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$provider$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$http$2d$connection$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](i, w("disableProviderPing")));
    }
}
var Tt = Object.defineProperty, es = Object.defineProperties, ts = Object.getOwnPropertyDescriptors, Ce = Object.getOwnPropertySymbols, ss = Object.prototype.hasOwnProperty, is = Object.prototype.propertyIsEnumerable, W = (t, e, s)=>e in t ? Tt(t, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: s
    }) : t[e] = s, S = (t, e)=>{
    for(var s in e || (e = {}))ss.call(e, s) && W(t, s, e[s]);
    if (Ce) for (var s of Ce(e))is.call(e, s) && W(t, s, e[s]);
    return t;
}, j = (t, e)=>es(t, ts(e)), d = (t, e, s)=>W(t, typeof e != "symbol" ? e + "" : e, s);
class N {
    constructor(e){
        d(this, "client"), d(this, "namespaces"), d(this, "optionalNamespaces"), d(this, "sessionProperties"), d(this, "scopedProperties"), d(this, "events", new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["default"]), d(this, "rpcProviders", {}), d(this, "session"), d(this, "providerOpts"), d(this, "logger"), d(this, "uri"), d(this, "disableProviderPing", !1);
        var s, i;
        this.providerOpts = e, this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLogger"])({
            logger: (s = e.logger) != null ? s : ce,
            name: (i = this.providerOpts.name) != null ? i : oe
        }), this.disableProviderPing = e?.disableProviderPing || !1;
    }
    static async init(e) {
        const s = new N(e);
        return await s.initialize(), s;
    }
    async request(e, s, i) {
        const [r, a] = this.validateChain(s);
        if (!this.session) throw new Error("Please call connect() before request()");
        return await this.getProvider(r).request({
            request: S({}, e),
            chainId: `${r}:${a}`,
            topic: this.session.topic,
            expiry: i
        });
    }
    sendAsync(e, s, i, r) {
        const a = new Date().getTime();
        this.request(e, i, r).then((n)=>s(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$walletconnect$2f$jsonrpc$2d$utils$2f$dist$2f$esm$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatJsonRpcResult"])(a, n))).catch((n)=>s(n, void 0));
    }
    async enable() {
        if (!this.client) throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties
        }), await this.requestAccounts();
    }
    async disconnect() {
        var e;
        if (!this.session) throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (e = this.session) == null ? void 0 : e.topic,
            reason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")
        }), await this.cleanup();
    }
    async connect(e) {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (this.setNamespaces(e), this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic);
    }
    async authenticate(e, s) {
        if (!this.client) throw new Error("Sign Client not initialized");
        this.setNamespaces(e), await this.cleanupPendingPairings();
        const { uri: i, response: r } = await this.client.authenticate(e, s);
        i && (this.uri = i, this.events.emit("display_uri", i));
        const a = await r();
        if (this.session = a.session, this.session) {
            const n = ve(this.session.namespaces);
            this.namespaces = C(this.namespaces, n), await this.persist("namespaces", this.namespaces), this.onConnect();
        }
        return a;
    }
    on(e, s) {
        this.events.on(e, s);
    }
    once(e, s) {
        this.events.once(e, s);
    }
    removeListener(e, s) {
        this.events.removeListener(e, s);
    }
    off(e, s) {
        this.events.off(e, s);
    }
    get isWalletConnect() {
        return !0;
    }
    async pair(e) {
        const { uri: s, approval: i } = await this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
            scopedProperties: this.scopedProperties
        });
        s && (this.uri = s, this.events.emit("display_uri", s));
        const r = await i();
        this.session = r;
        const a = ve(r.namespaces);
        return this.namespaces = C(this.namespaces, a), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
    }
    setDefaultChain(e, s) {
        try {
            if (!this.session) return;
            const [i, r] = this.validateChain(e);
            this.getProvider(i).setDefaultChain(r, s);
        } catch (i) {
            if (!/Please call connect/.test(i.message)) throw i;
        }
    }
    async cleanupPendingPairings(e = {}) {
        try {
            this.logger.info("Cleaning up inactive pairings...");
            const s = this.client.pairing.getAll();
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidArray"])(s)) return;
            for (const i of s)e.deletePairings ? this.client.core.expirer.set(i.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
            this.logger.info(`Inactive pairings cleared: ${s.length}`);
        } catch (s) {
            this.logger.warn(s, "Failed to cleanup pending pairings");
        }
    }
    abortPairingAttempt() {
        this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
    }
    async checkStorage() {
        this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.session && this.createProviders();
    }
    async initialize() {
        this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
    }
    async createClient() {
        var e, s;
        if (this.client = this.providerOpts.client || await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$sign$2d$client$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SignClient"].init({
            core: this.providerOpts.core,
            logger: this.providerOpts.logger || ce,
            relayUrl: this.providerOpts.relayUrl || pt,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name,
            customStoragePrefix: this.providerOpts.customStoragePrefix,
            telemetryEnabled: this.providerOpts.telemetryEnabled
        }), this.providerOpts.session) try {
            this.session = this.client.session.get(this.providerOpts.session.topic);
        } catch (i) {
            throw this.logger.error(i, "Failed to get session"), new Error(`The provided session: ${(s = (e = this.providerOpts) == null ? void 0 : e.session) == null ? void 0 : s.topic} doesn't exist in the Sign client`);
        }
        else {
            const i = this.client.session.getAll();
            this.session = i[0];
        }
        this.logger.trace("SignClient Initialized");
    }
    createProviders() {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
        const e = [
            ...new Set(Object.keys(this.session.namespaces).map((s)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])(s)))
        ];
        U("client", this.client), U("events", this.events), U("disableProviderPing", this.disableProviderPing), e.forEach((s)=>{
            if (!this.session) return;
            const i = bt(s, this.session);
            if (i?.length === 0) return;
            const r = fe(i), a = C(this.namespaces, this.optionalNamespaces), n = j(S({}, a[s]), {
                accounts: i,
                chains: r
            });
            switch(s){
                case "eip155":
                    this.rpcProviders[s] = new Xt({
                        namespace: n
                    });
                    break;
                default:
                    this.rpcProviders[s] = new Zt({
                        namespace: n
                    });
            }
        });
    }
    registerEventListeners() {
        if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", (e)=>{
            var s;
            const { topic: i } = e;
            i === ((s = this.session) == null ? void 0 : s.topic) && this.events.emit("session_ping", e);
        }), this.client.on("session_event", (e)=>{
            var s;
            const { params: i, topic: r } = e;
            if (r !== ((s = this.session) == null ? void 0 : s.topic)) return;
            const { event: a } = i;
            if (a.name === "accountsChanged") {
                const n = a.data;
                n && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidArray"])(n) && this.events.emit("accountsChanged", n.map(ye));
            } else if (a.name === "chainChanged") {
                const n = i.chainId, c = i.event.data, o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])(n), h = H(n) !== H(c) ? `${o}:${H(c)}` : n;
                this.onChainChanged({
                    currentCaipChainId: h
                });
            } else this.events.emit(a.name, a.data);
            this.events.emit("session_event", e);
        }), this.client.on("session_update", ({ topic: e, params: s })=>{
            var i, r;
            if (e !== ((i = this.session) == null ? void 0 : i.topic)) return;
            const { namespaces: a } = s, n = (r = this.client) == null ? void 0 : r.session.get(e);
            this.session = j(S({}, n), {
                namespaces: a
            }), this.onSessionUpdate(), this.events.emit("session_update", {
                topic: e,
                params: s
            });
        }), this.client.on("session_delete", async (e)=>{
            var s;
            e.topic === ((s = this.session) == null ? void 0 : s.topic) && (await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", j(S({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), {
                data: e.topic
            })));
        }), this.on(F.DEFAULT_CHAIN_CHANGED, (e)=>{
            this.onChainChanged(j(S({}, e), {
                internal: !0
            }));
        });
    }
    getProvider(e) {
        return this.rpcProviders[e] || this.rpcProviders[he];
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach((e)=>{
            var s;
            this.getProvider(e).updateNamespace((s = this.session) == null ? void 0 : s.namespaces[e]);
        });
    }
    setNamespaces(e) {
        const { namespaces: s = {}, optionalNamespaces: i = {}, sessionProperties: r, scopedProperties: a } = e;
        this.optionalNamespaces = C(s, i), this.sessionProperties = r, this.scopedProperties = a;
    }
    validateChain(e) {
        const [s, i] = e?.split(":") || [
            "",
            ""
        ];
        if (!this.namespaces || !Object.keys(this.namespaces).length) return [
            s,
            i
        ];
        if (s && !Object.keys(this.namespaces || {}).map((n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])(n)).includes(s)) throw new Error(`Namespace '${s}' is not configured. Please call connect() first with namespace config.`);
        if (s && i) return [
            s,
            i
        ];
        const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNamespaceKey"])(Object.keys(this.namespaces)[0]), a = this.rpcProviders[r].getDefaultChain();
        return [
            r,
            a
        ];
    }
    async requestAccounts() {
        const [e] = this.validateChain();
        return await this.getProvider(e).requestAccounts();
    }
    async onChainChanged({ currentCaipChainId: e, previousCaipChainId: s, internal: i = !1 }) {
        if (!this.namespaces) return;
        const [r, a] = this.validateChain(e);
        a && (this.updateNamespaceChain(r, a), i ? (this.events.emit("chainChanged", a), this.emitAccountsChangedOnChainChange({
            namespace: r,
            currentCaipChainId: e,
            previousCaipChainId: s
        })) : this.getProvider(r).setDefaultChain(a), await this.persist("namespaces", this.namespaces));
    }
    emitAccountsChangedOnChainChange({ namespace: e, currentCaipChainId: s, previousCaipChainId: i }) {
        var r, a;
        try {
            if (i === s) return;
            const n = (a = (r = this.session) == null ? void 0 : r.namespaces[e]) == null ? void 0 : a.accounts;
            if (!n) return;
            const c = n.filter((o)=>o.includes(`${s}:`)).map(ye);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidArray"])(c)) return;
            this.events.emit("accountsChanged", c);
        } catch (n) {
            this.logger.warn(n, "Failed to emit accountsChanged on chain change");
        }
    }
    updateNamespaceChain(e, s) {
        if (!this.namespaces) return;
        const i = this.namespaces[e] ? e : `${e}:${s}`, r = {
            chains: [],
            methods: [],
            events: [],
            defaultChain: s
        };
        this.namespaces[i] ? this.namespaces[i] && (this.namespaces[i].defaultChain = s) : this.namespaces[i] = r;
    }
    onConnect() {
        this.createProviders(), this.events.emit("connect", {
            session: this.session
        });
    }
    async cleanup() {
        this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, this.cleanupPendingPairings({
            deletePairings: !0
        }), await this.cleanupStorage();
    }
    async persist(e, s) {
        var i;
        const r = ((i = this.session) == null ? void 0 : i.topic) || "";
        await this.client.core.storage.setItem(`${A}/${e}${r}`, s);
    }
    async getFromStore(e) {
        var s;
        const i = ((s = this.session) == null ? void 0 : s.topic) || "";
        return await this.client.core.storage.getItem(`${A}/${e}${i}`);
    }
    async deleteFromStore(e) {
        var s;
        const i = ((s = this.session) == null ? void 0 : s.topic) || "";
        await this.client.core.storage.removeItem(`${A}/${e}${i}`);
    }
    async cleanupStorage() {
        var e;
        try {
            if (((e = this.client) == null ? void 0 : e.session.length) > 0) return;
            const s = await this.client.core.storage.getKeys();
            for (const i of s)i.startsWith(A) && await this.client.core.storage.removeItem(i);
        } catch (s) {
            this.logger.warn(s, "Failed to cleanup storage");
        }
    }
}
const ns = N;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/@walletconnect/ethereum-provider/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EthereumProvider",
    ()=>G,
    "OPTIONAL_EVENTS",
    ()=>P,
    "OPTIONAL_METHODS",
    ()=>A,
    "REQUIRED_EVENTS",
    ()=>C,
    "REQUIRED_METHODS",
    ()=>f,
    "default",
    ()=>E
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/@walletconnect/utils/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/@walletconnect/universal-provider/dist/index.js [app-ssr] (ecmascript)");
;
;
;
const $ = "wc", k = "ethereum_provider", q = `${$}@2:${k}:`, U = "https://rpc.walletconnect.org/v1/", f = [
    "eth_sendTransaction",
    "personal_sign"
], A = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
    "wallet_sendCalls",
    "wallet_getCapabilities",
    "wallet_getCallsStatus",
    "wallet_showCallsStatus"
], C = [
    "chainChanged",
    "accountsChanged"
], P = [
    "chainChanged",
    "accountsChanged",
    "message",
    "disconnect",
    "connect"
], D = async ()=>{
    const { createAppKit: s } = await __turbopack_context__.A("[project]/Desktop/pincher/node_modules/@privy-io/react-auth/node_modules/@reown/appkit/dist/esm/exports/core.js [app-ssr] (ecmascript, async loader)");
    return s;
};
var z = Object.defineProperty, L = Object.defineProperties, K = Object.getOwnPropertyDescriptors, M = Object.getOwnPropertySymbols, Q = Object.prototype.hasOwnProperty, V = Object.prototype.propertyIsEnumerable, _ = (s, t, e)=>t in s ? z(s, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : s[t] = e, v = (s, t)=>{
    for(var e in t || (t = {}))Q.call(t, e) && _(s, e, t[e]);
    if (M) for (var e of M(t))V.call(t, e) && _(s, e, t[e]);
    return s;
}, w = (s, t)=>L(s, K(t)), p = (s, t, e)=>_(s, typeof t != "symbol" ? t + "" : t, e);
function I(s) {
    return Number(s[0].split(":")[1]);
}
function b(s) {
    return `0x${s.toString(16)}`;
}
function F(s) {
    const { chains: t, optionalChains: e, methods: n, optionalMethods: i, events: a, optionalEvents: r, rpcMap: u } = s;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidArray"])(t)) throw new Error("Invalid chains");
    const c = {
        chains: t,
        methods: n || f,
        events: a || C,
        rpcMap: v({}, t.length ? {
            [I(t)]: u[I(t)]
        } : {})
    }, l = a?.filter((d)=>!C.includes(d)), o = n?.filter((d)=>!f.includes(d));
    if (!e && !r && !i && !(l != null && l.length) && !(o != null && o.length)) return {
        required: t.length ? c : void 0
    };
    const m = l?.length && o?.length || !e, h = {
        chains: [
            ...new Set(m ? c.chains.concat(e || []) : e)
        ],
        methods: [
            ...new Set(c.methods.concat(i != null && i.length ? i : A))
        ],
        events: [
            ...new Set(c.events.concat(r != null && r.length ? r : P))
        ],
        rpcMap: u
    };
    return {
        required: t.length ? c : void 0,
        optional: e.length ? h : void 0
    };
}
class E {
    constructor(){
        p(this, "events", new __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"]), p(this, "namespace", "eip155"), p(this, "accounts", []), p(this, "signer"), p(this, "chainId", 1), p(this, "modal"), p(this, "rpc"), p(this, "STORAGE_KEY", q), p(this, "on", (t, e)=>(this.events.on(t, e), this)), p(this, "once", (t, e)=>(this.events.once(t, e), this)), p(this, "removeListener", (t, e)=>(this.events.removeListener(t, e), this)), p(this, "off", (t, e)=>(this.events.off(t, e), this)), p(this, "parseAccount", (t)=>this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t), this.signer = {}, this.rpc = {};
    }
    static async init(t) {
        const e = new E;
        return await e.initialize(t), e;
    }
    async request(t, e) {
        return await this.signer.request(t, this.formatChainId(this.chainId), e);
    }
    sendAsync(t, e, n) {
        this.signer.sendAsync(t, e, this.formatChainId(this.chainId), n);
    }
    get connected() {
        return this.signer.client ? this.signer.client.core.relayer.connected : !1;
    }
    get connecting() {
        return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
    }
    async enable() {
        return this.session || await this.connect(), await this.request({
            method: "eth_requestAccounts"
        });
    }
    async connect(t) {
        var e;
        if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(t);
        const { required: n, optional: i } = F(this.rpc);
        try {
            const a = await new Promise(async (u, c)=>{
                var l, o;
                this.rpc.showQrModal && ((l = this.modal) == null || l.open(), (o = this.modal) == null || o.subscribeState((h)=>{
                    !h.open && !this.signer.session && (this.signer.abortPairingAttempt(), c(new Error("Connection request reset. Please try again.")));
                }));
                const m = t != null && t.scopedProperties ? {
                    [this.namespace]: t.scopedProperties
                } : void 0;
                await this.signer.connect(w(v({
                    namespaces: v({}, n && {
                        [this.namespace]: n
                    })
                }, i && {
                    optionalNamespaces: {
                        [this.namespace]: i
                    }
                }), {
                    pairingTopic: t?.pairingTopic,
                    scopedProperties: m
                })).then((h)=>{
                    u(h);
                }).catch((h)=>{
                    var d;
                    (d = this.modal) == null || d.showErrorMessage("Unable to connect"), c(new Error(h.message));
                });
            });
            if (!a) return;
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAccountsFromNamespaces"])(a.namespaces, [
                this.namespace
            ]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : r), this.setAccounts(r), this.events.emit("connect", {
                chainId: b(this.chainId)
            });
        } catch (a) {
            throw this.signer.logger.error(a), a;
        } finally{
            (e = this.modal) == null || e.close();
        }
    }
    async authenticate(t, e) {
        var n;
        if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts({
            chains: t?.chains
        });
        try {
            const i = await new Promise(async (r, u)=>{
                var c, l;
                this.rpc.showQrModal && ((c = this.modal) == null || c.open(), (l = this.modal) == null || l.subscribeState((o)=>{
                    !o.open && !this.signer.session && (this.signer.abortPairingAttempt(), u(new Error("Connection request reset. Please try again.")));
                })), await this.signer.authenticate(w(v({}, t), {
                    chains: this.rpc.chains
                }), e).then((o)=>{
                    r(o);
                }).catch((o)=>{
                    var m;
                    (m = this.modal) == null || m.showErrorMessage("Unable to connect"), u(new Error(o.message));
                });
            }), a = i.session;
            if (a) {
                const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAccountsFromNamespaces"])(a.namespaces, [
                    this.namespace
                ]);
                this.setChainIds(this.rpc.chains.length ? this.rpc.chains : r), this.setAccounts(r), this.events.emit("connect", {
                    chainId: b(this.chainId)
                });
            }
            return i;
        } catch (i) {
            throw this.signer.logger.error(i), i;
        } finally{
            (n = this.modal) == null || n.close();
        }
    }
    async disconnect() {
        this.session && await this.signer.disconnect(), this.reset();
    }
    get isWalletConnect() {
        return !0;
    }
    get session() {
        return this.signer.session;
    }
    registerEventListeners() {
        this.signer.on("session_event", (t)=>{
            const { params: e } = t, { event: n } = e;
            n.name === "accountsChanged" ? (this.accounts = this.parseAccounts(n.data), this.events.emit("accountsChanged", this.accounts)) : n.name === "chainChanged" ? this.setChainId(this.formatChainId(n.data)) : this.events.emit(n.name, n.data), this.events.emit("session_event", t);
        }), this.signer.on("accountsChanged", (t)=>{
            this.accounts = this.parseAccounts(t), this.events.emit("accountsChanged", this.accounts);
        }), this.signer.on("chainChanged", (t)=>{
            const e = parseInt(t);
            this.chainId = e, this.events.emit("chainChanged", b(this.chainId)), this.persist();
        }), this.signer.on("session_update", (t)=>{
            this.events.emit("session_update", t);
        }), this.signer.on("session_delete", (t)=>{
            this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", w(v({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSdkError"])("USER_DISCONNECTED")), {
                data: t.topic,
                name: "USER_DISCONNECTED"
            }));
        }), this.signer.on("display_uri", (t)=>{
            this.events.emit("display_uri", t);
        });
    }
    switchEthereumChain(t) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [
                {
                    chainId: t.toString(16)
                }
            ]
        });
    }
    isCompatibleChainId(t) {
        return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1;
    }
    formatChainId(t) {
        return `${this.namespace}:${t}`;
    }
    parseChainId(t) {
        return Number(t.split(":")[1]);
    }
    setChainIds(t) {
        const e = t.filter((n)=>this.isCompatibleChainId(n)).map((n)=>this.parseChainId(n));
        e.length && (this.chainId = e[0], this.events.emit("chainChanged", b(this.chainId)), this.persist());
    }
    setChainId(t) {
        if (this.isCompatibleChainId(t)) {
            const e = this.parseChainId(t);
            this.chainId = e, this.switchEthereumChain(e);
        }
    }
    parseAccountId(t) {
        const [e, n, i] = t.split(":");
        return {
            chainId: `${e}:${n}`,
            address: i
        };
    }
    setAccounts(t) {
        this.accounts = t.filter((e)=>this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map((e)=>this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts);
    }
    getRpcConfig(t) {
        var e, n;
        const i = (e = t?.chains) != null ? e : [], a = (n = t?.optionalChains) != null ? n : [], r = i.concat(a);
        if (!r.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
        const u = i.length ? t?.methods || f : [], c = i.length ? t?.events || C : [], l = t?.optionalMethods || [], o = t?.optionalEvents || [], m = t?.rpcMap || this.buildRpcMap(r, t.projectId), h = t?.qrModalOptions || void 0;
        return {
            chains: i?.map((d)=>this.formatChainId(d)),
            optionalChains: a.map((d)=>this.formatChainId(d)),
            methods: u,
            events: c,
            optionalMethods: l,
            optionalEvents: o,
            rpcMap: m,
            showQrModal: !!(t != null && t.showQrModal),
            qrModalOptions: h,
            projectId: t.projectId,
            metadata: t.metadata
        };
    }
    buildRpcMap(t, e) {
        const n = {};
        return t.forEach((i)=>{
            n[i] = this.getRpcUrl(i, e);
        }), n;
    }
    async initialize(t) {
        var e;
        if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? I(this.rpc.chains) : I(this.rpc.optionalChains), this.signer = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$universal$2d$provider$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniversalProvider"].init({
            projectId: this.rpc.projectId,
            metadata: this.rpc.metadata,
            disableProviderPing: t.disableProviderPing,
            relayUrl: t.relayUrl,
            storage: t.storage,
            storageOptions: t.storageOptions,
            customStoragePrefix: t.customStoragePrefix,
            telemetryEnabled: t.telemetryEnabled,
            logger: t.logger
        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
            let n;
            try {
                const i = await D(), { convertWCMToAppKitOptions: a } = await Promise.resolve().then(function() {
                    return nt;
                }), r = a(w(v({}, this.rpc.qrModalOptions), {
                    chains: [
                        ...new Set([
                            ...this.rpc.chains,
                            ...this.rpc.optionalChains
                        ])
                    ],
                    metadata: this.rpc.metadata,
                    projectId: this.rpc.projectId
                }));
                if (!r.networks.length) throw new Error("No networks found for WalletConnect\xB7");
                n = i(w(v({}, r), {
                    universalProvider: this.signer,
                    manualWCControl: !0,
                    enableMobileFullScreen: ((e = this.rpc.qrModalOptions) == null ? void 0 : e.enableMobileFullScreen) === !0
                }));
            } catch (i) {
                throw console.warn(i), new Error("To use QR modal, please install @reown/appkit package");
            }
            if (n) try {
                this.modal = n;
            } catch (i) {
                throw this.signer.logger.error(i), new Error("Could not generate WalletConnectModal Instance");
            }
        }
    }
    loadConnectOpts(t) {
        if (!t) return;
        const { chains: e, optionalChains: n, rpcMap: i } = t;
        e && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidArray"])(e) && (this.rpc.chains = e.map((a)=>this.formatChainId(a)), e.forEach((a)=>{
            this.rpc.rpcMap[a] = i?.[a] || this.getRpcUrl(a);
        })), n && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pincher$2f$node_modules$2f40$privy$2d$io$2f$react$2d$auth$2f$node_modules$2f40$walletconnect$2f$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidArray"])(n) && (this.rpc.optionalChains = [], this.rpc.optionalChains = n?.map((a)=>this.formatChainId(a)), n.forEach((a)=>{
            this.rpc.rpcMap[a] = i?.[a] || this.getRpcUrl(a);
        }));
    }
    getRpcUrl(t, e) {
        var n;
        return ((n = this.rpc.rpcMap) == null ? void 0 : n[t]) || `${U}?chainId=eip155:${t}&projectId=${e || this.rpc.projectId}`;
    }
    async loadPersistedSession() {
        if (this.session) try {
            const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), e = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
            this.setChainIds(t ? [
                this.formatChainId(t)
            ] : e?.accounts), this.setAccounts(e?.accounts);
        } catch (t) {
            this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(t), await this.disconnect().catch((e)=>this.signer.logger.warn(e));
        }
    }
    reset() {
        this.chainId = 1, this.accounts = [];
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
    }
    parseAccounts(t) {
        return typeof t == "string" || t instanceof String ? [
            this.parseAccount(t)
        ] : t.map((e)=>this.parseAccount(e));
    }
}
const G = E;
var Y = Object.defineProperty, H = Object.defineProperties, B = Object.getOwnPropertyDescriptors, S = Object.getOwnPropertySymbols, X = Object.prototype.hasOwnProperty, J = Object.prototype.propertyIsEnumerable, T = (s, t, e)=>t in s ? Y(s, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
    }) : s[t] = e, R = (s, t)=>{
    for(var e in t || (t = {}))X.call(t, e) && T(s, e, t[e]);
    if (S) for (var e of S(t))J.call(t, e) && T(s, e, t[e]);
    return s;
}, Z = (s, t)=>H(s, B(t));
function tt(s) {
    if (s) return {
        "--w3m-font-family": s["--wcm-font-family"],
        "--w3m-accent": s["--wcm-accent-color"],
        "--w3m-color-mix": s["--wcm-background-color"],
        "--w3m-z-index": s["--wcm-z-index"] ? Number(s["--wcm-z-index"]) : void 0,
        "--w3m-qr-color": s["--wcm-accent-color"],
        "--w3m-font-size-master": s["--wcm-text-medium-regular-size"],
        "--w3m-border-radius-master": s["--wcm-container-border-radius"],
        "--w3m-color-mix-strength": 0
    };
}
const et = (s)=>{
    const [t, e] = s.split(":");
    return W({
        id: e,
        caipNetworkId: s,
        chainNamespace: t,
        name: "",
        nativeCurrency: {
            name: "",
            symbol: "",
            decimals: 8
        },
        rpcUrls: {
            default: {
                http: [
                    "https://rpc.walletconnect.org/v1"
                ]
            }
        }
    });
};
function st(s) {
    var t, e, n, i, a, r, u;
    const c = (t = s.chains) == null ? void 0 : t.map(et).filter(Boolean);
    if (c.length === 0) throw new Error("At least one chain must be specified");
    const l = c.find((m)=>{
        var h;
        return m.id === ((h = s.defaultChain) == null ? void 0 : h.id);
    }), o = {
        projectId: s.projectId,
        networks: c,
        themeMode: s.themeMode,
        themeVariables: tt(s.themeVariables),
        chainImages: s.chainImages,
        connectorImages: s.walletImages,
        defaultNetwork: l,
        metadata: Z(R({}, s.metadata), {
            name: ((e = s.metadata) == null ? void 0 : e.name) || "WalletConnect",
            description: ((n = s.metadata) == null ? void 0 : n.description) || "Connect to WalletConnect-compatible wallets",
            url: ((i = s.metadata) == null ? void 0 : i.url) || "https://walletconnect.org",
            icons: ((a = s.metadata) == null ? void 0 : a.icons) || [
                "https://walletconnect.org/walletconnect-logo.png"
            ]
        }),
        showWallets: !0,
        featuredWalletIds: s.explorerRecommendedWalletIds === "NONE" ? [] : Array.isArray(s.explorerRecommendedWalletIds) ? s.explorerRecommendedWalletIds : [],
        excludeWalletIds: s.explorerExcludedWalletIds === "ALL" ? [] : Array.isArray(s.explorerExcludedWalletIds) ? s.explorerExcludedWalletIds : [],
        enableEIP6963: !1,
        enableInjected: !1,
        enableCoinbase: !0,
        enableWalletConnect: !0,
        features: {
            email: !1,
            socials: !1
        }
    };
    if ((r = s.mobileWallets) != null && r.length || (u = s.desktopWallets) != null && u.length) {
        const m = [
            ...(s.mobileWallets || []).map((g)=>({
                    id: g.id,
                    name: g.name,
                    links: g.links
                })),
            ...(s.desktopWallets || []).map((g)=>({
                    id: g.id,
                    name: g.name,
                    links: {
                        native: g.links.native,
                        universal: g.links.universal
                    }
                }))
        ], h = [
            ...o.featuredWalletIds || [],
            ...o.excludeWalletIds || []
        ], d = m.filter((g)=>!h.includes(g.id));
        d.length && (o.customWallets = d);
    }
    return o;
}
function W(s) {
    return R({
        formatters: void 0,
        fees: void 0,
        serializers: void 0
    }, s);
}
var nt = Object.freeze({
    __proto__: null,
    convertWCMToAppKitOptions: st,
    defineChain: W
});
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/pincher/node_modules/@privy-io/urls/dist/esm/construct-url.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "constructURL",
    ()=>e
]);
const e = ({ origin: e, path: t, query: r = {}, hash: n = {} })=>{
    let a = new URL(t, e.endsWith("/") ? e : `${e}/`);
    for (let [e, t] of Object.entries(r))void 0 !== t && a.searchParams.set(e, t);
    let h = Object.entries(n);
    if (h.length > 0) {
        let e = new URLSearchParams;
        for (let [t, r] of h)void 0 !== r && e.append(t, r);
        a.hash = e.toString();
    }
    return a.href;
};
;
}),
];

//# sourceMappingURL=cb648_%40privy-io_d1a17f59._.js.map