import { DARK_BG, DEPLOY_GUIDE_URL } from './constants';

const COMMAND_LINES = [
  '# unzip your download, then:',
  'cd genius-debug',
  'cp .env.example .env          # set JWT_SECRET, APP_ENCRYPTION_KEY, POSTGRES_PASSWORD',
  'docker compose up -d --build  # postgres + redis + migrate + ingest + api + workers + web',
  '# open http://localhost:8080 → create your admin account',
];

export default function Quickstart() {
  return (
    <section className="py-16 sm:py-20" style={{ background: DARK_BG }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[720px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-white">Quickstart</h2>
          <p className="text-[#9A9AA8] text-[15px] mt-3 leading-7">
            Docker 24+ and Compose v2. Live in under five minutes.
          </p>
        </div>

        <pre className="rounded-2xl border border-white/10 bg-black/40 p-6 overflow-x-auto text-[13px] leading-7 font-mono text-[#d1d5db]">
          <code>
            {COMMAND_LINES.map((line, i) => (
              <div key={i}>
                {line.startsWith('#') ? <span className="text-[#9A9AA8]">{line}</span> : <span>{line}</span>}
              </div>
            ))}
          </code>
        </pre>

        <p className="text-center text-[13px] text-[#9A9AA8] mt-6">
          Full guide:{' '}
          <a href={DEPLOY_GUIDE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-white">
            xgeniousllc.github.io/geniusDebug/deployment-guide.html ↗
          </a>
        </p>
      </div>
    </section>
  );
}
