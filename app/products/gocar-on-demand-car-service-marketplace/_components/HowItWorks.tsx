import { COLOR, LIGHT_COLOR } from './constants';
import ScrollToPricing from './ScrollToPricing';

const STEPS = [
  {
    n: '01',
    title: 'Install and Configure',
    desc: 'Purchase GoCar with a one-time payment. Upload to any PHP 8.0+ server with MySQL. Run the guided installer, configure service categories and locations, set up payment gateways, and go live — free cPanel installation included.',
  },
  {
    n: '02',
    title: 'Onboard Mechanics and Customers',
    desc: 'Mechanics and service providers create listings and manage their availability. Customers download the Flutter mobile app, select their vehicle, browse services, and book in seconds.',
  },
  {
    n: '03',
    title: 'Grow Your Marketplace',
    desc: 'Manage everything from the Laravel admin panel — approve mechanics, configure branch locations, monitor orders, process refunds, and launch promotions as your marketplace scales.',
  },
];

export default function HowItWorks() {
  return (
    <section className="pb-20 lg:pb-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-14 max-w-[600px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Quick Setup
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            Launch Your Car Service Marketplace in 3 Steps
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            GoCar installs on any standard PHP hosting environment. No DevOps expertise required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {STEPS.map((step, i) => (
            <div key={step.n} className="relative flex flex-col">
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px border-t-2 border-dashed border-[#E5E7EC]" />
              )}
              <div className="flex flex-col items-center text-center gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-[22px] font-bold flex-shrink-0 z-10"
                  style={{ background: LIGHT_COLOR, color: COLOR }}
                >
                  {step.n}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0F1112] mb-2">{step.title}</h3>
                  <p className="text-[14px] text-[#6b7280] leading-6">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <ScrollToPricing
            className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
          >
            See Pricing — One-Time Purchase
          </ScrollToPricing>
        </div>

      </div>
    </section>
  );
}
