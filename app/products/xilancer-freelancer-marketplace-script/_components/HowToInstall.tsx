import Link from 'next/link';
import { COLOR, REGULAR_PRICE } from './constants';

const STEPS = [
  {
    number: '01',
    title: 'Purchase on CodeCanyon',
    desc: `Buy Xilancer with a one-time payment on CodeCanyon. Instant download after purchase. Regular license starts at $${REGULAR_PRICE} — no subscription, no recurring fees.`,
  },
  {
    number: '02',
    title: 'Upload to Your VPS',
    desc: 'Extract the zip and upload files to any Linux VPS or shared hosting running PHP 8.1+ and MySQL. Nginx or Apache both work. Minimum 2 GB RAM for production.',
  },
  {
    number: '03',
    title: 'Run the Installer',
    desc: 'Open the web-based installer in your browser, enter your database credentials, and Xilancer configures itself. Platform is live within minutes — no coding required.',
  },
];

export default function HowToInstall() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[560px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-bold uppercase tracking-widest mb-4"
            style={{ background: `${COLOR}15`, color: COLOR }}
          >
            Quick Setup
          </div>
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Get Xilancer Running<br className="hidden sm:block" /> in 3 Simple Steps
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            No technical expertise required. From purchase to live freelancing platform in under an hour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[960px] mx-auto">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="rounded-2xl border border-[#E5E7EC] bg-white p-8 flex flex-col gap-5 h-full">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-[22px] font-bold flex-shrink-0"
                  style={{ background: `${COLOR}12`, color: COLOR }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#0F1112] mb-2">{step.title}</h3>
                  <p className="text-[14px] text-[#484848] leading-6">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-[#6b7280] mt-8">
          Need help? Our team offers{' '}
          <Link
            href="#installation-package"
            className="underline underline-offset-2 font-medium hover:text-[#0F1112] transition-colors"
          >
            professional installation
          </Link>
          {' '}— handled for you from start to finish.
        </p>

      </div>
    </section>
  );
}
