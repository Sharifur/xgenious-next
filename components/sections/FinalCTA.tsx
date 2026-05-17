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
          Ready to Build Your SaaS or{' '}
          <span className="italic font-semibold">Marketplace?</span>
        </h2>
        <p className="mt-4 sm:mt-5 text-[#A6A6A6] text-[14px] leading-6 max-w-[480px] mx-auto">
          Book a free consultation — get a roadmap &amp; estimate.
        </p>

        <Button href="/contact" variant="coral" icon={<ArrowIcon />} className="mt-6 sm:mt-8">
          Book a free consultation
        </Button>
      </div>
    </section>
  );
}
