import type { Metadata } from 'next';
import PolicyLayout from '@/components/ui/PolicyLayout';

export const metadata: Metadata = {
  title: 'Refund Policy — Xgenious',
  description: 'Return and refund policy for products purchased directly from Xgenious or through Envato.',
};

export default function RefundPolicyPage() {
  return (
    <PolicyLayout title="Refund Policy" badge="Legal" lastUpdated="August 26, 2026">

      <p>
        This policy applies to all products and services offered by Xgenious. The applicable refund terms depend on <strong>where you made your purchase</strong>. Please read the relevant section below.
      </p>

      <h2>Products Purchased Directly from Xgenious</h2>

      <div className="policy-highlight">
        <p><strong>14-day refund window.</strong> If you purchased directly from <a href="https://xgenious.com">xgenious.com</a>, you are eligible to request a refund within 14 days of your purchase date.</p>
      </div>

      <p>To qualify for a refund, the following conditions must be met:</p>
      <ul>
        <li>The refund request must be made within 14 days of the original purchase date</li>
        <li>You must provide a valid receipt or proof of purchase</li>
        <li>Refund requests made after 14 days are not eligible</li>
        <li>Products that have been damaged by the buyer are not eligible for a refund</li>
      </ul>

      <p>
        Once your request is reviewed and approved, the refund will be processed back to your original payment method. Please notify us promptly if you receive a defective product.
      </p>

      <h2>Addon Services — Non-Refundable</h2>

      <blockquote>
        All addon services — including installation, configuration, and app store submission — are <strong>strictly non-refundable</strong> once work has begun.
      </blockquote>

      <p>Addon services include but are not limited to:</p>
      <ul>
        <li>Web platform installation and configuration</li>
        <li>Web + mobile app installation and configuration</li>
        <li>Google Play Store submission and release</li>
        <li>Apple App Store submission and release</li>
        <li>Support plan renewals and extended support subscriptions</li>
        <li>Any other service delivered by the Xgenious team</li>
      </ul>

      <p>
        Because these are <strong>human-delivered services</strong>, work begins immediately after purchase. Costs are incurred regardless of whether you choose to use the delivered service. Refund requests for addon services will not be accepted.
      </p>

      <p>
        This also applies to <strong>add-ons and support renewals purchased from your account dashboard</strong> after your original purchase — including support-period extensions and installation/app-store add-ons. These entitlements (an extended support window, or a queued installation/app-store service) activate immediately on purchase, so they are non-refundable once processed, in the same way as the addon services described above.
      </p>

      <h2>Products Purchased via Envato</h2>

      <blockquote>
        Products purchased from the Envato Marketplace (CodeCanyon, ThemeForest, etc.) are NOT covered by this refund policy.
      </blockquote>

      <p>
        Envato has its own refund and return policy that governs all purchases made through their marketplace. If you purchased an Xgenious product via Envato, please refer to Envato&apos;s refund policy directly:
      </p>
      <ul>
        <li>Envato handles all billing, payments, and refund decisions for marketplace purchases</li>
        <li>Refund requests for Envato items must be submitted through your Envato account</li>
        <li>Xgenious does not have the ability to process refunds for Envato transactions</li>
      </ul>

      <div className="policy-highlight">
        <p><strong>Envato Refund Policy:</strong> <a href="https://codecanyon.net/page/customer_refund_policy" target="_blank" rel="noopener noreferrer">codecanyon.net/page/customer_refund_policy</a></p>
      </div>

      <h2>Interpretation and Definitions</h2>

      <h3>Definitions</h3>
      <ul>
        <li><strong>Business Company</strong> — Xgenious, located at Dhaka, Bangladesh</li>
        <li><strong>Goods</strong> — items offered for sale on the Service</li>
        <li><strong>Orders</strong> — a request by You to purchase Goods from Us</li>
        <li><strong>Service / Website</strong> — <a href="https://xgenious.com">https://xgenious.com</a></li>
        <li><strong>You</strong> — the individual accessing or using the Service</li>
      </ul>

      <h2>How to Initiate a Refund (Direct Purchases Only)</h2>

      <div className="policy-highlight">
        <p><strong>Email:</strong> <a href="mailto:contact@xgenious.com">contact@xgenious.com</a></p>
        <p><strong>Contact Form:</strong> <a href="/contact">xgenious.com/contact</a></p>
      </div>

      <p>
        Once you reach out, our team will review your request and respond within 2–3 business days. Updates will be sent to the email address associated with your purchase.
      </p>

    </PolicyLayout>
  );
}
