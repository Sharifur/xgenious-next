'use client';
import { useState, useRef } from 'react';

const COLOR = '#f26b4e';

const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

interface LineItem { description: string; qty: string; rate: string; }

export default function InvoiceGenerator() {
  const [from, setFrom] = useState({ name: '', email: '', address: '' });
  const [to, setTo] = useState({ name: '', email: '', address: '' });
  const [invoiceNo, setInvoiceNo] = useState(`INV-${Date.now().toString().slice(-6)}`);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [dueDate, setDueDate] = useState('');
  const [items, setItems] = useState<LineItem[]>([{ description: '', qty: '1', rate: '' }]);
  const [tax, setTax] = useState('0');
  const [notes, setNotes] = useState('');
  const printRef = useRef<HTMLDivElement>(null);

  function addItem() { setItems((i) => [...i, { description: '', qty: '1', rate: '' }]); }
  function removeItem(i: number) { setItems((p) => p.filter((_, idx) => idx !== i)); }
  function updateItem(i: number, f: keyof LineItem, v: string) {
    setItems((p) => p.map((row, idx) => idx === i ? { ...row, [f]: v } : row));
  }

  const subtotal = items.reduce((s, it) => s + (parseFloat(it.qty) || 0) * (parseFloat(it.rate) || 0), 0);
  const taxAmt = subtotal * (parseFloat(tax) / 100);
  const total = subtotal + taxAmt;

  function print() { window.print(); }

  return (
    <div className="flex flex-col gap-5">
      <div ref={printRef} className="border border-[#E5E7EC] rounded-2xl p-6 flex flex-col gap-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[24px] font-bold text-[#0F1112]">INVOICE</h2>
            <div className="flex gap-4 mt-1 text-[13px] text-[#6b7280]">
              <span>No: <input type="text" value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)} className="inline-block w-28 border-b border-[#E5E7EC] outline-none text-[#0F1112] font-medium" /></span>
              <span>Date: <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="inline-block border-b border-[#E5E7EC] outline-none text-[#0F1112]" /></span>
            </div>
            {dueDate && <div className="text-[12px] text-[#6b7280] mt-0.5">Due: {dueDate}</div>}
          </div>
          <div className="text-right">
            <span className="text-[13px] text-[#6b7280]">Due Date</span>
            <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="block border-b border-[#E5E7EC] outline-none text-[13px] text-[#0F1112] text-right mt-0.5" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: 'From', val: from, set: setFrom },
            { label: 'Bill To', val: to, set: setTo },
          ].map(({ label, val, set }) => (
            <div key={label} className="flex flex-col gap-1.5">
              <span className="text-[12px] font-semibold text-[#6b7280] uppercase tracking-wider">{label}</span>
              <input type="text" value={val.name} onChange={(e) => set((p) => ({ ...p, name: e.target.value }))} placeholder="Company / Name" className="rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
              <input type="email" value={val.email} onChange={(e) => set((p) => ({ ...p, email: e.target.value }))} placeholder="email@example.com" className="rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
              <textarea value={val.address} onChange={(e) => set((p) => ({ ...p, address: e.target.value }))} placeholder="Address" rows={2} className="rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none resize-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
            </div>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b-2 border-[#0F1112]">
                <th className="text-left py-2.5 pr-3 font-semibold text-[#0F1112]">Description</th>
                <th className="text-right py-2.5 pr-3 font-semibold text-[#0F1112] w-16">Qty</th>
                <th className="text-right py-2.5 pr-3 font-semibold text-[#0F1112] w-24">Rate</th>
                <th className="text-right py-2.5 font-semibold text-[#0F1112] w-24">Amount</th>
                <th className="w-6 print:hidden" />
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => {
                const amount = (parseFloat(item.qty) || 0) * (parseFloat(item.rate) || 0);
                return (
                  <tr key={i} className="border-b border-[#E5E7EC] hover:bg-[#F5F6F8] transition-colors">
                    <td className="py-2 pr-3">
                      <input type="text" value={item.description} onChange={(e) => updateItem(i, 'description', e.target.value)} placeholder="Service or product description" className="w-full outline-none text-[13px] text-[#0F1112] placeholder:text-[#9ca3af] focus:bg-[#fafbff] rounded transition-colors" />
                    </td>
                    <td className="py-2 pr-3">
                      <input type="number" value={item.qty} onChange={(e) => updateItem(i, 'qty', e.target.value)} min={0} className="w-full text-right outline-none text-[13px] text-[#0F1112] focus:bg-[#fafbff] rounded transition-colors" />
                    </td>
                    <td className="py-2 pr-3">
                      <input type="number" value={item.rate} onChange={(e) => updateItem(i, 'rate', e.target.value)} min={0} placeholder="0.00" className="w-full text-right outline-none text-[13px] text-[#0F1112] placeholder:text-[#9ca3af] focus:bg-[#fafbff] rounded transition-colors" />
                    </td>
                    <td className="py-2 text-right text-[13px] text-[#0F1112]">{amount > 0 ? fmt(amount) : '—'}</td>
                    <td className="py-2 print:hidden">
                      {items.length > 1 && <button onClick={() => removeItem(i)} className="text-[#9ca3af] hover:text-red-400 transition-colors">×</button>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <button onClick={addItem} className="self-start text-[13px] font-medium border border-dashed border-[#E5E7EC] rounded-lg px-4 py-2 text-[#484848] hover:border-[#f26b4e] hover:text-[#f26b4e] transition-colors print:hidden">
          + Add Line Item
        </button>

        <div className="flex justify-end">
          <div className="flex flex-col gap-2 min-w-[220px] text-[13px]">
            <div className="flex justify-between gap-8"><span className="text-[#6b7280]">Subtotal</span><span className="font-medium text-[#0F1112]">{fmt(subtotal)}</span></div>
            <div className="flex justify-between gap-8 items-center">
              <span className="text-[#6b7280]">Tax (<input type="number" value={tax} onChange={(e) => setTax(e.target.value)} min={0} max={100} className="w-10 border-b border-[#E5E7EC] outline-none text-center text-[#0F1112]" />%)</span>
              <span className="font-medium text-[#0F1112]">{fmt(taxAmt)}</span>
            </div>
            <div className="flex justify-between gap-8 border-t border-[#0F1112] pt-2">
              <span className="font-bold text-[#0F1112]">Total</span>
              <span className="font-bold text-[18px]" style={{ color: COLOR }}>{fmt(total)}</span>
            </div>
          </div>
        </div>

        {notes && (
          <div className="rounded-xl bg-[#F5F6F8] p-4 text-[13px] text-[#484848] whitespace-pre-wrap">{notes}</div>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-semibold text-[#0F1112]">Notes / Payment Terms</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Payment due within 30 days. Thank you for your business!" rows={2} className="w-full rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] placeholder:text-[#9ca3af] outline-none resize-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
      </div>

      <button
        onClick={print}
        className="self-start inline-flex items-center gap-2 text-white font-semibold text-[14px] rounded-full px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95"
        style={{ background: COLOR, boxShadow: `0 6px 20px ${COLOR}40` }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6v-8z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
        Print / Save PDF
      </button>
    </div>
  );
}
