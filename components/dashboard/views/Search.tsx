"use client";

import React, { useEffect, useMemo, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import {
  CONSENSUS_CALENDAR_URL,
  CONSENSUS_EVENT_DAYS,
  CONSENSUS_SIDE_EVENTS,
  CONSENSUS_TELEGRAM_URL,
  CONSENSUS_VENUE,
  ConsensusSideEvent,
  estimateRideCostCents,
  estimateSplitCents,
  formatMiamiDateTime,
  formatMiamiTime,
  getDefaultLeaveAt,
  getEventsForDay,
  getLocationLabel,
} from "@/lib/consensus-events";
import { toast } from "sonner";

interface SearchProps {
  onConfirm: (origin: string, destination: string, matches: EventRideRoom[]) => void;
  onHost: (tripId: string) => void;
}

interface EventRideRoom {
  id: string;
  creator_id: string;
  origin: string;
  destination: string;
  departure_time: string;
  status: string;
  max_passengers?: number;
  estimated_cost?: number;
  destination_address?: string;
  destination_hotzone_id?: string;
}

type FromMode = "venue" | "current" | "hotel";
type LeaveMode = "now" | "15" | "30" | "event";

const fromOptions: Array<{ id: FromMode; label: string; description: string; icon: string }> = [
  { id: "venue", label: "Consensus Venue", description: CONSENSUS_VENUE.name, icon: "distance" },
  {
    id: "current",
    label: "Current Location",
    description: "Mini App location later",
    icon: "my_location",
  },
  { id: "hotel", label: "Hotel / Custom", description: "Manual pickup label", icon: "apartment" },
];

const leaveOptions: Array<{ id: LeaveMode; label: string; description: string }> = [
  { id: "now", label: "Now", description: "Immediate group" },
  { id: "15", label: "15 min", description: "Quick coordination" },
  { id: "30", label: "30 min", description: "Default buffer" },
  { id: "event", label: "Before event", description: "Arrive near start" },
];

function getOriginLabel(fromMode: FromMode) {
  if (fromMode === "venue") return CONSENSUS_VENUE.name;
  if (fromMode === "current") return "Current Location";
  return "Hotel / Custom Pickup";
}

function getLeaveAt(mode: LeaveMode, event: ConsensusSideEvent) {
  const now = new Date();
  if (mode === "now") return now;
  if (mode === "15") return new Date(now.getTime() + 15 * 60 * 1000);
  if (mode === "30") return new Date(now.getTime() + 30 * 60 * 1000);
  return getDefaultLeaveAt(event);
}

function getPrecisionLabel(event: ConsensusSideEvent) {
  if (event.locationPrecision === "exact") return "Exact address";
  if (event.locationPrecision === "hidden") return "Hidden address";
  return "Area only";
}

function getRegistrationClass(status: ConsensusSideEvent["registrationStatus"]) {
  if (status === "open") return "bg-action-green/10 text-action-green border-action-green/20";
  if (status === "waitlist") return "bg-yellow-400/10 text-yellow-300 border-yellow-300/20";
  if (status === "approval") return "bg-sky-400/10 text-sky-300 border-sky-300/20";
  if (status === "sold_out") return "bg-red-400/10 text-red-300 border-red-300/20";
  return "bg-white/5 text-slate-400 border-white/10";
}

const Search: React.FC<SearchProps> = ({ onConfirm, onHost }) => {
  const { user } = usePrivy();
  const searchParams = useSearchParams();
  const [selectedDay, setSelectedDay] = useState<ConsensusSideEvent["day"]>("2026-05-04");
  const [selectedEventId, setSelectedEventId] = useState(CONSENSUS_SIDE_EVENTS[0]?.id || "");
  const [fromMode, setFromMode] = useState<FromMode>("venue");
  const [leaveMode, setLeaveMode] = useState<LeaveMode>("30");
  const [isSearching, setIsSearching] = useState(false);

  const dayEvents = useMemo(() => getEventsForDay(selectedDay), [selectedDay]);
  const selectedEvent =
    CONSENSUS_SIDE_EVENTS.find(event => event.id === selectedEventId) || dayEvents[0];
  const origin = getOriginLabel(fromMode);

  useEffect(() => {
    const eventId = searchParams.get("event");
    const event = CONSENSUS_SIDE_EVENTS.find(item => item.id === eventId);
    if (!event) return;

    setSelectedDay(event.day);
    setSelectedEventId(event.id);
  }, [searchParams]);

  const handleDaySelect = (day: ConsensusSideEvent["day"]) => {
    const events = getEventsForDay(day);
    setSelectedDay(day);
    if (events[0]) setSelectedEventId(events[0].id);
  };

  const handleFindRides = async () => {
    if (!selectedEvent) {
      toast.error("Select a Luma side event first");
      return;
    }

    setIsSearching(true);

    try {
      const { data, error } = await supabase
        .from("trip_rooms")
        .select("*")
        .eq("destination_hotzone_id", selectedEvent.id)
        .eq("status", "open")
        .order("departure_time", { ascending: true })
        .limit(8);

      if (error) throw error;

      setTimeout(() => {
        onConfirm(origin, selectedEvent.name, data || []);
      }, 450);
    } catch (err) {
      console.error("Event ride search failed:", err);
      toast.error("Could not load ride groups");
      setIsSearching(false);
    }
  };

  const handleStartRide = async () => {
    if (!selectedEvent) {
      toast.error("Select a Luma side event first");
      return;
    }

    if (!user?.id) {
      toast.error("Please sign in first");
      return;
    }

    setIsSearching(true);

    try {
      const leaveAt = getLeaveAt(leaveMode, selectedEvent);
      const estimatedCost = estimateRideCostCents(selectedEvent);

      const { data, error } = await supabase
        .from("trip_rooms")
        .insert({
          creator_id: user.id,
          origin,
          origin_hotzone_id: fromMode === "venue" ? CONSENSUS_VENUE.id : fromMode,
          origin_address: fromMode === "venue" ? CONSENSUS_VENUE.address : origin,
          destination: selectedEvent.name,
          destination_hotzone_id: selectedEvent.id,
          destination_address: selectedEvent.address,
          departure_time: leaveAt.toISOString(),
          status: "open",
          min_passengers: 2,
          max_passengers: 4,
          estimated_cost: estimatedCost,
        })
        .select()
        .single();

      if (error) throw error;

      await supabase.from("trip_passengers").insert({
        trip_id: data.id,
        user_id: user.id,
        user_name: user.email?.address?.split("@")[0] || "Organizer",
        is_driver: false,
        payment_status: "unpaid",
        joined_at: new Date().toISOString(),
      });

      toast.success("Ride group created");
      onHost(data.id);
    } catch (err) {
      console.error("Failed to create event ride:", err);
      toast.error("Failed to create ride group");
      setIsSearching(false);
    }
  };

  if (isSearching) {
    return (
      <div className="flex h-full flex-1 flex-col items-center justify-center bg-transparent p-10 page-transition">
        <div className="relative mb-8">
          <div className="size-36 rounded-full border border-action-green/10" />
          <div className="absolute inset-3 rounded-full border border-dashed border-action-green/20 animate-spin" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="material-symbols-outlined text-5xl text-action-green">route</span>
          </div>
        </div>
        <div className="max-w-md space-y-3 text-center">
          <h2 className="font-display text-3xl font-black uppercase italic tracking-tight text-white">
            Checking open rides
          </h2>
          <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
            {origin} to {selectedEvent?.name || "selected side event"}
          </p>
        </div>
      </div>
    );
  }

  const selectedSplit = selectedEvent
    ? (estimateSplitCents(selectedEvent) / 100).toFixed(2)
    : "0.00";
  const selectedTotal = selectedEvent
    ? (estimateRideCostCents(selectedEvent) / 100).toFixed(0)
    : "0";

  return (
    <div className="mx-auto flex h-full w-full max-w-6xl flex-1 flex-col px-4 py-5 md:px-7 md:py-7 page-transition">
      <div className="mb-5 flex shrink-0 flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-3">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.24em] text-action-green">
            <span className="size-1.5 rounded-full bg-action-green shadow-[0_0_10px_#00FF00]" />
            Consensus Miami ride agent
          </div>
          <div>
            <h1 className="font-display text-4xl font-black uppercase italic tracking-tight text-white md:text-5xl">
              Choose a side event
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Pick a Luma destination, choose when to leave, then join an existing ride or start a
              new four-seat group.
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <a
            href={CONSENSUS_TELEGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-300 transition hover:bg-white/10"
          >
            Telegram
          </a>
          <a
            href={CONSENSUS_CALENDAR_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-action-green/20 bg-action-green/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-action-green transition hover:bg-action-green/15"
          >
            Luma source
          </a>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-4 gap-2 shrink-0">
        {CONSENSUS_EVENT_DAYS.map(day => (
          <button
            key={day.id}
            onClick={() => handleDaySelect(day.id)}
            className={`min-h-[48px] rounded-2xl text-xs font-black uppercase tracking-[0.14em] transition-all ${
              selectedDay === day.id
                ? "bg-action-green text-black shadow-[0_0_24px_rgba(0,255,0,0.18)]"
                : "border border-white/10 bg-white/[0.03] text-slate-500 hover:bg-white/8 hover:text-white"
            }`}
          >
            {day.label}
          </button>
        ))}
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_390px]">
        <section className="min-h-0 rounded-[1.75rem] border border-white/8 bg-white/[0.025] p-3 md:p-4">
          <div className="mb-3 flex items-center justify-between px-1">
            <p className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-600">
              {dayEvents.length} Luma destinations
            </p>
            <p className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-600">
              Est. split assumes 4 riders
            </p>
          </div>

          <div className="h-full min-h-0 overflow-y-auto pr-1 scrollbar-hide">
            <div className="grid gap-3 pb-3 md:grid-cols-2">
              {dayEvents.map(event => {
                const selected = selectedEventId === event.id;
                const split = (estimateSplitCents(event) / 100).toFixed(2);

                return (
                  <button
                    key={event.id}
                    onClick={() => setSelectedEventId(event.id)}
                    className={`min-h-[148px] rounded-2xl border p-4 text-left transition-all ${
                      selected
                        ? "border-action-green/50 bg-action-green/10 shadow-[0_0_28px_rgba(0,255,0,0.08)]"
                        : "border-white/8 bg-black/20 hover:border-white/18 hover:bg-white/[0.055]"
                    }`}
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-action-green">
                          {formatMiamiTime(event.startsAt)}
                        </p>
                        <h2 className="mt-2 line-clamp-2 text-sm font-black leading-snug text-white">
                          {event.name}
                        </h2>
                      </div>
                      <span
                        className={`shrink-0 rounded-lg border px-2 py-1 text-[8px] font-black uppercase tracking-wider ${getRegistrationClass(
                          event.registrationStatus,
                        )}`}
                      >
                        {event.registrationStatus.replace("_", " ")}
                      </span>
                    </div>

                    <div className="mt-auto grid grid-cols-[1fr_auto] items-end gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-xs font-medium text-slate-400">
                          {getLocationLabel(event)}
                        </p>
                        <p className="mt-1 text-[9px] font-black uppercase tracking-[0.16em] text-slate-600">
                          {getPrecisionLabel(event)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-600">
                          Split
                        </p>
                        <p className="text-sm font-black text-action-green">{split} USDC</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <aside className="flex min-h-0 flex-col rounded-[1.75rem] border border-white/10 bg-black/40 p-4 shadow-2xl backdrop-blur-2xl md:p-5">
          {selectedEvent && (
            <>
              <div className="mb-5 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-600">
                  Selected ride
                </p>
                <h2 className="mt-3 font-display text-2xl font-black uppercase italic leading-tight text-white">
                  {selectedEvent.name}
                </h2>

                <div className="mt-4 space-y-3 text-xs text-slate-400">
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-600">Starts</span>
                    <span className="text-right text-white">
                      {formatMiamiDateTime(selectedEvent.startsAt)}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-600">Destination</span>
                    <span className="max-w-[210px] truncate text-right text-white">
                      {getLocationLabel(selectedEvent)}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-600">Estimate</span>
                    <span className="text-right text-white">
                      ${selectedTotal} car / {selectedSplit} USDC each
                    </span>
                  </div>
                </div>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto pr-1 scrollbar-hide">
                <div className="mb-5">
                  <p className="mb-2 text-[9px] font-black uppercase tracking-[0.22em] text-slate-600">
                    Pickup
                  </p>
                  <div className="space-y-2">
                    {fromOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => setFromMode(option.id)}
                        className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                          fromMode === option.id
                            ? "border-white bg-white text-black"
                            : "border-white/10 bg-white/[0.03] text-white hover:bg-white/8"
                        }`}
                      >
                        <span className="material-symbols-outlined text-xl">{option.icon}</span>
                        <span className="min-w-0">
                          <span className="block text-xs font-black">{option.label}</span>
                          <span
                            className={`mt-1 block truncate text-[10px] ${fromMode === option.id ? "text-black/50" : "text-slate-500"}`}
                          >
                            {option.description}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-[9px] font-black uppercase tracking-[0.22em] text-slate-600">
                    Leave time
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {leaveOptions.map(option => (
                      <button
                        key={option.id}
                        onClick={() => setLeaveMode(option.id)}
                        className={`min-h-[64px] rounded-2xl border px-3 py-3 text-left transition ${
                          leaveMode === option.id
                            ? "border-action-green bg-action-green text-black"
                            : "border-white/10 bg-white/[0.03] text-white hover:bg-white/8"
                        }`}
                      >
                        <p className="text-xs font-black">{option.label}</p>
                        <p
                          className={`mt-1 text-[9px] leading-tight ${leaveMode === option.id ? "text-black/55" : "text-slate-500"}`}
                        >
                          {option.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 shrink-0 space-y-3 border-t border-white/8 pt-4">
                <button
                  onClick={handleFindRides}
                  className="w-full min-h-[56px] rounded-2xl bg-white text-sm font-black uppercase tracking-[0.16em] text-black transition hover:scale-[1.01] active:scale-95"
                >
                  Find open rides
                </button>
                <button
                  onClick={handleStartRide}
                  className="w-full min-h-[54px] rounded-2xl border border-action-green/30 bg-action-green/10 text-xs font-black uppercase tracking-[0.16em] text-action-green transition hover:bg-action-green/18"
                >
                  Start ride group
                </button>
              </div>
            </>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Search;
