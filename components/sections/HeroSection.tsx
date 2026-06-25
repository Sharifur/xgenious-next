import Link from 'next/link';
import dynamic from 'next/dynamic';
import { IconArrowRight } from '@tabler/icons-react';
import type { ReactNode } from 'react';

const HeroBackground = dynamic(() => import('@/components/ui/HeroBackground'), { ssr: false });
// Desktop-only interactive dots — ssr:false so mobile loads zero JS for this chunk
const HeroDotsSection = dynamic(() => import('./HeroDotsSection'), { ssr: false });

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
          boxShadow: '0 0 0 1px rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.04)',
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
  href,
}: {
  icon: ReactNode;
  title: string;
  tags: string[];
  href: string;
}) {
  return (
    <Link href={href} className="relative w-full lg:w-[220px] group/card">
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

const featureCards = [
  { icon: I_AI,  title: 'AI Agent',        tags: ['Intelligent', 'Scalable'],  href: '/ai-agent-development-services' },
  { icon: I_SW,  title: 'Custom Software', tags: ['Flexible', 'User-Centric'], href: '/custom-saas-development-company' },
  { icon: I_DEV, title: 'Development',     tags: ['Secure', 'Efficient'],      href: '/web-app-development-company' },
];

type HeroProps = {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
};

export default function HeroSection({
  eyebrow = 'Custom Software Development Company',
  title = 'Custom SaaS & Software Development That Ships on Time',
  subtitle = "From-scratch SaaS, custom web platforms, mobile apps, and AI agents — built by a team with a track record. Published scope, a committed delivery date, and 13,000+ users on products we've shipped.",
  primaryCtaText = 'Start Your Project',
  primaryCtaHref = '/contact',
  secondaryCtaText = 'Book a Free 30-min Call',
  secondaryCtaHref = '#booking',
}: HeroProps = {}) {
  return (
    <section
      className="relative overflow-hidden pt-[80px] sm:pt-[120px] lg:pt-[160px] pb-[40px]"
      style={{
        minHeight: 'auto',
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

      {/* Globe — desktop only; loading=lazy so mobile never fetches the 167KB SVG */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none hidden lg:flex justify-center"
        style={{ animation: 'globeRise 1s cubic-bezier(0.22,1,0.36,1) both' }}
      >
        <div className="w-[80%] max-w-[1203px] overflow-hidden" style={{ aspectRatio: '1203 / 330' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/World.svg" alt="" className="w-full h-auto select-none block" loading="lazy" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div
          className="relative w-full max-w-[1100px] px-4 sm:px-10 lg:px-16 py-6 sm:py-10 lg:py-16 rounded-[5px]"
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.55)',
            boxShadow:
              '0 1px 0 0 rgba(255,255,255,0.7) inset, 0 -1px 0 0 rgba(255,255,255,0.15) inset',
          }}
        >
          {/* Corner stack blocks — desktop only */}
          <div className="absolute hidden lg:block z-20" style={{ left: -25, top: -25 }}>
            <StackBlock icon="/icons/fi_laravel.svg" borderColor="rgba(242,78,30,0.16)" cursorColor="#F24E1E" corner="br" />
          </div>
          <div className="absolute hidden lg:block z-20" style={{ right: -25, top: -25 }}>
            <StackBlock icon="/icons/fi_nodejs.svg" borderColor="rgba(10,207,131,0.16)" cursorColor="#0ACF83" corner="bl" />
          </div>
          <div className="absolute hidden lg:block z-20" style={{ left: -25, bottom: -25 }}>
            <StackBlock icon="/icons/fi_openai.svg" borderColor="rgba(0,0,0,0.16)" cursorColor="#0F1112" corner="tr" />
          </div>
          <div className="absolute hidden lg:block z-20" style={{ right: -25, bottom: -25 }}>
            <StackBlock icon="/icons/fi_react.svg" borderColor="rgba(20,110,245,0.16)" cursorColor="#146EF5" corner="tl" />
          </div>

          <div className="relative">
            {/* Pill eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-white/80 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F26B4E]" />
              <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#2F2F2F]">
                {eyebrow}
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
              {title}
            </h1>

            <p
              className="text-[#2F2F2F] mx-auto text-[15px] sm:text-[17px] leading-[24px] sm:leading-[27px]"
              style={{ fontWeight: 400, maxWidth: 676, marginBottom: 32 }}
            >
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary — coral pill */}
              <Link
                href={primaryCtaHref}
                className="group relative inline-flex items-center justify-center gap-2 font-semibold text-white text-[14px] sm:text-[15px] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(242,107,78,0.45)] active:translate-y-0 active:shadow-[0_4px_12px_rgba(242,107,78,0.35)] w-[80%] sm:w-auto px-6"
                style={{ height: 44, background: '#F26B4E', borderRadius: 30, minWidth: 160 }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 opacity-0 transition-all duration-700 ease-out group-hover:left-[120%] group-hover:opacity-100"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(135deg, #F26B4E 0%, #EC7161 50%, #E85B41 100%)' }}
                />
                <span className="relative">{primaryCtaText}</span>
                <IconArrowRight
                  size={14}
                  stroke={1.6}
                  className="relative transition-transform duration-300 ease-out group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary — white pill */}
              <Link
                href={secondaryCtaHref}
                className="group relative inline-flex items-center justify-center font-semibold text-[14px] sm:text-[15px] bg-white border border-[#D8D8D8] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#0F1112] hover:shadow-[0_12px_28px_rgba(15,17,18,0.18)] active:translate-y-0 w-[80%] sm:w-auto px-6"
                style={{ height: 44, borderRadius: 30, minWidth: 160 }}
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-0 bg-[#0F1112] transition-[height] duration-300 ease-out group-hover:h-full"
                  style={{ borderRadius: 30 }}
                />
                <span className="relative text-[#0F1112] transition-colors duration-300 group-hover:text-white">
                  {secondaryCtaText}
                </span>
              </Link>
            </div>

            {/* Trust bar */}
            <p className="mt-5 text-[13px] text-[#5A5F6A] tracking-wide">
              Custom SaaS, shipped for businesses across{' '}
              <span className="font-semibold text-[#0F1112]">100+ countries</span>.
            </p>
          </div>
        </div>

        {/* Interactive dots + cards — desktop only, zero JS on mobile */}
        <HeroDotsSection />

        {/* Mobile feature cards — server-rendered, always visible */}
        <div className="flex flex-col gap-4 mt-8 pb-6 w-full lg:hidden">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} icon={card.icon} title={card.title} tags={card.tags} href={card.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
