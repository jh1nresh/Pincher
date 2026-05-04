"use client";

import React, { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { usePrivy } from "@privy-io/react-auth";

interface CoordinationProps {
  tripId: string;
  syncCode: string;
  bookingData: { isBooked: boolean; plate: string; vehicle: string };
  onUpdateBooking: (data: Partial<{ isBooked: boolean; plate: string; vehicle: string }>) => void;
  onProceed: () => void;
}

const Coordination: React.FC<CoordinationProps> = ({
  tripId,
  syncCode,
  bookingData,
  onUpdateBooking,
  onProceed,
}) => {
  const { user } = usePrivy();
  const [inputCode, setInputCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [showManifest, setShowManifest] = useState(false);
  const [passengers, setPassengers] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      if (!tripId) return;

      // 1. Fetch trip details (vehicle info)
      const { data: trip } = await supabase
        .from("trip_rooms")
        .select("license_plate, vehicle_type")
        .eq("id", tripId)
        .single();

      if (trip && trip.license_plate) {
        // If vehicle info exists, we can consider it "verified" or pre-fill
        // For now just store it locally or update parent if verified
      }

      // 2. Fetch Passengers
      const { data: pax } = await supabase
        .from("trip_passengers")
        .select("*")
        .eq("trip_id", tripId);

      if (pax) {
        setPassengers(
          pax.map(p => ({
            name: p.user_name || "User",
            role: p.is_driver ? "Driver" : "Peer",
            status: "Verified", // Assume joined = verified for now
            avatar: "person",
          })),
        );
      }

      // 3. Fetch Messages
      const { data: msgs } = await supabase
        .from("trip_messages")
        .select("*")
        .eq("trip_id", tripId)
        .order("created_at", { ascending: true });

      if (msgs) {
        setMessages(msgs);
      }
    };

    fetchData();
    setShowManifest(true);
  }, [tripId]);

  // Real-time subscriptions
  useEffect(() => {
    if (!tripId) return;

    const channel = supabase
      .channel("room-updates")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "trip_messages",
          filter: `trip_id=eq.${tripId}`,
        },
        payload => {
          setMessages(prev => [...prev, payload.new]);
        },
      )
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "trip_passengers",
          filter: `trip_id=eq.${tripId}`,
        },
        payload => {
          setPassengers(prev => [
            ...prev,
            {
              name: payload.new.user_name || "New User",
              role: "Peer",
              status: "Verified",
              avatar: "person",
            },
          ]);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [tripId]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleVerify = async () => {
    if (inputCode !== syncCode) {
      alert("Node ID Mismatch.");
      return;
    }

    setIsVerifying(true);

    // Fetch real vehicle info from Supabase if not already
    const { data: trip } = await supabase
      .from("trip_rooms")
      .select("license_plate, vehicle_type")
      .eq("id", tripId)
      .single();

    setTimeout(() => {
      onUpdateBooking({
        isBooked: true,
        plate: trip?.license_plate || "ABC-1234", // Fallback if empty in DB
        vehicle: trip?.vehicle_type || "White Tesla Model 3",
      });
      setIsVerified(true);
      setIsVerifying(false);
    }, 1500);
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !user || !tripId) return;

    const msg = {
      trip_id: tripId,
      user_id: user.id,
      user_name: "You", // In real app, get from profile
      content: newMessage.trim(),
    };

    // Optimistic update
    // setMessages(prev => [...prev, { ...msg, created_at: new Date().toISOString() }]);

    const { error } = await supabase.from("trip_messages").insert(msg);
    if (error) console.error("Error sending message:", error);

    setNewMessage("");
  };

  return (
    <div className="flex-1 flex flex-col bg-transparent max-w-xl mx-auto w-full px-6 py-8 page-transition overflow-hidden h-full">
      {/* Passenger Manifest */}
      <div
        className={`shrink-0 mb-8 bg-white/2 border border-white/5 p-8 rounded-[3rem] transition-all duration-700 ${showManifest ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      >
        <div className="flex flex-col items-center gap-6">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">
            Mesh Manifest
          </p>
          <div className="flex justify-center -space-x-4">
            {passengers.length === 0 && (
              <p className="text-xs text-slate-500">Waiting for peers...</p>
            )}
            {passengers.map((p, i) => (
              <div key={i} className="relative group" style={{ animationDelay: `${i * 100}ms` }}>
                <div
                  className={`size-16 rounded-2xl border-4 border-background-dark flex items-center justify-center transition-all ${
                    p.status === "Verified" || p.status === "Ready"
                      ? "bg-action-green text-black shadow-[0_0_20px_rgba(0,255,0,0.3)]"
                      : p.status === "Pending"
                        ? "bg-white/10 text-slate-400"
                        : "bg-white/5 text-slate-600"
                  }`}
                >
                  <span className="material-symbols-outlined text-3xl">{p.avatar}</span>
                </div>
                {p.status === "Verified" && (
                  <div className="absolute -top-1 -right-1 size-6 bg-black rounded-full flex items-center justify-center border-2 border-action-green">
                    <span className="material-symbols-outlined text-action-green text-[12px] font-black">
                      check
                    </span>
                  </div>
                )}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/95 text-[9px] font-black text-white px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none border border-white/10 shadow-2xl">
                  {p.name} • {p.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verification Section */}
      <div className="mb-6 shrink-0">
        <div className="glass-panel border-white/10 rounded-4xl p-10 shadow-2xl relative overflow-hidden bg-white/2">
          {!isVerified && !isVerifying ? (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="size-14 rounded-2xl bg-action-green/10 flex items-center justify-center text-action-green border border-action-green/20">
                    <span className="material-symbols-outlined text-3xl font-bold">nfc</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-1">
                      Peer Coordination
                    </p>
                    <h3 className="text-xl font-black text-white uppercase italic font-display">
                      Sync Node ID
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[9px] font-black text-action-green uppercase tracking-widest mb-1">
                    Your Protocol ID
                  </p>
                  <p className="text-2xl font-black text-white font-mono italic tracking-widest">
                    {syncCode}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <input
                  type="text"
                  maxLength={4}
                  placeholder="SYNC"
                  className="flex-1 bg-black/40 border border-white/10 rounded-2xl py-5 px-8 text-lg text-white text-center uppercase tracking-[0.8em] focus:ring-1 focus:ring-action-green outline-none font-mono shadow-inner"
                  value={inputCode}
                  onChange={e => setInputCode(e.target.value)}
                />
                <button
                  onClick={handleVerify}
                  disabled={inputCode.length < 4}
                  className={`px-10 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                    inputCode.length >= 4
                      ? "bg-action-green text-black shadow-[0_0_30px_rgba(0,255,0,0.4)]"
                      : "bg-white/5 text-slate-600 border border-white/5"
                  }`}
                >
                  Confirm
                </button>
              </div>
            </div>
          ) : isVerifying ? (
            <div className="flex flex-col items-center justify-center py-10 gap-4">
              <div className="size-10 border-2 border-action-green/20 border-t-action-green rounded-full animate-spin"></div>
              <p className="text-[10px] font-black text-action-green uppercase tracking-[0.6em]">
                Authorizing Smart Mesh...
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="size-16 rounded-3xl bg-action-green text-black flex items-center justify-center shadow-[0_0_20px_rgba(0,255,0,0.3)]">
                  <span className="material-symbols-outlined text-4xl font-black">
                    check_circle
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-action-green uppercase tracking-[0.5em] mb-1">
                    Node Verified
                  </p>
                  <h3 className="text-xl font-black text-white uppercase italic font-display">
                    {bookingData.vehicle}
                  </h3>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
                  Node Plate
                </p>
                <p className="text-2xl font-bold text-white tracking-widest font-mono uppercase italic">
                  {bookingData.plate}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Message Stream */}
      <div className="flex-1 overflow-y-auto space-y-6 py-4 scrollbar-hide min-h-0">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${m.user_id === user?.id || m.sender === "You" ? "items-end" : "items-start"}`}
            style={{ animationDelay: `${idx * 200}ms` }}
          >
            <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] mb-2 px-3">
              {m.user_name || m.sender}
            </p>
            <div
              className={`px-6 py-4 rounded-[1.8rem] text-[13px] leading-relaxed font-medium shadow-xl max-w-[85%] ${m.user_id === user?.id || m.sender === "You" ? "bg-white text-black rounded-tr-none font-semibold" : "bg-white/5 border border-white/10 text-white rounded-tl-none"}`}
            >
              {m.content || m.text}
            </div>
            <p className="text-[8px] font-bold text-slate-700 uppercase mt-2 px-3">
              {m.created_at
                ? new Date(m.created_at).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                : m.time}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="pt-8 space-y-4 shrink-0">
        {isVerified ? (
          <button
            onClick={onProceed}
            className="w-full bg-white text-black py-7 rounded-4xl font-black text-xl uppercase tracking-[0.3em] flex items-center justify-center gap-5 shadow-2xl hover:scale-[1.02] transition-all font-display"
          >
            Launch Journey
            <span className="material-symbols-outlined font-black text-2xl">rocket_launch</span>
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <input
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSendMessage()}
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-8 py-5 text-sm focus:ring-1 focus:ring-white text-white outline-none placeholder:text-slate-700 shadow-inner"
              placeholder="Message passengers..."
              type="text"
            />
            <button
              onClick={handleSendMessage}
              className="size-16 rounded-2xl bg-white text-black flex items-center justify-center transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              <span className="material-symbols-outlined font-black text-2xl">send</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Coordination;
