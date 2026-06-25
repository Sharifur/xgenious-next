import { COLOR, COLOR_DARK, LIGHT_COLOR } from './constants';

const STATS = [
  { value: '1,971+', label: 'Sales on CodeCanyon' },
  { value: '4.72 / 5', label: '183 verified reviews' },
  { value: '9', label: 'Built-in modules' },
  { value: '20+', label: 'Payment gateways' },
];

const MODULE_ROWS = [
  { label: 'eCommerce',        sub: 'Products, digital goods, orders',   color: '#16a34a' },
  { label: 'Event Ticketing',  sub: 'Sell tickets, countdown, maps',     color: '#d97706' },
  { label: 'Crowdfunding',     sub: 'Campaigns, goals, donor tracking',  color: '#db2777' },
  { label: 'Course Selling',   sub: 'Online & offline, lesson previews', color: '#7c3aed' },
  { label: 'Appointments',     sub: 'Dynamic date/time, providers',      color: '#0ea5e9' },
  { label: 'Job Posting',      sub: 'Category jobs, CV collection',      color: '#64748b' },
  { label: 'Service Packages', sub: 'Quotes, order forms, feedback',     color: COLOR },
  { label: 'Support Tickets',  sub: 'Priority levels, attachments',      color: '#ef4444' },
  { label: 'Knowledgebase',    sub: 'Help articles, category organised', color: '#0891b2' },
];

const HIGHLIGHTS = [
  '4 drag & drop builders — page, menu, form, and widget',
  'Role-based admin: Super Admin, Admin, Editor, User',
  'RTL layout + 950+ Google Fonts + multilingual admin',
  'Built-in support ticket system — no third-party tool needed',
];

export default function Definition() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#e5e7eb]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-[1100px] mx-auto">

          {/* Left — text */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-5"
              style={{ background: `${COLOR}15`, color: COLOR }}
            >
              About Nexelit
            </div>

            <h2 className="text-[28px] sm:text-[38px] font-bold text-[#0F1112] leading-tight mb-5">
              One CMS for{' '}
              <span style={{ color: COLOR_DARK }}>Every Type</span>{' '}
              of Business Website
            </h2>

            <p className="text-[#484848] text-[15px] sm:text-[16px] leading-8 mb-7">
              <strong className="text-[#0F1112]">Nexelit is a self-hosted multipurpose CMS and business management system built on{' '}
              <a href="https://laravel.com" target="_blank" rel="noopener noreferrer" style={{ color: COLOR, textDecoration: 'underline' }}>Laravel</a>.</strong>{' '}
              It ships with 9 built-in modules — including eCommerce, events, appointments, courses, donations, job
              posting, service packages, a support ticket system, and a knowledgebase — plus 4 drag &amp; drop builders,
              20+ payment gateways, and RTL support, all for a one-time price. Enable only what you need and go live
              without writing code.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-start gap-3 text-[14px] text-[#374151] leading-6">
                  <svg className="flex-shrink-0 mt-0.5" width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" fill={`${COLOR}18`} />
                    <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {h}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-[#E5E7EC] p-4 text-center hover:shadow-sm transition-all"
                >
                  <p className="text-[22px] font-black leading-none mb-1" style={{ color: COLOR }}>{s.value}</p>
                  <p className="text-[11px] text-[#6b7280] leading-4">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — module toggle visual */}
          <div
            className="rounded-3xl p-7 sm:p-8 border"
            style={{ background: LIGHT_COLOR, borderColor: `${COLOR}20` }}
          >
            <div className="flex items-center justify-between mb-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: `${COLOR}80` }}>
                9 Built-in Modules — One Platform
              </p>
              <span
                className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                style={{ background: '#dcfce7', color: '#15803d' }}
              >
                All Included
              </span>
            </div>

            {/* Toggle rows */}
            <div className="flex flex-col gap-2 mb-6">
              {MODULE_ROWS.map((m) => (
                <div
                  key={m.label}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white border border-[#e5e7eb] hover:border-[#c7d2fe] transition-colors"
                >
                  {/* color dot */}
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: m.color }}
                  />
                  {/* text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-[#0F1112] leading-4">{m.label}</p>
                    <p className="text-[11px] text-[#9ca3af] leading-4 mt-0.5 truncate">{m.sub}</p>
                  </div>
                  {/* toggle pill */}
                  <div
                    className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold flex-shrink-0"
                    style={{ background: `${m.color}15`, color: m.color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: m.color }} />
                    ON
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div
              className="rounded-xl p-4 flex items-start gap-3"
              style={{ background: `${COLOR}10`, border: `1px solid ${COLOR}18` }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5" style={{ color: COLOR }}>
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <div>
                <p className="text-[12px] font-semibold text-[#0F1112] leading-4 mb-0.5">
                  Enable from the admin panel
                </p>
                <p className="text-[11px] text-[#6b7280] leading-5">
                  All 9 modules are included in every license. Toggle what you need — no extra plugins, no extra cost.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
