import type { Metadata } from 'next';
import Hero from './_components/Hero';
import AIServices from './_components/AIServices';
import AgentWorkflow from './_components/AgentWorkflow';
import Capabilities from './_components/Capabilities';
import WhyXgenious from './_components/WhyXgenious';
import IndustryUseCases from './_components/IndustryUseCases';
import CaseStudies from './_components/CaseStudies';
import Pricing from './_components/Pricing';
import TechStack from './_components/TechStack';
import BookCall from './_components/BookCall';
import FAQ, { type FaqItem } from '@/components/sections/FAQ';
import CTASection from './_components/CTASection';
import TrustedBy from '@/components/sections/TrustedBy';

const faqItems: FaqItem[] = [
  {
    question: 'What is an AI agent and how is it different from a chatbot?',
    answer: 'A chatbot follows a fixed script or keyword map. An AI agent reasons, plans, calls tools, hits APIs, remembers context across sessions, and completes multi-step tasks autonomously — without a human prompting every action. A chatbot answers questions. An agent gets work done.',
  },
  {
    question: 'How long does it take to build and deploy an AI agent?',
    answer: 'A single-use-case agent with RAG and up to 3 tool integrations typically deploys in 4–6 weeks. A multi-agent workflow system with orchestration, eval harnesses, and observability takes 8–12 weeks. We commit to a go-live date in the proposal — not a rolling estimate.',
  },
  {
    question: 'Which LLMs do you build on — are we locked in to OpenAI?',
    answer: 'No lock-in. We abstract the model layer using LangChain and LangGraph so the agent logic is model-agnostic. We build primarily on Anthropic Claude and OpenAI GPT-4o, but can deploy on open-source models (Llama, Mistral) or your own fine-tuned model. You can switch providers without rewriting your agent.',
  },
  {
    question: 'How do you handle hallucinations and accuracy?',
    answer: 'Every agent ships with a RAG pipeline grounding responses in your verified data, a coverage gate that routes out-of-scope queries to a human, confidence thresholds that trigger escalation below a set score, and an eval harness that benchmarks accuracy against a labelled test set. We don\'t ship agents without measurable accuracy baselines.',
  },
  {
    question: 'Where does our data go — can you deploy on our infrastructure?',
    answer: 'Yes. We can deploy entirely within your AWS, Azure, or GCP account — your data never leaves your infrastructure. Vector stores, model calls, and agent memory are all scoped to your environment. We support air-gapped deployments for HIPAA and enterprise compliance requirements.',
  },
  {
    question: 'Do you offer ongoing support after the agent is live?',
    answer: 'Every engagement includes a 30-day post-deploy support window. After that, we offer monthly SRE retainer blocks covering model updates, RAG re-indexing, tool integration changes, accuracy monitoring, and performance optimisation. Most clients stay on a retainer for the first 3–6 months as the agent matures on live data.',
  },
  {
    question: 'Can the agent integrate with our existing tools — CRM, Slack, databases?',
    answer: 'Yes — that\'s a core part of every build. We wire agents into Salesforce, HubSpot, Slack, Microsoft 365, Notion, Stripe, custom REST/GraphQL APIs, and internal databases. Agents read, write, and act inside your existing tools rather than running alongside them in isolation.',
  },
];

const BASE_URL = 'https://xgenious.com';

export const metadata: Metadata = {
  title: 'AI Agent Development Services | Custom AI Agents for Business | Xgenious',
  description:
    'Xgenious builds custom AI agents — RAG pipelines, agentic workflows, multi-agent systems, and LLM integrations. Production-grade, not demo-grade. Fixed-price from $1,500. Deployed in 2–12 weeks.',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/ai-agent-development-services',
  },
  openGraph: {
    title: 'AI Agent Development Services | Xgenious',
    description:
      'Not chatbots. Autonomous AI agents that reason, use tools, and complete entire jobs. Production-grade, enterprise-secure, deployed in weeks not quarters.',
    url: `${BASE_URL}/ai-agent-development-services`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Agent Development Services | Xgenious' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agent Development Services | Xgenious',
    description:
      'Not chatbots. Autonomous AI agents that reason, use tools, and complete entire jobs. Production-grade, enterprise-secure, deployed in weeks not quarters.',
    images: ['/og-image.png'],
    site: '@xgenious1',
    creator: '@xgenious1',
  },
};

export default function AiAgentDevelopmentPage() {
  return (
    <>
      <Hero />
      <TrustedBy title="Trusted by teams around the world" dark />
      <AIServices />
      <AgentWorkflow />
      <WhyXgenious />
      <TechStack />
      <Capabilities />
      <IndustryUseCases />
      <CaseStudies />
      <Pricing />
      <BookCall />
      <FAQ faqs={faqItems} badge="Frequently Asked Questions" title="Real Questions. Real Answers." description="The questions every AI buyer actually asks. If yours isn't here, ask it on the call — we'll answer it honestly." dark />
      <CTASection />
    </>
  );
}
