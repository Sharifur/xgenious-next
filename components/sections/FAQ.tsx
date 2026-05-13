import SectionBadge from '@/components/ui/SectionBadge';
import AccordionItem from '@/components/ui/AccordionItem';
import { faqs as defaultFaqs } from '@/data/saas-page';

export type FaqItem = { question: string; answer: string };

type Props = {
  faqs?: FaqItem[];
  title?: string;
  description?: string;
};

export default function FAQ({
  faqs = defaultFaqs,
  title = 'Real Questions, Real Answer',
  description = "The questions every buyer actually asks. If yours isn't here, ask it on the call — we will answer it honestly.",
}: Props) {
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
    <section className="py-[120px] bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container-page">
        <div className="text-center mb-[72px] max-w-[640px] mx-auto">
          <SectionBadge className="mb-5">Frequently Asked &amp; Questions</SectionBadge>
          <h2 className="text-[44px] leading-[52px] font-semibold text-[#0F1112]">
            {title}
          </h2>
          <p className="mt-4 text-[#484848] text-[16px] leading-6 max-w-[492px] mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-[66.666%] mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
