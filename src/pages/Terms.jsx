import { Link } from 'react-router-dom'
import { ArrowLeft, FileText } from 'lucide-react'

export default function Terms() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-5">
        <div className="mb-10 flex items-center gap-3">
          <FileText className="text-brand-orange" size={32} />
          <h1 className="text-3xl font-extrabold text-navy">Terms of Service</h1>
        </div>
        <p className="text-sm text-navy/60">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-navy/80">
          <section>
            <h2 className="text-lg font-bold text-navy">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing or using the website and services of Josaa98 Construction and Civil Works,
              you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">2. Services Description</h2>
            <p className="mt-2">
              Josaa98 provides construction and civil works services including, but not limited to, residential construction,
              commercial construction, civil works, renovation and remodeling, and project management.
              All services are subject to a separate written contract or agreement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">3. Quotes and Estimates</h2>
            <p className="mt-2">
              Any quotes or estimates provided through our website or in response to inquiries are subject to change
              based on a full site assessment, material costs, and project scope. A formal contract will be executed
              before work commences.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">4. Payment Terms</h2>
            <p className="mt-2">
              Payment terms will be specified in the individual project contract. Generally, we require an initial deposit
              before work begins, with progress payments due at agreed milestones and a final payment upon completion.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">5. Intellectual Property</h2>
            <p className="mt-2">
              All content on this website, including text, graphics, logos, and images, is the property of Josaa98
              Construction and Civil Works and is protected by copyright and other intellectual property laws.
              You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">6. Limitation of Liability</h2>
            <p className="mt-2">
              To the maximum extent permitted by law, Josaa98 shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or relating to your use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">7. Governing Law</h2>
            <p className="mt-2">
              These Terms shall be governed by and construed in accordance with the laws of the Republic of Ghana.
              Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Ghana.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">8. Changes to Terms</h2>
            <p className="mt-2">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
              to this page. Your continued use of our services constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">9. Contact Us</h2>
            <p className="mt-2">
              For questions about these Terms, please contact us at{' '}
              <a href="mailto:info@josaa98.com" className="text-brand-blue hover:underline">info@josaa98.com</a>{' '}
              or call{' '}
              <a href="tel:0249778376" className="text-brand-blue hover:underline">0249778376</a>.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-navy transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
