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

  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
  const clientId = process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID;

  // Debug logging
  console.log("Privy ID Check:", process.env.NEXT_PUBLIC_PRIVY_APP_ID);
  console.log("Privy Client ID Check:", process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID);
  console.log("Mounted:", mounted);

  // Don't render Privy during SSR - always render children first
  if (!mounted) {
    return <>{children}</>;
  }

  // If environment variables are missing after mount, render without Privy
  if (!appId || !clientId) {
    console.warn('⚠️  Privy environment variables not set. Authentication features will be disabled.');
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