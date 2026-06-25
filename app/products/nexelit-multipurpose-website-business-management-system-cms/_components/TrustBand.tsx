import Image from 'next/image';
import Link from 'next/link';
import { COLOR, PURCHASE_URL, TRUST_SIGNALS } from './constants';

const STATS = [
  { value: '1,971+', label: 'Sales on CodeCanyon' },
  { value: '4.72/5', label: '183 verified reviews' },
  { value: '20+',    label: 'Payment Gateways' },
  { value: 'Laravel 12', label: 'PHP 8.3 · MySQL 8' },
];

export default function TrustBand() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#f9fafb' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1100px] mx-auto">

          <div>
            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
              Inspect the Live Demo Before You Buy
            </h2>
            <p className="text-[#6b7280] text-[15px] leading-7 mb-8">
              Nexelit has a full live demo with open admin access. Test the page builder, enable and disable business
              modules, create forms, and explore the settings yourself — then buy with confidence knowing exactly what
              you get. Every license ships with the full Laravel source code and lifetime updates.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {TRUST_SIGNALS.map((s) => (
                <div key={s.label} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5" style={{ background: `${COLOR}15`, color: COLOR }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[14px] font-semibold text-[#0F1112] leading-5">{s.label}</h3>
                    <p className="text-[12px] text-[#6b7280] leading-5">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-[14px] font-semibold rounded-full px-6 py-3 text-white transition-all hover:-translate-y-0.5"
              style={{ background: COLOR, boxShadow: `0 8px 24px ${COLOR}40` }}
            >
              View pricing &amp; licenses
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl border border-[#E5E7EC] p-6 text-center hover:shadow-md transition-all"
              >
                <p className="text-[28px] font-black leading-none mb-2" style={{ color: COLOR }}>{s.value}</p>
                <p className="text-[12px] text-[#6b7280] leading-5">{s.label}</p>
              </div>
            ))}
            <div className="col-span-2 bg-white rounded-2xl border border-[#E5E7EC] p-5 flex items-center gap-4">
              <Image src="/icons/elite-author.svg" alt="Envato Elite Author" width={40} height={40} className="flex-shrink-0" />
              <div>
                <p className="text-[13px] font-semibold text-[#0F1112]">Verified Elite Author</p>
                <Link href={PURCHASE_URL} target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#6b7280] hover:underline">
                  Sold on CodeCanyon · 1,971+ customers
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
