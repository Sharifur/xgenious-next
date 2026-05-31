import type { Metadata } from 'next';
import IndustryAgentPage, { type IndustryPageData } from '@/components/sections/IndustryAgentPage';

const BASE_URL = 'https://xgenious.com';

const data: IndustryPageData = {
  industry: 'Real Estate',
  slug: 'ai-agents-for-real-estate',
  heroH1: 'AI Agents for Real Estate — Qualify Leads, Match Properties, and Win More Listings',
  heroSubhead:
    'Purpose-built agents for property teams who lose deals because follow-up is too slow and market data takes too long to compile. Your agent works 24/7. Your agents do not.',
  useCasesHeading: 'What We Build for Real Estate',
  useCases: [
    {
      title: 'Lead Qualification Agent',
      desc: 'Responds to every inquiry within 60 seconds, qualifies budget, timeline, and location preferences through conversational intake, and routes hot leads directly to the right agent — via WhatsApp, SMS, or CRM.',
      stat: '5× faster lead response time',
    },
    {
      title: 'Property Matching Agent',
      desc: 'Cross-references buyer preferences against your live inventory and MLS feed, surfaces ranked matches with personalised reasoning, and sends automated alerts when a matching property lists or drops in price.',
      stat: '40% more qualified viewings booked',
    },
    {
      title: 'Market Intelligence Agent',
      desc: 'Pulls comparable sales, days-on-market data, and local price trends from your data sources and formats them into client-ready market reports — on demand, in minutes, not hours.',
      stat: 'Reports generated in under 3 minutes',
    },
    {
      title: 'Listing Follow-Up Agent',
      desc: 'After every viewing, automatically sends follow-up messages, captures feedback, flags interest signals back to your CRM, and schedules second viewings or offer conversations without your agents lifting a finger.',
      stat: '70% follow-up response rate',
    },
  ],
  whyHeading: 'Why AI Agents, Not Automation Flows',
  benefits: [
    {
      title: '24/7 inquiry handling',
      desc: 'Captures and qualifies leads outside business hours — when most competitors go silent.',
    },
    {
      title: 'CRM and MLS integrated',
      desc: 'Writes back to Salesforce, HubSpot, or your custom CRM. Reads from live MLS and property feeds.',
    },
    {
      title: 'GDPR and data residency ready',
      desc: 'All prospect data scoped to your infrastructure. We support UK, EU, and UAE compliance requirements.',
    },
  ],
  ctaText: 'Ready to deploy an AI agent for your real estate team?',
  metaTitle: 'AI Agents for Real Estate — Lead Nurturing & Market Intelligence',
  metaDescription:
    'AI agents for real estate teams — automated lead qualification, property matching, and market report generation. Fixed-price from $1,500.',
};

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/${data.slug}` },
  openGraph: {
    title: `${data.metaTitle}`,
    description: data.metaDescription,
    url: `${BASE_URL}/${data.slug}`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: data.metaTitle,
    description: data.metaDescription,
    images: ['/og-image.png'],
    site: '@xgenious1',
    creator: '@xgenious1',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'AI Agent Services', item: `${BASE_URL}/ai-agent-development-services` },
    { '@type': 'ListItem', position: 3, name: `AI Agents for ${data.industry}`, item: `${BASE_URL}/${data.slug}` },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustryAgentPage data={data} />
    </>
  );
}
