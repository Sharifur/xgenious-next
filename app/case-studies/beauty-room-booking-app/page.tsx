import type { Metadata } from 'next';
import Button, { ArrowIcon } from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';
import BookingCTA from '@/components/sections/BookingCTA';

export const metadata: Metadata = {
  title: 'Beauty Room Booking App — Flutter Case Study | Xgenious',
  description:
    'How Xgenious built a Flutter-based mobile platform for beauty and wellness professionals to book premium treatment rooms on a daily basis, with smart access control and Stripe payments.',
};

const STATS = [
  { value: '100%', label: 'Unmanned Operations' },
  { value: '< 3min', label: 'Avg Booking Time' },
  { value: 'Flutter', label: 'Cross-Platform' },
  { value: '0', label: 'Physical Key Handovers' },
];

const TECH = [
  { name: 'Flutter', desc: 'Cross-platform mobile app' },
  { name: 'Firebase Firestore', desc: 'Real-time booking data' },
  { name: 'Firebase Auth', desc: 'Secure user authentication' },
  { name: 'Cloud Functions', desc: 'Backend business logic' },
  { name: 'Stripe', desc: 'Payment processing' },
  { name: 'Smart Lock API', desc: 'Digital access control' },
];

const CHALLENGES = [
  {
    num: '01',
    title: 'Real-Time Room Availability',
    body: 'Preventing double-booking while keeping the booking flow fast and responsive. Solved with Firestore atomic transactions that lock availability before confirming payment.',
  },
  {
    num: '02',
    title: 'Smart Access Management',
    body: 'Coordinating booking validity windows with digital room unlock permissions. Access activates server-side at booking start time and expires automatically at checkout.',
  },
  {
    num: '03',
    title: 'Fully Unmanned Operations',
    body: 'Removing the need for manual key exchange or on-site staff entirely. Every step — booking, payment, room access, checkout — is handled inside the app.',
  },
  {
    num: '04',
    title: 'Booking Lifecycle Management',
    body: 'Handling booking statuses, cancellations, payment states, and future access activation across a distributed system with push notifications at every state change.',
  },
  {
    num: '05',
    title: 'Mobile-First UX',
    body: 'Creating an intuitive booking flow for non-technical beauty professionals. Zero learning curve was the goal — sign-up to confirmed booking in under three minutes.',
  },
];

const FEATURES = [
  'User onboarding & authentication',
  'Room browsing & detail pages',
  'Daily booking system',
  'Booking history & management',
  'Smart room access via digital lock',
  'User profile management',
  'Stripe payment integration',
  'Push notification support',
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

export default function BeautyRoomBookingCaseStudy() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-[120px] sm:pt-[160px] pb-16 sm:pb-20" style={{ background: 'linear-gradient(180deg, #f9f8f4 0%, #f0ece4 100%)' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — text */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Tag>Beauty &amp; Wellness</Tag>
                <Tag>Mobile App</Tag>
                <Tag>Smart Access</Tag>
              </div>

              <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[56px] lg:leading-[64px] font-semibold text-[#0F1112]">
                Premium Room Booking Platform for Beauty &amp; Wellness Professionals
              </h1>

              <p className="text-[16px] sm:text-[18px] leading-[28px] text-[#484848]">
                A mobile-first platform built on Flutter that gives independent beauty and wellness professionals
                flexible, same-day access to premium treatment rooms — no long-term contracts, no key handovers,
                no staff required.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact" variant="coral" icon={<ArrowIcon />}>
                  Start a Similar Project
                </Button>
              </div>
            </div>

            {/* Right — image placeholder */}
            <div
              className="w-full rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: '#e8e4dc', aspectRatio: '3/4', minHeight: 400 }}
            >
              <span className="text-[13px] text-[#a09a8e]">Project screenshot</span>
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
                Flexible workspaces for the beauty economy
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Our client needed a mobile-first room booking platform for beauty and wellness
                  professionals — aestheticians, massage therapists, nail technicians, lash artists, and makeup
                  artists who need professional workspace without the overhead of long-term studio leases.
                </p>
                <p>
                  We built a platform combining seamless room booking, digital smart lock access control,
                  and a premium mobile experience into a single Flutter application. Venue operators can run
                  spaces with zero on-site staff. Professionals get instant, flexible access.
                </p>
                <p>
                  <strong className="text-[#0F1112]">Core product message:</strong> Flexible access to premium wellness spaces without long-term commitments.
                </p>
              </div>
            </div>

            {/* Project meta */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[#e5e7ec] divide-y divide-[#f0f0f0] overflow-hidden">
                {[
                  { label: 'Industry', value: 'Beauty & Wellness' },
                  { label: 'Platform', value: 'iOS & Android (Flutter)' },
                  { label: 'Backend', value: 'Firebase + Cloud Functions' },
                  { label: 'Payments', value: 'Stripe' },
                  { label: 'Access Control', value: 'Smart Lock Integration' },
                  { label: 'Engagement', value: 'Mobile App Development' },
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
              Traditional room rental was broken for independent professionals
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
              Salon and studio rental models required long-term contracts, expensive deposits, and manual key
              handovers. Independent practitioners needed flexibility — the existing market had none.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Flexible access to professional spaces',
              'Easy same-day booking systems',
              'Digital access without physical key handover',
              'Short-term usage options by the day',
              'A seamless mobile-first experience',
              'No long-term financial commitments',
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
                A fully digital, fully unmanned booking platform
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  We removed every operational friction point. Professionals browse available rooms, pick
                  a date, pay via Stripe, and unlock the space from their phone — no staff, no paperwork, no
                  waiting.
                </p>
                <p>
                  The smart lock integration eliminates physical keys entirely. Access permissions activate
                  server-side at booking start time and are automatically revoked at checkout. The system
                  was designed for fully unmanned operation from day one.
                </p>
              </div>
            </div>

            {/* Feature list */}
            <div className="rounded-2xl p-7 sm:p-8 flex flex-col gap-4" style={{ background: '#f9f8f4', border: '1px solid #ede9e0' }}>
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

      {/* ── Design & UX ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#f5f6f8' }}>
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col gap-4 mb-12 max-w-[640px]">
            <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">Product &amp; UX Design</span>
            <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#0F1112]">
              Premium feel. Zero friction.
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
              The client requested a minimal, elegant UI — professional but warm, black and white branding
              with soft neutral accents. Designed to feel premium while remaining simple enough for any user.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Minimal & Elegant', body: 'Black and white base palette with soft neutral accents. No visual clutter — every screen serves a single intent.', icon: '◆' },
              { title: 'Mobile-First Journey', body: 'Designed for one-handed use. The booking flow is linear, progressive, and completable in under three minutes from cold start.', icon: '▲' },
              { title: 'Smooth Onboarding', body: 'New professionals go from sign-up to first booking without friction. Guided flows with inline validation at every step.', icon: '●' },
              { title: 'Real-Time Feedback', body: 'Availability updates in real time. Users see live room status and get instant confirmation with access details on payment.', icon: '◉' },
              { title: 'Smart Access UX', body: 'Room unlock is a single button in the app. No QR codes, no PIN entry — tap once, the smart lock responds.', icon: '■' },
              { title: 'Professional Identity', body: 'Profile management lets practitioners present themselves to venue operators, building reputation within the platform.', icon: '★' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-[#e5e7ec]">
                <span className="text-[20px] text-[#ec7161]">{item.icon}</span>
                <h3 className="text-[15px] font-semibold text-[#0F1112]">{item.title}</h3>
                <p className="text-[13px] text-[#6b7280] leading-[21px]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Architecture ───────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-6">
              <span className="text-[12px] font-semibold text-[#ec7161] uppercase tracking-[0.1em]">Technical Architecture</span>
              <h2 className="text-[28px] leading-[36px] sm:text-[36px] sm:leading-[44px] lg:text-[44px] lg:leading-[52px] font-semibold text-[#0F1112]">
                Built for real-time, built to scale
              </h2>
              <div className="flex flex-col gap-4 text-[15px] sm:text-[16px] leading-[26px] text-[#484848]">
                <p>
                  Firebase Firestore provides real-time booking synchronization across all clients. Atomic
                  transactions prevent double-bookings. Cloud Functions handle business logic — payment
                  processing, access provisioning, and notification dispatch — outside the client.
                </p>
                <p>
                  Smart lock integration lives entirely server-side. The mobile app never holds access tokens
                  directly; it requests unlock via Cloud Function which validates booking validity before
                  calling the lock API.
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {[
                  'Real-time booking synchronization via Firestore',
                  'Atomic transactions prevent double-booking',
                  'Secure payment handling via Stripe webhooks',
                  'Smart access activation tied to booking window',
                  'Push notification support at all lifecycle events',
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
      <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: '#f5f6f8' }}>
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
                <span className="text-[32px] font-semibold text-[#f0ece4] leading-none flex-shrink-0 select-none">{c.num}</span>
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
                A scalable, digital-first wellness infrastructure
              </h2>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                The platform demonstrates how modern mobile technology, real-time infrastructure, and smart
                access systems can transform the beauty and wellness rental experience into a fully digital,
                flexible, and scalable business.
              </p>
              <p className="text-[15px] sm:text-[16px] leading-[26px] text-[#9ca3af]">
                Venue operators can run multiple locations without on-site staff. Professionals get
                professional-grade workspace on demand. The architecture supports adding new venues, room
                types, and markets without engineering changes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: 'Zero', label: 'Physical key handovers' },
                { value: '100%', label: 'Digital access workflow' },
                { value: 'Daily', label: 'Booking granularity' },
                { value: 'Scalable', label: 'Multi-venue architecture' },
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

      <CTASection
        heading="Need a booking platform like this?"
        description="We build mobile-first platforms with real-time backends, payment integrations, and smart access infrastructure — fixed-price, shipped on schedule."
      />

      <BookingCTA />
    </>
  );
}
