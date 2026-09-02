import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import StatsBar from './_components/StatsBar';
import HighlightCards from './_components/HighlightCards';
import WhoIsItFor from './_components/WhoIsItFor';
import PaymentGateways from './_components/PaymentGateways';
import HowItWorks from './_components/HowItWorks';
import MarketplaceFeatures from './_components/MarketplaceFeatures';
import MobileApp from './_components/MobileApp';
import POS from './_components/POS';
import PremiumPlugins from './_components/PremiumPlugins';
import SmsGateways from './_components/SmsGateways';
import TechStack from './_components/TechStack';
import Comparison from './_components/Comparison';
import Reviews from './_components/Reviews';
import FAQ from './_components/FAQ';
import Pricing from './_components/Pricing';
import StickyBar from './_components/StickyBar';

export const metadata: Metadata = {
  title: 'Nazmart — Multi-Tenancy eCommerce SaaS Platform',
  description:
    'Nazmart is a multi-tenancy eCommerce platform. Laravel backend, vendor subscriptions, custom domains, Flutter mobile apps. From $69 one-time.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Nazmart — Multi-Tenancy eCommerce SaaS Platform | Xgenious',
    description:
      'Build a Shopify-like multi-vendor SaaS. Vendor subscriptions, custom domains per store, Flutter mobile apps, 19+ payment gateways. From $69 one-time.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/nazmart.png', width: 1200, height: 630, alt: 'Nazmart — Multi-Tenancy eCommerce Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nazmart — Multi-Tenancy eCommerce SaaS Platform',
    description: 'Build a multi-tenancy eCommerce SaaS. Vendor subscriptions, custom domains, Flutter apps, 19+ payment gateways. From $69 one-time.',
    images: ['/products/nazmart.png'],
  },
  keywords: [
    'multi tenancy ecommerce platform',
    'ecommerce saas script',
    'multivendor ecommerce script laravel',
    'shopify clone script',
    'saas ecommerce platform script',
    'laravel multi tenant ecommerce',
    'white label ecommerce platform',
    'vendor marketplace builder',
    'multi-tenant marketplace script',
    'ecommerce saas builder',
    'build shopify alternative',
    'nazmart',
    'ecommerce marketplace script codecanyon',
  ],
};

export default function NazmartPage() {
  return (
    <>
      <JsonLd />
      <StickyBar />
      <Hero />
      <StatsBar />
      <HighlightCards />
      <WhoIsItFor />
      <PaymentGateways />
      <HowItWorks />
      <MarketplaceFeatures />
      <MobileApp />
      <POS />
      <PremiumPlugins />
      <SmsGateways />
      <TechStack />
      <Comparison />
      <Reviews />
      <Pricing />
      <FAQ />
    </>
  );
}
