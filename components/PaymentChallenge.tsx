'use client';

import { useState } from 'react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { createWalletClient, custom } from 'viem';
import { baseSepolia } from 'viem/chains';

interface PaymentChallengeProps {
  rideId: string;
  amount: string;
  onSignatureComplete: (signature: string, txHash: string) => void;
  onCancel: () => void;
}

export function PaymentChallenge({ 
  rideId, 
  amount, 
  onSignatureComplete, 
  onCancel 
}: PaymentChallengeProps) {
  const { user } = usePrivy();
  const { wallets } = useWallets();
  const [status, setStatus] = useState<'ready' | 'signing' | 'processing' | 'success' | 'error'>('ready');
  const [errorMessage, setErrorMessage] = useState('');
  const [txHash, setTxHash] = useState('');

  const wallet = wallets[0];

  const handleSign = async () => {
    if (!wallet) return;

    setStatus('signing');
    
    try {
      // EIP-712 Message for x402 Payment Challenge
      const domain = {
        name: 'Pincher Carpool',
        version: '1',
        chainId: 84532, // Base Sepolia
        verifyingContract: '0x0000000000000000000000000000000000000000' as `0x${string}` // Replace with actual escrow contract
      };

      const types = {
        CarpoolPayment: [
          { name: 'rideId', type: 'string' },
          { name: 'amount', type: 'string' },
          { name: 'payer', type: 'address' },
          { name: 'deadline', type: 'uint256' }
        ]
      };

      const deadline = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now

      const message = {
        rideId,
        amount,
        payer: wallet.address,
        deadline
      };

      // Sign with EIP-712 using Viem
      const provider = await wallet.getEthereumProvider();
      const client = createWalletClient({
        chain: baseSepolia,
        transport: custom(provider)
      });
      
      const signature = await client.signTypedData({
        account: wallet.address as `0x${string}`,
        domain,
        types,
        primaryType: 'CarpoolPayment',
        message
      });

      setStatus('processing');

      // Simulate transaction submission
      // In production, this would call the smart contract
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock transaction hash
      const mockTxHash = '0x' + Array.from({ length: 64 }, () => 
        Math.floor(Math.random() * 16).toString(16)
      ).join('');

      setTxHash(mockTxHash);
      setStatus('success');

      // Wait a moment before completing
      setTimeout(() => {
        onSignatureComplete(signature as string, mockTxHash);
      }, 1500);

    } catch (error: any) {
      console.error('Signature error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Failed to sign payment challenge');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100 p-8 max-w-lg w-full mx-4 animate-in zoom-in slide-in-from-bottom-4 duration-300">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-purple-500 to-blue-600 rounded-full mb-4">
            {status === 'ready' && (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            )}
            {status === 'signing' && (
              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {status === 'processing' && (
              <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {status === 'success' && (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
            {status === 'error' && (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          
          <h2 className="text-2xl font-black text-black mb-2">
            {status === 'ready' && 'x402 Payment Challenge'}
            {status === 'signing' && 'Awaiting Signature...'}
            {status === 'processing' && 'Processing Transaction'}
            {status === 'success' && 'Payment Confirmed!'}
            {status === 'error' && 'Signature Failed'}
          </h2>
          
          <p className="text-sm text-gray-600">
            {status === 'ready' && 'Sign the payment challenge to lock funds in escrow'}
            {status === 'signing' && 'Please sign the message in your wallet'}
            {status === 'processing' && 'Connecting to Base Sepolia testnet...'}
            {status === 'success' && 'Your payment has been successfully locked'}
            {status === 'error' && errorMessage}
          </p>
        </div>

        {/* Payment Details */}
        {(status === 'ready' || status === 'signing') && (
          <div className="bg-linear-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-5 mb-6 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-black text-gray-600 uppercase tracking-wide">Ride ID</span>
              <span className="text-sm font-mono font-bold text-black">{rideId}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs font-black text-gray-600 uppercase tracking-wide">Amount</span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black text-black">${amount}</span>
                <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">USDC</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs font-black text-gray-600 uppercase tracking-wide">Network</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-black text-black">Base Sepolia (84532)</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs font-black text-gray-600 uppercase tracking-wide">Your Wallet</span>
              <span className="text-xs font-mono font-bold text-black">
                {wallet?.address.slice(0, 6)}...{wallet?.address.slice(-4)}
              </span>
            </div>
          </div>
        )}

        {/* Processing Animation */}
        {status === 'processing' && (
          <div className="mb-6">
            <div className="bg-blue-50/50 rounded-2xl border border-blue-100 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-black text-blue-900 uppercase tracking-wide">Transaction Status</span>
                <span className="text-xs font-mono text-blue-600">Pending</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-linear-to-r from-blue-500 to-purple-600 animate-progress-indeterminate"></div>
              </div>
              <div className="mt-3 text-[10px] text-blue-600 font-mono flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                Broadcasting to Base Sepolia...
              </div>
            </div>
          </div>
        )}

        {/* Success State */}
        {status === 'success' && (
          <div className="mb-6">
            <div className="bg-green-50/50 rounded-2xl border border-green-100 p-5">
              <div className="text-center mb-3">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-black border border-green-200">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Funds Locked in Escrow
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-green-700 font-bold">Transaction Hash:</span>
                </div>
                <a 
                  href={`https://sepolia.basescan.org/tx/${txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/50 p-2 rounded-lg border border-green-200 hover:border-green-300 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-green-900 truncate">{txHash}</span>
                    <svg className="w-4 h-4 text-green-600 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {status === 'ready' && (
            <>
              <button
                onClick={onCancel}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-black py-3 px-4 rounded-xl font-black text-sm transition-all active:scale-[0.98]"
              >
                Cancel
              </button>
              <button
                onClick={handleSign}
                className="flex-1 bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-xl font-black text-sm shadow-xl hover:shadow-2xl transition-all active:scale-[0.98] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">Sign & Pay</span>
              </button>
            </>
          )}
          
          {(status === 'signing' || status === 'processing') && (
            <button
              disabled
              className="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-xl font-black text-sm cursor-not-allowed"
            >
              {status === 'signing' ? 'Awaiting Signature...' : 'Processing...'}
            </button>
          )}
          
          {status === 'error' && (
            <button
              onClick={onCancel}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-xl font-black text-sm shadow-xl hover:shadow-2xl transition-all active:scale-[0.98]"
            >
              Close
            </button>
          )}
        </div>

        {/* Security Notice */}
        {status === 'ready' && (
          <div className="mt-6 text-center">
            <p className="text-[10px] text-gray-400 flex items-center justify-center gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secured by EIP-712 • Base Sepolia Testnet
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
