import type { Metadata } from 'next';
import BookingCTA from '@/components/sections/BookingCTA';
import ServicesGrid from '@/components/sections/ServicesGrid';

const BASE_URL = 'https://xgenious.com';

export const metadata: Metadata = {
  title: 'Book a Free 30-Min Strategy Call — Xgenious',
  description:
    'Schedule a free 30-minute strategy call with Xgenious. Discuss your SaaS, web app, mobile, or AI agent project. No obligation, published scope, committed delivery date.',
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/book-a-call` },
  openGraph: {
    title: 'Book a Free 30-Min Strategy Call — Xgenious',
    description:
      'Schedule a free 30-minute strategy call with Xgenious. Discuss your SaaS, web app, mobile, or AI agent project. No obligation.',
    url: `${BASE_URL}/book-a-call`,
    siteName: 'Xgenious',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Free 30-Min Strategy Call — Xgenious',
    description:
      'Schedule a free 30-minute strategy call with Xgenious. No obligation.',
    images: ['/og-image.png'],
  },
  keywords: [
    'book a strategy call',
    'free consultation software development',
    'schedule a call software company',
    'SaaS development consultation',
    'custom software development call',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens on the 30-minute strategy call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We review your project idea, technical requirements, and goals. You will leave with a clear picture of scope, recommended tech stack, rough timeline, and next steps. No sales pitch — just honest answers to your questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the strategy call really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The 30-minute call has no cost and no obligation. If you decide to move forward, we prepare a detailed proposal. If not, you still leave with actionable insight about your project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who will I speak with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You will speak directly with a senior member of the Xgenious team — not a sales rep. The same people who scope your project are the ones who build it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I prepare before the call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A rough description of what you want to build, who will use it, and any existing systems it needs to connect with. Wireframes, competitor examples, or a one-page brief are helpful but not required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of projects does Xgenious build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Xgenious builds custom SaaS platforms, web applications, mobile apps (iOS and Android), and AI agents. Projects range from early-stage MVPs to full-scale platforms serving thousands of users across 100+ countries.',
      },
    },
    {
      '@type': 'Question',
      name: 'How soon can the project start after the call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After the call we typically deliver a written proposal within 2–3 business days. Once scope and timeline are agreed, development can begin within one week. Published scope and a committed delivery date are included in every engagement.',
      },
    },
  ],
};

const faqs = faqSchema.mainEntity as Array<{
  '@type': string;
  name: string;
  acceptedAnswer: { '@type': string; text: string };
}>;

export default function BookACallPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Page header */}
      <section className="pt-[100px] sm:pt-[140px] pb-10 sm:pb-16 text-center px-6 bg-white">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#F26B4E] mb-4">
          Free Consultation
        </p>
        <h1
          className="text-[#0F1112] mx-auto"
          style={{
            fontWeight: 700,
            fontSize: 'clamp(32px, 4.5vw, 56px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: 760,
            marginBottom: 20,
          }}
        >
          Book a Free 30-Minute Strategy Call
        </h1>
        <p
          className="text-[#4A4F5A] mx-auto text-[16px] sm:text-[18px] leading-[28px]"
          style={{ maxWidth: 620, marginBottom: 8 }}
        >
          <strong>A strategy call is a focused 30-minute session</strong> where we review your project, answer technical questions, and map out a realistic path from idea to shipped software — at no cost and with no obligation.
        </p>
        <p className="text-[13px] text-[#5A5F6A] mt-3">
          Pick a time that works for you below.
        </p>
      </section>

      {/* Booking iframe */}
      <BookingCTA />

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white px-6">
        <div className="max-w-[760px] mx-auto">
          <h2
            className="text-[#0F1112] font-bold mb-10"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.2 }}
          >
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y divide-[#ECEAEB]">
            {faqs.map((faq) => (
              <div key={faq.name} className="py-6">
                <h3 className="text-[#0F1112] font-semibold text-[17px] mb-2">
                  {faq.name}
                </h3>
                <p className="text-[#4A4F5A] text-[15px] leading-[26px]">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build — full services grid */}
      <ServicesGrid />
    </>
  );
}
