"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ViewState } from "@/lib/types";
import { supabase } from "@/lib/supabase";
import { getLocalUser } from "@/lib/local-user";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import Search from "@/components/dashboard/views/Search";
import NoMatches from "@/components/dashboard/views/NoMatches";
import SyncDeck from "@/components/dashboard/views/SyncDeck";
import Coordination from "@/components/dashboard/views/Coordination";
import ActiveTrip from "@/components/dashboard/views/ActiveTrip";
import Hosting from "@/components/dashboard/views/Hosting";
import Profile from "@/components/dashboard/views/Profile";

function TripsContent() {
  const searchParams = useSearchParams();
  const [localUser] = useState(() => getLocalUser());

  const [currentView, setCurrentView] = useState<ViewState>(ViewState.SEARCH);
  const [syncCode, setSyncCode] = useState<string>("");
  const [bookingData, setBookingData] = useState({
    isBooked: false,
    plate: "",
    vehicle: "",
  });

  const [candidates, setCandidates] = useState<any[]>([]);
  const [selectedTripId, setSelectedTripId] = useState<string | null>(null);
  const [searchRoute, setSearchRoute] = useState<{ origin: string; destination: string }>({
    origin: "",
    destination: "",
  });

  // Handle join link (from shared URL)
  useEffect(() => {
    const joinTripId = searchParams.get("join");
    if (joinTripId) {
      joinSelectedTrip(joinTripId);
    }
  }, [searchParams]);

  const handleSearchConfirm = (origin: string, dest: string, matches: any[]) => {
    setCandidates(matches);
    setSearchRoute({ origin, destination: dest });
    setCurrentView(matches.length > 0 ? ViewState.SYNC_DECK : ViewState.NO_MATCHES);
  };

  const joinSelectedTrip = async (tripId: string) => {
    if (!tripId) return;

    const { data: existing } = await supabase
      .from("trip_passengers")
      .select("id")
      .eq("trip_id", tripId)
      .eq("user_id", localUser.id)
      .maybeSingle();

    if (existing?.id) {
      await supabase
        .from("trip_passengers")
        .update({
          payment_status: "unpaid",
        })
        .eq("id", existing.id);
    } else {
      await supabase.from("trip_passengers").insert({
        trip_id: tripId,
        user_id: localUser.id,
        user_name: localUser.name,
        is_driver: false,
        payment_status: "unpaid",
        joined_at: new Date().toISOString(),
      });
    }

    setSelectedTripId(tripId);
    setSyncCode(Math.floor(1000 + Math.random() * 9000).toString());
    setCurrentView(ViewState.COORDINATION);
    window.history.replaceState({}, "", "/trips");
  };

  const renderView = () => {
    switch (currentView) {
      case ViewState.SEARCH:
        return (
          <Search
            onConfirm={handleSearchConfirm}
            onHost={tripId => {
              setSelectedTripId(tripId);
              setCurrentView(ViewState.HOST_WAITING);
            }}
          />
        );
      case ViewState.NO_MATCHES:
        return (
          <NoMatches
            origin={searchRoute.origin}
            destination={searchRoute.destination}
            onHost={() => setCurrentView(ViewState.SEARCH)} // Go back to search to use Host flow
            onBack={() => setCurrentView(ViewState.SEARCH)}
          />
        );
      case ViewState.HOST_WAITING:
        return (
          <Hosting
            tripId={selectedTripId || ""}
            onPeerFound={() => setCurrentView(ViewState.COORDINATION)}
            onCancel={() => {
              // Ideally delete trip here
              setSelectedTripId(null);
              setCurrentView(ViewState.SEARCH);
            }}
          />
        );
      case ViewState.SYNC_DECK:
        return (
          <SyncDeck
            candidates={candidates}
            onInitiate={tripId => {
              joinSelectedTrip(tripId);
            }}
            onSkip={() => setCurrentView(ViewState.SEARCH)}
          />
        );
      case ViewState.COORDINATION:
        return (
          <Coordination
            tripId={selectedTripId || ""}
            syncCode={syncCode}
            bookingData={bookingData}
            onUpdateBooking={data => setBookingData(prev => ({ ...prev, ...data }))}
            onProceed={() => setCurrentView(ViewState.ACTIVE_TRIP)}
          />
        );
      case ViewState.ACTIVE_TRIP:
        return (
          <ActiveTrip
            tripId={selectedTripId || ""}
            onEnd={() => {
              setBookingData({ isBooked: false, plate: "", vehicle: "" });
              setSyncCode("");
              setCurrentView(ViewState.SEARCH);
            }}
          />
        );
      case ViewState.PROFILE:
        return <Profile />;
      default:
        return (
          <Search
            onConfirm={handleSearchConfirm}
            onHost={() => setCurrentView(ViewState.HOST_WAITING)}
          />
        );
    }
  };

  const isFullScreen = [
    ViewState.ACTIVE_TRIP,
    ViewState.HOST_WAITING,
    ViewState.NO_MATCHES,
  ].includes(currentView);

  const hideSidebar = isFullScreen || currentView === ViewState.SEARCH;

  return (
    <div className="flex flex-col h-screen overflow-hidden dashboard-bg text-slate-100 font-sans">
      {!isFullScreen && <Header activeView={currentView} onNavigate={setCurrentView} />}
      <div className="flex flex-1 overflow-hidden min-h-0">
        {!hideSidebar && <Sidebar activeView={currentView} onNavigate={setCurrentView} />}
        <main className="flex-1 flex flex-col overflow-hidden bg-transparent relative min-h-0">
          <div className="flex-1 overflow-hidden flex flex-col min-h-0">{renderView()}</div>
        </main>
      </div>
    </div>
  );
}

export default function TripsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen flex-col items-center justify-center dashboard-bg text-white">
          <div className="space-y-6 text-center">
            <div className="mx-auto size-12 animate-spin rounded-full border-2 border-action-green/20 border-t-action-green" />
            <h1 className="font-display text-2xl font-black uppercase italic tracking-tighter text-white">
              Loading rides...
            </h1>
          </div>
        </div>
      }
    >
      <TripsContent />
    </Suspense>
  );
}
