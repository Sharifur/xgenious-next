import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import Definition from './_components/Definition';
import Features from './_components/Features';
import NoCode from './_components/NoCode';
import LaunchSteps from './_components/LaunchSteps';
import WhoIsItFor from './_components/WhoIsItFor';
import Gateways from './_components/Gateways';
import Comparison from './_components/Comparison';
import TrustBand from './_components/TrustBand';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';
import ClosingCta from './_components/ClosingCta';

export const metadata: Metadata = {
  title: 'Single Vendor eCommerce Platform — Zaika Laravel Script',
  description:
    'Zaika is a single vendor eCommerce platform built on Laravel — no-code page builder, 30+ widgets, 15+ payment gateways. One-time from $39.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Single Vendor eCommerce Platform — Zaika Laravel Script | Xgenious',
    description:
      'Launch your single-vendor online store with Zaika: no-code drag & drop page builder, 30+ widgets, 15+ payment gateways, advanced inventory. One-time purchase, full Laravel source from $39.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/zaika/og-zaika.png', width: 1200, height: 630, alt: 'Zaika — single vendor eCommerce Laravel platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Single Vendor eCommerce Platform — Zaika Laravel Script | Xgenious',
    description:
      'Single vendor eCommerce on Laravel. No-code builder, 30+ widgets, 15+ payment gateways. One-time from $39.',
    images: ['/products/zaika/og-zaika.png'],
  },
  keywords: [
    'single vendor ecommerce',
    'single vendor ecommerce platform',
    'laravel ecommerce script',
    'online shopping cms',
    'readymade ecommerce website',
    'ecommerce website builder php',
    'single store ecommerce',
    'php shopping cart script',
    'zaika ecommerce',
    'self-hosted online store',
  ],
};

export default function ZaikaPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <main>
        <Hero />
        <Definition />
        <Features />
        <NoCode />
        <LaunchSteps />
        <WhoIsItFor />
        <Gateways />
        <Comparison />
        <TrustBand />
        <Pricing />
        <FAQ />
        <ClosingCta />
      </main>
    </>
  );
}
