import { COLOR, LIGHT_COLOR, ROLES } from './constants';

export default function Roles() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-[28px] sm:text-[38px] font-semibold text-[#0F1112]">
            Three Roles. Every Perspective Covered.
          </h2>
          <p className="text-[#484848] text-[15px] mt-3 max-w-[520px] mx-auto leading-7">
            Customers, agents, and admins each get a tailored experience: no shared interface, no permission confusion.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[900px] mx-auto">
          {ROLES.map((r) => (
            <div
              key={r.role}
              className="rounded-2xl border border-[#E5E7EC] p-6"
              style={{ background: LIGHT_COLOR }}
            >
              <p className="text-[13px] font-semibold mb-2" style={{ color: COLOR }}>{r.role}</p>
              <p className="text-[13px] text-[#484848] leading-5">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
