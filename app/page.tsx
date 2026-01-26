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
        <div className="relative group mb-8">
            <div className="absolute -inset-2 bg-action-green/20 rounded-4xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-500"></div>
            <div className="relative w-28 h-28 bg-black border-2 border-action-green/30 rounded-4xl shadow-[0_0_40px_rgba(0,255,0,0.15)] overflow-hidden p-1">
                <img 
                    src="/pincher-v1.png" 
                    alt="Pincher Icon" 
                    className="w-full h-full object-cover rounded-[1.5rem]"
                />
            </div>
        </div>

        {/* Branding */}
        <div className="text-center mb-8 space-y-2">
            <h1 className="text-4xl font-black tracking-tighter text-white italic uppercase font-display neon-text-green">Pincher</h1>
            <p className="text-slate-500 font-black text-[10px] tracking-[0.3em] uppercase">
                拼車省錢 · Split Rides
            </p>
        </div>

        {/* Quick Route - UCI to LAX */}
        <div className="w-full mb-6">
          <div className="bg-gradient-to-r from-blue-500/10 to-action-green/10 border border-white/10 rounded-2xl p-4">
            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-3 text-center">
              🔥 熱門路線
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="text-center">
                <span className="text-2xl">🎓</span>
                <p className="text-xs font-bold text-white mt-1">UCI</p>
              </div>
              <div className="flex-1 border-t border-dashed border-white/20 relative">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2 text-action-green text-xs font-bold">
                  $15/人
                </span>
              </div>
              <div className="text-center">
                <span className="text-2xl">✈️</span>
                <p className="text-xs font-bold text-white mt-1">LAX</p>
              </div>
            </div>
            <p className="text-[10px] text-slate-500 text-center mt-3">
              原價 $60+ → 四人拼車只要 <span className="text-action-green font-bold">$15</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3">
          {ready && authenticated ? (
            <>
              <Link 
                href="/trips"
                className="block w-full bg-action-green text-black text-center text-sm font-black uppercase tracking-[0.2em] py-5 rounded-2xl shadow-[0_0_40px_rgba(0,255,0,0.3)] hover:shadow-[0_0_60px_rgba(0,255,0,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                找拼車 / 發起行程
              </Link>
            </>
          ) : (
            <button
                onClick={login}
                disabled={!ready}
                className="w-full bg-action-green text-black text-sm font-black uppercase tracking-[0.2em] py-5 rounded-2xl shadow-[0_0_40px_rgba(0,255,0,0.3)] hover:shadow-[0_0_60px_rgba(0,255,0,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <span>{ready ? '開始使用' : 'Loading...'}</span>
                {ready && <span className="group-hover:translate-x-1 transition-transform">→</span>}
            </button>
          )}
        </div>

        {/* Social Proof */}
        <div className="mt-8 text-center space-y-2">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
          </div>
          <p className="text-[10px] text-slate-600">
            UCI 學生都在用
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-[9px] text-slate-700 font-black uppercase tracking-widest">
            v1.0.0 • Made for UCI 🐜
          </p>
        </div>
      </div>
    </div>
  );
}
