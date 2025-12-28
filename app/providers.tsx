'use client';

import {PrivyProvider} from '@privy-io/react-auth';

export default function Providers({children}: {children: React.ReactNode}) {
  const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID || 'clw7229m108m7di52v0iya2qc';
  const clientId = process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID || 'client-WY2mABYxPWCherPBzKMW4HXRTghZMjhjNTTCfrDvn3PMT';

  return (
    <PrivyProvider
      appId={appId}
      clientId={clientId}
      config={{
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