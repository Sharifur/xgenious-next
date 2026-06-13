import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import PaymentGateways from './_components/PaymentGateways';
import Features from './_components/Features';
import ProfitModel from './_components/ProfitModel';
import UseCases from './_components/UseCases';
import CustomerApp from './_components/CustomerApp';
import HowItWorks from './_components/HowItWorks';
import TechStack from './_components/TechStack';
import Comparison from './_components/Comparison';
import Reviews from './_components/Reviews';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';

export const metadata: Metadata = {
  title: 'Qixer: On-Demand Service App & Marketplace Script',
  description: 'Multi-vendor on-demand service app & marketplace script. Laravel 12 + Flutter, buyer & seller apps, 20+ payment gateways, dual revenue models. One-time $59.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Qixer — On-Demand Service App & Marketplace Script | Xgenious',
    description: 'Build your own TaskRabbit-style on-demand service app. Laravel 12 + Flutter script with buyer & seller apps, GPS discovery, dual revenue models, 20+ payment gateways. One-time $49.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/qixer-hero.png', width: 1200, height: 630, alt: 'Qixer On-Demand Service App & Marketplace Script' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qixer — On-Demand Service App & Marketplace Script',
    description: 'Multi-vendor on-demand service app. Laravel 12 + Flutter, buyer & seller apps, GPS discovery, 20+ gateways. One-time $49.',
    images: ['/products/qixer-hero.png'],
  },
  keywords: [
    'on demand service app',
    'on demand service script',
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
      <CustomerApp />
      <HowItWorks />
      <ProfitModel />
      <TechStack />
      <Comparison />
      <Reviews />
      <Pricing />
      <FAQ />
    </>
  );
}
