import type { Metadata } from 'next';
import { BASE_URL, CANONICAL, COLOR, REGULAR_PRICE, BUNDLE_PRICE } from './_components/constants';
import BundleValueNudge from '@/components/ui/BundleValueNudge';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import StatsDefinition from './_components/StatsDefinition';
import FeaturePills from './_components/FeaturePills';
import HowToInstall from './_components/HowToInstall';
import FreelanceFeatures from './_components/FreelanceFeatures';
import PlatformFeatures from './_components/PlatformFeatures';
import PremiumPlugins from './_components/PremiumPlugins';
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
  title: 'Xilancer — Best Freelancing Platform Script',
  description: 'Launch a Fiverr or Upwork clone with Xilancer: Laravel + Vue.js freelancer script with escrow, bidding and native mobile apps. From $59 one-time.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Xilancer — Best Freelancing Platform Script | Xgenious',
    description: 'Launch a Fiverr or Upwork clone with Xilancer: Laravel + Vue.js freelancer script with escrow, bidding and native mobile apps. From $59 one-time.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/xilancer-hero-center.jpg', width: 1039, height: 509, alt: 'Xilancer — Freelancer Marketplace Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xilancer — Best Freelancing Platform Script',
    description: 'Launch a Fiverr or Upwork clone with Xilancer: Laravel + Vue.js freelancer script with escrow, bidding and native mobile apps. From $59 one-time.',
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
      <PremiumPlugins />
      <MobileApps />
      <TechStack />
      <ComparisonTable />
      <Pricing />
      <FAQ />
      <BundleValueNudge
        productName="Xilancer"
        regularPrice={REGULAR_PRICE}
        bundlePrice={BUNDLE_PRICE}
        bundleLabel="Bundle Pack"
        bundleHighlight="23 premium plugins — AI, NDA, SEO Tools, Webhooks, Affiliate, Referrals, Subscription Offers, Reports, Coupons, Email Marketing, Currency Switcher, Announcements and more"
        accentColor={COLOR}
        storageKey="xg-bundle-nudge-xilancer-dismissed"
      />
    </>
  );
}
