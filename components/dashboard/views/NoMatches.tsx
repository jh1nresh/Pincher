'use client';

import React from 'react';

interface NoMatchesProps {
  origin: string;
  destination: string;
  onHost: () => void;
  onBack: () => void;
}

const NoMatches: React.FC<NoMatchesProps> = ({ origin, destination, onHost, onBack }) => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 h-full page-transition">
      <div className="max-w-md w-full text-center space-y-8">
        
        {/* Illustration */}
        <div className="relative">
          <div className="absolute inset-0 bg-action-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative size-40 mx-auto bg-white/5 border border-white/10 rounded-[3rem] flex items-center justify-center">
            <div className="absolute inset-4 border-2 border-dashed border-white/10 rounded-[2rem] animate-spin-slow"></div>
            <span className="material-symbols-outlined text-6xl text-slate-600">person_search</span>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h2 className="text-3xl font-black text-white italic uppercase tracking-tight font-display">
            No Rides Found
          </h2>
          <p className="text-sm text-slate-400">
            No one is heading from <span className="text-white font-bold">{origin}</span> to <span className="text-white font-bold">{destination}</span> yet.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-action-green/10 to-action-green/5 border border-action-green/20 rounded-3xl p-8 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-4xl">🚀</span>
            <h3 className="text-2xl font-black text-action-green italic uppercase font-display">
              Be the First!
            </h3>
          </div>
          <p className="text-sm text-slate-400">
            Create a ride and others will join you. Save up to <span className="text-action-green font-bold">75%</span> on your trip!
          </p>
          
          <button
            onClick={onHost}
            className="w-full py-5 rounded-2xl bg-action-green text-black font-black text-lg uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_40px_rgba(0,255,0,0.3)] flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined">add_circle</span>
            Host This Ride
          </button>
        </div>

        {/* Stats hint */}
        <div className="flex justify-center gap-8 opacity-60">
          <div className="text-center">
            <p className="text-2xl font-black text-white">~5</p>
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Min Avg Wait</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-black text-white">4</p>
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Max Riders</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-black text-action-green">$0</p>
            <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Platform Fee</p>
          </div>
        </div>

        {/* Back button */}
        <button
          onClick={onBack}
          className="text-sm text-slate-500 hover:text-white transition-colors"
        >
          ← Choose different locations
        </button>
      </div>

      {/* Background decoration */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default NoMatches;
