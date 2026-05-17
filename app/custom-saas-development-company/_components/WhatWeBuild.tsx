import SectionBadge from '@/components/ui/SectionBadge';
function BuildCard({
  icon,
  title,
  description,
  tags,
}: {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="bg-[#f5f6f8] flex flex-col items-start p-5 sm:p-8 rounded-[12px] gap-4 sm:gap-6">
      <div
        className="flex items-center justify-center border border-[#bababa] rounded-[32px] flex-shrink-0"
        style={{ width: 64, height: 64, background: '#f5ebda' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="" width={36} height={36} className="object-contain" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[#181818] font-semibold text-[16px] leading-[24px] sm:text-[20px] sm:leading-[28px]">
          {title}
        </p>
        <p className="text-[#484848] font-normal text-[14px] leading-[21px] sm:text-[16px] sm:leading-[24px]">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((label) => (
          <span
            key={label}
            className="bg-white border-[0.5px] border-[#bababa] px-[10px] py-1 rounded-[999px] text-[#52525b] font-medium"
            style={{ fontSize: 12, lineHeight: '18px' }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

const cards = [
  {
    icon: '/images/saas-dev/icon-multi.svg',
    title: 'Multi-Tenant SaaS Architecture',
    description:
      'Row-level or schema-level tenancy, per-tenant billing, isolated data stores, role-based access, and admin consoles — designed from the schema up, never retrofitted from a single-tenant codebase.',
    tags: ['PostgreSQL RLS', 'Tenant isolation', 'Admin portals'],
  },
  {
    icon: '/images/saas-dev/icon-saas.svg',
    title: 'SaaS MVP Engineering',
    description:
      'Fixed-scope MVPs in 8–12 weeks. React + Node or Laravel + Flutter. Purpose-built foundations for eCommerce, marketplaces, on-demand services, and B2B platforms — real code that scales, not throwaway prototypes.',
    tags: ['Fixed price', 'Weekly demos', 'App Store ready'],
  },
  {
    icon: '/images/saas-dev/icon-payment.svg',
    title: 'Payments, Billing & Subscriptions',
    description:
      'Stripe, Paddle, and Lemon Squeezy for global billing — Tabby, Tamara, Mada, and STC Pay for GCC markets. Usage metering, free trials, dunning workflows, refunds, and revenue recognition, all wired from day one.',
    tags: ['Stripe Connect', 'Mada / Tabby', 'Metered billing'],
  },
  {
    icon: '/images/saas-dev/icon-compliance.svg',
    title: 'Compliance-Ready Builds',
    description:
      'GDPR, HIPAA, and SOC 2-ready architectures with audit logs, data-residency options, threat models, and a signed DPA on every engagement. UK Ltd, US Delaware C-Corp, and UAE DMCC entities available for local procurement.',
    tags: ['HIPAA-ready', 'GDPR DPA', 'Audit logs'],
  },
  {
    icon: '/images/saas-dev/icon-ai.svg',
    title: 'AI & LLM Integration',
    description:
      'RAG pipelines, agentic workflows, eval harnesses, and LLM retrofits for existing SaaS platforms. Anthropic Claude, OpenAI, LangChain, Pinecone, pgvector — with observability and a real ROI model, not just a chatbot bolted on.',
    tags: ['Claude & GPT', 'RAG + evals', 'LangGraph agents'],
  },
  {
    icon: '/images/saas-dev/icon-devops.svg',
    title: 'DevOps & Managed Hosting',
    description:
      'AWS, Azure, and GCP infrastructure as code, CI/CD pipelines, observability dashboards, cost optimisation, and post-launch SRE retainers. Your SaaS stays up, performant, and cost-efficient after we hand it over.',
    tags: ['Terraform + K8s', 'Datadog / Sentry', '24/5 on-call'],
  },
];

export default function WhatWeBuild() {
  return (
    <section className="pt-8 pb-14 sm:pt-10 sm:pb-20 lg:pt-[40px] lg:pb-[120px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-10 sm:gap-14 lg:gap-[72px] items-center">
        <div className="flex flex-col items-center gap-4 text-center max-w-[732px]">
          <SectionBadge>What We Build</SectionBadge>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-[#0f1112] font-semibold text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px]">
              SaaS Engineering, End-to-End.
            </h2>
            <p className="text-[#484848] font-normal text-[14px] leading-[21px] sm:text-[16px] sm:leading-6" style={{ maxWidth: 401 }}>
              Six capability lines across the full SaaS lifecycle. Pick one or work with us across all six.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.slice(0, 3).map((c) => (
              <BuildCard key={c.title} {...c} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.slice(3, 6).map((c) => (
              <BuildCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
