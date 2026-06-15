'use client';

import { useState } from 'react';
import { COLOR, LIGHT_COLOR } from './constants';

const FAQS = [
  {
    q: 'What is Botmerze?',
    a: 'Botmerze is a self-hosted AI chatbot SaaS script built on Laravel 12. It lets you deploy a RAG-powered chatbot on WooCommerce, Shopify, or any custom store — trained on your product catalog, PDFs, URLs, and web pages. You own the software and pay no monthly AI subscription fees beyond your own OpenAI API usage.',
  },
  {
    q: 'How does the RAG-powered AI work?',
    a: 'Botmerze uses Retrieval-Augmented Generation (RAG) with PostgreSQL + pgvector to embed your knowledge base into searchable vectors. When a customer asks a question, the system retrieves the most relevant context from your training data and passes it to OpenAI GPT — so the AI answers from your store\'s actual content, not generic training data. This eliminates hallucinations and produces accurate, context-specific responses.',
  },
  {
    q: 'Does Botmerze work with WooCommerce and Shopify?',
    a: 'Yes. Botmerze has native integrations for both WooCommerce and Shopify. It syncs live product catalog, inventory levels, order status, and customer data in real time. The chatbot can answer "Is this item in stock?", "Where is my order?", and product-specific questions using up-to-date store data — no manual updates required.',
  },
  {
    q: 'What server is required to run Botmerze?',
    a: 'Botmerze requires PHP 8.3+, PostgreSQL 12+ with pgvector extension enabled, Redis 6+, Composer 2.x, and an OpenAI API key. A Linux VPS (2 GB RAM minimum) or cPanel hosting with PostgreSQL support works well. Free cPanel installation assistance is included with every purchase.',
  },
  {
    q: 'Is pgvector difficult to set up?',
    a: 'pgvector is a PostgreSQL extension supported by most modern VPS providers and managed database services. On a Linux VPS it installs with a single command. If you need help, free setup assistance is included with your purchase — just open a support ticket.',
  },
  {
    q: 'Can I use Botmerze as a SaaS and charge my own clients?',
    a: 'Yes — that\'s one of Botmerze\'s primary use cases. The Regular License ($49) and Everything Bundle ($69) allow you to install Botmerze and offer chatbot subscriptions to your clients (each client gets an isolated environment). The Exclusive License ($199) covers white-labeling and source code modification for full SaaS ownership. 18+ payment gateways (Stripe, PayPal, Razorpay, and more) handle billing automatically.',
  },
  {
    q: 'What training sources does Botmerze support?',
    a: 'Botmerze can ingest training data from PDFs and DOCX documents, website URLs (it crawls and indexes the content), and images (via Tesseract OCR for extracting text from product images and screenshots). You can also connect your WooCommerce or Shopify store for live product data sync.',
  },
  {
    q: 'Do I need my own OpenAI API key?',
    a: 'Yes. Botmerze uses your own OpenAI API key, which means you pay OpenAI directly at cost — no markup or hidden AI fees. You can use GPT-4o, GPT-4, or GPT-3.5-Turbo depending on your cost and quality preferences. This also means your customer conversations stay in your control.',
  },
  {
    q: 'Is there a monthly fee after purchase?',
    a: 'No monthly fee to Xgenious or CodeCanyon. Your only ongoing cost is the OpenAI API usage billed directly by OpenAI, which scales with actual conversation volume. For a typical small-to-medium store, this is a few dollars per month.',
  },
  {
    q: 'What payment gateways are supported for SaaS billing?',
    a: 'Botmerze includes 18+ payment gateways: Stripe, PayPal, Razorpay, Paytm, Flutterwave, Mollie, SSLCommerz, Paystack, and 10+ more. Subscription plans, trial periods, plan upgrades, and automatic renewals are all managed from the admin panel.',
  },
  {
    q: 'What is the difference between Regular License, Everything Bundle, and Exclusive License?',
    a: 'The Regular License ($49) lets you use Botmerze on one domain and sell chatbot subscriptions to clients. The Everything Bundle ($69) adds SaaS rights — charge end-user subscriptions at a lower entry price. The Exclusive License ($199) adds white-label branding removal, source code modification rights, multiple production deployments, and 12 months priority support. All licenses include lifetime updates.',
  },
  {
    q: 'Does Botmerze include human handoff or live chat support?',
    a: 'Yes. When the AI cannot answer a question or the customer requests human assistance, Botmerze escalates to a built-in support ticket system. Agents see full chat history, can respond from the dashboard, and tickets are tracked with status, priority, and assignment — no third-party helpdesk subscription required.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left — heading col-4 */}
          <div className="lg:col-span-4 lg:sticky lg:top-[88px]">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
              style={{ background: LIGHT_COLOR, color: COLOR }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
              Frequently Asked Questions
            </div>
            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#0F1112] leading-tight mb-4">
              Questions About Botmerze
            </h2>
            <p className="text-[14px] text-[#6b7280] leading-7">
              Everything you need to know before purchase. Not answered here? Open a pre-sale ticket on CodeCanyon.
            </p>
          </div>

          {/* Right — accordion col-8 */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#E5E7EC] overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  style={{ background: open === i ? LIGHT_COLOR : '#fff' }}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-[14px] font-semibold text-[#0F1112] leading-5">{faq.q}</span>
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    className="flex-shrink-0 transition-transform"
                    style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)', color: COLOR }}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-[14px] text-[#6b7280] leading-6">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
