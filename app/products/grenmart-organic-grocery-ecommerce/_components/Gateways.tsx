import Image from 'next/image';
import { COLOR, STORE_TOOLS } from './constants';

const BASE = '/products/payment-logos';

const logos = [
  { src: `${BASE}/02.webp`,  alt: 'Payment Gateway'  },
  { src: `${BASE}/15.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/08.png`,   alt: 'Razorpay'         },
  { src: `${BASE}/11.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/14.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/13.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/12.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/09.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/03.png`,   alt: 'Stripe'           },
  { src: `${BASE}/04.webp`,  alt: 'Payment Gateway'  },
  { src: `${BASE}/05.png`,   alt: 'PayPal'           },
  { src: `${BASE}/07.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/01.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/06.png`,   alt: 'Payment Gateway'  },
  { src: `${BASE}/logo-facebook-dimension-912ae2521fe6b786a8c78a5cd1a7dfb31434c628a7d03f4377cbeb4707d6e305-21656931202.png`, alt: 'FB Pay' },
  { src: `${BASE}/cinetpay1656851559.jpg`, alt: 'CinetPay' },
  { src: `${BASE}/sqaure1656825943.png`,   alt: 'Square'   },
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

export default function Gateways() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] overflow-hidden bg-white">
      <style>{`
        @keyframes grenmart-marquee-left  { from { transform: translateX(0) }    to { transform: translateX(-50%) } }
        @keyframes grenmart-marquee-right { from { transform: translateX(-50%) } to { transform: translateX(0) }    }
        .grenmart-marquee-left  { animation: grenmart-marquee-left  50s linear infinite; }
        .grenmart-marquee-right { animation: grenmart-marquee-right 50s linear infinite; }
        .grenmart-marquee-wrap:hover .grenmart-marquee-left,
        .grenmart-marquee-wrap:hover .grenmart-marquee-right { animation-play-state: paused; }
      `}</style>

      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4" style={{ background: `${COLOR}15`, color: COLOR }}>
            20+ Payment Gateways
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-4 leading-tight">
            Get Paid Anywhere Your Customers Are
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            Enable the gateways you need from the admin panel — global cards, regional wallets, bank transfer, and cash
            on delivery. No extra plugin purchases.
          </p>
        </div>
      </div>

      <div className="grenmart-marquee-wrap flex flex-col gap-4 mb-16">
        {/* Row 1 — scrolls left */}
        <div className="flex w-max grenmart-marquee-left">
          {[...row1, ...row1, ...row1, ...row1].map((logo, i) => (
            <LogoCard key={i} {...logo} />
          ))}
        </div>
        {/* Row 2 — scrolls right */}
        <div className="flex w-max grenmart-marquee-right">
          {[...row2, ...row2, ...row2, ...row2].map((logo, i) => (
            <LogoCard key={i} {...logo} />
          ))}
        </div>
      </div>

      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h3 className="text-[22px] sm:text-[26px] font-bold text-[#0F1112] mb-2">Marketing &amp; SEO Tools, Built In</h3>
          <p className="text-[#6b7280] text-[14px] leading-6">Everything you need to grow traffic and keep customers — no add-ons required.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
          {STORE_TOOLS.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl border border-[#E5E7EC] p-5 flex items-start gap-3 hover:shadow-md transition-all">
              <span className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${COLOR}15`, color: COLOR }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h4 className="text-[15px] font-semibold text-[#0F1112] mb-1">{t.name}</h4>
                <p className="text-[13px] text-[#6b7280] leading-6">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
