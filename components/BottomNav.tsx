'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePrivy } from '@privy-io/react-auth';

export default function BottomNav() {
  const pathname = usePathname();
  const { authenticated, ready } = usePrivy();

  // Hide on: login page, create page (has its own submit), or when not authenticated
  if (pathname === '/' || pathname === '/trips/create' || pathname === '/trips' || pathname.startsWith('/trips/')) return null;

  // Hide when not authenticated (login screens on other pages)
  if (ready && !authenticated) return null;

  // Hide during loading to prevent flash
  if (!ready) return null;

  const isLobbyActive = pathname === '/trips';
  const isProfileActive = pathname === '/profile' || pathname.startsWith('/profile/');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-100 pb-safe">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">

        {/* Lobby */}
        <Link
          href="/trips"
          className={`flex flex-col items-center justify-center gap-1 w-full h-full ${isLobbyActive ? 'text-black' : 'text-gray-400'}`}
        >
          <span className="text-xl">🏠</span>
          <span className="text-[10px] font-bold">大廳</span>
        </Link>

        {/* Create (Center) */}
        <Link href="/trips/create" className="flex flex-col items-center justify-center -mt-6">
          <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg text-white hover:scale-105 active:scale-95 transition-transform border-4 border-white">
            <span className="text-2xl font-bold">+</span>
          </div>
          <span className="text-[10px] font-bold text-gray-500 mt-1">發起</span>
        </Link>

        {/* Profile */}
        <Link
          href="/profile"
          className={`flex flex-col items-center justify-center gap-1 w-full h-full ${isProfileActive ? 'text-black' : 'text-gray-400'}`}
        >
          <span className="text-xl">👤</span>
          <span className="text-[10px] font-bold">我的</span>
        </Link>

      </div>
    </div>
  );
}
