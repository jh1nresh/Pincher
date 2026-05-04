# Pincher

Pincher is a Telegram-first carpool matcher agent for crypto conference side events.

The current MVP is built for **Consensus Miami, May 4-8**. Attendees can create ride rooms in a Telegram group, join people heading to the same Luma side event, coordinate in a Telegram topic, and split the ride manually after one person calls Uber.

![Pincher logo](/public/pincher-agent-logo.png)

## What It Does

- Creates carpool rooms from the Consensus venue to side events.
- Matches riders by destination and departure time.
- Tracks who is waiting, who joined, and who will call Uber.
- Opens a Telegram Forum Topic for each ride when the group supports topics.
- Supports custom events that are not in the built-in Luma list.
- Lets organizers or admins close completed rides with `/close <id>`.
- Auto-closes stale rides after the departure window when the bot receives activity.

Pincher does **not** call Uber, custody funds, escrow USDC, or verify chain transactions in this MVP. Payment is intentionally manual: the riders coordinate in the topic and settle with USDC, Venmo, Zelle, cash, or whatever works for them.

## MVP Flow

1. Someone creates a ride:

   ```text
   /ride coinbase dinner 5/4 8:00
   /ride closing dinner 5/8 7:30
   ```

2. Pincher posts the ride room with Join / Leave / Uber caller actions.
3. If Telegram Forum Topics are enabled, Pincher opens a topic for that ride.
4. Riders join until the group has enough people.
5. One person calls Uber.
6. The group settles payment manually.
7. The creator, Uber caller, or group admin closes the ride:

   ```text
   /close <id>
   ```

## Telegram Commands

```text
/start
Show the bot help message.

/ride <event or destination> <time>
Create a ride room. Known side events are matched automatically; unknown events become custom rides.

/events
List known Consensus side events from the Luma seed.

/rides
List open ride rooms.

/join <id>
Join a ride room.

/leave <id>
Leave a ride room.

/payer <id>
Mark yourself as the person calling Uber.

/paid <id> [txhash]
Record that a rider paid. The tx hash is optional and is only a note, not chain verification.

/close <id>
Close a completed ride. Allowed for the ride creator, Uber caller, or Telegram group admins.
```

## Telegram Group Setup

For the best MVP test:

1. Create a Telegram group for Consensus rides.
2. Convert it to a supergroup if Telegram asks.
3. Enable **Topics**.
4. Add the Pincher bot.
5. Make the bot an admin.
6. Give it permission to **Manage Topics**.

If topics are not enabled or the bot does not have topic permissions, Pincher still works. It will post ride cards in the main group instead of creating per-ride topics.

## Do Users Need Accounts?

No. For the Consensus MVP, Telegram identity is enough.

Pincher uses Telegram user IDs, usernames, and display names to track ride membership. Full registration, wallet login, reputation, and payment automation should wait until there is real ride demand.

Add registration later only if the product needs:

- Reputation or trust scores.
- Spam prevention and user blocking.
- Stored wallet addresses.
- Deposits, escrow, or automated splits.
- Cross-group rider history.

## Tech Stack

- **App**: Next.js 16 App Router, React 19, Tailwind CSS.
- **Bot**: Telegram Bot API via `app/api/telegram/webhook/route.ts`.
- **Database**: Supabase Postgres.
- **Hosting**: Railway.
- **Auth / wallet**: Privy exists in the web app, but it is not required for the Telegram MVP.
- **Payments**: Manual settlement; no escrow or chain verification in the MVP.

## Environment Variables

Required for the Telegram MVP:

```env
TELEGRAM_BOT_TOKEN=...

NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
```

Optional web app / legacy integrations:

```env
NEXT_PUBLIC_PRIVY_APP_ID=...
NEXT_PUBLIC_PRIVY_CLIENT_ID=...
```

Do not expose `SUPABASE_SERVICE_ROLE_KEY` in client-side code. It is only for server routes.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build check:

```bash
npm run build
```

Webhook smoke test:

```bash
curl -X POST http://localhost:3000/api/telegram/webhook \
  -H "content-type: application/json" \
  -d '{}'
```

Expected response:

```json
{"ok":true,"ignored":true}
```

## Supabase

The bot needs these tables:

- `trip_rooms`
- `trip_passengers`
- `payment_confirmations`

Run the SQL files in `supabase/migrations` against the Supabase project before connecting the Telegram webhook.

For the current bot MVP, `trip_rooms.payment_method_info` is also used to store lightweight Telegram metadata, such as topic IDs and close metadata, so no extra topic table is required.

## Railway Deployment

Production service:

```text
https://pincher-production.up.railway.app
```

Telegram webhook:

```text
https://pincher-production.up.railway.app/api/telegram/webhook
```

Set the webhook with BotFather token:

```bash
curl -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/setWebhook" \
  -H "content-type: application/json" \
  -d '{"url":"https://pincher-production.up.railway.app/api/telegram/webhook"}'
```

Production smoke test:

```bash
curl -X POST https://pincher-production.up.railway.app/api/telegram/webhook \
  -H "content-type: application/json" \
  -d '{}'
```

## MVP Success Metric

For Consensus Miami, the goal is simple:

> Between May 4 and May 8, at least 3-5 real ride groups should form through the Telegram bot.

If that happens, the next product step is not more UI. It is trust and coordination: better ride lifecycle, better topic management, optional wallet collection, and lightweight reputation.

## License

MIT.
