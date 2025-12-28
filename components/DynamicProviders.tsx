'use client';

import dynamic from 'next/dynamic';

const Providers = dynamic(() => import('../app/providers'), {
  ssr: false,
});

export default function DynamicProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
