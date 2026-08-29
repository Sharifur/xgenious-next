import type { Metadata } from 'next';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import Screenshots from './_components/Screenshots';
import WhatIs from './_components/WhatIs';
import Numbers from './_components/Numbers';
import PaymentGateways from './_components/PaymentGateways';
import Shipping from './_components/Shipping';
import SmsAndFraud from './_components/SmsAndFraud';
import SellingInternationally from './_components/SellingInternationally';
import PaymentSettlement from './_components/PaymentSettlement';
import PlatformRest from './_components/PlatformRest';
import TechStack from './_components/TechStack';
import WhoItsFor from './_components/WhoItsFor';
import WhatFreeMeans from './_components/WhatFreeMeans';
import GettingStarted from './_components/GettingStarted';
import HonestNotes from './_components/HonestNotes';
import Comparison from './_components/Comparison';
import FAQ from './_components/FAQ';
import DownloadCTA from './_components/DownloadCTA';
import StickyDownload from './_components/StickyDownload';
import { BASE_URL, CANONICAL } from './_components/constants';

export const metadata: Metadata = {
  title: 'Genius Commerz: Free Self-Hosted eCommerce Platform',
  description:
    'Free, self-hosted eCommerce platform for cross-border merchants. 98 built-in integrations, MIT licensed, 0% commission.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Genius Commerz: Free Self-Hosted eCommerce Platform | Xgenious',
    description:
      'Self-hosted eCommerce for merchants selling across borders. 98 built-in integrations: payment gateways, shipping carriers, SMS, and fraud checks, across 213 countries and 155 currencies. MIT licensed, free forever, 0% commission.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/free-software/genius-commerz/admin-dashboard.png', width: 2000, height: 1160, alt: 'Genius Commerz admin dashboard' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genius Commerz: Free Self-Hosted eCommerce Platform',
    description:
      'Self-hosted eCommerce for cross-border merchants. 39 payment gateways, 19 shipping carriers, 20 SMS gateways. MIT licensed, 0% commission.',
    images: ['/free-software/genius-commerz/admin-dashboard.png'],
  },
  keywords: [
    'free self hosted ecommerce platform',
    'open source ecommerce no commission',
    'laravel ecommerce platform free',
    'cross border ecommerce software',
    'multi currency ecommerce platform',
    'ecommerce platform with local payment gateways',
    'woocommerce alternative self hosted',
    'shopify alternative no fees',
    'self hosted ecommerce with tax automation',
    'free ecommerce software MIT license',
  ],
};

export default function GeniusCommerzPage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Screenshots />
      <WhatIs />
      <Numbers />
      <PaymentGateways />
      <Shipping />
      <SmsAndFraud />
      <SellingInternationally />
      <PaymentSettlement />
      <PlatformRest />
      <TechStack />
      <WhoItsFor />
      <WhatFreeMeans />
      <GettingStarted />
      <HonestNotes />
      <Comparison />
      <FAQ />
      <DownloadCTA />
      <StickyDownload />
    </>
  );
}
