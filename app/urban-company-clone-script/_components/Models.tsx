export default function Models() {
  return (
    <section className="py-16 sm:py-20" style={{ background: '#F5F6F8' }}>
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0F1112] leading-tight mb-8">
          Three marketplace models, and which ProHandy fits
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-[#E5E7EC] bg-white">
          <table className="w-full min-w-[760px] text-left text-[14px]">
            <thead>
              <tr className="border-b border-[#E5E7EC]">
                {['Model', 'Example', 'How jobs are matched', 'ProHandy'].map((heading) => (
                  <th key={heading} className="px-4 py-3 font-semibold text-[#6b7280]">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#374151]">
              <tr className="border-b border-[#F3F4F6] align-top">
                <td className="px-4 py-3 font-medium">Managed, fixed-price</td>
                <td className="px-4 py-3">Urban Company</td>
                <td className="px-4 py-3">Defined services at set prices; the platform assigns verified pros</td>
                <td className="px-4 py-3">Yes: fixed-price services with add-ons and time slots, provider verification, admin-set commission. The admin can assign a provider to a booking.</td>
              </tr>
              <tr className="border-b border-[#F3F4F6] align-top">
                <td className="px-4 py-3 font-medium">Task marketplace</td>
                <td className="px-4 py-3">TaskRabbit</td>
                <td className="px-4 py-3">
                  Client picks a Tasker by hourly rate; client fees on top (
                  <a className="underline underline-offset-2" href="https://support.taskrabbit.com/hc/en-ca/articles/46260411872155-What-s-the-Taskrabbit-Service-Fee" target="_blank" rel="noopener noreferrer">TaskRabbit</a>
                  )
                </td>
                <td className="px-4 py-3">Partly: customers choose providers and services; hourly-rate profiles would need customisation</td>
              </tr>
              <tr className="align-top">
                <td className="px-4 py-3 font-medium">Quotes / offers</td>
                <td className="px-4 py-3">Thumbtack-style</td>
                <td className="px-4 py-3">
                  Customer posts a job, pros respond (
                  <a className="underline underline-offset-2" href="https://www.raftlabs.com/blog/how-to-build-app-like-taskrabbit" target="_blank" rel="noopener noreferrer">RaftLabs</a>
                  )
                </td>
                <td className="px-4 py-3">Yes: job posts with provider offers and cover letters</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[14px] leading-6 text-[#484848]">
          The admin can assign a provider to a booking. Customers can also choose a service or hire from offers.
        </p>
      </div>
    </section>
  );
}
