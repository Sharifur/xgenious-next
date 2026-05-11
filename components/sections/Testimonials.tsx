const TESTIMONIALS = [
  {
    name: 'Esther Howard',
    role: 'Founder & CEO',
    quote: 'Working with Xgenious transformed how we ship product. They understood our vision from day one and delivered beyond expectations.',
    initials: 'EH',
    bg: 'linear-gradient(135deg, #8B7355, #6B5A40)',
  },
  {
    name: 'Jane Cooper',
    role: 'Founder & CEO',
    quote: 'The team built our entire SaaS platform from scratch. Clean architecture, fast delivery, and zero surprises on pricing.',
    initials: 'JC',
    bg: 'linear-gradient(135deg, #6B8E6B, #4A6B4A)',
  },
  {
    name: 'Wade Warren',
    role: 'Founder & CEO',
    quote: 'Their AI agent cut our support load by 70% in the first month. Best engineering investment we have ever made.',
    initials: 'WW',
    bg: 'linear-gradient(135deg, #7B8C9B, #5A6B7A)',
  },
  {
    name: 'Leslie Alexander',
    role: 'Product Lead',
    quote: 'Xgenious pushed back on bad ideas and championed the right ones — that is rare. Felt like a true in-house team.',
    initials: 'LA',
    bg: 'linear-gradient(135deg, #9B7B8C, #7A5A6B)',
  },
  {
    name: 'Jacob Jones',
    role: 'CTO',
    quote: 'From MVP to production in 8 weeks. The scope was fixed, the price was fixed, and they delivered exactly what was promised.',
    initials: 'JJ',
    bg: 'linear-gradient(135deg, #8C7B6B, #6B5A4A)',
  },
  {
    name: 'Robert Fox',
    role: 'Founder & CEO',
    quote: 'Integrations that used to take months were done in days. The codebase they handed over is one I am proud to maintain.',
    initials: 'RF',
    bg: 'linear-gradient(135deg, #6B7B8C, #4A5A6B)',
  },
];

function QuoteMark() {
  return (
    <img src="/testimonial-quote.svg" alt="" aria-hidden width={40} height={40} />
  );
}

function Avatar({ initials, bg }: { initials: string; bg: string }) {
  return (
    <div
      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-[18px] font-bold flex-shrink-0 ring-4 ring-white shadow-md"
      style={{ background: bg }}
    >
      {initials}
    </div>
  );
}

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <article className="rounded-2xl border border-[#E5E7EC] bg-white p-7 flex flex-col items-center text-center">
      <Avatar initials={t.initials} bg={t.bg} />
      <p className="mt-4 text-[15px] font-semibold text-[#0F1112]">{t.name}</p>
      <p className="text-[13px] text-[#8A8F99] mt-0.5">{t.role}</p>
      <p className="mt-5 text-[14px] text-[#484848] leading-[22px] flex-1">{t.quote}</p>
      <div className="mt-6">
        <QuoteMark />
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container-page">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#F26B4E]/40 text-[#F26B4E] text-[13px] font-medium mb-5">
              Testimonials
            </span>
            <h2 className="text-[42px] lg:text-[52px] leading-[1.1] font-bold text-[#0F1112] tracking-[-0.02em]">
              Where Feedback Meets{' '}
              <br />
              <span className="italic font-bold">Excellence</span>
            </h2>
          </div>
          <p className="text-[15px] text-[#8A8F99] leading-[24px] max-w-[340px] md:pt-16">
            SaaS products, custom web platforms, mobile apps, and AI agents.
            From-scratch builds with published scope, fixed pricing, and a
            committed delivery date.
          </p>
        </div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
