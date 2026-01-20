'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePrivy } from '@privy-io/react-auth';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import ChatRoom from '@/components/ChatRoom';
import { RatingModal } from '@/components/RatingModal';

interface PaymentMethods {
  venmo?: string;
  zelle?: string;
  paypal?: string;
  cashapp?: string;
  applecash?: string; // Phone number for Apple Cash
  cash?: boolean;
}

interface TripRoom {
  id: string;
  creator_id: string;
  origin: string;
  destination: string;
  departure_time: string;
  min_passengers: number;
  status: string;
  estimated_cost: number;
  actual_cost?: number;
  payer_id?: string;
  payment_method_info?: PaymentMethods;
}

interface Passenger {
  id: string;
  user_id: string;
  user_name: string;
  payment_status: string;
  contact_info?: string;
}

const PAYMENT_OPTIONS = [
  { key: 'venmo', label: 'Venmo', icon: '💜', placeholder: '@username', color: '#008CFF' },
  { key: 'zelle', label: 'Zelle', icon: '💵', placeholder: 'phone or email', color: '#6D1ED4' },
  { key: 'paypal', label: 'PayPal', icon: '🅿️', placeholder: 'email@example.com', color: '#003087' },
  { key: 'cashapp', label: 'Cash App', icon: '💚', placeholder: '$cashtag', color: '#00D632' },
  { key: 'applecash', label: 'Apple Cash', icon: '🍎', placeholder: 'phone number', color: '#000000' },
  { key: 'cash', label: 'Cash', icon: '💵', placeholder: '', color: '#22c55e' },
];

function TripRoomContent() {
  const searchParams = useSearchParams();
  const tripId = searchParams.get('id');
  const { user } = usePrivy();

  const [trip, setTrip] = useState<TripRoom | null>(null);
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [loading, setLoading] = useState(true);
  const [splitting, setSplitting] = useState(false);
  
  // Splitting State
  const [actualCostInput, setActualCostInput] = useState('');
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethods>({});
  const [enabledMethods, setEnabledMethods] = useState<Set<string>>(new Set(['venmo']));
  
  // Rating Modal
  const [showRatingModal, setShowRatingModal] = useState(false);

  useEffect(() => {
    if (!tripId) return;

    fetchData();
    const channel = supabase.channel(`trip-${tripId}`)
      .on('postgres_changes', { event: '*', schema: 'public', filter: `trip_id=eq.${tripId}` }, fetchData)
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [tripId]);

  async function fetchData() {
    if (!tripId) return;
    const [t, p] = await Promise.all([
      supabase.from('trip_rooms').select('*').eq('id', tripId).single(),
      supabase.from('trip_passengers').select('*').eq('trip_id', tripId)
    ]);
    if (t.data) setTrip(t.data);
    if (p.data) setPassengers(p.data);
    setLoading(false);
  }

  const isFull = trip && passengers.length >= trip.min_passengers;
  const isJoined = passengers.some(p => p.user_id === user?.id);
  const currentUserPassenger = passengers.find(p => p.user_id === user?.id);

  async function handleVolunteerToPay() {
    if (!trip || !user) return;
    setSplitting(true);
  }

  const togglePaymentMethod = (key: string) => {
    const newEnabled = new Set(enabledMethods);
    if (newEnabled.has(key)) {
      newEnabled.delete(key);
      const newMethods = { ...paymentMethods };
      delete newMethods[key as keyof PaymentMethods];
      setPaymentMethods(newMethods);
    } else {
      newEnabled.add(key);
    }
    setEnabledMethods(newEnabled);
  };

  async function confirmSplit() {
    if (!trip || !user) return;
    
    // Build payment methods object
    const methods: PaymentMethods = {};
    for (const key of enabledMethods) {
      if (key === 'cash') {
        methods.cash = true;
      } else if (paymentMethods[key as keyof PaymentMethods]) {
        (methods as any)[key] = paymentMethods[key as keyof PaymentMethods];
      }
    }
    
    // Update trip with cost and payer info
    await supabase.from('trip_rooms').update({
      status: 'splitting',
      payer_id: user.id,
      actual_cost: parseFloat(actualCostInput) * 100,
      payment_method_info: methods
    }).eq('id', trip.id);
    
    setSplitting(false);
  }

  async function markAsPaid() {
    if (!user) return;
    await supabase.from('trip_passengers')
      .update({ payment_status: 'paid' })
      .eq('trip_id', tripId)
      .eq('user_id', user.id);
  }

  async function confirmReceipt(passengerId: string, passengerUserId: string) {
    const { error } = await supabase.from('point_transactions').insert([
        { user_id: user?.id, amount: 5, reason: 'payer_bonus', trip_id: tripId }, 
        { user_id: passengerUserId, amount: 3, reason: 'ride_completion', trip_id: tripId },
    ]);
    if (!error) {
        await supabase.from('trip_passengers')
            .update({ payment_status: 'confirmed' })
            .eq('id', passengerId);
    }
  }

  // Payment link generators
  const getPaymentLink = (method: string, handle: string, amount: number) => {
    switch (method) {
      case 'venmo':
        return `https://venmo.com/?txn=pay&recipients=${handle}&amount=${amount.toFixed(2)}&note=Pincher Ride`;
      case 'paypal':
        return `https://www.paypal.me/${handle}/${amount.toFixed(2)}`;
      case 'cashapp':
        return `https://cash.app/${handle}/${amount.toFixed(2)}`;
      case 'zelle':
        return null; // Zelle doesn't have deep links, show info instead
      case 'applecash':
        return `sms:${handle}&body=Hi! Here's $${amount.toFixed(2)} for the Pincher ride.`;
      default:
        return null;
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>;
  }

  if (!trip) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="text-5xl mb-4">🚗</div>
        <h1 className="font-bold text-xl mb-2">Trip Not Found</h1>
        <Link href="/trips" className="text-blue-500 text-sm">Back to Lobby</Link>
      </div>
    );
  }

  const perPerson = trip.actual_cost ? (trip.actual_cost / 100 / passengers.length) : 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-safe-bottom transition-colors duration-300">
      {/* Header with Safe Area */}
      <div className="bg-linear-to-br from-gray-900 to-gray-800 text-white pt-safe-top px-6 pb-10 rounded-b-4xl">
        <div className="pt-4 flex justify-between items-center mb-6">
          <Link href="/trips" className="text-white/70 text-sm font-medium">← Back</Link>
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            trip.status === 'open' ? 'bg-blue-500' :
            trip.status === 'splitting' ? 'bg-green-500' : 'bg-gray-500'
          }`}>
            {trip.status.toUpperCase()}
          </span>
        </div>
        <div className="font-black text-2xl mb-2">{trip.origin} → {trip.destination}</div>
        <div className="text-white/70 text-sm">
          {new Date(trip.departure_time).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} at {new Date(trip.departure_time).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
        </div>
        
        {/* Rating Button */}
        <div className="mt-4 flex justify-end">
           <button 
             onClick={() => setShowRatingModal(true)}
             className="text-xs bg-white/20 backdrop-blur px-3 py-1.5 rounded-full font-bold hover:bg-white/30 transition-colors"
           >
             ⭐️ Rate Trip
           </button>
        </div>
      </div>

      <main className="max-w-lg mx-auto px-4 -mt-6 space-y-4">
        {/* Passengers Card */}
        <div className="bg-white dark:bg-gray-800 p-5 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="font-bold text-sm mb-4 text-gray-900 dark:text-white">
            Passengers ({passengers.length}/{trip.min_passengers})
          </div>
          <div className="space-y-2">
            {passengers.map(p => (
              <div key={p.id} className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center font-bold text-sm dark:text-white">
                    {p.user_name.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-medium text-sm dark:text-white">{p.user_name}</span>
                  {p.user_id === trip.creator_id && <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded-full">HOST</span>}
                </div>
                {trip.status === 'splitting' && (
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    p.payment_status === 'confirmed' ? 'bg-green-100 text-green-700' :
                    p.payment_status === 'paid' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-500'
                  }`}>
                    {p.payment_status === 'confirmed' ? '✓ Confirmed' : p.payment_status === 'paid' ? 'Pending' : 'Unpaid'}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat */}
        {isJoined && <ChatRoom tripId={tripId!} />}

        {/* Split - Volunteer to Pay */}
        {trip.status === 'open' && isFull && isJoined && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700">
            <h3 className="font-black text-lg mb-3 dark:text-white">💳 Ready to Split?</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">The first person to enter the cost becomes the payer.</p>
            
            {!splitting ? (
              <button 
                onClick={handleVolunteerToPay}
                className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors"
              >
                I'll Pay & Split
              </button>
            ) : (
              <div className="space-y-5">
                {/* Cost Input */}
                <div>
                  <label className="block text-xs font-bold mb-2 uppercase text-gray-500 dark:text-gray-400">Total Uber Cost</label>
                  <input 
                    type="number" 
                    value={actualCostInput}
                    onChange={e => setActualCostInput(e.target.value)}
                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-600 dark:bg-gray-700 font-bold text-lg text-gray-900 dark:text-white"
                    placeholder="e.g. 82.50"
                  />
                </div>

                {/* Payment Methods Selection */}
                <div>
                  <label className="block text-xs font-bold mb-3 uppercase text-gray-500">Accept Payments Via</label>
                  <div className="space-y-3">
                    {PAYMENT_OPTIONS.map(opt => (
                      <div key={opt.key} className="space-y-2">
                        <button
                          onClick={() => togglePaymentMethod(opt.key)}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
                            enabledMethods.has(opt.key) 
                              ? 'border-gray-900 bg-gray-50' 
                              : 'border-gray-100 hover:border-gray-200'
                          }`}
                        >
                          <span className="text-xl">{opt.icon}</span>
                          <span className="font-bold text-sm flex-1 text-left">{opt.label}</span>
                          <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            enabledMethods.has(opt.key) ? 'bg-black border-black' : 'border-gray-300'
                          }`}>
                            {enabledMethods.has(opt.key) && <span className="text-white text-xs">✓</span>}
                          </span>
                        </button>
                        
                        {/* Handle Input (if enabled and not cash) */}
                        {enabledMethods.has(opt.key) && opt.key !== 'cash' && (
                          <input
                            type="text"
                            value={paymentMethods[opt.key as keyof PaymentMethods] as string || ''}
                            onChange={e => setPaymentMethods({...paymentMethods, [opt.key]: e.target.value})}
                            className="w-full p-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 ml-8"
                            placeholder={opt.placeholder}
                            style={{ width: 'calc(100% - 2rem)' }}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={confirmSplit}
                  disabled={!actualCostInput || enabledMethods.size === 0}
                  className="w-full bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-green-700 transition-all disabled:opacity-50"
                >
                  Start Splitting
                </button>
              </div>
            )}
          </div>
        )}

        {/* Payment Section */}
        {trip.status === 'splitting' && trip.payer_id && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg border-2 border-green-500/10 dark:border-green-500/20">
            <h3 className="font-black text-xl mb-6 text-center dark:text-white">💸 Split Time</h3>

            <div className="flex justify-between items-center mb-6 p-5 bg-gray-50 dark:bg-gray-700 rounded-2xl">
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase">Total</div>
                <div className="font-bold text-gray-900 dark:text-white text-lg">${(trip.actual_cost! / 100).toFixed(2)}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold text-gray-400 uppercase">Per Person</div>
                <div className="text-3xl font-black text-green-600 dark:text-green-400">
                  ${perPerson.toFixed(2)}
                </div>
              </div>
            </div>

            {/* Payer View - Collection Status */}
            {user?.id === trip.payer_id && (
              <div className="space-y-3 mb-6">
                <div className="font-bold text-xs text-gray-400 uppercase tracking-widest mb-2">Collection Status</div>
                {passengers.filter(p => p.user_id !== trip.payer_id).map(p => (
                  <div key={p.id} className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                    <span className="font-medium dark:text-white">{p.user_name}</span>
                    {p.payment_status === 'confirmed' ? (
                      <span className="text-green-600 font-bold text-sm">✓ Confirmed</span>
                    ) : p.payment_status === 'paid' ? (
                      <button 
                        onClick={() => confirmReceipt(p.id, p.user_id)}
                        className="bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-lg"
                      >
                        Confirm Receipt
                      </button>
                    ) : (
                      <span className="text-gray-400 text-sm">Waiting...</span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Passenger View - Payment Options */}
            {trip.payer_id !== user?.id && currentUserPassenger?.payment_status !== 'paid' && (
              <div className="space-y-3">
                <div className="text-center text-sm font-medium text-gray-500 mb-4">
                  Choose how to pay:
                </div>
                
                {/* Show available payment methods */}
                <div className="space-y-2">
                  {trip.payment_method_info?.venmo && (
                    <button 
                      onClick={() => window.open(getPaymentLink('venmo', trip.payment_method_info!.venmo!, perPerson)!, '_blank')}
                      className="w-full text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg transition-colors"
                      style={{ backgroundColor: '#008CFF' }}
                    >
                      <span>💜</span> Pay {trip.payment_method_info.venmo} on Venmo
                    </button>
                  )}
                  
                  {trip.payment_method_info?.paypal && (
                    <button 
                      onClick={() => window.open(getPaymentLink('paypal', trip.payment_method_info!.paypal!, perPerson)!, '_blank')}
                      className="w-full text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg transition-colors"
                      style={{ backgroundColor: '#003087' }}
                    >
                      <span>🅿️</span> Pay on PayPal
                    </button>
                  )}
                  
                  {trip.payment_method_info?.cashapp && (
                    <button 
                      onClick={() => window.open(getPaymentLink('cashapp', trip.payment_method_info!.cashapp!, perPerson)!, '_blank')}
                      className="w-full text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg transition-colors"
                      style={{ backgroundColor: '#00D632' }}
                    >
                      <span>💚</span> Pay {trip.payment_method_info.cashapp} on Cash App
                    </button>
                  )}
                  
                  {trip.payment_method_info?.zelle && (
                    <div className="bg-purple-50 border border-purple-200 p-4 rounded-xl">
                      <div className="flex items-center gap-2 font-bold text-purple-800 mb-1">
                        <span>💵</span> Zelle
                      </div>
                      <div className="text-sm text-purple-600">
                        Send ${perPerson.toFixed(2)} to: <span className="font-bold">{trip.payment_method_info.zelle}</span>
                      </div>
                    </div>
                  )}
                  
                  {trip.payment_method_info?.applecash && (
                    <button 
                      onClick={() => window.open(getPaymentLink('applecash', trip.payment_method_info!.applecash!, perPerson)!, '_blank')}
                      className="w-full bg-black text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg"
                    >
                      <span>🍎</span> Send Apple Cash to {trip.payment_method_info.applecash}
                    </button>
                  )}
                  
                  {trip.payment_method_info?.cash && (
                    <div className="bg-green-50 border border-green-200 p-4 rounded-xl text-center">
                      <div className="font-bold text-green-800">💵 Cash Accepted</div>
                      <div className="text-sm text-green-600">Pay ${perPerson.toFixed(2)} in person</div>
                    </div>
                  )}
                </div>

                <button
                  onClick={markAsPaid}
                  className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white font-bold py-4 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors mt-4"
                >
                  I've Paid
                </button>
              </div>
            )}

            {currentUserPassenger?.payment_status === 'paid' && user?.id !== trip.payer_id && (
               <div className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold py-4 rounded-xl text-center border border-green-100 dark:border-green-800">
                 ✅ Marked as Paid - Waiting for confirmation
               </div>
            )}
          </div>
        )}

      </main>
      
      {trip && user && (
        <RatingModal
          isOpen={showRatingModal}
          onClose={() => setShowRatingModal(false)}
          tripId={trip.id}
          currentUserId={user.id}
          participants={passengers}
          onSuccess={() => alert('Thanks for rating!')}
        />
      )}
    </div>
  );
}

export default function TripRoom() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>}>
            <TripRoomContent />
        </Suspense>
    );
}
