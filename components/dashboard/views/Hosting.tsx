'use client';

import React, { useEffect } from 'react';

interface HostingProps {
  onPeerFound: () => void;
}

const Hosting: React.FC<HostingProps> = ({ onPeerFound }) => {
  useEffect(() => {
    const timer = setTimeout(() => onPeerFound(), 4000);
    return () => clearTimeout(timer);
  }, [onPeerFound]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 h-full bg-transparent page-transition">
      <div className="relative mb-16 flex items-center justify-center">
        <div className="absolute size-48 border border-action-green/10 rounded-full animate-ping"></div>
        <div className="size-32 bg-black/60 border-2 border-action-green/30 rounded-[2.5rem] flex items-center justify-center shadow-[0_0_60px_rgba(0,255,0,0.1)] backdrop-blur-3xl">
          <span className="material-symbols-outlined text-action-green text-5xl animate-pulse">radar</span>
        </div>
      </div>
      
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter font-display">Searching Discovery</h2>
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] animate-pulse">Optimizing Secure Route...</p>
      </div>

      <div className="mt-20 w-full max-w-xs space-y-4">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
          <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Expected Savings</p>
          <p className="text-3xl font-black text-action-green italic">$65.00</p>
        </div>
        <button className="w-full py-4 text-[9px] font-black text-red-500/40 uppercase tracking-widest hover:text-red-500 transition-colors">
          Cancel Search
        </button>
      </div>
    </div>
  );
};

export default Hosting;
