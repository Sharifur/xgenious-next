import { COLOR, LIGHT_COLOR, PLATFORM_MODULES } from './constants';

export default function PlatformRest() {
  return (
    <section className="py-16 sm:py-20 bg-[#f9fafb]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            The Rest of the Platform
          </span>
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
            Beyond Payments and Shipping
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1000px] mx-auto">
          {PLATFORM_MODULES.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl border border-[#E5E7EC] p-5">
              <h3 className="text-[13px] font-semibold text-[#0F1112] mb-2">{m.name}</h3>
              <p className="text-[12.5px] text-[#484848] leading-5">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
