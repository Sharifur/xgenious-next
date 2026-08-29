import { COLOR, LIGHT_COLOR } from './constants';

const STEPS = [
  { title: 'Order created as pending', desc: 'The order is written to the database before the customer ever reaches the gateway.' },
  { title: 'Customer sent to pay', desc: 'The customer is redirected to the gateway, or approves the charge on their handset.' },
  { title: 'Gateway notifies by webhook', desc: 'The gateway calls back to the server directly, not through the customer\'s browser.' },
  { title: 'Signature verified', desc: 'The webhook payload signature is checked before anything else happens.' },
  { title: 'Order marked paid', desc: 'Only after verification does the order status change. Repeat webhooks are dropped by a unique event index.' },
];

export default function PaymentSettlement() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
        <div className="text-center mb-10">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            How Payment Settlement Works
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-[#0F1112]">
            The Return URL Never Marks an Order Paid
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[600px] mx-auto leading-7">
            Anyone can visit a return URL; it isn&apos;t proof of payment. Every gateway settles the same way, regardless of which of the 39 you enable.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex items-start gap-4 rounded-xl border border-[#E5E7EC] bg-[#f9fafb] p-5">
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold"
                style={{ background: LIGHT_COLOR, color: COLOR }}
              >
                {i + 1}
              </span>
              <div>
                <p className="text-[14px] font-semibold text-[#0F1112]">{step.title}</p>
                <p className="text-[13px] text-[#6b7280] leading-6 mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
