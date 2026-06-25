import { COLOR, DARK_BG } from './constants';

const BASE_IMG = 'https://xgenious.com/wp-content/uploads/2025/01';
const BASE_DEMO = 'https://nexelit.xgenious.com/home';

const VARIANTS = [
  { id: '19', img: `${BASE_IMG}/nexelit-ecommerce-homepage-scaled-1.jpg`,  label: 'eCommerce Home',   isNew: true  },
  { id: '21', img: `${BASE_IMG}/home-19-min-scaled-1.jpg`,                 label: 'Home 21',          isNew: true  },
  { id: '20', img: `${BASE_IMG}/news-magazine-website-nexelit-scaled-1.jpg`, label: 'News & Magazine', isNew: true  },
  { id: '18', img: `${BASE_IMG}/home-18-min.jpg`,                          label: 'Home 18',          isNew: false },
  { id: '02', img: `${BASE_IMG}/home-2-min.webp`,                          label: 'Home 02',          isNew: false },
  { id: '14', img: `${BASE_IMG}/home-14-min.jpg`,                          label: 'Home 14',          isNew: false },
  { id: '13', img: `${BASE_IMG}/home-13-min.jpg`,                          label: 'Home 13',          isNew: false },
  { id: '05', img: `${BASE_IMG}/home-5-min.jpg`,                           label: 'Home 05',          isNew: false },
  { id: '06', img: `${BASE_IMG}/home-6-min.jpg`,                           label: 'Home 06',          isNew: false },
  { id: '07', img: `${BASE_IMG}/home-7-min.jpg`,                           label: 'Home 07',          isNew: false },
  { id: '08', img: `${BASE_IMG}/home-8-min.jpg`,                           label: 'Home 08',          isNew: false },
  { id: '03', img: `${BASE_IMG}/home-3-min.jpg`,                           label: 'Home 03',          isNew: false },
  { id: '09', img: `${BASE_IMG}/home-9-min.webp`,                          label: 'Home 09',          isNew: false },
  { id: '10', img: `${BASE_IMG}/home-10-min.jpg`,                          label: 'Home 10',          isNew: false },
  { id: '04', img: `${BASE_IMG}/home-4-min.jpg`,                           label: 'Home 04',          isNew: false },
  { id: '11', img: `${BASE_IMG}/home-11-min.jpg`,                          label: 'Home 11',          isNew: false },
  { id: '01', img: `${BASE_IMG}/home-1-min.jpg`,                           label: 'Home 01',          isNew: false },
  { id: '12', img: `${BASE_IMG}/home-12-min.jpg`,                          label: 'Home 12',          isNew: false },
  { id: '15', img: `${BASE_IMG}/home-15-min.jpg`,                          label: 'Home 15',          isNew: false },
  { id: '16', img: `${BASE_IMG}/home-16-min.jpg`,                          label: 'Home 16',          isNew: false },
  { id: '17', img: `${BASE_IMG}/home-17-min.jpg`,                          label: 'Home 17',          isNew: false },
];

export default function HomeVariants() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px]" style={{ background: DARK_BG }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[640px] mx-auto">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-widest mb-4"
            style={{ background: `${COLOR}25`, color: '#a5b4fc' }}
          >
            21 Homepage Demos
          </div>
          <h2 className="text-[28px] sm:text-[40px] font-bold text-white leading-tight mb-4">
            A Design for Every Business
          </h2>
          <p className="text-[#9ca3af] text-[15px] sm:text-[17px] leading-7">
            Click any preview to open the live demo. Switch homepage variants from the admin panel — no code, no
            reinstall needed.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
          {VARIANTS.map((v) => (
            <a
              key={v.id}
              href={`${BASE_DEMO}/${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden border transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: '#ffffff12' }}
            >
              {/* thumbnail */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={v.img}
                alt={`Nexelit ${v.label} homepage demo`}
                className="w-full h-[160px] object-cover object-top transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />

              {/* overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `${COLOR}cc` }}>
                <div className="flex items-center gap-2 text-white font-semibold text-[13px]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                  View Demo
                </div>
              </div>

              {/* label bar */}
              <div className="flex items-center justify-between px-3 py-2" style={{ background: '#16153a' }}>
                <span className="text-[12px] font-medium text-[#c7d2fe]">{v.label}</span>
                {v.isNew && (
                  <span
                    className="text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-widest"
                    style={{ background: `${COLOR}35`, color: '#a5b4fc' }}
                  >
                    New
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-[12px] text-[#4b5563] mt-8">
          Switch homepage variants instantly from the admin panel · More designs added with every update
        </p>
      </div>
    </section>
  );
}
