import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import StatsBar from './_components/StatsBar';
import Modules from './_components/Modules';
import Themes from './_components/Themes';
import TenantFlow from './_components/TenantFlow';
import WhoIsItFor from './_components/WhoIsItFor';
import Integrations from './_components/Integrations';
import PremiumPlugins from './_components/PremiumPlugins';
import Comparison from './_components/Comparison';
import Reviews from './_components/Reviews';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';
import ClosingCta from './_components/ClosingCta';

export const metadata: Metadata = {
  title: 'MultiSaas: Multi-Tenant Website Builder SaaS Script',
  description:
    'Launch your own website builder SaaS. MultiSaas ships with 10+ modules, 15+ themes, custom domains per tenant, 19+ payment gateways, and 550+ clients worldwide. From $59 one-time.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'MultiSaas: Multi-Tenant Website Builder SaaS Script | Xgenious',
    description:
      'Build and operate your own website builder SaaS. Multi-tenancy, 10+ modules, 15+ themes, custom domains, 19+ payment gateways. One-time $59 — no monthly fees.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MultiSaas — Multi-Tenant Website Builder SaaS' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MultiSaas: Multi-Tenant Website Builder SaaS Script | Xgenious',
    description:
      'Launch your own website builder SaaS. 10+ modules, 15+ themes, custom domains, 19+ gateways. One-time $59.',
    images: ['/og-image.png'],
  },
  keywords: [
    'website builder saas',
    'multi-tenant website builder',
    'saas website builder script',
    'white label website builder',
    'build your own website builder',
    'website builder saas platform',
    'multi-tenancy website builder',
    'website builder script codecanyon',
    'multisaas',
    'bytesed multisaas',
  ],
};

export default function MultisaasPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <main>
        <Hero />
        <StatsBar />
        <Modules />
        <Themes />
        <TenantFlow />
        <WhoIsItFor />
        <Integrations />
        <PremiumPlugins />
        <Comparison />
        <Reviews />
        <Pricing />
        <FAQ />
        <ClosingCta />
      </main>
    </>
  );
}
