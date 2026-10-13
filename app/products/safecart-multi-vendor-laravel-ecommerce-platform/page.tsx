import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import Definition from './_components/Definition';
import Features from './_components/Features';
import Plugins from './_components/Plugins';
import MobileApps from './_components/MobileApps';
import PaymentGateways from './_components/PaymentGateways';
import LaunchSteps from './_components/LaunchSteps';
import WhoIsItFor from './_components/WhoIsItFor';
import Comparison from './_components/Comparison';
import TrustBand from './_components/TrustBand';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';
import ClosingCta from './_components/ClosingCta';
import RelatedGuides from '@/components/sections/RelatedGuides';

export const metadata: Metadata = {
  title: { absolute: 'SafeCart: Multi-Vendor eCommerce Script | Xgenious' },
  description: 'Self-hosted multi-vendor marketplace on Laravel with 3 Flutter apps, POS, delivery tracking and 26+ gateways. One-time from $39, full source code.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'SafeCart: Multi-Vendor eCommerce Script | Xgenious',
    description: 'Self-hosted multi-vendor marketplace on Laravel with 3 Flutter apps, POS, delivery tracking and 26+ gateways. One-time from $39, full source code.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SafeCart — Multi-Vendor Laravel eCommerce Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafeCart: Multi-Vendor eCommerce Script | Xgenious',
    description: 'Self-hosted multi-vendor marketplace on Laravel with 3 Flutter apps, POS, delivery tracking and 26+ gateways. One-time from $39, full source code.',
    images: ['/og-image.png'],
  },
  keywords: [
    // primary
    'multi vendor ecommerce',
    'multi vendor ecommerce platform',
    'multi vendor ecommerce script',
    // secondary
    'multi vendor marketplace laravel',
    'ecommerce marketplace script',
    'laravel ecommerce platform',
    'laravel marketplace script',
    'multi vendor shopping cart',
    'multi seller ecommerce platform',
    // semantic / related
    'online marketplace builder',
    'amazon clone script laravel',
    'b2b b2c marketplace script',
    'vendor marketplace software',
    'self-hosted marketplace platform',
    'php ecommerce multi vendor',
    'safecart multi vendor',
  ],
};

export default function SafeCartPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <main>
        <Hero />
        <Definition />
        <Features />
        <Plugins />
        <MobileApps />
        <PaymentGateways />
        <LaunchSteps />
        <WhoIsItFor />
        <Comparison />
        <TrustBand />
        <Pricing />
        <FAQ />
        <RelatedGuides guides={[{ href: '/ecommerce-php-script', label: 'Best multi vendor ecommerce scripts compared', blurb: 'See how the leading multi-vendor and single-vendor scripts compare on features, licensing and price.' }]} />
        <ClosingCta />
      </main>
    </>
  );
}
