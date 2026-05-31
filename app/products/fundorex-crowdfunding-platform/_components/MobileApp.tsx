import Image from 'next/image';
import Link from 'next/link';
import { COLOR, LIGHT_COLOR } from './constants';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.xgenious.funderox';

const APP_FEATURES = [
  'Browse & donate to campaigns',
  'Create fundraising campaigns',
  'Real-time campaign progress',
  'Secure in-app payments',
  'Campaign updates & notifications',
  'Social sharing from the app',
];

function GooglePlayBadge() {
  return (
    <svg viewBox="0 0 135 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[38px] w-auto">
      <rect width="135" height="40" rx="5" fill="#0F1112" />
      <rect x="0.5" y="0.5" width="134" height="39" rx="4.5" stroke="white" strokeOpacity="0.2" />
      <text x="46" y="13" fill="white" fontSize="8" fontFamily="sans-serif" opacity="0.8">GET IT ON</text>
      <text x="46" y="27" fill="white" fontSize="13" fontFamily="sans-serif" fontWeight="bold">Google Play</text>
      <g transform="translate(10, 8)">
        <path d="M0.5 1.5C0.5 0.7 1 0.3 1.7 0.7L20.3 10.4C21 10.8 21 11.2 20.3 11.6L1.7 21.3C1 21.7 0.5 21.3 0.5 20.5V1.5Z" fill="white" />
        <path d="M0.5 1.5L11 11L0.5 20.5V1.5Z" fill="#00C853" />
        <path d="M11 11L20.3 10.4C21 10.8 21 11.2 20.3 11.6L11 11Z" fill="#F44336" />
        <path d="M0.5 1.5C0.5 0.7 1 0.3 1.7 0.7L11 11L0.5 1.5Z" fill="#FFEB3B" />
      </g>
    </svg>
  );
}

export default function MobileApp() {
  return (
    <section id="mobile-app" className="pb-20 lg:pb-[100px] overflow-hidden" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* 3-phone showcase */}
          <div className="relative flex items-end justify-center h-[480px] sm:h-[540px]">
            {/* Left phone */}
            <div className="absolute left-0 bottom-0 w-[170px] sm:w-[190px] rounded-[28px] overflow-hidden shadow-xl border-4 border-white z-10"
              style={{ transform: 'rotate(-6deg) translateY(24px)' }}>
              <Image
                src="/products/fundorex-mobile-3.jpg"
                alt="Fundorex app events list"
                width={190}
                height={380}
                className="w-full object-cover"
              />
            </div>

            {/* Center phone — tallest, front */}
            <div className="relative w-[200px] sm:w-[220px] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white z-20">
              <Image
                src="/products/fundorex-mobile-1.jpg"
                alt="Fundorex app home screen"
                width={220}
                height={460}
                className="w-full object-cover"
              />
            </div>

            {/* Right phone */}
            <div className="absolute right-0 bottom-0 w-[170px] sm:w-[190px] rounded-[28px] overflow-hidden shadow-xl border-4 border-white z-10"
              style={{ transform: 'rotate(6deg) translateY(24px)' }}>
              <Image
                src="/products/fundorex-mobile-2.jpg"
                alt="Fundorex app event detail"
                width={190}
                height={380}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Text side */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-5"
              style={{ background: LIGHT_COLOR, color: COLOR }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
              Mobile App Included
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-5">
              Fundraising in Your Pocket — Flutter Mobile App
            </h2>
            <p className="text-[15px] text-[#6b7280] leading-7 mb-7">
              The Fundorex mobile app lets donors discover campaigns, contribute securely, and follow updates — all from their phone. Available for Android and iOS.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8">
              {APP_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[13px] text-[#374151]">
                  <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill="#dcfce7" />
                    <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <Link href={PLAY_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
                <GooglePlayBadge />
              </Link>
              <p className="text-[11px] text-[#9ca3af]">Flutter · Android · iOS build available</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
