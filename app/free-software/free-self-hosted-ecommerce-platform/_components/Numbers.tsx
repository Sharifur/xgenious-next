import { COLOR, LIGHT_COLOR, PROVIDER_COUNTS, OTHER_FACTS, OTHER_INTEGRATIONS } from './constants';

export default function Numbers() {
  return (
    <section className="py-16 sm:py-20 bg-[#f9fafb]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            By the Numbers
          </span>
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
            98 Integrations. One Common Layer.
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[600px] mx-auto leading-7">
            Every category below is a provider definition (credentials, capabilities, currencies) plus a driver. Nothing here is a rough estimate.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 max-w-[1100px] mx-auto mb-6">
          {PROVIDER_COUNTS.map((p) => (
            <div key={p.label} className="rounded-2xl border border-[#E5E7EC] bg-white p-4 text-center">
              <p className="text-[24px] sm:text-[28px] font-bold" style={{ color: COLOR }}>{p.value}</p>
              <p className="text-[12px] text-[#6b7280] font-medium leading-tight mt-1">{p.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[1100px] mx-auto mb-10">
          {OTHER_FACTS.map((f) => (
            <div key={f.label} className="rounded-2xl p-4 text-center" style={{ background: LIGHT_COLOR }}>
              <p className="text-[24px] sm:text-[28px] font-bold" style={{ color: COLOR }}>{f.value}</p>
              <p className="text-[12px] font-medium leading-tight mt-1" style={{ color: '#0F1112' }}>{f.label}</p>
              <p className="text-[11px] text-[#6b7280] leading-tight mt-0.5">{f.detail}</p>
            </div>
          ))}
        </div>

        <div className="max-w-[900px] mx-auto rounded-2xl border border-[#E5E7EC] bg-white p-6 sm:p-8">
          <p className="text-[13px] font-semibold text-[#0F1112] mb-1">Also connects to: not counted in the 98</p>
          <p className="text-[13px] text-[#6b7280] leading-6 mb-4">
            These are settings-driven integrations, not standalone provider definitions, so they are tracked separately from the 98 total above.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {OTHER_INTEGRATIONS.map((o) => (
              <div key={o.category}>
                <p className="text-[13px] font-semibold text-[#0F1112] mb-1">{o.category}</p>
                <p className="text-[13px] text-[#484848] leading-6">{o.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
