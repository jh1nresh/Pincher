# Pincher

Pincher is a Telegram-first carpool matcher agent for crypto conference side events.

The first MVP was built for **Consensus Miami, May 4-8, 2026**. Attendees could create ride rooms in the [Consensus Ride Telegram group](https://t.me/consensus_ride), join people heading to the same Luma side event, coordinate in a Telegram topic, and split the ride manually after one person called Uber.

> **Current status (July 2026):** the bundled Consensus event catalog is historical. The web app and public MCP discovery can be run locally, but known-event ride creation is not ready for a live campaign: those rides still receive May 2026 departure dates and become cleanup-eligible. Refresh the event catalog and date behavior for a chosen conference before inviting riders. Do not silently roll the old events into a new year.

![Pincher logo](/public/pincher-agent-logo.png)

## Quick Start

### Prerequisites

- Node.js 22 or newer. If you use `nvm`, run `nvm use` in the repo.
- npm, included with Node.js.
- Supabase and a public HTTPS URL are needed only for the connected Telegram flow.

Confirm that you are in this repository, not an older standalone Pincher prototype:

```bash
git remote get-url origin
# Expected: https://github.com/JhiNResH/Pincher.git
```

### Preview the web app — no credentials

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). This verifies the landing pages and public MCP metadata. Supabase-backed Web Board actions are not enabled by this credential-free preview.

Run the repeatable build and live-server check:

```bash
npm run check
```

Stop the development server before running this command. `npm run check` builds the current source, starts that production build on an ephemeral local port, probes the key pages and MCP metadata, verifies that protected routes fail closed, then stops the server. It does not contact Telegram, Supabase, or the deployed service.

### Smoke-test public MCP discovery — no credentials

With `npm run dev` running in another terminal:

```bash
npm run smoke:mcp
```

This covers MCP initialization, tool discovery, and static side-event listing only. It does not prove that the historical event dates or database-backed ride tools are usable.

## What It Does

- Creates carpool rooms from the Consensus venue to side events.
- Supports optional custom pickup points for riders starting away from the venue.
- Uses GPS coordinates or map links to avoid matching rides from far-apart pickup points.
- Matches riders by destination and departure time.
- Tracks who is waiting, who joined, and who will call Uber.
- Opens a Telegram Forum Topic for each ride when the group supports topics.
- Understands simple ride requests like "anyone going to Marriott at 6:30?"
- Suggests existing rides that are close in destination and departure time.
- Reminds a ride topic when the group is nearly full.
- Supports custom events that are not in the built-in Luma list.
- Exposes a small MCP endpoint so assistants can list events, find rides, create ride records, join rides, and prepare Base USDC settlement instructions.
- Lets organizers or admins close completed rides with `/close <id>`.
- Auto-closes stale rides after the departure window from bot activity or the cron endpoint.
- Supports optional group allowlisting and basic ride-creation rate limiting.

Pincher does **not** call Uber, custody funds, escrow USDC, or verify chain transactions in this MVP. Payment is intentionally manual: the riders coordinate in the topic and settle with USDC, Venmo, Zelle, cash, or whatever works for them.

## MVP Flow

1. Someone starts with `/ride`, picks a side event button, then replies with a leave time.
2. People can also type natural ride requests:

   ```text
   anyone going to Marriott at 6:30?
   誰要 6:30 去 Marriott
   ```

   Pincher will suggest a matching open ride if one exists, or open a new ride if there is no close match.

3. Power users can also create a ride directly:

   ```text
   /ride coinbase dinner 5/4 8:00
   /ride closing dinner 5/8 7:30
   /ride sui 6:30 from Fontainebleau lobby
   /ride sui 6:30 from 25.7909,-80.1865
   ```

4. Pincher posts the ride room with Join / Leave / Uber caller actions.
5. If Telegram Forum Topics are enabled, Pincher opens a topic for that ride.
6. If two rides look close enough, Pincher suggests joining the existing ride instead of duplicating coordination.
7. Riders join until the group has enough people.
8. One person calls Uber.
9. The group settles payment manually.
10. The creator, Uber caller, or group admin closes the ride:

   ```text
   /close <id>
   ```

## Telegram Commands

```text
/start
Show the bot help message.

/ride
Show side event buttons. After picking an event, reply with a leave time.

/ride <event or destination> <time>
Create a ride room directly. Known side events are matched automatically; unknown events become custom rides.

/ride <event or destination> <time> from <pickup>
Create a ride room from a custom pickup point instead of the Consensus venue.

/ride <event or destination> <time> from <lat,lng>
Create a ride room with GPS pickup matching.

/pickup <id> <pickup name, maps link, or lat,lng>
Add or update GPS pickup for an existing ride. Inside a ride topic, riders can also send a Telegram location.

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

## MCP Agent Endpoint

Pincher exposes a minimal MCP-compatible HTTP endpoint for assistant-driven ride coordination:

```text
POST /api/mcp
GET /api/mcp
```

Supported tools:

```text
list_side_events
find_rides
create_ride
join_ride
get_ride_status
get_settlement
```

This lets ChatGPT, Claude, or another MCP client ask Pincher to find or create ride groups. It does **not** call Uber/Lyft/TADA, custody funds, or move money. `get_settlement` only returns suggested Base USDC split instructions; the actual transfer should be prepared and approved through Base MCP / Base Account by the user.

Optional protection:

```env
MCP_API_KEY=...
```

When `MCP_API_KEY` is set, clients must send:

```text
Authorization: Bearer <MCP_API_KEY>
```

If `MCP_API_KEY` is not set, `/api/mcp` only allows handshake, tool discovery, and `list_side_events`. Ride lookup, ride creation, joining, and settlement tools require the bearer key.

The credential-free MCP smoke command is in [Quick Start](#smoke-test-public-mcp-discovery--no-credentials).

## Telegram Group Setup

Live MVP group:

```text
https://t.me/consensus_ride
```

For the best MVP test:

1. Create a Telegram group for Consensus rides.
2. Convert it to a supergroup if Telegram asks.
3. Enable **Topics**.
4. Add the Pincher bot.
5. Make the bot an admin.
6. Give it permission to **Manage Topics** and **Delete Messages**.

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
- **Identity**: Telegram user identity in the bot; the web UI uses a lightweight local rider ID.
- **Payments**: Manual settlement; no escrow or chain verification in the MVP.
- **Maps**: Coordinate parsing, optional Google Maps geocoding, and haversine distance matching.

## Configuration Modes

Copy the template only when you need a connected surface:

```bash
cp .env.example .env.local
```

| Mode | Required variables | What works |
| --- | --- | --- |
| Static web preview | None | Landing pages and MCP metadata |
| Browser data reads | `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase-backed reads; current Web Board writes still need a real authenticated web identity |
| Telegram rides | `TELEGRAM_BOT_TOKEN`, `TELEGRAM_WEBHOOK_SECRET`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | Authenticated webhook handling and server-side ride writes |
| Full MCP ride tools | `MCP_API_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | Ride lookup and mutations over bearer-authenticated MCP |
| Cleanup worker | `PINCHER_CLEANUP_URL`, `CRON_SECRET` | Authenticated stale-ride cleanup |

Never expose `SUPABASE_SERVICE_ROLE_KEY`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_WEBHOOK_SECRET`, `CRON_SECRET`, or `MCP_API_KEY` to client-side code. MCP accepts secrets only through `Authorization: Bearer ...`; query-string keys are rejected.

Optional controls:

```env
TELEGRAM_ALLOWED_CHAT_IDS=-1001234567890,-1009876543210
GOOGLE_MAPS_API_KEY=...
```

`TELEGRAM_ALLOWED_CHAT_IDS` limits normal bot handling to specific groups after the Telegram webhook has been authenticated. `GOOGLE_MAPS_API_KEY` adds server-side geocoding; explicit coordinates, coordinate-bearing map links, and Telegram locations work without it.

## Fresh Supabase Setup for the Telegram Bot

The migration directory contains multiple historical product lanes. Do **not** run every SQL file in order. For a fresh Supabase project, run this subset once in the SQL Editor:

1. `supabase/migrations/20240117_base_schema.sql` — required core tables.
2. `supabase/migrations/20250123_security_policies.sql` — required RLS policies; use the server-only service-role key for Telegram writes.

Do not apply `20250125_payment_methods.sql` as part of this setup: its historical policies expose payment-confirmation rows to public clients. The core `/paid <id>` flow still records `trip_passengers.payment_status`; this safe bootstrap does not persist the optional transaction-hash note.

The ratings/push migration, SQL auto-expiry migration, and `user_profiles.sql` are not part of the Telegram core bootstrap. Verify the required tables in the SQL Editor:

```sql
select
  to_regclass('public.trip_rooms') as trip_rooms,
  to_regclass('public.trip_passengers') as trip_passengers;
```

`trip_rooms.payment_method_info` stores lightweight Telegram metadata, including topic and close state, so the bot does not require a separate topic table.

## Connect the Telegram Webhook

Pincher requires a public HTTPS URL. After configuring the required variables on that server, set the webhook only when you are ready to change the bot's active delivery target:

```bash
export APP_BASE_URL=https://your-domain.example

curl -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/setWebhook" \
  -H "content-type: application/json" \
  -d "{\"url\":\"$APP_BASE_URL/api/telegram/webhook\",\"secret_token\":\"$TELEGRAM_WEBHOOK_SECRET\"}"
```

Telegram sends `TELEGRAM_WEBHOOK_SECRET` in the `X-Telegram-Bot-Api-Secret-Token` header. Pincher returns `503` when that secret is not configured and `401` when the header does not match. Verify the bot token and registered webhook with Telegram's `getMe` and `getWebhookInfo`, then manually test `/start`, a **custom future** `/ride`, and `/rides` in a test group. The bundled Consensus event buttons remain historical until the catalog is refreshed.

## Cleanup Worker

The cleanup script no longer falls back to a hard-coded production URL. Configure both variables explicitly on the scheduled worker:

```env
PINCHER_CLEANUP_URL=https://your-domain.example/api/telegram/webhook?task=close-expired
CRON_SECRET=...
```

```text
Start command: npm run cleanup:expired
Suggested schedule: */15 * * * *
```

The cleanup endpoint requires `Authorization: Bearer $CRON_SECRET`; missing configuration returns `503` and an incorrect bearer token returns `401`.

## MVP Success Metric

For Consensus Miami, the goal is simple:

> Between May 4 and May 8, at least 3-5 real ride groups should form through the Telegram bot.

If that happens, the next product step is not more UI. It is trust and coordination: better ride lifecycle, better topic management, optional wallet collection, and lightweight reputation.

## License

MIT.
