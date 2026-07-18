import { COLOR, LIGHT_COLOR } from './constants';

const ROWS = [
  { feature: 'Price', geniusDebug: 'Free (your server costs only)', sentry: '$26–$80+/mo + overage', glitchtip: 'Free self-host · $15+/mo hosted' },
  { feature: 'Hosting', geniusDebug: 'Your infra', sentry: 'Vendor cloud (SaaS-first)', glitchtip: 'Your infra' },
  { feature: 'Data ownership', geniusDebug: '100% yours', sentry: 'Vendor-held', glitchtip: '100% yours' },
  { feature: 'Sentry SDK compatible', geniusDebug: 'Yes — standard @sentry/* SDKs', sentry: 'Yes (native)', glitchtip: 'Yes — same wire protocol' },
  { feature: 'Error grouping + symbolication', geniusDebug: 'Yes', sentry: 'Yes', glitchtip: 'Yes' },
  { feature: 'Distributed traces', geniusDebug: 'Yes', sentry: 'Yes', glitchtip: 'Fails silently (unsupported)' },
  { feature: 'Session replay', geniusDebug: 'Yes — on-error, privacy-masked', sentry: 'Yes', glitchtip: 'Fails silently (unsupported)' },
  { feature: 'GitHub deep-links + auto-resolve', geniusDebug: 'Yes', sentry: 'Yes', glitchtip: 'No' },
  { feature: 'Resource footprint', geniusDebug: 'Small VPS (~2 GB RAM)', sentry: '16+ GB (self-hosted) or SaaS', glitchtip: 'Very light (~256 MB RAM)' },
  { feature: 'Setup', geniusDebug: 'Docker Compose / VPS', sentry: 'Sign up (SaaS) or 40+ containers (self-host)', glitchtip: 'Docker Compose / VPS' },
];

function Tick() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" className="inline-block mr-1.5 flex-shrink-0">
      <circle cx="10" cy="10" r="10" fill={COLOR} fillOpacity="0.12" />
      <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Comparison() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            Comparison
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112]">
            Genius Debug vs Sentry SaaS vs GlitchTip
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[620px] mx-auto leading-7">
            GlitchTip is the closest self-hosted comparison — lighter to run, but Session Replay and trace waterfalls fail silently. Genius Debug keeps both working.
          </p>
        </div>

        <div className="max-w-[900px] mx-auto overflow-x-auto">
          <table className="w-full text-[13px] sm:text-[14px] border-collapse">
            <thead>
              <tr>
                <th className="text-left px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] w-[220px]">Feature</th>
                <th className="px-4 py-3 border-b border-[#E5E7EC] rounded-t-xl" style={{ background: LIGHT_COLOR, color: COLOR }}>
                  <span className="font-bold">Genius Debug</span>
                  <span className="block text-[11px] font-normal mt-0.5">Free · Open Source</span>
                </th>
                <th className="px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">Sentry SaaS</th>
                <th className="px-4 py-3 text-[#6b7280] font-medium border-b border-[#E5E7EC] text-center">GlitchTip</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-[#f9fafb]' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-[#0F1112]">{row.feature}</td>
                  <td className="px-4 py-3 text-center font-semibold" style={{ color: COLOR, background: `${LIGHT_COLOR}60` }}>
                    <Tick />{row.geniusDebug}
                  </td>
                  <td className="px-4 py-3 text-center text-[#6b7280]">{row.sentry}</td>
                  <td className="px-4 py-3 text-center text-[#6b7280]">{row.glitchtip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-[12px] text-[#9ca3af] mt-5 max-w-[620px] mx-auto">
          Sentry pricing and GlitchTip resource figures per each project&apos;s published docs, 2026. GlitchTip is Sentry-protocol compatible but does not implement Session Replay, Profiling, or trace waterfalls — those SDK calls fail silently.
        </p>
      </div>
    </section>
  );
}
