import { Waypoint } from '@/components/RideOptimizer';

export interface MatchResult {
  waypoints: Waypoint[];
  savings: string;
  originalFare: string;
  optimizedFare: string;
  rationale: string;
  teammateFound: boolean;
}

// Mock Coordinates Database for Demo (using official GPS coordinates)
const MOCK_COORDS: Record<string, { lat: number, lng: number }> = {
    'Irvine Spectrum': { lat: 33.6503, lng: -117.7436 },
    'Tustin Marketplace': { lat: 33.7469, lng: -117.8264 }, // Tustin Market Place actual coords
    'Disneyland': { lat: 33.8125, lng: -117.9190 },
    'Disneyland Resort': { lat: 33.8125, lng: -117.9190 },
    'LAX Airport': { lat: 33.9425, lng: -118.4080 },
    'San Gabriel Valley': { lat: 34.0333, lng: -118.0370 },
    'Downtown LA': { lat: 34.0562, lng: -118.2365 },
    'UCI': { lat: 33.6405, lng: -117.8443 },
    'Newport Beach': { lat: 33.6189, lng: -117.9289 },
};

function getCoords(name: string) {
    return MOCK_COORDS[name] || { lat: 33.684, lng: -117.826 }; // Default to central Irvine
}

/**
 * Calculate distance between two coordinates using Haversine formula
 * Returns distance in kilometers
 */
function calculateDistance(coord1: { lat: number; lng: number }, coord2: { lat: number; lng: number }): number {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (coord2.lat - coord1.lat) * Math.PI / 180;
    const dLng = (coord2.lng - coord1.lng) * Math.PI / 180;
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(coord1.lat * Math.PI / 180) * Math.cos(coord2.lat * Math.PI / 180) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    
    return distance;
}

/**
 * Find optimal intermediate waypoint using nearest neighbor approach
 * Keeps start and end fixed, optimizes middle waypoints
 */
function findOptimalIntermediateWaypoint(
    start: { lat: number; lng: number },
    end: { lat: number; lng: number },
    candidates: Array<{ name: string; coords: { lat: number; lng: number } }>
): { name: string; coords: { lat: number; lng: number } } {
    let bestCandidate = candidates[0];
    let minTotalDistance = Infinity;
    
    // For each candidate, calculate total route distance: start → candidate → end
    for (const candidate of candidates) {
        const distStartToCandidate = calculateDistance(start, candidate.coords);
        const distCandidateToEnd = calculateDistance(candidate.coords, end);
        const totalDistance = distStartToCandidate + distCandidateToEnd;
        
        if (totalDistance < minTotalDistance) {
            minTotalDistance = totalDistance;
            bestCandidate = candidate;
        }
    }
    
    return bestCandidate;
}

export async function matchNodes(start: string, end: string): Promise<MatchResult> {
    // Simulate Agent processing time
    await new Promise(resolve => setTimeout(resolve, 500));

    const startCoords = getCoords(start);
    const endCoords = getCoords(end);
    
    // Define potential intermediate waypoints based on route
    const candidateWaypoints: Array<{ name: string; coords: { lat: number; lng: number } }> = [];
    
    // Add candidates based on common routes
    if (start.toLowerCase().includes('irvine') || end.toLowerCase().includes('irvine')) {
        candidateWaypoints.push({ name: 'Tustin Marketplace', coords: getCoords('Tustin Marketplace') });
    }
    if (start.toLowerCase().includes('lax') || end.toLowerCase().includes('lax')) {
        candidateWaypoints.push({ name: 'Downtown LA', coords: getCoords('Downtown LA') });
    }
    if (start.toLowerCase().includes('sgv') || start.toLowerCase().includes('gabriel')) {
        candidateWaypoints.push({ name: 'Downtown LA', coords: getCoords('Downtown LA') });
    }
    
    // Default generic candidates if none added
    if (candidateWaypoints.length === 0) {
        candidateWaypoints.push({ name: 'Tustin Marketplace', coords: getCoords('Tustin Marketplace') });
    }
    
    // Find optimal intermediate waypoint
    const optimalIntermediate = findOptimalIntermediateWaypoint(startCoords, endCoords, candidateWaypoints);
    
    // Determine teammate name based on location
    let teammateName = "Bob (Local Rider)";
    if (optimalIntermediate.name.includes('Tustin')) {
        teammateName = "Bob (Irvine Local)";
    } else if (optimalIntermediate.name.includes('Downtown')) {
        teammateName = "Alice (DTLA Commuter)";
    }

    // Construct Waypoints in optimal order
    const waypoints: Waypoint[] = [
        { 
            name: start, 
            id: 'wp-start',
            lat: startCoords.lat,
            lng: startCoords.lng,
            identity: { name: 'You (Organizer)', trustScore: '5.0', did: 'did:privy:me' } 
        },
        { 
            name: optimalIntermediate.name, 
            id: 'wp-mid',
            lat: optimalIntermediate.coords.lat,
            lng: optimalIntermediate.coords.lng,
            identity: { name: teammateName, trustScore: '4.9', did: 'did:privy:teammate_bob' } 
        },
        { 
            name: end, 
            id: 'wp-end',
            lat: endCoords.lat,
            lng: endCoords.lng,
            identity: { name: 'Dropoff', trustScore: '', did: '' } 
        }
    ];

    // Pricing Simulation
    const baseFare = 45.00;
    const distanceFactor = 1.1; // Demo factor
    const originalFare = (baseFare * distanceFactor).toFixed(2);
    
    // Split logic: (Original / 2) + fee
    const splitFare = (parseFloat(originalFare) / 2).toFixed(2);
    const aiFee = 2.50;
    const optimizedFare = (parseFloat(splitFare) + aiFee).toFixed(2);
    const savings = (parseFloat(originalFare) - parseFloat(optimizedFare)).toFixed(2);
    
    // Calculate total distance for rationale
    const totalDistance = (
        calculateDistance(startCoords, optimalIntermediate.coords) +
        calculateDistance(optimalIntermediate.coords, endCoords)
    ).toFixed(1);

    return {
        waypoints,
        savings,
        originalFare,
        optimizedFare,
        teammateFound: true,
        rationale: `Optimized route: ${start} → ${optimalIntermediate.name} → ${end}. Total distance: ${totalDistance}km. Matched with ${teammateName} for optimal path. Route efficiency increased by 40%. Split fare enabled.`
    };
}
