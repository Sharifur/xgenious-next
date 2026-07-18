import Image from 'next/image';
import { COLOR, LIGHT_COLOR, TECH_STACK, SERVER_REQUIREMENTS } from './constants';

export default function TechStack() {
  return (
    <>
      <section className="py-16 sm:py-20 bg-[#f9fafb]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              Built on a Modern, Self-Hostable Stack
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[520px] mx-auto leading-7">
              NestJS ingest and workers, Postgres for storage, Redis for the queue. Cloudflare R2 and AWS SES are optional.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
            {TECH_STACK.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-[#E5E7EC] bg-white p-5 flex items-start gap-3"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{ background: LIGHT_COLOR }}
                >
                  {t.logo ? (
                    <Image src={t.logo} alt={t.name} width={28} height={28} className="object-contain" />
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="3" width="20" height="14" rx="2" stroke={COLOR} strokeWidth="1.5" />
                      <path d="M8 21h8M12 17v4" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M7 8h2M7 11h6" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="16" cy="9.5" r="2" stroke={COLOR} strokeWidth="1.5" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#0F1112]">{t.name}</p>
                  <p className="text-[12px] text-[#6b7280] mt-0.5 leading-4">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#0F1112]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="max-w-[820px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-[28px] sm:text-[36px] font-semibold text-white">
                System Requirements
              </h2>
              <p className="text-[#9ca3af] text-[15px] mt-3 leading-7">
                Any standard VPS — DigitalOcean, Hetzner, AWS EC2, or Coolify.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVER_REQUIREMENTS.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between rounded-xl border border-white/10 px-5 py-4"
                >
                  <span className="text-[14px] text-[#9ca3af] font-medium">{r.label}</span>
                  <span className="text-[14px] text-white font-semibold">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
