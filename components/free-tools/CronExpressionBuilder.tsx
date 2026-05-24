'use client';
import { useState, useMemo } from 'react';

const COLOR = '#f26b4e';

const PRESETS = [
  { label: 'Every minute', expr: '* * * * *' },
  { label: 'Every hour', expr: '0 * * * *' },
  { label: 'Every day at midnight', expr: '0 0 * * *' },
  { label: 'Every day at noon', expr: '0 12 * * *' },
  { label: 'Every Monday', expr: '0 0 * * 1' },
  { label: 'Every weekday', expr: '0 0 * * 1-5' },
  { label: 'Every week (Sunday)', expr: '0 0 * * 0' },
  { label: 'Every month (1st)', expr: '0 0 1 * *' },
  { label: 'Every year (Jan 1)', expr: '0 0 1 1 *' },
  { label: 'Every 5 minutes', expr: '*/5 * * * *' },
  { label: 'Every 15 minutes', expr: '*/15 * * * *' },
  { label: 'Every 6 hours', expr: '0 */6 * * *' },
];

function describe(expr: string): string {
  const parts = expr.trim().split(/\s+/);
  if (parts.length !== 5) return 'Invalid expression (need 5 fields)';
  const [min, hr, dom, month, dow] = parts;

  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const dowNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  let desc = 'Runs ';
  if (min === '*' && hr === '*') desc += 'every minute';
  else if (min.startsWith('*/')) desc += `every ${min.slice(2)} minutes`;
  else if (hr.startsWith('*/')) desc += `every ${hr.slice(2)} hours at minute ${min}`;
  else if (hr !== '*') desc += `at ${hr.padStart(2,'0')}:${min.padStart(2,'0')}`;
  else desc += `at minute ${min} of every hour`;

  if (dom !== '*') desc += `, on day ${dom}`;
  if (month !== '*') {
    const m = parseInt(month);
    desc += `, in ${!isNaN(m) && m >= 1 && m <= 12 ? monthNames[m-1] : month}`;
  }
  if (dow !== '*') {
    const d = parseInt(dow);
    if (!isNaN(d) && d >= 0 && d <= 6) desc += `, on ${dowNames[d]}`;
    else if (dow === '1-5') desc += ', weekdays only';
    else desc += `, on day-of-week ${dow}`;
  }

  return desc;
}

function nextRuns(expr: string, count = 5): string[] {
  const parts = expr.trim().split(/\s+/);
  if (parts.length !== 5) return [];
  const [minF, hrF, , , dowF] = parts;
  const results: string[] = [];
  const now = new Date();
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1, 0, 0);

  for (let i = 0; i < 10000 && results.length < count; i++) {
    const min = d.getMinutes();
    const hr = d.getHours();
    const dow = d.getDay();

    const minOk = minF === '*' || (minF.startsWith('*/') ? min % parseInt(minF.slice(2)) === 0 : parseInt(minF) === min);
    const hrOk = hrF === '*' || (hrF.startsWith('*/') ? hr % parseInt(hrF.slice(2)) === 0 : parseInt(hrF) === hr);
    const dowOk = dowF === '*' || (dowF === '1-5' ? dow >= 1 && dow <= 5 : parseInt(dowF) === dow);

    if (minOk && hrOk && dowOk) {
      results.push(d.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }));
    }
    d.setMinutes(d.getMinutes() + 1);
  }

  return results;
}

export default function CronExpressionBuilder() {
  const [expr, setExpr] = useState('0 0 * * *');
  const [copied, setCopied] = useState(false);

  const human = useMemo(() => describe(expr), [expr]);
  const runs = useMemo(() => nextRuns(expr), [expr]);

  function copy() {
    navigator.clipboard.writeText(expr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <label className="text-[13px] font-semibold text-[#0F1112]">Cron Expression</label>
          <button onClick={copy} className="text-[12px] text-[#f26b4e] hover:underline">{copied ? 'Copied!' : 'Copy'}</button>
        </div>
        <input
          type="text" value={expr} onChange={(e) => setExpr(e.target.value)}
          spellCheck={false}
          className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[16px] font-mono text-[#0F1112] outline-none focus:border-[#f26b4e] focus:ring-2 focus:ring-[#f26b4e]/10 transition-colors tracking-widest"
        />
        <div className="flex gap-2 text-[11px] text-[#9ca3af]">
          {['Minute', 'Hour', 'Day', 'Month', 'Weekday'].map((f) => (
            <span key={f} className="flex-1 text-center">{f}</span>
          ))}
        </div>
      </div>

      <div
        className="rounded-xl p-4 text-[14px] font-medium font-mono"
        style={{ background: '#ecfeff', color: COLOR }}
      >
        {human}
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-[13px] font-semibold text-[#0F1112]">Quick Presets</span>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.expr}
              onClick={() => setExpr(p.expr)}
              className="px-3 py-1.5 rounded-full border border-[#E5E7EC] text-[12px] text-[#484848] hover:border-[#f26b4e] hover:text-[#f26b4e] transition-colors font-mono"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {runs.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-[13px] font-semibold text-[#0F1112]">Next Scheduled Runs</span>
          <div className="rounded-xl border border-[#E5E7EC] overflow-hidden">
            {runs.map((r, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-2.5 border-b border-[#F5F6F8] last:border-0">
                <span className="text-[12px] font-medium text-[#9ca3af] w-5">{i + 1}</span>
                <span className="text-[13px] font-mono text-[#0F1112]">{r}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-[12px] text-[#9ca3af]">
        Field order: <code className="font-mono">minute (0–59) · hour (0–23) · day-of-month (1–31) · month (1–12) · day-of-week (0–7, 0=Sun)</code>
      </div>
    </div>
  );
}
