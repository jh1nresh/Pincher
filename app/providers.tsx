'use client';

import {PrivyProvider} from '@privy-io/react-auth';
import {useEffect, useState} from 'react';

export default function Providers({children}: {children: React.ReactNode}) {
  const [hasError, setHasError] = useState(false);

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

  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
  const clientId = process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID;

  // If environment variables are missing or there was an error, render without Privy
  if (!appId || !clientId || hasError) {
    if (process.env.NODE_ENV === 'development' && !hasError) {
      console.warn('⚠️  Privy environment variables not set. Authentication features will be disabled.');
    }
    return <>{children}</>;
  }

  // Wrap in error boundary-like behavior
  try {
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
  } catch (error) {
    console.error('Failed to initialize Privy:', error);
    setHasError(true);
    return <>{children}</>;
  }
}