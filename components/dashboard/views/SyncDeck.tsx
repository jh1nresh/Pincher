"use client";

import React, { useEffect, useRef, useState } from "react";

interface Candidate {
  id: string;
  creator_id: string;
  origin: string;
  destination: string;
  departure_time: string;
  min_passengers: number;
  max_passengers: number;
  estimated_cost?: number;
  destination_address?: string;
}

interface SyncDeckProps {
  candidates: Candidate[];
  onInitiate: (tripId: string) => void;
  onSkip: () => void;
}

const SWIPE_THRESHOLD = 150;

const SyncDeck: React.FC<SyncDeckProps> = ({ candidates, onInitiate, onSkip }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const currentCandidate = candidates[currentIndex];
  const nextCandidate = candidates[currentIndex + 1];

  const getDisplayData = (candidate: Candidate) => {
    const estimatedTotal = candidate.estimated_cost || 4200;
    const split = Math.ceil(estimatedTotal / (candidate.max_passengers || 4));
    const leaveTime = new Date(candidate.departure_time).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    });

    return {
      shortId: candidate.id.slice(0, 8),
      split: `${(split / 100).toFixed(2)} USDC`,
      seats: `1/${candidate.max_passengers || 4}`,
      leaveTime,
      destination: candidate.destination,
      address: candidate.destination_address || "Luma side event",
      origin: candidate.origin || "Consensus venue",
    };
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const currentX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    setDragOffset(currentX - startX.current);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragOffset > SWIPE_THRESHOLD) {
      completeSwipe("right");
    } else if (dragOffset < -SWIPE_THRESHOLD) {
      completeSwipe("left");
    } else {
      setDragOffset(0);
    }
  };

  const completeSwipe = (direction: "left" | "right") => {
    setDragOffset(direction === "right" ? 800 : -800);
    setTimeout(() => {
      if (direction === "right") {
        if (currentCandidate) onInitiate(currentCandidate.id);
        return;
      }

      if (currentIndex < candidates.length - 1) {
        setCurrentIndex(prev => prev + 1);
        setDragOffset(0);
      } else {
        onSkip();
      }
    }, 240);
  };

  useEffect(() => {
    if (!isDragging) return;

    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);
    window.addEventListener("touchmove", handleDragMove);
    window.addEventListener("touchend", handleDragEnd);

    return () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, dragOffset]);

  if (!currentCandidate) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
        <div className="grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.03] text-slate-500">
          <span className="material-symbols-outlined text-3xl">route</span>
        </div>
        <h2 className="mt-5 font-display text-3xl font-black uppercase italic text-white">
          No more open rides
        </h2>
        <button
          onClick={onSkip}
          className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-action-green"
        >
          Back to search
        </button>
      </div>
    );
  }

  const displayData = getDisplayData(currentCandidate);
  const rotation = dragOffset / 28;
  const overlayOpacity = Math.min(Math.abs(dragOffset) / SWIPE_THRESHOLD, 1);

  return (
    <section className="relative flex flex-1 select-none flex-col items-center justify-center overflow-hidden p-5">
      <div className="w-full max-w-[430px]">
        <div className="mb-5 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.34em] text-action-green">
            Open ride groups
          </p>
          <h1 className="mt-2 font-display text-4xl font-black uppercase italic tracking-tight text-white">
            Join a room
          </h1>
          <div className="mt-4 flex justify-center gap-1.5">
            {candidates.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-action-green shadow-[0_0_8px_#00FF00]"
                    : "w-4 bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative h-[540px]">
          {nextCandidate && (
            <div className="absolute inset-x-3 top-6 h-[500px] rounded-[2rem] border border-white/5 bg-white/[0.025] opacity-50 blur-[1px]" />
          )}

          <div
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            style={{
              transform: `translateX(${dragOffset}px) rotate(${rotation}deg)`,
              transition: isDragging ? "none" : "transform 0.42s cubic-bezier(0.2, 0.8, 0.2, 1)",
              cursor: isDragging ? "grabbing" : "grab",
            }}
            className="absolute inset-0 z-20"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black/55 shadow-2xl backdrop-blur-2xl">
              <div className="relative border-b border-white/8 bg-white/[0.03] p-5">
                <div
                  className="absolute inset-0 grid place-items-center bg-action-green/90 text-black transition-opacity"
                  style={{ opacity: dragOffset > 40 ? overlayOpacity : 0 }}
                >
                  <p className="font-display text-4xl font-black uppercase italic tracking-[0.18em]">
                    Join
                  </p>
                </div>
                <div
                  className="absolute inset-0 grid place-items-center bg-red-500/90 text-white transition-opacity"
                  style={{ opacity: dragOffset < -40 ? overlayOpacity : 0 }}
                >
                  <p className="font-display text-4xl font-black uppercase italic tracking-[0.18em]">
                    Skip
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="grid size-14 place-items-center rounded-2xl border border-action-green/25 bg-action-green/10 text-action-green">
                      <span className="material-symbols-outlined text-3xl">local_taxi</span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-right">
                      <p className="text-[8px] font-black uppercase tracking-widest text-slate-600">
                        Room
                      </p>
                      <p className="font-mono text-xs font-black text-white">
                        {displayData.shortId}
                      </p>
                    </div>
                  </div>

                  <h2 className="font-display text-3xl font-black uppercase italic leading-tight text-white">
                    {displayData.destination}
                  </h2>
                  <p className="mt-3 truncate text-sm text-slate-400">{displayData.address}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["Leave", displayData.leaveTime],
                    ["Seats", displayData.seats],
                    ["Split", displayData.split],
                    ["From", displayData.origin],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="min-h-[88px] rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                    >
                      <p className="text-[9px] font-black uppercase tracking-[0.18em] text-slate-600">
                        {label}
                      </p>
                      <p className="mt-2 line-clamp-2 text-sm font-black text-white">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3 pt-5">
                  <button
                    onClick={event => {
                      event.stopPropagation();
                      completeSwipe("left");
                    }}
                    className="min-h-[56px] rounded-2xl border border-white/10 bg-white/[0.03] text-xs font-black uppercase tracking-[0.16em] text-slate-400 transition hover:bg-white/8 hover:text-white"
                  >
                    Skip
                  </button>
                  <button
                    onClick={event => {
                      event.stopPropagation();
                      completeSwipe("right");
                    }}
                    className="min-h-[56px] rounded-2xl bg-action-green text-xs font-black uppercase tracking-[0.16em] text-black shadow-[0_0_30px_rgba(0,255,0,0.2)] transition hover:scale-[1.02] active:scale-95"
                  >
                    Join ride
                  </button>
                </div>

                <p className="mt-4 text-center text-[10px] uppercase tracking-[0.18em] text-slate-600">
                  Swipe right to join, left to skip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyncDeck;
