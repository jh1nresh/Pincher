"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { getLocalUser } from "@/lib/local-user";

interface TripSummary {
  id: string;
  origin: string;
  destination: string;
  status: string;
  departure_time: string;
}

function getTripDisplayStatus(trip: TripSummary): { status: string; label: string } {
  const departureTime = new Date(trip.departure_time);
  const now = new Date();
  const hoursPastDeparture = (now.getTime() - departureTime.getTime()) / (1000 * 60 * 60);

  if (trip.status === "open" && hoursPastDeparture > 12) {
    return { status: "expired", label: "Expired" };
  }

  if (trip.status === "open" && hoursPastDeparture > 0 && hoursPastDeparture <= 12) {
    return { status: "in_progress", label: "In progress" };
  }

  if (trip.status === "open") return { status: "open", label: "Active" };
  if (trip.status === "completed") return { status: "completed", label: "Completed" };
  if (trip.status === "expired") return { status: "expired", label: "Expired" };
  if (trip.status === "cancelled") return { status: "cancelled", label: "Cancelled" };

  return { status: trip.status, label: trip.status };
}

export default function ProfilePage() {
  const [localUser] = useState(() => getLocalUser());
  const [myTrips, setMyTrips] = useState<TripSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTrips() {
      const { data } = await supabase
        .from("trip_passengers")
        .select(
          `
          trip_id,
          trip_rooms (
            id, origin, destination, status, departure_time
          )
        `,
        )
        .eq("user_id", localUser.id)
        .order("joined_at", { ascending: false });

      if (data) {
        const trips = data
          .map(t => (Array.isArray(t.trip_rooms) ? t.trip_rooms[0] : t.trip_rooms))
          .filter(Boolean) as unknown as TripSummary[];
        setMyTrips(trips);
      }

      setLoading(false);
    }

    fetchTrips();
  }, [localUser.id]);

  const visibleTrips = myTrips.filter(trip => {
    const displayStatus = getTripDisplayStatus(trip);
    return displayStatus.status !== "expired" && displayStatus.status !== "cancelled";
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-28 text-gray-950 dark:bg-gray-900 dark:text-white">
      <div className="mx-auto max-w-lg px-4 pt-24">
        <section className="mb-6 rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-800">
          <div className="mx-auto mb-4 grid size-20 place-items-center rounded-2xl bg-black text-3xl font-black text-action-green">
            P
          </div>
          <h1 className="text-2xl font-black">{localUser.name}</h1>
          <p className="mt-2 font-mono text-xs text-gray-400">{localUser.id}</p>
          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-gray-500">
            Telegram-first rider, no wallet login required
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-400">
              Ride History
            </h2>
            <Link href="/trips" className="text-xs font-black text-action-green">
              Open board
            </Link>
          </div>

          {loading && (
            <div className="rounded-3xl border border-gray-100 bg-white p-8 text-center text-xs text-gray-400 dark:border-gray-800 dark:bg-gray-800">
              Loading rides...
            </div>
          )}

          {!loading && visibleTrips.length === 0 && (
            <div className="rounded-3xl border border-dashed border-gray-200 bg-white p-8 text-center text-xs text-gray-400 dark:border-gray-700 dark:bg-gray-800">
              No rides yet.
            </div>
          )}

          {visibleTrips.map(trip => {
            const displayStatus = getTripDisplayStatus(trip);
            return (
              <Link
                key={trip.id}
                href={`/trips?join=${trip.id}`}
                className="block rounded-3xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-gray-200 active:scale-[0.98] dark:border-gray-800 dark:bg-gray-800"
              >
                <div className="mb-1 flex items-center justify-between gap-3">
                  <div className="truncate text-sm font-bold">
                    {trip.origin} <span className="text-gray-300">to</span> {trip.destination}
                  </div>
                  <span className="shrink-0 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    {displayStatus.label}
                  </span>
                </div>
                <div className="text-[10px] font-medium text-gray-400">
                  {new Date(trip.departure_time).toLocaleDateString()}
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
}
