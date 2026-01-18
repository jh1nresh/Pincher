'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { HOTZONES, Hotzone } from '@/lib/constants';
import { Geolocation } from '@capacitor/geolocation';

interface MapPickerProps {
    onSelect: (id: string) => void;
    selectedId?: string;
    center?: { lat: number; lng: number };
}

const mapContainerStyle = {
    width: '100%',
    height: '100%',
};

const mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    styles: [
        {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
        },
    ],
};

// Haversine formula to calculate distance between two points
function getDistanceKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

interface HotzoneWithDistance extends Hotzone {
    distance?: number;
}

export default function MapPicker({ onSelect, selectedId, center }: MapPickerProps) {
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [activeMarker, setActiveMarker] = useState<string | null>(null);
    const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
    const [locationError, setLocationError] = useState<string | null>(null);
    const [locationLoading, setLocationLoading] = useState(true);

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    });

    const defaultCenter = center || { lat: 33.7, lng: -117.9 }; // Orange County

    // Get user's current location using Capacitor Geolocation
    const requestLocation = useCallback(async () => {
        setLocationLoading(true);
        setLocationError(null);
        
        try {
            // Request permission first
            const permission = await Geolocation.requestPermissions();
            console.log('📍 Location permission:', permission);
            
            if (permission.location === 'granted' || permission.coarseLocation === 'granted') {
                const position = await Geolocation.getCurrentPosition({
                    enableHighAccuracy: true,
                    timeout: 15000,
                });
                
                const loc = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                setUserLocation(loc);
                console.log('📍 User location:', loc);
                
                if (map) {
                    map.panTo(loc);
                    map.setZoom(13);
                }
            } else {
                setLocationError('Location permission denied');
            }
        } catch (error: any) {
            console.error('📍 Geolocation error:', error);
            setLocationError(error.message || 'Unable to get location');
            
            // Fallback to browser API
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const loc = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        };
                        setUserLocation(loc);
                        setLocationError(null);
                    },
                    (err) => {
                        console.error('Browser geolocation fallback failed:', err);
                    }
                );
            }
        } finally {
            setLocationLoading(false);
        }
    }, [map]);

    // Request location on mount
    useEffect(() => {
        requestLocation();
    }, []);

    // Calculate distances and sort hotzones
    const hotzonesSorted: HotzoneWithDistance[] = useMemo(() => {
        const withDistance = HOTZONES.map(zone => ({
            ...zone,
            distance: userLocation 
                ? getDistanceKm(userLocation.lat, userLocation.lng, zone.coordinates.lat, zone.coordinates.lng)
                : undefined
        }));
        
        if (userLocation) {
            withDistance.sort((a, b) => (a.distance || 999) - (b.distance || 999));
        }
        
        return withDistance;
    }, [userLocation]);

    const nearestZoneId = hotzonesSorted[0]?.id;

    const onLoad = useCallback((map: google.maps.Map) => {
        setMap(map);
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    // Pan to center when it changes
    useEffect(() => {
        if (map && center) {
            map.panTo(center);
            map.setZoom(13);
        }
    }, [map, center]);

    // Pan to user location
    const panToUserLocation = () => {
        if (map && userLocation) {
            map.panTo(userLocation);
            map.setZoom(14);
        }
    };

    if (loadError) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-red-500">
                Map Error: {loadError.message}
            </div>
        );
    }

    if (!isLoaded) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                <div className="animate-pulse">Loading Map...</div>
            </div>
        );
    }

    return (
        <div className="w-full h-full relative">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={userLocation || defaultCenter}
                zoom={11}
                options={mapOptions}
                onLoad={onLoad}
                onUnmount={onUnmount}
            >
                {/* User Location Marker */}
                {userLocation && (
                    <Marker
                        position={userLocation}
                        icon={{
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 12,
                            fillColor: '#4285F4',
                            fillOpacity: 1,
                            strokeColor: '#FFFFFF',
                            strokeWeight: 4,
                        }}
                        title="Your Location"
                    />
                )}

                {/* Hotzone Markers */}
                {hotzonesSorted.map((zone) => {
                    const isNearest = zone.id === nearestZoneId && userLocation;
                    const isSelected = selectedId === zone.id;
                    const markerColor = isSelected ? '#22c55e' : isNearest ? '#8b5cf6' : '#1f2937';
                    
                    return (
                        <Marker
                            key={zone.id}
                            position={zone.coordinates}
                            onClick={() => setActiveMarker(zone.id)}
                            icon={{
                                url: `data:image/svg+xml,${encodeURIComponent(`
                                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="54" viewBox="0 0 44 54">
                                        <circle cx="22" cy="20" r="18" fill="${markerColor}" stroke="white" stroke-width="3"/>
                                        <text x="22" y="26" text-anchor="middle" font-size="16">${zone.icon}</text>
                                        <polygon points="22,54 11,32 33,32" fill="${markerColor}"/>
                                        ${isNearest ? '<circle cx="38" cy="6" r="6" fill="#f59e0b"/><text x="38" y="9" text-anchor="middle" font-size="8" fill="white" font-weight="bold">★</text>' : ''}
                                    </svg>
                                `)}`,
                                scaledSize: new google.maps.Size(44, 54),
                                anchor: new google.maps.Point(22, 54),
                            }}
                        />
                    );
                })}

                {/* Info Window */}
                {activeMarker && (
                    <InfoWindow
                        position={HOTZONES.find((z) => z.id === activeMarker)?.coordinates}
                        onCloseClick={() => setActiveMarker(null)}
                    >
                        <div className="p-2 min-w-[160px]">
                            {(() => {
                                const zone = hotzonesSorted.find((z) => z.id === activeMarker);
                                const isNearest = zone?.id === nearestZoneId && userLocation;
                                return (
                                    <>
                                        {isNearest && (
                                            <div className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 inline-block">
                                                ⭐ Recommended
                                            </div>
                                        )}
                                        <div className="font-bold text-sm">{zone?.displayName}</div>
                                        <div className="text-xs text-gray-500 mt-1">{zone?.virtualPickup}</div>
                                        {zone?.distance !== undefined && (
                                            <div className="text-xs text-blue-600 font-medium mt-1">
                                                📍 {zone.distance.toFixed(1)} km away
                                            </div>
                                        )}
                                        <button
                                            onClick={() => {
                                                onSelect(activeMarker);
                                                setActiveMarker(null);
                                            }}
                                            className="mt-3 w-full bg-black text-white text-xs font-bold py-2 px-3 rounded-lg"
                                        >
                                            Select Location
                                        </button>
                                    </>
                                );
                            })()}
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>

            {/* Location Button */}
            <button
                onClick={userLocation ? panToUserLocation : requestLocation}
                className={`absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 active:scale-95 transition-all z-10 ${locationLoading ? 'animate-pulse' : ''}`}
                title={userLocation ? "Go to my location" : "Enable location"}
            >
                {locationLoading ? (
                    <span className="text-gray-400 animate-spin">⏳</span>
                ) : userLocation ? (
                    <span className="text-blue-500 text-xl">📍</span>
                ) : (
                    <span className="text-gray-500 text-xl">🔓</span>
                )}
            </button>

            {/* Location Error - Tap to retry */}
            {locationError && !userLocation && (
                <button
                    onClick={requestLocation}
                    className="absolute top-2 left-2 bg-amber-100 text-amber-800 text-xs px-3 py-2 rounded-lg flex items-center gap-2 shadow-sm active:scale-95"
                >
                    <span>📍</span>
                    <span>Tap to enable location</span>
                </button>
            )}

            {/* Nearest Location Badge */}
            {userLocation && nearestZoneId && (
                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-gray-800 text-xs px-3 py-2 rounded-lg shadow-sm">
                    <span className="text-amber-500 font-bold">★</span> Nearest: <span className="font-bold">{hotzonesSorted[0]?.displayName}</span>
                    <span className="text-gray-500 ml-1">({hotzonesSorted[0]?.distance?.toFixed(1)} km)</span>
                </div>
            )}
        </div>
    );
}
