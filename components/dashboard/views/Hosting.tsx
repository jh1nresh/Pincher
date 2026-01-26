'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface HostingProps {
  tripId: string;
  onPeerFound: () => void;
  onCancel: () => void;
}

const Hosting: React.FC<HostingProps> = ({ tripId, onPeerFound, onCancel }) => {
  const [tripInfo, setTripInfo] = useState<{ origin?: string; destination?: string; passengerCount: number }>({ passengerCount: 1 });
  const [copied, setCopied] = useState(false);

  // Fetch trip info
  useEffect(() => {
    const fetchTrip = async () => {
      if (!tripId) return;
      const { data } = await supabase
        .from('trip_rooms')
        .select('origin, destination')
        .eq('id', tripId)
        .single();
      
      if (data) {
        setTripInfo(prev => ({ ...prev, origin: data.origin, destination: data.destination }));
      }
    };
    fetchTrip();
  }, [tripId]);

  // Subscribe to new passengers
  useEffect(() => {
    if (!tripId) return;

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
          if (payload.new && !payload.new.is_driver) {
            setTripInfo(prev => ({ ...prev, passengerCount: prev.passengerCount + 1 }));
            toast.success('有人加入了你的行程！');
            if (tripInfo.passengerCount >= 1) {
              onPeerFound();
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [tripId, onPeerFound, tripInfo.passengerCount]);

  const shareUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}/trips?join=${tripId}` 
    : '';

  const shareText = tripInfo.origin && tripInfo.destination
    ? `🚗 我在找人一起從 ${tripInfo.origin} 到 ${tripInfo.destination}！用 Pincher 一起拼車省錢 💰`
    : '🚗 來 Pincher 一起拼車省錢！';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success('連結已複製！');
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('複製失敗');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Pincher 拼車',
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const handleShareWeChat = () => {
    // WeChat doesn't have direct share API, copy link instead
    handleCopyLink();
    toast('請打開微信貼上連結分享', { icon: '💬' });
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 h-full bg-transparent page-transition">
      <div className="max-w-md w-full space-y-8">
        
        {/* Radar Animation */}
        <div className="relative flex items-center justify-center py-8">
          <div className="absolute size-48 border border-action-green/10 rounded-full animate-ping"></div>
          <div className="absolute size-36 border border-action-green/5 rounded-full animate-pulse"></div>
          <div className="size-28 bg-black/60 border-2 border-action-green/30 rounded-[2rem] flex items-center justify-center shadow-[0_0_60px_rgba(0,255,0,0.15)] backdrop-blur-3xl">
            <span className="material-symbols-outlined text-action-green text-4xl animate-pulse">radar</span>
          </div>
        </div>
        
        {/* Status */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter font-display">等待夥伴加入</h2>
          <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] animate-pulse">
            Broadcasting...
          </p>
        </div>

        {/* Trip Info */}
        {tripInfo.origin && tripInfo.destination && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <p className="text-[9px] font-black text-slate-600 uppercase tracking-wider">路線</p>
                <p className="text-sm font-bold text-white mt-1">
                  {tripInfo.origin} → {tripInfo.destination}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-black text-slate-600 uppercase tracking-wider">乘客</p>
                <p className="text-xl font-black text-action-green">{tripInfo.passengerCount}/4</p>
              </div>
            </div>
          </div>
        )}

        {/* Share Section */}
        <div className="space-y-4">
          <p className="text-center text-[10px] font-black text-slate-500 uppercase tracking-widest">
            分享給朋友，一起省錢！
          </p>
          
          {/* Main Share Button */}
          <button
            onClick={handleShare}
            className="w-full py-5 rounded-2xl bg-action-green text-black font-black text-base uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_40px_rgba(0,255,0,0.3)] flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined">share</span>
            分享行程
          </button>

          {/* Quick Share Options */}
          <div className="flex gap-3">
            <button
              onClick={handleCopyLink}
              className="flex-1 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">link</span>
              {copied ? '已複製!' : '複製連結'}
            </button>
            <button
              onClick={handleShareWeChat}
              className="flex-1 py-4 rounded-xl bg-[#07C160]/10 border border-[#07C160]/30 text-[#07C160] text-xs font-bold uppercase tracking-wider hover:bg-[#07C160]/20 transition-all flex items-center justify-center gap-2"
            >
              💬 微信
            </button>
          </div>

          {/* Trip ID */}
          <div className="bg-black/40 border border-white/5 rounded-xl p-4 text-center">
            <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest mb-1">Trip ID</p>
            <p className="text-lg font-mono font-bold text-slate-400">{tripId.slice(0, 8)}</p>
          </div>
        </div>

        {/* Cancel */}
        <button 
          onClick={onCancel}
          className="w-full py-4 text-[10px] font-black text-red-500/50 uppercase tracking-widest hover:text-red-500 transition-colors"
        >
          取消行程
        </button>
      </div>
    </div>
  );
};

export default Hosting;
