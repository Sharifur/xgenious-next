import SectionBadge from '@/components/ui/SectionBadge';
import AccordionItem from '@/components/ui/AccordionItem';
import { faqs as defaultFaqs } from '@/data/saas-page';

export type FaqItem = { question: string; answer: string };

type Props = {
  faqs?: FaqItem[];
  title?: string;
  description?: string;
  dark?: boolean;
};

export default function FAQ({
  faqs = defaultFaqs,
  title = 'Real Questions, Real Answer',
  description = "The questions every buyer actually asks. If yours isn't here, ask it on the call — we will answer it honestly.",
  dark = false,
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
    <section className={dark ? 'lg:pb-[120px] pb-12' : 'py-12 lg:py-[120px]'} style={{ background: dark ? '#070b14' : '#fff' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-10 sm:mb-14 lg:mb-[72px] max-w-[640px] mx-auto">
          {dark ? (
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="w-6 h-[2px] bg-[#ec7161] rounded-full" />
              <span className="text-[#ec7161] text-[14px] font-medium">Frequently Asked Questions</span>
            </div>
          ) : (
            <SectionBadge className="mb-5">Frequently Asked &amp; Questions</SectionBadge>
          )}
          <h2 className={`text-[28px] sm:text-[36px] lg:text-[44px] leading-[36px] sm:leading-[44px] lg:leading-[52px] font-semibold ${dark ? 'text-white' : 'text-[#0F1112]'}`}>
            {title}
          </h2>
          <p className={`mt-4 text-[14px] leading-[21px] sm:text-[16px] sm:leading-6 max-w-[492px] mx-auto ${dark ? 'text-[#9ca3af]' : 'text-[#484848]'}`}>
            {description}
          </p>
        </div>

        <div className="w-full lg:max-w-[66.666%] mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={i === 0}
              dark={dark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
