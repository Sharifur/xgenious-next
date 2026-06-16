import { COLOR } from './constants';

const THEMES = [
  { name: 'Creative Agency', tag: 'Agency' },
  { name: 'Job Board', tag: 'Jobs' },
  { name: 'Barber Shop', tag: 'Services' },
  { name: 'Photography', tag: 'Portfolio' },
  { name: 'Knowledgebase', tag: 'Docs' },
  { name: 'eCommerce', tag: 'Shop' },
  { name: 'Construction', tag: 'Business' },
  { name: 'Consultancy', tag: 'B2B' },
  { name: 'Event Booking', tag: 'Events' },
  { name: 'Portfolio', tag: 'Creative' },
  { name: 'Support Ticketing', tag: 'Helpdesk' },
  { name: 'Wedding', tag: 'Lifestyle' },
  { name: 'Software Firm', tag: 'SaaS' },
];

const TAG_COLORS: Record<string, string> = {
  Agency: '#6366f1',
  Jobs: '#0ea5e9',
  Services: '#f59e0b',
  Portfolio: '#8b5cf6',
  Docs: '#10b981',
  Shop: '#ef4444',
  Business: '#64748b',
  B2B: '#0369a1',
  Events: '#f97316',
  Creative: '#a855f7',
  Helpdesk: '#06b6d4',
  Lifestyle: '#ec4899',
  SaaS: '#14b8a6',
};

export default function Themes() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#F8F9FB' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            15+ Multipurpose Themes
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
            Beautiful Themes for Every Niche
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Tenants choose from 15+ professionally designed themes. Operators activate or deactivate themes per plan. More themes are added with every update.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-w-[960px] mx-auto">
          {THEMES.map((theme) => (
            <div
              key={theme.name}
              className="bg-white rounded-xl border border-[#E5E7EC] px-4 py-3.5 flex items-center justify-between gap-2 hover:border-[#eb6149]/30 hover:shadow-sm transition-all"
            >
              <span className="text-[14px] font-medium text-[#374151]">{theme.name}</span>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                style={{ background: `${TAG_COLORS[theme.tag]}15`, color: TAG_COLORS[theme.tag] }}
              >
                {theme.tag}
              </span>
            </div>
          ))}

          <div
            className="bg-white rounded-xl border border-dashed border-[#E5E7EC] px-4 py-3.5 flex items-center justify-center gap-2"
            style={{ borderColor: `${COLOR}40` }}
          >
            <span className="text-[13px] font-medium" style={{ color: COLOR }}>+ More coming soon</span>
          </div>
        </div>

        <div className="mt-10 max-w-[600px] mx-auto bg-white rounded-2xl border border-[#E5E7EC] p-5 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-[15px] font-semibold text-[#0F1112] mb-1">Need a custom theme?</p>
            <p className="text-[13px] text-[#6b7280]">Bytesed builds custom themes for your specific niche or brand. Contact for a quote.</p>
          </div>
          <a
            href="https://bytesed.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-[13px] font-semibold px-5 py-2.5 rounded-full border-2 text-[#0F1112] border-[#0F1112]/20 hover:bg-[#f9fafb] transition-colors whitespace-nowrap"
          >
            Request Custom Theme
          </a>
        </div>

      </div>
    </section>
  );
}
