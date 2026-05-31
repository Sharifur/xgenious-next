import Image from 'next/image';
import type { Metadata } from 'next';
import Button, { ArrowIcon } from '@/components/ui/Button';
import FAQ from '@/components/sections/FAQ';
import BookingCTA from '@/components/sections/BookingCTA';

const FAQS = [
  {
    question: 'What does it cost to build a freelancer marketplace?',
    answer: 'A full-featured freelance marketplace — with bidding, escrow payments, live chat, dispute resolution, and mobile apps — typically ranges from $25,000 to $70,000. Scope and third-party integrations are the main drivers. We work on fixed-price contracts with a committed scope before we start.',
  },
  {
    question: 'How long does development take?',
    answer: 'A platform of this scope can ship in 8–12 weeks with a structured sprint cadence. Discovery and architecture take 1–2 weeks, core feature development runs in parallel sprints, and QA + launch prep takes a final 1–2 weeks.',
  },
  {
    question: 'Can you build escrow and dispute resolution into the platform?',
    answer: 'Yes. We implement milestone-based escrow flows where funds are held until the buyer approves delivery. Dispute workflows route contested jobs to admin review with structured resolution processes.',
  },
  {
    question: 'Do you build the mobile app as well as the web platform?',
    answer: 'Yes. We build cross-platform Flutter mobile apps alongside the web platform. A single Flutter codebase produces native apps for both iOS and Android, significantly reducing cost versus two separate builds.',
  },
  {
    question: 'What payment systems do you integrate?',
    answer: 'We integrate Stripe, PayPal, and regional gateways depending on the target market. Wallet systems with deposits, withdrawals, and transaction history are built into the platform architecture from the start.',
  },
  {
    question: 'Can the platform support both fixed-price gigs and hourly contracts?',
    answer: 'Yes. We design the job model to support multiple engagement types — fixed-price project bids, hourly tracked contracts, recurring jobs, and package-based gig listings are all implementable on the same platform.',
  },
];

export const metadata: Metadata = {
  title: 'Freelancer Marketplace Platform — Laravel + Flutter Case Study',
  description:
    'How Xgenious built a full-featured freelancer marketplace with escrow payments, live bidding, dispute resolution, and Flutter mobile apps — shipped in 8 weeks.',
};

const STATS = [
  { value: '8wk', label: 'Time to Launch' },
  { value: '500+', label: 'Active Freelancers' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: 'Escrow', label: 'Payment Model' },
];

const TECH = [
  { name: 'Laravel', desc: 'Backend API & admin panel' },
  { name: 'Flutter', desc: 'iOS & Android mobile apps' },
  { name: 'MySQL', desc: 'Relational data store' },
  { name: 'Stripe / PayPal', desc: 'Escrow payment processing' },
  { name: 'Pusher', desc: 'Real-time live chat' },
  { name: 'Redis', desc: 'Queue & caching layer' },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Escrow Payment Lifecycle',
    body: 'Designing a trustworthy flow where funds are held, released on delivery approval, and refunded cleanly on dispute. Built on Stripe Connect with server-side state transitions tied to job status.',
  },
  {
    num: '02',
    title: 'Bidding Concurrency',
    body: 'Multiple freelancers bidding on the same job simultaneously required atomic reads and optimistic locks to prevent race conditions when a client accepts a bid.',
  },
  {
    num: '03',
    title: 'Real-Time Chat at Scale',
    body: 'Pusher-backed live messaging between buyers and sellers with offline notification fallback. Message delivery receipts and typing indicators required careful event deduplication.',
  },
  {
    num: '04',
    title: 'Dispute Resolution Workflow',
    body: 'Structured dispute flows with evidence upload, timeline freezing, and admin adjudication. All state transitions are logged immutably so every decision is auditable.',
  },
  {
    num: '05',
    title: 'Dual-Sided Search & Discovery',
    body: 'Buyers need to find freelancers by skill and rating. Freelancers need to find jobs by category and budget. Two separate search contexts sharing one indexing layer.',
  },
];

const FEATURES = [
  'Gig catalog & job listings',
  'Proposal & bidding system',
  'Milestone-based escrow payments',
  'Live chat between buyers and sellers',
  'Dispute resolution with admin panel',
  'Freelancer wallet & withdrawals',
  'Membership subscription plans',
  'Flutter mobile apps (iOS + Android)',
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

export default function FreelancerMarketplaceCaseStudy() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-[120px] sm:pt-[160px] pb-16 sm:pb-20" style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #e4eaf8 100%)' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Tag>Freelance Marketplace</Tag>
                <Tag>Laravel</Tag>
                <Tag>Flutter</Tag>
              </div>

              <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[56px] lg:leading-[64px] font-semibold text-[#0F1112]">
                Freelance Marketplace Platform Launched in 8 Weeks
              </h1>

              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#484848]">
                A full-stack freelancer marketplace with escrow payments, live bidding, dispute
                resolution, real-time chat, and Flutter mobile apps — built from scratch and shipped
                on schedule.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
                  Start a Similar Project
                </Button>
              </div>
            </div>

            <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3', minHeight: 360 }}>
              <Image
                src="/site-images/case-studies/03-freelance-marketplace.svg"
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
                A founder wanted a Fiverr alternative — built to own
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Our client was an entrepreneur launching a niche freelance marketplace for a specific
                  professional category. They needed the full platform — web app, mobile apps, payment
                  infrastructure, and moderation tools — delivered fast and on a fixed budget.
                </p>
                <p>
                  We designed and built a marketplace with dual-sided search, a gig catalog, competitive
                  bidding on jobs, milestone-based escrow, and live chat. Mobile apps on both iOS and
                  Android launched alongside the web platform.
                </p>
                <p>
                  <strong className="text-[#0F1112]">Core product message:</strong> A complete freelance marketplace with the trust infrastructure of Upwork — without the 20% platform fee.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[#e5e7ec] divide-y divide-[#f0f0f0] overflow-hidden">
                {[
                  { label: 'Industry', value: 'Freelance Marketplace' },
                  { label: 'Platform', value: 'Web + iOS + Android' },
                  { label: 'Backend', value: 'Laravel + MySQL' },
                  { label: 'Mobile', value: 'Flutter (cross-platform)' },
                  { label: 'Payments', value: 'Stripe + PayPal Escrow' },
                  { label: 'Engagement', value: 'Full-Stack Build' },
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
              Building a trusted two-sided market from zero
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
              A freelance marketplace only works when both buyers and sellers trust the platform.
              The client needed trust infrastructure — escrow, dispute resolution, identity — alongside
              the core marketplace features, all within an 8-week delivery window.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Escrow payments buyers and sellers both trust',
              'Bidding system that handles concurrency safely',
              'Live chat integrated into the job workflow',
              'Dispute resolution with admin adjudication',
              'Freelancer wallet with withdrawal management',
              'Mobile apps shipped alongside the web platform',
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
                A complete marketplace with trust built into the architecture
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  We built the platform in structured sprints with a Laravel API backend, a web frontend,
                  and Flutter mobile apps in parallel. Every feature was scoped to the delivery date —
                  no scope creep, no last-minute surprises.
                </p>
                <p>
                  Escrow logic runs entirely server-side through Stripe Connect. Funds are held at payment,
                  released on buyer approval, and returned via a reversible refund flow. The dispute system
                  freezes fund state immediately on filing and routes to admin review.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-7 sm:p-8 flex flex-col gap-4" style={{ background: '#f0f4ff', border: '1px solid #dce6f5' }}>
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
                Laravel API + Flutter apps + real-time chat
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Laravel handles the REST API, business logic, and background jobs via queue workers.
                  Pusher drives real-time messaging with presence channels for online indicators and
                  typing state. Flutter apps consume the same API as the web client.
                </p>
                <p>
                  The wallet system tracks balance via double-entry ledger transactions — every credit
                  and debit has a corresponding audit record. Withdrawals trigger Stripe payouts with
                  bank account verification enforced before first withdrawal.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {[
                  'Laravel REST API shared by web and mobile',
                  'Stripe Connect for escrow + payout flows',
                  'Pusher real-time chat with presence channels',
                  'Double-entry wallet ledger for audit trail',
                  'Redis queue for async job and notification dispatch',
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
                <span className="text-[32px] font-semibold text-[#e8edf8] leading-none flex-shrink-0 select-none">{c.num}</span>
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
                A live marketplace with 500+ freelancers in production
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The platform launched on schedule after 8 weeks of development. Over 500 active
                freelancers onboarded in the first months of operation. The escrow system processed
                real transactions from day one with no payment disputes going unresolved.
              </p>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The client now owns the platform outright — no revenue share, no vendor lock-in,
                no per-transaction fees to a third-party marketplace. The architecture supports
                adding new job categories, payment methods, and geographies without rebuilding.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '8 weeks', label: 'Time to production' },
                { value: '500+', label: 'Active freelancers' },
                { value: '98%', label: 'Client satisfaction score' },
                { value: '0%', label: 'Platform revenue share' },
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
        title="Questions about building a freelance marketplace?"
        description="Common questions from founders before starting a marketplace engagement."
      />
    </>
  );
}
