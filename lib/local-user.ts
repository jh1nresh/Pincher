"use client";

export interface LocalUser {
  id: string;
  name: string;
}

const USER_ID_KEY = "pincher_local_user_id";
const USER_NAME_KEY = "pincher_local_user_name";

function fallbackId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `web:${crypto.randomUUID()}`;
  }

  return `web:${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function getLocalUser(): LocalUser {
  if (typeof window === "undefined") {
    return { id: "web:ssr", name: "Guest" };
  }

  let id = window.localStorage.getItem(USER_ID_KEY);
  if (!id) {
    id = fallbackId();
    window.localStorage.setItem(USER_ID_KEY, id);
  }

  const name = window.localStorage.getItem(USER_NAME_KEY) || "Telegram Guest";
  return { id, name };
}
