'use client';

import {PrivyProvider} from '@privy-io/react-auth';
import {useEffect} from 'react';
import {baseSepolia} from 'viem/chains';

export default function Providers({children}: {children: React.ReactNode}) {
  useEffect(() => {
    // Suppress hydration warnings from Privy
    const originalError = console.error;
    console.error = (...args: any[]) => {
      const msg = args[0];
      if (typeof msg === 'string') {
           if (msg.includes('Hydration') || msg.includes("origins don't match") || msg.includes('isActive')) return;
           if (msg.includes('prop on a DOM element') && args.some(a => typeof a === 'string' && a.includes('isActive'))) return;
      }
      // Also check arg[1] directly which is often the prop name in React warnings
      if (args.length > 1 && typeof args[1] === 'string' && args[1] === 'isActive') return;
      originalError.call(console, ...args);
    };
    return () => {
      console.error = originalError;
    };
  }, []);

  const appId = (process.env.NEXT_PUBLIC_PRIVY_APP_ID || '').trim() || 'clw7229m108m7di52v0iya2qc';
  const clientId = (process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID || '').trim() || 'client-WY2mABYxPWCherPBzKMW4HXRTghZMjhjNTTCfrDvn3PMT';

  // Debug logging (can be removed after verification)
  if (typeof window !== 'undefined') {
    console.log("Privy ID (Sanitized):", appId);
    console.log("Privy Client ID (Sanitized):", clientId);
  }

  // Always render PrivyProvider to prevent hook errors
  return (
    <PrivyProvider
      appId={appId}
      clientId={clientId}
      config={{
        supportedChains: [baseSepolia],
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          ethereum: {
            createOnLogin: 'users-without-wallets'
          }
        },
        appearance: {
          theme: 'light',
          accentColor: '#000000',
          logo: '/pincher-v1.5.png',
        },
        defaultChain: baseSepolia,
      }}
    >
      {children}
    </PrivyProvider>
  );
}