export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/products/multisaas-website-builder-saas`;
export const COLOR = '#eb6149';
export const LIGHT_COLOR = '#FEF3F1';
export const PURCHASE_URL = 'https://codecanyon.net/item/multisass-multitenancy-multipurpose-website-builder-sass/41892997';
export const DEMO_URL = 'https://multisaas.bytesed.com';
export const ADMIN_DEMO_URL = 'https://multisaas.bytesed.com/admin';
export const DOCS_URL = 'https://docs.xgenious.com/multisaas/';
export const PRICING_URL = '#pricing';
export const REGULAR_PRICE = 59;
export const REGULAR_ORIGINAL = 89;
export const BUNDLE_PRICE = 99;
export const BUNDLE_ORIGINAL = 199;
export const EXCLUSIVE_PRICE = 299;
export const EXCLUSIVE_ORIGINAL = 499;
export const BUNDLE_PRODUCT_PATH = 'multisaas-bundle-pack';
export const EXCLUSIVE_PRODUCT_PATH = 'multisaas-exclusive-pack';

export const QUICK_LINKS = [
  { label: 'Admin Demo', href: ADMIN_DEMO_URL },
  { label: 'Explore Demos', href: DEMO_URL },
  { label: 'Documentation', href: DOCS_URL },
  { label: 'Pricing', href: PRICING_URL },
];

export const STATS = [
  { value: '550+', label: 'Clients worldwide' },
  { value: '19+', label: 'Payment gateways' },
  { value: '15+', label: 'Multipurpose themes' },
  { value: '10+', label: 'Modules available' },
];

export const MODULES = [
  {
    name: 'Donation',
    desc: 'Let tenants run fundraising campaigns and collect donations directly through their website.',
    icon: (
      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`
    ),
  },
  {
    name: 'Event Booking',
    desc: 'Sell event tickets online. Full event management with booking calendars and payment flow.',
    icon: (
      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>`
    ),
  },
  {
    name: 'Support Ticketing',
    desc: 'Built-in helpdesk for each tenant site. Customers open tickets; tenants manage from their panel.',
    icon: (
      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`
    ),
  },
  {
    name: 'Knowledgebase',
    desc: 'Let tenants publish wikis, docs, and help centers. Each site gets its own self-service knowledge base.',
    icon: (
      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`
    ),
  },
  {
    name: 'Job Board',
    desc: 'Full job listing platform. Tenants post openings; candidates apply — all managed from their panel.',
    icon: (
      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>`
    ),
  },
  {
    name: 'eCommerce',
    desc: 'Full online store with product listings, cart, checkout, and order management for any tenant.',
    icon: (
      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`
    ),
  },
  {
    name: 'Hotel Booking',
    desc: 'Room listings, availability calendars, and reservation management. Ready for any hospitality tenant.',
    icon: (
      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`
    ),
  },
  {
    name: 'Appointment',
    desc: 'Calendar-based scheduling for service businesses. Clients book; tenants manage from their dashboard.',
    icon: (
      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`
    ),
  },
  {
    name: 'Restaurant',
    desc: 'Online menu, food ordering, and delivery management. Perfect for restaurant and food delivery tenants.',
    icon: (
      `<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 11l19-9-9 19-2-8-8-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`
    ),
  },
];

export const THEMES = [
  { name: 'Creative Agency', tag: 'Agency' },
  { name: 'Job Board', tag: 'Jobs' },
  { name: 'Barber Shop', tag: 'Services' },
  { name: 'Photography', tag: 'Portfolio' },
  { name: 'Knowledgebase', tag: 'Docs' },
  { name: 'eCommerce', tag: 'Shop' },
  { name: 'Construction', tag: 'Business' },
  { name: 'Consultancy', tag: 'B2B' },
  { name: 'Event Booking', tag: 'Events' },
  { name: 'Portfolio', tag: 'Creative' },
  { name: 'Support Ticketing', tag: 'Helpdesk' },
  { name: 'Wedding', tag: 'Lifestyle' },
  { name: 'Software Firm', tag: 'SaaS' },
];

export const INTEGRATIONS = [
  {
    name: 'Google Analytics',
    desc: 'Track tenant site traffic and conversions without touching code.',
    color: '#F4B400',
  },
  {
    name: 'Facebook Pixel',
    desc: 'Enable retargeting and ad event tracking across every tenant site.',
    color: '#1877F2',
  },
  {
    name: 'Google Tag Manager',
    desc: 'Deploy marketing scripts to any tenant site without deploying code.',
    color: '#4285F4',
  },
  {
    name: 'WhatsApp Chat',
    desc: 'Add a live chat button to any tenant site in seconds.',
    color: '#25D366',
  },
  {
    name: 'Messenger Chat',
    desc: 'Facebook Messenger support widget on any tenant site.',
    color: '#0099FF',
  },
];

export const TENANT_FLOW = [
  {
    step: '01',
    title: 'User Login',
    desc: 'Tenants get secure access with their credentials. No technical setup required — they log in and get started immediately.',
  },
  {
    step: '02',
    title: 'Select Package',
    desc: 'Tenants pick the subscription package that fits their needs. You define the packages, modules, and pricing.',
  },
  {
    step: '03',
    title: 'Set Domain',
    desc: 'Each tenant enters their own domain name. Custom branded domain or subdomain — fully supported out of the box.',
  },
  {
    step: '04',
    title: 'Website Is Ready',
    desc: 'Within minutes the site is live with seed data. Tenants start publishing and building their business right away.',
  },
];

export const WHO_FOR = [
  {
    title: 'SaaS Founders',
    desc: 'Launch your own website-builder business without building the platform from scratch. MultiSaas ships everything — billing, themes, modules, gateways, and tenant management — so you go live in days, not months.',
  },
  {
    title: 'Agencies & Studios',
    desc: 'Stop rebuilding infrastructure for every client engagement. Spin up tenant sites on a single MultiSaas installation and manage all client websites from one admin panel.',
  },
  {
    title: 'Niche SaaS Operators',
    desc: 'Target a specific vertical — hotel booking, restaurant ordering, job boards, events. Use the relevant module as your core product and build a focused, profitable SaaS around it.',
  },
];

export const FAQS = [
  {
    question: 'What is a website builder SaaS?',
    answer: 'A website builder SaaS is a multi-tenant platform where the operator sells website-creation access to their customers (tenants). Tenants log in, pick a subscription plan, choose a theme, and launch a working website — no coding required. The operator collects recurring subscription revenue. According to SaaS industry data, the global website builder market is projected to exceed $2 billion by 2027, driven by demand for no-code site creation tools.',
  },
  {
    question: 'What is MultiSaas?',
    answer: 'MultiSaas is a multi-tenancy multipurpose website builder SaaS platform from Bytesed. Buyers operate their own website-builder business: tenants sign up, pick a package, choose from 15+ themes, set a domain, and get a live website in minutes. It ships with 10+ modules, 19+ payment gateways, custom domain support, and 200+ language support — all from a one-time purchase starting at $59.',
  },
  {
    question: 'How does the tenant onboarding flow work?',
    answer: 'Tenant onboarding follows four steps: (1) Login with credentials, (2) Select a subscription package from the plans the operator defined, (3) Enter a domain name, (4) Website is live within minutes with seed data. Tenants are fully self-sufficient from day one — no manual provisioning is required from the operator for each new customer.',
  },
  {
    question: 'Can I create my own subscription plans and pricing?',
    answer: 'Yes. The operator fully controls pricing and plan structure. You choose which modules and payment gateways are included or excluded in each plan. This lets you create tiered SaaS packages — for example, a basic plan with 3 modules and a premium plan with all 10+ — and charge accordingly.',
  },
  {
    question: 'Can tenants use their own domain name?',
    answer: 'Yes. MultiSaas includes Custom Domain Support so every tenant can connect their own branded domain instead of a generic subdomain. The operator also configures their own branding domain for the platform. Each tenant site runs on an independent branded URL from a single MultiSaas installation.',
  },
  {
    question: 'What modules come with MultiSaas?',
    answer: 'MultiSaas ships with 10+ modules: Donation, Event Booking, Support Ticketing, Knowledgebase, Job Board, eCommerce, Hotel Booking, Appointment, and Restaurant. Operators choose which modules to include or exclude per price plan. For the complete current module list, refer to the official documentation at bytesed.com.',
  },
  {
    question: 'How many themes are included?',
    answer: 'MultiSaas includes 15+ multipurpose themes: Creative Agency, Job Board, Barber Shop, Photography, Knowledgebase, eCommerce, Construction, Consultancy, Event Booking, Portfolio, Support Ticketing, Wedding, and Software Firm — with additional themes marked as coming soon. Operators activate or deactivate themes per tenant and can customize theme content.',
  },
  {
    question: 'What third-party integrations are built in?',
    answer: 'MultiSaas includes a built-in integration module for Google Analytics, Facebook Pixel, Google Tag Manager, WhatsApp Chat, and Messenger Chat. Operators configure these from the admin panel — tenants get tracking and chat widgets on their sites without any technical access.',
  },
  {
    question: 'How much does MultiSaas cost?',
    answer: 'MultiSaas has three bundles: Regular License at $59 (originally $89), Extended License at $149, and Bundle Pack at $199 (originally $245). All three include the MultiSaas Web Panel plus Hotel, Restaurant, Domain Reseller, Cloud Storage, and Site Analytics plugins — with lifetime validity, lifetime updates, 6-month support, and installation support. One-time purchase, no monthly platform fees.',
  },
  {
    question: 'What is the Complete Launch Bundle?',
    answer: 'The Complete Launch Bundle ($1,299, regular value $4,097) is a done-for-you services package: professional installation with CloudPanel, five premium plugins + two premium themes installed and configured, one year of free VPS hosting (4 vCPU / 4 GB RAM / 100 GB NVMe / 32 TB traffic), and one year of maintenance including updates, security patches, backups, and support. The MultiSaas web script is purchased separately.',
  },
  {
    question: 'What is the difference between the three license tiers?',
    answer: 'All three tiers include the same components — MultiSaas Web Panel plus five plugins (Hotel, Restaurant, Domain Reseller, Cloud Storage, Site Analytics) — and the same checklist: 1 domain, lifetime validity, lifetime updates, 6-month support, personal and commercial use, and installation support. The visible difference is the tier name and price. For any commercial-use distinctions, refer to bytesed.com or Bytesed Support before purchase.',
  },
  {
    question: 'Can Bytesed build custom themes, plugins, or payment gateways?',
    answer: 'Yes. Bytesed offers Custom Theme Development, Custom Plugin Development, and Custom Payment Gateway Development for MultiSaas. Custom plugins and gateways integrate directly into your platform and can be added to any price plan. Pricing is project-specific — contact Bytesed for a quote.',
  },
];

export const REVIEWS: { name: string; rating: number; category: string; body: string }[] = [
  {
    name: 'jeho82',
    rating: 5,
    category: 'Customer Support',
    body: 'Excellent support and a well-built platform. The team helped me get everything configured and my tenants were live within hours. The custom domain feature and subscription billing work exactly as advertised. Very satisfied.',
  },
  {
    name: 'stanx974',
    rating: 5,
    category: 'Code Quality',
    body: 'The admin panel is clean and gives complete control over tenants, packages, and payment gateways. Multi-tenancy architecture is solid. I was running my first paying tenants within 48 hours of purchase.',
  },
  {
    name: 'kameniczki',
    rating: 5,
    category: 'Feature Availability',
    body: 'I have known Xgenious products for several years and quality keeps improving. MultiSaas is a complete platform for running a website-builder SaaS. The module system is flexible and the 15+ themes give tenants real variety.',
  },
  {
    name: 'OmarNasrallah',
    rating: 5,
    category: 'Customer Support',
    body: 'Very responsive support team. They resolved my configuration questions quickly and professionally. The subscription billing, custom domains, and 19+ payment gateways all work flawlessly out of the box.',
  },
  {
    name: 'noellinvillegas',
    rating: 5,
    category: 'Customer Support',
    body: 'I do not know why anyone would say support here is slow — it is the complete opposite. The team is excellent and I am super satisfied. Every question I had was answered quickly and clearly.',
  },
  {
    name: 'bulknutri',
    rating: 5,
    category: 'Feature Availability',
    body: 'The platform is already generating solid subscription revenue for us. The YouTube tutorials and documentation make setup straightforward, and on the rare occasion I hit a bug the team fixes it as soon as I reach out.',
  },
  {
    name: 'Liza-Express',
    rating: 5,
    category: 'Customer Support',
    body: 'The team was incredibly helpful with onboarding and stayed responsive the whole way through. Getting our website-builder platform live was far smoother than I expected for a product at this price.',
  },
  {
    name: 'bakitop97',
    rating: 5,
    category: 'Customer Support',
    body: 'A really complete and functional product. The support team is available and responsive whenever I need them. I recommend MultiSaas to anyone who wants to launch their own website builder platform.',
  },
  {
    name: 'zipsite',
    rating: 5,
    category: 'Customer Support',
    body: 'The script keeps improving with every update, and the support team is fantastic — they respond fast and actually solve the problem. A great foundation for running a multi-tenant SaaS business.',
  },
  {
    name: 'omnichannelvn',
    rating: 5,
    category: 'Code Quality',
    body: 'This is a great product — exactly what we needed to run a multi-tenant website builder. The codebase is clean and it just works out of the box. Really happy with it.',
  },
  {
    name: 'email2raghul',
    rating: 5,
    category: 'Customer Support',
    body: 'Customer support is good and responsive. They helped me get the platform configured without any hassle and followed up to make sure everything was working. Happy with the purchase.',
  },
  {
    name: 'abuaws',
    rating: 5,
    category: 'Design Quality',
    body: 'A great website builder and the service is exceptional. The team was patient and walked me through setup step by step. The themes are modern and my tenants build genuinely impressive sites. Highly recommend.',
  },
];

// Premium plugins are gated: NOT in Regular, included in Bundle + Exclusive.
const CORE_PLAN = [
  { label: 'MultiSaas Web Panel', ok: true },
  { label: 'Custom Domain per Tenant', ok: true },
  { label: '19+ Payment Gateways', ok: true },
  { label: '10+ Business Modules', ok: true },
  { label: '15+ Multipurpose Themes', ok: true },
];
const SUPPORT_PLAN = [
  { label: 'Lifetime License + Free Updates', ok: true },
  { label: '6 Months Support', ok: true },
  { label: 'Personal & Commercial Use', ok: true },
  { label: 'Installation Support', ok: true },
];
const PREMIUM_PLUGINS = ['Cloud Storage Plugin', 'Site Analytics Plugin', 'Domain Reseller Plugin', 'Restaurant Plugin', 'Hotel Plugin'];

export const PRICING_TIERS = [
  {
    name: 'Regular License',
    badge: null as string | null,
    price: REGULAR_PRICE,
    original: REGULAR_ORIGINAL,
    desc: 'Core platform to launch your website builder SaaS. Premium plugins not included.',
    plan: [
      ...CORE_PLAN,
      ...PREMIUM_PLUGINS.map((label) => ({ label, ok: false })),
      ...SUPPORT_PLAN,
    ],
  },
  {
    name: 'Bundle Pack',
    badge: 'BEST VALUE',
    price: BUNDLE_PRICE,
    original: BUNDLE_ORIGINAL,
    desc: 'Everything in Regular plus all 5 premium plugins. The complete platform to launch fast.',
    plan: [
      ...CORE_PLAN,
      ...PREMIUM_PLUGINS.map((label) => ({ label, ok: true })),
      ...SUPPORT_PLAN,
    ],
  },
];

// Value-stack shown inside the featured Bundle card.
export const BUNDLE_ITEMS = [
  { label: 'MultiSaas Web Platform', value: 59 },
  { label: 'Cloud Storage Plugin', value: 39 },
  { label: 'Site Analytics Plugin', value: 39 },
  { label: 'Domain Reseller Plugin', value: 39 },
  { label: 'Restaurant + Hotel Plugins', value: 49 },
];
export const BUNDLE_ITEMS_TOTAL = BUNDLE_ITEMS.reduce((s, i) => s + i.value, 0); // 225

export const EXCLUSIVE_FEATURES = [
  'Everything in Bundle Pack',
  'All 5 Premium Plugins',
  'Full Source Code Modification Rights',
  'Remove / Replace All Branding',
  'No License Key Enforcement',
  'Priority Support — 12 Months',
  'Commercial Use — Unlimited Projects',
  'Lifetime License + Free Updates',
];
