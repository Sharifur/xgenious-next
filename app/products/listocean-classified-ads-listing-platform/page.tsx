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
  title: 'ListOcean — Classified Ads & Listing Platform on Laravel | Xgenious',
  description:
    'ListOcean is a Laravel classified ads platform with live chat, Google Maps, membership plans, a digital wallet, 4 drag & drop builders, and GDPR compliance. One-time from $29.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'ListOcean — Classified Ads & Listing Platform Script | Xgenious',
    description:
      'Launch a classified ads marketplace with ListOcean: real-time live chat, Google Maps location listings, tiered memberships, digital wallet, SMS notifications, 4 no-code builders, and GDPR compliance — one-time purchase from $29.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/listocean/preview.jpg', width: 1200, height: 630, alt: 'ListOcean — Classified Ads & Listing Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ListOcean — Classified Ads Listing Platform | Xgenious',
    description:
      'ListOcean — Laravel classified ads script with live chat, maps, memberships, wallet & 4 no-code builders. One-time from $29.',
    images: ['/products/listocean/preview.jpg'],
  },
  keywords: [
    'listocean classified ads',
    'classified ads script',
    'classified listing platform',
    'local marketplace script',
    'classified ads laravel',
    'buy sell platform script',
    'classified website script',
    'php classified script',
    'olx clone script',
    'classified ads codecanyon',
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
