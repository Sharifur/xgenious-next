import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import PaymentGateways from './_components/PaymentGateways';
import Features from './_components/Features';
import HowItWorks from './_components/HowItWorks';
import TechStack from './_components/TechStack';
import Comparison from './_components/Comparison';
import Reviews from './_components/Reviews';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';

export const metadata: Metadata = {
  title: 'GoCar — On-Demand Car Service Marketplace Script',
  description:
    'Laravel + Flutter script to launch your own car service marketplace. Connect car owners with mechanics — vehicle-specific booking, real-time tracking, 19+ payment gateways. From $39.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'GoCar — On-Demand Car Service Marketplace Platform | Xgenious',
    description:
      'Build your own car service marketplace. Laravel + Flutter script with vehicle-specific booking, real-time order tracking, branch management, and 19+ payment gateways. One-time $39 purchase.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/gocar-hero.png', width: 1200, height: 630, alt: 'GoCar On-Demand Car Service Marketplace Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GoCar — Car Service Marketplace Script',
    description: 'Laravel + Flutter marketplace. Vehicle booking, real-time tracking, branch management, 19+ gateways. One-time $39.',
    images: ['/products/gocar-hero.png'],
  },
  keywords: [
    'on demand car service marketplace script',
    'car service marketplace platform',
    'mechanic booking marketplace script',
    'car repair booking platform',
    'uber for car services script',
    'car service booking app script',
    'laravel flutter car service script',
    'mechanic booking software',
  ],
};

export default function GoCarPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <Hero />
      <PaymentGateways />
      <Features />
      <HowItWorks />
      <TechStack />
      <Comparison />
      <Reviews />
      <Pricing />
      <FAQ />
    </>
  );
}
