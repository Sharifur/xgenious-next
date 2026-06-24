export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/products/grenmart-organic-grocery-ecommerce`;

// Organic-grocery green brand palette
export const COLOR = '#2f9e44';
export const COLOR_DARK = '#247536';
export const LIGHT_COLOR = '#EAF7EE';
export const DARK_BG = '#0b1f12';

export const PURCHASE_URL = 'https://1.envato.market/b3oknb';
export const DEMO_URL = 'https://grenmart.xgenious.com/';
export const ADMIN_DEMO_URL = 'https://grenmart.xgenious.com/login/admin';
export const DOCS_URL = 'https://docs.xgenious.com/docs/grenmart-organic-grocery-laravel-ecommerce/';
export const PRICING_URL = '#pricing';

// Pricing — tiered, internal checkout for Everything Bundle + Exclusive
export const REGULAR_PRICE = 39;
export const REGULAR_ORIGINAL = 59;
export const BUNDLE_PRICE = 49;
export const BUNDLE_ORIGINAL = 89;
export const EXCLUSIVE_PRICE = 199;
export const EXCLUSIVE_ORIGINAL = 399;
export const BUNDLE_PRODUCT_PATH = 'greenmart-bundle-pack';
export const EXCLUSIVE_PRODUCT_PATH = 'greenmart-exclusive-pack';

export const QUICK_LINKS = [
  { label: 'Frontend Demo', href: DEMO_URL },
  { label: 'Admin Demo', href: ADMIN_DEMO_URL },
  { label: 'Documentation', href: DOCS_URL },
  { label: 'Pricing', href: PRICING_URL },
];

// Commerce features (faithful to the source page)
export const FEATURES = [
  {
    name: 'Drag & Drop Page Builder',
    desc: 'No code. Drag any of 50+ pre-made widgets to build pages exactly how you want. You have total control over every page on your store.',
    icon: 'builder',
  },
  {
    name: 'Advance Inventory',
    desc: 'Manage stock across products, variants, and attributes. Use it for grocery or any retail catalog with full inventory control.',
    icon: 'inventory',
  },
  {
    name: 'Product Variants & Attributes',
    desc: 'Add unlimited custom attributes and variants with their own pricing. Shoppers must pick a variant before adding to cart.',
    icon: 'variants',
  },
  {
    name: 'Advance Shipping',
    desc: 'Set shipping methods per zone, by country or state, with taxable and conditional rules. Full control over how shipping is calculated.',
    icon: 'shipping',
  },
  {
    name: 'Advance Coupon',
    desc: 'Fixed-amount or percentage coupons, scoped to products, categories, sub-categories, cart totals, or specific date ranges.',
    icon: 'coupon',
  },
  {
    name: 'Campaign Module',
    desc: 'Run time-boxed campaigns with per-product stock and pricing, and surface them anywhere using page-builder widgets.',
    icon: 'campaign',
  },
  {
    name: 'Autocomplete Search',
    desc: 'After 3 characters the store suggests matching products and categories — faster discovery and a higher sales ratio.',
    icon: 'search',
  },
  {
    name: 'Related Product Suggestions',
    desc: 'Each product page surfaces related items shoppers may also want, increasing cart size and overall revenue.',
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
    name: 'Advance Tax System',
    desc: 'Create unlimited tax types as a percentage or fixed amount, varying by country and state to match local rules.',
    icon: 'tax',
  },
  {
    name: 'Facebook / Google Login',
    desc: 'Let shoppers sign in with Facebook or Google, or create an account straight from checkout using their order details.',
    icon: 'login',
  },
];

// Flutter mobile app (sold separately on CodeCanyon)
export const MOBILE_APP_URL = 'https://codecanyon.net/item/grenmart-laravel-ecommerce-shop-flutter-app/40188895';
// Android demo build (APK) — Google Drive
export const ANDROID_DEMO_URL = 'https://drive.google.com/file/d/1qIglCBHTHwvmfSC9IUPi0wU9iWuYJk4I/view';
export const MOBILE_FEATURES = [
  { name: 'One Codebase, Android & iOS', desc: 'A single Flutter app builds to both Google Play and the App Store from the same source.' },
  { name: 'Connects to Your Grenmart Backend', desc: 'The app talks to your existing Grenmart Laravel store over API — products, orders, and customers stay in sync.' },
  { name: '15+ Payment Gateways', desc: 'PayPal, Stripe, Razorpay, Paytm, Flutterwave, Paystack, Mollie, Midtrans, PayFast, Cash on Delivery & more.' },
  { name: 'Facebook Login & OTP Reset', desc: 'One-tap Facebook sign-in plus secure OTP-based password reset for fast, trusted onboarding.' },
  { name: 'Home Slider & Category Browse', desc: 'A dynamic homepage header slider, category browsing, wishlist, cart, and full checkout in-app.' },
  { name: 'Default Language + RTL', desc: 'Set the app language from the admin panel and switch layout direction — full right-to-left (RTL) support built in.' },
];

// No-code builders — the standout selling point
export const BUILDERS = [
  {
    name: 'Page Builder',
    desc: 'Drag & drop 50+ widgets to compose any page — no developer required.',
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
    desc: 'Upload Grenmart to any PHP/Laravel host or VPS, run the guided installer, and connect your database. Documentation and our team walk you through it.',
  },
  {
    step: '02',
    title: 'Add Products & Categories',
    desc: 'Import your catalog with attributes, variants, and stock. Set tax and shipping zones once and the store applies them automatically.',
  },
  {
    step: '03',
    title: 'Design With the Page Builder',
    desc: 'Pick one of 3 home variants, then drag & drop widgets to brand your storefront. Change colors, menus, and footer without touching code.',
  },
  {
    step: '04',
    title: 'Connect Gateways & Go Live',
    desc: 'Enable from 20+ payment gateways, generate your sitemap, and launch. Start taking orders the same day you install.',
  },
];

// Who it's for
export const WHO_FOR = [
  {
    tag: 'Grocery & Organic',
    title: 'Grocery & Organic Stores',
    desc: 'Built for fresh produce, organic goods, and daily essentials. Weight-based variants, time-boxed campaigns, advanced inventory, and 3-character autocomplete search help shoppers fill their cart faster.',
    fits: ['Fresh produce & dairy', 'Organic & health foods', 'Daily-needs supermarkets'],
  },
  {
    tag: 'Any Catalog',
    title: 'Retailers of Any Niche',
    desc: 'Grenmart is not grocery-only. Unlimited custom attributes and product variants adapt the store to whatever you sell — physical, digital, affiliate, or licensed products.',
    fits: ['Fashion & accessories', 'Electronics & gadgets', 'Digital & downloadable goods'],
  },
  {
    tag: 'Build for Clients',
    title: 'Agencies & Founders',
    desc: 'Ship a polished, SEO-ready store in days, not months. One-time license, full Laravel source code, and zero monthly platform fees or sales commission eating your margin.',
    fits: ['Client eCommerce projects', 'MVPs & startups', 'White-label resale'],
  },
];

// 20+ payment gateways (faithful list)
export const GATEWAYS = [
  'PayPal', 'Stripe', 'Razorpay', 'Paytm', 'Mollie', 'Flutterwave',
  'Paystack', 'Cashfree', 'Instamojo', 'Midtrans', 'Mercado Pago',
  'Bank Transfer', 'Cash on Delivery', 'Check Payment',
];

// SEO/store capabilities band
export const STORE_TOOLS = [
  { name: 'Advanced SEO', desc: 'Per-page and per-product meta title, description, and image. Canonical URLs included.' },
  { name: 'Sitemap Generation', desc: 'Generate an XML sitemap from the admin panel to boost crawlability and SEO score.' },
  { name: 'RTL + Language Control', desc: 'Run the store in one default language and change it from the admin panel — with full right-to-left (RTL) layout support.' },
  { name: 'Newsletter Module', desc: 'Collect verified subscribers and email them from the admin — single send or to all subscribers.' },
  { name: 'Color Settings', desc: 'Restyle the entire storefront from the admin panel without editing any CSS.' },
  { name: 'Email Notifications', desc: 'Automatic order and payment emails to both you and your customer on every order.' },
];

export const FAQS = [
  {
    question: 'What is Grenmart?',
    answer:
      'Grenmart is an organic grocery and multipurpose eCommerce platform built on the Laravel PHP framework. It ships with a no-code drag & drop page builder, 50+ widgets, 3 home page variants, 20+ payment gateways, and advanced inventory, shipping, tax, coupon, and campaign systems. You buy it once and own the full source code — no monthly fees.',
  },
  {
    question: 'Is Grenmart only for grocery stores?',
    answer:
      'No. Grenmart works for any retail niche. It includes custom product attributes and unlimited variants, so you can sell physical, digital, affiliate, or licensed products. The organic-grocery theme is the default look, but the catalog, builder, and checkout adapt to fashion, electronics, food, or any store you want to run.',
  },
  {
    question: 'Do I need to know how to code to use it?',
    answer:
      'No coding is required to run the store. Grenmart includes drag & drop builders for pages, menus, forms, and widgets, plus color settings from the admin panel. You install it once on a server, then manage products, design, shipping, and payments visually. Full documentation and installation support are included.',
  },
  {
    question: 'What payment gateways does Grenmart support?',
    answer:
      'Grenmart supports 20+ payment gateways including PayPal, Stripe, Razorpay, Paytm, Mollie, Flutterwave, Paystack, Cashfree, Instamojo, Midtrans, and Mercado Pago, plus Bank Transfer, Cash on Delivery, and Check Payment. You enable only the gateways you need from the admin panel before going live.',
  },
  {
    question: 'How many home page designs come with Grenmart?',
    answer:
      'Grenmart includes 3 ready-made home page variants for small, medium, and large stores, plus grid and list shop layouts. Because the page builder is drag & drop with 50+ widgets, you are not limited to the three — you can rearrange or build entirely new pages without writing code.',
  },
  {
    question: 'Is Grenmart good for SEO?',
    answer:
      'Yes. Grenmart is built SEO-friendly with per-page and per-product meta titles, descriptions, and images, canonical URLs, and one-click XML sitemap generation from the admin panel. It runs in a single default language that you set from the admin panel, with full RTL (right-to-left) layout support for languages like Arabic and Hebrew.',
  },
  {
    question: 'What is the difference between the license tiers?',
    answer:
      'The Regular License ($39) is the Grenmart web store on its own. The Everything Bundle ($49) adds the Grenmart Flutter mobile app (Android & iOS) so you can sell on web and mobile from one purchase. The Exclusive License ($199) includes everything in the bundle plus full source modification rights, branding removal, unlimited commercial projects, and 12 months of priority support. The Flutter mobile app is included only with the Everything Bundle and the Exclusive License. Done-for-you installation is available as an optional add-on at checkout.',
  },
  {
    question: 'Do I pay any monthly or recurring fees?',
    answer:
      'No. Grenmart is a one-time purchase and you own the full Laravel source code. Unlike Shopify or hosted platforms, there are no monthly subscription fees and no per-transaction commissions taken by the platform — you keep 100% of every sale after your own payment-gateway processing costs.',
  },
  {
    question: 'What is included and how is support handled?',
    answer:
      'Every license includes the full Grenmart source code, lifetime free updates, and product documentation. The Regular License and Everything Bundle include 6 months of support; the Exclusive License includes 12 months of priority support. You can extend support, or add done-for-you installation, at any time from checkout.',
  },
  {
    question: 'Can I see a live demo before buying?',
    answer:
      'Yes. You can explore the full frontend demo across all 3 home variants and the shop layouts, and log in to the live admin demo to test the page builder, inventory, and settings yourself. Links to the frontend demo, admin demo, and documentation are at the top of this page.',
  },
];

// Truthful trust signals (no fabricated testimonials)
export const TRUST_SIGNALS = [
  { label: 'Built on Laravel', detail: 'Modern, secure PHP framework' },
  { label: 'Full Source Code', detail: 'You own and can modify it' },
  { label: 'Lifetime Updates', detail: 'Free for every license' },
  { label: 'One-Time Price', detail: 'No monthly platform fees' },
];

// Comparison rows
export const COMPARISON_ROWS = [
  { feature: 'Pricing model',           grenmart: 'One-time from $39', shopify: '$39–$399/mo',     woo: 'Free + paid plugins', custom: '$15K–$40K' },
  { feature: 'You own the code',        grenmart: '✓ Full Laravel',    shopify: '✗ Rented',        woo: '✓ WordPress',         custom: '✓' },
  { feature: 'Platform commission',     grenmart: 'None',              shopify: 'Until you pay more', woo: 'None',              custom: 'None' },
  { feature: 'No-code page builder',    grenmart: '✓ 50+ widgets',     shopify: 'Themes only',     woo: 'Plugin needed',       custom: 'Custom build' },
  { feature: 'Payment gateways',        grenmart: '✓ 20+ built-in',    shopify: 'Limited + fees',  woo: 'Plugins (extra)',     custom: 'Custom build' },
  { feature: 'Advanced inventory',      grenmart: '✓ Included',        shopify: 'Apps (extra)',    woo: 'Plugins (extra)',     custom: 'Custom build' },
  { feature: 'Variants & attributes',   grenmart: '✓ Unlimited',       shopify: 'Limited',         woo: '✓',                   custom: 'Custom build' },
  { feature: 'Default language + RTL',  grenmart: '✓ Admin-set + RTL',  shopify: 'Paid apps',       woo: 'Plugins (extra)',     custom: 'Custom build' },
  { feature: 'SEO + sitemap tools',     grenmart: '✓ Built-in',        shopify: 'Basic',           woo: 'Plugins (extra)',     custom: 'Custom build' },
  { feature: 'Time to launch',          grenmart: 'Same day',          shopify: 'Hours',           woo: 'Days',                custom: '3–6 months' },
];
