import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-[120px]" style={{ background: '#26302b' }}>
      <div className="container-page flex items-center justify-between gap-8">
        <h2
          className="text-white font-bold capitalize tracking-[0.72px]"
          style={{ fontSize: 72, lineHeight: '110px' }}
        >
          {"Let's build to together"}
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-semibold text-white rounded-[30px] flex-shrink-0 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(236,113,97,0.5)]"
          style={{ background: '#ec7161', padding: '22px 32px', fontSize: 16 }}
        >
          {"LET'S TALK US"}
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M7 13H19M19 13L14 8M19 13L14 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
