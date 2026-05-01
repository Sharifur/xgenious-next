import AccordionItem from '@/components/ui/AccordionItem';
import { faqs } from '@/data/saas-page';

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[913px] mx-auto px-6">
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

        <div className="space-y-3">
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
