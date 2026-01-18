'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { usePrivy } from '@privy-io/react-auth';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { HOTZONES } from '@/lib/constants';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';

// Dynamic import for Leaflet map to avoid SSR issues
const MapPicker = dynamic(() => import('@/components/MapPicker'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">Loading Map...</div>
});

export default function CreateTripPage() {
  const router = useRouter();
  const { user } = usePrivy();

  // Selection State
  const [activeField, setActiveField] = useState<'origin' | 'destination' | null>(null);

  const [originId, setOriginId] = useState('');
  const [destinationId, setDestinationId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [minPassengers, setMinPassengers] = useState(4);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const originZone = HOTZONES.find(h => h.id === originId);
  const destZone = HOTZONES.find(h => h.id === destinationId);

  // Determine Map Center based on active selection
  const mapCenter = useMemo(() => {
    if (activeField === 'origin' && originZone) return originZone.coordinates;
    if (activeField === 'destination' && destZone) return destZone.coordinates;
    if (activeField === 'origin' || activeField === 'destination') return { lat: 33.7, lng: -117.9 }; // Default OC center
    return undefined;
  }, [activeField, originZone, destZone]);

  // Price Calculation
  const getEstimatedPrice = () => {
    if (!originId || !destinationId) return 0;

    // Simple heuristic for demo
    if (originId.includes('lax') || destinationId.includes('lax')) return 80;
    if (originId.includes('sna') || destinationId.includes('sna')) return 45;
    if (originId.includes('disney') || destinationId.includes('disney')) return 40;

    // Default inter-city
    return 35;
  };
  const estimatedTotal = getEstimatedPrice();
  const perPerson = minPassengers > 0 ? estimatedTotal / minPassengers : 0;

  // Check if form is complete
  const isFormComplete = originId && destinationId && date && time;

  async function handleSubmit() {
    if (!originId || !destinationId || !date || !time) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError(''); // Clear previous errors
    const departureTime = new Date(`${date}T${time}`);

    // Check for existing trips within ±30 minutes
    const thirtyMinMs = 30 * 60 * 1000;
    const thirtyMinBefore = new Date(departureTime.getTime() - thirtyMinMs).toISOString();
    const thirtyMinAfter = new Date(departureTime.getTime() + thirtyMinMs).toISOString();

    const { data: existingTrips } = await supabase
      .from('trip_rooms')
      .select('id, departure_time')
      .eq('creator_id', user?.id)
      .eq('status', 'open')
      .gte('departure_time', thirtyMinBefore)
      .lte('departure_time', thirtyMinAfter);

    if (existingTrips && existingTrips.length > 0) {
      setError('You already have a trip scheduled around this time. Please wait or cancel your existing trip.');
      setLoading(false);
      return;
    }

    const insertData = {
      creator_id: user?.id || 'anonymous',
      origin: originZone!.displayName,
      origin_hotzone_id: originZone!.id,
      origin_address: originZone!.virtualPickup,
      destination: destZone!.displayName,
      destination_hotzone_id: destZone!.id,
      destination_address: destZone!.virtualPickup,
      departure_time: departureTime.toISOString(),
      min_passengers: minPassengers,
      max_passengers: minPassengers,
      estimated_cost: estimatedTotal * 100, // Cents
      status: 'open'
    };

    console.log('📤 Attempting to insert trip:', insertData);

    const { data, error: dbError } = await supabase
      .from('trip_rooms')
      .insert(insertData)
      .select()
      .single();

    console.log('📥 Supabase response:', { data, error: dbError });

    if (dbError) {
      console.error('❌ Supabase insert error:', dbError);
      setError(`Failed to create trip: ${dbError.message}`);
      setLoading(false);
      return;
    }

    // Auto-join
    // Auto-join creator as passenger
    const { error: passengerError } = await supabase.from('trip_passengers').insert({
      trip_id: data.id,
      user_id: user?.id || 'anonymous',
      user_name: user?.email?.address?.split('@')[0] || 'User',
      payment_status: 'unpaid'
    });

    if (passengerError) {
      console.error('❌ Failed to add creator as passenger:', passengerError);
    } else {
      console.log('✅ Creator added as passenger');
    }

    router.push(`/trips/room?id=${data.id}`);
  }

  // --- Render Components ---

  // 1. Selector Modal (Full Screen with improved UX)
  if (activeField) {
    const currentSelection = activeField === 'origin' ? originId : destinationId;
    const otherSelection = activeField === 'origin' ? destinationId : originId;

    return (
      <motion.div
        className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col pt-[env(safe-area-inset-top)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-white">
          <button
            onClick={() => setActiveField(null)}
            className="w-10 h-10 flex items-center justify-center text-xl rounded-full hover:bg-gray-100 active:scale-90 transition-all"
          >
            ←
          </button>
          <h2 className="font-bold text-base">
            {activeField === 'origin' ? '選擇出發地' : '選擇目的地'}
          </h2>
          <div className="w-10"></div>
        </div>

        {/* Map Section (35% height) */}
        <div className="h-[35%] w-full relative border-b border-gray-200 bg-gray-100">
          <MapPicker
            onSelect={(id) => {
              if (activeField === 'origin') setOriginId(id);
              else setDestinationId(id);
              setActiveField(null);
            }}
            selectedId={currentSelection}
            center={mapCenter}
          />
          {/* Map Overlay Hint */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 text-xs text-gray-600 text-center shadow-sm">
              點擊地圖上的標記或從下方列表選擇
            </div>
          </div>
        </div>

        {/* List Section (65% height) */}
        <div className="flex-1 flex flex-col bg-gray-50 overflow-hidden">
          {/* Section Header */}
          <div className="px-4 py-3 bg-white border-b border-gray-100">
            <h3 className="font-bold text-sm text-gray-900">熱門地點</h3>
            <p className="text-xs text-gray-400">選擇您的{activeField === 'origin' ? '出發' : '到達'}位置</p>
          </div>

          {/* Scrollable List */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 pb-safe-bottom">
            {HOTZONES.map(zone => {
              const isSelected = currentSelection === zone.id;
              const isDisabled = otherSelection === zone.id;

              if (isDisabled) return null;

              return (
                <motion.button
                  key={zone.id}
                  onClick={() => {
                    if (activeField === 'origin') setOriginId(zone.id);
                    else setDestinationId(zone.id);
                    setActiveField(null);
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center gap-3 p-3 rounded-2xl border transition-all text-left ${
                    isSelected
                      ? 'bg-black text-white border-black shadow-lg'
                      : 'bg-white border-gray-100 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                    isSelected ? 'bg-white/20' : zone.color
                  }`}>
                    {zone.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`font-bold truncate ${isSelected ? 'text-white' : 'text-gray-900'}`}>
                      {zone.displayName}
                    </div>
                    <div className={`text-xs truncate ${isSelected ? 'text-white/70' : 'text-gray-500'}`}>
                      {zone.virtualPickup}
                    </div>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <span className="text-black text-sm">✓</span>
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  }

  // 2. Main Form
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors duration-300">
      {/* Header - Fixed & Safe for Dynamic Island */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        {/* Safe Area Spacer - 48px minimum for Dynamic Island */}
        <div className="bg-white dark:bg-gray-800" style={{ height: 'max(env(safe-area-inset-top, 0px), 48px)' }}></div>
        <div className="px-4 py-3 flex items-center relative min-h-[52px]">
          <Link
            href="/trips"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 active:scale-90 transition-all text-xl font-bold text-gray-900 dark:text-white"
          >
            ←
          </Link>
          <h1 className="text-lg font-black absolute left-1/2 -translate-x-1/2 uppercase tracking-wide text-gray-900 dark:text-white">Create Ride</h1>
        </div>
      </div>

      {/* Main Content - Scrollable area with proper safe area padding */}
      <main className="flex-1 overflow-y-auto pt-[calc(env(safe-area-inset-top)+100px)] pb-[calc(env(safe-area-inset-bottom)+120px)]">
        <div className="max-w-lg mx-auto p-4 space-y-4">

          {/* Step 1: Route Selection */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 shadow-sm border border-gray-100 dark:border-gray-700 relative overflow-hidden">
            {/* Step Label */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-bold flex items-center justify-center">1</div>
              <span className="text-sm font-bold text-gray-900 dark:text-white">Select Route</span>
            </div>

            {/* Connecting Line */}
            <div className="absolute left-[34px] top-[88px] bottom-[52px] w-0.5 bg-gray-200"></div>

            <div className="space-y-3 relative z-10">
              {/* Origin Input */}
              <button
                onClick={() => setActiveField('origin')}
                className="w-full flex items-center gap-4 group"
              >
                <div className="w-3 h-3 rounded-full bg-green-500 ring-4 ring-green-100 shrink-0"></div>
                <div className={`flex-1 text-left px-4 py-3.5 rounded-2xl transition-all border-2 ${
                  originId
                    ? 'bg-green-50 border-green-200 text-gray-900'
                    : 'bg-gray-50 border-transparent text-gray-400 group-hover:border-gray-200'
                }`}>
                  <div className="text-xs text-gray-400 mb-0.5">出發地</div>
                  <div className="font-bold">{originZone ? originZone.displayName : '點擊選擇...'}</div>
                </div>
              </button>

              {/* Destination Input */}
              <button
                onClick={() => setActiveField('destination')}
                className="w-full flex items-center gap-4 group"
              >
                <div className="w-3 h-3 rounded-sm bg-red-500 ring-4 ring-red-100 shrink-0"></div>
                <div className={`flex-1 text-left px-4 py-3.5 rounded-2xl transition-all border-2 ${
                  destinationId
                    ? 'bg-red-50 border-red-200 text-gray-900'
                    : 'bg-gray-50 border-transparent text-gray-400 group-hover:border-gray-200'
                }`}>
                  <div className="text-xs text-gray-400 mb-0.5">目的地</div>
                  <div className="font-bold">{destZone ? destZone.displayName : '點擊選擇...'}</div>
                </div>
              </button>
            </div>
          </div>

          {/* Step 2: Time & Passengers (Show when route is selected) */}
          <AnimatePresence>
            {originId && destinationId && (
              <motion.div
                className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Step Label */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">2</div>
                  <span className="text-sm font-bold text-gray-900">選擇時間與人數</span>
                </div>

                {/* Date & Time */}
                <div className="flex gap-3 mb-5">
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-gray-500 mb-2">日期</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-gray-50 p-3 rounded-xl text-sm font-bold text-gray-900 outline-none border-2 border-transparent focus:border-black focus:bg-white transition-all"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-gray-500 mb-2">時間</label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-gray-50 p-3 rounded-xl text-sm font-bold text-gray-900 outline-none border-2 border-transparent focus:border-black focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Passengers */}
                <div className="border-t border-gray-100 pt-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-sm font-bold block">分攤人數</span>
                      <span className="text-xs text-gray-400">包含你自己</span>
                    </div>
                    <div className="flex bg-gray-100 rounded-xl p-1">
                      {[3, 4, 5, 6].map(n => (
                        <button
                          key={n}
                          onClick={() => setMinPassengers(n)}
                          className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${
                            minPassengers === n
                              ? 'bg-black text-white shadow-md'
                              : 'text-gray-400 hover:text-gray-600'
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Price Summary (Show when form is complete) */}
          <AnimatePresence>
            {isFormComplete && (
              <motion.div
                className="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-5 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center">✓</div>
                  <span className="text-sm font-bold text-white/80">預估費用</span>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-white/60 text-xs mb-1">每人分攤</div>
                    <div className="text-4xl font-black">${perPerson.toFixed(0)}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/60 text-xs mb-1">總費用</div>
                    <div className="text-lg font-bold text-white/80">${estimatedTotal}</div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span>{originZone?.displayName} → {destZone?.displayName}</span>
                  <span>{minPassengers} 人分攤</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Message */}
          {error && (
            <motion.div
              className="bg-red-50 text-red-500 text-sm font-bold p-4 rounded-xl text-center border border-red-100"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {error}
            </motion.div>
          )}
        </div>
      </main>

      {/* Fixed Bottom Submit Button - Always visible */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-lg mx-auto p-4 pb-safe-bottom">
          <button
            onClick={handleSubmit}
            disabled={loading || !isFormComplete}
            className={`w-full font-bold text-base py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 ${
              isFormComplete
                ? 'bg-black text-white active:scale-[0.98]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span>創建中...</span>
              </>
            ) : isFormComplete ? (
              <>
                <span>發起拼車</span>
                <span className="text-white/60">|</span>
                <span className="text-white/80">${estimatedTotal} 總費用</span>
              </>
            ) : (
              <span>請完成上方所有欄位</span>
            )}
          </button>

          {/* Helper text */}
          {!isFormComplete && (
            <div className="text-center text-xs text-gray-400 mt-2">
              {!originId && '請選擇出發地 → '}
              {originId && !destinationId && '請選擇目的地 → '}
              {originId && destinationId && !date && '請選擇日期 → '}
              {originId && destinationId && date && !time && '請選擇時間'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
