import type { Metadata } from 'next';
import BookingCTA from '@/components/sections/BookingCTA';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import Stats from './_components/Stats';
import WhatIs from './_components/WhatIs';
import Modules from './_components/Modules';
import HowItWorks from './_components/HowItWorks';
import Roles from './_components/Roles';
import TechStack from './_components/TechStack';
import Comparison from './_components/Comparison';
import Screenshots from './_components/Screenshots';
import FAQ from './_components/FAQ';
import DownloadCTA from './_components/DownloadCTA';

const BASE_URL = 'https://xgenious.com';
const CANONICAL = `${BASE_URL}/free-software/genius-support`;

export const metadata: Metadata = {
  title: 'Free Support Portal Software — Open Source Helpdesk',
  description:
    'Free open-source helpdesk software with ticketing, customer portal, knowledge base, and email-to-ticket automation. MIT licensed, self-hosted, no per-agent fees ever.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Free Support Portal Software — Open Source Helpdesk | Xgenious',
    description:
      'Genius Support: free self-hosted helpdesk — ticketing, customer portal, knowledge base, email-to-ticket, WebSocket. MIT licensed, no per-agent fees.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Support Portal Software — Open Source Helpdesk',
    description:
      'Genius Support: free self-hosted helpdesk — ticketing, customer portal, knowledge base, email-to-ticket, WebSocket. MIT licensed, no per-agent fees.',
    images: ['/og-image.png'],
  },
  keywords: [
    'free support portal software',
    'open source helpdesk software',
    'self hosted ticketing system',
    'zendesk alternative free',
    'freshdesk alternative open source',
    'free help desk software download',
    'laravel helpdesk',
    'email to ticket system',
    'customer support ticket software',
    'open source customer support',
    'imap ticketing system',
    'free customer support software',
  ],
};

export default function GeniusSupportPage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Stats />
      <Screenshots />
      <WhatIs />
      <Modules />
      <Comparison />
      <HowItWorks />
      <Roles />
      <TechStack />
      <BookingCTA />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
