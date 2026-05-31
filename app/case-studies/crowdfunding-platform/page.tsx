import Image from 'next/image';
import type { Metadata } from 'next';
import Button, { ArrowIcon } from '@/components/ui/Button';
import FAQ from '@/components/sections/FAQ';
import BookingCTA from '@/components/sections/BookingCTA';

const FAQS = [
  {
    question: 'What does it cost to build a crowdfunding platform?',
    answer: 'A full crowdfunding platform with campaign management, event ticketing, 10+ payment gateways, and an admin panel typically ranges from $20,000 to $50,000. The main variables are the number of payment integrations, whether a mobile app is needed, and the complexity of the campaign fee logic.',
  },
  {
    question: 'How do you handle platform fees on donations?',
    answer: 'We configure a platform fee as either a percentage or fixed amount per transaction, deducted before the campaign creator receives funds. The fee structure is configurable per-campaign type from the admin panel, and full transaction ledgers are available to both admins and campaign owners.',
  },
  {
    question: 'Can you integrate social login (Google/Facebook)?',
    answer: 'Yes. We integrate Google and Facebook OAuth as standard. Users can register or log in with one click, with email/password as a fallback. Social accounts are linked to unified user records.',
  },
  {
    question: 'Can the platform support both donations and event ticket sales?',
    answer: 'Yes. We build crowdfunding platforms to support multiple campaign types: standard donation campaigns, fixed-goal reward campaigns, and event modules with ticket tiers and capacity management on the same platform.',
  },
  {
    question: 'What payment gateways do you integrate?',
    answer: 'We support Stripe, PayPal, Razorpay, and regional gateways. All gateways are abstracted behind a common payment interface so new providers can be added without changing campaign logic.',
  },
  {
    question: 'Do you build the drag-and-drop page builder?',
    answer: 'Yes. A drag-and-drop builder for campaign pages, menus, and widgets is included. Campaign creators can build fully customized campaign pages without touching code — text blocks, images, video embeds, and donation widgets are all available.',
  },
];

export const metadata: Metadata = {
  title: 'Crowdfunding & Donation Platform — Laravel Case Study',
  description:
    'How Xgenious built a full-featured crowdfunding platform with donation campaigns, event ticketing, 10+ payment gateways, and drag-and-drop campaign builders.',
};

const STATS = [
  { value: '10+', label: 'Payment Gateways' },
  { value: 'Events', label: 'Module Included' },
  { value: 'D&D', label: 'Campaign Builder' },
  { value: 'Social', label: 'Login Support' },
];

const TECH = [
  { name: 'Laravel', desc: 'Backend API & admin panel' },
  { name: 'Bootstrap 4', desc: 'Frontend UI framework' },
  { name: 'MySQL', desc: 'Campaign & donor data store' },
  { name: 'Stripe / PayPal', desc: 'Donation payment processing' },
  { name: 'Google / Facebook OAuth', desc: 'Social authentication' },
  { name: 'Redis', desc: 'Queue & notification dispatch' },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Campaign Goal Tracking in Real Time',
    body: 'Donation totals must update in real time on campaign pages as backers contribute. Implemented with server-sent events for live progress bars and atomic balance increments to prevent double-counting concurrent donations.',
  },
  {
    num: '02',
    title: 'Platform Fee Configurability',
    body: 'Platform operators needed to set different fee structures per campaign type — percentage for standard campaigns, fixed amounts for event tickets. A per-campaign-type fee config in the admin panel drives all checkout calculations.',
  },
  {
    num: '03',
    title: 'Event Ticket Inventory',
    body: 'Event campaigns have finite ticket capacity per tier. Preventing overselling required atomic inventory decrement on checkout confirmation — reserve-on-add-to-cart with a short-lived lock that expires on abandonment.',
  },
  {
    num: '04',
    title: 'Drag-and-Drop Campaign Pages',
    body: 'Campaign creators needed to build rich campaign pages without code. Built a JSON-backed drag-and-drop builder with text, image, video, and donation widget blocks — stored as a serialized layout document per campaign.',
  },
  {
    num: '05',
    title: 'Multi-Gateway Payment Routing',
    body: 'Each campaign can enable a subset of payment gateways. A unified gateway abstraction layer handles routing, webhook normalization, and refund flows regardless of which provider the backer uses.',
  },
];

const FEATURES = [
  'Donation campaign creation & management',
  'Event module with ticket tiers',
  'Drag & drop campaign page builder',
  'Google & Facebook social login',
  '10+ payment gateway integrations',
  'Admin fee configuration (% or fixed)',
  'Campaign analytics dashboard',
  'Newsletter & notification module',
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

export default function CrowdfundingPlatformCaseStudy() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-[120px] sm:pt-[160px] pb-16 sm:pb-20" style={{ background: 'linear-gradient(180deg, #f0fff4 0%, #e4f5e8 100%)' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Tag>Crowdfunding</Tag>
                <Tag>Donations</Tag>
                <Tag>Laravel</Tag>
              </div>

              <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[56px] lg:leading-[64px] font-semibold text-[#0F1112]">
                Crowdfunding &amp; Donation Platform with Event Ticketing
              </h1>

              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#484848]">
                A Laravel-based crowdfunding platform with drag-and-drop campaign builders, event
                ticket sales, 10+ payment gateways, and a configurable platform fee model — built
                to run as a standalone or white-label product.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
                  Start a Similar Project
                </Button>
              </div>
            </div>

            <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3', minHeight: 360 }}>
              <Image
                src="/site-images/case-studies/05-crowdfunding-donation.svg"
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
                A Kickstarter alternative — built to own
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Our client wanted to launch a niche crowdfunding platform for a specific
                  community. They needed campaign management, donor tracking, social-login
                  onboarding, event ticket sales, and a platform fee model that generated revenue
                  from each successful campaign.
                </p>
                <p>
                  We built a full Laravel platform with a drag-and-drop campaign page builder,
                  multi-gateway payment processing, event module with capacity management, and a
                  fully configurable admin panel. The platform operates without a per-campaign
                  engineering requirement — campaign creators self-serve.
                </p>
                <p>
                  <strong className="text-[#0F1112]">Core product message:</strong> Run your own crowdfunding platform with full control over fees, branding, and campaign policies.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[#e5e7ec] divide-y divide-[#f0f0f0] overflow-hidden">
                {[
                  { label: 'Industry', value: 'Crowdfunding / Nonprofits' },
                  { label: 'Backend', value: 'Laravel + MySQL' },
                  { label: 'Frontend', value: 'Bootstrap 4' },
                  { label: 'Payments', value: 'Stripe, PayPal + 8 more' },
                  { label: 'Auth', value: 'Google + Facebook OAuth' },
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
              Building trust between campaign creators and backers
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
              Crowdfunding platforms depend on trust. Backers need to know their money is safe.
              Campaign creators need transparent fee structures and real-time funding visibility.
              All of this had to work across multiple payment gateways with zero manual intervention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Real-time donation goal tracking',
              'Configurable platform fee per campaign type',
              'Event ticket inventory without overselling',
              'Multi-gateway payment processing',
              'Drag-and-drop campaign page builder',
              'Social login with fraud-resistant onboarding',
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
                Self-service campaigns with full platform control
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Campaign creators register via social login, complete a profile, and launch
                  campaigns through a guided setup flow with the drag-and-drop page builder.
                  Each campaign can support donations, event tickets, or both — with goal
                  tracking updated in real time as backers contribute.
                </p>
                <p>
                  The admin panel gives platform operators full control: approve or reject
                  campaigns, configure fee structures per category, view transaction ledgers,
                  and manage the content of any page via the drag-and-drop builder.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-7 sm:p-8 flex flex-col gap-4" style={{ background: '#f0fff4', border: '1px solid #c8e8cc' }}>
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
                Laravel + multi-gateway abstraction layer
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  All 10+ payment gateways are implemented behind a unified PHP interface.
                  Each gateway implements the same contract: charge, refund, webhook handling.
                  Switching or adding a gateway never requires changes to campaign checkout logic.
                </p>
                <p>
                  Campaign pages are stored as JSON layout documents and rendered server-side.
                  The drag-and-drop builder serializes block trees into a flat JSON format that
                  can be versioned, previewed, and published independently of campaign data.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {[
                  'Unified payment gateway interface (10+ providers)',
                  'Real-time donation totals via server-sent events',
                  'Atomic ticket inventory decrement on checkout',
                  'JSON-backed drag-and-drop campaign page builder',
                  'Social OAuth linked to unified user accounts',
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
                <span className="text-[32px] font-semibold text-[#e4f5e8] leading-none flex-shrink-0 select-none">{c.num}</span>
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
                A live crowdfunding platform generating platform-fee revenue
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The platform launched with campaign creators self-serving end-to-end. The admin panel
                gives the client full oversight of every campaign, transaction, and payout. Platform
                fee revenue is generated automatically on every successful campaign.
              </p>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The drag-and-drop builder reduced campaign setup time significantly — creators
                launch polished campaign pages in under an hour without design or development
                support. The platform scales to new campaign categories without code changes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '10+', label: 'Payment gateways live' },
                { value: 'Self-serve', label: 'Campaign creation' },
                { value: 'Auto', label: 'Platform fee collection' },
                { value: 'Events', label: 'Ticket sales module' },
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
        title="Questions about building a crowdfunding platform?"
        description="Common questions from founders before starting a crowdfunding or donation platform engagement."
      />
    </>
  );
}
