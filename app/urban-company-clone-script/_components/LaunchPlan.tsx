import Link from 'next/link';
import { COLOR } from '@/app/products/prohandy-on-demand-home-service-marketplace/_components/constants';

const STEPS = [
  { n: '1', text: 'Pick one city and your first five services.' },
  { n: '2', text: 'Recruit and verify your first professionals.', href: '/onboard-service-providers-guide', label: 'How to onboard service providers' },
  { n: '3', text: 'Set prices and your commission.', href: '/free-tools/home-service-marketplace-commission-calculator', label: 'Commission calculator' },
  { n: '4', text: 'Install ProHandy, publish the apps and launch.', href: '/how-to-start-a-handyman-marketplace', label: 'How to start a handyman marketplace' },
];

export default function LaunchPlan() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[800px]">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-8">Launch plan</h2>
        <ol className="flex flex-col gap-4">
          {STEPS.map((step) => (
            <li key={step.n} className="rounded-2xl bg-white border border-[#E5E7EC] p-5">
              <p className="text-[15px] leading-7 text-[#0F1112]">
                <span className="font-bold">{step.n}. </span>
                {step.text}
              </p>
              {step.href ? (
                <Link href={step.href} className="mt-2 inline-block text-[14px] font-semibold underline underline-offset-2" style={{ color: COLOR }}>
                  {step.label} →
                </Link>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
