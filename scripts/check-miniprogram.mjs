import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("../miniprogram/", import.meta.url);
const required = [
  "app.js",
  "app.json",
  "app.wxss",
  "sitemap.json",
  "pages/login/login.wxml",
  "pages/home/home.wxml",
  "pages/trips/trips.wxml",
  "pages/create/create.wxml",
  "pages/ride/ride.wxml",
  "pages/profile/profile.wxml",
];

for (const file of required) {
  if (!existsSync(new URL(file, root))) throw new Error(`Missing mini program file: ${file}`);
}

for (const file of ["app.json", "sitemap.json"]) {
  JSON.parse(readFileSync(new URL(file, root), "utf8"));
}

const source = required
  .filter((file) => file.endsWith(".js") || file.endsWith(".wxml"))
  .map((file) => readFileSync(new URL(file, root), "utf8"))
  .join("\n") + readFileSync(new URL("utils/api.js", root), "utf8");

for (const marker of ["WECHAT_APPSECRET", "SUPABASE_SERVICE_ROLE_KEY", "AIza"]) {
  if (source.includes(marker)) throw new Error(`Forbidden credential marker in mini program: ${marker}`);
}

console.log(`Mini program validation passed: ${required.length} required files, JSON parsed, credential scan clean.`);
