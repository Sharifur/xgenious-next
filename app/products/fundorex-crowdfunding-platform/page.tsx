import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import Features from './_components/Features';
import DonationFlow from './_components/DonationFlow';
import PaymentGateways from './_components/PaymentGateways';
import HowItWorks from './_components/HowItWorks';
import WhoIsItFor from './_components/WhoIsItFor';
import Comparison from './_components/Comparison';
import MultiLanguage from './_components/MultiLanguage';
import MobileApp from './_components/MobileApp';
import TechStack from './_components/TechStack';
import Reviews from './_components/Reviews';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';
import StickyBar from './_components/StickyBar';

export const metadata: Metadata = {
  title: 'Fundorex — Crowdfunding Platform Script for Laravel',
  description:
    'Fundorex is a self-hosted Laravel crowdfunding platform script with community campaigns, donor wallet, volunteer management, 20+ payment gateways, event ticketing, and Flutter mobile app. One-time purchase from $69.',
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
    'crowdfunding software',
    'laravel crowdfunding script',
    'self-hosted crowdfunding platform',
    'kickstarter clone script',
    'white label crowdfunding software',
    'fundraising platform script',
    'donation website script',
    'crowdfunding script with mobile app',
    'buy crowdfunding script',
    'crowdfunding script codecanyon',
    'no monthly fee crowdfunding software',
    'crowdfunding platform source code',
  ],
};

export default function FundorexPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <Hero />
      <PaymentGateways />
      <Features />
      <DonationFlow />
      <HowItWorks />
      <WhoIsItFor />
      <MultiLanguage />
      <MobileApp />
      <TechStack />
      <Comparison />
      <Reviews />
      <Pricing />
      <FAQ />
    </>
  );
}
