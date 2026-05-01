import { portfolio, type Portfolio } from '@/data/saas-page';

/* ── Stylized product mockups ── */

function LaptopMockup({ accent }: { accent: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-[78%] aspect-[16/10] rounded-md bg-white shadow-2xl shadow-black/15 overflow-hidden border-[3px] border-[#0F1112]">
        <div className="h-3 bg-[#0F1112] flex items-center px-1.5 gap-1">
          <div className="w-1 h-1 rounded-full bg-[#EF4444]/70" />
          <div className="w-1 h-1 rounded-full bg-[#F59E0B]/70" />
          <div className="w-1 h-1 rounded-full bg-[#10B981]/70" />
        </div>
        <div className="p-2 grid grid-cols-3 gap-1.5">
          <div className="col-span-1 space-y-1">
            <div className="h-2 rounded" style={{ background: accent + '40' }} />
            <div className="h-2 rounded" style={{ background: accent + '20' }} />
            <div className="h-2 rounded" style={{ background: accent + '20' }} />
          </div>
          <div className="col-span-2 space-y-1.5">
            <div className="h-3 rounded" style={{ background: accent + '60' }} />
            <div className="grid grid-cols-2 gap-1">
              <div className="h-6 rounded" style={{ background: accent + '30' }} />
              <div className="h-6 rounded" style={{ background: accent + '20' }} />
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="h-4 rounded" style={{ background: accent + '15' }} />
              <div className="h-4 rounded" style={{ background: accent + '15' }} />
              <div className="h-4 rounded" style={{ background: accent + '15' }} />
            </div>
          </div>
        </div>
      </div>
      {/* Laptop base */}
      <div className="absolute bottom-[12%] w-[82%] h-[3px] bg-[#0F1112] rounded-b-lg" />
    </div>
  );
}

function PhoneMockup({ accent }: { accent: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-[40%] aspect-[9/16] rounded-[18px] bg-[#0F1112] shadow-2xl shadow-black/20 overflow-hidden border-[3px] border-[#0F1112]">
        <div className="h-3 bg-[#0F1112] flex items-center justify-center">
          <div className="w-6 h-1 rounded bg-[#3F3F3F]" />
        </div>
        <div className="bg-white h-full p-1.5 space-y-1.5">
          <div className="h-3 rounded" style={{ background: accent + '50' }} />
          <div className="h-1.5 rounded bg-[#E5E7EC]" />
          <div className="h-1.5 rounded bg-[#E5E7EC] w-3/4" />
          <div className="h-8 rounded" style={{ background: accent }} />
          <div className="h-1.5 rounded bg-[#E5E7EC]" />
          <div className="h-5 rounded" style={{ background: accent + '30' }} />
        </div>
      </div>
    </div>
  );
}

function DashboardMockup({ accent }: { accent: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-[88%] aspect-[16/9] rounded-md bg-white shadow-2xl shadow-black/15 overflow-hidden border border-[#E5E7EC]">
        <div className="h-3 px-2 bg-[#F5F6F8] border-b border-[#E5E7EC] flex items-center gap-1">
          <div className="w-1 h-1 rounded-full bg-[#EF4444]/60" />
          <div className="w-1 h-1 rounded-full bg-[#F59E0B]/60" />
          <div className="w-1 h-1 rounded-full bg-[#10B981]/60" />
        </div>
        <div className="p-2 flex gap-1.5">
          <div className="w-1/4 space-y-1">
            <div className="h-1.5 rounded bg-[#E5E7EC]" />
            <div className="h-1.5 rounded bg-[#E5E7EC] w-3/4" />
            <div className="h-1.5 rounded bg-[#E5E7EC] w-2/3" />
            <div className="h-1.5 rounded" style={{ background: accent + '40' }} />
          </div>
          <div className="flex-1 space-y-1">
            <div className="grid grid-cols-3 gap-1">
              <div className="h-4 rounded" style={{ background: accent + '20' }} />
              <div className="h-4 rounded" style={{ background: accent + '15' }} />
              <div className="h-4 rounded" style={{ background: accent + '20' }} />
            </div>
            <div className="h-8 rounded bg-[#F5F6F8] relative overflow-hidden">
              <div
                className="absolute bottom-0 left-0 right-0 h-3/5"
                style={{ background: `linear-gradient(180deg, ${accent}40, ${accent}10)` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ item }: { item: Portfolio }) {
  const isDark = item.bg === '#1F2127';
  return (
    <article
      className="rounded-2xl overflow-hidden flex flex-col cursor-pointer transition-transform hover:-translate-y-1"
      style={{ background: item.bg }}
    >
      {/* Visual area */}
      <div className="relative h-[260px] flex items-center justify-center px-4 overflow-hidden">
        <span
          className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm"
          style={{ color: item.accent }}
        >
          {item.category}
        </span>
        {item.visual === 'laptop' && <LaptopMockup accent={item.accent} />}
        {item.visual === 'phone' && <PhoneMockup accent={item.accent} />}
        {item.visual === 'dashboard' && <DashboardMockup accent={item.accent} />}
      </div>

      {/* Caption */}
      <div className="px-5 py-5 bg-white">
        <h3 className="text-[16px] font-semibold text-[#0F1112] leading-6">{item.title}</h3>
        <p className="mt-1 text-[12px] text-[#8A8F99] leading-[18px]">{item.description}</p>
      </div>

      {isDark && null}
    </article>
  );
}

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container-page">
        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFE8E1] text-[#F26B4E] text-[12px] font-medium mb-5">
            Our Own Products
          </span>
          <h2 className="text-[44px] leading-[52px] font-semibold text-[#0F1112] tracking-[-0.01em]">
            Built for Your{' '}
            <span className="italic font-semibold">Digital Future</span>
          </h2>
          <p className="mt-4 text-[#484848] text-[15px] leading-6 max-w-[460px] mx-auto">
            We don&apos;t just build software for others — we create and operate our own digital
            products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {portfolio.map((item) => (
            <ProductCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
