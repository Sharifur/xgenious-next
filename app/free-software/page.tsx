import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = 'https://xgenious.com';

export const metadata: Metadata = {
  title: 'Free Open Source Software — School ERP & CRM',
  description:
    'Download free, open-source software built by Xgenious. Production-ready school management system and CRM — MIT licensed, self-hosted, no subscriptions.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/free-software` },
  openGraph: {
    title: 'Free Open Source Software — School ERP & CRM | Xgenious',
    description:
      'Free school management system and CRM software built with Laravel and React. MIT licensed, self-hosted, no subscription fees.',
    url: `${BASE_URL}/free-software`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  keywords: [
    'free software download',
    'open source software',
    'free school management system',
    'free CRM software',
    'Laravel open source',
    'MIT licensed software',
    'self-hosted software free',
  ],
};

const PRODUCTS = [
  {
    id: 'genius-school-management',
    href: '/free-software/genius-school-management',
    name: 'Genius School Management',
    tagline: 'Free School ERP — Laravel 11 + React 18',
    description:
      'A production-ready school management system with 19 modules. Student admissions, attendance, fee collection, exams, payroll, library, transport, and more. Multi-school support, MIT licensed.',
    badge: 'Laravel 11 · React 18 · MIT',
    stats: [
      { label: 'Modules', value: '19' },
      { label: 'Roles', value: '8+' },
      { label: 'License', value: 'MIT' },
      { label: 'Free Forever', value: '' },
    ],
    color: '#4f46e5',
    lightColor: '#eef2ff',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    highlights: [
      'Multi-school — single install, unlimited schools',
      'Student admission, attendance, fee collection',
      'Exam results and report card PDF (queued)',
      'Staff HR, payroll, leave management',
      'Library, transport, hostel, inventory',
      'Role-based access (8 roles) + 2FA',
    ],
  },
  {
    id: 'genius-hrm',
    href: '/free-software/genius-hrm',
    name: 'Genius HRM',
    tagline: 'Free Open-Source HRM — Laravel 13 + React 18',
    description:
      'A complete HR management system with 13 modules. Employee profiles, payroll, attendance, leave, recruitment pipeline, performance appraisals, and 55-permission RBAC. No per-user fees, MIT licensed.',
    badge: 'Laravel 13 · React 18 · MIT',
    stats: [
      { label: 'Modules', value: '13' },
      { label: 'Roles', value: '6' },
      { label: 'License', value: 'MIT' },
      { label: 'Free Forever', value: '' },
    ],
    color: '#7c3aed',
    lightColor: '#f5f3ff',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    highlights: [
      'Employee profiles with auto-generated IDs',
      'Payroll: Draft → Approve → Paid, printable payslips',
      'Attendance, shift management, overtime tracking',
      'Leave types, accrual rules, approval workflow',
      'Recruitment ATS — job posts to hired employee',
      'Performance cycles, goals, self + manager review',
    ],
  },
  {
    id: 'genius-crm',
    href: '/free-software/genius-crm',
    name: 'Genius CRM',
    tagline: 'Free Self-Hosted CRM — Laravel 12 + React 19',
    description:
      'A modular CRM with 12 modules. Contacts, leads, drag-and-drop deal pipeline (Kanban), tasks, company profiles, REST API, 2FA, and Docker support. No monthly fees, MIT licensed.',
    badge: 'Laravel 12 · React 19 · MIT',
    stats: [
      { label: 'Modules', value: '12' },
      { label: 'Roles', value: '3' },
      { label: 'License', value: 'MIT' },
      { label: 'Free Forever', value: '' },
    ],
    color: '#ec7161',
    lightColor: '#fef2ef',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    highlights: [
      'Contacts, leads, and deal pipeline management',
      'Drag-and-drop Kanban board (5 stages)',
      'Company profiles with linked contacts and deals',
      'Task management with daily email digest',
      'Role-based access — Admin, Manager, Sales User',
      'REST API + 2FA + Docker',
    ],
  },
  {
    id: 'genius-support',
    href: '/free-software/genius-support',
    name: 'Genius Support',
    tagline: 'Free Self-Hosted Support Portal — Laravel · Reverb WebSocket',
    description:
      'A complete support portal with ticketing, customer portal, agent dashboard, knowledge base, and email-to-ticket automation via IMAP. Real-time updates using Laravel Reverb — no Pusher required. MIT licensed.',
    badge: 'Laravel · PHP 8.2+ · MIT',
    stats: [
      { label: 'Modules', value: '6' },
      { label: 'Roles', value: '3' },
      { label: 'License', value: 'MIT' },
      { label: 'Free Forever', value: '' },
    ],
    color: '#0284c7',
    lightColor: '#e0f2fe',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    highlights: [
      'Customer portal — submit, track, and rate tickets',
      'Agent dashboard — queue, replies, internal notes, bulk actions',
      'Email-to-ticket via IMAP — any inbox becomes a support queue',
      'Knowledge base — self-service articles reduce ticket volume',
      'Real-time WebSocket updates via Laravel Reverb (no Pusher)',
      'Admin panel — departments, branding, templates, analytics',
    ],
  },
];

export default function FreeSoftwarePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-[120px] pb-14 sm:pt-[160px] sm:pb-20"
        style={{ background: 'linear-gradient(180deg, #f5f6ea 0%, #f3dacd 100%)' }}
      >
        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-5">
          <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-1.5 border border-[#E5E7EC]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec7161]" />
            <span className="text-[13px] font-medium text-[#484848]">Open Source · MIT License</span>
          </div>
          <h1 className="text-[36px] leading-[44px] sm:text-[52px] sm:leading-[60px] lg:text-[64px] lg:leading-[72px] font-semibold text-[#0F1112] max-w-[820px]">
            Free Open Source Software Built by Xgenious
          </h1>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7 max-w-[560px]">
            Production-ready software you can self-host, fork, and build on. No paid tiers. No vendor lock-in. Forever free.
          </p>
          <div className="flex items-center gap-6 mt-2 flex-wrap justify-center">
            {['MIT Licensed', 'Self-host anywhere', 'No account required', 'Actively maintained'].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-[13px] text-[#484848]">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#ec7161" fillOpacity="0.12" />
                  <path d="M6 10l3 3 5-5" stroke="#ec7161" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <p className="text-[13px] font-medium text-[#6b7280] uppercase tracking-wider mb-10 text-center">
            4 Free Products Available
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl border border-[#E5E7EC] overflow-hidden flex flex-col"
              >
                {/* Card header */}
                <div className="p-8" style={{ background: product.lightColor }}>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'white', color: product.color, boxShadow: `0 4px 12px ${product.color}20` }}
                      >
                        {product.icon}
                      </div>
                      <div>
                        <span className="inline-block text-[11px] font-semibold rounded-full bg-white/70 border border-white px-3 py-0.5 mb-1.5" style={{ color: product.color }}>
                          {product.badge}
                        </span>
                        <h2 className="text-[18px] font-semibold text-[#0F1112] leading-tight">{product.name}</h2>
                        <p className="text-[13px] text-[#484848] mt-0.5">{product.tagline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-3">
                    {product.stats.map((stat) => (
                      <div key={stat.label} className="bg-white/70 rounded-xl p-3 text-center">
                        {stat.value && <p className="text-[18px] font-bold" style={{ color: product.color }}>{stat.value}</p>}
                        <p className="text-[11px] text-[#6b7280] font-medium leading-tight mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-8 bg-white flex flex-col flex-1 gap-5">
                  <p className="text-[14px] text-[#484848] leading-6">{product.description}</p>
                  <div className="grid grid-cols-1 gap-2 flex-1">
                    {product.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-[13px] text-[#484848]">
                        <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="10" fill={product.color} fillOpacity="0.1" />
                          <path d="M6 10l3 3 5-5" stroke={product.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {h}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={product.href}
                    className="inline-flex items-center justify-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5 mt-2"
                    style={{
                      background: product.color,
                      boxShadow: `0 6px 20px ${product.color}35`,
                    }}
                  >
                    View Details &amp; Download
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open source trust */}
      <section className="py-16 sm:py-20 bg-[#0F1112]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col items-center text-center gap-6 max-w-[640px] mx-auto">
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-white leading-tight">
              Open source. Not &ldquo;open core&rdquo;.
            </h2>
            <p className="text-[#9ca3af] text-[15px] leading-7">
              Every feature ships in the public MIT repository. No paid tier, no upgrade nag, no vendor lock-in. Fork it, white-label it, build commercial products on top.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-2">
              {[
                { title: 'MIT Licensed', desc: 'Use commercially. Modify. Redistribute. No restrictions.' },
                { title: 'Self-host anywhere', desc: 'VPS, shared hosting, Docker — you own the data.' },
                { title: 'Fork and customise', desc: 'Clean modular codebase. Add features without touching existing code.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-white/10 p-5 text-left">
                  <div className="w-8 h-8 rounded-lg bg-[#ec7161]/15 flex items-center justify-center mb-3">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#ec7161" fillOpacity="0.2" />
                      <path d="M6 10l3 3 5-5" stroke="#ec7161" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-[14px]">{item.title}</p>
                  <p className="text-[#9ca3af] text-[13px] mt-1 leading-5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
