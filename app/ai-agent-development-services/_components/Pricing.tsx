import ServicePricing, { type PricingPlan } from '@/components/sections/ServicePricing';

const plans: PricingPlan[] = [
  {
    name: 'Agent Validation',
    price: '$1,500',
    timeline: '2–3 Weeks · 1 Sprint cycle',
    bestFor: 'Validate your AI use case before committing to the full build. 100% of the fee credits toward Agent Pro.',
    features: [
      'Single AI agent, one use case',
      'RAG pipeline + vector store setup',
      'Up to 2 tool / API integrations',
      'Basic hallucination monitoring',
      'Human-in-the-loop escalation',
      '14-day post-deploy support',
      '100% credited toward Agent Pro',
    ],
    cta: 'Validate Your Use Case',
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
    price: '$25,000+',
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

const ROI_STATS = [
  { label: 'Avg cost per request', value: '$0.0021' },
  { label: 'Typical token throughput', value: '2.4M / hr' },
  { label: 'Avg response time', value: '1.2s p50' },
];

function ROICallout() {
  return (
    <div className="pt-14 sm:pt-20 lg:pt-[120px]" style={{ background: '#070b14' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div
          className="rounded-[16px] px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
          style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="flex-1 flex flex-col gap-2">
            <p className="text-[#ec7161] text-[13px] font-medium">Built for ROI, not demos</p>
            <p className="text-white font-semibold text-[18px] sm:text-[20px] leading-[28px] max-w-[440px]">
              We&apos;ll quote your agent&apos;s per-task cost before you commit — not after you&apos;ve signed.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-10 sm:flex-shrink-0">
            {ROI_STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="text-white font-bold text-[22px] sm:text-[26px] leading-none">{s.value}</span>
                <span className="text-[#6b7280] text-[12px] leading-[18px] mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <>
      <ROICallout />
      <ServicePricing
        plans={plans}
        heading="Pick a Starting Point, No Discovery Tax"
        subhead="Scope is published. Timeline is committed. If we quote outside your package, we'll tell you upfront — not mid-sprint."
        theme="dark"
      />
    </>
  );
}
