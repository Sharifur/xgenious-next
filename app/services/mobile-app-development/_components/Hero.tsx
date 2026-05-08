import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1a2620 0%, #26302b 60%, #1e2921 100%)', minHeight: 710 }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(236,113,97,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="container-page relative z-10 flex flex-col justify-center" style={{ paddingTop: 160, paddingBottom: 120 }}>
        <div className="flex flex-col gap-6 max-w-[720px]">
          <div
            className="inline-flex items-center self-start px-4 py-[6px] rounded-[165px]"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            <span className="text-[#ec7161] font-normal" style={{ fontSize: 16, lineHeight: '24px' }}>
              Mobile App Development
            </span>
          </div>
          <h1
            className="text-white font-bold"
            style={{ fontSize: 80, lineHeight: '88px' }}
          >
            Mobile apps<br />
            Development Services
          </h1>
          <p
            className="font-medium"
            style={{ fontSize: 22, lineHeight: '30px', color: '#eeeef0', maxWidth: 618 }}
          >
            We believe in digital experiences for all. Our designs adhere to accessibility standards,
            ensuring everyone can engage with your app seamlessly.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-white rounded-[30px] px-8 py-[18px] text-[16px] leading-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(236,113,97,0.5)]"
              style={{ background: '#ec7161' }}
            >
              Start Your App
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 font-semibold rounded-[30px] px-8 py-[18px] text-[16px] leading-6 transition-all duration-200 hover:-translate-y-0.5"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#eeeef0' }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
