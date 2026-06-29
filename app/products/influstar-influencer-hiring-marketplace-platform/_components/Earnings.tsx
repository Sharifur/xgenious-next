import { COLOR, COLOR_DARK, DARK_BG } from './constants';

const STREAMS = [
  {
    icon: 'M9 7h6m-6 4h6m-9 8h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2zM7 3v2m10-2v2',
    title: 'Booking Commission',
    desc: 'Take a cut of every order brands pay influencers. Set a flat fee or a percentage — globally or per category — and it is deducted automatically at payout.',
    tag: 'Per order',
  },
  {
    icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    title: 'Influencer Subscriptions',
    desc: 'Charge creators a recurring monthly or yearly fee for pro features, more active gigs, or premium placement — predictable revenue that grows with your creator base.',
    tag: 'Recurring',
  },
  {
    icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
    title: 'Promoted Listings',
    desc: 'Influencers pay to boost their profile and gigs to the top of search and category pages — an advertising revenue stream on top of every booking.',
    tag: 'Paid boosts',
  },
];

export default function Earnings() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: DARK_BG }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-14 max-w-[640px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}30`, color: '#d8b4fe' }}>
            Your Revenue Model
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-white leading-tight mb-4">
            How Your Platform Earns
          </h2>
          <p className="text-[#9ca3af] text-[15px] sm:text-[17px] leading-7">
            Influstar gives you three revenue streams you can run at the same time — and you keep <strong className="text-white">100%</strong>.
            Xgenious takes <strong className="text-white">zero commission</strong> on what your marketplace makes.
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {STREAMS.map((s) => (
            <div key={s.title} className="rounded-2xl p-6 flex flex-col gap-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: COLOR }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.icon} />
                  </svg>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${COLOR}25`, color: '#d8b4fe' }}>{s.tag}</span>
              </div>
              <h3 className="text-[17px] font-bold text-white">{s.title}</h3>
              <p className="text-[13px] text-[#9ca3af] leading-6">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* worked example */}
        <div className="max-w-[1100px] mx-auto rounded-3xl p-6 sm:p-8" style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${COLOR}40` }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <div>
              <p className="text-[12px] font-bold uppercase tracking-widest mb-3" style={{ color: '#d8b4fe' }}>Example — a single $500 booking</p>
              <div className="rounded-2xl p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <svg width="100%" viewBox="0 0 460 250" fill="none" role="img" aria-label="Animation: a brand pays $500 into escrow, the influencer receives $450 and your platform keeps $50 commission">
                  {/* ── connectors (animated dashed flow) ── */}
                  <line x1="104" y1="127" x2="178" y2="127" stroke={COLOR} strokeWidth="2" strokeDasharray="4 3" strokeOpacity="0.6">
                    <animate attributeName="stroke-dashoffset" values="14;0" dur="0.7s" repeatCount="indefinite" />
                  </line>
                  <line x1="290" y1="110" x2="362" y2="70" stroke={COLOR} strokeWidth="2" strokeDasharray="4 3" strokeOpacity="0.6">
                    <animate attributeName="stroke-dashoffset" values="14;0" dur="0.7s" repeatCount="indefinite" />
                  </line>
                  <line x1="290" y1="144" x2="362" y2="184" stroke={COLOR} strokeWidth="2" strokeDasharray="4 3" strokeOpacity="0.6">
                    <animate attributeName="stroke-dashoffset" values="14;0" dur="0.7s" repeatCount="indefinite" />
                  </line>

                  {/* ── Brand node ── */}
                  <rect x="10" y="100" width="92" height="54" rx="11" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" />
                  <rect x="22" y="114" width="18" height="12" rx="2" fill="none" stroke="#d8b4fe" strokeWidth="1.5" />
                  <line x1="22" y1="118" x2="40" y2="118" stroke="#d8b4fe" strokeWidth="1.5" />
                  <text x="48" y="123" fontSize="11" fontWeight="700" fill="#ffffff">Brand</text>
                  <text x="22" y="143" fontSize="8.5" fill="#9ca3af">pays the order</text>

                  {/* ── Escrow node ── */}
                  <rect x="180" y="88" width="110" height="78" rx="13" fill={`${COLOR}26`} stroke={COLOR} strokeWidth="1.5" />
                  <rect x="227" y="102" width="16" height="13" rx="2.5" fill="none" stroke="#d8b4fe" strokeWidth="1.8" />
                  <path d="M230 102 v-3 a5 5 0 0 1 10 0 v3" stroke="#d8b4fe" strokeWidth="1.8" fill="none" />
                  <text x="235" y="128" textAnchor="middle" fontSize="9" fontWeight="700" fill="#d8b4fe" letterSpacing="1">ESCROW</text>
                  <text x="235" y="150" textAnchor="middle" fontSize="16" fontWeight="800" fill="#ffffff">
                    $500
                    <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.32;0.34;0.5;0.55;1" dur="6s" repeatCount="indefinite" />
                  </text>
                  {/* approval check pulse */}
                  <g>
                    <animate attributeName="opacity" values="0;0;0;1;1;0" keyTimes="0;0.42;0.46;0.5;0.62;0.66" dur="6s" repeatCount="indefinite" />
                    <circle cx="278" cy="98" r="9" fill="#22c55e" />
                    <path d="M274 98 l3 3 l5 -6" stroke="#ffffff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </g>

                  {/* ── Influencer node ── */}
                  <rect x="362" y="40" width="96" height="60" rx="11" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" />
                  <text x="376" y="59" fontSize="10" fontWeight="700" fill="#ffffff">Influencer</text>
                  <text x="376" y="72" fontSize="8" fill="#9ca3af">gets 90%</text>
                  <text x="376" y="92" fontSize="16" fontWeight="800" fill="#c4b5fd">$450</text>

                  {/* ── You / platform node (highlighted) ── */}
                  <rect x="362" y="152" width="96" height="62" rx="11" fill={COLOR}>
                    <animate attributeName="opacity" values="0.55;0.55;0.55;0.55;1;1" keyTimes="0;0.5;0.82;0.83;0.9;1" dur="6s" repeatCount="indefinite" />
                  </rect>
                  <text x="376" y="171" fontSize="10" fontWeight="700" fill="#ffffff">You earn</text>
                  <text x="376" y="184" fontSize="8" fill="rgba(255,255,255,0.8)">your cut · 10%</text>
                  <text x="376" y="205" fontSize="18" fontWeight="900" fill="#ffffff">+$50</text>
                  {/* glow ring when you get paid */}
                  <rect x="362" y="152" width="96" height="62" rx="11" fill="none" stroke="#ffffff" strokeWidth="2">
                    <animate attributeName="opacity" values="0;0;0;0;1;0" keyTimes="0;0.8;0.82;0.83;0.9;1" dur="6s" repeatCount="indefinite" />
                  </rect>

                  {/* ── Coin A: $500 Brand → Escrow ── */}
                  <g>
                    <animateTransform attributeName="transform" type="translate" values="118 127;235 127;235 127;235 127" keyTimes="0;0.32;0.34;1" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.32;0.34;1" dur="6s" repeatCount="indefinite" />
                    <rect x="-20" y="-11" width="40" height="22" rx="11" fill="#ffffff" />
                    <text x="0" y="4" textAnchor="middle" fontSize="11" fontWeight="800" fill={COLOR_DARK}>$500</text>
                  </g>

                  {/* ── Coin B: $450 Escrow → Influencer ── */}
                  <g>
                    <animateTransform attributeName="transform" type="translate" values="235 127;235 127;408 85;408 85" keyTimes="0;0.5;0.83;1" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.49;0.5;0.8;0.85" dur="6s" repeatCount="indefinite" />
                    <rect x="-20" y="-11" width="40" height="22" rx="11" fill="#ede9fe" />
                    <text x="0" y="4" textAnchor="middle" fontSize="11" fontWeight="800" fill={COLOR_DARK}>$450</text>
                  </g>

                  {/* ── Coin C: $50 Escrow → You ── */}
                  <g>
                    <animateTransform attributeName="transform" type="translate" values="235 127;235 127;408 197;408 197" keyTimes="0;0.5;0.83;1" dur="6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.49;0.5;0.8;0.85" dur="6s" repeatCount="indefinite" />
                    <rect x="-18" y="-11" width="36" height="22" rx="11" fill="#ffffff" />
                    <text x="0" y="4" textAnchor="middle" fontSize="11" fontWeight="800" fill={COLOR}>+$50</text>
                  </g>
                </svg>
              </div>
              <p className="text-[12px] text-[#9ca3af] mt-3">The brand pays into <strong className="text-[#d8b4fe]">escrow</strong>, you keep <strong className="text-white">10%</strong>, the influencer gets the rest. Commission rate is yours to set.</p>
            </div>

            <div className="rounded-2xl p-6 text-center" style={{ background: `linear-gradient(135deg, ${COLOR_DARK}, ${COLOR})` }}>
              <p className="text-[13px] text-white/80 mb-1">At ~200 bookings/month + 50 pro subscriptions</p>
              <p className="text-[40px] sm:text-[48px] font-extrabold text-white leading-none mb-2">$11,500</p>
              <p className="text-[13px] text-white/80 mb-4">estimated monthly platform revenue</p>
              <div className="grid grid-cols-3 gap-2 text-left">
                <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <p className="text-[10px] text-white/70">Commission</p>
                  <p className="text-[14px] font-bold text-white">$10k</p>
                </div>
                <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <p className="text-[10px] text-white/70">Subscriptions</p>
                  <p className="text-[14px] font-bold text-white">$1k</p>
                </div>
                <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  <p className="text-[10px] text-white/70">Promotions</p>
                  <p className="text-[14px] font-bold text-white">$500</p>
                </div>
              </div>
              <p className="text-[11px] text-white/60 mt-3">Illustrative — your numbers depend on volume &amp; rates.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
