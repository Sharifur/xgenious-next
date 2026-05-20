'use client';
import { useState, useMemo } from 'react';

const COLOR = '#3b82f6';

const fmt = (n: number) => {
  if (n === 0) return '$0.00';
  if (n >= 1) return `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (n >= 0.01) return `$${n.toFixed(4)}`;
  return `$${n.toFixed(6)}`;
};

interface Model {
  id: string;
  label: string;
  provider: string;
  inputPer1M: number;
  outputPer1M: number;
}

const MODELS: Model[] = [
  { id: 'gpt-5.5',         label: 'GPT-5.5',           provider: 'OpenAI',      inputPer1M: 5.00,  outputPer1M: 30.00 },
  { id: 'gpt-5',           label: 'GPT-5',             provider: 'OpenAI',      inputPer1M: 1.25,  outputPer1M: 10.00 },
  { id: 'gpt-5-mini',      label: 'GPT-5 mini',        provider: 'OpenAI',      inputPer1M: 0.25,  outputPer1M: 2.00  },
  { id: 'gpt-5-nano',      label: 'GPT-5 nano',        provider: 'OpenAI',      inputPer1M: 0.05,  outputPer1M: 0.40  },
  { id: 'gpt-4o',          label: 'GPT-4o',            provider: 'OpenAI',      inputPer1M: 2.50,  outputPer1M: 10.00 },
  { id: 'gpt-4o-mini',     label: 'GPT-4o mini',       provider: 'OpenAI',      inputPer1M: 0.15,  outputPer1M: 0.60  },
  { id: 'gpt-4.1',         label: 'GPT-4.1',           provider: 'OpenAI',      inputPer1M: 2.00,  outputPer1M: 8.00  },
  { id: 'gpt-4.1-mini',    label: 'GPT-4.1 mini',      provider: 'OpenAI',      inputPer1M: 0.40,  outputPer1M: 1.60  },
  { id: 'gpt-4-turbo',     label: 'GPT-4 Turbo',       provider: 'OpenAI',      inputPer1M: 10.00, outputPer1M: 30.00 },
  { id: 'gpt-4',           label: 'GPT-4 (legacy)',     provider: 'OpenAI',      inputPer1M: 30.00, outputPer1M: 60.00 },
  { id: 'o3-mini',         label: 'o3 mini',            provider: 'OpenAI',      inputPer1M: 1.10,  outputPer1M: 4.40  },
  { id: 'claude-opus',     label: 'Claude Opus 4',     provider: 'Anthropic',   inputPer1M: 15.00, outputPer1M: 75.00 },
  { id: 'claude-sonnet',   label: 'Claude Sonnet 4',   provider: 'Anthropic',   inputPer1M: 3.00,  outputPer1M: 15.00 },
  { id: 'claude-haiku',    label: 'Claude Haiku 4',    provider: 'Anthropic',   inputPer1M: 0.80,  outputPer1M: 4.00  },
  { id: 'gemini-3.5-flash',label: 'Gemini 3.5 Flash',  provider: 'Google',      inputPer1M: 1.50,  outputPer1M: 9.00  },
  { id: 'gemini-3.1-pro',  label: 'Gemini 3.1 Pro',   provider: 'Google',      inputPer1M: 2.00,  outputPer1M: 12.00 },
  { id: 'gemini-3.1-lite', label: 'Gemini 3.1 Lite',  provider: 'Google',      inputPer1M: 0.25,  outputPer1M: 1.50  },
  { id: 'gemini-2.5-pro',  label: 'Gemini 2.5 Pro',   provider: 'Google',      inputPer1M: 1.25,  outputPer1M: 10.00 },
  { id: 'gemini-2.5-flash',label: 'Gemini 2.5 Flash',  provider: 'Google',      inputPer1M: 0.30,  outputPer1M: 2.50  },
  { id: 'gemini-2-flash',  label: 'Gemini 2.0 Flash',  provider: 'Google',      inputPer1M: 0.10,  outputPer1M: 0.40  },
  { id: 'deepseek-v4-pro', label: 'DeepSeek V4 Pro',  provider: 'DeepSeek',    inputPer1M: 1.74,  outputPer1M: 3.48  },
  { id: 'deepseek-v4-flash',label:'DeepSeek V4 Flash', provider: 'DeepSeek',    inputPer1M: 0.14,  outputPer1M: 0.28  },
  { id: 'llama-3-70b',     label: 'Llama 3.3 70B',    provider: 'Meta (Groq)', inputPer1M: 0.59,  outputPer1M: 0.79  },
  { id: 'mistral-large',   label: 'Mistral Large 2',   provider: 'Mistral',     inputPer1M: 2.00,  outputPer1M: 6.00  },
];

const PROVIDERS = Array.from(new Set(MODELS.map((m) => m.provider)));

const PROVIDER_COLORS: Record<string, string> = {
  OpenAI:       '#10a37f',
  Anthropic:    '#d97706',
  Google:       '#4285f4',
  DeepSeek:     '#5b6ef5',
  'Meta (Groq)':'#0467df',
  Mistral:      '#ef4444',
};

const inputClass = 'rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[14px] text-[#0F1112] outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/10 transition-colors w-full';

export default function AiTokenCostCalculator() {
  const [selectedId, setSelectedId] = useState('gpt-5');
  const [inputTokens, setInputTokens] = useState('1000');
  const [outputTokens, setOutputTokens] = useState('500');
  const [requestsPerDay, setRequestsPerDay] = useState('1000');
  const [useCustom, setUseCustom] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const [customOutput, setCustomOutput] = useState('');

  const model = MODELS.find((m) => m.id === selectedId) ?? MODELS[0];

  const result = useMemo(() => {
    const inTok = parseFloat(inputTokens) || 0;
    const outTok = parseFloat(outputTokens) || 0;
    const rpd = parseFloat(requestsPerDay) || 0;
    const inputRate = useCustom && customInput ? parseFloat(customInput) : model.inputPer1M;
    const outputRate = useCustom && customOutput ? parseFloat(customOutput) : model.outputPer1M;
    const inputCost = (inTok / 1_000_000) * inputRate;
    const outputCost = (outTok / 1_000_000) * outputRate;
    const costPerRequest = inputCost + outputCost;
    const dailyCost = costPerRequest * rpd;
    const monthlyCost = dailyCost * 30;
    return { inputCost, outputCost, costPerRequest, dailyCost, monthlyCost, inputRate, outputRate };
  }, [inputTokens, outputTokens, requestsPerDay, model, useCustom, customInput, customOutput]);

  const comparison = useMemo(() => {
    const inTok = parseFloat(inputTokens) || 0;
    const outTok = parseFloat(outputTokens) || 0;
    const rpd = parseFloat(requestsPerDay) || 0;
    return MODELS.map((m) => {
      const cost = (inTok / 1_000_000) * m.inputPer1M + (outTok / 1_000_000) * m.outputPer1M;
      return { ...m, cost, monthly: cost * rpd * 30 };
    }).sort((a, b) => a.cost - b.cost);
  }, [inputTokens, outputTokens, requestsPerDay]);

  return (
    <div className="flex flex-col gap-5">
      {/* Model selector */}
      <div className="flex flex-col gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <span className="text-[13px] font-semibold text-[#0F1112]">Select AI Model</span>
        {PROVIDERS.map((provider) => (
          <div key={provider} className="flex flex-col gap-1.5">
            <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider">{provider}</span>
            <div className="flex flex-wrap gap-2">
              {MODELS.filter((m) => m.provider === provider).map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedId(m.id)}
                  className="px-3 py-1.5 rounded-lg border text-[12px] font-medium transition-all active:scale-95"
                  style={selectedId === m.id
                    ? { borderColor: PROVIDER_COLORS[provider], background: `${PROVIDER_COLORS[provider]}18`, color: PROVIDER_COLORS[provider] }
                    : { borderColor: '#E5E7EC', color: '#484848' }}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Inputs */}
      <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#F5F6F8] rounded-2xl">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Input Tokens / Request</label>
          <input type="number" value={inputTokens} onChange={(e) => setInputTokens(e.target.value)} min={0} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">Output Tokens / Request</label>
          <input type="number" value={outputTokens} onChange={(e) => setOutputTokens(e.target.value)} min={0} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-semibold text-[#0F1112]">API Requests / Day</label>
          <input type="number" value={requestsPerDay} onChange={(e) => setRequestsPerDay(e.target.value)} min={0} className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-[13px] font-semibold text-[#0F1112]">Custom Pricing</label>
            <button
              onClick={() => setUseCustom((v) => !v)}
              className="text-[11px] font-medium px-2 py-1 rounded-lg border transition-colors"
              style={useCustom
                ? { borderColor: COLOR, background: `${COLOR}15`, color: COLOR }
                : { borderColor: '#E5E7EC', color: '#9ca3af' }}
            >
              {useCustom ? 'Override on' : 'Override off'}
            </button>
          </div>
          {useCustom ? (
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-[#9ca3af]">$/1M input</span>
                <input type="number" value={customInput} onChange={(e) => setCustomInput(e.target.value)} placeholder={model.inputPer1M.toString()} min={0} step={0.01} className={inputClass} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-[#9ca3af]">$/1M output</span>
                <input type="number" value={customOutput} onChange={(e) => setCustomOutput(e.target.value)} placeholder={model.outputPer1M.toString()} min={0} step={0.01} className={inputClass} />
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-[#E5E7EC] bg-white px-4 py-3 text-[13px] text-[#484848]">
              {model.label}:{' '}
              <span className="font-medium text-[#0F1112]">${model.inputPer1M}/1M in</span>
              {' · '}
              <span className="font-medium text-[#0F1112]">${model.outputPer1M}/1M out</span>
            </div>
          )}
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { label: 'Cost / Request', val: fmt(result.costPerRequest), color: COLOR },
          { label: 'Daily Cost', val: fmt(result.dailyCost), color: '#6366f1' },
          { label: 'Monthly (30d)', val: fmt(result.monthlyCost), color: '#10b981' },
        ].map(({ label, val, color }) => (
          <div key={label} className="rounded-xl bg-[#F5F6F8] border border-[#E5E7EC] p-4 sm:p-5 flex flex-col gap-1.5">
            <span className="text-[12px] text-[#6b7280]">{label}</span>
            <span className="text-[22px] font-bold leading-tight" style={{ color }}>{val}</span>
          </div>
        ))}
      </div>

      {/* Breakdown */}
      <div className="rounded-xl border border-[#E5E7EC] overflow-hidden text-[13px]">
        {[
          { label: `Input tokens (${(parseFloat(inputTokens) || 0).toLocaleString()} × $${result.inputRate}/1M)`, val: fmt(result.inputCost) },
          { label: `Output tokens (${(parseFloat(outputTokens) || 0).toLocaleString()} × $${result.outputRate}/1M)`, val: fmt(result.outputCost) },
          { label: 'Total per request', val: fmt(result.costPerRequest), bold: true },
        ].map((r, i) => (
          <div key={i} className={`flex justify-between px-4 py-2.5 border-b border-[#E5E7EC] last:border-0 ${r.bold ? 'font-bold bg-[#F5F6F8]' : ''}`}>
            <span className="text-[#484848]">{r.label}</span>
            <span className="text-[#0F1112]">{r.val}</span>
          </div>
        ))}
      </div>

      {/* Model comparison */}
      <div className="flex flex-col gap-2">
        <span className="text-[13px] font-semibold text-[#0F1112]">Model Comparison — Same Token Count</span>
        <div className="rounded-xl border border-[#E5E7EC] overflow-hidden text-[12px]">
          <div className="grid grid-cols-4 px-3 py-2 bg-[#F5F6F8] border-b border-[#E5E7EC] font-semibold text-[#484848]">
            <span className="col-span-2">Model</span>
            <span className="text-right">Per Request</span>
            <span className="text-right">Monthly</span>
          </div>
          {comparison.map((m, i) => (
            <div
              key={m.id}
              className={`grid grid-cols-4 px-3 py-2 border-b border-[#E5E7EC] last:border-0 ${m.id === selectedId ? 'bg-[#eff6ff]' : i % 2 !== 0 ? 'bg-[#fafafa]' : ''}`}
            >
              <span className="col-span-2 flex items-center gap-1.5 text-[#484848]">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: PROVIDER_COLORS[m.provider] }} />
                <span className={m.id === selectedId ? 'font-semibold text-[#0F1112]' : ''}>{m.label}</span>
              </span>
              <span className="text-right text-[#0F1112] font-medium">{fmt(m.cost)}</span>
              <span className="text-right text-[#6b7280]">{fmt(m.monthly)}</span>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-[#9ca3af]">Prices as of May 2026 from official provider pricing pages. DeepSeek V4 Pro has an active 75% discount until 2026-05-31. GPT-4 Turbo and GPT-4 legacy are deprecated. Verify current rates before production budgeting.</p>
      </div>
    </div>
  );
}
