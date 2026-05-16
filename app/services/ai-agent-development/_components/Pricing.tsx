import Button, { ArrowIcon } from '@/components/ui/Button';

const features = [
  'Single AI agent (one use case)',
  'RAG pipeline + vector store setup',
  'Tool integrations (up to 3 APIs)',
  'Human-in-the-loop escalation',
  'Monitoring & hallucination alerts',
  '30-day post-deploy support',
];

const plans = [
  { name: 'Agent Starter',     popular: false, price: '$8k',    timeline: '4 Weeks',  cta: 'Start with Starter' },
  { name: 'Agent Pro',         popular: true,  price: '$18k',   timeline: '8 Weeks',  cta: 'Start with Pro' },
  { name: 'Agent Enterprise',  popular: false, price: 'Custom', timeline: '12+ Weeks',cta: 'Talk to Us' },
];

const checkLight = '/images/web-app-dev/check-light.svg';

function PlanCard({ name, popular, price, timeline, cta }: typeof plans[0]) {
  return (
    <div
      className="relative flex flex-col p-6 rounded-[12px]"
      style={{
        background: '#111111',
        border: popular ? '1.5px solid rgba(236,113,97,0.75)' : '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {popular && (
        <div
          className="absolute top-5 right-5 px-3 py-1 rounded-full font-bold text-white text-[11px] leading-none"
          style={{ background: '#ec7161', letterSpacing: 0.45 }}
        >
          Most popular
        </div>
      )}

      <div className="flex flex-col gap-6 flex-1">
        <p className="font-medium text-[#ec7161] text-[18px] leading-[27px]">{name}</p>

        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-1">
            <span className="font-semibold text-white" style={{ fontSize: 44, lineHeight: '52px' }}>{price}</span>
            {price !== 'Custom' && (
              <span className="font-normal text-[#9ca3af] text-[16px] leading-6 ml-1">Fixed</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#9ca3af] text-[16px] leading-6">{timeline}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec7161] flex-shrink-0" />
            <span className="text-[#9ca3af] text-[16px] leading-6">1 Sprint cycle</span>
          </div>
        </div>

        <div className="flex flex-col gap-0">
          {features.map((f, i) => (
            <div
              key={f}
              className="flex items-center gap-[10px] py-[11px]"
              style={{ borderBottom: i < features.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={checkLight} alt="" width={18} height={18} className="flex-shrink-0" />
              <span className="text-[#d1d5db] text-[15px] leading-[22px]">{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Button
          href="/contact"
          variant={popular ? 'coral' : 'primary'}
          icon={<ArrowIcon />}
          className="w-full justify-center"
        >
          {cta}
        </Button>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="pb-[120px]" style={{ background: '#070b14' }}>
      <div className="container-page flex flex-col gap-[72px] items-center">

        {/* Header */}
        <div className="flex flex-col items-center text-center gap-5 max-w-[620px]">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
            <span className="text-[#ec7161] text-[14px] font-medium">Pricing</span>
          </div>
          <h2 className="font-bold text-white text-[44px] leading-[54px]">
            Pick a Starting Point, no Discovery Tax
          </h2>
          <p className="text-[#9ca3af] text-[16px] leading-6">
            Scope is published. Timeline is committed. If we quote outside your package, we&apos;ll tell you upfront, not mid-sprint.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {plans.map((plan) => <PlanCard key={plan.name} {...plan} />)}
        </div>

      </div>
    </section>
  );
}
