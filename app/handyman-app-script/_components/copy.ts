import { COMBO_PRICE, EXTENDED_PRICE, REGULAR_PRICE } from '@/app/products/prohandy-on-demand-home-service-marketplace/_components/constants';

export const PAGE_URL = 'https://xgenious.com/handyman-app-script';
export const PRODUCT_PATH = '/products/prohandy-on-demand-home-service-marketplace';
export const PRODUCT_PRICING = `${PRODUCT_PATH}#pricing`;
export const PLAY_CLIENT = 'https://play.google.com/store/search?q=prohandy+client';
export const PLAY_PROVIDER = 'https://play.google.com/store/search?q=prohandy+provider';

export const FAQS = [
  {
    q: 'What is a handyman app script?',
    a: 'Ready-made source code for a handyman marketplace: a customer app, a provider app and an admin panel. You install it on your own server, add your services and providers, and launch.',
  },
  {
    q: 'How much does ProHandy cost?',
    a: `$${REGULAR_PRICE} for the web platform and admin, $${COMBO_PRICE} for the Everything Bundle with the Flutter customer and provider apps and the WhatsApp plugin, or $${EXTENDED_PRICE} for the Exclusive licence with white-label and SaaS rights. All are one-time payments. You can charge your customers on the Regular licence.`,
  },
  {
    q: 'Are the mobile apps included?',
    a: `Yes, in the $${COMBO_PRICE} Everything Bundle and the $${EXTENDED_PRICE} Exclusive licence. The $${REGULAR_PRICE} Regular licence is web and admin only. The demo apps are on Google Play.`,
  },
  {
    q: 'Can customers post jobs and get quotes?',
    a: 'Yes. Customers post a job, providers send offers with a cover letter, and the customer hires one. Instant booking of fixed-price services works alongside it.',
  },
  {
    q: 'Does it work on shared hosting?',
    a: 'Yes. ProHandy runs on PHP 8.0+ and MySQL and works on cPanel hosting, and installation is free.',
  },
  {
    q: 'Which payment gateways are supported?',
    a: '19, including PayPal, Stripe, Razorpay, Paystack, Mollie, Midtrans, Cashfree, Mercado Pago, Square, Flutterwave, PayFast and manual payment.',
  },
  {
    q: 'Does ProHandy have live tracking or a serviceman app?',
    a: 'Not yet. Live provider tracking, provider subscriptions and a serviceman app are on the roadmap.',
  },
];
