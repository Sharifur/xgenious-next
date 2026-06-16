import { COLOR } from './constants';

const rows = [
  { feature: 'Platform ownership',         multisaas: 'You own it 100%',  wix: 'Rented (SaaS)',      shopify: 'Rented (SaaS)',     diy: 'You own it' },
  { feature: 'Your role',                  multisaas: 'Platform operator',wix: 'Tenant on Wix',       shopify: 'Tenant on Shopify', diy: 'Platform operator' },
  { feature: 'Monthly SaaS fees',          multisaas: 'None',             wix: '$17–$159/mo',         shopify: '$39–$399/mo',       diy: '$5K–$20K/yr' },
  { feature: 'One-time purchase price',    multisaas: 'From $59',         wix: '✗',                   shopify: '✗',                 diy: '$30K+' },
  { feature: 'Multi-tenancy built-in',     multisaas: '✓',                wix: '✗',                   shopify: '✗',                 diy: 'Custom build' },
  { feature: 'Tenant subscription billing',multisaas: '✓',                wix: '✗',                   shopify: '✗',                 diy: 'Custom build' },
  { feature: 'Custom domain per tenant',   multisaas: '✓ Included',       wix: 'Limited (your site)', shopify: 'Extra cost',        diy: 'Custom build' },
  { feature: '19+ payment gateways',       multisaas: '✓',                wix: 'Limited',             shopify: 'Limited + fees',    diy: 'Custom build' },
  { feature: '15+ ready themes',           multisaas: '✓',                wix: '✓',                   shopify: 'Paid apps',         diy: 'Custom design' },
  { feature: '10+ business modules',       multisaas: '✓',                wix: 'Apps (extra cost)',   shopify: 'Apps (extra cost)', diy: 'Custom build' },
  { feature: '200+ languages',             multisaas: '✓',                wix: 'Varies',              shopify: 'Limited',           diy: 'Custom build' },
  { feature: 'Revenue model',              multisaas: 'You keep 100%',    wix: 'Wix takes nothing',   shopify: 'Shopify takes %',   diy: 'You keep 100%' },
  { feature: 'Time to launch',             multisaas: '48–72 hours',      wix: 'Hours (1 site)',      shopify: 'Hours (1 site)',    diy: '6–12 months' },
];

const highlight = (val: string) =>
  val === '✓' ||
  val.startsWith('✓') ||
  val === 'You own it 100%' ||
  val === 'None' ||
  val === 'From $59' ||
  val === 'You keep 100%' ||
  val === '48–72 hours' ||
  val === 'Platform operator';

export default function Comparison() {
  return (
    <section className="py-14 sm:py-20" style={{ background: '#F8F9FB' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-10 max-w-[640px] mx-auto">
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[#0F1112] mb-3">
            MultiSaas vs Wix vs Shopify vs Custom Build
          </h2>
          <p className="text-[#6b7280] text-[15px] leading-6">
            With MultiSaas, <strong>you become the platform</strong>. With Wix or Shopify, you remain a tenant paying someone else. With a custom build, you spend a year and six figures to reach the same result.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC]">
          <table className="w-full min-w-[720px] text-[14px]">
            <thead>
              <tr style={{ background: '#1a0a08' }}>
                <th className="text-left px-5 py-4 text-[13px] font-semibold text-white w-[200px]">Feature</th>
                <th className="px-5 py-4 text-[13px] font-bold" style={{ color: COLOR }}>MultiSaas</th>
                <th className="px-5 py-4 text-[13px] font-semibold text-white">Wix</th>
                <th className="px-5 py-4 text-[13px] font-semibold text-white">Shopify</th>
                <th className="px-5 py-4 text-[13px] font-semibold text-white">Custom Build</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} style={{ background: i % 2 === 0 ? '#fff' : '#F8F9FB' }}>
                  <td className="px-5 py-3.5 font-medium text-[#374151]">{row.feature}</td>
                  <td
                    className="px-5 py-3.5 text-center font-semibold"
                    style={{ color: highlight(row.multisaas) ? '#b83a2b' : '#374151' }}
                  >
                    {row.multisaas}
                  </td>
                  <td className="px-5 py-3.5 text-center text-[#6b7280]">{row.wix}</td>
                  <td className="px-5 py-3.5 text-center text-[#6b7280]">{row.shopify}</td>
                  <td className="px-5 py-3.5 text-center text-[#6b7280]">{row.diy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-8">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-white font-semibold text-[15px] rounded-full px-8 py-3.5 transition-all hover:opacity-90"
            style={{ background: COLOR }}
          >
            Get MultiSaas — from $59 one-time
          </a>
          <p className="text-[12px] text-[#9ca3af] mt-3">One-time purchase · No monthly fees · Full source code · 6 months support</p>
        </div>

      </div>
    </section>
  );
}
