export type Campaign = {
  theme: 'bf' | 'cm' | 'hw';
  name: string;
  coupon: string;
  pct: number;
  dateLabel: string;
  headline: [string, string];
  startsAt: string;
  startLabel: string;
  endsAt: string;
  endLabel: string;
};

export type CampaignStatus = 'upcoming' | 'live' | 'ended';

// All campaign times are UTC so the page flips at the same instant on the
// server (Vercel runs in UTC) and for every visitor.
export function campaignStatus(c: Campaign, now: Date): CampaignStatus {
  if (now < new Date(c.startsAt)) return 'upcoming';
  if (now > new Date(c.endsAt)) return 'ended';
  return 'live';
}

const EARLY_BLACK_FRIDAY: Campaign = {
  theme: 'bf',
  name: 'Early Black Friday',
  coupon: 'BFCM50',
  pct: 50,
  dateLabel: 'Nov 16 – 26, 2026',
  headline: ['Early Black', 'Friday'],
  startsAt: '2026-11-16T00:00:00Z',
  startLabel: 'November 16, 2026 at 12:00 AM UTC',
  endsAt: '2026-11-26T23:59:59Z',
  endLabel: 'November 26, 2026 at 11:59 PM UTC',
};

const BLACK_FRIDAY: Campaign = {
  theme: 'bf',
  name: 'Black Friday',
  coupon: 'BFCM50',
  pct: 50,
  dateLabel: 'Nov 27 – 29, 2026',
  headline: ['Black', 'Friday'],
  startsAt: '2026-11-27T00:00:00Z',
  startLabel: 'November 27, 2026 at 12:00 AM UTC',
  endsAt: '2026-11-29T23:59:59Z',
  endLabel: 'November 29, 2026 at 11:59 PM UTC',
};

// /black-friday is one URL for the whole campaign: Early Black Friday until Nov 26,
// Black Friday Nov 27-29, then Cyber Monday (extended) through Dec 31.
export function blackFridayAt(now: Date) {
  if (now >= new Date(CYBER_MONDAY.startsAt)) return CYBER_MONDAY;
  if (now >= new Date(BLACK_FRIDAY.startsAt)) return BLACK_FRIDAY;
  return EARLY_BLACK_FRIDAY;
}

const CYBER_MONDAY: Campaign = {
  theme: 'cm',
  name: 'Cyber Monday',
  coupon: 'BFCM50',
  pct: 50,
  dateLabel: 'Nov 30 – Dec 31, 2026',
  headline: ['Cyber', 'Monday'],
  startsAt: '2026-11-30T00:00:00Z',
  startLabel: 'November 30, 2026 at 12:00 AM UTC',
  endsAt: '2026-12-31T23:59:59Z',
  endLabel: 'December 31, 2026 at 11:59 PM UTC',
};

export const HALLOWEEN: Campaign = {
  theme: 'hw',
  name: 'Halloween',
  coupon: 'HALLOWEEN50',
  pct: 50,
  dateLabel: 'Oct 26 – Nov 15, 2026',
  headline: ['Halloween', 'Sale'],
  startsAt: '2026-10-26T00:00:00Z',
  startLabel: 'October 26, 2026 at 12:00 AM UTC',
  endsAt: '2026-11-15T23:59:59Z',
  endLabel: 'November 15, 2026 at 11:59 PM UTC',
};

// Campaign whose window contains `now` (Halloween, then the Black Friday run), else null.
export function activeCampaign(now: Date): Campaign | null {
  for (const c of [HALLOWEEN, blackFridayAt(now)]) {
    if (campaignStatus(c, now) === 'live') return c;
  }
  return null;
}

export const money = (n: number) => '$' + (Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, '');

const RAW_PRODUCTS = [
  { slug: 'nazmart', checkout: 'nazmart-bundle-pack', name: 'Nazmart', cat: 'Multi-tenancy eCommerce SaaS', price: 69, desc: 'Launch a Shopify-style platform where vendors open their own stores and pay you a subscription.', proof: '★ 4.5/5 · 525+ sales', badge: 'Best seller', url: '/products/nazmart-multi-tenancy-ecommerce-platform' },
  { slug: 'fundorex', checkout: 'fundorex-bundle-pack', name: 'Fundorex', cat: 'Crowdfunding & donations', price: 69, desc: 'Run donation or reward-based crowdfunding campaigns with multi-gateway payments and reports.', proof: '743+ sales', badge: 'Most sold', url: '/products/fundorex-crowdfunding-platform' },
  { slug: 'xilancer', checkout: 'xilancer-bundle-pack', name: 'Xilancer', cat: 'Freelancer marketplace', price: 59, desc: 'Build a Fiverr-style marketplace with gigs, projects, milestones and wallet payments.', proof: '★ 4.4/5 · 450+ installs', badge: '', url: '/products/xilancer-freelancer-marketplace-script' },
  { slug: 'prohandy', checkout: 'prohandy-everything-bundle', name: 'Prohandy', cat: 'On-demand home services', price: 39, desc: 'Multi-provider booking platform with Flutter apps, live chat, payments and provider ratings.', proof: 'Flutter apps + Laravel admin', badge: '', url: '/products/prohandy-on-demand-home-service-marketplace' },
  { slug: 'helpnest', checkout: 'helpnest-everything-bundle', name: 'Helpnest', cat: 'AI chatbot & support SaaS', price: 59, desc: 'AI chatbot and support ticketing you can run as your own SaaS.', proof: 'Laravel · PHP 8', badge: 'New', url: '/products/helpnest-ai-chatbot-support-script' },
  { slug: 'nexelit', checkout: 'nexelit-exclusive-pack', name: 'Nexelit', cat: 'Multipurpose business CMS', price: 99, desc: 'Drag-and-drop website CMS with 21+ home page layouts for agencies and businesses.', proof: '21+ home pages', badge: '', url: '/products/nexelit-multipurpose-website-business-management-system-cms' },
  { slug: 'qixer', checkout: 'qixer-everything-bundle', name: 'Qixer', cat: 'On-demand service marketplace', price: 59, desc: 'TaskRabbit-style marketplace with buyer and seller Flutter apps, GPS discovery and 20+ payment gateways.', proof: 'Laravel 12 + Flutter apps', badge: '', url: '/products/qixer-on-demand-service-marketplace' },
  { slug: 'multisaas', checkout: 'multisaas-bundle-pack', name: 'MultiSaas', cat: 'Website builder SaaS', price: 59, desc: 'Launch your own website builder SaaS with 10+ modules, 15+ themes and custom domains per tenant.', proof: '10+ modules · 15+ themes', badge: '', url: '/products/multisaas-website-builder-saas' },
  { slug: 'botmerze', checkout: 'botmerze-everyting-bundle', name: 'Botmerze', cat: 'AI chatbot SaaS for eCommerce', price: 49, desc: 'Self-hosted AI chatbot SaaS. RAG-powered with pgvector, WooCommerce and Shopify sync, and 18+ payment gateways.', proof: 'No monthly AI fees', badge: '', url: '/products/botmerze-ai-chatbot-saas-ecommerce' },
  { slug: 'safecart', checkout: 'safecart-bundle-pack', name: 'SafeCart', cat: 'Multi-vendor eCommerce', price: 39, desc: 'Self-hosted multi-vendor marketplace with 3 Flutter apps, POS, delivery tracking and 26+ gateways.', proof: '3 Flutter apps · 26+ gateways', badge: '', url: '/products/safecart-multi-vendor-laravel-ecommerce-platform' },
  { slug: 'zaika', checkout: 'zaika-bundle-pack', name: 'Zaika', cat: 'Single-vendor eCommerce', price: 39, desc: 'Single-vendor Laravel eCommerce platform with a no-code page builder, 30+ widgets and 15+ payment gateways.', proof: '30+ widgets · 15+ gateways', badge: '', url: '/products/zaika-ecommerce-shopping-laravel-platform' },
  { slug: 'grenmart', checkout: 'greenmart-bundle-pack', name: 'Grenmart', cat: 'Organic grocery eCommerce', price: 39, desc: 'Organic grocery and multipurpose Laravel eCommerce script with a no-code builder, 50+ widgets and 20+ payment gateways.', proof: '50+ widgets · 20+ gateways', badge: '', url: '/products/grenmart-organic-grocery-ecommerce' },
  { slug: 'gocar', checkout: 'gocar-everything-bundle', name: 'GoCar', cat: 'On-demand car service marketplace', price: 39, desc: 'Laravel + Flutter script for a car service marketplace with vehicle booking, tracking and 19+ gateways.', proof: 'Laravel + Flutter', badge: '', url: '/products/gocar-on-demand-car-service-marketplace' },
  { slug: 'influstar', checkout: 'infustar-bundle-pack', name: 'Influstar', cat: 'Influencer marketplace', price: 39, desc: 'Influencer hiring marketplace with escrow, live chat, subscriptions and 20+ gateways.', proof: 'Escrow + live chat', badge: '', url: '/products/influstar-influencer-hiring-marketplace-platform' },
  { slug: 'listocean', checkout: 'listocean-bundle-pack', name: 'ListOcean', cat: 'Classified ads platform', price: 29, desc: 'Classified ads script with live chat, Google Maps, memberships, wallet and 4 no-code builders.', proof: 'Laravel · full source code', badge: '', url: '/products/listocean-classified-ads-listing-platform' },
];

export const PRODUCTS = RAW_PRODUCTS.map((p) => ({
  ...p,
  img: `/campaign/${p.slug}.png`,
}));

// What buying every product on its own (regular license) would cost. Derived from
// PRODUCTS so the bundle's saving stays correct when a product or price changes.
export const BUNDLE_VALUE = PRODUCTS.reduce((sum, p) => sum + p.price, 0);

export const BUNDLES = {
  everything: { price: '$499', amount: 499, url: '/checkout?product=all-products-everything-bundle-package' },
  exclusive: { price: '$999', url: '/checkout?product=all-products-exclusive-package' },
};

export function faqsFor(c: Campaign) {
  return [
    { q: 'How do I use the coupon?', a: `Copy ${c.coupon}, click Get on any product above and the code is filled in at checkout. The ${c.pct}% discount applies before payment.` },
    { q: 'Does the code work on bundles and Exclusive licenses?', a: 'The code works on the bundle pack and Exclusive License of every individual product. The all-product Everything Bundle and Exclusive License are already fixed prices, so they do not need a code.' },
    { q: 'What is in the $499 and $999 all-product offers?', a: 'The $499 offer gives you the Everything Bundle of every Xgenious product. The $999 Exclusive License adds full source modification rights, rebranding, no license key enforcement and priority support. Both are fixed prices, so no coupon is needed.' },
    { q: 'When does the deal end?', a: `The offer ends ${c.endLabel}. After that, prices return to normal.` },
    { q: 'Do I still get updates and support?', a: 'Yes. Every license includes lifetime updates and 6 months of support from the Xgenious team.' },
    { q: 'Can I get a refund?', a: `Refunds follow the Xgenious Refund Policy, linked in the site footer. Any license bought with the ${c.pct}% sale discount is non-refundable.` },
  ];
}

const CC = 'CodeCanyon';
const reviewRows: [string, string, string, string][] = [
  ['Launched our multi-vendor SaaS platform in under 3 weeks. The subscription billing, custom domain support, and commission system were all ready to go. Zero unexpected blockers.', 'marketplace_founder', 'Code quality', CC],
  ['Xgenious delivered in 14 weeks what two other agencies said would take 6 months. They clearly know production software.', 'CTO', 'Marketplace Platform', 'Client'],
  ['Support team speed is impressive. Raised a ticket and got a meaningful reply within the hour. The team clearly knows their product inside out.', 'rumireminder', 'Customer support', CC],
  ['Hats off to the Fundorex Team (xgenious). Prior to Fundorex we had explored (and foolishly purchased) another theme which, in the end, did not meet our needs as fully as Fundorex.', 'Fundorex buyer', 'Fundorex', CC],
  ['Clean codebase, well-organised file structure, and easy to customise. The Laravel backend is solid and extending features is straightforward for any developer.', 'farjanul', 'Code quality', CC],
  ['The POS plugin is a game changer for our vendors who also have physical stores. Barcode scanning, receipt printing, and inventory sync all work perfectly out of the box.', 'digital_store_pro', 'Feature availability', CC],
  ['The code quality was outstanding. Clean architecture, well-documented, and built to scale. Not a template in sight.', 'Founder', 'eCommerce SaaS', 'Client'],
  ['Had a complex customisation requirement and the support team jumped on a call to walk me through it. That level of dedication is unheard of for a script at this price.', 'techlaunch_io', 'Customer support', CC],
  ['UI design is modern and professional. Vendors love the storefront and customers find it intuitive. Sales increased after we migrated our marketplace to Nazmart.', 'ckothari', 'Design quality', CC],
  ['The new update is amazing and built with clean UI/UX design. The page builder allows users to customise any page — that\'s a great deal. The support team is very good; they resolve issues instantly.', 'sunfocus', 'Code quality', CC],
  ['I highly recommend both the excellent customer service and the high-quality code. The team goes above and beyond to make sure everything works perfectly.', 'patriceoulai', 'Customer support', CC],
  ['Best customer support. I had errors and they helped me and resolved them all very quickly. Impressed with how fast and professional the response was.', 'deyaaohip100', 'Customer support', CC],
  ['Personally, I am very satisfied with the customer service. They are very responsive and always ready to help with any issue I run into.', 'Lass46', 'Customer support', CC],
  ['Script quality is excellent and the customer support is top notch. Everything I needed for my marketplace was already included. Highly recommended.', 'sunnysaipavan3', 'Feature availability', CC],
  ['Code quality is outstanding, features are comprehensive, and the support team responds quickly — even going beyond their standard obligations to help you succeed.', 'webnegaran', 'Feature availability', CC],
  ['Great customer support. Every ticket was handled professionally and promptly. The product itself is feature-rich and well-structured for a multi-tenancy platform.', 'XDeen_LLC', 'Customer support', CC],
  ['Had some initial setup issues but the team was professional and friendly throughout. They resolved everything quickly and the platform is now running smoothly.', 'abojoker17', 'Flexibility', CC],
  ['Script quality is very good. Multi-tenancy architecture is solid and subscription billing works flawlessly. One of the best eCommerce SaaS scripts on CodeCanyon.', 'bponights', 'Feature availability', CC],
  ['Author\'s professionalism is top-tier. Very responsive to issues and genuinely dedicated to the product. Rare to find this level of post-sale commitment.', 'souravdutts007', 'Customer support', CC],
  ['Customising the platform to match our brand was easy. The theme system is well-thought-out and the admin panel gives full control over every tenant store.', 'aleksandrmasnyk01', 'Customizability', CC],
  ['Vendors onboard themselves without any help from us. The storefront builder is intuitive enough that non-technical shop owners set up and go live the same day.', 'saas_ventures', 'Design quality', CC],
  ['DPA signed in 24 hours. Threat model reviewed on the architecture call. That level of professionalism is rare at this price point.', 'VP Engineering', 'B2B SaaS', 'Client'],
  ['Xgenious is not just a company; they are a team full of honesty, support, and professionalism.', 'Sourav Dutta', 'Support', 'Google Review'],
  ['A product is only as good as the team that supports it. You guys are the best. Stable product and the team is very polite, efficient and always ready to help.', 'Rohit Ahuja', 'Support', 'Google Review'],
];

export const REVIEWS = reviewRows.map(([quote, name, topic, source]) => ({
  quote, name, topic, source,
  initials: name.replace(/[^A-Za-z ]/g, ' ').trim().split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase(),
}));
