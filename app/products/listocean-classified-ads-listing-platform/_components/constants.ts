export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/products/listocean-classified-ads-listing-platform`;

export const COLOR = '#0891b2';
export const COLOR_DARK = '#164e63';
export const LIGHT_COLOR = '#ecfeff';
export const DARK_BG = '#061a2a';

export const PURCHASE_URL = 'https://codecanyon.net/item/listocean-classified-ads-listing-platform/53068796';
export const DEMO_URL = 'https://listocean.bytesed.com';
export const ADMIN_DEMO_URL = 'https://listocean.bytesed.com/admin';
export const DOCS_URL = 'https://docs.xgenious.com/docs/listocean/';
export const PRICING_URL = '#pricing';

export const REGULAR_PRICE = 29;
export const FULL_PRICE = 95;
export const FULL_ORIGINAL = 249;
export const EXCLUSIVE_PRICE = 179;
export const EXCLUSIVE_ORIGINAL = 249;

export const FULL_PRODUCT_PATH = 'listocean-full-pack';
export const EXCLUSIVE_PRODUCT_PATH = 'listocean-exclusive-pack';

export const QUICK_LINKS = [
  { label: 'Frontend Demo', href: DEMO_URL },
  { label: 'Admin Demo', href: ADMIN_DEMO_URL },
  { label: 'Documentation', href: DOCS_URL },
  { label: 'Pricing', href: PRICING_URL },
];

export const FEATURES = [
  {
    name: 'Real-Time Live Chat',
    desc: 'Connect buyers and sellers instantly via built-in live chat on every listing page. No third-party service or API key needed.',
    icon: 'chat',
  },
  {
    name: 'Google Maps Integration',
    desc: 'Location-aware listing discovery with interactive maps. Buyers see exactly where a deal is and filter results by proximity.',
    icon: 'map',
  },
  {
    name: 'Membership Plans',
    desc: 'Tiered membership system gives paying members featured placement, highlighted ads, and extended listing duration — driving recurring revenue.',
    icon: 'membership',
  },
  {
    name: 'Wallet & Transactions',
    desc: 'Built-in digital wallet lets users fund their account and pay for featured listings or memberships without leaving the platform.',
    icon: 'wallet',
  },
  {
    name: 'Multiple Ad Formats',
    desc: 'Monetize with image banners, custom script ads, and Google Ads. Track views, countries, and devices in the admin panel.',
    icon: 'ads',
  },
  {
    name: 'SMS Gateway Plugin',
    desc: 'Send SMS notifications for user registration, listing alerts, and account verification via any major SMS provider.',
    icon: 'sms',
  },
  {
    name: 'Listing Reports & Analytics',
    desc: 'Track which listings perform best. Admin dashboard shows views, click-through rates, and detailed per-ad performance data.',
    icon: 'analytics',
  },
  {
    name: 'Review & Ratings System',
    desc: 'Buyers and sellers rate each other after transactions, building trust and social proof that reduces friction for new visitors.',
    icon: 'star',
  },
  {
    name: 'Role-Based Admin Permissions',
    desc: 'Multiple admin roles with granular permissions. Manage your team safely — from super admin to moderator — without exposing sensitive settings.',
    icon: 'roles',
  },
  {
    name: 'GDPR Cookie Compliance',
    desc: 'Built-in GDPR cookie consent banner with configurable preferences. Keep your platform compliant with EU regulations from day one.',
    icon: 'gdpr',
  },
  {
    name: 'Newsletter Module',
    desc: 'Grow and re-engage your audience. Send newsletters to subscribers directly from the admin panel to promote featured listings.',
    icon: 'newsletter',
  },
  {
    name: 'Custom JS / CSS Support',
    desc: 'Inject custom JavaScript or CSS from the admin panel without editing source files — add tracking pixels, widgets, or any third-party script.',
    icon: 'code',
  },
];

export const PLUGINS = [
  {
    name: 'Live Chat Plugin',
    tag: 'Real-Time',
    desc: 'Enable direct messaging between buyers and listing owners right on the ad page. Reduces friction, increases conversions, and keeps all communication on-platform.',
    value: 19,
  },
  {
    name: 'Membership Plugin',
    tag: 'Revenue',
    desc: 'Offer tiered membership plans that give users premium listing placement, featured ad slots, and extended duration. Turn your free classifieds site into a subscription business.',
    value: 19,
  },
  {
    name: 'Wallet Plugin',
    tag: 'Payments',
    desc: 'Add a digital wallet so users can top up their balance and spend it on featured listings and memberships without entering payment details repeatedly.',
    value: 19,
  },
  {
    name: 'SMS Gateway Plugin',
    tag: 'Notifications',
    desc: 'Send SMS for account verification, new listing alerts, and membership expiry reminders. Compatible with all major SMS providers — Twilio, Nexmo, and more.',
    value: 19,
  },
];

export const BUILDERS = [
  {
    name: 'Page Builder',
    desc: 'Drag pre-built widgets onto any page — hero, listings grid, categories, testimonials, FAQ, and more. Compose full layouts without touching code.',
  },
  {
    name: 'Menu Builder',
    desc: 'Build dropdown and mega menus visually. Reorder items, add icons, and nest sub-menus — changes publish instantly to the live site.',
  },
  {
    name: 'Form Builder',
    desc: 'Create custom listing forms with text, number, email, select, checkbox, textarea, and file fields. Set required rules from the admin panel.',
  },
  {
    name: 'Widget Builder',
    desc: 'Pre-made footer widget areas plus raw-HTML zones for newsletter signup, image blocks, or any custom content you need in footers and sidebars.',
  },
];

export const LAUNCH_STEPS = [
  {
    step: '01',
    title: 'Install on Your Server',
    desc: 'Upload ListOcean to any PHP/Laravel-compatible host or VPS, run the guided installer, and connect your database. Detailed documentation walks you through every step.',
  },
  {
    step: '02',
    title: 'Configure Categories & Locations',
    desc: 'Set up your listing categories, subcategories, and location hierarchy from the admin panel. Tailor the taxonomy to your niche — vehicles, real estate, jobs, services, or anything else.',
  },
  {
    step: '03',
    title: 'Enable Premium Plugins',
    desc: 'Activate the Live Chat, Membership, Wallet, and SMS Gateway plugins from the plugin manager. Toggle only what your business model needs — each plugin installs in one click.',
  },
  {
    step: '04',
    title: 'Go Live & Start Monetizing',
    desc: 'Publish your site, open it to listings, and start earning from featured placements, membership subscriptions, and ad banners from day one.',
  },
];

export const WHO_FOR = [
  {
    tag: 'Entrepreneurs',
    title: 'Local Marketplace Founders',
    desc: 'Launch a hyper-local classifieds site for any niche — real estate, vehicles, jobs, electronics, or services. You own the platform, the data, and all the revenue it generates. No platform commission ever.',
    fits: ['Real estate & property listings', 'Vehicle buy/sell marketplace', 'Jobs & services board'],
  },
  {
    tag: 'Community Builders',
    title: 'Neighbourhood & City Platforms',
    desc: 'Create a trusted local marketplace that your community actually uses. Built-in reviews, live chat, and verified memberships give buyers and sellers the confidence to transact locally.',
    fits: ['Hyper-local classifieds', 'City or neighbourhood deals', 'Community buy/sell groups'],
  },
  {
    tag: 'Agencies',
    title: 'Agencies & Freelance Developers',
    desc: 'Deliver fully functional classified platforms to clients in a fraction of the time of a custom build. Full source code access on the Exclusive license means you can customise and white-label for each project.',
    fits: ['Client classified site projects', 'Niche vertical marketplaces', 'White-labelled platforms'],
  },
];

export const COMPARISON_ROWS = [
  { feature: 'Pricing model',              listocean: 'One-time from $29',     osclass: 'Free + paid addons',      wordpress: 'Free + plugins',        custom: '$15K–$40K' },
  { feature: 'You own the source code',    listocean: '✓ Full Laravel',         osclass: '✓ PHP',                   wordpress: '✓ PHP',                 custom: '✓' },
  { feature: 'Monthly platform fees',      listocean: 'None',                   osclass: 'Hosting only',            wordpress: 'Hosting + plugins',     custom: 'None' },
  { feature: 'Built-in live chat',         listocean: '✓ Plugin included',      osclass: '✗ Separate service',      wordpress: '✗ Separate plugin',     custom: 'Custom build' },
  { feature: 'Membership system',          listocean: '✓ Plugin included',      osclass: 'Paid addon',              wordpress: 'Plugin needed',         custom: 'Custom build' },
  { feature: 'Wallet & payments',          listocean: '✓ Plugin included',      osclass: 'Paid addon',              wordpress: 'WooCommerce + plugin',  custom: 'Custom build' },
  { feature: 'No-code drag & drop',        listocean: '✓ 4 builders',           osclass: '✗',                       wordpress: 'Theme + Elementor',     custom: 'Custom build' },
  { feature: 'Google Maps built-in',       listocean: '✓',                      osclass: '✓ Basic',                 wordpress: 'Plugin needed',         custom: 'Custom build' },
  { feature: 'GDPR compliance built-in',   listocean: '✓',                      osclass: '✗',                       wordpress: 'Plugin needed',         custom: 'Custom build' },
  { feature: 'Time to launch',             listocean: 'Same day',               osclass: 'Days',                    wordpress: 'Days',                  custom: '3–6 months' },
];

export const TRUST_SIGNALS = [
  { label: 'Built on Laravel', detail: 'Modern, secure PHP framework' },
  { label: 'Full Source Code', detail: 'You own and can modify it' },
  { label: 'Lifetime Updates', detail: 'Free on every license' },
  { label: 'One-Time Price', detail: 'No monthly platform fees' },
];

export const FAQS = [
  {
    question: 'What is ListOcean?',
    answer:
      'ListOcean is a classified ads and listing platform built on the Laravel PHP framework. It lets you launch a fully featured classifieds website where users can post, search, and respond to listings across any category — real estate, vehicles, jobs, electronics, or services. It ships with live chat, Google Maps, a membership system, a digital wallet, multiple ad formats, and 4 drag & drop builders — for a one-time price with no monthly fees.',
  },
  {
    question: 'What categories and types of listings can ListOcean support?',
    answer:
      'ListOcean supports unlimited categories and subcategories, all configurable from the admin panel. Common setups include: property listings (rent, sale, commercial), vehicle classifieds (cars, bikes, trucks), job boards, electronics buy/sell, services, pets, and general merchandise. You define the taxonomy, and each category can have custom listing fields created with the form builder.',
  },
  {
    question: 'What premium plugins are included in the Full Package?',
    answer:
      'The Full Package includes four premium plugins: Live Chat Plugin ($19 value) — real-time buyer-to-seller messaging on listing pages; Membership Plugin ($19 value) — tiered plans with featured placement and benefits; Wallet Plugin ($19 value) — digital wallet for featured listing payments; and SMS Gateway Plugin ($19 value) — SMS notifications for registration and alerts. Individually these cost $76; the Full Package bundles all four at $95.',
  },
  {
    question: 'How does the live chat system work?',
    answer:
      'The Live Chat Plugin enables real-time messaging between a listing viewer and the ad owner, directly on the listing detail page. Buyers click a chat button, a message thread opens, and both parties receive notifications. All chats are logged in the admin panel and both users can access their chat history from their dashboards. No external chat service or API key is required.',
  },
  {
    question: 'How does the membership system generate revenue?',
    answer:
      'The Membership Plugin lets you create tiered plans (Silver, Gold, Platinum, etc.) with configurable benefits: number of active listings, featured placement priority, listing duration, badge display, and category access. Users purchase memberships through the wallet or direct payment. Recurring or one-time membership pricing is supported. The admin panel shows active members, revenue, and plan analytics.',
  },
  {
    question: 'What are the drag & drop builders and what can I build with them?',
    answer:
      'ListOcean includes four no-code builders. The Page Builder lets you drag pre-built widgets — hero sections, listing grids, category blocks, testimonials, FAQs — onto any page. The Menu Builder creates dropdowns and mega menus visually. The Form Builder adds custom fields (text, select, checkbox, file upload) to listing submission forms by category. The Widget Builder manages footer zones and sidebar widgets. All changes publish instantly from the admin panel.',
  },
  {
    question: 'Is ListOcean GDPR compliant?',
    answer:
      'Yes. ListOcean includes a configurable GDPR cookie consent banner with category-level preferences (essential, analytics, marketing). Users can accept or decline cookie categories, and their preferences are stored. The admin panel lets you configure what each consent category covers. This satisfies standard EU GDPR cookie requirements without needing a separate consent plugin.',
  },
  {
    question: 'What are the server requirements to install ListOcean?',
    answer:
      'ListOcean requires PHP 8.1 or higher, MySQL 5.7 or higher (MySQL 8 recommended), Composer 2, and mod_rewrite enabled. It runs on any standard PHP/Laravel-compatible hosting — shared cPanel hosting, VPS, or cloud servers including DigitalOcean, AWS, or Vultr. Minimum 512 MB RAM is recommended; 1 GB+ for production sites with active traffic.',
  },
  {
    question: 'What is the difference between the Regular, Full Package, and Exclusive licenses?',
    answer:
      'The Regular License ($29) on CodeCanyon gives you the base ListOcean script for one domain — no premium plugins included. The Full Package ($95) bundles all four premium plugins (Live Chat, Membership, Wallet, SMS Gateway — a $76 combined value) plus 6 months support and lifetime updates. The Exclusive License ($179, normally $249) adds full source code modification rights, branding removal, professional installation on your server, and 12 months priority support — the right choice for agencies building classified platforms for clients.',
  },
  {
    question: 'Can I see a live demo before buying?',
    answer:
      'Yes. A full live frontend demo is available at listocean.bytesed.com where you can browse listings, test search and filtering, and explore the user experience. You can also log in to the admin panel at listocean.bytesed.com/admin to test the drag & drop builders, category management, plugin settings, and ad performance analytics. Documentation is available at docs.xgenious.com.',
  },
];
