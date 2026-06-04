import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

const FEATURES = [
  {
    title: 'Effortless Service Booking for Clients',
    desc: 'Cart-based checkout to book multiple services in one transaction. Browse service details, select add-ons, choose preferred staff, pick a time slot, and confirm payment — all in one smooth flow.',
    img: '/products/prohandy-feature-clients.png',
    large: true,
  },
  {
    title: 'Job Listings and Service Management for Providers',
    desc: 'Providers browse available jobs on Google Maps, manage their service catalog, handle staff scheduling, respond to booking requests, and send custom offers to clients posting jobs.',
    img: '/products/prohandy-feature-providers.png',
    large: true,
  },
  {
    title: 'Full-Control Admin Panel',
    desc: 'Manage the entire marketplace — categories, providers, clients, taxes, payment gateways, and multilingual settings — from one Laravel admin panel.',
    bgColor: '#FFF0F3',
    img: '/products/prohandy-feature-admin.png',
  },
  {
    title: 'Google Maps for Location',
    desc: 'Clients see services on an interactive map. Providers browse available jobs by location. Map-based discovery makes finding nearby services effortless.',
    bgColor: '#FDF4EF',
    img: '/products/prohandy-feature-maps.png',
  },
  {
    title: 'Real-Time Live Chat',
    desc: 'Clients and providers communicate in real time throughout the service process. See provider activity status before reaching out.',
    bgColor: '#F0F9FF',
    img: '/products/prohandy-feature-chat.png',
  },
  {
    title: 'Push Notifications',
    desc: 'Real-time alerts for booking updates, payment confirmations, offer announcements, and support tickets keep all users informed at every step.',
    bgColor: '#FFF7ED',
    img: '/products/prohandy-feature-notifications.png',
  },
  {
    title: 'Job Posting and Hiring Flow',
    desc: 'Clients post jobs, receive offers with cover letters from providers, review details, and hire directly — a reverse marketplace model built for flexible service hiring.',
    bgColor: '#F5F3FF',
    img: '/products/prohandy-feature-jobs.png',
  },
  {
    title: 'WhatsApp Order Integration',
    desc: 'Optional WhatsApp Business API plugin. Clients book services, receive order notifications, chat with support, and view recent orders — all through WhatsApp.',
    bgColor: '#ECFDF5',
    img: '/products/prohandy-feature-whatsapp.png',
  },
  {
    title: 'Earning Details',
    desc: 'Full earnings breakdown across service fees, commission, and tax. View gross volume, admin revenue, and revenue sources split in one dashboard. Export data any time.',
    bgColor: '#EFF1FE',
    img: '/products/prohandy-feature-earnings.png',
  },
  {
    title: 'Provider Identity Verification',
    desc: 'Built-in identity verification workflow for providers. Admins review and approve provider credentials — giving clients confidence in who shows up at their door.',
    bgColor: '#FDF4EF',
    img: '/products/prohandy-feature-verification.png',
  },
  {
    title: 'Coupons and Provider Withdrawals',
    desc: 'Fixed or percentage coupons for promotions and referrals. Providers accumulate earnings in a wallet and submit withdrawal requests directly from the app.',
    bgColor: '#F5F3FF',
    img: '/products/prohandy-feature-withdrawals.png',
  },
  {
    title: 'Coupon and Offer Management',
    desc: 'Create fixed or percentage discount coupons for promotions, seasonal campaigns, and referrals. Providers can also publish limited-time service offers to attract more clients.',
    bgColor: '#FFF7ED',
    img: '/products/prohandy-feature-coupons.png',
  },
  {
    title: 'Built-In Support Ticket System',
    desc: 'Clients and providers raise support tickets directly from the app. Admins manage, reply to, and resolve tickets from the admin panel — no third-party helpdesk needed.',
    bgColor: '#F0F9FF',
    img: '/products/prohandy-feature-support.png',
  },
  {
    title: 'Reports and Analytics',
    desc: 'Track revenue, order volume, provider performance, and client activity across daily, weekly, and monthly views. Export data for deeper analysis.',
    bgColor: '#F0FDF4',
    img: '/products/prohandy-feature-reports.png',
  },
];

function FeatureCard({
  title,
  desc,
  img,
  large = false,
  bgColor,
}: {
  title: string;
  desc: string;
  img?: string;
  large?: boolean;
  bgColor?: string;
}) {
  const bg = bgColor ?? '#F5F6F8';

  return (
    <div
      className="rounded-2xl border border-[#E5E7EC] overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
      style={{ background: bg }}
    >
      <div
        className={`relative w-full overflow-hidden ${large ? 'h-[200px] sm:h-[260px] lg:h-[300px]' : 'h-[160px] sm:h-[190px] lg:h-[220px]'}`}
        style={{ padding: '16px 16px 0 16px' }}
      >
        {img ? (
          <>
            <Image
              src={img}
              alt={title}
              width={large ? 640 : 420}
              height={large ? 300 : 220}
              className="w-full h-full object-cover object-top rounded-t-xl"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[80px] pointer-events-none"
              style={{ background: `linear-gradient(to bottom, transparent, ${bg})` }}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-t-xl" style={{ background: bg }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke={COLOR} strokeWidth="1.5" />
              <path d="M3 15l5-5 4 4 3-3 6 6" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-4">
        <h3 className={`font-bold text-[#0F1112] mb-2 ${large ? 'text-[20px] sm:text-[24px] lg:text-[28px]' : 'text-[17px] sm:text-[20px] lg:text-[22px]'}`}>{title}</h3>
        <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#6b7280] leading-6">{desc}</p>
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
            From client bookings to provider management — Prohandy ships every module your on-demand service platform needs. No monthly fees, no hidden add-ons.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {topFeatures.map((f, i) => (
            <FeatureCard
              key={f.title}
              {...f}
              large
              bgColor={i === 0 ? '#ECFDF5' : '#EEF2FF'}
            />
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
