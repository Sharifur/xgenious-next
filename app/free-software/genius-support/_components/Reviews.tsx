import { COLOR, LIGHT_COLOR } from './constants';

const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/xgenious.com';
const RATING = 4;
const REVIEW_COUNT = 34;

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={i <= RATING ? '#00b67a' : '#dcdce6'}>
          <path d="M12 2l2.9 6.3 6.8.6-5.1 4.5 1.5 6.7L12 16.9 5.9 20.4l1.5-6.7L2.3 9.2l6.8-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-12 bg-white border-b border-[#E5E7EC]">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-[800px] mx-auto">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: LIGHT_COLOR }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l2.9 6.3 6.8.6-5.1 4.5 1.5 6.7L12 16.9 5.9 20.4l1.5-6.7L2.3 9.2l6.8-.6L12 2z" fill={COLOR} />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Stars />
                <span className="text-[15px] font-bold text-[#0F1112]">{RATING}.0</span>
              </div>
              <p className="text-[13px] text-[#6b7280]">
                {REVIEW_COUNT} reviews on{' '}
                <a
                  href={TRUSTPILOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2"
                  style={{ color: COLOR }}
                >
                  Trustpilot
                </a>
              </p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-[#E5E7EC]" />
          <p className="text-[14px] text-[#484848] leading-6 text-center sm:text-left max-w-[360px]">
            Trusted by developers and agencies worldwide for free, self-hosted support software.
          </p>
        </div>
      </div>
    </section>
  );
}
