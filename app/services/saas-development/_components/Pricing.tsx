import Link from 'next/link';

const features = [
  'Single-tenant SaaS, 1 user role',
  'Stripe payments + 1 subscription plan',
  'Admin dashboard (basic)',
  'AWS hosting (first 12 months)',
  'GDPR DPA + privacy policy',
  '30-day post-launch support',
];

const plans = [
  { name: 'MVP Starter', dark: false, popular: false, cta: 'Start with Starter', ctaDark: true },
  { name: 'MVP Pro', dark: true, popular: true, cta: 'Start with Pro', ctaDark: false },
  { name: 'MVP Launch', dark: false, popular: false, cta: 'Start with Launch', ctaDark: true },
];

function PlanCard({ name, dark, popular, cta, ctaDark }: typeof plans[0]) {
  const borderColor = dark ? 'rgba(255,255,255,0.1)' : '#e7e7e7';
  const subtextColor = dark ? '#bababa' : '#2f2f2f';
  const featureColor = dark ? '#bababa' : '#2f2f2f';
  const checkIcon = dark ? '/images/web-app-dev/check-light.svg' : '/images/web-app-dev/check-dark.svg';

  return (
    <div
      className="relative flex flex-col p-6 rounded-[12px] h-[614px]"
      style={{ background: dark ? '#181818' : '#fff' }}
    >
      {popular && (
        <div
          className="absolute top-0 right-6 px-[10.2px] py-[4px] rounded-[999px] font-bold text-white"
          style={{ background: '#ec7161', fontSize: 11.2, lineHeight: '16.83px', letterSpacing: 0.45 }}
        >
          Most popular
        </div>
      )}

      <div className="flex flex-col gap-6 flex-1">
        <p className="font-medium" style={{ fontSize: 18, lineHeight: '27px', color: '#ec7161' }}>
          {name}
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-1 whitespace-nowrap">
            <span className="font-semibold" style={{ fontSize: 44, lineHeight: '52px', color: dark ? '#fff' : '#0f1112' }}>
              $15k
            </span>
            <span className="font-normal ml-1" style={{ fontSize: 16, lineHeight: '24px', color: subtextColor }}>
              Fixed
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-normal" style={{ fontSize: 16, lineHeight: '24px', color: subtextColor }}>8 Weeks</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/web-app-dev/dot.svg" alt="" width={6} height={6} />
            <span className="font-normal" style={{ fontSize: 16, lineHeight: '24px', color: subtextColor }}>1 Sprint cycle</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {features.map((f, i) => (
            <div
              key={f}
              className="flex items-center gap-[10px] pt-2 pb-[9px]"
              style={{ borderBottom: i < features.length - 1 ? `1px solid ${borderColor}` : 'none' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={checkIcon} alt="" width={20} height={20} className="flex-shrink-0" />
              <span className="font-normal" style={{ fontSize: 18, lineHeight: '27px', color: featureColor }}>
                {f}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 font-semibold text-white rounded-[30px] px-8 py-4 w-full text-[16px] leading-6 transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: ctaDark ? '#181818' : '#ec7161' }}
        >
          {cta}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/web-app-dev/arrow-white.svg" alt="" width={24} height={24} />
        </Link>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-[120px] bg-[#f5f6f8]">
      <div className="container-page flex flex-col gap-[72px] items-center">
        <div className="flex flex-col items-center gap-4 text-center max-w-[616px]">
          <div
            className="inline-flex items-center px-4 py-[6px] rounded-[165px]"
            style={{ background: 'rgba(242,107,78,0.12)' }}
          >
            <span className="text-[#ec7161] font-normal" style={{ fontSize: 16, lineHeight: '24px' }}>
              Pricing
            </span>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-[#0f1112] font-semibold" style={{ fontSize: 44, lineHeight: '52px' }}>
              Pick a starting point, no discovery tax
            </h2>
            <p className="text-[#484848] font-normal" style={{ fontSize: 16, lineHeight: '24px', maxWidth: 568 }}>
              Scope is published. Timeline is committed. If we quote outside your package, we&apos;ll tell you upfront, not mid-sprint.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
