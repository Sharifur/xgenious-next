import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

const FEATURES = [
  {
    title: 'Vehicle-Specific Service Booking',
    desc: 'Customers select their car make, model, and year to get matched with the right services and mechanics. Tailored service recommendations eliminate guesswork and increase booking confidence.',
    large: true,
    bgColor: '#FEF2F2',
    image: '/products/gocar-vehicle-booking.png',
  },
  {
    title: 'Real-Time Order Tracking',
    desc: 'Customers track their service order status in real time — from acceptance through diagnostics, service completion, and payment. Push notifications keep customers informed at every stage without needing to call the garage.',
    large: true,
    bgColor: '#FFF7ED',
    image: '/products/gocar-order-tracking.png',
  },
  {
    title: 'Full-Control Admin Panel',
    desc: 'Manage services, categories, mechanics, customers, taxes, refunds, and branch locations from one Laravel admin panel. Role-based access control lets you assign responsibilities to staff.',
    bgColor: '#FEF2F2',
    image: '/products/gocar-admin-panel.png',
  },
  {
    title: 'Branch and Location Management',
    desc: 'Define serviceable areas and manage multiple branch locations. Customers see available service centers near them and book at a convenient location.',
    bgColor: '#F0FDF4',
    image: '/products/gocar-branch-management.png',
  },
  {
    title: 'Push and Email Notifications',
    desc: 'Real-time alerts for booking confirmations, order status updates, promotional offers, and payment receipts keep customers and mechanics engaged throughout the service lifecycle.',
    bgColor: '#EFF6FF',
    image: '/products/gocar-notifications.png',
  },
  {
    title: 'Discount and Promotion Tools',
    desc: 'Launch fixed-amount or percentage-based coupons for acquisition campaigns, seasonal promotions, and loyalty rewards. Admins create and manage promotions directly from the admin panel.',
    bgColor: '#F5F3FF',
    image: '/products/gocar-promotions.png',
  },
  {
    title: 'Refund Processing',
    desc: 'Handle customer refund requests efficiently from the admin panel. Full refund history gives customers and admins visibility over all processed returns.',
    bgColor: '#ECFDF5',
    image: '/products/gocar-refund.png',
  },
  {
    title: 'Role-Based Access Control',
    desc: 'Assign admin, manager, and mechanic roles with granular permissions. Control who can manage services, process refunds, or configure payment gateways without exposing the full admin.',
    bgColor: '#FFF0F3',
    image: '/products/gocar-role-access.png',
  },
  {
    title: '3 Flexible Service Delivery Modes',
    desc: 'Home service (mechanic visits the customer), car pickup (provider collects and returns the vehicle), and physical outlet visit. Customers choose at checkout — more options means fewer drop-offs.',
    bgColor: '#FEF2F2',
    image: '/products/gocar-service-delivery.png',
  },
  {
    title: 'Cart-Based Multi-Service Booking',
    desc: 'Customers add multiple services to a cart and complete them in one transaction. Oil change, tire rotation, and brake inspection — booked together, paid once.',
    bgColor: '#F0FDF4',
    image: '/products/gocar-cart.png',
  },
  {
    title: 'REST API with Postman Collection',
    desc: 'Full REST API documented with a Postman collection. Build custom integrations, connect third-party tools, or extend GoCar with your own modules without reverse engineering.',
    bgColor: '#F0F9FF',
    image: '/products/gocar-postman.png',
  },
  {
    title: 'Earnings and Revenue Reports',
    desc: 'Track revenue, order volume, and mechanic performance across daily, weekly, and monthly views. Full earnings breakdown by service category and location.',
    bgColor: '#EFF1FE',
    image: '/products/gocar-earnings.png',
  },
  {
    title: 'Social Login Support',
    desc: 'Customers and mechanics log in with email, phone OTP, or Google and Facebook sign-in. Reduced signup friction increases platform onboarding rates.',
    bgColor: '#FDF4EF',
    image: '/products/gocar-social-login.png',
  },
  {
    title: 'Multi-Language Support',
    desc: 'GoCar ships with a built-in translation layer. Add or switch languages from the admin panel without touching code — making the platform ready for any market from day one.',
    bgColor: '#EFF6FF',
    image: '/products/gocar-multilang.png',
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
  desc: string;
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
        {image ? (
          <>
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-16 z-10 pointer-events-none"
              style={{ background: `linear-gradient(to bottom, transparent, ${bg})` }}
            />
          </>
        ) : (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
            <path d="M19 17H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z"/>
            <path d="M7 17v2M17 17v2M9 11l2 2 4-4"/>
          </svg>
        )}
      </div>
      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-2">
        <h3 className={`font-bold text-[#0F1112] mb-2 ${large ? 'text-[20px] sm:text-[24px]' : 'text-[17px] sm:text-[20px]'}`}>{title}</h3>
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
            Everything You Need to Run a Car Service Marketplace
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            From customer bookings to mechanic management — GoCar ships every module your on-demand car service platform needs. No monthly fees, no hidden add-ons.
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
