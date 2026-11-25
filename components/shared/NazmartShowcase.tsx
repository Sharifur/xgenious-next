import { NAZMART_SHOWCASE } from '@/data/nazmart-showcase';

type Props = {
  heading: string;
  intro: string;
};

function hostOf(url: string) {
  return new URL(url).host.replace(/^www\./, '');
}

export default function NazmartShowcase({ heading, intro }: Props) {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-3 max-w-[720px]">
          {heading}
        </h2>
        <p className="text-[16px] leading-7 text-[#484848] max-w-[720px] mb-8">{intro}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {NAZMART_SHOWCASE.map((site) => (
            <li key={site.url} className="rounded-2xl border border-[#E5E7EC] p-5 flex flex-col gap-1.5">
              <a
                href={site.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-[18px] font-semibold text-[#0F1112] underline underline-offset-2"
              >
                {site.name}
              </a>
              <p className="text-[12px] text-[#6b7280]">{hostOf(site.url)}</p>
              <p className="text-[14px] leading-6 text-[#484848]">{site.desc}</p>
            </li>
          ))}
        </ul>
        <p className="text-[13px] text-[#6b7280] mt-4">Independent businesses running Nazmart. Checked November 2026.</p>
      </div>
    </section>
  );
}
