'use client';

import React, { useState, useEffect } from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { useSearchParams } from 'next/navigation';
import { ViewState } from '@/lib/types';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';
import Search from '@/components/dashboard/views/Search';
import SyncDeck from '@/components/dashboard/views/SyncDeck';
import Coordination from '@/components/dashboard/views/Coordination';
import Handshake from '@/components/dashboard/views/Handshake';
import ActiveTrip from '@/components/dashboard/views/ActiveTrip';
import PaymentSuccess from '@/components/dashboard/views/PaymentSuccess';
import Hosting from '@/components/dashboard/views/Hosting';
import Profile from '@/components/dashboard/views/Profile';

export default function TripsPage() {
  const { ready, authenticated, login } = usePrivy();
  const searchParams = useSearchParams();
  
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.SEARCH);
  const [syncCode, setSyncCode] = useState<string>('');
  const [bookingData, setBookingData] = useState({
    isBooked: false,
    plate: '',
    vehicle: ''
  });

  // Handle Stripe payment success redirect
  useEffect(() => {
    const payment = searchParams.get('payment');
    if (payment === 'success') {
      const code = Math.floor(1000 + Math.random() * 9000).toString();
      setSyncCode(code);
      setCurrentView(ViewState.PAYMENT_SUCCESS);
      // Clean up URL
      window.history.replaceState({}, '', '/trips');
    }
  }, [searchParams]);

  // Auto-trigger login when not authenticated
  useEffect(() => {
    if (ready && !authenticated) {
      login();
    }
  }, [ready, authenticated, login]);

  // Show loading screen while Privy initializes or login modal is open
  if (!ready || !authenticated) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen dashboard-bg text-white">
        <div className="text-center space-y-6">
          <div className="size-12 border-2 border-action-green/20 border-t-action-green rounded-full animate-spin mx-auto"></div>
          <h1 className="text-2xl font-black text-white italic uppercase tracking-tighter font-display">
            {ready ? 'Connecting...' : 'Loading...'}
          </h1>
          <p className="text-slate-500 text-sm">Please complete login to access the dashboard</p>
        </div>
      </div>
    );
  }

  const handleSearchConfirm = (origin: string, dest: string, hasMatches: boolean) => {
    setCurrentView(hasMatches ? ViewState.SYNC_DECK : ViewState.HOST_WAITING);
  };

  const handlePaymentConfirm = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setSyncCode(code);
    setCurrentView(ViewState.PAYMENT_SUCCESS);
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.SEARCH:
        return <Search onConfirm={handleSearchConfirm} onHost={() => setCurrentView(ViewState.HOST_WAITING)} />;
      case ViewState.HOST_WAITING:
        return <Hosting onPeerFound={() => setCurrentView(ViewState.HANDSHAKE)} />;
      case ViewState.SYNC_DECK: 
        return <SyncDeck onInitiate={() => setCurrentView(ViewState.HANDSHAKE)} onSkip={() => setCurrentView(ViewState.SEARCH)} />;
      case ViewState.HANDSHAKE: 
        return <Handshake onConfirm={handlePaymentConfirm} />;
      case ViewState.PAYMENT_SUCCESS:
        return <PaymentSuccess syncCode={syncCode} onProceed={() => setCurrentView(ViewState.COORDINATION)} />;
      case ViewState.COORDINATION: 
        return (
          <Coordination 
            syncCode={syncCode}
            bookingData={bookingData}
            onUpdateBooking={(data) => setBookingData(prev => ({...prev, ...data}))}
            onProceed={() => setCurrentView(ViewState.ACTIVE_TRIP)} 
          />
        );
      case ViewState.ACTIVE_TRIP: 
        return <ActiveTrip onEnd={() => {
          setBookingData({ isBooked: false, plate: '', vehicle: '' });
          setSyncCode('');
          setCurrentView(ViewState.SEARCH);
        }} />;
      case ViewState.PROFILE:
        return <Profile />;
      default: 
        return <Search onConfirm={handleSearchConfirm} onHost={() => setCurrentView(ViewState.HOST_WAITING)} />;
    }
  };

  const isFullScreen = [
    ViewState.ACTIVE_TRIP, 
    ViewState.PAYMENT_SUCCESS,
    ViewState.HOST_WAITING,
    ViewState.HANDSHAKE
  ].includes(currentView);

  const hideSidebar = isFullScreen || currentView === ViewState.SEARCH;

  return (
    <div className="flex flex-col h-screen overflow-hidden dashboard-bg text-slate-100 font-sans">
      {!isFullScreen && <Header activeView={currentView} onNavigate={setCurrentView} />}
      <div className="flex flex-1 overflow-hidden min-h-0">
        {!hideSidebar && <Sidebar activeView={currentView} onNavigate={setCurrentView} />}
        <main className="flex-1 flex flex-col overflow-hidden bg-transparent relative min-h-0">
          <div className="flex-1 overflow-hidden flex flex-col min-h-0">
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
}
