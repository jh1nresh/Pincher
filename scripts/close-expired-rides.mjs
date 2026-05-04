const cleanupUrl =
  process.env.PINCHER_CLEANUP_URL ||
  "https://pincher-production.up.railway.app/api/telegram/webhook?task=close-expired";

const headers = {};

if (process.env.CRON_SECRET) {
  headers.authorization = `Bearer ${process.env.CRON_SECRET}`;
}

const response = await fetch(cleanupUrl, { headers });
const body = await response.text();

if (!response.ok) {
  throw new Error(`Cleanup request failed with ${response.status}: ${body}`);
}

let payload;

try {
  payload = JSON.parse(body);
} catch {
  throw new Error(`Cleanup response was not JSON: ${body}`);
}

if (payload.ok !== true) {
  throw new Error(`Cleanup response did not return ok=true: ${body}`);
}

console.log(`Pincher stale ride cleanup completed: ${body}`);
