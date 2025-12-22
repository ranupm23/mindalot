"use client"
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import {StaticImageData} from "next/image"
import Link from "next/link";

import arrow from "../assets/arrow.svg";
import Homebg from "../assets/home-page/hero/rock.png";
import line from "../assets/home-page/ourDiffrent/m1.png";
import w1 from "../assets/home-page/deserves/w1.png";
import w2 from "../assets/home-page/deserves/w2.png";
import w3 from "../assets/home-page/deserves/w3.png";
import w4 from "../assets/home-page/deserves/w4.png";
import w5 from "../assets/home-page/deserves/w5.png";
import w6 from "../assets/home-page/deserves/w6.png";
import fi1 from "../assets/home-page/features/Frame.png";
import f1l from "../assets/home-page/features/Line 15.png";
import featureIcon2 from "../assets/home-page/features/gps.png"; // F2 Icon
import dividerImage2 from "../assets/home-page/features/Line 15.png"; 
import featureIcon3 from '../assets/home-page/features/search-normal.png'; // F3 Icon
import dividerImage3 from '../assets/home-page/features/Line 15.png'; // Divider 3
import featureIcon4 from '../assets/home-page/features/task.png'; // F4 Icon
import featureIcon5 from '../assets/home-page/features/video-circle.png';
import featureIcon6 from '../assets/home-page/features/briefcase.png';
import featureIcon7 from '../assets/home-page/features/ai-hospital.png';
import featureIcon8 from '../assets/home-page/features/diagram.png';
import largeLeftImage from '../assets/home-page/testemonial/Ellipse 47.png'; // 225x450px image
import testimonialIcon from '../assets/home-page/testemonial/teste2.jpg'; // 50x50px circular icon
import leftQuoteImage from '../assets/home-page/testemonial/Vector.png'; // 125x125px rotated image
import rightQuoteImage from '../assets/home-page/testemonial/Vector.png'; // 125x125px rotated image
import largeRightImage from '../assets/home-page/testemonial/face.png'; // 584x548px image
import testimonialIcon2 from '../assets/home-page/testemonial/teste1.jpg';
import testimonialImageLarge from '../assets/home-page/testemonial/Ellipse 52.png'; // 160x160 image
import testimonialImageSmall from '../assets/home-page/testemonial/Ellipse 51.png'; // 100
import testimonialImageCircle from '../assets/home-page/testemonial/teste3.jpg'; 
import t1 from "../assets/home-page/trusted/trust1.png";
import t2 from "../assets/home-page/trusted/trust2.png";
import t3 from "../assets/home-page/trusted/trust3.png";
import t4 from "../assets/home-page/trusted/trust4.png";
import t5 from "../assets/home-page/trusted/trust5.png";
import newarrow from '../assets/home-page/Footer/ffoarrow.png'; 
import  rocksImage from "../assets/home-page/Footer/fo1.png";
import blackarrow from '../assets/home-page/Footer/black arr.png';
import CTAButton from "@/components/CTAButton";
import { Footprints } from "lucide-react";
import { useState } from 'react';



// Placeholder assets - **You must define these imports in your file**
// You'll need to update these paths in your actual file

import headerLogo from "@/assets/header-assets/headerLogo.png";
import footerBgLogo from "@/assets/footer-assets/footer-background-logo.png";

// Icon Imports
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";


// Redirect based on device
const redirectToAppStore = () => {
  if (typeof window === "undefined") return;

  const userAgent = navigator.userAgent || navigator.vendor;

  // iOS devices
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    window.location.href =
      "https://apps.apple.com/in/app/zenit-edu/id6748683332";
    return;
  }

  // Android devices
  if (/android/i.test(userAgent)) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.jagrati.zenit&pcampaignid=web_share";
    return;
  }

  // Desktop fallback
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.jagrati.zenit&pcampaignid=web_share";
};




export default function Home() {

// const HomeHero = () => {
//   // Ensure imagePath is a string URL
//   const imagePath = Homebg?.src || Homebg || "/path/to/default.jpg";

//   // Desktop Dimensions (Used for the background clipping logic)
//   const sectionWidth = 1440;
//   const sectionHeight = 864;

//   return (
//     <section
//       className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-no-repeat bg-cover bg-top lg:bg-top-right transition-all"
//       style={{
//         backgroundImage: `url(${imagePath})`,
//         // On mobile, let the height grow with content. On Desktop, fix it.
//       }}
//     >
//       {/* Container to enforce Height only on Desktop */}
//       <div className="relative w-full min-h-screen lg:h-[864px]">
//         {/* =========================================
//             1. LEFT OVERLAY (Gradient Layer)
//            ========================================= */}
//         <div
//           className="absolute top-0 left-0 w-full h-full lg:w-[720px] lg:h-[864px] backdrop-blur-[60px] z-10"
//           style={{
//             background: `linear-gradient(134.5deg, rgba(91, 74, 62, 0.9) 0%, rgba(117, 88, 64, 0.85) 60%, rgba(50, 40, 30, 0.7) 100%)`,
//           }}
//         />

//         {/* =========================================
//             2. CONTENT CONTAINER
//            ========================================= */}
//         <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-4 pt-20 pb-10 lg:block lg:p-0">
          
//           {/* --------------------------------------
//               MOBILE TITLE ("MIND A LOT" Unified)
//               Visible on Mobile, Hidden on Desktop
//              --------------------------------------- */}
//           <div className="lg:hidden text-center mb-6">
//             <h1 className="font-inter text-[15vw] sm:text-[80px] font-bold leading-none tracking-tight text-[#F6F2EB]">
//               <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#e8dcc8] to-[#9c7e63]">MIND A</span>{" "}
//               <span>LOT</span>
//             </h1>
//           </div>

//           {/* --------------------------------------
//               DESKTOP TITLES (Original Logic)
//               Hidden on Mobile, Visible on Desktop
//              --------------------------------------- */}
          
//           {/* "MIND" - See-Through */}
//           <h1
//             className="hidden lg:flex absolute items-center justify-center font-inter pointer-events-none lg:w-[566px] lg:h-[242px] lg:top-[158px] lg:left-[154px] lg:text-[200px] font-semibold leading-[100%] tracking-[0.06em] text-center"
//             style={{
//               backgroundImage: `url(${imagePath})`,
//               backgroundClip: "text",
//               WebkitBackgroundClip: "text",
//               color: "transparent",
//               backgroundPosition: "-154px -158px",
//               backgroundSize: `${sectionWidth}px ${sectionHeight}px`,
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             MIND
//           </h1>

//           {/* "A" - See-Through */}
//           <span
//             className="hidden lg:flex absolute items-center justify-center font-inter pointer-events-none lg:w-[145px] lg:h-[242px] lg:top-[400px] lg:left-[575px] lg:text-[200px] font-semibold leading-[100%] tracking-[0.06em] text-center"
//             style={{
//               backgroundImage: `url(${imagePath})`,
//               backgroundClip: "text",
//               WebkitBackgroundClip: "text",
//               color: "transparent",
//               backgroundPosition: "-575px -400px",
//               backgroundSize: `${sectionWidth}px ${sectionHeight}px`,
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             A
//           </span>

//            {/* "LOT" - Solid Color */}
//            <h2 className="hidden lg:flex absolute items-center justify-center font-inter text-[#F6F2EB] lg:w-[413px] lg:h-[242px] lg:top-[400px] lg:left-[750px] lg:text-[200px] font-semibold leading-[100%] tracking-[0.06em] text-center z-0">
//             LOT
//           </h2>


//           {/* --------------------------------------
//               CONTENT ELEMENTS (Responsive)
//              --------------------------------------- */}

//           {/* Description Paragraph */}
//           {/* Mobile: Static position, center text. Desktop: Absolute right side */}
//           <p className="font-inter text-[#F6F2EB] lg:text-[#1C1C1BCC] text-[16px] leading-[25px] tracking-[-0.03em] text-center lg:text-right w-full max-w-[400px] lg:w-[373px] lg:h-[75px] mb-8 lg:mb-0 lg:absolute lg:top-[279px] lg:left-[783px] z-0">
//             Mind A Lot is an anonymous, app-based counselling platform that
//             connects you instantly to a real, <br className="hidden lg:block" /> trained professional
//           </p>


//           {/* Left Subtitle ("You don't have to say...") */}
//           {/* Mobile: Order adjusted visually via flex order or simple placement */}
//           <p className="font-inter text-[#FDE2CD] text-[20px] lg:text-[24px] font-normal leading-[120%] lg:leading-[100%] tracking-[-0.06em] text-center lg:text-left w-full max-w-[400px] lg:w-[387px] lg:h-[58px] mb-8 lg:mb-0 lg:absolute lg:top-[512px] lg:left-[160px]">
//             You don’t have to say who you are to start feeling better
//           </p>

//           {/* "Safe Space" CTA Text */}
//           <p className="font-inter text-[#F6F2EB] text-[16px] font-bold leading-[100%] tracking-[-0.03em] mb-4 lg:mb-0 lg:absolute lg:w-[280px] lg:h-[19px] lg:top-[650px] lg:left-[587px] z-20">
//             Your safe space is just one tap away!
//           </p>

//           {/* --------------------------------------
//               BUTTONS
//              --------------------------------------- */}
//           <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[20px] w-full lg:w-[467px] lg:h-[60px] lg:absolute lg:top-[725px] lg:left-[490px] z-30">
            
//             {/* Button 1: Start Chat */}
//             <a
//               href="https://apps.apple.com/in/app/zenit-edu/id6748683332"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="no-underline"
//             >
//               <button
//                 className="group relative flex items-center justify-start font-nunito transition-all duration-300 w-[280px] lg:w-[212px] h-[60px] rounded-[30px] border-2 border-[#F6F2EB] bg-transparent text-[#F6F2EB] text-[16px] font-medium leading-[100%] tracking-[-0.03em] cursor-pointer pl-[30px] hover:bg-[#5C4737] hover:border-transparent"
//               >
//                 Start chat now
//                 <div className="absolute flex items-center justify-center transition-transform duration-300 group-hover:rotate-[45deg] w-[50px] h-[50px] top-[3px] right-[5px] lg:left-[155px] bg-[#F6F2EB] rounded-full">
//                   <Image
//                     src={blackarrow}
//                     alt="arrow"
//                     style={{ width: "20px", height: "20px" }}
//                   />
//                 </div>
//               </button>
//             </a>

//             {/* Button 2: Download App */}
//             {/* Button 2: Download App */}
// <a
//   href="https://play.google.com/store/apps/details?id=com.jagrati.zenit&pcampaignid=web_share"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="no-underline"
// >
//   <button
//     // Added hover:text-[#F6F2EB] to handle the button background change via CSS
//     className="group relative flex items-center font-nunito transition-all duration-300 w-[280px] lg:w-[235px] h-[60px] rounded-[30px] bg-[#F6F2EB] border-none cursor-pointer hover:bg-[#5C4737]"
//   >
//     <span
//       // Added group-hover:text-[#F6F2EB] here to change text color when parent is hovered
//       className="btn-text transition-colors duration-300 absolute w-full text-center lg:text-left lg:w-[151px] top-[18px] lg:left-[20px] text-[#5B4A3E] text-[18px] font-medium group-hover:text-[#F6F2EB]"
//     >
//       Download the app
//     </span>
//     <div className="absolute flex items-center justify-center transition-transform duration-300 group-hover:rotate-[45deg] w-[50px] h-[50px] top-[5px] right-[5px] lg:left-[181px] bg-[#F6F2EB] rounded-full">
//       <Image
//         src={blackarrow}
//         alt="arrow"
//         style={{ width: "20px", height: "20px" }}
//       />
//     </div>
//   </button>
// </a>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

const HomeHero = () => {
  // Ensure imagePath is a string URL
  const imagePath = Homebg?.src || Homebg || "/path/to/default.jpg";

  // Desktop Dimensions
  const sectionWidth = 1440;
  const sectionHeight = 864;

  return (
        <section
  className="relative w-full overflow-hidden bg-cover bg-top lg:bg-top-right"
  style={{ backgroundImage: `url(${imagePath})` }}
>
      {/* CHANGE 1: 
         Removed 'min-h-screen'. 
         Used 'h-auto' for mobile so it fits content length.
         Kept 'lg:h-[864px]' for desktop.
      */}
      <div className="relative w-full h-auto lg:h-[864px]">
        
        {/* HEADER */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Header textWhite/>
        </div>

        {/* LEFT OVERLAY (Gradient) */}
        <div
          className="absolute top-0 left-0 w-full h-full lg:w-[720px] lg:h-[864px] backdrop-blur-[60px] z-10"
          style={{
            background: `linear-gradient(134.5deg, rgba(91, 74, 62, 0.9) 0%, rgba(117, 88, 64, 0.85) 60%, rgba(50, 40, 30, 0.7) 100%)`,
          }}
        />

        {/* CHANGE 2: 
           Content Container
           - 'pt-28': Added more top space so content clears the Header on mobile.
           - 'pb-16': Added decent bottom space so it doesn't feel cramped, but isn't huge.
           - 'h-full' removed on mobile (implied by flex/block) to let it grow naturally.
        */}
        <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 pt-28 pb-16 lg:h-full lg:block lg:p-0">
          
          {/* MOBILE TITLE */}
          <div className="lg:hidden text-center mb-6">
            <h1 className="font-inter text-[15vw] sm:text-[80px] font-bold leading-none tracking-tight text-[#F6F2EB]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#e8dcc8] to-[#9c7e63]">MIND A</span>{" "}
              <span>LOT</span>
            </h1>
          </div>

          {/* DESKTOP TITLES (Hidden on Mobile) */}
          <h1
            className="hidden lg:flex absolute items-center justify-center font-inter pointer-events-none lg:w-[566px] lg:h-[242px] lg:top-[158px] lg:left-[154px] lg:text-[200px] font-semibold leading-[100%] tracking-[0.06em] text-center"
            style={{
              backgroundImage: `url(${imagePath})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundPosition: "-154px -158px",
              backgroundSize: `${sectionWidth}px ${sectionHeight}px`,
              backgroundRepeat: "no-repeat",
            }}
          >
            MIND
          </h1>

          <span
            className="hidden lg:flex absolute items-center justify-center font-inter pointer-events-none lg:w-[145px] lg:h-[242px] lg:top-[400px] lg:left-[575px] lg:text-[200px] font-semibold leading-[100%] tracking-[0.06em] text-center"
            style={{
              backgroundImage: `url(${imagePath})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundPosition: "-575px -400px",
              backgroundSize: `${sectionWidth}px ${sectionHeight}px`,
              backgroundRepeat: "no-repeat",
            }}
          >
            A
          </span>

           <h2 className="hidden lg:flex absolute items-center justify-center font-inter text-[#F6F2EB] lg:w-[413px] lg:h-[242px] lg:top-[400px] lg:left-[750px] lg:text-[200px] font-semibold leading-[100%] tracking-[0.06em] text-center z-0">
            LOT
          </h2>


          {/* CONTENT ELEMENTS */}
          
          {/* Description Paragraph */}
          <p className="font-inter text-[#F6F2EB] lg:text-[#1C1C1BCC] text-[16px] leading-[25px] tracking-[-0.03em] text-center lg:text-right w-full max-w-[400px] lg:w-[373px] lg:h-[75px] mb-8 lg:mb-0 lg:absolute lg:top-[279px] lg:left-[783px] z-0">
            Mind A Lot is an anonymous, app-based counselling platform that
            connects you instantly to a real, <br className="hidden lg:block" /> trained professional
          </p>


          {/* Left Subtitle */}
          <p className="font-inter text-[#FDE2CD] text-[20px] lg:text-[24px] font-normal leading-[120%] lg:leading-[100%] tracking-[-0.06em] text-center lg:text-left w-full max-w-[400px] lg:w-[387px] lg:h-[58px] mb-8 lg:mb-0 lg:absolute lg:top-[512px] lg:left-[160px]">
            You don’t have to say who you are to start feeling better
          </p>

          {/* "Safe Space" CTA Text */}
          <p className="font-inter text-[#F6F2EB] text-[16px] font-bold leading-[100%] tracking-[-0.03em] mb-4 lg:mb-0 lg:absolute lg:w-[280px] lg:h-[19px] lg:top-[650px] lg:left-[587px] z-20">
            Your safe space is just one tap away!
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[20px] w-full lg:w-[467px] lg:h-[60px] lg:absolute lg:top-[725px] lg:left-[490px] z-30">
            
           {/* WhatsApp Chat Button */}
<a
  href="https://wa.me/919606258596?text=Hello%20Mindalot%20Team"
  target="_blank"
  rel="noopener noreferrer"
  className="no-underline"
>
  <button
    className="group relative flex items-center justify-start font-nunito transition-all duration-300 w-[280px] lg:w-[212px] h-[60px] rounded-[30px] border-2 border-[#F6F2EB] bg-transparent text-[#F6F2EB] text-[16px] font-medium leading-[100%] tracking-[-0.03em] cursor-pointer pl-[30px] hover:bg-[#5C4737] hover:border-transparent"
  >
    Start chat now
    <div className="absolute flex items-center justify-center transition-transform duration-300 group-hover:rotate-[45deg] w-[50px] h-[50px] top-[3px] right-[5px] lg:left-[155px] bg-[#F6F2EB] rounded-full">
      <Image
        src={blackarrow}
        alt="arrow"
        style={{ width: "20px", height: "20px" }}
      />
    </div>
  </button>
</a>

            {/* Button 2 */}
           
              <button onClick={redirectToAppStore}
                className="group relative flex items-center font-nunito transition-all duration-300 w-[280px] lg:w-[235px] h-[60px] rounded-[30px] bg-[#F6F2EB] border-none cursor-pointer hover:bg-[#5C4737]"
              >
                <span
                  className="btn-text transition-colors duration-300 absolute w-full text-center lg:text-left lg:w-[151px] top-[18px] lg:left-[20px] text-[#5B4A3E] text-[18px] font-medium group-hover:text-[#F6F2EB]"
                >
                  Download the app
                </span>
                <div className="absolute flex items-center justify-center transition-transform duration-300 group-hover:rotate-[45deg] w-[50px] h-[50px] top-[5px] right-[5px] lg:left-[181px] bg-[#F6F2EB] rounded-full">
                  <Image
                    src={blackarrow}
                    alt="arrow"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
              </button>
            
          </div>

        </div>
      </div>
    </section>
  );
};


const MakeUs = () => {
  return (
    <section className="w-full overflow-x-hidden py-12 sm:py-20 px-5 mt-[-30px] sm:px-10 lg:px-20">
      
      {/* HEADER */}
      <h2
        className="
          text-3xl sm:text-4xl lg:text-5xl font-bold
          text-[#5B4A3E]
          mb-10 sm:mb-16 
          max-w-4xl
          font-['Nunito_Sans'] leading-tight
        "
      >
        What makes us different ?
      </h2>

      {/* CARDS GRID */}
      <div className="
        grid 
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-y-12 gap-x-8        
        md:gap-y-16 md:gap-x-12
        lg:gap-24
        max-w-7xl mx-auto
      ">
        
        {[ 
          { no: "01", title: "Instant Human Support", desc: "Start chatting the moment you feel overwhelmed. No forms. No queues. No matching wait. A real counsellor responds in seconds." },
          { no: "02", title: "100% Anonymous", desc: "You can choose a nickname. Your real identity stays private. Even our counsellors won’t know who you are. Feel safe, share freely." },
          { no: "03", title: "Flexible Access", desc: "Want to choose your own counsellor? Prefer video or voice? You can book that." },
          { no: "04", title: "Goal-Based Nudges", desc: "Set your personal growth goals inside the app. We send you tiny, doable nudges to help you stay on track — one gentle step at a time." },
          { no: "05", title: "Mood Tracker", desc: "Just tap how you're feeling. We'll guide you from there. No mood history shown — because your past doesn’t need to hurt you again." },
          { no: "06", title: "Self-Discovery Tools & Library", desc: "Discover your patterns, habits, and emotional needs through quick self-assessments, then explore expert-curated videos, podcasts, stories, and guided journaling." }
        ].map((item) => (
          
          <div key={item.no} className="flex flex-col space-y-3">
            
            {/* NUMBER & LINE WRAPPER */}
            <div className="relative">
              {/* Number */}
              <div
                className="
                  text-5xl font-semibold text-[#5B4A3E]
                  leading-none tracking-tighter
                  font-['Inter'] pl-1
                "
              >
                {item.no}
              </div>

              {/* Line Image */}
              <Image
                src={line}
                alt="decorative line"
                className="
                  w-[96px] h-[18px] mt-2
                  transition-all duration-300
                  hover:w-[160px] 
                  ml-[-3px]
                  cursor-pointer
                "
              />
            </div>

            {/* TITLE */}
            <div
              className="
                text-xl sm:text-2xl font-semibold text-[#5C4737]
                font-['Inter'] 
                w-[700px] 
                leading-tight
                mb-2 sm:mb-4  /* <--- ADDED: Extra bottom margin to push description down */
              "
            >
              {item.title}
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                text-base sm:text-lg font-normal text-[#6D6D6F]
                leading-relaxed font-['Inter']
                w-full
              "
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Whowant = () => {
  interface CardProps {
    imageSrc: string | StaticImageData;
    altText: string;
    title: string;
  }

  const Card = ({ imageSrc, altText, title }: CardProps) => (
    <div className="relative w-full overflow-hidden rounded-[12px] shadow-lg aspect-[4/3] sm:aspect-auto sm:h-[300px]">
      <Image
        src={imageSrc}
        alt={altText}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, 50vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/10" />
      {/* Text */}
      <div className="absolute bottom-5 left-5 text-white text-xl sm:text-2xl font-semibold font-['Inter'] leading-tight">
        {title}
      </div>
    </div>
  );

  return (
    // UPDATED SECTION CLASS:
    // 1. Changed py-10 to py-20 for more space on mobile.
    // 2. Changed lg:p-0 to lg:pt-[100px] lg:px-0 to add space on top for desktop.
    // 3. Increased lg:h to [1269px] to account for the extra top space so bottom content isn't cut off.
<section className="w-full bg-[#F6F2EB] py-10 sm:py-24 px-4 sm:px-6 lg:h-[1171px] lg:pt-[70px] lg:px-0 relative">
      {/* ------------------------------------------- */}
      {/* 1. DESKTOP-ONLY LAYOUT (lg:block)           */}
      {/* ------------------------------------------- */}
      <div className="hidden lg:block w-full h-full relative">
        
        {/* Heading */}
        <h2 className="relative top-0 left-[44px] w-[321px] h-[68px] font-['Nunito_Sans'] font-bold text-[50px] text-black">
          Who it’s For ?
        </h2>

        {/* Description */}
        <p className="absolute top-[81px] left-[44px] w-[381px] text-[18px] text-black/80 font-['Nunito_Sans']">
          Mind A Lot is for everyone who wants to feel better, grow stronger, and
          cope smarter.
        </p>

        {/* Quote Card */}
        <div className="absolute top-[185px] left-[44px] w-[410px] h-[113px] bg-[#F8F8F8]" />

        {/* Quote */}
        <p className="absolute top-[204px] left-[59px] w-[331px] italic font-bold text-[16px]">
          “ Wherever you are. Whoever you are. However you feel. ”
        </p>

        {/* Signature */}
        <p className="absolute top-[267px] left-[239px] text-[16px]">
          – Mind A Lot is here for you!
        </p>

        {/* Working Professionals */}
        <div className="absolute top-[333px] left-[44px] w-[410px] h-[262px] rounded-[12px] overflow-hidden">
          <Image src={w1} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90" />
          <div className="absolute bottom-[20px] left-0 w-full text-center text-white text-[30px] font-semibold">
  Working Professionals
</div>
        </div>

        {/* Students */}
        <div className="absolute top-0 left-[476px] w-[410px] h-[594px] rounded-[12px] overflow-hidden">
          <Image src={w2} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_72%,rgba(0,0,0,.6)_83%)]" />
          <div className="absolute bottom-[38px] left-0 w-full text-center text-white text-[30px] font-semibold">
            Students & Young Adults
          </div>
        </div>

        {/* Others */}
        <div className="absolute top-0 left-[906px] w-[410px] h-[594px] rounded-[12px] overflow-hidden">
          <Image src={w3} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_76%,rgba(0,0,0,.8)_100%)]" />
          <div className="absolute bottom-[38px] left-0 w-full text-center text-white text-[30px] font-semibold">
            LGBTQ+ Community
          </div>
        </div>

        {/* Older Adults */}
        <div className="absolute top-[615px] left-[48px] w-[410px] h-[416px] rounded-[12px] overflow-hidden">
          <Image
            src={w4}
            alt="Older Adults"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 74.16%, rgba(0, 0, 0, 0.7) 100%)",
            }}
          />
          <div className="absolute top-[339px] left-0 w-full text-center  w-[181px] h-[36px] font-['Inter'] font-semibold text-[30px] leading-[100%] tracking-[-3%] text-white">
            Older Adults
          </div>
        </div>

        {/* Neurodivergent Users */}
        <div className="absolute top-[615px] left-[480px] w-[410px] h-[416px] rounded-[12px] overflow-hidden">
          <Image
            src={w5}
            alt="Neurodivergent Users"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 71.88%, rgba(0, 0, 0, 0.8) 100%)",
            }}
          />
          <div className="absolute top-[327px]  w-[322px]  left-0 w-full text-center  h-[36px] font-['Inter'] font-semibold text-[30px] leading-[100%] tracking-[-3%] text-white text-center">
            Neurodivergent Users
          </div>
        </div>

        {/* Anyone Needing Support */}
        <div className="absolute top-[615px] left-[910px] w-[410px] h-[416px] rounded-[12px] overflow-hidden">
          <Image
            src={w6}
            alt="Anyone Needing Support"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 71.51%, rgba(0, 0, 0, 0.8) 100%)",
            }}
          />
          <div className="absolute top-[339px] left-0 w-full text-center  w-[366px] h-[36px] font-['Inter'] font-semibold text-[30px] leading-[100%] tracking-[-3%] text-white text-center">
            Anyone Needing Support
          </div>
        </div>
      </div>

      {/* ------------------------------------------- */}
      {/* 2. MOBILE/TABLET LAYOUT (lg:hidden)         */}
      {/* ------------------------------------------- */}
      <div className="lg:hidden max-w-7xl mx-auto">
        {/* Header Content Group */}
        <div className="mb-12">
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 font-['Nunito_Sans']">
            Who it’s For ?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-black/80 max-w-lg mb-8 font-['Nunito_Sans']">
            Mind A Lot is for everyone who wants to feel better, grow stronger,
            and cope smarter.
          </p>

          {/* Quote Card */}
          <div className="p-4 bg-[#F8F8F8] max-w-md rounded-md">
            {/* Quote */}
            <p className="italic font-bold text-base mb-2">
              “ Wherever you are. Whoever you are. However you feel. ”
            </p>
            {/* Signature */}
            <p className="text-base text-right">
              – Mind A Lot is here for you!
            </p>
          </div>
        </div>

        {/* Responsive Grid for Image Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          <Card
            imageSrc={w2}
            altText="Students"
            title="Students & Young Adults"
          />
          <Card
            imageSrc={w3}
            altText="LGBTQ+ Community"
            title="LGBTQ+ Community"
          />
          <Card
            imageSrc={w1}
            altText="Working Professionals"
            title="Working Professionals"
          />
          <Card imageSrc={w4} altText="Older Adults" title="Older Adults" />
          <Card
            imageSrc={w5}
            altText="Neurodivergent Users"
            title="Neurodivergent Users"
          />
          <Card
            imageSrc={w6}
            altText="Anyone Needing Support"
            title="Anyone Needing Support"
          />
        </div>
      </div>
    </section>
  );
};
// Extracted Card Component for responsive layout
// interface CardProps {
//   imageSrc: string;
//   altText: string;
//   title: string;
// }

// const Card = ({ imageSrc, altText, title }: CardProps) => (
//   <div className="relative w-full overflow-hidden rounded-[12px] shadow-lg aspect-[4/3] sm:aspect-auto sm:h-[300px]">
//     <Image 
//       src={imageSrc} 
//       alt={altText} 
//       fill 
//       className="object-cover" 
//       sizes="(max-width: 640px) 100vw, 50vw"
//     />
    
//     {/* Gradient Overlay */}
//     <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/10" />

//     {/* Text */}
//     <div className="absolute bottom-5 left-5 text-white text-xl sm:text-2xl font-semibold font-['Inter'] leading-tight">
//       {title}
//     </div>
//   </div>
// );

interface FeatureItemProps {
  iconSrc: string | StaticImageData;
  altText: string;
  title: string;
  isLast?: boolean;  // Optional, since it has a default value
}

// Extracted reusable Feature Component
// Extracted reusable Feature Component



const FeatureItem = ({ iconSrc, altText, title, isLast = false }: FeatureItemProps) => {
  return (
    <div 
      className={`
        flex items-center gap-4 sm:gap-5 
        py-4 sm:py-6 lg:py-8
        ${!isLast ? 'border-b border-gray-200' : ''}
      `}
    >
      {/* ICON */}
      <div className="shrink-0 w-12 h-12 flex items-center justify-center">
        <Image
          src={iconSrc} 
          alt={altText} 
          className="w-full h-full object-contain"
        />
      </div>

      {/* TEXT CONTAINER */}
      <div className="flex-1 min-w-0">
        <h3 
          className="
            font-medium text-black font-['Inter'] leading-snug
            text-base sm:text-xl 
            
            /* MOBILE (Default): Allow wrapping so full text is seen */
            whitespace-normal
            
            /* DESKTOP (lg): Force single line where there is space */
            lg:whitespace-nowrap
            xl:whitespace-nowrap
          "
        >
          {title}
        </h3>
      </div>
    </div>
  );
};




const Features = () => {
  return (
    <section className="relative w-full overflow-hidden mt-11 sm:mt-20">
      
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-[50px] pb-[10px] sm:pb-[80px]">

        {/* HEADER - Reduced margins significantly */}
        <div className="mb-2 sm:mb-4 pl-[13px]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black font-['Inter'] mb-2 sm:mb-3 leading-tight">
            Key features
          </h2>
          <p className="text-base sm:text-lg text-black font-medium font-['Nunito_Sans'] max-w-xl leading-relaxed">
            Discover the essential features you need - all in one trusted platform.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 lg:gap-y-0">
          
          {/* LEFT COLUMN LIST */}
          <div className="flex flex-col w-full">
            <FeatureItem iconSrc={fi1} altText="Chat" title="24/7 Live Chat With Human Counsellors" />
            <FeatureItem iconSrc={featureIcon2} altText="Tracker" title="Goal Tracker With Behavioural Nudges" />
            <FeatureItem iconSrc={featureIcon3} altText="Mood" title="Mood-Based Guidance" />
            <FeatureItem iconSrc={featureIcon4} altText="Assessments" title="Bite-Sized Self Assessments" isLast />
          </div>

          {/* RIGHT COLUMN LIST */}
          <div className="flex flex-col w-full">
            <div className="w-full lg:pr-[50px]"> 
              <FeatureItem iconSrc={featureIcon5} altText="Video" title="Expert Videos, Podcasts, and Content Drops" />
              <FeatureItem iconSrc={featureIcon6} altText="Lang" title="Works Across Countries & Languages" />
              <FeatureItem iconSrc={featureIcon7} altText="Hospital" title="Escalation To Partner Hospitals For Psychiatric Care" />
              <FeatureItem iconSrc={featureIcon8} altText="Anon" title="100% Anonymity Guaranteed" isLast />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


const Testimonials = () => {
  return (
    <section className="relative w-full bg-[#F6F2EB] overflow-hidden">
      
      {/* =========================================================
          1. MOBILE & TABLET LAYOUT (Visible below 1024px)
          - REMOVED: Right side background image
          - KEP: Increased bottom padding
          ========================================================= */}
      <div className="lg:hidden relative w-full px-6 pt-16 pb-36 sm:px-12 sm:pt-24 sm:pb-64 flex flex-col z-10">
        
        <div className="max-w-2xl mx-auto w-full">
            {/* Title */}
            <h2 className="font-['Inter'] text-[32px] sm:text-[40px] font-semibold text-[#5C4737] mb-8 sm:mb-12 tracking-tight">
            Testimonials
            </h2>

            {/* Content Container */}
            <div className="relative z-10">
            
            {/* Quote Card */}
            <div className="relative bg-white/60 backdrop-blur-sm border border-[#5C4737]/10 rounded-2xl p-6 sm:p-10 shadow-sm">
                
                {/* Quote Icon */}
                <div className="mb-4 sm:mb-6">
                <Image
                    src={leftQuoteImage}
                    alt="Quote"
                    className="w-10 h-auto opacity-80"
                />
                </div>

                {/* Quote Text */}
                <p className="text-[#0D0D0D] font-['Inter'] text-[18px] sm:text-[24px] font-medium leading-[1.6] tracking-tight mb-6 sm:mb-8">
                "No one asked me for my name, and yet I’ve never felt more seen."
                </p>

                {/* Author */}
                <div className="flex items-center justify-between border-t border-[#5C4737]/10 pt-6">
                <span className="text-[#6D6D6F] font-['Inter'] text-[16px] sm:text-[18px] font-normal">
                    — Student, Chennai
                </span>

                {/* Mobile Decorative Avatars (Row) */}
                <div className="flex -space-x-3">
                    <Image src={testimonialIcon} alt="user" className="w-10 h-10 rounded-full border-2 border-[#F6F2EB]" />
                    <Image src={testimonialIcon2} alt="user" className="w-10 h-10 rounded-full border-2 border-[#F6F2EB]" />
                    <Image src={testimonialImageCircle} alt="user" className="w-10 h-10 rounded-full border-2 border-[#F6F2EB]" />
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* --- REMOVED THE MOBILE BACKGROUND DECOR DIV HERE --- */}

      </div>


      {/* =========================================================
          2. DESKTOP LAYOUT (Visible lg and up - 1024px+)
          ========================================================= */}
      <div className="hidden lg:block relative w-full h-[712px] xl:h-[750px]">
        
        <div className="w-full h-full origin-top lg:scale-[0.75] xl:scale-[0.9] 2xl:scale-100 transition-transform duration-300">

            {/* --- LARGE RIGHT IMAGE --- */}
            <Image
            src={largeRightImage}
            alt="Testimonial Background Graphic"
            className="absolute w-[390px] h-[548px] opacity-100"
            style={{ top: '70px', left: 'auto', right: '50px' }}
            />

            {/* --- MAIN CENTERED CONTENT --- */}
            <div 
            className="relative w-[1323px] h-[616px] opacity-100 mx-auto" 
            style={{ marginTop: '36px' }}
            >
            
            {/* 1. HEADING */}
            <div
                className="absolute w-[274px] h-[61px] font-['Inter'] text-[50px] font-semibold text-[#5C4737]"
                style={{ top: '25px', left: '30px', letterSpacing: '-0.06em' }}
            >
                Testimonials
            </div>

            {/* 2. LARGE LEFT IMAGE */}
            <Image
                src={largeLeftImage}
                alt="Testimonial Background Left"
                className="absolute w-[225px] h-[450px] opacity-100"
                style={{ top: '115px', left: '30px' }}
            />

            {/* 3. SMALL CIRCLE IMAGE 1 */}
            <Image
                src={testimonialIcon}
                alt="Profile Icon 1"
                className="absolute w-[50px] h-[50px] rounded-full opacity-100 border border-black"
                style={{ top: '129px', left: '130px' }}
            />
            
            {/* 8. SMALL CIRCLE IMAGE 2 */}
            <Image
                src={testimonialIcon2}
                alt="Profile Icon 2"
                className="absolute w-[50px] h-[50px] rounded-full opacity-100"
                style={{ top: '501px', left: '130px', transform: 'rotate(-180deg)' }}
            />

            {/* 9. SMALL CIRCLE BORDER 2 */}
            <div
                className="absolute w-[50px] h-[50px] rounded-full"
                style={{ 
                top: '501px', 
                left: '130px', 
                border: '1px solid rgba(0, 0, 0, 0.25)',
                transform: 'rotate(-180deg)'
                }}
            />

            {/* 10. SQUARE CONTAINER/BORDER */}
            <div
                className="absolute w-[100px] h-[100px]"
                style={{ top: '290px', left: '205px' }}
            />
            
            {/* 13. NEW IMAGE LARGE */}
            <Image
                src={testimonialImageLarge}
                alt="Medium decorative element"
                className="absolute w-[130px] h-[130px] opacity-100"
                style={{ top: '275px', left: '190px' }}
            />
            
            {/* 12. NEW IMAGE SMALL */}
            <Image
                src={testimonialImageSmall}
                alt="Small decorative element"
                className="absolute w-[100px] h-[100px] opacity-100"
                style={{ top: '290px', left: '205px' }}
            />

            {/* 14. NEW IMAGE CIRCLE */}
            <Image
                src={testimonialImageCircle}
                alt="Circular decorative element"
                className="absolute w-[80px] h-[80px] opacity-100 rounded-full"
                style={{ top: '300px', left: '215px' }}
            />
            
            {/* 4. QUOTE LEFT IMAGE */}
            <div
                className="absolute w-[125px] h-[125px] opacity-100 flex items-center justify-center"
                style={{ top: '133px', left: '292px', transform: 'rotate(-180deg)' }}
            >
                <Image
                src={leftQuoteImage} 
                alt="Quote Left" 
                className="absolute w-[51px] h-[93px] opacity-100"
                style={{ top: '16.83px', left: '36.72px', transform: 'rotate(-180deg)' }}
                />
            </div>

            {/* 5. QUOTE RIGHT IMAGE */}
            <div
                className="absolute w-[125px] h-[125px] opacity-100 flex items-center justify-center"
                style={{ top: '133px', left: '367px', transform: 'rotate(-180deg)' }}
            >
                <Image
                src={rightQuoteImage} 
                alt="Quote Right" 
                className="absolute w-[51px] h-[93px] opacity-100"
                style={{ top: '16.83px', left: '36.72px', transform: 'rotate(-180deg)' }}
                />
            </div>

            {/* 6. QUOTE TEXT */}
            <div
                className="absolute w-[458px] h-[70px] text-[#0D0D0D] font-['Inter'] text-[24px] font-medium"
                style={{ top: '305px', left: '365px', lineHeight: '35px', letterSpacing: '-0.03em' }}
            >
                No one asked me for my name, and yet I’ve never felt more seen.
            </div>

            {/* 7. STUDENT INFO */}
            <div
                className="absolute w-[222px] h-[35px] text-[#6D6D6F] font-['Inter'] text-[24px] font-normal"
                style={{ top: '415px', left: '601px', lineHeight: '35px', letterSpacing: '-0.03em' }}
            >
                — Student, Chennai
            </div>

            </div>
        </div>
      </div>
    </section>
  );
};

const animationStyles = `
@keyframes scroll-left-to-right {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% / 2)); /* Translate by half the total width (since content is duplicated) */
  }
}
`;


interface Logo {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}
interface LogoCarouselProps {
  logos: Logo[];
}

// Helper component for the scrolling logo row
const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  // Duplicate the logos array to create the seamless infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];
  return (
    // Apply the custom animation class
    <div className="flex w-full overflow-hidden whitespace-nowrap group">
      <style jsx global>{animationStyles}</style>
      {/* The main scrolling strip container (contains duplicated logos) */}
      <div 
        className="flex animate-scroll-ltr w-fit" // w-fit ensures the flex container respects the total content width
        style={{ animation: 'scroll-left-to-right 20s linear infinite' }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center h-24 sm:h-32 mx-6 sm:mx-10 shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="max-h-full w-auto object-contain opacity-70 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};



const Trusted = () => {
  // Define logo data for the carousel
  const logos = [
    { src: t1, alt: "Trusted Client Logo 1", width: 97, height: 96 },
    { src: t2, alt: "Trusted Client Logo 2", width: 135, height: 96 },
    { src: t3, alt: "Trusted Client Logo 3", width: 107, height: 96 },
    { src: t4, alt: "Trusted Client Logo 4", width: 103, height: 96 },
    { src: t5, alt: "Trusted Client Logo 5", width: 105, height: 96 },
  ];

  return (
    <section 
      className="relative w-full bg-[#F6F2EB] lg:mt-[-200px] sm:py-16 lg:h-[290px] overflow-hidden" 
    >
      
      {/* ===========================================
          1. DESKTOP-ONLY LAYOUT (lg:block)
          =========================================== */}
      <div className="hidden lg:block w-full h-full relative">
        
        {/* 1. Heading */}
        <p
          className="absolute font-['Nunito_Sans'] font-medium text-[40px] leading-none text-black w-[410px] h-[55px]"
          style={{ top: '66px', left: '86px' }}
        >
          Trusted by 50+ Clients
        </p>
        
        {/* 2. Description */}
        <p
          className="absolute font-['Nunito_Sans'] font-normal text-[18px] leading-none text-black w-[406px] h-[50px]"
          style={{ top: '135px', left: '86px' }}
        >
          Trusted by leading schools and institutions that care for student well-being.
        </p>

        {/* 3. Images Layout (Carousel) */}
        <div
          className="absolute w-[922px] h-[144px] overflow-hidden"
          style={{ top: '49px', left: '530px' }}
        >
          <LogoCarousel logos={logos} />
        </div>
      </div>
      
      
      {/* ===========================================
          2. MOBILE/TABLET LAYOUT (lg:hidden)
          - Added pb-24 for bottom spacing
          =========================================== */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        
        {/* Header Content */}
        <div className="mb-8">
          <h2 className="font-['Nunito_Sans'] font-medium text-3xl sm:text-4xl text-black mb-3">
            Trusted by 50+ Clients
          </h2>
          
          <p className="font-['Nunito_Sans'] font-normal text-base sm:text-lg text-black max-w-md">
            Trusted by leading schools and institutions that care for student well-being.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="mt-8">
          <LogoCarousel logos={logos} />
        </div>
      </div>

    </section>
  );
};

const LastSection = () => {
  return (
    <section className="relative w-full bg-white">
      
      {/* =======================================
          1. CTA CARD (Floating on top)
          ======================================= */}
     <div className="relative z-20 px-4 w-full flex justify-center mt-[100px] mb-[-180px] sm:mb-[-150px] lg:h-[363px]">
        <div
          className="
            relative 
            w-full max-w-[1250px]
            overflow-hidden
            rounded-[20px] md:rounded-[30px]
            bg-[#BFBFBD]
            p-[10px] 
          "
          style={{
            border: "10px solid #FFFFFF",
            background: "linear-gradient(94.54deg, #9C7A64 0.44%, #624D37 19.66%, #D8D0CA 73.19%, #94897F 100%)",
          }}
        >
          {/* Inner Content Container */}
          <div className="relative w-full h-full bg-[#9C7A64] rounded-[12px] md:rounded-[22px] overflow-hidden">
            
            {/* Background Image (Rocks) */}
            <div className="absolute inset-0 z-0">
               <Image
                src={rocksImage}
                alt="CTA Background"
                fill
                className="object-cover object-bottom"
                // FIX: Increased scale to 1.2 to ensure the top edge covers the background color
                style={{ transform: "scale(1.2) translateY(35px)" }} 
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" /> 
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center">
              
              <h2 className="font-inter font-semibold text-[#F6F2EB] text-[24px] sm:text-[32px] md:text-[42px] lg:text-[50px] leading-[1.2] mb-4 md:whitespace-nowrap">
                Take the first step toward feeling better.
              </h2>

              <p className="font-inter font-normal text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] mb-8 md:whitespace-nowrap">
                Start talking. Stay anonymous. Feel lighter. Because your mind matters a lot.
              </p>

              {/* Buttons Wrapper */}
              <div className="flex flex-wrap justify-center gap-4 w-full">
                
                {/* Button 1 */}
                <a href="mailto:hello@mindalot.com" className="no-underline">
                  <div className="group relative w-[212px] h-[54px] rounded-[30px] border-2 border-[#F6F2EB] flex items-center bg-transparent transition-all duration-300 hover:bg-[#5C4737] hover:border-[#5C4737] cursor-pointer">
                    <span className="pl-6 text-[#F6F2EB] font-inter font-medium text-[15px]">Talk To Our Team</span>
                    <div className="absolute right-[5px] w-[44px] h-[44px] bg-[#5B4A3E] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:rotate-45">
                        <Image src={newarrow} alt="arrow" className="w-4 h-4 block group-hover:hidden" />
                        <Image src={blackarrow} alt="arrow" className="w-4 h-4 hidden group-hover:block" />
                    </div>
                  </div>
                </a>

                {/* Button 2 */}
                <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="no-underline">
                  <div className="group relative w-[212px] h-[54px] rounded-[30px] border-2 border-[#F6F2EB] flex items-center bg-transparent transition-all duration-300 hover:bg-[#5C4737] hover:border-[#5C4737] cursor-pointer">
                    <span className="pl-6 text-[#F6F2EB] font-inter font-medium text-[15px]">Partner With Us</span>
                    <div className="absolute right-[5px] w-[44px] h-[44px] bg-[#5B4A3E] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:rotate-45">
                        <Image src={newarrow} alt="arrow" className="w-4 h-4 block group-hover:hidden" />
                        <Image src={blackarrow} alt="arrow" className="w-4 h-4 hidden group-hover:block" />
                    </div>
                  </div>
                </a>

                {/* Button 3 */}
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="no-underline">
                  <div className="group relative w-[212px] h-[54px] rounded-[30px] border-2 border-[#F6F2EB] flex items-center bg-transparent transition-all duration-300 hover:bg-[#5C4737] hover:border-[#5C4737] cursor-pointer">
                    <span className="pl-6 text-[#F6F2EB] font-inter font-medium text-[15px]">Download App</span>
                    <div className="absolute right-[5px] w-[44px] h-[44px] bg-[#5B4A3E] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:rotate-45">
                        <Image src={newarrow} alt="arrow" className="w-4 h-4 block group-hover:hidden" />
                        <Image src={blackarrow} alt="arrow" className="w-4 h-4 hidden group-hover:block" />
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-18">
  <Footer />
</div>
   
         
    </section>
  );
};

return (
    <>
      <HomeHero/>
      <MakeUs/>
      <Whowant/>
      <Features/>
      <Testimonials/>
      <Trusted/>
      <LastSection/>
    </>
  );
}





