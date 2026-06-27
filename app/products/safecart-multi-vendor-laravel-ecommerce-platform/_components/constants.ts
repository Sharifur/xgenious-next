export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/products/safecart-multi-vendor-laravel-ecommerce-platform`;

export const COLOR = '#1f9960';
export const COLOR_DARK = '#0d5c38';
export const LIGHT_COLOR = '#f0fdf4';
export const DARK_BG = '#061a0f';

export const PURCHASE_URL = 'https://codecanyon.net/item/safecart-multivendor-laravel-ecommerce-platform/49428309';
export const DEMO_URL = 'https://safecart.bytesed.com';
export const ADMIN_DEMO_URL = 'https://safecart.bytesed.com/admin';
export const VENDOR_DEMO_URL = 'https://safecart.bytesed.com/vendor/login';
export const DOCS_URL = 'https://docs.xgenious.com/docs/safecart/';
export const PRICING_URL = '#pricing';

export const REGULAR_PRICE = 39;
export const FULL_PRICE = 99;
export const FULL_ORIGINAL = 149;
export const EXCLUSIVE_PRICE = 199;
export const EXCLUSIVE_ORIGINAL = 399;

export const FULL_PRODUCT_PATH = 'safecart-bundle-pack';
export const EXCLUSIVE_PRODUCT_PATH = 'safecart-exclusive-pack';

export const QUICK_LINKS = [
  { label: 'Frontend Demo', href: DEMO_URL },
  { label: 'Admin Demo', href: ADMIN_DEMO_URL },
  { label: 'Vendor Demo', href: VENDOR_DEMO_URL },
  { label: 'Pricing', href: PRICING_URL },
];

export const FEATURES = [
  {
    name: 'Multi-Vendor Architecture',
    desc: 'Separate dashboards for admins, vendors, and customers. Configure commission rates per vendor — flat or percentage — and approve vendor registrations before they go live.',
    icon: 'store',
  },
  {
    name: 'POS System',
    desc: 'Point of Sale module with barcode scanner support for in-store sales. Walk-in customer orders, a dedicated POS payment gateway, and live sync with your online inventory.',
    icon: 'pos',
  },
  {
    name: 'Delivery Man System',
    desc: 'Assign orders to delivery staff and track them on a live map. Customers see real-time location updates. The Flutter Delivery Man App is included in the Vendor Bundle.',
    icon: 'truck',
  },
  {
    name: 'Flutter Mobile Apps',
    desc: 'Three ready-to-publish Flutter apps: Customer App, Vendor App, and Delivery Man App — Android and iOS ready. Included in the Vendor Bundle and Exclusive Pack.',
    icon: 'mobile',
  },
  {
    name: '26+ Payment Gateways',
    desc: 'Stripe, PayPal, Razorpay, and 23+ more gateways integrated out of the box. A separate POS gateway handles in-store payments independently from online checkout.',
    icon: 'payment',
  },
  {
    name: 'Advanced Inventory Management',
    desc: 'Track stock by size, colour, and unit across all product variants. Custom attribute-based inventory ensures accurate stock levels whether orders come from POS or the online store.',
    icon: 'inventory',
  },
  {
    name: 'Campaign & Countdown Timers',
    desc: 'Time-limited promotional campaigns with live countdown timers. Target specific products, vendors, or categories — drives urgency and boosts average order value.',
    icon: 'campaign',
  },
  {
    name: 'Wallet System',
    desc: 'Built-in digital wallet for admins, vendors, and customers. Manage balances, process vendor withdrawals, and handle customer refunds — all within the platform.',
    icon: 'wallet',
  },
  {
    name: 'Advanced Product Variants',
    desc: 'Create unlimited product variations with custom attributes. Customers configure size, colour, material, or any attribute before adding to cart — no custom coding required.',
    icon: 'variants',
  },
  {
    name: 'Refund Management',
    desc: 'Structured refund workflow with admin approval gating. Customers submit requests with reason and evidence; admins approve or reject — full audit trail per transaction.',
    icon: 'refund',
  },
  {
    name: 'Support Ticket System',
    desc: 'Built-in customer support ticketing. Customers raise tickets, vendors and admins respond — no external helpdesk subscription needed.',
    icon: 'ticket',
  },
  {
    name: 'Wishlist & Quick View',
    desc: 'Customers save products to wishlists and preview product details in a modal without leaving the listing page. Reduces drop-off and increases session depth.',
    icon: 'wishlist',
  },
];

export const PLUGINS = [
  {
    name: 'Live Chat Plugin',
    tag: 'Real-Time',
    desc: 'Real-time messaging between buyers and sellers directly on product pages. Reduce cart abandonment by answering buyer questions instantly before they leave.',
    value: 19,
  },
  {
    name: 'Delivery Man Plugin',
    tag: 'Logistics',
    desc: 'Full delivery management: assign drivers, track live location, and show customers a real-time map. Includes the Flutter Delivery Man App for Android and iOS.',
    value: 19,
  },
  {
    name: 'Refund Plugin',
    tag: 'Returns',
    desc: 'Structured refund and return workflow. Customers submit requests with reason and evidence; admins approve or reject — full audit trail kept per transaction.',
    value: 19,
  },
  {
    name: 'POS Plugin',
    tag: 'In-Store',
    desc: 'Point of Sale system for physical retail: barcode scanner, walk-in customer orders, a separate POS payment gateway, and real-time inventory sync with the online store.',
    value: 39,
  },
];

export const MOBILE_APPS = [
  {
    name: 'Customer App',
    platform: 'Flutter · iOS & Android',
    desc: 'Browse products, track orders, manage wishlist, top up wallet, and chat with vendors — native mobile experience with no extra licensing cost.',
    icon: 'customer',
  },
  {
    name: 'Vendor App',
    platform: 'Flutter · iOS & Android',
    desc: 'Vendors manage their catalog, process orders, view earnings, respond to customer queries, and handle withdrawal requests on the go.',
    icon: 'vendor',
  },
  {
    name: 'Delivery Man App',
    platform: 'Flutter · iOS & Android',
    desc: 'Delivery staff accept assignments, navigate with real-time guidance, and update delivery status — customers see live tracking on a map.',
    icon: 'delivery',
  },
  {
    name: 'No-Code Page Builder',
    platform: 'Drag & Drop Admin Panel',
    desc: 'Compose storefront pages from widgets, build dropdown menus, create custom product forms, and manage footer zones — no developer needed after setup.',
    icon: 'builder',
  },
];

export const LAUNCH_STEPS = [
  {
    step: '01',
    title: 'Install on Your Server',
    desc: 'Upload SafeCart to any PHP 8.1+ host or VPS, run the guided installer, connect your database, and point your domain. Detailed documentation covers every step.',
  },
  {
    step: '02',
    title: 'Onboard Your Vendors',
    desc: 'Open vendor registration or invite merchants directly. Set commission rates per vendor, configure storefronts, and approve them before they go live.',
  },
  {
    step: '03',
    title: 'Configure Payments & Plugins',
    desc: 'Enable your preferred payment gateways from 26+ available and activate the Live Chat, Delivery Man, Refund, and POS plugins from the plugin manager in one click each.',
  },
  {
    step: '04',
    title: 'Launch & Start Earning',
    desc: 'Go live, run promotional campaigns with countdown timers, and start collecting commission on every vendor sale from day one. No monthly platform fees ever.',
  },
];

export const WHO_FOR = [
  {
    tag: 'Entrepreneurs',
    title: 'Multi-Vendor Marketplace Founders',
    desc: 'Build an Amazon-style marketplace where vendors list products and you earn commission on every sale. You own the platform, the data, and all the revenue it generates — no Shopify fees.',
    fits: ['Electronics & tech marketplaces', 'Fashion & apparel multi-vendor', 'Food & grocery delivery platform'],
  },
  {
    tag: 'Retail Businesses',
    title: 'Brick-and-Mortar + Online Retailers',
    desc: 'Run your physical store with the POS system and your online shop on one unified platform. Inventory syncs automatically — no double data entry, no separate systems to manage.',
    fits: ['Physical store with online presence', 'Franchise or multi-location retail', 'In-store and delivery hybrid model'],
  },
  {
    tag: 'Agencies',
    title: 'Agencies & Freelance Developers',
    desc: 'Deliver complete marketplace solutions to clients faster than custom builds allow. The Exclusive license gives you full source code modification rights and white-labelling for every project.',
    fits: ['Client marketplace builds', 'Niche B2B or B2C platforms', 'White-labelled retail solutions'],
  },
];

export const COMPARISON_ROWS = [
  { feature: 'Pricing model',                  safecart: 'One-time from $39',   woocommerce: 'Free + plugins',  shopify: '$29–$299/mo',        custom: '$20K–$60K' },
  { feature: 'Multi-vendor built-in',           safecart: '✓ Admin + Vendor',    woocommerce: 'Paid plugin',     shopify: 'Shopify Markets',    custom: 'Custom build' },
  { feature: 'Flutter mobile apps',             safecart: '✓ 3 apps included',   woocommerce: '✗',               shopify: '✗',                  custom: 'Custom build' },
  { feature: 'POS system',                      safecart: '✓ Plugin included',   woocommerce: 'Paid addon',      shopify: 'Shopify POS (paid)', custom: 'Custom build' },
  { feature: 'Delivery tracking',               safecart: '✓ Plugin included',   woocommerce: '✗',               shopify: '✗',                  custom: 'Custom build' },
  { feature: '26+ payment gateways',            safecart: '✓',                   woocommerce: 'Stripe + addons', shopify: 'Shopify Payments+',  custom: 'Custom build' },
  { feature: 'Monthly platform fees',           safecart: 'None',                woocommerce: 'Hosting only',    shopify: '$29–$299/mo',        custom: 'None' },
  { feature: 'Commission on sales',             safecart: 'Zero % to SafeCart',  woocommerce: 'None',            shopify: '0.5–2% + TXN fees', custom: 'None' },
  { feature: 'No-code page builder',            safecart: '✓ 4 builders',        woocommerce: 'Elementor addon', shopify: 'Sections editor',    custom: 'Custom build' },
  { feature: 'Time to launch',                  safecart: 'Same day',            woocommerce: 'Days',            shopify: 'Hours',              custom: '3–6 months' },
];

export const TRUST_SIGNALS = [
  { label: 'Built on Laravel 10', detail: 'PHP 8.1+ · MySQL 8 · Bootstrap 4' },
  { label: 'Full Source Code', detail: 'You own and can modify it' },
  { label: 'Lifetime Updates', detail: 'Free on every license' },
  { label: '26+ Payment Gateways', detail: 'No extra integration cost' },
];

export const FAQS = [
  {
    question: 'What is SafeCart?',
    answer:
      'SafeCart is a self-hosted eCommerce platform built on Laravel 10 that works as either a single-vendor store or a full multi-vendor marketplace — the same codebase supports both models. You can launch it as your own branded shop and enable vendor registration later without any migration or rebuild. SafeCart ships with separate admin, vendor, and customer dashboards, 26+ payment gateways, three Flutter mobile apps (Customer, Vendor, Delivery Man — in the Vendor Bundle), a POS system with barcode scanning, real-time delivery tracking, advanced inventory management, campaign countdown timers, a digital wallet, and 4 drag-and-drop no-code builders — for a one-time price with no monthly fees.',
  },
  {
    question: 'How does the multi-vendor system work?',
    answer:
      'Vendors register on the platform (or are invited by the admin). The admin reviews and approves vendor applications, sets per-vendor commission rates (flat or percentage), and controls which product categories each vendor can list in. Approved vendors get a dedicated dashboard where they manage products, view orders, track earnings, and request withdrawals. The admin panel shows all vendor activity, commission earned, payout schedules, and per-vendor performance analytics.',
  },
  {
    question: 'What are the 4 premium plugins and what do they cost separately?',
    answer:
      'SafeCart has four premium plugins: Live Chat Plugin ($19) — real-time buyer-to-seller messaging on product pages; Delivery Man Plugin ($19) — full delivery management with live location tracking and the Flutter Delivery Man App; Refund Plugin ($19) — structured refund/return workflow with admin approval; POS Plugin ($39) — Point of Sale with barcode scanner, walk-in customer orders, and a dedicated POS payment gateway. Purchased separately these total $96. All four are included free in the Vendor Bundle ($99) and Exclusive Pack ($199).',
  },
  {
    question: 'Does SafeCart include Flutter mobile apps?',
    answer:
      'Yes, but they are included in the Vendor Bundle ($99) and Exclusive Pack ($199) only — not in the Regular License ($39). SafeCart includes three Flutter mobile apps: a Customer App (browse products, track orders, chat with vendors, manage wishlist), a Vendor App (manage product catalog, process orders, view earnings), and a Delivery Man App (accept delivery assignments, real-time navigation, update delivery status so customers see live location tracking). All three apps are Android and iOS ready with no additional Flutter licensing cost.',
  },
  {
    question: 'What is the POS system and what does it include?',
    answer:
      'The POS Plugin turns SafeCart into a complete omnichannel retail solution. It includes a dedicated POS interface optimised for touchscreen use, barcode scanner integration for fast product lookup, walk-in customer order management (no account required), a separate POS payment gateway independent from online checkout, and real-time inventory sync — so stock sold in-store is immediately reflected in the online storefront. Ideal for businesses that sell both in-person and online from one platform.',
  },
  {
    question: 'How does the delivery tracking system work?',
    answer:
      'The Delivery Man Plugin adds a complete logistics layer. When an order is ready to ship, the admin or vendor assigns it to a delivery staff member. The delivery person accepts the order in the Flutter Delivery Man App, picks up the package, and updates status (picked up, in transit, delivered). Customers see the delivery person\'s live location on a map in their Customer App or via the web panel — similar to the tracking experience in food delivery apps.',
  },
  {
    question: 'What payment gateways does SafeCart support?',
    answer:
      'SafeCart supports 26+ payment gateways out of the box, including Stripe, PayPal, Razorpay, Flutterwave, SSLCommerz, and many regional gateways. There is also a separate POS payment gateway for in-store transactions, operating independently from online checkout. No additional gateway integration cost — all 26+ are included in the base price. The admin panel controls which gateways are active and visible to customers.',
  },
  {
    question: 'What are the server requirements to install SafeCart?',
    answer:
      'SafeCart requires PHP 8.1 or higher, MySQL 8.x, Composer 2, and mod_rewrite enabled. It runs on any standard PHP/Laravel-compatible hosting — shared cPanel hosting, VPS, or cloud providers including DigitalOcean, AWS, or Vultr. Minimum 1 GB RAM is recommended; 2 GB+ for production sites with multiple active vendors. The guided installer walks through database setup, environment configuration, and storage permissions.',
  },
  {
    question: 'What is the difference between the Regular, Vendor Bundle, and Exclusive licenses?',
    answer:
      'Regular ($39 on CodeCanyon) — full SafeCart script for one domain, 6 months support, no premium plugins. Vendor Bundle ($99, normally $149) — all four premium plugins included (Live Chat, Delivery Man, Refund, POS — $96 value), 6 months support, purchased via our checkout. Exclusive Pack ($199, normally $399) — all four plugins plus full source code modification rights, branding removal, professional installation on your server, and 6 months priority support. Agencies building for clients should use the Exclusive Pack.',
  },
  {
    question: 'What is the campaign and countdown timer feature?',
    answer:
      'SafeCart includes an advanced promotional campaign system. Admins or vendors can create time-limited campaigns for specific products, categories, or vendor stores. Each campaign has a start date, end date, and a discount amount or percentage. A countdown timer on the product page shows how long the offer lasts — creating urgency that increases conversion rates. Campaigns can be scheduled in advance and previewed before going live.',
  },
  {
    question: 'Is SafeCart a good choice for building a multi-vendor marketplace in 2025?',
    answer:
      'SafeCart is one of the most complete self-hosted multi-vendor platforms on CodeCanyon. It runs on Laravel 10 — the most-starred PHP framework on GitHub — and ships production-ready with 26+ payment gateways, three Flutter mobile apps, POS, delivery tracking, campaign tools, a wallet system, advanced inventory, and 4 no-code builders. With 402+ sales and a one-time price from $39, it delivers considerably more out of the box than WooCommerce multi-vendor plugins or Shopify at a fraction of the ongoing cost.',
  },
];
