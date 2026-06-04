import Image from 'next/image';

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

export default function PaymentGateways() {
  return (
    <section className="py-14 sm:py-20 overflow-hidden" style={{ background: '#fff' }}>
      <style>{`
        @keyframes marquee-left  { from { transform: translateX(0) }    to { transform: translateX(-50%) } }
        @keyframes marquee-right { from { transform: translateX(-50%) } to { transform: translateX(0) }    }
        .marquee-left  { animation: marquee-left  50s linear infinite; }
        .marquee-right { animation: marquee-right 50s linear infinite; }
        .marquee-wrap:hover .marquee-left,
        .marquee-wrap:hover .marquee-right { animation-play-state: paused; }
      `}</style>

      <div className="container-page px-4 sm:px-6 lg:px-0 mb-10 text-center">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] mb-3">19 Payment Gateways Built In</h2>
        <p className="text-[#6b7280] text-[15px] max-w-[680px] mx-auto leading-6">
          PayPal · Stripe · Razorpay · Paystack · Flutterwave · Mollie · Midtrans · Cashfree · Instamojo · Mercado Pago · Zitopay · Square · CinetPay · PayTabs · Billplz · Toyyibpay · PayFast · Paytm · Manual Payment
        </p>
      </div>

      <div className="marquee-wrap flex flex-col gap-4">
        <div className="flex w-max marquee-left">
          {[...row1, ...row1, ...row1, ...row1].map((logo, i) => (
            <LogoCard key={i} {...logo} />
          ))}
        </div>

        <div className="flex w-max marquee-right">
          {[...row2, ...row2, ...row2, ...row2].map((logo, i) => (
            <LogoCard key={i} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
