import Image from 'next/image';
import Button, { ArrowIcon } from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="bg-[#0C0C0E] relative overflow-hidden py-20 sm:py-28 lg:pt-24 lg:pb-32">
      {/* Globe — scales properly on all screen sizes */}
      <div className="absolute inset-x-0 bottom-0 h-[220px] sm:h-[320px] lg:h-[400px] pointer-events-none flex items-end justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/globe.png"
            alt=""
            fill
            className="object-cover object-top opacity-90"
            style={{
              filter: 'drop-shadow(0 0 60px rgba(242,107,78,0.2))',
              mixBlendMode: 'screen',
            }}
          />
        </div>
      </div>

      {/* Glow — smaller on mobile */}
      <div className="absolute inset-x-0 bottom-0 h-[200px] sm:h-[300px] pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] w-[90vw] sm:w-[800px] h-[300px] sm:h-[400px] rounded-full bg-[#F26B4E]/15 blur-3xl" />
      </div>

      <div className="container-page relative z-10 text-center px-4 sm:px-0">
        <h2 className="text-[26px] sm:text-[36px] lg:text-[44px] leading-[1.15] font-semibold text-white tracking-[-0.01em] max-w-[720px] mx-auto">
          Book a 30-Min{' '}
          <span className="italic font-semibold">SaaS Strategy Call.</span>
        </h2>
        <p className="mt-4 sm:mt-5 text-[#A6A6A6] text-[14px] leading-[22px] max-w-[520px] mx-auto">
          No sales pitch. No obligation. Come with a problem — leave with a concrete next step,
          a realistic budget range, and an honest read on whether we&apos;re the right fit.
        </p>

        <Button href="#booking" variant="coral" icon={<ArrowIcon />} className="mt-6 sm:mt-8">
          Book a free consultation
        </Button>

        {/* Trust signals */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          {[
            '30 minutes · video or audio',
            'Signed mutual NDA inside 24h',
            'Written follow-up with a scope sketch',
          ].map((signal) => (
            <div key={signal} className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6.5" stroke="#F26B4E" strokeWidth="1" />
                <path d="M4 7l2 2 4-4" stroke="#F26B4E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[13px] text-[#8A8F99]">{signal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
