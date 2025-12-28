'use client';

import {PrivyProvider} from '@privy-io/react-auth';
import {useEffect, useState} from 'react';

export default function Providers({children}: {children: React.ReactNode}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID || 'clw7229m108m7di52v0iya2qc';
  const clientId = process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID || 'client-WY2mABYxPWCherPBzKMW4HXRTghZMjhjNTTCfrDvn3PMT';

  if (!process.env.NEXT_PUBLIC_PRIVY_APP_ID || !process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID) {
    console.warn('⚠️  Using default Privy configuration. Set NEXT_PUBLIC_PRIVY_APP_ID and NEXT_PUBLIC_PRIVY_CLIENT_ID in your environment.');
  }

  // Don't render Privy provider during SSR
  if (!mounted) {
    return <>{children}</>;
  }

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