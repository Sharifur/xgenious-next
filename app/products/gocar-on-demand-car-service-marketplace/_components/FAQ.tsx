'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COLOR, REGULAR_PRICE, EXTENDED_PRICE } from './constants';

const FAQS = [
  {
    q: 'What is GoCar?',
    a: 'GoCar is a complete Laravel and Flutter script for building an on-demand car service marketplace. It connects car owners with mechanics and service providers through a booking platform that supports vehicle-specific service selection, real-time order tracking, push notifications, 19+ payment gateways, and a Flutter mobile app for customers. One-time purchase, full source code, no monthly fees.',
  },
  {
    q: 'What car services can I offer with GoCar?',
    a: 'GoCar supports any car service vertical — oil changes, tire rotation, brake service, wheel alignment, engine diagnostics, detailing and car wash, roadside assistance, AC service, and general maintenance. All service categories are managed from the admin panel without any code changes required. You configure the services your mechanics offer.',
  },
  {
    q: 'What is included with the Regular License?',
    a: `The Regular License ($${REGULAR_PRICE}) includes the web frontend and Laravel admin panel. It covers a single project deployment — one domain — with a lifetime license, 6 months of technical support, lifetime free updates, and free cPanel installation. The customer Flutter mobile app is not included in the Regular License — it comes with the Everything Bundle.`,
  },
  {
    q: 'What does the Extended License allow?',
    a: `The Extended License ($${EXTENDED_PRICE}) includes everything in the Regular License plus commercial SaaS rights — you can build your own branded car service marketplace, charge customers for bookings, white-label the platform by removing all Xgenious branding, and modify the source code freely. It cannot be resold or redistributed as-is.`,
  },
  {
    q: 'Does GoCar include a Flutter mobile app?',
    a: 'Yes. The customer app is built with Flutter and available on Android via Google Play. It is included with the Everything Bundle ($79) and Exclusive License ($149) — not the Regular License. The app handles service browsing, vehicle selection, booking, real-time order tracking, push notifications, and payment.',
  },
  {
    q: 'What are the server requirements for GoCar?',
    a: 'GoCar requires PHP 8.0+, MySQL, and a compatible hosting environment — it works with standard cPanel hosting. Free admin panel cPanel installation is included with every purchase. A Postman collection is also provided for REST API documentation.',
  },
  {
    q: 'How does the service booking workflow work for customers?',
    a: 'Customers create an account, select their car make and model, browse available services, choose a service center or branch location, pick a time slot, and confirm payment. Real-time tracking shows order progress from acceptance through service completion. Push notifications keep customers informed at each stage without needing to call the garage.',
  },
  {
    q: 'How does branch and location management work?',
    a: 'Admins define serviceable areas and add branch locations from the admin panel. Each branch can have its own mechanics, services, and availability. Customers see branches available near them and book at a convenient location. This supports multi-city and multi-branch operations from a single installation.',
  },
  {
    q: 'What payment gateways does GoCar support?',
    a: 'GoCar includes 19+ payment gateways built into the admin panel — including Stripe, PayPal, Razorpay, Flutterwave, Paystack, Mollie, CinetPay, Square, and more. No third-party billing configuration is required beyond entering API keys in the admin panel.',
  },
  {
    q: 'Does GoCar support coupon and promotion management?',
    a: 'Yes. The admin panel includes a full coupon management system. You can create fixed-amount coupons (e.g. $10 off) or percentage-based coupons (e.g. 15% off). Customers apply coupons at checkout. Useful for customer acquisition, seasonal promotions, and loyalty campaigns.',
  },
  {
    q: 'How do refunds work in GoCar?',
    a: 'Customers can request refunds through the platform. Admins review and process refund requests from the admin panel. Full refund history is visible to both customers and admins. This is managed entirely within GoCar — no third-party refund tooling required.',
  },
  {
    q: 'Is role-based access control available in GoCar?',
    a: 'Yes. GoCar includes role-based access control for the admin panel. You can assign admin, manager, and mechanic roles with granular permissions. This lets you delegate responsibilities without exposing the full admin panel to every staff member.',
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
              Everything you need to know before purchasing GoCar.
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
                href="https://docs.xgenious.com/docs/gocar-on-demand-mechanic-and-car-service-provider-marketplace-platform/"
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
            <Link href="/products/prohandy-on-demand-home-service-marketplace" className="hover:underline" style={{ color: COLOR }}>Prohandy — Home Service Marketplace</Link>
            <Link href="/products/xilancer-freelancer-marketplace-script" className="hover:underline" style={{ color: COLOR }}>Xilancer — Freelancer Marketplace</Link>
            <Link href="/custom-saas-development-company" className="hover:underline" style={{ color: COLOR }}>Custom SaaS Development</Link>
            <a href="https://en.wikipedia.org/wiki/On-demand_economy" target="_blank" rel="noopener noreferrer" className="text-[#6b7280] hover:underline">On-Demand Economy — Wikipedia ↗</a>
          </div>

        </div>
      </div>
    </section>
  );
}
