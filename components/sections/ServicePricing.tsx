import Link from 'next/link';
import SectionBadge from '@/components/ui/SectionBadge';
import Button, { ArrowIcon } from '@/components/ui/Button';

export type PricingPlan = {
  name: string;
  price: string;
  timeline: string;
  bestFor: string;
  features: string[];
  cta: string;
  ctaHref: string;
  dark?: boolean;
  popular?: boolean;
};

type Props = {
  plans: PricingPlan[];
  heading?: string;
  subhead?: string;
  id?: string;
  theme?: 'light' | 'dark';
  crossLink?: { text: string; href: string; label: string };
};

function PlanCard({ name, price, timeline, bestFor, features, cta, ctaHref, dark = false, popular = false, pageDark = false }: PricingPlan & { pageDark?: boolean }) {
  const isLightOnDark = pageDark && !dark;
  const borderColor  = (dark || isLightOnDark) ? 'rgba(255,255,255,0.1)' : '#e7e7e7';
  const subtextColor = (dark || isLightOnDark) ? '#9ca3af' : '#6b7280';
  const featureColor = (dark || isLightOnDark) ? '#d1d5db' : '#2f2f2f';
  const checkIcon    = (dark || isLightOnDark) ? '/images/web-app-dev/check-light.svg' : '/images/web-app-dev/check-dark.svg';
  const cardBg       = dark ? '#050608' : isLightOnDark ? '#111111' : '#fff';
  const cardBorder   = (dark || isLightOnDark) ? '1px solid rgba(255,255,255,0.07)' : 'none';

  return (
    <div
      className="relative flex flex-col p-6 rounded-[12px] h-full"
      style={{ background: cardBg, border: cardBorder }}
    >
      {popular && (
        <div
          className="absolute top-5 right-5 px-3 py-1 rounded-full font-bold text-white text-[11px] leading-none"
          style={{ background: '#ec7161', letterSpacing: 0.45 }}
        >
          Most popular
        </div>
      )}

      <div className="flex flex-col gap-5 flex-1">
        <p className="font-medium" style={{ fontSize: 18, lineHeight: '27px', color: '#ec7161' }}>
          {name}
        </p>

        <div className="flex flex-col gap-0.5">
          <span className="font-normal text-[13px]" style={{ color: subtextColor }}>Start from</span>
          <span className="font-semibold" style={{ fontSize: 36, lineHeight: '44px', color: (dark || isLightOnDark) ? '#fff' : '#0f1112' }}>
            {price}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/web-app-dev/dot.svg" alt="" width={6} height={6} />
          <span className="font-normal" style={{ fontSize: 15, lineHeight: '22px', color: subtextColor }}>{timeline}</span>
        </div>

        <p className="text-[13px] leading-[20px]" style={{ color: subtextColor }}>
          <span className="font-medium" style={{ color: dark ? '#9ca3af' : '#6b7280' }}>Best for: </span>
          {bestFor}
        </p>

        <div className="flex flex-col gap-1" style={{ borderTop: `1px solid ${borderColor}`, paddingTop: 16 }}>
          {features.map((f, i) => (
            <div
              key={f}
              className="flex items-start gap-[10px] py-2"
              style={{ borderBottom: i < features.length - 1 ? `1px solid ${borderColor}` : 'none' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={checkIcon} alt="" width={18} height={18} className="flex-shrink-0 mt-0.5" />
              <span className="font-normal text-[14px] leading-[21px]" style={{ color: featureColor }}>
                {f}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Button
          href={ctaHref}
          variant={dark ? 'coral' : isLightOnDark ? 'outline' : 'primary'}
          icon={<ArrowIcon />}
          className="w-full justify-center"
        >
          {cta}
        </Button>
      </div>
    </div>
  );
}

export default function ServicePricing({
  plans,
  heading = 'Pick a starting point, no discovery tax',
  subhead = "Scope is published. Price is fixed. The only variable is how fast you want to move.",
  id = 'pricing',
  theme = 'light',
  crossLink,
}: Props) {
  const isDark = theme === 'dark';
  return (
    <section id={id} className="py-14 sm:py-20 lg:py-[120px]" style={{ background: isDark ? '#070b14' : '#f5f6f8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-10 sm:gap-14 lg:gap-[72px] items-center">
        <div className="flex flex-col items-center gap-4 text-center max-w-[616px]">
          <SectionBadge variant={isDark ? 'dark' : undefined}>Pricing</SectionBadge>
          <div className="flex flex-col gap-4 items-center">
            <h2 style={{ color: isDark ? '#fff' : '#0f1112' }} className="font-semibold text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px]">
              {heading}
            </h2>
            <p style={{ color: isDark ? '#9ca3af' : '#484848', fontSize: 16, lineHeight: '24px', maxWidth: 568 }} className="font-normal">
              {subhead}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 w-full items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} pageDark={isDark} />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            'All prices are fixed',
            'Scope agreed in writing before work starts',
            'No hourly billing',
            'No mid-sprint surprises',
          ].map((point) => (
            <div key={point} className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="#ec7161" strokeWidth="1.2" />
                <path d="M5 8l2 2 4-4" stroke="#ec7161" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[14px]" style={{ color: isDark ? '#9ca3af' : '#484848' }}>{point}</span>
            </div>
          ))}
        </div>

        {crossLink && (
          <p className="text-[14px]" style={{ color: isDark ? '#6b7280' : '#6b7280' }}>
            {crossLink.text}{' '}
            <Link
              href={crossLink.href}
              className="underline underline-offset-2 hover:opacity-80 transition-opacity"
              style={{ color: '#3b82f6' }}
            >
              {crossLink.label} →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
