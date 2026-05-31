import Image from 'next/image';
import type { Metadata } from 'next';
import Button, { ArrowIcon } from '@/components/ui/Button';
import FAQ from '@/components/sections/FAQ';
import BookingCTA from '@/components/sections/BookingCTA';

export const metadata: Metadata = {
  title: 'AI-Powered Customer Support SaaS — Laravel Case Study',
  description:
    'How Xgenious built a multi-tenant AI customer support platform with semantic chatbots, support ticketing, knowledge base, and Stripe billing — a self-hostable alternative to Intercom and Crisp.',
};

const STATS = [
  { value: '40–60%', label: 'Support Workload Reduction' },
  { value: 'Multi-tenant', label: 'SaaS Architecture' },
  { value: 'GPT-4', label: 'AI Engine' },
  { value: '∞', label: 'Client Workspaces' },
];

const TECH = [
  { name: 'Laravel 12', desc: 'Backend framework (PHP 8.4+)' },
  { name: 'PostgreSQL 14+', desc: 'Primary database' },
  { name: 'Redis', desc: 'Caching & queues' },
  { name: 'Pusher', desc: 'Real-time visitor tracking' },
  { name: 'OpenAI / Claude', desc: 'AI chatbot engine' },
  { name: 'Stripe & PayPal', desc: 'Subscription billing' },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Semantic AI vs Keyword Matching',
    body: 'Traditional support chatbots fail when users phrase questions differently from the FAQ wording. We implemented vector similarity search so the AI understands context and intent — not just exact keyword hits.',
  },
  {
    num: '02',
    title: 'Multi-Tenant Workspace Isolation',
    body: 'Each client on the platform gets their own knowledge base, chatbot configuration, widget, and analytics — fully isolated. Tenant data is scoped at the database level to ensure zero cross-contamination.',
  },
  {
    num: '03',
    title: 'Embeddable Widget with Minimal Footprint',
    body: 'The chat widget needed to load on any third-party site without slowing it down. We delivered a lightweight CDN-served script installable in one line, with async loading and zero layout impact on the host site.',
  },
  {
    num: '04',
    title: 'Real-Time Visitor Intelligence',
    body: 'Support agents needed live context — who is on the site, what pages they visited, where they are. We built a Pusher-backed visitor tracking layer that feeds location, session history, and browsing path into the agent dashboard in real time.',
  },
  {
    num: '05',
    title: 'Subscription Billing at SaaS Scale',
    body: 'The platform owner needed to monetize client workspaces with tiered plans, trial periods, and usage limits. We wired Stripe and PayPal billing with webhook-driven plan enforcement so the owner can launch and manage subscription tiers without code changes.',
  },
];

const FEATURES = [
  'AI chatbot with semantic search',
  'Support ticketing + SLA tracking',
  'Knowledge base builder',
  'Embeddable chat widget (CDN/npm)',
  'Real-time visitor tracking',
  'Admin + client dashboards',
  'Stripe & PayPal subscription billing',
  'Multi-tenant architecture',
  'OpenAI & Claude AI integration',
  'Analytics & reporting',
];

const FAQS = [
  {
    question: 'What does a project like this typically cost?',
    answer: 'A multi-tenant SaaS platform of this scope — AI integration, real-time features, subscription billing, embeddable widget, and two-tier dashboard — typically ranges from $20,000 to $60,000 depending on scope and integrations. We work on fixed-price contracts with committed delivery dates.',
  },
  {
    question: 'How long does it take to build?',
    answer: 'A platform of this complexity typically ships in 12–20 weeks. Discovery and architecture take 2–3 weeks, development runs in weekly sprints with demos, and QA + deployment takes a further 2 weeks. Scope is locked before development starts.',
  },
  {
    question: 'Can you integrate any AI provider — OpenAI, Claude, others?',
    answer: 'Yes. We build AI integrations that are provider-agnostic by design. You can start with OpenAI GPT-4, fall back to Claude, or support both — the architecture routes through a unified interface so swapping or adding providers requires no core changes.',
  },
  {
    question: 'Can the platform support multiple clients (multi-tenant)?',
    answer: 'Yes. Multi-tenancy is a core architectural pattern we build into SaaS platforms from day one — not bolted on later. Each tenant gets fully isolated data, configuration, and billing. You can run unlimited client workspaces under a single deployment.',
  },
  {
    question: 'Do you handle deployment and infrastructure setup?',
    answer: 'Yes. We configure the production server (DigitalOcean, Hetzner, AWS, or your preferred provider), set up CI/CD pipelines, SSL, Redis, and database — everything needed to go live. Ongoing hosting is on your own infrastructure; you own it completely.',
  },
  {
    question: 'Can we white-label the platform for our clients?',
    answer: 'Yes. We build white-label capability into SaaS platforms — custom domains per tenant, removable branding, custom email sending domains — so your clients see your brand, not ours.',
  },
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
      <span className="text-[32px] sm:text-[40px] font-semibold text-[#0F1112] leading-none">{value}</span>
      <span className="text-[13px] text-[#8a8f99]">{label}</span>
    </div>
  );
}

export default function AISupportSaaSCaseStudy() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-[120px] sm:pt-[160px] pb-16 sm:pb-20" style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #e8edf8 100%)' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — text */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Tag>SaaS Platform</Tag>
                <Tag>AI / LLM</Tag>
                <Tag>Laravel</Tag>
                <Tag>Multi-Tenant</Tag>
              </div>

              <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[56px] lg:leading-[64px] font-semibold text-[#0F1112]">
                AI-Powered Customer Support SaaS Platform
              </h1>

              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#484848]">
                A self-hostable, multi-tenant SaaS platform combining semantic AI chatbots, support ticketing,
                a knowledge base builder, and subscription billing — a full alternative to Intercom and Crisp
                that clients can run and monetize on their own infrastructure.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
                  Start a Similar Project
                </Button>
              </div>
            </div>

            {/* Right — hero image */}
            <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3', minHeight: 360 }}>
              <Image
                src="/site-images/case-studies/01-ai-chatbot.svg"
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">Introduction</span>
              <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#0F1112]">
                Enterprise-grade AI support, without the enterprise price tag
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Our client needed to launch a SaaS platform that would let businesses deploy AI-powered
                  customer support on their own sites — without paying $30–45 per month to Intercom, Crisp,
                  or Tidio per seat.
                </p>
                <p>
                  We built a fully self-hostable, multi-tenant platform on Laravel. Each workspace gets its
                  own AI chatbot trained on a custom knowledge base, a full ticketing system, real-time visitor
                  tracking, and an embeddable chat widget — all managed from a single admin panel.
                </p>
                <p>
                  The platform owner can monetize client workspaces with Stripe and PayPal subscription billing,
                  set usage limits per plan, and scale to unlimited clients without infrastructure changes.
                </p>
              </div>
            </div>

            {/* Project meta */}
            <div className="rounded-2xl border border-[#e5e7ec] divide-y divide-[#f0f0f0] overflow-hidden">
              {[
                { label: 'Category', value: 'SaaS Platform' },
                { label: 'Backend', value: 'Laravel 12 / PHP 8.4+' },
                { label: 'Database', value: 'PostgreSQL 14+' },
                { label: 'AI Engine', value: 'OpenAI GPT-4, Claude' },
                { label: 'Real-Time', value: 'Pusher WebSockets' },
                { label: 'Billing', value: 'Stripe + PayPal' },
                { label: 'Architecture', value: 'Multi-Tenant SaaS' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between px-5 py-3.5">
                  <span className="text-[12px] font-medium text-[#8a8f99]">{label}</span>
                  <span className="text-[13px] font-semibold text-[#0F1112]">{value}</span>
                </div>
              ))}
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
              Businesses were overpaying for support tools that didn't understand their customers
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
              Existing SaaS support tools had two problems: they were expensive on a per-seat model, and
              their chatbots relied on keyword matching — failing the moment a customer phrased a question
              differently from the FAQ.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              '$30–45/month per seat for competitors like Intercom and Crisp',
              'Keyword-based chatbots with high failure rates on natural language',
              'No self-hostable option — data locked in third-party infrastructure',
              'No way to monetize and resell the platform to their own clients',
              'Fragmented tools: chat, ticketing, and knowledge base in separate products',
              'Limited customization — couldn\'t match the brand or embed cleanly',
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
                A complete AI support platform the client owns outright
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  We built a full-stack SaaS platform where every workspace is independently configured.
                  Clients train their chatbot on their own knowledge base — FAQs, help articles, product docs —
                  and the AI uses vector similarity search to answer questions semantically, not by keyword.
                </p>
                <p>
                  When the AI can't answer, the conversation escalates to a support ticket with full context
                  — conversation history, visitor location, browsing path — already attached. Agents work
                  from a unified dashboard with SLA timers, priority routing, and analytics.
                </p>
                <p>
                  The platform owner monetizes via built-in Stripe and PayPal billing. Plans, limits, and
                  trial periods are configured in the admin panel — no code changes required to launch or
                  modify pricing.
                </p>
              </div>
            </div>

            {/* Feature grid */}
            <div className="rounded-2xl p-7 sm:p-8 flex flex-col gap-4" style={{ background: '#f5f7ff', border: '1px solid #dce3f5' }}>
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
                Built to scale from one client to thousands
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Laravel handles the API, business logic, and queue workers. PostgreSQL stores tenant data
                  with row-level scoping — no cross-tenant data leaks by design. Redis powers session caching
                  and background job queues for AI processing.
                </p>
                <p>
                  AI responses are generated asynchronously via OpenAI or Claude, with vector embeddings
                  stored per knowledge base entry. Pusher handles the real-time chat stream and live visitor
                  presence — agents see visitors appear, navigate, and type in real time.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {[
                  'Row-level multi-tenant data isolation in PostgreSQL',
                  'Vector embeddings for semantic chatbot understanding',
                  'Async AI processing via Laravel queues + Redis',
                  'Real-time visitor tracking via Pusher WebSockets',
                  'Webhook-driven Stripe/PayPal plan enforcement',
                  'Embeddable CDN widget — loads async, zero host-site impact',
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
                <div key={t.name} className="flex flex-col gap-1.5 p-5 rounded-2xl border border-[#e5e7ec] bg-white">
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
              <div key={c.num} className="flex flex-col sm:flex-row gap-5 sm:gap-8 p-6 sm:p-8 rounded-2xl border border-[#e5e7ec]" style={{ background: '#fafafa' }}>
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
                A fully owned SaaS business, not a monthly subscription
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The client launched a live SaaS product they own and operate entirely — no vendor lock-in,
                no per-seat fees, no data on third-party servers. They can run it for one client or ten
                thousand without the cost curve of Intercom or Crisp.
              </p>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The semantic AI engine consistently handles 40–60% of incoming support volume without agent
                involvement. When tickets do escalate, agents have full context immediately — no back-and-forth
                to understand the customer's situation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '40–60%', label: 'AI deflection rate' },
                { value: 'Zero', label: 'Vendor lock-in' },
                { value: 'Unlimited', label: 'Client workspaces' },
                { value: '1 line', label: 'Widget installation' },
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
        title="Questions about building a SaaS platform like this?"
        description="Common questions from founders before starting a multi-tenant SaaS engagement."
      />
    </>
  );
}
