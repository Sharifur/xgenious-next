import ServicePricing, { type PricingPlan } from '@/components/sections/ServicePricing';

const plans: PricingPlan[] = [
  {
    name: 'Agent Starter',
    price: '$1,500',
    timeline: '2–3 Weeks · 1 Sprint cycle',
    bestFor: 'Single-task agents, RAG chatbots, simple API-connected automations, or proof-of-concept builds.',
    features: [
      'Single AI agent, one use case',
      'RAG pipeline + vector store setup',
      'Up to 2 tool / API integrations',
      'Basic hallucination monitoring',
      'Human-in-the-loop escalation',
      '14-day post-deploy support',
    ],
    cta: 'Start with Starter',
    ctaHref: '/contact',
    dark: false,
    popular: false,
  },
  {
    name: 'Agent Pro',
    price: '$8,000',
    timeline: '6–8 Weeks · 2 Sprint cycles',
    bestFor: 'Multi-step workflow agents, customer support automation, or sales and ops agents with tool use.',
    features: [
      'Up to 3 AI agents, coordinated workflows',
      'Full RAG pipeline + knowledge base ingestion',
      'Up to 8 API / tool integrations',
      'Multi-agent orchestration (LangGraph)',
      'Human-in-the-loop + escalation routing',
      'Real-time observability dashboard',
      'Eval harness + accuracy benchmarking',
      '30-day post-deploy support + 1 retainer month',
    ],
    cta: 'Start with Pro',
    ctaHref: '/contact',
    dark: true,
    popular: true,
  },
  {
    name: 'Agent Enterprise',
    price: 'Custom',
    timeline: '12+ Weeks · 3+ Sprint cycles',
    bestFor: 'Multi-agent systems, enterprise-wide automation, compliance-heavy or high-volume production deployments.',
    features: [
      'Unlimited agents + full multi-agent orchestration',
      'Custom knowledge base architecture',
      'Unlimited tool integrations + custom connectors',
      'Fine-tuning or domain-adapted model layers',
      'SOC 2-ready architecture + PII redaction',
      'Dedicated observability stack (Datadog / Sentry)',
      'SLA-backed uptime commitment',
      '60-day post-deploy support + ongoing SRE retainer',
    ],
    cta: 'Talk to Us',
    ctaHref: '/contact',
    dark: false,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <ServicePricing
      plans={plans}
      heading="Pick a Starting Point, No Discovery Tax"
      subhead="Scope is published. Timeline is committed. If we quote outside your package, we'll tell you upfront — not mid-sprint."
      theme="dark"
    />
  );
}
