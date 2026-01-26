# Pincher 開發工作流

> Web3 共乘協議 — UCI/Irvine 學生專用

## 📍 專案資訊

| 項目 | 值 |
|------|-----|
| **路徑** | `/Users/jhinresh/Desktop/pincher` |
| **框架** | Next.js 16 + React 19 + Tailwind 4 |
| **鏈** | Base Sepolia |
| **資料庫** | Supabase |
| **認證** | Privy |

---

## 🔧 開發指令

```bash
# 啟動開發服務器
npm run dev

# 檢查類型
npx tsc --noEmit

# Lint
npm run lint:check

# 格式化
npm run format

# 跑 Supabase migrations
supabase db push

# 部署合約 (Foundry)
forge script script/Deploy.s.sol --rpc-url base-sepolia --broadcast
```

---

## 📁 專案結構

```
pincher/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page
│   ├── trips/             # 主功能頁
│   │   ├── page.tsx       # Dashboard controller (所有 views)
│   │   ├── create/        # 創建行程
│   │   └── room/          # 行程房間
│   ├── profile/           # 用戶資料
│   └── api/               # API routes
├── components/
│   └── dashboard/
│       └── views/         # ⭐ 主要 UI 組件
│           ├── Search.tsx
│           ├── SyncDeck.tsx
│           ├── Coordination.tsx
│           ├── PaymentSelect.tsx  # 支付選擇
│           └── ...
├── lib/
│   ├── hotzones.ts        # 🔴 熱門地點定義 (唯一來源)
│   ├── supabase.ts        # DB client
│   └── types.ts           # TypeScript 類型
├── contracts/
│   └── PincherEscrow.sol  # USDC 託管合約
└── supabase/
    └── migrations/        # DB schema
```

---

## 🚦 當前狀態

### ✅ 已完成
- [x] Landing + Privy 登入
- [x] Trip rooms CRUD
- [x] Hotzone 選擇
- [x] 即時聊天 (Supabase Realtime)
- [x] Trip history
- [x] User profile
- [x] Rating 系統
- [x] Escrow 合約 (待部署)
- [x] Stripe 整合
- [x] PaymentSelect 組件 (Venmo/Zelle/USDC)

### 🔄 進行中
- [x] 統一 Hotzones (刪除 hardcode) ✅ 2025-01-25
- [x] Toast 通知系統 (sonner) ✅ 2025-01-25
- [x] 空狀態設計 (NoMatches.tsx) ✅ 2025-01-25
- [ ] PaymentSelect 接線到主 flow

### 📋 待做
- [ ] Paymaster (免 gas)
- [ ] Push 通知
- [ ] 路線匹配算法優化
- [ ] iOS TestFlight

---

## 🧪 測試清單

### 手動測試流程
1. **登入** → Privy modal 正常彈出
2. **選點** → 選 Origin + Destination
3. **搜索** → 有匹配 / 無匹配 兩種情況
4. **創建行程** → Host 模式等待
5. **加入行程** → Sync code 驗證
6. **聊天** → Realtime 收發
7. **支付** → Venmo/Zelle/USDC 三種
8. **完成** → Rating + 歷史記錄

### 驗證指令
```bash
# 檢查 Supabase 連線
curl "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/trip_rooms?select=*&limit=1" \
  -H "apikey: $NEXT_PUBLIC_SUPABASE_ANON_KEY"

# 檢查合約 (如已部署)
cast call $ESCROW_ADDRESS "usdc()" --rpc-url base-sepolia
```

---

## 🐛 已知問題

| 問題 | 嚴重度 | 狀態 |
|------|--------|------|
| Search.tsx 有 hardcode hotSpots | 🟡 中 | ✅ 已修 |
| 無 error toast | 🟡 中 | ✅ 已修 |
| 空狀態 UI 缺失 | 🟢 低 | ✅ 已修 |
| `any` 類型過多 | 🟢 低 | 待修 |

---

## 📝 開發筆記

### 2025-01-25
- 新增 `PaymentSelect.tsx` — Venmo/Zelle 主要，USDC optional
- 更新 `Profile.tsx` — 可編輯 payment handles
- 新增 migration `20250125_payment_methods.sql`
- 更新 `lib/types.ts` — 加 payment 相關類型
- **統一 Hotzones** — Search.tsx 改用 `lib/constants.ts` 的 HOTZONES
- **Toast 系統** — 安裝 sonner，layout.tsx 加 Toaster，Search.tsx 錯誤用 toast
- **空狀態** — 新增 `NoMatches.tsx`，無匹配時顯示「Be the First!」+ Host 按鈕
- 新增 `NO_MATCHES` ViewState

---

## 🔗 資源

- **Supabase Dashboard**: https://supabase.com/dashboard
- **Base Sepolia Explorer**: https://sepolia.basescan.org
- **Privy Dashboard**: https://dashboard.privy.io
- **Stripe Dashboard**: https://dashboard.stripe.com
