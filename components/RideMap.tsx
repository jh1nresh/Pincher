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
  pickupLocation?: { lat: number; lng: number; name: string };
  dropoffLocation?: { lat: number; lng: number; name: string };
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

// Component to fit map bounds to route
function MapBoundsController({ route, pickup, dropoff }: { route: [number, number][], pickup?: {lat: number, lng: number; name: string}, dropoff?: {lat: number, lng: number; name: string} }) {
  const map = useMap();
  useEffect(() => {
    if (route.length > 0) {
      const bounds = L.latLngBounds(route.map(p => [p[0], p[1]]));
      map.fitBounds(bounds, { padding: [50, 50] });
    } else if (pickup && dropoff) {
      const bounds = L.latLngBounds([
        [pickup.lat, pickup.lng],
        [dropoff.lat, dropoff.lng]
      ]);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [route, pickup, dropoff, map]);
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

export default function RideMap({ waypoints, driverPosition, isTracking, flyToLocation, pickupLocation, dropoffLocation }: RideMapProps) {
  // Google Maps route state
  const [googleRoute, setGoogleRoute] = useState<[number, number][]>([]);
  const [routeLoading, setRouteLoading] = useState(false);

  // Fetch Google Maps Directions when pickup/dropoff changes
  useEffect(() => {
    if (!pickupLocation || !dropoffLocation) {
      setGoogleRoute([]);
      return;
    }

    // Immediately set a straight line as fallback (ensures route always shows)
    const straightLine: [number, number][] = [
      [pickupLocation.lat, pickupLocation.lng], 
      [dropoffLocation.lat, dropoffLocation.lng]
    ];
    setGoogleRoute(straightLine);
    console.log('📍 Set fallback straight line route');

    const fetchRoute = async () => {
      setRouteLoading(true);
      try {
        const origin = `${pickupLocation.lat},${pickupLocation.lng}`;
        const destination = `${dropoffLocation.lat},${dropoffLocation.lng}`;
        
        // Call our API proxy for Google Directions
        const response = await fetch(
          `/api/directions?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`
        );
        
        if (!response.ok) {
          console.warn('Directions API returned error, keeping straight line');
          return;
        }

        const data = await response.json();
        
        if (data.routes && data.routes.length > 0 && data.routes[0].overview_polyline?.points) {
          // Decode polyline from Google Maps
          const polylineStr = data.routes[0].overview_polyline.points;
          if (polylineStr && polylineStr.length > 0) {
            const points = decodePolyline(polylineStr);
            if (points.length >= 2) {
              setGoogleRoute(points);
              console.log('✅ Google Maps route loaded with', points.length, 'points');
            }
          }
        } else {
          console.log('No Google route found, using straight line');
        }
      } catch (error) {
        console.error('Route fetch error:', error);
        // Keep the straight line fallback
      } finally {
        setRouteLoading(false);
      }
    };

    fetchRoute();
  }, [pickupLocation, dropoffLocation]);

  // Decode Google Maps polyline encoding
  function decodePolyline(encoded: string): [number, number][] {
    const points: [number, number][] = [];
    let index = 0, lat = 0, lng = 0;

    while (index < encoded.length) {
      let b, shift = 0, result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlat = (result & 1) ? ~(result >> 1) : (result >> 1);
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      const dlng = (result & 1) ? ~(result >> 1) : (result >> 1);
      lng += dlng;

      points.push([lat / 1e5, lng / 1e5]);
    }
    return points;
  }

  // Custom Pickup Icon (Green with pulse)
  const pickupIcon = new L.DivIcon({
    html: `<div style="position: relative;">
      <div style="position: absolute; inset: -8px; background-color: rgba(34, 197, 94, 0.3); border-radius: 50%; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
      <div style="background-color: #22c55e; color: white; font-weight: bold; padding: 8px 12px; border-radius: 12px; font-size: 12px; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.5); white-space: nowrap; border: 3px solid white;">📍 Pickup</div>
    </div>`,
    className: 'bg-transparent',
    iconSize: [100, 40],
    iconAnchor: [50, 40]
  });

  // Custom Dropoff Icon (Red with flag)
  const dropoffIcon = new L.DivIcon({
    html: `<div style="background-color: #ef4444; color: white; font-weight: bold; padding: 8px 12px; border-radius: 12px; font-size: 12px; box-shadow: 0 4px 12px rgba(239, 68, 68, 0.5); white-space: nowrap; border: 3px solid white;">🏁 Dropoff</div>`,
    className: 'bg-transparent',
    iconSize: [100, 40],
    iconAnchor: [50, 40]
  });
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
        
        {/* Fit Bounds Controller */}
        <MapBoundsController 
            route={googleRoute} 
            pickup={pickupLocation} 
            dropoff={dropoffLocation} 
        />
        
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
        
        {/* Selected Pickup Marker */}
        {pickupLocation && (
          <Marker position={[pickupLocation.lat, pickupLocation.lng]} icon={pickupIcon}>
            <Popup>
              <div className="text-xs">
                <div className="font-bold text-green-600">上車點 Pickup</div>
                <div className="text-gray-800">{pickupLocation.name}</div>
              </div>
            </Popup>
          </Marker>
        )}
        
        {/* Selected Dropoff Marker */}
        {dropoffLocation && (
          <Marker position={[dropoffLocation.lat, dropoffLocation.lng]} icon={dropoffIcon}>
            <Popup>
              <div className="text-xs">
                <div className="font-bold text-red-600">下車點 Dropoff</div>
                <div className="text-gray-800">{dropoffLocation.name}</div>
              </div>
            </Popup>
          </Marker>
        )}
        
        {/* Route Line between Pickup and Dropoff (Google Maps) */}
        {googleRoute.length >= 2 && (
          <Polyline 
            positions={googleRoute} 
            pathOptions={{ color: '#3b82f6', weight: 5, opacity: 0.8 }} 
          />
        )}
        
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
