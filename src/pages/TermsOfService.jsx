const TermsOfService = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const headingStyle = {
    fontFamily: '"Google Sans", "Product Sans", Roboto, Arial, sans-serif'
  };

  const contentStyle = {
    fontFamily: '"Product Sans", "Google Sans", Roboto, Arial, sans-serif'
  };

  return (
    <div className="min-h-screen bg-white text-black" style={contentStyle}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 pb-4 sm:pb-6 md:pb-8">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4" style={headingStyle}>
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base text-gray-600" style={contentStyle}>Last updated: {getCurrentDate()}</p>
        </div>

        {/* Content */}
        <div className="space-y-6 sm:space-y-8 text-gray-800 leading-relaxed text-sm sm:text-base" style={contentStyle}>
          <p>
            These Terms of Service govern your access to and use of the Visionary platform,
            including our website, applications, and AI services. By accessing or using Visionary,
            you agree to comply with these terms.
          </p>

          {/* Use of the Platform */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4" style={headingStyle}>
              Use of the Platform
            </h2>
            <p className="mb-4">
              Visionary provides an AI-powered learning and creation platform intended for
              educational purposes. Users agree to use the platform responsibly and in accordance
              with applicable laws.
            </p>
            <p className="mb-2">You may not:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2">
              <li>Use the platform for illegal activities</li>
              <li>Attempt to disrupt or damage the platform</li>
              <li>Upload malicious software or harmful content</li>
              <li>Attempt to access restricted systems or data</li>
            </ul>
            <p className="mt-4">
              Violation of these rules may result in suspension or termination of access.
            </p>
          </section>

          {/* User Accounts */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4" style={headingStyle}>
              User Accounts
            </h2>
            <p className="mb-4">
              To access certain features, users must create an account.
            </p>
            <p className="mb-2">Users are responsible for:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2">
              <li>Maintaining the confidentiality of login credentials</li>
              <li>Ensuring the accuracy of account information</li>
              <li>Not sharing account access with unauthorized individuals</li>
            </ul>
            <p className="mt-4">
              Visionary is not responsible for losses resulting from unauthorized account access
              caused by user negligence.
            </p>
          </section>

          {/* AI-Generated Content */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4" style={headingStyle}>
              AI-Generated Content
            </h2>
            <p className="mb-4">
              Visionary uses artificial intelligence to generate explanations, learning materials,
              and educational assistance. While we strive to ensure accuracy, AI-generated content
              may occasionally contain errors or limitations.
            </p>
            <p className="mb-4">
              Users should independently verify critical information where necessary. Visionary
              does not guarantee that AI-generated responses will always be complete or error-free.
            </p>
          </section>

          {/* User Content */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4" style={headingStyle}>
              User Content
            </h2>
            <p className="mb-4">
              Users may upload educational materials such as notes, documents, and images.
            </p>
            <p className="mb-2">By uploading content, users confirm that:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2">
              <li>They have the right to share the content</li>
              <li>The content does not violate copyright or applicable laws</li>
            </ul>
            <p className="mt-4">
              Visionary may process this content to generate explanations or educational resources.
            </p>
          </section>

          {/* Subscriptions and Payments */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4" style={headingStyle}>
              Subscriptions and Payments
            </h2>
            <p className="mb-4">
              Visionary may offer both free and paid services.
            </p>
            <p className="mb-2">Paid subscriptions may include:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2">
              <li>Monthly subscription plans</li>
              <li>Institutional access licenses</li>
              <li>Additional premium features</li>
            </ul>
            <p className="mt-4">
              Subscription terms, pricing, and renewal conditions will be clearly displayed
              before purchase.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4" style={headingStyle}>
              Intellectual Property
            </h2>
            <p>
              All platform technology, design, branding, and software are the property of
              Visionary or its licensors. Users may not reproduce, distribute, or commercially
              exploit platform content without authorization.
            </p>
          </section>

          {/* Service Availability */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4" style={headingStyle}>
              Service Availability
            </h2>
            <p className="mb-4">
              We aim to maintain reliable platform availability, but services may occasionally
              be interrupted due to:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2">
              <li>System maintenance</li>
              <li>Updates or improvements</li>
              <li>Technical issues beyond our control</li>
            </ul>
            <p className="mt-4">
              We are not responsible for temporary service disruptions.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4" style={headingStyle}>
              Termination
            </h2>
            <p className="mb-4">
              Visionary reserves the right to suspend or terminate accounts that violate these
              Terms of Service or misuse the platform.
            </p>
            <p>
              Users may also discontinue use of the platform at any time.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4" style={headingStyle}>
              Limitation of Liability
            </h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Visionary is not liable for:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-1.5 sm:space-y-2">
              <li>Academic results or performance outcomes</li>
              <li>Decisions made based on AI-generated content</li>
              <li>Indirect damages resulting from platform use</li>
              <li>Loss of data due to circumstances beyond our control</li>
            </ul>
            <p className="mt-4">
              Use of the platform is at the user's own discretion.
            </p>
          </section>

          {/* Changes to These Terms */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4" style={headingStyle}>
              Changes to These Terms
            </h2>
            <p className="mb-4">
              We may update these Terms periodically to reflect changes in our services or
              legal requirements.
            </p>
            <p>
              Continued use of the platform after updates means you accept the revised terms.
            </p>
          </section>

          {/* Contact */}
          <section className="pt-6 sm:pt-8 border-t border-gray-300">
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4" style={headingStyle}>
              Contact
            </h2>
            <p className="break-words">
              For questions regarding these Terms, please contact:{' '}
              <a
                href="mailto:support@visionary.org.in"
                className="text-black underline hover:text-gray-600 transition-colors break-all"
              >
                support@visionary.org.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
