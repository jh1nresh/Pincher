'use client';

import { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { BackgroundBeams } from '@/components/BackgroundBeams';
import { HOTZONES } from '@/lib/constants';
import { motion, AnimatePresence, PanInfo, useMotionValue, useTransform } from 'framer-motion';
import WalletBadge from '@/components/WalletBadge';
import { useRouter } from 'next/navigation';
import { TripCardSkeleton } from '@/components/Skeleton';
import { ThemeToggle } from '@/components/ThemeProvider';

interface TripRoom {
  id: string;
  origin: string;
  destination: string;
  origin_hotzone_id?: string;
  destination_hotzone_id?: string;
  departure_time: string;
  min_passengers: number;
  estimated_cost: number;
  status: string;
  passenger_count?: number;
  creator_id?: string;
}

// Enhanced Swipeable Card Component with 3D Effects
function SwipeCard({
  trip,
  onSwipe,
  isTop,
  formatTime
}: {
  trip: TripRoom;
  onSwipe: (direction: 'left' | 'right') => void;
  isTop: boolean;
  formatTime: (dateStr: string) => string;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-18, 18]);
  const rotateY = useTransform(x, [-200, 200], [8, -8]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);
  
  // Dynamic shadow based on drag
  const shadowX = useTransform(x, [-200, 0, 200], [20, 0, -20]);
  
  // Overlay indicators
  const joinOpacity = useTransform(x, [0, 80], [0, 1]);
  const skipOpacity = useTransform(x, [-80, 0], [1, 0]);
  const joinScale = useTransform(x, [0, 100], [0.8, 1.1]);
  const skipScale = useTransform(x, [-100, 0], [1.1, 0.8]);

  const originZone = HOTZONES.find(h => h.id === trip.origin_hotzone_id);
  const destZone = HOTZONES.find(h => h.id === trip.destination_hotzone_id);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x > 100) {
      onSwipe('right');
    } else if (info.offset.x < -100) {
      onSwipe('left');
    }
  };

  const spotsLeft = trip.min_passengers - (trip.passenger_count || 0);
  const isFilling = spotsLeft <= 2 && spotsLeft > 0;

  return (
    <motion.div
      className={`absolute w-full ${isTop ? 'z-10 cursor-grab active:cursor-grabbing' : 'z-0'}`}
      style={{ 
        x, 
        rotate, 
        rotateY,
        opacity,
        perspective: 1000,
        transformStyle: 'preserve-3d'
      }}
      drag={isTop ? 'x' : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.1}
      onDragEnd={handleDragEnd}
      initial={{ scale: isTop ? 1 : 0.92, y: isTop ? 0 : 15, opacity: isTop ? 1 : 0.7 }}
      animate={{ scale: isTop ? 1 : 0.92, y: isTop ? 0 : 15, opacity: isTop ? 1 : 0.7 }}
      exit={{
        x: x.get() > 0 ? 400 : -400,
        rotate: x.get() > 0 ? 20 : -20,
        opacity: 0,
        transition: { duration: 0.3, ease: 'easeOut' }
      }}
      whileHover={isTop ? { scale: 1.02 } : {}}
      whileTap={isTop ? { scale: 0.98 } : {}}
    >
      <div className="bg-white dark:bg-gray-800 rounded-4xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden relative">
        {/* Gradient glow behind card */}
        <div className="absolute -inset-1 bg-linear-to-r from-violet-500 via-pink-500 to-orange-400 rounded-4xl blur-xl opacity-20 -z-10" />
        
        {/* Card Header with animated gradient */}
        <div className="relative h-48 bg-linear-to-br from-violet-600 via-pink-500 to-orange-400 p-6 overflow-hidden">
          {/* Animated shine effect */}
          <motion.div 
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
            animate={{ x: ['-200%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          
          {/* Swipe Indicators with scale animation */}
          <motion.div
            className="absolute top-4 right-4 bg-emerald-400 text-white px-5 py-2 rounded-2xl font-black text-base shadow-xl shadow-emerald-500/40 flex items-center gap-2"
            style={{ opacity: joinOpacity, scale: joinScale }}
          >
            <span className="text-xl">🎉</span> JOIN!
          </motion.div>
          <motion.div
            className="absolute top-4 left-4 bg-rose-400 text-white px-5 py-2 rounded-2xl font-black text-base shadow-xl shadow-rose-500/40 flex items-center gap-2"
            style={{ opacity: skipOpacity, scale: skipScale }}
          >
            SKIP <span className="text-xl">✕</span>
          </motion.div>

          {/* Route Display with enhanced styling */}
          <div className="absolute bottom-4 left-5 right-5">
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-2xl">
                {originZone?.icon || '📍'}
              </div>
              <div className="flex-1">
                <div className="font-black text-xl truncate drop-shadow-lg">{trip.origin}</div>
                <div className="text-white/70 text-xs font-medium">Pickup Point</div>
              </div>
            </div>
            
            <div className="ml-6 my-1 border-l-2 border-white/30 h-3" />
            
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-2xl">
                {destZone?.icon || '📍'}
              </div>
              <div className="flex-1">
                <div className="font-black text-xl truncate drop-shadow-lg">{trip.destination}</div>
                <div className="text-white/70 text-xs font-medium">Destination</div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Time & Price Row */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                <span className="text-lg">🕐</span>
              </div>
              <div>
                <div className="font-black text-lg text-gray-900">{formatTime(trip.departure_time)}</div>
                <div className="text-xs text-gray-400 font-medium">Departure</div>
              </div>
            </div>
            <motion.div 
              className="bg-linear-to-r from-violet-600 to-pink-500 text-white px-5 py-2.5 rounded-2xl font-black text-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              ${(trip.estimated_cost / 100 / trip.min_passengers).toFixed(0)}
              <span className="text-xs font-medium opacity-80 ml-1">/person</span>
            </motion.div>
          </div>

          {/* Passenger Progress */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2 font-medium">
              <span className="flex items-center gap-2">
                <span className="text-lg">👥</span> Riders
              </span>
              <span className="font-black text-gray-900">{trip.passenger_count || 0} / {trip.min_passengers}</span>
            </div>
            <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
              <motion.div
                className="bg-linear-to-r from-violet-500 via-pink-500 to-orange-400 h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((trip.passenger_count || 0) / trip.min_passengers) * 100}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              />
            </div>
            {isFilling && (
              <motion.div 
                className="text-orange-500 text-sm font-black mt-2 text-right flex items-center justify-end gap-1"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                <span className="text-lg">🔥</span> Only {spotsLeft} spot{spotsLeft > 1 ? 's' : ''} left!
              </motion.div>
            )}
          </div>

          {/* Swipe Hint */}
          <div className="text-center text-sm text-gray-400 font-medium pt-2 border-t border-gray-100">
            👈 Swipe to skip • Swipe to join 👉
          </div>
        </div>
      </div>
    </motion.div>
  );
}


// Join Confirmation Modal
function JoinModal({
  trip,
  onConfirm,
  onCancel,
  loading,
  walletAddress,
  formatTime
}: {
  trip: TripRoom;
  onConfirm: () => void;
  onCancel: () => void;
  loading: boolean;
  walletAddress?: string;
  formatTime: (dateStr: string) => string;
}) {
  const originZone = HOTZONES.find(h => h.id === trip.origin_hotzone_id);
  const destZone = HOTZONES.find(h => h.id === trip.destination_hotzone_id);
  const pricePerPerson = (trip.estimated_cost / 100 / trip.min_passengers).toFixed(0);

  return (
    <motion.div
      className="fixed inset-0 z-70 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onCancel}
    >
      <motion.div
        className="bg-white rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-linear-to-br from-green-500 to-emerald-600 p-6 text-white text-center">
          <div className="text-4xl mb-2">✓</div>
          <h2 className="text-xl font-black">Join This Ride?</h2>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Route */}
          <div className="flex items-center gap-3">
            <div className="text-2xl">{originZone?.icon || '📍'}</div>
            <div className="flex-1">
              <div className="font-bold text-gray-900">{trip.origin}</div>
              <div className="text-gray-500 text-sm">→ {trip.destination}</div>
            </div>
            <div className="text-2xl">{destZone?.icon || '📍'}</div>
          </div>

          {/* Details */}
          <div className="bg-gray-50 rounded-2xl p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">🕐 Time</span>
              <span className="font-bold text-gray-900">{formatTime(trip.departure_time)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">💰 Cost</span>
              <span className="font-bold text-gray-900">${pricePerPerson}/person</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">👥 Riders</span>
              <span className="font-bold text-gray-900">{(trip.passenger_count || 0) + 1} / {trip.min_passengers}</span>
            </div>
          </div>

          {/* Wallet */}
          <div className="border border-gray-200 rounded-2xl p-4">
            <div className="text-xs text-gray-500 mb-1">Your Wallet</div>
            <WalletBadge address={walletAddress} className="w-full text-center justify-center" />
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 pt-0 flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-4 rounded-2xl border-2 border-gray-200 font-bold text-gray-600 hover:bg-gray-50 transition-colors"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-4 rounded-2xl bg-black text-white font-bold hover:bg-gray-800 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Joining...' : 'Confirm Join'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Filter Modal Component
function FilterModal({
  isOpen,
  onClose,
  filters,
  setFilters
}: {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  setFilters: (f: FilterState) => void;
}) {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters, isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-60 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl max-h-[80vh] overflow-y-auto pb-safe-bottom"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white z-10 px-5 py-4 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">篩選行程</h2>
            <button onClick={onClose} className="text-2xl text-gray-400">✕</button>
          </div>
        </div>

        <div className="p-5 space-y-6">
          {/* Origin Filter */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">出發地</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setLocalFilters({ ...localFilters, origin: null })}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  !localFilters.origin ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                全部
              </button>
              {HOTZONES.slice(0, 6).map(zone => (
                <button
                  key={zone.id}
                  onClick={() => setLocalFilters({ ...localFilters, origin: zone.id })}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                    localFilters.origin === zone.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <span>{zone.icon}</span>
                  <span>{zone.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Destination Filter */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">目的地</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setLocalFilters({ ...localFilters, destination: null })}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  !localFilters.destination ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                全部
              </button>
              {HOTZONES.slice(0, 6).map(zone => (
                <button
                  key={zone.id}
                  onClick={() => setLocalFilters({ ...localFilters, destination: zone.id })}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                    localFilters.destination === zone.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <span>{zone.icon}</span>
                  <span>{zone.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Time Filter */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">出發時間</label>
            <div className="flex flex-wrap gap-2">
              {[
                { label: '全部', value: 'all' },
                { label: '今天', value: 'today' },
                { label: '明天', value: 'tomorrow' },
                { label: '本週', value: 'week' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setLocalFilters({ ...localFilters, timeRange: opt.value as any })}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    localFilters.timeRange === opt.value ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4 pb-safe-bottom">
          <div className="flex gap-3">
            <button
              onClick={() => {
                setLocalFilters({ origin: null, destination: null, timeRange: 'all' });
              }}
              className="flex-1 py-3 rounded-xl border border-gray-200 font-bold text-gray-600"
            >
              重設
            </button>
            <button
              onClick={() => {
                setFilters(localFilters);
                onClose();
              }}
              className="flex-1 py-3 rounded-xl bg-black text-white font-bold"
            >
              套用篩選
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface FilterState {
  origin: string | null;
  destination: string | null;
  timeRange: 'all' | 'today' | 'tomorrow' | 'week';
}

export default function TripsPage() {
  const router = useRouter();
  const { user, ready, authenticated, login } = usePrivy();
  const [trips, setTrips] = useState<TripRoom[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filters, setFilters] = useState<FilterState>({
    origin: null,
    destination: null,
    timeRange: 'all'
  });
  
  // Join Modal State
  const [selectedTrip, setSelectedTrip] = useState<TripRoom | null>(null);
  const [joinLoading, setJoinLoading] = useState(false);

  useEffect(() => {
    fetchTrips();

    // Realtime subscription - listen to all changes for immediate updates
    const channel = supabase
      .channel('trips-lobby-realtime')
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'trip_rooms' },
        (payload) => {
          console.log('Trip room changed:', payload);
          fetchTrips();
        }
      )
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'trip_passengers' },
        (payload) => {
          console.log('Trip passengers changed:', payload);
          fetchTrips();
        }
      )
      .subscribe((status) => {
        console.log('Realtime subscription status:', status);
      });

    return () => { supabase.removeChannel(channel); };
  }, [filters]);

  async function fetchTrips() {
    let query = supabase
      .from('trip_rooms')
      .select(`
        *,
        trip_passengers(count)
      `)
      .eq('status', 'open')
      .gte('departure_time', new Date().toISOString())
      .order('departure_time', { ascending: true })
      .limit(50);

    // Apply filters
    if (filters.origin) {
      query = query.eq('origin_hotzone_id', filters.origin);
    }
    if (filters.destination) {
      query = query.eq('destination_hotzone_id', filters.destination);
    }
    if (filters.timeRange !== 'all') {
      const endDate = new Date();

      if (filters.timeRange === 'today') {
        endDate.setHours(23, 59, 59, 999);
      } else if (filters.timeRange === 'tomorrow') {
        endDate.setDate(endDate.getDate() + 1);
        endDate.setHours(23, 59, 59, 999);
      } else if (filters.timeRange === 'week') {
        endDate.setDate(endDate.getDate() + 7);
      }

      query = query.lte('departure_time', endDate.toISOString());
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching trips:', error);
      setLoading(false);
      return;
    }

    if (data) {
      console.log('Fetched trips:', data.length);
      const tripsWithCount = data.map(trip => ({
        ...trip,
        passenger_count: trip.trip_passengers?.[0]?.count || 0
      }));
      setTrips(tripsWithCount);
      // Reset to beginning when new data comes in
      setCurrentIndex(0);
    }
    setLoading(false);
  }

  function formatTime(dateStr: string) {
    const date = new Date(dateStr);
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);

    let dayLabel = '';
    if (date.toDateString() === now.toDateString()) {
      dayLabel = '今天';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      dayLabel = '明天';
    } else {
      dayLabel = date.toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' });
    }

    const time = date.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
    return `${dayLabel} ${time}`;
  }

  const handleSwipe = (direction: 'left' | 'right') => {
    // Use filteredTrips (excludes creator's own rides)
    const availableTrips = trips.filter(t => t.creator_id !== user?.id);
    if (direction === 'right' && availableTrips[currentIndex]) {
      // Show join confirmation modal
      setSelectedTrip(availableTrips[currentIndex]);
    } else {
      // Skip to next card
      setCurrentIndex(prev => prev + 1);
    }
  };

  const confirmJoin = async () => {
    if (!selectedTrip || !user) return;
    
    setJoinLoading(true);
    
    // Insert passenger into trip_passengers
    const { error } = await supabase.from('trip_passengers').insert({
      trip_id: selectedTrip.id,
      user_id: user.id,
      user_name: user.email?.address?.split('@')[0] || 'User',
      payment_status: 'unpaid'
    });

    if (error) {
      console.error('Failed to join trip:', error);
      setJoinLoading(false);
      return;
    }

    console.log('✅ Successfully joined trip');
    setJoinLoading(false);
    setSelectedTrip(null);
    
    // Navigate to trip room
    router.push(`/trips/room?id=${selectedTrip.id}`);
  };

  // Filter out trips created by current user (can't join your own ride)
  const filteredTrips = trips.filter(t => t.creator_id !== user?.id);

  const activeFiltersCount = [filters.origin, filters.destination, filters.timeRange !== 'all' ? filters.timeRange : null].filter(Boolean).length;

  // Login screen
  if (ready && !authenticated) {
    return (
      <div className="relative min-h-screen flex items-center justify-center">
        <BackgroundBeams />
        <div className="z-10 bg-white/90 backdrop-blur rounded-3xl p-8 shadow-2xl text-center max-w-sm mx-4">
          <div className="text-6xl mb-4">🚗</div>
          <h1 className="text-2xl font-black mb-2">Pincher</h1>
          <p className="text-gray-500 text-sm mb-4">學生拼車，省錢出行</p>
          <button onClick={login} className="w-full bg-black text-white font-bold py-4 rounded-xl">
            開始使用
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-linear-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 pb-24 transition-colors duration-300">
      <BackgroundBeams />

      {/* Minimal Header - Just Filter & Avatar */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        {/* Safe Area Spacer */}
        <div className="w-full" style={{ height: 'max(env(safe-area-inset-top), 20px)' }}></div>
        <div className="px-5 py-3 flex items-center justify-end pointer-events-auto">
          {/* Theme Toggle + Filter + Avatar */}
          <div className="flex items-center gap-2">
            {/* Simple Direct Dark Mode Toggle */}
            <button
              onClick={() => {
                const html = document.documentElement;
                const isDark = html.classList.contains('dark');
                if (isDark) {
                  html.classList.remove('dark');
                  localStorage.setItem('pincher_theme', 'light');
                } else {
                  html.classList.add('dark');
                  localStorage.setItem('pincher_theme', 'dark');
                }
              }}
              className="w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-full shadow-md flex items-center justify-center active:scale-95 transition-all border border-gray-100 dark:border-gray-700"
            >
              <span className="text-lg">🌓</span>
            </button>
            <button
              onClick={() => setShowFilter(true)}
              className="w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-full shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-transform border border-gray-100 dark:border-gray-700"
            >
              {activeFiltersCount > 0 ? (
                <span className="text-sm font-bold text-pink-500">{activeFiltersCount}</span>
              ) : (
                <span className="text-lg">🔍</span>
              )}
            </button>
            <Link href="/profile" className="w-10 h-10 rounded-full bg-linear-to-tr from-violet-500 via-pink-500 to-orange-400 p-[2px] shadow-lg hover:scale-105 active:scale-95 transition-transform">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-sm font-bold">
                {user?.email?.address?.slice(0, 1).toUpperCase() || '👤'}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area - Centered Cards */}
      <main className="relative z-10 max-w-lg mx-auto px-4 pt-20 pb-32">

        {/* Card Counter */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            {filteredTrips.length} Rides Available
          </span>
        </div>

        {loading ? (
          /* Skeleton Loading */
          <div className="space-y-4">
            <TripCardSkeleton />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-400 text-sm mt-4"
            >
              Finding rides near you...
            </motion.div>
          </div>
        ) : filteredTrips.length === 0 ? (
          /* Enhanced Empty State */
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div 
              className="text-7xl mb-6"
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              �
            </motion.div>
            <h3 className="text-gray-900 font-black text-2xl mb-3">No rides yet</h3>
            <p className="text-gray-500 text-sm mb-8 max-w-xs mx-auto">
              {activeFiltersCount > 0 
                ? 'No rides match your filters. Try adjusting them!' 
                : 'Be the first to create a ride and save money!'}
            </p>
            <div className="space-y-3">
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => setFilters({ origin: null, destination: null, timeRange: 'all' })}
                  className="block w-full max-w-xs mx-auto px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-2xl"
                >
                  Clear Filters
                </button>
              )}
              <Link
                href="/trips/create"
                className="block w-full max-w-xs mx-auto px-6 py-4 bg-linear-to-r from-violet-500 via-pink-500 to-orange-400 text-white font-bold rounded-2xl shadow-lg text-center"
              >
                + Create First Ride
              </Link>
            </div>
          </motion.div>
        ) : (
          /* Swipe Cards View */
          <div className="relative h-[420px] w-full">
            <AnimatePresence>
              {filteredTrips.slice(currentIndex, currentIndex + 2).map((trip, index) => (
                <SwipeCard
                  key={trip.id}
                  trip={trip}
                  isTop={index === 0}
                  onSwipe={handleSwipe}
                  formatTime={formatTime}
                />
              ))}
            </AnimatePresence>

            {currentIndex >= filteredTrips.length && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <p className="text-gray-900 font-medium">You've seen all rides!</p>
                  <button
                    onClick={() => setCurrentIndex(0)}
                    className="mt-4 px-4 py-2 bg-black text-white rounded-xl text-sm font-bold"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}

            {/* Swipe Action Buttons */}
            {currentIndex < filteredTrips.length && (
              <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-8">
                <button
                  onClick={() => handleSwipe('left')}
                  className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl border border-gray-100 active:scale-90 transition-transform"
                >
                  ✕
                </button>
                <button
                  onClick={() => handleSwipe('right')}
                  className="w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-2xl text-white active:scale-90 transition-transform"
                >
                  ✓
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-24 left-0 right-0 z-40 pointer-events-none">
        <div className="max-w-lg mx-auto px-4 flex justify-center pointer-events-auto">
          <Link
            href="/trips/create"
            className="group flex items-center gap-2 bg-black text-white px-5 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <span className="text-lg">➕</span>
            <span className="font-bold text-base">New Ride</span>
          </Link>
        </div>
      </div>

      {/* Filter Modal */}
      <AnimatePresence>
        {showFilter && (
          <FilterModal
            isOpen={showFilter}
            onClose={() => setShowFilter(false)}
            filters={filters}
            setFilters={setFilters}
          />
        )}
      </AnimatePresence>

      {/* Join Confirmation Modal */}
      <AnimatePresence>
        {selectedTrip && (
          <JoinModal
            trip={selectedTrip}
            onConfirm={confirmJoin}
            onCancel={() => setSelectedTrip(null)}
            loading={joinLoading}
            walletAddress={user?.wallet?.address}
            formatTime={formatTime}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
