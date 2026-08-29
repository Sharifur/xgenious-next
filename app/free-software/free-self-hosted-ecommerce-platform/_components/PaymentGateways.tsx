import Image from 'next/image';
import { COLOR, LIGHT_COLOR, PAYMENT_GATEWAYS } from './constants';
import { PROVIDER_LOGOS } from './logos';

export default function PaymentGateways() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            Payment Gateways: 39
          </span>
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
            One Checkout. Every Market&apos;s Preferred Way to Pay.
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[620px] mx-auto leading-7">
            Stripe alone adds roughly 50 local payment methods through one integration. Paddle and 2Checkout are{' '}
            <a href="https://en.wikipedia.org/wiki/Merchant_of_record" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: COLOR }}>
              merchant of record
            </a>
            : they become the seller and remit EU VAT and US sales tax for you. Pagar.me defaults to Pix; M-Pesa and MTN MoMo are handset-approval flows, not redirects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PAYMENT_GATEWAYS.map((group) => (
            <div key={group.region} className="bg-[#f9fafb] rounded-2xl border border-[#E5E7EC] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[14px] font-semibold text-[#0F1112]">{group.region}</h3>
                <span className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: LIGHT_COLOR, color: COLOR }}>
                  {group.providers.length}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.providers.map((p) => (
                  <li key={p} className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#484848] bg-white border border-[#E5E7EC] rounded-full pl-1.5 pr-3 py-1">
                    {PROVIDER_LOGOS[p] ? (
                      <Image src={PROVIDER_LOGOS[p]} alt={p} width={16} height={16} className="rounded-sm object-contain flex-shrink-0" unoptimized />
                    ) : null}
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
