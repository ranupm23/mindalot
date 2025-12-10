"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import arrow from "@/assets/corporate-assets/graphic2.svg";
import contactpage from "@/assets/contact-page/contactpage.png";
import cardGraphic from "@/assets/contact-page/right-side-image.png";
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
    <main className="min-h-screen bg-gradient-to-b from-[#EEDAC8] to-[#D8C3A5] text-[#3E2723] pt-24 pb-0 overflow-hidden flex flex-col">
      <section className="mx-auto max-w-6xl px-5 md:px-10 grid gap-14 lg:grid-cols-2 items-center flex-grow">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#6D4C41] to-[#3E2723]">
            Need to Know More? <br />
            We're Here.
          </h1>
          <p className="text-[#5D4037]/80 text-sm mb-10 max-w-md leading-relaxed">
            Fill out the form below and our team will get in touch with you soon.
          </p>

        {/* LEFT FORM AREA */}
        <div className="w-full max-w-full lg:max-w-[646px]">
          <h1 className="font-inter font-semibold text-[36px] sm:text-[48px] lg:text-[60px] leading-[40px] sm:leading-[64px] lg:leading-[80px] -tracking-[0.06em]">
            Need to know more?<br />we’re here
          </h1>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 sm:gap-8 mt-8 sm:mt-12"
          >
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

            {/* EMAIL + FORGOT OPTION */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <label className="text-[14px] text-[#5B4A3E]">Email</label>
                <button type="button" className="text-[12px] text-[#7D5B4F] hover:underline">
                  Forgot?
                </button>
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
                className="group flex items-center justify-between w-full sm:w-[200px] h-[50px] text-white text-[16px] sm:text-[18px] font-medium pl-6 pr-2 py-2 rounded-[40px] border border-[#967B6A] bg-[#967B6A] shadow-sm transition-all duration-300 hover:bg-[#A78870]"
              >
                <span className="tracking-[-0.01em]">{loading ? "Sending..." : "Book A Demo"}</span>
                {!loading && (
                  <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center">
                    <Image
                      src={arrow}
                      alt="Arrow"
                      className="w-[20px] h-[12px] rotate-[-45deg] transition-transform duration-300 ease-in-out group-hover:rotate-0"
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
        <h2 className="text-[#3E2723] mb-8 sm:mb-12 text-[20px] sm:text-[24px] font-semibold leading-tight -tracking-[0.03em]">
          For institutions, business queries, or partnerships—reach out:
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
    <div className="relative bg-[#F4ECE6] rounded-[24px] w-full sm:w-[300px] h-[169px] p-6 sm:p-8 shadow-sm flex flex-col items-center justify-center">
      <Image src={icon} alt="Left Icon" className="absolute top-4 left-6 w-[50px] h-[50px]" />
      <div className="absolute top-0 right-0 w-[60px] h-[60px] bg-white rounded-bl-[28px] flex items-center justify-center z-10">
        <Image src={cardGraphic} alt="Right Icon" className="w-[50px] h-[50px]" />
      </div>
      <span className="mt-16 sm:mt-20 text-[#5B4A3E] text-[16px] sm:text-[20px]">{label}</span>
    </div>
  );
}
