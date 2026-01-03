'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Next.js
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom Car Icon for Driver
const carIcon = new L.DivIcon({
  html: '<div style="font-size: 24px;">🚖</div>',
  className: 'bg-transparent',
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

interface RideMapProps {
  waypoints: { name: string; id: string; lat?: number; lng?: number; latitude?: number; longitude?: number }[];
  driverPosition?: { lat: number; lng: number } | null;
  isTracking?: boolean;
  flyToLocation?: { lat: number; lng: number; zoom?: number } | null;
}

// Component to fly map to specific location
function MapFlyController({ location }: { location: { lat: number; lng: number; zoom?: number } | null }) {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.flyTo([location.lat, location.lng], location.zoom || 12, {
        duration: 1.5,
        easeLinearity: 0.25
      });
    }
  }, [location, map]);
  return null;
}

// Component to update map center when driver moves
function MapUpdater({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, map.getZoom());
  }, [center, map]);
  return null;
}

export default function RideMap({ waypoints, driverPosition, isTracking, flyToLocation }: RideMapProps) {
  // Default center (Irvine/OC area)
  const defaultCenter: [number, number] = [33.684, -117.826];
  
  // Filter waypoints with valid coordinates and map to polyline  
  const validWaypoints = waypoints.filter(wp => (wp.lat ?? wp.latitude) !== undefined && (wp.lng ?? wp.longitude) !== undefined);
  const polylinePositions = validWaypoints.map(wp => [(wp.lat ?? wp.latitude!), (wp.lng ?? wp.longitude!)] as [number, number]);

  return (
    <div className="h-[300px] w-full rounded-xl overflow-hidden shadow-inner border border-gray-200 relative z-0">
      <MapContainer 
        center={defaultCenter} 
        zoom={11} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        {/* Fly to hotzone when selected */}
        {flyToLocation && <MapFlyController location={flyToLocation} />}
        
        {/* Hotzone Virtual Pickup Markers */}
        {[
          { lat: 33.9425, lng: -118.4080, name: 'LAX Airport', pickup: 'Terminal Loop Pickup Area', color: '#3B82F6' },
          { lat: 34.0333, lng: -118.0370, name: 'San Gabriel Valley', pickup: '10 Freeway @ Valley Blvd', color: '#10B981' },
          { lat: 33.6503, lng: -117.7436, name: 'Irvine Spectrum', pickup: '405 Freeway @ Spectrum Center', color: '#8B5CF6' },
          { lat: 33.8125, lng: -117.9190, name: 'Disneyland Resort', pickup: 'Magic Way Pickup Zone', color: '#EC4899' },
          { lat: 34.0562, lng: -118.2365, name: 'Downtown LA', pickup: 'Union Station Plaza', color: '#F59E0B' }
        ].map((hotzone, idx) => {
          const hotzoneIcon = new L.DivIcon({
            html: `<div style="background-color: ${hotzone.color}; color: white; font-weight: bold; padding: 4px 8px; border-radius: 8px; font-size: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.3); white-space: nowrap;">📍 ${hotzone.name}</div>`,
            className: 'bg-transparent',
            iconSize: [100, 30],
            iconAnchor: [50, 15]
          });
          
          return (
            <Marker key={`hotzone-${idx}`} position={[hotzone.lat, hotzone.lng]} icon={hotzoneIcon}>
              <Popup>
                <div className="text-xs">
                  <div className="font-bold">{hotzone.name}</div>
                  <div className="text-gray-600">Virtual Pickup:</div>
                  <div className="text-gray-800">{hotzone.pickup}</div>
                </div>
              </Popup>
            </Marker>
          );
        })}
        
        {/* Route Line */}
        <Polyline 
            positions={polylinePositions} 
            pathOptions={{ color: 'black', weight: 4, opacity: 0.6, dashArray: '10, 10' }} 
        />

        {/* Waypoint Markers */}
        {validWaypoints.map((wp, idx) => {
          const lat = wp.lat ?? wp.latitude!;
          const lng = wp.lng ?? wp.longitude!;
          
          return (
            <Marker key={idx} position={[lat, lng]}>
              <Popup>{wp.name}</Popup>
            </Marker>
          );
        })}

        {/* Driver Marker (Only if tracking) */}
        {driverPosition && (
          <>
            <Marker position={[driverPosition.lat, driverPosition.lng]} icon={carIcon}>
                <Popup>Your Driver</Popup>
            </Marker>
            {isTracking && <MapUpdater center={[driverPosition.lat, driverPosition.lng]} />}
          </>
        )}
      </MapContainer>
      
      {/* Overlay Status (if tracking) */}
      {isTracking && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-lg z-1000 text-xs font-bold text-green-600 flex items-center gap-2 border border-green-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Driver En Route
          </div>
      )}
    </div>
  );
}
