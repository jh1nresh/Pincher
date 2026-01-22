import React, { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { supabase } from '@/lib/supabase';

const Profile: React.FC = () => {
  const { user, logout, authenticated } = usePrivy();
  const [history, setHistory] = useState<any[]>([]);
  
  // Get display name from Privy user
  const displayName = user?.email?.address?.split('@')[0] 
    || user?.phone?.number 
    || user?.wallet?.address?.slice(0, 8) 
    || 'User';

  useEffect(() => {
    const fetchHistory = async () => {
      if (!user) return;
      
      const { data, error } = await supabase
        .from('trip_passengers')
        .select(`
          *,
          trip_rooms (
            destination,
            origin,
            created_at
          )
        `)
        .eq('user_id', user.id)
        .order('joined_at', { ascending: false });
        
      if (data) {
        setHistory(data.map((item: any) => ({
          id: item.trip_id.slice(0, 6),
          date: new Date(item.joined_at).toISOString().split('T')[0],
          dest: item.trip_rooms?.destination || 'Unknown Station',
          saved: '$12.50' // Placeholder calculation
        })));
      }
    };
    
    fetchHistory();
  }, [user]);

  const handleLogout = async () => {
    await logout();
    window.location.href = '/';
  };

  return (
    <div className="flex-1 overflow-y-auto h-full page-transition">
      <div className="max-w-xl mx-auto w-full px-6 py-12 space-y-10 pb-24">
        
        <section className="bg-white/2 border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center text-center gap-4">
          <div className="size-24 rounded-3xl bg-black border-2 border-action-green flex items-center justify-center text-action-green shadow-[0_0_30px_rgba(0,255,0,0.1)]">
            <span className="material-symbols-outlined text-5xl">person</span>
          </div>
          <div>
            <h1 className="text-2xl font-black text-white uppercase italic font-display">{displayName}</h1>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              {authenticated ? 'Connected' : 'Not Connected'}
            </p>
          </div>
        </section>

        <div className="space-y-4">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Trip History</p>
          <div className="space-y-3">
             {history.length === 0 && (
                <div className="p-6 text-center border border-white/5 rounded-3xl bg-white/2">
                  <p className="text-xs text-slate-500 uppercase">No trips yet</p>
                </div>
             )}
            {history.map((trip) => (
              <div key={trip.id} className="bg-white/3 border border-white/5 p-6 rounded-4xl flex justify-between items-center hover:border-white/20 transition-all">
                <div>
                  <p className="text-[8px] font-mono text-slate-600 mb-1">{trip.date}</p>
                  <h4 className="text-sm font-black text-white uppercase">{trip.dest}</h4>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-black text-slate-500 uppercase mb-1">Saved</p>
                  <p className="text-lg font-black text-action-green italic">{trip.saved}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={handleLogout}
          className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black text-red-500 uppercase tracking-widest hover:bg-red-500/10 transition-all"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
