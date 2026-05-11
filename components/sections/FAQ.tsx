import AccordionItem from '@/components/ui/AccordionItem';
import { faqs } from '@/data/saas-page';

export default function FAQ() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <section className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container-page">
        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFE8E1] text-[#F26B4E] text-[12px] font-medium mb-5">
            Frequently Asked &amp; Questions
          </span>
          <h2 className="text-[44px] leading-[52px] font-semibold text-[#0F1112] tracking-[-0.01em]">
            Real Questions,{' '}
            <span className="italic font-semibold">Real Answer</span>
          </h2>
          <p className="mt-4 text-[#484848] text-[15px] leading-6 max-w-[492px] mx-auto">
            The questions every buyer actually asks. If yours isn&apos;t here, ask it on the call —
            we will answer it honestly.
          </p>
        </div>

        <div className="max-w-[66.666%] mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={i === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
