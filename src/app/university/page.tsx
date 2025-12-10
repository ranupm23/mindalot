"use client";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Footer from "@/components/Footer";
//Import Framer Motion
import { motion } from "framer-motion";
import { useState ,useEffect } from "react";
import hero1 from "@/assets/universityPage/hero-1.png";
import of1 from "@/assets/universityPage/24.png";
import holistic from "@/assets/universityPage/holistic.png";
import Risk from "@/assets/universityPage/Risk.png";
import Dashboard from "@/assets/universityPage/dashboard.png";
import Global from "@/assets/universityPage/global.png";
import Custom from "@/assets/universityPage/custom.png";
import Regulator from "@/assets/universityPage/Regulatory.png";
import arrow from "@/assets/arrow.svg";

export default function University() {

  // ========== HERO SECTION ==========



const HeroSection = () => {
  return (
    <motion.section
      className="relative w-full flex items-center justify-center overflow-hidden mx-auto"
      style={{
        maxWidth: '1440px',
        width: '100%',
        height: '866px',
        opacity: 1,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background and Overlays */}
      <div className="absolute inset-0 w-full h-full">
        <Image src={hero1} alt="Hero background" fill className="object-cover opacity-100" priority />
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
      
      <div className="relative z-10 w-full h-full">
        
        {/* 1. H1 Layout */}
        <div
          className="absolute"
          style={{
            width: '704px',
            height: '132px',
            top: '259px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#F6F2EB',
            opacity: 1,
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <h1
              style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                fontWeight: 500,
                fontSize: '60px',
                lineHeight: '66px',
                letterSpacing: '-3%',
                textAlign: 'center',
                color: '#F6F2EB',
                margin: 0,
              }}
            >
              Mental health on campus is no longer optional.
            </h1>
          </div>
        </div>

        {/* 2. First Paragraph */}
        <div 
          className="absolute"
          style={{
            width: '588px',
            height: '50px',
            top: '421px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#F6F2EB',
            opacity: 1,
          }}
        >
          <div className="absolute flex items-center justify-center w-full h-full">
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: '25px',
                letterSpacing: '-3%',
                textAlign: 'center',
                color: '#F6F2EB',
                margin: 0,
              }}
            >
              Students are struggling silently. Depression, anxiety, burnout, and identity crises don't wait for counselling centre hours.
            </p>
          </div>
        </div>

        {/* 3. Second Paragraph */}
        <div 
          className="absolute"
          style={{
            width: '534px',
            height: '50px',
            top: '485px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#F6F2EB',
            opacity: 1,
          }}
        >
          <div className="absolute flex items-center justify-center w-full h-full">
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: '25px',
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

        {/* 4. Third Paragraph */}
        <div 
          className="absolute"
          style={{
            width: '456px',
            height: '25px',
            top: '561px',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#F6F2EB',
            opacity: 1,
          }}
        >
          <div className="absolute flex items-center justify-center w-full h-full">
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 300,
                fontSize: '18px',
                lineHeight: '25px',
                letterSpacing: '-3%',
                textAlign: 'center',
                color: '#F6F2EB',
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              No stigma. No waiting lists. Just real support, in real time.
            </p>
          </div>
        </div>

        {/* ---------------------------------------------
            ⭐ 5. NEW BUTTON LAYOUT (212 × 60)
        ---------------------------------------------- */}
        <div
          className="absolute"
          style={{
            width: '212px',
            height: '60px',
            top: '636px',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: 1,
          }}
        >
     {/* Button */}
     {/* 5. Button Layout Container */}

  <button
    className="w-full h-full flex items-center justify-start relative"
    style={{
      border: '2px solid #F6F2EB',
      borderRadius: '30px',
      background: 'transparent',
    }}
  >
    {/* Button Text */}
    <span
      className="absolute"
      style={{
        width: '125px',
        height: '22px',
        top: '19px',
        left: '20px',
        fontFamily: 'Nunito Sans',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '100%',
        letterSpacing: '-3%',
        color: '#F6F2EB',
      }}
    >
      Schedule a demo
    </span>

    {/* Circle Container */}
    <div
      className="absolute flex items-center justify-center"
      style={{
        width: '50px',
        height: '50px',
        
        left: '155px',
        borderRadius: '50%',
        backgroundColor: '#F6F2EB',
        border: '1px solid #F6F2EBEE',
      }}
    >
      {/* Arrow Icon */}
      <Image
        src={arrow} // <--- replace with your arrow image import
        alt="arrow icon"
        width={20}
        height={20}
       
      />
    </div>
  </button>
</div>
    
        </div>

      
    </motion.section>
  );
};

    // Array of offer data for mapping (improving readability and reusability)
    // const offers = [
    //   {
    //     icon: of1,
    //     iconW: "37.5px",
    //     iconH: "41px",
    //     title: "24/7 Anonymous Access",
    //     description: "Real counselling with no ID or booking needed, ensuring complete privacy and immediate support.",
    //   },
    //   {
    //     icon: holistic,
    //     iconW: "62.5px",
    //     iconH: "56.84px",
    //     title: "Holistic Student Support",
    //     description: "Covering exam stress, homesickness, relationships, identity, focus, and more.",
    //   },
    //   {
    //     icon: Risk,
    //     iconW: "62.47px",
    //     iconH: "62.47px",
    //     title: "High-Risk Case Escalation",
    //     description: "Built-in protocols for high-risk cases with seamless escalation to partner hospitals.",
    //   },
    //   {
    //     icon: Dashboard,
    //     iconW: "62.5px",
    //     iconH: "62.5px",
    //     title: "Institutional Dashboards",
    //     description: "Anonymized, real-time wellness insights to inform campus-wide mental health strategy.",
    //   },
    //   {
    //     icon: Global, // Icon was missing in original code, adding a placeholder here
    //     iconW: "62.5px",
    //     iconH: "62.5px",
    //     title: "Global Accessibility",
    //     description: "Works seamlessly across devices, time zones, and multiple languages to serve all students.",
    //   },
    //   {
    //     icon: Custom,
    //     iconW: "62.5px",
    //     iconH: "62.5px",
    //     title: "Custom Content Drops",
    //     description: "Targeted resources for exam anxiety, burnout, homesickness, and self-harm prevention.",
    //   },
    //   {
    //     icon: Regulator,
    //     iconW: "63.5px",
    //     iconH: "63.5px",
    //     title: "Regulatory Compliance",
    //     description: "Helps your institution stay compliant with UGC/NAAC/AICTE mental health directives.",
    //   },
    // ];

// ========== OFFER SECTION =========
const OfferSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#F6F2EB",
        height: "180vh", // enough height for second row

      }}
    >
      {/* Heading Layout */}
      <div
        style={{
          width: "713px",
          height: "68px",
          position: "absolute",
          top: "916px",
          left: "84px",
          opacity: 1,
        }}
      >
        <h1
          style={{
            fontFamily: "Nunito Sans",
            fontWeight: 700,
            fontSize: "50px",
            lineHeight: "100%",
            letterSpacing: "0%",
            margin: 0,
          }}
        >
          What{" "}
          <span
            style={{
              fontFamily: "Nunito Sans",
              fontWeight: 700,
              fontSize: "50px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            we
          </span>{" "}
          offer to universities ?
        </h1>
      </div>

      {/* First Row (No Changes) */}
      <div
        style={{
          width: "290px",
          height: "350px",
          position: "absolute",
          top: "1030px",
          left: "84px",
          borderRadius: "10px",
          background: "#F8F8F8",
          borderWidth: "1px",
          borderStyle: "solid",
          borderImageSource:
            "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%)",
          borderImageSlice: 1,
        }}
      ></div>
      <div
        style={{
          width: "290px",
          height: "350px",
          position: "absolute",
          top: "1064px",
          left: "386px",
          borderRadius: "10px",
          background: "#F8F8F8",
          borderWidth: "1px",
          borderStyle: "solid",
          borderImageSource:
            "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%)",
          borderImageSlice: 1,
        }}
      ></div>
      <div
        style={{
          width: "290px",
          height: "350px",
          position: "absolute",
          top: "1094px",
          left: "688px",
          borderRadius: "10px",
          background: "#F8F8F8",
          borderWidth: "1px",
          borderStyle: "solid",
          borderImageSource:
            "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%)",
          borderImageSlice: 1,
        }}
      ></div>
      <div
        style={{
          width: "290px",
          height: "350px",
          position: "absolute",
          top: "1124px",
          left: "990px",
          borderRadius: "10px",
          background: "#F8F8F8",
          borderWidth: "1px",
          borderStyle: "solid",
          borderImageSource:
            "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%)",
          borderImageSlice: 1,
        }}
      ></div>

      {/* Second Row - ADJUSTED LEFT POSITIONS */}

      {/* First Card (left: 84px - NO CHANGE) */}
      <div
        style={{
          width: "290px",
          height: "350px",
          position: "absolute",
          top: "1496px",
          left: "84px",
          borderRadius: "10px",
          background: "#F8F8F8",
          borderWidth: "1px",
          borderStyle: "solid",
          borderImageSource:
            "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%)",
          borderImageSlice: 1,
        }}
      ></div>

      {/* Second Card (left: 406px -> 384px) - REDUCED GAP */}
      <div
        style={{
          width: "290px",
          height: "350px",
          position: "absolute",
          top: "1526px",
          left: "384px", // Changed from 406px
          borderRadius: "10px",
          background: "#F8F8F8",
          borderWidth: "1px",
          borderStyle: "solid",
          borderImageSource:
            "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%)",
          borderImageSlice: 1,
        }}
      ></div>

      {/* Third Card (left: 728px -> 684px) - REDUCED GAP */}
      <div
        style={{
          width: "290px",
          height: "350px",
          position: "absolute",
          top: "1556px",
          left: "684px", // Changed from 728px
          borderRadius: "10px",
          background: "#F8F8F8",
          borderWidth: "1px",
          borderStyle: "solid",
          borderImageSource:
            "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%)",
          borderImageSlice: 1,
        }}
      ></div>

      {/* Fourth Card (left: 1050px -> 984px) - REDUCED GAP */}
      <div
        style={{
          width: "290px",
          height: "350px",
          position: "absolute",
          top: "1586px",
          left: "984px", // Changed from 1050px
          borderRadius: "10px",
          background: "#5C4737",
          opacity: 1,
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        {/* Inner Text */}
        <div
          style={{
            width: "227px",
            height: "140px",
            position: "absolute",
            top: "20px",
            left: "20px",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "35px",
            letterSpacing: "-3%",
            color: "#FFFFFF",
          }}
        >
          Start building a mentally healthy campus - remove other lines and the download balloon
        </div>

        {/* Button */}
        <button
          style={{
            width: "262px",
            height: "60px",
            position: "absolute",
            top: "242px",
            left: "20px",
            borderRadius: "30px",
            background: "#967B6A",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          Download University Kit
          {/* White Circle */}
              <div
              className="
                absolute top-[5px] right-[6px]   /* <-- Perfect like reference */
                w-[50px] h-[50px] bg-white
                rounded-full flex items-center justify-center
                transition-all
              "
            >
              <Image
                src={arrow}
                alt="arrow"
                width={18}
                height={18}
                className="transition-all group-hover:rotate-45"
              />
            </div>
        </button>
      </div>
    </section>
  );
};







  // ========== CONNECT SECTION ==========
  const ConnectCampus = () => {
    return (
      // 💡 Wrap secthsla(38, 38%, 94%, 1.00)h motion.section
      <motion.section
        className="flex flex-col justify-center items-center mt-30 space-y-8 px-4 md:px-[128px] pb-30"
        initial="hidden"
        whileInView="visible" // Animate when the section comes into view
      >
        {/* Heading */}
        <motion.h2
          className="connect-heading font-inter font-semibold text-[32px] md:text-[50px] leading-[120%] md:leading-[100%] tracking-[-0.06em] text-center text-[#5C4737] whitespace-normal md:whitespace-nowrap"
        >
          Bring Mental Wellness to Every Corner of Your Campus.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="connect-subtext font-inter font-medium text-[18px] leading-[100%] tracking-[-0.03em] text-center text-[#000000A6] max-w-[1020px]"
       
        >
          Empower your students and faculty with 24/7 confidential support, real
          counselling, and real results — powered by Mind A Lot.
        </motion.p>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 w-full px-4 md:px-0 justify-center">

  {/* Schedule a Demo Button */}
  <Link href="/contact">
    <button
      className="
        group relative w-full md:w-[225px] h-[60px] 
        bg-[#967B6A] hover:bg-[#BE9B84]
        rounded-[43px] flex items-center justify-start 
        pl-[24px]
        text-white font-inter font-medium text-[16px] tracking-[-0.03em]
        transition-all cursor-pointer
      "
    >
      Schedule a Demo

      <div
        className="
          absolute top-[5px] right-[6px]   /* <-- Perfect like reference */
          w-[50px] h-[50px] bg-white
          rounded-full flex items-center justify-center
          transition-all
        "
      >
        <Image
          src={arrow}
          alt="arrow"
          width={18}
          height={18}
          className="transition-all group-hover:rotate-45"
        />
      </div>
    </button>
  </Link>


  {/* Download University Partnership Kit Button */}
  <Link href="/resource">
    <button
      className="
        group relative w-full md:w-[360px] h-[60px] 
        bg-[#967B6A] hover:bg-[#BE9B84]
        rounded-[43px] flex items-center justify-start 
        pl-[24px]
        text-white font-inter font-medium text-[16px] tracking-[-0.03em]
        transition-all cursor-pointer overflow-hidden
      "
    >
      <span className="whitespace-nowrap truncate">
        Download University Partnership Kit
      </span>

      <div
        className="
          absolute top-[5px] right-[6px]  /* <-- Reference spacing */
          w-[50px] h-[50px] bg-white
          rounded-full flex items-center justify-center
          transition-all
        "
      >
        <Image
          src={arrow}
          alt="arrow"
          width={18}
          height={18}
          className="transition-all group-hover:rotate-45"
        />
      </div>
    </button>
  </Link>

</div>

      </motion.section>
    );
  };

 
  // const Footer = () => {
  //   return (
  //     <footer className="bg-[#E4D6CD] w-full flex flex-col justify-start items-start mt-[85px] py-8 relative">
  //       <div className="w-full px-[30px] sm:px-[50px] md:px-[70px] lg:px-[86px]">
  //         {/* ===== Main Footer Row (No motion added here as it's typically static) ===== */}
  //         <div className="flex flex-col lg:flex-row justify-start lg:items-start items-center w-full gap-[40px] lg:gap-[0px]">
  //           {/* ===== Left Section ===== */}
  //           <div className="flex flex-col text-center lg:text-left mt-[13px]">
  //             <h2 className="font-inter font-bold text-[28px] md:text-[35px] leading-[100%] tracking-[0.05em] text-[#5C4737] mb-4">
  //               MIND A LOT
  //             </h2>
  //             <p className="font-inter font-normal text-[14px] md:text-[16px] leading-[28px] tracking-[-0.03em] text-[#755840] max-w-[450px] mx-auto lg:mx-0">
  //               Anonymous support that listens, nudges ,<br />
  //               and grow with you , When your mind feels too much, we're just a
  //               tap away.
  //             </p>
  //           </div>

  //           {/* ===== Company Section ===== */}
  //           <div className="lg:ml-[152px] mt-[20px] lg:mt-[10px] flex flex-col text-center lg:text-left space-y-[10px] md:space-y-[16px]">
  //             <h3 className="font-inter font-medium text-[18px] md:text-[20px] text-[#5C4737]">
  //               Company
  //             </h3>
  //             <Link href="/features" className={footerLink}>
  //               Features
  //             </Link>
  //             <Link href="/contact" className={footerLink}>
  //               Contact Us
  //             </Link>
  //             <Link href="/resources" className={footerLink}>
  //               Resources
  //             </Link>
  //           </div>

  //           {/* ===== Contact Section ===== */}
  //           <div className="lg:ml-[140px] mt-[20px] lg:mt-[10px] flex flex-col text-center lg:text-left space-y-[12px] md:space-y-[16px]">
  //             <h3 className="font-inter font-medium text-[18px] md:text-[20px] text-[#5C4737]">
  //               Contact
  //             </h3>
  //             <div className="flex justify-center lg:justify-start items-center gap-[5px]">
  //               <Mail size={16} className="text-[#755840]" />
  //               <span className={footerText}>hello@mindalot.com</span>
  //             </div>
  //             <div className="flex justify-center lg:justify-start items-center gap-[5px]">
  //               <Phone size={16} className="text-[#755840]" />
  //               <span className={footerText}>+91-96062-58596</span>
  //             </div>
  //             <div className="flex justify-center lg:justify-start items-center gap-[5px]">
  //               <MapPin size={16} className="text-[#755840] min-w-[16px] mt-[-4px]" />
  //               <p className={`${footerText} max-w-[323px]`}>
  //                 #122K, 1st block, 14th cross, 19th 'B' Main, Rajajinagar,
  //                 Bengaluru - 560010
  //               </p>
  //             </div>
  //           </div>

  //           {/* ===== Follow Us Section ===== */}
  //           <div className="lg:ml-[140px] mt-[20px] lg:mt-[10px] flex flex-col items-center lg:items-start">
  //             <h3 className="font-inter font-medium text-[18px] md:text-[20px] text-[#5C4737] mb-[16px] whitespace-nowrap">
  //               Follow us on
  //             </h3>
  //             <div className="flex items-center justify-center lg:justify-start gap-[15px]">
  //               <Link href="https://instagram.com" target="_blank">
  //                 <Instagram size={24} className={iconHover} />
  //               </Link>
  //               <Link href="https://linkedin.com" target="_blank">
  //                 <FaLinkedin size={24} className={iconHover} />
  //               </Link>
  //             </div>
  //           </div>
  //         </div>

  //         {/* ===== Divider Line ===== */}
  //         <div className="w-full px-[30px] sm:px-[50px] md:px-[70px] lg:px-[86px]">
  //           <div className="border-t border-[#00000080] mt-[60px]" />
  //         </div>

  //         {/* ===== Terms + Privacy ===== */}
  //         <div className="w-full px-[30px] sm:px-[50px] md:px-[70px] lg:px-[86px]">
  //           <div
  //             className="flex items-center justify-center lg:justify-end gap-[40px] mt-[30px] pb-4"
  //           >
  //             {/* ===== Terms + Dot ===== */}
  //             <div className="flex items-center gap-[6px]">
  //               <div className="w-[5px] h-[5px] rounded-full bg-[#000000]" />
  //               <Link
  //                 href="/terms"
  //                 className="font-inter font-normal text-[16px] leading-[100%] tracking-[-0.03em] text-[#755840] hover:text-[#5C4737] transition-colors"
  //               >
  //                 Terms & Conditions
  //               </Link>
  //             </div>

  //             {/* ===== Privacy + Dot ===== */}
  //             <div className="flex items-center gap-[6px]">
  //               <div className="w-[5px] h-[5px] rounded-full bg-[#000000]" />
  //               <Link
  //                 href="/privacy"
  //                 className="font-inter font-normal text-[16px] leading-[100%] tracking-[-0.03em] text-[#755840] hover:text-[#5C4737] transition-colors"
  //               >
  //                 Privacy Policy
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </footer>
  //   );
  // };

  // // Tailwind helper classes
  // const footerLink =
  //   "font-inter font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[-0.03em] text-[#755840] hover:text-[#5C4737] transition-colors";
  // const footerText =
  //   "font-inter font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[-0.03em] text-[#755840]";
  // const iconHover =
  //   "text-[#5C4737] hover:text-[#755840] transition-colors cursor-pointer";

  // ✅ ALL COMPONENTS
  return (
    <>
      <main className="overflow-hidden bg-[#FDFDFD]">
        <HeroSection />
        <OfferSection />
        <ConnectCampus />
        <Footer/>
      </main>
    </>
  );
}
