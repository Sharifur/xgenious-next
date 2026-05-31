import type { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/ui/DownloadButton';
import BookingCTA from '@/components/sections/BookingCTA';
import ScreenshotGallery from '@/components/ui/ScreenshotGallery';

const BASE_URL = 'https://xgenious.com';
const COLOR = '#7c3aed';
const LIGHT_COLOR = '#f5f3ff';
const GITHUB_URL = 'https://github.com/XgeniousLLC/geniousHRM/archive/refs/tags/v1.0.0.zip';
const LICENSE_UUID = '833e26e6-8581-4970-873e-bbf1d7ad41c9';
const DEMO_URL = 'https://genius-hrm.xgenious.com/login';
const DOCS_URL = 'https://genious-hrm-whnd.vercel.app/';

export const metadata: Metadata = {
  title: 'Free Open Source HRM System — Laravel 13 + React 18',
  description:
    'Download a free, self-hosted HR management system built with Laravel 13 and React 18. 13 modules: employees, payroll, attendance, leave, recruitment, and performance management. MIT licensed.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/free-software/genius-hrm` },
  openGraph: {
    title: 'Free Open Source HRM System — Laravel 13 + React 18 | Xgenious',
    description:
      'Complete HR management system with 13 modules. Payroll, attendance, recruitment, performance appraisals. Free download, MIT license, self-hosted.',
    url: `${BASE_URL}/free-software/genius-hrm`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Open Source HRM System — Laravel 13 + React 18',
    description: 'Download a free HR management system with 13 modules. Laravel 13 + React 18. MIT licensed.',
    images: ['/og-image.png'],
  },
  keywords: [
    'free open source hrm system',
    'self hosted hr management software',
    'laravel hrm open source',
    'free payroll management system',
    'employee management system free download',
    'free HR software',
    'open source human resource management',
    'HRM system Laravel React',
    'free attendance management system',
    'free recruitment management system',
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Genius HRM',
  operatingSystem: 'Linux, Windows, macOS',
  applicationCategory: 'BusinessApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Free, open-source HR management system built with Laravel 13 and React 18. 13 modules covering employees, payroll, attendance, leave, recruitment, and performance.',
  url: `${BASE_URL}/free-software/genius-hrm`,
  author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
  license: 'https://opensource.org/licenses/MIT',
  programmingLanguage: ['PHP', 'TypeScript'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Genius HRM really free with no limitations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. MIT licensed. Every feature in the public repository is available at no cost — no paid tier, no feature locks, no per-user pricing.' } },
    { '@type': 'Question', name: 'Can I modify the source code?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Full source code is included. No restrictions on modification, redistribution, or commercial use.' } },
    { '@type': 'Question', name: 'Does it support multiple companies?', acceptedAnswer: { '@type': 'Answer', text: 'V1 is single-tenant. Multi-tenant support is planned for a future release.' } },
    { '@type': 'Question', name: 'Do I need coding skills to install it?', acceptedAnswer: { '@type': 'Answer', text: 'Basic command-line familiarity is needed. The install guide covers every step. Xgenious also offers a professional installation service.' } },
    { '@type': 'Question', name: 'Which regions is it built for?', acceptedAnswer: { '@type': 'Answer', text: 'The core system is global. Western (GDPR, FMLA) and Middle East (GOSI, Kafala) regional layers are planned for future releases.' } },
    { '@type': 'Question', name: 'Can I upgrade when new versions are released?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The project uses semantic versioning. A migration guide is included with each release.' } },
  ],
};

const MODULES = [
  {
    name: 'Employee Management',
    features: [
      'Complete employee profiles — personal, contact, employment details',
      'Auto-generated employee IDs (EMP-001 format)',
      'Department and position management with hierarchy',
      'Employment history auto-tracked on every field change',
      'Document upload per employee, bulk CSV import, CSV/PDF export',
    ],
  },
  {
    name: 'Payroll & Compensation',
    features: [
      'Salary components: earnings, deductions, and taxes',
      'Calculation types: fixed amount, % of basic, % of gross',
      'Salary structures with optional per-employee overrides',
      'Payroll run workflow: Draft → Approve → Paid',
      'Printable payslip PDF with full line-item breakdown',
    ],
  },
  {
    name: 'Attendance & Shift Management',
    features: [
      'Multiple shift types with flexible timing',
      'Daily attendance log (check-in / check-out)',
      'Overtime calculation',
      'Attendance reports by employee, department, date range',
      'Integration with Leave module for accurate working-day counts',
    ],
  },
  {
    name: 'Leave Management',
    features: [
      'Configurable leave types: Annual, Sick, Casual, Unpaid, and custom',
      'Leave balance tracking and accrual rules',
      'Employee leave application with manager / HR approval workflow',
      'Leave calendar view for team visibility',
      'Leave history per employee',
    ],
  },
  {
    name: 'Recruitment & ATS',
    features: [
      'Job posting management (internal and external)',
      'Candidate pipeline: Applied → Screened → Interviewed → Offered → Hired',
      'Interview scheduling and notes per candidate',
      'Offer letter generation',
      'One-click convert candidate to employee on hire',
    ],
  },
  {
    name: 'Performance Management',
    features: [
      'Performance cycles with start/end dates and status',
      'Employee goal setting with weight and progress tracking',
      'Self-assessment with per-criteria star ratings (1–5) + comments',
      'Manager review triggered automatically after self-review',
      'Final score: weighted average with trend chart per employee',
    ],
  },
  {
    name: 'Authentication & RBAC',
    features: [
      '6 built-in roles: Admin, HR Manager, Manager, Employee, Recruiter, Finance',
      '55 granular permissions across all modules',
      'Role-based access control via Spatie Laravel Permission',
      'Show/hide password toggle on login',
      '4 pre-seeded demo accounts for instant evaluation',
    ],
  },
  {
    name: 'Organisational Structure',
    features: [
      'Department hierarchy with parent/child relationships',
      'Cost center tracking per department',
      'Position levels with salary bands (min/max)',
      'Department head assignment',
      'Visual org chart ready',
    ],
  },
  {
    name: 'Training & Development',
    features: [
      'Training program creation with schedule and capacity',
      'Employee enrollment management',
      'Attendance and completion tracking',
      'Training cost tracking',
      'Reports: completion rates, cost per training, department coverage',
    ],
  },
  {
    name: 'Documents & Compliance',
    features: [
      'Company-wide document library: policies, contracts, handbooks',
      'Document categories, tagging, and expiry tracking',
      'Employee acknowledgment tracking (who has read what)',
      'HR and employee-scoped access',
    ],
  },
  {
    name: 'Reports & Analytics',
    features: [
      'Pre-built reports: headcount, attendance, leave balance, payroll, performance',
      'Filter by department, position, date range, employment status',
      'Export all reports to CSV and PDF',
      'Dashboard KPI widgets: total employees, active today, pending leaves, payroll total',
    ],
  },
  {
    name: 'System Administration',
    features: [
      'Company profile settings and multi-timezone support',
      'Email/SMTP configuration',
      'Audit log: every create/update/delete with user and timestamp',
      'Database backup management',
    ],
  },
];

const TECH_STACK = [
  { name: 'Laravel 13', role: 'PHP backend, routing, ORM, queues' },
  { name: 'React 18', role: 'Component UI with TypeScript' },
  { name: 'Inertia.js', role: 'Server-driven SPA bridge' },
  { name: 'Tailwind CSS', role: 'Utility-first styling, dark/light/system theme' },
  { name: 'MySQL 8+', role: 'Primary relational database' },
  { name: 'Spatie Permission', role: 'Role-based access control (55 permissions)' },
  { name: 'Laravel Sanctum', role: 'API authentication' },
  { name: 'shadcn/ui', role: 'Component library' },
  { name: 'Vite', role: 'Frontend build pipeline' },
];

const SERVER_REQUIREMENTS = [
  { label: 'PHP', value: '8.2+' },
  { label: 'Database', value: 'MySQL 8.0+ or MariaDB 10.4+' },
  { label: 'Composer', value: '2.x' },
  { label: 'Node.js', value: '20+ (for building assets)' },
  { label: 'Web Server', value: 'Nginx, Apache, or Caddy' },
];

const ROLES = [
  { role: 'Admin', desc: 'Full system access — all modules, settings, user management' },
  { role: 'HR Manager', desc: 'Manage employees, payroll, leave, documents, and reports' },
  { role: 'Manager', desc: 'View team attendance, approve leaves, submit performance reviews' },
  { role: 'Employee', desc: 'View own profile, apply for leave, view own payslips, set own goals' },
  { role: 'Recruiter', desc: 'Manage job postings and candidate pipeline only' },
  { role: 'Finance', desc: 'Access payroll runs, payslips, and compensation reports' },
];

const FAQ = [
  {
    q: 'Is Genius HRM really free with no limitations?',
    a: 'Yes. MIT licensed. Every feature in the public repository is available at no cost — no paid tier, no feature locks, no per-user pricing.',
  },
  {
    q: 'Can I modify the source code?',
    a: 'Yes. Full source code is included. No restrictions on modification, redistribution, or commercial use.',
  },
  {
    q: 'Does it support multiple companies?',
    a: 'V1 is single-tenant. Multi-tenant support is planned for a future release.',
  },
  {
    q: 'Do I need coding skills to install it?',
    a: 'Basic command-line familiarity is needed. The install guide covers every step. Xgenious also offers a professional installation service.',
  },
  {
    q: 'Which regions is it built for?',
    a: 'The core system is global. Western (GDPR, FMLA) and Middle East (GOSI, Kafala) regional layers are planned for future releases.',
  },
  {
    q: 'Can I upgrade when new versions are released?',
    a: 'Yes. The project uses semantic versioning. A migration guide is included with each release.',
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

export default function GeniusHRMPage() {
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
        style={{ background: 'linear-gradient(180deg, #f5f3ff 0%, #f5f6ea 100%)' }}
      >
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col items-center text-center gap-6 max-w-[860px] mx-auto">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
                Free & Open Source
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
                MIT License
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
                Laravel 13 · React 18
              </span>
            </div>

            <h1 className="text-[36px] leading-[44px] sm:text-[54px] sm:leading-[62px] lg:text-[66px] lg:leading-[74px] font-semibold text-[#0F1112]">
              Complete Open-Source HRM System — Free Forever
            </h1>

            <p className="text-[#484848] text-[16px] sm:text-[18px] leading-8 max-w-[680px]">
              Manage employees, payroll, attendance, recruitment, and performance in one self-hosted platform. Built with <strong>Laravel 13</strong> and <strong>React 18</strong>. No per-user pricing. No subscription. Your data on your server.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
              <DownloadButton
                productName="Genius HRM"
                productColor={COLOR}
                productLightColor={LIGHT_COLOR}
                githubUrl={GITHUB_URL}
                licenseUuid={LICENSE_UUID}
                label="Download Free — No Account Needed"
                buttonColor="#ec7161"
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
              MIT License · No account required · No credit card · Unlimited employees
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-white border-b border-[#E5E7EC]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-[900px] mx-auto text-center">
            {[
              { value: '13', label: 'Modules' },
              { value: '6', label: 'User Roles' },
              { value: '55', label: 'Permissions' },
              { value: 'PHP 8.2+', label: 'Backend' },
              { value: 'React 18', label: 'Frontend' },
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
          <div className="text-center mb-12">
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
                src: '/site-images/free-software/genius-hrm/dashboard.png',
                alt: 'Genius HRM — Dashboard showing KPI widgets for total employees, present today, on leave, open positions, departments, payroll net, training completion and pending approvals',
                title: 'HR Dashboard',
                description: 'Org-wide KPIs — headcount, attendance, payroll total, training completion and pending approvals',
              },
              {
                src: '/site-images/free-software/genius-hrm/employees.png',
                alt: 'Genius HRM — Employee directory showing staff list with ID, department, position, joining date and active/on-leave/inactive status',
                title: 'Employee Directory',
                description: 'Full employee records with department, position, joined date and status — searchable and filterable',
              },
              {
                src: '/site-images/free-software/genius-hrm/recruitment.png',
                alt: 'Genius HRM — Recruitment page showing job postings with department, location, type, status and applicant count',
                title: 'Recruitment',
                description: 'Job postings with published/draft/closed status, applicant count and deadline tracking',
              },
              {
                src: '/site-images/free-software/genius-hrm/training.png',
                alt: 'Genius HRM — Training and Development page showing courses with category, mode, duration, cost, sessions and status',
                title: 'Training & Development',
                description: 'Course catalog with active courses, sessions, enrollments and completions — online and in-person',
              },
              {
                src: '/site-images/free-software/genius-hrm/payroll.png',
                alt: 'Genius HRM — Payroll runs list showing monthly payroll with employee count, gross, deductions, net salary and paid/draft status',
                title: 'Payroll Runs',
                description: 'Monthly payroll with gross, deductions, net salary — draft to paid workflow with run history',
              },
              {
                src: '/site-images/free-software/genius-hrm/reports.png',
                alt: 'Genius HRM — Reports and Analytics showing headcount by department, headcount trend, employment status breakdown and payroll trend',
                title: 'Reports & Analytics',
                description: 'Org-wide insights — headcount by department, employment status, payroll trend and training completion',
              },
            ]}
          />
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] mb-5 text-center">
            What is Genius HRM?
          </h2>
          <p className="text-[16px] text-[#484848] leading-8 mb-5">
            Genius HRM is a free, open-source HR management system built with <strong>Laravel 13</strong>, <strong>React 18</strong>, and <strong>Inertia.js</strong>. It gives HR teams a complete platform to manage the full employee lifecycle — from recruitment and onboarding through payroll, attendance, and performance appraisals.
          </p>
          <p className="text-[16px] text-[#484848] leading-8 mb-5">
            The system ships with <strong>13 fully built modules</strong> and <strong>55 granular permissions</strong> across 6 roles. Unlike HR SaaS tools that charge $5–$15 per user per month, Genius HRM is self-hosted with no per-user pricing and no recurring fees.
          </p>
          <p className="text-[16px] text-[#484848] leading-8">
            It is MIT licensed. You can deploy it on any VPS or shared hosting, fork the codebase, customise it for your organisation, or build client projects on top — without any licensing costs.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 sm:py-20 bg-[#f9fafb]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              13 Modules. Full Employee Lifecycle.
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[560px] mx-auto leading-7">
              From first job posting to final payslip — every HR workflow is built in and ready to use.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MODULES.map((mod) => (
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

      {/* RBAC */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              Fine-Grained Access Control Out of the Box
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[520px] mx-auto leading-7">
              55 permissions across 6 roles. Assign roles per user. Extend with custom roles.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
            {ROLES.map((r) => (
              <div key={r.role} className="rounded-xl border border-[#E5E7EC] p-5">
                <p className="text-[13px] font-semibold mb-1" style={{ color: COLOR }}>{r.role}</p>
                <p className="text-[13px] text-[#484848] leading-5">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 sm:py-20 bg-[#f9fafb]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              Built on Modern, Battle-Tested Stack
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[520px] mx-auto leading-7">
              No Docker required. Runs on any standard PHP hosting — Laravel Herd, Forge, or shared VPS.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
            {TECH_STACK.map((t) => (
              <div key={t.name} className="rounded-xl border border-[#E5E7EC] bg-white p-5 flex items-start gap-3">
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
                Runs on any standard PHP hosting. No Docker required.
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

      <BookingCTA />

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-[#f9fafb]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
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
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/cta-bg.jpg" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-page px-4 sm:px-6 lg:px-0 flex flex-col items-center text-center gap-6 max-w-[640px] mx-auto relative z-10">
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-white leading-tight">
            Download the Free HRM System
          </h2>
          <p className="text-[#d1d5db] text-[15px] leading-7">
            No account. No credit card. No per-user fees. MIT license. Enter your email and get the download link instantly.
          </p>
          <DownloadButton
            productName="Genius HRM"
            productColor={COLOR}
            productLightColor={LIGHT_COLOR}
            githubUrl={GITHUB_URL}
            licenseUuid={LICENSE_UUID}
            label="Get Free Download — No Credit Card"
            buttonColor="#ec7161"
          />
          <p className="text-[13px] text-[#d1d5db]">
            Need help setting it up?{' '}
            <Link href="/contact" className="text-white underline underline-offset-2 hover:text-[#ec7161] transition-colors">
              Contact Xgenious for installation service
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
