"use client";

import React from "react";

interface NoMatchesProps {
  origin: string;
  destination: string;
  onHost: () => void;
  onBack: () => void;
}

const NoMatches: React.FC<NoMatchesProps> = ({ origin, destination, onHost, onBack }) => {
  return (
    <div className="flex h-full flex-1 items-center justify-center p-5 page-transition">
      <div className="w-full max-w-xl">
        <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-2xl md:p-8">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-action-green/25 bg-action-green/10 text-action-green">
              <span className="material-symbols-outlined text-3xl">group_add</span>
            </div>
            <div className="rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
              0 open groups
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[10px] font-black uppercase tracking-[0.26em] text-action-green">
              No matching ride yet
            </p>
            <h1 className="font-display text-4xl font-black uppercase italic tracking-tight text-white">
              Start the group
            </h1>
            <p className="text-sm leading-6 text-slate-400">
              Nobody is currently waiting from{" "}
              <span className="font-bold text-white">{origin}</span> to{" "}
              <span className="font-bold text-white">{destination}</span>. Create the room and share
              it in Telegram so other attendees can join.
            </p>
          </div>

          <div className="mt-7 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["1", "Create room"],
                ["2", "Share command"],
                ["3", "Confirm rider list"],
              ].map(([step, label]) => (
                <div key={label} className="rounded-xl bg-black/30 p-3">
                  <p className="font-display text-xl font-black italic text-action-green">{step}</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 space-y-3">
            <button
              onClick={onHost}
              className="flex w-full min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-action-green text-sm font-black uppercase tracking-[0.16em] text-black shadow-[0_0_34px_rgba(0,255,0,0.22)] transition hover:scale-[1.01] active:scale-95"
            >
              <span className="material-symbols-outlined text-xl">add_circle</span>
              Start ride group
            </button>

            <button
              onClick={onBack}
              className="w-full min-h-[50px] rounded-2xl border border-white/10 bg-white/[0.03] text-xs font-black uppercase tracking-[0.16em] text-slate-400 transition hover:bg-white/8 hover:text-white"
            >
              Choose another event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoMatches;
