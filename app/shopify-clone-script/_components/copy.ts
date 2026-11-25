import type { FaqItem } from '@/components/sections/FAQ';

export const LAST_UPDATED = '2026-11-25';
export const PAGE_URL = 'https://xgenious.com/shopify-clone-script';
export const PRODUCT_PATH = '/products/nazmart-multi-tenancy-ecommerce-platform';
export const PRODUCT_PRICING = `${PRODUCT_PATH}#pricing`;
export const DEMO_URL = 'https://nazmart.net/';

export const FAQS: FaqItem[] = [
  {
    question: 'Is a Shopify clone script legal?',
    answer:
      'Yes. Running a platform with the same business model as Shopify is legal. Copying Shopify’s name, logo, design or code is not. Nazmart has its own code and themes.',
  },
  {
    question: 'Is Nazmart an exact copy of Shopify?',
    answer:
      'No. It follows Shopify’s model of many stores on one platform with subscription plans, but it is its own product with its own admin, themes and features. Some Shopify features, such as Shopify’s app store, have no direct equivalent.',
  },
  {
    question: 'How much does it cost to launch?',
    answer:
      'To charge stores, you need the $99 Everything Bundle (POS, Flutter app, domain reseller and 17 premium plugins) or the $299 Exclusive licence. The $69 Regular licence is the core web panel only and does not let you charge tenants. Add a VPS, a domain and a wildcard SSL certificate.',
  },
  {
    question: 'Which licence do I need to charge stores?',
    answer:
      'The $99 Everything Bundle or the $299 Exclusive licence. The $69 Regular licence covers the core web panel only and does not let you charge tenants.',
  },
  {
    question: 'Can I take a commission on store sales?',
    answer:
      'The landlord can set a commission from the admin panel; there is no automatic commission or payout feature. Most platforms earn from subscription plans, setup fees and add-ons.',
  },
  {
    question: 'Can merchants use their own domain?',
    answer: 'Yes. Every store gets a subdomain automatically and can connect its own domain.',
  },
  {
    question: 'Is each store’s data separate?',
    answer: 'Yes. Nazmart creates a separate database for each store.',
  },
  {
    question: 'Do I need to know how to code?',
    answer:
      'No coding is needed to run the platform. Server setup needs some technical skill, or you can buy the installation service.',
  },
  {
    question: 'Is there a mobile app?',
    answer: 'Yes. The Everything Bundle includes a Flutter app for Android and iOS.',
  },
];

export const OWNER_FEATURES = [
  { title: 'Subscription plans', desc: 'Trials and renewal reminders, with the prices you set.' },
  { title: 'Plan limits', desc: 'Each plan can unlock its own themes, gateways and modules.' },
  { title: 'Automatic store creation', desc: 'A new store is created on a subdomain when a merchant pays.' },
  { title: 'Custom domain approval', desc: 'Merchants can request their own domain. You approve it.' },
  { title: 'Landlord wallet and tickets', desc: 'A wallet for the platform owner, plus support tickets.' },
  { title: 'Webhooks', desc: 'Send store and billing events to the tools you already run.' },
  { title: 'Commission (optional)', desc: 'The landlord can set a commission from the admin panel. There is no automatic commission or payout feature.' },
];

export const MERCHANT_FEATURES = [
  { title: 'Page builder', desc: 'Merchants build pages by dragging blocks. No code.' },
  { title: 'Storefront themes', desc: '23+ themes, so each store can look like its own brand.' },
  { title: 'Inventory', desc: 'Products with variants and custom attributes.' },
  { title: 'Promotions', desc: 'Coupons, campaigns and tax.' },
  { title: 'Digital goods', desc: 'Digital products and gift cards.' },
  { title: 'Languages', desc: 'Multi-language storefronts, including RTL.' },
];

export const BUNDLE_FEATURES = [
  { title: 'POS', desc: 'Point of sale for merchants who also sell in person.' },
  { title: 'Flutter mobile app', desc: 'Android and iOS app included in the Everything Bundle.' },
  { title: 'Domain reseller', desc: 'Offer domains to merchants from the platform.' },
  { title: 'Abandoned-cart recovery', desc: 'Email shoppers who left items in the cart.' },
  { title: 'Affiliate and loyalty', desc: 'Affiliate program and loyalty points.' },
  { title: 'Multi-currency', desc: 'Sell in more than one currency.' },
  { title: 'SMS and WhatsApp', desc: 'Message shoppers through SMS and WhatsApp gateways.' },
  { title: 'Google Merchant feed', desc: 'Send products to Google Merchant Center.' },
  { title: 'WooCommerce import', desc: 'Bring products across from a WooCommerce store.' },
  { title: 'Cloud storage', desc: 'Store files on S3, DigitalOcean Spaces or Wasabi.' },
];
