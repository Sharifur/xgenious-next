import { COLOR, REGULAR_PRICE } from './constants';

const FAQS = [
  {
    q: 'What is Xilancer?',
    a: 'Xilancer is a complete freelancer marketplace script built with Laravel. It lets you launch your own Fiverr or Upwork clone — fully self-hosted, one-time purchase, no monthly fees. You get the full source code, admin panel, and native mobile apps for both freelancers and clients.',
  },
  {
    q: 'Is Xilancer a one-time purchase or subscription?',
    a: 'One-time purchase. You buy the script, download the full source code, and self-host it on your own server. No recurring licensing fees, no platform commission taken from your revenue. You keep 100% of what your marketplace earns.',
  },
  {
    q: 'Does Xilancer include a mobile app?',
    a: 'Yes. The Complete Package includes native Android and iOS apps for both freelancers and clients. The apps are built with Flutter and cover the full workflow: job browsing, bidding, ordering, real-time chat, payment management, and push notifications.',
  },
  {
    q: 'Which payment gateways does Xilancer support?',
    a: 'Xilancer supports PayPal, Stripe, Razorpay, Flutterwave, SSLCommerz, and several other regional gateways. All payments go through a built-in escrow system — client funds are held in escrow and released to the freelancer only after the client approves the delivery.',
  },
  {
    q: 'Can I white-label Xilancer for my own brand?',
    a: 'Yes. The script is fully white-label ready. You can change the name, logo, color scheme, and domain to match your brand. Since you own the source code, you have full control over the look, feel, and functionality of your platform.',
  },
  {
    q: 'What server is required to run Xilancer?',
    a: 'Any Linux VPS or shared hosting with PHP 8.1+, MySQL 5.7+, and Composer installed. A minimum of 2 GB RAM is recommended for production. Both Nginx and Apache are supported. Digital Ocean, Vultr, Hetzner, Linode — all work out of the box.',
  },
  {
    q: 'How long does it take to set up Xilancer?',
    a: 'Most users launch within 1–2 hours using the built-in web installer. Upload the files to your server, run the installer from your browser, configure your payment gateways, and your marketplace is live. Professional installation is also available if you prefer a hands-off launch.',
  },
  {
    q: 'What kind of support is included?',
    a: 'Every purchase includes 6 months of general and technical support. The Xgenious team is known for fast response times — most issues resolved within 24 hours. Support extension and priority support are available as add-ons.',
  },
  {
    q: 'What is the difference between the Regular License and the Complete Package?',
    a: `The Regular License ($${REGULAR_PRICE}) includes the Xilancer web platform only — no mobile apps, no premium plugins. The Complete Package ($282) includes the web platform, Flutter mobile apps for both freelancers and clients, and all premium plugins (Freelancer Level, Ads, Security, Cloud Storage, Hourly Hiring, Community).`,
  },
];

export default function FAQ() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[560px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            Everything you need to know before buying the Xilancer freelancing platform script.
          </p>
        </div>

        <div className="max-w-[760px] mx-auto flex flex-col gap-4">
          {FAQS.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-[#E5E7EC] p-6 sm:p-7"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${COLOR}15` }}
                >
                  <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
                    <path d="M10 3a7 7 0 100 14A7 7 0 0010 3zm0 3v4m0 2v1" stroke={COLOR} strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-bold text-[#0F1112] mb-2 leading-snug">{faq.q}</h3>
                  <p className="text-[14px] text-[#484848] leading-6">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
