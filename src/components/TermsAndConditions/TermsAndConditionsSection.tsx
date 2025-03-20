import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditionsSection: React.FC = () => {
  return (
    <div className="relative w-full bg-[#F9F9F9] flex items-center justify-center py-10 sm:py-12 md:py-16 lg:py-12 overflow-hidden">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-25">
        <div className="mb-8 p-6 bg-white border rounded-lg shadow-sm">
          <h2 className="text-xl sm:text-xl md:text-3xl font-semibold text-[#3B5998]">
            1. Introduction
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
            Welcome to Wayo Academy, your online learning platform. Wayo Academy
            is dedicated to empowering professional coaches across various
            fields (scrum, agility, languages, sciences, sports, etc.) to offer
            personalized online training to their clients or learners. By
            accessing or using our website and mobile application, you agree to
            these terms and conditions. Please read them carefully as they
            outline your rights and obligations as a user.
          </p>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            2. Definitions
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Wayo Academy:</span> The suite of
              educational services provided through our website and mobile
              application.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">User:</span> Any person or entity
              having subscribed to a service or training course via the
              website/application.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Content:</span> All documents,
              videos, quizzes, exams, and other educational materials offered on
              the website/application.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Rights of Use:</span> The rights to
              access and use the platform and its content are strictly personal
              (private) and non-transferable.
            </li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            3. Access and Use
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              The user must create an account to access the full range of Wayo
              Academy's services. The information provided must be accurate and
              kept up to date.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              The user must be at least 18 years old to use the platform unless
              parental consent has been granted for minors.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              The user is responsible for maintaining the confidentiality of
              their login credentials and must notify Wayo Academy immediately
              of any unauthorized use.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              The platform is strictly for educational and non-commercial use.
            </li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            4. Content Protection & Usage
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Users acknowledge that all course materials are intellectual
              property of the coach and must not be copied, distributed, or
              shared.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              A mandatory agreement is required during registration, where
              learners commit not to reproduce, share, or distribute any
              content.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Violation of this clause may result in account suspension and
              legal actions initiated by the coach.
            </li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            5. Features and Services
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <ul className="list-disc pl-5 space-y-2">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Wayo Academy offers a range of features designed to enhance the
              learning experience:
            </p>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Live Classes:</span> Users can
              participate in or conduct live sessions through the platform,
              including interactive elements such as polls and real-time Q&A.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">
                Interactive Quizzes and Exams:
              </span>{" "}
              The platform provides tools for creating and participating in
              quizzes and exams. Users are responsible for ensuring the
              submission is honest and authentic.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">
                Event Calendar and Notification:
              </span>{" "}
              Wayo Academy includes an event scheduling system to help users
              manage deadlines, class schedules, and reminders.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Content Library:</span> A repository
              of educational videos and documents is available for users, who
              must adhere to intellectual property laws when accessing these
              resources.
            </li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            6. Technical Support and Assistance
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Support Channels:</span> Users can
              access technical support through email or an integrated live chat
              feature.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Availability:</span> Support is
              available Monday to Friday, 9:00 AM to 5:00 PM UTC+1.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Response Times:</span> While Wayo
              Academy strives to respond promptly, typical response times for
              technical assistance may vary between 24 to 48 hours.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Maintenance and Updates:</span>{" "}
              Regular updates and maintenance are performed to ensure the
              platform's smooth operation. Scheduled maintenance periods will be
              communicated to users in advance.
            </li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            7. User Rights and Responsibilities
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-semibold">
            For Mentors (Coaches):
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Mentors retain full ownership of their course content.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Wayo Academy will not distribute, sell, or alter any content
              provided by the mentors.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Mentors have the right to pursue legal actions against any user
              violating their content rights.
            </li>
          </ul>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-semibold mt-5">
            For Learners:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Learners must follow training programs diligently and respect the
              intellectual property rights of their coaches.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Learners acknowledge that violating content protection rules
              (copying, sharing, or redistributing materials) may result in
              immediate account suspension and potential legal actions.
            </li>
          </ul>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-semibold mt-5">
            Prohibited Behavior:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Engaging in fraudulent or dishonest activity (e.g., submitting
              false or plagiarized content).
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Uploading or sharing offensive, harmful, or illegal content.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Attempting unauthorized access or disrupting the platform.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Any violation of these rules can lead to permanent account
              suspension.
            </li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            8. Intellectual Property
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Coaches retain ownership of their educational content but grant
              Wayo Academy a non-exclusive license to host, display, and make
              the content accessible to learners via the platform.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Wayo Academy and all associated platform content are protected by
              copyright and other applicable laws. Unauthorized reproduction,
              modification, or distribution is prohibited.
            </li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            9. Personal Data
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Collection and processing of user's personal data are conducted in
              accordance with our{" "}
              <Link
                to="/privacy_policy"
                className="underline text-blue-600 hover:text-blue-800"
              >
                Privacy Policy.
              </Link>
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Users have the right to access, modify, and delete their personal
              data as per applicable laws.
            </li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            10. Limitation of Liability
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-semibold">
            Wayo Academy is not responsible for
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Content provided by coaches or the results achieved by learners
              from the training programs.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Disputes or disagreements between coaches and learners regarding
              content, teaching methods or expectations.
            </li>
          </ul>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-semibold mt-5">
            Wayo Academy is not liable for service interruptions, data loss or
            other technical issues that may occur during the use of the
            platform.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-semibold mt-5">
            Wayo Academy's liability is limited to direct and proven damages, up
            to the amount of the user's paid subscription.
          </p>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            11. Termination
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            Wayo Academy reserves the right to suspend or delete the account of
            any user violating these terms.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            Users may request account termination at any time through the
            platform interface.
          </p>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            12. Governing Law and Dispute Resolution
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Users are encouraged to resolve disputes amicably by contacting
              support at{" "}
              <a
                href="mailto:info@wayo.cloud"
                className="underline text-blue-600 hover:text-blue-800"
              >
                info@wayo.cloud
              </a>
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              Wayo Academy prioritizes informal resolution methods over legal
              proceedings.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              These terms are governed by the laws of the United Arab Emirates.
            </li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            13. Amendments to Terms
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            Wayo Academy reserves the right to modify these terms at any time.
            Users will be informed of any changes, which will take effect 15
            days after notification.
          </p>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            14. Waiver and Recognition
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Class Action Waiver:</span> Users
              agree to pursue any disputes on an individual basis and not as
              part of a class or representative action.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Claim Time Limitation:</span> Any
              claim or action must be filed within one year of the event that
              gave rise to the dispute. Claims filed after this period will be
              deemed invalid.
            </li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            15. Additional Clauses
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Injunctive Relief:</span> Wayo
              Academy reserves the right to seek injunctive or other equitable
              relief to protect its intellectual property rights.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              <span className="font-medium">Severability:</span> If any
              provision of these terms is deemed invalid by a court, the
              remaining provisions will continue in effect.
            </li>
            <li className="text-sm sm:text-base md:text-lg text-gray-600">
              For additional questions or assistance, users can contact{" "}
              <a
                href="mailto:info@wayo.cloud"
                className="underline text-blue-600 hover:text-blue-800"
              >
                info@wayo.cloud
              </a>
            </li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-[#3B5998] mt-12">
            16. Contact
          </h2>
          <hr className="border border-[#EAEAEA] my-1 w-full max-w-3xl 2xl:max-w-7xl xl:max-w-4xl lg:max-w-4xl" />
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mt-5">
            For any questions regarding these terms and conditions, please
            contact us at{" "}
            <a
              href="mailto:info@wayo.cloud"
              className="underline text-blue-600 hover:text-blue-800"
            >
              info@wayo.cloud
            </a>{" "}
            or via our {""}<Link
                to="/contactus"
                className="underline text-blue-600 hover:text-blue-800"
              >contact form</Link>
          </p>
          <p className="text-sm text-center sm:text-base md:text-lg text-gray-600 leading-relaxed mt-12 mb-5">
            <span className="font-semibold">Effective Date:</span> These Terms
            and Conditions are effective as of March 5, 2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsSection;
