'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { COMBO_PRICE } from '@/app/products/prohandy-on-demand-home-service-marketplace/_components/constants';

const COLOR = '#f26b4e';

const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });

const fmtCount = (n: number) =>
  n.toLocaleString('en-US', { maximumFractionDigits: 1 });

type Key =
  | 'startProviders'
  | 'newProviders'
  | 'providerChurn'
  | 'jobsPerProvider'
  | 'avgTicket'
  | 'commission'
  | 'bookingFee'
  | 'gatewayFee'
  | 'discounts'
  | 'fixedCost'
  | 'marketing'
  | 'platformCost';

const DEFAULTS: Record<Key, string> = {
  startProviders: '10',
  newProviders: '5',
  providerChurn: '4',
  jobsPerProvider: '12',
  avgTicket: '80',
  commission: '15',
  bookingFee: '0',
  gatewayFee: '3',
  discounts: '2',
  fixedCost: '300',
  marketing: '500',
  platformCost: String(COMBO_PRICE),
};

const PERCENT_KEYS = new Set<Key>(['providerChurn', 'commission', 'gatewayFee', 'discounts']);

const GROUPS: { title: string; fields: { key: Key; label: string; hint?: 'jobs' | 'ticket' | 'commission' | 'fee' | 'gateway' | 'discounts' | 'platform' }[] }[] = [
  {
    title: 'Supply',
    fields: [
      { key: 'startProviders', label: 'Active providers at start' },
      { key: 'newProviders', label: 'New providers per month' },
      { key: 'providerChurn', label: 'Provider churn per month (%)' },
      { key: 'jobsPerProvider', label: 'Jobs per active provider per month', hint: 'jobs' },
    ],
  },
  {
    title: 'Prices and fees',
    fields: [
      { key: 'avgTicket', label: 'Average job value ($)', hint: 'ticket' },
      { key: 'commission', label: 'Your commission (%)', hint: 'commission' },
      { key: 'bookingFee', label: 'Customer booking fee per job ($)', hint: 'fee' },
      { key: 'gatewayFee', label: 'Payment gateway fee (% of job value)', hint: 'gateway' },
      { key: 'discounts', label: 'Coupons / discounts (% of job value you fund)', hint: 'discounts' },
    ],
  },
  {
    title: 'Costs',
    fields: [
      { key: 'fixedCost', label: 'Fixed costs per month ($)' },
      { key: 'marketing', label: 'Marketing spend per month ($)' },
      { key: 'platformCost', label: 'One-time platform cost ($)', hint: 'platform' },
    ],
  },
];

function num(value: string) {
  const n = parseFloat(value);
  return Number.isFinite(n) ? Math.max(0, n) : 0;
}

function pct(value: string) {
  return Math.min(100, num(value)) / 100;
}

export default function HomeServiceCommissionCalculator() {
  const [values, setValues] = useState<Record<Key, string>>(DEFAULTS);

  const projection = useMemo(() => {
    const startProviders = num(values.startProviders);
    const newProviders = num(values.newProviders);
    const providerChurn = pct(values.providerChurn);
    const jobsPerProvider = num(values.jobsPerProvider);
    const avgTicket = num(values.avgTicket);
    const commission = pct(values.commission);
    const bookingFee = num(values.bookingFee);
    const gatewayFee = pct(values.gatewayFee);
    const discounts = pct(values.discounts);
    const fixedCost = num(values.fixedCost);
    const marketing = num(values.marketing);
    const platformCost = num(values.platformCost);

    let providers = startProviders;
    let cumulative = -platformCost;
    const rows = [];
    let breakEven: number | null = null;

    for (let month = 1; month <= 24; month += 1) {
      providers = Math.max(0, providers * (1 - providerChurn) + newProviders);
      const jobs = providers * jobsPerProvider;
      const gmv = jobs * avgTicket;
      const commissionRev = gmv * commission;
      const feeRev = jobs * bookingFee;
      const revenue = commissionRev + feeRev;
      const variable = (gmv + feeRev) * gatewayFee + gmv * discounts;
      const profit = revenue - variable - fixedCost - marketing;
      cumulative += profit;
      if (breakEven === null && cumulative >= 0) breakEven = month;
      rows.push({
        month,
        providers,
        jobs,
        gmv,
        revenue,
        profit,
        cumulative,
        providerPay: gmv - commissionRev,
      });
    }

    return { rows, breakEven };
  }, [values]);

  const m12 = projection.rows[11];
  const m24 = projection.rows[23];
  const maxRevenue = Math.max(...projection.rows.map((row) => row.revenue), 1);
  const minProfit = Math.min(...projection.rows.map((row) => row.profit), 0);
  const span = Math.max(maxRevenue - minProfit, 1);
  const yOf = (value: number) => ((maxRevenue - value) / span) * 120;
  const earnings = m24.providers > 0 ? m24.providerPay / m24.providers : null;
  const takeRate = m24.gmv > 0 ? m24.revenue / m24.gmv : null;

  const cards: { label: string; value: string; emphasize?: boolean }[] = [
    { label: 'Monthly GMV at month 12', value: fmt(m12.gmv), emphasize: true },
    { label: 'Monthly GMV at month 24', value: fmt(m24.gmv), emphasize: true },
    { label: 'Platform revenue at month 12', value: fmt(m12.revenue) },
    { label: 'Platform revenue at month 24', value: fmt(m24.revenue) },
    { label: 'Monthly profit at month 24', value: fmt(m24.profit) },
    { label: 'Break-even month', value: projection.breakEven ? `Month ${projection.breakEven}` : 'Not within 24 months' },
    { label: 'Average provider earnings at month 24', value: earnings === null ? '—' : fmt(earnings) },
    { label: 'Take rate', value: takeRate === null ? '—' : `${(takeRate * 100).toLocaleString('en-US', { maximumFractionDigits: 1 })}%` },
  ];

  return (
    <div className="flex flex-col gap-5">
      <p className="text-[13px] text-[#6b7280]">Example values. Replace with yours.</p>

      {GROUPS.map((group) => (
        <div key={group.title} className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
          <p className="sm:col-span-2 text-[13px] font-semibold text-[#0F1112]">{group.title}</p>
          {group.fields.map((field) => (
            <div key={field.key} className="flex flex-col gap-1.5">
              <label htmlFor={field.key} className="text-[13px] font-semibold text-[#0F1112]">{field.label}</label>
              <input
                id={field.key}
                type="number"
                min={0}
                max={PERCENT_KEYS.has(field.key) ? 100 : undefined}
                value={values[field.key]}
                onChange={(e) => setValues((prev) => ({ ...prev, [field.key]: e.target.value }))}
                className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors"
              />
              {field.hint === 'jobs' && (
                <p className="text-[12px] leading-5 text-[#6b7280]">Utilisation: how many bookings each pro completes</p>
              )}
              {field.hint === 'ticket' && (
                <p className="text-[12px] leading-5 text-[#6b7280]">What the customer pays for the service</p>
              )}
              {field.hint === 'commission' && (
                <p className="text-[12px] leading-5 text-[#6b7280]">
                  Example: Urban Company’s commissions and fees were 28.3% of pros’ gross earnings in 9M FY26 (
                  <a href="https://inc42.com/features/inside-urban-companys-marketplace-model-what-it-keeps-from-every-booking/" target="_blank" rel="noopener noreferrer" className="underline">
                    Inc42
                  </a>
                  ); smaller marketplaces often start lower to attract pros.
                </p>
              )}
              {field.hint === 'fee' && (
                <p className="text-[12px] leading-5 text-[#6b7280]">e.g. a flat convenience fee</p>
              )}
              {field.hint === 'gateway' && (
                <p className="text-[12px] leading-5 text-[#6b7280]">Charged on what you collect</p>
              )}
              {field.hint === 'platform' && (
                <p className="text-[12px] leading-5 text-[#6b7280]">
                  Prefilled with the ProHandy Everything Bundle (${COMBO_PRICE}: web, admin and both apps); editable
                </p>
              )}
            </div>
          ))}
        </div>
      ))}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {cards.map((card) => (
          <div key={card.label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{card.label}</span>
            <span className="text-[22px] font-bold text-[#0F1112]" style={{ color: card.emphasize ? COLOR : undefined }}>{card.value}</span>
          </div>
        ))}
      </div>
      <p className="text-[12px] text-[#6b7280] -mt-2">
        If this is too low, providers will leave. Check it against local rates.
      </p>

      <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[13px] font-semibold text-[#0F1112]">Revenue and profit, 24 months</span>
          <span className="text-[11px] text-[#6b7280]">Bars: revenue · Line: profit</span>
        </div>
        <svg viewBox="0 0 240 120" className="w-full h-36" role="img" aria-label="Monthly revenue bars with a profit line">
          {projection.rows.map((row, i) => {
            const yZero = yOf(0);
            const yRevenue = yOf(row.revenue);
            const h = Math.max(yZero - yRevenue, 0);
            return (
              <rect key={row.month} x={i * 10 + 1} y={yRevenue} width={8} height={h} fill={COLOR} opacity={0.75}>
                <title>{`Month ${row.month}: revenue ${fmt(row.revenue)}, profit ${fmt(row.profit)}`}</title>
              </rect>
            );
          })}
          <polyline
            fill="none"
            stroke="#0F1112"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            points={projection.rows.map((row, i) => `${i * 10 + 5},${yOf(row.profit)}`).join(' ')}
          />
        </svg>
        <div className="flex justify-between text-[11px] text-[#6b7280]">
          <span>Month 1</span>
          <span>Month 24</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[12px] min-w-[720px]">
          <thead>
            <tr className="border-b border-[#E5E7EC] bg-[#F5F6F8]/50">
              {['Month', 'Providers', 'Jobs', 'GMV', 'Revenue', 'Profit', 'Cumulative'].map((heading) => (
                <th key={heading} className="text-left py-2 pr-3 font-medium text-[#6b7280]">{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projection.rows.map((row) => (
              <tr key={row.month} className="border-b border-[#F5F6F8]">
                <td className="py-1.5 pr-3 text-[#484848]">{row.month}</td>
                <td className="py-1.5 pr-3 text-[#484848]">{fmtCount(row.providers)}</td>
                <td className="py-1.5 pr-3 text-[#484848]">{fmtCount(row.jobs)}</td>
                <td className="py-1.5 pr-3 text-[#484848]">{fmt(row.gmv)}</td>
                <td className="py-1.5 pr-3 font-medium" style={{ color: COLOR }}>{fmt(row.revenue)}</td>
                <td className="py-1.5 pr-3 text-[#484848]">{fmt(row.profit)}</td>
                <td className="py-1.5 pr-3 text-[#484848]">{fmt(row.cumulative)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-2xl border border-[#E5E7EC] p-5 flex flex-col gap-3">
        <p className="text-[15px] leading-6 text-[#0F1112]">
          Run this model on your own platform. ProHandy: customer app, provider app and admin, ${COMBO_PRICE}.
        </p>
        <Link
          href="/products/prohandy-on-demand-home-service-marketplace"
          className="inline-flex items-center self-start text-white font-semibold text-[14px] rounded-full px-6 py-3"
          style={{ background: COLOR }}
        >
          See ProHandy
        </Link>
      </div>
    </div>
  );
}
