# Pincher

## Current product: PKU campus WeChat mini program

Pincher is currently being validated as a WeChat mini program for invited Peking University School of Stomatology students. The first pilot has one deliberately narrow route:

```
北大醫學部宿舍 → 北大醫院
```

The main user flow is:

```
手機號登入 → 固定路線 → 發起／加入拼車 → 行程房間 → 集合協調 → 實際車費自行分攤
```

This README describes the current campus product only. The original Consensus Telegram implementation has been moved to [`docs/legacy-telegram.md`](docs/legacy-telegram.md) so historical event tooling does not get mistaken for the current pilot.

## Current status

> **Pilot, not production:** the mini program runs in local demo mode. It does not yet send real SMS, bind WeChat identities, verify student membership, or write to a live backend.

The current demo includes:

- Fixed dorm-to-hospital route and public pickup points.
- Invited-student product language and phone-login flow.
- Create, join, leave, and view trips.
- A member-only ride room with coordination messages and quick actions.
- Manual fare-splitting estimates; the platform does not collect or hold money.

## Preview the mini program

1. Open WeChat Developer Tools.
2. Import the `miniprogram/` directory as the project root.
3. Use a test AppID or local preview mode.
4. Exercise login, recommended rides, create/join, the ride room, coordination messages, trip history, and logout.

The demo stores user, ride, and message state locally. Setting an API URL alone does not make it production-ready; the pages must be switched from local demo state to authenticated server calls.

## Product boundaries

The first pilot is intentionally small:

- Access is invite-only for the intended student group.
- The route and pickup points are controlled rather than arbitrary addresses.
- Each ride has a small seat count and its own coordination room.
- Phone numbers are not shown to other riders.
- The first version does not dispatch drivers, act as a ride-hailing marketplace, custody funds, escrow fares, or take a per-ride commission.

微信群 can distribute invitations, but the mini program is the source of truth for seats, membership, messages, and leaving a ride.

## Production connection checklist

Before inviting real students, complete these in order:

1. Register the mini program and configure its AppID.
2. Deploy a public HTTPS API and add its domain to the mini program request-domain allowlist.
3. Implement server-side WeChat session exchange and phone OTP verification.
4. Map the verified identity to `auth.users.id` and issue a short-lived application token.
5. Apply and review `supabase/migrations/20260904_pku_carpool_foundation.sql` in the intended Supabase project.
6. Implement authenticated ride and room-message APIs; the server must re-check membership, seat capacity, route, time, and duplicate joins.
7. Implement invite-code or manual student verification, privacy terms, abuse reporting, and operator audit records.
8. Test with multiple accounts, including unverified users, full rides, leaving, and unauthorized room access.

Secrets stay server-side. Never place a WeChat AppSecret, SMS credential, Supabase service-role key, merchant private key, cron secret, or bearer token in `miniprogram/`.

## Repository layout

| Path | Purpose |
| --- | --- |
| `miniprogram/` | Current WeChat mini program pilot and local demo |
| `supabase/migrations/20260904_pku_carpool_foundation.sql` | Campus tables and verified-member RLS foundation; not applied to live data by this repository |
| `app/`, `lib/`, `supabase/migrations/` | Existing web and historical Telegram product lanes |
| `docs/legacy-telegram.md` | Archived Consensus Telegram documentation |

Do not apply every historical migration blindly. Review the target project, required pre-state, and the exact migration before changing Supabase.

## Checks

Run the focused mini program checks from the repository root:

```
npm run check:miniprogram
find miniprogram -name '*.js' -print0 | xargs -0 -n1 node --check
```

The native WeChat Developer Tools runtime, live API, live Supabase project, production deployment, and payment qualification are separate gates; a local preview does not prove any of them.

## Historical documentation

For the original Telegram-first Consensus event tooling, commands, MCP endpoint, and historical setup notes, read [`docs/legacy-telegram.md`](docs/legacy-telegram.md). It is archived reference material, not a current launch checklist.

## License

MIT.
