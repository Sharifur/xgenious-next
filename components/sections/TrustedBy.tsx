/* ───────────────────────────────────────────────────────────────
   "Trusted by Leading Global Company"
   - Two rows of brand logos
   - Top row: highlighted band with peach/coral gradient tint (primary)
   - Bottom row: white band with subtle dividers (secondary, includes
     a muted "Givepy" leading slot)
   ─────────────────────────────────────────────────────────────── */

const Workpeople = () => (
  <div className="flex items-center gap-1.5">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M2 5l4 12 4-9 4 9 4-12"
        stroke="#22C55E"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="text-[15px] font-bold text-[#22C55E] tracking-tight">
      workpeople
    </span>
  </div>
);

const BeeFinder = () => (
  <div className="flex items-center gap-1.5">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"
        fill="#3B82F6"
      />
      <circle cx="12" cy="9" r="2.6" fill="white" />
    </svg>
    <span className="text-[15px] font-semibold text-[#0F1112] tracking-tight">
      Bee<span className="text-[#3B82F6]">Finder</span>
    </span>
  </div>
);

const FiveTwoFund = () => (
  <div className="flex items-center gap-1.5">
    <span
      className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold text-white"
      style={{ background: '#3B82F6' }}
    >
      52
    </span>
    <div className="flex flex-col leading-none">
      <span className="text-[12px] font-bold text-[#0F1112] tracking-tight">
        FIVE&amp;TWO
      </span>
      <span className="text-[8px] font-semibold text-[#0F1112] tracking-[0.3em] mt-0.5">
        FUND
      </span>
    </div>
  </div>
);

const ViaPlaats = () => (
  <div className="flex items-center gap-1.5">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"
        fill="#22C5E0"
      />
      <circle cx="12" cy="9" r="2.6" fill="white" />
    </svg>
    <span className="text-[15px] font-semibold text-[#22C5E0] tracking-tight">
      ViaPlaats
    </span>
  </div>
);

const Givepy = ({ muted = false }: { muted?: boolean }) => (
  <span
    className={`text-[18px] font-semibold tracking-tight ${
      muted ? 'text-[#D8D8D8]' : 'text-[#0F1112]'
    }`}
  >
    Givepy
  </span>
);

const topRowLogos = [
  <Workpeople key="wp1" />,
  <BeeFinder key="bf1" />,
  <FiveTwoFund key="ff1" />,
  <ViaPlaats key="vp1" />,
  <Workpeople key="wp2" />,
  <BeeFinder key="bf2" />,
];

const bottomRowLogos = [
  <Givepy key="gp" muted />,
  <ViaPlaats key="vp1" />,
  <Workpeople key="wp1" />,
  <BeeFinder key="bf1" />,
  <FiveTwoFund key="ff1" />,
  <ViaPlaats key="vp2" />,
  <FiveTwoFund key="ff2" />,
  <ViaPlaats key="vp3" />,
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white">
      <div className="container-page">
        <h3 className="text-center text-[20px] font-bold text-[#0F1112] mb-10">
          Trusted by Leading Global Compnay
        </h3>

        {/* Top row — highlighted band */}
        <div
          className="rounded-[2px] overflow-hidden"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,232,225,0.55) 8%, rgba(255,232,225,0.85) 50%, rgba(255,232,225,0.55) 92%, transparent 100%)',
          }}
        >
          <div className="grid grid-cols-6 max-w-[1280px] mx-auto">
            {topRowLogos.map((logo, i) => (
              <div
                key={`top-${i}`}
                className={`h-[88px] flex items-center justify-center ${
                  i > 0 ? 'border-l border-white/70' : ''
                }`}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row — neutral band with subtle dividers */}
        <div className="mt-2">
          <div className="grid grid-cols-8 max-w-[1500px] mx-auto border-y border-[#F5F6F8]">
            {bottomRowLogos.map((logo, i) => (
              <div
                key={`bot-${i}`}
                className={`h-[88px] flex items-center justify-center ${
                  i > 0 ? 'border-l border-[#F5F6F8]' : ''
                }`}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
