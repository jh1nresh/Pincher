import { useEffect, useState } from 'react';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

interface DirectionsProps {
  pickup?: { lat: number; lng: number };
  dropoff?: { lat: number; lng: number };
}

export default function Directions({ pickup, dropoff }: DirectionsProps) {
  const map = useMap();
  const routesLibrary = useMapsLibrary('routes');
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer>();

  // 1. Initialize Services
  useEffect(() => {
    if (!routesLibrary || !map) return;

    const ds = new routesLibrary.DirectionsService();
    // Suppress default markers so we can use our custom sexy markers
    const dr = new routesLibrary.DirectionsRenderer({
        map,
        suppressMarkers: true, 
        polylineOptions: {
            strokeColor: '#2563EB', // Tech Blue (matches app theme)
            strokeWeight: 6,
            strokeOpacity: 1.0,
        }
    });

    setDirectionsService(ds);
    setDirectionsRenderer(dr);

    return () => {
        dr.setMap(null); // Cleanup
    };
  }, [routesLibrary, map]);

  // 2. Fetch Route
  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    // Check inputs
    if (!pickup || !dropoff) {
        // Clear route if points removed
        directionsRenderer.setDirections({ routes: [] } as any); 
        return;
    }

    console.log("📍 Directions: Fetching route...", { pickup, dropoff });

    directionsService.route({
        origin: pickup,
        destination: dropoff,
        travelMode: google.maps.TravelMode.DRIVING,
    }).then(response => {
        console.log("✅ Directions: Found route!", response);
        directionsRenderer.setDirections(response);
    }).catch(e => {
        console.error("❌ Directions request failed", e);
    });

  }, [directionsService, directionsRenderer, pickup, dropoff]);

  return null; // Logic only, renders directly on map instance
}
