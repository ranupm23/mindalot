"use client";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Footer from "@/components/Footer";
//Import Framer Motion
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import hero1 from "@/assets/universityPage/hero-1.png";
import c1 from "@/assets/universityPage/24.png";
import of1 from "@/assets/universityPage/24.png";
import holistic from "@/assets/universityPage/holistic.png";
import Risk from "@/assets/universityPage/Risk.png";
import Dashboard from "@/assets/universityPage/dashboard.png";
import Global from "@/assets/universityPage/global.png";
import Custom from "@/assets/universityPage/custom.png";
import Regulator from "@/assets/universityPage/Regulatory.png";
import arrow from "@/assets/arrow.svg";
import whitea from "@/assets/universityPage/Arrow 1.png";
import blacka from "@/assets/universityPage/black arr.png";
import Header from "@/components/Header";

type SubmitStatus = 'success' | 'error' | null;

export default function University() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    workEmail: "",
    institutionName: "",
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
      phoneNumber: "",
      workEmail: "",
      institutionName: "",
      roleDesignation: ""
    });
    setSubmitStatus(null);
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    if (!formData.fullName || !formData.phoneNumber || !formData.workEmail || !formData.institutionName || !formData.roleDesignation) {
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
      const subject = `University Demo Request from ${formData.fullName} - ${formData.institutionName}`;
      const body = `University Demo Request Details:

Full Name: ${formData.fullName}
Phone Number: ${formData.phoneNumber}
Official Work Email Address: ${formData.workEmail}
Name of the Institution: ${formData.institutionName}
Your Role / Designation: ${formData.roleDesignation}

This person is interested in scheduling a demo for Mind A Lot for their educational institution.`;

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
          phoneNumber: "",
          workEmail: "",
          institutionName: "",
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

// ========== HERO SECTION ==========
const HeroSection = () => {
  return (
    <motion.section
      className="relative w-full flex items-center justify-center overflow-hidden mx-auto min-h-[90vh] md:h-[866px]"
      style={{
        maxWidth: '4440px',
        width: '100%',
        opacity: 1,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background and Overlays */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative z-[100] pointer-events-auto">
          {/* Header with transparent background */}
          <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
            <Header />
          </div>
        </div>
        
        {/* Background Image with more transparency and black fade */}
        <div className="absolute inset-0">
          <Image 
            src={hero1} 
            alt="Hero background" 
            fill 
            className="object-cover"
            style={{
              opacity: 1,
              filter: 'brightness(0.87)'
            }}
            priority 
          />
          {/* Black fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
        </div>
      </div>
      
      <div className="absolute inset-0 w-full h-full z-[1]" style={{ background: '#00000099' }} />
      <div 
        className="absolute inset-0 w-full h-full z-[2]"
        style={{
          background: 'linear-gradient(125.54deg, #5B4B3E -12.44%, #F6F1EB -2.52%, #E8DED4 19.98%, #ABA093 80.72%, #8A8077 101.75%)',
          mixBlendMode: 'multiply',
          opacity: 0.8,
        }}
      />
      
      <div className="relative z-10 w-full h-full px-4 md:px-0 flex flex-col items-center justify-center py-12 md:py-0 md:block">
        
        {/* 1. H1 Layout - Increased size and boldness */}
        <div
          className="w-[90%] md:w-[704px] mb-6 md:mb-0 mt-16 md:mt-0 md:absolute md:top-[259px] md:left-1/2 md:-translate-x-1/2"
          style={{
            color: '#F6F2EB',
            opacity: 1,
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <h1
              className="text-[38px] sm:text-[40px] md:text-[58px] lg:text-[68px] leading-[44px] sm:leading-[50px] md:leading-[62px] lg:leading-[72px] text-center font-bold"
              style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                letterSpacing: '-3%',
                color: '#F6F2EB',
                margin: 0,
              }}
            >
              Mental health on campus is no longer
            </h1>
          </div>
        </div>

        {/* 2. First Paragraph - Increased size and boldness */}
        <div 
          className="w-[90%] md:w-[588px] mt-4 md:mt-0 mb-3 md:mb-0 md:absolute md:top-[421px] md:left-1/2 md:-translate-x-1/2"
          style={{
            color: '#F6F2EB',
            opacity: 1,
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <p
              className="text-[18px] sm:text-[19px] md:text-[20px] leading-[24px] sm:leading-[25px] md:leading-[28px] text-center font-semibold"
              style={{
                fontFamily: 'Inter',
                letterSpacing: '-3%',
                color: '#F6F2EB',
                margin: 0,
              }}
            >
              Students are struggling silently. Depression, anxiety, burnout, and identity crises don't wait for counselling centre hours.
            </p>
          </div>
        </div>

        {/* 3. Second Paragraph - Increased size and boldness */}
        <div 
          className="w-[90%] md:w-[534px] mt-3 md:mt-0 mb-3 md:mb-0 md:absolute md:top-[495px] md:left-1/2 md:-translate-x-1/2"
          style={{
            color: '#F6F2EB',
            opacity: 1,
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <p
              className="text-[18px] sm:text-[19px] md:text-[20px] leading-[24px] sm:leading-[25px] md:leading-[28px] text-center font-semibold"
              style={{
                fontFamily: 'Inter',
                letterSpacing: '-3%',
                textAlign: 'center',
                color: '#F6F2EB',
                margin: 0,
              }}
            >
              Mind A Lot gives your students instant, anonymous access to licensed mental health professionals, 24/7.
            </p>
          </div>
        </div>

        {/* 4. Third Paragraph - Increased size and boldness */}
        <div 
          className="w-[90%] md:w-[456px] mt-3 md:mt-0 mb-6 md:mb-0 md:absolute md:top-[561px] md:left-1/2 md:-translate-x-1/2"
          style={{
            color: '#F6F2EB',
            opacity: 1,
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <p
              className="text-[18px] sm:text-[19px] md:text-[20px] leading-[24px] sm:leading-[25px] md:leading-[28px] text-center font-semibold whitespace-normal md:whitespace-nowrap"
              style={{
                fontFamily: 'Inter',
                letterSpacing: '-3%',
                textAlign: 'center',
                color: '#F6F2EB',
                margin: 0,
              }}
            >
              No stigma. No waiting lists. Just real support, in real time.
            </p>
          </div>
        </div>

        {/* Schedule Demo Button */}
        <div
          className="w-[180px] md:w-[212px] h-[50px] md:h-[60px] md:absolute md:top-[636px] md:left-1/2 md:-translate-x-1/2"
          style={{
            opacity: 1,
          }}
        >
          <button
            onClick={openModal}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#5C4737";
              e.currentTarget.style.border = "2px solid transparent";
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transform = "rotate(45deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.border = "2px solid #F6F2EB";
              const img = e.currentTarget.querySelector("img");
              if (img) img.style.transform = "rotate(0deg)";
            }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              position: "relative",
              border: "2px solid #F6F2EB",
              borderRadius: "30px",
              background: "transparent",
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            {/* Button Text */}
            <span
              className="text-[14px] md:text-[16px] absolute top-1/2 -translate-y-1/2 left-[16px] md:left-[20px]"
              style={{
                width: "auto",
                fontFamily: "Nunito Sans",
                fontWeight: 500,
                color: "#F6F2EB",
              }}
            >
              Schedule a demo
            </span>

            {/* Circle */}
            <div
              className="absolute w-[42px] h-[42px] md:w-[50px] md:h-[50px] left-[130px] md:left-[155px] top-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "#F6F2EB",
                border: "1px solid #F6F2EBEE",
              }}
            >
              <Image
                src={blacka}
                alt="arrow icon"
                width={18}
                height={18}
                className="md:w-5 md:h-5"
                style={{
                  transition: "0.3s",
                }}
              />
            </div>
          </button>
        </div>
      </div>
    </motion.section>
  );
};

// ========== OFFER SECTION =========
const OfferSection = () => {
  const cards = [
    {
      icon: c1,
      title: "24/7 Anonymous Access",
      desc: "Real counselling, round the clock — with complete privacy and immediate support, whenever and wherever you need it.",
    },
    {
      icon: holistic,
      title: "Holistic Student Support",
      desc: "Covering exam stress, relationships, identity, focus, and more — because whatever you're going through, you don't have to face it alone.",
    },
    {
      icon: Risk,
      title: "High-Risk Case Escalation",
      desc: "Built-in protocols for high-risk cases with seamless escalation to partner hospitals, guaranteeing safety, continuity, and quality of care.",
    },
    {
      icon: Dashboard,
      title: "Institutional Dashboards",
      desc: "Anonymized, real-time wellness insights to inform campus-wide mental health status, helping institutions identify trends and support students proactively.",
    },
    {
      icon: Global,
      title: "Global Accessibility",
      desc: "Works seamlessly across devices, time zones, and multiple languages to serve all students — because help should always be within reach.",
    },
    {
      icon: Custom,
      title: "Custom Content Drops",
      desc: "Targeted resources for exam anxiety, homesickness, burnout, and self-harm prevention — fostering a safer, more supportive campus environment.",
    },
    {
      icon: Regulator,
      title: "Regulatory Compliance",
      desc: "Helps your institution stay compliant with UGC/NAAC/AICTE mental health directives — turning compliance into meaningful student well-being action.",
    },
  ];

  return (
    <section className="w-full bg-[#F6F2EB] py-16 xl:py-20">
      {/* Heading */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 mb-12">
        <h2 className="font-nunito font-bold text-[42px] lg:text-[50px] text-[#5C4737]">
          What <span className="text-[#5C4737]">we</span> offer to universities?
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative bg-[#F8F8F8] rounded-[16px] p-6 h-[350px] flex flex-col
              ${index % 4 === 1 ? "mt-8 sm:mt-10" : ""}
              ${index % 4 === 2 ? "mt-16 sm:mt-20" : ""}
              ${index % 4 === 3 ? "mt-24 sm:mt-28" : ""}
              hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-300
            `}
            style={{
              border: "1px solid transparent",
              // More extensive fade-out starting from top-left to bottom-right
              backgroundImage: `
                linear-gradient(#F8F8F8, #F8F8F8), 
                linear-gradient(
                  to bottom right, 
                  #5C4737 0%, 
                  rgba(92, 71, 55, 0.8) 30%, 
                  rgba(92, 71, 55, 0.4) 50%, 
                  rgba(92, 71, 55, 0.2) 70%, 
                  transparent 100%
                )
              `,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            {/* Enhanced white wash fade overlay covering 50% of the card from bottom-right */}
            <div 
              className="absolute inset-0 rounded-[16px] pointer-events-none z-0"
              style={{
                background: `
                  radial-gradient(
                    ellipse at bottom right,
                    transparent 0%,
                    transparent 40%,
                    rgba(255, 255, 255, 0.3) 60%,
                    rgba(255, 255, 255, 0.6) 80%,
                    rgba(255, 255, 255, 0.8) 100%
                  )
                `,
                WebkitMaskImage: "linear-gradient(135deg, transparent 40%, black 70%)",
                maskImage: "linear-gradient(135deg, transparent 40%, black 70%)",
              }}
            ></div>

            <div className="w-[60px] h-[60px] mb-4 z-10 relative">
              <Image
                src={card.icon}
                alt="icon"
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-[22px] font-semibold text-[#5C4737] mb-3 leading-tight z-10 relative">
              {card.title}
            </h3>

            <p className="text-[14px] text-[#6D6D6F] leading-[24px] z-10 relative">
              {card.desc}
            </p>
          </div>
        ))}

        {/* Video Card */}
        <div
          className={`relative bg-[#5C4737] rounded-[16px] p-6 h-[350px] flex flex-col justify-center text-center
            ${7 % 4 === 1 ? "mt-8 sm:mt-10" : ""}
            ${7 % 4 === 2 ? "mt-16 sm:mt-20" : ""}
            ${7 % 4 === 3 ? "mt-24 sm:mt-28" : ""}
            hover:scale-105 hover:shadow-xl transition-transform transition-shadow duration-300
          `}
          style={{
            border: "1px solid transparent",
            // More extensive fade-out for video card
            backgroundImage: `
              linear-gradient(#5C4737, #5C4737), 
              linear-gradient(
                to bottom right, 
                rgba(255, 255, 255, 0.3) 0%, 
                rgba(255, 255, 255, 0.2) 30%, 
                rgba(255, 255, 255, 0.1) 50%, 
                rgba(255, 255, 255, 0.05) 70%, 
                transparent 100%
              )
            `,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          {/* Enhanced white wash fade overlay for video card */}
          <div 
            className="absolute inset-0 rounded-[16px] pointer-events-none z-0"
            style={{
              background: `
                radial-gradient(
                  ellipse at bottom right,
                  transparent 0%,
                  transparent 30%,
                  rgba(255, 255, 255, 0.2) 50%,
                  rgba(255, 255, 255, 0.4) 70%,
                  rgba(255, 255, 255, 0.6) 90%,
                  rgba(255, 255, 255, 0.7) 100%
                )
              `,
              WebkitMaskImage: "linear-gradient(135deg, transparent 30%, black 65%)",
              maskImage: "linear-gradient(135deg, transparent 30%, black 65%)",
            }}
          ></div>

          <h3 className="text-white text-[22px] font-semibold mb-2 z-10 relative">
            See How It Works
          </h3>
          <p className="text-white/80 text-sm mb-4 z-10 relative">
            Watch our demo video
          </p>

          <div className="relative w-full h-[160px] rounded-lg overflow-hidden bg-black/30 z-10">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&rel=0"
              title="Demo Video"
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          <p className="text-white/60 text-xs mt-3 z-10 relative">
            Experience the platform in action
          </p>
        </div>
      </div>
    </section>
  );
};

// ========== CONNECT SECTION ==========
const ConnectCampus = () => {
  return (
    <motion.section
      className="
        flex flex-col justify-center items-center
        mt-30 space-y-8 px-4 md:px-[128px] pb-30
        max-md:mt-16 max-md:pb-16 max-md:space-y-6
      "
      initial="hidden"
      whileInView="visible"
    >
      {/* Heading */}
      <motion.h2
        className="
          connect-heading font-inter font-semibold
          text-[32px] md:text-[50px]
          leading-[120%] md:leading-[100%]
          tracking-[-0.06em] text-center text-[#5C4737]
          whitespace-normal md:whitespace-nowrap
          max-md:text-[28px] max-md:px-2 max-md:leading-[120%]
        "
      >
        Bring Mental Wellness to Every Corner of Your Campus.
      </motion.h2>

      {/* Subtext - One Line */}
      <motion.p
        className="
          connect-subtext
          font-inter font-medium
          text-[18px] leading-[100%]
          tracking-[-0.03em]
          text-center text-[#000000A6]
          max-w-[1020px]
          whitespace-nowrap
          max-md:whitespace-normal max-md:text-[16px] max-md:px-4 max-md:leading-normal
        "
      >
        Empower your students and faculty with 24/7 confidential support, real
        counselling, and real results — powered by Mind A Lot.
      </motion.p>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 w-full px-4 md:px-0 justify-center">
        {/* Schedule a Demo Button */}
        <button
          onClick={openModal}
          className="
            group relative
            w-[212px] h-[60px]
            border-[2px] border-[#5B4A3E]
            rounded-[30px]
            flex items-center 
            cursor-pointer
            bg-transparent
            transition-all
            hover:bg-[#5C4737]
            hover:border-transparent
            max-md:w-full max-md:justify-center max-md:px-4
          "
        >
          {/* Text */}
          <span
            className="
              absolute 
              top-[21px] left-[24px]
              font-inter font-medium
              text-[16px] leading-[100%]
              tracking-[-0.03em]
              text-[#5B4A3E]
              whitespace-nowrap
              transition-all
              group-hover:text-white
              max-md:relative max-md:!top-auto max-md:!left-auto max-md:text-center
            "
          >
            Schedule a demo
          </span>

          {/* Circle */}
          <div
            className="
              absolute 
              left-[155px]
              w-[50px] h-[50px]
              rounded-full 
              bg-[#5B4A3E]
              flex items-center justify-center
              transition-all
              group-hover:bg-white
              max-md:absolute max-md:left-auto max-md:right-2
            "
          >
            {/* WHITE ARROW (default) */}
            <Image
              src={whitea}
              alt="arrow"
              width={18}
              height={18}
              className="transition-all group-hover:hidden"
            />

            {/* BLACK ARROW (on hover) */}
            <Image
              src={blacka}
              alt="arrow"
              width={18}
              height={18}
              className="hidden group-hover:block transition-all group-hover:rotate-45"
            />
          </div>
        </button>

        {/* Download University Partnership Kit Button */}
        <Link 
          href="https://drive.google.com/file/d/18979mEF_zw9ba3gkqkPJP_uSX6ePTcIo/view" 
          target="_blank"
          rel="noopener noreferrer"
          className="max-md:w-full"
        >
          <button
            className="
              group relative
              w-[270px] h-[60px]
              border-[2px] border-[#5B4A3E]
              rounded-[30px]
              flex items-center
              cursor-pointer
              bg-transparent
              transition-all
              hover:bg-[#5C4737]
              hover:border-transparent
              max-md:w-full max-md:justify-center max-md:px-4
            "
          >
            {/* Text */}
            <span
              className="
                absolute 
                top-[21px] left-[24px]
                font-inter font-medium
                text-[16px] leading-[100%]
                tracking-[-0.03em]
                text-[#5B4A3E]
                whitespace-nowrap
                transition-all
                group-hover:text-white
                max-md:relative max-md:!top-auto max-md:!left-auto max-md:text-center
              "
            >
              Download University Kit
            </span>

            {/* Circle */}
            <div
              className="
                absolute
                left-[213px]
                w-[50px] h-[50px]
                rounded-full
                bg-[#5B4A3E]
                flex items-center justify-center
                transition-all
                group-hover:bg-white
                max-md:absolute max-md:left-auto max-md:right-2
              "
            >
              {/* WHITE ARROW (default) */}
              <Image
                src={whitea}
                alt="arrow"
                width={18}
                height={18}
                className="transition-all group-hover:hidden"
              />

              {/* BLACK ARROW (on hover) */}
              <Image
                src={blacka}
                alt="arrow"
                width={18}
                height={18}
                className="hidden group-hover:block transition-all group-hover:rotate-45"
              />
            </div>
          </button>
        </Link>
      </div>
    </motion.section>
  );
};

  return (
    <>
      <main className="overflow-hidden bg-[#FDFDFD]">
        <HeroSection />
        <OfferSection />
        <ConnectCampus />
        <Footer/>

        {/* MODAL POPUP */}
        {isModalOpen && (
          <>
            {/* Backdrop with blur effect */}
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm" onClick={closeModal}></div>
            
            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div 
                ref={modalRef}
                className="bg-white rounded-2xl max-w-md w-full max-h-[75vh] overflow-y-auto shadow-2xl relative mt-8"
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

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Official Work Email Address *
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
                        Name of the Institution *
                      </label>
                      <input
                        type="text"
                        name="institutionName"
                        value={formData.institutionName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c4737] focus:border-transparent"
                        placeholder="Enter your institution name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Role / Designation *
                      </label>
                      <select
                        name="roleDesignation"
                        value={formData.roleDesignation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5c4737] focus:border-transparent bg-white"
                        required
                      >
                        <option value="">Select your role</option>
                        <option value="Principal">Principal</option>
                        <option value="Counselor">Counselor</option>
                        <option value="HR">HR</option>
                        <option value="Administrator">Administrator</option>
                        <option value="Faculty">Faculty</option>
                        <option value="Other">Other</option>
                      </select>
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
      </main>
    </>
  );
}