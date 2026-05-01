'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const HeroBackground = dynamic(() => import('@/components/ui/HeroBackground'), { ssr: false });

// Cursor arrow path extracted from Group 1707483028.svg (viewBox "53 53 12 12")
// Raw path points toward bottom-right; rotated per corner to point inward toward content
const CURSOR_PATH =
  'M60.5664 64.0131L56.544 62.4391C54.224 61.5313 53.064 61.0774 53.1025 60.3574C53.1409 59.6373 54.3515 59.3072 56.7727 58.6469C57.4936 58.4503 57.8541 58.3519 58.104 58.1021C58.3539 57.8521 58.4522 57.4917 58.6489 56.7707C59.3091 54.3496 59.6393 53.139 60.3593 53.1005C61.0794 53.0621 61.5333 54.2221 62.4411 56.5421L64.0151 60.5644C64.9655 62.9934 65.4408 64.2079 64.8253 64.8233C64.2098 65.4388 62.9953 64.9636 60.5664 64.0131Z';

// Which corner of the 66×66 container holds the cursor
// Box (50×50) sits at the opposite corner; cursor (16×16) at the sharp-radius corner
type Corner = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';

const BOX_POS: Record<Corner, React.CSSProperties> = {
  'bottom-right': { top: 0, left: 0 },
  'bottom-left': { top: 0, right: 0 },
  'top-right':   { bottom: 0, left: 0 },
  'top-left':    { bottom: 0, right: 0 },
};
const CURSOR_POS: Record<Corner, React.CSSProperties> = {
  'bottom-right': { bottom: 0, right: 0 },
  'bottom-left':  { bottom: 0, left: 0 },
  'top-right':    { top: 0, right: 0 },
  'top-left':     { top: 0, left: 0 },
};
// Raw cursor points bottom-right; transform so it always points inward
const CURSOR_TRANSFORM: Record<Corner, string> = {
  'bottom-right': 'none',
  'bottom-left':  'scaleX(-1)',
  'top-right':    'scaleY(-1)',
  'top-left':     'rotate(180deg)',
};

function CornerBlock({
  icon,
  borderColor,
  radius,
  bg = '#F5F5F5',
  cursorColor,
  cursorCorner,
}: {
  icon: string;
  borderColor: string;
  radius: string;
  bg?: string;
  cursorColor: string;
  cursorCorner: Corner;
}) {
  return (
    <div className="relative" style={{ width: '66px', height: '66px' }}>
      {/* White icon box */}
      <div
        className="absolute w-[50px] h-[50px] flex items-center justify-center"
        style={{
          ...BOX_POS[cursorCorner],
          background: bg,
          border: `1px solid ${borderColor}`,
          borderRadius: radius,
          boxShadow:
            '0px 0px 0px 1px rgba(255,255,255,0.5), 0px 0px 1px 0.1px rgba(0,0,0,0.04)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon} alt="" width="24" height="24" style={{ objectFit: 'contain' }} />
      </div>

      {/* Cursor arrow — CSS-built via extracted SVG path, rotated to point toward content */}
      <div
        className="absolute"
        style={{
          ...CURSOR_POS[cursorCorner],
          width: '16px',
          height: '16px',
          transform: CURSOR_TRANSFORM[cursorCorner],
          filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.06))',
        }}
      >
        <svg width="16" height="16" viewBox="53 53 12 12" fill="none">
          <path
            d={CURSOR_PATH}
            fill={cursorColor}
            stroke="white"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function FeatureTag({ label }: { label: string }) {
  return (
    <span
      className="px-3 py-[6px] text-[13px] font-medium text-[#2F2F2F] leading-5"
      style={{ background: '#F5F6F8', border: '1px solid #E5E7EC', borderRadius: '999px' }}
    >
      {label}
    </span>
  );
}

function FeatureCard({ icon, title, tags }: { icon: React.ReactNode; title: string; tags: string[] }) {
  return (
    <div
      className="bg-white flex flex-col gap-4 p-4"
      style={{ boxShadow: '0px 4px 20.7px rgba(0,0,0,0.10)', borderRadius: '8px' }}
    >
      <div className="flex items-center gap-[7px]">
        <div
          className="w-8 h-8 flex items-center justify-center flex-shrink-0"
          style={{ background: '#FFDEDA', borderRadius: '16px' }}
        >
          {icon}
        </div>
        <span className="text-[20px] font-medium text-[#0F1112] leading-7 whitespace-nowrap">{title}</span>
      </div>
      <div className="flex items-center gap-1 flex-wrap">
        {tags.map((tag) => (
          <FeatureTag key={tag} label={tag} />
        ))}
      </div>
    </div>
  );
}

const AI_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#181818" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#181818" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#181818" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#181818" />
  </svg>
);

const SW_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DEV_ICON = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="#181818" strokeWidth="1.4" />
    <path d="M12 3a9 9 0 0 1 0 18M3 12h18" stroke="#181818" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M12 3c2.5 3 4 5.8 4 9s-1.5 6-4 9M12 3c-2.5 3-4 5.8-4 9s1.5 6 4 9" stroke="#181818" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: '900px',
        backgroundImage: 'url(/hero-section-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Animated background lines */}
      <HeroBackground />

      {/* Diagonal decorative strips */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        <div
          className="absolute"
          style={{
            width: '187px', height: '900px',
            left: 'calc(50% - 560px)', top: '95px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 33.78%, rgba(255,255,255,0) 66.97%)',
            transform: 'rotate(24.5deg)', transformOrigin: 'top center',
          }}
        />
        <div
          className="absolute"
          style={{
            width: '187px', height: '950px',
            left: 'calc(50% + 375px)', top: '95px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0) 46.29%, rgba(255,255,255,0.45) 67.05%, rgba(255,255,255,0) 100%)',
            transform: 'rotate(24.5deg)', transformOrigin: 'top center',
          }}
        />
      </div>

      {/* Vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-0 bottom-0 w-px" style={{ left: 'calc(50% - 490px)', background: 'rgba(0,0,0,0.06)' }} />
        <div className="absolute top-0 bottom-0 w-px" style={{ left: 'calc(50% + 490px)', background: 'rgba(0,0,0,0.06)' }} />
      </div>

      {/* Glassmorphism panel behind content */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{
          width: '1037px',
          left: 'calc(50% - 518.5px)',
          top: '98px',
          height: '480px',
          background: 'rgba(255, 255, 255, 0.18)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          border: '1px solid rgba(255, 255, 255, 0.38)',
          boxShadow: 'inset 0 0 80px rgba(255, 255, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(255, 255, 255, 0.15)',
        }}
      />

      {/* ── Globe image — absolute at the bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none hidden lg:flex justify-center">
        <Image
          src="/globe.png"
          alt=""
          width={1203}
          height={375}
          priority
          className="w-[80%] max-w-[1203px] h-auto"
          style={{ display: 'block' }}
        />
      </div>

      {/* ── Corner blocks (icon box + inward-pointing cursor arrow) ── */}

      {/* Top-left: Laravel — sharp corner at bottom-right, cursor points bottom-right */}
      <div className="absolute hidden lg:block" style={{ left: 'calc(50% - 490px)', top: '159px' }}>
        <CornerBlock
          icon="/icons/fi_laravel.svg"
          borderColor="rgba(242,78,30,0.16)"
          radius="99px 99px 6px 99px"
          bg="#FFFFFF"
          cursorColor="#F24E1E"
          cursorCorner="bottom-right"
        />
      </div>

      {/* Top-right: Node.js — sharp corner at bottom-left, cursor points bottom-left */}
      <div className="absolute hidden lg:block" style={{ right: 'calc(50% - 490px)', top: '159px' }}>
        <CornerBlock
          icon="/icons/fi_nodejs.svg"
          borderColor="rgba(10,207,131,0.16)"
          radius="99px 99px 99px 6px"
          cursorColor="#0ACF83"
          cursorCorner="bottom-left"
        />
      </div>

      {/* Bottom-left: OpenAI — sharp corner at top-right, cursor points top-right */}
      <div className="absolute hidden lg:block" style={{ left: 'calc(50% - 490px)', top: '500px' }}>
        <CornerBlock
          icon="/icons/fi_openai.svg"
          borderColor="rgba(0,0,0,0.16)"
          radius="99px 6px 99px 99px"
          cursorColor="#000000"
          cursorCorner="top-right"
        />
      </div>

      {/* Bottom-right: React/Figma — sharp corner at top-left, cursor points top-left */}
      <div className="absolute hidden lg:block" style={{ right: 'calc(50% - 490px)', top: '500px' }}>
        <CornerBlock
          icon="/icons/fi_react.svg"
          borderColor="rgba(20,110,245,0.16)"
          radius="6px 99px 99px 99px"
          cursorColor="#146EF5"
          cursorCorner="top-left"
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-[200px]">
        <div style={{ maxWidth: '884px', width: '100%' }}>
          <h1
            className="text-[#181818]"
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              lineHeight: '1.11',
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            Where Custom Solutions Meet{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 600 }}>Real Impact</em>
          </h1>

          <p
            className="text-[#2F2F2F] mx-auto"
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '27px',
              maxWidth: '676px',
              marginBottom: '32px',
            }}
          >
            We&apos;re an engineering-led studio building greenfield SaaS, web apps, mobile
            apps, and AI agents for mid-market companies. Real projects from $50K — no
            script clones, no copy-paste templates.
          </p>

          <div className="flex items-center justify-center gap-8 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '16px', fontWeight: 600,
                width: '201px', height: '56px',
                background: '#EC7161', borderRadius: '30px',
              }}
            >
              Start Your Project
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center font-semibold transition-colors hover:border-gray-400"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: '16px', fontWeight: 600,
                color: '#0F1112',
                width: '209px', height: '56px',
                background: '#FFFFFF',
                border: '1px solid #D8D8D8', borderRadius: '30px',
              }}
            >
              View Case Studies
            </Link>
          </div>
        </div>

        {/* ── Decorative dots row — sits above globe ── */}
        <div className="relative w-full mt-16 hidden lg:block" style={{ height: '49px', maxWidth: '1040px' }}>
          <div className="absolute" style={{ left: '19%', top: '0' }}>
            <ConcentricDot />
          </div>
          <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', top: '0' }}>
            <ConcentricDot />
          </div>
          <div className="absolute" style={{ right: '19%', top: '0' }}>
            <ConcentricDot />
          </div>
        </div>

        {/* ── Feature cards — float over the globe ── */}
        <div className="relative w-full hidden lg:block" style={{ height: '250px', maxWidth: '1040px' }}>
          {/* Left card */}
          <div className="absolute" style={{ left: '0', bottom: '60px' }}>
            <FeatureCard icon={AI_ICON} title="AI Agent" tags={['Intelligent', 'Scalable']} />
          </div>
          {/* Center card — slightly higher */}
          <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', top: '0' }}>
            <FeatureCard icon={SW_ICON} title="Custom Software" tags={['Flexible', 'User-Centric']} />
          </div>
          {/* Right card */}
          <div className="absolute" style={{ right: '0', bottom: '60px' }}>
            <FeatureCard icon={DEV_ICON} title="Development" tags={['Secure', 'Efficient']} />
          </div>
        </div>

        {/* Mobile feature cards */}
        <div className="flex flex-col gap-4 mt-10 pb-10 w-full max-w-sm lg:hidden">
          <FeatureCard icon={AI_ICON} title="AI Agent" tags={['Intelligent', 'Scalable']} />
          <FeatureCard icon={SW_ICON} title="Custom Software" tags={['Flexible', 'User-Centric']} />
          <FeatureCard icon={DEV_ICON} title="Development" tags={['Secure', 'Efficient']} />
        </div>
      </div>
    </section>
  );
}

function ConcentricDot() {
  return (
    <div className="relative w-[49px] h-[49px] rounded-full" style={{ background: '#E2E2E2' }}>
      <div className="absolute rounded-full" style={{ width: '39px', height: '39px', background: 'rgba(255,255,255,0.31)', top: '5px', left: '5px' }} />
      <div className="absolute rounded-full" style={{ width: '12px', height: '12px', background: '#2F2F2F', top: '18.5px', left: '18.5px' }} />
    </div>
  );
}
