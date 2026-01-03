'use server';

import { createStreamableUI } from 'ai/rsc';
import { RideOptimizer } from '@/components/RideOptimizer';
import React from 'react';

export async function streamRideOptimization(pickup: string, dropoff: string) {
  const ui = createStreamableUI(
    <div className="animate-pulse flex space-x-4 p-4 border rounded-xl max-w-sm">
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );

  (async () => {
    // 1. Simulate Dijkstra Calculation Time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    ui.update(
        <div className="p-4 text-sm text-gray-500 font-mono">
            Scanning x402 nodes for optimal liquidity...
        </div>
    );

    // 2. Simulate Waypoint Sorting
    await new Promise(resolve => setTimeout(resolve, 1500));

    // 3. Stream Final Component
    ui.done(
      <RideOptimizer 
        savings="15.00" 
        originalFare="45.50" 
        optimizedFare="30.50" 
        waypoints={['Alhambra Main St', 'Monterey Park Hub', 'Disneyland Dropoff']}
      />
    );
  })();

  return { ui: ui.value };
}
