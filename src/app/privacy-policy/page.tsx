"use client";


import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#FDFDFD] text-[#3E2723]">
      

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-[#3E2723]">
          Privacy Policy
        </h1>

        {/* 1. INTRODUCTION */}
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-6 leading-[1.8]">
          Welcome to <strong>Mind A Lot</strong> (“we,” “our,” or “us”). Your
          privacy is important to us. This Privacy Policy explains how we
          collect, use, share, and protect your personal information when you
          use our website, mobile application, or services (“Services”).
        </p>

        <p className="mb-6 leading-[1.8]">
          By accessing or using our Services, you acknowledge and consent to the
          practices outlined in this Privacy Policy. If you disagree with any
          part of this Policy, please discontinue use of our Services.
        </p>

        <p className="mb-6 leading-[1.8]">
          This Policy must be read along with our{" "}
          <strong>Terms and Conditions</strong>, which collectively govern the
          use of our platform.
        </p>

        <p className="mb-6 leading-[1.8]">
          We may update this Privacy Policy periodically. Continued use of our
          Services indicates that you agree to the revised version.
        </p>

        {/* 2. INFORMATION WE COLLECT */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          2. Information We Collect
        </h2>

        <h3 className="text-xl font-semibold mb-2">a. Information You Provide</h3>
        <ul className="list-disc pl-6 mb-6 leading-[1.8]">
          <li>
            <strong>At Registration:</strong> Name, phone number, email, age,
            gender, educational qualifications, parental details, and
            occupation.
          </li>
          <li>
            <strong>Through Use:</strong> Details shared during assessments,
            messages, consultations, and feedback.
          </li>
          <li>
            <strong>Billing Info:</strong> We may collect transaction details.
            (We do <strong>not</strong> collect card numbers.)
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">
          b. Information We Collect Automatically
        </h3>
        <ul className="list-disc pl-6 mb-6 leading-[1.8]">
          <li>IP address</li>
          <li>Device and browser type</li>
          <li>Cookies and unique identifiers</li>
          <li>Pages visited, clicks, time spent</li>
          <li>Location data (only if permitted)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">c. Information from Third Parties</h3>
        <p className="mb-6 leading-[1.8]">
          We may receive data from educational institutions, employers, or
          service partners who refer or register you for our Services.
        </p>

        {/* 3. HOW WE USE YOUR INFORMATION */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          3. How We Use Your Information
        </h2>
        <p className="mb-6 leading-[1.8]">
          We use your data to:
        </p>
        <ul className="list-disc pl-6 mb-6 leading-[1.8]">
          <li>Deliver, personalize, and improve the Services</li>
          <li>Maintain user accounts and profiles</li>
          <li>Facilitate communication between you and experts</li>
          <li>Analyze trends and usage patterns</li>
          <li>Ensure platform security</li>
          <li>Comply with legal requirements</li>
        </ul>

        <p className="mb-6 leading-[1.8]">
          We may also use <strong>aggregated or anonymized data</strong> for
          research or improvement purposes. You cannot be identified from this
          data.
        </p>

        {/* 4. INFORMATION WE SHARE */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          4. Information We Share
        </h2>
        <p className="mb-6 leading-[1.8]">
          We <strong>do not sell</strong> your personal information. We share
          data only:
        </p>
        <ul className="list-disc pl-6 mb-6 leading-[1.8]">
          <li>With your explicit consent</li>
          <li>With service providers bound by confidentiality</li>
          <li>With our affiliates within Mind A Lot</li>
          <li>As required by law or regulation</li>
          <li>
            Under <strong>Red Flags</strong> — safety risks or emergencies
          </li>
          <li>
            With your school/employer (with anonymization unless required for
            safety or insurance)
          </li>
        </ul>

        {/* 5. YOUR RIGHTS */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          5. Your Rights and Choices
        </h2>
        <p className="mb-6 leading-[1.8]">You may:</p>
        <ul className="list-disc pl-6 mb-6 leading-[1.8]">
          <li>
            Access or update your data by emailing{" "}
            <strong>support@mindalot.care</strong>
          </li>
          <li>Request deletion of your data</li>
          <li>Choose not to share specific information</li>
        </ul>
        <p className="mb-6 leading-[1.8]">
          Some data may remain in backup systems for legal or administrative
          reasons.
        </p>

        {/* 6. MINORS */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">6. Children and Minors</h2>
        <p className="mb-6 leading-[1.8]">
          We do not knowingly collect personal data from minors (below 18 years)
          without parental consent. Accounts created without consent will be
          deleted upon verification.
        </p>

        {/* 7. CONFIDENTIALITY */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          7. Confidential Information from Consultations
        </h2>
        <p className="mb-6 leading-[1.8]">
          Information shared in one-on-one sessions is confidential except:
        </p>
        <ul className="list-disc pl-6 mb-6 leading-[1.8]">
          <li>If there is an immediate threat to safety</li>
          <li>If required by law</li>
          <li>If needed for insurance claims</li>
          <li>
            For Red Flags affecting minors, schools, or employers who facilitated
            access
          </li>
        </ul>

        {/* 8. DATA RETENTION */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          8. Data Storage & Retention
        </h2>
        <p className="mb-6 leading-[1.8]">
          We retain information for a minimum of <strong>7 years</strong> to:
        </p>
        <ul className="list-disc pl-6 mb-6 leading-[1.8]">
          <li>Comply with regulations</li>
          <li>Respond to disputes</li>
          <li>Improve the platform</li>
        </ul>
        <p className="mb-6 leading-[1.8]">
          While we use strong security measures, absolute protection cannot be
          guaranteed. Users must safeguard their login details.
        </p>

        {/* 9. THIRD-PARTY LINKS */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          9. Third-Party Platforms
        </h2>
        <p className="mb-6 leading-[1.8]">
          Our platform may link to third-party sites. We are not responsible for
          their content or privacy practices.
        </p>

        {/* 10. INTELLECTUAL PROPERTY */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          10. Intellectual Property Shared by You
        </h2>
        <p className="mb-6 leading-[1.8]">
          If you upload content containing intellectual property, you grant Mind
          A Lot a worldwide, royalty-free license to use it for providing
          Services. You may revoke this by deleting the content.
        </p>

        {/* 11. DISPUTE RESOLUTION */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          11. Dispute Resolution
        </h2>
        <p className="mb-6 leading-[1.8]">
          We aim to resolve disputes through dialogue. If unresolved, arbitration
          will follow the Indian Arbitration and Conciliation Act, held in
          Bengaluru.
        </p>

        {/* 12. GOVERNING LAW */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          12. Governing Law and Jurisdiction
        </h2>
        <p className="mb-6 leading-[1.8]">
          This Policy is governed by Indian law. Courts in Bengaluru have
          exclusive jurisdiction.
        </p>

        {/* 13. GRIEVANCE */}
        <h2 className="text-2xl font-semibold mt-12 mb-4">
          13. Grievance Redressal
        </h2>

        <p className="mb-4 leading-[1.8]">
          For any privacy concerns, contact our Grievance Officer:
        </p>

        <p className="mb-6 leading-[1.8]">
          <strong>Name:</strong> Sumukh L <br />
          <strong>Phone:</strong> +91 9606258596 <br />
          <strong>Email:</strong> support@mindalot.care <br />
          <br />
          <strong>Address:</strong> <br />
          VK Palace, 2nd Floor, 2nd Cross, 10th Main, <br />
          Shankar Nagar, Mahalakshmi Layout, <br />
          Bangalore, Karnataka – 560096
        </p>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
