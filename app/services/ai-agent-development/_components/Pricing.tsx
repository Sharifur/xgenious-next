import SectionBadge from '@/components/ui/SectionBadge';
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
  { name: 'Agent Starter', dark: false, popular: false, price: '$8k', timeline: '4 Weeks', cta: 'Start with Starter', ctaDark: true },
  { name: 'Agent Pro', dark: true, popular: true, price: '$18k', timeline: '8 Weeks', cta: 'Start with Pro', ctaDark: false },
  { name: 'Agent Enterprise', dark: false, popular: false, price: 'Custom', timeline: '12+ Weeks', cta: 'Talk to Us', ctaDark: true },
];

const checkDark = '/images/web-app-dev/check-dark.svg';
const checkLight = '/images/web-app-dev/check-light.svg';
const dot = '/images/web-app-dev/dot.svg';

function PlanCard({ name, dark, popular, price, timeline, cta, ctaDark }: typeof plans[0]) {
  const borderColor = dark ? 'rgba(255,255,255,0.1)' : '#e7e7e7';
  const subtextColor = dark ? '#bababa' : '#2f2f2f';
  const featureColor = dark ? '#bababa' : '#2f2f2f';
  const checkIcon = dark ? checkLight : checkDark;

  return (
    <div
      className="relative flex flex-col p-6 rounded-[12px]"
      style={{ background: dark ? '#181818' : '#fff' }}
    >
      {popular && (
        <div className="absolute top-5 right-5 px-3 py-1 rounded-full font-bold text-white text-[11px] leading-none" style={{ background: '#ec7161', letterSpacing: 0.45 }}>
          Most popular
        </div>
      )}
      <div className="flex flex-col gap-6 flex-1">
        <p className="font-medium text-[#ec7161]" style={{ fontSize: 18, lineHeight: '27px' }}>{name}</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-1">
            <span className="font-semibold" style={{ fontSize: 44, lineHeight: '52px', color: dark ? '#fff' : '#0f1112' }}>{price}</span>
            {price !== 'Custom' && <span className="font-normal ml-1" style={{ fontSize: 16, lineHeight: '24px', color: subtextColor }}>Fixed</span>}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-normal" style={{ fontSize: 16, lineHeight: '24px', color: subtextColor }}>{timeline}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={dot} alt="" width={6} height={6} />
            <span className="font-normal" style={{ fontSize: 16, lineHeight: '24px', color: subtextColor }}>1 Sprint cycle</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {features.map((f, i) => (
            <div key={f} className="flex items-center gap-[10px] pt-2 pb-[9px]" style={{ borderBottom: i < features.length - 1 ? `1px solid ${borderColor}` : 'none' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={checkIcon} alt="" width={20} height={20} className="flex-shrink-0" />
              <span className="font-normal" style={{ fontSize: 18, lineHeight: '27px', color: featureColor }}>{f}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <Button href="/contact" variant={ctaDark ? 'primary' : 'coral'} icon={<ArrowIcon />} className="w-full justify-center">{cta}</Button>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-[120px] bg-[#f5f6f8]">
      <div className="container-page flex flex-col gap-[72px] items-center">
        <div className="flex flex-col items-center gap-4 text-center max-w-[616px]">
          <SectionBadge>Pricing</SectionBadge>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-[#0f1112] font-semibold" style={{ fontSize: 44, lineHeight: '52px' }}>
              Fixed scope. No surprise invoices.
            </h2>
            <p className="text-[#484848] font-normal" style={{ fontSize: 16, lineHeight: '24px', maxWidth: 568 }}>
              Every package includes scoping, build, testing, and deployment. If your requirements exceed the package, we quote before writing a line of code.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {plans.map((plan) => <PlanCard key={plan.name} {...plan} />)}
        </div>
      </div>
    </section>
  );
}
