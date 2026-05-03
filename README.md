# Pincher

Pincher is a Telegram ride coordination agent for crypto conference side
events.

The current product is intentionally narrow: attendees in the same Telegram
group can create small Uber/Lyft ride groups from the main venue to a side
event, see who is waiting, pick the person calling the car, and track manual
USDC split payments.

![Pincher app preview](/public/pincher-v1.5.png)

## Shipped Surface

The live MVP is a bot-only flow for Consensus Miami 2026 side events listed on
the Luma calendar for May 4-7, 2026.

- Bot: `@PincherideBot`
- Webhook route: `app/api/telegram/webhook/route.ts`
- Event source: `https://luma.com/cryptosideevents`
- Deployment target: Railway
- Database: Supabase Postgres

This is not an automated ride-booking or escrow product yet. The bot coordinates
the group; riders still book the car and settle payment themselves.

## What It Does

- Creates a ride room from the Consensus venue to a side event.
- Shows destination, leave time, estimated split, and current passenger list.
- Lets attendees join or leave with commands or inline buttons.
- Lets one attendee mark themselves as the Uber/Lyft caller.
- Lets riders mark their USDC split as paid, optionally with a transaction hash.
- Stores ride rooms, passengers, and payment references in Supabase.

## Telegram Flow

1. A group member posts a command such as `/ride sui 6:30`.
2. Pincher creates a ride card with Join, Leave, I'll call Uber, and Paid
   buttons.
3. Other attendees join until the group is ready or full.
4. One person calls the car.
5. Passengers send USDC directly to the caller and mark themselves as paid.

## Commands

```text
/start
/help
/ride sui 6:30
/rides
/join <ride_id>
/leave <ride_id>
/payer <ride_id>
/paid <ride_id> <tx_hash>
```

Notes:

- `/ride` accepts a side-event keyword and optional leave time.
- `/rides` lists currently open ride groups.
- `/paid` records payment status; it does not verify the transaction onchain.
- In Telegram groups, slash commands work with privacy mode enabled. Free-form
  messages require disabling privacy mode in BotFather.

## Product Boundary

Pincher is built around the coordination problem, not the car dispatch problem.
The first wedge is high-density event chat groups where attendees already share
context, destinations, and payment rails.

In scope now:

- Telegram group coordination.
- Event-specific destination catalogs.
- Lightweight ride-room lifecycle.
- Manual USDC split tracking.
- Operational deployment on Railway.

Out of scope for the current MVP:

- Automated Uber/Lyft booking.
- Custodial funds or escrow.
- Chain transaction verification.
- Wallet login inside Telegram.
- Automatic Telegram mini-groups or forum-topic cleanup.

## Architecture

```text
Telegram group
  -> Telegram Bot API webhook
  -> Next.js server route
  -> Supabase Postgres
```

Core files:

- `app/api/telegram/webhook/route.ts` - bot webhook, command parsing, inline
  button handling, and ride-room updates.
- `lib/consensus-events.ts` - Consensus Miami venue, Luma side-event seed, and
  ride estimate helpers.
- `supabase/migrations/` - database schema and access policies.
- `TELEGRAM_BOT_SETUP.md` - compact setup notes for the Telegram bot.

Data model:

- `trip_rooms` stores ride groups.
- `trip_passengers` stores who is waiting in each ride.
- `payment_confirmations` stores optional USDC payment references.

## Tech Stack

- Next.js 16 App Router
- React 19
- Supabase Postgres
- Telegram Bot API
- Railway
- Tailwind CSS

The repo also contains broader app dependencies for maps, Privy, Stripe, and
Web3 experiments. Those are not required for the bot-only MVP loop.

## Environment

Minimum server environment:

```env
TELEGRAM_BOT_TOKEN=123:abc
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

`SUPABASE_SERVICE_ROLE_KEY` is required for reliable Telegram webhook writes
because Telegram users are not authenticated through the browser app. Keep it
server-only.

Optional web app environment:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## Local Development

```bash
git clone https://github.com/JhiNResH/Pincher.git
cd Pincher
npm install
npm run dev
```

Open `http://localhost:3000` for the web app.

Telegram webhooks require a public HTTPS URL. For local bot testing, expose the
dev server with a tunnel or deploy a preview environment, then point Telegram to:

```text
https://your-domain.com/api/telegram/webhook
```

Set the webhook:

```bash
curl -X POST "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/setWebhook" \
  -H "Content-Type: application/json" \
  -d '{"url":"https://your-domain.com/api/telegram/webhook"}'
```

Check webhook status:

```bash
curl "https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/getWebhookInfo"
```

## Database Setup

Apply Supabase migrations before using the bot:

```bash
supabase link --project-ref <project-ref>
supabase db push --include-all
```

The webhook uses the Supabase service role key from the server environment. Do
not call the webhook with a browser-exposed service key.

## Deployment

Railway works with the standard Next.js server runtime:

```bash
npm run build
npm run start
```

Deployment checklist:

- Set `TELEGRAM_BOT_TOKEN`.
- Set Supabase URL, anon key, and service role key.
- Keep `next.config.ts` server-compatible; do not use `output: "export"`.
- Deploy to an HTTPS domain.
- Set the Telegram webhook to `/api/telegram/webhook`.
- Confirm `getWebhookInfo` reports the production URL.

## Verification

Type-check and build:

```bash
npx tsc --noEmit
npm run build
```

Smoke test the webhook:

```bash
curl -X POST "https://your-domain.com/api/telegram/webhook" \
  -H "Content-Type: application/json" \
  -d '{}'
```

Expected response:

```json
{"ok":true,"ignored":true}
```

## Roadmap

Next practical improvements:

- Close or archive stale ride rooms.
- Add cleaner group admin controls.
- Support automatic forum topics or small coordination rooms.
- Add wallet-linked payment links.
- Verify USDC transaction hashes when the coordination loop proves useful.
- Add a Telegram Mini App only if the bot flow shows real demand for richer UI.

## License

MIT. See `LICENSE` for details.
