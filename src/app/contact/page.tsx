


"use client";

import { useState } from "react";
import Image from "next/image";
import arrow from "@/assets/corporate-assets/graphic2.svg";
import contactpage from "@/assets/contact-page/contactpage.png";
import cardGraphic from "@/assets/contact-page/right-side-image.png";
import box from "@/assets/contact-page/box.png";
import rightside1 from "@/assets/corporate-assets/group/group-clip-path3.png";
import call from "@/assets/contact-page/call.png";
import email from "@/assets/contact-page/sms.png";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);


  const [showPopup, setShowPopup] = useState(false);
  const [acceptedPolicies, setAcceptedPolicies] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!acceptedPolicies) {
      e.preventDefault();
      setShowPopup(true);
      return;
    }

    e.preventDefault();
    const form = e.currentTarget;

    setLoading(true);
    setError(false);
    setSuccess(false);

    const formData = new FormData(form);
    formData.append("access_key", "YOUR_ACCESS_KEY");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setLoading(false);

      if (result.success) {
        setSuccess(true);
        form.reset();
        setTimeout(() => setSuccess(false), 4000);
      } else {
        setError(true);
      }
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <main className="w-full bg-white text-[#3E2723] pt-20 sm:pt-24 lg:pt-32">
      {/* POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div className="bg-white w-[90%] max-w-[420px] rounded-xl p-6 shadow-lg text-center">
            <h2 className="text-[20px] font-semibold text-[#3E2723] mb-3">
              Please Accept Our Policies
            </h2>
            <p className="text-[14px] text-[#5B4A3E] mb-4 leading-relaxed">
              You must read and accept the Privacy Policy and Terms & Conditions before submitting the form.
            </p>

            <div className="flex flex-col gap-3 mb-4">
              <a
                href="/privacy-policy"
                target="_blank"
                className="text-[#967B6A] underline text-[15px] font-medium"
              >
                Read Privacy Policy
              </a>

              <a
                href="/terms-and-conditions"
                target="_blank"
                className="text-[#967B6A] underline text-[15px] font-medium"
              >
                Read Terms & Conditions
              </a>
            </div>

            {/* <button
              onClick={() => {
                setAcceptedPolicies(true);
                setShowPopup(false);
              }}
              className="bg-[#967B6A] text-white w-full py-2 rounded-md mt-2 hover:bg-[#A78870]"
            >
              I Agree
            </button> */}

            <button
  onClick={() => {
    setAcceptedPolicies(true);   // legal accept
    setCheckboxChecked(true);    // ✔ show checkmark
    setShowPopup(false);
  }}
  className="bg-[#967B6A] text-white w-full py-2 rounded-md mt-2 hover:bg-[#A78870]"
>
  I Agree
</button>


           <button
  onClick={() => {
    setAcceptedPolicies(false);
    setCheckboxChecked(false);   // ❌ no checkmark
    setShowPopup(false);
  }}
  className="text-[#5B4A3E] text-[14px] mt-3 underline"
>
  Cancel
</button>

          </div>
        </div>
      )}

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">

        {/* LEFT FORM AREA */}
        <div className="w-full max-w-full lg:max-w-[646px]">
          <h1 className="font-inter font-semibold text-[36px] sm:text-[48px] lg:text-[60px] leading-[40px] sm:leading-[64px] lg:leading-[80px] -tracking-[0.06em]">
            Need to know more?<br />we’re here
          </h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 mt-8 sm:mt-12">
            
            {/* FIRST NAME */}
            <div className="flex flex-col">
              <label className="text-[18px] text-[#5B4A3E]">First name</label>
              <input
                type="text"
                name="first_name"
                required
                placeholder="Enter your first name here"
                className="mt-1 w-full border-b border-[#C8B9AC] py-2 text-[18px]"
              />
            </div>

            {/* LAST NAME */}
            <div className="flex flex-col">
              <label className="text-[18px] text-[#5B4A3E]">Last name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Enter your last name here"
                className="mt-1 w-full border-b border-[#C8B9AC] py-2 text-[18px]"
              />
            </div>

            {/* PHONE */}
            <div className="flex flex-col">
              <label className="text-[18px] text-[#5B4A3E]">Phone number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="mt-1 w-full border-b border-[#C8B9AC] py-2 text-[18px]"
              />
            </div>

            {/* EMAIL */}
<div className="flex flex-col">
  <div className="flex items-center justify-between">
    <label className="text-[18px] text-[#5B4A3E]">Email</label>

    {/* Forgot password link */}
    <a
      href="/forgot-password"
      className="text-[12px] text-[#967B6A] hover:text-[#A78870] transition-colors"
    >
      Forgot Password?
    </a>
  </div>

  <input
    type="email"
    name="email"
    required
    placeholder="Enter your email"
    className="mt-1 w-full border-b border-[#C8B9AC] py-2 text-[18px] placeholder:text-[#9E9086] focus:outline-none"
  />
</div>


            {/* REASON */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[#5B4A3E]">Reason</label>
              <select
                name="reason"
                className="mt-1 w-full border-b border-[#C8B9AC] py-2 text-[18px] text-[#3E2723]"
              >
                <option>Select your reason</option>
                <option>Product enquiry</option>
                <option>Partnership</option>
                <option>Pricing</option>
                <option>Support</option>
              </select>
            </div>

 <label className="flex items-start gap-3 text-[12px] text-[#5B4A3E] cursor-pointer">
  <input
    type="checkbox"
    checked={checkboxChecked}
    onChange={() => {
      // Always open popup when user clicks checkbox
      setShowPopup(true);
    }}
    className="w-4 h-4 border border-[#5B4A3E] rounded-[3px] accent-[#967B6A] mt-[2px]"
  />
  <span className="leading-relaxed">
    By clicking submit, you agree to{" "}
    <a href="/privacy-policy" target="_blank" className="underline text-[#967B6A]">
      Mind A Lot Privacy Policy
    </a>{" "}
    and{" "}
    <a href="/terms-and-conditions" target="_blank" className="underline text-[#967B6A]">
      Terms & Conditions
    </a>
  </span>
</label>



            {/* SUBMIT BUTTON */}
            <div className="mt-2 flex justify-center lg:justify-start">
              <button
                type="submit"
                disabled={loading}
                className="relative group flex items-center w-full sm:w-[200px] h-[60px] text-white text-[16px] font-medium pl-6 pr-2 py-2 rounded-[40px] border border-[#967B6A] bg-[#967B6A] hover:bg-[#A78870] hover:text-black"
              >
                {loading ? "Sending..." : "Book A Demo"}
                {!loading && (
                  <div className="absolute right-[3px] top-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
                    <Image
                      src={arrow}
                      alt="Arrow"
                      className="w-[20px] h-[12px] rotate-[-45deg] group-hover:rotate-0 transition-all"
                    />
                  </div>
                )}
              </button>
            </div>

            {success && <p className="text-green-600 text-[14px]">✔ Message sent successfully.</p>}
            {error && <p className="text-red-600 text-[14px]">❌ Something went wrong.</p>}
          </form>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="bg-[#FFCE55] overflow-hidden w-full max-w-[600px] sm:max-w-[500px] rounded-[12px]">
            <Image
              src={contactpage}
              alt="contact illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTACT BOXES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 mt-16 text-center pb-24">
        <h2 className="text-[#3E2723] mb-8 text-[24px] font-semibold">
          For institutions, business queries, or partnerships—reach out:
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <ContactCard icon={email} label="support@mindalot.com" />
          <ContactCard icon={call} label="+91-96062-58596" />
          <ContactCard icon={rightside1} label="www.mindalot.care" />
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactCard({ icon, label }: { icon: any; label: string }) {
  return (
    <div className="relative w-[300px] h-[169px] px-6 py-4 flex flex-col justify-between">
      <Image src={box} alt="box" fill className="object-contain" />
      <Image src={cardGraphic} alt="shape" className="absolute top-2 right-2 w-[45px]" />
      <div className="relative z-10">
        <Image src={icon} alt="icon" className="w-[42px] h-[42px]" />
      </div>
      <p className="relative z-10 text-[#3E2723] text-[24px]">{label}</p>
    </div>
  );
}
