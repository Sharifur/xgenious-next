import { COLOR, LIGHT_COLOR, DEMO_URL } from './constants';
import Link from 'next/link';

const STEPS = [
  {
    n: '01',
    title: 'Install on Your Server',
    desc: 'Upload Botmerze to a PHP 8.3+ server with PostgreSQL and pgvector. Run the guided installer — configure OpenAI API key, database, Redis, and mail settings. Free cPanel installation included with purchase.',
    bgColor: '#EEF2FF',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Train the Chatbot',
    desc: 'Connect your WooCommerce or Shopify store for live product and order sync. Upload PDFs, paste URLs, or add YouTube links — the AI builds a vector knowledge base and starts answering questions specific to your store.',
    bgColor: '#F0FDF4',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Embed & Go Live',
    desc: 'Copy one script tag from the widget builder and paste it into your store theme. Customize colors, trigger behavior, and welcome message — the chatbot is live and handling customer queries 24/7.',
    bgColor: '#FFF7ED',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={COLOR} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-14 max-w-[580px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Setup in 3 Steps
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            From Purchase to Live Chatbot in Under a Day
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            No machine learning expertise required. Botmerze handles all the AI infrastructure — you just connect your store and start training.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="rounded-2xl border border-[#E5E7EC] p-7 flex flex-col gap-5"
              style={{ background: step.bgColor }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                >
                  {step.icon}
                </div>
                <span className="text-[36px] font-black" style={{ color: `${COLOR}15` }}>{step.n}</span>
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-[#0F1112] mb-2">{step.title}</h3>
                <p className="text-[14px] text-[#6b7280] leading-6">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-[14px] rounded-full px-6 py-3 border-2 transition-all hover:opacity-80"
            style={{ borderColor: COLOR, color: COLOR }}
          >
            See Botmerze Live Demo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
