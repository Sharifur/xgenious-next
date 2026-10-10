import Link from 'next/link';

export type Guide = { href: string; label: string; blurb: string };

type Props = {
  heading?: string;
  guides: Guide[];
};

// Internal links from product / free-software pages to the WordPress guide posts.
// Plain <Link> with descriptive anchor text: these links exist to pass link equity
// and topical relevance to the blog posts that rank for the category keywords.
export default function RelatedGuides({ heading = 'Related guides', guides }: Props) {
  return (
    <section aria-labelledby="related-guides" className="py-12 sm:py-16 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <h2
          id="related-guides"
          className="text-[24px] sm:text-[30px] font-semibold text-[#0F1112] tracking-[-0.01em] mb-6"
        >
          {heading}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {guides.map((g) => (
            <li key={g.href}>
              <Link
                href={g.href}
                className="group flex h-full flex-col gap-1.5 rounded-2xl border border-[#E5E7EC] bg-white p-5 hover:border-[#d0d4dc] hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)] transition-all duration-200"
              >
                <span className="text-[16px] font-semibold text-[#0F1112] group-hover:text-[#ec7161] transition-colors">
                  {g.label}
                </span>
                <span className="text-[14px] leading-[22px] text-[#484848]">{g.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
