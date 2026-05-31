import type { Metadata } from 'next';
import IndustryAgentPage, { type IndustryPageData } from '@/components/sections/IndustryAgentPage';

const BASE_URL = 'https://xgenious.com';

const data: IndustryPageData = {
  industry: 'Healthcare',
  slug: 'ai-agents-for-healthcare',
  heroH1: 'AI Agents for Healthcare — Automate Intake, Scheduling, and Patient Communication',
  heroSubhead:
    'For healthcare providers who need to reduce admin burden without compromising patient experience. HIPAA-ready agents that handle the repetitive work so your team can focus on care.',
  useCasesHeading: 'What We Build for Healthcare',
  useCases: [
    {
      title: 'Patient Intake Agent',
      desc: 'Collects patient history, insurance information, symptoms, and consent forms via conversational intake before the appointment — structured and written to your EHR automatically. No paper, no manual data entry.',
      stat: '40% reduction in admin time per patient',
    },
    {
      title: 'Appointment Scheduling Agent',
      desc: 'Handles inbound scheduling requests across web chat, SMS, and phone — checks provider availability, books appointments, sends reminders, and manages cancellations and rebooking automatically.',
      stat: '35% reduction in no-show rate',
    },
    {
      title: 'Billing Query Agent',
      desc: 'Answers patient questions about invoices, insurance coverage, payment plans, and billing disputes using your billing system data — resolving 70% of queries without involving your billing team.',
      stat: '70% of billing queries resolved autonomously',
    },
    {
      title: 'Post-Visit Follow-Up Agent',
      desc: 'Sends personalised post-visit instructions, medication reminders, and follow-up appointment prompts — tailored to the visit type and provider notes. Flags non-responses for manual follow-up.',
      stat: '60% better care plan adherence',
    },
  ],
  whyHeading: 'Why AI Agents, Not Automation Flows',
  benefits: [
    {
      title: 'HIPAA-ready by design',
      desc: 'BAA available. PHI never leaves your infrastructure. All agent memory is encrypted and scoped.',
    },
    {
      title: 'EHR and PMS integrated',
      desc: 'Connects to Epic, Athenahealth, Kareo, and custom practice management systems.',
    },
    {
      title: 'Patients, not prompts',
      desc: 'Agents are trained on clinical communication tone — professional, empathetic, and never alarmist.',
    },
  ],
  ctaText: 'Ready to deploy a HIPAA-ready AI agent for your healthcare practice?',
  metaTitle: 'AI Agents for Healthcare — Patient Intake, Scheduling & Admin Automation',
  metaDescription:
    'AI agents for healthcare — patient intake automation, appointment scheduling, and billing query handling. HIPAA-ready. Fixed-price from $1,500.',
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
