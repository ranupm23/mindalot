"use client";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Footer from "@/components/Footer";
//Import Framer Motion
import { motion } from "framer-motion";
import { useState ,useEffect } from "react";
import u1 from "@/assets/universityPage/2.jpg";
import u2 from "@/assets/universityPage/3.jpg";
import u3 from "@/assets/universityPage/4.jpg";
import u4 from "@/assets/universityPage/5.jpg";
import u5 from "@/assets/universityPage/6.jpg";
import u6 from "@/assets/universityPage/7.jpg";
import u7 from "@/assets/universityPage/8.jpg";
import u8 from "@/assets/universityPage/9.jpg";
import u9 from "@/assets/universityPage/10.jpg";
import u10 from "@/assets/universityPage/11.jpg";
import u11 from "@/assets/universityPage/12.jpg";
import u12 from "@/assets/universityPage/13.jpg";
import u13 from "@/assets/universityPage/14.jpg";
import u14 from "@/assets/universityPage/15.jpg";
import u15 from "@/assets/universityPage/1.jpg";
import student from "@/assets/universityPage/student.png";
import line from "@/assets/universityPage/line-1.png";
import of1 from "@/assets/universityPage/24.png";
import holistic from "@/assets/universityPage/holistic.png";
import Risk from "@/assets/universityPage/Risk.png";
import Dashboard from "@/assets/universityPage/dashboard.png";
import Global from "@/assets/universityPage/global.png";
import Custom from "@/assets/universityPage/custom.png";
import Regulator from "@/assets/universityPage/Regulatory.png";
import arrow from "@/assets/arrow.svg";

export default function University() {
const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 💡 Framer Motion Variants
  const containerVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  const ctaButtonVariants: any = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
    hover: { scale: 1.05 },
  };

  // ========== HERO SECTION ==========
  const HeroSection = () => {
    const avatars = [
      { src: u1, w: 60, h: 60, top: 226, left: 1334, rotate: -19.14 },
      { src: u2, w: 60, h: 60, top: 93, left: 1178, rotate: -27.33 },
      { src: u3, w: 75, h: 75, top: 94, left: 929, rotate: 24.76 },
      { src: u4, w: 75, h: 75, top: 109.63, left: 1280.63, rotate: -22.15 },
      { src: u5, w: 75, h: 75, top: 434, left: 1316, rotate: -7 },
      { src: u6, w: 75, h: 75, top: 350, left: 777, rotate: 10.99 },
      { src: u7, w: 65, h: 65, top: 214, left: 914, rotate: 12.58 },
      { src: u8, w: 25, h: 25, top: 423, left: 1261, rotate: -27.23 },
      { src: u9, w: 25, h: 25, top: 264, left: 1276, rotate: -8.46 },
      { src: u10, w: 25, h: 25, top: 305, left: 881, rotate: 11.62 },
      { src: u11, w: 50, h: 50, top: 338, left: 1286, rotate: 0 },
      { src: u12, w: 50, h: 50, top: 201, left: 1211, rotate: 0 },
      { src: u13, w: 50, h: 50, top: 264, left: 772, rotate: 10.88 },
      { src: u14, w: 50, h: 50, top: 97, left: 840, rotate: 19.55 },
      { src: u15, w: 50, h: 50, top: 194, left: 826, rotate: 12.22 },
    ];

    return (
      // 💡 Wrap section with motion.section
      <motion.section
        className="
          hero-section
          relative
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          md:items-start
          w-full
          -ml-0
          md:-ml-[50px]
          px-4
          md:px-0
        "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Hero Left Content */}
        <motion.div
          className="hero-left relative w-full md:w-[695px] mt-[40px] md:mt-[144px] ml-0 md:ml-[86px]"
          variants={itemVariants}
        >
          {/* Heading Text */}
          <motion.h1
            className="hero-heading font-inter font-semibold text-[40px] md:text-[60px] leading-[48px] md:leading-[80px] tracking-[-0.06em] text-[#5C4737]"
            variants={itemVariants}
          >
            Mental Health on Campus is No Longer Optional.
          </motion.h1>
          {/* Sand Line Image - MODIFIED */}
            <motion.div
      className="final relative w-[280px] md:w-[450px] h-[38px] mt-[-13px] mx-auto md:mx-0 md:ml-[38px]"
      initial={{ width: 0 }}
      animate={{ width: isMobile ? "350px" : "480px" }} // 👈 reduced width for mobile
      transition={{ duration: 0.8, delay: 0.5 }}
    >
          
            <Image
              src={line}
              alt="Sand underline"
              layout="fill"
              objectFit="contain"
              priority
            />
          </motion.div>

          {/* Description Text */}
          <motion.div
            className="w-full md:w-[538px] mt-[20px] px-4 md:px-0"
            variants={itemVariants}
          >
            <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[28px] md:leading-[35px] tracking-[-0.03em] text-[#0D0D0D]">
              Students are struggling silently. Depression, anxiety, burnout, and
              identity crises don't wait for counselling center hours. Mind A Lot
              gives your students instant, anonymous access to licensed mental
              health professionals, 24/7. No stigma. No waiting lists. Just real
              support, in real time.
            </p>
          </motion.div>

          {/* CTA BUTTON */}
             <Link href="/contact">
               <button className='bg-[#967B6A] hover:bg-[#BE9B84] group cursor-pointer transition-all text-white pl-6 mt-5 p-[5px] flex justify-between items-center rounded-full'>
                                Schedule a Demo
                                <div className='w-[50px] h-[50px] ml-[15px] rounded-full bg-white flex justify-center items-center'>
                                    <Image src={arrow} alt="arrow" width={18} height={18} className='m-auto group-hover:rotate-45 transition-all' />
                                </div>
                </button>
             </Link>
        </motion.div>

        {/* ===== RIGHT SIDE ELEMENTS ===== */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <Image
            src= {student}
            alt="student"
            width={509}
            height={764}
            className="student-img hidden md:block absolute top-[-100px] left-[820px] opacity-100 pointer-events-none select-none"
          />
        </motion.div>

        {/* Mobile student image + avatars (mobile-only) */}
        <div className="student-mobile-container block md:hidden w-full mt-8 relative flex justify-center pointer-events-none select-none">
          {(() => {
            const desktopStudent = { left: 820, top: -100, width: 509, height: 764 };
            const mobileW = 300;
            const mobileH = 450;
            const scaleX = mobileW / desktopStudent.width;
            const scaleY = mobileH / desktopStudent.height;
            const indices = [0, 1, 2, 3, 4, 5, 6, 12];
            const mapped = indices.map((i) => {
              const a = avatars[i];
              const w = Math.max(28, Math.round(a.w * scaleX));
              const h = Math.max(28, Math.round(a.h * scaleY));
              const left = Math.round((a.left - desktopStudent.left) * scaleX);
              const top = Math.round((a.top - desktopStudent.top) * scaleY);
              return { src: a.src, w, h, left, top, rotate: a.rotate };
            });

            return (
              <motion.div
                className="relative"
                style={{ width: mobileW }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image src={student} alt="student" width={mobileW} height={mobileH} className="w-full h-auto" />
                {mapped.map((m, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute rounded-full overflow-hidden shadow-md"
                    style={{ width: m.w, height: m.h, left: m.left, top: m.top }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                  >
                    <Image src={m.src} alt={`m${idx}`} width={m.w} height={m.h} className={`object-cover w-full h-full`} />
                  </motion.div>
                ))}
              </motion.div>
            );
          })()}
        </div>

        {/* Rectangle Layout */}
        <motion.div
          className="
            absolute top-[470px] left-[640px] w-[260px] h-[115px]
            bg-[#BE9B8433] rounded-[10px] opacity-100
          "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p
            className="
              absolute top-[58px] left-[16px] w-[220px]
              font-inter font-normal text-[13px] leading-[22px]
              tracking-[-0.03em] text-[#6D6D6F]
            "
          >
            Your mind matters. Take care of it like you do your dreams.
          </p>

          <div
            className="
              absolute top-[-12px] left-[190px] w-[60px] h-[60px]
              rounded-full bg-white border border-[#755840]
              flex items-center justify-center
            "
          >
            <Image src= {arrow} alt="home-bt"
              className="w-[18px] h-[18px] text-[#755840] rotate-[170deg]"
             
            />
          </div>
        </motion.div>

        {/* ===== AVATARS (Desktop) ===== */}
        {avatars.map((a, i) => (
          <motion.div
            key={i}
            className="avatar absolute rounded-full overflow-hidden shadow-md hidden md:block" // Hide on mobile for desktop-only map
            style={{
              width: `${a.w}px`,
              height: `${a.h}px`,
              top: `${a.top}px`,
              left: `${a.left}px`,
              transform: `rotate(${a.rotate}deg)`,
              opacity: 1,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 + i * 0.05 }}
          >
            <Image
              src={a.src}
              alt={`Avatar ${i + 1}`}
              width={a.w}
              height={a.h}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </motion.section>
    );
  };

  // ========== OFFER SECTION ==========
  const OfferSection = () => {
    // Array of offer data for mapping (improving readability and reusability)
    const offers = [
      {


        icon: of1,
        iconW: "37.5px",
        iconH: "41px",
        title: "24/7 Anonymous Access",
        description: "Real counselling with no ID or booking needed, ensuring complete privacy and immediate support.",
      },
      {
        icon: holistic,
        iconW: "62.5px",
        iconH: "56.84px",
        title: "Holistic Student Support",
        description: "Covering exam stress, homesickness, relationships, identity, focus, and more.",
      },
      {
        icon: Risk,
        iconW: "62.47px",
        iconH: "62.47px",
        title: "High-Risk Case Escalation",
        description: "Built-in protocols for high-risk cases with seamless escalation to partner hospitals.",
      },
      {
        icon: Dashboard,
        iconW: "62.5px",
        iconH: "62.5px",
        title: "Institutional Dashboards",
        description: "Anonymized, real-time wellness insights to inform campus-wide mental health strategy.",
      },
      {
        icon: Global, // Icon was missing in original code, adding a placeholder here
        iconW: "62.5px",
        iconH: "62.5px",
        title: "Global Accessibility",
        description: "Works seamlessly across devices, time zones, and multiple languages to serve all students.",
      },
      {
        icon: Custom,
        iconW: "62.5px",
        iconH: "62.5px",
        title: "Custom Content Drops",
        description: "Targeted resources for exam anxiety, burnout, homesickness, and self-harm prevention.",
      },
      {
        icon: Regulator,
        iconW: "63.5px",
        iconH: "63.5px",
        title: "Regulatory Compliance",
        description: "Helps your institution stay compliant with UGC/NAAC/AICTE mental health directives.",
      },
    ];

    return (
      // 💡 Wrap section with motion.section
      <motion.section
        className="offer-section relative mt-[60px] md:mt-[120px] ml-0 md:ml-[67px] px-4 md:px-0 w-full"
        initial="hidden"
        whileInView="visible" // Animate when the section comes into view
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {/* ====== Title ====== */}
        <motion.div
          className="w-full md:w-[660px] h-auto md:h-[61px] opacity-100 mb-[30px] md:mb-[40px] text-center md:text-left"
          variants={itemVariants}
        >
          <h2 className="offer-title font-inter font-semibold text-[32px] md:text-[50px] leading-[120%] md:leading-[100%] tracking-[-0.06em] text-[#5C4737]">
            What we Offer to Universities ?
          </h2>
        </motion.div>

        {/* ====== Cards Grid ====== */}
        <motion.div
          className="offer-grid flex flex-wrap md:flex-nowrap gap-[13px] mb-[20px] md:mb-[40px] justify-center items-center md:justify-start w-full mx-auto"
          variants={containerVariants}
        >
          {/* ====== 1st Row Cards (1-4) ====== */}
          {offers.slice(0, 4).map((offer, index) => (
            <motion.div
              key={index}
              className="offer-card group relative w-full max-w-[302px] md:w-[302px] h-[302px] rounded-md bg-[#F8F8F8] cursor-pointer transition-all duration-300 ease-in-out hover:rounded-lg overflow-hidden mx-auto md:mx-0"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Animated border overlay */}
              <div className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-[#5C4737] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none"
                   style={{
                     borderImage: "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%) 1",
                   }}
              ></div>
              <div className="absolute top-[20px] left-[20px] w-[50px] h-[50px]">
                <Image
                  src={offer.icon}
                  alt="offer icon"
                  width={75}
                  height={75}
                  className="object-contain"
                />
              </div>

              <div className="absolute top-[139px] left-[20px] w-[195px] h-[58px]">
                <p className="font-inter font-semibold text-[24px] leading-[100%] tracking-[-0.03em] text-[#5C4737]">
                  {offer.title}
                </p>
              </div>

              <div className="absolute top-[207px] left-[20px] w-[262px] h-[75px]">
                <p className="font-inter font-medium text-[14px] leading-[25px] tracking-[-0.03em] text-[#6D6D6F]">
                  {offer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ====== 2nd Row Cards (5-7) + CTA Card (8) ====== */}
        <motion.div
          className="flex flex-wrap md:flex-nowrap gap-[13px] justify-center items-center md:justify-start w-full mx-auto"
          variants={containerVariants}
        >
          {/* Cards 5-7 */}
          {offers.slice(4, 7).map((offer, index) => (
            <motion.div
              key={index + 4}
              className="group relative w-full max-w-[302px] md:w-[302px] h-[302px] rounded-md bg-[#F8F8F8] cursor-pointer transition-all duration-300 ease-in-out hover:rounded-lg overflow-hidden mx-auto md:mx-0"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Animated border overlay */}
              <div className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-[#5C4737] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none"
                   style={{
                     borderImage: "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%) 1",
                   }}
              ></div>
              {/* Icon (Re-added based on the data structure and original intent) */}
              <div className="absolute top-[20px] left-[20px] w-[50px] h-[50px]">
                <Image
                  src={offer.icon}
                  alt="offer icon"
                  width={75}
                  height={75}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <div className="absolute top-[139px] left-[20px] w-[196px] h-[58px]">
                <p className="font-inter font-semibold text-[24px] leading-[100%] tracking-[-0.03em] text-[#5C4737]">
                  {offer.title}
                </p>
              </div>

              {/* Description */}
              <div className="absolute top-[207px] left-[20px] w-[262px] h-[75px]">
                <p className="font-inter font-medium text-[14px] leading-[25px] tracking-[-0.03em] text-[#6D6D6F]">
                  {offer.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* ==== Card 8 (CTA) ==== */}
          <motion.div
            className="group relative w-full max-w-[302px] md:w-[302px] h-[302px] rounded-md bg-[#5C4737] transition-all duration-300 ease-in-out hover:rounded-lg overflow-hidden mx-auto md:mx-0"
            variants={cardVariants}
            whileHover={{ scale: 1 }} // Override default card hover for this special CTA
          >
            {/* Animated border overlay */}
            <div className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-[#5C4737] transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none"
                 style={{
                   borderImage: "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%) 1",
                 }}
            ></div>
            {/* Text Content */}
            <div className="absolute w-[210px] h-[70px] top-[116px] left-[46px]">
              <p className="font-inter font-medium text-[18px] leading-[35px] tracking-[-0.03em] text-white text-center">
                Start building a mentally healthy campus!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    );
  };

  // ========== CONNECT SECTION ==========
  const ConnectCampus = () => {
    return (
      // 💡 Wrap section with motion.section
      <motion.section
        className="flex flex-col justify-center items-center mt-30 space-y-8 px-4 md:px-[128px]"
        initial="hidden"
        whileInView="visible" // Animate when the section comes into view
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="connect-heading font-inter font-semibold text-[32px] md:text-[50px] leading-[120%] md:leading-[100%] tracking-[-0.06em] text-center text-[#5C4737] whitespace-normal md:whitespace-nowrap"
          variants={itemVariants}
        >
          Bring Mental Wellness to Every Corner of Your Campus.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="connect-subtext font-inter font-medium text-[18px] leading-[100%] tracking-[-0.03em] text-center text-[#000000A6] max-w-[1020px]"
          variants={itemVariants}
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
