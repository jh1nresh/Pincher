'use client';

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

interface HandshakeProps {
  tripId: string;
  onConfirm: () => void;
}

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

const Handshake: React.FC<HandshakeProps> = ({ tripId, onConfirm }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      // Check if Stripe keys are configured
      if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
        // Demo mode - skip actual payment
        console.log('Stripe not configured, using demo mode');
        setTimeout(() => {
          onConfirm();
        }, 2000);
        return;
      }

      // Create checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: 295, // $2.95 in cents
          matchId: tripId,
        }),
      });

      const { url, error: apiError } = await response.json();

      if (apiError) {
        throw new Error(apiError);
      }

      // Redirect to Stripe Checkout
      if (url) {
        window.location.href = url;
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError('Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 h-full page-transition">
      <div className="w-full max-w-xl space-y-8">
        <div className="text-center space-y-2">
          <p className="text-[10px] font-black text-action-green uppercase tracking-[0.4em]">Protocol Layer</p>
          <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter font-display">Protocol Match Fee</h1>
        </div>

        <div className="glass-panel rounded-[2.5rem] p-8 md:p-10 border-white/10 shadow-2xl space-y-8">
          <div className="bg-action-green/5 border border-action-green/20 rounded-2xl p-6 text-center">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Securing Connection to Jordan B.</p>
            <p className="text-xs text-action-green/80 font-medium">Fee will be refunded if peer coordination fails.</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-slate-400 uppercase">Mesh Access</span>
              <span className="text-lg font-black text-white">$2.50</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-slate-400 uppercase">Platform Fee</span>
              <span className="text-lg font-black text-white">$0.45</span>
            </div>
            <div className="pt-4 border-t border-white/10 flex justify-between items-end">
              <span className="text-sm font-black text-white uppercase tracking-widest">Total Match Fee</span>
              <div className="text-right">
                <p className="text-5xl font-black text-white italic font-display">$2<span className="text-xl">.95</span></p>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          <button 
            disabled={isProcessing}
            onClick={handlePayment}
            className={`w-full py-7 rounded-3xl font-black text-xl tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-4 ${
              isProcessing ? 'bg-white/5 text-slate-600' : 'bg-white text-black hover:scale-[1.01] shadow-2xl'
            }`}
          >
            {isProcessing ? 'Securing Node...' : 'Pay Match Fee'}
            {!isProcessing && <span className="material-symbols-outlined font-black">lock_open</span>}
          </button>

          {/* Payment methods hint */}
          <div className="flex justify-center items-center gap-4 pt-2">
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Accepts</span>
            <div className="flex gap-2 opacity-50">
              <span className="text-xs">💳</span>
              <span className="text-[9px] text-slate-500">Apple Pay</span>
              <span className="text-[9px] text-slate-500">Google Pay</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 opacity-30 text-[9px] font-black uppercase tracking-[0.2em]">
          <span>Stripe Secure Checkout</span>
          <span>•</span>
          <span>Encrypted Payment</span>
        </div>
      </div>
    </div>
  );
};

export default Handshake;
