'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const HeroBackground = dynamic(() => import('@/components/ui/HeroBackground'), { ssr: false });

/* ── Corner stack-icon block with cursor arrow ── */
type Corner = 'tl' | 'tr' | 'bl' | 'br';
const RADIUS: Record<Corner, string> = {
  tl: '6px 99px 99px 99px',
  tr: '99px 6px 99px 99px',
  bl: '99px 99px 99px 6px',
  br: '99px 99px 6px 99px',
};
const CURSOR_POS: Record<Corner, React.CSSProperties> = {
  tl: { top: 0, left: 0 },
  tr: { top: 0, right: 0 },
  bl: { bottom: 0, left: 0 },
  br: { bottom: 0, right: 0 },
};
const CURSOR_TF: Record<Corner, string> = {
  tl: 'rotate(180deg)',
  tr: 'scaleY(-1)',
  bl: 'scaleX(-1)',
  br: 'none',
};

function StackBlock({
  icon,
  cursorColor,
  borderColor,
  corner,
  bg = '#FFFFFF',
}: {
  icon: string;
  cursorColor: string;
  borderColor: string;
  corner: Corner;
  bg?: string;
}) {
  // Box sits opposite the cursor corner
  const boxPos: Record<Corner, React.CSSProperties> = {
    tl: { bottom: 0, right: 0 },
    tr: { bottom: 0, left: 0 },
    bl: { top: 0, right: 0 },
    br: { top: 0, left: 0 },
  };

  return (
    <div className="relative" style={{ width: 66, height: 66 }}>
      <div
        className="absolute w-[50px] h-[50px] flex items-center justify-center"
        style={{
          ...boxPos[corner],
          background: bg,
          border: `1px solid ${borderColor}`,
          borderRadius: RADIUS[corner],
          boxShadow:
            '0 0 0 1px rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.04)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="" width="24" height="24" />
      </div>
      <div
        className="absolute w-4 h-4"
        style={{
          ...CURSOR_POS[corner],
          transform: CURSOR_TF[corner],
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.06))',
        }}
      >
        <svg width="16" height="16" viewBox="53 53 12 12" fill="none">
          <path
            d="M60.566 64.013l-4.022-1.574c-2.32-.908-3.48-1.362-3.441-2.082.038-.72 1.249-1.05 3.67-1.71.722-.197 1.082-.296 1.332-.546.25-.25.348-.61.545-1.331.66-2.42.99-3.632 1.71-3.67.72-.038 1.174 1.122 2.082 3.442l1.574 4.022c.95 2.43 1.426 3.644.81 4.26-.616.615-1.83.14-4.26-.81z"
            fill={cursorColor}
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
      </div>
    </div>
  );
}

/* ── Floating feature card with upward arrow pointer ── */
function FeatureCard({
  icon,
  title,
  tags,
  withPointer = false,
}: {
  icon: React.ReactNode;
  title: string;
  tags: string[];
  withPointer?: boolean;
}) {
  return (
    <div className="relative w-[220px]">
      {/* Upward arrow pointer (sits on top edge of card) */}
      {withPointer && (
        <span
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-white rotate-45"
          style={{
            boxShadow: '-1px -1px 1px rgba(0,0,0,0.04)',
          }}
        />
      )}

      <div
        className="relative bg-white flex flex-col gap-3 p-4"
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
    </div>
  );
}

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
  // Always coral — primary brand colour so the pulsing dots draw the eye
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
      {/* Two staggered expanding pulse rings — slow, always-on */}
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

      {/* Static halo (visible base) — soft coral tint always */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full transition-colors duration-200"
        style={{
          background: active ? 'rgba(242,107,78,0.22)' : 'rgba(242,107,78,0.12)',
        }}
      />
      {/* Inner white ring */}
      <span
        aria-hidden
        className="absolute rounded-full transition-colors duration-200"
        style={{
          width: 26,
          height: 26,
          background: 'rgba(255,255,255,0.92)',
        }}
      />
      {/* Core dot — coral, gently breathing on top */}
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

/* Dot positions correspond to marked points on the globe map —
   placed on actual landmasses (Africa, Eurasia, East Asia) to convey
   "we work globally". Each card appears below its dot with an upward arrow. */
const dots = [
  { x: '27%', y: 140, delay: 0,    label: 'Show AI Agent capabilities',         card: 0 }, // Africa
  { x: '46%', y: 50,  delay: 700,  label: 'Show Custom Software capabilities',  card: 1 }, // Eurasia
  { x: '75%', y: 90,  delay: 1400, label: 'Show Development capabilities',      card: 2 }, // East Asia
] as const;

const featureCards = [
  { icon: I_AI,  title: 'AI Agent',         tags: ['Intelligent', 'Scalable'] },
  { icon: I_SW,  title: 'Custom Software',  tags: ['Flexible', 'User-Centric'] },
  { icon: I_DEV, title: 'Development',      tags: ['Secure', 'Efficient'] },
];

const CARD_WIDTH = 220;
const DOT_SIZE = 44;
const ARROW_GAP = 22; // space below dot for the arrow + breathing room

export default function HeroSection() {
  // Index of the active globe point (null = none). Hover shows it; click pins it.
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [pinnedIdx, setPinnedIdx] = useState<number | null>(null);
  const activeIdx = hoverIdx ?? pinnedIdx;

  const setHover = (i: number | null) => setHoverIdx(i);
  const togglePin = (i: number) => setPinnedIdx((p) => (p === i ? null : i));

  return (
    <section
      className="relative overflow-hidden pt-[180px] pb-[40px]"
      style={{
        minHeight: 900,
        background:
          'radial-gradient(120% 60% at 50% 0%, #FFF1EC 0%, #FFE8E1 35%, #F5EFEC 70%, #ECEAEB 100%)',
      }}
    >
      <HeroBackground />

      {/* Diagonal light strips */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <div
          className="absolute"
          style={{
            width: 187,
            height: 900,
            left: 'calc(50% - 560px)',
            top: 95,
            background:
              'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 33%, rgba(255,255,255,0) 66%)',
            transform: 'rotate(24.5deg)',
            transformOrigin: 'top center',
          }}
        />
        <div
          className="absolute"
          style={{
            width: 187,
            height: 950,
            left: 'calc(50% + 375px)',
            top: 95,
            background:
              'linear-gradient(180deg, rgba(255,255,255,0) 46%, rgba(255,255,255,0.45) 67%, rgba(255,255,255,0) 100%)',
            transform: 'rotate(24.5deg)',
            transformOrigin: 'top center',
          }}
        />
      </div>

      {/* Vertical guides */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div
          className="absolute top-0 bottom-0 w-px"
          style={{ left: 'calc(50% - 490px)', background: 'rgba(0,0,0,0.06)' }}
        />
        <div
          className="absolute top-0 bottom-0 w-px"
          style={{ left: 'calc(50% + 490px)', background: 'rgba(0,0,0,0.06)' }}
        />
      </div>

      {/* Globe at bottom — with rotation, coral glow, and light sweep */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none hidden lg:block overflow-hidden">
        {/* Coral glow that pulses behind the globe */}
        <span
          aria-hidden
          className="absolute left-1/2 -translate-x-1/2 rounded-full"
          style={{
            bottom: -120,
            width: 900,
            height: 320,
            background:
              'radial-gradient(closest-side, rgba(242,107,78,0.45), rgba(242,107,78,0.18) 60%, transparent 75%)',
            filter: 'blur(16px)',
            animation: 'globeGlowPulse 5s ease-in-out infinite',
          }}
        />

        {/* Globe wrapper — slowly rotates */}
        <div
          className="relative flex justify-center"
          style={{
            width: '80%',
            maxWidth: 1203,
            margin: '0 auto',
            animation: 'globeSpin 90s linear infinite',
            transformOrigin: '50% 70%',
          }}
        >
          <Image
            src="/globe.png"
            alt=""
            width={1203}
            height={375}
            priority
            className="w-full h-auto select-none"
          />

          {/* Light sweep beam — slides across the globe */}
          <span
            aria-hidden
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: 0,
              width: '22%',
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%)',
              animation: 'globeLightSweep 6.5s ease-in-out infinite',
              mixBlendMode: 'screen',
            }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div
          className="relative w-full max-w-[1100px] px-6 sm:px-10 lg:px-16 py-12 lg:py-16 rounded-[5px]"
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.55)',
            boxShadow:
              '0 1px 0 0 rgba(255,255,255,0.7) inset, 0 -1px 0 0 rgba(255,255,255,0.15) inset',
          }}
        >
          {/* Corner stack blocks — icon-box midpoint anchored exactly on each panel corner */}
          <div className="absolute hidden lg:block z-20" style={{ left: -25, top: -25 }}>
            <StackBlock
              icon="/icons/fi_laravel.svg"
              borderColor="rgba(242,78,30,0.16)"
              cursorColor="#F24E1E"
              corner="br"
            />
          </div>
          <div className="absolute hidden lg:block z-20" style={{ right: -25, top: -25 }}>
            <StackBlock
              icon="/icons/fi_nodejs.svg"
              borderColor="rgba(10,207,131,0.16)"
              cursorColor="#0ACF83"
              corner="bl"
            />
          </div>
          <div className="absolute hidden lg:block z-20" style={{ left: -25, bottom: -25 }}>
            <StackBlock
              icon="/icons/fi_openai.svg"
              borderColor="rgba(0,0,0,0.16)"
              cursorColor="#0F1112"
              corner="tr"
            />
          </div>
          <div className="absolute hidden lg:block z-20" style={{ right: -25, bottom: -25 }}>
            <StackBlock
              icon="/icons/fi_react.svg"
              borderColor="rgba(20,110,245,0.16)"
              cursorColor="#146EF5"
              corner="tl"
            />
          </div>

          <div className="relative">
          {/* Pill eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F26B4E]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2F2F2F]">
              Custom SaaS Development
            </span>
          </div>

          <h1
            className="text-[#0F1112]"
            style={{
              fontWeight: 600,
              fontSize: 'clamp(40px, 5.4vw, 70px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: 22,
            }}
          >
            Where Custom Solutions Meet{' '}
            <span style={{ fontStyle: 'italic', fontWeight: 600 }}>Real Impact</span>
          </h1>

          <p
            className="text-[#2F2F2F] mx-auto"
            style={{
              fontWeight: 400,
              fontSize: 18,
              lineHeight: '27px',
              maxWidth: 676,
              marginBottom: 32,
            }}
          >
            We&apos;re an engineering-led studio building greenfield SaaS, web apps, mobile apps,
            and AI agents for mid-market companies. Real projects from $50K — no script clones,
            no copy-paste templates.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 font-semibold text-white text-[15px] hover:opacity-95 transition"
              style={{ width: 201, height: 56, background: '#F26B4E', borderRadius: 30 }}
            >
              Start Your Project
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center font-semibold text-[15px] text-[#0F1112] bg-white border border-[#D8D8D8] hover:border-[#0F1112]/30 transition"
              style={{ width: 209, height: 56, borderRadius: 30 }}
            >
              View Case Studies
            </Link>
          </div>
          </div>
        </div>

        {/* Dots + cards — each dot has its own (x,y) on the globe;
            its card sits directly below it with an upward arrow */}
        <div className="relative w-full mt-16 hidden lg:block max-w-[1040px]" style={{ height: 280 }}>
          {/* Dots — staggered vertically so they sit on different points of the globe */}
          {dots.map((d, i) => (
            <div
              key={`dot-${i}`}
              className="absolute"
              style={{
                left: d.x,
                top: d.y,
                transform: 'translateX(-50%)', // centre the 44px dot on its x coordinate
              }}
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

          {/* Cards — each anchored under its own dot's (x,y) */}
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
                  marginLeft: -CARD_WIDTH / 2, // shift left by half card width so it's centered on the dot's x
                  opacity: visible ? 1 : 0,
                  transform: `translateY(${visible ? 0 : 8}px)`,
                  pointerEvents: visible ? 'auto' : 'none',
                }}
              >
                <FeatureCard icon={card.icon} title={card.title} tags={card.tags} withPointer />
              </div>
            );
          })}
        </div>

        {/* Mobile feature cards — always visible */}
        <div className="flex flex-col gap-4 mt-12 pb-6 w-full max-w-sm lg:hidden">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} icon={card.icon} title={card.title} tags={card.tags} />
          ))}
        </div>
      </div>
    </section>
  );
}
