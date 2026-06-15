import { COLOR, LIGHT_COLOR } from './constants';

const C = COLOR;
const L = LIGHT_COLOR;

// ─── Large SVG: Animated Chat Engine ────────────────────────────

function SvgChatEngine() {
  const dur = '9s';
  return (
    <svg width="100%" viewBox="0 0 520 196" fill="none" preserveAspectRatio="xMidYMid meet">
      <defs>
        <style>{`
          @keyframes btm-ce-m1  { 0%,4%{opacity:0;transform:translateY(4px)} 11%,85%{opacity:1;transform:translateY(0)} 93%,100%{opacity:0} }
          @keyframes btm-ce-m2  { 0%,28%{opacity:0;transform:translateY(4px)} 36%,85%{opacity:1;transform:translateY(0)} 93%,100%{opacity:0} }
          @keyframes btm-ce-tp  { 0%,42%{opacity:0} 46%,56%{opacity:1} 62%,100%{opacity:0} }
          @keyframes btm-ce-m3  { 0%,60%{opacity:0;transform:translateY(4px)} 67%,85%{opacity:1;transform:translateY(0)} 93%,100%{opacity:0} }
          @keyframes btm-ce-d   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
          @keyframes btm-ce-btn { 0%,84%{transform:scale(1)} 88%{transform:scale(0.93)} 94%,100%{transform:scale(1)} }
        `}</style>
      </defs>

      {/* Left: chat list panel */}
      <rect x="8" y="8" width="178" height="180" rx="11" fill="white" stroke={`${C}15`} strokeWidth="1"/>
      <rect x="8" y="8" width="32" height="180" rx="11" fill={`${C}08`}/>
      <rect x="8" y="40" width="32" height="148" fill={`${C}08`}/>
      {[24,54,84,114,144].map((y, i) => (
        <circle key={y} cx="24" cy={y} r={i === 1 ? 7 : 5} fill={i === 1 ? C : `${C}28`}/>
      ))}
      <text x="48" y="24" fontSize="7" fill="#0F1112" fontWeight="700">All Chats</text>
      {[32,72,112].map((y, i) => (
        <g key={y}>
          <circle cx="50" cy={y + 10} r="8" fill={i === 0 ? L : '#F3F4F6'}/>
          <text x="50" y={y + 14} textAnchor="middle" fontSize="6" fill={i === 0 ? C : '#9ca3af'} fontWeight="800">G</text>
          <rect x="62" y={y + 5} width="50" height="5" rx="2" fill={i === 0 ? `${C}35` : '#EBEBEB'}/>
          <rect x="62" y={y + 14} width="34" height="4" rx="2" fill="#F0F0F0"/>
          {i === 0 && <circle cx="172" cy={y + 10} r="5" fill={C}><animate attributeName="r" values="5;6;5" dur="2s" repeatCount="indefinite"/></circle>}
        </g>
      ))}

      {/* Right: active chat */}
      <rect x="194" y="8" width="318" height="180" rx="11" fill="white" stroke={`${C}15`} strokeWidth="1"/>
      <rect x="194" y="8" width="318" height="34" rx="11" fill={C}/>
      <rect x="194" y="30" width="318" height="12" fill={C}/>
      <circle cx="214" cy="25" r="9" fill="white" fillOpacity="0.18"/>
      <text x="214" y="29.5" textAnchor="middle" fontSize="8" fill="white" fontWeight="800">B</text>
      <text x="228" y="21" fontSize="9" fill="white" fontWeight="700">Botmerze AI</text>
      <circle cx="228" cy="32" r="2.5" fill="#4ade80"/>
      <text x="234" y="36" fontSize="6" fill="white" fillOpacity="0.65"> Online</text>

      {/* Msg 1 — bot greeting */}
      <g style={{animation:`btm-ce-m1 ${dur} ease-in-out infinite`}}>
        <circle cx="212" cy="64" r="7" fill={L}/>
        <text x="212" y="68" textAnchor="middle" fontSize="6" fill={C} fontWeight="800">B</text>
        <rect x="224" y="53" width="142" height="22" rx="8" fill={L}/>
        <text x="232" y="63" fontSize="7.5" fill="#374151">Hi! How can I assist you today?</text>
        <text x="232" y="73" fontSize="5.5" fill="#9ca3af">4:30 PM</text>
      </g>

      {/* Msg 2 — user query */}
      <g style={{animation:`btm-ce-m2 ${dur} ease-in-out infinite`, opacity:0}}>
        <rect x="356" y="84" width="148" height="28" rx="8" fill={`${C}14`}/>
        <text x="364" y="96" fontSize="7" fill="#374151">Looking to buy an office watch.</text>
        <text x="364" y="106" fontSize="7" fill="#374151">Can you show me some options?</text>
        <text x="500" y="120" textAnchor="end" fontSize="5.5" fill="#9ca3af">12:15 PM</text>
      </g>

      {/* Typing dots */}
      <g style={{animation:`btm-ce-tp ${dur} ease-in-out infinite`, opacity:0}}>
        <circle cx="212" cy="132" r="7" fill={L}/>
        <text x="212" y="136" textAnchor="middle" fontSize="6" fill={C} fontWeight="800">B</text>
        <rect x="224" y="122" width="44" height="20" rx="8" fill={L}/>
        <circle cx="237" cy="132" r="2" fill={`${C}bb`} style={{animation:`btm-ce-d 1s ease-in-out 0s infinite`}}/>
        <circle cx="246" cy="132" r="2" fill={`${C}bb`} style={{animation:`btm-ce-d 1s ease-in-out 0.15s infinite`}}/>
        <circle cx="255" cy="132" r="2" fill={`${C}bb`} style={{animation:`btm-ce-d 1s ease-in-out 0.3s infinite`}}/>
      </g>

      {/* Msg 3 — bot response + product cards */}
      <g style={{animation:`btm-ce-m3 ${dur} ease-in-out infinite`, opacity:0}}>
        <circle cx="212" cy="134" r="7" fill={L}/>
        <text x="212" y="138" textAnchor="middle" fontSize="6" fill={C} fontWeight="800">B</text>
        <rect x="224" y="124" width="164" height="14" rx="7" fill={L}/>
        <text x="232" y="133.5" fontSize="7" fill="#374151">I found 2 great office watches:</text>
        {/* Card 1 */}
        <rect x="224" y="142" width="78" height="40" rx="7" fill="white" stroke={`${C}20`} strokeWidth="1"/>
        <rect x="224" y="142" width="78" height="22" rx="7" fill={`${C}0f`}/>
        <rect x="224" y="155" width="78" height="9" fill={`${C}0f`}/>
        <text x="263" y="157" textAnchor="middle" fontSize="6" fill={C} fontWeight="700">Watch Pro</text>
        <text x="263" y="168" textAnchor="middle" fontSize="8" fill={C} fontWeight="800">$179.99</text>
        <rect x="228" y="173" width="70" height="8" rx="3" fill={C} style={{transformOrigin:'263px 177px', animation:`btm-ce-btn ${dur} ease-in-out infinite`}}/>
        <text x="263" y="179.5" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="700">Add to Cart</text>
        {/* Card 2 */}
        <rect x="308" y="142" width="78" height="40" rx="7" fill="white" stroke={`${C}20`} strokeWidth="1"/>
        <rect x="308" y="142" width="78" height="22" rx="7" fill={`${C}0f`}/>
        <rect x="308" y="155" width="78" height="9" fill={`${C}0f`}/>
        <text x="347" y="157" textAnchor="middle" fontSize="6" fill={C} fontWeight="700">Executive</text>
        <text x="347" y="168" textAnchor="middle" fontSize="8" fill={C} fontWeight="800">$219.99</text>
        <rect x="312" y="173" width="70" height="8" rx="3" fill={C}/>
        <text x="347" y="179.5" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="700">Add to Cart</text>
      </g>

      {/* Input */}
      <rect x="202" y="182" width="302" height="5" rx="2" fill={`${C}12`} stroke={`${C}25`} strokeWidth="0.5"/>
    </svg>
  );
}

// ─── Large SVG: Store Sync ────────────────────────────────────────

function SvgStoreSync() {
  return (
    <svg width="100%" viewBox="0 0 520 190" fill="none" preserveAspectRatio="xMidYMid meet">
      <defs>
        <style>{`
          @keyframes btm-ss-cnt { 0%,59%{opacity:0} 65%,90%{opacity:1} 95%,100%{opacity:0} }
        `}</style>
      </defs>

      {/* Center: Botmerze */}
      <circle cx="260" cy="95" r="36" fill={L}/>
      <circle cx="260" cy="95" r="32" fill={C}/>
      <text x="260" y="90" textAnchor="middle" fontSize="18" fill="white" fontWeight="900">B</text>
      <text x="260" y="106" textAnchor="middle" fontSize="7.5" fill="white" fillOpacity="0.75">Botmerze AI</text>

      {/* Left connectors */}
      <line x1="136" y1="72" x2="226" y2="90" stroke={`${C}25`} strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="136" y1="118" x2="226" y2="100" stroke={`${C}25`} strokeWidth="1" strokeDasharray="4 3"/>

      {/* Right connectors */}
      <line x1="294" y1="90" x2="380" y2="72" stroke={`${C}25`} strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="294" y1="100" x2="380" y2="118" stroke={`${C}25`} strokeWidth="1" strokeDasharray="4 3"/>

      {/* WooCommerce */}
      <rect x="54" y="46" width="82" height="52" rx="10" fill="white" stroke={`${C}15`} strokeWidth="1"/>
      <circle cx="95" cy="64" r="12" fill="#96588A"/>
      <text x="95" y="68.5" textAnchor="middle" fontSize="10" fill="white" fontWeight="900">W</text>
      <text x="95" y="85" textAnchor="middle" fontSize="7" fill="#96588A" fontWeight="700">WooCommerce</text>

      {/* Shopify */}
      <rect x="54" y="102" width="82" height="52" rx="10" fill="white" stroke={`${C}15`} strokeWidth="1"/>
      <circle cx="95" cy="120" r="12" fill="#96BF48"/>
      <text x="95" y="124.5" textAnchor="middle" fontSize="10" fill="white" fontWeight="900">S</text>
      <text x="95" y="141" textAnchor="middle" fontSize="7" fill="#96BF48" fontWeight="700">Shopify</text>

      {/* Right: Magento */}
      <rect x="384" y="46" width="82" height="52" rx="10" fill="white" stroke={`${C}15`} strokeWidth="1"/>
      <circle cx="425" cy="64" r="12" fill="#F26322"/>
      <text x="425" y="68.5" textAnchor="middle" fontSize="10" fill="white" fontWeight="900">M</text>
      <text x="425" y="85" textAnchor="middle" fontSize="7" fill="#F26322" fontWeight="700">Magento</text>

      {/* Custom API */}
      <rect x="384" y="102" width="82" height="52" rx="10" fill="white" stroke={`${C}15`} strokeWidth="1"/>
      <circle cx="425" cy="120" r="12" fill="#4F46E5"/>
      <text x="425" y="124.5" textAnchor="middle" fontSize="9" fill="white" fontWeight="900">API</text>
      <text x="425" y="141" textAnchor="middle" fontSize="7" fill="#4F46E5" fontWeight="700">Custom API</text>

      {/* Animated packets — follow actual diagonal lines via animateMotion */}
      {/* WooCommerce → Botmerze (two staggered) */}
      <circle r="4" fill={C} opacity="0">
        <animateMotion path="M136,72 L226,90" dur="3.5s" begin="0s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="3.5s" begin="0s" repeatCount="indefinite"/>
      </circle>
      <circle r="4" fill={C} opacity="0">
        <animateMotion path="M136,72 L226,90" dur="3.5s" begin="1.75s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="3.5s" begin="1.75s" repeatCount="indefinite"/>
      </circle>

      {/* Shopify → Botmerze */}
      <circle r="4" fill="#96BF48" opacity="0">
        <animateMotion path="M136,118 L226,100" dur="3.5s" begin="0.45s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="3.5s" begin="0.45s" repeatCount="indefinite"/>
      </circle>
      <circle r="4" fill="#96BF48" opacity="0">
        <animateMotion path="M136,118 L226,100" dur="3.5s" begin="2.2s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="3.5s" begin="2.2s" repeatCount="indefinite"/>
      </circle>

      {/* Magento → Botmerze */}
      <circle r="4" fill="#F26322" opacity="0">
        <animateMotion path="M380,72 L294,90" dur="3.5s" begin="0.2s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="3.5s" begin="0.2s" repeatCount="indefinite"/>
      </circle>

      {/* Custom API → Botmerze */}
      <circle r="4" fill="#4F46E5" opacity="0">
        <animateMotion path="M380,118 L294,100" dur="3.5s" begin="0.65s" repeatCount="indefinite" calcMode="linear"/>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.88;1" dur="3.5s" begin="0.65s" repeatCount="indefinite"/>
      </circle>

      {/* Sync count */}
      <g style={{animation:'btm-ss-cnt 4s ease-in-out infinite', opacity:0}}>
        <rect x="190" y="140" width="140" height="20" rx="8" fill={`${C}15`}/>
        <text x="260" y="153" textAnchor="middle" fontSize="8" fill={C} fontWeight="700">1,247 products synced</text>
      </g>
    </svg>
  );
}

// ─── Small SVG: Knowledge Base ────────────────────────────────────

function SvgKnowledgeBase() {
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none" preserveAspectRatio="xMidYMid meet">
      <defs>
        <style>{`
          @keyframes btm-kb-p1 { 0%,5%{width:0} 35%,100%{width:102} }
          @keyframes btm-kb-p2 { 0%,20%{width:0} 55%,100%{width:132} }
          @keyframes btm-kb-p3 { 0%,40%{width:0} 75%,100%{width:74} }
          @keyframes btm-kb-c1 { 0%,30%{opacity:0} 38%,100%{opacity:1} }
          @keyframes btm-kb-c2 { 0%,50%{opacity:0} 58%,100%{opacity:1} }
        `}</style>
      </defs>

      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>
      <rect x="0" y="0" width="210" height="28" rx="12" fill={L}/>
      <rect x="0" y="16" width="210" height="12" fill={L}/>
      <rect x="8" y="8" width="16" height="12" rx="2" fill="white" stroke={C} strokeWidth="1"/>
      <text x="16" y="15.5" textAnchor="middle" fontSize="6" fill={C} fontWeight="800">KB</text>
      <text x="30" y="18" fontSize="8" fill={C} fontWeight="700">Knowledge Repository</text>
      <rect x="168" y="8" width="34" height="12" rx="5" fill={C}/>
      <text x="185" y="17" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="700">3 sources</text>

      {/* Row 1 — PDF (complete) */}
      <rect x="8" y="34" width="194" height="30" rx="6" fill={`${C}06`}/>
      <rect x="14" y="40" width="12" height="14" rx="2" fill="#EF4444" opacity="0.85"/>
      <text x="20" y="50" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="800">PDF</text>
      <text x="32" y="47" fontSize="7" fill="#374151" fontWeight="600">product-manual.pdf</text>
      <rect x="32" y="52" width="120" height="5" rx="2.5" fill="#E5E7EC"/>
      <rect x="32" y="52" height="5" rx="2.5" fill={C} style={{animation:'btm-kb-p1 3s ease-out infinite', width:0}}/>
      <g style={{animation:'btm-kb-c1 3s ease-out infinite', opacity:0}}>
        <circle cx="192" cy="49" r="7" fill="#DCFCE7"/>
        <path d="M189 49 l2 2 4-4" stroke="#16A34A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </g>

      {/* Row 2 — URL (complete) */}
      <rect x="8" y="72" width="194" height="30" rx="6" fill={`${C}06`}/>
      <rect x="14" y="78" width="12" height="14" rx="2" fill="#3b82f6" opacity="0.85"/>
      <text x="20" y="88" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="800">URL</text>
      <text x="32" y="85" fontSize="7" fill="#374151" fontWeight="600">store.myshopify.com</text>
      <rect x="32" y="90" width="120" height="5" rx="2.5" fill="#E5E7EC"/>
      <rect x="32" y="90" height="5" rx="2.5" fill="#3b82f6" style={{animation:'btm-kb-p2 3s ease-out 0.8s infinite', width:0}}/>
      <g style={{animation:'btm-kb-c2 3s ease-out 0.8s infinite', opacity:0}}>
        <circle cx="192" cy="87" r="7" fill="#DCFCE7"/>
        <path d="M189 87 l2 2 4-4" stroke="#16A34A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </g>

      {/* Row 3 — YouTube (in progress) */}
      <rect x="8" y="110" width="194" height="30" rx="6" fill={`${C}06`}/>
      <rect x="14" y="116" width="12" height="14" rx="2" fill="#EF4444" opacity="0.85"/>
      <text x="20" y="126" textAnchor="middle" fontSize="5" fill="white" fontWeight="800">YT</text>
      <text x="32" y="123" fontSize="7" fill="#374151" fontWeight="600">tutorial-video-transcript</text>
      <rect x="32" y="128" width="120" height="5" rx="2.5" fill="#E5E7EC"/>
      <rect x="32" y="128" height="5" rx="2.5" fill="#EF4444" style={{animation:'btm-kb-p3 3s ease-out 1.6s infinite', width:0}}/>
    </svg>
  );
}

// ─── Small SVG: Visitor Map ────────────────────────────────────────

function SvgVisitorMap() {
  const PINS = [
    { cx: 64,  cy: 59,  delay: '0s'    },
    { cx: 105, cy: 52,  delay: '0.7s'  },
    { cx: 183, cy: 62,  delay: '1.4s'  },
    { cx: 79,  cy: 100, delay: '0.35s' },
    { cx: 190, cy: 106, delay: '1.0s'  },
    { cx: 136, cy: 69,  delay: '1.8s'  },
  ];
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none" preserveAspectRatio="xMidYMid meet">
      <defs>
        <clipPath id="btm-vm-clip"><rect x="4" y="28" width="202" height="114" rx="4"/></clipPath>
      </defs>

      {/* Card */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>

      {/* Header bar */}
      <rect x="0" y="0" width="210" height="26" rx="12" fill={L}/>
      <rect x="0" y="14" width="210" height="12" fill={L}/>
      <circle cx="16" cy="13" r="6" stroke={C} strokeWidth="1" fill="white"/>
      <ellipse cx="16" cy="13" rx="3" ry="6" stroke={C} strokeWidth="0.8" fill="none"/>
      <line x1="10" y1="13" x2="22" y2="13" stroke={C} strokeWidth="0.8"/>
      <text x="28" y="18" fontSize="8" fill={C} fontWeight="700">Realtime Visitors</text>
      <rect x="163" y="7" width="40" height="12" rx="5" fill="#DCFCE7"/>
      <circle cx="169" cy="13" r="2.5" fill="#16A34A"/>
      <text x="175" y="17" fontSize="6" fill="#16A34A" fontWeight="700">6 active</text>

      {/* Map background */}
      <rect x="4" y="28" width="202" height="114" rx="4" fill="#f0faf9"/>

      {/* World map SVG embedded — tinted teal at low opacity */}
      <image
        href="/products/world-map.svg"
        x="4" y="28"
        width="202" height="114"
        preserveAspectRatio="xMidYMid meet"
        opacity="0.25"
        clipPath="url(#btm-vm-clip)"
        style={{ filter: `sepia(1) saturate(3) hue-rotate(130deg) brightness(0.7)` }}
      />

      {/* Radar-pulse visitor pins */}
      {PINS.map((p) => {
        const d2 = `${parseFloat(p.delay) + 0.5}s`;
        return (
          <g key={`${p.cx}-${p.cy}`}>
            <circle cx={p.cx} cy={p.cy} r="4" fill="none" stroke={C} strokeWidth="1.5">
              <animate attributeName="r" values="4;14" dur="2.4s" begin={p.delay} repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 1 1"/>
              <animate attributeName="opacity" values="0.8;0" dur="2.4s" begin={p.delay} repeatCount="indefinite"/>
            </circle>
            <circle cx={p.cx} cy={p.cy} r="4" fill="none" stroke={C} strokeWidth="0.8">
              <animate attributeName="r" values="4;9" dur="2.4s" begin={d2} repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 1 1"/>
              <animate attributeName="opacity" values="0.5;0" dur="2.4s" begin={d2} repeatCount="indefinite"/>
            </circle>
            <circle cx={p.cx} cy={p.cy} r="2.5" fill={C}/>
          </g>
        );
      })}

      {/* Tooltip — New York */}
      <rect x="70" y="63" width="84" height="36" rx="6" fill="white" stroke={`${C}25`} strokeWidth="1" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.08))"/>
      <circle cx="78" cy="74" r="3.5" fill={`${C}20`}/>
      <circle cx="78" cy="74" r="2" fill={C}/>
      <text x="86" y="71" fontSize="7" fill="#0F1112" fontWeight="700">Guest-59C3</text>
      <text x="86" y="81" fontSize="6" fill="#9ca3af">New York, US</text>
      <rect x="74" y="86" width="74" height="9" rx="4" fill={`${C}12`}/>
      <text x="111" y="92" textAnchor="middle" fontSize="5.5" fill={C} fontWeight="600">/products/watch-pro</text>
    </svg>
  );
}

// ─── Small SVG: Analytics Dashboard ──────────────────────────────

function SvgAnalytics() {
  // baseline=108, bars grow upward, max height=76 → top of tallest bar=32 (below header end=28)
  const BARS = [
    { x: 10,  h: 38, label: 'Mon', color: `${C}45` },
    { x: 41,  h: 54, label: 'Tue', color: `${C}60` },
    { x: 72,  h: 30, label: 'Wed', color: `${C}45` },
    { x: 103, h: 64, label: 'Thu', color: `${C}75` },
    { x: 134, h: 46, label: 'Fri', color: `${C}60` },
    { x: 165, h: 76, label: 'Sat', color: C        },
  ];
  const BASE = 108;
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none" preserveAspectRatio="xMidYMid meet">
      <defs>
        <style>{`
          @keyframes btm-an-b { from{transform:scaleY(0)} to{transform:scaleY(1)} }
        `}</style>
      </defs>

      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>

      {/* Header */}
      <rect x="0" y="0" width="210" height="28" rx="12" fill={L}/>
      <rect x="0" y="16" width="210" height="12" fill={L}/>
      <text x="12" y="18.5" fontSize="8.5" fill={C} fontWeight="700">Analytics Overview</text>
      <rect x="152" y="7" width="46" height="14" rx="5" fill={C}/>
      <text x="175" y="17.5" textAnchor="middle" fontSize="6" fill="white" fontWeight="700">This month</text>

      {/* Y-axis reference lines — behind bars */}
      {[BASE - 50, BASE - 25].map(y => (
        <line key={y} x1="8" y1={y} x2="196" y2={y} stroke={`${C}08`} strokeWidth="0.7" strokeDasharray="3 3"/>
      ))}

      {/* Bars */}
      {BARS.map((b, i) => (
        <g key={b.x}>
          <rect
            x={b.x} y={BASE - b.h} width="24" height={b.h} rx="4"
            fill={b.color}
            style={{
              transformOrigin: `${b.x + 12}px ${BASE}px`,
              animation: `btm-an-b 0.6s ease-out ${i * 0.1}s both`,
            }}
          />
          <text x={b.x + 12} y={BASE + 9} textAnchor="middle" fontSize="5.5" fill={`${C}70`}>{b.label}</text>
        </g>
      ))}
      <line x1="8" y1={BASE} x2="196" y2={BASE} stroke={`${C}15`} strokeWidth="1"/>

      {/* KPI row — below chart, always visible */}
      <line x1="8" y1="124" x2="196" y2="124" stroke={`${C}0f`} strokeWidth="0.5"/>
      {[
        { x: 8,   label: '80%',  sub: 'Deflected' },
        { x: 73,  label: '+35%', sub: 'AOV'        },
        { x: 133, label: '247',  sub: 'Leads'      },
      ].map((k) => (
        <g key={k.x}>
          <rect x={k.x} y={127} width={59} height={18} rx="4" fill={`${C}0a`}/>
          <text x={k.x + 29.5} y={135} textAnchor="middle" fontSize="7" fill={C} fontWeight="800">{k.label}</text>
          <text x={k.x + 29.5} y={142} textAnchor="middle" fontSize="5" fill={`${C}90`}>{k.sub}</text>
        </g>
      ))}
    </svg>
  );
}

// ─── Small SVG: Multi-Client SaaS ─────────────────────────────────

function SvgSaaSClients() {
  const CLIENTS = [
    { init: 'TC', name: 'TechCorp',  status: 'Active',   plan: 'Pro',     statusColor: '#10b981', planBg: C },
    { init: 'MB', name: 'ModaBrand', status: 'Active',   plan: 'Starter', statusColor: '#10b981', planBg: `${C}80` },
    { init: 'GS', name: 'GadgetShop',status: 'Trial',   plan: 'Trial',   statusColor: '#f59e0b', planBg: '#f59e0b' },
    { init: 'FL', name: 'FashionLab', status: 'Active',  plan: 'Pro',     statusColor: '#10b981', planBg: C },
  ];
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none" preserveAspectRatio="xMidYMid meet">
      <defs>
        <style>{`
          @keyframes btm-sc-row { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:translateY(0)} }
        `}</style>
      </defs>

      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>
      <rect x="0" y="0" width="210" height="28" rx="12" fill={L}/>
      <rect x="0" y="16" width="210" height="12" fill={L}/>
      <rect x="8" y="8" width="14" height="12" rx="2" fill="white" stroke={C} strokeWidth="0.8"/>
      <rect x="10" y="10" width="4" height="4" rx="0.5" fill={C}/>
      <rect x="16" y="10" width="4" height="4" rx="0.5" fill={C}/>
      <rect x="10" y="16" width="4" height="2" rx="0.5" fill={C}/>
      <rect x="16" y="16" width="4" height="2" rx="0.5" fill={C}/>
      <text x="28" y="18" fontSize="8.5" fill={C} fontWeight="700">Client Management</text>
      <rect x="168" y="8" width="34" height="12" rx="5" fill={`${C}15`}/>
      <text x="185" y="17" textAnchor="middle" fontSize="6" fill={C} fontWeight="700">4 clients</text>

      {/* Column headers */}
      <text x="40"  y="40" fontSize="6" fill="#9ca3af" fontWeight="600">CLIENT</text>
      <text x="115" y="40" textAnchor="middle" fontSize="6" fill="#9ca3af" fontWeight="600">STATUS</text>
      <text x="178" y="40" textAnchor="middle" fontSize="6" fill="#9ca3af" fontWeight="600">PLAN</text>
      <line x1="6" y1="44" x2="204" y2="44" stroke={`${C}10`} strokeWidth="1"/>

      {CLIENTS.map(({ init, name, status, plan, statusColor, planBg }, i) => {
        const y = 58 + i * 22;
        return (
          <g key={name} style={{animation:`btm-sc-row 0.4s ease-out ${i * 0.1}s both`}}>
            {i % 2 === 0 && <rect x="2" y={y - 7} width="206" height="21" rx="3" fill={`${C}04`}/>}
            <circle cx="18" cy={y + 4} r="9" fill={`${C}18`}/>
            <text x="18" y={y + 8} textAnchor="middle" fontSize="6" fill={C} fontWeight="800">{init}</text>
            <text x="33" y={y + 6} fontSize="7.5" fill="#0F1112" fontWeight="600">{name}</text>
            <circle cx="110" cy={y + 4} r="3.5" fill={statusColor} fillOpacity="0.25"/>
            <circle cx="110" cy={y + 4} r="2" fill={statusColor}/>
            <text x="118" y={y + 8} fontSize="6.5" fill={statusColor} fontWeight="600">{status}</text>
            <rect x="156" y={y - 4} width="38" height="14" rx="5" fill={planBg}/>
            <text x="175" y={y + 5} textAnchor="middle" fontSize="6" fill="white" fontWeight="700">{plan}</text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Small SVG: Lead Generation ───────────────────────────────────

function SvgLeadCapture() {
  const D = '7s';
  // Timing breakpoints (fraction of D):
  // 0–.08: empty | .08–.30: name types | .34–.56: email types | .60–.78: phone types
  // .80–.89: submit btn | .89–.97: success badge | .97–1: reset
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none" preserveAspectRatio="xMidYMid meet">
      <defs>
        {/* Reveal clips — rect width grows to expose text */}
        <clipPath id="btm-lc-cn">
          <rect x="30" y="43" height="11">
            <animate attributeName="width" values="0;0;76;76;0" keyTimes="0;0.08;0.30;0.96;1" dur={D} repeatCount="indefinite" calcMode="spline" keySplines="0 0 1 1;0.35 0 0.65 1;0 0 1 1;0 0 1 1"/>
          </rect>
        </clipPath>
        <clipPath id="btm-lc-ce">
          <rect x="30" y="75" height="11">
            <animate attributeName="width" values="0;0;96;96;0" keyTimes="0;0.34;0.56;0.96;1" dur={D} repeatCount="indefinite" calcMode="spline" keySplines="0 0 1 1;0.35 0 0.65 1;0 0 1 1;0 0 1 1"/>
          </rect>
        </clipPath>
        <clipPath id="btm-lc-cp">
          <rect x="30" y="107" height="11">
            <animate attributeName="width" values="0;0;80;80;0" keyTimes="0;0.60;0.78;0.96;1" dur={D} repeatCount="indefinite" calcMode="spline" keySplines="0 0 1 1;0.35 0 0.65 1;0 0 1 1;0 0 1 1"/>
          </rect>
        </clipPath>
      </defs>

      {/* Card */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>

      {/* Header */}
      <rect x="0" y="0" width="210" height="26" rx="12" fill={L}/>
      <rect x="0" y="14" width="210" height="12" fill={L}/>
      <path d="M17 5 L23.5 8 L23.5 17 C23.5 20.5 17 23.5 17 23.5 C17 23.5 10.5 20.5 10.5 17 L10.5 8Z" fill={C}/>
      <path d="M14.5 14.5 L16.5 16.5 L20 12.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
      <text x="30" y="16.5" fontSize="8" fill={C} fontWeight="700">Lead Capture Form</text>
      <rect x="152" y="7" width="48" height="12" rx="5" fill={`${C}15`}/>
      <circle cx="159" cy="13" r="2" fill="#16A34A"/>
      <text x="164" y="16.5" fontSize="5.5" fill={C} fontWeight="700">127 leads</text>

      {/* ── Name field ── */}
      <text x="10" y="36" fontSize="5.5" fill="#9ca3af" fontWeight="700" letterSpacing="0.5">NAME</text>
      <rect x="8" y="39" width="194" height="19" rx="6" fill="white" stroke={`${C}28`} strokeWidth="1">
        <animate attributeName="stroke" values={`${C}28;${C}80;${C}80;${C}28;${C}28`} keyTimes="0;0.08;0.30;0.32;1" dur={D} repeatCount="indefinite"/>
      </rect>
      <circle cx="20" cy="48.5" r="4" fill={`${C}15`}/>
      <circle cx="20" cy="47" r="1.8" fill={`${C}70`}/>
      <path d="M16.5 52 C16.5 49.8 23.5 49.8 23.5 52" stroke={`${C}70`} strokeWidth="0.9" fill="none"/>
      {/* Actual typed text revealed by clipPath */}
      <text x="30" y="51.5" fontSize="7" fill="#1f2937" fontWeight="500" clipPath="url(#btm-lc-cn)">John Smith</text>
      {/* Cursor moves with text reveal */}
      <rect y="44" width="1.5" height="9" fill={C}>
        <animate attributeName="x" values="30;30;106;106;30" keyTimes="0;0.08;0.30;0.96;1" dur={D} repeatCount="indefinite" calcMode="spline" keySplines="0 0 1 1;0.35 0 0.65 1;0 0 1 1;0 0 1 1"/>
        <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.07;0.09;0.29;0.31;1" dur={D} repeatCount="indefinite"/>
      </rect>

      {/* ── Email field ── */}
      <text x="10" y="68" fontSize="5.5" fill="#9ca3af" fontWeight="700" letterSpacing="0.5">EMAIL</text>
      <rect x="8" y="71" width="194" height="19" rx="6" fill="white" stroke={`${C}28`} strokeWidth="1">
        <animate attributeName="stroke" values={`${C}28;${C}28;${C}80;${C}80;${C}28;${C}28`} keyTimes="0;0.33;0.34;0.56;0.58;1" dur={D} repeatCount="indefinite"/>
      </rect>
      <rect x="13" y="77" width="13" height="9" rx="1.5" fill={`${C}15`} stroke={`${C}40`} strokeWidth="0.7"/>
      <path d="M13 77.8 L19.5 82 L26 77.8" stroke={`${C}70`} strokeWidth="0.8" fill="none"/>
      <text x="30" y="83.5" fontSize="7" fill="#1f2937" fontWeight="500" clipPath="url(#btm-lc-ce)">john@gmail.com</text>
      <rect y="76" width="1.5" height="9" fill={C}>
        <animate attributeName="x" values="30;30;126;126;30" keyTimes="0;0.34;0.56;0.96;1" dur={D} repeatCount="indefinite" calcMode="spline" keySplines="0 0 1 1;0.35 0 0.65 1;0 0 1 1;0 0 1 1"/>
        <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.33;0.35;0.55;0.57;1" dur={D} repeatCount="indefinite"/>
      </rect>

      {/* ── Phone field ── */}
      <text x="10" y="100" fontSize="5.5" fill="#9ca3af" fontWeight="700" letterSpacing="0.5">PHONE</text>
      <rect x="8" y="103" width="194" height="19" rx="6" fill="white" stroke={`${C}28`} strokeWidth="1">
        <animate attributeName="stroke" values={`${C}28;${C}28;${C}80;${C}80;${C}28;${C}28`} keyTimes="0;0.59;0.60;0.78;0.80;1" dur={D} repeatCount="indefinite"/>
      </rect>
      <rect x="13.5" y="107" width="9" height="12" rx="2" fill={`${C}15`} stroke={`${C}40`} strokeWidth="0.7"/>
      <circle cx="18" cy="117" r="1.2" fill={`${C}70`}/>
      <text x="30" y="115.5" fontSize="7" fill="#1f2937" fontWeight="500" clipPath="url(#btm-lc-cp)">+1 555 234 5678</text>
      <rect y="108" width="1.5" height="9" fill={C}>
        <animate attributeName="x" values="30;30;110;110;30" keyTimes="0;0.60;0.78;0.96;1" dur={D} repeatCount="indefinite" calcMode="spline" keySplines="0 0 1 1;0.35 0 0.65 1;0 0 1 1;0 0 1 1"/>
        <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.59;0.61;0.77;0.79;1" dur={D} repeatCount="indefinite"/>
      </rect>

      {/* ── Submit button ── */}
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.80;0.82;0.88;0.90;1" dur={D} repeatCount="indefinite"/>
        <rect x="8" y="129" width="194" height="14" rx="6" fill={C}/>
        <text x="105" y="138.5" textAnchor="middle" fontSize="6.5" fill="white" fontWeight="700">Save Lead &amp; Start Chat</text>
      </g>

      {/* ── Success badge ── */}
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.89;0.91;0.97;1" dur={D} repeatCount="indefinite"/>
        <rect x="20" y="129" width="170" height="14" rx="6" fill="#DCFCE7" stroke="#16A34A" strokeWidth="0.8"/>
        <text x="105" y="138.5" textAnchor="middle" fontSize="6.5" fill="#16A34A" fontWeight="700">✓ Lead saved to dashboard</text>
      </g>
    </svg>
  );
}

// ─── Small SVG: Support Tickets ────────────────────────────────────

function SvgTicketSystem() {
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none" preserveAspectRatio="xMidYMid meet">
      <defs>
        <style>{`
          @keyframes btm-ts-open   { 0%,5%{opacity:1} 36%,100%{opacity:0} }
          @keyframes btm-ts-prog   { 0%,38%{opacity:0} 42%,68%{opacity:1} 72%,100%{opacity:0} }
          @keyframes btm-ts-done   { 0%,70%{opacity:0} 74%,94%{opacity:1} 98%,100%{opacity:0} }
        `}</style>
      </defs>

      {/* Card */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>

      {/* Header */}
      <rect x="0" y="0" width="210" height="26" rx="12" fill={L}/>
      <rect x="0" y="14" width="210" height="12" fill={L}/>
      <text x="12" y="17.5" fontSize="8.5" fill={C} fontWeight="700">Support Tickets</text>
      <rect x="154" y="6" width="48" height="14" rx="6" fill={`${C}18`}/>
      <text x="178" y="16" textAnchor="middle" fontSize="6" fill={C} fontWeight="700">SLA tracking</text>

      {/* Ticket card — white bg, left accent strip */}
      <rect x="8" y="30" width="194" height="80" rx="8" fill="white" stroke={`${C}18`} strokeWidth="1"/>
      <rect x="8" y="30" width="3" height="80" rx="2" fill={C}/>

      <text x="18" y="45" fontSize="7.5" fill="#0F1112" fontWeight="700">Where is my order #4821?</text>
      <text x="18" y="55" fontSize="6" fill="#9ca3af">john@customer.com · 2 hours ago</text>

      {/* Priority badge */}
      <rect x="18" y="60" width="36" height="11" rx="4" fill="#FEF3C7"/>
      <text x="36" y="68" textAnchor="middle" fontSize="6" fill="#D97706" fontWeight="700">High</text>

      {/* Animated status badge */}
      <g style={{animation:'btm-ts-open 7s ease-in-out infinite'}}>
        <rect x="60" y="60" width="32" height="11" rx="4" fill="#DBEAFE"/>
        <text x="76" y="68" textAnchor="middle" fontSize="6" fill="#1D4ED8" fontWeight="700">Open</text>
      </g>
      <g style={{animation:'btm-ts-prog 7s ease-in-out infinite', opacity:0}}>
        <rect x="60" y="60" width="54" height="11" rx="4" fill={`${C}18`}/>
        <text x="87" y="68" textAnchor="middle" fontSize="6" fill={C} fontWeight="700">In Progress</text>
      </g>
      <g style={{animation:'btm-ts-done 7s ease-in-out infinite', opacity:0}}>
        <rect x="60" y="60" width="44" height="11" rx="4" fill="#DCFCE7"/>
        <text x="82" y="68" textAnchor="middle" fontSize="6" fill="#16A34A" fontWeight="700">Resolved</text>
      </g>

      {/* Reply area */}
      <rect x="16" y="76" width="178" height="28" rx="6" fill="white" stroke={`${C}28`} strokeWidth="1"/>
      <text x="24" y="88" fontSize="6" fill="#d1d5db">Reply to customer...</text>
      <rect x="172" y="85" width="16" height="11" rx="3" fill={C}/>
      <text x="180" y="92.5" textAnchor="middle" fontSize="5" fill="white" fontWeight="700">Send</text>

      {/* Divider */}
      <line x1="8" y1="117" x2="202" y2="117" stroke={`${C}10`} strokeWidth="0.8"/>

      {/* Agent row */}
      <circle cx="20" cy="129" r="9" fill={L}/>
      <text x="20" y="133" textAnchor="middle" fontSize="6" fill={C} fontWeight="800">SA</text>
      <text x="34" y="126" fontSize="7" fill="#0F1112" fontWeight="600">Sarah — Support Agent</text>
      <text x="34" y="136" fontSize="5.5" fill="#9ca3af">Assigned · Responding via AI draft</text>
      {/* Pulsing checkmark — use SVG animate instead of CSS transform */}
      <circle cx="198" cy="129" r="7" fill="#DCFCE7">
        <animate attributeName="r" values="7;8.5;7" dur="2s" repeatCount="indefinite"/>
      </circle>
      <path d="M195 129 l2.5 2.5 4.5-4.5" stroke="#16A34A" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

// ─── FEATURES data ─────────────────────────────────────────────────

type Feature = {
  title: string;
  desc: string;
  bgColor: string;
  preview: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: 'AI-Powered Chatbot Engine',
    desc: 'Advanced semantic search with vector similarity technology. Botmerze understands context, intent, and meaning — not just keywords. Delivers accurate, human-like responses that increase customer satisfaction and reduce support load.',
    bgColor: '#E0F2F1',
    preview: <SvgChatEngine />,
  },
  {
    title: 'WooCommerce & Shopify Integration',
    desc: 'Sync live product catalog, inventory, order status, and customer data in real time. The AI answers "Where is my order?" and "Is this in stock?" with live store data — connecting Magento, BigCommerce, and any custom REST API too.',
    bgColor: '#F0FDF4',
    preview: <SvgStoreSync />,
  },
  {
    title: 'Knowledge Base Builder',
    desc: 'Train the chatbot from PDFs, website URLs, YouTube transcripts, and images (OCR). Every document becomes searchable vector embeddings — the AI cites specific content from your own material.',
    bgColor: '#FFF7ED',
    preview: <SvgKnowledgeBase />,
  },
  {
    title: 'Realtime Visitor Tracking',
    desc: 'Live visitor map showing where customers are, which pages they\'re browsing, and their full session history. Use real-time presence to trigger proactive chat invitations at exactly the right moment.',
    bgColor: '#F0F9FF',
    preview: <SvgVisitorMap />,
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Track deflection rate, lead capture volume, AOV impact, and conversation quality from one dashboard. See which knowledge base entries answer the most queries and where human handoffs happen.',
    bgColor: '#E0F2F1',
    preview: <SvgAnalytics />,
  },
  {
    title: 'Multi-Client SaaS Management',
    desc: 'Run Botmerze as a SaaS business. Each client gets an isolated environment — their own chatbot, knowledge base, widget, and analytics. Manage all clients, plans, and billing from a single super-admin panel.',
    bgColor: '#F5F3FF',
    preview: <SvgSaaSClients />,
  },
  {
    title: 'Lead Generation & Contact Capture',
    desc: 'Collect visitor name, email, and phone before or during the chat. Leads are stored in the admin dashboard and exportable for follow-up campaigns — turning every support conversation into a sales pipeline entry.',
    bgColor: '#FEF3C7',
    preview: <SvgLeadCapture />,
  },
  {
    title: 'Support Ticketing System',
    desc: 'Full-featured help desk with ticket routing, priority management, SLA tracking, and agent assignment. When the AI needs human backup, context is preserved — no third-party helpdesk subscription needed.',
    bgColor: '#FFF0F3',
    preview: <SvgTicketSystem />,
  },
];

// ─── Card component ─────────────────────────────────────────────────

function FeatureCard({
  title,
  desc,
  large = false,
  bgColor,
  preview,
}: {
  title: string;
  desc: string;
  large?: boolean;
  bgColor: string;
  preview: React.ReactNode;
}) {
  const imgH = large ? 'h-[200px] sm:h-[260px]' : 'h-[160px] sm:h-[200px]';
  return (
    <div
      className="rounded-2xl border border-[#E5E7EC] overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
      style={{ background: bgColor }}
    >
      <div
        className={`relative w-full overflow-hidden flex items-center justify-center ${imgH}`}
        style={{ background: 'rgba(255,255,255,0.45)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
      >
        {preview}
      </div>
      <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-2">
        <h3 className={`font-bold text-[#0F1112] mb-2 ${large ? 'text-[20px] sm:text-[22px]' : 'text-[16px] sm:text-[18px]'}`}>{title}</h3>
        <p className="text-[13px] text-[#6b7280] leading-6">{desc}</p>
      </div>
    </div>
  );
}

// ─── Section ────────────────────────────────────────────────────────

export default function Features() {
  const topFeatures = FEATURES.slice(0, 2);
  const gridFeatures = FEATURES.slice(2);

  return (
    <section id="features" className="py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: L, color: C }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: C }} />
            What&apos;s Inside Botmerze
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Everything You Need to Launch an AI Chatbot Business
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            From RAG-powered responses to SaaS billing — Botmerze ships complete. No third-party chatbot subscriptions. No locked-in AI platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {topFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} large />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

      </div>
    </section>
  );
}
