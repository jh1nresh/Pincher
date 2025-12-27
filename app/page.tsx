"use client";

import { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import { APIProvider, Map, ControlPosition, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import SearchBox from "@/components/SearchBox";
import MapSidebar from "@/components/MapSidebar";
import UserProfile from "@/components/UserProfile";
import Directions from "@/components/Directions";
import UserOnboarding from '@/components/UserOnboarding';

export default function UberPage() {
  const { authenticated } = usePrivy();
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
  const [pickupCoords, setPickupCoords] = useState<{ lat: number; lng: number } | undefined>();
  const [dropoffCoords, setDropoffCoords] = useState<{ lat: number; lng: number } | undefined>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [topMatch, setTopMatch] = useState<any>(null); // State for Notification
  const [hasOnboarded, setHasOnboarded] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Reset onboarding when user logs out
  useEffect(() => {
    if (!authenticated) {
      setHasOnboarded(false);
    }
  }, [authenticated]);

  // Auto-open sidebar if high match found? Or just show notification.
  // We'll show notification.

  // Default center: Orange County
  const center = pickupCoords || dropoffCoords || { lat: 33.6846, lng: -117.8265 };

  const handlePickupChange = (_location: string, coords?: { lat: number; lng: number }) => {
    if (coords) {
      setPickupCoords(coords);
    }
  };

  const handleDropoffChange = (_location: string, coords?: { lat: number; lng: number }) => {
    if (coords) {
      setDropoffCoords(coords);
    }
  };

  const handleRideCreated = () => {
      setRefreshKey(prev => prev + 1);
      setIsSidebarOpen(true); // Auto open sidebar to see new ride
  };

  return (
    <>
      {!hasOnboarded && (
          <UserOnboarding onComplete={() => setHasOnboarded(true)} />
      )}
      {/* Global Style for Google Places Autocomplete */}
      <style jsx global>{`
        .pac-container {
          z-index: 9999 !important;
          border-radius: 8px;
          box-shadow:
            0 4px 6px -1px rgb(0 0 0 / 0.1),
            0 2px 4px -2px rgb(0 0 0 / 0.1);
          border: none;
          margin-top: 4px;
        }
        .pac-item {
          padding: 12px 16px;
          cursor: pointer;
          border: none;
          font-size: 14px;
        }
        .pac-item:hover {
          background-color: #f3f4f6;
        }
        .pac-icon {
          display: none;
        }
        .pac-item-query {
          font-size: 14px;
          font-weight: 500;
          color: #111827;
        }
      `}</style>

      <div className="h-screen w-screen flex relative overflow-hidden">
        {/* Sidebar */}
        {/* Sidebar */}
        <MapSidebar 
          isOpen={isSidebarOpen} 
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
          pickupCoords={pickupCoords}
          dropoffCoords={dropoffCoords}
          onTopMatchUpdate={setTopMatch}
          refreshTrigger={refreshKey}
        />
        


        {/* Map Container */}
        <div className="flex-1 relative h-full">
          {apiKey ? (
            <APIProvider apiKey={apiKey} libraries={["places", "marker"]}>
              <Map
                key={`${center.lat}-${center.lng}`}
                defaultCenter={center}
                defaultZoom={pickupCoords || dropoffCoords ? 13 : 11}
                gestureHandling="greedy"
                disableDefaultUI={true}
                mapId="DEMO_MAP_ID"
                mapTypeControlOptions={{ position: ControlPosition.BOTTOM_LEFT }}
                className="w-full h-full"
              >
                {pickupCoords && (
                  <AdvancedMarker 
                    position={pickupCoords}
                    draggable={true}
                    onDragEnd={(e: any) => {
                        if (e.latLng) {
                            const newLat = e.latLng.lat();
                            const newLng = e.latLng.lng();
                            setPickupCoords({ lat: newLat, lng: newLng });
                        }
                    }}
                  >
                    <Pin background={'#000000'} glyphColor={'#ffffff'} borderColor={'#000000'} />
                  </AdvancedMarker>
                )}
                {dropoffCoords && (
                   <AdvancedMarker 
                    position={dropoffCoords}
                    draggable={true}
                    onDragEnd={(e: any) => {
                        if (e.latLng) {
                            const newLat = e.latLng.lat();
                            const newLng = e.latLng.lng();
                            setDropoffCoords({ lat: newLat, lng: newLng });
                        }
                    }}
                   >
                    <Pin background={'#ffffff'} glyphColor={'#000000'} borderColor={'#000000'} />
                  </AdvancedMarker>
                )}
                
                {/* Route Line */}
                <Directions pickup={pickupCoords} dropoff={dropoffCoords} />
              </Map>
              {/* Search Box with sliding effect */}
              <SearchBox 
                onPickupChange={handlePickupChange} 
                onDropoffChange={handleDropoffChange} 
                externalPickupCoords={pickupCoords}
                externalDropoffCoords={dropoffCoords}
                onRideCreated={handleRideCreated}
                isSidebarOpen={isSidebarOpen}
                onOpenProfile={() => setIsProfileOpen(true)}
              />

              <UserProfile 
                isOpen={isProfileOpen} 
                onClose={() => setIsProfileOpen(false)} 
                onToggle={() => setIsProfileOpen(!isProfileOpen)}
              />
              
              {/* Match Notification Pill */}
              {topMatch && topMatch.match_score > 60 && !isSidebarOpen && (
                  <div 
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-xl p-2 pr-4 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform animate-in slide-in-from-bottom-4 duration-500 z-50 border border-gray-100"
                    onClick={() => setIsSidebarOpen(true)}
                  >
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold text-green-700">{topMatch.match_score}%</span>
                      </div>
                      <div className="flex flex-col">
                          <span className="text-xs font-bold text-gray-900 border-b border-gray-100 pb-0.5">High Match Found!</span>
                          <span className="text-[10px] text-gray-500">{topMatch.seats} seats • ${topMatch.price}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </div>
                  </div>
              )}
            </APIProvider>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-200">
              <div className="text-center p-8 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  需要 Google Maps API Key
                </h3>
                <p className="text-sm text-gray-600">
                  請在 .env 文件中添加：NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                </p>
              </div>
              {/* Fallback SearchBox display if no API Key (functionality will be limited) */}
               <SearchBox 
                 onPickupChange={handlePickupChange} 
                 onDropoffChange={handleDropoffChange}
                 className={isSidebarOpen ? 'translate-x-[320px]' : ''}
                 externalPickupCoords={pickupCoords}
                 externalDropoffCoords={dropoffCoords}
               />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
