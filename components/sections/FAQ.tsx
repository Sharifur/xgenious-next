import AccordionItem from '@/components/ui/AccordionItem';
import { faqs } from '@/data/saas-page';

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-[#0D0D0D]">
            Real Questions,{' '}
            <span className="italic">Real Answers</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm">
            If you don&apos;t find what you&apos;re looking for, book a call and ask us directly.
          </p>
        </div>

        <div className="bg-white rounded-2xl px-8 shadow-sm border border-gray-100">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
