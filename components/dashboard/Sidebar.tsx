"use client";

import React from "react";
import { ViewState } from "@/lib/types";

interface SidebarProps {
  activeView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, onNavigate }) => {
  const items = [
    { view: ViewState.SYNC_DECK, icon: "route", label: "Open rooms" },
    { view: ViewState.COORDINATION, icon: "chat", label: "Coordination" },
    { view: ViewState.PROFILE, icon: "person", label: "Account" },
  ];

  return (
    <aside className="w-64 border-r border-white/5 bg-transparent hidden lg:flex flex-col justify-between py-10 z-40">
      <nav className="flex flex-col gap-1">
        {items.map(item => (
          <button
            key={item.view}
            onClick={() => onNavigate(item.view)}
            className={`flex items-center gap-4 px-8 py-5 transition-all text-left relative group ${
              activeView === item.view ? "text-action-green" : "text-slate-500 hover:text-white"
            }`}
          >
            {activeView === item.view && (
              <div className="absolute left-0 w-1 h-6 bg-action-green rounded-r shadow-[0_0_15px_#00FF00]"></div>
            )}
            <span className="material-symbols-outlined text-xl">{item.icon}</span>
            <p className="text-[11px] font-black uppercase tracking-[0.2em]">{item.label}</p>
          </button>
        ))}
      </nav>

      <div className="px-8">
        <div className="p-4 bg-white/3 border border-white/5 rounded-2xl">
          <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">
            Status
          </p>
          <div className="flex items-center gap-2">
            <span className="size-1.5 bg-action-green rounded-full shadow-[0_0_8px_#00FF00]"></span>
            <span className="text-[10px] font-bold text-white uppercase">Bot webhook live</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
