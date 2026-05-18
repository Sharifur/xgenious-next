import type { Metadata } from 'next';
import IndustryAgentPage, { type IndustryPageData } from '@/components/sections/IndustryAgentPage';

const BASE_URL = 'https://xgenious.com';

const data: IndustryPageData = {
  industry: 'HR & Recruiting',
  slug: 'ai-agents-for-hr-recruiting',
  heroH1: 'AI Agents for HR & Recruiting — Screen Candidates, Automate Outreach, and Onboard Faster',
  heroSubhead:
    'For HR teams and recruiting agencies who need to move faster than the competition. Agents that screen CVs, engage candidates, and onboard new hires — without adding headcount.',
  useCasesHeading: 'What We Build for HR & Recruiting',
  useCases: [
    {
      title: 'Resume Screening Agent',
      desc: 'Ingests CVs from your ATS, scores candidates against your defined criteria — skills, experience, location, seniority — and surfaces a ranked shortlist with structured reasoning for each candidate. No keyword matching. Actual evaluation.',
      stat: '5× faster candidate shortlisting',
    },
    {
      title: 'Candidate Outreach Agent',
      desc: 'Sends personalised first-contact messages to sourced candidates, handles response triage, answers initial role questions, and books screening calls directly into recruiter calendars — all before a human is involved.',
      stat: '3× higher candidate response rate',
    },
    {
      title: 'Interview Scheduling Agent',
      desc: 'Coordinates availability across candidates and hiring panels, sends calendar invites, handles reschedule requests, and sends preparation reminders — eliminating the scheduling back-and-forth that kills candidate experience.',
      stat: '80% reduction in scheduling time',
    },
    {
      title: 'Employee Onboarding Agent',
      desc: 'Guides new hires through their first 30 days — sending structured onboarding tasks, answering policy questions, collecting signed documents, and flagging blockers to the HR team when new hires go silent.',
      stat: '50% reduction in HR onboarding overhead',
    },
  ],
  whyHeading: 'Why AI Agents, Not Automation Flows',
  benefits: [
    {
      title: 'ATS integrated',
      desc: 'Connects to Greenhouse, Lever, Workday, and custom applicant tracking systems.',
    },
    {
      title: 'Bias-aware by design',
      desc: 'Screening criteria are defined and auditable. No black-box scoring — every decision is explainable.',
    },
    {
      title: 'GDPR-compliant candidate data handling',
      desc: 'Candidate data is scoped, retained per your policy, and deletable on request.',
    },
  ],
  ctaText: 'Ready to deploy an AI agent for your HR or recruiting team?',
  metaTitle: 'AI Agents for HR & Recruiting — Resume Screening, Candidate Outreach & Onboarding',
  metaDescription:
    'AI agents for HR and recruiting — automated resume screening, candidate outreach, and employee onboarding. Fixed-price from $1,500.',
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
