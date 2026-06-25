import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import Definition from './_components/Definition';
import Features from './_components/Features';
import Plugins from './_components/Plugins';
import NoCode from './_components/NoCode';
import LaunchSteps from './_components/LaunchSteps';
import WhoIsItFor from './_components/WhoIsItFor';
import Comparison from './_components/Comparison';
import TrustBand from './_components/TrustBand';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';
import ClosingCta from './_components/ClosingCta';

export const metadata: Metadata = {
  title: 'ListOcean — Classified Ads Script on Laravel | Xgenious',
  description:
    'Laravel classified ads script with live chat, Google Maps, membership plans, wallet, and 4 no-code builders. Buy once from $29 — full source code, no monthly fees.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'ListOcean — Classified Ads Script on Laravel | Xgenious',
    description:
      'Launch a classified ads marketplace with ListOcean — live chat, Google Maps, memberships, digital wallet, 4 no-code builders, GDPR compliance. One-time from $29, full source code.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/listocean/preview.jpg', width: 1200, height: 630, alt: 'ListOcean — Classified Ads & Listing Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ListOcean — Classified Ads Script on Laravel | Xgenious',
    description:
      'Laravel classified ads script with live chat, Google Maps, memberships, wallet & 4 no-code builders. One-time from $29 — full source code.',
    images: ['/products/listocean/preview.jpg'],
  },
  keywords: [
    'classified ads script',
    'classified ads laravel',
    'listocean classified ads',
    'classified listing platform',
    'local marketplace script',
    'buy sell platform script',
    'classified website script',
    'php classified script',
    'olx clone script',
    'classified ads platform codecanyon',
    'self-hosted classified ads',
  ],
};

export default function ListOceanPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <main>
        <Hero />
        <Definition />
        <Features />
        <Plugins />
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
