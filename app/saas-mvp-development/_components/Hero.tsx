'use client';

import Button, { ArrowIcon } from '@/components/ui/Button';

const previews = [
  { src: '/images/mvp/preview-1.png', alt: 'Botmerce — AI eCommerce automation platform' },
  { src: '/images/mvp/preview-2.png', alt: 'Nexelit — crowdfunding donation platform'     },
  { src: '/images/mvp/preview-3.png', alt: 'Prohandy — on-demand home service platform'   },
  { src: '/images/mvp/preview-4.png', alt: 'Prohandy — mobile app'                        },
];

const track = [...previews, ...previews];

export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#050608' }}>
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)',
        }}
      />

      {/* Text content */}
      <div className="relative container-page px-4 sm:px-6 lg:px-0 pt-[120px] sm:pt-[160px] lg:pt-[200px] pb-14 sm:pb-20 flex flex-col items-center text-center gap-6 sm:gap-8">
        <h1 className="font-semibold text-white text-[32px] leading-[40px] sm:text-[52px] sm:leading-[62px] lg:text-[72px] lg:leading-[80px] max-w-[900px]">
          Validate Ideas with Smart{' '}<br />
          <em className="font-medium italic">MVP Development</em>
        </h1>

        <p className="text-[#9ca3af] text-[14px] leading-[22px] sm:text-[16px] sm:leading-[24px] lg:text-[18px] lg:leading-[28px] max-w-[640px]">
          Greenfield MVP development for product teams testing the market. Real users in 6–10 weeks,
          validated metrics, and a clean codebase that scales into the full SaaS — not throwaway
          prototype code. Fixed-price from $2,500.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
            Build Your MVP
          </Button>
          <Button href="#pricing" variant="outline" icon={<ArrowIcon />}>
            View Packages
          </Button>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative w-full overflow-hidden pb-0">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #050608, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #050608, transparent)' }}
        />

        <div
          className="flex gap-4 sm:gap-5"
          style={{ animation: 'mvpMarquee 50s linear infinite', width: 'max-content' }}
        >
          {track.map((p, i) => (
            <div
              key={i}
              className="rounded-[14px] overflow-hidden flex-shrink-0"
              style={{ border: '2px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 40px rgba(0,0,0,0.6)', width: 'clamp(200px, 72vw, 400px)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-auto object-top"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacer so next section has breathing room */}
      <div className="h-14 sm:h-20" style={{ background: '#050608' }} />

      <style jsx>{`
        @keyframes mvpMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
