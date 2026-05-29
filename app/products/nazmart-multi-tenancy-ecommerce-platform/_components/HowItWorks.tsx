'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const steps = [
  {
    number: 1,
    title: 'Create exciting price plan',
    desc: 'Purchase Nazmart and Upload it to Your Hosting Server, Configure your database and settings.',
  },
  {
    number: 2,
    title: 'Choose Shop Name',
    desc: 'Set up your multi-tenancy platform branding, domain, and subscription plans for vendors.',
  },
  {
    number: 3,
    title: "Decorate Your Shop & It's Ready",
    desc: 'Vendors sign up, choose a theme, add products, and go live — all from one dashboard.',
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % steps.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-14 sm:py-20" style={{ background: '#fff' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[520px] mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-3">How does it Work?</h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Happy clients reflect the quality, trust, and success we deliver through every project and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center max-w-[1000px] mx-auto">

          {/* Left — screenshot card */}
          <div className="rounded-3xl overflow-hidden p-6 sm:p-8" style={{ background: '#FDF3F0' }}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/products/nazmart-hero.jpg"
                alt="Nazmart pricing plan setup"
                width={600}
                height={420}
                className="w-full object-cover object-top"
              />
            </div>
          </div>

          {/* Right — steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <div key={step.number} onClick={() => setActive(i)} className="cursor-pointer">
                  <div className="flex gap-4 items-start py-5">
                    {/* Number circle */}
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[14px] font-bold border-2 transition-all duration-300"
                      style={
                        isActive
                          ? { background: '#F26B4E', borderColor: '#F26B4E', color: '#fff' }
                          : { background: 'transparent', borderColor: '#d1d5db', color: '#9ca3af' }
                      }
                    >
                      {step.number}
                    </div>

                    {/* Text */}
                    <div>
                      <h3
                        className="text-[18px] font-bold mb-1 leading-snug transition-colors duration-300"
                        style={{ color: isActive ? '#0F1112' : '#9ca3af' }}
                      >
                        {step.title}
                      </h3>
                      <div
                        className="overflow-hidden transition-all duration-500"
                        style={{ maxHeight: isActive ? '80px' : '0px', opacity: isActive ? 1 : 0 }}
                      >
                        <p className="text-[14px] text-[#6b7280] leading-6">{step.desc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Divider (skip after last) */}
                  {i < steps.length - 1 && (
                    <div className="ml-[18px] border-l-2 border-dashed border-[#e5e7eb] h-4" />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
