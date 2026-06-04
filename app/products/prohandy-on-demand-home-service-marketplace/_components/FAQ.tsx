'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COLOR } from './constants';

const FAQS = [
  {
    q: 'What is Prohandy?',
    a: 'Prohandy is a complete Laravel 12 and Flutter 3.32 script for building an on-demand service marketplace. It connects clients with service providers through a dual-sided platform — clients book services with a cart system or post jobs, and providers manage listings, staff, and orders. It includes Flutter mobile apps for both clients and providers, a full admin panel, real-time live chat, push notifications, and 19 named payment gateways.',
  },
  {
    q: 'What is included with the Regular License?',
    a: 'The Regular License ($59) includes the client Flutter mobile app, provider Flutter mobile app, web frontend, and Laravel admin panel. It covers a single project deployment — one domain — with a lifetime license, 6 months of technical support, lifetime free updates, and free cPanel installation. You cannot charge end users or resell the platform under the Regular License.',
  },
  {
    q: 'What does the Extended License allow?',
    a: 'The Extended License ($169) includes everything in the Regular License plus commercial SaaS rights — you can build your own branded service marketplace, charge clients for bookings, white-label the platform by removing all Xgenious branding, and modify the source code freely. It cannot be resold or redistributed as-is.',
  },
  {
    q: 'Does Prohandy include Flutter mobile apps?',
    a: 'Yes. Both the client app and provider app are built with Flutter and are included with both Regular and Extended licenses. The client app handles service browsing, cart-based booking, job posting, live chat, and push notifications. The provider app handles job listings, service management, staff management, order tracking, and live chat.',
  },
  {
    q: 'What are the server requirements for Prohandy?',
    a: 'Prohandy requires PHP 8.0+, MySQL, and a compatible hosting environment — it works with standard cPanel hosting. Free admin panel cPanel installation is included with every purchase. Postman collection is also provided for REST API documentation.',
  },
  {
    q: 'How does the service booking workflow work for clients?',
    a: 'Clients browse service categories, review service and provider details, select add-ons, choose a preferred staff member, pick a date and time, add order notes, and check out through a cart system. Multiple services can be booked in a single transaction. Clients can choose their payment method at checkout and receive push notifications throughout the process.',
  },
  {
    q: 'What is the job posting feature?',
    a: 'The job posting feature allows clients to create a job listing describing what they need done. Service providers can view available jobs — including on Google Maps by location — and submit offers with cover letters and pricing. Clients review the offers, compare providers, and hire the one they prefer. This is a reverse marketplace model that works alongside standard service booking.',
  },
  {
    q: 'What payment gateways does Prohandy support?',
    a: 'Prohandy includes 20+ payment gateways built into the admin panel — including Stripe, PayPal, Razorpay, Flutterwave, Paystack, Mollie, CinetPay, Square, and more. No third-party billing configuration is required beyond entering API keys in the admin panel.',
  },
  {
    q: 'Is Prohandy multilingual?',
    a: 'Yes. The Prohandy admin panel includes full multilingual support. You can configure the platform in any language and expand to new markets without additional plugins or translation tools.',
  },
  {
    q: 'Is there a WhatsApp integration for Prohandy?',
    a: 'Yes. There is an optional ProHandy WhatsApp Order Plugin available as a separate purchase on CodeCanyon. It integrates with the WhatsApp Business API to allow clients to create orders, receive order notifications, chat with support, and view recent order details through WhatsApp.',
  },
  {
    q: 'What service categories can I build with Prohandy?',
    a: 'Prohandy supports any service vertical — not just home services. You can configure it for home cleaning, beauty and wellness, automotive repair, pet care, fitness and personal training, event services, home improvement, or personal assistance. All categories are managed from the admin panel with no code changes required. 73+ marketplaces have been built on Prohandy across these verticals.',
  },
  {
    q: 'Does Prohandy support social login?',
    a: 'Yes. Both the client app and provider app support multiple authentication methods: email login, phone OTP login, Google sign-in, Facebook sign-in, and Apple sign-in (iOS). This reduces signup friction significantly and increases provider and client onboarding rates compared to email-only platforms.',
  },
  {
    q: 'How does the provider payout and withdrawal system work?',
    a: 'Providers accumulate earnings from completed orders in their Prohandy wallet. They can submit withdrawal requests from the provider app, specifying the amount and preferred payout method. Admins process withdrawal requests from the admin panel. Full withdrawal history is visible to providers in the app.',
  },
  {
    q: 'Does Prohandy have a coupon and discount system?',
    a: 'Yes. The admin panel includes a full coupon management system. You can create fixed-amount coupons (e.g. $10 off) or percentage-based coupons (e.g. 15% off). Coupons can be applied by clients at checkout. This is useful for acquisition campaigns, referral programs, and seasonal promotions.',
  },
  {
    q: 'Can providers set their own pricing?',
    a: 'Yes. Providers create their own service listings with custom pricing. Clients see the provider\'s price when browsing services. For job postings, providers submit custom offers including their own price and a cover letter — clients compare offers and hire the best fit. The admin can also set platform-wide commission rates.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="pb-20 lg:pb-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="max-w-[760px] mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-[#6b7280] text-[15px] leading-6">
              Everything you need to know before purchasing Prohandy.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#E5E7EC] overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-[15px] font-semibold text-[#0F1112]">{faq.q}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: open === i ? '400px' : '0px' }}
                >
                  <p className="px-6 pb-5 text-[14px] text-[#484848] leading-7">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: '#0d0f14' }}
          >
            <div>
              <p className="text-white font-semibold text-[16px] mb-1">Still have questions?</p>
              <p className="text-[#6b7280] text-[14px]">Check the documentation or open a pre-sale ticket.</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href="https://docs.xgenious.com/docs/prohandy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-semibold px-4 py-2 rounded-full border transition-colors"
                style={{ borderColor: '#2d2d3a', color: COLOR }}
              >
                Documentation
              </a>
              <Link
                href="/contact"
                className="text-[13px] font-semibold px-4 py-2 rounded-full text-white"
                style={{ background: COLOR }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#E5E7EC] flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#6b7280]">
            <span>Related:</span>
            <Link href="/products/xilancer-freelancer-marketplace-script" className="hover:underline" style={{ color: COLOR }}>Xilancer — Freelancer Marketplace</Link>
            <Link href="/products/nazmart-multi-tenancy-ecommerce-platform" className="hover:underline" style={{ color: COLOR }}>Nazmart — Multi-Tenant eCommerce</Link>
            <Link href="/custom-saas-development-company" className="hover:underline" style={{ color: COLOR }}>Custom SaaS Development</Link>
            <a href="https://en.wikipedia.org/wiki/On-demand_economy" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:underline">On-Demand Economy — Wikipedia ↗</a>
          </div>

        </div>
      </div>
    </section>
  );
}
