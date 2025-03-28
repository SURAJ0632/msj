import React from "react";

function PrivacyPolicy() {
  return (
    <div
      className="min-h-screen bg-green-900 py-12 px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "'Work Sans', sans-serif" }}
    >
      <div className="max-w-4xl mx-auto bg-green-800 rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-900 to-green-800 p-6 sm:p-8 text-center border-b border-green-700">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Privacy Policy for{" "}
            <span className="text-yellow-400">MSJ Spices</span>
          </h1>
          <p className="text-gray-300">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Policy Content */}
        <div className="p-6 sm:p-8 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 border-b border-yellow-500/30 pb-2 mb-4">
              Introduction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Welcome to MSJ Spices ("we," "our," or "us"). We are committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website, interact with us, or use our services related to our
              global spice export business.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 border-b border-yellow-500/30 pb-2 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-300 mb-4">
              We may collect the following types of information:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-300">
              <li>
                <strong className="text-yellow-300">
                  Personal Information
                </strong>
                : Name, email address, phone number, company name, job title,
                shipping and billing addresses when you place orders or inquire
                about our products.
              </li>
              <li>
                <strong className="text-yellow-300">
                  Business Information
                </strong>
                : Company details, tax identification numbers, import/export
                licenses, and other business-related information necessary for
                international trade.
              </li>
              <li>
                <strong className="text-yellow-300">
                  Transaction Information
                </strong>
                : Details about purchases, orders, payment information
                (processed through secure payment gateways), and shipping
                details.
              </li>
              <li>
                <strong className="text-yellow-300">Website Usage Data</strong>:
                IP addresses, browser type, operating system, pages visited, and
                other analytical data collected through cookies and similar
                technologies.
              </li>
              <li>
                <strong className="text-yellow-300">Communication Data</strong>:
                Records of your correspondence with us via email, phone, or
                other channels.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 border-b border-yellow-500/30 pb-2 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-300 mb-4">
              We use the collected information for the following purposes:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-300">
              <li>To process and fulfill your orders for our spice products</li>
              <li>
                To communicate with you about your orders, inquiries, and our
                products
              </li>
              <li>
                To comply with international trade regulations and export
                requirements
              </li>
              <li>To improve our website, products, and customer service</li>
              <li>To send marketing communications (only with your consent)</li>
              <li>
                To prevent fraud and ensure the security of our transactions
              </li>
              <li>
                To comply with legal obligations related to international trade
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 border-b border-yellow-500/30 pb-2 mb-4">
              Data Sharing and Disclosure
            </h2>
            <p className="text-gray-300 mb-4">
              We may share your information with:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-gray-300">
              <li>
                <strong className="text-yellow-300">
                  Shipping and Logistics Partners
                </strong>
                : To fulfill and deliver your orders internationally
              </li>
              <li>
                <strong className="text-yellow-300">Payment Processors</strong>:
                To complete financial transactions
              </li>
              <li>
                <strong className="text-yellow-300">
                  Customs and Regulatory Authorities
                </strong>
                : As required by international trade laws
              </li>
              <li>
                <strong className="text-yellow-300">Service Providers</strong>:
                Companies that assist us with IT, marketing, and other business
                operations
              </li>
              <li>
                <strong className="text-yellow-300">Legal Authorities</strong>:
                When required by law or to protect our rights
              </li>
            </ol>
            <div className="mt-4 p-4 bg-green-900/50 rounded-lg border border-yellow-500/20">
              <p className="text-yellow-300 font-medium">
                We never sell your personal information to third parties.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 border-b border-yellow-500/30 pb-2 mb-4">
              International Data Transfers
            </h2>
            <p className="text-gray-300 leading-relaxed">
              As a global spice exporter, your data may be transferred to and
              processed in countries outside your home country, including
              countries with different data protection laws. We implement
              appropriate safeguards to ensure your data remains protected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 border-b border-yellow-500/30 pb-2 mb-4">
              Data Security
            </h2>
            <p className="text-gray-300 mb-4">
              We implement robust security measures to protect your information,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>Secure servers and encryption technologies</li>
              <li>Restricted access to personal data</li>
              <li>Regular security assessments</li>
              <li>Secure payment processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 border-b border-yellow-500/30 pb-2 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-300 mb-4">
              Depending on your jurisdiction, you may have rights to:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-300 mb-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to certain processing activities</li>
              <li>Withdraw consent (where applicable)</li>
            </ul>
            <p className="text-gray-300">
              To exercise these rights, please contact us using the information
              below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 border-b border-yellow-500/30 pb-2 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our website uses cookies to enhance user experience and analyze
              website traffic. You can control cookie preferences through your
              browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-400 border-b border-yellow-500/30 pb-2 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy periodically. The updated
              version will be posted on our website with the effective date.
            </p>
          </section>

          <section className="bg-green-900/50 p-6 rounded-lg border border-yellow-500/20">
            <h2 className="text-2xl font-bold text-yellow-400 border-b border-yellow-500/30 pb-2 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-300 mb-4">
              For any privacy-related questions or concerns, please contact:
            </p>
            <address className="not-italic text-gray-300 space-y-2">
              <p className="font-medium text-white">
                MSJ Spices Privacy Officer
              </p>
              <p>
                Email:{" "}
                <span className="text-yellow-300">hello@vallabhiindia.com</span>
              </p>
              <p>
                Phone: <span className="text-yellow-300">+91 9519797775</span>
              </p>
              <p>Gomti Nagar, Lucknow, Uttar Pradesh, 226010</p>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
