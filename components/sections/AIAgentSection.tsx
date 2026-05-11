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

/* 01 Custom AI Agent Development — typewriter input → send → AI reply */

// 6 conversation pairs — each has 4 sub-phases:
//   0=typing in input, 1=user msg in chat, 2=AI typing, 3=AI msg shown
const CHAT_PAIRS = [
  { user: 'Hi, I need help with my order #4521',      ai: 'On it! Order #4521 is in transit — arriving tomorrow by 5 PM.' },
  { user: 'Can I change the delivery address?',        ai: 'Done! Address updated and confirmation sent to your email.' },
  { user: 'What time does the delivery window start?', ai: 'Your delivery window is 2 PM – 6 PM tomorrow.' },
  { user: 'Can I track my delivery in real time?',     ai: 'Yes! Track it live at the link we sent to your email.' },
  { user: 'Will someone call before arrival?',         ai: 'Yes, the driver will call 30 minutes before reaching you.' },
  { user: 'Thanks, that\'s all I needed!',             ai: 'Happy to help! We\'re here 24/7 whenever you need us.' },
];
const TOTAL_PHASES = CHAT_PAIRS.length * 4; // 24

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
  const [inputText, setInputText] = useState('');
  const [charIdx, setCharIdx] = useState(0);

  const round = Math.floor(phase / 4);
  const subPhase = phase % 4;
  const isTypingPhase = subPhase === 0;
  const currentMsg = CHAT_PAIRS[round]?.user ?? '';

  // Typewriter — one char every 52 ms, then send
  useEffect(() => {
    if (!isTypingPhase) return;
    if (charIdx < currentMsg.length) {
      const t = setTimeout(() => {
        setInputText(currentMsg.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, 52);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setPhase((p) => p + 1);
      setInputText('');
      setCharIdx(0);
    }, 380);
    return () => clearTimeout(t);
  }, [phase, charIdx, isTypingPhase, currentMsg]);

  // Fixed delays for non-typing sub-phases
  useEffect(() => {
    if (isTypingPhase) return;
    const isLast = phase === TOTAL_PHASES - 1;
    const delay = subPhase === 1 ? 500 : subPhase === 2 ? 1400 : isLast ? 2800 : 800;
    const t = setTimeout(() => setPhase((p) => (p >= TOTAL_PHASES - 1 ? 0 : p + 1)), delay);
    return () => clearTimeout(t);
  }, [phase, isTypingPhase, subPhase]);

  // Sliding window: show last 2 completed pairs so the chat stays compact
  const startRound = Math.max(0, round - 1);
  const visibleItems: { from: 'user' | 'ai'; text: string; key: string }[] = [];
  for (let r = startRound; r <= round && r < CHAT_PAIRS.length; r++) {
    const pair = CHAT_PAIRS[r];
    const base = r * 4;
    if (phase >= base + 1) visibleItems.push({ from: 'user', text: pair.user, key: `u${r}` });
    if (phase >= base + 3) visibleItems.push({ from: 'ai',   text: pair.ai,   key: `a${r}` });
  }
  const showAiTyping = subPhase === 2;

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

      {/* Messages — sliding 2-pair window */}
      <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
        {visibleItems.map((item) => (
          <ChatBubble key={item.key} from={item.from} text={item.text} />
        ))}
        {showAiTyping && <ChatBubble key={`at${round}`} from="ai" typing />}
      </div>

      {/* Input bar — typewriter text appears here */}
      <div className="px-4 py-3 border-t border-[#1F2127] flex items-center gap-2 flex-shrink-0 bg-[#131418]">
        <div
          className="flex-1 bg-[#1F2127] rounded-full px-3 py-2 flex items-center overflow-hidden"
          style={{ minHeight: 28 }}
        >
          {inputText === '' ? (
            <p className="text-[10px] text-[#484848] select-none">Customer message...</p>
          ) : (
            <p className="text-[10px] text-[#E5E7EC] truncate">
              {inputText}
              <span
                className="inline-block w-[1px] h-[10px] bg-[#F26B4E] ml-[1px] align-middle"
                style={{ animation: 'blinkPulse 1s step-end infinite' }}
              />
            </p>
          )}
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

/* 02 Automation — animated workflow pipeline (lead onboarding scenario) */
const WORKFLOW_STEPS = [
  {
    abbr: 'EM', label: 'Send welcome email', detail: 'To: lead@company.com', color: '#EA4335',
    icon: <path d="M2 4h10v7H2zM2 4l5 4 5-4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinejoin="round" />,
  },
  {
    abbr: 'CR', label: 'Create CRM contact', detail: 'HubSpot pipeline added', color: '#FF7A59',
    icon: <><circle cx="6" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none" /><path d="M1 11c0-2.8 2.2-4 5-4s5 1.2 5 4" stroke="currentColor" strokeWidth="1.2" fill="none" /></>,
  },
  {
    abbr: 'SL', label: 'Notify sales channel', detail: '#inbound-leads alerted', color: '#4A9C6D',
    icon: <><rect x="1.5" y="2" width="11" height="8" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" /><path d="M4 12l2-2h5" stroke="currentColor" strokeWidth="1.2" fill="none" /></>,
  },
  {
    abbr: 'TK', label: 'Create onboarding task', detail: 'Due in 48h · Assigned', color: '#6366F1',
    icon: <><rect x="2" y="1.5" width="10" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none" /><path d="M4 5h6M4 7.5h4M4.5 10l1.5 1.5L9 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" /></>,
  },
  {
    abbr: 'AN', label: 'Log to analytics', detail: 'Funnel stage: MQL', color: '#10B981',
    icon: <><path d="M2 11L5 7l3 2 4-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" /><path d="M2 13h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></>,
  },
];

const AutomationVisual = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // phase 0 = trigger shown, 1-5 = step running, 6 = all done + pause
    const delays = [700, 950, 950, 950, 950, 950, 2600];
    const t = setTimeout(() => setPhase((p) => (p >= 6 ? 0 : p + 1)), delays[phase] ?? 950);
    return () => clearTimeout(t);
  }, [phase]);

  const completedCount = Math.max(0, phase - 1);

  const getStatus = (i: number): 'idle' | 'running' | 'done' => {
    if (phase === 0) return 'idle';
    if (i < phase - 1) return 'done';
    if (i === phase - 1) return 'running';
    return 'idle';
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0C0C0E] border border-[#1F2127] flex flex-col">
      {/* Trigger card */}
      <div
        className="mx-4 mt-4 rounded-xl p-3 flex items-center gap-3 flex-shrink-0"
        style={{ background: 'rgba(242,107,78,0.07)', border: '1px solid rgba(242,107,78,0.18)', animation: 'fadeSlideUp 0.4s ease-out both' }}
      >
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(242,107,78,0.14)' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M8.5 1.5L2 8h5l-1.5 5 7.5-7.5H8L8.5 1.5z" fill="#F26B4E" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold text-[#E5E7EC]">New lead form submitted</p>
          <p className="text-[10px] text-[#8A8F99]">lead@company.com · just now</p>
        </div>
        <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: 'rgba(16,185,129,0.14)', color: '#10B981' }}>
          LIVE
        </span>
      </div>

      {/* Workflow steps */}
      <div className="flex-1 px-4 pt-3 flex flex-col gap-1.5 overflow-hidden">
        {WORKFLOW_STEPS.map((step, i) => {
          const status = getStatus(i);
          return (
            <div
              key={step.abbr}
              className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-300"
              style={{
                background: status === 'running' ? 'rgba(242,107,78,0.07)' : status === 'done' ? 'rgba(16,185,129,0.04)' : 'rgba(31,33,39,0.4)',
                border: status === 'running' ? '1px solid rgba(242,107,78,0.18)' : '1px solid transparent',
              }}
            >
              {/* app icon */}
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: step.color + '22', color: step.color }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14">{step.icon}</svg>
              </div>
              {/* label + detail */}
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-medium truncate" style={{ color: status === 'idle' ? '#3F3F3F' : '#E5E7EC' }}>
                  {step.label}
                </p>
                {status !== 'idle' && (
                  <p className="text-[9px] text-[#8A8F99] truncate" style={{ animation: 'fadeSlideUp 0.3s ease-out both' }}>
                    {step.detail}
                  </p>
                )}
              </div>
              {/* status badge */}
              {status === 'done' && (
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(16,185,129,0.14)' }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2.5L8 2.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              {status === 'running' && (
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(242,107,78,0.14)' }}>
                  <span className="w-2 h-2 rounded-full bg-[#F26B4E]" style={{ animation: 'blinkPulse 0.9s step-end infinite' }} />
                </div>
              )}
              {status === 'idle' && (
                <div className="w-5 h-5 rounded-full border border-[#2A2A2A] flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="px-4 py-3 flex-shrink-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] text-[#8A8F99]">{completedCount} / {WORKFLOW_STEPS.length} actions complete</span>
          {phase === 6 && <span className="text-[9px] font-semibold text-[#10B981]">Workflow done</span>}
        </div>
        <div className="h-1 rounded-full overflow-hidden" style={{ background: '#1F2127' }}>
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${(completedCount / WORKFLOW_STEPS.length) * 100}%`,
              background: phase === 6 ? '#10B981' : '#F26B4E',
            }}
          />
        </div>
      </div>
    </div>
  );
};

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
