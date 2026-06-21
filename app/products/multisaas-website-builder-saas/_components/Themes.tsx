import Image from 'next/image';
import Link from 'next/link';
import { COLOR } from './constants';

type Theme = { name: string; tag: string; desc: string; icon: string; img?: string; premium?: boolean };

const THEME_IMG = '/products/multisaas/themes';

// Simple 24x24 stroke icons (currentColor) keyed inline per theme niche.
const I: Record<string, string> = {
  agency: '<path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  jobs: '<rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  barber: '<circle cx="6" cy="6" r="3" stroke="currentColor" stroke-width="2"/><circle cx="6" cy="18" r="3" stroke="currentColor" stroke-width="2"/><path d="M20 4L8.5 15.5M20 20L8.5 8.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  photo: '<rect x="2" y="6" width="20" height="15" rx="2" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="13" r="4" stroke="currentColor" stroke-width="2"/><path d="M8 6l2-3h4l2 3" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
  docs: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  shop: '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  construction: '<path d="M2 20h20M4 20V9l8-5 8 5v11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 20v-5h6v5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  consult: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/><path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  events: '<rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  portfolio: '<rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/><path d="M3 15l5-5 4 4 3-3 6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>',
  helpdesk: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  wedding: '<path d="M12 21s-7-4.5-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 12c0 4.5-7 9-7 9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  saas: '<rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  hotel: '<path d="M3 21h18M5 21V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8h0M15 8h0M9 12h0M15 12h0M10 21v-4h4v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  restaurant: '<path d="M6 2v7a3 3 0 0 0 6 0V2M9 2v20M17 2c-1.5 0-3 1.5-3 5s1.5 4 3 4v11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
};

const THEMES: Theme[] = [
  { name: 'Creative Agency', tag: 'Agency',    icon: 'agency',       desc: 'Service & portfolio sites for design studios', img: `${THEME_IMG}/creative-agency.jpg` },
  { name: 'Job Board',       tag: 'Jobs',      icon: 'jobs',         desc: 'Post openings, collect applications', img: `${THEME_IMG}/job-board.jpg` },
  { name: 'Barber Shop',     tag: 'Services',  icon: 'barber',       desc: 'Appointments for salons & grooming', img: `${THEME_IMG}/barber-shop.jpg` },
  { name: 'Photography',     tag: 'Portfolio', icon: 'photo',        desc: 'Galleries for photographers & artists', img: `${THEME_IMG}/photography.jpg` },
  { name: 'Knowledgebase',   tag: 'Docs',      icon: 'docs',         desc: 'Docs, wikis & self-serve help centers', img: `${THEME_IMG}/knowledgebase.jpg` },
  { name: 'eCommerce',       tag: 'Shop',      icon: 'shop',         desc: 'Online stores with cart & checkout', img: `${THEME_IMG}/ecommerce.jpg` },
  { name: 'Construction',    tag: 'Business',  icon: 'construction', desc: 'Sites for builders & contractors', img: `${THEME_IMG}/construction.jpg` },
  { name: 'Consultancy',     tag: 'B2B',       icon: 'consult',      desc: 'Lead-gen pages for B2B advisors', img: `${THEME_IMG}/consultancy.jpg` },
  { name: 'Event Booking',   tag: 'Events',    icon: 'events',       desc: 'Sell tickets & manage events', img: `${THEME_IMG}/event-booking.jpg` },
  { name: 'Portfolio',       tag: 'Creative',  icon: 'portfolio',    desc: 'Showcase work for creatives', img: `${THEME_IMG}/portfolio.jpg` },
  { name: 'Support Ticketing', tag: 'Helpdesk', icon: 'helpdesk',    desc: 'Customer helpdesk & ticketing', img: `${THEME_IMG}/support-ticketing.jpg` },
  { name: 'Wedding',         tag: 'Lifestyle', icon: 'wedding',      desc: 'Planners & event lifestyle brands', img: `${THEME_IMG}/wedding.jpg` },
  { name: 'Software Firm',   tag: 'SaaS',      icon: 'saas',         desc: 'Landing pages for SaaS & tech', img: `${THEME_IMG}/software-firm.jpg` },
  { name: 'Hotel Booking',   tag: 'Hospitality', icon: 'hotel',      desc: 'Rooms, availability & reservations', img: `${THEME_IMG}/hotel.jpg`, premium: true },
  { name: 'Restaurant',      tag: 'Food',      icon: 'restaurant',   desc: 'Menus, online ordering & delivery', img: `${THEME_IMG}/restaurant.jpg`, premium: true },
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
  Hospitality: '#eb6149',
  Food: '#eb6149',
};

function LockIcon({ color }: { color: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" className="flex-shrink-0" aria-hidden>
      <rect x="4" y="11" width="16" height="10" rx="2" stroke={color} strokeWidth="2" />
      <path d="M8 11V7a4 4 0 018 0v4" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Mini "website preview" mockup: a browser frame with the niche icon as the
// hero, plus wireframe content bars — all tinted in the theme's accent color.
function buildPreview(accent: string, iconKey: string): string {
  return `<svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto">
    <rect x="1" y="1" width="238" height="178" rx="12" fill="#ffffff" stroke="${accent}33"/>
    <path d="M1 13a12 12 0 0 1 12-12h214a12 12 0 0 1 12 12v10H1z" fill="${accent}14"/>
    <circle cx="16" cy="12" r="3" fill="${accent}"/>
    <circle cx="27" cy="12" r="3" fill="${accent}59"/>
    <circle cx="38" cy="12" r="3" fill="${accent}59"/>
    <rect x="14" y="32" width="212" height="78" rx="8" fill="${accent}1c"/>
    <g transform="translate(100.8,51.8) scale(1.6)" style="color:${accent}">${I[iconKey]}</g>
    <rect x="14" y="120" width="150" height="10" rx="5" fill="${accent}40"/>
    <rect x="14" y="138" width="212" height="8" rx="4" fill="#E8EAEE"/>
    <rect x="14" y="152" width="170" height="8" rx="4" fill="#EEF0F3"/>
    <rect x="14" y="166" width="120" height="8" rx="4" fill="#EEF0F3"/>
  </svg>`;
}

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
            Tenants choose from 15+ professionally designed themes — each purpose-built for a specific business. Operators activate or deactivate themes per plan. Premium themes are included with the <strong>Bundle Pack</strong>, and more ship with every update.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
          {THEMES.map((theme) => {
            const accent = theme.premium ? COLOR : TAG_COLORS[theme.tag];
            return (
              <div
                key={theme.name}
                className="group rounded-2xl border p-3 flex flex-col transition-all hover:shadow-md hover:-translate-y-0.5"
                style={
                  theme.premium
                    ? { background: `${COLOR}0a`, borderColor: `${COLOR}45` }
                    : { background: '#fff', borderColor: '#E5E7EC' }
                }
              >
                {/* Visual theme preview — real screenshot, or an SVG mockup for premium themes */}
                {theme.img ? (
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#E5E7EC] bg-[#F8F9FB]">
                    <Image
                      src={theme.img}
                      alt={`${theme.name} theme preview for MultiSaas website builder`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>
                ) : (
                  <div
                    className="rounded-xl overflow-hidden transition-transform group-hover:scale-[1.02]"
                    dangerouslySetInnerHTML={{ __html: buildPreview(accent, theme.icon) }}
                  />
                )}
                <div className="flex items-center justify-between gap-2 mt-3 px-1">
                  <h3 className="text-[14px] font-semibold text-[#0F1112] leading-tight truncate">{theme.name}</h3>
                  <span
                    className="text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 inline-flex items-center gap-1 uppercase tracking-wide"
                    style={
                      theme.premium
                        ? { background: COLOR, color: '#fff' }
                        : { background: `${accent}15`, color: accent }
                    }
                  >
                    {theme.premium && <LockIcon color="#fff" />}
                    {theme.premium ? 'Bundle' : theme.tag}
                  </span>
                </div>
                <p className="text-[12px] text-[#6b7280] leading-5 mt-1 px-1 pb-1">{theme.desc}</p>
              </div>
            );
          })}

          <div
            className="rounded-2xl border border-dashed flex flex-col items-center justify-center text-center gap-1 min-h-[150px]"
            style={{ borderColor: `${COLOR}40`, background: `${COLOR}06` }}
          >
            <span className="text-[28px] font-bold leading-none" style={{ color: COLOR }}>+</span>
            <span className="text-[12px] font-medium px-3" style={{ color: COLOR }}>More themes coming soon</span>
          </div>
        </div>

        {/* Premium theme legend */}
        <div className="mt-6 max-w-[1100px] mx-auto flex items-center justify-center">
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 text-[13px] text-[#6b7280] rounded-full px-4 py-2 border transition-colors hover:bg-white"
            style={{ borderColor: `${COLOR}30`, background: `${COLOR}08` }}
          >
            <LockIcon color={COLOR} />
            <span>
              <strong style={{ color: '#b83a2b' }}>Hotel Booking</strong> &amp; <strong style={{ color: '#b83a2b' }}>Restaurant</strong> are premium themes — included in the <strong style={{ color: '#b83a2b' }}>Bundle Pack</strong>. View pricing →
            </span>
          </Link>
        </div>

        <div className="mt-8 max-w-[600px] mx-auto bg-white rounded-2xl border border-[#E5E7EC] p-5 flex flex-col sm:flex-row items-center gap-4">
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
