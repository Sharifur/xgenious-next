export const BASE_URL = 'https://xgenious.com';
export const CANONICAL = `${BASE_URL}/products/fundorex-crowdfunding-platform`;
export const COLOR = '#F97316';
export const LIGHT_COLOR = '#FFF7ED';
export const PURCHASE_URL = 'https://codecanyon.net/item/fundorex-crowdfunding-platform/33286096';
export const DEMO_URL = 'https://fundorex.xgenious.com';
export const ADMIN_URL = 'https://fundorex.xgenious.com/admin';
export const DOCS_URL = 'https://docs.xgenious.com/docs/fundorex/';
export const REGULAR_PRICE = 69;
export const COMBO_PRICE = 88;
export const EXTENDED_PRICE = 225;

export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.xgenious.fundorex';

export const QUICK_LINKS = [
  { label: 'Admin Panel', href: ADMIN_URL },
  { label: 'Mobile App', href: PLAY_URL },
  { label: 'Documentation', href: DOCS_URL },
  { label: 'Pricing', href: '#pricing' },
];

export const STATS = [
  { value: '734+', label: 'Active sales' },
  { value: '4.70/5', label: 'CodeCanyon rating' },
  { value: '43', label: 'Verified reviews' },
  { value: '1-time', label: 'Purchase' },
];

export const TECH = [
  { name: 'Laravel', desc: 'PHP 8+ backend framework' },
  { name: 'Bootstrap 4', desc: 'Responsive UI components' },
  { name: 'MySQL', desc: 'Relational database' },
  { name: 'jQuery', desc: 'Dynamic frontend interactions' },
  { name: 'Flutter', desc: 'Cross-platform mobile app' },
  { name: 'Stripe & PayPal', desc: 'Secure payment processing' },
];

export const FEATURES: { title: string; desc: string; img?: string }[] = [
  {
    title: 'Donation Module',
    desc: 'User/admin can create donation campaigns to raise money for their need. Full goal tracking, media uploads, and real-time progress.',
    img: '/products/fundorex-feature-1.jpg',
  },
  {
    title: 'Event Module',
    desc: 'Admin can add events to the website and has the option to sell event tickets through the platform.',
    img: '/products/fundorex-feature-2.jpg',
  },
  {
    title: 'Flexible Charging Setting',
    desc: 'Settings for admin to decide how much to charge from donors — percentage or flat amount per campaign.',
    img: '/products/fundorex-feature-3.jpg',
  },
  {
    title: 'Emergency Funding Notice',
    desc: 'You can set emergency funding notice if any campaign owner needs an urgent fund — highlighted prominently.',
    img: '/products/fundorex-feature-4.jpg',
  },
  {
    title: 'Option for Admin Charge',
    desc: 'Admin can set charge type as percentage or fixed amount from donor or campaign owner.',
    img: '/products/fundorex-feature-5.jpg',
  },
  {
    title: 'Quick Share Option',
    desc: 'All the popular social platform share options along with QR code and email sharing.',
    img: '/products/fundorex-feature-6.jpg',
  },
  {
    title: 'Option For User Campaign',
    desc: 'Any user can create their own donation campaign which needs to be approved by the admin before going live.',
    img: '/products/fundorex-feature-7.jpg',
  },
  {
    title: 'Support Ticketing Feature',
    desc: 'Comes with a support ticketing system — any user can raise a ticket if they need any help.',
    img: '/products/fundorex-feature-8.jpg',
  },
  {
    title: 'Color Settings',
    desc: 'From the admin panel you can change all the colors for the website to match your brand identity.',
    img: '/products/fundorex-feature-9.jpg',
  },
  {
    title: 'Newsletter Module',
    desc: 'Newsletter is a very useful way to stay connected with your audience and keep donors updated.',
    img: '/products/fundorex-feature-10.jpg',
  },
  {
    title: 'Facebook & Google Login',
    desc: 'This script has the option to login using Facebook or Google account for a faster onboarding experience.',
    img: '/products/fundorex-feature-11.jpg',
  },
];

export const REVIEWS = [
  {
    name: 'ahmedtariq84',
    category: 'Features',
    rating: 5,
    body: 'Excellent crowdfunding script. Everything is well thought out — campaign creation, payments, admin controls. Setup was straightforward and support was fast.',
  },
  {
    name: 'marisoldesign',
    category: 'Design Quality',
    rating: 5,
    body: 'Beautiful UI and clean code. My clients love the donation flow. The admin panel gives full control without overwhelming anyone. Great product.',
  },
  {
    name: 'ibrahimkhoury',
    category: 'Customer Support',
    rating: 5,
    body: 'Support team is outstanding. Responded within hours and resolved my configuration questions completely. Product works exactly as advertised.',
  },
  {
    name: 'ngohelper',
    category: 'Features',
    rating: 5,
    body: 'We built a charity platform for our NGO using Fundorex. The campaign approval workflow and emergency notice feature were exactly what we needed.',
  },
  {
    name: 'startupfundio',
    category: 'Customizability',
    rating: 5,
    body: 'Clean Laravel codebase, easy to extend. Added custom campaign categories and a referral system in a few days. No unnecessary bloat.',
  },
  {
    name: 'techlaunch22',
    category: 'Customer Support',
    rating: 5,
    body: 'Had some server setup questions and the team walked me through everything. The documentation is thorough too. Highly recommend for anyone building a fundraising platform.',
  },
];
