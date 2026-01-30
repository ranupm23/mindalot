"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import all images from assets
import graphic1 from "@/assets/corporate-assets/graphic1.svg";
import cardGraphic from "@/assets/corporate-assets/card-circle-white/card-graphic.svg";
import heroimage from "@/assets/corporate-assets/hero.png";
import roundcircle from "@/assets/corporate-assets/yourmentalhealth.png";
import cardExportCircle from "@/assets/contact-page/right-side-image.png";
import cardSecurity from "@/assets/corporate-assets/card-security.svg";
import groupClipPath1 from "@/assets/corporate-assets/group/24.png";
import groupClipPath2 from "@/assets/corporate-assets/group/group-clip-path2.png";
import groupClipPath3 from "@/assets/corporate-assets/group/group-clip-path3.png";
import cardcirclegrpup from "@/assets/corporate-assets/card-export-circle.svg";

type SubmitStatus = 'success' | 'error' | null;

export default function CorporatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    organizationName: "",
    workEmail: "",
    phoneNumber: "",
    roleDesignation: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Open modal
  const openModal = () => {
    setIsModalOpen(true);
    setSubmitStatus(null);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({
      fullName: "",
      organizationName: "",
      workEmail: "",
      phoneNumber: "",
      roleDesignation: ""
    });
    setSubmitStatus(null);
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!formData.fullName || !formData.organizationName || !formData.workEmail || !formData.phoneNumber || !formData.roleDesignation) {
      setSubmitStatus('error');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.workEmail)) {
      setSubmitStatus('error');
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Create email parameters
      const subject = `Demo Request from ${formData.fullName} - ${formData.organizationName}`;
      const body = `Demo Request Details:

Full Name: ${formData.fullName}
Organization Name: ${formData.organizationName}
Your Role / Designation: ${formData.roleDesignation}
Work Email Address: ${formData.workEmail}
Phone Number: ${formData.phoneNumber}

This person is interested in scheduling a demo for Mind A Lot.`;

      // Encode for mailto link
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);
      
      // Create mailto link
      const mailtoLink = `mailto:support@mindalot.care?subject=${encodedSubject}&body=${encodedBody}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Set success status
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsModalOpen(false);
        setFormData({
          fullName: "",
          organizationName: "",
          workEmail: "",
          phoneNumber: "",
          roleDesignation: ""
        });
        setSubmitStatus(null);
      }, 2000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#FDFDFD] text-[#5c4737] overflow-x-hidden">
      <Header navTextColor="#755840" />
      {/* HERO SECTION */}
      <section className="w-full bg-[#FDFDFD] pt-4 pb-6 sm:pt-[30px] sm:pb-[70px] px-4 sm:px-10 lg:px-20">

        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">
          
          {/* LEFT TEXT */}
          <div className="pt-[40px] text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="relative inline-block mb-[28px]">
              <h1
                className="font-semibold text-[#4b3729] tracking-[-0.06em] text-center lg:text-left 
                           text-[32px] sm:text-[48px] lg:text-[60px] 
                           leading-[36px] sm:leading-[52px] lg:leading-[64px] 
                           whitespace-normal lg:whitespace-nowrap"
                style={{ fontFamily: "Inter", fontWeight: 600 }}
              >
                <span className="block">Real Mental Wellness,</span>
                <span className="block">Not Just Another EAP</span>
              </h1>
            </div>

            <div className="mt-[6px]">
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "1.3em",
                  letterSpacing: "-0.03em",
                  color: "#1e1e1e",
                  maxWidth: "490px",
                }}
                className="text-[18px] sm:text-[18px] leading-[1.3] md:max-w-[460px]"
              >
                Mind A Lot is built for the modern workforce: instant, anonymous, and effective.
                Because people don't wait for office hours to break down.
              </p>
              <p
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "-0.03em",
                  color: "#8a8a8a",
                  maxWidth: "490px",
                  marginTop: "12px",
                }}
              >
                Let's discuss how Mind A Lot can fit your organization's wellness strategy
                in just 15 minutes.
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="mt-[46px] flex justify-center lg:justify-start">
              <button
                onClick={openModal}
                className="group flex items-center gap-[8px] text-[#5B4A3E] text-[18px] font-medium pl-[26px] pr-[4px] py-[4px] rounded-[40px] border border-[#5B4A3E] bg-[#F6F2EB] shadow-sm transition-all duration-300 hover:bg-[#5C4737] hover:text-white hover:border-[#3e3229] cursor-pointer"
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 500,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                <span className="tracking-[-0.01em]">Schedule A Demo</span>

                {/* Circle with arrow */}
                <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center transition-transform duration-300">
                  <Image
                    src={cardGraphic}
                    alt="Arrow"
                    className="w-[20px] h-[12px] rotate-[-45deg] transition-transform duration-300 ease-in-out group-hover:rotate-0"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center lg:justify-end items-start pt-[40px]">

            {/* Desktop / Tablet Version */}
            <div className="relative lg:block hidden" style={{ width: '540px', height: '400px' }}>
              {/* FRAME 1 */}
              <div
                className="absolute rounded-[22px] z-0 pointer-events-none"
                style={{
                  top: '-46px',
                  left: '-46px',
                  width: '586px',
                  height: '446px',
                  borderRadius: '22px',
                  background: 'radial-gradient(circle at top left, rgba(199,183,169,0.3) 0%, rgba(199,183,169,0.05) 30%, rgba(199,183,169,0) 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '1px',
                }}
              ></div>

              {/* FRAME 2 */}
              <div
                className="absolute rounded-[20px] z-0 pointer-events-none"
                style={{
                  top: '-28px',
                  left: '-28px',
                  width: '568px',
                  height: '428px',
                  borderRadius: '20px',
                  background: 'radial-gradient(circle at top left, rgba(199,183,169,0.45) 0%, rgba(199,183,169,0.05) 30%, rgba(199,183,169,0) 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '1px',
                  border: '1px solid transparent',
                }}
              ></div>

              {/* FRAME 3 */}
              <div
                className="absolute rounded-[18px] z-0 pointer-events-none"
                style={{
                  top: '-14px',
                  left: '-14px',
                  width: '554px',
                  height: '414px',
                  borderRadius: '18px',
                  background: 'radial-gradient(circle at top left, rgba(199,183,169,0.55) 0%, rgba(199,183,169,0.05) 30%, rgba(199,183,169,0) 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '1px',
                  border: '1px solid transparent',
                }}
              ></div>

              {/* MAIN IMAGE */}
              <div className="absolute top-0 left-0 w-[620px] h-[460px] -translate-x-[50px] rounded-[16px] overflow-hidden z-[10]">
                <Image
                  src={heroimage}
                  width={620}
                  height={460}
                  alt="Corporate group"
                  className="w-full h-full object-contain bg-transparent"
                />
              </div>

              {/* CIRCULAR BADGE */}
              <div
                className="absolute z-[20]"
                style={{
                  top: '-34px',
                  right: '-4px',
                  width: '88px',
                  height: '88px',
                }}
              >
                <Image
                  src={roundcircle}
                  alt="Your Mental Health"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>

            {/* Mobile / Tablet Version - Full width with padding */}
            <div className="block lg:hidden w-full px-6 sm:px-10">
              <div className="w-full rounded-[16px] overflow-hidden relative">
                <Image
                  src={heroimage}
                  alt="Corporate group"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section className="w-full bg-[#FDFDFD] py-16 sm:py-20 px-6 sm:px-20">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-[32px] sm:text-[50px] font-semibold text-[#3a2b20] mb-10 sm:mb-14 text-center sm:text-left"
            style={{ fontFamily: "Inter" }}
          >
            How Mind-A-Lot supports your organisation
          </h2>

          {/* GRID - Now with video instead of last tile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 justify-center">
            {[
              {
                icon: groupClipPath1,
                title: "Always-available, chat-first",
                text: "Get instant support anytime, even during late nights and weekends.",
              },
              {
                icon: cardcirclegrpup,
                title: "Private and judgement-free",
                text: "Employees stay completely anonymous; counsellors never see personal or identifying details.",
              },
              {
                icon: groupClipPath3,
                title: "Global support network",
                text: "Wherever your workforce is located, our professionals are available to help.",
              },
              {
                icon: groupClipPath2,
                title: "Smart goal nudges",
                text: "Gentle reminders and insights designed to reduce burnout, boost focus, and improve sleep and mindset.",
              },
              {
                icon: cardSecurity,
                title: "Insightful, privacy-first reports",
                text: "HR teams receive usage trends and well-being analytics without compromising employee privacy",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-[1.5px] rounded-[16px] bg-[linear-gradient(135deg,#d8cfc7_0%,rgba(216,207,199,0)_100%)] w-full sm:w-[390px] h-auto sm:h-[275px] mx-auto"
              >
                <div className="bg-[#F8F8F8] rounded-[15px] w-full h-full flex flex-col justify-between p-4">
                  <div className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] lg:w-[75px] lg:h-[75px] mx-auto sm:mx-0">
                    <Image
                      src={card.icon}
                      width={75}
                      height={75}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="mt-4 sm:mt-auto text-center sm:text-left">
                    <h3
                      className="text-[20px] sm:text-[24px] font-semibold text-[#3a2b20] mb-2"
                      style={{ fontFamily: "Inter" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-[14px] sm:text-[14px] text-[#6d6d6f] leading-5 sm:leading-5"
                      style={{ fontFamily: "Inter" }}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* VIDEO CARD - Replaces the dark card */}
            <div className="relative p-[1.5px] rounded-[16px] bg-[linear-gradient(135deg,#d8cfc7_0%,rgba(216,207,199,0)_100%)] w-full sm:w-[390px] h-auto sm:h-[275px] mx-auto">
              <div className="bg-[#5c4737] rounded-[15px] p-4 flex flex-col items-center justify-center text-center w-full h-full overflow-hidden">
                <div className="mb-3">
                  <h3 className="text-white text-[20px] sm:text-[22px] font-semibold mb-2" style={{ fontFamily: "Inter" }}>
                    See How It Works
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    Watch our demo video
                  </p>
                </div>
                
                {/* Video Container */}
                <div className="relative w-full h-40 rounded-lg overflow-hidden bg-black/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* YouTube video embed */}
                    <iframe
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&modestbranding=1&rel=0"
                      title="Mind A Lot Demo Video"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    
                    {/* Fallback if video doesn't load */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#5c4737]/80 to-[#3a2b20]/80">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-white font-medium">Demo Video</p>
                        <p className="text-white/70 text-sm mt-1">Click to play</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 text-xs text-white/60">
                  Experience the platform in action
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#FDFDFD] py-12 sm:py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <h2
            className="text-[32px] sm:text-[40px] lg:text-[50px] 
                       leading-[36px] sm:leading-[44px] lg:leading-[50px] 
                       text-center lg:text-left 
                       whitespace-normal lg:whitespace-nowrap"
            style={{ fontFamily: "Inter", fontWeight: 600, letterSpacing: "-0.06em", color: "#3a2b20" }}
          >
            Let's Build a Healthier Workplace Together
          </h2>

          <p
            className="text-[16px] sm:text-[18px] 
                       leading-[24px] sm:leading-[28px] 
                       text-center 
                       whitespace-normal lg:whitespace-nowrap 
                       mx-auto"
            style={{ fontFamily: "Inter", fontWeight: 400, letterSpacing: "-0.03em", color: "#6d6d6f" }}
          >
           Partner with Mind-A-Lot to offer mental health support that employees trust and use.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-[36px]">
            {/* CTA 1 */}
            <button
              onClick={openModal}
              className="group flex items-center gap-[8px] text-[#5B4A3E] text-[18px] font-medium pl-[26px] pr-[4px] py-[4px] rounded-[40px] border border-[#5B4A3E] bg-[#ffffff] shadow-sm transition-all duration-300 hover:bg-[#5C4737] hover:text-white hover:border-[#3e3229] cursor-pointer"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              <span className="tracking-[-0.01em]">Book a Demo</span>

              {/* Circle */}
              <div
                className="
                  w-[46px] h-[46px]
                  bg-[#5B4A3E]
                  rounded-full
                  flex items-center justify-center
                  transition-colors duration-300
                  group-hover:bg-white
                "
              >
                {/* Arrow */}
                <Image
                  src={cardGraphic}
                  alt="Arrow"
                  className="
                    w-[20px] h-[12px]
                    rotate-[-45deg]
                    transition-all duration-300 ease-in-out
                    group-hover:rotate-0
                    filter brightness-0 invert
                    group-hover:invert-0
                  "
                />
              </div>
            </button>

            {/* CTA 2 */}
            <Link
              href="https://drive.google.com/file/d/18979mEF_zw9ba3gkqkPJP_uSX6ePTcIo/view"
              className="group flex items-center gap-[8px] text-[#5B4A3E] text-[18px] font-medium pl-[26px] pr-[4px] py-[4px] rounded-[40px] border border-[#5B4A3E] bg-[#ffffff] shadow-sm transition-all duration-300 hover:bg-[#5C4737] hover:text-white hover:border-[#3e3229]"
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontWeight: 500,
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              <span className="tracking-[-0.01em]">Request Corporate Deck</span>

              {/* Circle with arrow */}
              <div
                className="
                  w-[46px] h-[46px]
                  bg-[#5B4A3E]
                  rounded-full
                  flex items-center justify-center
                  transition-colors duration-300
                  group-hover:bg-white
                "
              >
                <Image
                  src={cardGraphic}
                  alt="Arrow"
                  className="
                    w-[20px] h-[12px]
                    rotate-[-45deg]
                    transition-all duration-300 ease-in-out
                    group-hover:rotate-0
                    filter brightness-0 invert
                    group-hover:invert-0
                  "
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* MODAL POPUP */}
      {isModalOpen && (
        <>
          {/* Backdrop with blur effect */}
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeModal}></div>
          
          {/* Modal Content - Now scrollable */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              ref={modalRef}
              className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="sticky top-0 right-0 float-right mt-4 mr-4 text-gray-400 hover:text-gray-600 text-2xl z-10 bg-white rounded-full p-1"
              >
                &times;
              </button>

              {/* Modal Content Container */}
              <div className="p-6">
                {/* Modal Title */}
                <h3 className="text-2xl font-bold text-[#3a2b20] mb-6 text-center">
                  Schedule a Demo
                </h3>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                    ✓ Form submitted successfully! Opening email client...
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                    Please fill all fields correctly before submitting.
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c4737] focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c4737] focus:border-transparent"
                      placeholder="Enter your organization name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Role / Designation *
                    </label>
                    <input
                      type="text"
                      name="roleDesignation"
                      value={formData.roleDesignation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c4737] focus:border-transparent"
                      placeholder="e.g., HR Manager, CEO, Team Lead"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c4737] focus:border-transparent"
                      placeholder="Enter your work email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c4737] focus:border-transparent"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  {/* Info text */}
                  <p className="text-sm text-gray-500 text-center mt-4">
                    Clicking "Send" will open your email client with a pre-filled email to <strong>support@mindalot.care</strong>
                  </p>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-6 bg-[#5c4737] text-white py-3 rounded-lg font-medium hover:bg-[#4a392e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed sticky bottom-0"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Send'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}