import Image from 'next/image';
import { COLOR, LIGHT_COLOR, SHIPPING_CARRIERS, BD_COURIERS } from './constants';
import { PROVIDER_LOGOS } from './logos';

const PRECEDENCE = [
  { step: 'Live courier quote', desc: 'Real-time rate from a connected Bangladeshi courier, when one is configured for the destination.' },
  { step: 'Live carrier rate', desc: 'Real-time rate from a connected international carrier (DHL, FedEx, Aramex, Delhivery, etc).' },
  { step: 'Your zone rate', desc: 'A manually configured rate for the destination zone, when no live quote is available.' },
  { step: 'Flat rate', desc: 'The fallback rate, so checkout never has no shipping option at all.' },
];

export default function Shipping() {
  return (
    <section className="py-16 sm:py-20 bg-[#f9fafb]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            Shipping: 19 Carriers + 3 BD Couriers
          </span>
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
            Real Carrier Rates, With a Fallback That Never Fails
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {SHIPPING_CARRIERS.map((group) => (
            <div key={group.region} className="bg-white rounded-2xl border border-[#E5E7EC] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[14px] font-semibold text-[#0F1112]">{group.region}</h3>
                <span className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: LIGHT_COLOR, color: COLOR }}>
                  {group.providers.length}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.providers.map((p) => (
                  <li key={p} className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#484848] bg-[#f9fafb] border border-[#E5E7EC] rounded-full pl-1.5 pr-3 py-1">
                    {PROVIDER_LOGOS[p] ? (
                      <Image src={PROVIDER_LOGOS[p]} alt={p} width={16} height={16} className="rounded-sm object-contain flex-shrink-0" unoptimized />
                    ) : null}
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="bg-white rounded-2xl border border-[#E5E7EC] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[14px] font-semibold text-[#0F1112]">Bangladesh couriers</h3>
              <span className="text-[12px] font-semibold px-2.5 py-0.5 rounded-full" style={{ background: LIGHT_COLOR, color: COLOR }}>
                {BD_COURIERS.length}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {BD_COURIERS.map((p) => (
                <li key={p} className="flex items-center gap-1.5 text-[12.5px] font-medium text-[#484848] bg-[#f9fafb] border border-[#E5E7EC] rounded-full pl-1.5 pr-3 py-1">
                  {PROVIDER_LOGOS[p] ? (
                    <Image src={PROVIDER_LOGOS[p]} alt={p} width={16} height={16} className="rounded-sm object-contain flex-shrink-0" unoptimized />
                  ) : null}
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-[820px] mx-auto">
          <h3 className="text-[18px] font-semibold text-[#0F1112] text-center mb-2">Shipping rate precedence</h3>
          <p className="text-[13px] text-[#6b7280] text-center mb-6 max-w-[560px] mx-auto leading-6">
            Cart weight is calculated server-side from real product weights, so the browser can never understate it. A carrier outage falls through to the next tier rather than blocking checkout.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PRECEDENCE.map((p, i) => (
              <div key={p.step} className="flex items-start gap-3 bg-white rounded-xl border border-[#E5E7EC] p-4">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold"
                  style={{ background: LIGHT_COLOR, color: COLOR }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-[#0F1112]">{p.step}</p>
                  <p className="text-[12px] text-[#6b7280] leading-5 mt-0.5">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
