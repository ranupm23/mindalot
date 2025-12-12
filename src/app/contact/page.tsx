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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
              <label className="text-[14px] text-[#5B4A3E]">First name</label>
              <input
                type="text"
                name="first_name"
                required
                placeholder="Enter your first name here"
                className="mt-1 w-full border-b border-[#C8B9AC] py-2 text-[14px] placeholder:text-[#9E9086] focus:outline-none"
              />
            </div>

            {/* LAST NAME */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[#5B4A3E]">Last name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Enter your last name here"
                className="mt-1 w-full border-b border-[#C8B9AC] py-2 text-[14px] placeholder:text-[#9E9086] focus:outline-none"
              />
            </div>

            {/* PHONE */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[#5B4A3E]">Phone number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="mt-1 w-full border-b border-[#C8B9AC] py-2 text-[14px] placeholder:text-[#9E9086] focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <label className="text-[14px] text-[#5B4A3E]">Email</label>
                {/* Forgot password link */}
                <a
                  href="#"
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
                className="mt-1 w-full border-b border-[#C8B9AC] py-2 text-[14px] placeholder:text-[#9E9086] focus:outline-none"
              />
            </div>

            {/* REASON */}
            <div className="flex flex-col">
              <label className="text-[14px] text-[#5B4A3E]">Reason</label>
              <select
                name="reason"
                className="mt-1 w-full border-b border-[#C8B9AC] py-2 text-[14px] text-[#3E2723] focus:outline-none"
              >
                <option>Select your reason</option>
                <option>Product enquiry</option>
                <option>Partnership</option>
                <option>Pricing</option>
                <option>Support</option>
              </select>
            </div>

            {/* TERMS */}
            <label className="flex items-start gap-2 text-[12px] text-[#5B4A3E]">
              <input type="checkbox" required className="w-4 h-4 mt-0.5" />
              By clicking submit, you agree to Mind A Lot Privacy Policy and Terms & Conditions
            </label>

            {/* BUTTON */}
            <div className="mt-2 flex justify-center lg:justify-start">
              <button
                type="submit"
                disabled={loading}
                className="relative group flex items-center w-full sm:w-[200px] h-[50px] text-white text-[16px] sm:text-[18px] font-medium pl-6 pr-2 py-2 rounded-[40px] border border-[#967B6A] bg-[#967B6A] shadow-sm transition-all duration-300 hover:bg-[#A78870]"
              >
                <span className="tracking-[-0.01em]">{loading ? "Sending..." : "Book A Demo"}</span>
                {!loading && (
                  <div className="absolute right-[3px] top-1/2 -translate-y-1/2 w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#8A8077]">
                    <Image
                      src={arrow}
                      alt="Arrow"
                      className="w-[20px] h-[12px] rotate-[-45deg]"
                    />
                  </div>
                )}
              </button>
            </div>

            {/* ALERTS */}
            {success && <p className="text-green-600 text-[14px] pt-2">✔️ Message sent successfully.</p>}
            {error && <p className="text-red-600 text-[14px] pt-2">❌ Something went wrong.</p>}
          </form>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="bg-[#FFCE55] overflow-hidden w-full max-w-[600px] sm:max-w-[500px] h-auto rounded-[12px]">
            <Image
              src={contactpage}
              alt="contact illustration"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* CONTACT BOXES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 mt-16 sm:mt-20 text-center pb-24">
        <h2 className="text-[#3E2723] mb-8 sm:mb-12 text-[20px] sm:text-[24px] font-semibold leading-tight -tracking-[0.03em] max-sm:text-[18px] max-sm:leading-snug max-sm:mb-6">
          For institutions, business queries, or partnerships—reach out:
        </h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-sm:gap-2">
          {/* EMAIL */}
          <ContactCard icon={email} label="support@mindalot.com" />
          {/* PHONE */}
          <ContactCard icon={call} label="+91-96062-58596" />
          {/* WEBSITE */}
          <ContactCard icon={rightside1} label="www.mindalot.care" />
        </div>
      </section>

      <Footer />
    </main>
  );
}

// CONTACT CARD COMPONENT
function ContactCard({ icon, label }: { icon: any; label: string }) {
  return (
    <div className="relative w-[300px] h-[169px] sm:w-[300px] sm:h-[169px] px-6 py-4 flex flex-col justify-between max-sm:w-[260px] max-sm:h-[150px] max-sm:px-4 max-sm:py-3">
      <Image src={box} alt="contact box" fill className="object-contain" />
      <Image
        src={cardGraphic}
        alt="decoration"
        className="absolute top-2 right-2 w-[45px] h-[45px] max-sm:w-[35px] max-sm:h-[35px]"
      />
      <div className="relative z-10">
        <Image
          src={icon}
          alt="icon"
          className="w-[42px] h-[42px] max-sm:w-[34px] max-sm:h-[34px]"
        />
      </div>
      <div className="relative z-10 mt-2 max-sm:mt-1">
        <p className="text-[#3E2723] font-normal text-[24px] max-sm:text-[18px] leading-none -tracking-[0.03em]">{label}</p>
      </div>
    </div>
  );
}
