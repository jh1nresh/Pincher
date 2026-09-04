# Pincher 校園合乘

Pincher 目前只做一個微信小程序試點：給受邀的北京大學口腔相關學生，從北大醫學部宿舍前往北大醫院時尋找同行者。

```text
手機號登入 → 固定路線 → 發起／加入拼車 → 行程房間 → 協調集合位置
```

## 現在有什麼

- 固定路線：`北大醫學部宿舍 → 北大醫院`
- 受邀學生登入流程與本地 demo 資料
- 查看推薦班次、發起拼車、加入、退出
- 每個班次的行程房間與快速集合消息
- 我的行程、歷史狀態與登出
- 手機號碼不對其他乘客公開

目前資料保存在本地，登入頁也是流程展示；還沒有真實短信、微信身份綁定、後端服務、支付或司機接單。

## 預覽小程序

1. 開啟微信開發者工具，選擇「導入項目」。
2. 將 `miniprogram/` 設為項目目錄。
3. 使用測試 AppID 或本地預覽。
4. 依序測試登入、推薦班次、發起／加入拼車、行程房間、集合消息、我的行程和登出。

## 正式接入順序

1. 註冊小程序並配置 AppID。
2. 部署公開 HTTPS API，將域名加入小程序 request 合法域名。
3. 在服務端完成微信 session exchange 和手機 OTP 驗證。
4. 將已驗證身份映射到 `auth.users.id`，簽發短期應用 token。
5. 審查並套用 `supabase/migrations/20260904_pku_carpool_foundation.sql`。
6. 實作建立、加入、退出拼車與行程房間消息 API；服務端重新檢查身份、座位、路線、時間和重複加入。
7. 加入邀請碼／人工審核、隱私政策、使用者協議、舉報和管理員操作記錄。
8. 由法務確認北京私人小客車合乘規則與小程序服務類目，再決定是否接支付。

## 收費邊界

第一版只展示預估分攤額，實際車費由同行者自行協調；平台不代收、不托管、不抽成。日後若接微信支付，仍需確認合資格主體、服務類目、商戶資格和相關合規要求。

## Supabase

`supabase/migrations/20260904_pku_carpool_foundation.sql` 是校園拼車的資料表與 verified-member RLS 基礎，只是待審 migration，尚未代表已修改線上資料。

正式後端應由服務端保存 Supabase service-role key、微信 AppSecret、短信憑證和支付密鑰；這些內容不可放進 `miniprogram/`。

## Repository layout

| 路徑 | 用途 |
| --- | --- |
| `miniprogram/` | 微信小程序試點與本地 demo |
| `supabase/migrations/20260904_pku_carpool_foundation.sql` | 校園拼車資料表與 RLS 基礎 |
| `scripts/check-miniprogram.mjs` | 小程序結構和 JavaScript 語法檢查 |

## Checks

```bash
node scripts/check-miniprogram.mjs
find miniprogram -name '*.js' -print0 | xargs -0 -n1 node --check
```

本地預覽不代表已完成微信審核、真實 API、Supabase 線上套用、支付資格或正式部署。

## License

MIT
