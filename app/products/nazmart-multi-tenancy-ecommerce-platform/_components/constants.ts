export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/products/nazmart-multi-tenancy-ecommerce-platform`;
export const COLOR = '#92E721';
export const LIGHT_COLOR = '#f3fde8';
export const PURCHASE_URL = 'https://codecanyon.net/item/nazmart-multitenancy-ecommerce-platform-saas/42802410';
export const DEMO_URL = 'https://nazmart.net/';
export const ADMIN_URL = 'https://nazmart.net/admin';
export const DOCS_URL = 'https://docs.xgenious.com/nazmart/';
export const MOBILE_URL = '#mobile-app';
export const POS_URL = '#pos-plugin';
export const PRICING_URL = '#pricing';
export const REGULAR_PRICE = 69;

export const QUICK_LINKS = [
  { label: 'Admin Panel', href: ADMIN_URL },
  { label: 'Mobile App', href: MOBILE_URL },
  { label: 'Pos Plugin', href: POS_URL },
  { label: 'Documentation', href: DOCS_URL },
  { label: 'Pricing', href: PRICING_URL },
];

export const STATS = [
  { value: '525+', label: 'Sales on CodeCanyon' },
  { value: '4.5/5', label: 'CodeCanyon rating' },
  { value: '80+', label: 'Verified reviews' },
  { value: '1-time', label: 'Purchase' },
];

export const FEATURES = [
  {
    title: 'Multi-Tenancy Architecture',
    desc: 'Each vendor gets a fully isolated eCommerce store with its own inventory, orders, customers, and settings — all under one SaaS platform.',
  },
  {
    title: 'SaaS Subscription System',
    desc: 'Monetise your platform with flexible subscription plans. Vendors choose a plan, pay automatically, and unlock features based on their tier.',
  },
  {
    title: 'Custom Domain per Store',
    desc: 'Each vendor can connect their own domain or subdomain. SSL-ready. Your platform runs hundreds of independent stores with a single installation.',
  },
  {
    title: 'POS Plugin',
    desc: 'Physical store owners manage walk-in sales directly from the admin panel. Barcode scanning, receipt printing, and offline order tracking built in.',
  },
  {
    title: 'Native Mobile App',
    desc: 'Flutter-based Android and iOS apps for store owners and customers. Push notifications, order tracking, and full catalogue management on mobile.',
  },
  {
    title: 'Multiple Payment Gateways',
    desc: 'Stripe, PayPal, Razorpay, Flutterwave, SSLCommerz and more. Vendors receive payouts automatically after platform commission is deducted.',
  },
  {
    title: 'Admin Super Dashboard',
    desc: 'Central control over all tenants, subscriptions, commissions, withdrawals, and disputes. Revenue analytics and store-level reporting.',
  },
  {
    title: 'Multi-Language & RTL',
    desc: 'Full translation system with RTL layout support. Launch your platform in any language without touching a line of code.',
  },
  {
    title: 'SEO & Marketing Tools',
    desc: 'Each store gets independent meta tags, sitemap, and product SEO controls. Built-in coupon engine, flash sales, and banner management.',
  },
];

export const TECH = [
  { name: 'Laravel', desc: 'PHP 8+ backend framework' },
  { name: 'Vue.js', desc: 'Reactive SPA frontend' },
  { name: 'MySQL', desc: 'Relational database' },
  { name: 'Flutter', desc: 'Cross-platform mobile app' },
  { name: 'Stripe & PayPal', desc: 'Payment processing' },
  { name: 'Redis', desc: 'Session & queue management' },
];

export const REVIEWS = [
  {
    name: 'ecommerce_pro',
    category: 'Features',
    rating: 5,
    body: 'The best multi-tenancy eCommerce script on Codecanyon. Everything works out of the box — subscriptions, domains, payments. Saved us months of development.',
  },
  {
    name: 'saas_builder',
    category: 'Customer Support',
    rating: 5,
    body: 'Exceptional support team. They went above and beyond to help us customise the platform for our region. Fast, knowledgeable, and genuinely care.',
  },
  {
    name: 'vendor_king',
    category: 'Design Quality',
    rating: 5,
    body: 'Clean modern UI, excellent codebase. Our vendors love the dashboard and our customers love the storefronts. Worth every penny.',
  },
  {
    name: 'startup_cto',
    category: 'Customer Support',
    rating: 5,
    body: 'Launched our marketplace in under two weeks. The documentation is thorough and support responds within hours. Highly recommended.',
  },
  {
    name: 'digital_bazaar',
    category: 'Features',
    rating: 5,
    body: 'Multi-tenancy done right. Every store is truly isolated. Subscriptions work flawlessly. The POS plugin was a huge bonus for our offline vendors.',
  },
];

export const PRICING_TIERS = [
  {
    name: 'Regular License',
    badge: null as string | null,
    price: 69,
    original: 89,
    desc: 'Core web panel — perfect for launching your multi-tenancy eCommerce SaaS platform.',
    plan: [
      { label: 'Nazmart Web Panel', ok: true },
      { label: 'Vendor Mobile App', ok: false },
      { label: 'Customer Mobile App', ok: false },
      { label: 'POS Plugin', ok: false },
      { label: 'Subscription Billing Module', ok: true },
      { label: 'Multi-Domain Support', ok: true },
      { label: 'Priority Support', ok: false },
    ],
  },
  {
    name: 'Bundle Pack',
    badge: 'Web + Plugins',
    price: 149,
    original: 199,
    desc: 'Web panel plus all premium plugins — the complete platform without the mobile apps.',
    plan: [
      { label: 'Nazmart Web Panel', ok: true },
      { label: 'Vendor Mobile App', ok: false },
      { label: 'Customer Mobile App', ok: false },
      { label: 'POS Plugin', ok: true },
      { label: 'Subscription Billing Module', ok: true },
      { label: 'Multi-Domain Support', ok: true },
      { label: 'Priority Support', ok: false },
    ],
  },
  {
    name: 'Complete Package',
    badge: 'Web + App + Plugins',
    price: 279,
    original: 399,
    desc: 'Everything included — web panel, mobile apps, all plugins. Launch a full eCommerce SaaS.',
    plan: [
      { label: 'Nazmart Web Panel', ok: true },
      { label: 'Vendor Mobile App', ok: true },
      { label: 'Customer Mobile App', ok: true },
      { label: 'POS Plugin', ok: true },
      { label: 'Subscription Billing Module', ok: true },
      { label: 'Multi-Domain Support', ok: true },
      { label: 'Priority Support', ok: true },
    ],
  },
];
