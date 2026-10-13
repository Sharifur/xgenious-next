import type { Metadata } from 'next';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import Screenshots from './_components/Screenshots';
import WhatIs from './_components/WhatIs';
import WhoItsFor from './_components/WhoItsFor';
import Modules from './_components/Modules';
import Comparison from './_components/Comparison';
import BringYourOwn from './_components/BringYourOwn';
import HowItWorks from './_components/HowItWorks';
import TechStack from './_components/TechStack';
import FAQ from './_components/FAQ';
import DownloadCTA from './_components/DownloadCTA';
import { BASE_URL, CANONICAL } from './_components/constants';

export const metadata: Metadata = {
  title: { absolute: 'Free Self-Hosted Email Outreach Tool | Xgenious' },
  description: 'Open-source, self-hosted email outreach with sequences, A/B variants, sender rotation and webhooks. Bring your own SES or Gmail, no per-contact fees.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Free Self-Hosted Email Outreach Tool | Xgenious',
    description: 'Open-source, self-hosted email outreach with sequences, A/B variants, sender rotation and webhooks. Bring your own SES or Gmail, no per-contact fees.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/free-software/genius-campaign/dashboard.png', width: 2000, height: 827, alt: 'Genius Campaign dashboard' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Self-Hosted Email Outreach Tool | Xgenious',
    description: 'Open-source, self-hosted email outreach with sequences, A/B variants, sender rotation and webhooks. Bring your own SES or Gmail, no per-contact fees.',
    images: ['/free-software/genius-campaign/dashboard.png'],
  },
  keywords: [
    'self hosted email outreach platform',
    'self hosted smartlead alternative',
    'self hosted instantly alternative',
    'open source cold email software',
    'self hosted email marketing with sender rotation',
    'bring your own ses cold email tool',
    'email marketing software with webhooks',
    'self hosted email sequence automation',
    'open source email marketing google workspace',
    'free mailchimp alternative self hosted',
    'email marketing custom fields',
    'email template ab testing self hosted',
    'conditional email templates',
    'self hosted email verification reoon',
  ],
};

export default function GeniusCampaignPage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Screenshots />
      <WhatIs />
      <WhoItsFor />
      <Modules />
      <Comparison />
      <BringYourOwn />
      <HowItWorks />
      <TechStack />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
