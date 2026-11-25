import type { Metadata } from 'next';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import WhatItIs from './_components/WhatItIs';
import Comparison from './_components/Comparison';
import InTheBox from './_components/InTheBox';
import HowItWorks from './_components/HowItWorks';
import Revenue from './_components/Revenue';
import Hosting from './_components/Hosting';
import Pricing from './_components/Pricing';
import FaqSection from './_components/FaqSection';
import BottomCta from './_components/BottomCta';

const CANONICAL = 'https://xgenious.com/shopify-clone-script';

// Hourly ISR so the Black Friday note drops after BFCM_ENDS_AT without a manual rebuild.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: 'Shopify Clone Script: Launch Your Own Store Platform | Nazmart' },
  description:
    'Nazmart is a self-hosted Shopify clone script: unlimited stores, own database per store, custom domains and subscription plans. From $69 one-time.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Shopify Clone Script: Run Your Own Shopify-Style Platform',
    description:
      'Sell online stores on subscription with a platform you own. Laravel, own database per store, custom domains, POS and Flutter app.',
    url: CANONICAL,
    type: 'website',
    images: [{ url: '/products/nazmart.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Clone Script: Run Your Own Shopify-Style Platform',
    description:
      'Sell online stores on subscription with a platform you own. Laravel, own database per store, custom domains, POS and Flutter app.',
    images: ['/products/nazmart.png'],
  },
  keywords: [
    'shopify clone script',
    'shopify clone',
    'build your own shopify',
    'shopify alternative script',
    'ecommerce saas script',
    'multi-tenant ecommerce script',
    'white label store builder',
  ],
};

export default function ShopifyCloneScriptPage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <WhatItIs />
      <Comparison />
      <InTheBox />
      <HowItWorks />
      <Revenue />
      <Hosting />
      <Pricing />
      <FaqSection />
      <BottomCta />
    </>
  );
}
