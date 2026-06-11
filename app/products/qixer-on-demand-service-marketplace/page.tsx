import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import PaymentGateways from './_components/PaymentGateways';
import Features from './_components/Features';
import ProfitModel from './_components/ProfitModel';
import UseCases from './_components/UseCases';
import MarketplaceOwner from './_components/MarketplaceOwner';
import CustomerApp from './_components/CustomerApp';
import HowItWorks from './_components/HowItWorks';
import TechStack from './_components/TechStack';
import Comparison from './_components/Comparison';
import Reviews from './_components/Reviews';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';

export const metadata: Metadata = {
  title: 'Qixer — Multi-Vendor Service Marketplace Script',
  description: 'Laravel 12 + Flutter multi-vendor on-demand service marketplace. Buyer & seller apps, 20+ payment gateways, drag-and-drop builders, commission + subscription revenue. From $49.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Qixer — Multi-Vendor On-Demand Service Marketplace Platform | Xgenious',
    description: 'Build your own TaskRabbit-style platform. Laravel 12 + Flutter script with buyer & seller apps, GPS discovery, drag-and-drop builders, and 20+ payment gateways. One-time $49.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/qixer-hero.png', width: 1200, height: 630, alt: 'Qixer Multi-Vendor On-Demand Service Marketplace Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qixer — Service Marketplace Script',
    description: 'Laravel 12 + Flutter marketplace. Buyer & seller apps, GPS discovery, drag-and-drop builders, 20+ gateways. One-time $49.',
    images: ['/products/qixer-hero.png'],
  },
  keywords: [
    'on demand service marketplace script',
    'multivendor service marketplace script',
    'taskrabbit clone script',
    'home service marketplace platform',
    'service finder script',
    'laravel service marketplace',
    'flutter service marketplace app',
    'service booking script',
  ],
};

export default function QixerPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <Hero />
      <PaymentGateways />
      <UseCases />
      <Features />
      <ProfitModel />
      <MarketplaceOwner />
      <CustomerApp />
      <HowItWorks />
      <TechStack />
      <Comparison />
      <Reviews />
      <Pricing />
      <FAQ />
    </>
  );
}
