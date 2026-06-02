import Image from 'next/image';
import { COLOR, LIGHT_COLOR } from './constants';

const STACK = [
  { name: 'Laravel 12', role: 'Backend Framework', logo: '/tech/laravel.svg' },
  { name: 'PHP 8.4+', role: 'Server Language', logo: '/tech/php.svg' },
  { name: 'PostgreSQL 14+', role: 'Database', logo: '/tech/postgresql.svg' },
  { name: 'OpenAI GPT-4', role: 'AI Engine', logo: '/tech/openai.svg' },
  { name: 'Redis', role: 'Cache & Queues', logo: '/tech-logos/redis.svg' },
  { name: 'Laravel Reverb', role: 'Realtime Events', logo: '/icons/tech/reverb.png' },
  { name: 'Tailwind CSS', role: 'Frontend', logo: '/tech/tailwind.svg' },
  { name: 'Linux', role: 'Server OS', logo: '/tech/linux.svg' },
  { name: 'Stripe', role: 'Subscription Billing', logo: '/integrations/stripe.svg' },
  { name: 'OpenStreetMap', role: 'Visitor Mapping', logo: '/tech/openstreetmap.svg' },
];


export default function TechStack() {
  return (
    <section className="pt-[100px] pb-16 sm:pb-20 lg:pb-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[560px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Built on Modern Stack
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Production-Ready Technology
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Helpnest is built on Laravel 12, PostgreSQL, and dual AI providers — OpenAI and Anthropic Claude — for maximum reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {STACK.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl border border-[#E5E7EC] p-4 flex flex-col items-center text-center gap-2"
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src={item.logo} alt={item.name} width={40} height={40} className="object-contain" />
              </div>
              <p className="text-[14px] font-bold text-[#0F1112]">{item.name}</p>
              <p className="text-[11px] text-[#9ca3af]">{item.role}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-[#E5E7EC] bg-white px-6 py-5 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-[15px] font-bold text-[#0F1112] mb-1">Server Requirements</p>
            <p className="text-[13px] text-[#6b7280]">PHP 8.4+, PostgreSQL 14+, Redis, Laravel Reverb — full details in our documentation.</p>
          </div>
          <a
            href="https://docs.xgenious.com/docs/helpnest-ai-based-support-chatbot-system/instruction/server-requirement/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-semibold rounded-full px-5 py-2.5 border-2 flex-shrink-0 transition-all hover:-translate-y-0.5"
            style={{ color: COLOR, borderColor: COLOR }}
          >
            View Requirements →
          </a>
        </div>

      </div>
    </section>
  );
}
