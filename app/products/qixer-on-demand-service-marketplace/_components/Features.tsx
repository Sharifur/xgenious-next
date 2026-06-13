import type { CSSProperties } from 'react';
import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

const C = COLOR;
const L = LIGHT_COLOR;

// ── Inline SVG illustrations ───────────────────────────────────

function SvgBuilderAnimated() {
  const panelBg = '#D4D8FA';
  const itemBg = 'white';
  const dur = '3.8s';

  return (
    <svg width="300" height="195" viewBox="0 0 300 195" fill="none" style={{ overflow: 'visible' }}>
      <defs>
        <style>{`
          @keyframes qxb-drag {
            0%,12%  { transform: translate(0px,0px) scale(1); opacity:1; filter:none; }
            20%     { transform: translate(0px,-9px) scale(1.04); opacity:1; filter:drop-shadow(0 6px 12px rgba(99,105,241,0.35)); }
            54%     { transform: translate(150px,82px) scale(1.04); opacity:1; filter:drop-shadow(0 6px 12px rgba(99,105,241,0.35)); }
            63%     { transform: translate(150px,90px) scale(1); opacity:1; filter:none; }
            74%,86% { transform: translate(150px,90px) scale(1); opacity:0; filter:none; }
            87%,100%{ transform: translate(0px,0px) scale(1); opacity:1; filter:none; }
          }
          @keyframes qxb-src {
            0%,18% { opacity:1; }
            22%,85%{ opacity:0.22; }
            87%    { opacity:1; }
            100%   { opacity:1; }
          }
          @keyframes qxb-slot {
            0%,62% { opacity:0; transform:scaleY(0); }
            68%    { opacity:1; transform:scaleY(1); }
            84%    { opacity:1; transform:scaleY(1); }
            88%    { opacity:0; transform:scaleY(0); }
            100%   { opacity:0; }
          }
          @keyframes qxb-cursor {
            0%,14% { transform:translate(0px,0px); opacity:0; }
            19%    { transform:translate(0px,0px); opacity:1; }
            54%    { transform:translate(148px,82px); opacity:1; }
            62%    { transform:translate(148px,88px); opacity:0; }
            100%   { transform:translate(148px,88px); opacity:0; }
          }
          @keyframes qxb-highlight {
            0%,8%  { stroke-opacity:0; }
            12%,22%{ stroke-opacity:1; }
            26%    { stroke-opacity:0; }
            100%   { stroke-opacity:0; }
          }
          .qxb-drag    { animation: qxb-drag    ${dur} ease-in-out infinite; transform-origin: 77px 84px; }
          .qxb-src     { animation: qxb-src     ${dur} ease-in-out infinite; }
          .qxb-slot    { animation: qxb-slot    ${dur} ease-in-out infinite; transform-origin: 225px 174px; }
          .qxb-cursor  { animation: qxb-cursor  ${dur} ease-in-out infinite; }
          .qxb-hl      { animation: qxb-highlight ${dur} ease-in-out infinite; }
        `}</style>
      </defs>

      {/* ── Left panel ── */}
      <rect x="12" y="6" width="130" height="180" rx="9" fill={panelBg}/>
      {/* header */}
      <rect x="12" y="6" width="130" height="26" rx="9" fill="rgba(255,255,255,0.55)"/>
      <rect x="12" y="19" width="130" height="13" fill="rgba(255,255,255,0.55)"/>
      <rect x="22" y="12" width="44" height="7" rx="3" fill={`${C}50`}/>
      <rect x="128" y="12" width="8" height="7" rx="2" fill={`${C}40`}/>

      {/* Left rows (static - excluding row 1 which is animated) */}
      {[40, 98, 126, 154].map((y) => (
        <g key={y}>
          <rect x="20" y={y} width="114" height="22" rx="4" fill={itemBg} opacity="0.85"/>
          <circle cx="30" cy={y+11} r="4" fill={`${C}40`}/>
          <rect x="40" y={y+7} width="54" height="5" rx="2.5" fill={`${C}25`}/>
          <rect x="100" y={y+9} width="16" height="4" rx="2" fill={`${C}15`}/>
          <rect x="122" y={y+9} width="6" height="4" rx="1" fill={`${C}30`}/>
        </g>
      ))}

      {/* Row 1 source (fades during drag) */}
      <g className="qxb-src">
        <rect x="20" y="68" width="114" height="22" rx="4" fill={itemBg} opacity="0.85"/>
        <circle cx="30" cy="79" r="4" fill={`${C}40`}/>
        <rect x="40" y="75" width="66" height="5" rx="2.5" fill={`${C}25`}/>
        <rect x="122" y="77" width="6" height="4" rx="1" fill={`${C}30`}/>
      </g>
      {/* Highlight border on source row */}
      <rect className="qxb-hl" x="20" y="68" width="114" height="22" rx="4" fill="none" stroke={C} strokeWidth="1.5"/>

      {/* ── Right panel ── */}
      <rect x="158" y="6" width="130" height="180" rx="9" fill={panelBg}/>
      <rect x="158" y="6" width="130" height="26" rx="9" fill="rgba(255,255,255,0.55)"/>
      <rect x="158" y="19" width="130" height="13" fill="rgba(255,255,255,0.55)"/>
      <rect x="168" y="12" width="44" height="7" rx="3" fill={`${C}50`}/>
      <rect x="274" y="12" width="8" height="7" rx="2" fill={`${C}40`}/>

      {/* Right rows static */}
      {[40, 68, 96, 124].map((y, i) => (
        <g key={y}>
          <rect x="166" y={y} width="114" height="22" rx="4"
            fill={i === 0 ? `${C}18` : itemBg}
            stroke={i === 0 ? C : 'none'}
            strokeWidth={i === 0 ? 1.5 : 0}
            opacity="0.9"
          />
          <rect x="176" y={y+7} width={i === 0 ? 70 : 58} height="5" rx="2.5" fill={i === 0 ? `${C}50` : `${C}20`}/>
          <rect x="264" y={y+8} width="8" height="8" rx="2"
            fill={i === 0 ? C : `${C}25`}
          />
        </g>
      ))}

      {/* New slot that appears when item drops */}
      <g className="qxb-slot">
        <rect x="166" y="152" width="114" height="22" rx="4" fill={`${C}18`} stroke={C} strokeWidth="1.5"/>
        <rect x="176" y="159" width="70" height="5" rx="2.5" fill={`${C}50`}/>
        <rect x="264" y="158" width="8" height="8" rx="2" fill={C}/>
      </g>

      {/* ── Floating dragged item ── */}
      <g className="qxb-drag">
        <rect x="20" y="68" width="114" height="22" rx="4" fill={itemBg} stroke={C} strokeWidth="1.4"/>
        <circle cx="30" cy="79" r="4" fill={C}/>
        <rect x="40" y="75" width="66" height="5" rx="2.5" fill={`${C}50`}/>
        <rect x="122" y="77" width="6" height="4" rx="1" fill={`${C}60`}/>
      </g>

      {/* ── Cursor ── */}
      <g className="qxb-cursor" style={{ transformOrigin: '126px 74px' }}>
        <path
          d="M126 74 L126 86 L129.5 83 L132 88 L134 87 L131.5 82 L135.5 82 Z"
          fill="white" stroke="#333" strokeWidth="0.8"
        />
      </g>
    </svg>
  );
}

function SvgCommission() {
  const SUB = "M 122,88 C 238,44 368,24 486,88";
  const COM = "M 122,88 C 156,158 452,158 486,88";
  const D = '4s';

  return (
    <svg width="100%" viewBox="0 0 620 180" fill="none" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
      <defs>
        <style>{`
          @keyframes qxc-flow {
            0%   { offset-distance:0%;   opacity:0; }
            8%   { opacity:1; }
            86%  { opacity:1; }
            100% { offset-distance:100%; opacity:0; }
          }
          @keyframes qxc-flow-dim {
            0%   { offset-distance:0%;   opacity:0; }
            8%   { opacity:0.62; }
            86%  { opacity:0.62; }
            100% { offset-distance:100%; opacity:0; }
          }
          @keyframes qxc-glow {
            0%,100% { opacity:0.13; transform:scale(1); }
            50%     { opacity:0.25; transform:scale(1.14); }
          }
          @keyframes qxc-c1 { 0%,22%{opacity:1} 26%,100%{opacity:0} }
          @keyframes qxc-c2 { 0%,24%{opacity:0} 26%,48%{opacity:1} 52%,100%{opacity:0} }
          @keyframes qxc-c3 { 0%,50%{opacity:0} 52%,72%{opacity:1} 76%,100%{opacity:0} }
          @keyframes qxc-c4 { 0%,74%{opacity:0} 76%,96%{opacity:1} 100%{opacity:0} }
        `}</style>
        <marker id="qxcarr2" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={`${C}40`}/>
        </marker>
      </defs>

      {/* ── Provider cards ── */}
      {[20, 74, 128].map((y) => (
        <g key={y}>
          <rect x="32" y={y} width="78" height="32" rx="7" fill="white" stroke={`${C}20`} strokeWidth="1"/>
          <circle cx="47" cy={y + 11} r="5" fill={`${C}35`}/>
          <path d={`M39,${y+27} C39,${y+21} 55,${y+21} 55,${y+27}`} stroke={`${C}35`} strokeWidth="1.1" fill="none"/>
          <rect x="60" y={y + 8} width="36" height="5" rx="2.5" fill={L}/>
          <rect x="60" y={y + 18} width="24" height="4" rx="2" fill={`${C}12`}/>
        </g>
      ))}

      {/* Lines to split node */}
      {[36, 90, 144].map((y) => (
        <line key={y} x1="110" y1={y} x2="118" y2="88"
          stroke={`${C}30`} strokeWidth="1.2" strokeDasharray="3 3" markerEnd="url(#qxcarr2)"
        />
      ))}
      <circle cx="122" cy="88" r="5" fill={C} opacity="0.55"/>

      {/* Paths */}
      <path d={SUB} stroke={C} strokeWidth="1.8" strokeDasharray="7 5"/>
      <path d={COM} stroke={C} strokeWidth="1.8" strokeDasharray="7 5" opacity="0.5"/>

      {/* Labels */}
      <rect x="202" y="20" width="158" height="17" rx="8" fill={L}/>
      <text x="281" y="32" textAnchor="middle" fontSize="8.5" fill={C} fontWeight="700">Monthly Subscription</text>

      <rect x="202" y="143" width="158" height="17" rx="8" fill={`${C}13`}/>
      <text x="281" y="155" textAnchor="middle" fontSize="8.5" fill={C} fontWeight="600">Per-Order Commission</text>

      {/* Recurring badge */}
      <rect x="232" y="47" width="98" height="16" rx="8" fill={C}/>
      <text x="281" y="58.5" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">↻  Recurring fee</text>

      {/* % per order badge */}
      <rect x="236" y="117" width="90" height="16" rx="8" fill="rgba(255,255,255,0.8)" stroke={C} strokeWidth="1"/>
      <text x="281" y="128.5" textAnchor="middle" fontSize="8" fill={C} fontWeight="700">% per order</text>

      {/* Wallet glow */}
      <circle cx="536" cy="88" r="50" fill={C}
        style={{ animation: 'qxc-glow 2.3s ease-in-out infinite', transformOrigin: '536px 88px' }}
      />
      {/* Wallet */}
      <circle cx="536" cy="88" r="38" fill={C}/>
      <text x="536" y="83" textAnchor="middle" fontSize="11" fill="white" fontWeight="800">Your</text>
      <text x="536" y="97" textAnchor="middle" fontSize="11" fill="white" fontWeight="800">Profit</text>

      {/* Counter */}
      {(['$127', '$294', '$461', '$638'] as const).map((v, i) => (
        <text key={v} x="536" y="146" textAnchor="middle" fontSize="13" fill={C} fontWeight="800"
          style={{ animation: `qxc-c${i + 1} 4.6s ease-in-out infinite`, opacity: 0 }}>
          {v}
        </text>
      ))}
      <text x="536" y="159" textAnchor="middle" fontSize="7.5" fill={`${C}75`}>earned today</text>

      {/* ── Dollar icons — subscription path ── */}
      {[0, 1.33, 2.66].map((d) => (
        <g key={`s${d}`}
          style={{ offsetPath: `path('${SUB}')`, animation: `qxc-flow ${D} linear ${d}s infinite` } as CSSProperties}
        >
          <circle cx="0" cy="0" r="10" fill={C}/>
          <text x="0" y="4" textAnchor="middle" fontSize="11" fill="white" fontWeight="800">$</text>
        </g>
      ))}

      {/* ── Dollar icons — commission path ── */}
      {[0.66, 2, 3.33].map((d) => (
        <g key={`c${d}`}
          style={{ offsetPath: `path('${COM}')`, animation: `qxc-flow-dim ${D} linear ${d}s infinite` } as CSSProperties}
        >
          <circle cx="0" cy="0" r="9" fill={C}/>
          <text x="0" y="3.5" textAnchor="middle" fontSize="10" fill="white" fontWeight="800">$</text>
        </g>
      ))}
    </svg>
  );
}

function SvgGps() {
  return (
    <svg width="160" height="110" viewBox="0 0 160 110" fill="none">
      <rect x="20" y="8" width="120" height="24" rx="10" fill="white" stroke={C} strokeWidth="1.3"/>
      <circle cx="36" cy="20" r="5" stroke={C} strokeWidth="1.2"/>
      <line x1="40" y1="24" x2="43" y2="27" stroke={C} strokeWidth="1.3" strokeLinecap="round"/>
      <rect x="50" y="16" width="60" height="8" rx="4" fill={L}/>
      <path d="M55 60 C55 48, 45 42, 45 54 C45 62, 55 68, 55 68 C55 68, 65 62, 65 54 C65 42, 55 48, 55 60Z" fill={C}/>
      <circle cx="55" cy="54" r="4" fill="white"/>
      <path d="M100 70 C100 62, 92 56, 92 66 C92 72, 100 78, 100 78 C100 78, 108 72, 108 66 C108 56, 100 62, 100 70Z" fill={`${C}60`}/>
      <circle cx="100" cy="66" r="3.5" fill="white"/>
      <path d="M128 55 C128 49, 122 44, 122 52 C122 57, 128 62, 128 62 C128 62, 134 57, 134 52 C134 44, 128 49, 128 55Z" fill={`${C}40`}/>
      <circle cx="128" cy="52" r="3" fill="white"/>
      <circle cx="55" cy="90" r="8" fill={L} stroke={C} strokeWidth="1"/>
      <circle cx="100" cy="96" r="6" fill={L}/>
      <circle cx="128" cy="88" r="5" fill={L}/>
    </svg>
  );
}

function SvgChat() {
  return (
    <svg width="100%" height="100%" viewBox="-30 -52 270 252" fill="none" preserveAspectRatio="xMidYMid meet" style={{ display: 'block', maxHeight: '100%' }}>
      <defs>
        <style>{`
          @keyframes qxdot1 { 0%,60%,100%{opacity:.3;transform:translateY(0)} 20%{opacity:1;transform:translateY(-2px)} }
          @keyframes qxdot2 { 0%,60%,100%{opacity:.3;transform:translateY(0)} 33%{opacity:1;transform:translateY(-2px)} }
          @keyframes qxdot3 { 0%,60%,100%{opacity:.3;transform:translateY(0)} 46%{opacity:1;transform:translateY(-2px)} }
        `}</style>
      </defs>

      {/* Card */}
      <rect x="0" y="0" width="210" height="148" rx="14" fill="white" stroke={`${C}18`} strokeWidth="1"/>

      {/* Header */}
      <rect x="0" y="0" width="210" height="34" rx="14" fill={L}/>
      <rect x="0" y="20" width="210" height="14" fill={L}/>
      <circle cx="18" cy="17" r="10" fill={C}/>
      <text x="18" y="21" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">S</text>
      <text x="34" y="13" fontSize="8" fill="#0F1112" fontWeight="700">Service Provider</text>
      <circle cx="34" cy="24" r="3" fill="#10B981"/>
      <text x="40" y="27" fontSize="6.5" fill="#10B981">Online</text>

      {/* Seller bubble (left) */}
      <rect x="8" y="42" width="112" height="28" rx="9" fill={L}/>
      <polygon points="14,70 8,78 26,70" fill={L}/>
      <rect x="16" y="49" width="68" height="6" rx="3" fill={`${C}40`}/>
      <rect x="16" y="59" width="88" height="5" rx="2.5" fill={`${C}25`}/>

      {/* Buyer bubble (right) */}
      <rect x="88" y="84" width="114" height="28" rx="9" fill={C}/>
      <polygon points="196,112 202,120 184,112" fill={C}/>
      <rect x="98" y="91" width="74" height="6" rx="3" fill="rgba(255,255,255,0.5)"/>
      <rect x="98" y="101" width="94" height="5" rx="2.5" fill="rgba(255,255,255,0.35)"/>

      {/* Typing indicator (left) */}
      <rect x="8" y="118" width="44" height="22" rx="9" fill={L}/>
      <polygon points="14,140 8,148 22,140" fill={L}/>
      <circle cx="20" cy="129" r="3" fill={`${C}60`} style={{ animation: 'qxdot1 1.2s ease-in-out infinite' }}/>
      <circle cx="30" cy="129" r="3" fill={`${C}60`} style={{ animation: 'qxdot2 1.2s ease-in-out infinite' }}/>
      <circle cx="40" cy="129" r="3" fill={`${C}60`} style={{ animation: 'qxdot3 1.2s ease-in-out infinite' }}/>

      {/* Input */}
      <rect x="0" y="134" width="210" height="14" fill="white"/>
      <rect x="8" y="134" width="168" height="13" rx="6" fill={L}/>
      <rect x="178" y="134" width="24" height="13" rx="6" fill={C}/>
      <path d="M185 140.5 L188 137 L191 140.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="rotate(90 188 140)"/>
    </svg>
  );
}

function SvgPayout() {
  return (
    <svg width="100%" viewBox="-32 -28 312 204" fill="none" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
      <defs>
        <marker id="po-arr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill={`${C}50`}/>
        </marker>
      </defs>

      {/* ── Left: Seller wallet ── */}
      <rect x="10" y="6" width="104" height="136" rx="12" fill="white" stroke={`${C}18`} strokeWidth="1"/>
      {/* header */}
      <rect x="10" y="6" width="104" height="44" rx="12" fill={C}/>
      <rect x="10" y="32" width="104" height="18" fill={C}/>
      <text x="22" y="21" fontSize="7" fill="rgba(255,255,255,0.65)">Your Balance</text>
      <text x="22" y="37" fontSize="14" fill="white" fontWeight="800">$1,248</text>
      {/* body */}
      <text x="20" y="60" fontSize="6.5" fill={`${C}65`}>Available to withdraw</text>
      <rect x="20" y="66" width="56" height="6" rx="3" fill={L}/>
      <rect x="20" y="76" width="38" height="5" rx="2.5" fill={L}/>
      {/* input row */}
      <rect x="14" y="88" width="92" height="18" rx="6" fill={L} stroke={C} strokeWidth="0.9"/>
      <text x="24" y="100" fontSize="8" fill={C} fontWeight="600">$250.00</text>
      {/* button */}
      <rect x="14" y="110" width="92" height="24" rx="8" fill={C}/>
      <text x="60" y="126" textAnchor="middle" fontSize="7.5" fill="white" fontWeight="700">Request Payout</text>

      {/* ── Arrow ── */}
      <path d="M116 74 L132 74" stroke={`${C}45`} strokeWidth="1.4" strokeDasharray="3 2" markerEnd="url(#po-arr)"/>

      {/* ── Right: Admin queue ── */}
      <rect x="134" y="6" width="104" height="136" rx="12" fill="white" stroke={`${C}18`} strokeWidth="1"/>
      <rect x="134" y="6" width="104" height="28" rx="12" fill={L}/>
      <rect x="134" y="20" width="104" height="14" fill={L}/>
      <text x="186" y="22" textAnchor="middle" fontSize="7.5" fill={C} fontWeight="700">Payout Queue</text>

      {/* Queue rows */}
      {([
        { y: 42,  init: 'JW', amt: '$250', label: 'Pending',  color: '#F59E0B' },
        { y: 74,  init: 'MS', amt: '$480', label: 'Approved', color: '#10B981' },
        { y: 106, init: 'RA', amt: '$180', label: 'Paid',     color: '#6B7280' },
      ] as const).map(({ y, init, amt, label, color }) => (
        <g key={y}>
          <circle cx="148" cy={y + 10} r="10" fill={`${C}16`}/>
          <text x="148" y={y + 14} textAnchor="middle" fontSize="6.5" fill={C} fontWeight="700">{init}</text>
          <rect x="162" y={y + 4} width="36" height="6" rx="3" fill={`${C}16`}/>
          <rect x="162" y={y + 14} width="22" height="4" rx="2" fill={`${C}10`}/>
          <rect x="200" y={y + 3} width="32" height="16" rx="6" fill={`${color}22`}/>
          <text x="216" y={y + 14.5} textAnchor="middle" fontSize="6" fill={color} fontWeight="700">{label}</text>
        </g>
      ))}
    </svg>
  );
}

function SvgCoupon() {
  return (
    <svg width="160" height="110" viewBox="0 0 160 110" fill="none">
      <rect x="16" y="28" width="128" height="56" rx="10" fill="white" stroke={C} strokeWidth="1.3" strokeDasharray="6 4"/>
      <circle cx="16" cy="56" r="8" fill="#F5F6F8"/>
      <circle cx="144" cy="56" r="8" fill="#F5F6F8"/>
      <line x1="60" y1="28" x2="60" y2="84" stroke={C} strokeWidth="1" strokeDasharray="4 3"/>
      <text x="38" y="62" textAnchor="middle" fontSize="22" fill={C} fontWeight="700">%</text>
      <rect x="74" y="38" width="56" height="8" rx="4" fill={L}/>
      <rect x="74" y="50" width="44" height="8" rx="4" fill={L}/>
      <rect x="74" y="62" width="36" height="8" rx="4" fill={`${C}30`}/>
      <text x="74" y="69" fontSize="7" fill={C} fontWeight="600">SAVE20</text>
    </svg>
  );
}

function SvgDashboard() {
  return (
    <svg width="160" height="110" viewBox="0 0 160 110" fill="none">
      <rect x="14" y="14" width="132" height="82" rx="10" fill="white" stroke={C} strokeWidth="1.2"/>
      <rect x="14" y="14" width="132" height="20" rx="10" fill={L}/>
      <rect x="14" y="24" width="132" height="10" fill={L}/>
      <rect x="22" y="18" width="40" height="8" rx="4" fill={C}/>
      <rect x="26" y="48" width="24" height="36" rx="4" fill={L}/>
      <rect x="58" y="36" width="24" height="48" rx="4" fill={C}/>
      <rect x="90" y="54" width="24" height="30" rx="4" fill={L}/>
      <rect x="122" y="42" width="14" height="42" rx="4" fill={`${C}50`}/>
    </svg>
  );
}

function SvgApps() {
  return (
    <svg width="160" height="110" viewBox="0 0 160 110" fill="none">
      {/* Buyer phone */}
      <rect x="22" y="8" width="50" height="88" rx="10" fill="white" stroke={C} strokeWidth="1.3"/>
      <rect x="22" y="8" width="50" height="14" rx="10" fill={C}/>
      <rect x="22" y="14" width="50" height="8" fill={C}/>
      <circle cx="47" cy="13" r="3" fill="rgba(255,255,255,0.4)"/>
      <rect x="30" y="28" width="34" height="18" rx="5" fill={L}/>
      <rect x="30" y="50" width="15" height="14" rx="4" fill={L}/>
      <rect x="49" y="50" width="15" height="14" rx="4" fill={`${C}40`}/>
      <rect x="30" y="68" width="34" height="8" rx="4" fill={C}/>
      {/* Seller phone */}
      <rect x="88" y="8" width="50" height="88" rx="10" fill="white" stroke={C} strokeWidth="1.3"/>
      <rect x="88" y="8" width="50" height="14" rx="10" fill={`${C}80`}/>
      <rect x="88" y="14" width="50" height="8" fill={`${C}80`}/>
      <circle cx="113" cy="13" r="3" fill="rgba(255,255,255,0.4)"/>
      <rect x="96" y="28" width="34" height="10" rx="4" fill={L}/>
      <rect x="96" y="42" width="34" height="10" rx="4" fill={L}/>
      <rect x="96" y="56" width="20" height="10" rx="4" fill={L}/>
      <rect x="96" y="70" width="34" height="8" rx="4" fill={`${C}40`}/>
    </svg>
  );
}

function SvgGateways() {
  const gateways = [
    { label: 'Stripe',     bg: '#635BFF', y: 38 },
    { label: 'PayPal',     bg: '#009CDE', y: 62 },
    { label: 'Razorpay',   bg: '#3395FF', y: 86 },
    { label: 'Flutterwave',bg: '#F5A623', y: 110 },
  ];
  return (
    <svg width="100%" height="100%" viewBox="-18 -18 256 196" fill="none"
      preserveAspectRatio="xMidYMid meet" style={{ display:'block', maxHeight:'100%' }}>

      {/* Card shell */}
      <rect x="0" y="0" width="220" height="160" rx="14" fill="white" stroke={`${C}18`} strokeWidth="1"/>

      {/* Header */}
      <rect x="0" y="0" width="220" height="28" rx="14" fill={L}/>
      <rect x="0" y="14" width="220" height="14" fill={L}/>
      <text x="14" y="18" fontSize="8" fill={C} fontWeight="700">Payment Method</text>
      <rect x="168" y="8" width="40" height="12" rx="5" fill={C}/>
      <text x="188" y="17.5" textAnchor="middle" fontSize="6.5" fill="white" fontWeight="700">20+ options</text>

      {/* Gateway rows */}
      {gateways.map(({ label, bg, y }) => (
        <g key={label}>
          <rect x="10" y={y} width="200" height="20" rx="6"
            fill={label === 'Stripe' ? `${C}10` : 'white'}
            stroke={label === 'Stripe' ? C : `${C}14`}
            strokeWidth={label === 'Stripe' ? 1.2 : 1}
          />
          {/* Brand pill */}
          <rect x="18" y={y + 4} width="42" height="12" rx="4" fill={bg}/>
          <text x="39" y={y + 13} textAnchor="middle" fontSize="6.5" fill="white" fontWeight="800">{label}</text>
          {/* Label */}
          <rect x="68" y={y + 7} width="72" height="6" rx="3"
            fill={label === 'Stripe' ? `${C}35` : `${C}16`}/>
          {/* Radio */}
          <circle cx="200" cy={y + 10} r="5"
            fill={label === 'Stripe' ? 'none' : 'none'}
            stroke={label === 'Stripe' ? C : `${C}30`}
            strokeWidth="1.4"/>
          {label === 'Stripe' && <circle cx="200" cy={y + 10} r="2.5" fill={C}/>}
        </g>
      ))}

      {/* More badge */}
      <rect x="10" y="134" width="200" height="18" rx="6" fill={`${C}08`} stroke={`${C}20`} strokeWidth="1" strokeDasharray="4 3"/>
      <text x="110" y="146.5" textAnchor="middle" fontSize="7.5" fill={`${C}70`} fontWeight="600">+ 16 more gateways available</text>
    </svg>
  );
}

function SvgReviews() {
  const bars = [
    { label: '5★', w: 82, pct: '78%', color: '#22C55E' },
    { label: '4★', w: 48, pct: '14%', color: '#84CC16' },
    { label: '3★', w: 22, pct: '5%',  color: '#EAB308' },
    { label: '2★', w: 10, pct: '2%',  color: '#F97316' },
    { label: '1★', w: 5,  pct: '1%',  color: '#EF4444' },
  ];
  return (
    <svg width="100%" height="100%" viewBox="-14 -14 248 200" fill="none"
      preserveAspectRatio="xMidYMid meet" style={{ display:'block', maxHeight:'100%' }}>

      {/* Card */}
      <rect x="0" y="0" width="220" height="172" rx="12" fill="white" stroke={`${C}16`} strokeWidth="1"/>

      {/* Header */}
      <rect x="0" y="0" width="220" height="26" rx="12" fill={L}/>
      <rect x="0" y="13" width="220" height="13" fill={L}/>
      <text x="12" y="18" fontSize="8" fill={C} fontWeight="700">Reviews &amp; Ratings</text>

      {/* ── Left: aggregate ── */}
      <text x="44" y="58" textAnchor="middle" fontSize="26" fill={C} fontWeight="800">4.8</text>
      {[0,1,2,3,4].map(i => (
        <text key={i} x={18 + i*13} y="72" fontSize="12" fill="#FBBF24">★</text>
      ))}
      <text x="44" y="84" textAnchor="middle" fontSize="6.5" fill={`${C}55`}>2,847 reviews</text>

      {/* Divider */}
      <line x1="90" y1="32" x2="90" y2="98" stroke={`${C}12`} strokeWidth="1"/>

      {/* ── Right: distribution bars ── */}
      {bars.map(({ label, w, pct, color }, i) => (
        <g key={i}>
          <text x="98" y={43 + i * 13} fontSize="6.5" fill={`${C}55`}>{label}</text>
          <rect x="114" y={35 + i * 13} width="88" height="7" rx="3.5" fill={`${C}10`}/>
          <rect x="114" y={35 + i * 13} width={w} height="7" rx="3.5" fill={color} opacity="0.85"/>
          <text x="207" y={43 + i * 13} fontSize="6" fill={`${C}55`}>{pct}</text>
        </g>
      ))}

      {/* Divider */}
      <line x1="10" y1="104" x2="210" y2="104" stroke={`${C}10`} strokeWidth="1"/>

      {/* ── Recent reviews ── */}
      {[
        { y: 118, init: 'RC', name: 'rhinocreativeagency', stars: 5 },
        { y: 144, init: 'BI', name: 'Brandicon',           stars: 5 },
      ].map(({ y, init, name, stars }) => (
        <g key={y}>
          <circle cx="20" cy={y + 8} r="9" fill={`${C}18`}/>
          <text x="20" y={y + 12} textAnchor="middle" fontSize="6" fill={C} fontWeight="700">{init}</text>
          <text x="35" y={y + 6} fontSize="7" fill="#0F1112" fontWeight="600">{name}</text>
          <text x="35" y={y + 17} fontSize="9" fill="#FBBF24" letterSpacing="1">{'★'.repeat(stars)}</text>
          <rect x="110" y={y + 9} width="96" height="5" rx="2.5" fill={`${C}14`}/>
        </g>
      ))}
    </svg>
  );
}

function SvgMultiLang() {
  const dur = '9s';
  return (
    <svg width="100%" height="100%" viewBox="-14 -14 238 176" fill="none"
      preserveAspectRatio="xMidYMid meet" style={{ display: 'block', maxHeight: '100%' }}>
      <defs>
        <style>{`
          @keyframes ml-en { 0%,2%{opacity:1} 30%,97%{opacity:0} 100%{opacity:1} }
          @keyframes ml-ar { 0%,33%{opacity:0} 37%,64%{opacity:1} 68%,100%{opacity:0} }
          @keyframes ml-fr { 0%,67%{opacity:0} 71%,97%{opacity:1} 100%{opacity:0} }
          @keyframes ml-ind {
            0%,30%  { transform:translateX(0px);  }
            36%,63% { transform:translateX(26px); }
            69%,97% { transform:translateX(52px); }
            100%    { transform:translateX(0px);  }
          }
        `}</style>
      </defs>

      {/* Card */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>

      {/* Header */}
      <rect x="0" y="0" width="210" height="32" rx="12" fill={L}/>
      <rect x="0" y="20" width="210" height="12" fill={L}/>

      {/* Globe icon */}
      <circle cx="18" cy="16" r="8" stroke={C} strokeWidth="1.2" fill="white"/>
      <ellipse cx="18" cy="16" rx="4" ry="8" stroke={C} strokeWidth="1" fill="none"/>
      <line x1="10" y1="16" x2="26" y2="16" stroke={C} strokeWidth="1"/>
      <text x="32" y="20" fontSize="7.5" fill={C} fontWeight="600">Multi-Language</text>

      {/* Tab strip */}
      <rect x="128" y="9" width="22" height="14" rx="4" fill="white" opacity="0.7"/>
      <rect x="154" y="9" width="22" height="14" rx="4" fill="white" opacity="0.7"/>
      <rect x="180" y="9" width="22" height="14" rx="4" fill="white" opacity="0.7"/>
      <text x="139" y="19.5" textAnchor="middle" fontSize="7" fill={C} fontWeight="700">EN</text>
      <text x="165" y="19.5" textAnchor="middle" fontSize="7" fill={C} fontWeight="700">AR</text>
      <text x="191" y="19.5" textAnchor="middle" fontSize="7" fill={C} fontWeight="700">FR</text>

      {/* Sliding active underline */}
      <rect x="132" y="22" width="14" height="2" rx="1" fill={C}
        style={{ animation: `ml-ind ${dur} linear infinite` }}/>

      {/* ── EN content (LTR) ── */}
      <g style={{ animation: `ml-en ${dur} linear infinite` }}>
        <rect x="10" y="38" width="30" height="10" rx="4" fill={`${C}20`}/>
        <text x="25" y="46.5" textAnchor="middle" fontSize="6.5" fill={C} fontWeight="700">LTR →</text>
        <rect x="10" y="53" width="110" height="10" rx="4" fill={`${C}35`}/>
        <rect x="10" y="68" width="188" height="6" rx="3" fill={`${C}13`}/>
        <rect x="10" y="78" width="168" height="6" rx="3" fill={`${C}13`}/>
        <rect x="10" y="88" width="130" height="6" rx="3" fill={`${C}13`}/>
        <rect x="10" y="100" width="70" height="18" rx="7" fill={C}/>
        <text x="45" y="112" textAnchor="middle" fontSize="7.5" fill="white" fontWeight="700">Book Now</text>
        <text x="10" y="132" fontSize="11" fill={C} fontWeight="700">English</text>
        <rect x="78" y="122" width="40" height="13" rx="5" fill="#DCFCE7"/>
        <text x="98" y="132" textAnchor="middle" fontSize="6.5" fill="#16A34A" fontWeight="700">● Active</text>
      </g>

      {/* ── AR content (RTL) ── */}
      <g style={{ animation: `ml-ar ${dur} linear infinite`, opacity: 0 }}>
        <rect x="170" y="38" width="30" height="10" rx="4" fill={`${C}20`}/>
        <text x="185" y="46.5" textAnchor="middle" fontSize="6.5" fill={C} fontWeight="700">← RTL</text>
        <rect x="90" y="53" width="110" height="10" rx="4" fill={`${C}35`}/>
        <rect x="12" y="68" width="188" height="6" rx="3" fill={`${C}13`}/>
        <rect x="32" y="78" width="168" height="6" rx="3" fill={`${C}13`}/>
        <rect x="70" y="88" width="130" height="6" rx="3" fill={`${C}13`}/>
        <rect x="130" y="100" width="70" height="18" rx="7" fill={C}/>
        <text x="165" y="112" textAnchor="middle" fontSize="7.5" fill="white" fontWeight="700">احجز الآن</text>
        <text x="200" y="132" textAnchor="end" fontSize="11" fill={C} fontWeight="700">عربي</text>
        <rect x="92" y="122" width="40" height="13" rx="5" fill="#DCFCE7"/>
        <text x="112" y="132" textAnchor="middle" fontSize="6.5" fill="#16A34A" fontWeight="700">● Active</text>
      </g>

      {/* ── FR content (LTR) ── */}
      <g style={{ animation: `ml-fr ${dur} linear infinite`, opacity: 0 }}>
        <rect x="10" y="38" width="30" height="10" rx="4" fill={`${C}20`}/>
        <text x="25" y="46.5" textAnchor="middle" fontSize="6.5" fill={C} fontWeight="700">LTR →</text>
        <rect x="10" y="53" width="92" height="10" rx="4" fill={`${C}35`}/>
        <rect x="10" y="68" width="172" height="6" rx="3" fill={`${C}13`}/>
        <rect x="10" y="78" width="148" height="6" rx="3" fill={`${C}13`}/>
        <rect x="10" y="88" width="116" height="6" rx="3" fill={`${C}13`}/>
        <rect x="10" y="100" width="70" height="18" rx="7" fill={C}/>
        <text x="45" y="112" textAnchor="middle" fontSize="7.5" fill="white" fontWeight="700">Réserver</text>
        <text x="10" y="132" fontSize="11" fill={C} fontWeight="700">Français</text>
        <rect x="86" y="122" width="40" height="13" rx="5" fill="#DCFCE7"/>
        <text x="106" y="132" textAnchor="middle" fontSize="6.5" fill="#16A34A" fontWeight="700">● Active</text>
      </g>
    </svg>
  );
}

function SvgPermissions() {
  const COL = [100, 140, 180];
  const rows = [
    { name: 'Manage Orders',   perms: [true,  true,  true]  },
    { name: 'Process Payouts', perms: [true,  false, false] },
    { name: 'Approve Sellers', perms: [true,  true,  false] },
    { name: 'System Settings', perms: [true,  false, false] },
  ];
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 176" fill="none"
      preserveAspectRatio="xMidYMid meet" style={{ display: 'block', maxHeight: '100%' }}>

      {/* Card */}
      <rect x="0" y="0" width="210" height="152" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>

      {/* Header */}
      <rect x="0" y="0" width="210" height="30" rx="12" fill={L}/>
      <rect x="0" y="18" width="210" height="12" fill={L}/>
      <path d="M18 7 L25 10 L25 19 C25 23.5 18 26 18 26 C18 26 11 23.5 11 19 L11 10 Z" fill={C} opacity="0.85"/>
      <circle cx="18" cy="18" r="3" fill="white"/>
      <text x="31" y="19" fontSize="7.5" fill={C} fontWeight="600">Admin Permissions</text>

      {/* Role column headers */}
      {([
        { label: 'Super Admin', x: 100, bg: C },
        { label: 'Editor',      x: 140, bg: `${C}70` },
        { label: 'Moderator',   x: 180, bg: '#9CA3AF' },
      ] as const).map(({ label, x, bg }) => (
        <g key={label}>
          <rect x={x - 20} y="35" width="40" height="14" rx="5" fill={bg} opacity="0.18"/>
          <text x={x} y="45.5" textAnchor="middle" fontSize="6"
            fill={label === 'Moderator' ? '#6B7280' : C} fontWeight="700">{label}</text>
        </g>
      ))}
      <text x="10" y="45.5" fontSize="6.5" fill={`${C}45`} fontWeight="600">Module</text>

      {/* Header divider */}
      <line x1="6" y1="53" x2="204" y2="53" stroke={`${C}14`} strokeWidth="1"/>

      {/* Vertical column separators */}
      <line x1="82" y1="34" x2="82" y2="148" stroke={`${C}08`} strokeWidth="1"/>
      <line x1="122" y1="34" x2="122" y2="148" stroke={`${C}08`} strokeWidth="1"/>
      <line x1="162" y1="34" x2="162" y2="148" stroke={`${C}08`} strokeWidth="1"/>

      {/* Permission rows */}
      {rows.map(({ name, perms }, ri) => {
        const y = 67 + ri * 21;
        return (
          <g key={name}>
            {ri % 2 === 0 && (
              <rect x="2" y={y - 9} width="206" height="21" rx="3" fill={`${C}04`}/>
            )}
            <text x="10" y={y + 4} fontSize="7" fill="#374151" fontWeight="500">{name}</text>
            {perms.map((has, ci) => {
              const cx = COL[ci];
              const cy = y;
              return has ? (
                <g key={ci}>
                  <circle cx={cx} cy={cy} r="7" fill="#DCFCE7"/>
                  <path d={`M${cx - 3} ${cy} L${cx - 0.5} ${cy + 3} L${cx + 3.5} ${cy - 3}`}
                    stroke="#16A34A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </g>
              ) : (
                <g key={ci}>
                  <circle cx={cx} cy={cy} r="7" fill="#FEE2E2"/>
                  <line x1={cx - 3} y1={cy - 3} x2={cx + 3} y2={cy + 3} stroke="#EF4444" strokeWidth="1.4" strokeLinecap="round"/>
                  <line x1={cx + 3} y1={cy - 3} x2={cx - 3} y2={cy + 3} stroke="#EF4444" strokeWidth="1.4" strokeLinecap="round"/>
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Footer */}
      <line x1="6" y1="142" x2="204" y2="142" stroke={`${C}10`} strokeWidth="1"/>
      <circle cx="14" cy="149" r="4" fill={`${C}20`}/>
      <text x="22" y="152" fontSize="6" fill={`${C}60`}>3 roles · 4 modules · configurable from admin panel</text>
    </svg>
  );
}

function SvgNotifications() {
  const dur = '10s';
  // Negative delays = animation already in progress at page load → perfect phase offset
  // N1 enters t=0, N2 enters t=2s, N3 t=4s, N4 t=6s, N5 t=8s — continuously stacked
  const NOTIFS = [
    { bg: '#D1FAE5', ic: '#10B981', tc: '#065F46', lbl: 'Order Received',    sub: 'New order #1248 · Sarah M.', sym: 'O', delay: '0s'   },
    { bg: L,         ic: C,         tc: C,          lbl: 'New Seller Joined',  sub: 'Alex Pro registered',        sym: 'S', delay: '-8s'  },
    { bg: '#FEF3C7', ic: '#D97706', tc: '#92400E',  lbl: 'Job Posted',         sub: 'House Cleaning · 3 km',      sym: 'J', delay: '-6s'  },
    { bg: '#D1FAE5', ic: '#059669', tc: '#064E3B',  lbl: 'Payment Received',   sub: '$128.00 credited to wallet', sym: '$', delay: '-4s'  },
    { bg: '#EDE9FE', ic: '#7C3AED', tc: '#4C1D95',  lbl: 'New Support Ticket', sub: 'Ticket #187 · John B.',      sym: 'T', delay: '-2s'  },
  ];
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none"
      preserveAspectRatio="xMidYMid meet" style={{ display: 'block', maxHeight: '100%' }}>
      <defs>
        <style>{`
          @keyframes np-push {
            0%       { transform: translateY(-40px); opacity: 0; }
            3%       { transform: translateY(0px);   opacity: 1; }
            20%      { transform: translateY(0px);   opacity: 1; }
            23%      { transform: translateY(40px);  opacity: 1; }
            40%      { transform: translateY(40px);  opacity: 1; }
            43%      { transform: translateY(80px);  opacity: 1; }
            60%      { transform: translateY(80px);  opacity: 1; }
            63%      { transform: translateY(120px); opacity: 0; }
            64%,100% { transform: translateY(-40px); opacity: 0; }
          }
        `}</style>
        <clipPath id="np-clip">
          <rect x="0" y="27" width="210" height="121"/>
        </clipPath>
      </defs>

      {/* Card */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>

      {/* Header */}
      <rect x="0" y="0" width="210" height="28" rx="12" fill={L}/>
      <rect x="0" y="16" width="210" height="12" fill={L}/>
      <path d="M18 5 C13 5 10 9 10 14 L10 20 L8 22 L28 22 L26 20 L26 14 C26 9 23 5 18 5Z" fill={C} opacity="0.85"/>
      <circle cx="18" cy="4" r="3" fill={C} opacity="0.85"/>
      <path d="M14 22 C14 25.5 22 25.5 22 22" fill={C} opacity="0.55"/>
      <circle cx="18" cy="13" r="3.5" fill="white" opacity="0.3"/>
      <circle cx="27" cy="7" r="5.5" fill="#EF4444"/>
      <text x="27" y="10.5" textAnchor="middle" fontSize="6" fill="white" fontWeight="800">5</text>
      <text x="38" y="18" fontSize="8.5" fill={C} fontWeight="700">Notifications</text>
      <text x="202" y="18" textAnchor="end" fontSize="7.5" fill={C} fontWeight="600">View all</text>

      {/* All 5 notifications animate through the same 3 row slots, stacked */}
      <g clipPath="url(#np-clip)">
        {NOTIFS.map(({ bg, ic, tc, lbl, sub, sym, delay }) => (
          <g key={lbl} style={{ animation: `np-push ${dur} linear ${delay} infinite`, opacity: 0 }}>
            <rect x="0" y="28" width="210" height="39" fill={bg}/>
            <rect x="0" y="28" width="4" height="39" fill={ic} opacity="0.65"/>
            <circle cx="23" cy="47" r="10" fill={ic} opacity="0.2"/>
            <circle cx="23" cy="47" r="7.5" fill={ic}/>
            <text x="23" y="50.5" textAnchor="middle" fontSize="8" fill="white" fontWeight="800">{sym}</text>
            <text x="40" y="43" fontSize="8" fill={tc} fontWeight="700">{lbl}</text>
            <text x="40" y="55" fontSize="6.5" fill={`${tc}90`}>{sub}</text>
            <text x="202" y="37" textAnchor="end" fontSize="6" fill={`${ic}80`} fontWeight="600">just now</text>
            <circle cx="202" cy="53" r="4" fill={ic}/>
          </g>
        ))}
      </g>

      {/* Row separators (rendered on top so they show in gaps between sliding rows) */}
      <line x1="0" y1="68" x2="210" y2="68" stroke={`${C}12`} strokeWidth="1"/>
      <line x1="0" y1="108" x2="210" y2="108" stroke={`${C}12`} strokeWidth="1"/>

      {/* Card border re-drawn on top to clean up edges */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="none" stroke={`${C}15`} strokeWidth="1.5"/>
    </svg>
  );
}

function SvgCustomOrder() {
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none"
      preserveAspectRatio="xMidYMid meet" style={{ display: 'block', maxHeight: '100%' }}>
      <defs>
        <style>{`
          @keyframes co-pulse {
            0%,100% { opacity:0.85; r:16; }
            50%     { opacity:1;    r:20; }
          }
          @keyframes co-pending {
            0%,45%  { opacity:1; }
            55%,100%{ opacity:0; }
          }
          @keyframes co-accepted {
            0%,50%  { opacity:0; }
            60%,100%{ opacity:1; }
          }
          @keyframes co-accept-btn {
            0%,50%  { transform:scale(1);    opacity:1; }
            55%,100%{ transform:scale(0.97); opacity:0.6; }
          }
        `}</style>
      </defs>

      {/* Card */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>

      {/* Header */}
      <rect x="0" y="0" width="210" height="28" rx="12" fill={L}/>
      <rect x="0" y="16" width="210" height="12" fill={L}/>
      <text x="12" y="18.5" fontSize="8.5" fill={C} fontWeight="700">Custom Order Request</text>
      <rect x="162" y="8" width="40" height="12" rx="5" fill={C}/>
      <text x="182" y="17.5" textAnchor="middle" fontSize="6.5" fill="white" fontWeight="800">NEW</text>

      {/* Service field */}
      <rect x="8" y="33" width="194" height="16" rx="5" fill={`${C}06`} stroke={`${C}14`} strokeWidth="1"/>
      <text x="14" y="43" fontSize="6" fill={`${C}55`} fontWeight="600">Service</text>
      <text x="50" y="43" fontSize="7.5" fill="#0F1112" fontWeight="700">House Deep Cleaning</text>

      {/* Date + Budget row */}
      <rect x="8" y="53" width="95" height="16" rx="5" fill={`${C}06`} stroke={`${C}14`} strokeWidth="1"/>
      <text x="14" y="63" fontSize="6" fill={`${C}55`} fontWeight="600">Date</text>
      <text x="36" y="63" fontSize="7" fill="#0F1112" fontWeight="600">June 15, 2025</text>

      <rect x="107" y="53" width="95" height="16" rx="5" fill={`${C}06`} stroke={`${C}14`} strokeWidth="1"/>
      <text x="113" y="63" fontSize="6" fill={`${C}55`} fontWeight="600">Budget</text>
      <text x="143" y="63" fontSize="7" fill="#0F1112" fontWeight="700">$120.00</text>

      {/* Notes textarea */}
      <rect x="8" y="73" width="194" height="28" rx="5" fill={`${C}04`} stroke={`${C}12`} strokeWidth="1"/>
      <text x="14" y="82" fontSize="6" fill={`${C}50`} fontWeight="600">Notes</text>
      <rect x="14" y="85" width="118" height="5" rx="2.5" fill={`${C}16`}/>
      <rect x="14" y="93" width="86" height="5" rx="2.5" fill={`${C}10`}/>

      {/* Status row */}
      <g style={{ animation: 'co-pending 6s ease-in-out infinite' }}>
        <circle cx="14" cy="113" r="4" fill="#F59E0B" opacity="0.3"/>
        <circle cx="14" cy="113" r="2.5" fill="#F59E0B"/>
        <text x="22" y="116.5" fontSize="7.5" fill="#D97706" fontWeight="600">Under Review</text>
      </g>
      <g style={{ animation: 'co-accepted 6s ease-in-out infinite', opacity: 0 }}>
        <circle cx="14" cy="113" r="4" fill="#D1FAE5"/>
        <circle cx="14" cy="113" r="2.5" fill="#10B981"/>
        <text x="22" y="116.5" fontSize="7.5" fill="#059669" fontWeight="600">Accepted by Seller</text>
      </g>

      {/* Action buttons */}
      <g style={{ animation: 'co-accept-btn 6s ease-in-out infinite', transformOrigin: '58px 135px' }}>
        <rect x="8" y="125" width="100" height="18" rx="7" fill="#10B981"/>
        <text x="58" y="137" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Accept Order</text>
      </g>
      <rect x="114" y="125" width="88" height="18" rx="7" fill="white" stroke="#EF4444" strokeWidth="1"/>
      <text x="158" y="137" textAnchor="middle" fontSize="8" fill="#EF4444" fontWeight="600">Decline</text>
    </svg>
  );
}

function SvgEmail() {
  const dur = '9s';
  const TEMPLATES = [
    {
      tag: 'Booking',    tagBg: '#D1FAE5', tagTxt: '#059669',
      subject: 'Your booking is confirmed!',
      hBg: '#D1FAE5', hTxt: '#059669',
      ctaTxt: 'View Booking', ctaBg: '#10B981',
      trigger: 'New Booking Made',
    },
    {
      tag: 'Payment',    tagBg: L,         tagTxt: C,
      subject: 'Payment received — $128.00',
      hBg: L, hTxt: C,
      ctaTxt: 'View Receipt', ctaBg: C,
      trigger: 'Payment Completed',
    },
    {
      tag: 'Renewal',    tagBg: '#EDE9FE', tagTxt: '#7C3AED',
      subject: 'Your plan renews in 3 days',
      hBg: '#EDE9FE', hTxt: '#7C3AED',
      ctaTxt: 'Manage Plan', ctaBg: '#7C3AED',
      trigger: 'Subscription Due',
    },
  ];
  const ANIMS = ['em-c1', 'em-c2', 'em-c3'];
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none"
      preserveAspectRatio="xMidYMid meet" style={{ display: 'block', maxHeight: '100%' }}>
      <defs>
        <style>{`
          @keyframes em-c1 { 0%,3%{opacity:1} 30%,97%{opacity:0} 100%{opacity:1} }
          @keyframes em-c2 { 0%,32%{opacity:0} 36%,63%{opacity:1} 67%,100%{opacity:0} }
          @keyframes em-c3 { 0%,66%{opacity:0} 70%,96%{opacity:1} 100%{opacity:0} }
        `}</style>
      </defs>

      {/* Card */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>

      {/* Header */}
      <rect x="0" y="0" width="210" height="26" rx="12" fill={L}/>
      <rect x="0" y="14" width="210" height="12" fill={L}/>
      {/* Envelope icon */}
      <rect x="8" y="7" width="16" height="12" rx="2" fill="white" stroke={C} strokeWidth="1"/>
      <path d="M8 9 L16 14 L24 9" stroke={C} strokeWidth="1" fill="none"/>
      <text x="30" y="17" fontSize="8" fill={C} fontWeight="700">Email Templates</text>
      <rect x="166" y="8" width="36" height="11" rx="4" fill={C}/>
      <text x="184" y="17" textAnchor="middle" fontSize="6" fill="white" fontWeight="700">4 events</text>

      {/* Cycling template content */}
      {TEMPLATES.map(({ tag, tagBg, tagTxt, subject, hBg, hTxt, ctaTxt, ctaBg, trigger }, i) => (
        <g key={tag} style={{ animation: `${ANIMS[i]} ${dur} linear infinite`, opacity: i === 0 ? 1 : 0 }}>

          {/* Template type badge + subject line */}
          <rect x="8" y="30" width="36" height="11" rx="4" fill={tagBg}/>
          <text x="26" y="38.5" textAnchor="middle" fontSize="6" fill={tagTxt} fontWeight="800">{tag}</text>
          <text x="50" y="39" fontSize="7.5" fill="#0F1112" fontWeight="700">{subject}</text>

          {/* Email preview box */}
          <rect x="8" y="44" width="194" height="72" rx="6" fill="white" stroke={`${C}12`} strokeWidth="1"/>

          {/* Email brand header strip */}
          <rect x="8" y="44" width="194" height="20" rx="6" fill={hBg}/>
          <rect x="8" y="55" width="194" height="9" fill={hBg}/>
          <text x="105" y="57" textAnchor="middle" fontSize="9" fill={hTxt} fontWeight="900">QIXER</text>
          <rect x="82" y="60" width="46" height="3" rx="1.5" fill={`${hTxt}30`}/>

          {/* Email body: greeting + content lines */}
          <rect x="18" y="68" width="84" height="6" rx="3" fill={`${C}22`}/>
          <rect x="18" y="78" width="172" height="5" rx="2.5" fill={`${C}10`}/>
          <rect x="18" y="87" width="148" height="5" rx="2.5" fill={`${C}10`}/>
          <rect x="18" y="96" width="100" height="5" rx="2.5" fill={`${C}10`}/>

          {/* CTA button inside email */}
          <rect x="55" y="105" width="100" height="8" rx="4" fill={ctaBg}/>
          <text x="105" y="111.5" textAnchor="middle" fontSize="6" fill="white" fontWeight="700">{ctaTxt} →</text>

          {/* Auto-trigger footer */}
          <line x1="0" y1="122" x2="210" y2="122" stroke={`${C}10`} strokeWidth="1"/>
          <circle cx="10" cy="133" r="3.5" fill={tagBg}/>
          <circle cx="10" cy="133" r="2" fill={tagTxt}/>
          <text x="18" y="136" fontSize="6" fill={`${C}50`}>Auto-triggered on:</text>
          <rect x="96" y="126" width="106" height="13" rx="5" fill={tagBg}/>
          <text x="149" y="135.5" textAnchor="middle" fontSize="6.5" fill={tagTxt} fontWeight="700">{trigger}</text>
        </g>
      ))}
    </svg>
  );
}

function SvgJobPosting() {
  const dur = '9s';
  const JOBS = [
    { loc: 'Dhaka, Bangladesh',  title: 'House Cleaning',  price: '$49.00', user: 'diana',   rating: '4.8', rev: '(24)' },
    { loc: 'New York, USA',      title: 'Plumbing Repair', price: '$85.00', user: 'mike_p',  rating: '4.9', rev: '(12)' },
    { loc: 'London, UK',         title: 'Pet Care Service', price: '$35.00', user: 'sarah_j', rating: '4.7', rev: '(8)'  },
  ];
  const ANIMS = ['jp-c1', 'jp-c2', 'jp-c3'];
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none"
      preserveAspectRatio="xMidYMid meet" style={{ display: 'block', maxHeight: '100%' }}>
      <defs>
        <style>{`
          @keyframes jp-c1 { 0%,3%{opacity:1} 30%,97%{opacity:0} 100%{opacity:1} }
          @keyframes jp-c2 { 0%,32%{opacity:0} 36%,63%{opacity:1} 67%,100%{opacity:0} }
          @keyframes jp-c3 { 0%,66%{opacity:0} 70%,96%{opacity:1} 100%{opacity:0} }
        `}</style>
      </defs>

      {/* Card */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>

      {/* Apply Now — static */}
      <rect x="6" y="118" width="198" height="24" rx="8" fill="#F5F6F8" stroke={`${C}10`} strokeWidth="1"/>
      <text x="105" y="133.5" textAnchor="middle" fontSize="9" fill={C} fontWeight="700">Apply Now  ›</text>

      {/* Cycling job cards */}
      {JOBS.map(({ loc, title, price, user, rating, rev }, i) => (
        <g key={loc} style={{ animation: `${ANIMS[i]} ${dur} linear infinite`, opacity: i === 0 ? 1 : 0 }}>

          {/* Location pin */}
          <path d="M13 16 C13 13,10 11,10 14 C10 16.5,13 19,13 19 C13 19,16 16.5,16 14 C16 11,13 13,13 16Z" fill={C}/>
          <circle cx="13" cy="14" r="2.5" fill="white"/>
          <text x="21" y="18" fontSize="7.5" fill={C} fontWeight="600">{loc}</text>

          {/* Job title */}
          <text x="10" y="34" fontSize="12" fill="#0F1112" fontWeight="800">{title}</text>

          {/* Description placeholder */}
          <rect x="10" y="39" width="188" height="6" rx="3" fill="#E9EAF0"/>
          <rect x="10" y="49" width="148" height="6" rx="3" fill="#E9EAF0"/>

          {/* Starting at */}
          <text x="10" y="66" fontSize="7" fill="#9CA3AF">Starting at</text>
          <text x="10" y="79" fontSize="14" fill="#0F1112" fontWeight="800">{price}</text>

          {/* Divider */}
          <line x1="6" y1="88" x2="204" y2="88" stroke="#E5E7EB" strokeWidth="1"/>

          {/* Avatar */}
          <circle cx="20" cy="103" r="10" fill={`${C}18`}/>
          <circle cx="20" cy="100" r="4" fill={C} opacity="0.45"/>
          <path d="M11 111 C11 106,29 106,29 111" fill={C} opacity="0.25"/>

          {/* Username */}
          <text x="34" y="106" fontSize="8.5" fill="#0F1112" fontWeight="600">{user}</text>

          {/* Verified badge */}
          <circle cx="80" cy="102" r="5" fill={C}/>
          <path d="M77.5 102 L79.5 104.5 L83 99.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

          {/* Star + rating */}
          <text x="158" y="107" fontSize="12" fill="#F59E0B">★</text>
          <text x="170" y="106" fontSize="8" fill="#374151" fontWeight="700">{rating}</text>
          <text x="183" y="106" fontSize="7" fill="#9CA3AF">{rev}</text>
        </g>
      ))}
    </svg>
  );
}

function SvgWallet() {
  const dur = '6s';
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none"
      preserveAspectRatio="xMidYMid meet" style={{ display: 'block', maxHeight: '100%' }}>
      <defs>
        <style>{`
          @keyframes wl-s1 { 0%,3%{opacity:1} 44%,97%{opacity:0} 100%{opacity:1} }
          @keyframes wl-s2 { 0%,47%{opacity:0} 53%,96%{opacity:1} 100%{opacity:0} }
        `}</style>
      </defs>

      {/* Card */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}12`} strokeWidth="1"/>

      {/* ── Wallet card ── */}
      <rect x="0" y="0" width="210" height="70" rx="12" fill={C}/>
      <rect x="0" y="58" width="210" height="12" fill={C}/>
      {/* Decorative rings */}
      <circle cx="175" cy="18" r="34" fill="rgba(255,255,255,0.06)"/>
      <circle cx="195" cy="44" r="24" fill="rgba(255,255,255,0.07)"/>
      {/* Chip */}
      <rect x="10" y="11" width="20" height="15" rx="3" fill="rgba(255,255,255,0.28)"/>
      <line x1="10" y1="18.5" x2="30" y2="18.5" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
      <line x1="19" y1="11" x2="19" y2="26" stroke="rgba(255,255,255,0.35)" strokeWidth="1"/>
      {/* Label */}
      <text x="36" y="19" fontSize="6.5" fill="rgba(255,255,255,0.55)" fontWeight="600">BUYER WALLET</text>
      {/* Available balance label */}
      <text x="10" y="36" fontSize="6.5" fill="rgba(255,255,255,0.55)">Available Balance</text>

      {/* Balance — state 1 */}
      <text x="10" y="56" fontSize="20" fill="white" fontWeight="800"
        style={{ animation: `wl-s1 ${dur} linear infinite` }}>$248.50</text>
      {/* Balance — state 2 (after top-up) */}
      <text x="10" y="56" fontSize="20" fill="white" fontWeight="800" opacity="0"
        style={{ animation: `wl-s2 ${dur} linear infinite` }}>$298.50</text>

      {/* Quick actions */}
      <rect x="148" y="42" width="30" height="18" rx="7" fill="rgba(255,255,255,0.22)"/>
      <text x="163" y="54.5" textAnchor="middle" fontSize="6.5" fill="white" fontWeight="700">+ Add</text>
      <rect x="182" y="42" width="22" height="18" rx="7" fill="rgba(255,255,255,0.14)"/>
      <text x="193" y="54.5" textAnchor="middle" fontSize="6" fill="white" fontWeight="600">Pay</text>

      {/* ── Transactions header ── */}
      <text x="10" y="80" fontSize="7.5" fill="#0F1112" fontWeight="700">Recent Transactions</text>

      {/* ── State 1: normal list ── */}
      <g style={{ animation: `wl-s1 ${dur} linear infinite` }}>
        {([
          { y:84, ic:'-', icBg: C,         rowBg:`${C}10`, lbl:'House Cleaning',  sub:'2 min ago', amt:'-$49.00', ac: C         },
          { y:104, ic:'-', icBg:`${C}80`,   rowBg:`${C}07`, lbl:'Plumbing Repair', sub:'1 hour ago',amt:'-$35.00', ac:`${C}80`  },
          { y:124, ic:'+', icBg:'#10B981',  rowBg:'#F0FDF4', lbl:'Refund received', sub:'Yesterday', amt:'+$15.00', ac:'#059669' },
        ] as const).map(({ y, ic, icBg, rowBg, lbl, sub, amt, ac }) => (
          <g key={y}>
            <rect x="6" y={y} width="198" height="18" rx="5" fill={rowBg}/>
            <circle cx="19" cy={y + 9} r="7" fill={icBg} opacity="0.2"/>
            <circle cx="19" cy={y + 9} r="5" fill={icBg}/>
            <text x="19" y={y + 12.5} textAnchor="middle" fontSize="8" fill="white" fontWeight="800">{ic}</text>
            <text x="30" y={y + 8} fontSize="7" fill="#0F1112" fontWeight="600">{lbl}</text>
            <text x="30" y={y + 16} fontSize="5.5" fill="#9CA3AF">{sub}</text>
            <text x="200" y={y + 12} textAnchor="end" fontSize="7.5" fill={ac} fontWeight="700">{amt}</text>
          </g>
        ))}
      </g>

      {/* ── State 2: top-up at top, list shifts down ── */}
      <g style={{ animation: `wl-s2 ${dur} linear infinite`, opacity: 0 }}>
        {([
          { y:84, ic:'+', icBg:'#10B981',  rowBg:'#D1FAE5', lbl:'Top-up Added',   sub:'just now',  amt:'+$50.00', ac:'#059669' },
          { y:104, ic:'-', icBg: C,         rowBg:`${C}10`,  lbl:'House Cleaning', sub:'2 min ago', amt:'-$49.00', ac: C        },
          { y:124, ic:'-', icBg:`${C}80`,   rowBg:`${C}07`,  lbl:'Plumbing Repair',sub:'1 hour ago',amt:'-$35.00', ac:`${C}80`  },
        ] as const).map(({ y, ic, icBg, rowBg, lbl, sub, amt, ac }) => (
          <g key={y}>
            <rect x="6" y={y} width="198" height="18" rx="5" fill={rowBg}/>
            <circle cx="19" cy={y + 9} r="7" fill={icBg} opacity="0.22"/>
            <circle cx="19" cy={y + 9} r="5" fill={icBg}/>
            <text x="19" y={y + 12.5} textAnchor="middle" fontSize="8" fill="white" fontWeight="800">{ic}</text>
            <text x="30" y={y + 8} fontSize="7" fill="#0F1112" fontWeight="600">{lbl}</text>
            <text x="30" y={y + 16} fontSize="5.5" fill="#9CA3AF">{sub}</text>
            <text x="200" y={y + 12} textAnchor="end" fontSize="7.5" fill={ac} fontWeight="700">{amt}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function SvgReports() {
  const dur = '8s';
  const BAR_X = [6, 36, 66, 96, 126, 156, 186];
  const BAR_W = 18;
  const BOTTOM = 138;
  const B_H = [22, 34, 26, 48, 36, 54, 62];
  const S_H = [18, 28, 22, 40, 30, 46, 62];
  const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none"
      preserveAspectRatio="xMidYMid meet" style={{ display: 'block', maxHeight: '100%' }}>
      <defs>
        <style>{`
          @keyframes rp-b { 0%,3%{opacity:1} 46%,97%{opacity:0} 100%{opacity:1} }
          @keyframes rp-s { 0%,49%{opacity:0} 55%,96%{opacity:1} 100%{opacity:0} }
          @keyframes rp-tab {
            0%,46%  { transform:translateX(0px); }
            55%,97% { transform:translateX(44px); }
            100%    { transform:translateX(0px); }
          }
        `}</style>
      </defs>

      {/* Card */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>

      {/* Header */}
      <rect x="0" y="0" width="210" height="26" rx="12" fill={L}/>
      <rect x="0" y="14" width="210" height="12" fill={L}/>
      <rect x="10" y="7" width="3" height="12" rx="1" fill={C}/>
      <rect x="15" y="10" width="3" height="9" rx="1" fill={C} opacity="0.6"/>
      <rect x="20" y="13" width="3" height="6" rx="1" fill={C} opacity="0.4"/>
      <text x="30" y="18" fontSize="8" fill={C} fontWeight="700">Order Reports</text>
      <rect x="158" y="7" width="46" height="12" rx="5" fill="white" opacity="0.7"/>
      <text x="181" y="16.5" textAnchor="middle" fontSize="6" fill={`${C}70`} fontWeight="600">Last 7 days</text>

      {/* Tab strip */}
      <rect x="6" y="29" width="96" height="14" rx="6" fill={`${C}10`}/>
      <rect x="8" y="30" width="44" height="12" rx="5" fill={C}
        style={{ animation: `rp-tab ${dur} linear infinite` }}/>
      <text x="30" y="39" textAnchor="middle" fontSize="6.5" fill={`${C}40`} fontWeight="600">Buyer</text>
      <text x="74" y="39" textAnchor="middle" fontSize="6.5" fill={`${C}40`} fontWeight="600">Seller</text>
      <g style={{ animation: `rp-b ${dur} linear infinite` }}>
        <text x="30" y="39" textAnchor="middle" fontSize="6.5" fill="white" fontWeight="700">Buyer</text>
      </g>
      <g style={{ animation: `rp-s ${dur} linear infinite`, opacity: 0 }}>
        <text x="74" y="39" textAnchor="middle" fontSize="6.5" fill="white" fontWeight="700">Seller</text>
      </g>

      {/* KPI row — buyer */}
      <g style={{ animation: `rp-b ${dur} linear infinite` }}>
        <rect x="6" y="46" width="62" height="20" rx="5" fill={`${C}08`}/>
        <text x="37" y="55" textAnchor="middle" fontSize="9" fill={C} fontWeight="800">47</text>
        <text x="37" y="63" textAnchor="middle" fontSize="5.5" fill={`${C}50`}>Orders</text>
        <rect x="74" y="46" width="62" height="20" rx="5" fill={`${C}08`}/>
        <text x="105" y="55" textAnchor="middle" fontSize="8.5" fill={C} fontWeight="800">$1,284</text>
        <text x="105" y="63" textAnchor="middle" fontSize="5.5" fill={`${C}50`}>Total Spent</text>
        <rect x="142" y="46" width="62" height="20" rx="5" fill={`${C}08`}/>
        <text x="173" y="55" textAnchor="middle" fontSize="8.5" fill={C} fontWeight="800">4.9 ★</text>
        <text x="173" y="63" textAnchor="middle" fontSize="5.5" fill={`${C}50`}>Avg Rating</text>
      </g>

      {/* KPI row — seller */}
      <g style={{ animation: `rp-s ${dur} linear infinite`, opacity: 0 }}>
        <rect x="6" y="46" width="62" height="20" rx="5" fill="#D1FAE5"/>
        <text x="37" y="55" textAnchor="middle" fontSize="9" fill="#059669" fontWeight="800">32</text>
        <text x="37" y="63" textAnchor="middle" fontSize="5.5" fill="#05966870">Jobs Done</text>
        <rect x="74" y="46" width="62" height="20" rx="5" fill="#D1FAE5"/>
        <text x="105" y="55" textAnchor="middle" fontSize="8.5" fill="#059669" fontWeight="800">$3,480</text>
        <text x="105" y="63" textAnchor="middle" fontSize="5.5" fill="#05966870">Earned</text>
        <rect x="142" y="46" width="62" height="20" rx="5" fill="#D1FAE5"/>
        <text x="173" y="55" textAnchor="middle" fontSize="8.5" fill="#059669" fontWeight="800">94%</text>
        <text x="173" y="63" textAnchor="middle" fontSize="5.5" fill="#05966870">Completion</text>
      </g>

      {/* Chart grid */}
      <line x1="6" y1="138" x2="204" y2="138" stroke={`${C}18`} strokeWidth="1"/>
      <line x1="6" y1="118" x2="204" y2="118" stroke={`${C}08`} strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="6" y1="98" x2="204" y2="98" stroke={`${C}08`} strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="6" y1="78" x2="204" y2="78" stroke={`${C}08`} strokeWidth="1" strokeDasharray="3 3"/>

      {/* Buyer bars */}
      <g style={{ animation: `rp-b ${dur} linear infinite` }}>
        {B_H.map((h, i) => (
          <rect key={i} x={BAR_X[i]} y={BOTTOM - h} width={BAR_W} height={h} rx="3"
            fill={C} opacity={0.45 + i * 0.08}/>
        ))}
        <text x={BAR_X[6] + BAR_W / 2} y={BOTTOM - B_H[6] - 3}
          textAnchor="middle" fontSize="5.5" fill={C} fontWeight="700">$82</text>
      </g>

      {/* Seller bars */}
      <g style={{ animation: `rp-s ${dur} linear infinite`, opacity: 0 }}>
        {S_H.map((h, i) => (
          <rect key={i} x={BAR_X[i]} y={BOTTOM - h} width={BAR_W} height={h} rx="3"
            fill="#10B981" opacity={0.45 + i * 0.08}/>
        ))}
        <text x={BAR_X[6] + BAR_W / 2} y={BOTTOM - S_H[6] - 3}
          textAnchor="middle" fontSize="5.5" fill="#059669" fontWeight="700">$480</text>
      </g>

      {/* Day labels */}
      {DAYS.map((d, i) => (
        <text key={i} x={BAR_X[i] + BAR_W / 2} y="147" textAnchor="middle" fontSize="6" fill={`${C}40`}>{d}</text>
      ))}
    </svg>
  );
}

function SvgCalendar() {
  const dur = '9s';
  const CX = [12, 42, 72, 102, 132, 162, 192];
  const RY = [44, 60, 76, 92, 108];
  const DAYS_H = ['M','T','W','T','F','S','S'];
  type DR = { col: number; row: number; d: number; t: 'n'|'b'|'a'|'s' };
  const DATES: DR[] = [
    {col:6,row:0,d:1,t:'n'},
    {col:0,row:1,d:2,t:'n'},{col:1,row:1,d:3,t:'b'},{col:2,row:1,d:4,t:'n'},{col:3,row:1,d:5,t:'n'},
    {col:4,row:1,d:6,t:'a'},{col:5,row:1,d:7,t:'n'},{col:6,row:1,d:8,t:'n'},
    {col:0,row:2,d:9,t:'n'},{col:1,row:2,d:10,t:'b'},{col:2,row:2,d:11,t:'n'},{col:3,row:2,d:12,t:'n'},
    {col:4,row:2,d:13,t:'a'},{col:5,row:2,d:14,t:'n'},{col:6,row:2,d:15,t:'s'},
    {col:0,row:3,d:16,t:'n'},{col:1,row:3,d:17,t:'n'},{col:2,row:3,d:18,t:'b'},{col:3,row:3,d:19,t:'a'},
    {col:4,row:3,d:20,t:'n'},{col:5,row:3,d:21,t:'n'},{col:6,row:3,d:22,t:'n'},
    {col:0,row:4,d:23,t:'n'},{col:1,row:4,d:24,t:'a'},{col:2,row:4,d:25,t:'n'},{col:3,row:4,d:26,t:'n'},
    {col:4,row:4,d:27,t:'b'},{col:5,row:4,d:28,t:'n'},{col:6,row:4,d:29,t:'n'},
  ];
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none"
      preserveAspectRatio="xMidYMid meet" style={{ display: 'block', maxHeight: '100%' }}>
      <defs>
        <style>{`
          @keyframes bc-c1 { 0%,3%{opacity:1} 30%,97%{opacity:0} 100%{opacity:1} }
          @keyframes bc-c2 { 0%,32%{opacity:0} 36%,63%{opacity:1} 67%,100%{opacity:0} }
          @keyframes bc-c3 { 0%,66%{opacity:0} 70%,96%{opacity:1} 100%{opacity:0} }
          @keyframes bc-tap {
            0%,22%  { transform:scale(0);   opacity:0; }
            26%,28% { transform:scale(1.6); opacity:0.22; }
            30%     { transform:scale(0);   opacity:0; }
            100%    { transform:scale(0);   opacity:0; }
          }
        `}</style>
      </defs>

      {/* Card */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="white" stroke={`${C}15`} strokeWidth="1"/>

      {/* ── State 1: Calendar ── */}
      <g style={{ animation: `bc-c1 ${dur} linear infinite` }}>
        <rect x="0" y="0" width="210" height="24" rx="12" fill={L}/>
        <rect x="0" y="12" width="210" height="12" fill={L}/>
        <path d="M14 12 L10 8 L14 4" stroke={C} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <text x="105" y="16" textAnchor="middle" fontSize="8.5" fill={C} fontWeight="700">June 2025</text>
        <path d="M196 4 L200 8 L196 12" stroke={C} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {DAYS_H.map((d, i) => (
          <text key={i} x={CX[i]} y="32" textAnchor="middle" fontSize="6" fill={`${C}50`} fontWeight="600">{d}</text>
        ))}
        <line x1="0" y1="35" x2="210" y2="35" stroke={`${C}08`} strokeWidth="1"/>
        {DATES.map(({ col, row, d, t }) => {
          const x = CX[col];
          const y = RY[row];
          if (t === 's') return (
            <g key={d}>
              <circle cx={x} cy={y} r="11" fill={C}
                style={{ animation: `bc-tap ${dur} ease-in-out infinite`, transformOrigin: `${x}px ${y}px` }}/>
              <circle cx={x} cy={y} r="9" fill={C}/>
              <text x={x} y={y + 4} textAnchor="middle" fontSize="7.5" fill="white" fontWeight="800">{d}</text>
            </g>
          );
          if (t === 'a') return (
            <g key={d}>
              <circle cx={x} cy={y} r="9" fill={C} opacity="0.85"/>
              <text x={x} y={y + 4} textAnchor="middle" fontSize="7" fill="white" fontWeight="700">{d}</text>
            </g>
          );
          if (t === 'b') return (
            <g key={d}>
              <circle cx={x} cy={y} r="9" fill={`${C}14`}/>
              <text x={x} y={y + 4} textAnchor="middle" fontSize="7" fill={`${C}45`} fontWeight="500">{d}</text>
            </g>
          );
          return <text key={d} x={x} y={y + 4} textAnchor="middle" fontSize="7" fill="#374151">{d}</text>;
        })}
        <circle cx="10" cy="137" r="4" fill={C} opacity="0.85"/>
        <text x="18" y="140" fontSize="5.5" fill={`${C}60`}>Available</text>
        <circle cx="70" cy="137" r="4" fill={`${C}14`}/>
        <text x="78" y="140" fontSize="5.5" fill={`${C}60`}>Booked</text>
        <text x="140" y="140" fontSize="5.5" fill={`${C}50`}>Tap a date to book →</text>
      </g>

      {/* ── State 2: Time Slots ── */}
      <g style={{ animation: `bc-c2 ${dur} linear infinite`, opacity: 0 }}>
        <rect x="0" y="0" width="210" height="24" rx="12" fill={L}/>
        <rect x="0" y="12" width="210" height="12" fill={L}/>
        <path d="M10 12 L6 8 L10 4" stroke={C} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <text x="105" y="16" textAnchor="middle" fontSize="8.5" fill={C} fontWeight="700">June 15, 2025</text>
        <rect x="168" y="6" width="36" height="12" rx="5" fill={C}/>
        <text x="186" y="15.5" textAnchor="middle" fontSize="6" fill="white" fontWeight="700">3 slots</text>
        {([
          { t: '9:00 AM',  x: 6,   y: 28, sel: false },
          { t: '11:00 AM', x: 110, y: 28, sel: false },
          { t: '1:00 PM',  x: 6,   y: 62, sel: false },
          { t: '2:00 PM',  x: 110, y: 62, sel: false },
          { t: '3:00 PM',  x: 6,   y: 96, sel: true  },
          { t: '4:00 PM',  x: 110, y: 96, sel: false },
        ] as const).map(({ t, x, y, sel }) => (
          <g key={t}>
            <rect x={x} y={y} width="94" height="28" rx="7"
              fill={sel ? C : `${C}07`} stroke={sel ? 'none' : `${C}18`} strokeWidth="1"/>
            <text x={x + 47} y={y + 17} textAnchor="middle" fontSize="9"
              fill={sel ? 'white' : '#374151'} fontWeight={sel ? '800' : '500'}>{t}</text>
            {sel && (
              <path d={`M${x + 74} ${y + 14} L${x + 77} ${y + 18} L${x + 83} ${y + 11}`}
                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            )}
          </g>
        ))}
        <text x="105" y="135" textAnchor="middle" fontSize="6.5" fill={`${C}45`}>Estimated duration: 2 hours</text>
      </g>

      {/* ── State 3: Confirm ── */}
      <g style={{ animation: `bc-c3 ${dur} linear infinite`, opacity: 0 }}>
        <rect x="0" y="0" width="210" height="24" rx="12" fill={L}/>
        <rect x="0" y="12" width="210" height="12" fill={L}/>
        <path d="M10 12 L6 8 L10 4" stroke={C} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <text x="105" y="16" textAnchor="middle" fontSize="8.5" fill={C} fontWeight="700">Confirm Booking</text>
        {/* Summary box */}
        <rect x="6" y="28" width="198" height="38" rx="8" fill={`${C}07`} stroke={`${C}15`} strokeWidth="1"/>
        <rect x="16" y="36" width="14" height="12" rx="2" fill="white" stroke={C} strokeWidth="0.8"/>
        <rect x="16" y="34" width="14" height="5" rx="2" fill={C} opacity="0.3"/>
        <line x1="21" y1="33" x2="21" y2="38" stroke={C} strokeWidth="1"/>
        <line x1="26" y1="33" x2="26" y2="38" stroke={C} strokeWidth="1"/>
        <text x="36" y="42" fontSize="8.5" fill="#0F1112" fontWeight="700">June 15, 2025</text>
        <text x="36" y="55" fontSize="7.5" fill={`${C}80`} fontWeight="600">3:00 PM · 2 hours</text>
        <circle cx="191" cy="47" r="8" fill="#D1FAE5"/>
        <path d="M187 47 L190 50.5 L195 43.5" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* Service */}
        <text x="8" y="80" fontSize="6" fill={`${C}45`} fontWeight="600" letterSpacing="0.5">SERVICE</text>
        <text x="8" y="93" fontSize="9" fill="#0F1112" fontWeight="700">House Cleaning</text>
        <rect x="148" y="81" width="56" height="14" rx="5" fill={`${C}12`}/>
        <text x="176" y="91.5" textAnchor="middle" fontSize="6.5" fill={C} fontWeight="600">Standard Plan</text>
        {/* Provider */}
        <line x1="6" y1="101" x2="204" y2="101" stroke={`${C}10`} strokeWidth="1"/>
        <circle cx="18" cy="114" r="8" fill={`${C}16`}/>
        <circle cx="18" cy="112" r="3" fill={C} opacity="0.4"/>
        <path d="M10 120 C10 116 26 116 26 120" fill={C} opacity="0.18"/>
        <text x="30" y="112" fontSize="7.5" fill="#0F1112" fontWeight="600">diana</text>
        <text x="30" y="122" fontSize="7" fill="#F59E0B">★</text>
        <text x="40" y="122" fontSize="7" fill="#374151" fontWeight="600">4.8 · Verified</text>
        {/* Button */}
        <rect x="6" y="129" width="198" height="17" rx="7" fill={C}/>
        <text x="105" y="141" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">Confirm Booking</text>
      </g>
    </svg>
  );
}

function SvgServiceArea() {
  const dur = '9s';
  const CX = 105, CY = 78;
  const R1 = 28, R2 = 46, R3 = 62;
  return (
    <svg width="100%" height="100%" viewBox="-12 -12 234 172" fill="none"
      preserveAspectRatio="xMidYMid meet" style={{ display: 'block', maxHeight: '100%' }}>
      <defs>
        <style>{`
          @keyframes sa-c1 { 0%,3%{opacity:1} 30%,97%{opacity:0} 100%{opacity:1} }
          @keyframes sa-c2 { 0%,32%{opacity:0} 36%,63%{opacity:1} 67%,100%{opacity:0} }
          @keyframes sa-c3 { 0%,66%{opacity:0} 70%,96%{opacity:1} 100%{opacity:0} }
        `}</style>
      </defs>

      {/* ── Map background ── */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="#EDE9E0"/>

      {/* Roads */}
      <rect x="0"   y="74"  width="210" height="8" fill="white" opacity="0.85"/>
      <rect x="101" y="0"   width="8"   height="148" fill="white" opacity="0.85"/>
      <rect x="0"   y="36"  width="210" height="4" fill="white" opacity="0.55"/>
      <rect x="0"   y="112" width="210" height="4" fill="white" opacity="0.55"/>
      <rect x="56"  y="0"   width="4"   height="148" fill="white" opacity="0.55"/>
      <rect x="152" y="0"   width="4"   height="148" fill="white" opacity="0.55"/>

      {/* Parks */}
      <rect x="6"   y="42"  width="44" height="26" rx="3" fill="#C8E6C0" opacity="0.8"/>
      <rect x="112" y="118" width="34" height="22" rx="3" fill="#C8E6C0" opacity="0.7"/>

      {/* Building blocks */}
      {([[6,6,44,24],[62,6,33,24],[111,6,35,24],[158,6,46,24],
         [6,84,44,22],[62,84,33,22],[111,84,35,22],[158,84,46,22],
         [6,118,44,24],[62,118,33,24],[158,118,46,24],
      ] as [number,number,number,number][]).map(([x,y,w,h],i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="2" fill="#D6D2C8" opacity="0.9"/>
      ))}

      {/* Provider dots */}
      {([[118,62],[92,64],[114,95],[90,91],
         [68,74],[140,76],[72,90],[126,60],
         [52,60],[158,70],[154,100],[50,94],
      ] as [number,number][]).map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill={C} opacity="0.55"/>
      ))}

      {/* ── Radius — 5 km ── */}
      <g style={{ animation: `sa-c1 ${dur} linear infinite` }}>
        <circle cx={CX} cy={CY} r={R1} fill={`${C}16`} stroke={C} strokeWidth="1.8" strokeDasharray="5 3"/>
        <rect x={CX - 15} y={CY - R1 - 13} width="30" height="11" rx="5" fill={C}/>
        <text x={CX} y={CY - R1 - 5} textAnchor="middle" fontSize="6.5" fill="white" fontWeight="700">5 km</text>
      </g>

      {/* ── Radius — 10 km ── */}
      <g style={{ animation: `sa-c2 ${dur} linear infinite`, opacity: 0 }}>
        <circle cx={CX} cy={CY} r={R2} fill={`${C}12`} stroke={C} strokeWidth="1.8" strokeDasharray="5 3"/>
        <rect x={CX - 17} y={CY - R2 - 13} width="34" height="11" rx="5" fill={C}/>
        <text x={CX} y={CY - R2 - 5} textAnchor="middle" fontSize="6.5" fill="white" fontWeight="700">10 km</text>
      </g>

      {/* ── Radius — 15 km ── */}
      <g style={{ animation: `sa-c3 ${dur} linear infinite`, opacity: 0 }}>
        <circle cx={CX} cy={CY} r={R3} fill={`${C}10`} stroke={C} strokeWidth="1.8" strokeDasharray="5 3"/>
        <rect x={CX - 17} y={CY - R3 - 13} width="34" height="11" rx="5" fill={C}/>
        <text x={CX} y={CY - R3 - 5} textAnchor="middle" fontSize="6.5" fill="white" fontWeight="700">15 km</text>
      </g>

      {/* ── Provider pin ── */}
      <path d={`M${CX},${CY-18} C${CX-9},${CY-18} ${CX-14},${CY-12} ${CX-14},${CY-5} C${CX-14},${CY+5} ${CX},${CY+12} ${CX},${CY+12} C${CX},${CY+12} ${CX+14},${CY+5} ${CX+14},${CY-5} C${CX+14},${CY-12} ${CX+9},${CY-18} ${CX},${CY-18}Z`} fill={C}/>
      <circle cx={CX} cy={CY - 5} r="5" fill="white"/>

      {/* ── Control panel ── */}
      <rect x="140" y="6" width="64" height="48" rx="6" fill="white" opacity="0.96" stroke={`${C}18`} strokeWidth="0.8"/>
      <text x="172" y="18" textAnchor="middle" fontSize="6.5" fill={C} fontWeight="700">Service Radius</text>
      {/* 3 radius buttons */}
      {([
        { x: 143, lbl: '5km',  anim: 'sa-c1', init: 1 as number },
        { x: 162, lbl: '10km', anim: 'sa-c2', init: 0 as number },
        { x: 183, lbl: '15km', anim: 'sa-c3', init: 0 as number },
      ]).map(({ x, lbl, anim, init }) => (
        <g key={lbl}>
          <rect x={x} y="22" width="17" height="12" rx="3" fill={`${C}10`} stroke={`${C}20`} strokeWidth="0.8"/>
          <text x={x + 8.5} y="31" textAnchor="middle" fontSize="5.5" fill={`${C}50`}>{lbl}</text>
          <g style={{ animation: `${anim} ${dur} linear infinite`, opacity: init }}>
            <rect x={x} y="22" width="17" height="12" rx="3" fill={C}/>
            <text x={x + 8.5} y="31" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="700">{lbl}</text>
          </g>
        </g>
      ))}
      {/* Provider count */}
      <g style={{ animation: `sa-c1 ${dur} linear infinite` }}>
        <text x="172" y="44" textAnchor="middle" fontSize="5.5" fill={`${C}65`} fontWeight="600">4 providers nearby</text>
      </g>
      <g style={{ animation: `sa-c2 ${dur} linear infinite`, opacity: 0 }}>
        <text x="172" y="44" textAnchor="middle" fontSize="5.5" fill={`${C}65`} fontWeight="600">7 providers nearby</text>
      </g>
      <g style={{ animation: `sa-c3 ${dur} linear infinite`, opacity: 0 }}>
        <text x="172" y="44" textAnchor="middle" fontSize="5.5" fill={`${C}65`} fontWeight="600">12 providers nearby</text>
      </g>

      {/* Card border on top */}
      <rect x="0" y="0" width="210" height="148" rx="12" fill="none" stroke={`${C}15`} strokeWidth="1.5"/>
    </svg>
  );
}

// ── Data ───────────────────────────────────────────────────────

type Feature = {
  title: string;
  desc: string;
  large?: boolean;
  bgColor: string;
  image?: string;
  preview?: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: 'Drag-and-Drop Page, Menu & Form Builders',
    desc: 'Qixer ships with a WordPress-style builder system — page builder with 30+ widgets, menu builder with mega menu support, form builder, and a widget builder. Non-technical operators customize the entire platform without touching a line of code.',
    large: true,
    bgColor: '#EEF2FF',
    preview: <SvgBuilderAnimated />,
  },
  {
    title: 'Commission + Subscription Revenue — Both at Once',
    desc: 'Charge providers a percentage on every completed order, a recurring monthly or yearly subscription fee, or both simultaneously. Flexible subscription tiers let you offer Basic, Professional, and Enterprise plans to sellers — generating predictable recurring revenue alongside transaction income.',
    large: true,
    bgColor: '#FFF7ED',
    preview: <SvgCommission />,
  },
  {
    title: 'GPS Service Search & Discovery',
    desc: 'Buyers search by service type and location. Qixer shows nearby providers sorted by distance, rating, and availability — reducing drop-off by matching customers with the closest qualified seller.',
    bgColor: '#EFF6FF',
    preview: <SvgGps />,
  },
  {
    title: 'Live Chat — Buyer to Seller',
    desc: 'Built-in real-time chat lets buyers and sellers communicate directly before and during a job. Removes friction, reduces cancellations, and increases booking completion rates.',
    bgColor: '#F0F9FF',
    preview: <SvgChat />,
  },
  {
    title: 'Seller Payout & Withdrawal System',
    desc: 'Providers request withdrawals from their earnings balance; admins approve and process payouts. Full payout history for both sellers and admins — transparent, auditable, no manual spreadsheets.',
    bgColor: '#F5F3FF',
    preview: <SvgPayout />,
  },
  {
    title: 'Coupon and Discount System',
    desc: 'Create fixed-amount or percentage-based coupons for acquisition campaigns, seasonal promotions, and loyalty rewards. Admins and sellers manage coupons independently from the dashboard.',
    bgColor: '#ECFDF5',
    preview: <SvgCoupon />,
  },
  {
    title: 'Advanced Admin Dashboard',
    desc: 'Monitor orders, earnings, active providers, and new signups from a single dashboard. Daily, weekly, and monthly breakdowns let you track growth and identify issues before they compound.',
    bgColor: '#EEF2FF',
    image: '/products/qixer-dashboard-preview.png',
  },
  {
    title: 'Buyer & Seller Flutter Apps',
    desc: 'Native iOS and Android apps for both sides of the marketplace. Buyers book on the go; sellers manage jobs, availability, and earnings from their phone — included with the Everything Bundle.',
    bgColor: '#F0FDF4',
    image: '/products/qixer-flutter-app.png',
  },
  {
    title: '20+ Payment Gateways',
    desc: 'PayPal, Stripe, Razorpay, Paytm, Flutterwave, and 15+ more gateways configured from the admin panel. Cover regional payment preferences without any custom development work.',
    bgColor: '#FEF3C7',
    preview: <SvgGateways />,
  },
  {
    title: 'Review and Rating System',
    desc: 'Buyers leave verified post-service reviews. Ratings surface high-quality providers and build marketplace trust — the social proof loop that drives repeat bookings without paid promotion.',
    bgColor: '#FEF2F2',
    preview: <SvgReviews />,
  },
  {
    title: 'Multi-Language + RTL Support',
    desc: 'Add and manage languages from the admin panel without code changes. Full RTL support for Arabic, Hebrew, and other right-to-left languages — the platform is ready for any regional market on day one.',
    bgColor: '#F0FDF4',
    preview: <SvgMultiLang />,
  },
  {
    title: 'Role-Based Admin Permissions',
    desc: 'Assign granular permissions to admin staff — control who can approve providers, process payouts, configure gateways, or manage subscriptions without exposing the entire admin panel.',
    bgColor: '#FFF0F3',
    preview: <SvgPermissions />,
  },
  {
    title: 'Real-Time Push Notifications',
    desc: 'Automated alerts keep buyers and sellers in sync at every stage — booking confirmed, provider en route, job completed, payment received. Reduces support queries by keeping both sides informed without manual outreach.',
    bgColor: '#FEF3C7',
    preview: <SvgNotifications />,
  },
  {
    title: 'Customized Service Orders',
    desc: 'Buyers can submit custom job requests with specific requirements, preferred timing, and notes. Sellers review and accept or decline — enabling flexible, bespoke services alongside standard catalog offerings.',
    bgColor: '#F0FDF4',
    preview: <SvgCustomOrder />,
  },
  {
    title: 'Email Templates & Automation',
    desc: 'Pre-built, editable email templates for every platform event — booking confirmations, cancellations, payout receipts, and subscription reminders. Manage and customize all templates from the admin panel.',
    bgColor: '#F0F9FF',
    preview: <SvgEmail />,
  },
  {
    title: 'Job Posting Module',
    desc: 'Buyers post jobs and receive bids from qualified providers — a reverse-marketplace flow alongside direct booking. Expands your platform to cover custom, quote-based services without separate infrastructure.',
    bgColor: '#F5F3FF',
    preview: <SvgJobPosting />,
  },
  {
    title: 'Buyer Wallet System',
    desc: 'Buyers load funds into an in-platform wallet and pay for services instantly — no card entry at checkout. Supports refunds back to wallet, improving repeat purchase rates and reducing payment friction.',
    bgColor: '#ECFDF5',
    preview: <SvgWallet />,
  },
  {
    title: 'Buyer & Seller Order Reports',
    desc: 'Detailed order history and earnings reports for both sides — buyers track spending and service history, sellers monitor income and job completion rates. Full transparency builds trust and reduces support requests.',
    bgColor: '#EEF2FF',
    preview: <SvgReports />,
  },
  {
    title: 'Provider Availability & Booking Slots',
    desc: 'Providers configure their available days and time slots; buyers book only during open windows. Eliminates double-bookings, reduces cancellations, and gives sellers full control over their schedule without manual coordination.',
    bgColor: '#FEF3C7',
    preview: <SvgCalendar />,
  },
  {
    title: 'Service Area & Radius Control',
    desc: 'Providers define their coverage zone by city, zone, or custom radius. Buyers see only providers who actually serve their location — reducing unqualified inquiries and improving booking completion rates.',
    bgColor: '#F0F9FF',
    preview: <SvgServiceArea />,
  },
];

// ── Card component ─────────────────────────────────────────────

function FeatureCard({
  title,
  desc,
  large = false,
  bgColor,
  image,
  preview,
}: {
  title: string;
  desc?: string;
  large?: boolean;
  bgColor?: string;
  image?: string;
  preview?: React.ReactNode;
}) {
  const bg = bgColor ?? '#F5F6F8';
  const imgH = large ? 'h-[200px] sm:h-[260px]' : 'h-[160px] sm:h-[200px]';

  return (
    <div
      className="rounded-2xl border border-[#E5E7EC] overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
      style={{ background: bg }}
    >
      <div
        className={`relative w-full overflow-hidden flex items-center justify-center ${imgH}`}
        style={{
          background: 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            style={{ padding: '16px' }}
          />
        ) : preview ? (
          preview
        ) : (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        )}
      </div>
      <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-2">
        <h3 className={`font-bold text-[#0F1112] mb-2 ${large ? 'text-[20px] sm:text-[24px]' : 'text-[17px] sm:text-[20px]'}`}>{title}</h3>
        {desc && <p className="text-[13px] sm:text-[14px] lg:text-[15px] text-[#6b7280] leading-6">{desc}</p>}
      </div>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────

export default function Features() {
  const topFeatures = FEATURES.slice(0, 2);
  const gridFeatures = FEATURES.slice(2);

  return (
    <section id="features" className="py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Platform Features
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] leading-tight mb-4">
            Everything You Need to Run a Service Marketplace
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            From buyer bookings to seller management — Qixer ships every module your on-demand service marketplace needs. No monthly fees, no hidden add-ons.
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
