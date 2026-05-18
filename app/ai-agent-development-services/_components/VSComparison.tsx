const columns = [
  {
    tool: 'Zapier · Make · n8n',
    tagline: 'Your if-this-then-that stack',
    tagBg: 'rgba(255,255,255,0.06)',
    tagColor: '#9ca3af',
    border: 'rgba(255,255,255,0.07)',
    highlight: false,
    label: null,
    worksWhen: [
      'Workflow is fully predictable — no exceptions',
      'You only need pre-built app connectors',
      'Tasks follow a fixed trigger → action sequence',
      'Volume is low and errors can be handled manually',
    ],
    breaksWhen: [
      'An input falls outside the expected pattern',
      'You need to reason, not just route',
      'Your tool isn\'t in the marketplace',
      'You need memory or context from past sessions',
    ],
    verdict: 'Use Zapier for linear automation. It\'s fast, cheap, and right for the job — until it isn\'t.',
    verdictColor: '#9ca3af',
  },
  {
    tool: 'No-Code AI Builders',
    tagline: 'Voiceflow, Botpress, Stack AI',
    tagBg: 'rgba(255,255,255,0.06)',
    tagColor: '#9ca3af',
    border: 'rgba(255,255,255,0.07)',
    highlight: false,
    label: null,
    worksWhen: [
      'You need a working demo in 48 hours',
      'Simple Q&A chatbot over a document set',
      'Early-stage validation with no engineering team',
      'Single-purpose, low-stakes use case',
    ],
    breaksWhen: [
      'You need custom tool calls or proprietary APIs',
      'Multi-step reasoning chains with branching logic',
      'Production traffic or enterprise security requirements',
      'Accuracy and hallucination control actually matter',
    ],
    verdict: 'Use no-code AI to validate the idea. Come to us when the prototype needs to become a product.',
    verdictColor: '#9ca3af',
  },
  {
    tool: 'Custom AI Agent',
    tagline: 'What we build',
    tagBg: 'rgba(236,113,97,0.12)',
    tagColor: '#ec7161',
    border: '#ec7161',
    highlight: true,
    label: 'This is us',
    worksWhen: [
      'Workflows have exceptions, edge cases, judgment calls',
      'The agent needs memory and context across sessions',
      'You need custom API integrations and tool use',
      'Accuracy, observability, and uptime actually matter',
    ],
    breaksWhen: [
      'Your workflow is genuinely just if-this-then-that — use Zapier',
      'You need a throwaway demo in 24h — use a no-code builder',
      'Budget is under $1,500 — we\'ll tell you upfront',
    ],
    verdict: 'We\'re not the right call for everything. When we\'re not, we\'ll say so on the first call.',
    verdictColor: '#ec7161',
  },
];

const TICK = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
    <circle cx="7" cy="7" r="6.5" stroke="#4ade80" strokeWidth="1" />
    <path d="M4 7l2 2 4-4" stroke="#4ade80" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CROSS = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
    <circle cx="7" cy="7" r="6.5" stroke="#f87171" strokeWidth="1" />
    <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#f87171" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export default function VSComparison() {
  return (
    <section className="py-14 sm:py-20 lg:py-[120px]" style={{ background: '#050406' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col gap-10 sm:gap-14">

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-[640px]">
          <div className="flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
            <span className="text-[#ec7161] text-[14px] font-medium">Honest Comparison</span>
          </div>
          <h2 className="text-white font-bold text-[26px] leading-[34px] sm:text-[36px] sm:leading-[44px] lg:text-[48px] lg:leading-[58px]">
            Use Zapier. Use Make. Use Us.{' '}
            <em className="font-normal italic">Know Which.</em>
          </h2>
          <p className="text-[#9ca3af] text-[15px] sm:text-[16px] leading-[24px]">
            Three tools for three different problems. Here&apos;s the honest breakdown — including when you should <em>not</em> hire us.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {columns.map((col) => (
            <div
              key={col.tool}
              className="relative flex flex-col rounded-[16px] p-6 gap-6"
              style={{
                background: col.highlight ? 'rgba(236,113,97,0.05)' : '#0d0d12',
                border: `1px solid ${col.border}`,
              }}
            >
              {col.label && (
                <div
                  className="absolute top-5 right-5 text-[11px] font-bold px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(236,113,97,0.15)', color: '#ec7161' }}
                >
                  {col.label}
                </div>
              )}

              {/* Tool header */}
              <div className="flex flex-col gap-2">
                <span
                  className="self-start text-[11px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: col.tagBg, color: col.tagColor }}
                >
                  {col.tool}
                </span>
                <p className="text-[#6b7280] text-[13px]">{col.tagline}</p>
              </div>

              {/* Works when */}
              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4b5563]">Works when</p>
                <ul className="flex flex-col gap-2.5">
                  {col.worksWhen.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      {TICK}
                      <span className="text-[13px] leading-[20px] text-[#d1d5db]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Breaks when */}
              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-semibold tracking-widest uppercase text-[#4b5563]">Breaks when</p>
                <ul className="flex flex-col gap-2.5">
                  {col.breaksWhen.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      {CROSS}
                      <span className="text-[13px] leading-[20px] text-[#9ca3af]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verdict */}
              <p
                className="text-[13px] leading-[21px] border-t pt-4 mt-auto"
                style={{ color: col.verdictColor, borderColor: 'rgba(255,255,255,0.07)' }}
              >
                {col.verdict}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-[#6b7280] text-[14px] leading-[22px] text-center max-w-[560px] mx-auto">
          Not sure which fits your use case?{' '}
          <a href="/contact" className="text-[#ec7161] underline underline-offset-2 hover:text-white transition-colors">
            Book a 30-min call
          </a>{' '}
          — we&apos;ll tell you honestly, even if the answer is &quot;use Zapier.&quot;
        </p>

      </div>
    </section>
  );
}
