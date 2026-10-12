import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'

export default function Privacy() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-5">
        <div className="mb-10 flex items-center gap-3">
          <Shield className="text-brand-orange" size={32} />
          <h1 className="text-3xl font-extrabold text-navy">Privacy Policy</h1>
        </div>
        <p className="text-sm text-navy/60">Last updated: 12 October 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-navy/80">
          <section>
            <h2 className="text-lg font-bold text-navy">1. Introduction</h2>
            <p className="mt-2">
              Josaa98 Construction and Civil Works ("we", "us", or "our") respects your privacy and is committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">2. Information We Collect</h2>
            <p className="mt-2">We may collect the following types of information:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><strong>Personal Information:</strong> Name, phone number, email address, and project details you provide through our contact form.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, and pages visited.</li>
              <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">3. How We Use Your Information</h2>
            <p className="mt-2">We use the information we collect to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Respond to your inquiries and provide construction quotes.</li>
              <li>Manage and deliver our construction services.</li>
              <li>Communicate with you about your project.</li>
              <li>Improve our website and customer service.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">4. Sharing Your Information</h2>
            <p className="mt-2">
              We do not sell or rent your personal information. We may share your data with trusted third parties
              who assist us in operating our website or conducting our business, provided they agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">5. Data Security</h2>
            <p className="mt-2">
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">6. Your Rights</h2>
            <p className="mt-2">You have the right to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your personal data.</li>
              <li>Object to the processing of your data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-navy">7. Contact Us</h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:kwamenasackeyato@gmail.com" className="text-brand-blue hover:underline">kwamenasackeyato@gmail.com</a>{' '}
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
