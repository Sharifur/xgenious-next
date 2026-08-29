export const COLOR = '#059669';
export const COLOR_HOVER = '#047857';
export const LIGHT_COLOR = '#ECFDF5';
export const DARK_BG = '#0A1410';
export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/free-software/free-self-hosted-ecommerce-platform`;

export const REPO_URL = 'https://github.com/XgeniousLLC/geniusCommerz';
export const GITHUB_URL = 'https://github.com/XgeniousLLC/geniusCommerz/archive/refs/heads/main.zip';
export const DOCS_URL = 'https://xgeniousllc.github.io/geniusCommerz/';
export const DEMO_URL = 'https://genius-commerz.xgenious.com';
export const LICENSE_UUID = '6afa2e8c-abed-4dfa-8fdc-9d889b938839';

export const PROVIDER_COUNTS = [
  { label: 'Payment gateways', value: 39 },
  { label: 'SMS gateways', value: 20 },
  { label: 'Shipping carriers', value: 19 },
  { label: 'Fraud checkers', value: 11 },
  { label: 'AI providers', value: 4 },
  { label: 'Bangladeshi couriers', value: 3 },
  { label: 'Exchange-rate sources', value: 2 },
];

export const OTHER_FACTS = [
  { label: 'Countries supported', value: '213', detail: 'dial codes, subdivisions, postal rules' },
  { label: 'Currencies', value: '155', detail: 'correct decimal handling' },
  { label: 'Automated tests', value: '236', detail: 'passing' },
  { label: 'Commission taken', value: '0%', detail: 'on every order, every gateway' },
];

// Settings-driven integrations, not provider definitions, so not part of the 98 total.
export const OTHER_INTEGRATIONS = [
  { category: 'Tracking', items: 'Google Tag Manager · Meta (Pixel + Conversions API) · GA4 (via GTM + Measurement Protocol) · TikTok (Pixel + Events API)' },
  { category: 'Media storage', items: 'Local server disk (default) · AWS S3 · Cloudflare R2' },
  { category: 'Product feeds', items: 'Google Merchant · Facebook catalogue' },
];

export const PAYMENT_GATEWAYS = [
  { region: 'Worldwide', providers: ['Stripe', 'PayPal', 'Adyen', 'Authorize.Net', 'Paddle', '2Checkout', 'Cash on Delivery'] },
  { region: 'Bangladesh', providers: ['SSLCOMMERZ', 'bKash', 'Nagad', 'aamarPay', 'ShurjoPay'] },
  { region: 'India', providers: ['Razorpay', 'Cashfree', 'PayU India', 'PhonePe', 'Paytm'] },
  { region: 'Africa', providers: ['Paystack', 'Flutterwave', 'Monnify', 'M-Pesa', 'MTN MoMo', 'Yoco', 'Peach Payments'] },
  { region: 'Gulf & MENA', providers: ['PayTabs', 'Tap Payments', 'Moyasar', 'Fawry'] },
  { region: 'Europe', providers: ['Mollie', 'iyzico', 'Vipps MobilePay'] },
  { region: 'Pakistan', providers: ['Easypaisa', 'JazzCash'] },
  { region: 'Latin America', providers: ['MercadoPago', 'Pagar.me'] },
  { region: 'Southeast Asia', providers: ['Midtrans', 'Xendit'] },
  { region: 'North America & APAC', providers: ['Square', 'KakaoPay'] },
];

export const SHIPPING_CARRIERS = [
  { region: 'Worldwide', providers: ['DHL Express', 'FedEx', 'UPS', 'EasyPost', 'Shippo'] },
  { region: 'India', providers: ['Delhivery', 'Shiprocket', 'Blue Dart'] },
  { region: 'Africa', providers: ['Sendbox', 'GIG Logistics', 'Kwik Delivery', 'Bob Go'] },
  { region: 'Gulf', providers: ['Aramex', 'SMSA Express', 'Naqel Express', 'Torod'] },
  { region: 'Brazil', providers: ['Melhor Envio', 'Correios', 'Loggi'] },
];
export const BD_COURIERS = ['Pathao', 'RedX', 'Steadfast'];

export const SMS_GATEWAYS = [
  { region: 'Worldwide', providers: ['Twilio', 'Vonage', 'MessageBird', 'Plivo', 'Amazon SNS', 'Infobip', 'Sinch', 'Telnyx'] },
  { region: 'Bangladesh', providers: ['BulkSMSBD', 'SMS.BD', 'MRAM'] },
  { region: 'India', providers: ['MSG91', 'Gupshup', 'Fast2SMS'] },
  { region: 'Gulf & MENA', providers: ['Unifonic', 'Taqnyat', 'Cequens'] },
  { region: 'Africa', providers: ["Africa's Talking", 'Termii', 'Clickatell'] },
];

export const FRAUD_CHECKERS = [
  { region: 'Worldwide', providers: ['IPQualityScore', 'SEON', 'Sift', 'MaxMind minFraud'] },
  { region: 'Europe', providers: ['Ravelin'] },
  { region: 'India', providers: ['Bureau'] },
  { region: 'Gulf', providers: ['Uqudo'] },
  { region: 'Africa', providers: ['Smile ID', 'Youverify'] },
  { region: 'Bangladesh', providers: ['FraudBD', 'BDCourier'] },
];

export const AI_PROVIDERS = ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'DeepSeek'];
export const EXCHANGE_RATE_SOURCES = ['open.er-api.com, free and keyless', 'ExchangeRate-API'];

export const PLATFORM_MODULES = [
  { name: 'Catalogue', desc: 'Products, variants, categories, and inventory across every store.' },
  { name: 'Orders', desc: 'Order lifecycle from pending to fulfilled, with a full audit trail.' },
  { name: 'Customers', desc: 'Accounts, addresses, and order history per customer.' },
  { name: 'Marketing', desc: 'Discounts, coupons, and abandoned-cart recovery.' },
  { name: 'Tracking', desc: 'GTM, Meta Pixel + Conversions API, GA4, and TikTok Pixel + Events API.' },
  { name: 'Accounting', desc: 'Order-level tax and revenue exports for bookkeeping.' },
  { name: 'Localisation', desc: '213 countries, 155 currencies, and translatable storefront copy.' },
  { name: 'AI', desc: 'Product description and content assistance: bring your own key for OpenAI, Anthropic Claude, Google Gemini, or DeepSeek.' },
];

export const TECH_STACK = [
  { name: 'Laravel 12', role: 'Application framework, PHP 8.2+', logo: '/tech/laravel.svg' },
  { name: 'PHP 8.2+', role: 'Language runtime', logo: '/tech/php.svg' },
  { name: 'MySQL 8', role: 'Primary datastore', logo: '/tech/mysql.svg' },
  { name: 'React 19 + Inertia v3', role: 'Storefront & admin UI', logo: '/tech/react.svg' },
  { name: 'TypeScript + Vite', role: 'Frontend build tooling', logo: null },
  { name: 'Alpine.js', role: 'Lightweight admin-panel interactivity', logo: null },
  { name: 'Laravel Horizon', role: 'Queue monitoring & background jobs', logo: '/tech/laravel.svg' },
  { name: 'Pest', role: '236 automated tests', logo: null },
  { name: 'Dual auth guard', role: 'Separate admin and customer sessions', logo: null },
];

export const SERVER_REQUIREMENTS = [
  { label: 'PHP', value: '8.2+' },
  { label: 'Database', value: 'MySQL 8' },
  { label: 'Node.js', value: '18+' },
  { label: 'Deployment docs', value: 'AWS · DigitalOcean · cPanel · Docker · plain VPS' },
];

export const FAQS = [
  {
    q: 'Is Genius Commerz really free?',
    a: 'Yes. The full source is MIT licensed, with no per-order fee, no expiry, and no paid tiers. You only pay for the server you host it on.',
  },
  {
    q: 'Do you take a commission on sales?',
    a: '0%. Genius Commerz never sits between you and your payment gateway, so nothing is deducted from your revenue by Xgenious. Any fees you pay are your payment gateway\'s own processing fees, set by that provider, not by us.',
  },
  {
    q: 'How does it compare to WooCommerce and Shopify?',
    a: 'Shopify charges monthly and takes a cut of sales unless you use Shopify Payments. WooCommerce is free, but each regional gateway, courier, and tax setup is typically a separate paid extension. Genius Commerz ships those 98 integrations in the box on one integration layer, at no cost and with no commission, though WooCommerce has a far larger plugin ecosystem, and Shopify is a managed service with vendor support, which self-hosting does not include.',
  },
  {
    q: 'Is there support if I need help?',
    a: 'Documentation and the public issue tracker are free to use. Contact Xgenious directly if you need paid installation or customisation help.',
  },
  {
    q: 'Which payment gateways have been tested end-to-end?',
    a: 'Stripe, PayPal, and Cash on Delivery have full end-to-end webhook coverage in the automated test suite. The other 36 gateways are implemented against each provider\'s documented API and tested for structure, not against live sandbox accounts, so test each one in its own sandbox before enabling it live.',
  },
  {
    q: 'Can I migrate from another platform?',
    a: 'Not yet. There is currently no automated importer from Shopify, WooCommerce, or any other platform: products, orders, and customers go in via the admin UI or a direct database import.',
  },
  {
    q: 'Does it handle EU VAT and US sales tax automatically?',
    a: 'One-click templates apply EU VAT across 27 member states, UK VAT, US sales tax across 46 states, or Canada GST/HST/PST. These are a starting point, not tax advice: the US template carries state base rates only, counties add their own, and nexus rules decide where you must collect at all.',
  },
];
