export default function WhatIs() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
        <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112] mb-5 text-center">
          What is Genius Campaign?
        </h2>

        <p className="text-[17px] text-[#0F1112] leading-8 mb-6 p-5 rounded-2xl border border-[#E5E7EC] bg-[#f9fafb]">
          <strong>Genius Campaign</strong> is a free, open-source, self-hosted <strong>email marketing and outreach platform</strong>. Contacts, templates, sequences, campaigns, deliverability, and sender rotation live in one console — MIT licensed, with no per-contact fees.
        </p>

        <p className="text-[16px] text-[#484848] leading-8 mb-5">
          Hosted cold-outreach tools like Smartlead and Instantly charge monthly fees that scale with contacts and send volume, on top of whatever email provider you already pay for. Genius Campaign is a one-time free download — full source code, deploy on your own infrastructure, no recurring bill regardless of list size.
        </p>
        <p className="text-[16px] text-[#484848] leading-8 mb-5">
          The system ships with a <strong>sequence builder</strong> for multi-step drip automation, <strong>inbound and outbound webhooks</strong> for connecting to the rest of your stack, and an <strong>AI-assisted template editor</strong> with spintax variants. Sending rotates automatically across your own <strong>AWS SES</strong> and <strong>Gmail Workspace</strong> accounts, quota-aware, with bulk <strong>email verification</strong> before every send.
        </p>
        <p className="text-[16px] text-[#484848] leading-8">
          <a href="https://en.wikipedia.org/wiki/Email_marketing" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: '#6366F1' }}>
            Email marketing ↗
          </a>{' '}
          remains one of the highest-ROI channels available, but most tools in the category charge a recurring fee for infrastructure four AWS services already provide. Genius Campaign gives you the same sequence-and-campaign workflow without renting your sender reputation from a vendor.
        </p>
      </div>
    </section>
  );
}
