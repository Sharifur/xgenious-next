import Link from 'next/link';
import { PRODUCT_PRICING } from './copy';

const STEPS = [
  {
    title: 'Buy and install.',
    body: 'Install on a VPS with a wildcard subdomain, wildcard SSL and cron. Or let our team install it for you.',
  },
  { title: 'Brand it.', body: 'Add your logo, domain, colours and starter themes.' },
  { title: 'Create plans.', body: 'Decide prices, trial length and what each plan unlocks.' },
  {
    title: 'Connect payments.',
    body: 'Add the gateway you will bill merchants with, and the gateways merchants can offer their shoppers.',
  },
  { title: 'Open signups.', body: 'Merchants register, pay, and their store is created automatically.' },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[800px]">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-8">
          How launching your platform works
        </h2>
        <ol className="flex flex-col gap-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex gap-4 rounded-2xl bg-white border border-[#E5E7EC] p-5">
              <span className="text-[20px] font-bold text-[#3a7d00] leading-none">{i + 1}</span>
              <div>
                <h3 className="text-[16px] font-semibold text-[#0F1112]">{step.title}</h3>
                <p className="text-[15px] leading-7 text-[#484848] mt-1">
                  {i === 0 ? (
                    <>
                      Install on a VPS with a wildcard subdomain, wildcard SSL and cron. Or{' '}
                      <Link href={PRODUCT_PRICING} className="underline underline-offset-2 text-[#0F1112]">
                        let our team install it
                      </Link>{' '}
                      for you.
                    </>
                  ) : (
                    step.body
                  )}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
