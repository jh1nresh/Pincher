export interface Coordinates {
  lat: number;
  lng: number;
}

// Haversine formula to calculate distance in miles
/**
 *
 * @param coord1
 * @param coord2
 */
function calculateDistance(coord1: Coordinates, coord2: Coordinates): number {
  const R = 3958.8; // Radius of Earth in miles
  const dLat = (coord2.lat - coord1.lat) * (Math.PI / 180);
  const dLon = (coord2.lng - coord1.lng) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(coord1.lat * (Math.PI / 180)) *
      Math.cos(coord2.lat * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 *
 * @param userPickup
 * @param userDropoff
 * @param ridePickup
 * @param rideDropoff
 */
export function calculateMatchScore(
  userPickup: Coordinates | undefined,
  userDropoff: Coordinates | undefined,
  ridePickup: Coordinates,
  rideDropoff: Coordinates,
): { score: number; distance: number } {
  if (!userPickup) return { score: 0, distance: 0 };

  // 1. Calculate Distances
  const pickupDist = calculateDistance(userPickup, ridePickup);
  // If user hasn't entered dropoff, we only score based on pickup
  const dropoffDist = userDropoff ? calculateDistance(userDropoff, rideDropoff) : 0;

  // 2. Scoring Logic
  // Perfect score = 100
  // Penalty: -10 points per mile for pickup
  // Penalty: -5 points per mile for dropoff
  // Penalty: -3 points per mile for pickup
  // Penalty: -1 point per mile for dropoff (Ultra relaxed for demo)
  let score = 100 - pickupDist * 3;

  if (userDropoff) {
    score -= dropoffDist * 1;
  }

  // Cap score between 0 and 99 (nobody is perfect 100 unless exact calc)
  score = Math.max(10, Math.min(99, Math.round(score)));

  return {
    score,
    distance: parseFloat(pickupDist.toFixed(1)),
  };
}
