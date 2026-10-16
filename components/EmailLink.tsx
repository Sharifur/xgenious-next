// Cloudflare's Email Address Obfuscation rewrites emails into /cdn-cgi/l/email-protection
// (a 404 for crawlers). Content between these markers is skipped by it. React drops JSX
// comments, so the markers are emitted as raw HTML.
export default function EmailLink({ email = 'contact@xgenious.com' }: { email?: string }) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: `<!--email_off--><a href="mailto:${email}">${email}</a><!--/email_off-->`,
      }}
    />
  );
}
