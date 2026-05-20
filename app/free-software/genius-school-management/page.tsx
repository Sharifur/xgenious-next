import type { Metadata } from 'next';
import Link from 'next/link';
import DownloadButton from '@/components/ui/DownloadButton';
import BookingCTA from '@/components/sections/BookingCTA';

const BASE_URL = 'https://xgenious.com';
const COLOR = '#4f46e5';
const LIGHT_COLOR = '#eef2ff';
const GITHUB_URL = '';
const DEMO_URL = 'https://genius-school-ms.xgenious.com';
const USER_MANUAL_URL = 'https://genius-school-management-system.vercel.app/';

const DEMO_ROLES = [
  { label: 'Super Admin',  color: '#6366f1', bg: '#eef2ff', email: 'superadmin@genius-sms.test' },
  { label: 'School Admin', color: '#8b5cf6', bg: '#f5f3ff', email: 'admin@genius-sms.test'      },
  { label: 'Principal',    color: '#3b82f6', bg: '#eff6ff', email: 'principal@genius-sms.test'  },
  { label: 'Teacher',      color: '#0ea5e9', bg: '#f0f9ff', email: 'teacher@genius-sms.test'    },
  { label: 'Accountant',   color: '#10b981', bg: '#f0fdf4', email: 'accountant@genius-sms.test' },
  { label: 'Student',      color: '#f59e0b', bg: '#fffbeb', email: 'student@genius-sms.test'    },
  { label: 'Parent',       color: '#f26b4e', bg: '#fef2ef', email: 'parent@genius-sms.test'     },
];

export const metadata: Metadata = {
  title: 'Free School Management System — Laravel 11 + React 18 | Xgenious',
  description:
    'Download a free, open-source school management system built with Laravel 11 and React 18. 19 modules covering attendance, fees, exams, payroll, library, and transport. Self-hosted, MIT licensed.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/free-software/genius-school-management` },
  openGraph: {
    title: 'Free School Management System — Laravel 11 + React 18 | Xgenious',
    description:
      'Production-ready school ERP with 19 modules. Free download, MIT license, self-hosted. Built with Laravel 11 + React 18.',
    url: `${BASE_URL}/free-software/genius-school-management`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free School Management System — Laravel 11 + React 18',
    description: 'Download a free school ERP with 19 modules. Laravel 11 + React 18. MIT licensed.',
    images: ['/og-image.png'],
  },
  keywords: [
    'free school management system',
    'open source school management system',
    'free school ERP',
    'Laravel school management system',
    'school management software free download',
    'school ERP Laravel React',
    'free student management system',
    'open source school software',
    'Laravel school software',
    'school management system PHP',
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Genius School Management System',
  operatingSystem: 'Linux, Windows, macOS',
  applicationCategory: 'EducationalApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Free, open-source school management system built with Laravel 11 and React 18. Covers attendance, fee management, exams, payroll, library, transport, and more.',
  url: `${BASE_URL}/free-software/genius-school-management`,
  author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
  license: 'https://opensource.org/licenses/MIT',
  programmingLanguage: ['PHP', 'TypeScript'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Genius School Management really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. It is MIT licensed. Every feature ships in the public repository with no paid tier, no feature locks, and no upgrade prompts.' } },
    { '@type': 'Question', name: 'Can I use it commercially or white-label it?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The MIT license allows commercial use, modification, and redistribution. You can fork it, white-label it, and build services on top.' } },
    { '@type': 'Question', name: 'Does it support multiple schools?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single installation supports unlimited schools with fully isolated data per school via a school_id global scope.' } },
    { '@type': 'Question', name: 'What languages does it support?', acceptedAnswer: { '@type': 'Answer', text: 'English and Bengali are built in. The system is RTL-ready for Arabic and Urdu.' } },
    { '@type': 'Question', name: 'Do I need technical knowledge to install it?', acceptedAnswer: { '@type': 'Answer', text: 'Basic server administration knowledge is needed. If you prefer a managed setup, Xgenious offers a professional installation service.' } },
    { '@type': 'Question', name: 'Where do I report bugs or request features?', acceptedAnswer: { '@type': 'Answer', text: 'Open an issue on the GitHub repository. Xgenious actively maintains the codebase.' } },
  ],
};

const MODULES = [
  {
    name: 'Authentication & Access Control',
    features: [
      '8 built-in roles: Super Admin, School Admin, Teacher, Accountant, Librarian, Driver, Parent, Student',
      'Role-based access control (RBAC) via Spatie Permissions',
      'Two-factor authentication (TOTP) for Admin and Accountant',
      'Activity log — every login, role change, and financial action recorded',
      'Session management — active sessions list, remote logout',
    ],
  },
  {
    name: 'Student Management',
    features: [
      'Multi-step admission wizard with document upload',
      'Student ID card and bulk CSV import',
      'Class/section assignment and year-end promotion',
      'Alumni record retention after graduation',
      'Parent portal with dedicated child progress view',
    ],
  },
  {
    name: 'Attendance Management',
    features: [
      'Daily attendance with QR code scan option',
      'Monthly calendar view per student',
      'Parent SMS notification on absence',
      'Attendance report by class, date range, or student',
      'Bulk attendance entry and percentage calculation',
    ],
  },
  {
    name: 'Fee Management',
    features: [
      'Fee structure builder per class and shift',
      'Fee collection with PDF receipt generation',
      'Stripe online payment integration with webhook handler',
      'Automated late payment penalty via cron',
      'Fee concession, scholarship, and bulk posting',
    ],
  },
  {
    name: 'Examination & Results',
    features: [
      'Exam types: unit test, mid-term, final, custom',
      'Custom grading scales and GPA configuration',
      'Report card PDF generation (async, queued)',
      'Merit list, ranking, and tabulation sheet export',
      'Cumulative result history per student',
    ],
  },
  {
    name: 'Timetable & Scheduling',
    features: [
      'Drag-and-drop timetable builder with conflict detection',
      'Room and lab management',
      'Exam schedule builder and iCal export',
      'Substitution teacher assignment',
      'Timetable PDF export',
    ],
  },
  {
    name: 'Staff & HR Management',
    features: [
      'Staff registration with documents and profile photo',
      'Payroll structure builder with allowances and deductions',
      'Monthly payslip PDF generation',
      'Leave application and approval workflow',
      'Staff ID card and appointment letter PDF',
    ],
  },
  {
    name: 'Library Management',
    features: [
      'Book catalog with ISBN lookup (auto-fill metadata)',
      'Multiple copies tracking per title',
      'Book issue, return, and automated late fine',
      'E-library with digital PDF upload',
      'Overdue and fine collected reports',
    ],
  },
  {
    name: 'Transport Management',
    features: [
      'Route management with stops and vehicle assignment',
      'Driver portal showing route and passenger list',
      'Student transport assignment linked to fee module',
      'Transport fee integrated with fee management',
      'Route-wise student report',
    ],
  },
  {
    name: 'Communication',
    features: [
      'School-wide announcements targeted by role',
      'Internal messaging between teachers, admins, and parents',
      'SMS and email blast with template support',
      'Push notification support',
      'Event calendar with notifications',
    ],
  },
  {
    name: 'Hostel Management',
    features: [
      'Hostel block, room type, and student room assignment',
      'Warden assignment per block',
      'Hostel attendance separate from class attendance',
      'Visitor log and occupancy report',
      'Hostel fee linked to fee management module',
    ],
  },
  {
    name: 'Inventory & Asset Management',
    features: [
      'Asset registration with serial, value, and condition tracking',
      'Maintenance request log',
      'Stationery and lab consumables stock register',
      'Low-stock alert',
      'Asset and inventory PDF/Excel reports',
    ],
  },
];

const TECH_STACK = [
  { name: 'Laravel 11', role: 'PHP backend, routing, ORM, queues' },
  { name: 'React 18', role: 'Component UI with TypeScript' },
  { name: 'Inertia.js', role: 'Server-driven SPA bridge' },
  { name: 'Tailwind CSS', role: 'Utility-first styling with dark mode' },
  { name: 'MySQL 8 / PostgreSQL 16', role: 'Primary relational database' },
  { name: 'Laravel Sanctum', role: 'API authentication' },
  { name: 'Spatie Permissions', role: 'Role-based access control' },
  { name: 'Laravel Horizon', role: 'Queue monitoring (Redis-backed)' },
  { name: 'DomPDF / Snappy', role: 'Async PDF generation' },
  { name: 'Stripe SDK', role: 'Online fee payment processing' },
];

const SERVER_REQUIREMENTS = [
  { label: 'PHP', value: '8.3+' },
  { label: 'Database', value: 'MySQL 8+ or PostgreSQL 16+' },
  { label: 'Node.js', value: '20+ (for building frontend assets)' },
  { label: 'Redis', value: '6+ (queue and cache)' },
  { label: 'Composer', value: '2.x' },
  { label: 'Web Server', value: 'Apache or Nginx' },
  { label: 'Storage', value: '1 GB minimum' },
];

const FAQ = [
  {
    q: 'Is Genius School Management really free?',
    a: 'Yes. It is MIT licensed. Every feature ships in the public repository with no paid tier, no feature locks, and no upgrade prompts.',
  },
  {
    q: 'Can I use it commercially or white-label it?',
    a: 'Yes. The MIT license allows commercial use, modification, and redistribution. You can fork it, white-label it, and build services on top.',
  },
  {
    q: 'Does it support multiple schools?',
    a: 'Yes. A single installation supports unlimited schools with fully isolated data per school via a school_id global scope.',
  },
  {
    q: 'What languages does it support?',
    a: 'English and Bengali are built in. The system is RTL-ready for Arabic and Urdu.',
  },
  {
    q: 'Do I need technical knowledge to install it?',
    a: 'Basic server administration knowledge is needed. If you prefer a managed setup, Xgenious offers a professional installation service.',
  },
  {
    q: 'Where do I report bugs or request features?',
    a: 'Open an issue on the GitHub repository. Xgenious actively maintains the codebase.',
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

export default function GeniusSchoolManagementPage() {
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
        style={{ background: 'linear-gradient(180deg, #eef2ff 0%, #f5f6ea 100%)' }}
      >
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="flex flex-col items-center text-center gap-6 max-w-[860px] mx-auto">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]" />
                Free & Open Source
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
                MIT License
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/70 rounded-full px-4 py-1.5 border border-white text-[13px] font-medium text-[#484848]">
                Laravel 11 · React 18
              </span>
            </div>

            <h1 className="text-[36px] leading-[44px] sm:text-[54px] sm:leading-[62px] lg:text-[66px] lg:leading-[74px] font-semibold text-[#0F1112]">
              Free School Management System Built for Modern Schools
            </h1>

            <p className="text-[#484848] text-[16px] sm:text-[18px] leading-8 max-w-[680px]">
              A production-ready, open-source school ERP covering every aspect of school operations — student admissions, attendance, fees, exams, payroll, library, transport, and more. Self-hosted. Zero licensing fees.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 flex-wrap justify-center">
              <DownloadButton
                productName="Genius School Management"
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
              <a
                href={USER_MANUAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border border-[#E5E7EC] text-[#484848] font-semibold text-[15px] rounded-full px-8 py-4 transition-all hover:border-[#4f46e5] hover:text-[#4f46e5]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16v16H4zM4 9h16M9 4v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                User Manual
              </a>
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
              { value: '19', label: 'Modules' },
              { value: '8+', label: 'User Roles' },
              { value: 'MIT', label: 'License' },
              { value: 'PHP 8.3', label: 'Backend' },
              { value: 'React 18', label: 'Frontend' },
              { value: 'Free', label: 'Forever' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-[28px] font-bold text-[#4f46e5]">{s.value}</p>
                <p className="text-[12px] text-[#6b7280] font-medium mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo credentials */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E5E7EC]">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[860px] mx-auto">
          <div className="rounded-2xl border border-[#e0e7ff] bg-[#fafbff] p-6 sm:p-8">
            <div className="flex items-start gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#fef9c3' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#ca8a04" strokeWidth="1.8" />
                  <path d="M12 8v4M12 16h.01" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-[13px] font-bold text-[#ca8a04] uppercase tracking-wide">Demo Mode — Click a role to explore</p>
                <p className="text-[13px] text-[#6b7280] mt-0.5">
                  Password for all accounts: <strong className="text-[#0F1112]">password</strong>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {DEMO_ROLES.map((role) => (
                <a
                  key={role.label}
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border px-3 py-2.5 transition-all hover:shadow-sm hover:-translate-y-0.5 cursor-pointer"
                  style={{ borderColor: role.color + '40', background: role.bg }}
                >
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: role.color }} />
                  <span className="text-[13px] font-medium" style={{ color: role.color }}>{role.label}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-semibold rounded-full px-5 py-2.5 text-white transition-all hover:-translate-y-0.5"
                style={{ background: COLOR }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.8" />
                  <polygon points="10,8 16,12 10,16" fill="white" />
                </svg>
                Open Demo
              </a>
              <a
                href={USER_MANUAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4f46e5] hover:underline"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16v16H4zM4 9h16M9 4v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Read User Manual →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] mb-5 text-center">
            What is Genius School Management?
          </h2>
          <p className="text-[16px] text-[#484848] leading-8 mb-5">
            Genius School Management is a free, open-source school ERP system built with <strong>Laravel 11</strong>, <strong>React 18</strong>, and <strong>Inertia.js</strong>. It is designed for schools, colleges, and educational institutions that need a complete management platform without recurring software costs.
          </p>
          <p className="text-[16px] text-[#484848] leading-8 mb-5">
            The system covers <strong>19 fully built modules</strong> — from student admissions and daily attendance to fee collection, payroll, library management, and transport — all within a single installation that supports unlimited schools with fully isolated data.
          </p>
          <p className="text-[16px] text-[#484848] leading-8">
            It is MIT licensed, which means you can self-host it on any VPS or shared hosting, fork the codebase, white-label it for clients, or build commercial products on top — all without licensing fees.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 sm:py-20 bg-[#f9fafb]">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              19 Modules. Every School Need Covered.
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[560px] mx-auto leading-7">
              From first-day admissions to year-end reports — every school workflow is built in and ready to use.
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

      {/* Tech stack */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
              Built on a Modern, Proven Stack
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[520px] mx-auto leading-7">
              Every technology choice is production-tested, widely documented, and actively maintained.
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
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

      {/* Screenshots */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112]">
              See It in Action
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[480px] mx-auto leading-6">
              Real screenshots from the application. Every screen shown is fully functional and included free.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {['Dashboard Overview', 'Student Management', 'Fee Collection', 'Exam Results', 'Timetable Builder', 'Payroll & HR'].map((label) => (
              <div key={label} className="rounded-2xl border border-[#E5E7EC] overflow-hidden">
                <div
                  className="h-[200px] flex flex-col items-center justify-center gap-3"
                  style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: '#4f46e520' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="3" stroke="#4f46e5" strokeWidth="1.6" />
                      <path d="M3 9h18M9 21V9" stroke="#4f46e5" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-[12px] font-medium text-[#4f46e5]">Screenshot coming soon</p>
                </div>
                <div className="px-4 py-3 bg-white border-t border-[#E5E7EC]">
                  <p className="text-[13px] font-medium text-[#0F1112]">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112] text-center mb-12">
            Who Uses This School Management System?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Small Schools',
                desc: 'Replace paper registers and spreadsheets. Deploy on any shared hosting for near-zero cost.',
              },
              {
                title: 'Large Schools & Colleges',
                desc: 'Multi-section, multi-shift, multi-building. Built to handle thousands of students.',
              },
              {
                title: 'Government & NGO Schools',
                desc: 'Zero license cost. Full data ownership. You control where the data lives.',
              },
              {
                title: 'Software Agencies',
                desc: 'MIT license — fork, white-label, and resell development services on top.',
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
            Genius School Management vs Paid School Software
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC]">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="bg-[#f9fafb] border-b border-[#E5E7EC]">
                  <th className="text-left px-5 py-4 font-semibold text-[#0F1112]"></th>
                  <th className="text-center px-5 py-4 font-semibold" style={{ color: COLOR }}>Genius School Management</th>
                  <th className="text-center px-5 py-4 font-semibold text-[#6b7280]">Typical School SaaS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost', 'Free forever', '$50–$300/month'],
                  ['Data ownership', 'Your server', "Vendor's cloud"],
                  ['Source code', 'Full (MIT)', 'None'],
                  ['Customisation', 'Unlimited', 'Limited or paid'],
                  ['Modules included', '19 (all features)', 'Split by pricing tier'],
                  ['Multi-school', 'Yes — single install', 'Often paid add-on'],
                  ['Internet required', 'No (self-hosted)', 'Yes'],
                  ['Setup time', '~15 minutes', 'Account signup + onboarding'],
                ].map(([feature, ours, theirs]) => (
                  <tr key={feature} className="border-b border-[#E5E7EC] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-[#0F1112]">{feature}</td>
                    <td className="px-5 py-3.5 text-center">
                      <span className="inline-flex items-center gap-1.5 font-medium" style={{ color: COLOR }}>
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#4f46e5" fillOpacity="0.1"/><path d="M6 10l3 3 5-5" stroke="#4f46e5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
            Download the Free School Management System
          </h2>
          <p className="text-[#9ca3af] text-[15px] leading-7">
            No account. No credit card. MIT license. Enter your email and get the download link instantly.
          </p>
          <DownloadButton
            productName="Genius School Management"
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
