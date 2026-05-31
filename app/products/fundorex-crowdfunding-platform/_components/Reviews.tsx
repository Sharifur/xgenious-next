import { REVIEWS } from './constants';

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i < count ? '#F59E0B' : '#E5E7EB'}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-16 sm:py-20 lg:py-[100px] bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">

        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <h2 className="text-[32px] sm:text-[44px] font-bold text-[#0F1112] leading-tight mb-4">
            What Our Customers Think<br className="hidden sm:block" /> About Fundorex
          </h2>
          <p className="text-[#484848] text-[15px] sm:text-[17px] leading-7">
            Real reviews from verified CodeCanyon buyers — 734+ sales, 4.70 average rating.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="break-inside-avoid rounded-2xl border border-[#E5E7EC] p-6 flex flex-col gap-4"
              style={{ background: '#F8F9FB' }}
            >
              <div className="flex items-center gap-3">
                <Stars count={review.rating} />
                <span className="text-[13px] text-[#484848]">
                  For <strong>{review.category}</strong>
                </span>
              </div>
              <p className="text-[14px] text-[#374151] leading-6">{review.body}</p>
              <p className="text-[13px] font-medium" style={{ color: '#c2500a' }}>
                by {review.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
