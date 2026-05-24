'use client';
import { useState } from 'react';

const COLOR = '#3b82f6';

interface EnvVar { key: string; value: string; comment: string; isSecret: boolean; }

const PRESETS: Record<string, EnvVar[]> = {
  'Next.js': [
    { key: 'NEXT_PUBLIC_APP_URL', value: 'http://localhost:3000', comment: 'Public app URL', isSecret: false },
    { key: 'DATABASE_URL', value: 'postgresql://user:password@localhost:5432/mydb', comment: 'Database connection string', isSecret: true },
    { key: 'NEXTAUTH_SECRET', value: '', comment: 'NextAuth secret (run: openssl rand -base64 32)', isSecret: true },
    { key: 'NEXTAUTH_URL', value: 'http://localhost:3000', comment: '', isSecret: false },
  ],
  'Node.js API': [
    { key: 'PORT', value: '3000', comment: 'Server port', isSecret: false },
    { key: 'NODE_ENV', value: 'development', comment: 'development | production', isSecret: false },
    { key: 'DATABASE_URL', value: '', comment: 'Database connection', isSecret: true },
    { key: 'JWT_SECRET', value: '', comment: 'JWT signing secret', isSecret: true },
    { key: 'REDIS_URL', value: 'redis://localhost:6379', comment: '', isSecret: false },
  ],
  'Stripe': [
    { key: 'STRIPE_SECRET_KEY', value: 'sk_test_...', comment: 'Stripe secret key', isSecret: true },
    { key: 'STRIPE_PUBLISHABLE_KEY', value: 'pk_test_...', comment: 'Stripe publishable key', isSecret: false },
    { key: 'STRIPE_WEBHOOK_SECRET', value: 'whsec_...', comment: 'Stripe webhook secret', isSecret: true },
  ],
  'AWS S3': [
    { key: 'AWS_ACCESS_KEY_ID', value: '', comment: '', isSecret: true },
    { key: 'AWS_SECRET_ACCESS_KEY', value: '', comment: '', isSecret: true },
    { key: 'AWS_REGION', value: 'us-east-1', comment: '', isSecret: false },
    { key: 'AWS_S3_BUCKET', value: '', comment: '', isSecret: false },
  ],
};

function generateEnvFile(vars: EnvVar[]): string {
  return vars.map((v) => {
    const comment = v.comment ? `# ${v.comment}\n` : '';
    const val = v.isSecret && !v.value ? `# ${v.key}=your_value_here` : `${v.key}=${v.value}`;
    return `${comment}${val}`;
  }).join('\n\n');
}

export default function EnvFileGenerator() {
  const [vars, setVars] = useState<EnvVar[]>([
    { key: 'APP_NAME', value: 'MyApp', comment: '', isSecret: false },
    { key: 'DATABASE_URL', value: '', comment: 'Database connection string', isSecret: true },
  ]);
  const [copied, setCopied] = useState(false);
  const [showSecrets, setShowSecrets] = useState(false);

  function addVar() { setVars((v) => [...v, { key: '', value: '', comment: '', isSecret: false }]); }
  function removeVar(i: number) { setVars((v) => v.filter((_, idx) => idx !== i)); }
  function updateVar(i: number, f: keyof EnvVar, v: string | boolean) {
    setVars((p) => p.map((row, idx) => idx === i ? { ...row, [f]: v } : row));
  }
  function applyPreset(key: string) { setVars((v) => [...v, ...PRESETS[key]]); }

  const output = generateEnvFile(vars);

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function download() {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = '.env.local'; a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap gap-2">
        <span className="text-[13px] text-[#6b7280] self-center">Add preset:</span>
        {Object.keys(PRESETS).map((k) => (
          <button key={k} onClick={() => applyPreset(k)}
            className="px-3 py-1.5 rounded-full border border-[#E5E7EC] text-[12px] text-[#484848] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-colors">
            {k}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_1fr_auto_auto] gap-2 text-[12px] font-medium text-[#6b7280] pb-1 border-b border-[#E5E7EC]">
          <span>Key</span><span>Value</span><span>Secret</span><span />
        </div>
        {vars.map((v, i) => (
          <div key={i} className="grid grid-cols-[1fr_1fr_auto_auto] gap-2 items-center">
            <input type="text" value={v.key} onChange={(e) => updateVar(i, 'key', e.target.value.toUpperCase().replace(/\s/g, '_'))}
              placeholder="VAR_NAME" spellCheck={false}
              className="rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] font-mono text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/10 transition-colors" />
            <input type={v.isSecret && !showSecrets ? 'password' : 'text'} value={v.value} onChange={(e) => updateVar(i, 'value', e.target.value)}
              placeholder="value"
              className="rounded-lg border border-[#E5E7EC] bg-white px-3 py-2 text-[14px] font-mono text-[#0F1112] placeholder:text-[#9ca3af] outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/10 transition-colors" />
            <input type="checkbox" checked={v.isSecret} onChange={(e) => updateVar(i, 'isSecret', e.target.checked)}
              className="w-4 h-4 accent-[#3b82f6]" title="Mark as secret" />
            <button onClick={() => removeVar(i)} className="text-[#9ca3af] hover:text-red-400 transition-colors">×</button>
          </div>
        ))}
        <button onClick={addVar}
          className="self-start text-[13px] font-medium border border-dashed border-[#E5E7EC] rounded-lg px-4 py-2 text-[#484848] hover:border-[#3b82f6] hover:text-[#3b82f6] transition-colors">
          + Add Variable
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-[13px] font-semibold text-[#0F1112]">Generated .env</label>
          <div className="flex gap-3">
            <button onClick={() => setShowSecrets((s) => !s)} className="text-[12px] text-[#6b7280] hover:text-[#0F1112]">
              {showSecrets ? 'Hide' : 'Show'} secrets
            </button>
            <button onClick={copy} className="text-[12px] text-[#3b82f6] hover:underline">{copied ? 'Copied!' : 'Copy'}</button>
            <button onClick={download} className="text-[12px] text-[#3b82f6] hover:underline">Download</button>
          </div>
        </div>
        <pre className="rounded-xl border border-[#E5E7EC] bg-[#F5F6F8] px-5 py-4 text-[12px] font-mono text-[#0F1112] whitespace-pre overflow-x-auto leading-6">
          {showSecrets ? output : output.replace(/^([A-Z_]+=)(.+)$/gm, (_, k, v) => {
            const idx = vars.findIndex((va) => `${va.key}=` === k && va.isSecret);
            return idx >= 0 ? `${k}${'•'.repeat(Math.min(v.length, 12))}` : `${k}${v}`;
          })}
        </pre>
      </div>
    </div>
  );
}
