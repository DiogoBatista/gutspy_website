/* eslint-disable react/no-unescaped-entities */
import { Container } from '@/components/Container'

export default function Privacy() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-text mb-8">Privacy Policy</h1>
        <div className="prose prose-lg prose-gray">
          <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-text mb-4">1. Introduction</h2>
            <p>
              Welcome to GutSpy (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the &ldquo;Service&rdquo;).
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-text mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-medium text-text-secondary mb-2">2.1 Personal Information</h3>
            <p>We collect the following types of personal information:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Name/username</li>
              <li>Email address</li>
              <li>Age</li>
              <li>Camera and photo gallery data (with your permission)</li>
            </ul>

            <h3 className="text-lg font-medium text-text-secondary mb-2 mt-4">2.2 Technical Information</h3>
            <p>We automatically collect certain information when you use our Service, including:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Device information</li>
              <li>Usage data</li>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-text mb-4">3. How We Use Your Information</h2>
            <p>We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To provide customer support</li>
              <li>To send you emails and newsletters (with your consent)</li>
              <li>To improve our Service</li>
              <li>To monitor the usage of our Service</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-text mb-4">4. Tracking Technologies</h2>
            <p>We use various tracking technologies to improve your experience:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Cookies</li>
              <li>Local storage</li>
              <li>Sessions</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-text mb-4">5. Third-Party Authentication</h2>
            <p>We offer authentication through:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Facebook Login</li>
              <li>Twitter Login</li>
              <li>Google Login</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-text mb-4">6. Your Rights</h2>
            <h3 className="text-lg font-medium text-text-secondary mb-2">6.1 GDPR Rights</h3>
            <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights, including:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification</li>
              <li>The right to erasure</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object</li>
            </ul>

            <h3 className="text-lg font-medium text-text-secondary mb-2 mt-4">6.2 CCPA Rights</h3>
            <p>If you are a California resident, you have specific rights regarding your personal information:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>The right to know what personal information is collected</li>
              <li>The right to delete personal information</li>
              <li>The right to opt-out of the sale of personal information</li>
              <li>The right to non-discrimination for exercising CCPA rights</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-text mb-4">7. Age Restrictions</h2>
            <p>
              Our Service is not intended for users under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-text mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:support@gutspy.com" className="text-primary hover:text-primary-dark">
                support@gutspy.com
              </a>
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-text mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
            </p>
          </section>
        </div>
      </Container>
    </div>
  )
}
