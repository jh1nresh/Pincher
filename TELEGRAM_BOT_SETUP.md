# Pincher Telegram Bot MVP

Bot-only validation flow for Consensus Miami ride groups.

## Environment

```env
TELEGRAM_BOT_TOKEN=123:abc
NEXT_PUBLIC_SUPABASE_URL=https://...
SUPABASE_SERVICE_ROLE_KEY=...
```

`SUPABASE_SERVICE_ROLE_KEY` is recommended because Telegram users are not Privy-authenticated. If it is missing, the webhook falls back to `NEXT_PUBLIC_SUPABASE_ANON_KEY`, but RLS may block writes.

## Webhook

Deploy the Next app to HTTPS, then point Telegram at the webhook:

```bash
curl -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{"url":"https://your-domain.com/api/telegram/webhook"}'
```

## Group Commands

```text
/ride sui 6:30
/rides
/join <ride_id>
/leave <ride_id>
/payer <ride_id>
/paid <ride_id> <tx_hash>
```

`/ride` creates a ride group using the Luma side-event seed for May 4-7. The bot message includes buttons for Join, Leave, I'll call Uber, and Paid.

## Data Model

No new tables are required for the bot MVP:

- `trip_rooms` stores ride groups.
- `trip_passengers` stores who is waiting in each ride.
- `payment_confirmations` stores optional USDC transaction hashes when that table is available.

Anyone waiting for a ride is represented by a `trip_passengers` row attached to an open Consensus `trip_rooms` record.
