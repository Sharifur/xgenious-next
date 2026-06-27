import { COLOR, PLUGINS, FULL_PRICE, EXCLUSIVE_PRICE } from './constants';

const PLUGIN_COLORS = [
  { bg: '#ecfeff', border: '#0891b230', tag: '#0891b2', light: '#0891b215' },
  { bg: '#f0fdf4', border: '#05966930', tag: '#059669', light: '#05966915' },
  { bg: '#faf5ff', border: '#7c3aed30', tag: '#7c3aed', light: '#7c3aed15' },
  { bg: '#fff7ed', border: '#ea580c30', tag: '#ea580c', light: '#ea580c15' },
];

/* ── Plugin "how it works" illustrations ── */

// 1. Live Chat — buyer asks on the product page, seller replies in real time
function LiveChatIllo({ t }: { t: string }) {
  const KT4 = '0;0.25;0.5;0.75';
  return (
    <svg width="100%" height="100%" viewBox="0 0 240 96" fill="none">
      <rect x="44" y="6" width="152" height="84" rx="9" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />
      {/* header */}
      <path d="M44 15 a9 9 0 0 1 9 -9 H187 a9 9 0 0 1 9 9 V20 H44 Z" fill={t} fillOpacity="0.12" />
      <circle cx="55" cy="13" r="4" fill={t} fillOpacity="0.4" />
      <text x="63" y="16" fontSize="6.5" fill={t} fontWeight="800">Seller Chat</text>
      <circle cx="172" cy="13" r="2.4" fill="#16a34a">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.1s" repeatCount="indefinite" />
      </circle>
      <text x="178" y="15.5" fontSize="5.2" fill="#16a34a" fontWeight="600">online</text>
      {/* product context */}
      <rect x="50" y="24" width="140" height="11" rx="3" fill={t} fillOpacity="0.06" />
      <rect x="54" y="26.5" width="6" height="6" rx="1.5" fill={t} fillOpacity="0.3" />
      <text x="64" y="31.5" fontSize="5.4" fill="#6b7280">Re: Wireless Speaker · $99</text>
      {/* buyer bubble (right) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;1;1;1" keyTimes={KT4} dur="4s" repeatCount="indefinite" />
        <rect x="92" y="40" width="98" height="14" rx="6" fill={t} />
        <path d="M190 50 L194 53 L186 53 Z" fill={t} />
        <text x="141" y="49.5" textAnchor="middle" fontSize="6" fill="white">Is this in stock?</text>
      </g>
      {/* seller typing (frame 2) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;1;0" keyTimes={KT4} dur="4s" repeatCount="indefinite" />
        <rect x="50" y="58" width="34" height="14" rx="6" fill="#f3f4f6" />
        <circle cx="60" cy="65" r="2" fill="#9ca3af"><animate attributeName="cy" values="65;61;65" dur="0.8s" repeatCount="indefinite" /></circle>
        <circle cx="67" cy="65" r="2" fill="#9ca3af"><animate attributeName="cy" values="65;61;65" dur="0.8s" begin="0.15s" repeatCount="indefinite" /></circle>
        <circle cx="74" cy="65" r="2" fill="#9ca3af"><animate attributeName="cy" values="65;61;65" dur="0.8s" begin="0.3s" repeatCount="indefinite" /></circle>
      </g>
      {/* seller reply (frame 3) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;1" keyTimes={KT4} dur="4s" repeatCount="indefinite" />
        <rect x="50" y="58" width="120" height="15" rx="6" fill="#f3f4f6" />
        <path d="M50 68 L46 72 L57 71 Z" fill="#f3f4f6" />
        <text x="56" y="68" fontSize="6" fill="#374151">Yes — ships today! 🚚</text>
      </g>
      {/* input */}
      <rect x="50" y="78" width="124" height="9" rx="4.5" fill="white" stroke="#e5e7eb" strokeWidth="0.7" />
      <text x="55" y="84.5" fontSize="4.6" fill="#9ca3af">Message…</text>
      <circle cx="184" cy="82.5" r="5.5" fill={t} />
      <path d="M181.5 82.5 h5 M184 80 l2.5 2.5 l-2.5 2.5" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 2. Delivery Man — assign a driver, scooter drives the route on a live map
function DeliveryIllo({ t }: { t: string }) {
  const R = 'M26 66 C 70 70, 56 40, 104 38 S 176 26, 214 24';
  return (
    <svg width="100%" height="100%" viewBox="0 0 240 96" fill="none">
      <rect x="6" y="6" width="228" height="84" rx="9" fill={t} fillOpacity="0.05" stroke="#e5e7eb" strokeWidth="1.1" />
      {/* streets */}
      {[26, 50, 74].map((y) => <line key={y} x1="6" y1={y} x2="234" y2={y} stroke="white" strokeWidth="3" strokeOpacity="0.8" />)}
      {[60, 120, 180].map((x) => <line key={x} x1={x} y1="6" x2={x} y2="90" stroke="white" strokeWidth="3" strokeOpacity="0.8" />)}
      {/* blocks */}
      {[[14, 14, 30, 16], [130, 12, 38, 14], [160, 56, 40, 20], [16, 56, 34, 18]].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="2" fill={t} fillOpacity="0.06" />
      ))}
      {/* route */}
      <path id="dmRoute" d={R} fill="none" stroke={t} strokeWidth="3" strokeLinecap="round" strokeOpacity="0.3" />
      <path d={R} fill="none" stroke={t} strokeWidth="3" strokeLinecap="round" pathLength={100} strokeDasharray="100">
        <animate attributeName="stroke-dashoffset" values="100;0;0" keyTimes="0;0.82;1" dur="5s" repeatCount="indefinite" />
      </path>
      {/* pickup pin */}
      <circle cx="26" cy="66" r="4" fill="white" stroke={t} strokeWidth="1.5" />
      <rect x="24" y="64" width="4" height="4" rx="1" fill={t} />
      {/* home pin */}
      <circle cx="214" cy="24" r="8" fill={t} fillOpacity="0.15">
        <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="fillOpacity" values="0.2;0;0.2" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <path d="M214 16 C209 16 206 20 206 23 C206 28 214 34 214 34 C214 34 222 28 222 23 C222 20 219 16 214 16 Z" fill={t} />
      <path d="M210 24 L214 21 L218 24 M211.5 23 V27 H216.5 V23" stroke="white" strokeWidth="1" fill="none" strokeLinejoin="round" />
      {/* scooter */}
      <g>
        <animateMotion dur="5s" repeatCount="indefinite" rotate="auto" keyPoints="0;1;1" keyTimes="0;0.82;1" calcMode="linear">
          <mpath href="#dmRoute" xlinkHref="#dmRoute" />
        </animateMotion>
        <circle r="7.5" fill={t} fillOpacity="0.18" />
        <circle r="6" fill={t} stroke="white" strokeWidth="1.1" />
        <g transform="scale(0.38) translate(-9 -7)">
          <circle cx="4" cy="13" r="3" fill="none" stroke="white" strokeWidth="1.8" />
          <circle cx="20" cy="13" r="3" fill="none" stroke="white" strokeWidth="1.8" />
          <path d="M4 13 L9 13 L12 6 L16 6 M9 13 H17 L20 13" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="2" y="3" width="6" height="6" rx="1" fill="white" />
        </g>
      </g>
      {/* status pill */}
      <rect x="14" y="78" width="92" height="11" rx="5.5" fill="white" stroke={t} strokeWidth="0.7" strokeOpacity="0.3" />
      <circle cx="23" cy="83.5" r="2.4" fill="#16a34a"><animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" /></circle>
      <text x="29" y="85.5" fontSize="5.5" fill={t} fontWeight="700">Driver assigned · live</text>
    </svg>
  );
}

// 3. Refund — request → admin approves → money refunded
function RefundIllo({ t }: { t: string }) {
  const KT4 = '0;0.25;0.5;0.75';
  return (
    <svg width="100%" height="100%" viewBox="0 0 240 96" fill="none">
      {/* step 1: request */}
      <rect x="6" y="16" width="64" height="56" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <text x="38" y="27" textAnchor="middle" fontSize="5.6" fill={t} fontWeight="800">Request</text>
      <line x1="12" y1="31" x2="64" y2="31" stroke="#f3f4f6" strokeWidth="0.8" />
      <rect x="12" y="36" width="46" height="5" rx="2.5" fill={t} fillOpacity="0.15" />
      <rect x="12" y="44" width="38" height="5" rx="2.5" fill={t} fillOpacity="0.1" />
      <text x="12" y="60" fontSize="5" fill="#9ca3af">Order #4821</text>
      <text x="58" y="68" textAnchor="end" fontSize="7" fill="#111827" fontWeight="800">$99</text>
      <text x="38" y="84" textAnchor="middle" fontSize="5" fill="#9ca3af">Customer</text>

      {/* arrow 1 */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;1;1;1" keyTimes={KT4} dur="4s" repeatCount="indefinite" />
        <path d="M73 44 L84 44" stroke={t} strokeWidth="1.6" strokeDasharray="3 2"><animate attributeName="stroke-dashoffset" values="0;-10" dur="0.7s" repeatCount="indefinite" /></path>
        <path d="M82 41 L86 44 L82 47" stroke={t} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* step 2: admin review */}
      <rect x="89" y="16" width="62" height="56" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <text x="120" y="27" textAnchor="middle" fontSize="5.6" fill={t} fontWeight="800">Admin Review</text>
      <line x1="95" y1="31" x2="145" y2="31" stroke="#f3f4f6" strokeWidth="0.8" />
      <text x="95" y="41" fontSize="4.8" fill="#6b7280">Item damaged</text>
      <rect x="95" y="45" width="20" height="14" rx="2" fill={t} fillOpacity="0.1" stroke={t} strokeWidth="0.5" />
      <path d="M98 56 L103 50 L108 56" stroke={t} strokeWidth="0.8" fill="none" />
      {/* approve button → check */}
      <rect x="118" y="46" width="28" height="11" rx="5.5" fill={t} />
      <text x="132" y="53.5" textAnchor="middle" fontSize="5" fill="white" fontWeight="700">Approve</text>
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;1;1" keyTimes={KT4} dur="4s" repeatCount="indefinite" />
        <circle cx="120" cy="66" r="5" fill={t} />
        <path d="M117.5 66 L119.5 68 L122.5 64" stroke="white" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="128" y="68" fontSize="5" fill={t} fontWeight="700">Approved</text>
      </g>

      {/* arrow 2 */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;1;1" keyTimes={KT4} dur="4s" repeatCount="indefinite" />
        <path d="M154 44 L165 44" stroke={t} strokeWidth="1.6" strokeDasharray="3 2"><animate attributeName="stroke-dashoffset" values="0;-10" dur="0.7s" repeatCount="indefinite" /></path>
        <path d="M163 41 L167 44 L163 47" stroke={t} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* step 3: refunded to wallet */}
      <rect x="170" y="16" width="64" height="56" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <text x="202" y="27" textAnchor="middle" fontSize="5.6" fill={t} fontWeight="800">Refunded</text>
      <line x1="176" y1="31" x2="228" y2="31" stroke="#f3f4f6" strokeWidth="0.8" />
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;1" keyTimes={KT4} dur="4s" repeatCount="indefinite" />
        <rect x="176" y="36" width="52" height="22" rx="4" fill={t} fillOpacity="0.1" />
        <text x="182" y="45" fontSize="4.6" fill="#6b7280">To wallet</text>
        <text x="202" y="55" textAnchor="middle" fontSize="9" fill={t} fontWeight="900">+$99.00</text>
        <circle cx="202" cy="12" r="6" fill={t} />
        <path d="M198.5 12 L201 14.5 L205.5 9.5" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="202" y="68" textAnchor="middle" fontSize="5" fill="#9ca3af">Customer wallet</text>
    </svg>
  );
}

// 4. POS — scan a barcode, item drops into the cart, total updates
function PosIllo({ t }: { t: string }) {
  const KT4 = '0;0.25;0.5;0.75';
  return (
    <svg width="100%" height="100%" viewBox="0 0 240 96" fill="none">
      {/* scanner panel */}
      <rect x="8" y="14" width="120" height="68" rx="7" fill="white" stroke="#e5e7eb" strokeWidth="1.1" />
      <text x="18" y="27" fontSize="5.6" fill={t} fontWeight="800">Barcode Scanner</text>
      {/* barcode */}
      <rect x="20" y="34" width="96" height="34" rx="3" fill={t} fillOpacity="0.05" />
      {[24, 28, 31, 35, 39, 43, 47, 50, 55, 59, 63, 67, 71, 75, 79, 83, 87, 91, 95, 100, 104, 108].map((x, i) => (
        <line key={i} x1={x} y1="38" x2={x} y2="64" stroke={t} strokeWidth={i % 3 === 0 ? 1.6 : i % 3 === 1 ? 0.8 : 1.2} strokeOpacity="0.6" />
      ))}
      {/* scan line */}
      <line x1="22" y1="51" x2="114" y2="51" stroke="#ef4444" strokeWidth="1.6" strokeOpacity="0.8">
        <animate attributeName="y1" values="38;64;38" dur="1.6s" repeatCount="indefinite" />
        <animate attributeName="y2" values="38;64;38" dur="1.6s" repeatCount="indefinite" />
      </line>
      <text x="68" y="78" textAnchor="middle" fontSize="5" fill="#9ca3af">SKU: WS-BLK-001</text>

      {/* cart / receipt */}
      <rect x="136" y="14" width="96" height="68" rx="7" fill="white" stroke="#e5e7eb" strokeWidth="1.1" />
      <text x="144" y="27" fontSize="5.6" fill="#374151" fontWeight="800">Cart</text>
      {/* item count badge */}
      {[
        { v: '0', k: '1;0;0;0' },
        { v: '1', k: '0;1;0;0' },
        { v: '2', k: '0;0;1;0' },
        { v: '3', k: '0;0;0;1' },
      ].map((b) => (
        <text key={b.v} x="226" y="27" textAnchor="end" fontSize="5.5" fill={t} fontWeight="800">
          {b.v} items
          <animate attributeName="opacity" calcMode="discrete" values={b.k} keyTimes={KT4} dur="4s" repeatCount="indefinite" />
        </text>
      ))}
      <line x1="142" y1="31" x2="226" y2="31" stroke="#f3f4f6" strokeWidth="0.8" />
      {/* line items appear one by one */}
      <g><animate attributeName="opacity" calcMode="discrete" values="0;1;1;1" keyTimes={KT4} dur="4s" repeatCount="indefinite" />
        <text x="144" y="40" fontSize="5" fill="#374151">Speaker</text><text x="226" y="40" textAnchor="end" fontSize="5" fill="#374151">$99</text>
      </g>
      <g><animate attributeName="opacity" calcMode="discrete" values="0;0;1;1" keyTimes={KT4} dur="4s" repeatCount="indefinite" />
        <text x="144" y="49" fontSize="5" fill="#374151">Charger</text><text x="226" y="49" textAnchor="end" fontSize="5" fill="#374151">$15</text>
      </g>
      <g><animate attributeName="opacity" calcMode="discrete" values="0;0;0;1" keyTimes={KT4} dur="4s" repeatCount="indefinite" />
        <text x="144" y="58" fontSize="5" fill="#374151">Cable</text><text x="226" y="58" textAnchor="end" fontSize="5" fill="#374151">$9</text>
      </g>
      {/* total */}
      <line x1="142" y1="63" x2="226" y2="63" stroke="#e5e7eb" strokeWidth="0.7" />
      <text x="144" y="73" fontSize="6" fill="#111827" fontWeight="700">Total</text>
      {[
        { v: '$0', k: '1;0;0;0' },
        { v: '$99', k: '0;1;0;0' },
        { v: '$114', k: '0;0;1;0' },
        { v: '$123', k: '0;0;0;1' },
      ].map((b) => (
        <text key={b.v} x="226" y="73.5" textAnchor="end" fontSize="8" fill={t} fontWeight="900">
          {b.v}
          <animate attributeName="opacity" calcMode="discrete" values={b.k} keyTimes={KT4} dur="4s" repeatCount="indefinite" />
        </text>
      ))}
      {/* beep flash on scan */}
      <g>
        <animate attributeName="opacity" values="1;0;0;1;0;0;1;0" dur="1.6s" repeatCount="indefinite" />
        <rect x="92" y="16" width="26" height="9" rx="4.5" fill={t} />
        <text x="105" y="22.5" textAnchor="middle" fontSize="5" fill="white" fontWeight="800">BEEP</text>
      </g>
    </svg>
  );
}

const ILLOS = [LiveChatIllo, DeliveryIllo, RefundIllo, PosIllo];

export default function Plugins() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            Premium Add-On Plugins
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Four Plugins That Power Your Marketplace
          </h2>
          <p className="text-[#4b5563] text-[15px] sm:text-[17px] leading-7">
            Live Chat is $19, Delivery Man $19, Refund $19, POS $39 — $96 in total if bought separately.{' '}
            <strong>All four are included free</strong> in the Vendor Bundle and Exclusive Pack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[900px] mx-auto">
          {PLUGINS.map((plugin, i) => {
            const c = PLUGIN_COLORS[i];
            const Illo = ILLOS[i];
            return (
              <div
                key={plugin.name}
                className="rounded-2xl border p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
                style={{ background: c.bg, borderColor: c.border }}
              >
                {/* how-it-works visual */}
                <div className="w-full h-32 rounded-xl mb-5 overflow-hidden flex items-center justify-center" style={{ background: c.light }}>
                  <div className="w-full h-full p-2">
                    <Illo t={c.tag} />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full" style={{ background: `${COLOR}20`, color: COLOR }}>
                    Vendor Bundle
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#7c3aed20] text-[#7c3aed]">
                    Exclusive Pack
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#f3f4f6] text-[#9ca3af] line-through">
                    Regular ✗
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span
                      className="inline-flex text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-2"
                      style={{ background: c.light, color: c.tag }}
                    >
                      {plugin.tag}
                    </span>
                    <h3 className="text-[16px] font-bold text-[#0F1112]">{plugin.name}</h3>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="text-[10px] text-[#9ca3af] leading-4">standalone</p>
                    <p className="text-[17px] font-bold line-through" style={{ color: '#d1d5db' }}>${plugin.value}</p>
                    <p className="text-[11px] font-bold" style={{ color: c.tag }}>Included</p>
                  </div>
                </div>

                <p className="text-[13px] text-[#6b7280] leading-6">{plugin.desc}</p>
              </div>
            );
          })}
        </div>

        <div
          className="max-w-[900px] mx-auto mt-8 rounded-2xl p-6"
          style={{ background: `${COLOR}08`, border: `1px solid ${COLOR}25` }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-[15px] font-bold text-[#0F1112] mb-1">
                All 4 plugins included — Vendor Bundle &amp; Exclusive Pack only
              </p>
              <p className="text-[13px] text-[#6b7280]">
                Vendor Bundle at <strong className="text-[#0F1112]">${FULL_PRICE}</strong> · Exclusive Pack at <strong className="text-[#0F1112]">${EXCLUSIVE_PRICE}</strong> · Regular License does <strong className="text-[#dc2626]">not</strong> include any plugins
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-white font-semibold text-[13px] rounded-full px-6 py-3 transition-all hover:-translate-y-0.5"
                style={{ background: COLOR, boxShadow: `0 4px 16px ${COLOR}40` }}
              >
                Compare plans
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
