'use client';

import React from 'react';

interface PaymentSuccessProps {
  syncCode: string;
  onProceed: () => void;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ syncCode, onProceed }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 h-full page-transition">
      <div className="max-w-xl w-full text-center space-y-10">
        <div className="relative flex justify-center">
          <div className="size-32 rounded-full bg-action-green flex items-center justify-center shadow-[0_0_60px_rgba(0,255,0,0.4)]">
            <span className="material-symbols-outlined text-black text-5xl font-black">check</span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase font-display">Protocol Secured</h1>
          <p className="text-[10px] font-black text-action-green uppercase tracking-[0.4em]">Matching Fee Paid & Logged</p>
        </div>

        <div className="glass-panel rounded-[2.5rem] p-10 border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-transparent via-action-green/50 to-transparent"></div>
          
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-6">Your Passenger Sync ID</p>
          
          <div className="flex justify-center gap-4 mb-8">
            {syncCode.split('').map((char, i) => (
              <div key={i} className="size-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-4xl font-black text-white font-mono shadow-inner italic">
                {char}
              </div>
            ))}
          </div>
          
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto italic">
            &quot;Give this code to Jordan or enter it in the Coordination panel to verify your ride protocol.&quot;
          </p>
        </div>

        <button 
          onClick={onProceed}
          className="w-full bg-white text-black py-7 rounded-3xl font-black font-display text-xl tracking-[0.2em] uppercase transition-all hover:scale-[1.02] shadow-2xl flex items-center justify-center gap-4"
        >
          Enter Coordination
          <span className="material-symbols-outlined font-black">hub</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
