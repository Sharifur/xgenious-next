import Link from 'next/link';

type Props = {
  heading: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  bgImage?: string;
  bgMask?: string;
  bgPhoto?: string;
};

export default function CTASection({
  heading,
  description = 'Book a free consultation — get a roadmap & estimate.',
  buttonText = 'Book a Free Consultation',
  buttonHref = '/contact',
  bgImage = '/images/web-app-dev/cta-bg-overlay.svg',
  bgMask,
  bgPhoto,
}: Props) {
  return (
    <section
      className="relative overflow-hidden py-14 sm:py-20 lg:py-[120px]"
      style={{ background: bgPhoto ? 'transparent' : '#191b1c' }}
    >
      {bgPhoto && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={bgPhoto}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />
      )}
      {!bgPhoto && bgImage && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url('${bgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
          }}
        />
      )}
      {!bgPhoto && bgMask && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url('${bgMask}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            opacity: 0.35,
          }}
        />
      )}

      <div className="container-page px-4 sm:px-6 lg:px-0 relative z-10 flex flex-col items-center text-center gap-6 sm:gap-8">
        <div className="flex flex-col items-center gap-3 sm:gap-[18px] max-w-[665px]">
          <h2 className="text-white font-semibold text-[26px] leading-[34px] sm:text-[34px] sm:leading-[42px] lg:text-[44px] lg:leading-[52px]">
            {heading}
          </h2>
          <p className="font-medium text-[14px] leading-[21px] sm:text-[18px] sm:leading-[26px]" style={{ color: '#efedf0' }}>
            {description}
          </p>
        </div>

        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 font-semibold text-white rounded-[30px] px-6 py-3 text-[14px] leading-[21px] sm:px-8 sm:py-4 sm:text-[16px] sm:leading-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(236,113,97,0.5)]"
          style={{ background: '#ec7161' }}
        >
          {buttonText}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
