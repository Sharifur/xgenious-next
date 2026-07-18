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
  title: 'Genius Campaign — Free Self-Hosted Email Outreach Platform',
  description:
    'Open-source, self-hosted email marketing & outreach. Sequences, sender rotation, webhooks. Bring your own AWS SES / Gmail Workspace, no per-contact fees.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Genius Campaign — Free Self-Hosted Email Outreach Platform | Xgenious',
    description:
      'Contacts, templates, sequences, campaigns, deliverability, and sender rotation in one self-hosted console. Bring your own AWS SES, Gmail Workspace, and Cloudflare R2. MIT licensed.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/free-software/genius-campaign/dashboard.png', width: 2000, height: 827, alt: 'Genius Campaign dashboard' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genius Campaign — Free Self-Hosted Email Outreach Platform',
    description:
      'Contacts, templates, sequences, campaigns, deliverability, and sender rotation in one self-hosted console. Bring your own AWS SES / Gmail Workspace. MIT licensed.',
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
