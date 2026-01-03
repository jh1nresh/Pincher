'use client';

export function MatchingWithNeighbors() {
  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-4">
        <div className="flex gap-2">
            <span className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-3 h-3 bg-black rounded-full animate-bounce"></span>
        </div>
      <p className="text-sm font-bold text-black animate-pulse">Matching with Neighbors...</p>
    </div>
  );
}
