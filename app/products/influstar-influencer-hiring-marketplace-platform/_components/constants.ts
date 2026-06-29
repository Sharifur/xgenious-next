export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/products/influstar-influencer-hiring-marketplace-platform`;

export const COLOR = '#7c3aed';
export const COLOR_DARK = '#4c1d95';
export const LIGHT_COLOR = '#faf5ff';
export const DARK_BG = '#160a2e';

export const PURCHASE_URL = 'https://codecanyon.net/item/influstar-influencer-hiring-marketplace-platform/59095296';
export const DEMO_URL = 'https://influencer.bytesed.com';
export const ADMIN_DEMO_URL = 'https://influencer.bytesed.com/admin';
export const LOGIN_DEMO_URL = 'https://influencer.bytesed.com/login';
export const DOCS_URL = 'https://docs.bytesed.com/docs/influstar/';
export const PRICING_URL = '#pricing';

export const REGULAR_PRICE = 39;
export const INSTALL_PRICE = 49;
export const EXCLUSIVE_PRICE = 99;
export const EXCLUSIVE_ORIGINAL = 199;

export const INSTALL_PRODUCT_PATH = 'infustar-bundle-pack';
export const EXCLUSIVE_PRODUCT_PATH = 'infustar-exclusive-pack';

export const QUICK_LINKS = [
  { label: 'Frontend Demo', href: DEMO_URL },
  { label: 'Admin Demo', href: ADMIN_DEMO_URL },
  { label: 'Influencer / Client Login', href: LOGIN_DEMO_URL },
  { label: 'Pricing', href: PRICING_URL },
];

export const FEATURES = [
  {
    name: 'Escrow & Milestone Payments',
    desc: 'Funds are held securely in escrow when a campaign starts and released on approval — milestone by milestone. Brands pay with confidence; influencers know they will get paid.',
    icon: 'escrow',
  },
  {
    name: 'Real-Time Live Chat',
    desc: 'Brands and influencers negotiate, share files, and align on deliverables in a built-in real-time messaging system — no third-party tools, the whole conversation stays on your platform.',
    icon: 'chat',
  },
  {
    name: 'Custom Offers',
    desc: 'Beyond fixed packages, influencers send tailored custom offers with their own scope, price, and delivery time. Brands accept in one click and the order is created instantly.',
    icon: 'offer',
  },
  {
    name: 'Influencer Subscriptions',
    desc: 'A flexible subscription system lets you charge influencers a recurring fee for premium placement, more active gigs, or pro features — a second revenue stream beyond commission.',
    icon: 'subscription',
  },
  {
    name: '20+ Payment Gateways',
    desc: 'Stripe, PayPal, Razorpay, Flutterwave, Paystack, SSLCommerz and 15+ more — accept payments from brands and pay out influencers anywhere in the world.',
    icon: 'payment',
  },
  {
    name: 'Service Packages & Gigs',
    desc: 'Influencers publish service packages with tiers, pricing, delivery time, and add-ons — a Fiverr-style catalogue brands can browse, filter, and order from directly.',
    icon: 'package',
  },
  {
    name: 'Wallet & Withdrawals',
    desc: 'Built-in wallet for brands and influencers with multiple withdrawal methods. Influencers track earnings, request payouts, and see their full transaction history in one place.',
    icon: 'wallet',
  },
  {
    name: 'Identity Verification & 2FA',
    desc: 'KYC-style identity verification builds trust between brands and creators, while two-factor authentication protects every account from unauthorised access.',
    icon: 'verify',
  },
  {
    name: 'Reviews & Ratings',
    desc: 'After each completed order, brands leave reviews and star ratings. Influencer reputation is earned and visible — driving quality and repeat hires across your marketplace.',
    icon: 'review',
  },
  {
    name: 'Campaigns & Job Posting',
    desc: 'Brands post campaigns describing what they need; influencers submit proposals to apply. A two-sided flow that works whether the brand searches or the creator pitches.',
    icon: 'campaign',
  },
  {
    name: 'Analytics Dashboard',
    desc: 'Brands track campaign spend and order status; admins see platform-wide revenue, commissions, active gigs, and user growth — the numbers you need to run the business.',
    icon: 'analytics',
  },
  {
    name: 'Promoted Influencer Listings',
    desc: 'Influencers pay to promote their profile and gigs to the top of search and category pages — extra visibility for creators and a built-in advertising revenue stream for you.',
    icon: 'promote',
  },
  {
    name: 'Chat Moderation & Word Filter',
    desc: 'A built-in bad-word filter automatically blocks banned terms in live chat. Admins manage the blocklist — keeping conversations safe, professional, and on your platform.',
    icon: 'filter',
  },
  {
    name: 'User Moderation & Account Ban',
    desc: 'Admins review reports and can suspend or ban any user or influencer instantly — full control over who operates on your marketplace and zero tolerance for abuse.',
    icon: 'ban',
  },
  {
    name: 'Social Login & Fast Onboarding',
    desc: 'One-click Google and Facebook login removes signup friction so brands and influencers join in seconds — getting more creators listed and more campaigns posted from day one.',
    icon: 'globe',
  },
];

// "How Influstar Works" — the two-sided marketplace flow
export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Influencers list their services',
    desc: 'Creators sign up, verify their identity, and publish service packages — sponsored posts, reels, story shoutouts, UGC — with pricing, delivery times, and add-ons.',
  },
  {
    step: '02',
    title: 'Brands post or browse',
    desc: 'Brands either post a campaign and collect proposals, or browse the influencer catalogue and order a package directly. Real-time chat aligns the scope before money moves.',
  },
  {
    step: '03',
    title: 'Escrow secures the deal',
    desc: 'The brand pays into escrow when the order starts. Funds are locked safely — the influencer delivers knowing payment is guaranteed, the brand knows funds release only on approval.',
  },
  {
    step: '04',
    title: 'Delivery, approval & payout',
    desc: 'The influencer submits deliverables, the brand approves, and escrow releases to the influencer wallet. You earn commission on every order — plus subscription revenue on top.',
  },
];

// No-code builders (Laravel admin drag & drop)
export const BUILDERS = [
  { name: 'Page Builder', desc: 'Compose landing, about, and category pages from drag & drop widgets — no developer needed.', icon: 'page' },
  { name: 'Menu Builder', desc: 'Build header and footer navigation menus visually, with dropdowns and custom links.', icon: 'menu' },
  { name: 'Widget Builder', desc: 'Add, reorder, and configure homepage widgets — hero, categories, featured influencers, CTAs.', icon: 'widget' },
  { name: 'Email Templates', desc: 'Edit transactional and notification email templates from the admin — branding, copy, and variables.', icon: 'mail' },
];

export const LAUNCH_STEPS = [
  {
    step: '01',
    title: 'Install on Your Server',
    desc: 'Upload Influstar to any PHP 8.3+ host or VPS, run the guided installer, connect your MySQL 8 database, and point your domain. Documentation covers every step.',
  },
  {
    step: '02',
    title: 'Brand Your Marketplace',
    desc: 'Set your logo, colours, niche categories, and commission rates. Use the drag & drop builders to design your homepage and pages — no coding required.',
  },
  {
    step: '03',
    title: 'Configure Payments & Onboard',
    desc: 'Enable your preferred gateways from 20+ available, set up escrow and withdrawal rules, then invite or open registration for influencers and brands.',
  },
  {
    step: '04',
    title: 'Launch & Earn',
    desc: 'Go live and start earning commission on every booking plus recurring influencer subscriptions. No monthly platform fees — you keep the revenue.',
  },
];

export const WHO_FOR = [
  {
    tag: 'Entrepreneurs',
    title: 'Influencer Marketplace Founders',
    desc: 'Launch your own influencer hiring platform — an "Influencer.club" or "Collabstr" alternative — where brands book creators and you earn commission on every deal. You own the platform, the data, and the revenue.',
    fits: ['Creator booking marketplace', 'UGC & sponsored-content platform', 'Niche influencer network (beauty, gaming, fitness)'],
  },
  {
    tag: 'Agencies',
    title: 'Marketing & Influencer Agencies',
    desc: 'Run your roster of creators on a branded platform instead of spreadsheets and DMs. Manage campaigns, escrow payments, deliverables, and approvals in one place — and white-label it as your own.',
    fits: ['Influencer marketing agencies', 'Talent & creator management', 'UGC content agencies'],
  },
  {
    tag: 'Developers',
    title: 'Freelancers & Dev Studios',
    desc: 'Deliver a complete influencer marketplace to clients in days, not months. The Exclusive license gives you full source code modification rights and branding removal for every project.',
    fits: ['Client marketplace builds', 'Niche B2B/B2C platforms', 'White-label SaaS resale'],
  },
];

export const COMPARISON_ROWS = [
  { feature: 'Pricing model',           influstar: 'One-time from $39',     saas: '$99–$499/mo',          agency: 'Build it yourself',  custom: '$15K–$45K' },
  { feature: 'You own the source',      influstar: '✓ Full Laravel source', saas: '✗ Rented',             agency: 'N/A',                custom: '✓' },
  { feature: 'Escrow payments',         influstar: '✓ Built-in',            saas: 'Varies',               agency: 'Manual',             custom: 'Custom build' },
  { feature: 'Influencer subscriptions',influstar: '✓ Included',            saas: 'Add-on',               agency: '✗',                  custom: 'Custom build' },
  { feature: '20+ payment gateways',    influstar: '✓',                     saas: 'Stripe only (often)',  agency: '✗',                  custom: 'Custom build' },
  { feature: 'Commission on your sales',influstar: 'Zero % to us',          saas: '+ platform fees',      agency: 'N/A',                custom: 'None' },
  { feature: 'Monthly platform fees',   influstar: 'None',                  saas: '$99–$499/mo',          agency: 'N/A',                custom: 'None' },
  { feature: 'No-code page builders',   influstar: '✓ 4 builders',          saas: 'Limited',              agency: '✗',                  custom: 'Custom build' },
  { feature: 'White-label / rebrand',   influstar: '✓ Exclusive license',   saas: '✗',                    agency: 'N/A',                custom: '✓' },
  { feature: 'Time to launch',          influstar: 'Same week',             saas: 'Days',                 agency: 'Weeks',              custom: '3–6 months' },
];

export const TRUST_SIGNALS = [
  { label: 'Built on Laravel 12', detail: 'PHP 8.3+ · MySQL 8' },
  { label: 'Full Source Code', detail: 'You own and can modify it' },
  { label: 'Lifetime Updates', detail: 'Free on every license' },
  { label: '20+ Payment Gateways', detail: 'No extra integration cost' },
];

export const GATEWAYS = [
  'PayPal', 'Stripe', 'Razorpay', 'Mollie', 'Flutterwave', 'Paystack', 'PayFast', 'Midtrans',
  'Square', 'CinetPay', 'PayTabs', 'Billplz', 'ZitoPay', 'ToyyibPay', 'Pagali', 'Authorize.Net',
  'Iyzico', 'KPay', 'AwdPay', 'SSLCommerz', 'Xendit',
];

export const FAQS = [
  {
    question: 'What is Influstar?',
    answer:
      'Influstar is a self-hosted influencer hiring marketplace script built on Laravel 12. It lets you launch your own platform where brands discover, hire, and pay influencers and content creators — with built-in escrow payments, real-time chat, service packages, custom offers, an influencer subscription system, reviews, and 20+ payment gateways. You buy it once, own the full source code, and pay no monthly fees.',
  },
  {
    question: 'How does the marketplace make money?',
    answer:
      'Influstar supports two revenue models you can run at the same time. First, commission: you take a percentage of every order brands pay influencers through the platform. Second, subscriptions: you charge influencers a recurring fee for premium placement or pro features. Because you own and host the script, none of that revenue is shared with Xgenious or Bytesed — you keep 100%.',
  },
  {
    question: 'How does the escrow payment system work?',
    answer:
      'When a brand starts an order, the payment is collected and held in escrow rather than going straight to the influencer. The influencer delivers the work knowing the funds are secured, and the brand reviews the deliverables. Once the brand approves, escrow releases the payment to the influencer\'s wallet — minus your platform commission. This protects both sides and builds trust across your marketplace.',
  },
  {
    question: 'Does Influstar come with mobile apps?',
    answer:
      'Influstar is a responsive web platform — it works on any device through the browser and does not currently ship with native mobile apps. The admin panel, influencer dashboard, and brand dashboard are all fully responsive. If you need native apps later, you own the full Laravel source and REST API to build them.',
  },
  {
    question: 'What payment gateways are supported?',
    answer:
      'Influstar supports 20+ payment gateways out of the box, including Stripe, PayPal, Razorpay, Mollie, Flutterwave, Paystack, PayFast, Midtrans, Square, SSLCommerz, Xendit, Iyzico, Authorize.Net, and more. You choose which gateways to enable from the admin panel, and brands pay using whichever method suits their region.',
  },
  {
    question: 'Can influencers create their own service packages and offers?',
    answer:
      'Yes. Influencers publish service packages with tiered pricing, delivery times, and add-ons — similar to gigs on Fiverr. They can also send brands custom offers with a bespoke scope, price, and timeline for one-off collaborations. Brands browse the catalogue, order a package directly, or accept a custom offer to create an order instantly.',
  },
  {
    question: 'What are the server requirements?',
    answer:
      'Influstar requires PHP 8.3 or higher, MySQL 8, and a standard Laravel-compatible host — shared cPanel hosting, a VPS, or a cloud provider such as DigitalOcean, AWS, or Vultr. The guided installer handles database setup, environment configuration, and storage permissions. Professional installation is available as an add-on if you prefer it done for you.',
  },
  {
    question: 'Can I rebrand and white-label the platform?',
    answer:
      'Yes. The Exclusive license includes full source code modification rights and lets you remove or replace all Influstar branding, so the marketplace ships entirely as your own product. Agencies and developers building for clients should choose the Exclusive license for unrestricted commercial use and white-labelling.',
  },
  {
    question: 'What is the difference between the Regular, Extended, and Exclusive licenses?',
    answer:
      'Regular ($39 on CodeCanyon) — full Influstar script for one project, 6 months support, no installation. Regular + Installation ($49) — the full script with one-time professional installation on your server, purchased through our checkout. Exclusive ($99, introductory from $199) — everything plus full source code modification rights, branding removal, professional installation included, and 6 months priority support. Choose Exclusive if you are an agency or white-labelling for clients.',
  },
  {
    question: 'Is Influstar a good way to start an influencer marketing business in 2026?',
    answer:
      'Influencer marketing is a multi-billion-dollar industry and demand for creator-booking platforms keeps growing. Influstar gives you a production-ready marketplace on Laravel 12 — the most popular PHP framework — with escrow, subscriptions, 20+ gateways, and no-code builders, for a one-time price from $39. Instead of paying $99–$499/month for a hosted platform or $15K+ for a custom build, you own the source and keep all the revenue.',
  },
];
