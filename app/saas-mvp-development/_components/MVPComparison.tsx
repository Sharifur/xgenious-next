const TICK = (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
    <circle cx="7.5" cy="7.5" r="6.5" stroke="#4ade80" strokeWidth="1" />
    <path d="M4.5 7.5l2 2 4-4" stroke="#4ade80" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CROSS = (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
    <circle cx="7.5" cy="7.5" r="6.5" stroke="#f87171" strokeWidth="1" />
    <path d="M5 5l5 5M10 5l-5 5" stroke="#f87171" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const DASH = (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="shrink-0">
    <circle cx="7.5" cy="7.5" r="6.5" stroke="#6b7280" strokeWidth="1" />
    <path d="M5 7.5h5" stroke="#6b7280" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

type Cell = { icon: React.ReactNode; text: string };

const rows: { label: string; noCode: Cell; mvp: Cell; fullBuild: Cell }[] = [
  {
    label: 'Time to launch',
    noCode:    { icon: TICK,  text: '1–2 weeks' },
    mvp:       { icon: TICK,  text: '4–10 weeks' },
    fullBuild: { icon: CROSS, text: '16–24 weeks' },
  },
  {
    label: 'Scale past 10K users',
    noCode:    { icon: CROSS, text: 'Rarely — platform ceiling' },
    mvp:       { icon: TICK,  text: 'Yes — production stack' },
    fullBuild: { icon: TICK,  text: 'Yes — enterprise-grade' },
  },
  {
    label: 'Code ownership',
    noCode:    { icon: CROSS, text: 'No — locked to platform' },
    mvp:       { icon: TICK,  text: 'Full IP transfer' },
    fullBuild: { icon: TICK,  text: 'Full IP transfer' },
  },
  {
    label: 'Cost at 6 months',
    noCode:    { icon: DASH,  text: '$200–500/mo + plan limits' },
    mvp:       { icon: TICK,  text: 'Fixed, paid once' },
    fullBuild: { icon: CROSS, text: 'Still in development' },
  },
  {
    label: 'Cost at 18 months',
    noCode:    { icon: CROSS, text: '$5K–15K + likely a rebuild' },
    mvp:       { icon: TICK,  text: 'Fixed — or extended sprint' },
    fullBuild: { icon: TICK,  text: 'Done and generating revenue' },
  },
  {
    label: 'Pivot speed',
    noCode:    { icon: TICK,  text: 'Fast (if feature is supported)' },
    mvp:       { icon: TICK,  text: 'One sprint cycle' },
    fullBuild: { icon: CROSS, text: 'Slow — scope re-planning' },
  },
];

const columns = [
  {
    key: 'noCode' as const,
    label: 'No-Code',
    sub: 'Bubble · Webflow · Glide',
    highlight: false,
    badge: null,
    verdict: 'Right for demos and internal tools under 5 users. Hit the ceiling fast once real traffic arrives.',
    verdictColor: '#9ca3af',
  },
  {
    key: 'mvp' as const,
    label: 'Custom MVP',
    sub: 'What we build',
    highlight: true,
    badge: 'This is us',
    verdict: 'Right when you need a real product — deployed, owned, and ready to scale. Fixed price, no lock-in.',
    verdictColor: '#ec7161',
  },
  {
    key: 'fullBuild' as const,
    label: 'Full SaaS Build',
    sub: 'Custom SaaS Development',
    highlight: false,
    badge: null,
    verdict: 'Right once your hypothesis is validated and you\'re ready to build the product you\'ll run for years.',
    verdictColor: '#9ca3af',
  },
];

export default function MVPComparison() {
  return (
    <section className="py-14 sm:py-20 lg:py-[100px]" style={{ background: '#f5f6f8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-10 sm:gap-14">

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-[640px]">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
            <span className="text-[#ec7161] text-[14px] font-medium">Honest Comparison</span>
          </div>
          <h2 className="text-[#0f1112] font-bold text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[54px]">
            No-Code vs Custom MVP vs Full Build.{' '}
            <em className="font-normal italic">Know Which.</em>
          </h2>
          <p className="text-[#484848] text-[15px] leading-[23px]">
            Three tools for three different stages. Here&apos;s the honest breakdown — including when you should <em>not</em> hire us.
          </p>
        </div>

        {/* Table — desktop */}
        <div className="hidden md:block overflow-hidden rounded-[14px]" style={{ border: '1px solid #e0e2e7' }}>
          {/* Column headers */}
          <div className="grid grid-cols-4" style={{ background: '#fff', borderBottom: '1px solid #e0e2e7' }}>
            <div className="px-5 py-4" />
            {columns.map((col) => (
              <div
                key={col.key}
                className="relative px-5 py-4 flex flex-col gap-1"
                style={{ background: col.highlight ? 'rgba(236,113,97,0.04)' : 'transparent', borderLeft: '1px solid #e0e2e7' }}
              >
                {col.badge && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(236,113,97,0.12)', color: '#ec7161' }}>
                    {col.badge}
                  </span>
                )}
                <span className="font-semibold text-[#0f1112] text-[14px]">{col.label}</span>
                <span className="text-[#9ca3af] text-[12px]">{col.sub}</span>
              </div>
            ))}
          </div>

          {/* Rows */}
          {rows.map((row, ri) => (
            <div
              key={row.label}
              className="grid grid-cols-4"
              style={{ background: ri % 2 === 0 ? '#fff' : '#fafafa', borderBottom: ri < rows.length - 1 ? '1px solid #e0e2e7' : 'none' }}
            >
              <div className="px-5 py-3.5 flex items-center">
                <span className="text-[13px] font-medium text-[#484848]">{row.label}</span>
              </div>
              {columns.map((col) => {
                const cell = row[col.key];
                return (
                  <div
                    key={col.key}
                    className="px-5 py-3.5 flex items-center gap-2"
                    style={{ background: col.highlight ? 'rgba(236,113,97,0.03)' : 'transparent', borderLeft: '1px solid #e0e2e7' }}
                  >
                    {cell.icon}
                    <span className="text-[13px] leading-[19px] text-[#484848]">{cell.text}</span>
                  </div>
                );
              })}
            </div>
          ))}

          {/* Verdict row */}
          <div className="grid grid-cols-4" style={{ borderTop: '1px solid #e0e2e7', background: '#fafafa' }}>
            <div className="px-5 py-4 flex items-center">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#9ca3af]">Verdict</span>
            </div>
            {columns.map((col) => (
              <div
                key={col.key}
                className="px-5 py-4"
                style={{ background: col.highlight ? 'rgba(236,113,97,0.04)' : 'transparent', borderLeft: '1px solid #e0e2e7' }}
              >
                <p className="text-[13px] leading-[20px]" style={{ color: col.verdictColor }}>{col.verdict}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cards — mobile */}
        <div className="flex flex-col gap-4 md:hidden">
          {columns.map((col) => (
            <div
              key={col.key}
              className="rounded-[12px] overflow-hidden"
              style={{
                border: col.highlight ? '1px solid rgba(236,113,97,0.4)' : '1px solid #e0e2e7',
                background: col.highlight ? 'rgba(236,113,97,0.03)' : '#fff',
              }}
            >
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid #e0e2e7' }}>
                <div>
                  <p className="font-semibold text-[#0f1112] text-[14px]">{col.label}</p>
                  <p className="text-[#9ca3af] text-[12px]">{col.sub}</p>
                </div>
                {col.badge && (
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: 'rgba(236,113,97,0.12)', color: '#ec7161' }}>
                    {col.badge}
                  </span>
                )}
              </div>
              <div className="px-5 py-4 flex flex-col gap-3">
                {rows.map((row) => {
                  const cell = row[col.key];
                  return (
                    <div key={row.label} className="flex flex-col gap-1">
                      <span className="text-[11px] font-medium uppercase tracking-wide text-[#9ca3af]">{row.label}</span>
                      <div className="flex items-center gap-2">
                        {cell.icon}
                        <span className="text-[13px] text-[#484848]">{cell.text}</span>
                      </div>
                    </div>
                  );
                })}
                <p className="text-[13px] leading-[20px] pt-3 mt-1" style={{ color: col.verdictColor, borderTop: '1px solid #e0e2e7' }}>{col.verdict}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-[#6b7280] text-[14px] leading-[22px] text-center max-w-[520px] mx-auto">
          Not sure which fits your stage?{' '}
          <a href="/contact" className="text-[#ec7161] underline underline-offset-2 hover:text-[#0f1112] transition-colors">
            Book a 30-min call
          </a>{' '}
          — we&apos;ll tell you honestly, even if the answer is &quot;use Bubble.&quot;
        </p>

      </div>
    </section>
  );
}
