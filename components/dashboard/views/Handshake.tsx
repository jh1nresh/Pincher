"use client";

import React, { useEffect, useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { supabase } from "@/lib/supabase";

interface HandshakeProps {
  tripId: string;
  onConfirm: () => void;
}

interface TripPaymentInfo {
  estimated_cost?: number;
  max_passengers?: number;
  payer_id?: string;
  destination?: string;
}

const Handshake: React.FC<HandshakeProps> = ({ tripId, onConfirm }) => {
  const { user } = usePrivy();
  const [trip, setTrip] = useState<TripPaymentInfo | null>(null);
  const [txHash, setTxHash] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrip = async () => {
      if (!tripId) return;

      const { data } = await supabase
        .from("trip_rooms")
        .select("estimated_cost, max_passengers, payer_id, destination")
        .eq("id", tripId)
        .single();

      if (data) setTrip(data);
    };

    fetchTrip();
  }, [tripId]);

  const estimatedTotal = trip?.estimated_cost || 4200;
  const riderCount = trip?.max_passengers || 4;
  const splitAmount = Math.ceil(estimatedTotal / riderCount);
  const splitDisplay = (splitAmount / 100).toFixed(2);

  const handleConfirmTransfer = async () => {
    if (!user?.id || !tripId) return;

    setIsProcessing(true);
    setError(null);

    try {
      await supabase
        .from("trip_passengers")
        .update({ payment_status: "paid", payment_method: "usdc" })
        .eq("trip_id", tripId)
        .eq("user_id", user.id);

      if (txHash.trim()) {
        const { error: confirmationError } = await supabase.from("payment_confirmations").insert({
          trip_id: tripId,
          payer_id: user.id,
          recipient_id: trip?.payer_id || "ride-organizer",
          amount: splitAmount,
          method: "usdc",
          status: "pending",
          payer_confirmed: true,
          tx_hash: txHash.trim(),
          created_at: new Date().toISOString(),
        });

        if (confirmationError) {
          console.warn("Payment confirmation table unavailable:", confirmationError);
        }
      }

      onConfirm();
    } catch (err) {
      console.error("USDC payment recording failed:", err);
      setError("Could not record payment. You can still coordinate with the group in Telegram.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex h-full flex-1 items-center justify-center p-5 page-transition">
      <div className="w-full max-w-2xl">
        <div className="mb-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.34em] text-action-green">
            Direct Base USDC
          </p>
          <h1 className="mt-3 font-display text-4xl font-black uppercase italic tracking-tight text-white md:text-5xl">
            Record your split
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500">
            Pincher does not custody the ride payment yet. Confirm the organizer address in
            Telegram, send your share, then optionally attach the transaction hash.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-black/40 p-5 shadow-2xl backdrop-blur-2xl md:p-7">
          <div className="grid gap-4 md:grid-cols-[0.75fr_1fr]">
            <div className="rounded-2xl border border-action-green/20 bg-action-green/10 p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-action-green/80">
                Estimated split
              </p>
              <p className="mt-3 font-display text-5xl font-black italic text-white">
                {splitDisplay}
              </p>
              <p className="mt-2 text-xs font-bold text-action-green">USDC on Base</p>
              <div className="mt-5 border-t border-action-green/15 pt-4 text-xs leading-5 text-slate-400">
                Total estimate ${(estimatedTotal / 100).toFixed(0)} divided across {riderCount}{" "}
                riders.
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">
                  Destination
                </p>
                <p className="mt-2 text-sm font-black text-white">
                  {trip?.destination || "Selected side event"}
                </p>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-600">
                  Organizer address
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Ask the ride caller for their Base USDC address in the group. Wallet capture is
                  not automated in this MVP.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <label className="block">
              <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
                Transaction hash
              </span>
              <input
                value={txHash}
                onChange={event => setTxHash(event.target.value)}
                placeholder="0x... optional"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 font-mono text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-action-green/50"
              />
            </label>

            {error && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              disabled={isProcessing}
              onClick={handleConfirmTransfer}
              className={`flex w-full min-h-[62px] items-center justify-center gap-3 rounded-2xl text-sm font-black uppercase tracking-[0.18em] transition-all ${
                isProcessing
                  ? "bg-white/5 text-slate-600"
                  : "bg-white text-black shadow-2xl hover:scale-[1.01] active:scale-95"
              }`}
            >
              {isProcessing ? "Recording..." : "Mark USDC as sent"}
              {!isProcessing && (
                <span className="material-symbols-outlined text-xl">check_circle</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handshake;
