"use client";

import React, { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { supabase } from "@/lib/supabase";

interface PaymentSelectProps {
  tripId: string;
  estimatedCost: number; // Total Uber/Lyft cost in cents
  passengerCount: number;
  payerVenmo?: string; // The person who called the Uber
  onComplete: (method: "venmo" | "zelle" | "usdc") => void;
  onBack: () => void;
}

type PaymentMethod = "venmo" | "zelle" | "usdc" | null;

const PaymentSelect: React.FC<PaymentSelectProps> = ({
  tripId,
  estimatedCost,
  passengerCount,
  payerVenmo,
  onComplete,
  onBack,
}) => {
  const { user } = usePrivy();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null);
  const [userVenmo, setUserVenmo] = useState("");
  const [userZelle, setUserZelle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showHandleInput, setShowHandleInput] = useState(false);
  const [copied, setCopied] = useState(false);

  const perPersonCost = Math.ceil(estimatedCost / passengerCount);
  const perPersonDisplay = (perPersonCost / 100).toFixed(2);

  // Fetch user's saved payment handles
  useEffect(() => {
    const fetchProfile = async () => {
      if (!user?.id) return;

      const { data } = await supabase
        .from("user_profiles")
        .select("venmo_handle, zelle_handle")
        .eq("user_id", user.id)
        .single();

      if (data) {
        setUserVenmo(data.venmo_handle || "");
        setUserZelle(data.zelle_handle || "");
      }
    };
    fetchProfile();
  }, [user?.id]);

  const handleSelectMethod = (method: PaymentMethod) => {
    setSelectedMethod(method);

    if (method === "venmo" || method === "zelle") {
      // Check if user has saved handle
      const hasHandle = method === "venmo" ? userVenmo : userZelle;
      if (!hasHandle) {
        setShowHandleInput(true);
      }
    }
  };

  const handleCopyPayerHandle = () => {
    if (payerVenmo) {
      navigator.clipboard.writeText(payerVenmo);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleConfirm = async () => {
    if (!selectedMethod || !user?.id) return;
    setIsSubmitting(true);

    try {
      // Save user's payment handle if provided
      if (selectedMethod === "venmo" && userVenmo) {
        await supabase.from("user_profiles").upsert(
          {
            user_id: user.id,
            venmo_handle: userVenmo,
          },
          { onConflict: "user_id" },
        );
      } else if (selectedMethod === "zelle" && userZelle) {
        await supabase.from("user_profiles").upsert(
          {
            user_id: user.id,
            zelle_handle: userZelle,
          },
          { onConflict: "user_id" },
        );
      }

      // Update payment status
      await supabase
        .from("trip_passengers")
        .update({
          payment_method: selectedMethod,
          payment_status: "pending_p2p",
        })
        .eq("trip_id", tripId)
        .eq("user_id", user.id);

      onComplete(selectedMethod);
    } catch (error) {
      console.error("Payment setup error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col p-6 h-full page-transition">
      <div className="w-full max-w-xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <p className="text-[10px] font-black text-action-green uppercase tracking-[0.4em]">
            Split Payment
          </p>
          <h1 className="text-3xl font-black text-white italic uppercase tracking-tighter font-display">
            Pay Your Share
          </h1>
          <div className="pt-4">
            <p className="text-5xl font-black text-white italic font-display">
              ${perPersonDisplay}
            </p>
            <p className="text-xs text-slate-500 mt-2">
              ${(estimatedCost / 100).toFixed(2)} total ÷ {passengerCount} people
            </p>
          </div>
        </div>

        {/* Payer Info */}
        {payerVenmo && (
          <div className="bg-action-green/5 border border-action-green/20 rounded-2xl p-4">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">
              Pay to
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-[#3D95CE] flex items-center justify-center">
                  <span className="text-white font-black text-sm">V</span>
                </div>
                <span className="text-lg font-bold text-white">{payerVenmo}</span>
              </div>
              <button
                onClick={handleCopyPayerHandle}
                className="px-4 py-2 bg-white/10 rounded-xl text-xs font-bold text-white hover:bg-white/20 transition-all"
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>
        )}

        {/* Payment Options */}
        <div className="space-y-3">
          {/* Venmo - Primary */}
          <button
            onClick={() => handleSelectMethod("venmo")}
            className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
              selectedMethod === "venmo"
                ? "border-[#3D95CE] bg-[#3D95CE]/10"
                : "border-white/10 bg-white/2 hover:border-white/20"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-[#3D95CE] flex items-center justify-center shrink-0">
                <span className="text-white font-black text-xl">V</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-white">Venmo</span>
                  <span className="px-2 py-0.5 bg-white/10 text-slate-400 text-[9px] font-black uppercase rounded-full">
                    Backup
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Useful if the group does not want crypto
                </p>
              </div>
              {selectedMethod === "venmo" && (
                <span className="material-symbols-outlined text-[#3D95CE]">check_circle</span>
              )}
            </div>
          </button>

          {/* Zelle */}
          <button
            onClick={() => handleSelectMethod("zelle")}
            className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
              selectedMethod === "zelle"
                ? "border-[#6D1ED4] bg-[#6D1ED4]/10"
                : "border-white/10 bg-white/2 hover:border-white/20"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-[#6D1ED4] flex items-center justify-center shrink-0">
                <span className="text-white font-black text-xl">Z</span>
              </div>
              <div className="flex-1">
                <span className="text-lg font-black text-white">Zelle</span>
                <p className="text-xs text-slate-400 mt-0.5">Bank transfer • Free • Instant</p>
              </div>
              {selectedMethod === "zelle" && (
                <span className="material-symbols-outlined text-[#6D1ED4]">check_circle</span>
              )}
            </div>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">
              or
            </span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* USDC direct split */}
          <button
            onClick={() => handleSelectMethod("usdc")}
            className={`w-full p-5 rounded-2xl border-2 transition-all text-left ${
              selectedMethod === "usdc"
                ? "border-action-green bg-action-green/10"
                : "border-white/10 bg-white/2 hover:border-white/20"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
                <span className="text-white font-black text-lg">$</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black text-white">Direct USDC</span>
                  <span className="px-2 py-0.5 bg-action-green/20 text-action-green text-[9px] font-black uppercase rounded-full">
                    Recommended
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Base USDC • paid directly to the ride organizer
                </p>
              </div>
              {selectedMethod === "usdc" && (
                <span className="material-symbols-outlined text-action-green">check_circle</span>
              )}
            </div>

            {/* USDC Info */}
            {selectedMethod === "usdc" && (
              <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-action-green text-sm">
                    verified
                  </span>
                  <p className="text-xs text-slate-400">
                    MVP records a direct USDC transfer to the organizer
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-action-green text-sm">
                    receipt_long
                  </span>
                  <p className="text-xs text-slate-400">
                    Paste a tx hash on the next screen if the group wants a receipt
                  </p>
                </div>
              </div>
            )}
          </button>
        </div>

        {/* Handle Input (if needed) */}
        {showHandleInput && (selectedMethod === "venmo" || selectedMethod === "zelle") && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
            <p className="text-xs font-bold text-white">
              Save your {selectedMethod === "venmo" ? "Venmo" : "Zelle"} for future rides
            </p>
            <input
              type="text"
              placeholder={selectedMethod === "venmo" ? "@username" : "email or phone"}
              value={selectedMethod === "venmo" ? userVenmo : userZelle}
              onChange={e =>
                selectedMethod === "venmo"
                  ? setUserVenmo(e.target.value)
                  : setUserZelle(e.target.value)
              }
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-white/30"
            />
            <p className="text-[10px] text-slate-500">
              Optional • Helps others pay you when you're the driver
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <button
            onClick={handleConfirm}
            disabled={!selectedMethod || isSubmitting}
            className={`w-full py-5 rounded-2xl font-black text-lg tracking-wider uppercase transition-all ${
              selectedMethod && !isSubmitting
                ? "bg-action-green text-black hover:scale-[1.01] shadow-[0_0_40px_rgba(0,255,0,0.3)]"
                : "bg-white/5 text-slate-600 cursor-not-allowed"
            }`}
          >
            {isSubmitting
              ? "Processing..."
              : selectedMethod === "usdc"
                ? "Continue to USDC receipt"
                : "I'll Pay Now"}
          </button>

          <button
            onClick={onBack}
            className="w-full py-4 text-slate-500 text-sm font-bold hover:text-white transition-colors"
          >
            Back
          </button>
        </div>

        {/* Trust Note */}
        <p className="text-center text-[10px] text-slate-600 pt-2">
          {selectedMethod === "usdc"
            ? "Direct Base USDC • no escrow in this MVP"
            : "Honor system • Rate riders after trip"}
        </p>
      </div>
    </div>
  );
};

export default PaymentSelect;
