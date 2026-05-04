"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { getLocalUser } from "@/lib/local-user";

const Profile: React.FC = () => {
  const [localUser] = useState(() => getLocalUser());
  const [history, setHistory] = useState<any[]>([]);

  const displayName = localUser.name;

  useEffect(() => {
    const fetchData = async () => {
      // Fetch history
      const { data: historyData } = await supabase
        .from("trip_passengers")
        .select(
          `
          *,
          trip_rooms (
            destination,
            origin,
            created_at,
            actual_cost
          )
        `,
        )
        .eq("user_id", localUser.id)
        .order("joined_at", { ascending: false })
        .limit(10);

      if (historyData) {
        setHistory(
          historyData.map((item: any) => ({
            id: item.id,
            date: new Date(item.joined_at).toISOString().split("T")[0],
            origin: item.trip_rooms?.origin || "Unknown",
            dest: item.trip_rooms?.destination || "Unknown",
            saved: item.trip_rooms?.actual_cost
              ? `$${((item.trip_rooms.actual_cost * 0.75) / 100).toFixed(2)}`
              : "$12.50",
          })),
        );
      }
    };

    fetchData();
  }, [localUser.id]);

  return (
    <div className="flex-1 overflow-y-auto h-full page-transition">
      <div className="max-w-xl mx-auto w-full px-6 py-12 space-y-8 pb-24">
        {/* Profile Header */}
        <section className="bg-white/2 border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center text-center gap-4">
          <div className="size-24 rounded-3xl bg-black border-2 border-action-green flex items-center justify-center text-action-green shadow-[0_0_30px_rgba(0,255,0,0.1)]">
            <span className="material-symbols-outlined text-5xl">person</span>
          </div>
          <div>
            <h1 className="text-2xl font-black text-white uppercase italic font-display">
              {displayName}
            </h1>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Telegram-first rider
            </p>
          </div>
        </section>

        {/* Trip History */}
        <section className="space-y-4">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">
            Trip History
          </p>
          <div className="space-y-3">
            {history.length === 0 && (
              <div className="p-6 text-center border border-white/5 rounded-3xl bg-white/2">
                <span className="material-symbols-outlined text-4xl text-slate-700 mb-2">
                  directions_car
                </span>
                <p className="text-xs text-slate-500 uppercase">No trips yet</p>
                <p className="text-[10px] text-slate-600 mt-1">
                  Your completed rides will appear here
                </p>
              </div>
            )}
            {history.map(trip => (
              <div
                key={trip.id}
                className="bg-white/3 border border-white/5 p-5 rounded-3xl flex justify-between items-center hover:border-white/20 transition-all"
              >
                <div>
                  <p className="text-[8px] font-mono text-slate-600 mb-1">{trip.date}</p>
                  <h4 className="text-sm font-black text-white">
                    {trip.origin} → {trip.dest}
                  </h4>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-black text-slate-500 uppercase mb-1">Saved</p>
                  <p className="text-lg font-black text-action-green italic">{trip.saved}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <p className="text-center text-[10px] font-black uppercase tracking-widest text-slate-600">
          No account required for the Consensus MVP
        </p>
      </div>
    </div>
  );
};

export default Profile;
