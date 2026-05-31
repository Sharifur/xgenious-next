import Image from 'next/image';
import type { Metadata } from 'next';
import Button, { ArrowIcon } from '@/components/ui/Button';
import FAQ from '@/components/sections/FAQ';
import BookingCTA from '@/components/sections/BookingCTA';

const FAQS = [
  {
    question: 'What does it cost to build an on-demand service marketplace?',
    answer: 'A full on-demand home service marketplace — with web platform, Flutter mobile apps, Google Maps integration, real-time chat, and 20+ payment gateways — typically ranges from $30,000 to $75,000. Mobile scope and the number of service categories are the main variables.',
  },
  {
    question: 'How does the location-based service matching work?',
    answer: 'We integrate Google Maps API for location-based discovery. Service providers define their serviceable area as a radius or polygon. Customers search by location and see only providers who cover their area, ranked by proximity and rating.',
  },
  {
    question: 'Can customers book multiple services in one checkout?',
    answer: 'Yes. We implement a cart checkout model where customers can add multiple services from different providers and complete a single payment flow. Each service order is dispatched to the relevant provider independently.',
  },
  {
    question: 'Do you build the provider-side app as well as the customer app?',
    answer: 'Yes. The Flutter mobile apps include both a customer app and a provider app. Providers receive job notifications, manage their schedule, track earnings, and communicate with customers — all from a dedicated provider interface.',
  },
  {
    question: 'How are WhatsApp notifications handled?',
    answer: 'We integrate the WhatsApp Business API for automated order status notifications. Providers and customers receive booking confirmations, status updates, and reminders via WhatsApp alongside in-app push notifications.',
  },
  {
    question: 'How do you handle taxes across different regions?',
    answer: 'We build a configurable tax management system in the admin panel. Tax rates can be set globally, per service category, or per geographic region. Tax is calculated and displayed at checkout and itemized on invoices.',
  },
];

export const metadata: Metadata = {
  title: 'On-Demand Home Service Marketplace — Laravel + Flutter Case Study',
  description:
    'How Xgenious built a full on-demand home service marketplace connecting clients with service providers — Google Maps discovery, real-time chat, WhatsApp notifications, and Flutter mobile apps.',
};

const STATS = [
  { value: '20+', label: 'Payment Gateways' },
  { value: 'Maps', label: 'Location Matching' },
  { value: 'Flutter', label: 'iOS & Android' },
  { value: 'WhatsApp', label: 'Order Notifications' },
];

const TECH = [
  { name: 'Laravel', desc: 'Backend API & admin panel' },
  { name: 'Flutter', desc: 'iOS & Android mobile apps' },
  { name: 'Google Maps API', desc: 'Location-based service matching' },
  { name: 'Stripe / PayPal', desc: '20+ payment gateways' },
  { name: 'WhatsApp Business', desc: 'Order notification channel' },
  { name: 'Pusher', desc: 'Real-time chat' },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Location-Based Provider Matching',
    body: 'Matching customers to service providers within a defined geographic area. Providers configure their serviceable radius; the platform queries providers using Haversine distance calculations and filters by availability.',
  },
  {
    num: '02',
    title: 'Multi-Service Cart Checkout',
    body: 'Customers booking multiple services from different providers in one session. The cart model accumulates services, splits payment by provider at checkout, and dispatches individual job notifications to each provider.',
  },
  {
    num: '03',
    title: 'Real-Time Job Dispatch',
    body: 'When a booking is confirmed, the relevant provider receives an instant push notification and can accept or decline within a window. If declined, the job routes to the next available provider in the area.',
  },
  {
    num: '04',
    title: 'WhatsApp Business API Integration',
    body: 'Integrating WhatsApp Business API for automated order lifecycle notifications — confirmation, provider assigned, en route, completed. WhatsApp templates must be pre-approved; we handle the approval workflow and fallback to SMS.',
  },
  {
    num: '05',
    title: 'Staff Management for Providers',
    body: 'Larger service providers need to manage multiple staff members, assign jobs to specific staff, and track individual performance. A staff sub-account system allows providers to onboard staff without sharing their admin credentials.',
  },
];

const FEATURES = [
  'Location-based service discovery',
  'Multi-service cart checkout',
  'Real-time provider-customer chat',
  'Google Maps serviceable area config',
  'Push & WhatsApp order notifications',
  '20+ payment gateway integrations',
  'Staff management for providers',
  'Tax configuration per region',
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

export default function HomeServiceMarketplaceCaseStudy() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-[120px] sm:pt-[160px] pb-16 sm:pb-20" style={{ background: 'linear-gradient(180deg, #f8f4ff 0%, #ede4f8 100%)' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Tag>Home Services</Tag>
                <Tag>Marketplace</Tag>
                <Tag>Flutter</Tag>
              </div>

              <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[56px] lg:leading-[64px] font-semibold text-[#0F1112]">
                On-Demand Home Service Marketplace Platform
              </h1>

              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#484848]">
                A location-aware marketplace connecting homeowners with vetted service providers —
                real-time chat, multi-service cart checkout, WhatsApp notifications, and Flutter
                mobile apps for both customers and providers.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
                  Start a Similar Project
                </Button>
              </div>
            </div>

            <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3', minHeight: 360 }}>
              <Image
                src="/site-images/case-studies/06-home-service.svg"
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
                A TaskRabbit alternative built for a local market
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Our client wanted to build an on-demand home service marketplace for their region —
                  connecting homeowners with trusted plumbers, electricians, cleaners, and other
                  service professionals. The platform had to work on both web and mobile with
                  location-based matching and real-time communication.
                </p>
                <p>
                  We built the platform on Laravel with a Flutter mobile app covering both the
                  customer and provider sides. Google Maps drives location-based discovery.
                  WhatsApp Business API handles order notifications at every lifecycle stage.
                </p>
                <p>
                  <strong className="text-[#0F1112]">Core product message:</strong> Book trusted home service professionals in your area in minutes.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[#e5e7ec] divide-y divide-[#f0f0f0] overflow-hidden">
                {[
                  { label: 'Industry', value: 'Home Services' },
                  { label: 'Platform', value: 'Web + iOS + Android' },
                  { label: 'Backend', value: 'Laravel + MySQL' },
                  { label: 'Mobile', value: 'Flutter (cross-platform)' },
                  { label: 'Payments', value: '20+ Gateways' },
                  { label: 'Notifications', value: 'Push + WhatsApp' },
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
              Connecting the right provider to the right customer in real time
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
              On-demand marketplaces fail when matching is slow or unreliable. The platform needed
              fast, accurate location matching, instant job dispatch to providers, and seamless
              communication — all while handling multiple service categories and payment methods.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Location-based provider matching by service area',
              'Real-time job dispatch with accept/decline flow',
              'Multi-service cart with split provider payouts',
              'WhatsApp Business API integration',
              'Staff management for multi-person providers',
              'Cross-regional tax configuration',
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
                A two-sided marketplace with geographic intelligence
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Service providers set their serviceable area on Google Maps during onboarding.
                  Customer searches filter available providers using spatial queries — only providers
                  whose area covers the customer location appear in results. Booking confirms
                  immediately and triggers real-time dispatch to the provider.
                </p>
                <p>
                  The WhatsApp Business API integration sends automated messages at every order
                  state: confirmed, provider assigned, provider en route, completed. Templates are
                  pre-approved through the Meta Business Manager during the setup phase.
                </p>
              </div>
            </div>

            <div className="rounded-2xl p-7 sm:p-8 flex flex-col gap-4" style={{ background: '#f8f4ff', border: '1px solid #e0d0f0' }}>
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
                Spatial queries, real-time dispatch, multi-channel notifications
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Provider service areas are stored as spatial geometries. Customer location
                  searches execute ST_Within spatial queries to find covering providers —
                  significantly more accurate than simple radius-based matching for irregular
                  service areas.
                </p>
                <p>
                  The notification layer supports three channels in parallel: in-app push via FCM,
                  WhatsApp Business API, and email. Each notification event dispatches to all
                  active channels for the recipient — channels can be toggled per user in settings.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {[
                  'ST_Within spatial queries for service area matching',
                  'Real-time job dispatch via Pusher broadcast',
                  'FCM push + WhatsApp + email notification stack',
                  'Cart with split-provider payout on checkout',
                  'Staff sub-accounts with job assignment',
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
                <span className="text-[32px] font-semibold text-[#ede4f8] leading-none flex-shrink-0 select-none">{c.num}</span>
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
                A live marketplace with location-aware matching in production
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The platform launched with both mobile apps alongside the web portal. Service
                providers self-onboard, configure their area and availability, and receive jobs
                directly to their phone. Customers get WhatsApp confirmation at every step.
              </p>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The multi-service cart model increased average order value from day one. Staff
                management tools allowed larger service companies to manage a team of technicians
                without separate software. The architecture supports adding new service categories
                without code changes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '20+', label: 'Payment methods supported' },
                { value: 'Real-time', label: 'Job dispatch to providers' },
                { value: 'WhatsApp', label: 'Automated order lifecycle' },
                { value: 'Spatial', label: 'Provider area matching' },
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
        title="Questions about building a home service marketplace?"
        description="Common questions from founders before starting an on-demand marketplace engagement."
      />
    </>
  );
}
