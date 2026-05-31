import type { Metadata } from 'next';
import IndustryAgentPage, { type IndustryPageData } from '@/components/sections/IndustryAgentPage';

const BASE_URL = 'https://xgenious.com';

const data: IndustryPageData = {
  industry: 'Education',
  slug: 'ai-agents-for-education',
  heroH1: 'AI Agents for Education — Support Students, Generate Content, and Automate Admin',
  heroSubhead:
    'For edtech platforms and institutions who want to scale support and content delivery without scaling headcount. Agents trained on your curriculum, policies, and tone.',
  useCasesHeading: 'What We Build for Education',
  useCases: [
    {
      title: 'Student Support Agent',
      desc: 'Answers curriculum questions, assignment guidance requests, and policy queries 24/7 — grounded in your course materials, student handbook, and FAQs. Escalates to a tutor only when genuine learning support is needed.',
      stat: '70% of student queries resolved autonomously',
    },
    {
      title: 'Content Generation Agent',
      desc: 'Produces first drafts of course materials, quiz questions, lesson summaries, and assessments from your syllabus and learning objectives — reviewed and approved by your educators before publishing.',
      stat: '4× faster content production',
    },
    {
      title: 'Enrolment and Admissions Agent',
      desc: 'Guides prospective students through course selection, eligibility checks, application requirements, and enrolment steps — via web chat and email, 24/7, without burdening your admissions team.',
      stat: '50% reduction in admissions team workload',
    },
    {
      title: 'Progress Monitoring Agent',
      desc: 'Tracks learner engagement metrics, detects students at risk of dropping out, and triggers personalised outreach — encouragement messages, resource recommendations, or tutor check-in requests — before they disengage.',
      stat: '25% improvement in course completion rate',
    },
  ],
  whyHeading: 'Why AI Agents, Not Automation Flows',
  benefits: [
    {
      title: 'Trained on your curriculum',
      desc: 'Grounded in your course materials, not generic educational content. Agents speak your subject and your tone.',
    },
    {
      title: 'LMS integrated',
      desc: 'Connects to Moodle, Canvas, Teachable, and custom LMS platforms via API.',
    },
    {
      title: 'FERPA and GDPR compliant',
      desc: 'Student data stays in your infrastructure. Privacy-first by design.',
    },
  ],
  ctaText: 'Ready to deploy an AI agent for your education platform?',
  metaTitle: 'AI Agents for Education — Student Support, Content Generation & Admin Automation',
  metaDescription:
    'AI agents for education — student support agents, content generation, and admin automation. Fixed-price from $1,500.',
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
