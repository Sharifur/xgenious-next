import type { Metadata } from 'next';
import IndustryAgentPage, { type IndustryPageData } from '@/components/sections/IndustryAgentPage';

const BASE_URL = 'https://xgenious.com';

const data: IndustryPageData = {
  industry: 'Finance',
  slug: 'ai-agents-for-finance',
  heroH1: 'AI Agents for Finance — Automate KYC, Flag Fraud, and Onboard Clients Faster',
  heroSubhead:
    'For fintech teams and financial services firms who need automation that is compliant by design, auditable by default, and fast enough to match client expectations.',
  useCasesHeading: 'What We Build for Finance',
  useCases: [
    {
      title: 'KYC Automation Agent',
      desc: 'Collects and verifies identity documents, cross-checks against sanctions and PEP lists, flags anomalies for human review, and writes structured verification records to your compliance system — in minutes, not days.',
      stat: '80% faster client onboarding',
    },
    {
      title: 'Fraud Detection Agent',
      desc: 'Monitors transactions in real time against configurable rule sets and ML-derived anomaly baselines, triggers instant alerts on suspicious patterns, and routes flagged cases to your risk team with structured evidence.',
      stat: 'Sub-second fraud flag latency',
    },
    {
      title: 'Client Onboarding Agent',
      desc: 'Guides new clients through account opening, document submission, risk profiling, and product selection via conversational intake across web chat and email — reducing drop-off at every stage.',
      stat: '55% reduction in onboarding drop-off',
    },
    {
      title: 'Report Generation Agent',
      desc: 'Pulls data from your portfolio management system, applies your standard report templates, and generates client-ready performance reports, regulatory filings, and risk summaries — on schedule or on demand.',
      stat: 'Reports generated in under 5 minutes',
    },
  ],
  whyHeading: 'Why AI Agents, Not Automation Flows',
  benefits: [
    {
      title: 'Compliance-first architecture',
      desc: 'PII redaction, audit logs, and role-based access baked into the agent design — not retrofitted.',
    },
    {
      title: 'Air-gapped deployment available',
      desc: 'All data stays in your AWS, Azure, or GCP account. We support HIPAA, SOC 2, and GDPR requirements.',
    },
    {
      title: 'Human-in-the-loop by default',
      desc: 'Every decision above your defined risk threshold routes to a human before action is taken.',
    },
  ],
  ctaText: 'Ready to deploy a compliance-ready AI agent for your finance team?',
  metaTitle: 'AI Agents for Finance — KYC Automation, Fraud Detection & Client Onboarding',
  metaDescription:
    'AI agents for financial services — KYC automation, fraud detection, and client onboarding. Compliance-ready. Fixed-price from $1,500.',
};

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `/${data.slug}` },
  openGraph: {
    title: `${data.metaTitle} | Xgenious`,
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
