'use client';

import React, { useState, useRef, useEffect } from 'react';

interface SyncDeckProps {
  onInitiate: () => void;
  onSkip: () => void;
}

interface Candidate {
  id: string;
  name: string;
  match: number;
  savings: string;
  seats: string;
  waitTime: string;
  target: string;
  avatar: string;
}

const SyncDeck: React.FC<SyncDeckProps> = ({ onInitiate, onSkip }) => {
  const candidates: Candidate[] = [
    { id: '1', name: 'Jordan B.', match: 92, savings: '$130', seats: '3/4', waitTime: '4 MIN', target: 'LAX Terminal 5', avatar: 'pinch' },
    { id: '2', name: 'Sarah L.', match: 88, savings: '$95', seats: '2/4', waitTime: '7 MIN', target: 'LAX Terminal 2', avatar: 'pinch' },
    { id: '3', name: 'Mike D.', match: 85, savings: '$110', seats: '1/4', waitTime: '2 MIN', target: 'LAX International', avatar: 'pinch' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  
  const startX = useRef(0);
  const currentCandidate = candidates[currentIndex];
  const nextCandidate = candidates[currentIndex + 1];

  const SWIPE_THRESHOLD = 150;

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };

  const handleDragMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const offset = currentX - startX.current;
    setDragOffset(offset);

    if (offset > 20) setSwipeDirection('right');
    else if (offset < -20) setSwipeDirection('left');
    else setSwipeDirection(null);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragOffset > SWIPE_THRESHOLD) {
      completeSwipe('right');
    } else if (dragOffset < -SWIPE_THRESHOLD) {
      completeSwipe('left');
    } else {
      setDragOffset(0);
      setSwipeDirection(null);
    }
  };

  const completeSwipe = (direction: 'left' | 'right') => {
    setDragOffset(direction === 'right' ? 800 : -800);
    setTimeout(() => {
      if (direction === 'right') {
        onInitiate();
      } else {
        if (currentIndex < candidates.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setDragOffset(0);
          setSwipeDirection(null);
        } else {
          onSkip();
        }
      }
    }, 300);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', handleDragMove);
      window.addEventListener('touchend', handleDragEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, dragOffset]);

  const rotation = dragOffset / 20;
  const opacity = Math.min(Math.abs(dragOffset) / SWIPE_THRESHOLD, 1);

  return (
    <section className="flex-1 flex flex-col items-center justify-center p-6 select-none overflow-hidden relative">
      <div className="max-w-[420px] w-full relative h-[600px] flex flex-col items-center justify-center">
        <div className="absolute top-0 w-full text-center space-y-2 pointer-events-none">
          <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em]">Discovery Pool</h2>
          <div className="flex justify-center gap-1.5">
            {candidates.map((_, i) => (
              <div key={i} className={`h-1 w-4 rounded-full transition-all ${i === currentIndex ? 'bg-action-green w-8 shadow-[0_0_8px_#00FF00]' : 'bg-white/10'}`}></div>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[520px] mt-10">
          {nextCandidate && (
            <div className="absolute inset-0 scale-[0.92] translate-y-6 opacity-40 blur-[1px] glass-panel rounded-[2.5rem] border-white/5 pointer-events-none">
               <div className="h-full w-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-slate-800">pinch</span>
               </div>
            </div>
          )}

          <div 
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            style={{ 
              transform: `translateX(${dragOffset}px) rotate(${rotation}deg)`,
              transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            className="absolute inset-0 z-20"
          >
            <div className="glass-panel h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-white/10 flex flex-col">
              <div className="h-1/2 bg-black/40 relative flex items-center justify-center border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#00FF00 1.5px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                
                <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none transition-opacity" style={{ opacity: dragOffset > 40 ? opacity : 0 }}>
                  <div className="bg-action-green text-black px-10 py-4 rounded-2xl border-4 border-black font-black text-4xl italic uppercase tracking-widest shadow-[0_0_40px_rgba(0,255,0,0.4)]">
                    JOIN
                  </div>
                </div>

                <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none transition-opacity" style={{ opacity: dragOffset < -40 ? opacity : 0 }}>
                  <div className="bg-red-500 text-white px-10 py-4 rounded-2xl border-4 border-black font-black text-4xl italic uppercase tracking-widest shadow-[0_0_40px_rgba(239,68,68,0.4)]">
                    SKIP
                  </div>
                </div>

                <div className="flex items-center gap-10 relative z-10 transition-transform" style={{ transform: `scale(${1 - Math.abs(dragOffset)/1000})` }}>
                  <div className="flex flex-col items-center gap-3">
                    <div className="size-20 rounded-3xl glass-panel flex items-center justify-center text-action-green border-action-green/30 bg-action-green/5">
                      <span className="material-symbols-outlined text-4xl">pinch</span>
                    </div>
                    <span className="text-[9px] font-black text-slate-500 tracking-widest uppercase">NODE ID: {currentCandidate.id}</span>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-action-green text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_0_30px_rgba(0,255,0,0.3)]">
                      {currentCandidate.match}% MATCH
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Est. Saving</p>
                    <p className="text-5xl font-black text-white italic tracking-tighter neon-text-green">{currentCandidate.savings}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Seats Available</p>
                    <div className="flex items-center gap-2 justify-end">
                      <span className="text-2xl font-black text-action-green italic">{currentCandidate.seats}</span>
                      <span className="material-symbols-outlined text-action-green text-xl fill-icon">group</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                   <div className="flex items-center justify-between p-5 glass-panel rounded-3xl border-white/5 bg-white/1">
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-xl bg-sky-400/10 flex items-center justify-center text-sky-400">
                          <span className="material-symbols-outlined text-xl">location_on</span>
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Destination Target</p>
                          <p className="text-xs font-black text-white uppercase italic tracking-tight">{currentCandidate.target}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Wait Time</p>
                        <span className="text-xs font-mono font-black text-action-green">{currentCandidate.waitTime}</span>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <button 
                    onClick={(e) => { e.stopPropagation(); completeSwipe('left'); }}
                    className="py-5 rounded-2xl glass-panel text-slate-500 text-[10px] font-black uppercase tracking-widest hover:text-white hover:bg-white/5 transition-all"
                  >
                    Skip Peer
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); completeSwipe('right'); }}
                    className="py-5 rounded-2xl bg-action-green text-black text-[10px] font-black uppercase tracking-widest shadow-[0_0_30px_rgba(0,255,0,0.2)] hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    Join Mesh
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SyncDeck;
