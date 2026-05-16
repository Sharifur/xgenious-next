import type { Metadata } from 'next';
import Hero from './_components/Hero';
import AIServices from './_components/AIServices';
import AgentWorkflow from './_components/AgentWorkflow';
import WhatWeBuild from './_components/WhatWeBuild';
import HowWeWork from './_components/HowWeWork';
import CaseStudies from './_components/CaseStudies';
import TrustCompliance from './_components/TrustCompliance';
import Pricing from './_components/Pricing';
import TechStack from './_components/TechStack';
import Testimonials from '@/components/sections/Testimonials';
import BookCall from './_components/BookCall';
import FAQ, { type FaqItem } from '@/components/sections/FAQ';
import CTASection from './_components/CTASection';
import TrustedBy from '@/components/sections/TrustedBy';

const faqItems: FaqItem[] = [
  { question: 'What is an AI agent and how is it different from a chatbot?', answer: 'A chatbot follows a fixed script. An AI agent reasons, plans, uses tools, calls APIs, remembers context, and takes actions autonomously — it can complete multi-step tasks without human prompting at every step.' },
  { question: 'How long does it take to build and deploy an AI agent?', answer: 'A focused single-use-case agent typically takes 4–6 weeks from scoping to production. Multi-agent systems with complex orchestration run 8–12 weeks. We publish the milestone list on day one.' },
  { question: 'Which LLMs do you build on — are we locked in to OpenAI?', answer: 'No lock-in. We design model-agnostic architectures. We support OpenAI, Anthropic Claude, Google Gemini, Mistral, and open-source models. We recommend the best fit for your cost, latency, and data-privacy requirements.' },
  { question: 'How do you handle hallucinations and accuracy?', answer: 'Every agent ships with retrieval-augmented generation (RAG), structured output validation, confidence thresholds, and a human-in-the-loop escalation path for low-confidence decisions.' },
  { question: 'Where does our data go — can you deploy on our infrastructure?', answer: 'Yes. We can deploy fully on your AWS, Azure, or GCP account. No data leaves your environment. We also support air-gapped deployments for regulated industries.' },
  { question: 'Do you offer ongoing support after the agent is live?', answer: 'Every package includes a 30-day post-launch support window. After that, monthly retainers cover model updates, prompt tuning, new tool integrations, and performance monitoring.' },
  { question: 'Can the agent integrate with our existing tools — CRM, Slack, databases?', answer: 'Yes. We build integration layers for HubSpot, Salesforce, Slack, Notion, Postgres, custom REST/GraphQL APIs, and more. If it has an API, the agent can use it.' },
];

export const metadata: Metadata = {
  title: 'AI Agent Development Services | Xgenious',
  description:
    'Custom AI agents, multi-agent systems, and workflow automation — production grade, enterprise secure, and trained on your business logic. Built by Xgenious.',
};

export default function AiAgentDevelopmentPage() {
  return (
    <>
      <Hero />
      <TrustedBy title="Trusted by Leading Global Companies" dark />
      <AIServices />
      <AgentWorkflow />
      <WhatWeBuild />
      <HowWeWork />
      <CaseStudies />
      <TrustCompliance />
      <Pricing />
      <TechStack />
      <Testimonials />
      <BookCall />
      <FAQ faqs={faqItems} description="The questions every AI buyer actually asks. If yours isn't here, ask it on the call — we will answer it honestly." />
      <CTASection />
    </>
  );
}
