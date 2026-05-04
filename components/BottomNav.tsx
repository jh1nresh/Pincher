"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  // Hide on landing page or trips dashboard.
  if (pathname === "/" || pathname === "/trips" || pathname.startsWith("/trips/")) return null;

  const isLobbyActive = pathname === "/trips";
  const isProfileActive = pathname === "/profile" || pathname.startsWith("/profile/");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-100 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {/* Lobby */}
        <Link
          href="/trips"
          className={`flex flex-col items-center justify-center gap-1 w-full h-full ${isLobbyActive ? "text-black" : "text-gray-400"}`}
        >
          <span className="text-xl">🏠</span>
          <span className="text-[10px] font-bold">大廳</span>
        </Link>

        {/* Telegram (Center) */}
        <a
          href="https://t.me/cryptosideevents"
          className="flex flex-col items-center justify-center -mt-6"
        >
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg text-white hover:scale-105 active:scale-95 transition-transform border-4 border-white">
            <span className="text-2xl font-bold">↗</span>
          </div>
          <span className="text-[10px] font-bold text-gray-500 mt-1">TG</span>
        </a>

        {/* Profile */}
        <Link
          href="/profile"
          className={`flex flex-col items-center justify-center gap-1 w-full h-full ${isProfileActive ? "text-black" : "text-gray-400"}`}
        >
          <span className="text-xl">👤</span>
          <span className="text-[10px] font-bold">我的</span>
        </Link>
      </div>
    </div>
  );
}
