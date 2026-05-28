import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import StatsDefinition from './_components/StatsDefinition';
import FeaturePills from './_components/FeaturePills';
import HowToInstall from './_components/HowToInstall';
import FreelanceFeatures from './_components/FreelanceFeatures';
import PlatformFeatures from './_components/PlatformFeatures';
import LiveChat from './_components/LiveChat';
import Reviews from './_components/Reviews';
import MarketplaceFeatures from './_components/MarketplaceFeatures';
import ProjectCatalogue from './_components/ProjectCatalogue';
import MobileApps from './_components/MobileApps';
import TechStack from './_components/TechStack';
import ComparisonTable from './_components/ComparisonTable';
import FAQ from './_components/FAQ';
import Pricing from './_components/Pricing';
import StickyBar from './_components/StickyBar';

export const metadata: Metadata = {
  title: 'Xilancer — Best Freelancing Platform Script | Xgenious',
  description:
    'Launch a Fiverr or Upwork clone with Xilancer — the best freelancing platform script. Laravel + Vue.js, escrow payments, native mobile apps, bidding system. From $59 one-time.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Xilancer — Best Freelancing Platform Script | Xgenious',
    description:
      'Build a complete self-hosted freelancing marketplace. Laravel backend, Vue.js frontend, native mobile apps, Stripe & PayPal escrow. One-time purchase from $59.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/xilancer-hero-center.jpg', width: 1039, height: 509, alt: 'Xilancer — Freelancer Marketplace Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xilancer — Best Freelancing Platform Script',
    description: 'Build a Fiverr or Upwork clone with Xilancer. Laravel + Vue.js. Native mobile apps. From $59 one-time purchase.',
    images: ['/products/xilancer-hero-center.jpg'],
  },
  keywords: [
    'freelancing platform script',
    'freelancer marketplace script',
    'fiverr clone script',
    'upwork clone laravel',
    'laravel freelancer marketplace',
    'buy freelancing script',
    'laravel gig marketplace',
    'freelance script codecanyon',
    'xilancer',
  ],
};

export default function XilancerPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <Hero />
      <StatsDefinition />
      <HowToInstall />
      <FeaturePills />
      <FreelanceFeatures />
      <LiveChat />
      <Reviews />
      <MarketplaceFeatures />
      <ProjectCatalogue />
      <PlatformFeatures />
      <MobileApps />
      <TechStack />
      <ComparisonTable />
      <Pricing />
      <FAQ />
    </>
  );
}
