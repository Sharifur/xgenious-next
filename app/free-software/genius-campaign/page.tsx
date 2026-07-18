import type { Metadata } from 'next';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import WhatIs from './_components/WhatIs';
import Modules from './_components/Modules';
import Comparison from './_components/Comparison';
import HowItWorks from './_components/HowItWorks';
import TechStack from './_components/TechStack';
import FAQ from './_components/FAQ';
import DownloadCTA from './_components/DownloadCTA';
import { BASE_URL, CANONICAL } from './_components/constants';

export const metadata: Metadata = {
  title: 'Free Email Marketing Software — Open Source & Self-Hosted',
  description:
    'Free, open-source email marketing software with sequences, webhooks, AI writing & AWS SES sending. MIT licensed, self-hosted, no per-contact fees.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Free Email Marketing Software — Open Source & Self-Hosted | Xgenious',
    description:
      'Genius Campaign: free self-hosted email marketing — sequences, webhooks, AI writing, AWS SES, Google Workspace, email verification. MIT licensed, no per-contact fees.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Email Marketing Software — Open Source & Self-Hosted',
    description:
      'Genius Campaign: free self-hosted email marketing — sequences, webhooks, AI writing, AWS SES, Google Workspace, email verification. MIT licensed, no per-contact fees.',
    images: ['/og-image.png'],
  },
  keywords: [
    'free email marketing software',
    'open source email marketing',
    'self hosted email marketing platform',
    'mailchimp alternative free',
    'activecampaign alternative open source',
    'klaviyo alternative free',
    'laravel email marketing',
    'email sequence automation software',
    'aws ses email marketing',
    'free drip campaign software',
    'webhook email automation',
    'free bulk email software',
  ],
};

export default function GeniusCampaignPage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <WhatIs />
      <Modules />
      <Comparison />
      <HowItWorks />
      <TechStack />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
