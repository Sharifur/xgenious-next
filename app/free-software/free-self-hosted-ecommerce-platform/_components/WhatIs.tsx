export default function WhatIs() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
        <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] mb-5 text-center">
          Genius Commerz: A Free Self-Hosted eCommerce Platform
        </h2>

        <p className="text-[17px] text-[#0F1112] leading-8 mb-6 p-5 rounded-2xl border border-[#E5E7EC] bg-[#f9fafb]">
          <strong>Genius Commerz</strong> is a free, open-source, self-hosted <strong>eCommerce platform</strong> built for merchants who sell across borders. Country-aware checkout, multi-currency accounting, destination-based tax, and 98 built-in provider integrations, all on your own server.
        </p>

        <p className="text-[16px] text-[#484848] leading-8 mb-5">
          It is <strong>self-hosted, not a hosted service</strong>. There is no Xgenious account to sign into and no dashboard Xgenious controls: you run Genius Commerz on your own infrastructure, on a domain you own, with data that never leaves your server. Most free carts leave cross-border commerce to the merchant to figure out; Genius Commerz ships the country-aware checkout, currency handling, and tax logic that a global storefront actually needs, in the box.
        </p>
        <p className="text-[16px] text-[#484848] leading-8">
          Built on Laravel 12 and React 19, it is written to be read and extended: a new payment gateway is two files, not a fork of the checkout flow. Whether you are a merchant deciding whether to spend an afternoon installing it, or a developer evaluating whether to build on top of it, the sections below cover exactly what ships, what is verified, and what still needs sandbox testing before you rely on it.
        </p>
      </div>
    </section>
  );
}
