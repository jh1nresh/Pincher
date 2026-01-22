'use client';

import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';

export default function HomePage() {
  const { ready, authenticated, login } = usePrivy();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center font-sans overflow-hidden px-4 md:px-0 dashboard-bg">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-action-green/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="z-10 w-full max-w-sm flex flex-col items-center animate-in fade-in zoom-in duration-700 slide-in-from-bottom-10">
        
        {/* App Icon with Glow */}
        <div className="relative group mb-12">
            <div className="absolute -inset-2 bg-action-green/20 rounded-4xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-500"></div>
            <div className="relative w-32 h-32 bg-black border-2 border-action-green/30 rounded-4xl shadow-[0_0_40px_rgba(0,255,0,0.15)] overflow-hidden p-1">
                <img 
                    src="/pincher-v1.png" 
                    alt="Pincher Icon" 
                    className="w-full h-full object-cover rounded-[1.8rem]"
                />
            </div>
        </div>

        {/* Branding */}
        <div className="text-center mb-12 space-y-3">
            <h1 className="text-4xl font-black tracking-tighter text-white italic uppercase font-display neon-text-green">Pincher</h1>
            <p className="text-slate-500 font-black text-[10px] tracking-[0.4em] uppercase">
                Sharing Rides, Splitting Costs
            </p>
        </div>

        {/* Action Button */}
        <div className="w-full space-y-4">
          {ready && authenticated ? (
            <Link 
              href="/trips"
              className="block w-full bg-action-green text-black text-center text-sm font-black uppercase tracking-[0.3em] py-5 rounded-2xl shadow-[0_0_40px_rgba(0,255,0,0.3)] hover:shadow-[0_0_60px_rgba(0,255,0,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Enter Lobby
            </Link>
          ) : (
            <button
                onClick={login}
                disabled={!ready}
                className="w-full bg-action-green text-black text-sm font-black uppercase tracking-[0.3em] py-5 rounded-2xl shadow-[0_0_40px_rgba(0,255,0,0.3)] hover:shadow-[0_0_60px_rgba(0,255,0,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <span>{ready ? 'Get Started' : 'Loading...'}</span>
                {ready && <span className="group-hover:translate-x-1 transition-transform">→</span>}
            </button>
          )}
          
          <div className="text-center">
            <p className="text-[9px] text-slate-700 font-black uppercase tracking-widest mt-8">
                v1.0.0 • Designed for Students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
