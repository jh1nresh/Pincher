'use client';

import React, { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { supabase } from '@/lib/supabase';

const Profile: React.FC = () => {
  const { user, logout, authenticated } = usePrivy();
  const [history, setHistory] = useState<any[]>([]);
  const [venmoHandle, setVenmoHandle] = useState('');
  const [zelleHandle, setZelleHandle] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  
  // Get display name from Privy user
  const displayName = user?.email?.address?.split('@')[0] 
    || user?.phone?.number 
    || user?.wallet?.address?.slice(0, 8) 
    || 'User';

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;
      
      // Fetch profile
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('venmo_handle, zelle_handle, points')
        .eq('user_id', user.id)
        .single();
      
      if (profile) {
        setVenmoHandle(profile.venmo_handle || '');
        setZelleHandle(profile.zelle_handle || '');
      }
      
      // Fetch history
      const { data: historyData } = await supabase
        .from('trip_passengers')
        .select(`
          *,
          trip_rooms (
            destination,
            origin,
            created_at,
            actual_cost
          )
        `)
        .eq('user_id', user.id)
        .order('joined_at', { ascending: false })
        .limit(10);
        
      if (historyData) {
        setHistory(historyData.map((item: any) => ({
          id: item.id,
          date: new Date(item.joined_at).toISOString().split('T')[0],
          origin: item.trip_rooms?.origin || 'Unknown',
          dest: item.trip_rooms?.destination || 'Unknown',
          saved: item.trip_rooms?.actual_cost 
            ? `$${((item.trip_rooms.actual_cost * 0.75) / 100).toFixed(2)}`
            : '$12.50'
        })));
      }
    };
    
    fetchData();
  }, [user]);

  const handleSavePaymentInfo = async () => {
    if (!user?.id) return;
    setIsSaving(true);
    setSaveMessage('');

    try {
      const { error } = await supabase
        .from('user_profiles')
        .upsert({
          user_id: user.id,
          venmo_handle: venmoHandle || null,
          zelle_handle: zelleHandle || null,
        }, { onConflict: 'user_id' });

      if (error) throw error;
      
      setSaveMessage('Saved!');
      setIsEditing(false);
      setTimeout(() => setSaveMessage(''), 2000);
    } catch (err) {
      console.error('Save error:', err);
      setSaveMessage('Failed to save');
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = '/';
  };

  return (
    <div className="flex-1 overflow-y-auto h-full page-transition">
      <div className="max-w-xl mx-auto w-full px-6 py-12 space-y-8 pb-24">
        
        {/* Profile Header */}
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

        {/* Payment Methods */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Payment Methods</p>
            {!isEditing ? (
              <button 
                onClick={() => setIsEditing(true)}
                className="text-[10px] font-black text-action-green uppercase tracking-widest hover:underline"
              >
                Edit
              </button>
            ) : (
              <div className="flex items-center gap-3">
                {saveMessage && (
                  <span className={`text-[10px] font-bold ${saveMessage === 'Saved!' ? 'text-action-green' : 'text-red-400'}`}>
                    {saveMessage}
                  </span>
                )}
                <button 
                  onClick={() => setIsEditing(false)}
                  className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-white"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="bg-white/2 border border-white/5 rounded-3xl p-6 space-y-5">
            {/* Venmo */}
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-[#3D95CE] flex items-center justify-center shrink-0">
                <span className="text-white font-black text-xl">V</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-400 mb-1">Venmo</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={venmoHandle}
                    onChange={(e) => setVenmoHandle(e.target.value)}
                    placeholder="@username"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-action-green/50"
                  />
                ) : (
                  <p className="text-white font-bold">
                    {venmoHandle || <span className="text-slate-600">Not set</span>}
                  </p>
                )}
              </div>
            </div>

            {/* Zelle */}
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-xl bg-[#6D1ED4] flex items-center justify-center shrink-0">
                <span className="text-white font-black text-xl">Z</span>
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-slate-400 mb-1">Zelle</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={zelleHandle}
                    onChange={(e) => setZelleHandle(e.target.value)}
                    placeholder="email or phone"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-action-green/50"
                  />
                ) : (
                  <p className="text-white font-bold">
                    {zelleHandle || <span className="text-slate-600">Not set</span>}
                  </p>
                )}
              </div>
            </div>

            {/* Save Button */}
            {isEditing && (
              <button
                onClick={handleSavePaymentInfo}
                disabled={isSaving}
                className="w-full mt-2 py-3 rounded-xl bg-action-green text-black font-black text-sm uppercase tracking-wider hover:scale-[1.01] transition-all disabled:opacity-50"
              >
                {isSaving ? 'Saving...' : 'Save Payment Info'}
              </button>
            )}
          </div>

          <p className="text-[10px] text-slate-600 px-2">
            Your payment handles are shared with ride partners so they can pay you when you're the driver.
          </p>
        </section>

        {/* Trip History */}
        <section className="space-y-4">
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Trip History</p>
          <div className="space-y-3">
            {history.length === 0 && (
              <div className="p-6 text-center border border-white/5 rounded-3xl bg-white/2">
                <span className="material-symbols-outlined text-4xl text-slate-700 mb-2">directions_car</span>
                <p className="text-xs text-slate-500 uppercase">No trips yet</p>
                <p className="text-[10px] text-slate-600 mt-1">Your completed rides will appear here</p>
              </div>
            )}
            {history.map((trip) => (
              <div key={trip.id} className="bg-white/3 border border-white/5 p-5 rounded-3xl flex justify-between items-center hover:border-white/20 transition-all">
                <div>
                  <p className="text-[8px] font-mono text-slate-600 mb-1">{trip.date}</p>
                  <h4 className="text-sm font-black text-white">{trip.origin} → {trip.dest}</h4>
                </div>
                <div className="text-right">
                  <p className="text-[8px] font-black text-slate-500 uppercase mb-1">Saved</p>
                  <p className="text-lg font-black text-action-green italic">{trip.saved}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Logout */}
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
