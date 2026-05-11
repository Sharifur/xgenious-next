/* Tech Stack — each line carries a logo that flows into the central mark */

const CX = 550;
const CY = 200;

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

/* Seeded LCG so values are identical on server + client (no hydration mismatch) */
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
  const window = 24; // spread over 24s so arrivals are ~3.4s apart
  const slot = window / n;

  Y_POSITIONS.forEach((y, i) => {
    // Left: evenly spaced base + small jitter
    entries.push({
      id: `l${i}`,
      pathD: `M 15 ${y} C 210 ${y} 400 ${CY} ${CX} ${CY}`,
      src: LOGO_SRCS[i % LOGO_SRCS.length],
      delay: i * slot + rand() * 1.2,
      dur: 20 + rand() * 6,
    });
    // Right: same spacing, offset by half a slot so they interleave with left
    entries.push({
      id: `r${i}`,
      pathD: `M 1085 ${y} C 890 ${y} 700 ${CY} ${CX} ${CY}`,
      src: LOGO_SRCS[(i + 4) % LOGO_SRCS.length],
      delay: i * slot + slot / 2 + rand() * 1.2,
      dur: 20 + rand() * 6,
    });
  });

  return entries;
}

const ALL_ENTRIES = buildEntries();

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-white">
      <div className="container-page">
        {/* Header */}
        <div className="text-center mb-12 max-w-[680px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFE8E1] text-[#F26B4E] text-[12px] font-medium mb-5">
            Tech Stack
          </span>
          <h2 className="text-[44px] leading-[52px] font-semibold text-[#0F1112] tracking-[-0.01em]">
            Modern Stack, Optimized
            <br />
            <span className="italic font-semibold">for Speed</span>
          </h2>
          <p className="mt-4 text-[#484848] text-[15px] leading-6">
            No logo-salad. Each layer picked for a reason we&apos;re happy to defend.
          </p>
        </div>

        {/* Animation panel */}
        <div className="rounded-3xl bg-[#0A0A0C] border border-[#1F2127] overflow-hidden">
          <svg
            viewBox="0 0 1100 400"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            aria-hidden
          >
            <defs>
              {ALL_ENTRIES.map((e) => (
                <path key={e.id} id={`ts-${e.id}`} d={e.pathD} />
              ))}
              <radialGradient id="ts-glow" cx="50%" cy="50%" r="45%">
                <stop offset="0%" stopColor="#3D1F12" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0A0A0C" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background */}
            <rect width="1100" height="400" fill="#0A0A0C" />
            <ellipse cx={CX} cy={CY} rx="400" ry="210" fill="url(#ts-glow)" />

            {/* Decorative lines */}
            <g stroke="#3A3A44" strokeWidth="1" fill="none">
              {ALL_ENTRIES.map((e) => (
                <path key={e.id} d={e.pathD} />
              ))}
            </g>

            {/* Logo nodes — drawn BEFORE center so they vanish beneath it */}
            {ALL_ENTRIES.map((e) => (
              <g key={e.id} opacity="0">
                <image href={e.src} x="-18" y="-18" width="36" height="36" />

                <animateMotion
                  dur={`${e.dur.toFixed(2)}s`}
                  repeatCount="indefinite"
                  begin={`${e.delay.toFixed(2)}s`}
                  calcMode="linear"
                >
                  <mpath href={`#ts-${e.id}`} />
                </animateMotion>

                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.06;0.82;1"
                  dur={`${e.dur.toFixed(2)}s`}
                  repeatCount="indefinite"
                  begin={`${e.delay.toFixed(2)}s`}
                />
              </g>
            ))}

            {/* Center — drawn LAST so logos vanish beneath it */}
            <circle cx={CX} cy={CY} r="64" fill="#0A0A0C" />
            <circle cx={CX} cy={CY} r="58" fill="#1C1C1E" />
            <circle cx={CX} cy={CY} r="60" fill="none" stroke="#383838" strokeWidth="1.5" />
            <image
              href="/tech/xgenious-logo-icon.svg"
              x={CX - 34}
              y={CY - 34}
              width="68"
              height="68"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
