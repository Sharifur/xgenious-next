import StatCounter from '@/components/ui/StatCounter';
import { stats } from '@/data/saas-page';

export default function StatsSection() {
  return (
    <section className="bg-[#0C0C0E] py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[680px] mx-auto">
          <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F26B4E] mb-4">
            By The Numbers
          </span>
          <h2 className="text-[44px] leading-[52px] font-semibold text-white tracking-[-0.01em]">
            Built for Your{' '}
            <span className="italic font-semibold">Digital Future</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-[#131418] border border-[#1F2127] px-6 py-10 flex flex-col items-center text-center"
            >
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
