import type { Metadata } from 'next';
import { BASE_URL, CANONICAL } from './_components/constants';
import Hero from './_components/Hero';
import StatsBar from './_components/StatsBar';
import HighlightCards from './_components/HighlightCards';
import Pricing from './_components/Pricing';
import StickyBar from './_components/StickyBar';

export const metadata: Metadata = {
  title: 'Nazmart — Multi-Tenancy eCommerce SaaS Platform | Xgenious',
  description:
    'Launch a multi-tenancy eCommerce SaaS platform with Nazmart. Laravel + Vue.js, SaaS subscriptions, custom domains per store, POS plugin, mobile apps. One-time purchase from $69.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Nazmart — Multi-Tenancy eCommerce SaaS Platform | Xgenious',
    description:
      'Build a Shopify-like multi-vendor SaaS platform. Laravel backend, Vue.js frontend, subscription billing, custom domains, POS plugin, Flutter mobile apps. From $69 one-time.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/products/nazmart.png', width: 1200, height: 630, alt: 'Nazmart — Multi-Tenancy eCommerce Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nazmart — Multi-Tenancy eCommerce SaaS Platform',
    description: 'Build a multi-tenancy eCommerce SaaS. Laravel + Vue.js. Custom domains. SaaS subscriptions. POS plugin. From $69 one-time.',
    images: ['/products/nazmart.png'],
  },
  keywords: [
    'multi tenancy ecommerce platform',
    'ecommerce saas script',
    'multivendor ecommerce script laravel',
    'shopify clone script',
    'saas ecommerce platform script',
    'laravel multi tenant ecommerce',
    'nazmart',
    'ecommerce marketplace script codecanyon',
  ],
};

export default function NazmartPage() {
  return (
    <>
      <StickyBar />
      <Hero />
      <StatsBar />
      <HighlightCards />
      <Pricing />
    </>
  );
}
