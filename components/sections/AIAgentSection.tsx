import { aiFeatures } from '@/data/saas-page';

const chatMessages = [
  { role: 'user', text: 'Summarize this week\'s sales report and flag any anomalies.' },
  { role: 'agent', text: 'Revenue is up 14% vs last week. One anomaly: a 3x spike in refunds on Tuesday — linked to a payment gateway issue, now resolved.' },
  { role: 'user', text: 'Notify the finance team and update the dashboard.' },
  { role: 'agent', text: 'Done. Finance team notified via Slack. Dashboard updated. Incident logged.' },
];

export default function AIAgentSection() {
  return (
    <section className="py-24 bg-[#0C0C0E]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <span className="inline-block text-[12px] font-semibold uppercase tracking-[0.2em] text-[#F26B4E] mb-4">
              AI Agents
            </span>
            <h2 className="text-[44px] leading-[52px] font-semibold text-white tracking-[-0.01em]">
              AI Agents That Actually{' '}
              <span className="italic font-semibold">do Work</span>
            </h2>
            <p className="mt-5 text-[#A6A6A6] text-[15px] leading-6">
              We don&apos;t build AI features. We build AI agents — systems that take
              multi-step actions, make decisions in context, and integrate with
              your existing tools without supervision.
            </p>

            <ul className="mt-8 space-y-4">
              {aiFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F26B4E]/15 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="#F26B4E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-medium text-[#E5E7EC]">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F26B4E] text-white font-semibold text-[14px] hover:bg-[#EC7161] transition-colors">
              Build Your AI Agent
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Right - Chat mockup */}
          <div className="rounded-3xl bg-[#131418] border border-[#1F2127] overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[#1F2127]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F26B4E] animate-pulse" />
              <span className="text-[12px] font-semibold text-[#E5E7EC]">AI Agent — Active</span>
            </div>

            <div className="p-5 space-y-4 min-h-64">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'agent' && (
                    <div className="w-7 h-7 rounded-lg bg-[#F26B4E]/15 flex items-center justify-center mr-2.5 flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-[#F26B4E]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-[12px] leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#F26B4E] text-white rounded-tr-sm'
                        : 'bg-[#0C0C0E] border border-[#1F2127] text-[#A6A6A6] rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#1F2127] px-4 py-3 flex items-center gap-3">
              <input
                type="text"
                placeholder="Send a message..."
                className="flex-1 bg-transparent text-[12px] text-[#A6A6A6] placeholder-[#3F3F3F] outline-none"
                readOnly
              />
              <button className="w-7 h-7 rounded-lg bg-[#F26B4E] flex items-center justify-center" aria-label="Send">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1v7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
