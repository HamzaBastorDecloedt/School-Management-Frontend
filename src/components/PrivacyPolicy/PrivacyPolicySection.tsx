import React from "react";

const PrivacyPolicySection: React.FC = () => {
  return (
    <div className="relative w-full bg-[#F9F9F9] flex items-center justify-center py-10 sm:py-12 md:py-16 lg:py-12 overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-25">
        <div className="mb-8 p-6 bg-white border rounded-lg shadow-sm">
          <h2 className="text-xl sm:text-xl md:text-3xl font-semibold text-[#3B5998]">
            1. Introduction
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            At Wayo Academy, we are committed to collecting and using your data
            responsibly, in compliance with applicable laws, including the UAE
            Federal Decree-Law No. 45 of 2021 on Personal Data Protection
            (PDPL).
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            By using our platform, you agree to the collection, processing, and
            use of your data as outlined in this policy.
          </p>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            2. Data We Collect
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            All data collection is conducted in accordance with the UAE PDPL,
            ensuring that your personal information is handled responsibly and
            securely.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-semibold mt-5">
            a. For Mentors (Coaches):
          </p>
          <ul className="list-disc pl-10 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Personal Information: Your name, email address, phone number, and
              other details necessary for creating and managing your account.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Created Content: Courses, videos, and resources you upload, which
              remain your property unless stated otherwise.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Usage Data: Information about your interactions on the platform,
              such as uploaded content and engagement with learners.
            </li>
          </ul>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-semibold mt-5">
            b. For Learners:
          </p>
          <ul className="list-disc pl-10 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Personal Information: Your name, email address, course progress,
              test results, and other details necessary for your learning
              experience.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Usage Data: Details such as login frequency, accessed content, and
              participation in live classes or quizzes.
            </li>
          </ul>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-semibold mt-5">
            c. General Information:
          </p>
          <ul className="list-disc pl-10 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Technical Data: Your IP address, browser type, device type, and
              operating system, collected to optimize and secure the platform.
            </li>
          </ul>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-semibold mt-5">
            d. Children's Data :
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            For learners under the age of 18, we collect personal data only with
            the explicit consent of their parent or guardian, as required by the
            PDPL. Parents can request to view, modify, or delete their child's
            data by contacting us at{" "}
            <a
              href="mailto:info@wayo.cloud"
              className="underline text-blue-600 hover:text-blue-800"
            >
              info@wayo.cloud
            </a>
          </p>

          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            3. How We Use Your Data
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            Your data is used to:
          </p>
          <ul className="list-disc pl-12 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Provide, maintain, and improve our services.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Personalize your learning experience and recommend relevant
              content.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Communicate updates, changes, and relevant information about Wayo
              Academy.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Analyze usage for research and development purposes.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Ensure compliance with intellectual property rights and platform
              policies.
            </li>
          </ul>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            All data use is in strict compliance with the UAE PDPL.
          </p>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            4. Sharing Your Information
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            Wayo Academy does not sell your personal information to third
            parties. We may share your data:
          </p>
          <ul className="list-disc pl-12 space-y-2 mt-5">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">With Service Providers:</span>{" "}
              Trusted third-party partners like Stripe for secure payment
              processing. Stripe processes payment-related data but does not
              have access to unrelated personal information.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">With Mentors (Coaches):</span>{" "}
              Learner data, such as names, emails, and progress, is shared only
              with the mentors responsible for their courses and access is
              strictly limited.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">For Legal Reasons:</span> If
              required by law or in response to a legitimate legal request.
            </li>
          </ul>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            This Privacy Policy is governed by the laws of the United Arab
            Emirates, including the PDPL.
          </p>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            5. Data Security
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            We implement a range of security measures to protect your data,
            including:
          </p>
          <ul className="list-disc pl-10 space-y-2 mt-5">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Encryption protocols for data in transit.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Regular software updates and security audits.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Regular data backups to ensure recovery in case of system failure.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Access controls to limit who can access your personal information.
            </li>
          </ul>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            In the event of a data breach, we are committed to notifying
            affected users promptly and providing guidance on protective
            measures.
          </p>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            6. User Responsibilities & Content Protection
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            All users agree to:
          </p>
          <ul className="list-disc pl-10 space-y-2 mt-5">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Respect the intellectual property rights of the mentors.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Not copy, share, or redistribute any course materials provided by
              mentors.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Accept that any violation of content protection policies may
              result in account suspension and possible legal action initiated
              by the mentor.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            7. Your Rights
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            Under applicable laws, you have the right to:
          </p>
          <ul className="list-disc pl-10 space-y-2 mt-5">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Access your data:</span> Request
              information about the personal data we hold on you.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Correct your data:</span> Update any
              inaccuracies in your information.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Delete your data:</span> Request
              deletion of your personal information, subject to regulatory or
              legitimate business exceptions.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Portability of data:</span> Coaches
              can export their content and personal data if they choose to leave
              the platform.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Withdraw consent:</span> Where data
              processing is based on consent, you may withdraw this consent at
              any time.
            </li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            8. Cookies and Tracking Technologies
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            We use cookies to improve your experience, such as remembering your
            preferences and analyzing platform usage. You can manage cookie
            settings through your browser. Our use of cookies complies with the
            UAE PDPL.
          </p>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            9. Third-Party Links
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Our platform may contain links to external sites. Wayo Academy is
            not responsible for the content or privacy practices of these
            external sites. We encourage you to review their privacy policies.
          </p>

          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            10. Data Retention
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            We retain your personal data only as long as necessary to fulfill
            the purposes outlined in this policy or as required by law. When
            your data is no longer needed, we securely delete or anonymize it.
          </p>

          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            11. Children's Privacy
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            For learners under the age of 18, we collect data only with explicit
            consent from a parent or guardian, as required by the UAE PDPL.
            Parents may request to review, modify, or delete their child's data
            by contacting us at{" "}
            <a
              href="mailto:info@wayo.cloud"
              className="underline text-blue-600 hover:text-blue-800"
            >
              info@wayo.cloud
            </a>
          </p>

          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            12. Changes to This Policy
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Wayo Academy may update this Privacy Policy as necessary. Any
            changes will be communicated via our platform, and users will be
            notified in advance. Continued use of the platform after such
            changes indicates acceptance of the updated policy.
          </p>

          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            13. Governing Law
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            This Privacy Policy is governed by the laws of the United Arab
            Emirates. Any disputes arising from this policy will be subject to
            the exclusive jurisdiction of the courts of Dubai.
          </p>

          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            14. Contact Information
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            For any questions or concerns regarding this Privacy Policy or data
            handling practices, please contact us at {""}
            <a
              href="mailto:info@wayo.cloud"
              className="underline text-blue-600 hover:text-blue-800"
            >
              info@wayo.cloud
            </a>
            .
          </p>

          <p className="text-sm text-center sm:text-base md:text-lg text-gray-600 leading-relaxed mt-12 mb-5">
            <span className="font-semibold">Effective Date:</span> This Privacy
            Policy is effective as of March 5, 2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicySection;
