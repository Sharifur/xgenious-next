import Image from 'next/image';
import { COLOR } from './constants';

const BASE = '/products/payment-logos';

const logos = [
  { src: `${BASE}/03.png`,   alt: 'Stripe'           },
  { src: `${BASE}/05.png`,   alt: 'PayPal'           },
  { src: `${BASE}/08.png`,   alt: 'Razorpay'         },
  { src: `${BASE}/02.webp`,  alt: 'Payment Gateway'  },
  { src: `${BASE}/15.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/11.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/14.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/13.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/12.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/09.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/04.webp`,  alt: 'Payment Gateway'  },
  { src: `${BASE}/07.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/01.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/06.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/sqaure1656825943.png`,   alt: 'Square'   },
  { src: `${BASE}/cinetpay1656851559.jpg`, alt: 'CinetPay' },
  { src: `${BASE}/logo-facebook-dimension-912ae2521fe6b786a8c78a5cd1a7dfb31434c628a7d03f4377cbeb4707d6e305-21656931202.png`, alt: 'FB Pay' },
];

const row1 = logos.slice(0, 9);
const row2 = logos.slice(9);

function LogoCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 w-[100px] h-[64px] bg-white rounded-xl border border-[#e5e7eb] flex items-center justify-center px-3 mx-2">
      <Image src={src} alt={alt} width={80} height={44} className="object-contain max-h-[44px] w-auto" />
    </div>
  );
}

export default function PaymentGateways() {
  return (
    <section className="py-14 sm:py-20 overflow-hidden" style={{ background: '#f9fafb' }}>
      <style>{`
        @keyframes marquee-left  { from { transform: translateX(0) }    to { transform: translateX(-50%) } }
        @keyframes marquee-right { from { transform: translateX(-50%) } to { transform: translateX(0) }    }
        .sc-marquee-left  { animation: marquee-left  50s linear infinite; }
        .sc-marquee-right { animation: marquee-right 50s linear infinite; }
        .sc-marquee-wrap:hover .sc-marquee-left,
        .sc-marquee-wrap:hover .sc-marquee-right { animation-play-state: paused; }
      `}</style>

      <div className="container-page px-4 sm:px-6 lg:px-0 mb-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
          Payment Gateways
        </div>
        <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-3">26+ Payment Gateways Built In</h2>
        <p className="text-[#6b7280] text-[15px] sm:text-[17px] max-w-[620px] mx-auto leading-7">
          Accept payments worldwide with <strong>Stripe, PayPal, Razorpay, Flutterwave, Paystack, Mollie</strong> and 20+ more — plus a
          dedicated <strong>POS gateway</strong> for in-store sales. All included out of the box, no extra integration cost.
        </p>
      </div>

      <div className="sc-marquee-wrap flex flex-col gap-4">
        {/* Row 1 — scrolls left */}
        <div className="flex w-max sc-marquee-left">
          {[...row1, ...row1, ...row1, ...row1].map((logo, i) => (
            <LogoCard key={i} {...logo} />
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex w-max sc-marquee-right">
          {[...row2, ...row2, ...row2, ...row2].map((logo, i) => (
            <LogoCard key={i} {...logo} />
          ))}
        </div>
      </div>

      <div className="container-page px-4 sm:px-6 lg:px-0 mt-10 text-center">
        <p className="text-[13px] text-[#9ca3af]">
          Admin controls which gateways are active · separate POS gateway for in-store transactions · more gateways added continuously
        </p>
      </div>
    </section>
  );
}
