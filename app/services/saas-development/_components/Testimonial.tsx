const testimonials = [
  {
    name: 'Austin Harlan',
    role: 'Founder & CEO',
    quote:
      'We explore user behavior and Motivations design meaningful Digital experiences built around Genuine user insights.',
    photo: '/images/saas-dev/testimonial-1.png',
  },
  {
    name: 'Austin Harlan',
    role: 'Founder & CEO',
    quote:
      'We explore user behavior and Motivations design meaningful Digital experiences built around Genuine user insights.',
    photo: '/images/saas-dev/testimonial-2.png',
  },
];

function TestimonialCard({ name, role, quote, photo }: typeof testimonials[0]) {
  return (
    <div
      className="relative flex-shrink-0 rounded-[8px] overflow-hidden"
      style={{ background: '#f5f6f8', height: 350 }}
    >
      {/* Quote icon */}
      <div className="absolute left-8 top-8 w-8 h-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/saas-dev/testimonial-quote.svg" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Quote text */}
      <p
        className="absolute font-normal"
        style={{
          fontSize: 20,
          lineHeight: '28px',
          color: '#2f2f2f',
          left: 32,
          top: 66,
          width: 310,
        }}
      >
        {quote}
      </p>

      {/* Person info */}
      <div className="absolute flex flex-col gap-1" style={{ left: 32, top: 266 }}>
        <p className="font-semibold text-[#0f1112]" style={{ fontSize: 20, lineHeight: '28px' }}>
          {name}
        </p>
        <p className="font-normal text-[#0f1112]" style={{ fontSize: 14, lineHeight: '20px' }}>
          {role}
        </p>
      </div>

      {/* Photo with overlay + play button */}
      <div
        className="absolute top-4 bottom-4 right-4 rounded-[8px] overflow-hidden"
        style={{ width: '38%' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo} alt={name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.9)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/saas-dev/testimonial-play-bg.svg" alt="" className="w-full h-full object-cover absolute inset-0" />
            <svg className="relative z-10" width="12" height="14" viewBox="0 0 12 14" fill="none">
              <path d="M11 7L1 1v12l10-6z" fill="#0f1112" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonial() {
  return (
    <section className="py-[120px] bg-white">
      <div className="container-page flex flex-col gap-[72px]">
        <div className="flex items-start justify-between">
          <h2 className="text-[#0f1112] font-semibold" style={{ fontSize: 44, lineHeight: '52px', maxWidth: 620 }}>
            Where Feedback Meets Excellence
          </h2>
          <div className="flex items-center gap-3 flex-shrink-0 mt-1">
            {/* Prev */}
            <button className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/saas-dev/nav-prev.svg" alt="Previous" className="w-full h-full object-cover" />
            </button>
            {/* Next */}
            <button className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/saas-dev/nav-next.svg" alt="Next" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
