import { DARK_BG, COLOR, LIGHT_COLOR } from './constants';

const STEPS = [
  { title: 'Download the software', desc: 'Get the .zip from the download button above: full source, ready to deploy.' },
  { title: 'Unzip and upload to your server', desc: 'Extract the archive and upload the files to your PHP 8.2+ hosting or VPS.' },
  { title: 'Create a database and update .env', desc: 'Create a MySQL 8 database, then set your DB_* values in the .env file.' },
  { title: 'Ready to use', desc: 'Log in with the default admin account and change the password immediately.' },
];

export default function GettingStarted() {
  return (
    <section className="py-16 sm:py-20" style={{ background: DARK_BG }}>
      <div className="container-page px-4 sm:px-6 lg:px-0 max-w-[820px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-[28px] sm:text-[36px] font-semibold text-white">Getting Started</h2>
          <p className="text-[#9A9AA8] text-[15px] mt-3 leading-7">
            No command line required. PHP 8.2+ and MySQL 8 hosting, shared or VPS.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/20 p-5">
              <span
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold"
                style={{ background: LIGHT_COLOR, color: COLOR }}
              >
                {i + 1}
              </span>
              <div>
                <p className="text-[14px] font-semibold text-white">{step.title}</p>
                <p className="text-[13px] text-[#9A9AA8] leading-6 mt-0.5">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[13px] text-[#9A9AA8] mt-8">
          Deployment docs cover AWS, DigitalOcean, cPanel, Docker, and plain VPS.
        </p>
      </div>
    </section>
  );
}
