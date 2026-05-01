/* Tech Stack — radial network diagram around the Xgenious mark */

type Logo = {
  bg: string;
  border: string;
  glyph: React.ReactElement;
};

const logos: Record<string, Logo> = {
  openai: {
    bg: '#FFFFFF',
    border: '#E5E7EC',
    glyph: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M22.282 9.821a5.985 5.985 0 00-.515-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.91 6.051 6.051 0 006.515 2.9A5.99 5.99 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.79a4.504 4.504 0 01-1.65-6.143zm16.583 3.862l-5.84-3.396 2.02-1.163a.076.076 0 01.071 0l4.83 2.789a4.494 4.494 0 01-.676 8.105v-5.676a.79.79 0 00-.405-.659zm2.01-3.024l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.241V6.91a.066.066 0 01.028-.062l4.83-2.787a4.5 4.5 0 016.674 4.659zM8.31 12.853l-2.02-1.164a.08.08 0 01-.038-.057V6.05a4.5 4.5 0 017.375-3.453l-.142.08L8.704 5.434a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"
          fill="#0F1112"
        />
      </svg>
    ),
  },
  node: {
    bg: '#E8F5E9',
    border: '#B6E0BC',
    glyph: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#5FA04E">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.382.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339a.293.293 0 00.273 0l8.795-5.076a.277.277 0 00.137-.241V6.921a.288.288 0 00-.137-.247l-8.795-5.072a.293.293 0 00-.273 0L3.067 6.674a.286.286 0 00-.139.247v10.148c0 .098.05.193.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.115-.253.257-.253h1.115c.139 0 .256.111.256.253v10.025c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.842 1.842 0 01-.92-1.594V6.921c0-.659.351-1.272.92-1.594L11.075.247a1.92 1.92 0 011.846 0L21.72 5.327c.568.327.92.935.92 1.594v10.16a1.84 1.84 0 01-.92 1.594l-8.794 5.078c-.282.16-.6.247-.928.247z" />
      </svg>
    ),
  },
  react: {
    bg: '#E5F4FB',
    border: '#A8DEEF',
    glyph: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  postgres: {
    bg: '#F0F5FA',
    border: '#C4D5E5',
    glyph: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="#336791">
        <path d="M17.128 0C16.205 0 14.71.252 13.518 1.108 11.83.83 10.066 1.04 9.058 1.752 6.27 1.486 3.81 2.58 3.07 4.927c-.83 2.624-.59 6.214 1.18 8.832.587.86 1.394 1.484 2.252 1.804.516.193.98.193 1.408 0 .332-.15.638-.394.83-.7.13-.21.215-.42.27-.612.114-.41.108-.798-.005-1.157-.064-.21-.18-.42-.353-.6-.18-.18-.41-.34-.7-.46-.234-.097-.476-.144-.7-.144-.157 0-.305.024-.43.07-.064.024-.124.052-.18.09-.054.038-.1.082-.14.13-.077.097-.13.21-.156.34-.05.26-.026.55.07.83.097.27.243.515.43.7.183.18.405.32.65.42.243.097.503.146.77.146.27 0 .528-.05.77-.146z" />
      </svg>
    ),
  },
};

const Center = () => (
  <div className="w-[120px] h-[120px] rounded-full bg-white shadow-2xl shadow-black/15 flex items-center justify-center border-[6px] border-white">
    <div className="w-[78px] h-[78px] rounded-2xl bg-[#F26B4E] flex items-center justify-center">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M9 9l18 18M27 9L9 27" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    </div>
  </div>
);

function LogoCircle({ logo }: { logo: Logo }) {
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center shadow-md shadow-black/5"
      style={{ background: logo.bg, border: `1px solid ${logo.border}` }}
    >
      {logo.glyph}
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-white">
      <div className="container-page">
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

        {/* Network panel */}
        <div className="rounded-3xl bg-[#F5F6F8] py-16 px-4 lg:px-12 relative overflow-hidden">
          <div className="relative max-w-[1100px] mx-auto h-[420px]">
            {/* Background curves */}
            <svg
              viewBox="0 0 1100 420"
              className="absolute inset-0 w-full h-full"
              preserveAspectRatio="none"
              aria-hidden
            >
              <g stroke="#D8D8D8" strokeWidth="1" fill="none" opacity="0.7">
                {/* Left curves to logos */}
                <path d="M40 110 C 280 110, 380 210, 540 210" />
                <path d="M210 180 C 350 180, 420 210, 540 210" />
                <path d="M40 310 C 280 310, 380 210, 540 210" />
                <path d="M210 240 C 350 240, 420 210, 540 210" />
                <path d="M380 130 C 460 160, 480 190, 540 210" />
                <path d="M380 290 C 460 260, 480 230, 540 210" />

                {/* Right curves */}
                <path d="M1060 110 C 820 110, 720 210, 560 210" />
                <path d="M890 180 C 750 180, 680 210, 560 210" />
                <path d="M1060 310 C 820 310, 720 210, 560 210" />
                <path d="M890 240 C 750 240, 680 210, 560 210" />
                <path d="M720 130 C 640 160, 620 190, 560 210" />
                <path d="M720 290 C 640 260, 620 230, 560 210" />
              </g>
            </svg>

            {/* Center mark */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <Center />
            </div>

            {/* Left side logos */}
            <div className="absolute z-10" style={{ left: 16, top: 86 }}>
              <LogoCircle logo={logos.openai} />
            </div>
            <div className="absolute z-10" style={{ left: 186, top: 156 }}>
              <LogoCircle logo={logos.node} />
            </div>
            <div className="absolute z-10" style={{ left: 16, top: 286 }}>
              <LogoCircle logo={logos.postgres} />
            </div>
            <div className="absolute z-10" style={{ left: 186, top: 216 }}>
              <LogoCircle logo={logos.postgres} />
            </div>
            <div className="absolute z-10" style={{ left: 356, top: 106 }}>
              <LogoCircle logo={logos.react} />
            </div>
            <div className="absolute z-10" style={{ left: 356, top: 266 }}>
              <LogoCircle logo={logos.postgres} />
            </div>

            {/* Right side logos */}
            <div className="absolute z-10" style={{ right: 16, top: 86 }}>
              <LogoCircle logo={logos.openai} />
            </div>
            <div className="absolute z-10" style={{ right: 186, top: 156 }}>
              <LogoCircle logo={logos.node} />
            </div>
            <div className="absolute z-10" style={{ right: 16, top: 286 }}>
              <LogoCircle logo={logos.postgres} />
            </div>
            <div className="absolute z-10" style={{ right: 186, top: 216 }}>
              <LogoCircle logo={logos.postgres} />
            </div>
            <div className="absolute z-10" style={{ right: 356, top: 106 }}>
              <LogoCircle logo={logos.react} />
            </div>
            <div className="absolute z-10" style={{ right: 356, top: 266 }}>
              <LogoCircle logo={logos.postgres} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
