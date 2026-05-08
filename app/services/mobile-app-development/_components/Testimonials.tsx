const testimonials = [
  {
    quote:
      'Web development dynamic field that evolves with technological advancements. requires collaboration between front-end and back-end developers designers other stakeholders to create web solutions that meet',
    name: 'Antonio Lewis',
    role: 'UX Designer',
    avatar: '/images/mobile-app-dev/testimonial-avatar-2.png',
    quoteIcon: '/images/mobile-app-dev/testimonial-quote-2.svg',
  },
  {
    quote:
      'Web development dynamic field that evolves with technological advancements. requires collaboration between front-end and back-end developers designers other stakeholders to create web solutions that meet',
    name: 'Aidan Harold',
    role: 'UX Designer',
    avatar: '/images/mobile-app-dev/testimonial-avatar-1.png',
    quoteIcon: '/images/mobile-app-dev/testimonial-quote-1.svg',
  },
];

const stars = Array(5).fill(null);

function TestimonialCard({ quote, name, role, avatar, quoteIcon }: typeof testimonials[0]) {
  return (
    <div
      className="flex flex-col gap-6 rounded-[12px] p-8 flex-1"
      style={{ background: '#26302b' }}
    >
      <div className="flex items-center gap-2">
        {stars.map((_, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src="/images/mobile-app-dev/star.svg" alt="" width={20} height={20} />
        ))}
      </div>
      <p
        className="font-medium capitalize"
        style={{ fontSize: 24, lineHeight: '36px', color: '#eeeef0' }}
      >
        {quote}
      </p>
      <div className="flex items-center gap-4 mt-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={avatar} alt={name} className="rounded-full object-cover flex-shrink-0" width={60} height={60} />
        <div className="flex flex-col">
          <p className="text-white font-bold capitalize" style={{ fontSize: 20, lineHeight: '24px' }}>
            {name}
          </p>
          <p className="font-normal capitalize" style={{ fontSize: 14, lineHeight: '24px', color: '#eeeef0' }}>
            {role}
          </p>
        </div>
        <div className="ml-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={quoteIcon} alt="" width={40} height={40} />
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-[120px]" style={{ background: '#f2f8f5' }}>
      <p
        className="absolute font-black uppercase whitespace-nowrap pointer-events-none select-none"
        style={{
          fontSize: 208,
          lineHeight: '80px',
          top: '50%',
          left: -5,
          transform: 'translateY(-50%)',
          background: 'linear-gradient(to bottom, #26302b, rgba(38,48,43,0))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          opacity: 0.1,
        }}
      >
        Clients Reviews
      </p>
      <div className="container-page relative z-10 flex gap-8">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
