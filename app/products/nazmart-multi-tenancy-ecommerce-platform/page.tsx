import type { Metadata } from 'next';
import { BASE_URL, CANONICAL, COLOR, REGULAR_PRICE, BUNDLE_PRICE } from './_components/constants';
import BundleValueNudge from '@/components/ui/BundleValueNudge';
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
import RelatedGuides from '@/components/sections/RelatedGuides';
import NazmartShowcase from '@/components/shared/NazmartShowcase';

export const metadata: Metadata = {
  title: { absolute: 'Nazmart: Multi-Tenant eCommerce SaaS Platform (Laravel)' },
  description:
    'Nazmart is a multi-tenant eCommerce SaaS: unlimited stores, own database per store, custom domains and plans. From $69; $99 bundle lets you charge tenants.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Nazmart: Multi-Tenant eCommerce SaaS Platform (Laravel)',
    description:
      'Build a Shopify-like multi-tenant SaaS. Merchant stores, custom domains and plans you set. From $69; $99 bundle lets you charge tenants.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/nazmart.png', width: 1200, height: 630, alt: 'Nazmart — Multi-Tenancy eCommerce Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nazmart: Multi-Tenant eCommerce SaaS Platform (Laravel)',
    description: 'Build a Shopify-like multi-tenant SaaS. Merchant stores, custom domains and subscription plans. From $69; $99 bundle lets you charge tenants.',
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
      <NazmartShowcase
        heading="Built with Nazmart"
        intro="Store-builder businesses already running on Nazmart:"
      />
      <Pricing />
      <FAQ />
      <RelatedGuides guides={[
        { href: '/shopify-clone-script', label: 'Shopify clone script: what you get', blurb: 'How Nazmart runs the Shopify business model on your own server, with pricing and hosting answers.' },
        { href: '/best-multi-tenant-ecommerce-saas-scripts', label: 'Nazmart vs 8 other multi-tenant platforms', blurb: 'Botble, TLCommerce, WorkDo, Bagisto and more, compared by price, sales and update date.' },
        { href: '/nazmart-vs-botble-ecommerce-saas', label: 'Nazmart vs Botble Ecommerce SaaS', blurb: 'Two Laravel multi-tenant platforms: merchant features, API, hosting and the licence you need to charge tenants.' },
        { href: '/nazmart-vs-tlcommerce-saas', label: 'Nazmart vs TLCommerce SaaS', blurb: 'Price, Regular vs Extended licence limits and update history.' },
        { href: '/how-to-start-an-ecommerce-saas-business', label: 'How to start an ecommerce SaaS business', blurb: 'Niche, hosting, pricing and the first 50 stores, step by step.' },
        { href: '/free-tools/ecommerce-saas-revenue-calculator', label: 'Ecommerce SaaS revenue calculator', blurb: 'Model stores, plans, churn and profit before you launch.' },
        { href: '/ecommerce-php-script', label: 'Compare Nazmart with other eCommerce PHP scripts', blurb: 'Side-by-side pricing, features and hosting needs for the 10 leading Laravel and PHP eCommerce scripts.' },
      ]} />
      <BundleValueNudge
        productName="Nazmart"
        regularPrice={REGULAR_PRICE}
        bundlePrice={BUNDLE_PRICE}
        bundleLabel="Everything Bundle"
        bundleHighlight="17 premium plugins + mobile app + POS + domain reseller"
        accentColor={COLOR}
        storageKey="xg-bundle-nudge-nazmart-dismissed"
      />
    </>
  );
}
