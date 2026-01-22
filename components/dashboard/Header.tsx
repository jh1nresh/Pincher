'use client';

import React from 'react';
import { ViewState } from '@/lib/types';

interface HeaderProps {
  activeView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ activeView, onNavigate }) => {
  return (
    <header className="flex items-center justify-between border-b border-white/5 px-8 py-5 bg-transparent backdrop-blur-md z-50 h-20">
      <div 
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => onNavigate(ViewState.SEARCH)}
      >
        <div className="size-10 bg-action-green text-black flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(0,255,0,0.25)] group-hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-2xl font-bold">pinch</span>
        </div>
        <h2 className="text-xl font-black leading-tight tracking-[0.2em] font-display text-white italic">PINCHER</h2>
      </div>
      
      <div className="flex items-center gap-8">
        <button 
          onClick={() => onNavigate(ViewState.SEARCH)}
          className={`text-[10px] font-black tracking-[0.3em] transition-all uppercase ${
            activeView === ViewState.SEARCH ? 'text-action-green' : 'text-slate-500 hover:text-white'
          }`}
        >
          Search
        </button>
        <button 
          onClick={() => onNavigate(ViewState.PROFILE)}
          className={`px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            activeView === ViewState.PROFILE 
            ? 'bg-white text-black' 
            : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
          }`}
        >
          Account
        </button>
      </div>
    </header>
  );
};

export default Header;
