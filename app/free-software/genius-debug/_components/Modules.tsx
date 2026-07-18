import { COLOR, LIGHT_COLOR, MODULES } from './constants';

function CheckIcon() {
  return (
    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill={COLOR} fillOpacity="0.1" />
      <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Modules() {
  return (
    <section className="py-16 sm:py-20 bg-[#f9fafb]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            Features
          </span>
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
            The Core Triage Loop. Nothing Extra.
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[560px] mx-auto leading-7">
            The 20% of Sentry a small team actually lives in, day to day — grouped, symbolicated, traced, and replayed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODULES.map((mod) => (
            <div key={mod.name} className="bg-white rounded-2xl border border-[#E5E7EC] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: LIGHT_COLOR }}
                >
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="10" cy="10" r="9" stroke={COLOR} strokeWidth="1.4" />
                  </svg>
                </div>
                <h3 className="text-[14px] font-semibold text-[#0F1112] leading-tight">{mod.name}</h3>
              </div>
              <ul className="flex flex-col gap-2">
                {mod.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] text-[#484848] leading-5">
                    <CheckIcon />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
