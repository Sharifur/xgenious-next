import Link from 'next/link';
import { COLOR, LIGHT_COLOR, PLAY_STORE_URL } from './constants';

const BOOKING_MODES = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Home Service',
    desc: 'Mechanic comes to the customer\'s location. No towing, no waiting at a garage. Customer selects address from their saved address book or drops a pin on the map.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Car Pickup',
    desc: 'Service provider collects the car from the customer\'s location, services it at the outlet, and returns it. Customer tracks status in real time throughout the process.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Physical Outlet Visit',
    desc: 'Customer selects a branch outlet and visits directly. Outlet selection is shown during checkout so the customer picks the most convenient location.',
  },
];

const APP_FEATURES = [
  { label: 'Car model selection for tailored services' },
  { label: 'Cart — book multiple services in one order' },
  { label: 'Dynamic pricing based on vehicle type' },
  { label: 'Real-time order status tracking' },
  { label: 'Assigned mechanic visibility' },
  { label: 'Invoice download after service' },
  { label: 'Favorites and wishlist' },
  { label: 'Support ticket with in-ticket chat' },
  { label: 'Post-service review submission' },
  { label: 'Multiple saved addresses with map' },
  { label: 'Push notifications for every status' },
  { label: 'Light and dark mode' },
  { label: 'Social login — Google, Facebook, Apple' },
  { label: 'Phone OTP and email signup' },
  { label: '19+ payment gateways at checkout' },
  { label: 'Offer and promotion notifications' },
  { label: 'Outlet selection during checkout' },
  { label: 'Multi-language support' },
  { label: 'Advanced service filtering and search' },
];

export default function CustomerApp() {
  return (
    <section id="mobile-app" className="py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Customer Flutter App
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Three Ways to Get Your Car Serviced
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            GoCar&apos;s customer app offers three distinct service delivery modes — a flexibility that drives higher booking rates and covers every customer preference.
          </p>
        </div>

        {/* 3 Booking Modes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {BOOKING_MODES.map((mode, i) => (
            <div
              key={mode.title}
              className="rounded-2xl border border-[#E5E7EC] p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              style={{ background: i === 0 ? LIGHT_COLOR : i === 1 ? '#F0F9FF' : '#F0FDF4' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: '#fff', color: COLOR, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
              >
                {mode.icon}
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-[#0F1112] mb-2">{mode.title}</h3>
                <p className="text-[14px] text-[#6b7280] leading-6">{mode.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* App features grid + CTA */}
        <div
          className="rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row gap-10 items-start"
          style={{ background: '#0F1112' }}
        >
          {/* Left — features */}
          <div className="flex-1 min-w-0">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-5"
              style={{ background: `${COLOR}20`, color: '#f87171', border: `1px solid ${COLOR}40` }}
            >
              Full App Feature Set
            </div>
            <h3 className="text-[22px] sm:text-[28px] font-bold text-white mb-6 leading-tight">
              Everything a Car Owner Needs in One App
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

          {/* Right — CTA */}
          <div className="flex-shrink-0 w-full lg:w-[260px] flex flex-col gap-5">
            <div
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <p className="text-[13px] font-bold uppercase tracking-widest" style={{ color: `${COLOR}cc` }}>
                App Availability
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#1a1a2e' }}>
                  <svg width="22" height="22" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M48 428.13 48 83.87A20 20 0 0 1 76.43 66L300 192 76.43 446A20 20 0 0 1 48 428.13Z" fill="#32BBFF"/>
                    <path d="M300 192 76.43 66A20 20 0 0 1 104 48.13L372 200Z" fill="#32BBFF"/>
                    <path d="M372 200 104 352A20 20 0 0 1 76.43 334L300 192Z" fill="#00AAFF"/>
                    <path d="M76.43 446 300 192 372 264Z" fill="#00AAFF"/>
                    <path d="M372 200 464 248a20 20 0 0 1 0 35.46L372 312 300 256Z" fill="#FFBC00"/>
                    <path d="M372 312 104 464a20 20 0 0 1-27.57-18.13L300 256Z" fill="#00F076"/>
                    <path d="M372 200 300 256 76.43 66A20 20 0 0 1 104 48.13Z" fill="#FF3A44"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-white">Google Play Store</p>
                  <p className="text-[11px] text-white/40">Android · Flutter 3.x</p>
                </div>
              </div>

              <div
                className="rounded-xl px-3 py-2 flex items-start gap-2"
                style={{ background: 'rgba(220,38,38,0.15)', border: '1px solid rgba(220,38,38,0.3)' }}
              >
                <svg className="flex-shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="rgba(220,38,38,0.3)"/>
                  <path d="M10 6v4M10 13v1" stroke="#f87171" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <p className="text-[11px] leading-4" style={{ color: '#f87171' }}>
                  Flutter app only available with <strong>Everything Bundle</strong> or <strong>Exclusive License</strong>
                </p>
              </div>

              <Link
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white font-semibold text-[13px] rounded-xl py-2.5 transition-all hover:opacity-90"
                style={{ background: COLOR }}
              >
                Download Demo App
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
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
                href="https://www.youtube.com/watch?v=xxlUfgti-lE"
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
