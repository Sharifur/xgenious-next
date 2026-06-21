import { COLOR } from './constants';

type Plugin = { name: string; desc: string; icon: string };

// 24x24 stroke icons (currentColor)
const PLUGINS: Plugin[] = [
  {
    name: 'Cloud Storage',
    desc: 'Offload tenant media to S3-compatible cloud storage. Keep your server light and scale storage independently as your platform grows.',
    icon: '<path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97 6 6 0 0 0-11.64-1.5A4.5 4.5 0 0 0 6.5 19h11z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 12v5M9.5 14.5 12 12l2.5 2.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    name: 'Site Analytics',
    desc: 'Built-in traffic and conversion analytics for every tenant site — page views, sources, and trends without any third-party setup.',
    icon: '<path d="M3 3v18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="7" y="11" width="3" height="6" rx="1" stroke="currentColor" stroke-width="2"/><rect x="13" y="7" width="3" height="10" rx="1" stroke="currentColor" stroke-width="2"/>',
  },
  {
    name: 'Domain Reseller',
    desc: 'Let tenants buy and connect custom domains directly from your platform — add a recurring revenue stream on top of subscriptions.',
    icon: '<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    name: 'Restaurant',
    desc: 'Full restaurant module: online menu, food ordering, and delivery management — turn any tenant into a food-ordering business.',
    icon: '<path d="M6 2v7a3 3 0 0 0 6 0V2M9 2v20M17 2c-1.5 0-3 1.5-3 5s1.5 4 3 4v11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    name: 'Hotel',
    desc: 'Hotel booking module: room listings, availability calendars, and reservation management for any hospitality tenant.',
    icon: '<path d="M3 21h18M5 21V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8h0M15 8h0M9 12h0M15 12h0M10 21v-4h4v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  },
];

export default function PremiumPlugins() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4"
            style={{ background: `${COLOR}15`, color: COLOR }}
          >
            Premium Plugins
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
            5 Premium Plugins — Included in Bundle &amp; Exclusive
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            These premium plugins ship <strong>only with the Bundle Pack and Exclusive Bundle Pack</strong>. They unlock new revenue streams and verticals for your tenants — no extra purchase, no monthly fees.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
          {PLUGINS.map((p) => (
            <div
              key={p.name}
              className="group rounded-2xl border p-6 flex flex-col transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ background: `${COLOR}06`, borderColor: `${COLOR}30` }}
            >
              <div className="flex items-start justify-between gap-2 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                  style={{ background: `${COLOR}15`, color: COLOR }}
                  dangerouslySetInnerHTML={{
                    __html: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none">${p.icon}</svg>`,
                  }}
                />
                <span
                  className="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide inline-flex items-center gap-1"
                  style={{ background: COLOR, color: '#fff' }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect x="4" y="11" width="16" height="10" rx="2" stroke="#fff" strokeWidth="2" />
                    <path d="M8 11V7a4 4 0 018 0v4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Bundle &amp; Exclusive
                </span>
              </div>
              <h3 className="text-[17px] font-semibold text-[#0F1112] mb-2">{p.name}</h3>
              <p className="text-[13px] text-[#6b7280] leading-6">{p.desc}</p>
            </div>
          ))}

          {/* CTA tile */}
          <div
            className="rounded-2xl p-6 flex flex-col justify-center text-center gap-3"
            style={{ background: '#1a0a08' }}
          >
            <p className="text-[16px] font-bold text-white leading-snug">
              Get all 5 premium plugins
            </p>
            <p className="text-[13px]" style={{ color: '#d9b7b0' }}>
              Included free with the Bundle Pack and Exclusive Bundle Pack.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold text-[14px] rounded-full px-5 py-2.5 mt-1 transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: COLOR, boxShadow: `0 6px 18px ${COLOR}45` }}
            >
              View Pricing
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
