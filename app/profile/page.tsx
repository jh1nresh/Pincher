'use client';

import { useEffect, useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { supabase } from '@/lib/supabase';
import { BackgroundBeams } from '@/components/BackgroundBeams';
import WalletBadge from '@/components/WalletBadge';
import Link from 'next/link';

interface TripSummary {
    id: string;
    origin: string;
    destination: string;
    status: string;
    departure_time: string;
}

export default function ProfilePage() {
    const { user, ready, authenticated, logout } = usePrivy();
    const [myTrips, setMyTrips] = useState<TripSummary[]>([]);
    const [points, setPoints] = useState(0);
    
    // Editable profile fields
    const [displayName, setDisplayName] = useState('');
    const [username, setUsername] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [usernameError, setUsernameError] = useState('');

    // Load profile from Supabase on mount
    useEffect(() => {
        if (user?.id) {
            fetchProfileData();
            loadUserProfile();
        }
    }, [user]);

    async function loadUserProfile() {
        if (!user?.id) return;
        
        const { data, error } = await supabase
            .from('user_profiles')
            .select('display_name, username')
            .eq('user_id', user.id)
            .single();
        
        if (data) {
            setDisplayName(data.display_name || '');
            setUsername(data.username || '');
        } else {
            // Default to email prefix if no profile exists
            setDisplayName(user?.email?.address?.split('@')[0] || 'User');
        }
    }

    async function fetchProfileData() {
        if (!user) return;

        // 1. Fetch Points
        const { data: pointsData } = await supabase
            .from('point_transactions')
            .select('amount')
            .eq('user_id', user.id);
        
        if (pointsData) {
            const total = pointsData.reduce((acc, curr) => acc + curr.amount, 0);
            setPoints(total);
        }

        // 2. Fetch My Trips
        const { data: tripData } = await supabase
            .from('trip_passengers')
            .select(`
                trip_id,
                trip_rooms (
                    id, origin, destination, status, departure_time
                )
            `)
            .eq('user_id', user.id)
            .order('joined_at', { ascending: false });

        if (tripData) {
            const trips = tripData.map(t => Array.isArray(t.trip_rooms) ? t.trip_rooms[0] : t.trip_rooms).filter(Boolean) as unknown as TripSummary[];
            setMyTrips(trips);
        }
    }

    const saveProfile = async () => {
        if (!user?.id) return;
        setSaving(true);
        setUsernameError('');

        // Check if username is taken (if changed)
        if (username) {
            const { data: existingUser } = await supabase
                .from('user_profiles')
                .select('user_id')
                .eq('username', username)
                .neq('user_id', user.id)
                .single();
            
            if (existingUser) {
                setUsernameError('Username already taken');
                setSaving(false);
                return;
            }
        }

        // Upsert profile (insert or update)
        const { error } = await supabase
            .from('user_profiles')
            .upsert({
                user_id: user.id,
                display_name: displayName || null,
                username: username || null,
                updated_at: new Date().toISOString()
            }, {
                onConflict: 'user_id'
            });

        if (error) {
            console.error('Failed to save profile:', error);
            setUsernameError(error.message);
        } else {
            setIsEditing(false);
        }
        setSaving(false);
    };

    if (ready && !authenticated) {
        return (
            <div className="flex h-screen items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Please Login</h1>
                    <Link href="/" className="bg-black text-white px-6 py-2 rounded-xl">Go to Login</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-32 relative overflow-hidden transition-colors duration-300">
             <BackgroundBeams />
             
             {/* Floating Header - Forced Safe Position */}
             <div className="fixed top-0 left-0 right-0 z-50 px-4 pointer-events-none flex flex-col items-center">
                {/* Safe Area Spacer */}
                <div className="w-full" style={{ height: 'max(env(safe-area-inset-top), 48px)' }}></div>
                <div className="w-full max-w-lg pointer-events-auto flex justify-between items-center">
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-full shadow-sm px-4 py-2 border border-gray-100 dark:border-gray-700">
                        <span className="font-bold text-xs uppercase tracking-wider dark:text-white">👤 Profile</span>
                    </div>
                    <button
                        onClick={() => isEditing ? saveProfile() : setIsEditing(true)}
                        className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                            isEditing 
                                ? 'bg-green-500 text-white' 
                                : 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border border-gray-100 dark:border-gray-700 dark:text-white'
                        }`}
                    >
                        {saving ? '...' : isEditing ? '✓ Save' : '✏️ Edit'}
                    </button>
                </div>
             </div>

             <div className="relative z-10 max-w-lg mx-auto px-4 pt-28">
                {/* Avatar Section */}
                <div className="text-center mb-8 relative">
                    {/* Gradient Ring Avatar */}
                    <div className="w-28 h-28 bg-linear-to-tr from-violet-500 via-pink-500 to-orange-400 rounded-full mx-auto mb-4 p-[4px] shadow-xl animate-pulse">
                        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-5xl font-bold text-gray-800 dark:text-white overflow-hidden">
                             {displayName?.charAt(0).toUpperCase() || user?.email?.address?.charAt(0).toUpperCase() || '👤'}
                        </div>
                    </div>
                    
                    {/* Editable Name */}
                    {isEditing ? (
                        <div className="space-y-3 max-w-xs mx-auto">
                            <input
                                type="text"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                placeholder="Display Name"
                                className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-center font-bold dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                            />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''));
                                    setUsernameError('');
                                }}
                                placeholder="@username"
                                className={`w-full px-4 py-2.5 bg-white dark:bg-gray-800 rounded-xl border text-center text-gray-600 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 ${usernameError ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'}`}
                            />
                            {usernameError && (
                                <div className="text-red-500 text-xs font-medium">{usernameError}</div>
                            )}
                        </div>
                    ) : (
                        <>
                            {/* Name Badge */}
                            <div className="inline-block px-4 py-1.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-full border border-gray-200 dark:border-gray-700 shadow-sm mb-2">
                                <h1 className="text-lg font-black text-gray-900 dark:text-white tracking-tight">
                                    {displayName || user?.email?.address?.split('@')[0] || 'User'}
                                </h1>
                            </div>
                            {username && (
                                <div className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2">@{username}</div>
                            )}
                        </>
                    )}
                    
                    {/* Wallet Badge */}
                    <div className="flex justify-center mt-2">
                        <WalletBadge className="text-sm px-3 py-1.5" />
                    </div>
                </div>

                {/* Premium Points Card - Compact */}
                <div className="relative overflow-hidden bg-[#0A0A0A] text-white rounded-4xl p-6 shadow-xl mb-8 border border-gray-800 group">
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-linear-to-br from-blue-600 to-purple-600 rounded-full blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex justify-between items-end">
                        <div>
                            <div className="flex items-center gap-2 mb-1 opacity-60">
                                <span className="text-[10px] font-bold tracking-widest uppercase">Rewards</span>
                            </div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-linear-to-b from-white to-white/70">
                                    {points}
                                </span>
                                <span className="text-xs font-bold text-yellow-500">PTS</span>
                            </div>
                        </div>
                        <div className="text-gray-400 text-xs font-medium max-w-[50%] text-right leading-tight">
                            Earn <span className="text-white">5x</span> by hosting rides.
                        </div>
                    </div>
                </div>

                {/* Trip History */}
                <div className="space-y-4">
                    <h2 className="font-bold text-sm text-gray-400 dark:text-gray-500 uppercase tracking-wider px-2">Trip History</h2>
                    {myTrips.length === 0 ? (
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl text-center text-gray-400 border border-gray-100 dark:border-gray-700 border-dashed text-xs">
                            No trips yet.
                        </div>
                    ) : (
                        myTrips.map(trip => (
                            <Link 
                                key={trip.id} 
                                href={`/trips/room?id=${trip.id}`}
                                className="block bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all active:scale-[0.98]"
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <div className="font-bold text-sm text-gray-900 dark:text-white tracking-tight">
                                        {trip.origin} <span className="text-gray-300 mx-1">→</span> {trip.destination}
                                    </div>
                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide ${
                                        trip.status === 'completed' ? 'bg-gray-100 text-gray-500' : 
                                        trip.status === 'open' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                                    }`}>
                                        {trip.status === 'open' ? 'Active' : trip.status}
                                    </span>
                                </div>
                                <div className="text-[10px] text-gray-400 font-medium">
                                    {new Date(trip.departure_time).toLocaleDateString()}
                                </div>
                            </Link>
                        ))
                    )}
                </div>

                {/* Logout */}
                <button 
                    onClick={logout}
                    className="w-full mt-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-400 font-bold py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-red-500 transition-colors text-sm"
                >
                    Sign Out
                </button>
             </div>
        </div>
    );
}
