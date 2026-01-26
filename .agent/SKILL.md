# Pincher 專案管理

> Web3 共乘協議 — UCI/Irvine 學生專用

---

## 📊 PM (專案管理)

### 里程碑

| 階段 | 目標 | 狀態 | 預計完成 |
|------|------|------|----------|
| **MVP** | 基本共乘功能 | 🟡 90% | 2025-01-27 |
| **Beta** | 校園內測 | ⬜ 0% | 2025-02-15 |
| **Launch** | 正式上線 | ⬜ 0% | 2025-03 |

### Sprint 當前 (2025-01-25 ~ 01-31)

| 優先級 | 任務 | 負責 | 狀態 |
|--------|------|------|------|
| P0 | PaymentSelect 接線 | Dev | ✅ |
| P0 | 分享功能 (拉人) | Dev | ✅ |
| P0 | Landing 優化 (UCI-LAX) | Dev | ✅ |
| P0 | 跑 Supabase migration | Dev | ⬜ |
| P1 | 測試完整 flow | QA | ⬜ |
| P2 | Paymaster 整合 | Dev | ⬜ |

### Backlog

- [ ] Push 通知
- [ ] 路線匹配算法優化
- [ ] iOS TestFlight
- [ ] 用戶 referral 系統
- [ ] Analytics 埋點

---

## 💻 開發 (Development)

### 環境設置

```bash
cd /Users/jhinresh/Desktop/pincher

# 安裝依賴
npm install

# 環境變數 (.env.local)
NEXT_PUBLIC_SUPABASE_URL=xxx
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
NEXT_PUBLIC_PRIVY_APP_ID=xxx
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=xxx
```

### 常用指令

```bash
# 開發
npm run dev              # 啟動 dev server (localhost:3000)

# 檢查
npx tsc --noEmit         # TypeScript 檢查
npm run lint:check       # ESLint
npm run format:check     # Prettier

# 資料庫
supabase db push         # 跑 migrations
supabase db reset        # 重置 DB

# 合約
forge build              # 編譯合約
forge test -vv           # 跑測試
forge script script/Deploy.s.sol --rpc-url base-sepolia --broadcast
```

### 專案結構

```
pincher/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing
│   ├── trips/page.tsx     # 🔥 主 Dashboard (所有 views)
│   ├── profile/           # 用戶資料
│   └── api/               # API routes
├── components/dashboard/views/
│   ├── Search.tsx         # 選點搜索
│   ├── NoMatches.tsx      # 空狀態
│   ├── SyncDeck.tsx       # 匹配卡片
│   ├── Coordination.tsx   # 聊天協調
│   ├── PaymentSelect.tsx  # 支付選擇 ⭐
│   ├── Handshake.tsx      # Stripe/USDC
│   ├── ActiveTrip.tsx     # 進行中
│   └── Profile.tsx        # 個人資料
├── lib/
│   ├── constants.ts       # HOTZONES 定義
│   ├── types.ts           # TypeScript 類型
│   └── supabase.ts        # DB client
├── contracts/
│   └── PincherEscrow.sol  # USDC 託管
└── supabase/migrations/   # DB schema
```

### Git Flow

```bash
# 功能開發
git checkout -b feat/xxx
# ... 改動 ...
git add -A && git commit -m "feat: xxx"
git push origin feat/xxx

# 主分支
git checkout master
git merge feat/xxx
git push
```

### 當前分支狀態

```bash
git log --oneline -5
# be0b1e7 feat: unify hotzones, add toast notifications, empty state UI
# 000dddc profile duplicate error
# 04f2b2d feat: complete supabase integration
# e72bdf9 feat: integrate micropayment dashboard
# f87b9f9 feat: add global Error Boundary
```

---

## 🧪 測試 (Testing)

### 測試環境

| 環境 | URL | 用途 |
|------|-----|------|
| Local | localhost:3000 | 開發 |
| Preview | Vercel Preview | PR 預覽 |
| Prod | pincher.app | 正式 |

### 手動測試 Checklist

#### 登入流程
- [ ] Landing page 載入正常
- [ ] 點擊「Get Started」→ Privy modal 彈出
- [ ] Email 登入成功
- [ ] Wallet 登入成功
- [ ] 登入後跳轉 /trips

#### 搜索流程
- [ ] 選擇 Origin → 自動切換到 Destination
- [ ] 選擇 Destination → 兩個都有選
- [ ] 點擊「Find Rides」→ loading 動畫
- [ ] **有匹配** → 進入 SyncDeck
- [ ] **無匹配** → 進入 NoMatches 空狀態

#### Host 流程
- [ ] 點擊「Host a Ride」→ 顯示車輛表單
- [ ] 填寫車牌、車型、顏色
- [ ] 確認 → 創建 trip room
- [ ] 進入等待頁面
- [ ] (模擬) 有人加入 → 跳轉協調頁

#### 加入流程
- [ ] SyncDeck 左右滑動正常
- [ ] 點擊「Join Mesh」→ 進入 Handshake
- [ ] Stripe 支付流程 (或 demo mode)
- [ ] 支付成功 → PaymentSuccess → Coordination

#### 支付流程 (新)
- [ ] PaymentSelect 顯示 Venmo/Zelle/USDC 選項
- [ ] 選擇 Venmo → 顯示 payer handle
- [ ] 選擇 Zelle → 顯示 payer handle
- [ ] 選擇 USDC → 連接錢包提示

#### Profile
- [ ] 顯示用戶名
- [ ] 編輯 Venmo handle
- [ ] 編輯 Zelle handle
- [ ] 保存成功 toast
- [ ] Trip history 顯示正確
- [ ] Logout 正常

### API 驗證

```bash
# Supabase 連線
curl "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/trip_rooms?select=*&limit=1" \
  -H "apikey: $NEXT_PUBLIC_SUPABASE_ANON_KEY"

# 創建測試 trip
curl -X POST "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/trip_rooms" \
  -H "apikey: $NEXT_PUBLIC_SUPABASE_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"creator_id":"test","origin":"UCI","destination":"LAX","status":"open"}'
```

### 合約測試

```bash
cd /Users/jhinresh/Desktop/pincher
forge test -vv

# 特定測試
forge test --match-test testDepositEscrow -vvv
```

---

## 🐛 Issue Tracker

| ID | 問題 | 嚴重度 | 狀態 | 備註 |
|----|------|--------|------|------|
| #1 | ~~hardcode hotSpots~~ | 🟡 | ✅ 已修 | 統一用 HOTZONES |
| #2 | ~~無 error toast~~ | 🟡 | ✅ 已修 | 加 sonner |
| #3 | ~~空狀態缺失~~ | 🟢 | ✅ 已修 | NoMatches.tsx |
| #4 | any 類型過多 | 🟢 | ⬜ 待修 | |
| #5 | ~~PaymentSelect 未接線~~ | 🟡 | ✅ 已修 | 接入主 flow |

---

## 📝 開發日誌

### 2025-01-25
- ✅ 新增 `PaymentSelect.tsx` — Venmo/Zelle/USDC 選擇
- ✅ 更新 `Profile.tsx` — 可編輯 payment handles
- ✅ 新增 migration `20250125_payment_methods.sql`
- ✅ 統一 Hotzones — Search.tsx 用 constants.ts
- ✅ Toast 系統 — sonner
- ✅ 空狀態 — NoMatches.tsx
- ✅ 建立 SKILL.md 工作流

### 2025-01-25 (冷啟動優化)
- ✅ PaymentSelect 接線 — SyncDeck → PaymentSelect → Coordination/Handshake
- ✅ 分享功能 — Hosting 頁加入分享按鈕、複製連結、微信分享
- ✅ Join URL — 支援 ?join=tripId 讓分享連結直接加入
- ✅ Landing 優化 — UCI-LAX 熱門路線展示、中文 copy、價格對比

---

## 🔗 資源

| 服務 | Dashboard |
|------|-----------|
| Supabase | https://supabase.com/dashboard |
| Privy | https://dashboard.privy.io |
| Stripe | https://dashboard.stripe.com |
| Vercel | https://vercel.com/dashboard |
| Base Sepolia | https://sepolia.basescan.org |
