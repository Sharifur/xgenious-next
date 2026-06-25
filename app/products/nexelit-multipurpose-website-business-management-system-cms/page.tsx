import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import Definition from './_components/Definition';
import Features from './_components/Features';
import Modules from './_components/Modules';
import NoCode from './_components/NoCode';
import HomeVariants from './_components/HomeVariants';
import LaunchSteps from './_components/LaunchSteps';
import WhoIsItFor from './_components/WhoIsItFor';
import Gateways from './_components/Gateways';
import Comparison from './_components/Comparison';
import TrustBand from './_components/TrustBand';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';
import ClosingCta from './_components/ClosingCta';

export const metadata: Metadata = {
  title: 'Nexelit — Multipurpose Business CMS on Laravel | Xgenious',
  description:
    'Nexelit is a multipurpose Laravel CMS — 9 built-in modules, drag & drop builders, 20+ payment gateways, RTL support, and full source code. One-time from $39.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Nexelit — Multipurpose Website & Business CMS Script | Xgenious',
    description:
      'Launch any business website with Nexelit: 9 modules (shop, events, courses, appointments, donations, jobs, services, support tickets, knowledgebase), no-code drag & drop builders, 20+ payment gateways, RTL support. One-time purchase from $39.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/nexelit.png', width: 424, height: 495, alt: 'Nexelit — Multipurpose Website & Business CMS' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexelit — Multipurpose Website & Business CMS | Xgenious',
    description:
      'Nexelit — multipurpose Laravel CMS with 9 business modules, no-code builders, and 20+ payment gateways. One-time from $39.',
    images: ['/products/nexelit.png'],
  },
  keywords: [
    'nexelit cms',
    'multipurpose website cms',
    'laravel cms script',
    'business management system cms',
    'laravel cms codecanyon',
    'multipurpose laravel script',
    'ecommerce cms laravel',
    'event booking cms',
    'appointment booking laravel',
    'cms with page builder',
  ],
};

export default function NexelitPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <main>
        <Hero />
        <Definition />
        <Features />
        <Modules />
        <NoCode />
        <HomeVariants />
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
