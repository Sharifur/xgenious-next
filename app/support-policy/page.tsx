import type { Metadata } from 'next';
import PolicyLayout from '@/components/ui/PolicyLayout';

export const metadata: Metadata = {
  title: 'Support Policy — Xgenious',
  description: 'Xgenious support policy — what is covered, response times, and how to get help.',
};

export default function SupportPolicyPage() {
  return (
    <PolicyLayout title="Support Policy" badge="Legal" lastUpdated="January 16, 2025">

      <h2>1. Overview</h2>
      <p>
        At Xgenious, we are committed to providing responsive, professional support for all our products and services. This Support Policy outlines what support is included with your purchase, our response time commitments, and how to get assistance.
      </p>

      <h2>2. What Is Covered</h2>
      <p>Standard support is included with all Xgenious product purchases and covers:</p>
      <ul>
        <li>Answering questions about how to use the product</li>
        <li>Bugs or errors in the original product code</li>
        <li>Assistance with included features and functionality</li>
        <li>Guidance on product configuration and setup</li>
      </ul>

      <h2>3. What Is Not Covered</h2>

      <blockquote>
        The following items are outside the scope of standard support and may require a paid customization or installation service.
      </blockquote>

      <ul>
        <li>Customization and modification requests</li>
        <li>Installation services (available as a separate paid service)</li>
        <li>Third-party plugin or integration conflicts</li>
        <li>Issues caused by modifications to the original product code</li>
        <li>Server configuration, hosting, and environment issues</li>
        <li>Complete theme or product redesigns</li>
        <li>New feature development</li>
      </ul>

      <h2>4. Support Channels</h2>

      <div className="policy-highlight">
        <p><strong>Email:</strong> <a href="mailto:contact@xgenious.com">contact@xgenious.com</a></p>
        <p><strong>Contact Form:</strong> <a href="/contact">xgenious.com/contact</a></p>
        <p><strong>My Account:</strong> <a href="https://xgenious.com/my-account/">xgenious.com/my-account</a></p>
        <p><strong>WhatsApp (Priority Support only):</strong> <a href="https://wa.me/+8801811666560">+880 1811 666560</a></p>
      </div>

      <h2>5. Response Times</h2>

      <div className="policy-highlight">
        <p><strong>Standard Support:</strong> 2–5 business days</p>
        <p><strong>Priority Support — Basic:</strong> Within 24 hours on business days</p>
        <p><strong>Priority Support — Premium:</strong> Within 12 hours on business days</p>
      </div>

      <p>
        Business days are Sunday through Thursday, Bangladesh Standard Time (UTC+6). Requests submitted on weekends or public holidays will be addressed on the next business day.
      </p>

      <blockquote>
        <strong>Annual Holiday Notice:</strong> Support is unavailable during Eid ul-Fitr (5 days) and Eid ul-Adha (5 days). Tickets submitted during these periods will be addressed on the next available business day after the holiday. We will announce these dates in advance on our website.
      </blockquote>

      <h2>6. Envato Marketplace Products</h2>

      <blockquote>
        Products purchased through the Envato marketplace (CodeCanyon, ThemeForest) are subject to Envato&apos;s item support policy and are not covered under this policy.
      </blockquote>

      <p>
        Support for Envato items is provided through the Envato comments system or author contact page, and is governed by Envato support terms for the period included with your purchase.
      </p>

      <h2>7. Support Period</h2>
      <p>
        Standard support is provided for <strong>6 months</strong> from the date of purchase. After this period, extended support may be purchased separately.
      </p>

      <h2>8. Fair Use</h2>
      <p>
        We reserve the right to limit or suspend support for accounts that abuse our support channels, submit excessive or unreasonable requests, or violate our terms of service.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        Xgenious reserves the right to modify this Support Policy at any time. Changes will be posted on this page and are effective immediately upon posting.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        For any questions regarding this Support Policy, please contact us at <a href="mailto:contact@xgenious.com">contact@xgenious.com</a>.
      </p>

    </PolicyLayout>
  );
}
