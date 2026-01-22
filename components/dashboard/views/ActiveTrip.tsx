import React from 'react';
import { supabase } from '@/lib/supabase';

interface ActiveTripProps {
  tripId: string;
  onEnd: () => void;
}

const ActiveTrip: React.FC<ActiveTripProps> = ({ tripId, onEnd }) => {
  const [isEnding, setIsEnding] = React.useState(false);

  const passengers = [
    { name: 'Jordan', role: 'Driver', avatar: 'directions_car', status: 'Active' },
    { name: 'You', role: 'Peer', avatar: 'person', status: 'Active' },
    { name: 'Sarah L.', role: 'Peer', avatar: 'person', status: 'Active' },
    { name: 'Mike D.', role: 'Peer', avatar: 'person', status: 'Active' },
  ];

  const handleEndStats = async () => {
    if (!tripId) {
      onEnd();
      return;
    }
    
    setIsEnding(true);
    
    // Update trip status to completed
    const { error } = await supabase
      .from('trip_rooms')
      .update({ status: 'completed' })
      .eq('id', tripId);

    if (error) {
      console.error('Error ending trip:', error);
    }
    
    setIsEnding(false);
    onEnd();
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden page-transition">
      <div className="flex-1 overflow-y-auto px-6 py-8 md:px-10 scrollbar-hide">
        <div className="max-w-xl mx-auto w-full space-y-12 pb-24">
          
          <div className="flex justify-between items-end border-b border-white/10 pb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="size-2 bg-action-green rounded-full animate-pulse shadow-[0_0_10px_#00FF00]"></span>
                <p className="text-[10px] font-black text-action-green uppercase tracking-[0.5em]">Mesh Protocol Live</p>
              </div>
              <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter font-display">Journey In Motion</h1>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Relay Hash</p>
              <p className="text-xs font-mono font-bold text-white tracking-widest">{tripId.slice(0, 8)}</p>
            </div>
          </div>

          {/* Passenger Manifest */}
          <div className="space-y-6">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em] text-center">Active Node Manifest</p>
            <div className="grid grid-cols-2 gap-4">
              {passengers.map((p, i) => (
                <div key={i} className={`glass-panel border rounded-3xl p-5 flex items-center gap-5 group transition-all ${p.name === 'You' ? 'border-action-green/30 bg-action-green/5' : 'border-white/5'}`}>
                  <div className={`size-12 rounded-2xl flex items-center justify-center transition-all ${p.name === 'You' ? 'bg-action-green text-black' : 'bg-white/5 text-slate-400 group-hover:text-white'}`}>
                    <span className="material-symbols-outlined text-2xl">{p.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-black text-white uppercase truncate">{p.name}</p>
                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{p.role}</p>
                  </div>
                  <div className="size-2 rounded-full bg-action-green animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Vehicle & Settlement Info */}
          <div className="glass-panel rounded-[3rem] p-10 border-white/10 flex flex-col items-center justify-between gap-10 shadow-2xl relative overflow-hidden bg-white/1">
            <div className="absolute -top-10 -right-10 p-10 opacity-[0.03] scale-150 rotate-12">
               <span className="material-symbols-outlined text-[200px] text-white">verified</span>
            </div>
            
            <div className="space-y-6 w-full text-center relative z-10">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Assigned Smart Node</p>
                <h2 className="text-3xl font-black text-white italic uppercase font-display tracking-tight">Tesla Model 3</h2>
              </div>
              <div className="flex justify-center">
                <div className="bg-black border border-white/20 px-8 py-3 rounded-2xl font-mono text-2xl font-black text-white tracking-[0.3em] shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] uppercase">ABC-1234</div>
              </div>
            </div>
            
            <div className="w-full grid grid-cols-2 gap-6 relative z-10">
               <div className="bg-black/40 border border-white/5 p-8 rounded-4xl shadow-inner text-center">
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Protocol Yield</p>
                  <p className="text-4xl font-black text-action-green italic font-display tracking-tighter">98%</p>
               </div>
               <div className="bg-black/40 border border-white/5 p-8 rounded-4xl shadow-inner text-center">
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Settlement</p>
                  <p className="text-xs font-black text-white uppercase tracking-[0.2em] flex items-center gap-2 justify-center h-full">
                    Streaming
                    <span className="size-2 bg-action-green rounded-full animate-ping"></span>
                  </p>
               </div>
            </div>
          </div>

          {/* End Button */}
          <div className="pt-8 flex flex-col items-center">
            <button 
              onClick={handleEndStats}
              disabled={isEnding}
              className="w-full bg-white text-black py-8 rounded-[2.5rem] font-black font-display text-2xl tracking-[0.2em] uppercase hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] flex items-center justify-center gap-5 group disabled:opacity-50"
            >
              {isEnding ? 'Finalizing...' : 'End Journey'}
              {!isEnding && <span className="material-symbols-outlined font-black group-hover:translate-x-2 transition-transform text-3xl">logout</span>}
            </button>
            <p className="text-[9px] font-black text-slate-700 uppercase tracking-widest mt-6">Protocol will finalize on exit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveTrip;
