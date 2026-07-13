# Pincher Telegram Bot MVP

Bot-only validation flow for Consensus Miami ride groups.

> The bundled Consensus May 2026 catalog is historical. Use this guide to validate the infrastructure in a test group, but do not invite riders to known-event rooms until the event catalog and date behavior are refreshed. A custom future destination can be used for an isolated test.

## Environment

```env
TELEGRAM_BOT_TOKEN=123:abc
TELEGRAM_WEBHOOK_SECRET=replace-with-a-private-webhook-secret
NEXT_PUBLIC_SUPABASE_URL=https://...
SUPABASE_SERVICE_ROLE_KEY=...
```

All four values are required for the Telegram bot. `SUPABASE_SERVICE_ROLE_KEY` must stay server-side because Telegram users are not Supabase-authenticated and the documented RLS policies block anonymous writes.

For a fresh Supabase project, run the exact Telegram migration subset documented in [README.md](README.md#fresh-supabase-setup-for-the-telegram-bot). Do not run every historical migration.

## Webhook

Deploy the Next app to HTTPS, then point Telegram at the webhook:

```bash
export APP_BASE_URL=https://your-domain.example

curl -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/setWebhook" \
  -H "Content-Type: application/json" \
  -d "{\"url\":\"$APP_BASE_URL/api/telegram/webhook\",\"secret_token\":\"$TELEGRAM_WEBHOOK_SECRET\"}"
```

The webhook rejects requests that do not include the matching `X-Telegram-Bot-Api-Secret-Token` header. Run the command above only when you are ready to replace the bot's active webhook target.

## Group Commands

```text
/ride
/ride <event_keyword> <time>
/events
/rides
/join <ride_id>
/leave <ride_id>
/payer <ride_id>
/paid <ride_id> [tx_hash]
/close <ride_id>
```

`/ride` shows side event buttons. After a user picks an event, the bot asks them to reply with a leave time. `/events` lists known side events. `/ride <event> <time>` still creates a ride group directly using the Luma side-event seed for May 4-8, or creates a custom destination when the event is unknown.

## Data Model

No extra tables are required for the safe bot MVP setup:

- `trip_rooms` stores ride groups.
- `trip_passengers` stores who is waiting in each ride.
- `/paid` updates `trip_passengers.payment_status`; the optional transaction-hash note is not persisted by the core setup.

Do not apply the historical `20250125_payment_methods.sql` migration without first replacing its public payment-confirmation policies with server-only access.

Anyone waiting for a ride is represented by a `trip_passengers` row attached to an open Consensus `trip_rooms` record.
