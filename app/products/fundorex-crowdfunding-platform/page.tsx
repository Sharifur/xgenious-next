import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import Features from './_components/Features';
import PaymentGateways from './_components/PaymentGateways';
import MobileApp from './_components/MobileApp';
import TechStack from './_components/TechStack';
import Reviews from './_components/Reviews';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';
import StickyBar from './_components/StickyBar';

export const metadata: Metadata = {
  title: 'Fundorex — Crowdfunding Platform Script | Xgenious',
  description:
    'Launch your own crowdfunding website with Fundorex — a self-hosted Laravel script with campaign management, 20+ payment gateways, mobile app, and event ticketing. One-time purchase from $49.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Fundorex — Crowdfunding Platform Script | Xgenious',
    description:
      'Build a powerful fundraising platform. Laravel backend, 20+ payment gateways, Flutter mobile app, donation campaigns, event ticketing. From $49 one-time.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/fundorex-hero-center.jpg', width: 1200, height: 630, alt: 'Fundorex Crowdfunding Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fundorex — Crowdfunding Platform Script',
    description: 'Self-hosted crowdfunding platform. Laravel + Flutter mobile app. 20+ payment gateways. From $49 one-time.',
    images: ['/products/fundorex-hero-center.jpg'],
  },
  keywords: [
    'crowdfunding platform script',
    'crowdfunding website script',
    'laravel crowdfunding script',
    'donation website script',
    'fundraising platform script',
    'crowdfunding software',
    'donation platform laravel',
    'fundorex',
    'buy crowdfunding script',
    'crowdfunding script codecanyon',
  ],
};

export default function FundorexPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <Hero />
      <Features />
      <PaymentGateways />
      <MobileApp />
      <TechStack />
      <Reviews />
      <Pricing />
      <FAQ />
    </>
  );
}
