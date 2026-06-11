import { COLOR, LIGHT_COLOR } from './constants';

const FEATURES = [
  {
    title: 'Drag-and-Drop Page, Menu & Form Builders',
    desc: 'Qixer ships with a WordPress-style builder system — page builder with 30+ widgets, menu builder with mega menu support, form builder, and a widget builder. Non-technical operators customize the entire platform without touching a line of code.',
    large: true,
    bgColor: '#EEF2FF',
  },
  {
    title: 'Commission + Subscription Revenue — Both at Once',
    desc: 'Charge providers a percentage on every completed order, a recurring monthly or yearly subscription fee, or both simultaneously. Flexible subscription tiers let you offer Basic, Professional, and Enterprise plans to sellers — generating predictable recurring revenue alongside transaction income.',
    large: true,
    bgColor: '#FFF7ED',
  },
  {
    title: 'GPS Service Search & Discovery',
    desc: 'Buyers search by service type and location. Qixer shows nearby providers sorted by distance, rating, and availability — reducing drop-off by matching customers with the closest qualified seller.',
    bgColor: '#EFF6FF',
  },
  {
    title: 'Live Chat — Buyer to Seller',
    desc: 'Built-in real-time chat lets buyers and sellers communicate directly before and during a job. Removes friction, reduces cancellations, and increases booking completion rates.',
    bgColor: '#F0F9FF',
  },
  {
    title: 'Seller Payout & Withdrawal System',
    desc: 'Providers request withdrawals from their earnings balance; admins approve and process payouts. Full payout history for both sellers and admins — transparent, auditable, no manual spreadsheets.',
    bgColor: '#F5F3FF',
  },
  {
    title: 'Coupon and Discount System',
    desc: 'Create fixed-amount or percentage-based coupons for acquisition campaigns, seasonal promotions, and loyalty rewards. Admins and sellers manage coupons independently from the dashboard.',
    bgColor: '#ECFDF5',
  },
  {
    title: 'Advanced Admin Dashboard',
    desc: 'Monitor orders, earnings, active providers, and new signups from a single dashboard. Daily, weekly, and monthly breakdowns let you track growth and identify issues before they compound.',
    bgColor: '#EEF2FF',
  },
  {
    title: 'Buyer & Seller Flutter Apps',
    desc: 'Native iOS and Android apps for both sides of the marketplace. Buyers book on the go; sellers manage jobs, availability, and earnings from their phone — included with the Everything Bundle.',
    bgColor: '#F0FDF4',
  },
  {
    title: '20+ Payment Gateways',
    desc: 'PayPal, Stripe, Razorpay, Paytm, Flutterwave, and 15+ more gateways configured from the admin panel. Cover regional payment preferences without any custom development work.',
    bgColor: '#FEF3C7',
  },
  {
    title: 'Review and Rating System',
    desc: 'Buyers leave verified post-service reviews. Ratings surface high-quality providers and build marketplace trust — the social proof loop that drives repeat bookings without paid promotion.',
    bgColor: '#FEF2F2',
  },
  {
    title: 'Multi-Language + RTL Support',
    desc: 'Add and manage languages from the admin panel without code changes. Full RTL support for Arabic, Hebrew, and other right-to-left languages — the platform is ready for any regional market on day one.',
    bgColor: '#F0FDF4',
  },
  {
    title: 'Role-Based Admin Permissions',
    desc: 'Assign granular permissions to admin staff — control who can approve providers, process payouts, configure gateways, or manage subscriptions without exposing the entire admin panel.',
    bgColor: '#FFF0F3',
  },
  {
    title: 'Real-Time Push Notifications',
    desc: 'Automated alerts keep buyers and sellers in sync at every stage — booking confirmed, provider en route, job completed, payment received. Reduces support queries by keeping both sides informed without manual outreach.',
    bgColor: '#FEF3C7',
  },
  {
    title: 'Customized Service Orders',
    desc: 'Buyers can submit custom job requests with specific requirements, preferred timing, and notes. Sellers review and accept or decline — enabling flexible, bespoke services alongside standard catalog offerings.',
    bgColor: '#F0FDF4',
  },
  {
    title: 'Email Templates & Automation',
    desc: 'Pre-built, editable email templates for every platform event — booking confirmations, cancellations, payout receipts, and subscription reminders. Manage and customize all templates from the admin panel.',
    bgColor: '#F0F9FF',
  },
  {
    title: 'Job Posting Module',
    desc: 'Buyers post jobs and receive bids from qualified providers — a reverse-marketplace flow alongside direct booking. Expands your platform to cover custom, quote-based services without separate infrastructure.',
    bgColor: '#F5F3FF',
  },
  {
    title: 'Buyer Wallet System',
    desc: 'Buyers load funds into an in-platform wallet and pay for services instantly — no card entry at checkout. Supports refunds back to wallet, improving repeat purchase rates and reducing payment friction.',
    bgColor: '#ECFDF5',
  },
  {
    title: 'Buyer & Seller Order Reports',
    desc: 'Detailed order history and earnings reports for both sides — buyers track spending and service history, sellers monitor income and job completion rates. Full transparency builds trust and reduces support requests.',
    bgColor: '#EEF2FF',
  },
  {
    title: 'Provider Availability & Booking Slots',
    desc: 'Providers configure their available days and time slots; buyers book only during open windows. Eliminates double-bookings, reduces cancellations, and gives sellers full control over their schedule without manual coordination.',
    bgColor: '#FEF3C7',
  },
  {
    title: 'Service Area & Radius Control',
    desc: 'Providers define their coverage zone by city, zone, or custom radius. Buyers see only providers who actually serve their location — reducing unqualified inquiries and improving booking completion rates.',
    bgColor: '#F0F9FF',
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
