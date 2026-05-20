export default function BookCall() {
  return (
    <section id="booking" className="bg-white">
      <div className="container-page px-4 sm:px-6 lg:px-0">
        <div className="rounded-[20px] sm:rounded-[24px] overflow-hidden">
          <iframe
            src="https://crm.xgenious.com/public/meetings/book-a-30-min-strategy-call"
            width="100%"
            height="700"
            frameBorder="0"
            allowFullScreen
            className="block w-full"
          />
        </div>
      </div>
    </section>
  );
}
