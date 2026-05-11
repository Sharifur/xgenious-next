'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { aiFeatures, aiTabs } from '@/data/saas-page';

/* ────────────────────────────────────────────────────────────
   Right-side visuals — one per feature/tab. Each visual is an
   animated SVG illustration representing the corresponding capability.
   ──────────────────────────────────────────────────────────── */

function VisualFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0C0C0E] border border-[#1F2127]">
      <svg
        viewBox="0 0 400 280"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {children}
      </svg>
    </div>
  );
}

/* 01 Custom AI Agent Development — autopilot customer support chat */

// phase durations in ms
const PHASE_DURATIONS = [1200, 700, 1400, 700, 1200, 700, 1400, 2800];
//                        ^user1 typing  ^ai1 typing  ^user2 typing  ^ai2 typing
//                              ^user1 msg     ^ai1 msg     ^user2 msg     ^ai2 msg + pause

function TypingDots({ color = '#A6A6A6' }: { color?: string }) {
  return (
    <div className="flex gap-1 items-center px-1">
      {[0, 150, 300].map((d) => (
        <span
          key={d}
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: color, animation: `bounce 1s ${d}ms infinite` }}
        />
      ))}
    </div>
  );
}

function ChatBubble({ from, text, typing }: { from: 'user' | 'ai'; text?: string; typing?: boolean }) {
  const isAi = from === 'ai';
  return (
    <div
      className={`flex gap-2 items-end ${isAi ? 'flex-row-reverse' : ''}`}
      style={{ animation: 'fadeSlideUp 0.35s ease-out both' }}
    >
      <div
        className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[8px] font-bold ${
          isAi ? 'bg-[#F26B4E] text-white' : 'bg-[#2F2F2F] text-[#A6A6A6]'
        }`}
      >
        {isAi ? 'AI' : 'U'}
      </div>
      <div
        className={`rounded-2xl px-3 py-2 max-w-[78%] text-[11px] leading-[16px] ${
          isAi
            ? 'bg-[#F26B4E]/15 border border-[#F26B4E]/25 text-[#E5E7EC] rounded-br-sm'
            : 'bg-[#1F2127] text-[#E5E7EC] rounded-bl-sm'
        }`}
      >
        {typing ? <TypingDots color={isAi ? '#F26B4E' : '#A6A6A6'} /> : text}
      </div>
    </div>
  );
}

const DevelopmentVisual = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setPhase((p) => (p >= 7 ? 0 : p + 1)),
      PHASE_DURATIONS[phase] ?? 1000,
    );
    return () => clearTimeout(timer);
  }, [phase]);

  // what's visible at each phase
  const showUserTyping1 = phase === 0;
  const showUserMsg1    = phase >= 1;
  const showAiTyping1   = phase === 2;
  const showAiMsg1      = phase >= 3;
  const showUserTyping2 = phase === 4;
  const showUserMsg2    = phase >= 5;
  const showAiTyping2   = phase === 6;
  const showAiMsg2      = phase >= 7;

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0C0C0E] border border-[#1F2127] flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1F2127] bg-[#131418] flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-[#F26B4E] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
          AI
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-semibold text-white">Support Agent</p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <p className="text-[10px] text-[#10B981]">Autopilot active</p>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981] text-[10px] font-medium flex-shrink-0">
          24/7
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
        {showUserTyping1 && <ChatBubble key="ut1" from="user" typing />}
        {showUserMsg1    && <ChatBubble key="um1" from="user" text="Hi, I need help with my order #4521" />}
        {showAiTyping1   && <ChatBubble key="at1" from="ai" typing />}
        {showAiMsg1      && <ChatBubble key="am1" from="ai" text="On it! Order #4521 is in transit — arriving tomorrow by 5 PM." />}
        {showUserTyping2 && <ChatBubble key="ut2" from="user" typing />}
        {showUserMsg2    && <ChatBubble key="um2" from="user" text="Can I change the delivery address?" />}
        {showAiTyping2   && <ChatBubble key="at2" from="ai" typing />}
        {showAiMsg2      && <ChatBubble key="am2" from="ai" text="Done! Address updated and confirmation sent to your email." />}
      </div>

      {/* Input bar */}
      <div className="px-4 py-3 border-t border-[#1F2127] flex items-center gap-2 flex-shrink-0 bg-[#131418]">
        <div className="flex-1 bg-[#1F2127] rounded-full px-3 py-2">
          <p className="text-[10px] text-[#484848]">Customer message...</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-[#F26B4E] flex items-center justify-center flex-shrink-0">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 11L11 1M11 1H4M11 1v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

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

/* 03 Integrations — central hub with connected app icons */
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
      { x: 80,  y: 60,  bg: '#1F2127', icon: 'S', color: '#3B82F6' },
      { x: 320, y: 60,  bg: '#1F2127', icon: 'G', color: '#10B981' },
      { x: 50,  y: 140, bg: '#1F2127', icon: 'N', color: '#22C55E' },
      { x: 350, y: 140, bg: '#1F2127', icon: 'L', color: '#A78BFA' },
      { x: 80,  y: 220, bg: '#1F2127', icon: 'F', color: '#EF4444' },
      { x: 320, y: 220, bg: '#1F2127', icon: 'D', color: '#7DD3FC' },
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
