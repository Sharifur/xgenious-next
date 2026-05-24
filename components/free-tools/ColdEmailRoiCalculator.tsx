'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';
const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export default function ColdEmailRoiCalculator() {
  const [emailsSent, setEmailsSent] = useState('1000');
  const [openRate, setOpenRate] = useState('25');
  const [replyRate, setReplyRate] = useState('5');
  const [meetingRate, setMeetingRate] = useState('40');
  const [closeRate, setCloseRate] = useState('25');
  const [dealValue, setDealValue] = useState('5000');
  const [costPerEmail, setCostPerEmail] = useState('0.02');
  const [toolCost, setToolCost] = useState('150');

  const result = useMemo(() => {
    const sent = parseFloat(emailsSent) || 0;
    const opens = sent * (parseFloat(openRate) / 100);
    const replies = sent * (parseFloat(replyRate) / 100);
    const meetings = replies * (parseFloat(meetingRate) / 100);
    const closed = meetings * (parseFloat(closeRate) / 100);
    const revenue = closed * (parseFloat(dealValue) || 0);
    const emailCost = sent * (parseFloat(costPerEmail) || 0);
    const totalCost = emailCost + (parseFloat(toolCost) || 0);
    const profit = revenue - totalCost;
    const roi = totalCost > 0 ? ((profit / totalCost) * 100) : 0;
    const costPerMeeting = meetings > 0 ? totalCost / meetings : 0;
    const costPerDeal = closed > 0 ? totalCost / closed : 0;

    return { opens, replies, meetings, closed, revenue, totalCost, profit, roi, costPerMeeting, costPerDeal };
  }, [emailsSent, openRate, replyRate, meetingRate, closeRate, dealValue, costPerEmail, toolCost]);

  const funnel = [
    { label: 'Emails Sent', val: parseFloat(emailsSent) || 0, color: '#f26b4e' },
    { label: 'Opened', val: result.opens, color: '#f26b4e' },
    { label: 'Replied', val: result.replies, color: '#f26b4e' },
    { label: 'Meetings Booked', val: result.meetings, color: '#f26b4e' },
    { label: 'Deals Closed', val: result.closed, color: COLOR },
  ];

  const maxFunnel = funnel[0].val || 1;

  return (
    <div className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        {[
          { label: 'Emails Sent', val: emailsSent, set: setEmailsSent },
          { label: 'Open Rate (%)', val: openRate, set: setOpenRate },
          { label: 'Reply Rate (%)', val: replyRate, set: setReplyRate },
          { label: 'Meeting Book Rate (%)', val: meetingRate, set: setMeetingRate },
          { label: 'Close Rate from Meetings (%)', val: closeRate, set: setCloseRate },
          { label: 'Average Deal Value ($)', val: dealValue, set: setDealValue },
          { label: 'Cost per Email Sent ($)', val: costPerEmail, set: setCostPerEmail },
          { label: 'Monthly Tool Cost ($)', val: toolCost, set: setToolCost },
        ].map(({ label, val, set }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <label className="text-[13px] font-semibold text-[#0F1112]">{label}</label>
            <input type="number" value={val} onChange={(e) => set(e.target.value)} min={0}
              className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/20 transition-colors" />
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Revenue Generated', val: fmt(result.revenue), color: '#22c55e' },
          { label: 'Total Cost', val: fmt(result.totalCost), color: '#ef4444' },
          { label: 'ROI', val: `${result.roi.toFixed(0)}%`, color: result.roi > 0 ? '#22c55e' : '#ef4444' },
          { label: 'Profit', val: fmt(result.profit), color: result.profit > 0 ? COLOR : '#ef4444' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[24px] font-bold" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-[#F5F6F8] border border-[#E5E7EC] p-5 flex flex-col gap-3">
        <span className="text-[13px] font-semibold text-[#0F1112]">Email Funnel</span>
        {funnel.map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-[12px] text-[#6b7280] w-32 shrink-0">{f.label}</span>
            <div className="flex-1 h-5 bg-white rounded-full overflow-hidden">
              <div className="h-full rounded-full flex items-center px-2 transition-all" style={{
                width: `${Math.max((f.val / maxFunnel) * 100, 1)}%`,
                background: f.color + '30',
                borderLeft: `3px solid ${f.color}`
              }}>
                <span className="text-[10px] font-medium" style={{ color: f.color }}>{Math.round(f.val)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-3 text-[13px]">
        <div className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4">
          <span className="text-[#6b7280]">Cost per Meeting: </span>
          <strong className="text-[#0F1112]">{result.costPerMeeting > 0 ? fmt(result.costPerMeeting) : '—'}</strong>
        </div>
        <div className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4">
          <span className="text-[#6b7280]">Cost per Deal: </span>
          <strong className="text-[#0F1112]">{result.costPerDeal > 0 ? fmt(result.costPerDeal) : '—'}</strong>
        </div>
      </div>
    </div>
  );
}
