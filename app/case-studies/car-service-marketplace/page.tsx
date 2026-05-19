import type { Metadata } from 'next';
import Button, { ArrowIcon } from '@/components/ui/Button';
import FAQ from '@/components/sections/FAQ';
import BookingCTA from '@/components/sections/BookingCTA';

const FAQS = [
  {
    question: 'What does it cost to build a car service marketplace?',
    answer: 'A car service marketplace with web platform, Android app, real-time order tracking, and 19+ payment gateways typically ranges from $25,000 to $60,000. Complexity of vehicle matching logic, number of service categories, and whether iOS is required alongside Android are the main variables.',
  },
  {
    question: 'How does the car model matching work?',
    answer: 'We build a vehicle catalog into the user profile. When a customer books a service, they select their car make, model, and year. The platform filters compatible service providers and shows only mechanics qualified or equipped for that specific vehicle type.',
  },
  {
    question: 'How is order tracking handled?',
    answer: 'Service providers update job status through their app — accepted, in progress, completed. Customers receive real-time push notifications at each state change and can track job status live. For mobile services, GPS tracking of the technician\'s arrival can also be implemented.',
  },
  {
    question: 'Do you build the service provider panel as well?',
    answer: 'Yes. The provider-side interface lets mechanics manage their service catalog, set working hours and serviceable areas, respond to job requests, process refunds, and view earnings — all from a separate mobile or web panel.',
  },
  {
    question: 'What payment gateways do you integrate?',
    answer: 'We integrate 19+ gateways including Stripe, PayPal, Razorpay, and regional providers. The gateway list is configured for the target market. Each gateway handles both initial payment and refund processing through the same abstraction layer.',
  },
  {
    question: 'Can the platform support branch locations for larger auto shops?',
    answer: 'Yes. Larger service providers can configure multiple branch locations, each with its own service catalog, operating hours, and serviceable area. Jobs route to the nearest or most available branch automatically.',
  },
];

export const metadata: Metadata = {
  title: 'Car Service & Mechanic Marketplace — Case Study | Xgenious',
  description:
    'How Xgenious built an on-demand car service and mechanic marketplace with vehicle-matched booking, real-time order tracking, 19+ payment gateways, and Android mobile apps.',
};

const STATS = [
  { value: '19+', label: 'Payment Methods' },
  { value: 'Live', label: 'Order Tracking' },
  { value: 'Android', label: 'Mobile App' },
  { value: 'Multi-branch', label: 'Provider Support' },
];

const TECH = [
  { name: 'Laravel', desc: 'Backend API & admin panel' },
  { name: 'Android (Native)', desc: 'Mobile app on Google Play' },
  { name: 'REST API', desc: 'Postman-documented endpoints' },
  { name: 'Stripe / PayPal', desc: '19+ payment gateways' },
  { name: 'FCM', desc: 'Push notification delivery' },
  { name: 'MySQL', desc: 'Bookings & vehicle data store' },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Vehicle-to-Service Matching',
    body: 'Car services are specific to vehicle make, model, and year. Building a matching layer that filters compatible mechanics for each booking type — oil changes, brake jobs, diagnostics — required a structured vehicle taxonomy with service capability tags per provider.',
  },
  {
    num: '02',
    title: 'Branch Location Management',
    body: 'Auto shop chains with multiple locations need each branch to operate semi-independently. Each branch has its own schedule, inventory of services, and serviceable area — but rolls up to a single brand owner account.',
  },
  {
    num: '03',
    title: 'Real-Time Status Tracking',
    body: 'Customers expect to know when their car is being worked on. A lightweight state machine governs job lifecycle: requested → accepted → in progress → completed → reviewed. Each state transition triggers push notifications to the customer.',
  },
  {
    num: '04',
    title: 'Refund Processing Across Gateways',
    body: 'Each payment gateway has a different refund API. The unified payment abstraction layer handles refund routing, ensuring that a refund for a Razorpay payment goes through Razorpay\'s refund endpoint — not Stripe\'s — without the application layer needing to know the difference.',
  },
  {
    num: '05',
    title: 'Postman-Documented REST API',
    body: 'The client needed a clean REST API so future developers could extend the platform. Every endpoint was designed with RESTful conventions and documented in Postman collections, covering authentication, booking lifecycle, payment processing, and notifications.',
  },
];

const FEATURES = [
  'Car model selection for service matching',
  'Real-time order tracking',
  '19+ payment gateway integrations',
  'Refund processing module',
  'Push & email notifications',
  'Branch location & area config',
  'Promotions & discount management',
  'REST API with Postman docs',
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

export default function CarServiceMarketplaceCaseStudy() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-[120px] sm:pt-[160px] pb-16 sm:pb-20" style={{ background: 'linear-gradient(180deg, #f4f4f0 0%, #e8e8e0 100%)' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Tag>Automotive</Tag>
                <Tag>Service Marketplace</Tag>
                <Tag>Android</Tag>
              </div>

              <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[56px] lg:leading-[64px] font-semibold text-[#0F1112]">
                On-Demand Car Service &amp; Mechanic Marketplace
              </h1>

              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#484848]">
                A vehicle-aware booking marketplace connecting car owners with mechanics and auto
                service shops — real-time order tracking, 19+ payment gateways, multi-branch
                provider support, and an Android mobile app.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
                  Start a Similar Project
                </Button>
              </div>
            </div>

            <div
              className="w-full rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: '#d8d8cc', aspectRatio: '4/3', minHeight: 340 }}
            >
              <span className="text-[13px] text-[#8a8a7a]">Project screenshot</span>
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
                Booking a mechanic as easy as booking a ride
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Our client needed to build a marketplace connecting car owners with local mechanics
                  and auto service providers. The key challenge: car services are vehicle-specific.
                  A booking for a Mercedes diesel requires a different mechanic than one for a
                  Toyota hybrid — the platform had to match on vehicle compatibility.
                </p>
                <p>
                  We built a Laravel backend with an Android mobile app, a clean REST API, and
                  an admin panel that lets the client manage service providers, configure promotions,
                  and handle disputes — all without engineering involvement.
                </p>
                <p>
                  <strong className="text-[#0F1112]">Core product message:</strong> Get your car serviced by a qualified mechanic — booked in minutes, tracked in real time.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[#e5e7ec] divide-y divide-[#f0f0f0] overflow-hidden">
                {[
                  { label: 'Industry', value: 'Automotive Services' },
                  { label: 'Platform', value: 'Web + Android App' },
                  { label: 'Backend', value: 'Laravel + MySQL' },
                  { label: 'API', value: 'REST (Postman docs)' },
                  { label: 'Payments', value: '19+ Gateways' },
                  { label: 'Engagement', value: 'Marketplace Build' },
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
              Vehicle-specific matching in a fragmented market
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
              Generic service marketplaces fail in automotive because not every mechanic services
              every car. The platform needed vehicle taxonomy, capability tagging for providers,
              and a matching layer — plus multi-branch support for larger auto shop chains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Vehicle-to-provider compatibility matching',
              'Multi-branch location management',
              'Real-time job status tracking for customers',
              'Refund processing across 19+ payment gateways',
              'Role-based access for shop staff',
              'Clean REST API for future extensibility',
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
                A structured vehicle taxonomy driving smart matching
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  We built a vehicle catalog with make, model, and year linked to service categories.
                  Providers tag which vehicle types they service. Bookings filter providers by vehicle
                  compatibility first, then by location and availability — reducing irrelevant results
                  and provider rejection rates.
                </p>
                <p>
                  Multi-branch providers configure each location independently. Jobs route to the
                  correct branch based on customer location proximity. The admin panel consolidates
                  all branch data under one account, giving chain operators a unified view.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-7 sm:p-8 flex flex-col gap-4" style={{ background: '#f4f4f0', border: '1px solid #e0e0d8' }}>
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
                Laravel REST API + Android app + unified payment layer
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  The backend is a RESTful Laravel API documented in Postman. The Android app
                  consumes the same API as the web admin panel — a single codebase serves all
                  clients. FCM handles push notification delivery to both customer and provider apps.
                </p>
                <p>
                  All 19+ payment gateways implement a common interface. Refund routing is handled
                  automatically — the platform knows which gateway processed the original charge
                  and routes the refund to the correct provider API without any manual lookup.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {[
                  'Laravel REST API with Postman documentation',
                  'FCM push notifications for all job status events',
                  'Unified payment gateway interface + refund routing',
                  'Vehicle taxonomy linked to provider capability tags',
                  'Multi-branch job routing by proximity',
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
                <span className="text-[32px] font-semibold text-[#e8e8e0] leading-none flex-shrink-0 select-none">{c.num}</span>
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
                A live automotive marketplace with vehicle-intelligent booking
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The platform launched on Google Play alongside the web portal. Car owners book
                compatible mechanics directly from their phone. Service providers receive jobs with
                full vehicle details already included — fewer back-and-forth messages, faster
                acceptance rates.
              </p>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The documented REST API means the client can onboard new developers without tribal
                knowledge. Multi-branch support allowed the first auto chain partners to onboard
                all locations in a single admin account from day one.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '19+', label: 'Payment gateways' },
                { value: 'Live', label: 'Order tracking' },
                { value: 'REST', label: 'Documented API' },
                { value: 'Multi-branch', label: 'Chain shop support' },
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
        title="Questions about building a car service marketplace?"
        description="Common questions from founders before starting an automotive marketplace engagement."
      />
    </>
  );
}
