import { COLOR, LIGHT_COLOR } from './constants';

const STACK = [
  { name: 'Laravel 12', role: 'Backend Framework', icon: '⚡' },
  { name: 'PHP 8.4+', role: 'Server Language', icon: '🐘' },
  { name: 'PostgreSQL 14+', role: 'Database', icon: '🗄️' },
  { name: 'OpenAI GPT-4', role: 'AI Engine', icon: '🤖' },
  { name: 'Anthropic Claude', role: 'AI Engine', icon: '🧠' },
  { name: 'Redis', role: 'Cache & Queues', icon: '⚡' },
  { name: 'Pusher', role: 'Realtime Events', icon: '📡' },
  { name: 'Tailwind CSS', role: 'Frontend', icon: '🎨' },
  { name: 'Stripe', role: 'Subscription Billing', icon: '💳' },
  { name: 'PayPal', role: 'Payment Gateway', icon: '💰' },
];

const REQUIREMENTS = [
  { label: 'PHP', value: '8.4+' },
  { label: 'Database', value: 'PostgreSQL 14+' },
  { label: 'Cache', value: 'Redis' },
  { label: 'Realtime', value: 'Pusher' },
  { label: 'RAM', value: '4 GB min' },
  { label: 'Server', value: 'Any Linux VPS' },
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
            HelpNest is built on Laravel 12, PostgreSQL, and dual AI providers — OpenAI and Anthropic Claude — for maximum reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {STACK.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl border border-[#E5E7EC] p-4 flex flex-col items-center text-center gap-2"
            >
              <span className="text-[28px]">{item.icon}</span>
              <p className="text-[14px] font-bold text-[#0F1112]">{item.name}</p>
              <p className="text-[11px] text-[#9ca3af]">{item.role}</p>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl border border-[#E5E7EC] bg-white overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-[#E5E7EC]">
            <p className="text-[14px] font-bold text-[#0F1112]">Server Requirements</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 divide-[#E5E7EC]">
            {REQUIREMENTS.map((req) => (
              <div key={req.label} className="px-5 py-4 flex flex-col gap-1">
                <p className="text-[12px] text-[#9ca3af] font-medium uppercase tracking-wide">{req.label}</p>
                <p className="text-[14px] font-bold text-[#0F1112]">{req.value}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
