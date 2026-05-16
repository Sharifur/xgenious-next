const Workpeople = ({ dark }: { dark?: boolean }) => (
  <div className="flex items-center gap-1.5">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M2 5l4 12 4-9 4 9 4-12" stroke="#22C55E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <span className="text-[15px] font-bold text-[#22C55E] tracking-tight">workpeople</span>
  </div>
);

const BeeFinder = ({ dark }: { dark?: boolean }) => (
  <div className="flex items-center gap-1.5">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" fill="#3B82F6" />
      <circle cx="12" cy="9" r="2.6" fill="white" />
    </svg>
    <span className={`text-[15px] font-semibold tracking-tight ${dark ? 'text-white' : 'text-[#0F1112]'}`}>
      Bee<span className="text-[#3B82F6]">Finder</span>
    </span>
  </div>
);

const FiveTwoFund = ({ dark }: { dark?: boolean }) => (
  <div className="flex items-center gap-1.5">
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold text-white" style={{ background: '#3B82F6' }}>
      52
    </span>
    <div className="flex flex-col leading-none">
      <span className={`text-[12px] font-bold tracking-tight ${dark ? 'text-white' : 'text-[#0F1112]'}`}>FIVE&amp;TWO</span>
      <span className={`text-[8px] font-semibold tracking-[0.3em] mt-0.5 ${dark ? 'text-[#9ca3af]' : 'text-[#0F1112]'}`}>FUND</span>
    </div>
  </div>
);

const ViaPlaats = ({ dark }: { dark?: boolean }) => (
  <div className="flex items-center gap-1.5">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" fill="#22C5E0" />
      <circle cx="12" cy="9" r="2.6" fill="white" />
    </svg>
    <span className="text-[15px] font-semibold text-[#22C5E0] tracking-tight">ViaPlaats</span>
  </div>
);

const Givepy = ({ dark }: { dark?: boolean }) => (
  <span className={`text-[18px] font-semibold tracking-tight ${dark ? 'text-[#6b7280]' : 'text-[#D8D8D8]'}`}>Givepy</span>
);

/* Logo sets — duplicated 4× so -25% translation = one seamless loop */
const TOP_LOGOS = [Workpeople, BeeFinder, FiveTwoFund, ViaPlaats, Workpeople, BeeFinder];
const BOT_LOGOS = [Givepy, ViaPlaats, Workpeople, BeeFinder, FiveTwoFund, ViaPlaats, FiveTwoFund, ViaPlaats];

const EDGE_MASK = {
  WebkitMaskImage:
    'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
  maskImage:
    'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
};

export default function TrustedBy({ title, dark = false }: { title?: string; dark?: boolean }) {
  const sectionBg = dark ? '#070b14' : 'white';
  const titleColor = dark ? '#ffffff' : '#181818';
  const row1Bg = dark
    ? 'linear-gradient(90deg, transparent 0%, rgba(236,113,97,0.08) 8%, rgba(236,113,97,0.14) 50%, rgba(236,113,97,0.08) 92%, transparent 100%)'
    : 'linear-gradient(90deg, transparent 0%, rgba(255,232,225,0.55) 8%, rgba(255,232,225,0.85) 50%, rgba(255,232,225,0.55) 92%, transparent 100%)';
  const cellBorder1 = dark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.6)';
  const cellBorder2 = dark ? 'rgba(255,255,255,0.06)' : '#F5F6F8';
  const row2Border = dark ? 'rgba(255,255,255,0.06)' : '#F5F6F8';

  return (
    <section className={`${title ? 'pt-[100px]' : 'pt-6'} pb-[100px]`} style={{ background: sectionBg }}>
      {title && (
        <p className="text-center text-[24px] font-semibold mb-8" style={{ color: titleColor }}>
          {title}
        </p>
      )}

      {/* Row 1 — slides RIGHT */}
      <div
        className="overflow-hidden"
        style={{ background: row1Bg, ...EDGE_MASK }}
      >
        <div className="flex w-max" style={{ animation: 'marquee-right 90s linear infinite' }}>
          {Array.from({ length: 4 }).flatMap((_, set) =>
            TOP_LOGOS.map((Logo, i) => (
              <div
                key={`top-${set}-${i}`}
                className="flex items-center justify-center h-[88px] min-w-[220px] flex-shrink-0"
                style={{ borderLeft: `1px solid ${cellBorder1}` }}
              >
                <Logo dark={dark} />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Row 2 — slides LEFT */}
      <div
        className="overflow-hidden mt-2"
        style={{ borderTop: `1px solid ${row2Border}`, borderBottom: `1px solid ${row2Border}`, ...EDGE_MASK }}
      >
        <div className="flex w-max" style={{ animation: 'marquee-left 75s linear infinite' }}>
          {Array.from({ length: 4 }).flatMap((_, set) =>
            BOT_LOGOS.map((Logo, i) => (
              <div
                key={`bot-${set}-${i}`}
                className="flex items-center justify-center h-[88px] min-w-[200px] flex-shrink-0"
                style={{ borderLeft: `1px solid ${cellBorder2}` }}
              >
                <Logo dark={dark} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
