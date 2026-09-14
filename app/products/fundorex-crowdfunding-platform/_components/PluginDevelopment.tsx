import { COLOR, LIGHT_COLOR, PLUGIN_DEV_DOCS_URL } from './constants';

const FEATURES = [
  'Official plugin manifest & scaffolding',
  'Enable / disable safely — no core files touched',
  'Uninstall requires explicit data-loss confirmation',
  'Hooks into the admin panel, campaigns, and payments',
  'Full developer documentation and guides',
];

export default function PluginDevelopment() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">
        <div className="rounded-3xl border border-[#E5E7EC] bg-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left — text */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-5 w-fit"
                style={{ background: LIGHT_COLOR, color: COLOR }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
                Built to Extend
              </div>
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[#0F1112] leading-tight mb-4">
                Build Your Own Fundorex Plugins
              </h2>
              <p className="text-[15px] text-[#6b7280] leading-7 mb-6">
                Fundorex now ships with a true plugin architecture — Super Admin controlled and safe to enable or disable, without ever touching core files. Use the official manifest system to scaffold, build, and ship your own plugins.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {FEATURES.map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-[13px] text-[#374151]">
                    <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#dcfce7" />
                      <path d="M6 10l3 3 5-5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>

              <a
                href={PLUGIN_DEV_DOCS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-fit text-white font-semibold text-[14px] rounded-full px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
              >
                Read the Plugin Development Docs
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Right — manifest snippet mockup */}
            <div className="p-6 sm:p-8 flex items-center justify-center" style={{ background: '#0f1112' }}>
              <div className="w-full max-w-[420px] rounded-xl overflow-hidden border border-[#2a2d31] bg-[#161819]">
                <div className="h-9 bg-[#1c1f21] flex items-center px-3 gap-2.5 border-b border-[#2a2d31]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <span className="text-[10px] text-[#9ca3af]">plugin.json</span>
                </div>
                <pre className="p-4 text-[11px] leading-6 overflow-x-auto"><code>
<span style={{ color: '#9ca3af' }}>{'{'}</span>{'\n'}
{'  '}<span style={{ color: '#79c0ff' }}>&quot;id&quot;</span>: <span style={{ color: '#a5d6ff' }}>&quot;your-plugin&quot;</span>,{'\n'}
{'  '}<span style={{ color: '#79c0ff' }}>&quot;name&quot;</span>: <span style={{ color: '#a5d6ff' }}>&quot;Your Plugin&quot;</span>,{'\n'}
{'  '}<span style={{ color: '#79c0ff' }}>&quot;version&quot;</span>: <span style={{ color: '#a5d6ff' }}>&quot;1.0.0&quot;</span>,{'\n'}
{'  '}<span style={{ color: '#79c0ff' }}>&quot;requires&quot;</span>: <span style={{ color: '#a5d6ff' }}>&quot;&gt;=1.0 &lt;2.0&quot;</span>,{'\n'}
{'  '}<span style={{ color: '#79c0ff' }}>&quot;provider&quot;</span>: <span style={{ color: '#a5d6ff' }}>&quot;YourPluginServiceProvider&quot;</span>{'\n'}
<span style={{ color: '#9ca3af' }}>{'}'}</span>
                </code></pre>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
