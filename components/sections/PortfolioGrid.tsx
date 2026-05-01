import { portfolio } from '@/data/saas-page';

const categoryColors: Record<string, string> = {
  'SaaS Platform': '#F26B4E',
  'Web App': '#8B5CF6',
  'Support Platform': '#10B981',
  'Marketplace': '#F59E0B',
  'eCommerce': '#EF4444',
  'Enterprise App': '#6B7280',
};

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-24 bg-[#0C0C0E]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12 max-w-[680px] mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F26B4E] mb-4">
            Our Work
          </span>
          <h2 className="text-[44px] leading-[52px] font-semibold text-white tracking-[-0.01em]">
            Built for Your{' '}
            <span className="italic font-semibold">Digital Future</span>
          </h2>
          <p className="mt-4 text-[#A6A6A6] text-[15px] leading-6 max-w-[520px] mx-auto">
            From MVPs to production-scale platforms — here&apos;s what we&apos;ve built for founders and teams worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {portfolio.slice(0, 4).map((item) => {
            const accent = categoryColors[item.category] ?? '#F26B4E';
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl overflow-hidden bg-[#131418] border border-[#1F2127] aspect-[4/5] cursor-pointer transition-transform hover:-translate-y-1"
              >
                {/* Placeholder window mockup */}
                <div className="absolute inset-0 flex flex-col">
                  <div className="h-7 px-3 flex items-center gap-1 border-b border-[#1F2127] bg-[#0F1112]">
                    {['#EF4444', '#F59E0B', '#10B981'].map((c) => (
                      <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c, opacity: 0.6 }} />
                    ))}
                  </div>
                  <div
                    className="flex-1 relative"
                    style={{ background: `linear-gradient(135deg, ${accent}22, ${accent}06 60%, transparent)` }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                        style={{ backgroundColor: accent }}
                      >
                        {item.title[0]}
                      </div>
                      <p className="text-[13px] font-medium text-white/80">{item.title}</p>
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0C0C0E]/85 flex flex-col items-start justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.16em] mb-2 px-2 py-0.5 rounded-full"
                    style={{ color: accent, backgroundColor: accent + '1F' }}
                  >
                    {item.category}
                  </span>
                  <h3 className="text-[16px] font-semibold text-white">{item.title}</h3>
                  <button className="mt-3 text-[12px] text-white/70 underline underline-offset-4 hover:text-white transition-colors">
                    View Case Study
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
