"use client";

import { usePrivy } from "@privy-io/react-auth";
import Link from "next/link";

const COMMANDS = ["/ride sui 6:30", "/rides", "/join 8f3a91b2", "/paid 8f3a91b2 0x..."];

export default function HomePage() {
  const { ready, authenticated, login } = usePrivy();

  return (
    <main className="relative min-h-screen overflow-hidden dashboard-bg px-4 py-6 text-white sm:px-5">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_72%_18%,rgba(0,255,0,0.16),transparent_34%),radial-gradient(circle_at_14%_86%,rgba(56,189,248,0.1),transparent_30%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl flex-col">
        <header className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center overflow-hidden rounded-2xl border border-action-green/30 bg-black shadow-[0_0_28px_rgba(0,255,0,0.14)]">
              <img src="/pincher-v1.png" alt="Pincher" className="size-full object-cover" />
            </div>
            <div>
              <p className="font-display text-lg font-black italic tracking-[0.18em] text-white">
                PINCHER
              </p>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-600">
                Ride agent
              </p>
            </div>
          </div>

          <a
            href="https://t.me/cryptosideevents"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-300 transition hover:border-white/20 hover:bg-white/10 sm:block"
          >
            Telegram group
          </a>
        </header>

        <section className="grid min-w-0 flex-1 items-center gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.86fr)] lg:py-14">
          <div className="min-w-0 max-w-2xl">
            <div className="mb-8 inline-flex max-w-full items-center gap-2 rounded-xl border border-action-green/20 bg-action-green/10 px-3 py-2 text-[9px] font-black uppercase tracking-[0.14em] text-action-green sm:text-[10px] sm:tracking-[0.2em]">
              <span className="size-1.5 rounded-full bg-action-green shadow-[0_0_10px_#00FF00]" />
              Consensus Miami · May 4-7
            </div>

            <h1 className="font-display text-[2.58rem] font-black uppercase italic leading-[0.94] tracking-normal text-white sm:text-5xl md:text-7xl">
              Split the ride,
              <span className="block text-action-green">not the group.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
              Find attendees leaving from the Consensus venue to the same Luma side event, form a
              small car group, and track direct USDC splits without overbuilding escrow.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {ready && authenticated ? (
                <Link
                  href="/trips"
                  className="inline-flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-action-green px-6 text-center text-xs font-black uppercase tracking-[0.16em] text-black shadow-[0_0_34px_rgba(0,255,0,0.26)] transition hover:scale-[1.01] active:scale-[0.98] sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.18em]"
                >
                  Open Ride Agent
                </Link>
              ) : (
                <button
                  onClick={login}
                  disabled={!ready}
                  className="inline-flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-action-green px-6 text-center text-xs font-black uppercase tracking-[0.16em] text-black shadow-[0_0_34px_rgba(0,255,0,0.26)] transition hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.18em]"
                >
                  {ready ? "Start Ride Agent" : "Loading..."}
                </button>
              )}

              <a
                href="https://luma.com/cryptosideevents"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[56px] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 text-center text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-white/10 sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.18em]"
              >
                View Luma Events
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["4", "max riders"],
                ["USDC", "manual split"],
                ["TG", "bot first"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="min-w-0 rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <p className="font-display text-xl font-black italic text-white">{value}</p>
                  <p className="mt-1 text-[8px] font-black uppercase tracking-[0.12em] text-slate-600 sm:text-[9px] sm:tracking-[0.18em]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0 rounded-[2rem] border border-white/10 bg-black/40 p-3 shadow-2xl backdrop-blur-2xl sm:p-4 md:p-5">
            <div className="min-w-0 rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-4 sm:p-5">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-600">
                    Live route
                  </p>
                  <h2 className="mt-2 font-display text-xl font-black uppercase italic leading-tight text-white sm:text-2xl">
                    Venue to side event
                  </h2>
                </div>
                <div className="shrink-0 rounded-xl bg-action-green px-3 py-2 text-[9px] font-black uppercase tracking-wide text-black sm:text-[10px] sm:tracking-widest">
                  2-4 riders
                </div>
              </div>

              <div className="space-y-3">
                {[
                  ["Miami Beach Convention Center", "Origin"],
                  ["Luma side event", "Destination"],
                ].map(([title, label], index) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 rounded-2xl border border-white/8 bg-black/30 p-4"
                  >
                    <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/8 text-action-green">
                      <span className="material-symbols-outlined text-xl">
                        {index === 0 ? "location_on" : "event_available"}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-600">
                        {label}
                      </p>
                      <p className="mt-1 truncate text-sm font-black text-white">{title}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-5 flex items-center gap-3 px-2">
                <div className="h-px flex-1 bg-white/10" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-action-green">
                  direct USDC split
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <div className="rounded-2xl border border-white/8 bg-black/50 p-4 font-mono">
                <p className="mb-3 text-[9px] font-black uppercase tracking-[0.18em] text-slate-600">
                  Telegram command preview
                </p>
                <div className="space-y-2">
                  {COMMANDS.map(command => (
                    <div key={command} className="flex items-center gap-3 text-xs">
                      <span className="text-action-green">$</span>
                      <span className="text-slate-300">{command}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
