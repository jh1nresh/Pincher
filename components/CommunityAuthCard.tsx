'use client';

import { useLogin } from '@privy-io/react-auth';

interface CommunityAuthCardProps {
  savings: string;
  neighborCount: number;
  route: string;
}

export function CommunityAuthCard({ savings, neighborCount, route }: CommunityAuthCardProps) {
  const { login } = useLogin({
    onComplete: () => {
      console.log('🎉 Privy login successful! Resuming simulation flow...');
    },
    onError: (error) => {
      console.error('Privy login failed:', error);
    }
  });

  return (
    <div className="bg-linear-to-br from-purple-50 to-blue-50 rounded-2xl border-2 border-purple-200 p-6 shadow-lg">
      {/* Value Proposition Header */}
      <div className="text-center mb-6">
        <div className="text-5xl mb-3">🎉</div>
        <h2 className="text-2xl font-black text-gray-900 mb-2">
          Great News!
        </h2>
        <p className="text-lg font-bold text-purple-600">
          You could save <span className="text-3xl">{savings}</span>
        </p>
      </div>

      {/* Route Info */}
      <div className="bg-white rounded-xl p-4 mb-6 border border-gray-200">
        <div className="text-sm text-gray-500 mb-1">Your Route</div>
        <div className="font-bold text-gray-900 mb-3">{route}</div>
        <div className="flex items-center gap-2 text-sm">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
            🔥 {neighborCount} verified neighbor{neighborCount > 1 ? 's' : ''} waiting
          </span>
        </div>
      </div>

      {/* Community Benefits */}
      <div className="space-y-2 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-xl">✓</span>
          <div className="text-sm text-gray-700">
            <span className="font-bold">Verified Community Members</span> – Travel with trusted neighbors
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-xl">✓</span>
          <div className="text-sm text-gray-700">
            <span className="font-bold">USDC Escrow Protection</span> – Your funds are secured on Base Sepolia
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-xl">✓</span>
          <div className="text-sm text-gray-700">
            <span className="font-bold">Instant Refunds</span> – Cancel anytime before pickup
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => login()}
        className="w-full bg-linear-to-r from-purple-600 to-blue-600 text-white font-black py-4 px-6 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg text-lg"
      >
        Sign in to Lock This Rate 🔒
      </button>

      {/* Trust Badge */}
      <div className="text-center mt-4 text-xs text-gray-500">
        <span className="inline-flex items-center gap-1">
          🔐 Secured by <span className="font-bold">Privy</span> • Powered by <span className="font-bold">Base</span>
        </span>
      </div>
    </div>
  );
}
