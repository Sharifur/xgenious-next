'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { aiFeatures, aiTabs } from '@/data/saas-page';

const LOGOS: Record<string, string> = {
  'Stripe':     '/integrations/stripe.svg',
  'Slack':      '/integrations/slack.png',
  'Gmail':      '/integrations/gmail.svg',
  'HubSpot':    '/integrations/hubspot.svg',
  'Shopify':    '/integrations/shopify.svg',
  'Notion':     '/integrations/notion.svg',
  'Cal.com':    '/integrations/calcom.svg',
  'Mailchimp':  '/integrations/mailchimp.svg',
  'Asana':      '/integrations/asana.svg',
};

function PlatformLogo({ name, size = 16 }: { name: string; size?: number }) {
  const src = LOGOS[name];
  if (!src) return <span className="text-[7px] font-bold">{name.slice(0, 2).toUpperCase()}</span>;
  return <Image src={src} alt={name} width={size} height={size} style={{ objectFit: 'contain' }} unoptimized />;
}

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

/* 02 Automation — execution timeline (lead onboarding workflow) */

type WfStatus = 'idle' | 'connecting' | 'working' | 'done';

const WF_STEPS = [
  {
    label: 'Send welcome email',
    app: 'Mailchimp',
    connect: 'Authenticating with Mailchimp...',
    working: 'Sending via SMTP · lead@company.com',
    done: '0.4 s',
    output: 'Delivered to inbox',
    color: '#4FC3F7',
  },
  {
    label: 'Create CRM contact',
    app: 'HubSpot',
    connect: 'Connecting to HubSpot API...',
    working: 'POST /crm/v3/objects/contacts',
    done: '0.8 s',
    output: 'Contact #84231 · Pipeline: New Lead',
    color: '#FF7A59',
  },
  {
    label: 'Alert sales channel',
    app: 'Slack',
    connect: 'Connecting to Slack workspace...',
    working: 'Posting to #inbound-leads...',
    done: '0.3 s',
    output: 'Message delivered · 3 members notified',
    color: '#4A9C6D',
  },
  {
    label: 'Schedule follow-up',
    app: 'Asana',
    connect: 'Connecting to Asana project...',
    working: 'Creating task with due date...',
    done: '0.6 s',
    output: 'Task #T-2847 · Due in 48 h',
    color: '#A78BFA',
  },
];

// each step has 3 sub-phases: connecting(base) → working(base+1) → done(base+2)
// phase 0 = trigger, then 3 phases per step, then final pause
// total: 1 + 4*3 + 1 = 14 phases (0–13)
const WF_DELAYS = [
  700,          // 0  trigger shown
  950, 1350, 380, // 1-3  step 0: connecting / working / done-pause
  950, 1350, 380, // 4-6  step 1
  950, 1350, 380, // 7-9  step 2
  950, 1350, 380, // 10-12 step 3
  3200,         // 13 all done + long pause
];
const WF_TOTAL = WF_DELAYS.length; // 14

function WfConnector({ fromStatus }: { fromStatus: WfStatus }) {
  const color =
    fromStatus === 'done'       ? '#10B981' :
    fromStatus === 'working'    ? '#F26B4E' :
    fromStatus === 'connecting' ? '#F26B4E' :
    '#252528';
  return (
    <div style={{ paddingLeft: 13, height: 16 }}>
      <div className="w-px h-full transition-all duration-500" style={{ background: color, opacity: fromStatus === 'idle' ? 0.3 : 1 }} />
    </div>
  );
}

function WfStepRow({ step, status, isLast }: { step: (typeof WF_STEPS)[number]; status: WfStatus; isLast: boolean }) {
  const isDone       = status === 'done';
  const isWorking    = status === 'working';
  const isConnecting = status === 'connecting';
  const isActive     = isWorking || isConnecting;

  /* circle icon bg / border */
  const circleBg     = isDone ? 'rgba(16,185,129,0.15)' : isActive ? 'rgba(242,107,78,0.12)' : '#18181B';
  const circleBorder = isDone ? '1.5px solid rgba(16,185,129,0.45)' : isActive ? '1.5px solid rgba(242,107,78,0.45)' : '1.5px solid #27272A';
  const circleGlow   = isActive ? '0 0 10px rgba(242,107,78,0.2)' : 'none';

  /* card bg / border */
  const cardBg     = isDone ? 'rgba(16,185,129,0.04)' : isActive ? 'rgba(242,107,78,0.05)' : 'transparent';
  const cardBorder = isDone ? '1px solid rgba(16,185,129,0.1)' : isActive ? '1px solid rgba(242,107,78,0.14)' : '1px solid transparent';

  /* status badge */
  const badgeText  = isConnecting ? 'connecting' : isWorking ? 'in progress' : isDone ? step.done : '';
  const badgeColor = isDone ? '#10B981' : '#F26B4E';

  return (
    <>
      <div className="flex items-start gap-3">
        {/* Timeline circle */}
        <div className="flex-shrink-0" style={{ width: 28 }}>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-400"
            style={{ background: circleBg, border: circleBorder, boxShadow: circleGlow }}
          >
            {isDone && (
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M2 5.5l2.5 2.5L9 3" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            {isConnecting && (
              /* 3 tiny bouncing dots */
              <div className="flex gap-[3px] items-center">
                {[0, 120, 240].map((d) => (
                  <span key={d} className="w-1 h-1 rounded-full bg-[#F26B4E]"
                    style={{ animation: `bounce 0.9s ${d}ms infinite` }} />
                ))}
              </div>
            )}
            {isWorking && (
              <span className="w-2 h-2 rounded-full bg-[#F26B4E]"
                style={{ animation: 'blinkPulse 0.75s step-end infinite' }} />
            )}
            {status === 'idle' && <span className="w-1.5 h-1.5 rounded-full bg-[#3F3F46]" />}
          </div>
        </div>

        {/* Card */}
        <div className="flex-1 min-w-0 rounded-lg px-3 py-2 transition-all duration-300"
          style={{ background: cardBg, border: cardBorder }}>
          {/* Row 1: label + app badge + status badge */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-[11px] font-medium truncate"
                style={{ color: status === 'idle' ? '#3F3F46' : '#E5E7EC' }}>
                {step.label}
              </span>
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: '#ffffff',
                  border: `1px solid ${status === 'idle' ? '#27272A' : step.color + '50'}`,
                  opacity: status === 'idle' ? 0.4 : 1,
                }}
                title={step.app}
              >
                <PlatformLogo name={step.app} size={22} />
              </div>
            </div>
            {isActive && (
              <span className="text-[9px] flex-shrink-0"
                style={{ color: badgeColor, animation: 'blinkPulse 1.1s step-end infinite' }}>
                {badgeText}
              </span>
            )}
            {isDone && (
              <span className="text-[9px] flex-shrink-0" style={{ color: badgeColor }}>{badgeText}</span>
            )}
          </div>

          {/* Row 2: sub-line changes per state */}
          {isConnecting && (
            <p className="text-[9px] mt-1 text-[#8A8F99]"
              style={{ animation: 'fadeSlideUp 0.2s ease-out both' }}>
              {step.connect}
            </p>
          )}
          {isWorking && (
            <p className="text-[9px] mt-1 font-mono text-[#F26B4E]/70"
              style={{ animation: 'fadeSlideUp 0.2s ease-out both' }}>
              {step.working}
            </p>
          )}
          {isDone && (
            <p className="text-[9px] mt-1 text-[#8A8F99]"
              style={{ animation: 'fadeSlideUp 0.2s ease-out both' }}>
              {step.output}
            </p>
          )}
        </div>
      </div>

      {!isLast && <WfConnector fromStatus={status} />}
    </>
  );
}

const AutomationVisual = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = setTimeout(
      () => setPhase((p) => (p >= WF_TOTAL - 1 ? 0 : p + 1)),
      WF_DELAYS[phase] ?? 1000,
    );
    return () => clearTimeout(t);
  }, [phase]);

  const completedCount = WF_STEPS.filter((_, i) => phase >= i * 3 + 3).length;
  const allDone = phase === WF_TOTAL - 1;

  const getStatus = (i: number): WfStatus => {
    const base = i * 3 + 1;
    if (phase < base)       return 'idle';
    if (phase === base)     return 'connecting';
    if (phase === base + 1) return 'working';
    return 'done';
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0C0C0E] border border-[#1F2127] flex flex-col">

      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1A1A1D] flex-shrink-0" style={{ background: '#0E0E11' }}>
        <div className="flex items-center gap-2">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M7.5 1L1.5 7.5h4.5l-1.5 4.5L11 5.5H6.5L7.5 1z" fill="#F26B4E" />
          </svg>
          <span className="text-[11px] font-semibold text-[#E5E7EC]">Lead Onboarding</span>
        </div>
        <div
          className="flex items-center gap-1.5 px-2 py-0.5 rounded-full"
          style={allDone
            ? { background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.25)' }
            : { background: 'rgba(242,107,78,0.1)', border: '1px solid rgba(242,107,78,0.2)' }
          }
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: allDone ? '#10B981' : '#F26B4E',
              animation: allDone ? 'none' : 'blinkPulse 1s step-end infinite',
            }}
          />
          <span className="text-[9px] font-semibold" style={{ color: allDone ? '#10B981' : '#F26B4E' }}>
            {allDone ? 'Complete' : phase === 0 ? 'Starting' : 'Running'}
          </span>
        </div>
      </div>

      {/* Trigger row */}
      <div className="px-4 pt-3 flex-shrink-0">
        <div className="flex items-start gap-3">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(242,107,78,0.15)', border: '1.5px solid rgba(242,107,78,0.4)' }}
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M6.5 1L1 6.5h4L3.5 10 10 4.5H6L6.5 1z" fill="#F26B4E" />
            </svg>
          </div>
          <div
            className="flex-1 min-w-0 rounded-lg px-3 py-2"
            style={{ background: 'rgba(242,107,78,0.06)', border: '1px solid rgba(242,107,78,0.14)' }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-[#E5E7EC]">Trigger: Form submitted</span>
              <span className="text-[9px] font-semibold text-[#10B981]">received</span>
            </div>
            <p className="text-[9px] text-[#8A8F99] mt-0.5">lead@company.com · just now</p>
          </div>
        </div>
        <WfConnector fromStatus="done" />
      </div>

      {/* Steps */}
      <div className="flex-1 px-4 overflow-hidden">
        {WF_STEPS.map((step, i) => (
          <WfStepRow key={step.app} step={step} status={getStatus(i)} isLast={i === WF_STEPS.length - 1} />
        ))}
      </div>

      {/* Footer: progress */}
      <div className="px-4 py-3 flex-shrink-0 border-t border-[#1A1A1D]">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] text-[#52525B]">
            {completedCount} / {WF_STEPS.length} actions
          </span>
          <span className="text-[9px]" style={{ color: allDone ? '#10B981' : '#52525B' }}>
            {allDone ? 'All done' : phase === 0 ? 'Queued' : `Step ${Math.min(phase, WF_STEPS.length)} of ${WF_STEPS.length}`}
          </span>
        </div>
        <div className="h-[3px] rounded-full overflow-hidden" style={{ background: '#1F2127' }}>
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${(completedCount / WF_STEPS.length) * 100}%`,
              background: allDone
                ? '#10B981'
                : `linear-gradient(90deg, #10B981 0%, #F26B4E 100%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

/* 03 Integrations — real-world event flow: trigger → AI → actions */

const INT_SCENARIOS = [
  {
    trigger: { name: 'Stripe',   color: '#635BFF', event: 'Payment received · $299.00', detail: 'from john@acme.com' },
    actions:  [
      { name: 'HubSpot', color: '#FF7A59', text: 'Deal marked Closed Won' },
      { name: 'Slack',   color: '#4A9C6D', text: 'Notified #sales-wins channel' },
    ],
  },
  {
    trigger: { name: 'Gmail',    color: '#EA4335', event: 'New email from prospect', detail: '"Can we schedule a demo?"' },
    actions:  [
      { name: 'HubSpot', color: '#FF7A59', text: 'Contact + deal created' },
      { name: 'Cal.com', color: '#4285F4', text: 'Demo slot booked · 3 PM' },
    ],
  },
  {
    trigger: { name: 'Shopify',  color: '#96BF48', event: 'New order #SH-1234', detail: '3 items · $187.50' },
    actions:  [
      { name: 'Stripe',  color: '#635BFF', text: 'Invoice generated + sent' },
      { name: 'Slack',   color: '#4A9C6D', text: '#fulfillment team alerted' },
    ],
  },
  {
    trigger: { name: 'HubSpot',  color: '#FF7A59', event: 'Deal stage advanced', detail: 'Proposal → Contract Sent' },
    actions:  [
      { name: 'Gmail',   color: '#EA4335', text: 'Contract email dispatched' },
      { name: 'Notion',  color: '#9B9B8E', text: 'Project board spun up' },
    ],
  },
];

const INT_PLATFORMS = [
  { name: 'Stripe',   color: '#635BFF' },
  { name: 'Slack',    color: '#4A9C6D' },
  { name: 'Gmail',    color: '#EA4335' },
  { name: 'HubSpot',  color: '#FF7A59' },
  { name: 'Shopify',  color: '#96BF48' },
  { name: 'Notion',   color: '#9B9B8E' },
  { name: 'Cal.com',  color: '#4285F4' },
];

// 4 scenarios × 3 sub-phases: 0=trigger, 1=+action1, 2=+action2+pause
const INT_DELAYS = [
  520, 1050, 1700,
  520, 1050, 1700,
  520, 1050, 1700,
  520, 1050, 2600,
];

function IntPlatformChip({ name, color, active }: { name: string; color: string; active: boolean }) {
  return (
    <div
      className="w-12 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
      style={{
        background: '#ffffff',
        border: `1.5px solid ${active ? color + '80' : '#E5E7EC30'}`,
        opacity: active ? 1 : 0.45,
        boxShadow: active ? `0 0 0 3px ${color}22` : 'none',
      }}
      title={name}
    >
      <PlatformLogo name={name} size={22} />
    </div>
  );
}

function IntFlowConnector({ active }: { active: boolean }) {
  return (
    <div className="flex items-center gap-2 py-1" style={{ paddingLeft: 11 }}>
      <div className="w-px transition-all duration-500"
        style={{ height: 14, background: active ? '#F26B4E' : '#252528' }} />
    </div>
  );
}

function IntActionCard({ action, delay = 0 }: { action: { name: string; color: string; text: string }; delay?: number }) {
  return (
    <div
      className="flex items-center gap-2.5 rounded-lg px-3 py-2.5"
      style={{
        background: action.color + '0D',
        border: `1px solid ${action.color}28`,
        animation: `fadeSlideUp 0.3s ease-out ${delay}ms both`,
      }}
    >
      {/* platform logo */}
      <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
        style={{ background: action.color + '18' }}>
        <PlatformLogo name={action.name} size={16} />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-[10px] font-semibold text-[#E5E7EC]">{action.name}</span>
        <p className="text-[9px] text-[#8A8F99] truncate mt-0.5">{action.text}</p>
      </div>
      {/* checkmark */}
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="flex-shrink-0">
        <circle cx="6.5" cy="6.5" r="6" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="1" />
        <path d="M3.5 6.5l2 2 4-4" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

const IntegrationsVisual = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = setTimeout(
      () => setPhase((p) => (p >= INT_DELAYS.length - 1 ? 0 : p + 1)),
      INT_DELAYS[phase] ?? 1000,
    );
    return () => clearTimeout(t);
  }, [phase]);

  const scenarioIdx = Math.floor(phase / 3);
  const subPhase    = phase % 3;
  const scenario    = INT_SCENARIOS[scenarioIdx];

  // which platform names are "active" right now
  const activePlatforms = new Set<string>([scenario.trigger.name]);
  if (subPhase >= 1) activePlatforms.add(scenario.actions[0].name);
  if (subPhase >= 2) activePlatforms.add(scenario.actions[1].name);

  // completed events for the log strip (previous scenarios)
  const prevIdx = (scenarioIdx - 1 + INT_SCENARIOS.length) % INT_SCENARIOS.length;
  const prevScenario = INT_SCENARIOS[prevIdx];

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0C0C0E] border border-[#1F2127] flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1A1A1D] flex-shrink-0" style={{ background: '#0E0E11' }}>
        <div className="flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="#F26B4E" strokeWidth="1.2" />
            <circle cx="6" cy="6" r="2" fill="#F26B4E" />
            <path d="M6 1v1.5M6 9.5V11M1 6h1.5M9.5 6H11" stroke="#F26B4E" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span className="text-[11px] font-semibold text-[#E5E7EC]">Intelligent Integrations</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.22)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" style={{ animation: 'blinkPulse 1.2s step-end infinite' }} />
          <span className="text-[9px] font-semibold text-[#10B981]">7 platforms live</span>
        </div>
      </div>

      {/* Platform chips */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 flex-shrink-0 flex-wrap">
        {INT_PLATFORMS.map((p) => (
          <IntPlatformChip key={p.name} name={p.name} color={p.color} active={activePlatforms.has(p.name)} />
        ))}
      </div>

      {/* Event flow */}
      <div className="flex-1 px-4 pb-2 flex flex-col overflow-hidden">

        {/* Trigger card */}
        <div
          key={`trigger-${scenarioIdx}`}
          className="rounded-xl p-3"
          style={{
            background: scenario.trigger.color + '10',
            border: `1px solid ${scenario.trigger.color}30`,
            animation: 'fadeSlideUp 0.35s ease-out both',
          }}
        >
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                style={{ background: scenario.trigger.color + '22' }}>
                <PlatformLogo name={scenario.trigger.name} size={16} />
              </div>
              <span className="text-[10px] font-semibold" style={{ color: scenario.trigger.color }}>
                {scenario.trigger.name}
              </span>
              <span className="text-[8px] text-[#52525B] px-1.5 py-0.5 rounded"
                style={{ background: '#1A1A1D', border: '1px solid #27272A' }}>
                trigger
              </span>
            </div>
            <span className="text-[8px] text-[#10B981] font-medium">received</span>
          </div>
          <p className="text-[11px] font-semibold text-[#E5E7EC]">{scenario.trigger.event}</p>
          <p className="text-[9px] text-[#8A8F99] mt-0.5">{scenario.trigger.detail}</p>
        </div>

        {/* AI connector */}
        <IntFlowConnector active />
        <div className="flex items-center gap-2 mb-1 flex-shrink-0">
          <div className="w-6 h-6 rounded-full bg-[#F26B4E] flex items-center justify-center text-[8px] font-bold text-white flex-shrink-0">
            AI
          </div>
          <span className="text-[9px]" style={{ color: subPhase === 0 ? '#8A8F99' : '#10B981' }}>
            {subPhase === 0 ? 'Analyzing event...' : `${subPhase === 1 ? '1' : '2'} action${subPhase > 1 ? 's' : ''} dispatched`}
          </span>
          {subPhase === 0 && (
            <div className="flex gap-[3px] items-center">
              {[0, 120, 240].map((d) => (
                <span key={d} className="w-1 h-1 rounded-full bg-[#8A8F99]"
                  style={{ animation: `bounce 0.9s ${d}ms infinite` }} />
              ))}
            </div>
          )}
        </div>
        <IntFlowConnector active={subPhase >= 1} />

        {/* Action cards */}
        <div className="flex flex-col gap-1.5">
          {subPhase >= 1 && <IntActionCard key={`a0-${scenarioIdx}`} action={scenario.actions[0]} />}
          {subPhase >= 2 && <IntActionCard key={`a1-${scenarioIdx}`} action={scenario.actions[1]} delay={120} />}
        </div>
      </div>

      {/* Footer: previous event log */}
      <div className="px-4 py-2.5 flex-shrink-0 border-t border-[#1A1A1D] flex items-center gap-2">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <circle cx="5" cy="5" r="4.5" stroke="#10B981" strokeWidth="1" />
          <path d="M3 5l1.5 1.5L7 3" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[9px] text-[#52525B]">
          <span style={{ color: prevScenario.trigger.color }}>{prevScenario.trigger.name}</span>
          {' → '}
          <span style={{ color: prevScenario.actions[0].color }}>{prevScenario.actions[0].name}</span>
          {' + '}
          <span style={{ color: prevScenario.actions[1].color }}>{prevScenario.actions[1].name}</span>
          {' · completed'}
        </span>
      </div>
    </div>
  );
};

const visuals = [
  <DevelopmentVisual key="dev" />,
  <AutomationVisual key="auto" />,
  <IntegrationsVisual key="int" />,
];

/* ──────────────────────────────────────────────────────────── */

export default function AIAgentSection() {
  const [active, setActive] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scale        = useTransform(scrollYProgress, [0, 0.25], [0.28, 1]);
  const cardOpacity  = useTransform(scrollYProgress, [0.02, 0.18], [0, 1]);
  const pillOpacity  = useTransform(scrollYProgress, [0.05, 0.18], [0, 1]);
  const pillY        = useTransform(scrollYProgress, [0.05, 0.18], [18, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0.08, 0.20], [0, 1]);
  const headingY     = useTransform(scrollYProgress, [0.08, 0.20], [18, 0]);
  const bodyOpacity  = useTransform(scrollYProgress, [0.11, 0.22], [0, 1]);
  const bodyY        = useTransform(scrollYProgress, [0.11, 0.22], [14, 0]);
  const listOpacity  = useTransform(scrollYProgress, [0.14, 0.24], [0, 1]);
  const listY        = useTransform(scrollYProgress, [0.14, 0.24], [14, 0]);
  const visualOpacity = useTransform(scrollYProgress, [0.09, 0.22], [0, 1]);
  const visualY      = useTransform(scrollYProgress, [0.09, 0.22], [24, 0]);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (isMobile) return;
    if (v < 0.25 || v > 0.75) return;
    if (v < 0.417)      setActive(0);
    else if (v < 0.583) setActive(1);
    else                setActive(2);
  });

  /* ── Mobile layout — no sticky, no animations, no visual panels ── */
  if (isMobile) {
    return (
      <section className="py-14 bg-white">
        {/* ref anchor keeps useScroll happy — framer-motion throws if ref defined but unattached */}
        <div ref={containerRef} style={{ display: 'none' }} aria-hidden />
        <div className="container-page px-4">
          <div className="rounded-[24px] bg-[#0C0C0E] border border-[#1F2127] p-6">

            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#F26B4E]/40 text-[#F26B4E] text-[13px] font-medium mb-6">
              Your Ultimate Agent
            </span>

            <h2 className="text-[28px] leading-[1.15] font-bold text-white tracking-[-0.02em] mb-4">
              Custom AI, Built for{' '}
              <span className="italic font-bold">What You Actually Need.</span>
            </h2>

            <p className="text-[#8A8F99] text-[14px] leading-[23px] mb-8">
              Autonomous agents, workflow automation, decision systems, or LLM integrations —
              built from scratch for your data, your tools, your team.
            </p>

            <ul className="border-t border-[#1F2127]">
              {aiFeatures.map((f, i) => {
                const isActive = active === i;
                return (
                  <li key={f.number} className="border-b border-[#1F2127]">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className="w-full flex items-start gap-4 py-5 text-left"
                    >
                      <span className={`italic text-[14px] font-medium flex-shrink-0 w-10 pt-0.5 transition-colors ${isActive ? 'text-[#F26B4E]' : 'text-[#8A8F99]'}`}>
                        /{f.number}.
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-[18px] font-bold leading-6 transition-colors ${isActive ? 'text-[#F26B4E]' : 'text-white'}`}>
                          {f.title}
                        </h3>
                        {isActive && (
                          <p className="text-[13px] text-[#8A8F99] leading-[21px] mt-2">{f.description}</p>
                        )}
                      </div>
                      <svg
                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                        className={`flex-shrink-0 mt-1 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                      >
                        <path d="M4 6l4 4 4-4" stroke={isActive ? '#F26B4E' : '#8A8F99'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }

  /* ── Desktop layout — full scroll animation ── */
  return (
    <div ref={containerRef} style={{ minHeight: '200vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          className="w-full"
          style={{ scale, transformOrigin: 'center', willChange: 'transform' }}
        >
          <section className="py-16">
            <div className="container-page">
              <motion.div
                className="rounded-[28px] bg-[#0C0C0E] border border-[#1F2127] p-8 lg:p-14"
                style={{ opacity: cardOpacity }}
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">

                  {/* Left — copy + interactive feature list */}
                  <div className="flex flex-col">
                    <motion.span
                      style={{ opacity: pillOpacity, y: pillY }}
                      className="inline-flex items-center self-start px-4 py-1.5 rounded-full border border-[#F26B4E]/40 text-[#F26B4E] text-[14px] font-medium mb-8"
                    >
                      Your Ultimate Agent
                    </motion.span>

                    <motion.h2
                      style={{ opacity: headingOpacity, y: headingY }}
                      className="text-[28px] sm:text-[38px] lg:text-[54px] leading-[1.1] font-bold text-white tracking-[-0.02em]"
                    >
                      Custom AI, Built for{' '}
                      <span className="italic font-bold">What You Actually Need.</span>
                    </motion.h2>

                    <motion.p
                      style={{ opacity: bodyOpacity, y: bodyY }}
                      className="mt-6 text-[#8A8F99] text-[15px] leading-[24px] max-w-[520px]"
                    >
                      Autonomous agents, workflow automation, decision systems, or LLM integrations —
                      built from scratch for your data, your tools, your team.
                    </motion.p>

                    <motion.ul className="mt-12" style={{ opacity: listOpacity, y: listY }}>
                      {aiFeatures.map((f, i) => {
                        const isActive = active === i;
                        return (
                          <li key={f.number} className="border-b border-[#1F2127] last:border-b-0">
                            <button
                              type="button"
                              onClick={() => setActive(i)}
                              aria-pressed={isActive}
                              className="w-full flex items-center gap-6 py-6 text-left group"
                            >
                              <span className={`italic text-[15px] font-medium flex-shrink-0 w-12 transition-colors ${isActive ? 'text-[#F26B4E]' : 'text-[#8A8F99]'}`}>
                                /{f.number}.
                              </span>
                              <div className="flex-1">
                                <h3 className={`text-[22px] font-bold leading-7 transition-colors ${isActive ? 'text-[#F26B4E] mb-1.5' : 'text-white group-hover:text-[#F26B4E]'}`}>
                                  {f.title}
                                </h3>
                                {isActive && (
                                  <p className="text-[14px] text-[#8A8F99] leading-[22px]">{f.description}</p>
                                )}
                              </div>
                              <svg
                                width="16" height="16" viewBox="0 0 16 16" fill="none"
                                className={`flex-shrink-0 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                              >
                                <path d="M4 6l4 4 4-4" stroke={isActive ? '#F26B4E' : '#8A8F99'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </li>
                        );
                      })}
                    </motion.ul>
                  </div>

                  {/* Right — animated visual */}
                  <motion.div
                    style={{ opacity: visualOpacity, y: visualY }}
                    className="rounded-[24px] bg-[#131418] border border-[#1F2127] p-6 lg:p-8 flex flex-col h-full min-h-[480px]"
                  >
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

                    <div className="mt-6 flex items-center justify-between gap-3 flex-shrink-0">
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F26B4E] animate-pulse" />
                        <span className="text-[12px] font-medium text-[#E5E7EC]">{aiTabs[active]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {aiTabs.map((_, i) => (
                          <span
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${active === i ? 'bg-[#F26B4E] w-4' : 'bg-[#3F3F3F]'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
