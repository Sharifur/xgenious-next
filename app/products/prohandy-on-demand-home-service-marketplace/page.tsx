import type { Metadata } from 'next';
import { BASE_URL, CANONICAL, COLOR, REGULAR_PRICE, COMBO_PRICE } from './_components/constants';
import BundleValueNudge from '@/components/ui/BundleValueNudge';
import JsonLd from './_components/JsonLd';
import StickyBar from './_components/StickyBar';
import Hero from './_components/Hero';
import PaymentGateways from './_components/PaymentGateways';
import Features from './_components/Features';
import UseCases from './_components/UseCases';
import HowItWorks from './_components/HowItWorks';
import ClientApp from './_components/ClientApp';
import ProviderApp from './_components/ProviderApp';
import LiveChat from './_components/LiveChat';
import WhatsAppPlugin from './_components/WhatsAppPlugin';
import TechStack from './_components/TechStack';
import Comparison from './_components/Comparison';
import Reviews from './_components/Reviews';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';
import RelatedGuides from '@/components/sections/RelatedGuides';

const META_DESCRIPTION = 'Handyman app and home service marketplace script: Laravel admin, Flutter customer and provider apps, job posts, chat, 19 payment gateways. From $39.';
const META_TITLE = 'Prohandy: Handyman App & Home Service Marketplace Script';

export const metadata: Metadata = {
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/prohandy-hero.png', width: 1200, height: 630, alt: 'Prohandy On-Demand Home Service Marketplace Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ['/products/prohandy-hero.png'],
  },
  keywords: [
    'handyman app script',
    'home service marketplace script',
    'on demand service marketplace script',
    'urban company clone',
    'taskrabbit clone',
    'handyman app source code',
    'on demand home service marketplace script',
    'home service marketplace platform',
    'laravel flutter marketplace script',
    'on demand service app script',
    'home services booking platform',
    'service provider marketplace software',
    'urban clap clone script',
    'taskrabbit clone script',
  ],
};

export default function ProhandyPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <Hero />
      <PaymentGateways />
      <Features />
      <UseCases />
      <HowItWorks />
      <ClientApp />
      <ProviderApp />
      <LiveChat />
      <WhatsAppPlugin />
      <TechStack />
      <Comparison />
      <Reviews />
      <Pricing />
      <FAQ />
      <RelatedGuides
        guides={[
          { href: '/top-on-demand-service-business-ideas', label: 'Top on-demand service business ideas', blurb: 'On-demand service business ideas worth building, and how a ready-made home service marketplace script gets you to launch faster.' },
          { href: '/best-on-demand-service-marketplace-platforms', label: 'Best on-demand service marketplace scripts', blurb: '10 handyman and home service scripts compared by real price, included apps and update date.' },
          { href: '/prohandy-vs-demandium', label: 'ProHandy vs Demandium', blurb: 'What each base price includes, which apps are add-ons, and how jobs get matched.' },
          { href: '/how-to-start-a-handyman-marketplace', label: 'How to start a handyman marketplace', blurb: 'A 9-step launch plan: first city, legal basics, fees, providers and first customers.' },
          { href: '/handyman-app-script', label: 'Handyman app script', blurb: 'Everything included in ProHandy, with licence and hosting answers.' },
        ]}
      />
      <BundleValueNudge
        productName="Prohandy"
        regularPrice={REGULAR_PRICE}
        bundlePrice={COMBO_PRICE}
        bundleLabel="Everything Bundle"
        bundleHighlight="Client + Provider mobile apps + WhatsApp Order plugin"
        accentColor={COLOR}
        storageKey="xg-bundle-nudge-prohandy-dismissed"
      />
    </>
  );
}
