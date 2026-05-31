import type { Metadata } from 'next';
import IndustryAgentPage, { type IndustryPageData } from '@/components/sections/IndustryAgentPage';

const BASE_URL = 'https://xgenious.com';

const data: IndustryPageData = {
  industry: 'SaaS',
  slug: 'ai-agents-for-saas',
  heroH1: 'AI Agents for SaaS — Automate Onboarding, Retention, and Support',
  heroSubhead:
    'Built for SaaS teams who need agents that understand product context, user behaviour, and subscription lifecycle — not generic chatbots that forget everything between sessions.',
  useCasesHeading: 'What We Build for SaaS',
  useCases: [
    {
      title: 'Onboarding Automation Agent',
      desc: 'Guides new users through activation milestones, surfaces relevant features based on their role, and sends personalised nudges when users go idle — all without a single human touch. Connects to your product DB and email tool.',
      stat: '3× faster time-to-activation',
    },
    {
      title: 'Churn Prevention Agent',
      desc: 'Monitors usage signals, detects at-risk accounts, and triggers personalised outreach — discount offers, check-in calls, feature education — before the cancellation intent shows up in your CRM.',
      stat: '30–40% reduction in churn events',
    },
    {
      title: 'In-App Support Agent',
      desc: 'Handles tier-1 support queries inside your product using RAG over your docs, changelogs, and API reference. Escalates to a human only for billing disputes or account-level issues.',
      stat: '60% support ticket deflection',
    },
    {
      title: 'Revenue Expansion Agent',
      desc: 'Identifies expansion opportunities — usage near plan limits, teams with untapped seats, features used heavily by free users — and routes them to sales or triggers automated upgrade prompts.',
      stat: 'Avg 18% uplift in expansion MRR',
    },
  ],
  whyHeading: 'Why AI Agents, Not Automation Flows',
  benefits: [
    {
      title: 'Knows your product',
      desc: 'Trained on your docs, schema, and user segments — not generic SaaS knowledge.',
    },
    {
      title: 'Works inside your stack',
      desc: 'Connects to Stripe, Intercom, HubSpot, your product DB, and any webhook your app fires.',
    },
    {
      title: 'Ships in 2–6 weeks',
      desc: 'Fixed-price, committed go-live date. Not a discovery tax before work starts.',
    },
  ],
  ctaText: 'Ready to deploy an AI agent for your SaaS product?',
  metaTitle: 'AI Agents for SaaS — Automate Onboarding, Retention & Support',
  metaDescription:
    'Purpose-built AI agents for SaaS products — onboarding automation, churn prevention, and support deflection. Fixed-price from $1,500.',
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
