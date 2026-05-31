import Image from 'next/image';
import type { Metadata } from 'next';
import Button, { ArrowIcon } from '@/components/ui/Button';
import FAQ from '@/components/sections/FAQ';
import BookingCTA from '@/components/sections/BookingCTA';

const FAQS = [
  {
    question: 'What does it cost to build a classified ads platform?',
    answer: 'A full classified ads platform with live chat, Google Maps, membership tiers, wallet, and a drag-and-drop page builder typically ranges from $20,000 to $50,000. The main variables are the number of ad categories, whether a mobile app is needed, and the complexity of the membership and premium placement system.',
  },
  {
    question: 'How does the live chat between buyers and sellers work?',
    answer: 'We build real-time messaging using Pusher. Buyers can contact sellers directly on any listing. Chat threads are tied to the specific listing context — sellers can manage all conversations per listing from their dashboard without switching between separate apps.',
  },
  {
    question: 'Can you implement location-based ad discovery?',
    answer: 'Yes. We integrate Google Maps for radius-based ad filtering. Buyers can search "plumbers near me" or filter a category by city. Sellers can set their location during listing creation and it appears on the ad detail page with an embedded map.',
  },
  {
    question: 'How does the membership system work?',
    answer: 'Sellers subscribe to a membership tier that determines how many active listings they can have, whether they get featured placement, and how prominently their listings are ranked. Membership is billed via Stripe or PayPal on a monthly or annual cycle.',
  },
  {
    question: 'Can the platform support Google Ads and custom advertising?',
    answer: 'Yes. We build an ad zone system where the platform owner can place banner ads, Google AdSense blocks, or custom HTML/script injections at defined positions across the site. Ad zones are configurable from the admin panel without code changes.',
  },
  {
    question: 'Do you build the drag-and-drop page builder?',
    answer: 'Yes. A drag-and-drop builder for landing pages, menus, forms, and widget areas is included. Platform operators can build and update any page without code — content changes deploy immediately to the live site.',
  },
];

export const metadata: Metadata = {
  title: 'Classified Ads & Listing Platform — Case Study',
  description:
    'How Xgenious built a full classified ads platform with live chat, Google Maps discovery, membership tiers, a seller wallet, and drag-and-drop page builder.',
};

const STATS = [
  { value: '2K+', label: 'Brands Onboarded' },
  { value: 'Live Chat', label: 'Buyer-Seller Messaging' },
  { value: 'Maps', label: 'Location Discovery' },
  { value: 'Wallet', label: 'Seller Balance System' },
];

const TECH = [
  { name: 'Laravel', desc: 'Backend API & admin panel' },
  { name: 'MySQL', desc: 'Listings & user data store' },
  { name: 'Pusher', desc: 'Real-time live chat' },
  { name: 'Google Maps API', desc: 'Location-based discovery' },
  { name: 'Stripe / PayPal', desc: 'Membership & wallet payments' },
  { name: 'Redis', desc: 'Session, cache & queue layer' },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Live Chat Tied to Listing Context',
    body: 'Each chat thread is scoped to a specific listing — buyers contact the seller about a particular ad, not just generally. Chat threads persist per listing-buyer pair and are accessible from both the buyer and seller dashboards.',
  },
  {
    num: '02',
    title: 'Membership-Gated Listing Quotas',
    body: 'Different membership tiers allow different numbers of active listings and featured placements. Quota enforcement runs at listing creation time — sellers attempting to exceed their plan are prompted to upgrade without losing their draft.',
  },
  {
    num: '03',
    title: 'Wallet and Payout System',
    body: 'Sellers accumulate balance from ad credits, referrals, or top-up payments. The wallet system tracks deposits, charges (listing fees, feature upgrades), and withdrawal requests — all on a double-entry ledger for full auditability.',
  },
  {
    num: '04',
    title: 'Drag-and-Drop Content Management',
    body: 'Building a page builder that non-technical operators can use without creating layout bugs. Implemented as a JSON-backed block editor with a restricted set of well-tested block types — text, image, form, ads, map, and featured listings.',
  },
  {
    num: '05',
    title: 'Ad Zone Management for Revenue',
    body: 'The platform owner needed to monetize ad placements independently of listings. An ad zone system allows banner, Google AdSense, and custom HTML injection at named positions across the layout — all managed from the admin panel.',
  },
];

const FEATURES = [
  'Classified listing creation & management',
  'Live buyer-seller chat per listing',
  'Google Maps location-based discovery',
  'Membership tiers with listing quotas',
  'Seller wallet & balance management',
  'Drag & drop page and menu builder',
  'Review & ratings system',
  'Ad zone management (banners, AdSense)',
];

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-medium bg-[#f5f6f8] text-[#484848] border border-[#e5e7ec]">
      {children}
    </span>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5 p-6 rounded-2xl bg-white border border-[#e5e7ec]">
      <span className="text-[36px] sm:text-[44px] font-semibold text-[#0F1112] leading-none">{value}</span>
      <span className="text-[13px] text-[#8a8f99]">{label}</span>
    </div>
  );
}

export default function ClassifiedAdsPlatformCaseStudy() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-[120px] sm:pt-[160px] pb-16 sm:pb-20" style={{ background: 'linear-gradient(180deg, #f4f8ff 0%, #e4ecf8 100%)' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Tag>Classified Ads</Tag>
                <Tag>Marketplace</Tag>
                <Tag>Laravel</Tag>
              </div>

              <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[56px] lg:leading-[64px] font-semibold text-[#0F1112]">
                Classified Ads &amp; Listing Platform with Live Chat
              </h1>

              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#484848]">
                A full-featured classified ads platform with location-aware listing discovery,
                real-time buyer-seller chat, membership tiers, a seller wallet, and a drag-and-drop
                content builder — trusted by 2,000+ brands.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
                  Start a Similar Project
                </Button>
              </div>
            </div>

            <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3', minHeight: 360 }}>
              <Image
                src="/images/case-studies/08-classified-ads.svg"
                alt="Project screenshot"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#f0f0f0]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Introduction ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">Introduction</span>
              <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#0F1112]">
                A Craigslist alternative built to monetize
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Our client needed a classified ads platform for their region — a place where
                  individuals and small businesses could list products and services, buyers could
                  search by location, and the platform owner could generate revenue through
                  membership tiers and featured placements.
                </p>
                <p>
                  We built the platform on Laravel with Pusher-driven real-time chat, Google Maps
                  integration for location-based discovery, a seller wallet system, and a
                  drag-and-drop builder that gives the platform operator full control over
                  page content without code changes.
                </p>
                <p>
                  <strong className="text-[#0F1112]">Core product message:</strong> Post, discover, and connect — a local marketplace with the features to grow.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[#e5e7ec] divide-y divide-[#f0f0f0] overflow-hidden">
                {[
                  { label: 'Industry', value: 'Classified Ads / Local Commerce' },
                  { label: 'Backend', value: 'Laravel + MySQL' },
                  { label: 'Real-time', value: 'Pusher live chat' },
                  { label: 'Maps', value: 'Google Maps API' },
                  { label: 'Payments', value: 'Stripe + PayPal' },
                  { label: 'Engagement', value: 'Full-Stack Web Platform' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between px-5 py-3.5">
                    <span className="text-[12px] font-medium text-[#8a8f99]">{label}</span>
                    <span className="text-[13px] font-semibold text-[#0F1112]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Challenge ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#0F1112' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-4 mb-12 lg:mb-16 max-w-[640px]">
            <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">The Challenge</span>
            <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-white">
              Building a monetizable marketplace from scratch
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
              Free classified sites fail because they have no monetization model. The platform needed
              a membership tier system that created upgrade incentives, while remaining free enough
              to attract volume — all with live chat, location search, and advertising revenue built in.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Live buyer-seller chat tied to listing context',
              'Membership tiers with enforced listing quotas',
              'Location-based discovery via Google Maps',
              'Seller wallet with deposit and withdrawal',
              'Ad zone system for banner and AdSense revenue',
              'Drag-and-drop CMS for non-technical operators',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                  <circle cx="8" cy="8" r="8" fill="#ec7161" fillOpacity="0.2" />
                  <path d="M5 8l2 2 4-4" stroke="#ec7161" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[14px] text-[#d1d5db] leading-[22px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Solution ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">The Solution</span>
              <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#0F1112]">
                Multiple revenue streams built into the platform architecture
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  The membership system creates a natural freemium funnel. Free users can post a
                  limited number of listings. Paid tiers unlock more listings, featured placement,
                  and boosted visibility. Sellers upgrade when they hit the quota — no prompting
                  required.
                </p>
                <p>
                  The ad zone system generates revenue from display advertising alongside
                  membership subscriptions. Platform operators configure ad placements per page
                  type — category pages, search results, listing detail — from the admin panel
                  without touching code.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-7 sm:p-8 flex flex-col gap-4" style={{ background: '#f4f8ff', border: '1px solid #d0e0f5' }}>
              <h3 className="text-[15px] font-semibold text-[#0F1112] mb-1">Platform Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                      <circle cx="8" cy="8" r="7" fill="#ec7161" />
                      <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[13px] text-[#484848]">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Architecture ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#f5f6f8' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">Technical Architecture</span>
              <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#0F1112]">
                Laravel + Pusher live chat + JSON-backed drag-and-drop CMS
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Pusher powers the real-time chat layer with per-listing private channels.
                  Each buyer-seller conversation is isolated to a private Pusher channel that only
                  the two participants can subscribe to. Message history is persisted in MySQL for
                  conversation replay on reconnect.
                </p>
                <p>
                  The drag-and-drop CMS serializes page layouts as JSON. Each block type (text,
                  image, map, form, ad zone, listings widget) has a strict schema — invalid
                  configurations are rejected at save time, preventing operators from accidentally
                  breaking page layout.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {[
                  'Pusher private channels for per-listing chat isolation',
                  'Google Maps radius search for listing discovery',
                  'Double-entry wallet ledger for seller balances',
                  'JSON schema-validated drag-and-drop CMS blocks',
                  'Ad zone system with per-position placement config',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                      <circle cx="8" cy="8" r="7" fill="#ec7161" />
                      <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[14px] text-[#484848] leading-[22px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TECH.map((t) => (
                <div key={t.name} className="flex flex-col gap-1.5 p-5 rounded-2xl border border-[#e5e7ec]" style={{ background: '#fafafa' }}>
                  <span className="text-[14px] font-semibold text-[#0F1112]">{t.name}</span>
                  <span className="text-[12px] text-[#8a8f99]">{t.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Technical Challenges ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-4 mb-12 max-w-[640px]">
            <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">Key Technical Challenges</span>
            <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#0F1112]">
              Hard problems, solved cleanly
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            {CHALLENGES.map((c) => (
              <div key={c.num} className="flex flex-col sm:flex-row gap-5 sm:gap-8 p-6 sm:p-8 rounded-2xl bg-white border border-[#e5e7ec]">
                <span className="text-[32px] font-semibold text-[#e4ecf8] leading-none flex-shrink-0 select-none">{c.num}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[16px] font-semibold text-[#0F1112]">{c.title}</h3>
                  <p className="text-[14px] text-[#6b7280] leading-[22px]">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcome ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#0F1112' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">Outcome</span>
              <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-white">
                2,000+ brands on a self-monetizing classified platform
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The platform onboarded over 2,000 brands and individual sellers. Membership upgrade
                conversion happens organically — sellers hit listing quotas and upgrade without
                any sales effort from the platform owner. Ad zone revenue runs in parallel.
              </p>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The drag-and-drop CMS means the client manages all page content independently.
                New category pages, promotional banners, and seasonal campaigns launch without
                developer involvement. The platform owner operates the entire business from the
                admin panel.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2K+', label: 'Brands and sellers' },
                { value: 'Live', label: 'Buyer-seller chat' },
                { value: 'Self-serve', label: 'Content management' },
                { value: 'Dual', label: 'Membership + ad revenue' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-2 p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="text-[28px] sm:text-[32px] font-semibold text-white leading-none">{s.value}</span>
                  <span className="text-[12px] text-[#6b7280]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />

      <FAQ
        faqs={FAQS}
        title="Questions about building a classified ads platform?"
        description="Common questions from founders before starting a classified marketplace engagement."
      />
    </>
  );
}
