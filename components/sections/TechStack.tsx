import SectionBadge from '@/components/ui/SectionBadge';

const CX = 550;
const CY = 200;

const MOB_CX = 200;
const MOB_CY = 200;

const LOGO_SRCS = [
  '/tech/openai.svg',
  '/tech/nodejs.svg',
  '/tech/mariadb.svg',
  '/tech/react.svg',
  '/tech/postgresql.svg',
  '/tech/aws.svg',
  '/tech/claude.svg',
  '/tech/digital-ocean.svg',
  '/tech/laravel.svg',
  '/tech/mysql.svg',
  '/tech/nestjs.svg',
  '/tech/nextjs.svg',
  '/tech/php.svg',
  '/tech/pusher.svg',
  '/tech/tailwind.svg',
];

const Y_POSITIONS = [22, 80, 138, 200, 262, 320, 378];

function makePrng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

type Entry = {
  id: string;
  pathD: string;
  src: string;
  delay: number;
  dur: number;
};

function buildEntries(): Entry[] {
  const rand = makePrng(42);
  const entries: Entry[] = [];
  const n = Y_POSITIONS.length;
  const window = 16;
  const slot = window / n;

  Y_POSITIONS.forEach((y, i) => {
    entries.push({
      id: `l${i}`,
      pathD: `M 15 ${y} C 210 ${y} 400 ${CY} ${CX} ${CY}`,
      src: LOGO_SRCS[i % LOGO_SRCS.length],
      delay: i * slot + rand() * 1.0,
      dur: 14 + rand() * 4,
    });
    entries.push({
      id: `r${i}`,
      pathD: `M 1085 ${y} C 890 ${y} 700 ${CY} ${CX} ${CY}`,
      src: LOGO_SRCS[(i + 4) % LOGO_SRCS.length],
      delay: i * slot + slot / 2 + rand() * 1.0,
      dur: 14 + rand() * 4,
    });
  });

  return entries;
}

function buildMobileEntries(): Entry[] {
  const rand = makePrng(99);
  const r = 162;
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];

  return angles.map((angle, i) => {
    const rad = (angle * Math.PI) / 180;
    const sx = +(MOB_CX + r * Math.cos(rad)).toFixed(1);
    const sy = +(MOB_CY + r * Math.sin(rad)).toFixed(1);
    const cp1x = +(MOB_CX + r * 0.62 * Math.cos(rad)).toFixed(1);
    const cp1y = +(MOB_CY + r * 0.62 * Math.sin(rad)).toFixed(1);
    const cp2x = +(MOB_CX + r * 0.32 * Math.cos(rad)).toFixed(1);
    const cp2y = +(MOB_CY + r * 0.32 * Math.sin(rad)).toFixed(1);
    return {
      id: `m${i}`,
      pathD: `M ${sx} ${sy} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${MOB_CX} ${MOB_CY}`,
      src: LOGO_SRCS[i % LOGO_SRCS.length],
      delay: i * 1.8 + rand() * 1.2,
      dur: 11 + rand() * 4,
    };
  });
}

const ALL_ENTRIES = buildEntries();
const MOB_ENTRIES = buildMobileEntries();
const PULSE_DELAYS = [0, 0.85, 1.7];

function SharedDefs({ prefix }: { prefix: string }) {
  return (
    <defs>
      <radialGradient id={`${prefix}-glow`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#F26B4E" stopOpacity="0.2" />
        <stop offset="45%" stopColor="#3D1F12" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#0A0A0C" stopOpacity="0" />
      </radialGradient>
      <filter id={`${prefix}-logo-glow`} x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#F26B4E" floodOpacity="0.5" />
      </filter>
      <pattern id={`${prefix}-dots`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <circle cx="20" cy="20" r="0.8" fill="#23232C" />
      </pattern>
    </defs>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-16 sm:py-24 bg-white">
      <div className="container-page">
        <div className="text-center mb-8 sm:mb-12 max-w-[680px] mx-auto px-4 sm:px-0">
          <SectionBadge className="mb-5">Tech Stack</SectionBadge>
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] leading-[36px] sm:leading-[44px] lg:leading-[52px] font-semibold text-[#0F1112] tracking-[-0.01em]">
            Modern Stack, Optimized
            <br className="hidden lg:block" />
            <span className="italic font-semibold">for Speed</span>
          </h2>
          <p className="mt-4 text-[#484848] text-[15px] leading-6">
            No logo-salad. Each layer picked for a reason we&apos;re happy to defend.
          </p>
        </div>

        {/* Mobile: square radial layout */}
        <div className="block sm:hidden rounded-3xl bg-[#0A0A0C] border border-[#1F2127] overflow-hidden">
          <svg
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block"
            aria-hidden
          >
            <SharedDefs prefix="tsm" />
            {MOB_ENTRIES.map((e) => (
              <path key={e.id} id={`tsm-${e.id}`} d={e.pathD} fill="none" />
            ))}

            <rect width="400" height="400" fill="#0A0A0C" />
            <rect width="400" height="400" fill="url(#tsm-dots)" />
            <ellipse cx={MOB_CX} cy={MOB_CY} rx="200" ry="200" fill="url(#tsm-glow)" />

            <g stroke="#252530" strokeWidth="1" fill="none">
              {MOB_ENTRIES.map((e) => (
                <path key={e.id} d={e.pathD} />
              ))}
            </g>

            {PULSE_DELAYS.map((delay, i) => (
              <circle key={`mob-pulse-${i}`} cx={MOB_CX} cy={MOB_CY} r="55" fill="none" stroke="#F26B4E">
                <animate attributeName="r" values="55;190" dur="2.55s" begin={`${delay}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.25 0 0.5 1" />
                <animate attributeName="opacity" values="0.55;0" dur="2.55s" begin={`${delay}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.7 1" />
                <animate attributeName="stroke-width" values="2;0.3" dur="2.55s" begin={`${delay}s`} repeatCount="indefinite" />
              </circle>
            ))}

            {MOB_ENTRIES.map((e) => (
              <g key={e.id} opacity="0">
                <animateMotion dur={`${e.dur.toFixed(2)}s`} repeatCount="indefinite" begin={`${e.delay.toFixed(2)}s`} calcMode="linear">
                  <mpath href={`#tsm-${e.id}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.07;0.84;1" dur={`${e.dur.toFixed(2)}s`} repeatCount="indefinite" begin={`${e.delay.toFixed(2)}s`} />
                <circle r="19" fill="#15151E" stroke="#2E2E3C" strokeWidth="1" />
                <image href={e.src} x="-13" y="-13" width="26" height="26" filter="url(#tsm-logo-glow)" />
              </g>
            ))}

            <circle cx={MOB_CX} cy={MOB_CY} r="64" fill="#0A0A0C" />
            <circle cx={MOB_CX} cy={MOB_CY} r="54" fill="#12121A" />
            <circle cx={MOB_CX} cy={MOB_CY} r="54" fill="none" stroke="#F26B4E" strokeWidth="0.75" opacity="0.55" />
            <circle cx={MOB_CX} cy={MOB_CY} r="59" fill="none" stroke="#252530" strokeWidth="1.5" />
            <image href="/tech/xgenious-logo-icon.svg" x={MOB_CX - 28} y={MOB_CY - 28} width="56" height="56" />
          </svg>
        </div>

        {/* Desktop: panoramic flyby */}
        <div className="hidden sm:block rounded-3xl bg-[#0A0A0C] border border-[#1F2127] overflow-hidden">
          <svg
            viewBox="0 0 1100 400"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block"
            aria-hidden
          >
            <defs>
              {ALL_ENTRIES.map((e) => (
                <path key={e.id} id={`ts-${e.id}`} d={e.pathD} />
              ))}
              <radialGradient id="ts-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F26B4E" stopOpacity="0.18" />
                <stop offset="45%" stopColor="#3D1F12" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#0A0A0C" stopOpacity="0" />
              </radialGradient>
              <filter id="ts-logo-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#F26B4E" floodOpacity="0.5" />
              </filter>
              <pattern id="ts-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="0.8" fill="#23232C" />
              </pattern>
            </defs>

            <rect width="1100" height="400" fill="#0A0A0C" />
            <rect width="1100" height="400" fill="url(#ts-dots)" />
            <ellipse cx={CX} cy={CY} rx="380" ry="210" fill="url(#ts-glow)" />

            <g stroke="#252530" strokeWidth="1" fill="none">
              {ALL_ENTRIES.map((e) => (
                <path key={e.id} d={e.pathD} />
              ))}
            </g>

            {PULSE_DELAYS.map((delay, i) => (
              <circle key={`pulse-${i}`} cx={CX} cy={CY} r="65" fill="none" stroke="#F26B4E">
                <animate attributeName="r" values="65;250" dur="2.55s" begin={`${delay}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.25 0 0.5 1" />
                <animate attributeName="opacity" values="0.55;0" dur="2.55s" begin={`${delay}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.7 1" />
                <animate attributeName="stroke-width" values="2;0.3" dur="2.55s" begin={`${delay}s`} repeatCount="indefinite" />
              </circle>
            ))}

            {ALL_ENTRIES.map((e) => (
              <g key={e.id} opacity="0">
                <animateMotion dur={`${e.dur.toFixed(2)}s`} repeatCount="indefinite" begin={`${e.delay.toFixed(2)}s`} calcMode="linear">
                  <mpath href={`#ts-${e.id}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.07;0.84;1" dur={`${e.dur.toFixed(2)}s`} repeatCount="indefinite" begin={`${e.delay.toFixed(2)}s`} />
                <circle r="21" fill="#15151E" stroke="#2E2E3C" strokeWidth="1" />
                <image href={e.src} x="-15" y="-15" width="30" height="30" filter="url(#ts-logo-glow)" />
              </g>
            ))}

            <circle cx={CX} cy={CY} r="74" fill="#0A0A0C" />
            <circle cx={CX} cy={CY} r="63" fill="#12121A" />
            <circle cx={CX} cy={CY} r="63" fill="none" stroke="#F26B4E" strokeWidth="0.75" opacity="0.55" />
            <circle cx={CX} cy={CY} r="68" fill="none" stroke="#252530" strokeWidth="1.5" />
            <image href="/tech/xgenious-logo-icon.svg" x={CX - 32} y={CY - 32} width="64" height="64" />
          </svg>
        </div>
      </div>
    </section>
  );
}
