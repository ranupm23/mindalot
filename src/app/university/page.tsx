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
export default function University() {

// ========== HERO SECTION ==========
const HeroSection = () => {
  return (
    <motion.section
      className="relative w-full flex items-center justify-center overflow-hidden mx-auto min-h-[90vh] md:h-[866px]"
      style={{
        maxWidth: '1440px',
        width: '100%',
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
      
      <div className="relative z-10 w-full h-full px-4 md:px-0 flex flex-col items-center justify-center py-12 md:py-0 md:block">
        
        {/* 1. H1 Layout */}
        <div
          className="w-[90%] md:w-[704px] mb-6 md:mb-0 mt-16 md:mt-0 md:absolute md:top-[259px] md:left-1/2 md:-translate-x-1/2"
          style={{
            color: '#F6F2EB',
            opacity: 1,
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <h1
              className="text-[32px] sm:text-[30px] md:text-[50px] lg:text-[60px] leading-[38px] sm:leading-[46px] md:leading-[55px] lg:leading-[66px] text-center font-medium"
              style={{
                fontFamily: 'Helvetica Neue, Arial, sans-serif',
                letterSpacing: '-3%',
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
          className="w-[90%] md:w-[588px] mt-4 md:mt-0 mb-3 md:mb-0 md:absolute md:top-[421px] md:left-1/2 md:-translate-x-1/2"
          style={{
            color: '#F6F2EB',
            opacity: 1,
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <p
              className="text-[16px] sm:text-[17px] md:text-[18px] leading-[22px] sm:leading-[23px] md:leading-[25px] text-center font-light"
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

        {/* 3. Second Paragraph */}
        <div 
          className="w-[90%] md:w-[534px] mt-3 md:mt-0 mb-3 md:mb-0 md:absolute md:top-[485px] md:left-1/2 md:-translate-x-1/2"
          style={{
            color: '#F6F2EB',
            opacity: 1,
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <p
              className="text-[16px] sm:text-[17px] md:text-[18px] leading-[22px] sm:leading-[23px] md:leading-[25px] text-center font-light"
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

        {/* 4. Third Paragraph */}
        <div 
          className="w-[90%] md:w-[456px] mt-3 md:mt-0 mb-6 md:mb-0 md:absolute md:top-[561px] md:left-1/2 md:-translate-x-1/2"
          style={{
            color: '#F6F2EB',
            opacity: 1,
          }}
        >
          <div className="flex items-center justify-center w-full h-full">
            <p
              className="text-[16px] sm:text-[17px] md:text-[18px] leading-[22px] sm:leading-[23px] md:leading-[25px] text-center font-light whitespace-normal md:whitespace-nowrap"
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

        {/* ---------------------------------------------
            ⭐ 5. NEW BUTTON LAYOUT (212 × 60)
        ---------------------------------------------- */}
        <div
          className="w-[180px] md:w-[212px] h-[50px] md:h-[60px] md:absolute md:top-[636px] md:left-1/2 md:-translate-x-1/2"
          style={{
            opacity: 1,
          }}
        >
     {/* Button */}
     {/* 5. Button Layout Container */}
<button
  onMouseEnter={(e) => {
    e.currentTarget.style.background = "#5C4737";
    e.currentTarget.style.border = "2px solid transparent"; // remove border
    const img = e.currentTarget.querySelector("img");
    if (img) img.style.transform = "rotate(45deg)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.border = "2px solid #F6F2EB"; // reset border
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
        transition: "0.3s", // smooth rotation
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
  return (
    <section
      // Desktop Height 180vh. On Mobile: height auto (!important to override inline style), padding on top/bottom
      // **Changed to max-md:!h-auto to force height to auto on mobile**
      className="max-md:py-12 max-md:!h-auto"
      style={{
        backgroundColor: "#F6F2EB",
        height: "180vh", // Desktop fixed height
      }}
    >
    

  
      {/* Heading Layout */}
      <div
  // Desktop styles for absolute positioning
  style={{
    width: "713px",
    height: "68px",
    position: "absolute",
    top: "916px",
    left: "84px",
    opacity: 1,
  }}
  // Mobile styles: relative positioning, full width, padding, margin-bottom
  className="max-md:relative max-md:w-full max-md:px-4 max-md:top-auto max-md:left-auto max-md:mb-8 max-md:!static"
>
  <h1
    className="
      font-nunito font-bold 
      text-[50px] leading-[100%] 
      break-words 
      max-md:!text-[32px] max-md:leading-[120%] 
      max-sm:!text-[28px] max-[420px]:!text-[24px]
    "
    style={{
      fontFamily: "Nunito Sans",
      fontWeight: 700,
      fontSize: "50px", // Desktop stays the same
      lineHeight: "100%",
      letterSpacing: "0%",
      margin: 0,
    }}
  >
    What{" "}
    <span
      className="
        max-md:!text-[32px] 
        max-sm:!text-[28px] 
        max-[420px]:!text-[24px]
      "
      style={{
        fontFamily: "Nunito Sans",
        fontWeight: 700,
        fontSize: "50px", // Desktop font
        lineHeight: "100%",
        letterSpacing: "0%",
      }}
    >
      we
    </span>{" "}
    offer to universities?
  </h1>
</div>






      {/* Cards Container - Mobile: Stacked, full width, with gap */}
      <div className="max-md:flex max-md:flex-col max-md:gap-6">
        {/* --- Card 1 --- */}
        <div
          // Desktop styles for absolute positioning and fixed size
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
          // Mobile styles: Centered (mx-auto), fixed max-width (max-w-xs or 320px), auto height, padding.
          className="max-md:relative max-md:!static max-md:w-full max-md:max-w-xs max-md:mx-auto max-md:h-auto max-md:p-5 max-md:top-auto max-md:left-auto max-md:!w-auto max-md:!h-auto"
        >
          {/* Inner Image Box */}
          <div
            // Desktop styles for absolute positioning
            style={{
              width: "75px",
              height: "75px",
              position: "absolute",
              top: "20px",
              left: "20px",
            }}
            // Mobile styles: relative, smaller size, margin-bottom.
            className="max-md:relative max-md:w-[60px] max-md:h-[60px] max-md:mb-4 max-md:top-auto max-md:left-auto max-md:!static"
          >
            <Image
              src={c1} // replace with actual import
              alt="icon"
              // Desktop image size and position
              style={{
                width: "56.25px",
                height: "62.4609375px",
                position: "absolute",
                top: "6.25px",
                left: "9.38px",
              }}
              // Mobile image size and position.
              className="max-md:relative max-md:w-[45px] max-md:h-[50px] max-md:top-auto max-md:left-auto max-md:!static"
            />
          </div>

          {/* Title */}
          <p
            // Desktop styles for absolute positioning
            style={{
              width: "195px",
              height: "58px",
              position: "absolute",
              top: "139px",
              left: "20px",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-0.03em",
              color: "#5C4737",
            }}
            // Mobile styles: relative, full width, auto height, margin-bottom, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:mb-3 max-md:top-auto max-md:left-auto max-md:text-[20px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            24/7 Anonymous Access
          </p>

          {/* Description */}
          <p
            // Desktop styles for absolute positioning
            style={{
              width: "262px",
              height: "75px",
              position: "absolute",
              top: "207px",
              left: "20px",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "25px",
              letterSpacing: "-0.03em",
              color: "#6D6D6F",
            }}
            // Mobile styles: relative, full width, auto height, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:top-auto max-md:left-auto max-md:text-[14px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            Real counselling, round the clock — with complete privacy and
            immediate support, whenever and wherever you need it.
          </p>
        </div>

        {/* --- Card 2 --- */}
        <div
          // Desktop styles for absolute positioning and fixed size
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
          // Mobile styles: Centered (mx-auto), fixed max-width (max-w-xs or 320px), auto height, padding.
          className="max-md:relative max-md:!static max-md:w-full max-md:max-w-xs max-md:mx-auto max-md:h-auto max-md:p-5 max-md:top-auto max-md:left-auto max-md:!w-auto max-md:!h-auto"
        >
          {/* Inner Image Box */}
          <div
            // Desktop styles for absolute positioning
            style={{
              width: "75px",
              height: "75px",
              position: "absolute",
              top: "20px",
              left: "20px",
            }}
            // Mobile styles: relative, smaller size, margin-bottom.
            className="max-md:relative max-md:w-[60px] max-md:h-[60px] max-md:mb-4 max-md:top-auto max-md:left-auto max-md:!static"
          >
            {/* Image */}
            <Image
              src={holistic}
              alt="icon"
              // Desktop image size and position
              style={{
                width: "62.5px",
                height: "59.3425px",
                position: "absolute",
                top: "6px",
                left: "6.25px",
              }}
              // Mobile styles.
              className="max-md:relative max-md:w-[50px] max-md:h-[50px] max-md:top-auto max-md:left-auto max-md:!static"
            />
          </div>

          {/* Title */}
          <p
            // Desktop styles for absolute positioning
            style={{
              width: "196px",
              height: "58px",
              position: "absolute",
              top: "127px",
              left: "20px",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-0.03em",
              color: "#5C4737",
            }}
            // Mobile styles: relative, full width, auto height, margin-bottom, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:mb-3 max-md:top-auto max-md:left-auto max-md:text-[20px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            Holistic Student Support
          </p>

          {/* Description */}
          <p
            // Desktop styles for absolute positioning
            style={{
              width: "262px",
              height: "100px",
              position: "absolute",
              top: "195px",
              left: "20px",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "25px",
              letterSpacing: "-0.03em",
              color: "#6D6D6F",
            }}
            // Mobile styles: relative, full width, auto height, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:top-auto max-md:left-auto max-md:text-[14px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            Covering exam stress, relationships, identity, focus, and more —
            because whatever you’re going through, you don’t have to face it
            alone.
          </p>
        </div>

        {/* --- Card 3 --- */}
        <div
          // Desktop styles for absolute positioning and fixed size
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
          // Mobile styles: Centered (mx-auto), fixed max-width (max-w-xs or 320px), auto height, padding.
          className="max-md:relative max-md:!static max-md:w-full max-md:max-w-xs max-md:mx-auto max-md:h-auto max-md:p-5 max-md:top-auto max-md:left-auto max-md:!w-auto max-md:!h-auto"
        >
          {/* Inner Image Box */}
          <div
            // Desktop styles for absolute positioning
            style={{
              width: "75px",
              height: "75px",
              position: "absolute",
              top: "20px",
              left: "20px",
            }}
            // Mobile styles: relative, smaller size, margin-bottom.
            className="max-md:relative max-md:w-[60px] max-md:h-[60px] max-md:mb-4 max-md:top-auto max-md:left-auto max-md:!static"
          >
            {/* Image */}
            <Image
              src={Risk} // <-- replace with your actual image import
              alt="icon"
              // Desktop image size and position
              style={{
                width: "62.4688px",
                height: "62.4688px",
                position: "absolute",
                top: "6.27px",
                left: "6.26px",
              }}
              // Mobile image size and position.
              className="max-md:relative max-md:w-[50px] max-md:h-[50px] max-md:top-auto max-md:left-auto max-md:!static"
            />
          </div>

          {/* Title */}
          <p
            // Desktop styles for absolute positioning
            style={{
              width: "197px",
              height: "58px",
              position: "absolute",
              top: "121px",
              left: "20px",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-0.03em",
              color: "#5C4737",
            }}
            // Mobile styles: relative, full width, auto height, margin-bottom, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:mb-3 max-md:top-auto max-md:left-auto max-md:text-[20px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            High-Risk Case Escalation
          </p>

          {/* Description */}
          <p
            // Desktop styles for absolute positioning
            style={{
              width: "262px",
              height: "100px",
              position: "absolute",
              top: "189px",
              left: "20px",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "25px",
              letterSpacing: "-0.03em",
              color: "#6D6D6F",
            }}
            // Mobile styles: relative, full width, auto height, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:top-auto max-md:left-auto max-md:text-[14px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            Built-in protocols for high-risk cases with seamless escalation to
            partner hospitals, guaranteeing safety, continuity, and quality of
            care.
          </p>
        </div>

        {/* --- Card 4 --- */}
        <div
          // Desktop styles for absolute positioning and fixed size
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
          // Mobile styles: Centered (mx-auto), fixed max-width (max-w-xs or 320px), auto height, padding.
          className="max-md:relative max-md:!static max-md:w-full max-md:max-w-xs max-md:mx-auto max-md:h-auto max-md:p-5 max-md:top-auto max-md:left-auto max-md:!w-auto max-md:!h-auto"
        >
          {/* Inner Image Box */}
          <div
            // Desktop styles for absolute positioning
            style={{
              width: "75px",
              height: "75px",
              position: "absolute",
              top: "20px",
              left: "20px",
            }}
            // Mobile styles: relative, smaller size, margin-bottom.
            className="max-md:relative max-md:w-[60px] max-md:h-[60px] max-md:mb-4 max-md:top-auto max-md:left-auto max-md:!static"
          >
            {/* Image */}
            <Image
              src={Dashboard} // <-- replace with your actual image import
              alt="icon"
              // Desktop image size and position
              style={{
                width: "62.5px",
                height: "62.5px",
                position: "absolute",
                top: "6.25px",
                left: "6.25px",
              }}
              // Mobile image size and position.
              className="max-md:relative max-md:w-[50px] max-md:h-[50px] max-md:top-auto max-md:left-auto max-md:!static"
            />
          </div>

          {/* Title */}
          <p
            // Desktop styles for absolute positioning
            style={{
              width: "198px",
              height: "58px",
              position: "absolute",
              top: "119px",
              left: "20px",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-0.03em",
              color: "#5C4737",
            }}
            // Mobile styles: relative, full width, auto height, margin-bottom, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:mb-3 max-md:top-auto max-md:left-auto max-md:text-[20px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            Institutional Dashboards
          </p>

          {/* Description */}
          <p
            // Desktop styles for absolute positioning
            style={{
              width: "262px",
              height: "100px",
              position: "absolute",
              top: "187px",
              left: "20px",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "25px",
              letterSpacing: "-0.03em",
              color: "#6D6D6F",
            }}
            // Mobile styles: relative, full width, auto height, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:top-auto max-md:left-auto max-md:text-[14px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            Anonymized, real-time wellness insights to inform campus-wide mental
            health status, helping institutions identify trends and support
            students proactively.
          </p>
        </div>

        {/* --- Card 5 (Second Row First) --- */}
        <div
          // Desktop styles for absolute positioning and fixed size
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
          // Mobile styles: Centered (mx-auto), fixed max-width (max-w-xs or 320px), auto height, padding.
          className="max-md:relative max-md:!static max-md:w-full max-md:max-w-xs max-md:mx-auto max-md:h-auto max-md:p-5 max-md:top-auto max-md:left-auto max-md:!w-auto max-md:!h-auto"
        >
          {/* Inner Image Box */}
          <div
            // Desktop styles for absolute positioning
            style={{
              width: "75px",
              height: "75px",
              position: "absolute",
              top: "20px",
              left: "20px",
              opacity: 1,
              transform: "rotate(0deg)",
            }}
            // Mobile styles: relative, smaller size, margin-bottom.
            className="max-md:relative max-md:w-[60px] max-md:h-[60px] max-md:mb-4 max-md:top-auto max-md:left-auto max-md:!static"
          >
            {/* Direct Image inside — NOT another layout */}
            <Image
              src={Global}
              alt="icon"
              width={62.5}
              height={62.5}
              // Desktop image size and position
              style={{
                position: "absolute",
                top: "6.25px",
                left: "6.25px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
              // Mobile image size and position.
              className="max-md:relative max-md:w-[50px] max-md:h-[50px] max-md:top-auto max-md:left-auto max-md:!static"
            />
          </div>
          {/* Title */}
          <div
            // Desktop styles for absolute positioning
            style={{
              width: "195px",
              height: "58px",
              position: "absolute",
              top: "124px",
              left: "20px",
              opacity: 1,
              transform: "rotate(0deg)",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-3%",
              color: "#5C4737",
            }}
            // Mobile styles: relative, full width, auto height, margin-bottom, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:mb-3 max-md:top-auto max-md:left-auto max-md:text-[20px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            Global Accessibility
          </div>

          {/* Description */}
          <div
            // Desktop styles for absolute positioning
            style={{
              width: "262px",
              height: "100px",
              position: "absolute",
              top: "192px",
              left: "20px",
              opacity: 1,
              transform: "rotate(0deg)",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "25px",
              letterSpacing: "-3%",
              color: "#6D6D6F",
            }}
            // Mobile styles: relative, full width, auto height, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:top-auto max-md:left-auto max-md:text-[14px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            Works seamlessly across devices, time zones, and multiple languages
            to serve all students — because help should always be within reach.
          </div>
        </div>

        {/* --- Card 6 (Second Row Second) --- */}
        <div
          // Desktop styles for absolute positioning and fixed size
          style={{
            width: "290px",
            height: "350px",
            position: "absolute",
            top: "1526px",
            left: "384px",
            borderRadius: "10px",
            background: "#F8F8F8",
            borderWidth: "1px",
            borderStyle: "solid",
            borderImageSource:
              "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%)",
            borderImageSlice: 1,
          }}
          // Mobile styles: Centered (mx-auto), fixed max-width (max-w-xs or 320px), auto height, padding.
          className="max-md:relative max-md:!static max-md:w-full max-md:max-w-xs max-md:mx-auto max-md:h-auto max-md:p-5 max-md:top-auto max-md:left-auto max-md:!w-auto max-md:!h-auto"
        >
          {/* Inner Image Box */}
          <div
            // Desktop styles for absolute positioning
            style={{
              width: "75px",
              height: "75px",
              position: "absolute",
              top: "20px",
              left: "20px",
              opacity: 1,
            }}
            // Mobile styles: relative, smaller size, margin-bottom.
            className="max-md:relative max-md:w-[60px] max-md:h-[60px] max-md:mb-4 max-md:top-auto max-md:left-auto max-md:!static"
          >
            {/* Direct Image Inside */}
            <Image
              src={Custom} // replace with actual image variable
              alt="icon"
              width={62.5}
              height={62.5}
              // Desktop image size and position
              style={{
                position: "absolute",
                top: "6.25px",
                left: "6.25px",
                opacity: 1,
                transform: "rotate(0deg)",
              }}
              // Mobile image size and position.
              className="max-md:relative max-md:w-[50px] max-md:h-[50px] max-md:top-auto max-md:left-auto max-md:!static"
            />
          </div>

          {/* Title */}
          <div
            // Desktop styles for absolute positioning
            style={{
              width: "196px",
              height: "58px",
              position: "absolute",
              top: "120px",
              left: "20px",
              opacity: 1,
              transform: "rotate(0deg)",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-3%",
              color: "#5C4737",
            }}
            // Mobile styles: relative, full width, auto height, margin-bottom, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:mb-3 max-md:top-auto max-md:left-auto max-md:text-[20px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            Custom Content Drops
          </div>

          {/* Description */}
          <div
            // Desktop styles for absolute positioning
            style={{
              width: "262px",
              height: "100px",
              position: "absolute",
              top: "188px",
              left: "20px",
              opacity: 1,
              transform: "rotate(0deg)",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "25px",
              letterSpacing: "-3%",
              color: "#6D6D6F",
            }}
            // Mobile styles: relative, full width, auto height, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:top-auto max-md:left-auto max-md:text-[14px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            Targeted resources for exam anxiety, homesickness, burnout, and
            self-harm prevention — fostering a safer, more supportive campus
            environment.
          </div>
        </div>

        {/* --- Card 7 (Second Row Third) --- */}
        <div
          // Desktop styles for absolute positioning and fixed size
          style={{
            width: "290px",
            height: "350px",
            position: "absolute",
            top: "1556px",
            left: "684px",
            borderRadius: "10px",
            background: "#F8F8F8",
            borderWidth: "1px",
            borderStyle: "solid",
            borderImageSource:
              "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%)",
            borderImageSlice: 1,
          }}
          // Mobile styles: Centered (mx-auto), fixed max-width (max-w-xs or 320px), auto height, padding.
          className="max-md:relative max-md:!static max-md:w-full max-md:max-w-xs max-md:mx-auto max-md:h-auto max-md:p-5 max-md:top-auto max-md:left-auto max-md:!w-auto max-md:!h-auto"
        >
          {/* Inner Image Box */}
          <div
            // Desktop styles for absolute positioning
            style={{
              width: "75px",
              height: "75px",
              position: "absolute",
              top: "20px",
              left: "20px",
              opacity: 1,
              transform: "rotate(0deg)",
            }}
            // Mobile styles: relative, smaller size, margin-bottom.
            className="max-md:relative max-md:w-[60px] max-md:h-[60px] max-md:mb-4 max-md:top-auto max-md:left-auto max-md:!static"
          >
            {/* Direct Image inside */}
            <Image
              src={Regulator} // replace with actual image variable
              alt="icon"
              width={56.28125}
              height={58.203125}
              // Desktop image size and position
              style={{
                position: "absolute",
                top: "7.42px",
                left: "6.25px",
                opacity: 1,
                transform: "rotate(0deg)",
                objectFit: "contain",
              }}
              // Mobile image size and position.
              className="max-md:relative max-md:w-[45px] max-md:h-[47px] max-md:top-auto max-md:left-auto max-md:!static"
            />
          </div>

          {/* Title */}
          <div
            // Desktop styles for absolute positioning
            style={{
              width: "197px",
              height: "58px",
              position: "absolute",
              top: "120px",
              left: "20px",
              opacity: 1,
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "100%",
              letterSpacing: "-3%",
              color: "#5C4737",
              transform: "rotate(0deg)",
            }}
            // Mobile styles: relative, full width, auto height, margin-bottom, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:mb-3 max-md:top-auto max-md:left-auto max-md:text-[20px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            Regulatory Compliance
          </div>

          {/* Description */}
          <div
            // Desktop styles for absolute positioning
            style={{
              width: "262px",
              height: "100px",
              position: "absolute",
              top: "188px",
              left: "20px",
              opacity: 1,
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "25px",
              letterSpacing: "-3%",
              color: "#6D6D6F",
              transform: "rotate(0deg)",
            }}
            // Mobile styles: relative, full width, auto height, font size.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:top-auto max-md:left-auto max-md:text-[14px] max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            Helps your institution stay compliant with UGC/NAAC/AICTE mental
            health directives — turning compliance into meaningful student
            well-being action.
          </div>
        </div>

        {/* --- Card 8 (Last Card, Call to Action) --- */}
         {/* --- Card 8 (Last Card, Call to Action) --- */}
        {/* --- Card 8 (Last Card, Call to Action) --- */}
        {/* --- Card 8 (Last Card, Call to Action) --- */}
        <div
          // Desktop styles for absolute positioning and fixed size (UNTOCUHED)
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
          // Mobile styles: Flex structure to position button at the bottom
          className="max-md:relative max-md:!static max-md:w-full max-md:max-w-xs max-md:mx-auto max-md:h-auto max-md:min-h-[250px] max-md:p-5 max-md:top-auto max-md:left-auto max-md:!w-auto max-md:!h-auto max-md:flex max-md:flex-col max-md:justify-between"
        >
          {/* Inner Text - Content for flex item 1 (UNTOCUHED) */}
          <div
            // Desktop styles for absolute positioning and fixed width/height (UNTOCUHED)
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
            // Mobile styles: relative, full width, auto height, padding reset.
            className="max-md:relative max-md:w-full max-md:h-auto max-md:top-auto max-md:left-auto max-md:p-0 max-md:!static max-md:!w-auto max-md:!h-auto"
          >
            Start building a mentally healthy campus - remove other lines and the
            download balloon
          </div>

          {/* Button - Content for flex item 2 */}
          <button
            // Desktop styles (UNTOCUHED)
            style={{
              width: "262px",
              height: "60px",
              position: "absolute",
              top: "242px",
              left: "20px",
              opacity: 1,
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
              paddingRight: "20px", // Desktop padding right
              transform: "rotate(0deg)",
            }}
            // Mobile styles:
            // max-md:w-[262px] (Desktop width) and max-md:mx-auto (Centered).
            // **MODIFIED:** Added max-md:!px-4 (reduced horizontal padding) and max-md:text-sm (reduced font size)
            className="max-md:relative max-md:!static max-md:w-[262px] max-md:mx-auto max-md:h-[60px] max-md:top-auto max-md:left-auto max-md:mt-auto max-md:mb-0 max-md:!h-auto max-md:!px-4 max-md:text-sm"
          >
            Download University Kit
            {/* White Circle */}
            <div
              className="
                  absolute top-[5px] right-[6px]
                  w-[50px] h-[50px] bg-white
                  rounded-full flex items-center justify-center
                  transition-all
                  /* MODIFIED: Increased negative right margin to simulate better overhang with reduced mobile padding */
                  max-md:relative max-md:top-auto max-md:right-auto 
                  max-md:!static max-md:shrink-0 max-md:-mr-3
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
      </div>
      {/* End Cards Container */}
    </section>
  );
};
// ========== CONNECT SECTION ==========
const ConnectCampus = () => {
  return (
    // 💡 Wrapper: Adjusted padding/margin for mobile (max-md:mt-16, max-md:pb-16)
    <motion.section
      className="
        flex flex-col justify-center items-center
        mt-30 space-y-8 px-4 md:px-[128px] pb-30
        max-md:mt-16 max-md:pb-16 max-md:space-y-6
      "
      initial="hidden"
      whileInView="visible" // Animate when the section comes into view
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
{/* Buttons Section: Mobile: Stack (flex-col), full width */}
<div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 w-full px-4 md:px-0 justify-center">

  {/* Schedule a Demo Button */}
  <Link href="/contact" className="max-md:w-full">
    <button
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
  </Link>

  {/* Download University Partnership Kit Button */}
  <Link href="/resource" className="max-md:w-full">
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
      </main>
    </>
  );
}



