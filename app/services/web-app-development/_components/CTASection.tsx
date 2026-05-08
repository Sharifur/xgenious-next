import Link from 'next/link';

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-[120px]"
      style={{ background: '#191b1c' }}
    >
      {/* Earth / space background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/web-app-dev/cta-bg-overlay.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/web-app-dev/cta-bg-mask.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          opacity: 0.35,
        }}
      />

      <div className="container-page relative z-10 flex flex-col items-center text-center gap-8">
        <div className="flex flex-col items-center gap-[18px] max-w-[665px]">
          <h2 className="text-white font-semibold" style={{ fontSize: 44, lineHeight: '52px' }}>
            Ready to Build Your SaaS or Marketplace?
          </h2>
          <p className="font-medium" style={{ fontSize: 18, lineHeight: '26px', color: '#efedf0' }}>
            Book a free consultation — get a roadmap &amp; estimate.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-semibold text-white rounded-[30px] px-8 py-4 text-[16px] leading-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(236,113,97,0.5)]"
          style={{ background: '#ec7161' }}
        >
          Book a Free Consultation
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/web-app-dev/arrow-white-cta.svg" alt="" width={24} height={24} />
        </Link>
      </div>
    </section>
  );
}
