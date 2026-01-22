import React, { useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface HostingProps {
  tripId: string;
  onPeerFound: () => void;
  onCancel: () => void;
}

const Hosting: React.FC<HostingProps> = ({ tripId, onPeerFound, onCancel }) => {
  useEffect(() => {
    if (!tripId) return;

    // Subscribe to new passengers joining this trip
    const channel = supabase
      .channel('host-room-updates')
      .on(
        'postgres_changes',
        { 
          event: 'INSERT', 
          schema: 'public', 
          table: 'trip_passengers', 
          filter: `trip_id=eq.${tripId}` 
        },
        (payload) => {
          // If a new passenger joins (and it's not the driver/host themselves), trigger match
          if (payload.new && !payload.new.is_driver) {
             onPeerFound();
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [tripId, onPeerFound]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 h-full bg-transparent page-transition">
      <div className="relative mb-16 flex items-center justify-center">
        <div className="absolute size-48 border border-action-green/10 rounded-full animate-ping"></div>
        <div className="size-32 bg-black/60 border-2 border-action-green/30 rounded-[2.5rem] flex items-center justify-center shadow-[0_0_60px_rgba(0,255,0,0.1)] backdrop-blur-3xl">
          <span className="material-symbols-outlined text-action-green text-5xl animate-pulse">radar</span>
        </div>
      </div>
      
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter font-display">Broacasting Node</h2>
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] animate-pulse">Waiting for peers nearby...</p>
      </div>

      <div className="mt-20 w-full max-w-xs space-y-4">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
          <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Trip ID</p>
          <p className="text-xl font-black text-white italic font-mono">{tripId.slice(0, 8)}</p>
        </div>
        <button 
          onClick={onCancel}
          className="w-full py-4 text-[9px] font-black text-red-500/50 uppercase tracking-widest hover:text-red-500 transition-colors"
        >
          Cancel Broadcast
        </button>
      </div>
    </div>
  );
};

export default Hosting;
