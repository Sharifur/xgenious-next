export default function WhatIs() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
        <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] mb-5 text-center">
          What is Genius Campaign?
        </h2>

        <p className="text-[17px] text-[#0F1112] leading-8 mb-6 p-5 rounded-2xl border border-[#E5E7EC] bg-[#f9fafb]">
          <strong>Genius Campaign</strong> is free, open-source <strong>email marketing software</strong> built with Laravel. It provides sequence automation, webhooks, built-in email templates, AI-assisted writing, and email verification — self-hosted on your own server, MIT licensed, with no per-contact fees.
        </p>

        <p className="text-[16px] text-[#484848] leading-8 mb-5">
          Most email marketing platforms charge more as your contact list grows — that pricing model is common across the industry, from entry-level tools up to enterprise sending platforms. Genius Campaign is a one-time free download — full source code, deploy on any Linux VPS, no recurring cost regardless of list size.
        </p>
        <p className="text-[16px] text-[#484848] leading-8 mb-5">
          The system ships with a <strong>sequence and automation builder</strong> for drip campaigns and behavioral triggers, <strong>inbound and outbound webhooks</strong> for connecting to the rest of your stack, and <strong>AI-assisted subject line and copy writing</strong> to speed up campaign creation. Sending runs through your own <strong>AWS SES</strong> or <strong>Google Workspace</strong> connection, with built-in email verification to protect your sender reputation.
        </p>
        <p className="text-[16px] text-[#484848] leading-8">
          Email remains one of the highest-ROI marketing channels available, and{' '}
          <a href="https://en.wikipedia.org/wiki/Email_marketing" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-[#16a34a]">
            email marketing ↗
          </a>{' '}
          continues to be a core acquisition and retention tool for businesses of every size. Yet most small teams pay a recurring monthly fee for tools they could self-host for free. Genius Campaign gives those teams the same core workflow — sequences, templates, deliverability tooling — without the ongoing cost. See{' '}
          <a href="https://mailchimp.com/resources/email-marketing-benchmarks/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-[#16a34a]">
            industry email marketing benchmarks ↗
          </a>{' '}
          for typical open and click rates by sector.
        </p>
      </div>
    </section>
  );
}
