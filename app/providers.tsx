'use client';

import {PrivyProvider} from '@privy-io/react-auth';
import {useEffect} from 'react';

export default function Providers({children}: {children: React.ReactNode}) {
  useEffect(() => {
    // Suppress hydration warnings from Privy
    const originalError = console.error;
    console.error = (...args: any[]) => {
      if (typeof args[0] === 'string' && (args[0].includes('Hydration') || args[0].includes("origins don't match"))) {
        return;
      }
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
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          ethereum: {
            createOnLogin: 'users-without-wallets'
          }
        },
        appearance: {
          theme: 'light',
          accentColor: '#000000',
          logo: 'https://auth.privy.io/logos/privy-logo.png',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}