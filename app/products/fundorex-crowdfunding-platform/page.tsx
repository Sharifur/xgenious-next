import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import Features from './_components/Features';
import DonationFlow from './_components/DonationFlow';
import FundingModels from './_components/FundingModels';
import PaymentGateways from './_components/PaymentGateways';
import HowItWorks from './_components/HowItWorks';
import WhoIsItFor from './_components/WhoIsItFor';
import Comparison from './_components/Comparison';
import MultiLanguage from './_components/MultiLanguage';
import MobileApp from './_components/MobileApp';
import TechStack from './_components/TechStack';
import PluginDevelopment from './_components/PluginDevelopment';
import WhatsNew from './_components/WhatsNew';
import Reviews from './_components/Reviews';
import Pricing from './_components/Pricing';
import FAQ from './_components/FAQ';
import StickyBar from './_components/StickyBar';
import RelatedGuides from '@/components/sections/RelatedGuides';

export const metadata: Metadata = {
  title: { absolute: 'Fundorex: Crowdfunding Platform Script | Xgenious' },
  description: 'Self-hosted Laravel crowdfunding script with campaigns, donor wallet, volunteers, 20+ payment gateways and a Flutter app. One-time from $69.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Fundorex: Crowdfunding Platform Script | Xgenious',
    description: 'Self-hosted Laravel crowdfunding script with campaigns, donor wallet, volunteers, 20+ payment gateways and a Flutter app. One-time from $69.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/fundorex-hero-center.jpg', width: 1200, height: 630, alt: 'Fundorex Crowdfunding Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fundorex: Crowdfunding Platform Script | Xgenious',
    description: 'Self-hosted Laravel crowdfunding script with campaigns, donor wallet, volunteers, 20+ payment gateways and a Flutter app. One-time from $69.',
    images: ['/products/fundorex-hero-center.jpg'],
  },
  keywords: [
    'crowdfunding platform script',
    'crowdfunding software',
    'laravel crowdfunding script',
    'self-hosted crowdfunding platform',
    'kickstarter clone script',
    'white label crowdfunding software',
    'fundraising platform script',
    'donation website script',
    'crowdfunding script with mobile app',
    'buy crowdfunding script',
    'crowdfunding script codecanyon',
    'no monthly fee crowdfunding software',
    'crowdfunding platform source code',
  ],
};

export default function FundorexPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <Hero />
      <PaymentGateways />
      <Features />
      <DonationFlow />
      <FundingModels />
      <HowItWorks />
      <WhoIsItFor />
      <MultiLanguage />
      <MobileApp />
      <TechStack />
      <PluginDevelopment />
      <WhatsNew />
      <Comparison />
      <Reviews />
      <Pricing />
      <FAQ />
      <RelatedGuides
        heading="Crowdfunding guides"
        guides={[
          { href: '/best-php-crowdfunding-scripts', label: 'Best PHP crowdfunding scripts compared', blurb: 'Paid, self-hosted crowdfunding scripts compared on features, payment gateways and price.' },
          { href: '/open-source-crowdfunding-platform', label: 'Open source crowdfunding platforms', blurb: 'Free and open-source options, and when a ready-made script is the cheaper route.' },
        ]}
      />
    </>
  );
}
