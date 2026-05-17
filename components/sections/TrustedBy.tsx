import Image from 'next/image';

const BRANDS = [
  { src: '/brands/bm-electric.svg', alt: 'BM Electric' },
  { src: '/brands/digi.svg',        alt: 'DIGI' },
  { src: '/brands/fava.svg',        alt: 'FAVA' },
  { src: '/brands/iklora.svg',      alt: 'Iklora' },
  { src: '/brands/tiro-connect.svg',alt: 'Tiro Connect' },
  { src: '/brands/weblite.svg',     alt: 'Weblite' },
];

/* Row 1 → first 6; Row 2 → same 6 reversed so both rows differ visually */
const ROW1 = BRANDS;
const ROW2 = [...BRANDS].reverse();

const EDGE_MASK = {
  WebkitMaskImage:
    'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
  maskImage:
    'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
};

export default function TrustedBy({ title, dark = false }: { title?: string; dark?: boolean }) {
  const sectionBg  = dark ? '#070b14' : 'white';
  const titleColor = dark ? '#ffffff' : '#181818';
  const row1Bg = dark
    ? 'linear-gradient(90deg, transparent 0%, rgba(236,113,97,0.08) 8%, rgba(236,113,97,0.14) 50%, rgba(236,113,97,0.08) 92%, transparent 100%)'
    : 'linear-gradient(90deg, transparent 0%, rgba(255,232,225,0.55) 8%, rgba(255,232,225,0.85) 50%, rgba(255,232,225,0.55) 92%, transparent 100%)';
  const cellBorder1 = dark ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.6)';
  const cellBorder2 = dark ? 'rgba(255,255,255,0.06)' : '#F5F6F8';
  const row2Border  = dark ? 'rgba(255,255,255,0.06)' : '#F5F6F8';
  const imgFilter   = dark ? 'brightness(0) invert(1)' : undefined;

  return (
    <section className={`${title ? 'pt-[100px]' : 'pt-6'} pb-10 sm:pb-16 lg:pb-[100px]`} style={{ background: sectionBg }}>
      {title && (
        <p className="text-center text-[24px] font-semibold mb-8" style={{ color: titleColor }}>
          {title}
        </p>
      )}

      {/* Row 1 — slides RIGHT */}
      <div className="overflow-hidden" style={{ background: row1Bg, ...EDGE_MASK }}>
        <div className="flex w-max" style={{ animation: 'marquee-right 60s linear infinite' }}>
          {Array.from({ length: 6 }).flatMap((_, set) =>
            ROW1.map((brand, i) => (
              <div
                key={`top-${set}-${i}`}
                className="flex items-center justify-center h-[100px] min-w-[220px] flex-shrink-0"
                style={{ borderLeft: `1px solid ${cellBorder1}` }}
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={180}
                  height={64}
                  className="object-contain max-h-[64px] w-auto"
                  style={imgFilter ? { filter: imgFilter } : undefined}
                  unoptimized
                />
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
        <div className="flex w-max" style={{ animation: 'marquee-left 48s linear infinite' }}>
          {Array.from({ length: 6 }).flatMap((_, set) =>
            ROW2.map((brand, i) => (
              <div
                key={`bot-${set}-${i}`}
                className="flex items-center justify-center h-[100px] min-w-[200px] flex-shrink-0"
                style={{ borderLeft: `1px solid ${cellBorder2}` }}
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={170}
                  height={58}
                  className="object-contain max-h-[58px] w-auto"
                  style={imgFilter ? { filter: imgFilter } : undefined}
                  unoptimized
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
