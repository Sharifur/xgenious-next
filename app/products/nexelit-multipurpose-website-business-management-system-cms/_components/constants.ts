export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/products/nexelit-multipurpose-website-business-management-system-cms`;

export const COLOR = '#6366f1';
export const COLOR_DARK = '#1e1b4b';
export const LIGHT_COLOR = '#eef2ff';
export const DARK_BG = '#0f0e2a';

export const PURCHASE_URL = 'https://codecanyon.net/item/nexelit-multipurpose-website-business-management-system-cms/27936384';
export const DEMO_URL = 'https://nexelit.xgenious.com';
export const ADMIN_DEMO_URL = 'https://nexelit.xgenious.com/login';
export const DOCS_URL = 'https://docs.xgenious.com/docs/nexelit/';
export const PRICING_URL = '#pricing';

export const REGULAR_PRICE = 39;
export const INSTALL_PRICE = 49;
export const EXCLUSIVE_PRICE = 99;
export const EXCLUSIVE_ORIGINAL = 199;

export const INSTALL_PRODUCT_PATH = 'nexelit-regular-and-installation';
export const EXCLUSIVE_PRODUCT_PATH = 'nexelit-exclusive-pack';

export const QUICK_LINKS = [
  { label: 'Frontend Demo', href: DEMO_URL },
  { label: 'Admin Demo', href: ADMIN_DEMO_URL },
  { label: 'Documentation', href: DOCS_URL },
  { label: 'Pricing', href: PRICING_URL },
];

export const FEATURES = [
  {
    name: '9 Built-in Modules',
    desc: 'eCommerce, events, courses, appointments, donations, jobs, service packages, support tickets, and knowledgebase — all from one CMS install.',
    icon: 'modules',
  },
  {
    name: 'Drag & Drop Page Builder',
    desc: 'Compose any page from 9 pre-built widgets without touching code. Change layouts, add widgets, and publish in minutes from the admin panel.',
    icon: 'builder',
  },
  {
    name: 'Drag & Drop Menu Builder',
    desc: 'Build navigation with dropdowns and mega menus visually. Reorder items, add icons, and nest sub-menus — no code, no config files.',
    icon: 'menu',
  },
  {
    name: 'Drag & Drop Form Builder',
    desc: 'Create custom forms with text, email, number, select, checkbox, textarea, and file fields. Set required rules and validation from the admin panel.',
    icon: 'form',
  },
  {
    name: 'Role-Based Permissions',
    desc: 'Three admin roles (Super Admin, Admin, Editor) plus a user dashboard with order history, booking management, and support ticket tracking.',
    icon: 'roles',
  },
  {
    name: '20+ Payment Gateways',
    desc: 'PayPal, Stripe (3D Secure), Razorpay, Paytm, Paystack, Flutterwave, Mollie, SSLCommerz, Instamojo, PayU, 2Checkout, BrainTree, and more — enable only what you need.',
    icon: 'gateways',
  },
  {
    name: 'RTL + Multilingual Support',
    desc: 'Full right-to-left layout for Arabic, Hebrew, and similar scripts. Clone and edit language files from the admin. 950+ Google Fonts available.',
    icon: 'rtl',
  },
  {
    name: 'Support Ticket System',
    desc: 'Built-in ticketing with priority levels, status tracking, file attachments, and a knowledgebase for self-service. No third-party helpdesk needed.',
    icon: 'ticket',
  },
  {
    name: 'SEO & Analytics Built-in',
    desc: 'Per-page meta titles, descriptions, and OG images. Sitemap generator, Google Analytics, Disqus comments, RSS feed, and Google Captcha V3.',
    icon: 'seo',
  },
  {
    name: 'Dark Mode Admin Dashboard',
    desc: 'Modern admin panel with dark mode toggle, database backup & restore, maintenance mode, module enable/disable, and clear performance caching.',
    icon: 'dark',
  },
  {
    name: 'Security-First Architecture',
    desc: 'CSRF and XSS prevention, SQL injection protection, password hashing, force SSL toggle, and email verification — security built into the framework.',
    icon: 'security',
  },
  {
    name: 'Drag & Drop Widget Builder',
    desc: '9 pre-made footer widget areas plus raw-HTML zones for newsletter signup, image blocks, or any custom content — no code needed.',
    icon: 'widget',
  },
];

export const MODULES = [
  {
    name: 'Products & eCommerce',
    tag: 'Sell Online',
    desc: 'Physical and digital product selling with attributes, stock management, product reviews, coupon codes, tax rules, and full order management.',
    details: ['Physical & digital products', 'Attributes, variants & stock', 'Coupons, tax & order management', 'Product ratings & reviews'],
  },
  {
    name: 'Event Ticketing',
    tag: 'Events',
    desc: 'Showcase and sell tickets for events with organizer info, Google Maps venue, countdown timer, reminder emails, and category support.',
    details: ['Ticket selling & management', 'Google Maps venue integration', 'Countdown timer & reminders', 'Organizer details & categories'],
  },
  {
    name: 'Donation & Crowdfunding',
    tag: 'Fundraising',
    desc: 'Run fundraising campaigns with goal tracking, progress bars, donor lists, and full transaction history — no third-party platform needed.',
    details: ['Goal & raised amount tracking', 'Progress bar visualization', 'Donor list & transaction log', 'Campaign management'],
  },
  {
    name: 'Course Selling',
    tag: 'Education',
    desc: 'Sell online and offline courses with lesson previews, maximum applicant limits, and multi-payment gateway support for a complete e-learning setup.',
    details: ['Online & offline courses', 'Lesson preview options', 'Max applicant limits', '20+ payment gateways'],
  },
  {
    name: 'Appointment Booking',
    tag: 'Bookings',
    desc: 'Dynamic date and time selection for doctors, advocates, and service providers. Full appointment management with 20+ payment gateway integrations.',
    details: ['Dynamic date & time picker', 'Provider management', 'Appointment status tracking', '20+ gateway integrations'],
  },
  {
    name: 'Job Posting',
    tag: 'Recruitment',
    desc: 'Post jobs by category with optional application fees, CV collection via email or form, and a full applicant management system with notifications.',
    details: ['Category-based job listings', 'Application fee options', 'CV collection & review', 'Applicant notifications'],
  },
  {
    name: 'Package & Service Selling',
    tag: 'Services',
    desc: 'Offer custom service packages with quote requests, order form customization, client feedback collection, and price plan integration.',
    details: ['Service package builder', 'Quote request system', 'Custom order forms', 'Client feedback & reviews'],
  },
  {
    name: 'Support Ticket System',
    tag: 'Support',
    desc: 'Built-in customer support ticketing with priority levels, status tracking, file attachments on replies, and user notifications — no third-party helpdesk needed.',
    details: ['Priority levels & status tracking', 'File attachments in replies', 'User notifications', 'Admin ticket dashboard'],
  },
  {
    name: 'Knowledgebase',
    tag: 'Self-Service',
    desc: 'Publish structured help articles organized by category so users find answers before opening a ticket. Reduces support load and improves customer satisfaction.',
    details: ['Category-organized articles', 'Self-service customer support', 'Admin article management', 'Linked from ticket system'],
  },
];

export const BUILDERS = [
  {
    name: 'Page Builder',
    desc: 'Drag 9 pre-made widgets onto any page — gallery, FAQ, portfolio, testimonials, and more. Compose the layout you want without writing code.',
  },
  {
    name: 'Menu Builder',
    desc: 'Reorder menu items, create dropdown hierarchies, and build mega menus visually. Changes publish instantly to your live site.',
  },
  {
    name: 'Form Builder',
    desc: 'Add text, number, email, select, checkbox, textarea, and file fields. Set required rules and custom validation without touching PHP.',
  },
  {
    name: 'Widget Builder',
    desc: '9 pre-made footer widget areas plus raw-HTML zones for newsletter signup, image blocks, or any custom content you need.',
  },
];

export const LAUNCH_STEPS = [
  {
    step: '01',
    title: 'Install on Your Server',
    desc: 'Upload Nexelit to any PHP/Laravel host or VPS, run the guided installer, and connect your database. Documentation and our team walk you through it.',
  },
  {
    step: '02',
    title: 'Enable Your Business Modules',
    desc: 'Toggle on only the modules your site needs — eCommerce, events, appointments, courses, donations, jobs, service packages, support tickets, knowledgebase — or all nine. Everything else stays hidden.',
  },
  {
    step: '03',
    title: 'Design with the Builders',
    desc: 'Pick from 21 homepage variants, then drag & drop widgets to build your pages. Set fonts, colors, and menus without touching code.',
  },
  {
    step: '04',
    title: 'Connect Payments & Go Live',
    desc: 'Enable from 20+ payment gateways, generate your sitemap, and launch. Start taking orders, bookings, or donations the same day you install.',
  },
];

export const WHO_FOR = [
  {
    tag: 'Agencies',
    title: 'Agencies & Freelancers',
    desc: 'Deliver any type of client website — corporate portfolio, eCommerce shop, event site, job board, or appointment system — without rebuilding from scratch each time. One license, every business model.',
    fits: ['Corporate & portfolio sites', 'eCommerce & event platforms', 'Job boards & booking systems'],
  },
  {
    tag: 'Business Owners',
    title: 'Multi-Revenue Business Owners',
    desc: 'Run multiple income streams from a single CMS: sell products in your shop, book appointments, post jobs, and collect donations — all from one admin panel without juggling five different tools.',
    fits: ['Online shops + appointment booking', 'Events + ticket sales', 'Services + job board'],
  },
  {
    tag: 'Creators & Coaches',
    title: 'Content Creators & Coaches',
    desc: 'Launch your own platform. Sell courses, offer consultation bookings, collect donations, and post opportunities — all from your own domain. No monthly SaaS fees, no platform commission on your revenue.',
    fits: ['Online course sales', 'Consultation appointments', 'Coaching & membership sites'],
  },
];

export const GATEWAYS = [
  'PayPal', 'Stripe', 'Razorpay', 'Paytm', 'Paystack',
  'Flutterwave', 'Mollie', 'SSLCommerz', 'Instamojo',
  'PayU', '2Checkout', 'BrainTree', 'Authorize.Net', 'Square',
  'Xendit', 'Midtrans', 'CashFree', 'Mercado Pago',
  'Bank Transfer', 'Manual Payment', 'Cash on Delivery',
];

export const COMPARISON_ROWS = [
  { feature: 'Pricing model',               nexelit: 'One-time from $39',   wordpress: 'Free + paid plugins',   custom: '$15K–$40K',         squarespace: '$16–$49/mo' },
  { feature: 'You own the code',            nexelit: '✓ Full Laravel',       wordpress: '✓ PHP',                 custom: '✓',                 squarespace: '✗ Rented' },
  { feature: 'Monthly platform fees',       nexelit: 'None',                 wordpress: 'Hosting only',          custom: 'None',              squarespace: '$16–$49/mo' },
  { feature: 'Business modules built-in',   nexelit: '✓ 9 modules',          wordpress: 'Separate plugins',      custom: 'Custom build',      squarespace: '✗ eCommerce only' },
  { feature: 'No-code page builder',        nexelit: '✓ Drag & drop',        wordpress: 'Theme + Elementor',     custom: 'Custom build',      squarespace: '✓ Limited' },
  { feature: 'Support ticket system',       nexelit: '✓ Built-in',           wordpress: 'Plugin needed',         custom: 'Custom build',      squarespace: '✗' },
  { feature: 'RTL + multilingual',          nexelit: '✓ Built-in',           wordpress: 'WPML (paid plugin)',    custom: 'Custom build',      squarespace: '✗ Limited' },
  { feature: 'Payment gateways',            nexelit: '✓ 20+ built-in',       wordpress: 'WooCommerce plugins',   custom: 'Custom build',      squarespace: 'Limited' },
  { feature: 'Role-based admin',            nexelit: '✓ 3 roles + users',    wordpress: '✓ Roles (plugin)',      custom: 'Custom build',      squarespace: '✗' },
  { feature: 'Time to launch',              nexelit: 'Same day',             wordpress: 'Days',                  custom: '3–6 months',        squarespace: 'Hours' },
];

export const TRUST_SIGNALS = [
  { label: 'Built on Laravel 12', detail: 'Modern, secure PHP framework' },
  { label: 'Full Source Code', detail: 'You own and can modify it' },
  { label: 'Lifetime Updates', detail: 'Free for every license' },
  { label: 'One-Time Price', detail: 'No monthly platform fees' },
];

export const FAQS = [
  {
    question: 'What is Nexelit?',
    answer:
      'Nexelit is a multipurpose website and business CMS built on the Laravel PHP framework. It ships with 9 built-in modules (eCommerce, events, donations, courses, appointments, job posting, service packages, support tickets, and knowledgebase), 4 drag & drop builders (page, menu, form, widget), 20+ payment gateways, role-based permissions, and RTL support. You buy it once and own the complete source code — no monthly fees.',
  },
  {
    question: 'What types of businesses can I run with Nexelit?',
    answer:
      'Nexelit is designed to power any type of website. Common uses include: online stores selling physical or digital products, event ticketing platforms, crowdfunding and donation sites, online course marketplaces, appointment booking sites for doctors or consultants, job boards, service-based businesses, and customer support portals with built-in ticket management and a knowledgebase. You can enable any combination of the 9 modules from the admin panel and disable what you do not need.',
  },
  {
    question: 'Does Nexelit have a full eCommerce module?',
    answer:
      'Yes. The Products module includes physical and digital product selling, custom attributes and variants with their own pricing, stock management, product ratings and reviews, multiple filter options, coupon codes, tax rules (exclusive or inclusive), related product suggestions, and a full order management system. It supports all 20+ built-in payment gateways.',
  },
  {
    question: 'Can I sell courses or run appointment bookings?',
    answer:
      'Yes to both. The Course module supports online and offline courses with lesson preview options, maximum applicant limits, and multi-gateway payments. The Appointment module offers dynamic date and time selection, doctor and service provider management, full appointment status tracking, and 20+ payment gateway integrations. Both modules are enabled from the admin panel — no additional plugins needed.',
  },
  {
    question: 'How many payment gateways does Nexelit support?',
    answer:
      'Nexelit includes 20+ payment gateways out of the box: PayPal, Stripe (with 3D Secure), Razorpay, Paytm, Paystack, Flutterwave, Mollie, SSLCommerz, Instamojo, PayU, 2Checkout, BrainTree, Authorize.Net, Square, Xendit, Midtrans, CashFree, Mercado Pago, manual payment, bank transfer, and cash on delivery. You enable only the gateways your business uses from the admin panel. All gateways work across the eCommerce, events, courses, appointments, and job modules.',
  },
  {
    question: 'Do I need to know how to code to use Nexelit?',
    answer:
      'No coding is needed to run the site. Nexelit includes drag & drop builders for pages, menus, forms, and footer widgets, plus color settings, font selection from 950+ Google Fonts, and language editing all from the admin panel. You install it once on a server, then manage your content, design, modules, and payments visually. Full documentation and installation support are included.',
  },
  {
    question: 'Does Nexelit support multiple languages and RTL layouts?',
    answer:
      'Yes. Nexelit includes full right-to-left (RTL) layout support for Arabic, Hebrew, and other RTL scripts. You can clone and edit language files from the admin panel without touching code, switch the admin interface language independently, and choose from 950+ Google Fonts that support a wide range of scripts. RTL and language settings apply across all 9 business modules.',
  },
  {
    question: 'What is the difference between the license tiers?',
    answer:
      'There are three license options. The Regular License ($39) is available on CodeCanyon for single-site use — no installation included. The Regular + Installation ($49) adds one-time professional installation on your server. The Exclusive License ($99, regularly $199) includes full source code modification rights, branding removal, professional installation, and 6 months priority support — the right choice for agencies or developers who want to customise or white-label the platform.',
  },
  {
    question: 'Do I pay any monthly or recurring fees?',
    answer:
      'No. Nexelit is a one-time purchase and you own the full Laravel source code. There are no monthly subscription fees, no platform commissions taken on your sales or bookings, and no per-module fees. The only recurring cost is your own hosting, which starts at around $5–$20 per month depending on your provider.',
  },
  {
    question: 'What are the server requirements for Nexelit?',
    answer:
      'Nexelit requires PHP 8.1 or higher, MySQL 5.7 or higher (MySQL 8 recommended), Composer 2, and mod_rewrite enabled. It runs on any standard PHP/Laravel-compatible hosting — including shared cPanel hosting, VPS, or cloud servers like DigitalOcean, AWS, or Vultr. Minimum 512 MB RAM is recommended; 1 GB+ for production sites with active traffic.',
  },
  {
    question: 'Can I see a live demo before buying?',
    answer:
      'Yes. A full live frontend demo is available at nexelit.xgenious.com where you can browse all page types and business module examples. You can also log in to the admin panel to test the page builder, form builder, module settings, and content management yourself. Admin credentials are: super_admin / 12345678. Documentation and video tutorials are at docs.xgenious.com.',
  },
];
