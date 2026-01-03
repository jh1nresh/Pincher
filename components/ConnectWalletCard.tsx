'use client';

import { usePrivy } from '@privy-io/react-auth';

export function ConnectWalletCard() {
  const { login, authenticated } = usePrivy();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100 p-8 max-w-md w-full mx-4 animate-in zoom-in duration-300">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-black text-black text-center mb-3">
          Wallet Required
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 text-center mb-6 leading-relaxed">
          To proceed with payment, you need to connect your wallet. This ensures secure authentication and transaction signing on Base Sepolia testnet.
        </p>

        {/* Features */}
        <div className="bg-blue-50/50 backdrop-blur-sm rounded-2xl border border-blue-100 p-4 mb-6 space-y-2">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-black text-black">Secure EIP-712 Signing</p>
              <p className="text-[10px] text-gray-500">Sign x402 payment challenges safely</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-black text-black">Base Sepolia Testnet</p>
              <p className="text-[10px] text-gray-500">Safe testing environment (Chain ID: 84532)</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-black text-black">Transaction Proof</p>
              <p className="text-[10px] text-gray-500">Verifiable on BaseScan</p>
            </div>
          </div>
        </div>

        {/* Connect Button */}
        <button
          onClick={() => login()}
          disabled={authenticated}
          className="w-full bg-black hover:bg-gray-800 text-white py-4 rounded-xl font-black text-sm shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="relative z-10 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            {authenticated ? 'Wallet Connected' : 'Connect with Privy'}
          </span>
        </button>

        {/* Powered by */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[10px] text-gray-400">
          <span>Powered by</span>
          <span className="font-black text-black">Privy</span>
          <span>•</span>
          <span className="font-black text-black">Base Sepolia</span>
        </div>
      </div>
    </div>
  );
}
