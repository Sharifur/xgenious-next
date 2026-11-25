'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  DEFAULT_REVENUE_INPUTS,
  projectEcommerceSaas,
  type RevenueInputs,
} from '@/lib/ecommerce-saas-revenue';

const COLOR = '#f26b4e';

const fmt = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });

const fmtStores = (n: number) => Math.round(n).toLocaleString('en-US');

type Field = { key: keyof RevenueInputs; label: string; hint?: string };

const GROUPS: { title: string; fields: Field[] }[] = [
  {
    title: 'Stores',
    fields: [
      { key: 'startStores', label: 'Stores at start' },
      { key: 'newStores', label: 'New paying stores per month' },
      { key: 'newGrowth', label: 'Growth in new stores per month (%)' },
    ],
  },
  {
    title: 'Plan mix',
    fields: [
      { key: 'p1', label: 'Starter price ($)' },
      { key: 's1', label: 'Starter share (%)' },
      { key: 'p2', label: 'Growth price ($)' },
      { key: 's2', label: 'Growth share (%)' },
      { key: 'p3', label: 'Pro price ($)' },
      { key: 's3', label: 'Pro share (%)' },
      { key: 'annualShare', label: 'Share billed yearly (%)' },
      { key: 'annualDiscount', label: 'Yearly discount (%)' },
    ],
  },
  {
    title: 'Churn, fees and costs',
    fields: [
      { key: 'churn', label: 'Monthly churn (%)' },
      { key: 'setupFee', label: 'One-time setup fee per new store ($)' },
      { key: 'setupShare', label: 'Share of new stores buying setup (%)' },
      { key: 'addon', label: 'Add-on revenue per store per month ($)' },
      { key: 'billingFee', label: 'Payment fee on your billing (%)' },
      { key: 'fixedCost', label: 'Fixed hosting + tools per month ($)' },
      { key: 'varCost', label: 'Variable cost per store per month ($)' },
      { key: 'licence', label: 'Platform licence, one-time ($): Nazmart Everything Bundle is $99' },
    ],
  },
];

function num(value: string) {
  const n = parseFloat(value);
  return Number.isFinite(n) ? n : 0;
}

export default function EcommerceSaasRevenueCalculator() {
  const [values, setValues] = useState<Record<keyof RevenueInputs, string>>(() => {
    const init = {} as Record<keyof RevenueInputs, string>;
    (Object.keys(DEFAULT_REVENUE_INPUTS) as (keyof RevenueInputs)[]).forEach((key) => {
      init[key] = String(DEFAULT_REVENUE_INPUTS[key]);
    });
    return init;
  });

  const projection = useMemo(() => {
    const input = {} as RevenueInputs;
    (Object.keys(DEFAULT_REVENUE_INPUTS) as (keyof RevenueInputs)[]).forEach((key) => {
      input[key] = num(values[key]);
    });
    return projectEcommerceSaas(input);
  }, [values]);

  const m12 = projection.rows[11];
  const m24 = projection.rows[23];
  const maxMrr = Math.max(...projection.rows.map((r) => r.mrr), 1);
  const minProfit = Math.min(...projection.rows.map((r) => r.profit), 0);
  const span = Math.max(maxMrr - minProfit, 1);

  const cards: { label: string; value: string }[] = [
    { label: 'MRR at month 12', value: fmt(m12.mrr) },
    { label: 'MRR at month 24', value: fmt(m24.mrr) },
    { label: 'ARR at month 24', value: fmt(m24.mrr * 12) },
    { label: 'Active stores at month 24', value: fmtStores(m24.stores) },
    { label: 'Monthly profit at month 24', value: fmt(m24.profit) },
    { label: 'Break-even month', value: projection.breakEven ? `Month ${projection.breakEven}` : 'Not within 24 months' },
    {
      label: 'Steady-state stores',
      value: projection.steadyState === null ? '∞ (set churn above 0)' : fmtStores(projection.steadyState),
    },
    { label: 'LTV per store', value: projection.ltv === null ? '∞ (set churn above 0)' : fmt(projection.ltv) },
  ];

  return (
    <div className="flex flex-col gap-5">
      <p className="text-[13px] text-[#6b7280]">Example values. Replace with yours.</p>

      {GROUPS.map((group) => (
        <div key={group.title} className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
          <p className="sm:col-span-2 text-[13px] font-semibold text-[#0F1112]">{group.title}</p>
          {group.fields.map((field) => (
            <div key={field.key} className="flex flex-col gap-1.5">
              <label htmlFor={field.key} className="text-[13px] font-semibold text-[#0F1112]">{field.label}</label>
              <input
                id={field.key}
                type="number"
                value={values[field.key]}
                onChange={(e) => setValues((prev) => ({ ...prev, [field.key]: e.target.value }))}
                className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors"
              />
              {field.key === 'churn' && (
                <p className="text-[12px] leading-5 text-[#6b7280]">
                  SMB SaaS often sees 3–7% monthly (
                  <a href="https://www.venasolutions.com/blog/saas-churn-rate" target="_blank" rel="noopener noreferrer" className="underline">
                    Vena, from Recurly and Paddle data
                  </a>
                  ).
                </p>
              )}
            </div>
          ))}
        </div>
      ))}

      {projection.sharesNormalized && (
        <p className="text-[13px] text-[#9a3412] bg-[#fff7ed] border border-[#fed7aa] rounded-xl px-4 py-3" role="status">
          Plan shares add up to {projection.shareSum}%, not 100%. Results scale them to 100%.
        </p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {cards.map((card) => (
          <div key={card.label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{card.label}</span>
            <span className="text-[22px] font-bold text-[#0F1112]" style={{ color: card.label.startsWith('MRR') ? COLOR : undefined }}>{card.value}</span>
          </div>
        ))}
      </div>
      <p className="text-[12px] text-[#6b7280] -mt-2">
        Steady-state stores: where growth levels off if acquisition stays at the month-24 pace.
      </p>

      <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[13px] font-semibold text-[#0F1112]">MRR and profit, 24 months</span>
          <span className="text-[11px] text-[#6b7280]">Bars: MRR · Line: profit</span>
        </div>
        <svg viewBox="0 0 240 120" className="w-full h-36" role="img" aria-label="Monthly recurring revenue bars with a profit line">
          {projection.rows.map((row, i) => {
            const yZero = ((maxMrr - 0) / span) * 120;
            const yMrr = ((maxMrr - row.mrr) / span) * 120;
            const h = Math.max(yZero - yMrr, 0);
            return (
              <rect
                key={row.month}
                x={i * 10 + 1}
                y={yMrr}
                width={8}
                height={h}
                fill={COLOR}
                opacity={0.75}
              >
                <title>{`Month ${row.month}: MRR ${fmt(row.mrr)}, profit ${fmt(row.profit)}`}</title>
              </rect>
            );
          })}
          <polyline
            fill="none"
            stroke="#0F1112"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            points={projection.rows
              .map((row, i) => {
                const y = ((maxMrr - row.profit) / span) * 120;
                return `${i * 10 + 5},${y}`;
              })
              .join(' ')}
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
              {['Month', 'Stores', 'New', 'Churned', 'MRR', 'Revenue', 'Costs', 'Profit', 'Cumulative profit'].map((h) => (
                <th key={h} className="text-left py-2 pr-3 font-medium text-[#6b7280]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projection.rows.map((row) => (
              <tr key={row.month} className="border-b border-[#F5F6F8]">
                <td className="py-1.5 pr-3 text-[#484848]">{row.month}</td>
                <td className="py-1.5 pr-3 text-[#484848]">{fmtStores(row.stores)}</td>
                <td className="py-1.5 pr-3 text-[#484848]">{fmtStores(row.newStores)}</td>
                <td className="py-1.5 pr-3 text-[#484848]">{fmtStores(row.churned)}</td>
                <td className="py-1.5 pr-3 font-medium" style={{ color: COLOR }}>{fmt(row.mrr)}</td>
                <td className="py-1.5 pr-3 text-[#484848]">{fmt(row.revenue)}</td>
                <td className="py-1.5 pr-3 text-[#484848]">{fmt(row.costs)}</td>
                <td className="py-1.5 pr-3 text-[#484848]">{fmt(row.profit)}</td>
                <td className="py-1.5 pr-3 text-[#484848]">{fmt(row.cumProfit)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-2xl border border-[#E5E7EC] p-5 flex flex-col gap-3">
        <p className="text-[15px] leading-6 text-[#0F1112]">
          Ready to launch your own platform? Nazmart gives you stores, plans and billing out of the box.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/products/nazmart-multi-tenancy-ecommerce-platform"
            className="inline-flex items-center text-white font-semibold text-[14px] rounded-full px-6 py-3"
            style={{ background: COLOR }}
          >
            See Nazmart
          </Link>
          <Link
            href="/how-to-start-an-ecommerce-saas-business"
            className="inline-flex items-center font-semibold text-[14px] rounded-full px-6 py-3 border border-[#E5E7EC] text-[#0F1112]"
          >
            How to start an ecommerce SaaS
          </Link>
        </div>
      </div>
    </div>
  );
}
