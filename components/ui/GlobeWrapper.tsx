'use client';

import dynamic from 'next/dynamic';

const GlobeAnimation = dynamic(() => import('@/components/ui/GlobeAnimation'), {
  ssr: false,
  loading: () => (
    <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-orange-50 to-rose-100 opacity-50" />
  ),
});

export default function GlobeWrapper() {
  return <GlobeAnimation />;
}
