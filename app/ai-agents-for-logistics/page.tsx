import type { Metadata } from 'next';
import IndustryAgentPage, { type IndustryPageData } from '@/components/sections/IndustryAgentPage';

const BASE_URL = 'https://xgenious.com';

const data: IndustryPageData = {
  industry: 'Logistics',
  slug: 'ai-agents-for-logistics',
  heroH1: 'AI Agents for Logistics — Optimise Routes, Handle Exceptions, and Keep Customers Informed',
  heroSubhead:
    'For logistics and supply chain teams drowning in exceptions, customer queries, and manual dispatch decisions. Agents that act — not just alert.',
  useCasesHeading: 'What We Build for Logistics',
  useCases: [
    {
      title: 'Route Optimisation Agent',
      desc: 'Analyses live traffic, delivery windows, vehicle capacity, and driver availability to generate optimised route plans — recalculating in real time when pickups are added, delays occur, or vehicles break down.',
      stat: '15–20% reduction in fuel and time cost',
    },
    {
      title: 'Delivery Exception Agent',
      desc: 'Detects failed delivery attempts, address errors, and customs holds in real time — automatically contacts the recipient, gathers resolution instructions, and re-routes the shipment without dispatcher involvement.',
      stat: '80% of exceptions resolved without human action',
    },
    {
      title: 'Customer Notification Agent',
      desc: 'Sends proactive ETA updates, delivery window confirmations, and exception alerts via SMS, WhatsApp, and email — reducing inbound WISMO queries by giving customers answers before they ask.',
      stat: '60% reduction in WISMO calls',
    },
    {
      title: 'Carrier Coordination Agent',
      desc: 'Monitors carrier SLAs, detects at-risk shipments, auto-escalates to backup carriers when primary carriers breach thresholds, and logs all decisions for post-incident review.',
      stat: 'SLA breach detection in under 5 minutes',
    },
  ],
  whyHeading: 'Why AI Agents, Not Automation Flows',
  benefits: [
    {
      title: 'TMS and WMS integrated',
      desc: 'Connects to your transport and warehouse management systems via API or EDI.',
    },
    {
      title: 'Real-time event processing',
      desc: 'Reacts to GPS pings, carrier webhooks, and customs status updates in under a second.',
    },
    {
      title: 'Full audit trail',
      desc: 'Every agent decision logged — who acted, when, and why. Exportable for compliance and carrier disputes.',
    },
  ],
  ctaText: 'Ready to deploy an AI agent for your logistics operation?',
  metaTitle: 'AI Agents for Logistics — Route Optimisation, Delivery Tracking & Exception Handling',
  metaDescription:
    'AI agents for logistics — route optimisation, delivery exception handling, and real-time tracking notifications. Fixed-price from $1,500.',
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
