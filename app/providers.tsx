import {PrivyProvider} from '@privy-io/react-auth';
import {useEffect} from 'react';
import {base, baseSepolia} from 'viem/chains';

// Privy configuration constants
const PRIVY_CONFIG = {
  appId: process.env.NEXT_PUBLIC_PRIVY_APP_ID?.trim() || 'clw7229m108m7di52v0iya2qc',
  clientId: process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID?.trim() || 'client-WY2mABYxPWCherPBzKMW4HXRTghZMjhjNTTCfrDvn3PMT',
};

// Suppress known Privy console warnings that don't affect functionality
function useSuppressPrivyWarnings() {
  useEffect(() => {
    const originalError = console.error;
    console.error = (...args: unknown[]) => {
      const msg = String(args[0] ?? '');
      const suppressPatterns = [
        'Hydration',
        "origins don't match",
        'isActive',
        'cannot be a descendant',
        'cannot contain',
      ];
      if (suppressPatterns.some(pattern => msg.includes(pattern))) return;
      if (msg.includes('prop on a DOM element') && args.some(a => String(a).includes('isActive'))) return;
      originalError.apply(console, args);
    };
    return () => { console.error = originalError; };
  }, []);
}

export default function Providers({children}: {children: React.ReactNode}) {
  useSuppressPrivyWarnings();

  return (
    <PrivyProvider
      appId={PRIVY_CONFIG.appId}
      clientId={PRIVY_CONFIG.clientId}
      config={{
        supportedChains: [base, baseSepolia],
        defaultChain: base,
        embeddedWallets: {
          ethereum: { createOnLogin: 'users-without-wallets' }
        },
        appearance: {
          theme: 'dark',
          accentColor: '#00FF00',
          logo: '/pincher-v1.5.png',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}