import { testimonials } from '@/data/saas-page';

const stars = Array.from({ length: 5 });

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[680px] mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F26B4E] mb-4">
            Testimonials
          </span>
          <h2 className="text-[44px] leading-[52px] font-semibold text-[#0F1112] tracking-[-0.01em]">
            Where Feedback Meets{' '}
            <span className="italic font-semibold">Excellence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-[#E5E7EC] bg-white p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-shadow"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {stars.map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F26B4E">
                    <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.2l-3.7 2.1.7-4.1-3-2.9 4.2-.7z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-[14px] text-[#484848] leading-[22px] mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-5 border-t border-[#F5F6F8]">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFE8E1] to-[#F26B4E]/60 flex items-center justify-center text-sm font-semibold text-white flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#0F1112]">{t.name}</p>
                  <p className="text-[12px] text-[#8A8F99]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
