import { COLOR, FEATURES } from './constants';

function BrowserChrome({ url }: { url: string }) {
  return (
    <>
      {/* chrome bar with rounded top corners */}
      <path d="M0 9 a9 9 0 0 1 9 -9 H215 a9 9 0 0 1 9 9 V17 H0 Z" fill="#f3f4f6" />
      <line x1="0" y1="17" x2="224" y2="17" stroke="#e5e7eb" strokeWidth="0.8" />
      {/* traffic lights */}
      <circle cx="11" cy="8.5" r="3" fill="#ff5f57" />
      <circle cx="21" cy="8.5" r="3" fill="#febc2e" />
      <circle cx="31" cy="8.5" r="3" fill="#28c840" />
      {/* address bar */}
      <rect x="44" y="3.5" width="150" height="10" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="0.7" />
      <path d="M52 8.5 a2 2 0 1 1 4 0 v0.5 h-4 z M52.7 8.5 v-1 a1.3 1.3 0 0 1 2.6 0 v1" stroke="#9ca3af" strokeWidth="0.5" fill="none" />
      <text x="60" y="11.5" fontSize="5" fill="#9ca3af">{url}</text>
    </>
  );
}

function StoreIcon({ c }: { c: string }) {
  // 12s loop — one wide browser window cycles through 3 views (4s each), discrete switch
  return (
    <svg width="100%" height="100%" viewBox="0 0 224 116" fill="none">

      {/* window frame */}
      <rect x="0.6" y="0.6" width="222.8" height="114.8" rx="9" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />

      {/* ══ VIEW 1: Customer storefront (0–4s) ══ */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="1;0;0" dur="12s" repeatCount="indefinite" />
        <BrowserChrome url="safecart.com/wireless-speaker" />
        {/* product image */}
        <rect x="10" y="25" width="92" height="82" rx="5" fill={c} fillOpacity="0.06" />
        <ellipse cx="56" cy="58" rx="28" ry="20" fill={c} fillOpacity="0.12" />
        <rect x="40" y="48" width="32" height="24" rx="4" fill={c} fillOpacity="0.18" />
        <circle cx="56" cy="60" r="6" fill={c} fillOpacity="0.3" />
        {/* thumbnails */}
        <rect x="14" y="92" width="13" height="11" rx="2" fill={c} fillOpacity="0.25" stroke={c} strokeWidth="0.6" />
        <rect x="30" y="92" width="13" height="11" rx="2" fill={c} fillOpacity="0.1" />
        <rect x="46" y="92" width="13" height="11" rx="2" fill={c} fillOpacity="0.1" />
        {/* product info */}
        <text x="112" y="31" fontSize="5.5" fill="#9ca3af">TechZone Store</text>
        <text x="112" y="44" fontSize="11" fill="#111827" fontWeight="800">Wireless Speaker</text>
        <text x="112" y="55" fontSize="5.5" fill="#f59e0b">★★★★★</text>
        <text x="146" y="55" fontSize="5" fill="#9ca3af">128 reviews</text>
        <text x="112" y="73" fontSize="15" fill={c} fontWeight="900">$99.00</text>
        <text x="172" y="73" fontSize="7" fill="#9ca3af">$129</text>
        <line x1="171" y1="70.5" x2="188" y2="70.5" stroke="#9ca3af" strokeWidth="0.8" />
        {/* Add to Cart button */}
        <rect x="112" y="82" width="100" height="16" rx="8" fill={c}>
          <animate attributeName="opacity" calcMode="discrete" values="1;1;1;1;0.75;1;1;1;1;1;1;1" dur="12s" repeatCount="indefinite" />
        </rect>
        <text x="156" y="93" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">Add to Cart  →</text>
        {/* cursor pointer hovering button */}
        <g>
          <animate attributeName="opacity" calcMode="discrete" values="0;0;0;1;1;0;0;0;0;0;0;0" dur="12s" repeatCount="indefinite" />
          <path d="M168 86 L168 99 L172 95 L175 101 L178 100 L175 93 L180 93 Z" fill="#111827" stroke="white" strokeWidth="0.8" />
        </g>
      </g>

      {/* ══ VIEW 2: Vendor receives order (4–8s) ══ */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;1;0" dur="12s" repeatCount="indefinite" />
        <BrowserChrome url="vendor.safecart.com/orders" />
        {/* sidebar */}
        <rect x="0.6" y="17" width="44" height="98" fill={c} fillOpacity="0.05" />
        <circle cx="14" cy="29" r="4" fill={c} fillOpacity="0.3" />
        <text x="21" y="31" fontSize="6" fill={c} fontWeight="800">TechZone</text>
        <line x1="6" y1="36" x2="40" y2="36" stroke="#e5e7eb" strokeWidth="0.7" />
        {['Orders','Products','Earnings','Settings'].map((label, i) => (
          <g key={label}>
            <rect x="5" y={40 + i * 13} width="34" height="11" rx="3"
              fill={i === 0 ? c : 'none'} fillOpacity={i === 0 ? 0.14 : 0} />
            <circle cx="11" cy={45.5 + i * 13} r="1.6" fill={i === 0 ? c : '#cbd5e1'} />
            <text x="16" y={48 + i * 13} fontSize="5.5"
              fill={i === 0 ? c : '#9ca3af'} fontWeight={i === 0 ? '700' : '500'}>{label}</text>
          </g>
        ))}
        {/* notification banner */}
        <rect x="52" y="24" width="164" height="22" rx="5" fill="#fffbeb" stroke="#fcd34d" strokeWidth="0.9" />
        <circle cx="64" cy="35" r="5" fill="#f59e0b">
          <animate attributeName="r" values="4.2;5.4;4.2" dur="0.9s" repeatCount="indefinite" />
        </circle>
        <text x="64" y="38" textAnchor="middle" fontSize="7" fill="white" fontWeight="700">!</text>
        <text x="74" y="33" fontSize="6.5" fill="#92400e" fontWeight="700">New Order Received</text>
        <text x="74" y="42" fontSize="5.5" fill="#b45309">#ORD-4821 · just now</text>
        {/* order card */}
        <rect x="52" y="51" width="164" height="58" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="0.9" />
        <text x="60" y="63" fontSize="6" fill="#374151" fontWeight="700">Order #ORD-4821</text>
        <rect x="184" y="56" width="26" height="11" rx="5.5" fill="#dcfce7" />
        <text x="197" y="63.5" textAnchor="middle" fontSize="5.5" fill="#16a34a" fontWeight="700">New</text>
        <line x1="58" y1="68" x2="210" y2="68" stroke="#f3f4f6" strokeWidth="0.9" />
        <text x="60" y="78" fontSize="6" fill="#111827">Wireless Speaker × 1</text>
        <text x="210" y="78" textAnchor="end" fontSize="6.5" fill="#111827" fontWeight="700">$99.00</text>
        <text x="60" y="88" fontSize="5.5" fill="#6b7280">Platform commission (15%)</text>
        <text x="210" y="88" textAnchor="end" fontSize="6" fill="#ef4444">− $14.85</text>
        <line x1="58" y1="93" x2="210" y2="93" stroke="#f3f4f6" strokeWidth="0.9" />
        <text x="60" y="103" fontSize="6.5" fill={c} fontWeight="700">Your earnings</text>
        <text x="210" y="104" textAnchor="end" fontSize="9" fill={c} fontWeight="800">$84.15</text>
      </g>

      {/* ══ VIEW 3: Admin commission ledger (8–12s) ══ */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;1" dur="12s" repeatCount="indefinite" />
        <BrowserChrome url="admin.safecart.com/commissions" />
        {/* stat cards */}
        <rect x="8" y="23" width="66" height="28" rx="5" fill={c} fillOpacity="0.07" stroke={c} strokeWidth="0.6" strokeOpacity="0.2" />
        <text x="41" y="33" textAnchor="middle" fontSize="5" fill={c} fillOpacity="0.55">Total Revenue</text>
        <text x="41" y="45" textAnchor="middle" fontSize="12" fill={c} fontWeight="900">$12,840</text>
        <rect x="79" y="23" width="66" height="28" rx="5" fill={c} fillOpacity="0.07" stroke={c} strokeWidth="0.6" strokeOpacity="0.2" />
        <text x="112" y="33" textAnchor="middle" fontSize="5" fill={c} fillOpacity="0.55">Commissions</text>
        <text x="112" y="45" textAnchor="middle" fontSize="12" fill={c} fontWeight="900">$1,926</text>
        <rect x="150" y="23" width="66" height="28" rx="5" fill={c} fillOpacity="0.07" stroke={c} strokeWidth="0.6" strokeOpacity="0.2" />
        <text x="183" y="33" textAnchor="middle" fontSize="5" fill={c} fillOpacity="0.55">Active Vendors</text>
        <text x="183" y="45" textAnchor="middle" fontSize="12" fill={c} fontWeight="900">24</text>
        {/* ledger */}
        <text x="9" y="62" fontSize="5.5" fill="#374151" fontWeight="700">Commission Ledger</text>
        <line x1="8" y1="65" x2="216" y2="65" stroke="#e5e7eb" strokeWidth="0.8" />
        {/* newest row highlighted */}
        <rect x="8" y="67" width="208" height="14" rx="3" fill="#f0fdf4" stroke={c} strokeWidth="0.8" strokeOpacity="0.35" />
        <text x="14" y="76.5" fontSize="5.5" fill={c} fontWeight="700">#ORD-4821</text>
        <text x="64" y="76.5" fontSize="5.5" fill="#374151">Wireless Speaker</text>
        <text x="150" y="76.5" fontSize="5" fill="#6b7280">TechZone · 15%</text>
        <text x="210" y="76.5" textAnchor="end" fontSize="6.5" fill={c} fontWeight="800">+$14.85</text>
        {/* older rows */}
        <text x="14" y="90" fontSize="5" fill="#9ca3af">#ORD-4820</text>
        <text x="64" y="90" fontSize="5" fill="#9ca3af">Running Shoes</text>
        <text x="150" y="90" fontSize="4.5" fill="#cbd5e1">FashionHub · 12%</text>
        <text x="210" y="90" textAnchor="end" fontSize="5.5" fill="#9ca3af">+$8.40</text>
        <line x1="8" y1="95" x2="216" y2="95" stroke="#f3f4f6" strokeWidth="0.7" />
        <text x="14" y="104" fontSize="5" fill="#cbd5e1">#ORD-4819</text>
        <text x="64" y="104" fontSize="5" fill="#cbd5e1">Coffee Maker</text>
        <text x="150" y="104" fontSize="4.5" fill="#e5e7eb">GadgetZone · 10%</text>
        <text x="210" y="104" textAnchor="end" fontSize="5.5" fill="#cbd5e1">+$19.99</text>
      </g>

    </svg>
  );
}

function PosIcon({ c }: { c: string }) {
  // 6s loop (discrete, 1s steps): tap products → cart fills → charge → payment success
  const tiles = [
    { x: 8,  name: 'Coffee',    price: '3.50' },
    { x: 51, name: 'Croissant', price: '2.50' },
    { x: 94, name: 'Sandwich',  price: '5.50' },
    { x: 8,  name: 'Juice',     price: '4.00', row2: true },
    { x: 51, name: 'Muffin',    price: '2.00', row2: true },
    { x: 94, name: 'Salad',     price: '6.50', row2: true },
  ];
  return (
    <svg width="100%" height="100%" viewBox="0 0 224 116" fill="none">
      {/* app frame */}
      <rect x="0.6" y="0.6" width="222.8" height="114.8" rx="9" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />
      {/* header */}
      <path d="M0 9 a9 9 0 0 1 9 -9 H215 a9 9 0 0 1 9 9 V17 H0 Z" fill={c} fillOpacity="0.1" />
      <line x1="0" y1="17" x2="224" y2="17" stroke="#e5e7eb" strokeWidth="0.8" />
      <circle cx="11" cy="8.5" r="3" fill={c} fillOpacity="0.3" />
      <text x="18" y="11" fontSize="6" fill={c} fontWeight="800">SafeCart POS</text>
      <text x="216" y="11" textAnchor="end" fontSize="5" fill={c} fillOpacity="0.5">Walk-in Customer</text>

      {/* ── LEFT: product grid ── */}
      {/* category pills */}
      {['All', 'Drinks', 'Food', 'Bakery'].map((cat, i) => (
        <g key={cat}>
          <rect x={8 + i * 32} y="22" width="29" height="9" rx="4.5"
            fill={i === 0 ? c : c} fillOpacity={i === 0 ? 1 : 0.08} />
          <text x={22.5 + i * 32} y="28.5" textAnchor="middle" fontSize="4.5"
            fill={i === 0 ? 'white' : c} fillOpacity={i === 0 ? 1 : 0.6} fontWeight="600">{cat}</text>
        </g>
      ))}
      {/* product tiles */}
      {tiles.map((t) => {
        const y = t.row2 ? 75 : 39;
        return (
          <g key={t.name}>
            <rect x={t.x} y={y} width="40" height="32" rx="4" fill={c} fillOpacity="0.05" stroke={c} strokeWidth="0.7" strokeOpacity="0.15" />
            <rect x={t.x + 4} y={y + 3} width="32" height="16" rx="2.5" fill={c} fillOpacity="0.12" />
            <text x={t.x + 6} y={y + 26} fontSize="4.8" fill="#374151" fontWeight="600">{t.name}</text>
            <text x={t.x + 34} y={y + 26} textAnchor="end" fontSize="4.8" fill={c} fontWeight="700">${t.price}</text>
          </g>
        );
      })}
      {/* tap highlight rings (cycle across top row) */}
      <rect x="7" y="38" width="42" height="34" rx="5" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.4">
        <animate attributeName="opacity" calcMode="discrete" values="1;0;0;0;0;0" dur="6s" repeatCount="indefinite" />
      </rect>
      <rect x="50" y="38" width="42" height="34" rx="5" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.4">
        <animate attributeName="opacity" calcMode="discrete" values="0;1;0;0;0;0" dur="6s" repeatCount="indefinite" />
      </rect>
      <rect x="93" y="38" width="42" height="34" rx="5" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="1.4">
        <animate attributeName="opacity" calcMode="discrete" values="0;0;1;0;0;0" dur="6s" repeatCount="indefinite" />
      </rect>

      {/* ── RIGHT: cart / receipt panel ── */}
      <rect x="140" y="20" width="78" height="90" rx="5" fill={c} fillOpacity="0.04" stroke={c} strokeWidth="0.7" strokeOpacity="0.15" />
      <text x="146" y="30" fontSize="5.5" fill="#374151" fontWeight="700">Current Order</text>
      <text x="212" y="30" textAnchor="end" fontSize="4.5" fill={c} fillOpacity="0.5">#1043</text>
      <line x1="144" y1="33" x2="214" y2="33" stroke="#e5e7eb" strokeWidth="0.7" />
      {/* empty state */}
      <text x="179" y="55" textAnchor="middle" fontSize="5" fill="#cbd5e1">
        Tap a product…
        <animate attributeName="opacity" calcMode="discrete" values="1;0;0;0;0;0" dur="6s" repeatCount="indefinite" />
      </text>
      {/* cart line items (appear one by one) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;1;1;1;0;0" dur="6s" repeatCount="indefinite" />
        <text x="146" y="42" fontSize="5" fill="#374151">Coffee × 1</text>
        <text x="212" y="42" textAnchor="end" fontSize="5" fill="#374151">$3.50</text>
      </g>
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;1;1;0;0" dur="6s" repeatCount="indefinite" />
        <text x="146" y="51" fontSize="5" fill="#374151">Croissant × 1</text>
        <text x="212" y="51" textAnchor="end" fontSize="5" fill="#374151">$2.50</text>
      </g>
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;1;0;0" dur="6s" repeatCount="indefinite" />
        <text x="146" y="60" fontSize="5" fill="#374151">Sandwich × 1</text>
        <text x="212" y="60" textAnchor="end" fontSize="5" fill="#374151">$5.50</text>
      </g>
      {/* totals */}
      <line x1="144" y1="68" x2="214" y2="68" stroke="#e5e7eb" strokeWidth="0.7" />
      <text x="146" y="76" fontSize="4.8" fill="#9ca3af">Items</text>
      {[
        { v: '0', k: '1;0;0;0;0;0' },
        { v: '1', k: '0;1;0;0;0;0' },
        { v: '2', k: '0;0;1;0;0;0' },
        { v: '3', k: '0;0;0;1;1;1' },
      ].map((t) => (
        <text key={t.v} x="212" y="76" textAnchor="end" fontSize="4.8" fill="#9ca3af">
          {t.v}
          <animate attributeName="opacity" calcMode="discrete" values={t.k} dur="6s" repeatCount="indefinite" />
        </text>
      ))}
      {/* running total (changes per step) */}
      <text x="146" y="86" fontSize="6" fill="#111827" fontWeight="700">Total</text>
      {[
        { v: '$0.00',  k: '1;0;0;0;0;0' },
        { v: '$3.50',  k: '0;1;0;0;0;0' },
        { v: '$6.00',  k: '0;0;1;0;0;0' },
        { v: '$11.50', k: '0;0;0;1;1;1' },
      ].map((t) => (
        <text key={t.v} x="212" y="86" textAnchor="end" fontSize="7.5" fill={c} fontWeight="800">
          {t.v}
          <animate attributeName="opacity" calcMode="discrete" values={t.k} dur="6s" repeatCount="indefinite" />
        </text>
      ))}
      {/* Charge button */}
      <rect x="144" y="93" width="70" height="13" rx="6.5" fill={c}>
        <animate attributeName="opacity" calcMode="discrete" values="0.4;0.6;0.8;1;1;1" dur="6s" repeatCount="indefinite" />
      </rect>
      <text x="179" y="101.5" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="700">
        Charge
        <animate attributeName="opacity" calcMode="discrete" values="1;1;1;0;0;0" dur="6s" repeatCount="indefinite" />
      </text>
      <text x="179" y="101.5" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="700">
        Charge $11.50
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;1;0;0" dur="6s" repeatCount="indefinite" />
      </text>

      {/* ── Payment success overlay (steps 4–5) ── */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;0;1;1" dur="6s" repeatCount="indefinite" />
        <rect x="1.2" y="17.5" width="221.6" height="97.3" rx="8" fill="white" fillOpacity="0.97" />
        <circle cx="112" cy="48" r="16" fill={c} fillOpacity="0.12" />
        <circle cx="112" cy="48" r="11" fill={c} />
        <path d="M106 48 L110.5 52.5 L119 43" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="112" y="75" textAnchor="middle" fontSize="9" fill="#111827" fontWeight="800">Payment Successful</text>
        <text x="112" y="87" textAnchor="middle" fontSize="6.5" fill={c} fontWeight="700">$11.50 paid · Cash</text>
        <text x="112" y="98" textAnchor="middle" fontSize="5" fill="#9ca3af">Order #1043 · Receipt printed</text>
      </g>
    </svg>
  );
}

function TruckIcon({ c }: { c: string }) {
  // Live delivery map — scooter drives the route from store → customer, ETA counts down
  const ROUTE = 'M26 78 C 72 82, 58 50, 104 48 S 168 34, 198 32';
  return (
    <svg width="100%" height="100%" viewBox="0 0 224 116" fill="none">
      {/* app frame */}
      <rect x="0.6" y="0.6" width="222.8" height="114.8" rx="9" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />

      {/* ── MAP background ── */}
      <clipPath id="mapClip">
        <path d="M1.2 9 a8 8 0 0 1 8 -8 H215 a8 8 0 0 1 8 8 V88 H1.2 Z" />
      </clipPath>
      <g clipPath="url(#mapClip)">
        <rect x="0" y="0" width="224" height="88" fill={c} fillOpacity="0.04" />
        {/* city blocks */}
        {[
          [10, 20, 34, 22], [52, 14, 40, 20], [150, 12, 46, 18],
          [12, 56, 38, 24], [120, 60, 44, 24], [176, 52, 40, 26], [70, 62, 36, 22],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx="2" fill={c} fillOpacity="0.05" stroke={c} strokeWidth="0.5" strokeOpacity="0.1" />
        ))}
        {/* park */}
        <rect x="98" y="14" width="40" height="22" rx="3" fill={c} fillOpacity="0.1" />
        {/* streets */}
        {[24, 48, 72].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="224" y2={y} stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
        ))}
        {[48, 96, 148, 196].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="88" stroke="white" strokeWidth="2.5" strokeOpacity="0.7" />
        ))}

        {/* planned route (faint) */}
        <path id="delivRoute" d={ROUTE} fill="none" stroke={c} strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round" />
        {/* traveled route (draws as scooter moves) */}
        <path d={ROUTE} fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" pathLength={100} strokeDasharray="100">
          <animate attributeName="stroke-dashoffset" values="100;0;0" keyTimes="0;0.82;1" dur="6s" repeatCount="indefinite" />
        </path>

        {/* pickup pin (store) */}
        <circle cx="26" cy="78" r="4.5" fill="white" stroke={c} strokeWidth="1.6" />
        <rect x="23.5" y="75.5" width="5" height="5" rx="1" fill={c} />

        {/* destination pin (customer home) */}
        <g>
          <circle cx="198" cy="32" r="9" fill={c} fillOpacity="0.15">
            <animate attributeName="r" values="7;11;7" dur="1.6s" repeatCount="indefinite" />
            <animate attributeName="fillOpacity" values="0.2;0;0.2" dur="1.6s" repeatCount="indefinite" />
          </circle>
          <path d="M198 23 C 192 23, 189 28, 189 31 C 189 36, 198 43, 198 43 C 198 43, 207 36, 207 31 C 207 28, 204 23, 198 23 Z" fill={c} />
          <path d="M194 32 L198 28.5 L202 32 M195.5 31 V35 H200.5 V31" stroke="white" strokeWidth="1.1" fill="none" strokeLinejoin="round" />
        </g>

        {/* ── DELIVERY SCOOTER (follows route) ── */}
        <g>
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto"
            keyPoints="0;1;1" keyTimes="0;0.82;1" calcMode="linear">
            <mpath href="#delivRoute" xlinkHref="#delivRoute" />
          </animateMotion>
          {/* heading puck */}
          <circle r="8.5" fill={c} fillOpacity="0.18" />
          <circle r="6.5" fill={c} stroke="white" strokeWidth="1.2" />
          {/* scooter glyph (white) */}
          <g transform="scale(0.42) translate(-9 -7)">
            <circle cx="4" cy="13" r="3" fill="none" stroke="white" strokeWidth="1.8" />
            <circle cx="20" cy="13" r="3" fill="none" stroke="white" strokeWidth="1.8" />
            <path d="M4 13 L9 13 L12 6 L16 6" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 13 H17 L20 13" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            <rect x="2" y="3" width="6" height="6" rx="1" fill="white" />
          </g>
        </g>
      </g>

      {/* ── BOTTOM: live tracking card ── */}
      <line x1="1.2" y1="88" x2="222.8" y2="88" stroke="#e5e7eb" strokeWidth="0.8" />
      {/* status row */}
      <circle cx="12" cy="98" r="2.6" fill="#16a34a">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.1s" repeatCount="indefinite" />
      </circle>
      <text x="18" y="100.5" fontSize="6" fill="#111827" fontWeight="700">Out for delivery</text>
      <text x="84" y="100.5" fontSize="5" fill="#9ca3af">· Order #4821</text>
      {/* ETA (counts down) */}
      {[
        { v: 'ETA 9 min',  k: '1;1;0;0;0;0' },
        { v: 'ETA 5 min',  k: '0;0;1;1;0;0' },
        { v: 'ETA 2 min',  k: '0;0;0;0;1;0' },
        { v: 'Arrived ✓',  k: '0;0;0;0;0;1' },
      ].map((t) => (
        <text key={t.v} x="216" y="100.5" textAnchor="end" fontSize="6" fill={c} fontWeight="800">
          {t.v}
          <animate attributeName="opacity" calcMode="discrete" values={t.k} dur="6s" repeatCount="indefinite" />
        </text>
      ))}
      {/* driver row */}
      <circle cx="12" cy="108" r="4.5" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="0.8" />
      <text x="12" y="110" textAnchor="middle" fontSize="5" fill={c} fontWeight="700">R</text>
      <text x="20" y="107" fontSize="5.5" fill="#374151" fontWeight="600">Rahim Uddin</text>
      <text x="20" y="113" fontSize="4.5" fill="#9ca3af">Delivery Partner · ★ 4.9</text>
      {/* progress bar */}
      <rect x="120" y="106" width="76" height="4" rx="2" fill={c} fillOpacity="0.12" />
      <rect x="120" y="106" width="10" height="4" rx="2" fill={c}>
        <animate attributeName="width" values="6;72;72" keyTimes="0;0.82;1" dur="6s" repeatCount="indefinite" />
      </rect>
      {/* call button */}
      <circle cx="208" cy="108" r="6" fill={c} fillOpacity="0.12" />
      <path d="M205.4 105.6 c0.4 1.6 1.4 2.6 3 3 l1-1.2 1.6 0.6 -0.2 1.8 c-2.8 0.5 -5.6 -2.3 -5.1 -5.1 l1.8 -0.2 0.6 1.6 z" fill={c} />
    </svg>
  );
}

function MobileIcon({ c }: { c: string }) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 160 100" fill="none">
      <rect x="10" y="10" width="38" height="76" rx="6" stroke={c} strokeWidth="1.3" fill="none" />
      <rect x="13" y="18" width="32" height="54" rx="2" fill={c} fillOpacity="0.05" />
      <circle cx="29" cy="81" r="2.5" stroke={c} strokeWidth="1" fill="none" />
      <text x="29" y="26" textAnchor="middle" fontSize="5" fill={c} fontWeight="700">CUSTOMER</text>
      <rect x="15" y="30" width="12" height="10" rx="1.5" fill={c} fillOpacity="0.2" />
      <rect x="30" y="30" width="12" height="10" rx="1.5" fill={c} fillOpacity="0.14" />
      <rect x="15" y="43" width="12" height="10" rx="1.5" fill={c} fillOpacity="0.1" />
      <rect x="30" y="43" width="12" height="10" rx="1.5" fill={c} fillOpacity="0.2" />
      <rect x="15" y="57" width="27" height="8" rx="4" fill={c} fillOpacity="0.65">
        <animate attributeName="fillOpacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x="29" y="63" textAnchor="middle" fontSize="5" fill="white">Add to Cart</text>
      <rect x="61" y="6" width="38" height="84" rx="6" stroke={c} strokeWidth="1.6" fill="none" />
      <rect x="64" y="15" width="32" height="62" rx="2" fill={c} fillOpacity="0.07" />
      <circle cx="80" cy="87" r="2.5" stroke={c} strokeWidth="1.2" fill="none" />
      <text x="80" y="24" textAnchor="middle" fontSize="5" fill={c} fontWeight="700">VENDOR</text>
      <rect x="66" y="28" width="28" height="6" rx="2" fill={c} fillOpacity="0.15" />
      <rect x="66" y="37" width="28" height="6" rx="2" fill={c} fillOpacity="0.1" />
      <rect x="66" y="46" width="28" height="6" rx="2" fill={c} fillOpacity="0.15" />
      <rect x="66" y="57" width="6" height="14" rx="1" fill={c} fillOpacity="0.2" />
      <rect x="74" y="53" width="6" height="18" rx="1" fill={c} fillOpacity="0.35" />
      <rect x="82" y="49" width="6" height="22" rx="1" fill={c} fillOpacity="0.55">
        <animate attributeName="height" values="8;22;8" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="y" values="63;49;63" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <rect x="112" y="10" width="38" height="76" rx="6" stroke={c} strokeWidth="1.3" fill="none" />
      <rect x="115" y="18" width="32" height="54" rx="2" fill={c} fillOpacity="0.05" />
      <circle cx="131" cy="81" r="2.5" stroke={c} strokeWidth="1" fill="none" />
      <text x="131" y="26" textAnchor="middle" fontSize="5" fill={c} fontWeight="700">DELIVERY</text>
      <rect x="117" y="30" width="28" height="28" rx="2" fill={c} fillOpacity="0.06" stroke={c} strokeWidth="0.7" strokeOpacity="0.3" />
      <line x1="117" y1="44" x2="145" y2="44" stroke={c} strokeWidth="0.7" strokeOpacity="0.2" />
      <line x1="131" y1="30" x2="131" y2="58" stroke={c} strokeWidth="0.7" strokeOpacity="0.2" />
      <path d="M120 52 Q127 38 142 35" stroke={c} strokeWidth="1.2" strokeDasharray="2 1.5" fill="none" />
      <circle cx="131" cy="42" r="3" fill={c}>
        <animateTransform attributeName="transform" type="translate" values="0,0;11,-7;11,-7" dur="3s" repeatCount="indefinite" />
      </circle>
      <rect x="117" y="63" width="28" height="7" rx="3.5" fill={c} fillOpacity="0.1" />
      <text x="131" y="68.5" textAnchor="middle" fontSize="5" fill={c}>En route</text>
    </svg>
  );
}

function PaymentIcon({ c }: { c: string }) {
  // 6s loop: checkout page → select Stripe gateway → pay → processing → success
  const methods = [
    { y: 38, name: 'Stripe',   sub: 'Credit / Debit Card' },
    { y: 56, name: 'PayPal',   sub: 'Pay with balance' },
    { y: 74, name: 'Razorpay', sub: 'UPI · NetBanking' },
  ];
  return (
    <svg width="100%" height="100%" viewBox="0 0 224 116" fill="none">
      {/* app frame */}
      <rect x="0.6" y="0.6" width="222.8" height="114.8" rx="9" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />
      <BrowserChrome url="safecart.com/checkout" />

      {/* title row */}
      <text x="9" y="29" fontSize="7" fill="#111827" fontWeight="800">Secure Checkout</text>
      <rect x="168" y="22" width="48" height="11" rx="5.5" fill={c} fillOpacity="0.1" />
      <text x="192" y="29.5" textAnchor="middle" fontSize="6" fill={c} fontWeight="800">Total $99.00</text>

      {/* payment method rows */}
      {methods.map((m) => (
        <g key={m.name}>
          <rect x="8" y={m.y} width="208" height="15" rx="4" fill={c} fillOpacity="0.04" stroke={c} strokeWidth="0.7" strokeOpacity="0.15" />
          <circle cx="18" cy={m.y + 7.5} r="3.2" fill="white" stroke={c} strokeWidth="1" strokeOpacity="0.4" />
          <text x="28" y={m.y + 6.5} fontSize="5.8" fill="#374151" fontWeight="700">{m.name}</text>
          <text x="28" y={m.y + 12.5} fontSize="4.5" fill="#9ca3af">{m.sub}</text>
        </g>
      ))}
      {/* brand marks */}
      <text x="208" y="48" textAnchor="end" fontSize="6" fill="#635bff" fontWeight="800">stripe</text>
      <text x="208" y="66" textAnchor="end" fontSize="6" fill="#0070ba" fontWeight="800">PayPal</text>
      <text x="208" y="84" textAnchor="end" fontSize="6" fill="#0c2451" fontWeight="800">Razorpay</text>
      <text x="208" y="92" textAnchor="end" fontSize="4" fill={c} fillOpacity="0.5">+ 23 more gateways</text>

      {/* Stripe selected highlight (steps 1–3) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;1;1;1;0;0" dur="6s" repeatCount="indefinite" />
        <rect x="8" y="38" width="208" height="15" rx="4" fill={c} fillOpacity="0.1" stroke={c} strokeWidth="1.4" />
        <circle cx="18" cy="45.5" r="3.2" fill={c} />
        <circle cx="18" cy="45.5" r="1.3" fill="white" />
        {/* card field hint */}
        <text x="150" y="47.5" textAnchor="end" fontSize="5" fill="#6b7280">VISA •••• 4242</text>
      </g>

      {/* cursor hovering Stripe (step 0) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="1;0;0;0;0;0" dur="6s" repeatCount="indefinite" />
        <path d="M40 42 L40 55 L44 51 L47 57 L50 56 L47 49 L52 49 Z" fill="#111827" stroke="white" strokeWidth="0.8" />
      </g>

      {/* Pay button */}
      <rect x="8" y="94" width="208" height="15" rx="7.5" fill={c}>
        <animate attributeName="opacity" calcMode="discrete" values="0.4;1;1;0.85;0;0" dur="6s" repeatCount="indefinite" />
      </rect>
      {/* button label "Pay $99.00" (steps 0–2) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="1;1;1;0;0;0" dur="6s" repeatCount="indefinite" />
        <path d="M96 100.5 a2 2 0 0 1 4 0 M95 100.5 h6 v4 h-6 z" stroke="white" strokeWidth="1" fill="none" />
        <text x="104" y="104" fontSize="6.5" fill="white" fontWeight="800">Pay $99.00</text>
      </g>
      {/* processing spinner (step 3) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;1;0;0" dur="6s" repeatCount="indefinite" />
        <circle cx="100" cy="101.5" r="4" fill="none" stroke="white" strokeWidth="1.4" strokeOpacity="0.35" />
        <path d="M100 97.5 a4 4 0 0 1 4 4" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" from="0 100 101.5" to="360 100 101.5" dur="0.8s" repeatCount="indefinite" />
        </path>
        <text x="110" y="104" fontSize="6" fill="white" fontWeight="700">Processing…</text>
      </g>
      {/* cursor on Pay button (step 2) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;1;0;0;0" dur="6s" repeatCount="indefinite" />
        <path d="M126 98 L126 111 L130 107 L133 113 L136 112 L133 105 L138 105 Z" fill="#111827" stroke="white" strokeWidth="0.8" />
      </g>

      {/* ── Success overlay (steps 4–5) ── */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;0;1;1" dur="6s" repeatCount="indefinite" />
        <rect x="1.2" y="17.5" width="221.6" height="97.3" rx="8" fill="white" fillOpacity="0.97" />
        <circle cx="112" cy="46" r="16" fill={c} fillOpacity="0.12" />
        <circle cx="112" cy="46" r="11" fill={c} />
        <path d="M106 46 L110.5 50.5 L119 41" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="112" y="73" textAnchor="middle" fontSize="9" fill="#111827" fontWeight="800">Payment Successful</text>
        <text x="112" y="85" textAnchor="middle" fontSize="6.5" fill={c} fontWeight="700">$99.00 paid via Stripe</text>
        <text x="112" y="97" textAnchor="middle" fontSize="5" fill="#9ca3af">Txn #TXN-7741 · Receipt emailed</text>
      </g>
    </svg>
  );
}

function InventoryIcon({ c }: { c: string }) {
  // 6s loop (4 states, discrete): live sale decrements stock 3→2→1→0 (Out of Stock)
  const KT = '0;0.25;0.5;0.75';
  return (
    <svg width="100%" height="100%" viewBox="0 0 224 116" fill="none">
      {/* app frame */}
      <rect x="0.6" y="0.6" width="222.8" height="114.8" rx="9" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />
      {/* header */}
      <path d="M0 9 a9 9 0 0 1 9 -9 H215 a9 9 0 0 1 9 9 V17 H0 Z" fill={c} fillOpacity="0.1" />
      <line x1="0" y1="17" x2="224" y2="17" stroke="#e5e7eb" strokeWidth="0.8" />
      <text x="9" y="11.5" fontSize="6.5" fill={c} fontWeight="800">Inventory</text>
      <circle cx="178" cy="8.5" r="2.4" fill="#16a34a">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.1s" repeatCount="indefinite" />
      </circle>
      <text x="184" y="11" fontSize="5" fill={c} fillOpacity="0.6">Live sync</text>

      {/* column headers */}
      <text x="10" y="27" fontSize="4.8" fill="#9ca3af" fontWeight="700">PRODUCT</text>
      <text x="150" y="27" fontSize="4.8" fill="#9ca3af" fontWeight="700">STOCK</text>
      <text x="182" y="27" fontSize="4.8" fill="#9ca3af" fontWeight="700">STATUS</text>
      <line x1="8" y1="30" x2="216" y2="30" stroke="#e5e7eb" strokeWidth="0.7" />

      {/* ── FOCUS ROW: Wireless Speaker ── */}
      {/* red row tint when out of stock (state 3) */}
      <rect x="6" y="32" width="212" height="20" rx="3" fill="#ef4444" fillOpacity="0.07">
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;1" keyTimes={KT} dur="6s" repeatCount="indefinite" />
      </rect>
      <rect x="10" y="35" width="14" height="14" rx="2.5" fill={c} fillOpacity="0.12" />
      <circle cx="17" cy="42" r="3.5" fill={c} fillOpacity="0.3" />
      <text x="28" y="40" fontSize="5.6" fill="#111827" fontWeight="700">Wireless Speaker</text>
      <text x="28" y="47.5" fontSize="4.5" fill="#9ca3af">SKU: WS-BLK · Black</text>
      {/* stock number (counts down) */}
      {['3', '2', '1', '0'].map((v, i) => (
        <text key={v} x="158" y="46" textAnchor="middle" fontSize="11"
          fill={i >= 2 ? (i === 3 ? '#ef4444' : '#f59e0b') : c} fontWeight="900">
          {v}
          <animate attributeName="opacity" calcMode="discrete"
            values={['1;0;0;0', '0;1;0;0', '0;0;1;0', '0;0;0;1'][i]} keyTimes={KT} dur="6s" repeatCount="indefinite" />
        </text>
      ))}
      {/* status badges */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="1;1;0;0" keyTimes={KT} dur="6s" repeatCount="indefinite" />
        <rect x="180" y="37" width="36" height="11" rx="5.5" fill="#16a34a" fillOpacity="0.14" />
        <text x="198" y="44.5" textAnchor="middle" fontSize="5" fill="#16a34a" fontWeight="700">In Stock</text>
      </g>
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;1;0" keyTimes={KT} dur="6s" repeatCount="indefinite" />
        <rect x="180" y="37" width="36" height="11" rx="5.5" fill="#f59e0b" fillOpacity="0.16" />
        <text x="198" y="44.5" textAnchor="middle" fontSize="5" fill="#b45309" fontWeight="700">Low Stock</text>
      </g>
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;1" keyTimes={KT} dur="6s" repeatCount="indefinite" />
        <rect x="178" y="37" width="40" height="11" rx="5.5" fill="#ef4444" fillOpacity="0.16" />
        <text x="198" y="44.5" textAnchor="middle" fontSize="5" fill="#dc2626" fontWeight="700">Out of Stock</text>
      </g>
      {/* "Sale −1" ping that flashes on each decrement */}
      <g>
        <animate attributeName="opacity" values="0;1;0;0" keyTimes="0;0.04;0.18;1" dur="1.5s" repeatCount="indefinite" />
        <rect x="120" y="36" width="26" height="9" rx="4.5" fill={c} />
        <text x="133" y="42.5" textAnchor="middle" fontSize="5" fill="white" fontWeight="700">−1 sold</text>
      </g>

      {/* ── OTHER ROWS (static) ── */}
      <line x1="8" y1="54" x2="216" y2="54" stroke="#f3f4f6" strokeWidth="0.7" />
      <rect x="10" y="58" width="14" height="14" rx="2.5" fill={c} fillOpacity="0.1" />
      <text x="28" y="63" fontSize="5.6" fill="#111827" fontWeight="700">Running Shoes</text>
      <text x="28" y="70.5" fontSize="4.5" fill="#9ca3af">SKU: RS-42 · Size 42</text>
      <text x="158" y="69" textAnchor="middle" fontSize="11" fill={c} fontWeight="900">47</text>
      <rect x="180" y="60" width="36" height="11" rx="5.5" fill="#16a34a" fillOpacity="0.14" />
      <text x="198" y="67.5" textAnchor="middle" fontSize="5" fill="#16a34a" fontWeight="700">In Stock</text>

      <line x1="8" y1="77" x2="216" y2="77" stroke="#f3f4f6" strokeWidth="0.7" />
      <rect x="10" y="81" width="14" height="14" rx="2.5" fill={c} fillOpacity="0.1" />
      <text x="28" y="86" fontSize="5.6" fill="#111827" fontWeight="700">Ceramic Mug</text>
      <text x="28" y="93.5" fontSize="4.5" fill="#9ca3af">SKU: CM-WHT · White</text>
      <text x="158" y="92" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="900">5</text>
      <rect x="180" y="83" width="36" height="11" rx="5.5" fill="#f59e0b" fillOpacity="0.16" />
      <text x="198" y="90.5" textAnchor="middle" fontSize="5" fill="#b45309" fontWeight="700">Low Stock</text>

      {/* ── Bottom alert bar (appears at out-of-stock) ── */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;1" keyTimes={KT} dur="6s" repeatCount="indefinite" />
        <rect x="6" y="99" width="212" height="13" rx="4" fill="#fef2f2" stroke="#fecaca" strokeWidth="0.8" />
        <circle cx="15" cy="105.5" r="3.4" fill="#ef4444" />
        <text x="15" y="107.5" textAnchor="middle" fontSize="5" fill="white" fontWeight="800">!</text>
        <text x="23" y="107.5" fontSize="5.2" fill="#b91c1c" fontWeight="600">Wireless Speaker is out of stock</text>
        <rect x="170" y="101.5" width="42" height="9" rx="4.5" fill="#ef4444" />
        <text x="191" y="108" textAnchor="middle" fontSize="5" fill="white" fontWeight="700">Restock now</text>
      </g>
    </svg>
  );
}

function CampaignIcon({ c }: { c: string }) {
  // 8s loop: flash-sale countdown ticks 05→00, then product reveals with discount
  const KT8 = '0;0.125;0.25;0.375;0.5;0.625;0.75;0.875';
  // seconds shown during the countdown phase (frames 0–5), hidden in reveal (6–7)
  const secs = [
    { v: '05', o: '1;0;0;0;0;0;0;0' },
    { v: '04', o: '0;1;0;0;0;0;0;0' },
    { v: '03', o: '0;0;1;0;0;0;0;0' },
    { v: '02', o: '0;0;0;1;0;0;0;0' },
    { v: '01', o: '0;0;0;0;1;0;0;0' },
    { v: '00', o: '0;0;0;0;0;1;0;0' },
  ];
  return (
    <svg width="100%" height="100%" viewBox="0 0 224 116" fill="none">
      {/* app frame */}
      <rect x="0.6" y="0.6" width="222.8" height="114.8" rx="9" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />
      <BrowserChrome url="safecart.com/flash-sale" />

      {/* ════ PHASE A: COUNTDOWN (frames 0–5) ════ */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="1;1;1;1;1;1;0;0" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <rect x="1.2" y="17.5" width="221.6" height="97.3" rx="8" fill={c} fillOpacity="0.05" />
        {/* lightning bolt + title (single line) */}
        <path d="M82 28 L77 36 L81 36 L78.5 41 L87 32 L82.5 32 L85 28 Z" fill={c} />
        <text x="90" y="39" fontSize="9" fill={c} fontWeight="900">FLASH SALE</text>
        <text x="112" y="50" textAnchor="middle" fontSize="6" fill={c} fillOpacity="0.6" fontWeight="700">STARTS IN</text>
        {/* countdown boxes HH:MM:SS */}
        <rect x="65" y="54" width="26" height="24" rx="4" fill={c} />
        <rect x="99" y="54" width="26" height="24" rx="4" fill={c} />
        <rect x="133" y="54" width="26" height="24" rx="4" fill={c} />
        <text x="95" y="70" textAnchor="middle" fontSize="11" fill={c} fontWeight="800">:</text>
        <text x="129" y="70" textAnchor="middle" fontSize="11" fill={c} fontWeight="800">:</text>
        <text x="78" y="70.5" textAnchor="middle" fontSize="13" fill="white" fontWeight="800">00</text>
        <text x="112" y="70.5" textAnchor="middle" fontSize="13" fill="white" fontWeight="800">00</text>
        {/* ticking seconds */}
        {secs.map((s) => (
          <text key={s.v} x="146" y="70.5" textAnchor="middle" fontSize="13" fill="white" fontWeight="800">
            {s.v}
            <animate attributeName="opacity" calcMode="discrete" values={s.o} keyTimes={KT8} dur="8s" repeatCount="indefinite" />
          </text>
        ))}
        <text x="78" y="86" textAnchor="middle" fontSize="5" fill={c} fillOpacity="0.5">HRS</text>
        <text x="112" y="86" textAnchor="middle" fontSize="5" fill={c} fillOpacity="0.5">MIN</text>
        <text x="146" y="86" textAnchor="middle" fontSize="5" fill={c} fillOpacity="0.5">SEC</text>
        <text x="112" y="102" textAnchor="middle" fontSize="6.5" fill={c} fontWeight="700">Up to 35% OFF storewide</text>
      </g>

      {/* ════ PHASE B: PRODUCT REVEALED WITH DISCOUNT (frames 6–7) ════ */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;0;0;0;1;1" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        {/* SALE LIVE banner */}
        <rect x="8" y="22" width="208" height="13" rx="4" fill={c} />
        <path d="M16 25 L13 30 L15 30 L13.5 33.5 L18 28.5 L15.5 28.5 L17.5 25 Z" fill="white" />
        <text x="112" y="31" textAnchor="middle" fontSize="6.5" fill="white" fontWeight="800">SALE IS LIVE — Limited stock!</text>

        {/* product image */}
        <rect x="8" y="40" width="86" height="68" rx="5" fill={c} fillOpacity="0.07" />
        <ellipse cx="51" cy="70" rx="26" ry="18" fill={c} fillOpacity="0.12" />
        <rect x="37" y="62" width="28" height="20" rx="3" fill={c} fillOpacity="0.2" />
        <circle cx="51" cy="72" r="5" fill={c} fillOpacity="0.3" />
        {/* discount ribbon */}
        <g>
          <circle cx="84" cy="50" r="13" fill={c}>
            <animate attributeName="r" values="11.5;13.5;11.5" dur="0.9s" repeatCount="indefinite" />
          </circle>
          <text x="84" y="49" textAnchor="middle" fontSize="7.5" fill="white" fontWeight="900">35%</text>
          <text x="84" y="56" textAnchor="middle" fontSize="5" fill="white" fontWeight="700">OFF</text>
        </g>

        {/* product info */}
        <text x="104" y="48" fontSize="5.5" fill="#9ca3af">TechZone Store</text>
        <text x="104" y="61" fontSize="11" fill="#111827" fontWeight="800">Wireless Speaker</text>
        <text x="104" y="71" fontSize="5.5" fill="#f59e0b">★★★★★</text>
        {/* prices */}
        <text x="104" y="88" fontSize="7" fill="#9ca3af">$120</text>
        <line x1="103" y1="85.5" x2="121" y2="85.5" stroke="#9ca3af" strokeWidth="0.9" />
        <text x="126" y="89" fontSize="15" fill={c} fontWeight="900">$79</text>
        <text x="104" y="98" fontSize="5.5" fill={c} fontWeight="700">You save $41 (35%)</text>
        {/* add to cart */}
        <rect x="104" y="101" width="110" height="11" rx="5.5" fill={c} />
        <text x="159" y="109" textAnchor="middle" fontSize="6" fill="white" fontWeight="700">Add to Cart  →</text>
      </g>
    </svg>
  );
}

function WalletIcon({ c }: { c: string }) {
  // 6s loop: tap Add Money → top-up processes → balance increments → new txn appears
  const txns = [
    { y: 61, name: 'Refund · #4820',  sub: 'Yesterday',  amt: '+$8.00',   up: true },
    { y: 79, name: 'Order #4815',     sub: '2 days ago', amt: '−$24.00',  up: false },
    { y: 97, name: 'Withdrawal',      sub: '3 days ago', amt: '−$120.00', up: false },
  ];
  return (
    <svg width="100%" height="100%" viewBox="0 0 224 116" fill="none">
      {/* app frame */}
      <rect x="0.6" y="0.6" width="222.8" height="114.8" rx="9" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />
      {/* header */}
      <path d="M0 9 a9 9 0 0 1 9 -9 H215 a9 9 0 0 1 9 9 V17 H0 Z" fill={c} fillOpacity="0.1" />
      <line x1="0" y1="17" x2="224" y2="17" stroke="#e5e7eb" strokeWidth="0.8" />
      <text x="9" y="11.5" fontSize="6.5" fill={c} fontWeight="800">My Wallet</text>
      <text x="216" y="11.5" textAnchor="end" fontSize="5" fill={c} fillOpacity="0.5">Vendor Account</text>

      {/* ── balance card ── */}
      <rect x="8" y="23" width="104" height="50" rx="7" fill={c} />
      <text x="18" y="35" fontSize="5.5" fill="white" fillOpacity="0.75" fontWeight="600">WALLET BALANCE</text>
      {/* balance (counts up after top-up) */}
      {[
        { v: '$248.50', k: '1;1;0;0;0;0' },
        { v: '$273.50', k: '0;0;1;0;0;0' },
        { v: '$298.50', k: '0;0;0;1;1;1' },
      ].map((b) => (
        <text key={b.v} x="18" y="52" fontSize="16" fill="white" fontWeight="900">
          {b.v}
          <animate attributeName="opacity" calcMode="discrete" values={b.k} dur="6s" repeatCount="indefinite" />
        </text>
      ))}
      {/* chip + account */}
      <rect x="18" y="58" width="9" height="7" rx="1.5" fill="white" fillOpacity="0.5" />
      <text x="31" y="64" fontSize="5" fill="white" fillOpacity="0.7">•••• SafeCart Wallet</text>
      {/* top-up toast on card (steps 2–4) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;1;1;1;0" dur="6s" repeatCount="indefinite" />
        <rect x="74" y="28" width="34" height="11" rx="5.5" fill="white" />
        <text x="91" y="35.5" textAnchor="middle" fontSize="5.5" fill={c} fontWeight="800">+$50.00</text>
      </g>
      {/* processing spinner on card (step 1) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;1;0;0;0;0" dur="6s" repeatCount="indefinite" />
        <circle cx="96" cy="48" r="6" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.35" />
        <path d="M96 42 a6 6 0 0 1 6 6" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" from="0 96 48" to="360 96 48" dur="0.8s" repeatCount="indefinite" />
        </path>
      </g>

      {/* ── action buttons ── */}
      <rect x="8" y="80" width="50" height="14" rx="7" fill={c}>
        <animate attributeName="opacity" calcMode="discrete" values="1;0.7;1;1;1;1" dur="6s" repeatCount="indefinite" />
      </rect>
      <path d="M21 87 h6 M24 84 v6" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <text x="36" y="89" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="700">Add</text>
      <rect x="62" y="80" width="50" height="14" rx="7" fill="none" stroke={c} strokeWidth="1.2" strokeOpacity="0.4" />
      <text x="87" y="89" textAnchor="middle" fontSize="5.5" fill={c} fontWeight="700">Withdraw</text>
      {/* cursor tapping Add Money (step 0) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="1;0;0;0;0;0" dur="6s" repeatCount="indefinite" />
        <path d="M34 84 L34 97 L38 93 L41 99 L44 98 L41 91 L46 91 Z" fill="#111827" stroke="white" strokeWidth="0.8" />
      </g>
      <text x="60" y="105" textAnchor="middle" fontSize="4.8" fill={c} fillOpacity="0.5">Instant top-up · No platform fees</text>

      {/* ── transaction history ── */}
      <text x="124" y="31" fontSize="5.5" fill="#374151" fontWeight="700">Recent Activity</text>
      <line x1="122" y1="34" x2="216" y2="34" stroke="#e5e7eb" strokeWidth="0.7" />
      {/* new top-up row (slides in step 2+) */}
      <g>
        {/* smooth fade-in (quick) instead of an abrupt pop */}
        <animate attributeName="opacity" values="0;0;1;1;1;1" keyTimes="0;0.32;0.42;0.7;0.85;1" dur="6s" repeatCount="indefinite" />
        {/* slide down into place as it appears */}
        <animateTransform attributeName="transform" type="translate"
          values="0 -5;0 -5;0 0;0 0;0 0;0 0" keyTimes="0;0.32;0.42;0.7;0.85;1" dur="6s" repeatCount="indefinite" />
        {/* highlight that flashes bright then settles — pulls the eye */}
        <rect x="122" y="36" width="94" height="16" rx="3" fill={c}>
          <animate attributeName="fill-opacity" values="0.28;0.28;0.28;0.1;0.1;0.1" keyTimes="0;0.42;0.5;0.62;0.85;1" dur="6s" repeatCount="indefinite" />
        </rect>
        <rect x="122" y="36" width="2.5" height="16" rx="1.25" fill={c} />
        <circle cx="131" cy="44" r="5" fill={c} />
        <path d="M131 41 v6 M128 44 h6" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        <text x="140" y="42.5" fontSize="5.4" fill="#111827" fontWeight="800">Top-up received</text>
        <text x="140" y="49" fontSize="4.4" fill="#6b7280">Just now · Card</text>
        <text x="214" y="46.5" textAnchor="end" fontSize="7" fill={c} fontWeight="900">+$50.00</text>
        {/* pulsing NEW badge */}
        <g>
          <rect x="186" y="37" width="16" height="7" rx="3.5" fill={c} />
          <text x="194" y="42.3" textAnchor="middle" fontSize="4.2" fill="white" fontWeight="800">NEW</text>
          <animate attributeName="opacity" values="1;0.35;1" dur="0.9s" repeatCount="indefinite" />
        </g>
      </g>
      {/* existing transactions */}
      {txns.map((t, i) => (
        <g key={t.name}>
          {i > 0 && <line x1="122" y1={t.y - 8} x2="216" y2={t.y - 8} stroke="#f3f4f6" strokeWidth="0.7" />}
          <circle cx="131" cy={t.y + 1.5} r="5" fill={t.up ? `${c}` : '#ef4444'} fillOpacity="0.14" />
          {t.up
            ? <path d={`M131 ${t.y - 1.5} v6 M128 ${t.y + 1.5} h6`} stroke={c} strokeWidth="1.3" strokeLinecap="round" />
            : <path d={`M128 ${t.y + 1.5} h6`} stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />}
          <text x="140" y={t.y} fontSize="5.4" fill="#1f2937" fontWeight="700">{t.name}</text>
          <text x="140" y={t.y + 6.5} fontSize="4.4" fill="#9ca3af">{t.sub}</text>
          <text x="214" y={t.y + 3.5} textAnchor="end" fontSize="6.5" fill={t.up ? c : '#ef4444'} fontWeight="800">{t.amt}</text>
        </g>
      ))}
    </svg>
  );
}

function VariantsIcon({ c }: { c: string }) {
  // 6s loop: tap a colour swatch → product image recolours, name + SKU update
  const KT4 = '0;0.25;0.5;0.75';
  const variants = [
    { name: 'Forest Green', hex: c,         sku: 'TEE-GRN', sx: 118 },
    { name: 'Navy Blue',    hex: '#1e3a8a', sku: 'TEE-NVY', sx: 136 },
    { name: 'Crimson Red',  hex: '#be123c', sku: 'TEE-RED', sx: 154 },
    { name: 'Charcoal',     hex: '#334155', sku: 'TEE-CHR', sx: 172 },
  ];
  const TEE = 'M44 32 L30 40 L24 52 L34 58 L40 55 L40 100 L72 100 L72 55 L78 58 L88 52 L82 40 L68 32 C 64 38, 48 38, 44 32 Z';
  const fillVals = variants.map((v) => v.hex).join(';');
  const opacAt = (i: number) => ['1;0;0;0', '0;1;0;0', '0;0;1;0', '0;0;0;1'][i];
  return (
    <svg width="100%" height="100%" viewBox="0 0 224 116" fill="none">
      {/* app frame */}
      <rect x="0.6" y="0.6" width="222.8" height="114.8" rx="9" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />
      <BrowserChrome url="safecart.com/classic-cotton-tee" />

      {/* ── product image (recolours on selection) ── */}
      <rect x="8" y="22" width="92" height="86" rx="5" fill={c} fillOpacity="0.05" />
      <path d={TEE} stroke="white" strokeWidth="1.4" strokeLinejoin="round" fill={c}>
        <animate attributeName="fill" calcMode="discrete" values={fillVals} keyTimes={KT4} dur="6s" repeatCount="indefinite" />
      </path>
      {/* fabric fold highlights */}
      <path d="M54 40 L54 98" stroke="white" strokeWidth="0.8" strokeOpacity="0.25" />
      <path d="M46 56 L46 96" stroke="white" strokeWidth="0.7" strokeOpacity="0.15" />
      <path d="M64 56 L64 96" stroke="white" strokeWidth="0.7" strokeOpacity="0.15" />
      {/* SKU label (updates) */}
      {variants.map((v, i) => (
        <text key={v.sku} x="54" y="104" textAnchor="middle" fontSize="5" fill={c} fillOpacity="0.55" fontWeight="600">
          SKU: {v.sku}
          <animate attributeName="opacity" calcMode="discrete" values={opacAt(i)} keyTimes={KT4} dur="6s" repeatCount="indefinite" />
        </text>
      ))}

      {/* ── product info ── */}
      <text x="108" y="30" fontSize="9" fill="#111827" fontWeight="800">Classic Cotton Tee</text>
      <text x="108" y="39" fontSize="5" fill="#9ca3af">TechZone Apparel</text>
      <text x="108" y="49" fontSize="5.5" fill="#f59e0b">★★★★☆</text>
      <text x="138" y="49" fontSize="5" fill="#9ca3af">(64)</text>
      <text x="108" y="64" fontSize="13" fill={c} fontWeight="900">$29.00</text>

      {/* colour label + selected name */}
      <text x="108" y="76" fontSize="5.5" fill="#6b7280" fontWeight="600">Colour:</text>
      {variants.map((v, i) => (
        <text key={v.name} x="132" y="76" fontSize="5.5" fill="#111827" fontWeight="700">
          {v.name}
          <animate attributeName="opacity" calcMode="discrete" values={opacAt(i)} keyTimes={KT4} dur="6s" repeatCount="indefinite" />
        </text>
      ))}
      {/* swatches */}
      {variants.map((v) => (
        <circle key={v.sku} cx={v.sx} cy="86" r="6" fill={v.hex} stroke="white" strokeWidth="1" />
      ))}
      {/* selection ring (moves to active swatch) */}
      {variants.map((v, i) => (
        <circle key={v.sku} cx={v.sx} cy="86" r="9" fill="none" stroke={v.hex} strokeWidth="1.4">
          <animate attributeName="opacity" calcMode="discrete" values={opacAt(i)} keyTimes={KT4} dur="6s" repeatCount="indefinite" />
        </circle>
      ))}
      {/* tapping cursor (moves between swatches) */}
      {variants.map((v, i) => (
        <path key={v.sku} d={`M${v.sx + 1} 89 L${v.sx + 1} 99 L${v.sx + 4} 96 L${v.sx + 6.5} 101 L${v.sx + 8.5} 100 L${v.sx + 6} 95 L${v.sx + 10} 95 Z`}
          fill="#111827" stroke="white" strokeWidth="0.7">
          <animate attributeName="opacity" calcMode="discrete" values={opacAt(i)} keyTimes={KT4} dur="6s" repeatCount="indefinite" />
        </path>
      ))}

      {/* size row */}
      <text x="108" y="105" fontSize="5.5" fill="#6b7280" fontWeight="600">Size:</text>
      {['S', 'M', 'L'].map((s, i) => (
        <g key={s}>
          <rect x={128 + i * 16} y="99" width="13" height="9" rx="2"
            fill={i === 1 ? c : 'none'} fillOpacity={i === 1 ? 0.15 : 0}
            stroke={c} strokeWidth={i === 1 ? 1.2 : 0.7} strokeOpacity={i === 1 ? 0.8 : 0.3} />
          <text x={134.5 + i * 16} y="105.5" textAnchor="middle" fontSize="5.5"
            fill={c} fontWeight={i === 1 ? '700' : '400'} fillOpacity={i === 1 ? 1 : 0.5}>{s}</text>
        </g>
      ))}
      {/* in-stock pill */}
      <rect x="182" y="99" width="34" height="9" rx="4.5" fill={c} fillOpacity="0.12" />
      <text x="199" y="105.5" textAnchor="middle" fontSize="5" fill={c} fontWeight="700">In Stock</text>
    </svg>
  );
}

function RefundIcon({ c }: { c: string }) {
  // 9s loop — one window cycles 3 stages: request → admin review → wallet refund
  const KT3 = '0;0.3333;0.6667';
  const step = (i: number) => ['1;0;0', '0;1;0', '0;0;1'][i];
  return (
    <svg width="100%" height="100%" viewBox="0 0 224 116" fill="none">
      {/* app frame */}
      <rect x="0.6" y="0.6" width="222.8" height="114.8" rx="9" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />

      {/* ════ STAGE 1: customer requests a refund ════ */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values={step(0)} keyTimes={KT3} dur="9s" repeatCount="indefinite" />
        <BrowserChrome url="safecart.com/orders/refund" />
        <text x="9" y="29" fontSize="7.5" fill="#111827" fontWeight="800">Request a Refund</text>
        <text x="216" y="29" textAnchor="end" fontSize="5" fill={c} fillOpacity="0.6">Step 1 of 3</text>
        {/* order card */}
        <rect x="8" y="35" width="208" height="24" rx="4" fill={c} fillOpacity="0.05" stroke={c} strokeWidth="0.6" strokeOpacity="0.15" />
        <rect x="13" y="39" width="16" height="16" rx="2.5" fill={c} fillOpacity="0.15" />
        <circle cx="21" cy="47" r="3.5" fill={c} fillOpacity="0.3" />
        <text x="34" y="45" fontSize="5.6" fill="#111827" fontWeight="700">Wireless Speaker</text>
        <text x="34" y="53" fontSize="4.5" fill="#9ca3af">Order #4821 · delivered</text>
        <text x="210" y="49" textAnchor="end" fontSize="7" fill="#111827" fontWeight="800">$99.00</text>
        {/* reason select */}
        <text x="9" y="71" fontSize="5.2" fill="#6b7280" fontWeight="600">Reason for refund</text>
        <rect x="8" y="74" width="208" height="13" rx="3" fill="white" stroke="#d1d5db" strokeWidth="0.8" />
        <text x="14" y="82.5" fontSize="5.5" fill="#374151">Item arrived damaged</text>
        <path d="M206 79 l3 3 l3 -3" stroke="#9ca3af" strokeWidth="1" fill="none" strokeLinecap="round" />
        {/* submit button */}
        <rect x="8" y="92" width="208" height="15" rx="7.5" fill={c} />
        <text x="112" y="102" textAnchor="middle" fontSize="6.5" fill="white" fontWeight="700">Submit Refund Request</text>
        <path d="M150 96 L150 109 L154 105 L157 111 L160 110 L157 103 L162 103 Z" fill="#0b3b24" stroke="white" strokeWidth="0.8">
          <animate attributeName="opacity" values="1;0.4;1" dur="0.9s" repeatCount="indefinite" />
        </path>
      </g>

      {/* ════ STAGE 2: admin reviews & approves ════ */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values={step(1)} keyTimes={KT3} dur="9s" repeatCount="indefinite" />
        <BrowserChrome url="admin.safecart.com/refunds" />
        <text x="9" y="29" fontSize="7.5" fill="#111827" fontWeight="800">Refund Requests</text>
        <rect x="150" y="22" width="66" height="11" rx="5.5" fill="#fef3c7" />
        <text x="183" y="29.5" textAnchor="middle" fontSize="5" fill="#92400e" fontWeight="700">1 pending review</text>
        {/* request card */}
        <rect x="8" y="36" width="208" height="48" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="0.8" />
        <circle cx="20" cy="48" r="5.5" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="0.7" />
        <text x="20" y="50" textAnchor="middle" fontSize="5.5" fill={c} fontWeight="700">J</text>
        <text x="30" y="46" fontSize="5.6" fill="#111827" fontWeight="700">John D. · Order #4821</text>
        <text x="30" y="53.5" fontSize="4.6" fill="#9ca3af">Wireless Speaker · $99.00</text>
        <text x="210" y="48" textAnchor="end" fontSize="8" fill={c} fontWeight="800">$99.00</text>
        {/* reason + evidence */}
        <rect x="14" y="59" width="120" height="20" rx="3" fill={c} fillOpacity="0.05" />
        <text x="19" y="67" fontSize="4.6" fill="#6b7280">Reason: Item arrived damaged</text>
        <text x="19" y="75" fontSize="4.4" fill="#9ca3af">Evidence attached ▸</text>
        <rect x="140" y="59" width="20" height="20" rx="2.5" fill={c} fillOpacity="0.12" stroke={c} strokeWidth="0.6" />
        <path d="M144 74 L150 67 L156 74" stroke={c} strokeWidth="0.9" fill="none" />
        {/* approve / reject */}
        <rect x="166" y="60" width="44" height="9" rx="4.5" fill={c} />
        <text x="188" y="66.5" textAnchor="middle" fontSize="5" fill="white" fontWeight="700">✓ Approve</text>
        <rect x="166" y="71" width="44" height="9" rx="4.5" fill="none" stroke="#d1d5db" strokeWidth="0.8" />
        <text x="188" y="77.5" textAnchor="middle" fontSize="5" fill="#9ca3af" fontWeight="600">Reject</text>
        {/* approve-button pulse highlight */}
        <rect x="166" y="60" width="44" height="9" rx="4.5" fill="none" stroke={c} strokeWidth="1.4">
          <animate attributeName="opacity" values="0;1;0" dur="1.1s" repeatCount="indefinite" />
        </rect>
        {/* cursor on approve */}
        <path d="M190 64 L190 77 L194 73 L197 79 L200 78 L197 71 L202 71 Z" fill="#111827" stroke="white" strokeWidth="0.8" />
        <text x="112" y="103" textAnchor="middle" fontSize="5.2" fill={c} fillOpacity="0.55">Admin verifies the claim before issuing any refund</text>
      </g>

      {/* ════ STAGE 3: refund credited to customer wallet ════ */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values={step(2)} keyTimes={KT3} dur="9s" repeatCount="indefinite" />
        <BrowserChrome url="safecart.com/wallet" />
        {/* success check */}
        <circle cx="112" cy="38" r="13" fill={c} fillOpacity="0.12" />
        <circle cx="112" cy="38" r="9" fill={c} />
        <path d="M107 38 L110.5 41.5 L117 34" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="112" y="60" textAnchor="middle" fontSize="8" fill="#111827" fontWeight="800">Refund Approved</text>
        <text x="112" y="70" textAnchor="middle" fontSize="5.5" fill="#6b7280">$99.00 credited to your wallet</text>
        {/* wallet card */}
        <rect x="34" y="78" width="156" height="30" rx="6" fill={c} />
        <text x="44" y="90" fontSize="5" fill="white" fillOpacity="0.75" fontWeight="600">WALLET BALANCE</text>
        <text x="44" y="103" fontSize="13" fill="white" fontWeight="900">$347.50</text>
        <rect x="142" y="84" width="40" height="11" rx="5.5" fill="white" />
        <text x="162" y="91.5" textAnchor="middle" fontSize="5.5" fill={c} fontWeight="800">+$99.00</text>
        <text x="162" y="104" textAnchor="end" fontSize="4.4" fill="white" fillOpacity="0.7">Refund · #4821</text>
      </g>
    </svg>
  );
}

function TicketIcon({ c }: { c: string }) {
  // 8s loop: customer message → agent typing → agent reply → ticket resolved
  const KT8 = '0;0.125;0.25;0.375;0.5;0.625;0.75;0.875';
  return (
    <svg width="100%" height="100%" viewBox="0 0 224 116" fill="none">
      {/* app frame */}
      <rect x="0.6" y="0.6" width="222.8" height="114.8" rx="9" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />
      {/* header */}
      <path d="M0 9 a9 9 0 0 1 9 -9 H215 a9 9 0 0 1 9 9 V17 H0 Z" fill={c} fillOpacity="0.1" />
      <line x1="0" y1="17" x2="224" y2="17" stroke="#e5e7eb" strokeWidth="0.8" />
      <text x="9" y="11.5" fontSize="6.5" fill={c} fontWeight="800">Help Desk</text>
      {/* status badge: Open → Resolved */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="1;1;1;1;1;1;0;0" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <rect x="176" y="4.5" width="40" height="9" rx="4.5" fill="#fef3c7" />
        <text x="196" y="11" textAnchor="middle" fontSize="5" fill="#92400e" fontWeight="700">● Open</text>
      </g>
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;0;0;0;1;1" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <rect x="170" y="4.5" width="46" height="9" rx="4.5" fill={c} fillOpacity="0.18" />
        <text x="193" y="11" textAnchor="middle" fontSize="5" fill={c} fontWeight="700">✓ Resolved</text>
      </g>

      {/* subject */}
      <text x="9" y="27" fontSize="6.2" fill="#111827" fontWeight="700">Payment gateway not working on mobile</text>
      <text x="9" y="34.5" fontSize="4.6" fill="#9ca3af">Ticket #4821 · Billing</text>
      <line x1="8" y1="38" x2="216" y2="38" stroke="#f3f4f6" strokeWidth="0.7" />

      {/* ── customer message (left) ── */}
      <g>
        <animate attributeName="opacity" values="0;1;1;1;1;1;1;1" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <circle cx="13" cy="49" r="5.5" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="0.7" />
        <text x="13" y="51" textAnchor="middle" fontSize="5.5" fill={c} fontWeight="700">J</text>
        <rect x="22" y="42" width="150" height="22" rx="5" fill="#f3f4f6" />
        <path d="M22 50 L17 55 L27 53 Z" fill="#f3f4f6" />
        <text x="28" y="50" fontSize="5.2" fill="#374151">The payment gateway isn&apos;t working on</text>
        <text x="28" y="58" fontSize="5.2" fill="#374151">mobile checkout. Order #4821.</text>
        <text x="168" y="48" textAnchor="end" fontSize="4" fill="#9ca3af">10:02</text>
      </g>

      {/* ── agent typing indicator (frames 2–3) ── */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;1;1;0;0;0;0" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <rect x="158" y="70" width="48" height="14" rx="7" fill={c} fillOpacity="0.12" />
        <circle cx="172" cy="77" r="2.2" fill={c} fillOpacity="0.7">
          <animate attributeName="cy" values="77;73;77" dur="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="182" cy="77" r="2.2" fill={c} fillOpacity="0.7">
          <animate attributeName="cy" values="77;73;77" dur="0.8s" begin="0.15s" repeatCount="indefinite" />
        </circle>
        <circle cx="192" cy="77" r="2.2" fill={c} fillOpacity="0.7">
          <animate attributeName="cy" values="77;73;77" dur="0.8s" begin="0.3s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ── agent reply (right, frames 4–7) ── */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;0;1;1;1;1" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <circle cx="211" cy="71" r="5.5" fill={c} />
        <text x="211" y="73" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="700">A</text>
        <rect x="56" y="66" width="146" height="25" rx="5" fill={c} fillOpacity="0.12" />
        <path d="M202 73 L207 78 L197 76 Z" fill={c} fillOpacity="0.12" />
        <text x="62" y="74" fontSize="5.2" fill="#1f2937">Hi John! Please clear your cache and</text>
        <text x="62" y="82" fontSize="5.2" fill="#1f2937">retry — we just patched it on our end.</text>
        <text x="62" y="89" fontSize="4" fill={c} fillOpacity="0.6" fontWeight="600">Sarah · Support Agent · 10:05</text>
      </g>

      {/* ── resolved banner (frames 6–7) ── */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;0;0;0;1;1" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <rect x="74" y="96" width="76" height="12" rx="6" fill={c} fillOpacity="0.12" />
        <circle cx="86" cy="102" r="3.4" fill={c} />
        <path d="M84 102 L85.5 103.5 L88 100.5" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="94" y="104" fontSize="5.2" fill={c} fontWeight="700">Ticket Resolved</text>
      </g>
      {/* reply input (frames 0–5, before resolved) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="1;1;1;1;1;1;0;0" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <rect x="8" y="97" width="180" height="13" rx="6.5" fill="white" stroke="#d1d5db" strokeWidth="0.8" />
        <text x="15" y="105.5" fontSize="5" fill="#9ca3af">Type a reply…</text>
        <circle cx="205" cy="103.5" r="7" fill={c} />
        <path d="M201.5 103.5 h6 M205 100.5 l3 3 l-3 3" stroke="white" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function WishlistIcon({ c }: { c: string }) {
  // 8s loop: add a product to wishlist (counter ++) → open Quick View modal in-page
  const KT8 = '0;0.125;0.25;0.375;0.5;0.625;0.75;0.875';
  const heart = (cx: number, cy: number, s: number) =>
    `M${cx} ${cy + s * 0.9} C${cx} ${cy + s * 0.9} ${cx - s} ${cy + s * 0.2} ${cx - s} ${cy - s * 0.25} C${cx - s} ${cy - s * 0.75} ${cx - s * 0.45} ${cy - s} ${cx} ${cy - s * 0.45} C${cx + s * 0.45} ${cy - s} ${cx + s} ${cy - s * 0.75} ${cx + s} ${cy - s * 0.25} C${cx + s} ${cy + s * 0.2} ${cx} ${cy + s * 0.9} ${cx} ${cy + s * 0.9} Z`;
  const cards = [
    { x: 8,   name: 'Wireless Speaker', price: '$99',  qv: true },
    { x: 78,  name: 'Smart Watch',      price: '$129', wish: true },
    { x: 148, name: 'Headphones',       price: '$59' },
  ];
  return (
    <svg width="100%" height="100%" viewBox="0 0 224 116" fill="none">
      {/* app frame */}
      <rect x="0.6" y="0.6" width="222.8" height="114.8" rx="9" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />
      <BrowserChrome url="safecart.com/shop" />

      {/* shop header + wishlist counter */}
      <text x="9" y="29" fontSize="7" fill="#111827" fontWeight="800">Shop</text>
      <path d={heart(200, 26, 5)} fill={c} />
      {/* wishlist count: 2 → 3 */}
      <circle cx="208" cy="21" r="5.5" fill={c} stroke="white" strokeWidth="1" />
      <text x="208" y="23.5" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="800">
        2
        <animate attributeName="opacity" calcMode="discrete" values="1;1;0;0;0;0;0;0" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
      </text>
      <text x="208" y="23.5" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="800">
        3
        <animate attributeName="opacity" calcMode="discrete" values="0;0;1;1;1;1;1;1" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
      </text>

      {/* ── product grid ── */}
      {cards.map((card) => (
        <g key={card.name}>
          <rect x={card.x} y="34" width="66" height="74" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="0.9" />
          <rect x={card.x + 4} y="38" width="58" height="34" rx="3" fill={c} fillOpacity="0.07" />
          <ellipse cx={card.x + 33} cy="55" rx="16" ry="11" fill={c} fillOpacity="0.13" />
          <rect x={card.x + 24} y="49" width="18" height="13" rx="2" fill={c} fillOpacity="0.22" />
          {/* wishlist heart button (outline by default) */}
          <circle cx={card.x + 54} cy="46" r="6" fill="white" stroke="#e5e7eb" strokeWidth="0.8" />
          {!card.wish && <path d={heart(card.x + 54, 46, 3.2)} fill="none" stroke={c} strokeWidth="1" strokeOpacity="0.5" />}
          <text x={card.x + 6} y="84" fontSize="5.4" fill="#111827" fontWeight="700">{card.name}</text>
          <text x={card.x + 6} y="95" fontSize="8" fill={c} fontWeight="900">{card.price}</text>
          <text x={card.x + 6} y="103" fontSize="5" fill="#f59e0b">★★★★☆</text>
        </g>
      ))}

      {/* ── wishlist add on card 2 (heart fills, frames 2+) ── */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;1;1;1;1;1;1" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <path d={heart(132, 46, 3.4)} fill={c}>
          <animate attributeName="opacity" values="1;0.5;1" dur="0.9s" repeatCount="indefinite" />
        </path>
      </g>
      {/* unfilled heart on card 2 before add (frames 0–1) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="1;1;0;0;0;0;0;0" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <path d={heart(132, 46, 3.2)} fill="none" stroke={c} strokeWidth="1" strokeOpacity="0.5" />
      </g>
      {/* cursor tapping card-2 heart (frames 0–1) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="1;1;0;0;0;0;0;0" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <path d="M134 49 L134 60 L138 56 L141 62 L143 61 L140 55 L145 55 Z" fill="#111827" stroke="white" strokeWidth="0.7" />
      </g>
      {/* "Added to Wishlist" toast (frames 2–3) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;1;1;0;0;0;0" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <rect x="78" y="38" width="66" height="11" rx="5.5" fill={c} />
        <path d={heart(86, 43.5, 2.6)} fill="white" />
        <text x="94" y="45.5" fontSize="5" fill="white" fontWeight="700">Added to Wishlist</text>
      </g>

      {/* ── Quick View button on card 1 (frames 3–4) ── */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;1;1;0;0;0" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <rect x="12" y="55" width="58" height="12" rx="6" fill={c} />
        {/* eye icon */}
        <path d="M22 61 C24 58 28 58 30 61 C28 64 24 64 22 61 Z" fill="none" stroke="white" strokeWidth="0.9" />
        <circle cx="26" cy="61" r="1.3" fill="white" />
        <text x="45" y="63" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="700">Quick View</text>
      </g>
      {/* cursor on Quick View (frames 3–4) */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;1;1;0;0;0" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        <path d="M44 60 L44 71 L48 67 L51 73 L53 72 L50 66 L55 66 Z" fill="#111827" stroke="white" strokeWidth="0.7" />
      </g>

      {/* ── Quick View modal (frames 5–7) ── */}
      <g>
        <animate attributeName="opacity" calcMode="discrete" values="0;0;0;0;0;1;1;1" keyTimes={KT8} dur="8s" repeatCount="indefinite" />
        {/* dim backdrop */}
        <rect x="1.2" y="17.5" width="221.6" height="97.3" rx="8" fill="#0f172a" fillOpacity="0.4" />
        {/* modal card */}
        <rect x="22" y="26" width="180" height="82" rx="7" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        {/* close */}
        <path d="M190 33 l6 6 M196 33 l-6 6" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
        {/* product image */}
        <rect x="30" y="34" width="68" height="66" rx="5" fill={c} fillOpacity="0.07" />
        <ellipse cx="64" cy="63" rx="22" ry="15" fill={c} fillOpacity="0.13" />
        <rect x="50" y="55" width="28" height="18" rx="3" fill={c} fillOpacity="0.22" />
        {/* thumbnails */}
        <rect x="33" y="88" width="13" height="9" rx="2" fill={c} fillOpacity="0.25" stroke={c} strokeWidth="0.6" />
        <rect x="49" y="88" width="13" height="9" rx="2" fill={c} fillOpacity="0.1" />
        <rect x="65" y="88" width="13" height="9" rx="2" fill={c} fillOpacity="0.1" />
        {/* details */}
        <text x="106" y="42" fontSize="5" fill="#9ca3af">TechZone Store</text>
        <text x="106" y="54" fontSize="9" fill="#111827" fontWeight="800">Wireless Speaker</text>
        <text x="106" y="64" fontSize="5.5" fill="#f59e0b">★★★★★ <tspan fill="#9ca3af">128</tspan></text>
        <text x="106" y="79" fontSize="13" fill={c} fontWeight="900">$99.00</text>
        {/* add to cart + heart */}
        <rect x="106" y="86" width="74" height="14" rx="7" fill={c} />
        <text x="143" y="95.5" textAnchor="middle" fontSize="6" fill="white" fontWeight="700">Add to Cart</text>
        <circle cx="190" cy="93" r="7" fill="white" stroke={c} strokeWidth="1" />
        <path d={heart(190, 93, 3.6)} fill={c} />
        {/* caption */}
        <text x="106" y="106" fontSize="4.5" fill="#9ca3af">Previewed without leaving the shop page</text>
      </g>
    </svg>
  );
}

const ANIMATED_ICONS: Record<string, (c: string) => React.ReactNode> = {
  store:     (c) => <StoreIcon c={c} />,
  pos:       (c) => <PosIcon c={c} />,
  truck:     (c) => <TruckIcon c={c} />,
  mobile:    (c) => <MobileIcon c={c} />,
  payment:   (c) => <PaymentIcon c={c} />,
  inventory: (c) => <InventoryIcon c={c} />,
  campaign:  (c) => <CampaignIcon c={c} />,
  wallet:    (c) => <WalletIcon c={c} />,
  variants:  (c) => <VariantsIcon c={c} />,
  refund:    (c) => <RefundIcon c={c} />,
  ticket:    (c) => <TicketIcon c={c} />,
  wishlist:  (c) => <WishlistIcon c={c} />,
};

export default function Features() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#f9fafb' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12 max-w-[620px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4"
            style={{ background: `${COLOR}15`, color: COLOR }}
          >
            Everything Included
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            A Complete Multi-Vendor eCommerce Platform — Everything Included
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            Every feature needed to run a profitable multi-vendor marketplace — POS, delivery tracking, mobile apps,
            campaign tools, and 26+ payment gateways — built in from day one, no extra subscriptions required.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {FEATURES.map((f) => {
            const renderIcon = ANIMATED_ICONS[f.icon] ?? ANIMATED_ICONS.store;
            return (
              <div
                key={f.name}
                className="bg-white rounded-2xl border border-[#E5E7EC] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div
                  className="w-full h-40 rounded-xl flex items-center justify-center mb-5 overflow-hidden p-3"
                  style={{ background: `${COLOR}0d` }}
                >
                  <div className="w-full h-full">
                    {renderIcon(COLOR)}
                  </div>
                </div>
                <h3 className="text-[15px] font-bold text-[#0F1112] mb-2">{f.name}</h3>
                <p className="text-[13px] text-[#6b7280] leading-6">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
