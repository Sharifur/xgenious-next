import type { Metadata } from 'next';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import Screenshots from './_components/Screenshots';
import WhatIs from './_components/WhatIs';
import WhoItsFor from './_components/WhoItsFor';
import Modules from './_components/Modules';
import Comparison from './_components/Comparison';
import HowItWorks from './_components/HowItWorks';
import Quickstart from './_components/Quickstart';
import TechStack from './_components/TechStack';
import FAQ from './_components/FAQ';
import DownloadCTA from './_components/DownloadCTA';
import { BASE_URL, CANONICAL } from './_components/constants';

export const metadata: Metadata = {
  title: 'Genius Debug: Free Self-Hosted Sentry Alternative',
  description:
    'Open-source, self-hosted error monitoring for Next.js & React. Traces, source maps, and session replay. Reuse your Sentry SDK, no per-event pricing.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Genius Debug: Free Self-Hosted Sentry Alternative | Xgenious',
    description:
      'Self-hosted error monitoring for JavaScript & Next.js. Error grouping, symbolication, distributed traces, session replay. Reuses the standard Sentry SDK. Free, open source.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/free-software/genius-debug/issues.png', width: 1440, height: 860, alt: 'Genius Debug issues feed: grouped, triageable errors' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genius Debug: Free Self-Hosted Sentry Alternative',
    description:
      'Self-hosted error monitoring for JavaScript & Next.js. Error grouping, symbolication, traces, session replay. Reuses the standard Sentry SDK.',
    images: ['/free-software/genius-debug/issues.png'],
  },
  keywords: [
    'self hosted sentry alternative',
    'glitchtip alternative with session replay',
    'sentry alternative without kafka clickhouse',
    'lightweight self hosted sentry alternative',
    'nextjs error monitoring self hosted',
    'self hosted error tracking small team',
    'session replay self hosted privacy',
    'source map symbolication self hosted',
    'react error tracking open source',
    'open source error monitoring',
    'glitchtip alternative',
  ],
};

export default function GeniusDebugPage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Screenshots />
      <WhatIs />
      <WhoItsFor />
      <Modules />
      <Comparison />
      <HowItWorks />
      <Quickstart />
      <TechStack />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
