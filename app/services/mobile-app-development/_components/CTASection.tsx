import Link from 'next/link';

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-[120px]"
      style={{ background: '#191b1c' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/app-dev/cta-bg.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      />

      <div className="container-page relative z-10 flex flex-col items-center text-center gap-8">
        <div className="flex flex-col items-center gap-[18px] max-w-[665px]">
          <h2 className="text-white font-semibold" style={{ fontSize: 44, lineHeight: '52px' }}>
            Ready to Build Your Mobile App?
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
