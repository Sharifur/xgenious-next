import { STATS } from './constants';

export default function StatsBar() {
  return (
    <section className="py-12 bg-white border-b border-[#E5E7EC]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-[32px] sm:text-[40px] font-bold text-[#0F1112]">{stat.value}</p>
              <p className="text-[13px] text-[#6b7280] font-medium mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
