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
import MobileApp from './_components/MobileApp';
import Comparison from './_components/Comparison';
import TrustBand from './_components/TrustBand';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';
import ClosingCta from './_components/ClosingCta';

export const metadata: Metadata = {
  title: 'Grenmart — Organic & Grocery Laravel eCommerce Script',
  description:
    'Grenmart is an organic grocery & multipurpose Laravel eCommerce script — no-code builder, 50+ widgets, 20+ payment gateways. One-time from $39.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Grenmart — Organic & Grocery Laravel eCommerce Script | Xgenious',
    description:
      'Launch your online grocery store with Grenmart: no-code page builder, 50+ widgets, 3 home variants, 20+ payment gateways, advanced inventory. One-time purchase, full source code from $39.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/grenmart/hero-landing.png', width: 2000, height: 1282, alt: 'Grenmart — Organic & Grocery Laravel eCommerce' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grenmart — Organic & Grocery Laravel eCommerce Script | Xgenious',
    description:
      'Organic grocery & multipurpose Laravel eCommerce. No-code builder, 50+ widgets, 20+ payment gateways. One-time from $39.',
    images: ['/products/grenmart/hero-landing.png'],
  },
  keywords: [
    'organic grocery ecommerce',
    'grocery laravel ecommerce',
    'laravel ecommerce script',
    'grocery store php script',
    'organic store ecommerce platform',
    'drag and drop ecommerce builder',
    'multipurpose ecommerce script',
    'grenmart',
    'grocery ecommerce codecanyon',
    'online grocery store software',
  ],
};

export default function GrenmartPage() {
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
        <MobileApp />
        <Comparison />
        <TrustBand />
        <Pricing />
        <FAQ />
        <ClosingCta />
      </main>
    </>
  );
}
