import type { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/ui/DownloadButton';
import BookingCTA from '@/components/sections/BookingCTA';
import ScreenshotGallery from '@/components/ui/ScreenshotGallery';

const BASE_URL = 'https://xgenious.com';
const COLOR = '#ec7161';
const LIGHT_COLOR = '#fef2ef';
const GITHUB_URL = 'https://github.com/XgeniousLLC/geniousCRM/archive/refs/tags/v1.0.0.zip';
const DEMO_URL = 'https://crm-demo.xgenious.com/login';
const DOCS_URL = 'https://genious-crm-9wkn.vercel.app/';

export const metadata: Metadata = {
  title: 'Free CRM Software — Laravel 12 + React 19, Self-Hosted | Xgenious',
  description:
    'Download a free, open-source CRM built with Laravel 12 and React 19. Manage contacts, leads, deals (Kanban), tasks, and companies. Self-hosted, MIT licensed, no subscription fees.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/free-software/genius-crm` },
  openGraph: {
    title: 'Free CRM Software — Laravel 12 + React 19 | Xgenious',
    description:
      'Production-ready CRM with 12 modules. Contacts, leads, deal pipeline (Kanban), RBAC, REST API, 2FA. Free download, MIT license.',
    url: `${BASE_URL}/free-software/genius-crm`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free CRM Software — Laravel 12 + React 19',
    description: 'Download a free self-hosted CRM with 12 modules. Laravel 12 + React 19. MIT licensed.',
    images: ['/og-image.png'],
  },
  keywords: [
    'free CRM software',
    'open source CRM',
    'free CRM for small business',
    'self-hosted CRM free',
    'Laravel CRM free download',
    'open source CRM Laravel',
    'free customer relationship management software',
    'CRM software free download',
    'self hosted CRM Laravel React',
    'free sales CRM',
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Genius CRM',
  operatingSystem: 'Linux, Windows, macOS',
  applicationCategory: 'BusinessApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Free, open-source CRM built with Laravel 12 and React 19. Manage contacts, leads, deals, tasks, and companies. Self-hosted, MIT licensed.',
  url: `${BASE_URL}/free-software/genius-crm`,
  author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
  license: 'https://opensource.org/licenses/MIT',
  programmingLanguage: ['PHP', 'TypeScript'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Genius CRM really free with no limitations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. It is MIT licensed. Every feature in the repository is available at no cost — no paid tier, no feature locks, no upgrade prompts.' } },
    { '@type': 'Question', name: 'Can I use it for my business or clients?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The MIT license allows commercial use. You can deploy it for your business, white-label it for clients, and build services on top of it.' } },
    { '@type': 'Question', name: 'How does self-hosting work?', acceptedAnswer: { '@type': 'Answer', text: 'You deploy it on your own VPS, shared hosting, or Docker environment. Your data stays on your server — nothing goes through Xgenious infrastructure.' } },
    { '@type': 'Question', name: 'Does it have an API for integrations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A versioned REST API (v1) covers all core entities — contacts, leads, deals, tasks. Authentication is via Laravel Sanctum tokens.' } },
    { '@type': 'Question', name: 'What is the difference between Admin, Manager, and Sales User?', acceptedAnswer: { '@type': 'Answer', text: 'Admins manage users, roles, and settings. Managers see all records across users. Sales Users see only the records assigned to them.' } },
    { '@type': 'Question', name: 'Does it support team use?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Create multiple users, assign roles, assign leads and deals to specific users, and use the global activity feed to track team activity.' } },
  ],
};

const FEATURES = [
  {
    name: 'Contact Management',
    features: [
      'Full contact records: name, email, phone, company, tags',
      'Full-text search across name, email, and company',
      'Unlimited notes per contact via side drawer',
      'CSV import with column mapping and 5-row preview',
      'Soft delete with Trash and restore',
    ],
  },
  {
    name: 'Lead Management',
    features: [
      'Lead status workflow: New → Contacted → Qualified → Lost → Converted',
      'Follow-up dates with overdue badges (today/past due)',
      'One-click "Convert Lead to Contact" action',
      'Assign leads to any sales user',
      'CSV import with column mapping',
    ],
  },
  {
    name: 'Deal Pipeline (Kanban)',
    features: [
      'Drag-and-drop Kanban board across 5 stages',
      'Switch between Kanban board and list table view',
      'Per-deal win probability with auto-defaults per stage',
      'Deal line items with name, quantity, and unit price',
      '"Closing this week" count on the dashboard',
    ],
  },
  {
    name: 'Company Profiles',
    features: [
      'Company records: name, industry, website, phone, address',
      'Company detail page: linked contacts, deals, activity feed, tasks',
      'Link or create company inline when adding a contact',
      'Company search by name',
    ],
  },
  {
    name: 'Task Management',
    features: [
      'Tasks attached to contacts, leads, or deals',
      'Status: Pending, In Progress, Done',
      'Daily email digest for due tasks (queue-backed)',
      '"My Tasks" view for personal task list',
      'Task panel embedded on every entity detail page',
    ],
  },
  {
    name: 'Activity Feed',
    features: [
      'Auto-logged on every significant action',
      'Per-entity activity timeline on detail pages',
      'Global activity feed for admin and manager roles',
      'Timestamps in the user\'s local timezone',
    ],
  },
  {
    name: 'Role-Based Access Control',
    features: [
      'Three built-in roles: Admin, Manager, Sales User',
      'Fine-grained permissions via Spatie Laravel Permission',
      'Managers see all records; Sales Users see only assigned records',
      'Custom roles with per-module permission checkboxes',
    ],
  },
  {
    name: 'Security Features',
    features: [
      'Two-factor authentication (TOTP) with recovery codes',
      'Rate limiting on login, register, and API endpoints',
      'Active sessions list with individual session revoke',
      '"Log out all other devices" action',
    ],
  },
  {
    name: 'Reports & Analytics',
    features: [
      '6 summary stat cards on the admin dashboard',
      'Deals by stage bar chart',
      'Lead conversion rate widget',
      'Weighted pipeline value (value × probability)',
      'Export contacts and leads to CSV',
    ],
  },
  {
    name: 'REST API',
    features: [
      'Full CRUD API: contacts, leads, deals, tasks',
      'Laravel Sanctum authentication',
      'JSON:API-style resource transformers',
      'Versioned (v1) with changelog and deprecation policy',
      'Rate limiting on all endpoints',
    ],
  },
  {
    name: 'Developer Features',
    features: [
      '12 independent Laravel modules via nwidart/laravel-modules',
      'Add a feature by creating a new module — zero changes to existing code',
      'Docker + docker-compose.prod.yml for production',
      'GitHub Actions CI with PHP 8.2 and 8.3 matrix',
      'CSV import engine with chunk-based memory-safe insertion',
    ],
  },
  {
    name: 'UX Features',
    features: [
      'Full dark mode with CSS variable design tokens and localStorage persistence',
      'Per-user timezone setting',
      'Keyboard shortcuts: /, N, Escape, ?',
      'Onboarding wizard for fresh installs',
      'Soft deletes with Trash and restore on all core entities',
    ],
  },
];

const TECH_STACK = [
  { name: 'Laravel 12', role: 'PHP backend, routing, ORM, queues' },
  { name: 'React 19', role: 'Component UI with TypeScript' },
  { name: 'Inertia.js 2.x', role: 'Server-driven SPA bridge' },
  { name: 'Tailwind CSS v4', role: 'Utility-first styling with dark mode' },
  { name: 'MySQL 8+', role: 'Primary relational database' },
  { name: 'Laravel Sanctum', role: 'API token authentication' },
  { name: 'Spatie Permission', role: 'Role-based access control' },
  { name: 'nwidart/laravel-modules', role: 'Modular architecture' },
  { name: 'Docker', role: 'Dev and production container configs' },
  { name: 'GitHub Actions', role: 'CI test runner (PHP 8.2 + 8.3 matrix)' },
];

const SERVER_REQUIREMENTS = [
  { label: 'PHP', value: '8.2+' },
  { label: 'Database', value: 'MySQL 8+' },
  { label: 'Node.js', value: '20+ (for building frontend assets)' },
  { label: 'Redis', value: '6+ (queue and cache, optional)' },
  { label: 'Composer', value: '2.x' },
  { label: 'Web Server', value: 'Apache or Nginx' },
  { label: 'Docker', value: 'Optional — docker-compose included' },
];

const FAQ = [
  {
    q: 'Is Genius CRM really free with no limitations?',
    a: 'Yes. It is MIT licensed. Every feature in the repository is available at no cost — no paid tier, no feature locks, no upgrade prompts.',
  },
  {
    q: 'Can I use it for my business or clients?',
    a: 'Yes. The MIT license allows commercial use. You can deploy it for your business, white-label it for clients, and build services on top of it.',
  },
  {
    q: 'How does self-hosting work?',
    a: 'You deploy it on your own VPS, shared hosting, or Docker environment. Your data stays on your server — nothing goes through Xgenious infrastructure.',
  },
  {
    q: 'Does it have an API for integrations?',
    a: 'Yes. A versioned REST API (v1) covers all core entities — contacts, leads, deals, tasks. Authentication is via Laravel Sanctum tokens.',
  },
  {
    q: 'What is the difference between Admin, Manager, and Sales User?',
    a: 'Admins manage users, roles, and settings. Managers see all records across users. Sales Users see only the records assigned to them. Custom roles can be created with per-module permission checkboxes.',
  },
  {
    q: 'Does it support team use?',
    a: 'Yes. Create multiple users, assign roles, assign leads and deals to specific users, and use the global activity feed to track team activity.',
  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill={color} fillOpacity="0.1" />
      <path d="M6 10l3 3 5-5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GeniusCRMPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section
        className="pt-[120px] pb-16 sm:pt-[160px] sm:pb-24"
        style={{ background: 'linear-gradient(180deg, #fef2ef 0%, #f5f6ea 100%)' }}
      >
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col items-center text-center gap-6 max-w-[860px] mx-auto">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ec7161]" />
                Free & Open Source
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
                MIT License
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
                Laravel 12 · React 19
              </span>
            </div>

            <h1 className="text-[36px] leading-[44px] sm:text-[54px] sm:leading-[62px] lg:text-[66px] lg:leading-[74px] font-semibold text-[#0F1112]">
              Free CRM Software. Zero Monthly Fees. Forever.
            </h1>

            <p className="text-[#484848] text-[16px] sm:text-[18px] leading-8 max-w-[680px]">
              A full-featured, self-hosted CRM built with <strong>Laravel 12</strong> and <strong>React 19</strong>. Manage contacts, leads, deal pipelines, tasks, and companies — with role-based access, REST API, 2FA, and Docker support. No subscriptions. No vendor lock-in.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
              <DownloadButton
                productName="Genius CRM"
                productColor={COLOR}
                productLightColor={LIGHT_COLOR}
                githubUrl={GITHUB_URL}
                label="Download Free — No Account Needed"
                className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:-translate-y-0.5"
              />
              {DEMO_URL && (
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-[#E5E7EC] text-[#0F1112] font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:border-[#0F1112]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                    <polygon points="10,8 16,12 10,16" fill="currentColor" />
                  </svg>
                  Try Live Demo
                </a>
              )}
              {DOCS_URL && (
                <a
                  href={DOCS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-[#E5E7EC] text-[#0F1112] font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:border-[#0F1112]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Documentation
                </a>
              )}
            </div>

            <p className="text-[13px] text-[#6b7280]">
              MIT License · No account required · No credit card · Forever free
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-white border-b border-[#E5E7EC]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-[900px] mx-auto text-center">
            {[
              { value: '12', label: 'Modules' },
              { value: '3', label: 'User Roles' },
              { value: 'MIT', label: 'License' },
              { value: 'PHP 8.2+', label: 'Backend' },
              { value: 'React 19', label: 'Frontend' },
              { value: 'Free', label: 'Forever' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[28px] font-bold" style={{ color: COLOR }}>{s.value}</p>
                <p className="text-[12px] text-[#6b7280] font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4" style={{ background: LIGHT_COLOR, color: COLOR }}>
              Screenshots
            </span>
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              See It in Action
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[500px] mx-auto leading-7">
              Real screenshots from the application. Every screen shown is fully functional and included free.
            </p>
          </div>
          <ScreenshotGallery
            demoUrl={DEMO_URL}
            screenshots={[
              {
                src: '/images/free-software/genius-crm/dashboard.png',
                alt: 'Genius CRM — Dashboard showing KPI widgets for total contacts, active leads, open deals, open tasks, follow-ups due and closing this week',
                title: 'Dashboard',
                description: 'KPI overview — contacts, active leads, open deals, tasks and follow-ups due this week',
              },
              {
                src: '/images/free-software/genius-crm/deal-pipeline.png',
                alt: 'Genius CRM — Deal Pipeline Kanban board with columns for New Deal, Proposal Sent, Negotiation, Won and Lost stages',
                title: 'Deal Pipeline (Kanban)',
                description: 'Drag-and-drop deal cards across 5 stages with win probability and assigned rep per deal',
              },
              {
                src: '/images/free-software/genius-crm/contacts.png',
                alt: 'Genius CRM — Contact Management page showing contact list with name, email, phone, company and tags',
                title: 'Contact Management',
                description: 'Contact list with email, phone, company link and custom tags — CSV import supported',
              },
              {
                src: '/images/free-software/genius-crm/leads.png',
                alt: 'Genius CRM — Lead Tracker showing leads with source, assigned rep, status badges and follow-up date alerts',
                title: 'Lead Tracker',
                description: 'Lead status workflow with source tracking, assignment, follow-up dates and overdue alerts',
              },
              {
                src: '/images/free-software/genius-crm/company-profiles.png',
                alt: 'Genius CRM — Company Profile page showing company details, linked contacts, deals and tasks',
                title: 'Company Profiles',
                description: 'Company records linked to contacts, deals and tasks — full activity in one view',
              },
              {
                src: '/images/free-software/genius-crm/reports.png',
                alt: 'Genius CRM — Reports page showing pipeline value, won/lost value, conversion rate, deals by stage and lead pipeline charts',
                title: 'Reports & Analytics',
                description: 'Pipeline value, won/lost breakdown, conversion rate, deals by stage — CSV export included',
              },
            ]}
          />
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] mb-5 text-center">
            What is Genius CRM?
          </h2>
          <p className="text-[16px] text-[#484848] leading-8 mb-5">
            Genius CRM is a free, open-source customer relationship management system built with <strong>Laravel 12</strong>, <strong>React 19</strong>, and <strong>Inertia.js</strong>. It gives sales teams and small businesses a complete CRM without any subscription fees.
          </p>
          <p className="text-[16px] text-[#484848] leading-8 mb-5">
            The system includes <strong>12 independent modules</strong> — contacts, leads, a drag-and-drop deal pipeline (Kanban), task management, company profiles, an activity feed, role-based access control, REST API, and more. The modular architecture means you can add new features without touching existing code.
          </p>
          <p className="text-[16px] text-[#484848] leading-8">
            It is MIT licensed and self-hosted. Your sales data stays on your own server. No vendor lock-in, no per-seat pricing, no feature gating based on plan tier.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-[#f9fafb]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              12 Modules. Everything a Growing Team Needs.
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[540px] mx-auto leading-7">
              Contacts to closed deals — every step of your sales process is covered and nothing requires a paid upgrade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((mod) => (
              <div key={mod.name} className="bg-white rounded-2xl border border-[#E5E7EC] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: LIGHT_COLOR }}>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M6 10l3 3 5-5" stroke={COLOR} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="10" cy="10" r="9" stroke={COLOR} strokeWidth="1.4" />
                    </svg>
                  </div>
                  <h3 className="text-[14px] font-semibold text-[#0F1112] leading-tight">{mod.name}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[13px] text-[#484848] leading-5">
                      <CheckIcon color={COLOR} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              Built on a Rock-Solid Modern Stack
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[520px] mx-auto leading-7">
              Modular by design — add a new feature module without touching existing code.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
            {TECH_STACK.map((t) => (
              <div key={t.name} className="rounded-xl border border-[#E5E7EC] p-5 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: LIGHT_COLOR }}>
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="2" width="16" height="16" rx="3" stroke={COLOR} strokeWidth="1.5" />
                    <path d="M7 10l2 2 4-4" stroke={COLOR} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#0F1112]">{t.name}</p>
                  <p className="text-[12px] text-[#6b7280] mt-0.5 leading-4">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Server requirements */}
      <section className="py-16 sm:py-20 bg-[#0F1112]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="max-w-[820px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-[28px] sm:text-[36px] font-semibold text-white">
                Server Requirements
              </h2>
              <p className="text-[#9ca3af] text-[15px] mt-3 leading-7">
                Works on any standard VPS, cPanel shared hosting, or Docker environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVER_REQUIREMENTS.map((r) => (
                <div key={r.label} className="flex items-center justify-between rounded-xl border border-white/10 px-5 py-4">
                  <span className="text-[14px] text-[#9ca3af] font-medium">{r.label}</span>
                  <span className="text-[14px] text-white font-semibold">{r.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112] text-center mb-12">
            Who Uses This Free CRM?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[820px] mx-auto">
            {[
              {
                title: 'Solo Founders',
                desc: 'Stop tracking deals in a spreadsheet. A real CRM with contacts, leads, and a pipeline — at zero monthly cost.',
              },
              {
                title: 'Small Sales Teams',
                desc: 'Assign leads, track deals, log activity — with role-based access so everyone sees what they need.',
              },
              {
                title: 'Developers & Agencies',
                desc: 'MIT license — fork it, rebrand it, build commercial products on top. Add modules without touching existing code.',
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-[#E5E7EC] p-6">
                <h3 className="text-[15px] font-semibold text-[#0F1112] mb-2">{c.title}</h3>
                <p className="text-[13px] text-[#484848] leading-5">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] text-center mb-10">
            Genius CRM vs Paid CRM Software
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC]">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="bg-[#f9fafb] border-b border-[#E5E7EC]">
                  <th className="text-left px-5 py-4 font-semibold text-[#0F1112]"></th>
                  <th className="text-center px-5 py-4 font-semibold" style={{ color: COLOR }}>Genius CRM</th>
                  <th className="text-center px-5 py-4 font-semibold text-[#6b7280]">Typical CRM SaaS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost', 'Free forever', '$15–$50/user/month'],
                  ['Data ownership', 'Your server', "Vendor's cloud"],
                  ['Source code', 'Full (MIT)', 'None'],
                  ['Customisation', 'Unlimited', 'Limited or paid add-ons'],
                  ['Modules included', '12 (all features)', 'Often split by plan tier'],
                  ['API access', 'Full REST API included', 'Often paid plan only'],
                  ['Internet required', 'No (self-hosted)', 'Yes'],
                  ['Setup time', '~5 minutes with Docker', 'Account signup + onboarding'],
                ].map(([feature, ours, theirs]) => (
                  <tr key={feature} className="border-b border-[#E5E7EC] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-[#0F1112]">{feature}</td>
                    <td className="px-5 py-3.5 text-center">
                      <span className="inline-flex items-center gap-1.5 font-medium" style={{ color: COLOR }}>
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#ec7161" fillOpacity="0.1"/><path d="M6 10l3 3 5-5" stroke="#ec7161" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {ours}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-center text-[#6b7280]">{theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <BookingCTA />

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-[#f9fafb]">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[720px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {FAQ.map((item) => (
              <div key={item.q} className="rounded-2xl border border-[#E5E7EC] bg-white p-6">
                <h3 className="text-[15px] font-semibold text-[#0F1112] mb-2">{item.q}</h3>
                <p className="text-[14px] text-[#484848] leading-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-[#0F1112]">
        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 max-w-[640px] mx-auto">
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-white leading-tight">
            Your CRM. Your Data. Your Server. No Subscriptions.
          </h2>
          <p className="text-[#9ca3af] text-[15px] leading-7">
            Enter your email and get the download link sent straight to your inbox. MIT licensed. Forever free.
          </p>
          <DownloadButton
            productName="Genius CRM"
            productColor={COLOR}
            productLightColor={LIGHT_COLOR}
            githubUrl={GITHUB_URL}
            label="Get Free Download — No Credit Card"
            className="inline-flex items-center gap-2 bg-white text-[#0F1112] font-semibold text-[15px] rounded-full px-9 py-4 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)]"
          />
          <p className="text-[13px] text-[#6b7280]">
            Need help setting it up?{' '}
            <Link href="/contact" className="text-[#9ca3af] underline underline-offset-2 hover:text-white transition-colors">
              Contact Xgenious for installation service
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
