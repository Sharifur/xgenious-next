import type { Metadata } from 'next';
import BookingCTA from '@/components/sections/BookingCTA';
import JsonLd from './_components/JsonLd';
import Hero from './_components/Hero';
import Reviews from './_components/Reviews';
import Stats from './_components/Stats';
import WhatIs from './_components/WhatIs';
import GuestTicketing from './_components/GuestTicketing';
import Modules from './_components/Modules';
import HowItWorks from './_components/HowItWorks';
import WhoItsFor from './_components/WhoItsFor';
import Roles from './_components/Roles';
import TechStack from './_components/TechStack';
import Comparison from './_components/Comparison';
import Alternatives from './_components/Alternatives';
import Screenshots from './_components/Screenshots';
import FAQ from './_components/FAQ';
import DownloadCTA from './_components/DownloadCTA';

const BASE_URL = 'https://xgenious.com';
const CANONICAL = `${BASE_URL}/free-software/genius-support`;

export const metadata: Metadata = {
  title: 'Free Open Source Ticketing System: Self-Hosted Helpdesk',
  description:
    'Free open-source ticketing system with guest ticket submission (no login required), email-to-ticket, knowledge base, SLA management, and real-time WebSocket updates. MIT licensed, self-hosted, no per-agent fees.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Free Open Source Ticketing System: Self-Hosted Helpdesk | Xgenious',
    description:
      'Genius Support: free self-hosted open-source ticketing system. Guest ticket submission without login, email-to-ticket, knowledge base, SLA, real-time WebSocket. MIT licensed, no per-agent fees.',
    url: CANONICAL,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Open Source Ticketing System: Self-Hosted Helpdesk',
    description:
      'Genius Support: free self-hosted open-source ticketing system. Guest ticket submission without login, email-to-ticket, knowledge base, SLA, real-time WebSocket. MIT licensed, no per-agent fees.',
    images: ['/og-image.png'],
  },
  keywords: [
    'open source ticketing system',
    'free helpdesk software',
    'self-hosted help desk',
    'free support portal software',
    'osTicket alternative',
    'FreeScout alternative',
    'Zammad alternative',
    'help scout alternative free',
    'submit ticket without login',
    'guest ticket system',
    'MIT license helpdesk',
    'ticket management system open source',
    'free ticketing system self-hosted',
    'zendesk alternative free',
    'freshdesk alternative open source',
    'email to ticket system',
    'laravel helpdesk',
    'imap ticketing system',
    'customer support ticket software',
    'free customer support software',
  ],
};

export default function GeniusSupportPage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Reviews />
      <Stats />
      <Screenshots />
      <WhatIs />
      <GuestTicketing />
      <Modules />
      <Comparison />
      <Alternatives />
      <HowItWorks />
      <WhoItsFor />
      <Roles />
      <TechStack />
      <BookingCTA />
      <FAQ />
      <DownloadCTA />
    </>
  );
}
