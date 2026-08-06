export default function PrivacyPage() {
  return (
    <>
      <div className="bg-gradient-to-b from-navy-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-5xl font-bold text-navy-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-navy-700">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 text-navy-700">
          <section>
            <h2 className="font-playfair text-2xl font-bold text-navy-900 mb-4">
              Introduction
            </h2>
            <p>
              Simply Smart Money ("we" or "us" or "our") operates the Simply Smart Money website (the "Service").
            </p>
            <p className="mt-3">
              This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-navy-900 mb-4">
              Information Collection and Use
            </h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>
            <h3 className="font-playfair font-bold text-navy-900 mt-4 mb-2">
              Types of Data Collected:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Personal Data: Name, email address, cookies and usage data</li>
              <li>Usage Data: Browser type, IP address, pages visited, time and date of visit</li>
              <li>Device Data: Device type, operating system, device identifiers</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-navy-900 mb-4">
              Cookies
            </h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Service and hold certain information.
            </p>
            <p className="mt-3">
              Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-navy-900 mb-4">
              Security of Data
            </h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
            <p className="mt-3">
              While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-navy-900 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="mt-3">
              We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-bold text-navy-900 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-3">
              Email:{' '}
              <a href="mailto:hello@simplysmart.com" className="text-navy-600 hover:text-navy-900">
                hello@simplysmart.com
              </a>
            </p>
          </section>

          <section className="bg-navy-50 p-6 rounded-lg">
            <p className="text-sm text-navy-700">
              <strong>Disclaimer:</strong> This is a template privacy policy. For a production website, consult with a legal professional to ensure compliance with applicable laws in your jurisdiction (GDPR, CCPA, etc.).
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
