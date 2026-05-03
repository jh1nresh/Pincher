"use client";

import React, { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useSearchParams } from "next/navigation";
import { ViewState } from "@/lib/types";
import { supabase } from "@/lib/supabase";
import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import Search from "@/components/dashboard/views/Search";
import NoMatches from "@/components/dashboard/views/NoMatches";
import SyncDeck from "@/components/dashboard/views/SyncDeck";
import Coordination from "@/components/dashboard/views/Coordination";
import PaymentSelect from "@/components/dashboard/views/PaymentSelect";
import Handshake from "@/components/dashboard/views/Handshake";
import ActiveTrip from "@/components/dashboard/views/ActiveTrip";
import PaymentSuccess from "@/components/dashboard/views/PaymentSuccess";
import Hosting from "@/components/dashboard/views/Hosting";
import Profile from "@/components/dashboard/views/Profile";

export default function TripsPage() {
  const { ready, authenticated, login, user } = usePrivy();
  const searchParams = useSearchParams();

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
  const [tripCost, setTripCost] = useState<{
    estimated: number;
    passengers: number;
    payerVenmo?: string;
  }>({
    estimated: 4000, // $40 default
    passengers: 4,
  });

  // Handle join link (from shared URL)
  useEffect(() => {
    const joinTripId = searchParams.get("join");
    if (joinTripId && authenticated && user) {
      // Someone clicked a share link - show them the trip and let them join
      setSelectedTripId(joinTripId);
      setCandidates([{ id: joinTripId }]); // Minimal candidate for flow
      setCurrentView(ViewState.PAYMENT_SELECT);
      // Clean up URL
      window.history.replaceState({}, "", "/trips");
    }
  }, [searchParams, authenticated, user]);

  // Handle Stripe payment success redirect
  useEffect(() => {
    const payment = searchParams.get("payment");
    const sessionId = searchParams.get("session_id");
    const tripId = searchParams.get("trip_id");

    if (payment === "success") {
      const code = Math.floor(1000 + Math.random() * 9000).toString();
      setSyncCode(code);
      setCurrentView(ViewState.PAYMENT_SUCCESS);
      if (tripId) setSelectedTripId(tripId);

      const handleSuccess = async () => {
        // 1. Record payment
        try {
          await supabase.from("payments").insert({
            stripe_session_id: sessionId || `local_${Date.now()}`,
            trip_id: tripId,
            user_id: user?.id || "anonymous",
            amount: 295,
            currency: "usd",
            status: "succeeded",
            description: "Match fee payment",
            completed_at: new Date().toISOString(),
          });
          console.log("Payment recorded");
        } catch (err) {
          console.error("Payment recording error:", err);
        }

        // 2. Add user to trip_passengers
        if (tripId && user) {
          try {
            const { error } = await supabase.from("trip_passengers").insert({
              trip_id: tripId,
              user_id: user.id,
              user_name: "Passenger", // Ideally fetch from profile
              payment_status: "paid",
              joined_at: new Date().toISOString(),
            });

            if (error) console.error("Failed to join trip:", error);
            else console.log("Joined trip successfully");
          } catch (err) {
            console.error("Join trip error:", err);
          }
        }
      };

      handleSuccess();

      // Clean up URL
      window.history.replaceState({}, "", "/trips");
    }
  }, [searchParams, user]);

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
            {ready ? "Connecting..." : "Loading..."}
          </h1>
          <p className="text-slate-500 text-sm">Please complete login to access the dashboard</p>
        </div>
      </div>
    );
  }

  const handleSearchConfirm = (origin: string, dest: string, matches: any[]) => {
    setCandidates(matches);
    setSearchRoute({ origin, destination: dest });
    setCurrentView(matches.length > 0 ? ViewState.SYNC_DECK : ViewState.NO_MATCHES);
  };

  const handlePaymentConfirm = () => {
    // This is called if demo mode is used (no stripe redirect)
    // We should simulate the success flow
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setSyncCode(code);
    setCurrentView(ViewState.PAYMENT_SUCCESS);
  };

  const joinSelectedTrip = async (paymentMethod: "venmo" | "zelle" | "usdc") => {
    if (!selectedTripId || !user?.id) return;

    const paymentStatus = "pending_p2p";

    const { data: existing } = await supabase
      .from("trip_passengers")
      .select("id")
      .eq("trip_id", selectedTripId)
      .eq("user_id", user.id)
      .maybeSingle();

    if (existing?.id) {
      await supabase
        .from("trip_passengers")
        .update({
          payment_method: paymentMethod,
          payment_status: paymentStatus,
        })
        .eq("id", existing.id);
      return;
    }

    await supabase.from("trip_passengers").insert({
      trip_id: selectedTripId,
      user_id: user.id,
      user_name: user.email?.address?.split("@")[0] || "Passenger",
      is_driver: false,
      payment_method: paymentMethod,
      payment_status: paymentStatus,
      joined_at: new Date().toISOString(),
    });
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
              setSelectedTripId(tripId);
              // Fetch trip info for payment
              const trip = candidates.find(c => c.id === tripId);
              if (trip) {
                setTripCost({
                  estimated: trip.estimated_cost || 4000,
                  passengers: trip.max_passengers || 4,
                  payerVenmo: trip.payer_venmo,
                });
              }
              setCurrentView(ViewState.PAYMENT_SELECT);
            }}
            onSkip={() => setCurrentView(ViewState.SEARCH)}
          />
        );
      case ViewState.PAYMENT_SELECT:
        return (
          <PaymentSelect
            tripId={selectedTripId || ""}
            estimatedCost={tripCost.estimated}
            passengerCount={tripCost.passengers}
            payerVenmo={tripCost.payerVenmo}
            onComplete={async method => {
              await joinSelectedTrip(method);
              if (method === "usdc") {
                // USDC uses a direct transfer receipt flow in the MVP.
                setCurrentView(ViewState.HANDSHAKE);
              } else {
                // Venmo/Zelle - trust based, go to coordination
                const code = Math.floor(1000 + Math.random() * 9000).toString();
                setSyncCode(code);
                setCurrentView(ViewState.COORDINATION);
              }
            }}
            onBack={() => setCurrentView(ViewState.SYNC_DECK)}
          />
        );
      case ViewState.HANDSHAKE:
        return <Handshake tripId={selectedTripId || ""} onConfirm={handlePaymentConfirm} />;
      case ViewState.PAYMENT_SUCCESS:
        return (
          <PaymentSuccess
            syncCode={syncCode}
            onProceed={() => setCurrentView(ViewState.COORDINATION)}
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
    ViewState.PAYMENT_SUCCESS,
    ViewState.HOST_WAITING,
    ViewState.HANDSHAKE,
    ViewState.PAYMENT_SELECT,
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
