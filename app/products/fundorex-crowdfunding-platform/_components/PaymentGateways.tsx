import { COLOR, LIGHT_COLOR } from './constants';

const GATEWAYS = [
  'Stripe', 'PayPal', 'Razorpay', '2Checkout', 'Skrill',
  'Payoneer', 'Wise', 'Square', 'Facebook Pay', 'Paytabs',
  'Cinetpay', 'Flutterwave', 'SSLCommerz', 'Instamojo', 'Mollie',
  'Bank Transfer', 'Cash on Delivery', 'Authorize.net', 'Braintree', 'Mercado Pago',
];

export default function PaymentGateways() {
  return (
    <section className="py-20 lg:py-[100px]" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[1100px] mx-auto">

        <div className="text-center mb-12 max-w-[540px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: COLOR }} />
            Payment Gateways
          </div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-4">
            20+ Payment Gateways — Donors Pay Their Way
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-7">
            Accept donations globally with the payment methods your backers already trust.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center max-w-[900px] mx-auto mb-10">
          {GATEWAYS.map((gw) => (
            <span
              key={gw}
              className="px-4 py-2 rounded-full text-[13px] font-medium bg-white border border-[#E5E7EC] text-[#374151] shadow-sm"
            >
              {gw}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {[
            { value: '20+', label: 'Payment gateways', desc: 'Local and international options for every region' },
            { value: '100%', label: 'PCI compliant', desc: 'All transactions processed through secure gateway providers' },
            { value: 'Global', label: 'Multi-currency', desc: 'Accept donations in your donor\'s local currency' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-[#E5E7EC] p-6 text-center">
              <p className="text-[32px] font-bold mb-1" style={{ color: COLOR }}>{stat.value}</p>
              <p className="text-[14px] font-semibold text-[#0F1112] mb-1">{stat.label}</p>
              <p className="text-[12px] text-[#6b7280] leading-5">{stat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
