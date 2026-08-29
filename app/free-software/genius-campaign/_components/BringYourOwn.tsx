import { COLOR, LIGHT_COLOR, DEPLOY_GUIDE_URL } from './constants';

const POINTS = [
  {
    title: 'Nothing proxies through a third-party server',
    desc: 'AWS SES, Gmail Workspace, and Cloudflare R2 calls go directly from your deployment to AWS, Google, and Cloudflare. Xgenious never sits in that path; we don’t see your emails or your subscriber data.',
  },
  {
    title: 'Your sending domain’s reputation is yours',
    desc: 'No shared IP pool, no vendor-wide deliverability incidents dragging your domain down with everyone else on the platform. Whatever reputation you build stays attached to your own SES or Workspace account.',
  },
  {
    title: 'Two deploy paths, same result',
    desc: 'docker compose up covers Postgres, Redis, the API, and the web console in one command. Bare-metal deployment is documented too, with the full environment variable reference for production.',
  },
];

export default function BringYourOwn() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium mb-4"
            style={{ background: LIGHT_COLOR, color: COLOR }}
          >
            Bring Your Own Everything
          </span>
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
            Your Infrastructure. Not Ours.
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[560px] mx-auto leading-7">
            This is the whole point of self-hosting, worth spelling out before you click download.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {POINTS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-[#E5E7EC] p-6">
              <h3 className="text-[15px] font-semibold text-[#0F1112] mb-2">{p.title}</h3>
              <p className="text-[13px] text-[#484848] leading-6">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-8">
          <a
            href={DEPLOY_GUIDE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-[13px] font-semibold underline underline-offset-2"
            style={{ color: COLOR }}
          >
            Read the deployment guide ↗
          </a>
        </p>
      </div>
    </section>
  );
}
