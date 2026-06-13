import Link from 'next/link';
import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

const CARDS = [
  {
    title: 'Buyer App',
    desc: 'Browse services, book instantly, track provider in real time, pay with 20+ gateways, leave reviews, and manage bookings — all from a native Flutter app on iOS and Android.',
    bgColor: LIGHT_COLOR,
    image: '/products/qixer-flutter-app.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    title: 'Seller / Provider App',
    desc: 'Accept or reject jobs, manage availability, track earnings, chat with buyers, and receive instant push notifications for every new booking — on iOS and Android.',
    bgColor: '#F0F9FF',
    image: '/products/qixer-provider-app.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: 'Admin Dashboard',
    desc: 'Full control from the web — approve providers, manage commissions, process payouts, configure subscription plans, and monitor marketplace performance in real time.',
    bgColor: '#F0FDF4',
    image: '/products/qixer-dashboard-preview.png',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
];

const APP_FEATURES = [
  { label: 'Service browsing with GPS location' },
  { label: 'Instant booking and scheduling' },
  { label: 'Real-time provider tracking' },
  { label: 'In-app buyer–seller live chat' },
  { label: 'Cart with multiple services' },
  { label: 'Wallet and balance management' },
  { label: 'Coupon and promo code at checkout' },
  { label: 'Post-service review and rating' },
  { label: 'Push notifications for all events' },
  { label: 'Social login — Google, Facebook' },
  { label: 'OTP phone verification' },
  { label: '20+ payment gateways' },
  { label: 'Seller job accept / reject flow' },
  { label: 'Seller earnings dashboard' },
  { label: 'Seller availability management' },
  { label: 'Seller payout request' },
  { label: 'Light and dark mode' },
  { label: 'Multi-language support' },
  { label: 'iOS and Android — Flutter 3.x' },
];

export default function CustomerApp() {
  return (
    <section id="mobile-apps" className="py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Buyer & Seller Flutter Apps
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Two Apps, One Platform — Buyer and Seller
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Qixer ships with a buyer app and a seller app for iOS and Android. Customers book services in seconds; providers manage jobs, earnings, and availability — all from their phones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-[#E5E7EC] overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              style={{ background: card.bgColor }}
            >
              <div className="p-5 pb-0">
              <div className="relative w-full h-[280px] overflow-hidden rounded-xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
              </div>
              <div className="p-6 flex flex-col gap-2">
                <h3 className="text-[18px] font-bold text-[#0F1112]">{card.title}</h3>
                <p className="text-[14px] text-[#6b7280] leading-6">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row gap-10 items-start"
          style={{ background: '#0F1112' }}
        >
          <div className="flex-1 min-w-0">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-5"
              style={{ background: `${COLOR}20`, color: '#a5b4fc', border: `1px solid ${COLOR}40` }}
            >
              Full App Feature Set
            </div>
            <h3 className="text-[22px] sm:text-[28px] font-bold text-white mb-6 leading-tight">
              Everything Buyers and Sellers Need in One Platform
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
              {APP_FEATURES.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <svg className="flex-shrink-0" width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill={`${COLOR}30`} />
                    <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[13px] text-white/75">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 w-full lg:w-[260px] flex flex-col gap-5">
            <div
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <p className="text-[13px] font-bold uppercase tracking-widest" style={{ color: `${COLOR}cc` }}>
                App Availability
              </p>

              <Link
                href="https://play.google.com/store/apps/details?id=com.xgenious.qixer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all hover:opacity-80"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#1a1a2e' }}>
                  <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 428.13 48 83.87A20 20 0 0 1 76.43 66L300 192 76.43 446A20 20 0 0 1 48 428.13Z" fill="#32BBFF"/>
                    <path d="M300 192 76.43 66A20 20 0 0 1 104 48.13L372 200Z" fill="#32BBFF"/>
                    <path d="M372 200 104 352A20 20 0 0 1 76.43 334L300 192Z" fill="#00AAFF"/>
                    <path d="M76.43 446 300 192 372 264Z" fill="#00AAFF"/>
                    <path d="M372 200 464 248a20 20 0 0 1 0 35.46L372 312 300 256Z" fill="#FFBC00"/>
                    <path d="M372 312 104 464a20 20 0 0 1-27.57-18.13L300 256Z" fill="#00F076"/>
                    <path d="M372 200 300 256 76.43 66A20 20 0 0 1 104 48.13Z" fill="#FF3A44"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold text-white">Buyer App</p>
                  <p className="text-[10px] text-white/40">Google Play Store</p>
                </div>
                <svg className="ml-auto flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.xgenious.qixer_seller"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all hover:opacity-80"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#1a1a2e' }}>
                  <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 428.13 48 83.87A20 20 0 0 1 76.43 66L300 192 76.43 446A20 20 0 0 1 48 428.13Z" fill="#32BBFF"/>
                    <path d="M300 192 76.43 66A20 20 0 0 1 104 48.13L372 200Z" fill="#32BBFF"/>
                    <path d="M372 200 104 352A20 20 0 0 1 76.43 334L300 192Z" fill="#00AAFF"/>
                    <path d="M76.43 446 300 192 372 264Z" fill="#00AAFF"/>
                    <path d="M372 200 464 248a20 20 0 0 1 0 35.46L372 312 300 256Z" fill="#FFBC00"/>
                    <path d="M372 312 104 464a20 20 0 0 1-27.57-18.13L300 256Z" fill="#00F076"/>
                    <path d="M372 200 300 256 76.43 66A20 20 0 0 1 104 48.13Z" fill="#FF3A44"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold text-white">Provider App</p>
                  <p className="text-[10px] text-white/40">Google Play Store</p>
                </div>
                <svg className="ml-auto flex-shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <div
                className="rounded-xl px-3 py-2 flex items-start gap-2"
                style={{ background: 'rgba(99,105,241,0.15)', border: '1px solid rgba(99,105,241,0.3)' }}
              >
                <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="rgba(99,105,241,0.3)"/>
                  <path d="M10 6v4M10 13v1" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p className="text-[11px] leading-4" style={{ color: '#a5b4fc' }}>
                  Flutter apps only available with <strong>Everything Bundle</strong> or <strong>Exclusive License</strong>
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <p className="text-[13px] font-bold uppercase tracking-widest" style={{ color: `${COLOR}cc` }}>
                Watch App Demo
              </p>
              <p className="text-[12px] text-white/50 leading-5">Full mobile app exploration — all screens and booking flows.</p>
              <a
                href="https://www.youtube.com/watch?v=nW_pNURWcLE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-semibold text-[13px] rounded-xl py-2.5 transition-all hover:opacity-90 text-white"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff0000">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
