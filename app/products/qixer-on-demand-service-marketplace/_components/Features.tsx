import { COLOR, LIGHT_COLOR } from './constants';

const FEATURES = [
  {
    title: 'Drag-and-Drop Page, Menu & Form Builders',
    desc: 'Qixer ships with a WordPress-style builder system — page builder with 30+ widgets, menu builder with mega menu support, form builder with multiple field types, and a widget builder. Non-technical operators run the full platform without touching code.',
    large: true,
    bgColor: '#EEF2FF',
  },
  {
    title: 'Dual Revenue Model — Commission + Subscription',
    desc: 'Charge service providers a percentage of every completed order, a recurring monthly or yearly subscription fee, or both simultaneously. Switch revenue models as your marketplace grows without rebuilding anything.',
    large: true,
    bgColor: '#FFF7ED',
  },
  {
    title: 'Multi-Vendor Service Marketplace',
    bgColor: '#FEF2F2',
  },
  {
    title: 'Buyer & Seller Flutter Apps',
    bgColor: '#F0FDF4',
  },
  {
    title: 'GPS-Based Service Discovery',
    bgColor: '#EFF6FF',
  },
  {
    title: 'Seller Payout & Withdrawal System',
    bgColor: '#F5F3FF',
  },
  {
    title: 'Coupon and Promotion Tools',
    bgColor: '#ECFDF5',
  },
  {
    title: 'Seller Subscription Module',
    bgColor: '#FFF0F3',
  },
  {
    title: 'Role-Based Admin Permissions',
    bgColor: '#EFF1FE',
  },
  {
    title: 'Live Chat — Buyer to Seller',
    bgColor: '#F0F9FF',
  },
  {
    title: '20+ Payment Gateways',
    bgColor: '#FEF3C7',
  },
  {
    title: 'Review and Rating System',
    bgColor: '#FEF2F2',
  },
  {
    title: 'Blog + SEO Module',
    bgColor: '#F0FDF4',
  },
  {
    title: 'Social Login + reCAPTCHA v3',
    bgColor: '#FDF4EF',
  },
];

function FeatureCard({
  title,
  desc,
  large = false,
  bgColor,
  image,
}: {
  title: string;
  desc?: string;
  large?: boolean;
  bgColor?: string;
  image?: string;
}) {
  const bg = bgColor ?? '#F5F6F8';

  return (
    <div
      className="rounded-2xl border border-[#E5E7EC] overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
      style={{ background: bg }}
    >
      <div
        className={`relative w-full overflow-hidden flex items-center justify-center ${large ? 'h-[200px] sm:h-[260px]' : 'h-[160px] sm:h-[200px]'}`}
        style={{
          padding: image ? '12px' : '16px',
          background: 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </div>
      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-2">
        <h3 className={`font-bold text-[#0F1112] mb-2 ${large ? 'text-[20px] sm:text-[24px]' : 'text-[17px] sm:text-[20px]'}`}>{title}</h3>
        {desc && <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#6b7280] leading-6">{desc}</p>}
      </div>
    </div>
  );
}

export default function Features() {
  const topFeatures = FEATURES.slice(0, 2);
  const gridFeatures = FEATURES.slice(2);

  return (
    <section id="features" className="py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Platform Features
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Everything You Need to Run a Service Marketplace
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            From buyer bookings to seller management — Qixer ships every module your on-demand service marketplace needs. No monthly fees, no hidden add-ons.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {topFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} large />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

      </div>
    </section>
  );
}
