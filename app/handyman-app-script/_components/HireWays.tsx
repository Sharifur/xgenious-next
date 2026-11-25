import Link from 'next/link';
import { COLOR } from '@/app/products/prohandy-on-demand-home-service-marketplace/_components/constants';

export default function HireWays() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-8">
          Instant booking and job posts in one script
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <article className="rounded-2xl bg-white border border-[#E5E7EC] p-6">
            <h3 className="text-[18px] font-bold text-[#0F1112] mb-3">Instant booking</h3>
            <p className="text-[15px] leading-7 text-[#484848]">
              For jobs you can price up front: TV mounting, furniture assembly, deep cleaning. Customers pick a service, add-ons and a time, and pay.
            </p>
          </article>
          <article className="rounded-2xl bg-white border border-[#E5E7EC] p-6">
            <h3 className="text-[18px] font-bold text-[#0F1112] mb-3">Job posts with offers</h3>
            <p className="text-[15px] leading-7 text-[#484848]">
              For jobs that vary: repairs, renovation, moving. Customers describe the job, handymen send offers with a cover letter, and the customer hires one.
            </p>
          </article>
        </div>
        <p className="mt-6 text-[15px]">
          <Link href="/job-posting-vs-instant-booking-service-marketplace" className="font-semibold underline underline-offset-2" style={{ color: COLOR }}>
            Which should you use? Read job posting vs instant booking →
          </Link>
        </p>
      </div>
    </section>
  );
}
