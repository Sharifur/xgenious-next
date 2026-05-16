import Image from 'next/image';
import Button, { ArrowIcon } from '@/components/ui/Button';

export default function FinalCTA() {
  return (
    <section className="bg-[#0C0C0E] relative overflow-hidden pt-24 pb-32">
      {/* Globe — bottom-fade */}
      <div className="absolute inset-x-0 bottom-0 h-[400px] pointer-events-none flex justify-center">
        <Image
          src="/globe.png"
          alt=""
          width={1600}
          height={500}
          className="w-full max-w-[1600px] h-auto opacity-90"
          style={{
            filter: 'drop-shadow(0 0 60px rgba(242,107,78,0.2))',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute inset-x-0 bottom-0 h-[300px] pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] w-[800px] h-[400px] rounded-full bg-[#F26B4E]/15 blur-3xl" />
      </div>

      <div className="container-page relative z-10 text-center">
        <h2 className="text-[30px] sm:text-[36px] lg:text-[44px] leading-[1.15] font-semibold text-white tracking-[-0.01em] max-w-[720px] mx-auto">
          Ready to Build Your SaaS or{' '}
          <span className="italic font-semibold">Marketplace?</span>
        </h2>
        <p className="mt-5 text-[#A6A6A6] text-[14px] leading-6 max-w-[480px] mx-auto">
          Book a free consultation — get a roadmap &amp; estimate.
        </p>

        <Button href="/contact" variant="coral" icon={<ArrowIcon />} className="mt-8">
          Book a free consultation
        </Button>
      </div>
    </section>
  );
}
