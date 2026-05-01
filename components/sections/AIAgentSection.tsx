'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { aiFeatures, aiTabs } from '@/data/saas-page';

/* ────────────────────────────────────────────────────────────
   Right-side visuals — one per feature/tab. Each visual is an
   animated SVG illustration representing the corresponding capability.
   ──────────────────────────────────────────────────────────── */

function VisualFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0C0C0E] border border-[#1F2127]">
      <svg viewBox="0 0 400 280" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
        {children}
      </svg>
    </div>
  );
}

/* 01 Development — code window with AI tokens */
const DevelopmentVisual = () => (
  <VisualFrame>
    <defs>
      <linearGradient id="codeBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1A1F28" />
        <stop offset="100%" stopColor="#0F141A" />
      </linearGradient>
    </defs>
    <rect x="40" y="30" width="320" height="220" rx="10" fill="url(#codeBg)" stroke="#2A323D" strokeWidth="1" />
    <rect x="40" y="30" width="320" height="22" rx="10" fill="#0F141A" />
    <circle cx="56" cy="41" r="3.5" fill="#EF4444" opacity="0.7" />
    <circle cx="68" cy="41" r="3.5" fill="#F59E0B" opacity="0.7" />
    <circle cx="80" cy="41" r="3.5" fill="#10B981" opacity="0.7" />

    <g fontFamily="monospace" fontSize="11">
      <text x="60" y="80" fill="#9CA3AF">{'1'}</text>
      <text x="80" y="80"><tspan fill="#C28BFF">async function</tspan> <tspan fill="#7DD3FC">agent</tspan>() {`{`}</text>
      <text x="60" y="100" fill="#9CA3AF">{'2'}</text>
      <text x="95" y="100"><tspan fill="#C28BFF">const</tspan> tool = <tspan fill="#FBBF24">await</tspan> use(</text>
      <text x="60" y="120" fill="#9CA3AF">{'3'}</text>
      <text x="105" y="120"><tspan fill="#A7F3D0">&apos;web_search&apos;</tspan></text>
      <text x="60" y="140" fill="#9CA3AF">{'4'}</text>
      <text x="95" y="140">);</text>
      <text x="60" y="160" fill="#9CA3AF">{'5'}</text>
      <text x="95" y="160"><tspan fill="#C28BFF">return</tspan> tool.<tspan fill="#FBBF24">reason</tspan>();</text>
      <text x="60" y="180" fill="#9CA3AF">{'6'}</text>
      <text x="80" y="180">{`}`}</text>
    </g>

    {/* Floating AI badge */}
    <g transform="translate(310 80)">
      <rect x="-22" y="-10" width="44" height="20" rx="10" fill="#F26B4E" />
      <text textAnchor="middle" y="4" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="white">
        AI
      </text>
    </g>

    {/* Cursor */}
    <rect x="170" y="172" width="2" height="11" fill="#F26B4E">
      <animate attributeName="opacity" values="1;0;1" dur="0.9s" repeatCount="indefinite" />
    </rect>
  </VisualFrame>
);

/* 02 Automation — brain with electric tendrils */
const AutomationVisual = () => (
  <VisualFrame>
    <defs>
      <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4DD0E1" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#26C6DA" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#26C6DA" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="brainBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4DD0E1" />
        <stop offset="100%" stopColor="#0097A7" />
      </linearGradient>
    </defs>
    <circle cx="200" cy="140" r="130" fill="url(#brainGlow)" />

    <g stroke="#4DD0E1" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.7">
      <path d="M 200 50 Q 180 30 160 20" />
      <path d="M 170 60 Q 130 40 90 50" />
      <path d="M 260 70 Q 290 50 320 60" />
      <path d="M 280 110 Q 320 90 360 100" />
      <path d="M 120 130 Q 70 130 30 150" />
      <path d="M 150 200 Q 100 220 60 240" />
      <path d="M 270 230 Q 320 250 360 260" />
    </g>

    <path
      d="M 200 70 C 150 70 110 100 110 150 C 110 200 150 230 200 230 C 250 230 290 200 290 150 C 290 100 250 70 200 70 Z"
      fill="url(#brainBody)"
      opacity="0.85"
    />
    <path d="M 140 130 Q 170 120 200 130 Q 230 140 260 130" stroke="#80DEEA" strokeWidth="1.5" fill="none" opacity="0.8" />
    <path d="M 130 160 Q 165 155 200 165 Q 235 175 270 160" stroke="#80DEEA" strokeWidth="1.5" fill="none" opacity="0.8" />
    <path d="M 140 190 Q 170 185 200 190 Q 230 195 260 185" stroke="#80DEEA" strokeWidth="1.5" fill="none" opacity="0.8" />

    {/* CPU chip */}
    <g>
      <rect x="160" y="125" width="80" height="60" rx="6" fill="rgba(0,0,0,0.4)" stroke="#B2EBF2" strokeWidth="1.2" />
      <rect x="172" y="138" width="56" height="34" rx="3" stroke="#80DEEA" strokeWidth="0.8" fill="none" />
    </g>
  </VisualFrame>
);

/* 03 Data-Driven — animated bar chart with growing bars */
const DataDrivenVisual = () => (
  <VisualFrame>
    <defs>
      <linearGradient id="barGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#F26B4E" />
        <stop offset="100%" stopColor="#FFB39E" />
      </linearGradient>
    </defs>

    {/* Grid */}
    <g stroke="#1F2127" strokeWidth="1">
      {[60, 110, 160, 210].map((y) => (
        <line key={y} x1="60" y1={y} x2="360" y2={y} />
      ))}
    </g>

    {/* Y-axis labels */}
    <g fontFamily="Inter, sans-serif" fontSize="9" fill="#8A8F99">
      <text x="50" y="64" textAnchor="end">100</text>
      <text x="50" y="114" textAnchor="end">75</text>
      <text x="50" y="164" textAnchor="end">50</text>
      <text x="50" y="214" textAnchor="end">25</text>
    </g>

    {/* Bars */}
    {[
      { x: 80, h: 130, label: 'Q1' },
      { x: 130, h: 90, label: 'Q2' },
      { x: 180, h: 160, label: 'Q3' },
      { x: 230, h: 110, label: 'Q4' },
      { x: 280, h: 180, label: 'Q5' },
      { x: 330, h: 145, label: 'Q6' },
    ].map((bar, i) => (
      <g key={bar.label}>
        <rect x={bar.x - 14} y={210 - bar.h} width="28" height={bar.h} rx="3" fill="url(#barGrad)">
          <animate attributeName="height" from="0" to={bar.h} dur={`${0.4 + i * 0.08}s`} fill="freeze" />
          <animate attributeName="y" from="210" to={210 - bar.h} dur={`${0.4 + i * 0.08}s`} fill="freeze" />
        </rect>
        <text x={bar.x} y="226" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fill="#8A8F99">
          {bar.label}
        </text>
      </g>
    ))}

    {/* Trend line */}
    <path
      d="M 80 80 L 130 120 L 180 50 L 230 100 L 280 30 L 330 65"
      stroke="#7DD3FC"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {[80, 130, 180, 230, 280, 330].map((x, i) => {
      const ys = [80, 120, 50, 100, 30, 65];
      return <circle key={x} cx={x} cy={ys[i]} r="3" fill="#7DD3FC" />;
    })}

    {/* Floating insight badge */}
    <g transform="translate(310 250)">
      <rect x="-50" y="-12" width="100" height="22" rx="11" fill="#F26B4E" />
      <text textAnchor="middle" y="3" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="white">
        +24% predicted
      </text>
    </g>
  </VisualFrame>
);

/* 04 Integrations — central hub with connected app icons */
const IntegrationsVisual = () => (
  <VisualFrame>
    <defs>
      <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#F26B4E" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#F26B4E" stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle cx="200" cy="140" r="110" fill="url(#hubGlow)" />

    {/* Connection lines */}
    <g stroke="#F26B4E" strokeWidth="1.4" fill="none" strokeDasharray="4 4" opacity="0.7">
      <line x1="200" y1="140" x2="80" y2="60" />
      <line x1="200" y1="140" x2="320" y2="60" />
      <line x1="200" y1="140" x2="50" y2="140" />
      <line x1="200" y1="140" x2="350" y2="140" />
      <line x1="200" y1="140" x2="80" y2="220" />
      <line x1="200" y1="140" x2="320" y2="220" />
    </g>

    {/* Center hub */}
    <g transform="translate(200 140)">
      <circle r="36" fill="#F26B4E" />
      <text textAnchor="middle" y="5" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="white">
        AI
      </text>
    </g>

    {/* Surrounding app nodes */}
    {[
      { x: 80,  y: 60,  bg: '#1F2127', icon: 'S', color: '#3B82F6' }, // Slack
      { x: 320, y: 60,  bg: '#1F2127', icon: 'G', color: '#10B981' }, // GitHub
      { x: 50,  y: 140, bg: '#1F2127', icon: 'N', color: '#22C55E' }, // Notion
      { x: 350, y: 140, bg: '#1F2127', icon: 'L', color: '#A78BFA' }, // Linear
      { x: 80,  y: 220, bg: '#1F2127', icon: 'F', color: '#EF4444' }, // Figma
      { x: 320, y: 220, bg: '#1F2127', icon: 'D', color: '#7DD3FC' }, // Drive
    ].map((n) => (
      <g key={`${n.x}-${n.y}`} transform={`translate(${n.x} ${n.y})`}>
        <circle r="22" fill={n.bg} stroke={n.color} strokeWidth="1.4" />
        <text textAnchor="middle" y="5" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill={n.color}>
          {n.icon}
        </text>
      </g>
    ))}

    {/* Pulsing rings on hub */}
    <circle cx="200" cy="140" r="36" fill="none" stroke="#F26B4E" strokeWidth="1.5" opacity="0.5">
      <animate attributeName="r" from="36" to="60" dur="2.4s" repeatCount="indefinite" />
      <animate attributeName="opacity" from="0.5" to="0" dur="2.4s" repeatCount="indefinite" />
    </circle>
  </VisualFrame>
);

const visuals = [
  <DevelopmentVisual key="dev" />,
  <AutomationVisual key="auto" />,
  <DataDrivenVisual key="data" />,
  <IntegrationsVisual key="int" />,
];

/* ──────────────────────────────────────────────────────────── */

export default function AIAgentSection() {
  const [active, setActive] = useState(1); // Automation default per Figma

  return (
    <section className="py-16">
      <div className="container-page">
        {/* Inner contained dark card */}
        <div className="rounded-[28px] bg-[#0C0C0E] border border-[#1F2127] p-8 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            {/* Left — copy + interactive feature list */}
            <div className="flex flex-col">
              {/* Capabilities pill */}
              <span className="inline-flex items-center self-start px-4 py-1.5 rounded-full border border-[#F26B4E]/40 text-[#F26B4E] text-[14px] font-medium mb-8">
                Capabilities
              </span>

              {/* Heading — large display weight, italic emphasis */}
              <h2 className="text-[44px] lg:text-[54px] leading-[1.05] font-bold text-white tracking-[-0.02em]">
                AI Agent that{' '}
                <span className="italic font-bold">Actually do Work</span>
              </h2>

              {/* Description */}
              <p className="mt-6 text-[#8A8F99] text-[15px] leading-[24px] max-w-[520px]">
                We build smart, scalable, and efficient digital products by embedding intelligence
                at every layer — from autonomous agents that reason in real time, to systems that
                learn, adapt, and decide alongside your team.
              </p>

              {/* Features list — italic numbers in a fixed-width column, bold titles, divider lines */}
              <ul className="mt-12">
                {aiFeatures.map((f, i) => {
                  const isActive = active === i;
                  return (
                    <li key={f.number} className="border-b border-[#1F2127] last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setActive(i)}
                        onMouseEnter={() => setActive(i)}
                        aria-pressed={isActive}
                        className="w-full flex items-center gap-6 py-6 text-left group"
                      >
                        <span
                          className={`italic text-[15px] font-medium flex-shrink-0 w-12 transition-colors ${
                            isActive ? 'text-[#F26B4E]' : 'text-[#8A8F99]'
                          }`}
                        >
                          /{f.number}.
                        </span>
                        <div className="flex-1">
                          <h3
                            className={`text-[22px] font-bold leading-7 mb-1.5 transition-colors ${
                              isActive ? 'text-[#F26B4E]' : 'text-white group-hover:text-[#F26B4E]'
                            }`}
                          >
                            {f.title}
                          </h3>
                          <p className="text-[14px] text-[#8A8F99] leading-[22px]">{f.description}</p>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right — animated visual driven by the active left-side feature.
                No tabs — left list is the single source of truth. */}
            <div className="rounded-[24px] bg-[#131418] border border-[#1F2127] p-6 lg:p-8 flex flex-col h-full min-h-[480px]">
              <div className="relative w-full flex-1 min-h-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 0.96, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -8 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="absolute inset-0"
                  >
                    {visuals[active]}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Subtle label showing the active capability */}
              <div className="mt-6 flex items-center justify-between gap-3 flex-shrink-0">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F26B4E] animate-pulse" />
                  <span className="text-[12px] font-medium text-[#E5E7EC]">
                    {aiTabs[active]}
                  </span>
                </div>
                {/* Tiny dot indicators for the 4 capabilities */}
                <div className="flex items-center gap-1.5">
                  {aiTabs.map((_, i) => (
                    <span
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        active === i ? 'bg-[#F26B4E] w-4' : 'bg-[#3F3F3F]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
