'use client';

interface MatchCounterProps {
  neighborCount: number;
  savings: string;
  route: string;
}

export function MatchCounter({ neighborCount, savings, route }: MatchCounterProps) {
  return (
    <div className="bg-linear-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-4 mb-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="text-3xl">🔥</div>
        <div>
          <div className="text-sm font-black text-gray-900">
            {neighborCount} verified neighbor{neighborCount > 1 ? 's' : ''} waiting on this route
          </div>
          <div className="text-xs font-bold text-orange-600 mt-0.5">
            Join now • Save ${savings} per person
          </div>
        </div>
      </div>
    </div>
  );
}
