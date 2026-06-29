import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import Definition from './_components/Definition';
import Features from './_components/Features';
import HowItWorks from './_components/HowItWorks';
import Earnings from './_components/Earnings';
import PaymentGateways from './_components/PaymentGateways';
import NoCode from './_components/NoCode';
import LaunchSteps from './_components/LaunchSteps';
import WhoIsItFor from './_components/WhoIsItFor';
import Comparison from './_components/Comparison';
import TrustBand from './_components/TrustBand';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';
import ClosingCta from './_components/ClosingCta';

export const metadata: Metadata = {
  title: 'Influstar — Influencer Hiring Marketplace Script | Xgenious',
  description:
    'Launch your own influencer marketplace with Influstar — a self-hosted Laravel 12 script with escrow payments, live chat, influencer subscriptions, custom offers & 20+ gateways. One-time from $39, full source code.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Influstar — Influencer Hiring Marketplace Script | Xgenious',
    description:
      'Build an influencer hiring platform where brands book creators and you earn commission. Escrow payments, subscriptions, custom offers, 20+ gateways. One-time from $39 — full Laravel source code.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Influstar — Influencer Hiring Marketplace Script' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Influstar — Influencer Hiring Marketplace Script | Xgenious',
    description:
      'Self-hosted influencer marketplace on Laravel 12 — escrow, subscriptions, custom offers & 20+ gateways. One-time from $39, full source code.',
    images: ['/og-image.png'],
  },
  keywords: [
    'influencer marketplace script',
    'influencer hiring platform',
    'influencer marketplace platform',
    'creator marketplace script',
    'influencer booking platform',
    'collabstr clone script',
    'influencer marketing platform script',
    'laravel influencer marketplace',
    'ugc marketplace script',
    'hire influencers platform',
    'influstar',
  ],
};

export default function InflustarPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <main>
        <Hero />
        <Definition />
        <Features />
        <HowItWorks />
        <Earnings />
        <PaymentGateways />
        <NoCode />
        <LaunchSteps />
        <WhoIsItFor />
        <Comparison />
        <TrustBand />
        <Pricing />
        <FAQ />
        <ClosingCta />
      </main>
    </>
  );
}
