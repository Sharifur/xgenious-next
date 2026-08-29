import { COLOR, LIGHT_COLOR, DARK_BG, TECH_STACK, SERVER_REQUIREMENTS } from './constants';

export default function TechStack() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
              style={{ background: LIGHT_COLOR, color: COLOR }}
            >
              Built for Developers
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              Laravel 12 + React 19 + Inertia v3
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[560px] mx-auto leading-7">
              A common stack, extended with a common integration layer for every payment, shipping, SMS, and fraud provider.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1000px] mx-auto mb-14">
            {TECH_STACK.map((t) => (
              <div key={t.name} className="rounded-xl border border-[#E5E7EC] bg-[#f9fafb] p-5">
                <p className="text-[13px] font-semibold text-[#0F1112]">{t.name}</p>
                <p className="text-[12px] text-[#6b7280] mt-1 leading-5">{t.role}</p>
              </div>
            ))}
          </div>

          <div className="max-w-[820px] mx-auto rounded-2xl border border-[#E5E7EC] p-6 sm:p-8" style={{ background: LIGHT_COLOR }}>
            <h3 className="text-[16px] font-semibold text-[#0F1112] mb-2">Two files to add a provider</h3>
            <p className="text-[13.5px] text-[#484848] leading-6">
              A new payment, shipping, SMS, or fraud provider is a <strong>definition</strong> (credentials, capabilities, and supported currencies) plus a <strong>driver</strong>. The definition drives the admin screens, credential form, and checkout availability automatically; you don&apos;t touch the checkout flow itself. Credentials are encrypted and scoped per environment, so testing in sandbox can&apos;t accidentally overwrite live keys.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" style={{ background: DARK_BG }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="max-w-[820px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-[28px] sm:text-[36px] font-semibold text-white">
                System Requirements
              </h2>
              <p className="text-[#9ca3af] text-[15px] mt-3 leading-7">
                Any standard VPS, shared hosting with PHP support, or a Docker host.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVER_REQUIREMENTS.map((r) => (
                <div key={r.label} className="flex items-center justify-between rounded-xl border border-white/10 px-5 py-4">
                  <span className="text-[14px] text-[#9ca3af] font-medium">{r.label}</span>
                  <span className="text-[14px] text-white font-semibold text-right">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
