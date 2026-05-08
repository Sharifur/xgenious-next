const features = [
  'Custom UI/UX Design',
  'iOS & Android Native Build',
  'Backend API Integration',
  'Push Notifications',
  'App Store Submission',
  '1 Month Post-Launch Support',
];

type PlanCardProps = {
  name: string;
  price: string;
  timeline: string;
  dark?: boolean;
  popular?: boolean;
  ctaLabel: string;
};

function PlanCard({ name, price, timeline, dark, popular, ctaLabel }: PlanCardProps) {
  const bg = dark ? '#181818' : 'white';
  const textPrimary = dark ? 'white' : '#181818';
  const textSecondary = dark ? '#bababa' : '#484848';
  const dividerColor = dark ? '#2e2e2e' : '#e8e8e8';
  const checkIcon = dark ? '/images/app-dev/pricing-check-dark.svg' : '/images/app-dev/pricing-check-light.svg';

  return (
    <div
      className="relative flex flex-col rounded-[12px] overflow-hidden"
      style={{ background: bg, border: dark ? 'none' : '1px solid #e8e8e8', width: 424, height: 614, padding: 24 }}
    >
      {popular && (
        <div
          className="absolute top-6 right-6 inline-flex items-center justify-center px-3 py-1 rounded-[99px]"
          style={{ background: '#ec7161' }}
        >
          <span className="font-medium text-white" style={{ fontSize: 12, lineHeight: '18px' }}>
            Most popular
          </span>
        </div>
      )}

      <div className="flex flex-col gap-4">
        <p className="font-medium" style={{ fontSize: 16, lineHeight: '24px', color: textSecondary }}>
          {name}
        </p>
        <p className="font-bold" style={{ fontSize: 48, lineHeight: '56px', color: textPrimary }}>
          {price}
        </p>
        <p className="font-normal" style={{ fontSize: 14, lineHeight: '21px', color: textSecondary }}>
          {timeline}
        </p>
      </div>

      <div style={{ height: 1, background: dividerColor, margin: '24px 0' }} />

      <div className="flex flex-col gap-4 flex-1">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={checkIcon} alt="" width={20} height={20} />
            <span className="font-normal" style={{ fontSize: 16, lineHeight: '24px', color: textSecondary }}>
              {f}
            </span>
          </div>
        ))}
      </div>

      <button
        className="w-full flex items-center justify-center rounded-[30px] py-4 font-semibold transition-all duration-200 hover:-translate-y-0.5"
        style={{
          background: dark ? '#ec7161' : '#181818',
          color: 'white',
          fontSize: 16,
          lineHeight: '24px',
          marginTop: 24,
        }}
      >
        {ctaLabel}
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="py-[120px]" style={{ background: '#f5f6f8' }}>
      <div className="container-page flex flex-col gap-[72px]">
        <div className="flex flex-col gap-4 items-center text-center">
          <div
            className="inline-flex items-center justify-center px-4 py-[6px] rounded-[165px]"
            style={{ background: 'rgba(242,107,78,0.12)' }}
          >
            <span className="font-normal text-[#ec7161]" style={{ fontSize: 16, lineHeight: '24px' }}>
              Pricing
            </span>
          </div>
          <h2 className="font-semibold text-[#0f1112]" style={{ fontSize: 44, lineHeight: '52px', maxWidth: 712 }}>
            Pick a starting point, no discovery tax
          </h2>
          <p className="font-normal text-[#484848]" style={{ fontSize: 16, lineHeight: '24px', maxWidth: 580 }}>
            Scope is published. Price is fixed. The only variable is how fast you want to move.
          </p>
        </div>

        <div className="flex items-end justify-center gap-6">
          <PlanCard
            name="MVP Starter"
            price="$15k Fixed"
            timeline="8 Weeks · 1 Sprint cycle"
            ctaLabel="Start with Starter"
          />
          <PlanCard
            name="MVP Pro"
            price="$28k Fixed"
            timeline="12 Weeks · 2 Sprint cycles"
            dark
            popular
            ctaLabel="Start with Pro"
          />
          <PlanCard
            name="MVP Launch"
            price="$45k Fixed"
            timeline="16 Weeks · 3 Sprint cycles"
            ctaLabel="Start with Launch"
          />
        </div>
      </div>
    </section>
  );
}
