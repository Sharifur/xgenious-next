import { FAQS } from './copy';

export default function FaqSection() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[800px]">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-8">Frequently asked questions</h2>
        <dl className="flex flex-col gap-6">
          {FAQS.map((faq) => (
            <div key={faq.q}>
              <dt className="text-[16px] font-semibold text-[#0F1112]">{faq.q}</dt>
              <dd className="mt-2 text-[15px] leading-7 text-[#484848]">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
