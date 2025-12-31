// app/privacy-policy/page.tsx (or pages/privacy-policy.tsx if using pages router)

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: December 31, 2024
        </p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Today Last Year
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Today Last Year ("the App") is developed by Joe Fogiato. This privacy 
              policy explains how the App handles your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Data Collection
            </h2>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-gray-900">We do not collect any data.</strong> The App 
              operates entirely on your device and does not transmit any information 
              to external servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Calendar Access
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The App requests access to your device's calendar solely to display 
              events from one year ago. Your calendar data is read locally on your 
              device and is never stored, copied, or transmitted anywhere. The App 
              does not modify your calendar in any way.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The App does not use any third-party analytics, advertising, or 
              tracking services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Data Storage
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The App does not store any of your personal data. All calendar 
              information is fetched directly from your device's calendar each 
              time you open the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If this privacy policy changes, the updated version will be posted 
              on this page with a revised date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Contact
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about this privacy policy, please contact 
              me at{" "}
              <a 
                href="mailto:joe@fogiato.com" 
                className="text-orange-600 hover:text-orange-700 underline"
              >
                joseph@fogiato.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Joe Fogiato
          </p>
        </div>
      </article>
    </main>
  );
}