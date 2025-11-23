import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const TermsOfServicePage = () => {
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
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8">Last updated: November 23, 2024</p>

        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              1. Agreement to Terms
            </h2>
            <p className="mb-4">
              By accessing and using DevLearning ("the Service," "we," "our," or
              "us"), you agree to be bound by these Terms of Service ("Terms").
              If you disagree with any part of these terms, you may not access
              the Service.
            </p>
            <p>
              These Terms apply to all visitors, users, and others who access or
              use the Service. Please read these Terms carefully before using
              our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              2. Description of Service
            </h2>
            <p className="mb-4">
              DevLearning is an online learning platform that provides
              educational content, tutorials, and resources for developers. Our
              Service includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Interactive learning paths for various programming languages and
                technologies
              </li>
              <li>Code examples and tutorials</li>
              <li>Video content and educational materials</li>
              <li>Community features and discussion forums</li>
              <li>
                Progress tracking and personalized learning recommendations
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              3. User Accounts
            </h2>
            <h3 className="text-xl font-semibold text-[#000000] mb-3">
              3.1 Account Creation
            </h3>
            <p className="mb-4">
              To access certain features of the Service, you may be required to
              create an account. When you create an account, you must provide
              accurate, complete, and current information.
            </p>

            <h3 className="text-xl font-semibold text-[#000000] mb-3">
              3.2 Account Security
            </h3>
            <p className="mb-4">You are responsible for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Maintaining the confidentiality of your account credentials
              </li>
              <li>All activities that occur under your account</li>
              <li>
                Notifying us immediately of any unauthorized use of your account
              </li>
              <li>Ensuring your password is strong and secure</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#000000] mb-3 mt-6">
              3.3 Account Termination
            </h3>
            <p>
              We reserve the right to suspend or terminate your account at any
              time, with or without notice, for any reason, including violation
              of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              4. Acceptable Use
            </h2>
            <p className="mb-4">You agree not to use the Service to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>
                Infringe upon the rights of others, including intellectual
                property rights
              </li>
              <li>Transmit any harmful, offensive, or inappropriate content</li>
              <li>
                Attempt to gain unauthorized access to any part of the Service
              </li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use automated systems (bots, scrapers) without permission</li>
              <li>Impersonate any person or entity</li>
              <li>Engage in any form of harassment or abuse</li>
              <li>Distribute spam, malware, or viruses</li>
              <li>Collect or harvest user information without consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              5. Intellectual Property Rights
            </h2>
            <h3 className="text-xl font-semibold text-[#000000] mb-3">
              5.1 Our Content
            </h3>
            <p className="mb-4">
              The Service and its original content, features, and functionality
              are owned by DevLearning and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>

            <h3 className="text-xl font-semibold text-[#000000] mb-3">
              5.2 Your Content
            </h3>
            <p className="mb-4">
              You retain ownership of any content you submit, post, or display
              on or through the Service ("User Content"). By submitting User
              Content, you grant us a worldwide, non-exclusive, royalty-free
              license to use, reproduce, modify, and distribute your content in
              connection with the Service.
            </p>

            <h3 className="text-xl font-semibold text-[#000000] mb-3">
              5.3 Code Examples
            </h3>
            <p>
              Code examples and tutorials provided on the Service are for
              educational purposes. You may use them in your own projects, but
              we are not liable for any issues arising from their use in
              production environments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              6. User Content and Conduct
            </h2>
            <p className="mb-4">
              You are solely responsible for your User Content and the
              consequences of posting or publishing it. By posting User Content,
              you represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                You own or have the necessary rights to use and authorize us to
                use your User Content
              </li>
              <li>
                Your User Content does not violate the privacy rights, publicity
                rights, copyrights, or other rights of any person
              </li>
              <li>
                Your User Content does not contain any harmful, offensive, or
                illegal material
              </li>
            </ul>
            <p className="mt-4">
              We reserve the right to remove any User Content that violates
              these Terms or is otherwise objectionable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              7. Payment and Subscriptions
            </h2>
            <h3 className="text-xl font-semibold text-[#000000] mb-3">
              7.1 Pricing
            </h3>
            <p className="mb-4">
              Some features of the Service may require payment. All prices are
              in USD unless otherwise stated. We reserve the right to change our
              pricing at any time.
            </p>

            <h3 className="text-xl font-semibold text-[#000000] mb-3">
              7.2 Billing
            </h3>
            <p className="mb-4">For subscription services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                You will be billed in advance on a recurring basis (monthly or
                annually)
              </li>
              <li>
                Your subscription will automatically renew unless cancelled
              </li>
              <li>
                You must cancel before the renewal date to avoid being charged
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#000000] mb-3 mt-6">
              7.3 Refunds
            </h3>
            <p>
              Refund policies will be clearly stated at the time of purchase.
              Generally, we offer refunds within 14 days of purchase if you are
              not satisfied with the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              8. Third-Party Services and Links
            </h2>
            <p className="mb-4">
              Our Service may contain links to third-party websites or services
              that are not owned or controlled by DevLearning. We have no
              control over and assume no responsibility for the content, privacy
              policies, or practices of any third-party websites or services.
            </p>
            <p>
              You acknowledge and agree that we shall not be responsible or
              liable for any damage or loss caused by your use of any
              third-party content, goods, or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              9. Disclaimer of Warranties
            </h2>
            <p className="mb-4">
              THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE
              MAKE NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
              TO:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The Service will meet your requirements</li>
              <li>
                The Service will be uninterrupted, timely, secure, or error-free
              </li>
              <li>
                The results obtained from using the Service will be accurate or
                reliable
              </li>
              <li>
                The quality of any products, services, information obtained
                through the Service will meet your expectations
              </li>
              <li>Any errors in the Service will be corrected</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              10. Limitation of Liability
            </h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
              DEVLEARNING, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS,
              SUPPLIERS, OR AFFILIATES BE LIABLE FOR:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Any indirect, incidental, special, consequential, or punitive
                damages
              </li>
              <li>Any loss of profits, revenue, data, or use</li>
              <li>Any loss or damage arising from your use of the Service</li>
              <li>
                Any unauthorized access to or use of our servers and/or any
                personal information stored therein
              </li>
            </ul>
            <p className="mt-4">
              Our total liability shall not exceed the amount you paid us in the
              twelve (12) months prior to the event giving rise to the
              liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              11. Indemnification
            </h2>
            <p>
              You agree to defend, indemnify, and hold harmless DevLearning and
              its licensors, employees, contractors, agents, officers, and
              directors from any claims, damages, obligations, losses,
              liabilities, costs, or debt arising from:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>Your use of and access to the Service</li>
              <li>Your violation of any term of these Terms</li>
              <li>
                Your violation of any third-party right, including intellectual
                property rights
              </li>
              <li>
                Any User Content you post or share on or through the Service
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              12. Governing Law
            </h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with
              the laws of [Your Jurisdiction], without regard to its conflict of
              law provisions.
            </p>
            <p>
              Any disputes arising from these Terms or the Service shall be
              resolved in the courts of [Your Jurisdiction].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              13. Changes to Terms
            </h2>
            <p className="mb-4">
              We reserve the right to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 30 days'
              notice prior to any new terms taking effect.
            </p>
            <p>
              By continuing to access or use our Service after revisions become
              effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              14. Termination
            </h2>
            <p className="mb-4">
              We may terminate or suspend your account and access to the Service
              immediately, without prior notice or liability, for any reason,
              including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Breach of these Terms</li>
              <li>Request by law enforcement or government agencies</li>
              <li>Discontinuation or material modification of the Service</li>
              <li>Unexpected technical or security issues</li>
              <li>Extended periods of inactivity</li>
            </ul>
            <p className="mt-4">
              Upon termination, your right to use the Service will immediately
              cease. All provisions of these Terms which by their nature should
              survive termination shall survive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              15. Severability
            </h2>
            <p>
              If any provision of these Terms is held to be unenforceable or
              invalid, such provision will be changed and interpreted to
              accomplish the objectives of such provision to the greatest extent
              possible under applicable law, and the remaining provisions will
              continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              16. Entire Agreement
            </h2>
            <p>
              These Terms constitute the entire agreement between you and
              DevLearning regarding the use of the Service and supersede all
              prior agreements and understandings, whether written or oral.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-4">
              17. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
              <p className="mb-2">
                <strong>Email:</strong> pratham8355@gmail.com
              </p>
              <p className="mb-2">
                <strong>Website:</strong> codewithpratham.netlify.app
              </p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-[#A435F0]/5 border border-[#A435F0]/20 rounded-sm">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> By using DevLearning, you acknowledge that
              you have read, understood, and agree to be bound by these Terms of
              Service and our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
