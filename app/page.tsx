'use client';

import { usePrivy } from '@privy-io/react-auth';
import { BackgroundBeams } from '@/components/BackgroundBeams';
import Link from 'next/link';

export default function HomePage() {
  const { ready, authenticated, login } = usePrivy();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center font-sans overflow-hidden px-4 md:px-0 bg-white">
      <BackgroundBeams />
      
      <div className="z-10 w-full max-w-sm flex flex-col items-center animate-in fade-in zoom-in duration-700 slide-in-from-bottom-10">
        
        {/* App Icon with Glow */}
        <div className="relative group mb-12">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-400 to-purple-400 rounded-4xl blur-xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-32 h-32 bg-white rounded-4xl shadow-2xl overflow-hidden p-1">
                <img 
                    src="/pincher-v1.png" 
                    alt="Pincher Icon" 
                    className="w-full h-full object-cover rounded-[1.8rem]"
                />
            </div>
        </div>

        {/* Branding */}
        <div className="text-center mb-12 space-y-2">
            <h1 className="text-3xl font-black tracking-tighter text-gray-900">Pincher</h1>
            <p className="text-gray-500 font-medium text-sm tracking-wide uppercase">
                Sharing Rides, Splitting Costs
            </p>
        </div>

        {/* Action Button */}
        <div className="w-full space-y-4">
          {ready && authenticated ? (
            <Link 
              href="/trips"
              className="block w-full bg-black text-white text-center text-lg font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Enter Lobby
            </Link>
          ) : (
            <button
                onClick={login}
                className="w-full bg-black text-white text-lg font-bold py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
            >
                <span>Get Started</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          )}
          
          <div className="text-center">
            <p className="text-xs text-gray-400 font-medium mt-6">
                v1.0.0 • Designed for Students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
