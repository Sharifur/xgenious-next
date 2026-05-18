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

      <h2>3. Disclaimer</h2>
      <p>
        All the materials on Xgenious&apos;s Website are provided &quot;as is&quot;. Xgenious makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Xgenious does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
      </p>

      <h2>4. Limitations</h2>
      <p>
        Xgenious or its suppliers will not be held accountable for any damages that will arise with the use or inability to use the materials on Xgenious&apos;s Website, even if Xgenious or an authorized representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdictions do not allow limitations on implied warranties or limitations of liability for incidental damages; these limitations may not apply to you.
      </p>

      <h2>5. Revisions and Errata</h2>
      <p>
        The materials appearing on Xgenious&apos;s Website may include technical, typographical, or photographic errors. Xgenious will not promise that any of the materials in this Website are accurate, complete, or current. Xgenious may change the materials contained on its Website at any time without notice. Xgenious does not make any commitment to update the materials.
      </p>

      <h2>6. Links</h2>
      <p>
        Xgenious has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Xgenious of the site. The use of any linked website is at the user&apos;s own risk.
      </p>

      <h2>7. Site Terms of Use Modifications</h2>
      <p>
        Xgenious may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
      </p>

      <h2>8. Your Privacy</h2>
      <p>
        Please read our <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        Any claim related to Xgenious&apos;s Website shall be governed by the laws of Bangladesh without regards to its conflict of law provisions.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us at <a href="mailto:contact@xgenious.com">contact@xgenious.com</a>.
      </p>
    </PolicyLayout>
  );
}
