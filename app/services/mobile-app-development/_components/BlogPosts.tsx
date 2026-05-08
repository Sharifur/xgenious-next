const posts = [
  {
    image: '/images/mobile-app-dev/blog-post-1.png',
    category: 'Design',
    date: 'January 01, 2023',
    title: 'Design Alchemy Merging Tradition with Modern Trend',
  },
  {
    image: '/images/mobile-app-dev/blog-post-1.png',
    category: 'Design',
    date: 'January 01, 2023',
    title: 'Design Alchemy Merging Tradition with Modern Trend',
  },
  {
    image: '/images/mobile-app-dev/blog-post-2.png',
    category: 'Design',
    date: 'January 01, 2023',
    title: 'Design Alchemy Merging Tradition with Modern Trend',
  },
];

function BlogCard({ image, category, date, title }: typeof posts[0]) {
  return (
    <div className="flex flex-col rounded-[8px] overflow-hidden bg-white shadow-[0px_20px_40px_0px_rgba(0,0,0,0.06)]">
      <div className="overflow-hidden flex-shrink-0" style={{ height: 300 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-4 p-8 relative">
        <div className="absolute top-0 left-8 w-4 h-[2px]" style={{ background: '#ec7161' }} />
        <div className="flex flex-col gap-2 pt-2">
          <p
            className="capitalize font-bold text-[#26302b]"
            style={{ fontSize: 24, lineHeight: '32px' }}
          >
            {title}
          </p>
          <div className="flex items-center gap-1">
            <span className="font-bold uppercase text-[#ec7161]" style={{ fontSize: 14, lineHeight: '24px' }}>
              {category}
            </span>
          </div>
          <p className="font-semibold text-[#26302b]" style={{ fontSize: 16, lineHeight: '24px' }}>
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BlogPosts() {
  return (
    <section className="py-[120px]" style={{ background: '#f2f8f5' }}>
      <div className="container-page flex flex-col gap-[72px]">
        <div className="flex items-end justify-between">
          <h2
            className="text-[#26302b] font-bold capitalize"
            style={{ fontSize: 64, lineHeight: '72px' }}
          >
            Apps Development<br />Blog Posts
          </h2>
          <div className="flex items-center gap-3 mb-2">
            <button
              className="w-[56px] h-[56px] rounded-full flex items-center justify-center flex-shrink-0"
              style={{ border: '1px solid #bfd0c6' }}
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M16 7L10 13L16 19" stroke="#26302b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="w-[56px] h-[56px] rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: '#ec7161' }}
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M10 7L16 13L10 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={i} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
