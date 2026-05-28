import type { Metadata } from 'next';
import PolicyLayout from '@/components/ui/PolicyLayout';

export const metadata: Metadata = {
  title: 'Terms of Service — Xgenious',
  description: 'Terms and conditions governing your use of the Xgenious website and services.',
};

export default function TermsOfServicePage() {
  return (
    <PolicyLayout title="Terms of Service" badge="Legal">
      <h2>1. Terms</h2>
      <p>
        By accessing this Website, accessible from <a href="https://xgenious.com">https://xgenious.com</a>, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
      </p>

      <h2>2. Use License</h2>
      <p>
        Permission is granted to temporarily download one copy of the materials on Xgenious&apos;s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
      </p>
      <ul>
        <li>Modify or copy the materials</li>
        <li>Use the materials for any commercial purpose or for any public display</li>
        <li>Attempt to reverse engineer any software contained on Xgenious&apos;s Website</li>
        <li>Remove any copyright or other proprietary notations from the materials</li>
        <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
      </ul>
      <p>
        This will let Xgenious terminate this license upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether in printed or electronic format.
      </p>

      <h2>3. Software License Terms</h2>
      <p>
        Xgenious sells software scripts under the following license tiers. Each license is a one-time purchase, non-transferable, and tied to the purchasing individual or organisation.
      </p>

      <h3>Regular License (via CodeCanyon)</h3>
      <p>
        Grants a single-domain, non-commercial or personal-use license for the Xilancer web platform. The script may not be used for commercial projects intended to generate revenue for the end client without upgrading to a higher license tier. Subject to Envato&apos;s standard license terms.
      </p>

      <h3>Everything Bundle</h3>
      <p>
        Grants a single-domain commercial use license for the Xilancer web platform, both Flutter mobile apps (Freelancer and Client), and all available premium plugins included at time of purchase. You may use the bundle to operate a commercial marketplace where end users transact. You may not resell, redistribute, or sublicense the source code or compiled apps to third parties as a standalone product.
      </p>
      <ul>
        <li>Permitted for 1 domain / production environment</li>
        <li>Commercial use allowed — you keep 100% of your marketplace revenue</li>
        <li>Lifetime license validity with free updates</li>
        <li>Source code modification is permitted for personal customisation only; modified code may not be resold</li>
        <li>Includes 6 months of standard support from purchase date</li>
      </ul>

      <h3>Exclusive License</h3>
      <p>
        Grants a broad commercial licence intended for organisations, agencies, and businesses that require full control over the codebase. Under the Exclusive License you may:
      </p>
      <ul>
        <li>Modify, rebrand, and customise the source code without restriction</li>
        <li>Remove or replace all Xgenious and Xilancer branding</li>
        <li>Deploy the platform without license key enforcement on your infrastructure</li>
        <li>Use across unlimited internal projects for the purchasing organisation</li>
      </ul>
      <p>
        The following are strictly prohibited under the Exclusive License:
      </p>
      <ul>
        <li>Reselling, redistributing, or sublicensing the original or modified source code as a standalone script or product</li>
        <li>Publishing the source code to public repositories or marketplaces (e.g. CodeCanyon, GitHub public, npm)</li>
        <li>Transferring the license to a third party</li>
      </ul>
      <p>
        Violation of these restrictions will result in immediate termination of the license with no refund.
      </p>

      <h2>4. Disclaimer</h2>
      <p>
        All the materials on Xgenious&apos;s Website are provided &quot;as is&quot;. Xgenious makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Xgenious does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
      </p>

      <h2>5. Limitations</h2>
      <p>
        Xgenious or its suppliers will not be held accountable for any damages that will arise with the use or inability to use the materials on Xgenious&apos;s Website, even if Xgenious or an authorized representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdictions do not allow limitations on implied warranties or limitations of liability for incidental damages; these limitations may not apply to you.
      </p>

      <h2>6. Revisions and Errata</h2>
      <p>
        The materials appearing on Xgenious&apos;s Website may include technical, typographical, or photographic errors. Xgenious will not promise that any of the materials in this Website are accurate, complete, or current. Xgenious may change the materials contained on its Website at any time without notice. Xgenious does not make any commitment to update the materials.
      </p>

      <h2>7. Links</h2>
      <p>
        Xgenious has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Xgenious of the site. The use of any linked website is at the user&apos;s own risk.
      </p>

      <h2>8. Site Terms of Use Modifications</h2>
      <p>
        Xgenious may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
      </p>

      <h2>9. Your Privacy</h2>
      <p>
        Please read our <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        Any claim related to Xgenious&apos;s Website shall be governed by the laws of Bangladesh without regards to its conflict of law provisions.
      </p>

      <h2>11. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at <a href="mailto:contact@xgenious.com">contact@xgenious.com</a>.
      </p>
    </PolicyLayout>
  );
}
