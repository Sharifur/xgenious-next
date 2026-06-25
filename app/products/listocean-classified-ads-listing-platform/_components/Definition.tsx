import { COLOR, COLOR_DARK, LIGHT_COLOR, DEMO_URL } from './constants';
import Link from 'next/link';

const PILLARS = [
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    label: 'Location-aware listings',
    detail: 'Google Maps built-in — buyers filter deals by city, neighbourhood, or radius from day one.',
  },
  {
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
    label: 'Live chat on every listing',
    detail: 'Buyers message sellers directly on the ad page. No phone numbers, no external apps.',
  },
  {
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    label: 'Multiple revenue streams',
    detail: 'Charge for featured placements, sell memberships, run ad banners — monetise from day one.',
  },
  {
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    label: 'Full source code — yours',
    detail: 'Buy once, own forever. No platform lock-in, no revenue cut, no recurring licence fees.',
  },
];

export default function Definition() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <div
              className="inline-flex items-center gap-2 self-start rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest"
              style={{ background: `${COLOR}15`, color: COLOR }}
            >
              What is ListOcean?
            </div>

            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight">
              Your own classified marketplace —{' '}
              <span style={{ color: COLOR_DARK }}>zero platform fees, zero commission.</span>
            </h2>

            <p className="text-[#374151] text-[16px] leading-8">
              <strong>ListOcean is a self-hosted classified ads script built on Laravel 10.</strong>{' '}
              It gives you everything to run a local marketplace where users post, discover, and respond
              to listings — real estate, vehicles, jobs, electronics, services — with real-time live chat,
              Google Maps, tiered memberships, and a digital wallet included as standard.
              One purchase. Full PHP source code. No monthly fees ever.
            </p>

            <p className="text-[#6b7280] text-[14px] leading-7 border-l-2 pl-4" style={{ borderColor: COLOR }}>
              ListOcean ships with <strong>30+ page builder widgets</strong>, <strong>4 drag-and-drop builders</strong>,
              Google Ads integration, RTL support for 700+ languages, and GDPR compliance —
              making it one of the most complete classified ads scripts available on CodeCanyon.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-6 py-3 transition-all hover:-translate-y-0.5"
                style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
              >
                See pricing
              </a>
              <Link
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold underline underline-offset-4 decoration-[#9ca3af] hover:decoration-current transition-colors"
                style={{ color: COLOR_DARK }}
              >
                View live demo →
              </Link>
            </div>
          </div>

          {/* Right — 4 pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((p, i) => (
              <div
                key={p.label}
                className="rounded-2xl p-5 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{
                  background: i === 0 ? COLOR : LIGHT_COLOR,
                  border: i === 0 ? 'none' : `1px solid ${COLOR}25`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: i === 0 ? 'rgba(255,255,255,0.2)' : `${COLOR}20` }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={i === 0 ? '#fff' : COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={p.icon} />
                  </svg>
                </div>
                <h3
                  className="text-[13px] font-bold leading-snug"
                  style={{ color: i === 0 ? '#fff' : COLOR_DARK }}
                >
                  {p.label}
                </h3>
                <p
                  className="text-[12px] leading-5"
                  style={{ color: i === 0 ? 'rgba(255,255,255,0.8)' : '#6b7280' }}
                >
                  {p.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
