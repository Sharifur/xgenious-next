import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/ui/DownloadButton';
import BookingCTA from '@/components/sections/BookingCTA';
import ScreenshotGallery from '@/components/ui/ScreenshotGallery';

const BASE_URL = 'https://xgenious.com';
const COLOR = '#4f46e5';
const LIGHT_COLOR = '#eef2ff';
const GITHUB_URL = 'https://github.com/XgeniousLLC/genius-school-management-system/archive/refs/tags/v1.0.0.zip';
const LICENSE_UUID = '284881d5-2482-4827-85cd-90843ebcd5f6';
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
  title: 'Free School Management Software: 19 Modules, MIT Licensed | Xgenious',
  description:
    'Download free school management software with 19 modules. Covers free student management, attendance, fee collection, exams, payroll, library, transport and school resources management. Self-hosted, MIT licensed, no per-student fee.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/free-software/genius-school-management` },
  openGraph: {
    title: 'Free School Management Software: 19 Modules, MIT Licensed | Xgenious',
    description:
      'Free school software with 19 modules: student management, attendance, fees, exams, payroll, library, transport. Self-hosted, MIT licensed, no per-student fee.',
    url: `${BASE_URL}/free-software/genius-school-management`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free School Management Software: 19 Modules, MIT Licensed',
    description: 'Free school software: 19 modules, MIT licensed, self-hosted. Student management, fees, exams, payroll, library & more.',
    images: ['/og-image.png'],
  },
  keywords: [
    'free school software',
    'free school management software',
    'school management software free',
    'school management platforms',
    'free student management software',
    'school resources management software',
    'open source school management system',
    'free school ERP',
    'school management system',
    'school management software free download',
    'Laravel school management system',
    'free school management system',
  ],
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Genius School Management Software',
  operatingSystem: 'Linux, Windows, macOS',
  applicationCategory: 'EducationalApplication',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Free, open-source school management software built with Laravel 11 and React 18. 19 modules covering student management, attendance, fee collection, exams, payroll, library, transport, hostel, and school resources management. MIT licensed, self-hosted.',
  url: `${BASE_URL}/free-software/genius-school-management`,
  author: { '@type': 'Organization', name: 'Xgenious', url: BASE_URL },
  license: 'https://opensource.org/licenses/MIT',
  programmingLanguage: ['PHP', 'TypeScript'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Free Software', item: `${BASE_URL}/free-software` },
    { '@type': 'ListItem', position: 3, name: 'Free School Management Software', item: `${BASE_URL}/free-software/genius-school-management` },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Install Free School Management Software',
  description: 'Install Genius School Management, free, self-hosted school software, on your server in 3 steps.',
  totalTime: 'PT15M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Download the free software',
      text: 'Click "Download Free" and enter your email. You receive a direct GitHub link to the latest release ZIP. No account required.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Upload to your server and configure',
      text: 'Upload to any Apache or Nginx server (PHP 8.3+, MySQL 8+, Redis). Run composer install, copy .env, set database credentials, run php artisan migrate --seed.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Log in and add your school',
      text: 'Log in as Super Admin, create your school profile, add classes and sections, then invite staff and students. Your school management platform is live.',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is free school management software?', acceptedAnswer: { '@type': 'Answer', text: 'Free school management software is a digital platform that helps schools automate administrative tasks: student admissions, attendance, fee collection, exam management, payroll, and communication, without recurring licensing costs. Genius School Management is MIT licensed, meaning every feature is available free forever with no upgrade tiers, no per-student fee, and no expiry.' } },
    { '@type': 'Question', name: 'Is Genius School Management really free?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. It is MIT licensed. Every feature ships in the public repository with no paid tier, no feature locks, and no upgrade prompts. There is no per-student fee, no expiry, and no limit on the number of schools or students.' } },
    { '@type': 'Question', name: 'What is the best free school management platform?', acceptedAnswer: { '@type': 'Answer', text: 'Genius School Management is among the most complete free school management platforms available. It includes 19 fully built modules, supports unlimited schools on one installation, and is MIT licensed with no paid tiers. Other free options include OpenEduCat (Odoo-based) and Gibbon, but neither offers the same depth of fee management, payroll, transport, and hostel management built into a single self-hosted system.' } },
    { '@type': 'Question', name: 'Does this free school software include student management tools?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The free student management module covers multi-step admission wizards, student ID cards, bulk CSV import, class and section assignments, year-end promotion, alumni record retention, and a parent portal with a dedicated child progress view, all included at no cost.' } },
    { '@type': 'Question', name: 'What school resources can be managed with this free software?', acceptedAnswer: { '@type': 'Answer', text: 'The school resources management features include library management (book catalog, ISBN lookup, digital e-library, overdue fines), inventory and asset management (serial and condition tracking, maintenance requests, low-stock alerts), lab consumables stock registers, hostel room and warden assignment, and transport route and vehicle management. All resources are managed from the same dashboard.' } },
    { '@type': 'Question', name: 'How does this free school software compare to paid school management platforms?', acceptedAnswer: { '@type': 'Answer', text: 'Paid school management platforms typically charge $50–$300 per month and split features across pricing tiers. Genius School Management includes all 19 modules free, with no feature locks, no per-student fee, no internet dependency (self-hosted), and full source code access under MIT license. You own your data and control where it lives.' } },
    { '@type': 'Question', name: 'Can I use it commercially or white-label it?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The MIT license allows commercial use, modification, and redistribution. You can fork it, white-label it, and build services on top.' } },
    { '@type': 'Question', name: 'Does it support multiple schools?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single installation supports unlimited schools with fully isolated data per school via a school_id global scope.' } },
    { '@type': 'Question', name: 'What languages does it support?', acceptedAnswer: { '@type': 'Answer', text: 'English and Bengali are built in. The system is RTL-ready for Arabic and Urdu.' } },
    { '@type': 'Question', name: 'Do I need technical knowledge to install it?', acceptedAnswer: { '@type': 'Answer', text: 'Basic server administration knowledge is needed: you will need to configure PHP, MySQL, and a web server. The full installation guide is in the user manual. If you prefer a managed setup, Xgenious offers a professional installation service.' } },
    { '@type': 'Question', name: 'Where do I report bugs or request features?', acceptedAnswer: { '@type': 'Answer', text: 'Open an issue on the GitHub repository. Xgenious actively maintains the codebase and reviews submissions regularly.' } },
  ],
};

const MODULES = [
  {
    name: 'Authentication & Access Control',
    features: [
      '8 built-in roles: Super Admin, School Admin, Teacher, Accountant, Librarian, Driver, Parent, Student',
      'Role-based access control (RBAC) via Spatie Permissions',
      'Two-factor authentication (TOTP) for Admin and Accountant',
      'Activity log: every login, role change, and financial action recorded',
      'Session management: active sessions list, remote logout',
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
    q: 'What is free school management software?',
    a: 'Free school management software is a digital platform that automates school administrative tasks: student admissions, daily attendance, fee collection, exam scheduling, staff payroll, library management, and parent communication, without recurring licensing costs. Genius School Management is MIT licensed, meaning every feature is available free forever with no upgrade tiers, no per-student fee, and no expiry.',
  },
  {
    q: 'Is Genius School Management really free?',
    a: 'Yes. It is MIT licensed. Every feature ships in the public repository with no paid tier, no feature locks, and no upgrade prompts. There is no per-student fee, no expiry date, and no cap on the number of schools or students you can manage.',
  },
  {
    q: 'What is the best free school management platform?',
    a: 'Genius School Management is among the most complete free school management platforms available. It includes 19 fully built modules in a single self-hosted installation, covering everything from student admissions to staff payroll. Other free options include OpenEduCat (Odoo-based ERP) and Gibbon (open source), but neither offers the same combination of fee management, payroll, transport, hostel, and inventory management built into one system.',
  },
  {
    q: 'Does this free school software include student management tools?',
    a: 'Yes. The free student management module covers multi-step admission wizards, student ID card generation, bulk CSV import, class and section assignment, year-end promotion workflows, alumni record retention, and a parent portal with a dedicated child progress view, all included at no cost.',
  },
  {
    q: 'What school resources can be managed with this free software?',
    a: 'The school resources management features include: library (book catalog with ISBN lookup, digital e-library, automated overdue fines), inventory and asset management (serial tracking, condition logs, maintenance requests, low-stock alerts), lab consumables stock register, hostel room and warden assignment, and transport route and vehicle management. All resources are managed from the same unified dashboard.',
  },
  {
    q: 'How does this compare to paid school management platforms?',
    a: 'Paid school management platforms typically charge $50–$300 per month and lock features behind pricing tiers. Genius School Management includes all 19 modules free, with no feature restrictions, no per-student fee, no internet dependency (fully self-hosted), and complete source code access under MIT license. You own your data and choose where it lives.',
  },
  {
    q: 'Can I use it commercially or white-label it?',
    a: 'Yes. The MIT license allows commercial use, modification, and redistribution. You can fork it, white-label it, sell installation and customisation services on top, and build products on the codebase, all without licensing fees.',
  },
  {
    q: 'Does it support multiple schools from one installation?',
    a: 'Yes. A single installation supports unlimited schools with fully isolated data per school via a school_id global scope. This makes it suitable for school networks, government education departments, and software agencies managing multiple school clients.',
  },
  {
    q: 'What languages does it support?',
    a: 'English and Bengali are built in. The system is RTL-ready for Arabic and Urdu, making it suitable for schools in South Asia and the Middle East.',
  },
  {
    q: 'Do I need technical knowledge to install it?',
    a: 'Basic server administration knowledge is needed: you will configure PHP 8.3+, MySQL 8+, Redis, and a web server (Apache or Nginx). The full step-by-step installation guide is in the user manual. If you prefer a managed setup, Xgenious offers a professional installation service.',
  },
  {
    q: 'Where do I report bugs or request features?',
    a: 'Open an issue on the public GitHub repository. Xgenious actively maintains the codebase and reviews community submissions regularly.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
              Free School Management Software Built for Modern Schools
            </h1>

            <p className="text-[#484848] text-[16px] sm:text-[18px] leading-8 max-w-[680px]">
              A production-ready, open-source school ERP covering every aspect of school operations: student admissions, attendance, fees, exams, payroll, library, transport, and more. Self-hosted. Zero licensing fees.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 flex-wrap justify-center">
              <DownloadButton
                productName="Genius School Management"
                productColor="#ec7161"
                productLightColor="#fde8e5"
                githubUrl={GITHUB_URL}
                licenseUuid={LICENSE_UUID}
                label="Download Free: No Account Needed"
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
                <p className="text-[13px] font-bold text-[#ca8a04] uppercase tracking-wide">Demo Mode: Click a role to explore</p>
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
            What is Free School Management Software?
          </h2>
          <p className="text-[16px] text-[#484848] leading-8 mb-5">
            <strong>Free school management software</strong> is a digital platform that helps schools, colleges, and educational institutions automate administrative operations: student admissions, daily attendance, fee collection, exam scheduling, staff payroll, library management, and parent communication, without recurring licensing costs or per-student fees.
          </p>
          <p className="text-[16px] text-[#484848] leading-8 mb-5">
            Genius School Management is an <strong>open-source school management platform</strong> built with Laravel 11, React 18, and Inertia.js. It ships <strong>19 fully built modules</strong> covering every school workflow, from first-day admissions to year-end reports, within a single self-hosted installation that supports unlimited schools with fully isolated data per school.
          </p>
          <p className="text-[16px] text-[#484848] leading-8 mb-5">
            Unlike paid school management platforms that charge $50–$300 per month or lock features behind tiers, Genius School Management is <strong>MIT licensed</strong>: you self-host it on any VPS or shared hosting, own your data, fork the codebase, white-label it for clients, or build commercial products on top. No recurring fees. No vendor lock-in. No internet dependency.
          </p>
          <p className="text-[16px] text-[#484848] leading-8">
            The <strong>school resources management</strong> capabilities include a full library system, asset and inventory tracking, hostel and transport management, and lab consumables stock registers, all managed from the same unified dashboard used for student and staff administration.
          </p>
        </div>
      </section>

      {/* Why Free? What's the catch? */}
      <section className="py-14 sm:py-16 bg-[#f9fafb] border-y border-[#E5E7EC]">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
          <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#0F1112] mb-6 text-center">
            Why is this free? What&apos;s the catch?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'Open source by design',
                body: 'Xgenious built and open-sourced this software to demonstrate engineering quality and attract clients for paid premium products and professional services.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#4f46e5" strokeWidth="1.8"/>
                    <path d="M9 12l2 2 4-4" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'No hidden limits',
                body: 'No per-student fee. No module unlock. No expiry date. No usage cap. Every feature in the repository is free, checked and MIT licensed.',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="#4f46e5" strokeWidth="1.8"/>
                    <path d="M12 8v4l3 3" stroke="#4f46e5" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Paid options (optional)',
                body: 'Need help? Xgenious offers optional professional installation, customisation, and support services, but the software itself is always free.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-[#E5E7EC] p-6 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#eef2ff' }}>
                  {item.icon}
                </div>
                <p className="text-[14px] font-semibold text-[#0F1112]">{item.title}</p>
                <p className="text-[13px] text-[#484848] leading-5">{item.body}</p>
              </div>
            ))}
          </div>
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
              From first-day admissions to year-end reports, every school workflow is built in and ready to use.
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
          <ScreenshotGallery
            demoUrl={DEMO_URL}
            screenshots={[
              {
                src: '/site-images/free-software/genius-school-ms/dashboard-super-admin.png',
                alt: 'Genius School Management: Super Admin Dashboard showing platform overview with school analytics, revenue, and user growth charts',
                title: 'Super Admin Dashboard',
                description: 'Platform overview: schools, users, revenue, and subscription analytics',
              },
              {
                src: '/site-images/free-software/genius-school-ms/student-management.png',
                alt: 'Genius School Management: Student Management page showing student list with admission numbers, class/section, guardian info, status badges and admitted dates',
                title: 'Student Management',
                description: 'Admission records, class assignments, guardian contacts and status tracking',
              },
              {
                src: '/site-images/free-software/genius-school-ms/exam-results.png',
                alt: 'Genius School Management: Exam Results page showing merit list with per-subject marks, GPA, pass/fail badges and grade scale reference',
                title: 'Exam Results: Merit List',
                description: 'Per-subject marks, GPA calculation, pass/fail badges and class ranking',
              },
              {
                src: '/site-images/free-software/genius-school-ms/fee-management.png',
                alt: 'Genius School Management: Fee Management page showing payment receipts, total collected, outstanding balance, paid receipts and payment methods',
                title: 'Fee Management',
                description: 'Tuition and exam fee collection, receipt generation: cash, bKash and Nagad',
              },
              {
                src: '/site-images/free-software/genius-school-ms/library-module.png',
                alt: 'Genius School Management: Library module showing book catalog with title, author, category, ISBN, location, copies and availability tracking',
                title: 'Library Module',
                description: 'Book catalog with ISBN, shelf location, availability and overdue tracking',
              },
              {
                src: '/site-images/free-software/genius-school-ms/payroll.png',
                alt: 'Genius School Management: Payroll page showing staff salary breakdown with basic pay, allowances, deductions, net salary, days worked and payment status',
                title: 'Payroll',
                description: 'Staff salary generation with allowances, deductions and pay slip export',
              },
              {
                src: '/site-images/free-software/genius-school-ms/timetable-builder.png',
                alt: 'Genius School Management: Timetable Builder showing weekly class schedule grid with color-coded subjects, teachers and room assignments per period',
                title: 'Timetable Builder',
                description: 'Weekly schedule with color-coded subjects, teacher and room assignments',
              },
              {
                src: '/site-images/free-software/genius-school-ms/attendance.png',
                alt: 'Genius School Management: Student Attendance page showing daily class-wise attendance with present, absent, late and half-day status per student',
                title: 'Student Attendance',
                description: 'Daily class-wise attendance with present, absent, late and half-day tracking, bulk mark and save',
              },
              {
                src: '/site-images/free-software/genius-school-ms/staff-management.png',
                alt: 'Genius School Management: Staff management page showing employee list with ID, department, designation, phone, joining date and active/on-leave status',
                title: 'Staff Management',
                description: 'Employee records with department, designation, contact and status: active, on leave and resigned',
              },
            ]}
          />
        </div>
      </section>

      {/* Get started in 3 steps */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E7EC]">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112]">
              Get Your Free School Software Running in 15 Minutes
            </h2>
            <p className="text-[#484848] text-[15px] mt-3 max-w-[520px] mx-auto leading-7">
              Self-hosted on any VPS or cPanel server. No cloud subscription. Your data stays on your infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                step: '1',
                title: 'Download free',
                body: 'Click Download Free below. Enter your email and receive a direct GitHub link to the latest release. No account required. No credit card.',
              },
              {
                step: '2',
                title: 'Upload & configure',
                body: 'Upload to any Apache or Nginx server (PHP 8.3+, MySQL 8+, Redis). Run composer install, copy .env, set database credentials, run migrations.',
              },
              {
                step: '3',
                title: 'Add your school & go live',
                body: 'Log in as Super Admin, create your school profile, configure classes and sections, then invite teachers and students. Your school management platform is live.',
              },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-[#E5E7EC] p-6 relative">
                <span className="absolute top-4 right-4 text-[40px] font-bold leading-none" style={{ color: '#4f46e510' }}>{s.step}</span>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[14px] font-bold mb-4" style={{ background: COLOR }}>
                  {s.step}
                </div>
                <p className="text-[14px] font-semibold text-[#0F1112] mb-2">{s.title}</p>
                <p className="text-[13px] text-[#484848] leading-5">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={USER_MANUAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium hover:underline"
              style={{ color: COLOR }}
            >
              Read the full installation guide in the User Manual →
            </a>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0">
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112] text-center mb-12">
            Who Uses This Free School Management Software?
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
                desc: 'MIT license: fork, white-label, and resell development services on top.',
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

      {/* School Resources Management callout */}
      <section className="py-12 sm:py-14 bg-[#f9fafb] border-y border-[#E5E7EC]">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
          <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#0F1112] mb-4">
            School Resources Management: Everything in One Place
          </h2>
          <p className="text-[15px] text-[#484848] leading-7 mb-6">
            <strong>School resources management software</strong> typically requires separate tools for library, inventory, assets, hostel, and transport. Genius School Management consolidates all resource management into a single self-hosted platform:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Library & E-Library', 'Book catalog with ISBN lookup, digital PDF uploads, issue/return tracking, automated late fines'],
              ['Inventory & Assets', 'Asset serial tracking, condition logs, maintenance requests, lab consumables, low-stock alerts'],
              ['Hostel Management', 'Block/room assignment, warden assignment, hostel attendance, visitor log, hostel fee integration'],
              ['Transport Management', 'Route management with stops, vehicle assignment, driver portal, transport fee linked to fee module'],
            ].map(([title, desc]) => (
              <div key={title} className="flex items-start gap-3 rounded-xl bg-white border border-[#E5E7EC] p-4">
                <CheckIcon color={COLOR} />
                <div>
                  <p className="text-[13px] font-semibold text-[#0F1112]">{title}</p>
                  <p className="text-[12px] text-[#6b7280] mt-0.5 leading-4">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] text-center mb-10">
            Free School Software vs Paid School Management Platforms
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC]">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="bg-[#f9fafb] border-b border-[#E5E7EC]">
                  <th className="text-left px-5 py-4 font-semibold text-[#0F1112]"></th>
                  <th className="text-center px-5 py-4 font-semibold" style={{ color: COLOR }}>Genius School Management</th>
                  <th className="text-center px-5 py-4 font-semibold text-[#6b7280]">Paid SaaS Platforms</th>
                  <th className="text-center px-5 py-4 font-semibold text-[#6b7280]">Other Free Options</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost', 'Free forever (MIT)', '$50–$300/month', 'Free (limited features)'],
                  ['Data ownership', 'Your server', "Vendor's cloud", 'Varies'],
                  ['Source code', 'Full (MIT license)', 'None (closed source)', 'Open source (varies)'],
                  ['All modules included', '19, no tier split', 'Split by pricing tier', 'Fewer modules'],
                  ['Customisation', 'Unlimited (fork freely)', 'Limited or paid add-ons', 'Varies by project'],
                  ['Multi-school support', 'Yes, one install', 'Often a paid add-on', 'Rarely built in'],
                  ['Student management', 'Full: admissions to alumni', 'Full (paid)', 'Partial'],
                  ['School resources mgmt', 'Library, assets, hostel, transport', 'Partial or add-on', 'Partial'],
                  ['Internet required', 'No, fully self-hosted', 'Yes (cloud only)', 'Depends'],
                  ['Setup time', '~15 minutes', 'Account + onboarding calls', 'Varies'],
                ].map(([feature, ours, theirs, other]) => (
                  <tr key={feature} className="border-b border-[#E5E7EC] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-[#0F1112]">{feature}</td>
                    <td className="px-5 py-3.5 text-center">
                      <span className="inline-flex items-center gap-1.5 font-medium" style={{ color: COLOR }}>
                        <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#4f46e5" fillOpacity="0.1"/><path d="M6 10l3 3 5-5" stroke="#4f46e5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        {ours}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-center text-[#6b7280]">{theirs}</td>
                    <td className="px-5 py-3.5 text-center text-[#9ca3af]">{other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[12px] text-[#9ca3af] mt-4 text-center">
            Other free school management platforms: OpenEduCat (Odoo-based), Gibbon (open source). Paid platforms include eSkooly, Teachmint, and Edublooms.
          </p>
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
            Download the Free School Management System
          </h2>
          <p className="text-[#d1d5db] text-[15px] leading-7">
            No account. No credit card. MIT license. Enter your email and get the download link instantly.
          </p>
          <DownloadButton
            productName="Genius School Management"
            productColor="#ec7161"
            productLightColor="#fde8e5"
            githubUrl={GITHUB_URL}
            licenseUuid={LICENSE_UUID}
            label="Get Free Download: No Credit Card"
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
