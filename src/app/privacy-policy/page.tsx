import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen mt-16 bg-white pt-16 pb-12">
      <div className="absolute top-20 left-4 md:left-8">
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 text-[#A435F0] hover:text-white border-2 border-[#A435F0] hover:bg-[#A435F0] rounded-sm transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:translate-x-[-2px] transition-transform" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#000000] mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">Last updated: November 23, 2024</p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              1. Introduction
            </h2>
            <p className="mb-4">
              Welcome to DevLearning (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;). We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you visit our website and use our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-[#000000] mb-3">
              2.1 Personal Information
            </h3>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Register for an account</li>
              <li>Subscribe to our newsletter</li>
              <li>Participate in our interactive features</li>
              <li>Contact us for support</li>
              <li>Provide feedback or suggestions</li>
            </ul>
            <p className="mb-4">This information may include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and email address</li>
              <li>Username and password</li>
              <li>Profile information</li>
              <li>Learning preferences and progress</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#000000] mb-3 mt-6">
              2.2 Automatically Collected Information
            </h3>
            <p className="mb-4">
              When you visit our website, we automatically collect certain
              information about your device, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Clickstream data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect or receive to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our services</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>Communicate with you for customer service and support</li>
              <li>
                Send you updates, newsletters, and marketing communications
              </li>
              <li>Process your transactions and manage your account</li>
              <li>Prevent fraud and enhance security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track activity
              on our service and store certain information. Cookies are files
              with a small amount of data which may include an anonymous unique
              identifier.
            </p>
            <p className="mb-4">
              You can instruct your browser to refuse all cookies or to indicate
              when a cookie is being sent. However, if you do not accept
              cookies, you may not be able to use some portions of our service.
            </p>
            <p className="mb-4">Types of cookies we use:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                function properly
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors interact with our website
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and
                preferences
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Track your online activity
                to help advertisers deliver more relevant advertising
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              5. Sharing Your Information
            </h2>
            <p className="mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Service Providers:</strong> We may share your
                information with third-party service providers who perform
                services on our behalf
              </li>
              <li>
                <strong>Business Transfers:</strong> We may share or transfer
                your information in connection with a merger, sale, or
                acquisition
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information if required to do so by law or in response to valid
                requests by public authorities
              </li>
              <li>
                <strong>With Your Consent:</strong> We may disclose your
                personal information for any other purpose with your consent
              </li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              6. Data Security
            </h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, please
              note that no method of transmission over the Internet or method of
              electronic storage is 100% secure.
            </p>
            <p>
              We use industry-standard encryption protocols and regularly update
              our security practices to protect your data from unauthorized
              access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              7. Your Privacy Rights
            </h2>
            <p className="mb-4">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Access:</strong> Request access to your personal
                information
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Portability:</strong> Request a copy of your data in a
                structured format
              </li>
              <li>
                <strong>Objection:</strong> Object to processing of your
                personal information
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing
                your personal information
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent at any time
                where we rely on consent
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the information
              provided in the &quot;Contact Us&quot; section.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              8. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these
              third-party sites. We encourage you to read the privacy policies
              of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              9. Children&apos;s Privacy
            </h2>
            <p className="mb-4">
              Our services are not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us.
            </p>
            <p>
              If we become aware that we have collected personal information
              from children without verification of parental consent, we will
              take steps to remove that information from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              10. International Data Transfers
            </h2>
            <p>
              Your information may be transferred to and maintained on computers
              located outside of your state, province, country, or other
              governmental jurisdiction where data protection laws may differ.
              By using our services, you consent to the transfer of your
              information to our facilities and those third parties with whom we
              share it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last updated&quot; date.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              12. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
              <p className="mb-2">
                <strong>Email:</strong> pratham8355@gmail.com
              </p>
              <p className="mb-2">
                <strong>Website:</strong> codewithpratham.netlify.app/
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
