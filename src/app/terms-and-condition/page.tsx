"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="bg-[#FDFDFD] text-[#3E2723]">
     
    <Header />
      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-[#3E2723]">
          Terms & Conditions
        </h1>

        <p className="mb-6 leading-[1.8]">
          This document is an electronic record in accordance with applicable
          Information Technology laws. It does not require physical or digital
          signatures.
        </p>

        <p className="mb-6 leading-[1.8]">
          Published under Rule 3(1) of the Information Technology (Intermediaries
          Guidelines) Rules, 2011, this document outlines the terms for accessing
          and using the Mind A Lot platform available at{" "}
          <strong>mindalot.com</strong>.
        </p>

        <p className="mb-6 leading-[1.8]">
          The platform is operated by{" "}
          <strong>Jagrati Ed-Tech Private Limited</strong>, located at VK Palace,
          2nd Floor, 2nd Cross, 10th Main, Shankar Nagar, Mahalakshmi Layout,
          Bengaluru – 560096.
        </p>

        <p className="mb-6 leading-[1.8]">
          By using our platform, you acknowledge that you have read and agreed to
          these Terms. If you do not agree, discontinue the use of the Platform
          immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">1. Usage by Institutions</h2>
        <p className="mb-6 leading-[1.8]">
          Educational or corporate entities must enter a formal agreement before
          accessing services. All members remain bound by these Terms and the
          Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">2. Access by Minors</h2>
        <p className="mb-6 leading-[1.8]">
          Users under 18 must provide a parental or guardian consent form. Failure
          to do so may result in account suspension.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">3. Account Creation</h2>
        <p className="mb-6 leading-[1.8]">
          Users must provide accurate personal information during registration.
          You are responsible for maintaining the confidentiality of your login
          details.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">4. Payments & Refunds</h2>
        <p className="mb-6 leading-[1.8]">
          All payments made for services are{" "}
          <strong>non-refundable</strong> unless otherwise approved by Mind A Lot.
          Refunds may be requested by emailing{" "}
          <strong>info@mindalot.care</strong>.
        </p>

        <ul className="list-disc pl-6 mb-6 leading-[1.8]">
          <li>Packages are activated from the date of purchase.</li>
          <li>Unused sessions cannot be refunded or rescheduled.</li>
          <li>No-shows in audio/video sessions get 1 reschedule.</li>
          <li>In-person missed sessions are considered consumed.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          5. Intellectual Property
        </h2>
        <p className="mb-6 leading-[1.8]">
          All content, branding, and designs are owned by Mind A Lot and protected
          under intellectual property laws.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">6. User Conduct</h2>
        <p className="mb-6 leading-[1.8]">
          Users must not engage in harassment, misrepresentation, unauthorized
          access, or illegal activities while using the Platform.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">7. Disclaimer</h2>
        <p className="mb-6 leading-[1.8]">
          Mind A Lot does not provide emergency medical support. In case of crisis
          or suicidal ideation, contact a qualified healthcare professional or a
          helpline immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          8. Data Privacy & Security
        </h2>
        <p className="mb-6 leading-[1.8]">
          We take necessary measures to protect user data but cannot guarantee
          absolute security. Review our Privacy Policy for details.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          9. Warranty Disclaimer
        </h2>
        <p className="mb-6 leading-[1.8]">
          The platform is provided on an <strong>"as-is"</strong> basis without any
          warranties regarding accuracy, availability, or performance.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          10. Limitations & Liability
        </h2>
        <p className="mb-6 leading-[1.8]">
          Mind A Lot is not responsible for third-party service interruptions,
          expert interactions, or missed sessions due to user-side issues.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">11. Termination</h2>
        <p className="mb-6 leading-[1.8]">
          Accounts may be terminated for violating Terms. Some clauses will remain
          enforceable even after account deletion.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">12. Indemnity</h2>
        <p className="mb-6 leading-[1.8]">
          Users agree to indemnify Mind A Lot from claims arising from misuse of
          the platform.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          13. Dispute Resolution
        </h2>
        <p className="mb-6 leading-[1.8]">
          Disputes will be resolved through arbitration in Bengaluru under the
          Indian Arbitration Act.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          14. Grievance Redressal
        </h2>
        <p className="mb-6 leading-[1.8]">
          Grievance Officer: <strong>Sumukh L</strong>  
          <br />
          Phone: <strong>+91 9606258596</strong>  
          <br />
          Email: <strong>info@mindalot.care</strong>  
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">
          15. General Provisions
        </h2>
        <p className="mb-6 leading-[1.8]">
          If any clause is invalid, the remaining Terms continue to apply. Notices
          may be sent to our registered office in Bengaluru.
        </p>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}