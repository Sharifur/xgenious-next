import { COLOR, LIGHT_COLOR, REVIEWS } from './constants';

function Stars({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 20 20" fill={i < n ? '#F59E0B' : '#E5E7EB'}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[540px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Customer Reviews
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <Stars n={5} />
            <span className="text-[14px] font-semibold text-[#0F1112]">4.70 / 5</span>
            <span className="text-[13px] text-[#6b7280]">· 43 reviews · 734+ installs on CodeCanyon</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-[#F5F6F8] rounded-2xl border border-[#E5E7EC] p-6 flex flex-col gap-3">
              <Stars n={r.rating} />
              <p className="text-[13px] text-[#374151] leading-6 flex-1">&ldquo;{r.body}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-[#E5E7EC]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold text-white flex-shrink-0"
                  style={{ background: COLOR }}
                >
                  {r.name[0].toUpperCase()}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#0F1112]">{r.name}</p>
                  <p className="text-[11px] text-[#9ca3af]">{r.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
