'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

interface Channel { name: string; spend: string; customers: string; }

export default function CacCalculator() {
  const [channels, setChannels] = useState<Channel[]>([
    { name: 'Paid Search (Google Ads)', spend: '5000', customers: '25' },
    { name: 'Social Media Ads', spend: '3000', customers: '18' },
    { name: 'Content Marketing', spend: '2000', customers: '15' },
    { name: 'Email Outreach', spend: '500', customers: '10' },
  ]);
  const [ltv, setLtv] = useState('1200');
  const [period, setPeriod] = useState<'monthly' | 'quarterly' | 'annual'>('monthly');

  function addChannel() { setChannels((c) => [...c, { name: '', spend: '', customers: '' }]); }
  function remove(i: number) { setChannels((c) => c.filter((_, idx) => idx !== i)); }
  function update(i: number, f: keyof Channel, v: string) {
    setChannels((p) => p.map((c, idx) => idx === i ? { ...c, [f]: v } : c));
  }

  const result = useMemo(() => {
    const data = channels.map((c) => {
      const spend = parseFloat(c.spend) || 0;
      const customers = parseFloat(c.customers) || 0;
      const cac = customers > 0 ? spend / customers : 0;
      return { ...c, spend, customers, cac };
    });

    const totalSpend = data.reduce((s, c) => s + c.spend, 0);
    const totalCustomers = data.reduce((s, c) => s + c.customers, 0);
    const overallCac = totalCustomers > 0 ? totalSpend / totalCustomers : 0;
    const ltvVal = parseFloat(ltv) || 0;
    const ltvCacRatio = overallCac > 0 ? ltvVal / overallCac : 0;
    const paybackMonths = overallCac > 0 && ltvVal > 0 ? overallCac / (ltvVal / 12) : 0;

    return { data, totalSpend, totalCustomers, overallCac, ltvCacRatio, paybackMonths };
  }, [channels, ltv]);

  const PERIOD_MULT = { monthly: 1, quarterly: 3, annual: 12 };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="text-[13px] font-medium text-[#0F1112]">Data Period:</span>
        {(['monthly', 'quarterly', 'annual'] as const).map((p) => (
          <button key={p} onClick={() => setPeriod(p)}
            className="px-3 py-1.5 rounded-full border text-[12px] font-medium capitalize transition-colors active:scale-95"
            style={period === p ? { background: COLOR, color: '#fff', borderColor: COLOR } : { borderColor: '#E5E7EC', color: '#484848' }}>
            {p}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-[#E5E7EC]">
              {['Channel', 'Marketing Spend ($)', 'New Customers', 'CAC', ''].map((h) => (
                <th key={h} className="text-left py-2.5 pr-3 font-medium text-[#6b7280]">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.data.map((c, i) => (
              <tr key={i} className="border-b border-[#F5F6F8]">
                <td className="py-2 pr-3">
                  <input type="text" value={c.name} onChange={(e) => update(i, 'name', e.target.value)} placeholder={`Channel ${i + 1}`}
                    className="w-full outline-none text-[13px] text-[#0F1112] border-b border-transparent focus:border-[#ef4444]" />
                </td>
                <td className="py-2 pr-3">
                  <input type="number" value={channels[i].spend} onChange={(e) => update(i, 'spend', e.target.value)} min={0}
                    className="w-24 text-right outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#ef4444]" />
                </td>
                <td className="py-2 pr-3">
                  <input type="number" value={channels[i].customers} onChange={(e) => update(i, 'customers', e.target.value)} min={0}
                    className="w-20 text-right outline-none text-[13px] text-[#0F1112] border-b border-[#E5E7EC] focus:border-[#ef4444]" />
                </td>
                <td className="py-2 pr-3 font-medium" style={{ color: COLOR }}>{c.cac > 0 ? fmt(c.cac) : '—'}</td>
                <td className="py-2">
                  {channels.length > 1 && <button onClick={() => remove(i)} className="text-[#9ca3af] hover:text-red-400">×</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-3 items-center">
        <button onClick={addChannel}
          className="text-[13px] font-medium border border-dashed border-[#E5E7EC] rounded-lg px-4 py-2 text-[#484848] hover:border-[#ef4444] hover:text-[#ef4444] transition-colors">
          + Add Channel
        </button>
        <div className="flex items-center gap-2">
          <label className="text-[13px] font-semibold text-[#0F1112]">Customer LTV ($):</label>
          <input type="number" value={ltv} onChange={(e) => setLtv(e.target.value)} min={0}
            className="w-28 rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] text-[#0F1112] outline-none focus:border-[#ef4444] focus:ring-2 focus:ring-[#ef4444]/20 transition-colors" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Overall CAC', val: fmt(result.overallCac), color: COLOR },
          { label: 'Total Spend', val: fmt(result.totalSpend), color: '#6b7280' },
          { label: 'LTV:CAC Ratio', val: `${result.ltvCacRatio.toFixed(1)}×`, color: result.ltvCacRatio >= 3 ? '#22c55e' : result.ltvCacRatio >= 1 ? '#f26b4e' : '#ef4444' },
          { label: 'Payback Period', val: `${result.paybackMonths.toFixed(1)} mo`, color: '#f26b4e' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col gap-3">
        <span className="text-[13px] font-semibold text-[#0F1112]">CAC by Channel</span>
        {result.data.filter((c) => c.cac > 0).sort((a, b) => a.cac - b.cac).map((c, i) => {
          const maxCac = Math.max(...result.data.map((d) => d.cac), 1);
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[12px] text-[#6b7280] w-40 shrink-0 truncate">{c.name || `Channel ${i + 1}`}</span>
              <div className="flex-1 h-4 bg-white rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${(c.cac / maxCac) * 100}%`, background: COLOR + '60' }} />
              </div>
              <span className="text-[12px] font-medium text-[#0F1112] w-20 text-right shrink-0">{fmt(c.cac)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
