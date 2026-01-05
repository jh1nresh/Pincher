'use client';

import { useState } from 'react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { parseUnits, encodeFunctionData } from 'viem';
import { baseSepolia } from 'viem/chains';

interface PaymentChallengeProps {
  rideId: string;
  amount: string; // e.g. "0.01"
  recipientAddress: string;
  onSignatureComplete: (signature: string, txHash: string) => void | Promise<void>;
  onCancel: () => void;
}

// USDC Contract on Base Sepolia
const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e';

const ERC20_ABI = [
  {
    name: 'transfer',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'bool' }]
  }
] as const;

export function PaymentChallenge({ 
  rideId, 
  amount,
  recipientAddress,
  onSignatureComplete, 
  onCancel 
}: PaymentChallengeProps) {
  const { sendTransaction } = usePrivy();
  const { wallets } = useWallets();
  const [status, setStatus] = useState<'ready' | 'signing' | 'processing' | 'success' | 'error'>('ready');
  const [errorMessage, setErrorMessage] = useState('');
  const [txHash, setTxHash] = useState('');

  const wallet = wallets.find(w => w.walletClientType === 'privy') || wallets[0];

  const handleSign = async () => {
    if (!wallet) return;

    setStatus('signing');
    
    try {
      // Prepare USDC Transfer Data
      const decimals = 6;
      const amountBigInt = parseUnits(amount, decimals);

      const data = encodeFunctionData({
        abi: ERC20_ABI,
        functionName: 'transfer',
        args: [recipientAddress as `0x${string}`, amountBigInt]
      });

      // Use the usePrivy().sendTransaction hook
      // This is globally available and handles embedded/external signers reliably
      console.log("Broadcasting transaction via usePrivy.sendTransaction...");
      
      const txConfig = {
        to: USDC_ADDRESS,
        data,
        value: 0,
        chainId: baseSepolia.id,
        gas: 100000 // ERC20 transfers typically need ~65k, adding buffer
      };

      const { hash } = await sendTransaction(txConfig, {
        uiOptions: {
          description: `Pay ${amount} USDC to book your ride.`,
          buttonText: 'Confirm Payment'
        }
      });

      setTxHash(hash);
      setStatus('processing');

      // UI Delay for UX
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      setStatus('success');
      
      // Callback to parent with the Hash
      await onSignatureComplete('tx-authorized', hash);

    } catch (error: any) {
      console.error('Payment error:', error);
      setStatus('error');
      
      // Better error handling for Privy
      let msg = error.message || 'Failed to send payment';
      if (msg.toLowerCase().includes('rejected')) {
          msg = 'Transaction was cancelled by user';
      }
      setErrorMessage(msg);
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {(status === 'signing' || status === 'processing') && (
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
            {status === 'ready' && 'Confirm Payment'}
            {status === 'signing' && 'Confirm in Wallet'}
            {status === 'processing' && 'Broadcasting...'}
            {status === 'success' && 'Payment Sent!'}
            {status === 'error' && 'Payment Failed'}
          </h2>
          
          <p className="text-sm text-gray-600">
            {status === 'ready' && 'Approve the USDC transfer to execute this action'}
            {status === 'signing' && 'Please confirm the transaction in your wallet'}
            {status === 'processing' && 'Broadcasting to Base Sepolia...'}
            {status === 'success' && 'Transaction successful. Finalizing booking...'}
            {status === 'error' && errorMessage}
          </p>
        </div>

        {/* Payment Details */}
        {(status === 'ready' || status === 'signing') && (
          <div className="bg-linear-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-sm rounded-2xl border border-gray-100 p-5 mb-6 space-y-3">
             <div className="flex justify-between items-center">
               <span className="text-xs font-black text-gray-600 uppercase tracking-wide">Action</span>
               <span className="text-sm font-mono font-bold text-black">Booking Ride {rideId}</span>
             </div>
             
             <div className="flex justify-between items-center">
               <span className="text-xs font-black text-gray-600 uppercase tracking-wide">Cost</span>
               <div className="flex items-center gap-2">
                 <span className="text-xl font-black text-black">{amount}</span>
                 <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">USDC</span>
               </div>
             </div>
             
             <div className="flex justify-between items-center">
               <span className="text-xs font-black text-gray-600 uppercase tracking-wide">Recipient</span>
               <span className="text-xs font-mono font-bold text-black bg-white/50 px-2 py-1 rounded border border-gray-200">
                  {recipientAddress.slice(0, 6)}...{recipientAddress.slice(-4)}
               </span>
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
                className="flex-1 bg-black hover:bg-gray-800 text-white py-3 px-4 rounded-xl font-black text-sm shadow-xl hover:shadow-2xl transition-all active:scale-[0.98]"
              >
                Pay {amount} USDC
              </button>
            </>
          )}
          
          {(status === 'signing' || status === 'processing') && (
             <div className="w-full text-center text-xs text-gray-400 font-mono animate-pulse">
                Reviewing on-chain state...
             </div>
          )}
           
          {status === 'error' && (
            <button
              onClick={onCancel}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-xl font-black text-sm shadow-xl"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
