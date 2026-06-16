import { COLOR, REVIEWS } from './constants';

export default function Reviews() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            550+ Clients Worldwide
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-3 leading-tight">
            What MultiSaas Operators Say
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Real feedback from operators running their website builder SaaS on MultiSaas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] mx-auto">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl border border-[#E5E7EC] p-6 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#F59E0B">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
                  style={{ background: `${COLOR}15`, color: COLOR }}
                >
                  {r.category}
                </span>
              </div>
              <p className="text-[13px] text-[#374151] leading-7 mb-4 flex-1">&ldquo;{r.body}&rdquo;</p>
              <div className="flex items-center gap-2 pt-3 border-t border-[#E5E7EC]">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold text-white"
                  style={{ background: COLOR }}
                >
                  {r.name[0].toUpperCase()}
                </div>
                <span className="text-[13px] font-semibold text-[#0F1112]">{r.name}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
