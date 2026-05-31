import Image from 'next/image';
import { COLOR, LIGHT_COLOR, FEATURES } from './constants';

const topFeatures = FEATURES.slice(0, 2);
const gridFeatures = FEATURES.slice(2);

function FeatureCard({
  title,
  desc,
  img,
  large = false,
  bgColor,
}: {
  title: string;
  desc: string;
  img?: string;
  large?: boolean;
  bgColor?: string;
}) {
  const bg = bgColor ?? '#F5F6F8';

  return (
    <div
      className="rounded-2xl border border-[#E5E7EC] overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
      style={{ background: bg }}
    >
      <div
        className={`relative w-full overflow-hidden ${large ? 'h-[260px] sm:h-[300px]' : 'h-[190px] sm:h-[220px]'}`}
        style={{ padding: '30px 30px 0 30px' }}
      >
        {img ? (
          <>
            <Image
              src={img}
              alt={title}
              width={large ? 640 : 420}
              height={large ? 300 : 220}
              className="w-full h-full object-cover object-top rounded-t-xl"
            />
            <div
              className="absolute bottom-0 left-0 w-full h-[80px] pointer-events-none"
              style={{ background: `linear-gradient(to bottom, transparent, ${bg})` }}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-t-xl" style={{ background: bg }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="3" stroke={COLOR} strokeWidth="1.5" />
              <path d="M3 15l5-5 4 4 3-3 6 6" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className={`font-bold text-[#0F1112] mb-2 ${large ? 'text-[17px]' : 'text-[15px]'}`}>{title}</h3>
        <p className="text-[13px] text-[#6b7280] leading-6">{desc}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Platform Features
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Advanced Features
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Access powerful tools designed to simplify campaign management, improve donor experience, and enhance the overall fundraising platform.
          </p>
        </div>

        {/* Top 2 — large side-by-side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {topFeatures.map((f, i) => (
            <FeatureCard
              key={f.title}
              {...f}
              large
              bgColor={i === 0 ? '#EFF1FE' : undefined}
            />
          ))}
        </div>

        {/* Remaining 9 — 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridFeatures.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

      </div>
    </section>
  );
}
