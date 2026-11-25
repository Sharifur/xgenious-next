import Link from 'next/link';

export default function WhatItIs() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[800px]">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-5">
          What a Shopify clone script actually is
        </h2>
        <div className="flex flex-col gap-4 text-[16px] leading-7 text-[#484848]">
          <p>
            A <strong className="text-[#0F1112]">Shopify clone script</strong> is software that reproduces Shopify’s business model, not its code. You install it once and it hosts many independent online stores. Each store owner gets their own products, orders, customers, theme and domain, and pays you a monthly or yearly plan. You run the platform: plans, billing, themes, updates and support.
          </p>
          <p>
            Nazmart does this with a{' '}
            <Link href="/multi-tenant-saas-architecture" className="underline underline-offset-2 text-[#0F1112]">
              separate database for every store
            </Link>
            , so one merchant’s data never shares a table with another’s.
          </p>
        </div>
      </div>
    </section>
  );
}
