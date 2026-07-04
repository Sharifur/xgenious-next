export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/products/zaika-ecommerce-shopping-laravel-platform`;

// Zaika — single-vendor / fashion eCommerce. Raspberry-pink brand palette.
export const COLOR = '#d6336c';
export const COLOR_DARK = '#a61e4d';
export const LIGHT_COLOR = '#FFF0F6';
export const DARK_BG = '#2b0a17';

export const PURCHASE_URL = 'https://codecanyon.net/item/zaika-ecommerce-shopping-laravel-platform/35059777';
export const DEMO_URL = 'https://zaika.bytesed.com/land';
export const ADMIN_DEMO_URL = 'https://zaika.bytesed.com/login/admin';
export const DOCS_URL = 'https://docs.xgenious.com/docs/zaika-ecommerce-cms-laravel-ecommerce-shopping-platform/';
export const PRICING_URL = '#pricing';

// Pricing — tiered, internal checkout for Everything Bundle + Exclusive
export const REGULAR_PRICE = 39;
export const REGULAR_ORIGINAL = 59;
export const BUNDLE_PRICE = 59;
export const BUNDLE_ORIGINAL = 99;
export const EXCLUSIVE_PRICE = 149;
export const EXCLUSIVE_ORIGINAL = 299;
export const BUNDLE_PRODUCT_PATH = 'zaika-bundle-pack';
export const EXCLUSIVE_PRODUCT_PATH = 'zaika-exclusive-pack';

export const QUICK_LINKS = [
  { label: 'Frontend Demo', href: DEMO_URL },
  { label: 'Admin Demo', href: ADMIN_DEMO_URL },
  { label: 'Documentation', href: DOCS_URL },
  { label: 'Pricing', href: PRICING_URL },
];

// Commerce features (faithful to the source product)
export const FEATURES = [
  {
    name: 'Drag & Drop Page Builder',
    desc: 'No code. Drag any of 30+ pre-made widgets to compose every page of your store exactly how you want — total control over your storefront.',
    icon: 'builder',
  },
  {
    name: 'Advanced Inventory',
    desc: 'Track stock across products, variants, and attributes with low-stock and out-of-stock handling — built for any single-vendor retail catalog.',
    icon: 'inventory',
  },
  {
    name: 'Product Variants & Attributes',
    desc: 'Add unlimited custom attributes — size, color, material — each with its own price and image. Shoppers pick a variant before adding to cart.',
    icon: 'variants',
  },
  {
    name: 'Advanced Shipping',
    desc: 'Set shipping methods per zone, by country or state, with taxable and conditional rules. Full control over how shipping is calculated.',
    icon: 'shipping',
  },
  {
    name: 'Advanced Coupon',
    desc: 'Fixed-amount or percentage coupons scoped to products, categories, sub-categories, cart totals, or specific date ranges.',
    icon: 'coupon',
  },
  {
    name: 'Campaign Module',
    desc: 'Run time-boxed flash-sale campaigns with per-product stock and pricing, and surface them anywhere using page-builder widgets.',
    icon: 'campaign',
  },
  {
    name: 'Autocomplete Search',
    desc: 'After 3 characters the store suggests matching products and categories — faster discovery and a higher sales conversion rate.',
    icon: 'search',
  },
  {
    name: 'Related Product Suggestions',
    desc: 'Each product page surfaces related items shoppers may also want, increasing average cart size and overall revenue.',
    icon: 'related',
  },
  {
    name: 'Wishlist, Cart & Compare',
    desc: 'Customers save favorites, build their cart, and compare products side-by-side before they decide to buy.',
    icon: 'cart',
  },
  {
    name: 'Quick View & Quick Share',
    desc: 'Buy from a quick-view modal without leaving the listing, and share products to every major social platform in one click.',
    icon: 'quickview',
  },
  {
    name: 'Advanced Tax System',
    desc: 'Create unlimited tax types as a percentage or fixed amount, varying by country and state to match local rules.',
    icon: 'tax',
  },
  {
    name: 'Facebook / Google Login',
    desc: 'Let shoppers sign in with Facebook or Google, or create an account straight from checkout using their order details.',
    icon: 'login',
  },
];

// No-code builders — the standout selling point
export const BUILDERS = [
  {
    name: 'Page Builder',
    desc: 'Drag & drop 30+ widgets to compose any page — no developer required.',
  },
  {
    name: 'Menu Builder',
    desc: 'Reorder menu items, create dropdowns, and build mega menus visually.',
  },
  {
    name: 'Form Builder',
    desc: 'Text, number, email, select, checkbox, textarea, file fields — set required rules, no code.',
  },
  {
    name: 'Widget Builder',
    desc: '9 pre-made footer widgets plus raw-HTML areas — newsletter, image, or anything you need.',
  },
];

// Launch steps (how it works)
export const LAUNCH_STEPS = [
  {
    step: '01',
    title: 'Install on Your Server',
    desc: 'Upload Zaika to any PHP/Laravel host or VPS, run the guided installer, and connect your database. Documentation and our team walk you through it.',
  },
  {
    step: '02',
    title: 'Add Products & Categories',
    desc: 'Build your catalog with attributes, variants, and stock. Set tax and shipping zones once and the store applies them automatically.',
  },
  {
    step: '03',
    title: 'Design With the Page Builder',
    desc: 'Drag & drop widgets to brand your storefront and shop pages. Change colors, menus, and footer without touching code.',
  },
  {
    step: '04',
    title: 'Connect Gateways & Go Live',
    desc: 'Enable from 15+ payment gateways, generate your sitemap, and launch. Start taking orders the same day you install.',
  },
];

// Who it's for — single-vendor positioning (vs multi-vendor marketplace)
export const WHO_FOR = [
  {
    tag: 'One Brand, One Store',
    title: 'Fashion & Retail Brands',
    desc: 'Zaika is a single-vendor store — you are the only seller, you keep 100% of every sale. Variants for size and color, flash-sale campaigns, and a polished fashion storefront out of the box.',
    fits: ['Clothing & apparel', 'Shoes & accessories', 'Jewellery & lifestyle'],
  },
  {
    tag: 'Any Catalog',
    title: 'D2C & Niche Sellers',
    desc: 'Not fashion-only. Unlimited custom attributes and product variants adapt the store to whatever you sell — electronics, home goods, digital, or affiliate products.',
    fits: ['Electronics & gadgets', 'Home & living', 'Digital & downloadable goods'],
  },
  {
    tag: 'Build for Clients',
    title: 'Agencies & Founders',
    desc: 'Ship a polished, SEO-ready single-store shop in days, not months. One-time license, full Laravel source code, and zero monthly platform fees or sales commission eating your margin.',
    fits: ['Client eCommerce projects', 'MVPs & startups', 'White-label resale'],
  },
];

// 15+ payment gateways (faithful list)
export const GATEWAYS = [
  'PayPal', 'Stripe', 'Razorpay', 'Paytm', 'Mollie', 'Flutterwave',
  'Paystack', 'Cashfree', 'Instamojo', 'Midtrans', 'Mercado Pago',
  'PayFast', 'CinetPay', 'Bank Transfer', 'Check Payment',
];

// SEO/store capabilities band
export const STORE_TOOLS = [
  { name: 'Advanced SEO', desc: 'Per-page and per-product meta title, description, and OG image. Canonical URLs included.' },
  { name: 'Sitemap Generation', desc: 'Generate an XML sitemap from the admin panel to boost crawlability and SEO score.' },
  { name: 'RTL + Language Control', desc: 'Run the store in one default language and change it from the admin panel — with full right-to-left (RTL) layout support.' },
  { name: 'Newsletter Module', desc: 'Collect verified subscribers and email them from the admin — single send or to all subscribers.' },
  { name: 'Color & Typography', desc: 'Restyle the entire storefront and pick from 700+ Google fonts in the admin panel — no CSS editing.' },
  { name: 'GDPR + Live Chat', desc: 'GDPR cookie consent, Google reCAPTCHA v3, live chat, and Google Analytics built in.' },
];

export const FAQS = [
  {
    question: 'What is single-vendor eCommerce?',
    answer:
      'Single-vendor eCommerce is an online store run by one seller, where you own the catalog, the checkout, and 100% of every sale — unlike a multi-vendor marketplace that hosts many independent sellers and splits commission. Zaika is a single-vendor platform: one admin, one storefront, no commission shared with a marketplace operator.',
  },
  {
    question: 'What is Zaika?',
    answer:
      'Zaika is a single-vendor eCommerce CMS and shopping platform built on the Laravel PHP framework. It ships with a no-code drag & drop page builder, 30+ widgets, 15+ payment gateways, and advanced inventory, shipping, tax, coupon, and campaign systems. You buy it once and own the full source code — no monthly fees.',
  },
  {
    question: 'How is Zaika different from a multi-vendor marketplace?',
    answer:
      'Zaika is built for a single store owner, not a marketplace of sellers. There are no vendor dashboards, vendor payouts, or commission splits — you are the only seller and you keep every dollar after payment-gateway fees. If you need many independent sellers on one platform, see our multi-vendor product SafeCart instead; for one brand selling its own products, Zaika is the right fit.',
  },
  {
    question: 'Do I need to know how to code to use it?',
    answer:
      'No coding is required to run the store. Zaika includes drag & drop builders for pages, menus, forms, and widgets, plus color and typography settings from the admin panel. You install it once on a server, then manage products, design, shipping, and payments visually. Full documentation and installation support are included.',
  },
  {
    question: 'What payment gateways does Zaika support?',
    answer:
      'Zaika supports 15+ payment gateways including PayPal, Stripe, Razorpay, Paytm, Mollie, Flutterwave, Paystack, Cashfree, Instamojo, Midtrans, Mercado Pago, PayFast, and CinetPay, plus Bank Transfer and Check Payment. You enable only the gateways you need from the admin panel before going live.',
  },
  {
    question: 'Can I customize the storefront design?',
    answer:
      'Yes — completely. Zaika ships with ready-made grid and list shop layouts, and the drag & drop page builder with 30+ widgets lets you rearrange or build entirely new pages without writing code. Restyle colors, menus, and the footer from the admin panel and pick from 700+ Google fonts.',
  },
  {
    question: 'Is Zaika good for SEO?',
    answer:
      'Yes. Zaika is built SEO-friendly with per-page and per-product meta titles, descriptions, and OG images, canonical URLs, and one-click XML sitemap generation from the admin panel. It runs in a single default language that you set from the admin panel, with full RTL (right-to-left) layout support for languages like Arabic and Hebrew.',
  },
  {
    question: 'What is the difference between the license tiers?',
    answer:
      'The Regular License ($39) is the Zaika web store on its own. The Everything Bundle ($59) adds the Zaika Flutter mobile app (Android & iOS) so you can sell on web and mobile from one purchase. The Exclusive License ($149) includes everything in the bundle plus full source modification rights, branding removal, unlimited commercial projects, professional installation, and 6 months of priority support. The Flutter mobile app is included with both the Everything Bundle and the Exclusive License. Done-for-you installation is available as an optional add-on at checkout.',
  },
  {
    question: 'Do I pay any monthly or recurring fees?',
    answer:
      'No. Zaika is a one-time purchase and you own the full Laravel source code. Unlike Shopify or hosted platforms, there are no monthly subscription fees and no per-transaction commissions taken by the platform — you keep 100% of every sale after your own payment-gateway processing costs.',
  },
  {
    question: 'What is included and how is support handled?',
    answer:
      'Every license includes the full Zaika source code, lifetime free updates, and product documentation. The Regular License and Everything Bundle include 6 months of support; the Exclusive License includes 6 months of priority support. The Zaika Flutter mobile app is included with the Everything Bundle and the Exclusive License. You can extend support, or add done-for-you installation, at any time from checkout.',
  },
  {
    question: 'Can I see a live demo before buying?',
    answer:
      'Yes. You can explore the full frontend demo across the storefront and shop layouts, and log in to the live admin demo to test the page builder, inventory, and settings yourself. Links to the frontend demo, admin demo, and documentation are at the top of this page.',
  },
];

// Truthful trust signals (no fabricated testimonials)
export const TRUST_SIGNALS = [
  { label: 'Built on Laravel', detail: 'Modern, secure PHP framework' },
  { label: 'Full Source Code', detail: 'You own and can modify it' },
  { label: 'Lifetime Updates', detail: 'Free for every license' },
  { label: 'One-Time Price', detail: 'No monthly platform fees' },
];

// Comparison rows — single-vendor framing
export const COMPARISON_ROWS = [
  { feature: 'Pricing model',           zaika: 'One-time from $39', shopify: '$39–$399/mo',     woo: 'Free + paid plugins', custom: '$15K–$40K' },
  { feature: 'You own the code',        zaika: '✓ Full Laravel',    shopify: '✗ Rented',        woo: '✓ WordPress',         custom: '✓' },
  { feature: 'Platform commission',     zaika: 'None',              shopify: 'Until you pay more', woo: 'None',              custom: 'None' },
  { feature: 'No-code page builder',    zaika: '✓ 30+ widgets',     shopify: 'Themes only',     woo: 'Plugin needed',       custom: 'Custom build' },
  { feature: 'Payment gateways',        zaika: '✓ 15+ built-in',    shopify: 'Limited + fees',  woo: 'Plugins (extra)',     custom: 'Custom build' },
  { feature: 'Advanced inventory',      zaika: '✓ Included',        shopify: 'Apps (extra)',    woo: 'Plugins (extra)',     custom: 'Custom build' },
  { feature: 'Variants & attributes',   zaika: '✓ Unlimited',       shopify: 'Limited',         woo: '✓',                   custom: 'Custom build' },
  { feature: 'Default language + RTL',  zaika: '✓ Admin-set + RTL',  shopify: 'Paid apps',       woo: 'Plugins (extra)',     custom: 'Custom build' },
  { feature: 'SEO + sitemap tools',     zaika: '✓ Built-in',        shopify: 'Basic',           woo: 'Plugins (extra)',     custom: 'Custom build' },
  { feature: 'Time to launch',          zaika: 'Same day',          shopify: 'Hours',           woo: 'Days',                custom: '3–6 months' },
];
