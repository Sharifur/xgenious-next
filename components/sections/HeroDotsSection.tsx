'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

/* SVG icons — defined here so this client chunk is self-contained */
const I_AI = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#0F1112" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#0F1112" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#0F1112" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#0F1112" />
  </svg>
);
const I_SW = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
      stroke="#0F1112"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const I_DEV = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#0F1112" strokeWidth="1.4" />
    <path d="M3 12h18" stroke="#0F1112" strokeWidth="1.4" strokeLinecap="round" />
    <path
      d="M12 3c2.5 3 4 5.8 4 9s-1.5 6-4 9M12 3c-2.5 3-4 5.8-4 9s1.5 6 4 9"
      stroke="#0F1112"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

function FeatureCard({
  icon,
  title,
  tags,
  href,
  withPointer = false,
}: {
  icon: React.ReactNode;
  title: string;
  tags: string[];
  href: string;
  withPointer?: boolean;
}) {
  return (
    <Link href={href} className="relative w-full lg:w-[220px] group/card">
      {withPointer && (
        <span
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-white rotate-45"
          style={{ boxShadow: '-1px -1px 1px rgba(0,0,0,0.04)' }}
        />
      )}
      <div
        className="relative bg-white flex flex-col gap-3 p-4 transition-shadow duration-200 group-hover/card:shadow-[0_8px_28px_rgba(0,0,0,0.16)]"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.10)', borderRadius: 10 }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 flex items-center justify-center flex-shrink-0"
            style={{ background: '#FFE8E1', borderRadius: 16 }}
          >
            {icon}
          </div>
          <span className="text-[16px] font-medium text-[#0F1112] whitespace-nowrap">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[12px] font-medium text-[#2F2F2F] leading-4 bg-[#F5F6F8] border border-[#E5E7EC] rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function PulseDot({
  active,
  delay = 0,
  onActivate,
  onDeactivate,
  onClick,
  ariaLabel,
}: {
  active: boolean;
  delay?: number;
  onActivate: () => void;
  onDeactivate: () => void;
  onClick: () => void;
  ariaLabel: string;
}) {
  const ringColor = active ? 'rgba(242,107,78,0.75)' : 'rgba(242,107,78,0.55)';
  const coreColor = '#F26B4E';

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-pressed={active}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onFocus={onActivate}
      onBlur={onDeactivate}
      onClick={onClick}
      className="relative w-[44px] h-[44px] cursor-pointer focus:outline-none flex items-center justify-center"
    >
      <span
        aria-hidden
        className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full pointer-events-none"
        style={{
          background: ringColor,
          animation: `blinkPulse 3.6s cubic-bezier(0.4,0,0.6,1) ${delay}ms infinite`,
          transformOrigin: 'center',
        }}
      />
      <span
        aria-hidden
        className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full pointer-events-none"
        style={{
          background: ringColor,
          animation: `blinkPulse 3.6s cubic-bezier(0.4,0,0.6,1) ${delay + 1800}ms infinite`,
          transformOrigin: 'center',
        }}
      />
      <span
        aria-hidden
        className="absolute inset-0 rounded-full transition-colors duration-200"
        style={{ background: active ? 'rgba(242,107,78,0.22)' : 'rgba(242,107,78,0.12)' }}
      />
      <span
        aria-hidden
        className="absolute rounded-full transition-colors duration-200"
        style={{ width: 26, height: 26, background: 'rgba(255,255,255,0.92)' }}
      />
      <span
        aria-hidden
        className="relative rounded-full transition-colors duration-200"
        style={{
          width: 12,
          height: 12,
          background: coreColor,
          animation: `blinkCore 1.8s ease-in-out ${delay}ms infinite`,
          boxShadow: '0 0 0 2px rgba(242,107,78,0.25)',
        }}
      />
    </button>
  );
}

const dots = [
  { x: '27%', y: 140, delay: 0,    label: 'Show AI Agent capabilities',        card: 0 },
  { x: '46%', y: 50,  delay: 700,  label: 'Show Custom Software capabilities', card: 1 },
  { x: '75%', y: 90,  delay: 1400, label: 'Show Development capabilities',     card: 2 },
] as const;

const featureCards = [
  { icon: I_AI,  title: 'AI Agent',        tags: ['Intelligent', 'Scalable'],  href: '/ai-agent-development-services' },
  { icon: I_SW,  title: 'Custom Software', tags: ['Flexible', 'User-Centric'], href: '/custom-saas-development-company' },
  { icon: I_DEV, title: 'Development',     tags: ['Secure', 'Efficient'],      href: '/web-app-development-company' },
];

const CARD_WIDTH = 220;
const DOT_SIZE = 44;
const ARROW_GAP = 22;

export default function HeroDotsSection() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [pinnedIdx, setPinnedIdx] = useState<number | null>(null);
  const [autoIdx, setAutoIdx] = useState<number>(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    autoRef.current = setInterval(() => {
      if (hoverIdx === null && pinnedIdx === null) {
        setAutoIdx((i) => (i + 1) % dots.length);
      }
    }, 2500);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [hoverIdx, pinnedIdx]);

  const activeIdx = hoverIdx ?? pinnedIdx ?? autoIdx;
  const setHover = (i: number | null) => setHoverIdx(i);
  const togglePin = (i: number) => setPinnedIdx((p) => (p === i ? null : i));

  return (
    <div className="relative w-full mt-16 hidden lg:block max-w-[1040px]" style={{ height: 280 }}>
      {dots.map((d, i) => (
        <div
          key={`dot-${i}`}
          className="absolute"
          style={{ left: d.x, top: d.y, transform: 'translateX(-50%)' }}
        >
          <PulseDot
            active={activeIdx === d.card}
            delay={d.delay}
            ariaLabel={d.label}
            onActivate={() => setHover(d.card)}
            onDeactivate={() => setHover(null)}
            onClick={() => togglePin(d.card)}
          />
        </div>
      ))}

      {featureCards.map((card, i) => {
        const dot = dots.find((d) => d.card === i)!;
        const visible = activeIdx === i;
        const cardTop = dot.y + DOT_SIZE + ARROW_GAP;

        return (
          <div
            key={card.title}
            className="absolute transition-all duration-300 ease-out"
            style={{
              left: dot.x,
              top: cardTop,
              marginLeft: -CARD_WIDTH / 2,
              opacity: visible ? 1 : 0,
              transform: `translateY(${visible ? 0 : 8}px)`,
              pointerEvents: visible ? 'auto' : 'none',
            }}
          >
            <FeatureCard
              icon={card.icon}
              title={card.title}
              tags={card.tags}
              href={card.href}
              withPointer
            />
          </div>
        );
      })}
    </div>
  );
}
