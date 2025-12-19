"use client"
import Image from "next/image";
import Footer from "../components/Footer";
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
import Header from '@/components/Header'


// Placeholder assets - **You must define these imports in your file**
// You'll need to update these paths in your actual file

import headerLogo from "@/assets/header-assets/headerLogo.png";
import footerBgLogo from "@/assets/footer-assets/footer-background-logo.png";

// Icon Imports
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";



export default function Home() {

const HomeHero = () => {
  return (
   
   <section
  className="
    relative 
    w-full 
    min-h-[850px] lg:min-h-[950px] lg:h-auto
    flex flex-col items-center justify-start lg:block
    bg-cover bg-center lg:bg-no-repeat lg:bg-[length:full_864px]
    mx-auto overflow-visible
    font-inter
  "
  style={{ backgroundImage: `url('${Homebg.src}')` }}
>

       
      {/* GRADIENT OVERLAY */}
      <div
        className="absolute top-0 left-0 z-10 backdrop-blur-[40px] lg:backdrop-blur-[60px] w-full h-full lg:w-[720px]"
        style={{
          background:
            "linear-gradient(134.5deg, rgba(91,74,62,0.7) 2.41%, rgba(117,88,64,0.7) 73.14%, rgba(0,0,0,0.595) 100%)",
        }}
      />
        <Header textWhite={true} />

      {/* CONTENT WRAPPER */}
      <div className="relative z-20 flex flex-col items-center w-full px-5 pt-32 pb-12 lg:p-0 lg:block lg:h-full font-inter">
        
        {/* --- 1. TITLE GROUP: MIND A LOT --- */}
        <div className="flex flex-row items-baseline justify-center gap-1.5 sm:gap-3 lg:contents whitespace-nowrap">
          {/* MIND */}
          <div
            className="
              relative text-[60px] xs:text-[62px] sm:text-[80px]
              font-semibold leading-none tracking-[0.02em]
              text-transparent bg-clip-text [-webkit-background-clip:text] bg-cover
              lg:absolute lg:text-[200px] lg:w-[566px] lg:h-[242px]
              lg:top-[158px] lg:left-[145px] lg:tracking-[0.06em]
              lg:bg-no-repeat lg:bg-[length:1440px_864px] lg:bg-[position:-154px_-158px]
            "
            style={{ backgroundImage: `url('${Homebg.src}')` }}
          >
            MIND
          </div>

          {/* A */}
          <div
            className="
              relative text-[60px] xs:text-[62px] sm:text-[80px]
              font-semibold leading-none tracking-[0.02em]
              text-transparent bg-clip-text [-webkit-background-clip:text] bg-cover
              lg:absolute lg:text-[200px] lg:w-[145px] lg:h-[242px]
              lg:top-[400px] lg:left-[575px] lg:tracking-[0.06em]
              lg:bg-no-repeat lg:bg-[length:1440px_864px] lg:bg-[position:-575px_-400px]
            "
            style={{ backgroundImage: `url('${Homebg.src}')` }}
          >
            A
          </div>

          {/* LOT */}
          <div
            className="
              relative text-[60px] xs:text-[62px] sm:text-[80px]
              font-semibold leading-none tracking-[0.02em] text-[#F6F2EB]
              lg:absolute lg:text-[200px] lg:w-[413px] lg:h-[242px]
              lg:top-[380px] lg:left-[750px] lg:tracking-[0.06em]
              lg:flex lg:items-center lg:justify-center
            "
          >
            LOT
          </div>
        </div>

        {/* --- 2. SUBTEXT --- */}
        <div
          className="
            relative mt-8 text-center text-[#FDE2CD]
            text-[16px] sm:text-[20px]
            font-normal leading-[1.3] tracking-[-0.04em]
            font-inter max-w-[280px] sm:max-w-none
            lg:absolute lg:mt-0 lg:w-[497px] lg:h-[58px]
            lg:top-[510px] lg:left-[150px]
            lg:text-left lg:text-[24px]
          "
        >
          You don’t have to say who you are to <br className="hidden lg:block" /> start feeling better
        </div>

        {/* --- 3. DESCRIPTION TEXT --- */}
        <div
          className="
            relative mt-4 px-4
            max-w-[420px] mx-auto
            font-inter
            text-[14px] sm:text-[16px]
            leading-[1.5]
            text-[#F6F2EB]/90
            text-center

            lg:absolute lg:px-0 lg:mx-0
            lg:w-[420px]
            lg:top-[240px] lg:left-[740px]
            lg:text-right
            lg:text-[#1C1C1BCC]
          "
        >
          <span className="block lg:hidden">
            Mind A Lot is an anonymous, app-based counselling platform that connects
            you instantly to a real, trained professional
          </span>

          <span className="hidden lg:block">
            Mind A Lot is an anonymous, app-based&nbsp;counselling
            <br />
            platform that connects you instantly to a real,
            <br />
            trained professional
          </span>
        </div>

        {/* --- 4. BOTTOM TAGLINE --- */}
        <div
          className="
            relative mt-12 text-[#F6F2EB] font-bold
            text-[15px] sm:text-[16px]
            text-center tracking-[-0.02em]
            font-inter
            lg:absolute lg:mt-0 lg:w-[280px] lg:h-[19px]
            lg:top-[640px] lg:left-[587px]
          "
        >
          Your safe space is just one tap away!
        </div>

        {/* --- 5. CTA BUTTONS --- */}
        <div
          className="
            relative flex flex-col items-center gap-[16px] mt-6 w-full
            lg:absolute lg:mt-0 lg:flex-row
            lg:w-[467px] lg:h-[60px]
            lg:top-[715px] lg:left-[490px]
          "
        >
       {/* BUTTON 1 */}
       <a
  href="https://wa.me/919606258596?text=Hi%20Mindalot%20Team,%20I%20would%20like%20to%20schedule%20a%20demo."
  target="_blank"
  rel="noopener noreferrer"
>
  

<button className="group relative w-[280px] lg:w-[212px] h-[56px] lg:h-[60px] rounded-[30px] border-2 border-[#F6F2EB] bg-transparent transition-all duration-300 hover:bg-[#5C4737] hover:border-transparent">
  <span className="absolute w-[120px] h-[22px] top-[17px] lg:top-[17px] left-[40px] lg:left-[20px] font-inter font-medium text-[15px] lg:text-[16px] text-[#F6F2EB]">
    Start chat now
  </span>
  {/* Circle increased to 52px, top adjusted to 2px/4px to center vertically */}
  <div className="absolute w-[50px] h-[50px] top-[1px] lg:top-[3px] right-[2px] lg:left-[155px] rounded-full bg-[#F6F2EB] flex items-center justify-center">
    <Image src={arrow} alt="arrow" className="w-[18px] lg:w-[20px] h-[18px] lg:h-[20px] transform transition-transform duration-300 group-hover:rotate-45" />
  </div>
</button>
</a>

{/* BUTTON 2 */}
<button className="group relative w-[280px] lg:w-[235px] h-[56px] lg:h-[60px] rounded-[30px] bg-[#F6F2EB] transition-all duration-300 hover:bg-[#5C4737]">
  <span className="absolute w-[159px] h-[25px] top-[18px] lg:top-[17px] left-[30px] lg:left-[20px] font-inter font-medium text-[16px] lg:text-[18px] text-[#5B4A3E] transition-colors duration-300 group-hover:text-white">
    Download the app
  </span>
  {/* Circle increased to 52px, top adjusted for 60px height button */}
  <div className="absolute w-[50px] h-[50px] top-[1px] lg:top-[5px] right-[2px] lg:left-[180px] rounded-full bg-[#FFFFFF] flex items-center justify-center">
    <Image src={arrow} alt="arrow" className="w-[18px] lg:w-[20px] h-[18px] lg:h-[20px] transform transition-transform duration-300 group-hover:rotate-45" />
  </div>
</button>
        </div>

      </div>
    </section>
  );
};


const MakeUs = () => {
  return (
    <section className="w-full overflow-x-hidden pt-12 pb-18 px-10 sm:px-14 lg:px-20">
      <h2
        className="
          text-3xl sm:text-4xl lg:text-5xl font-bold
          pl-[0px]
          mb-12 max-w-4xl
          font-['Nunito_Sans'] leading-tight
        "
      >
        What makes us different ?
      </h2>

      {/* Cards Grid */}
      <div className="
        grid
        gap-16
        md:gap-20
        lg:gap-24
        md:grid-cols-2
        lg:grid-cols-3
        max-w-7xl
        mx-auto
        px-4 sm:px-6 md:px-8 lg:px-0
      ">
        
        {/* Card */}
        {[ 
          { no: "01", title: "Instant Human Support", desc: "Start chatting the moment you feel overwhelmed. No forms. No queues. No matching wait. A real counsellor responds in seconds." },
          { no: "02", title: "100% Anonymous", desc: "You can choose a nickname. Your real identity stays private. Even our counsellors won’t know who you are. Feel safe, share freely." },
          { no: "03", title: "Flexible Access", desc: "Want to choose your own counsellor? Prefer video or voice? You can book that — all on your terms. Connect in the way that feels most comfortable for you." },
          { no: "04", title: "Goal-Based Nudges", desc: "Set your personal growth goals inside the app. We send you tiny, doable nudges to help you stay on track — one gentle step at a time." },
          { no: "05", title: "Mood Tracker", desc: "Just tap how you're feeling. We'll guide you from there. No mood history shown — because your past doesn’t need to hurt you again." },
          { no: "06", title: "Self-Discovery Tools & Library", desc: "Quick self-assessments, expert-curated videos, podcasts and real-life stories — all designed to help you understand your patterns, habits, stressors, and emotional needs, whenever you need clarity or a companion." }
        ].map((item) => (
          
          <div key={item.no} className="flex flex-col space-y-2">
            
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

              {/* Line */}
              <Image
                src={line}
                alt="line"
                className="
                  w-[96px] h-[18px] mt-1
                  transition-[width] duration-300
                  hover:w-[160px]
                  ml-[-3px]
                "
              />
            </div>

            {/* Title - Fixed width removed for responsiveness */}
            <div
              className="
                text-xl sm:text-2xl font-semibold text-[#5C4737]
                font-['Inter'] mt-0 w-[440px] max-w-md
              "
            >
              {item.title}
            </div>

            {/* Description - Responsive text and width */}
            <div
              className="
                text-base sm:text-lg font-normal text-[#6D6D6F]
                leading-relaxed font-['Inter']
                mt-2 w-full
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
    // Section uses flexible padding on small screens, and the original fixed height on large screens (lg)
    <section className="w-full bg-[#F6F2EB] py-10 sm:py-16 px-4 sm:px-6 lg:h-[1169px] lg:p-0 relative">

      {/* ------------------------------------------- */}
      {/* 1. DESKTOP-ONLY LAYOUT (lg:block) - Keeps original absolute positioning */}
      {/* ------------------------------------------- */}
      <div className="hidden lg:block w-full h-full relative">
        {/* All original absolute elements are placed here, but their `top` values must be relative to the section's top (1787px - 1787px = 0px).
            Since the original code used extreme `top` values, I'm adjusting them to be relative to the start of this section.
            I will use the original delta between elements: (1787px - original_top) for the new relative top.
            
            Original: top-[1787px] -> New: top-0
            Original: top-[1868px] -> New: top-[81px] (1868 - 1787)
            Original: top-[1972px] -> New: top-[185px] (1972 - 1787)
            ... and so on.
            
            However, to simplify, I will assume the original top value of 1787px was the intended top offset of the *whole component* from the top of the document. 
            I'll use a `top` offset inside a `relative` container to maintain the exact look.
        */}
        <div className="w-full h-full absolute top-[1787px]"> 
          {/* This wrapper is an attempt to preserve the original component's position relative to the document body if that was necessary. 
              A cleaner approach is to use the first element's 'top' as the reference point (top-0) inside the `lg:h-[1169px] relative` section.
              Let's use the cleaner, relative-to-section approach: */}
        </div>
        
        {/* Heading */}
        <h2 className="absolute top-0 left-[44px] w-[321px] h-[68px] font-['Nunito_Sans'] font-bold text-[50px] text-black">
          Who it’s For ?
        </h2>

        {/* Description */}
        <p className="absolute top-[81px] left-[44px] w-[381px] text-[18px] text-black/80 font-['Nunito_Sans']">
          Mind A Lot is for everyone who wants to feel better, grow stronger, and cope smarter.
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

        {/* Working Professionals (Original top: 2120px -> New top: 333px) */}
        <div className="absolute top-[333px] left-[44px] w-[410px] h-[262px] rounded-[12px] overflow-hidden">
          <Image src={w1} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90" />
          <div className="absolute bottom-[20px] left-[20px] text-white text-[30px] font-semibold">
            Working Professionals
          </div>
        </div>

        {/* Students (Original top: 1787px -> New top: 0px) */}
        <div className="absolute top-0 left-[476px] w-[410px] h-[594px] rounded-[12px] overflow-hidden">
          <Image src={w2} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_72%,rgba(0,0,0,.6)_83%)]" />
          <div className="absolute bottom-[20px] left-[20px] text-white text-[30px] font-semibold">
            Students & Young Adults
          </div>
        </div>

        {/* Others (Original top: 1787px -> New top: 0px) */}
        <div className="absolute top-0 left-[906px] w-[410px] h-[594px] rounded-[12px] overflow-hidden">
          <Image src={w3} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_76%,rgba(0,0,0,.8)_100%)]" />
          <div className="absolute bottom-[20px] left-[20px] text-white text-[30px] font-semibold">
            LGBTQ+ Community
          </div>
        </div>

        {/* Older Adults (Original top: 2402px -> New top: 615px) */}
        <div className="absolute top-[615px] left-[48px] w-[410px] h-[416px] rounded-[12px] overflow-hidden">
          <Image src={w4} alt="Older Adults" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 74.16%, rgba(0, 0, 0, 0.7) 100%)" }} />
          <div className="absolute top-[339px] left-[122px] w-[181px] h-[36px] font-['Inter'] font-semibold text-[30px] leading-[100%] tracking-[-3%] text-white">
            Older Adults
          </div>
        </div>

        {/* Neurodivergent Users (Original top: 2402px -> New top: 615px) */}
        <div className="absolute top-[615px] left-[480px] w-[410px] h-[416px] rounded-[12px] overflow-hidden">
          <Image src={w5} alt="Neurodivergent Users" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 71.88%, rgba(0, 0, 0, 0.8) 100%)" }} />
          <div className="absolute top-[339px] left-[54px] w-[322px] h-[36px] font-['Inter'] font-semibold text-[30px] leading-[100%] tracking-[-3%] text-white text-center">
            Neurodivergent Users
          </div>
        </div>

        {/* Anyone Needing Support (Original top: 2402px -> New top: 615px) */}
        <div className="absolute top-[615px] left-[910px] w-[410px] h-[416px] rounded-[12px] overflow-hidden">
          <Image src={w6} alt="Anyone Needing Support" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 71.51%, rgba(0, 0, 0, 0.8) 100%)" }} />
          <div className="absolute top-[339px] left-[32px] w-[366px] h-[36px] font-['Inter'] font-semibold text-[30px] leading-[100%] tracking-[-3%] text-white text-center">
            Anyone Needing Support
          </div>
        </div>
      </div>
      
      
      {/* ------------------------------------------- */}
      {/* 2. MOBILE/TABLET LAYOUT (lg:hidden) - Fully responsive and stackable */}
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
            Mind A Lot is for everyone who wants to feel better, grow stronger, and cope smarter.
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
        {/* Stacks on mobile, 2 columns on tablet (sm) */}
        <div className="grid gap-6 sm:grid-cols-2">

          {/* Card: Students & Young Adults (w2) */}
          <Card imageSrc={w2} altText="Students" title="Students & Young Adults" />

          {/* Card: LGBTQ+ Community (w3) */}
          <Card imageSrc={w3} altText="LGBTQ+ Community" title="LGBTQ+ Community" />
          
          {/* Card: Working Professionals (w1) */}
          <Card imageSrc={w1} altText="Working Professionals" title="Working Professionals" />
          
          {/* Card: Older Adults (w4) */}
          <Card imageSrc={w4} altText="Older Adults" title="Older Adults" />

          {/* Card: Neurodivergent Users (w5) */}
          <Card imageSrc={w5} altText="Neurodivergent Users" title="Neurodivergent Users" />
          
          {/* Card: Anyone Needing Support (w6) */}
          <Card imageSrc={w6} altText="Anyone Needing Support" title="Anyone Needing Support" />
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
const FeatureItem = ({ iconSrc, altText, title, isLast = false }: FeatureItemProps) => (
  <>
    <div className="flex items-center w-full min-h-[80px] py-4">
      {/* Icon Area */}
      <div className="flex items-center justify-center w-[80px] h-[80px] shrink-0">
        <Image
          src={iconSrc}
          alt={altText}
          className="w-[50px] h-[50px]"
        />
      </div>
      {/* Title Area */}
      <div className="flex-grow ml-4">
        <div className="text-black font-['Nunito_Sans'] text-lg sm:text-xl md:text-2xl font-semibold leading-tight tracking-[-0.03em]">
          {title}
        </div>
      </div>
    </div>
    {/* Divider Line - Hidden if 'isLast' or on large screens (as it's used within a grid column) */}
    {!isLast && (
      <div className="w-full h-px bg-gray-300 mx-auto" />
    )}
  </>
);

const Features = () => {
  // Assuming these image sources (fi1, f1l, featureIcon2, etc.) are imported
  // and need to be passed down to the FeatureItem component.
  return (
    <section className="relative w-full overflow-hidden mt-10 sm:mt-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        {/* === HEADER BLOCK === */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-black font-['Inter'] mb-4">
            Key features
          </h2>
          <p className="text-base sm:text-lg text-black font-medium font-['Nunito_Sans'] max-w-xl">
            Discover the essential features you need - all in one trusted platform.
          </p>
        </div>

        {/* === MAIN FEATURES GRID (F1-F8) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
          
          {/* --- LEFT COLUMN (F1-F4) --- */}
          <div className="space-y-0">
            <FeatureItem
              iconSrc={fi1}
              altText="24/7 Chat Icon"
              title="24/7 Live Chat With Human Counsellors"
            />
            <FeatureItem
              iconSrc={featureIcon2}
              altText="Goal Tracker Icon"
              title="Goal Tracker With Behavioural Nudges"
            />
            <FeatureItem
              iconSrc={featureIcon3}
              altText="Mood Guidance Icon"
              title="Mood-Based Guidance"
            />
            <FeatureItem
              iconSrc={featureIcon4}
              altText="Assessments Icon"
              title="Bite-Sized Self Assessments"
              isLast={true} // Last item in the column, no divider needed
            />
          </div>
          
          {/* --- RIGHT COLUMN (F5-F8) --- */}
          <div className="space-y-0 lg:mt-0"> {/* Ensure it aligns correctly on desktop */}
            <FeatureItem
              iconSrc={featureIcon8}
              altText="Anonymity Icon"
              title="100% Anonymity Guaranteed"
              isLast={true} // Last item in the column, no divider needed
            />
            <FeatureItem
              iconSrc={featureIcon6}
              altText="Language Icon"
              title="Works Across Countries & Languages"
            />
            <FeatureItem
              iconSrc={featureIcon7}
              altText="Hospital Icon"
              title="Escalation To Partner Hospitals For Psychiatric Care"
            />
             <FeatureItem
              iconSrc={featureIcon5}
              altText="Content Icon"
              title="Expert Videos, Podcasts, and Content Drops"
            />
            
          </div>

        </div>
      </div>
    </section>
  );
};




const Testimonials = () => {
  return (
    // Section uses flexible padding/height on small screens, and the original fixed height/margin on large screens (lg)
    <section 
      className="relative w-full bg-[#F6F2EB] py-16 sm:py-24 lg:pt-[102px] lg:h-[712px] overflow-hidden" 
    >
      
      {/* ------------------------------------------- */}
      {/* 1. DESKTOP-ONLY LAYOUT (lg:block) - Keeps original absolute positioning */}
      {/* ------------------------------------------- */}
      <div className="hidden lg:block w-full h-full relative">
        
        {/* --- LARGE RIGHT IMAGE --- */}
        <Image
          src={largeRightImage}
          alt="Testimonial Background Graphic"
          className="absolute w-[390px] h-[548px] opacity-100"
          style={{ top: '70px', left: '884px' }}
        />

        {/* --- MAIN LAYOUT (Container for all left/middle elements) --- */}
        {/* Adjusted top: 36px and left: 50px offset to be relative to the section start */}
        <div 
          className="relative w-[1323px] h-[616px] opacity-100" 
          style={{ marginTop: '36px', marginLeft: '50px' }}
        >
          
          {/* All absolute elements inside the desktop container are maintained with their relative offsets */}
          
          {/* 1. HEADING: Testimonials (top: 25px, left: 30px) */}
          <div
            className="absolute w-[274px] h-[61px] font-['Inter'] text-[50px] font-semibold text-[#5C4737]"
            style={{ top: '25px', left: '30px', letterSpacing: '-0.06em' }}
          >
            Testimonials
          </div>

          {/* 2. LARGE LEFT IMAGE (225x450px) (top: 115px, left: 30px) */}
          <Image
            src={largeLeftImage}
            alt="Testimonial Background Left"
            className="absolute w-[225.000015px] h-[450px] opacity-100"
            style={{ top: '115px', left: '30px' }}
          />

          {/* 3. SMALL CIRCLE IMAGE 1 (50x50px) (top: 129px, left: 130px) */}
          <Image
            src={testimonialIcon}
            alt="Profile Icon 1"
            className="absolute w-[50px] h-[50px] rounded-full opacity-100 border border-black"
            style={{ top: '129px', left: '130px' }}
          />
          
          {/* 8. SMALL CIRCLE IMAGE 2 (50x50px, -180 deg) (top: 501px, left: 130px) */}
          <Image
            src={testimonialIcon2}
            alt="Profile Icon 2"
            className="absolute w-[50px] h-[50px] rounded-full opacity-100"
            style={{ top: '501px', left: '130px', transform: 'rotate(-180deg)' }}
          />

          {/* 9. SMALL CIRCLE BORDER 2 (50x50px) (top: 501px, left: 130px) */}
          <div
            className="absolute w-[50px] h-[50px] rounded-full"
            style={{ 
              top: '501px', 
              left: '130px', 
              border: '1px solid rgba(0, 0, 0, 0.25)',
              transform: 'rotate(-180deg)'
            }}
          />

          {/* 10. SQUARE CONTAINER/BORDER (100x100px) (top: 290px, left: 205px) */}
          <div
            className="absolute w-[100px] h-[100px]"
            style={{ top: '290px', left: '205px' }}
          />
          
          {/* 13. NEW IMAGE (130x130px) (top: 275px, left: 190px) */}
          <Image
            src={testimonialImageLarge}
            alt="Medium decorative element (130x130)"
            className="absolute w-[130px] h-[130px] opacity-100"
            style={{ top: '275px', left: '190px' }}
          />
          
          {/* 12. NEW IMAGE (100x100px) (top: 290px, left: 205px) */}
          <Image
            src={testimonialImageSmall}
            alt="Small decorative element (100x100)"
            className="absolute w-[100px] h-[100px] opacity-100"
            style={{ top: '290px', left: '205px' }}
          />

          {/* 14. NEW IMAGE (80x80px Circle) - ADDED (top: 300px, left: 215px) */}
          <Image
            src={testimonialImageCircle}
            alt="Circular decorative element (80x80)"
            className="absolute w-[80px] h-[80px] opacity-100 rounded-full"
            style={{ top: '300px', left: '215px' }}
          />
          
          {/* 4. QUOTE LEFT IMAGE LAYOUT (top: 133px, left: 292px) */}
          <div
            className="absolute w-[125px] h-[125px] opacity-100 flex items-center justify-center"
            style={{ top: '133px', left: '292px', transform: 'rotate(-180deg)' }}
          >
            <Image
              src={leftQuoteImage} 
              alt="Quote Left Design" 
              className="absolute w-[51.822921px] h-[93.4375px] opacity-100"
              style={{ top: '16.83px', left: '36.72px', transform: 'rotate(-180deg)' }}
            />
          </div>

          {/* 5. QUOTE RIGHT IMAGE LAYOUT (top: 133px, left: 367px) */}
          <div
            className="absolute w-[125px] h-[125px] opacity-100 flex items-center justify-center"
            style={{ top: '133px', left: '367px', transform: 'rotate(-180deg)' }}
          >
            <Image
              src={rightQuoteImage} 
              alt="Quote Right Design" 
              className="absolute w-[51.822921px] h-[93.4375px] opacity-100"
              style={{ top: '16.83px', left: '36.72px', transform: 'rotate(-180deg)' }}
            />
          </div>

          {/* 6. QUOTE TEXT (top: 305px, left: 365px) */}
          <div
            className="absolute w-[458px] h-[70px] text-[#0D0D0D] font-['Inter'] text-[24px] font-medium"
            style={{ top: '305px', left: '365px', lineHeight: '35px', letterSpacing: '-0.03em' }}
          >
            No one asked me for my name, and yet I’ve never felt more seen.
          </div>

          {/* 7. STUDENT INFO (top: 415px, left: 601px) */}
          <div
            className="absolute w-[222px] h-[35px] text-[#6D6D6F] font-['Inter'] text-[24px] font-normal"
            style={{ top: '415px', left: '601px', lineHeight: '35px', letterSpacing: '-0.03em' }}
          >
            — Student, Chennai
          </div>

        </div>
      </div>
      
      
      {/* ------------------------------------------- */}
      {/* 2. MOBILE/TABLET LAYOUT (lg:hidden) - Fully responsive and stackable */}
      {/* ------------------------------------------- */}
      <div className="lg:hidden max-w-xl mx-auto px-4 sm:px-6">
        
        {/* 1. HEADING: Testimonials */}
        <h2 className="text-4xl sm:text-5xl font-semibold text-[#5C4737] font-['Inter'] mb-10">
          Testimonials
        </h2>

        {/* 2. QUOTE CARD/BLOCK */}
        <div className="relative p-6 sm:p-8 bg-white/60 rounded-xl shadow-lg border border-gray-100">
            
            {/* Quote Icon (Simplified/Centered) */}
            <Image
                src={rightQuoteImage} // Using one of the original quote images as a simple icon
                alt="Quote Icon"
                className="w-12 h-auto text-[#5C4737] mb-4 rotate-180" 
            />
            
            {/* QUOTE TEXT */}
            <p className="text-[#0D0D0D] font-['Inter'] text-lg sm:text-xl font-medium leading-relaxed mb-4">
                No one asked me for my name, and yet I’ve never felt more seen.
            </p>
            
            {/* STUDENT INFO */}
            <p className="text-right text-[#6D6D6F] font-['Inter'] text-base sm:text-lg font-normal">
                — Student, Chennai
            </p>
            
            {/* Optional: Simple decorative element integrated into the mobile card */}
            <div className="absolute top-0 right-0 p-2 opacity-50">
                <Image
                    src={testimonialIcon}
                    alt="Decorative Icon"
                    className="w-8 h-8 rounded-full"
                />
            </div>
        </div>

        {/* Optional: Add a decorative element below the quote on tablet screens */}
        <div className="hidden sm:block mt-8 text-center">
            <Image
                src={largeLeftImage} // Using the large image as a background element
                alt="Decorative Pattern"
                className="w-40 h-auto opacity-30 mx-auto"
            />
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
    // Add more logos if needed to fill the space
  ];

  return (
    // Responsive section height and padding
    <section 
      className="relative w-full bg-[#F6F2EB] py-12 sm:py-16 lg:h-[280px] overflow-hidden " 
    >
      
      {/* ------------------------------------------- */}
      {/* 1. DESKTOP-ONLY LAYOUT (lg:block) - Keeps original absolute positioning */}
      {/* ------------------------------------------- */}
      <div className="hidden lg:block w-full h-full relative">
        
        {/* 1. Heading: Trusted by 50+ Clients (top: 66px, left: 86px) */}
        <p
          className="absolute font-['Nunito_Sans'] font-medium text-[40px] leading-none text-black w-[410px] h-[55px]"
          style={{ top: '66px', left: '86px' }}
        >
          Trusted by 50+ Clients
        </p>
        
        {/* 2. Description (top: 135px, left: 86px) */}
        <p
          className="absolute font-['Nunito_Sans'] font-normal text-[18px] leading-none text-black w-[406px] h-[50px]"
          style={{ top: '135px', left: '86px' }}
        >
          Trusted by leading schools and institutions that care for student well-being.
        </p>

        {/* 3. Images Layout (Container for Logo series - top: 49px, left: 530px) */}
        {/* Using the LogoCarousel here, restricted by the original absolute container */}
        <div
          className="absolute w-[922px] h-[144px] overflow-hidden"
          style={{ top: '49px', left: '530px' }}
        >
          <LogoCarousel logos={logos} />
        </div>
        
        {/* NOTE: If you needed the original hard-coded absolute image positions for desktop, 
                 they would replace the LogoCarousel call above. However, using the Carousel 
                 here maintains the requested animation on desktop too. */}
      </div>
      
      
      {/* ------------------------------------------- */}
      {/* 2. MOBILE/TABLET LAYOUT (lg:hidden) - Fully responsive and stackable */}
      {/* ------------------------------------------- */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Content (Stacked) */}
        <div className="mb-8">
          {/* 1. Heading: Trusted by 50+ Clients */}
          <h2 className="font-['Nunito_Sans'] font-medium text-3xl sm:text-4xl text-black mb-3">
            Trusted by 50+ Clients
          </h2>
          
          {/* 2. Description */}
          <p className="font-['Nunito_Sans'] font-normal text-base sm:text-lg text-black max-w-md">
            Trusted by leading schools and institutions that care for student well-being.
          </p>
        </div>

        {/* 3. Images Layout (Animated Logo Carousel) */}
        <div className="mt-8">
          <LogoCarousel logos={logos} />
        </div>
      </div>
    </section>
  );
};









const LastSection = () => {
  const Footer = (
    <main
      className="relative w-full text-[#5B4A3E] overflow-x-hidden"
      style={{
        background:
          "linear-gradient(125.54deg, #5B4B3E -12.44%, #F6F1EB -2.52%, #E8DED4 19.98%, #ABA093 80.72%, #8A8077 101.75%)",
      }}
    >
      {/* Overlay Image */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          top: "50px",
          bottom: "-20px",
          maxHeight: "calc(100% - 70px)",
        }}
      >
        <Image
          src={footerBgLogo}
          alt="footer overlay logo"
          width={500}
          height={500}
          style={{ height: "100%", width: "auto", objectFit: "contain", opacity: 0.1 }}
          priority
        />
      </div>

      {/* Footer Content Container */}
      <div className="relative z-10 mx-auto max-w-[1350px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pt-[150px] pb-[250px] sm:pt-[175px] sm:pb-[110px] md:pt-[200px] md:pb-[120px]">
        <div
          className="
            w-full
            flex flex-col
            lg:flex-row
            justify-between
            items-center
            lg:items-start
            gap-8 sm:gap-10 md:gap-12 lg:gap-24
          "
        >
          {/* Column 1: Logo and About */}
          <div className="max-w-[300px] sm:max-w-[340px] md:max-w-[360px] w-full text-center lg:text-left mx-auto">
            <Image src={headerLogo} alt="Mind Alot logo" width={150} height={40} className="mx-auto lg:mx-0" /> 
            <p className="mt-6 text-[14px] sm:text-[15px] leading-relaxed">
              Anonymous support that listens, nudges, and grows with you. When your mind feels too much, we're just a tap away.
            </p>

            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-10">
              <Link href="#" className="flex items-center gap-2 hover:text-[#8C7A6B]">
                <span className="text-[24px] sm:text-[28px] leading-none">•</span> Terms & Conditions
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-[#8C7A6B]">
                <span className="text-[24px] sm:text-[28px] leading-none">•</span> Privacy Policy
              </Link>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-1.5 sm:gap-2 md:gap-3 text-[13px] sm:text-[14px] md:text-[15px]">
              <li>
                <Link href="/features" className="hover:text-[#8C7A6B]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#8C7A6B]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/resource" className="hover:text-[#8C7A6B]">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="max-w-[280px] sm:max-w-[300px] md:max-w-[320px] mx-auto w-full">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-center lg:text-left">
              Contact
            </h3>
            <div className="flex flex-col gap-2.5 sm:gap-3 md:gap-4 text-[13px] sm:text-[14px] md:text-[15px] text-center lg:text-left items-center lg:items-start"> 
              <div className="flex items-center gap-2.5 sm:gap-3 hover:text-[#8C7A6B]">
                <Mail className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" stroke="#5B4A3E" />{" "}
                <a href="mailto:support@mindalot.com">support@mindalot.com</a>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3 hover:text-[#8C7A6B]">
                <Phone className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" stroke="#5B4A3E" /> +91-96062-58596
              </div>
              <div className="flex flex-col items-center lg:items-start gap-2.5 sm:gap-3 hover:text-[#8C7A6B] leading-tight">
                <div className="flex items-start gap-2.5 sm:gap-3"> 
                  <MapPin className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" stroke="#5B4A3E" />
                  <span className="inline-block text-left text-[13px] sm:text-[14px]">
                      #122K, 1st block, 14th cross, 19th 'B' Main,<br />
                      Rajajinagar, Bengaluru – 560010
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Social Links */}
          <div className="text-center lg:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Follow us on
            </h3>
            <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5">
              <a href="#" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <Instagram stroke="#5B4A3E" className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] hover:opacity-70" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <FaLinkedin color="#5B4A3E" className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] hover:opacity-70" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                <IoLogoYoutube color="#5B4A3E" className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] hover:opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  return (
    <section className="relative mx-auto w-full min-h-[1200px] sm:min-h-[900px] md:min-h-[1000px] bg-white overflow-x-hidden overflow-y-hidden ">
      {/* CTA Wrapper */}
      <div
        className="
          absolute 
          top-[100px] sm:top-[120px] md:top-[140px] lg:top-[156px] 
          left-0 right-0 mx-auto 
          z-40

          w-full max-w-[95vw]
          sm:w-[90vw] sm:max-w-[500px]
          md:w-[80vw] md:max-w-[700px]
          lg:w-[1250px] lg:max-w-none

          h-auto md:h-[360px]

          px-4 md:px-0
          py-10 md:py-0

          rounded-[20px] md:rounded-[30px]
        "
        style={{
          border: "10px solid #FFFFFF",
          backgroundColor: "#BFBFBD",
          opacity: 1,
          overflow: "hidden", 
        }}
      >
        {/* Background image container */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <Image
            src={rocksImage}
            alt="CTA Background"
            fill
            className="object-cover"
            style={{
              border: "10px solid",
              borderImageSource:
                "linear-gradient(94.54deg, #9C7A64 0.44%, #624D37 19.66%, #D8D0CA 73.19%, #94897F 100%)",
              borderImageSlice: 1,
            }}
            priority
          />
        </div>

        <div className="relative z-20 flex h-full flex-col items-center justify-center pt-[30px]">
          {/* Responsive Headlines */}
          <p
            className="
              text-center font-semibold 
              text-[24px] sm:text-[28px] md:text-[36px] lg:text-[50px]
              leading-[32px] sm:leading-[38px] md:leading-[52px] lg:leading-[70px]
              max-w-full md:w-[863px]
              px-2 md:px-0
            "
            style={{
              fontFamily: "var(--font-inter-sans)",
              letterSpacing: "-0.06em",
              color: "#F6F2EB",
              margin: "0 0 10px 0",
            }}
          >
            Take the first step toward feeling better.
          </p>

          <p
            className="
              text-center font-normal
              text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px]
              leading-[22px] sm:leading-[24px] md:leading-[28px] lg:leading-[35px]
              max-w-full md:w-[684px]
              px-3 md:px-0
            "
            style={{
              fontFamily: "var(--font-inter-sans)",
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              margin: "0 0 40px 0",
            }}
          >
            Start talking. Stay anonymous. Feel lighter. Because your mind matters a lot.
          </p>

          {/* Responsive Buttons */}
          <div
            className="
              z-30
              flex flex-row flex-wrap
              gap-4 sm:gap-6
              mt-4 
              w-full 
              px-4 md:px-0 
              justify-center 
              items-center 
              max-w-[600px] sm:max-w-[700px] 
              mx-auto
            "
          >
            {/* Button 1 */}
            <a
              href="mailto:hello@mindalot.com"
              className="
                group relative 
                flex items-center justify-start
                w-[212px] h-[54px] sm:h-[60px] 
                rounded-[30px] 
                border-2 border-[#F6F2EB] 
                bg-transparent no-underline overflow-hidden 
                transition-all duration-300 
                hover:border-0 hover:bg-[#5C4737]
              "
            >
              <span
                className="
                  absolute top-[18px] sm:top-[21px] left-[20px] sm:left-[24px] 
                  font-inter font-medium 
                  text-[15px] sm:text-[16px] leading-none 
                  text-[#F6F2EB] 
                  whitespace-nowrap 
                  transition-colors duration-200
                "
                style={{ letterSpacing: "-0.03em" }}
              >
                Talk To Our Team
              </span>

              <div
                className="
                  absolute top-[2px] sm:top-[3px] right-[10px] 
                  w-[44px] sm:w-[50px] h-[44px] sm:h-[50px] 
                  rounded-full 
                  flex items-center justify-center 
                  bg-[#5B4A3E] 
                  transition-all duration-300 
                  group-hover:bg-white 
                  group-hover:rotate-45 
                "
              >
                <Image
                  src={newarrow}
                  alt="arrow"
                  width={16}
                  height={16}
                  className="block group-hover:hidden w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]"
                />
                <Image
                  src={blackarrow}
                  alt="arrow"
                  width={16}
                  height={16}
                  className="hidden group-hover:block w-[16px] sm:w-[18px] h-[16px] sm:h-[18px] transition-all"
                />
              </div>
            </a>

            {/* Button 2 */}
            <a
              href="mailto:support@mindalot.care"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative 
                flex items-center justify-start
                w-[212px] h-[54px] sm:h-[60px] 
                rounded-[30px] 
                border-2 border-[#F6F2EB] 
                bg-transparent no-underline overflow-hidden 
                transition-all duration-300 
                hover:border-0 hover:bg-[#5C4737]
              "
            >
              <span
                className="
                  absolute top-[18px] sm:top-[21px] left-[20px] sm:left-[24px] 
                  font-inter font-medium 
                  text-[15px] sm:text-[16px] leading-none 
                  text-[#F6F2EB] 
                  whitespace-nowrap 
                  transition-colors duration-200
                "
                style={{ letterSpacing: "-0.03em" }}
              >
                Partner With Us
              </span>

              <div
                className="
                  absolute top-[2px] sm:top-[3px] right-[10px] 
                  w-[44px] sm:w-[50px] h-[44px] sm:h-[50px] 
                  rounded-full 
                  flex items-center justify-center 
                  bg-[#5B4A3E] 
                  transition-all duration-300 
                  group-hover:bg-white 
                  group-hover:rotate-45 
                "
              >
                <Image
                  src={newarrow}
                  alt="arrow"
                  width={16}
                  height={16}
                  className="block group-hover:hidden w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]"
                />
                <Image
                  src={blackarrow}
                  alt="arrow"
                  width={16}
                  height={16}
                  className="hidden group-hover:block w-[16px] sm:w-[18px] h-[16px] sm:h-[18px] transition-all"
                />
              </div>
            </a>

            {/* Button 3 */}
            <a
              href="https://play.google.com/store/games"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative 
                flex items-center justify-start
                w-[212px] h-[54px] sm:h-[60px] 
                rounded-[30px] 
                border-2 border-[#F6F2EB] 
                bg-transparent no-underline overflow-hidden 
                transition-all duration-300 
                hover:border-0 hover:bg-[#5C4737]
              "
            >
              <span
                className="
                  absolute top-[18px] sm:top-[21px] left-[20px] sm:left-[24px] 
                  font-inter font-medium 
                  text-[15px] sm:text-[16px] leading-none 
                  text-[#F6F2EB] 
                  whitespace-nowrap 
                  transition-colors duration-200
                "
                style={{ letterSpacing: "-0.03em" }}
              >
                Download App
              </span>

              <div
                className="
                  absolute top-[2px] sm:top-[3px] right-[10px] 
                  w-[44px] sm:w-[50px] h-[44px] sm:h-[50px] 
                  rounded-full 
                  flex items-center justify-center 
                  bg-[#5B4A3E] 
                  transition-all duration-300 
                  group-hover:bg-white 
                  group-hover:rotate-45 
                "
              >
                <Image
                  src={newarrow}
                  alt="arrow"
                  width={16}
                  height={16}
                  className="block group-hover:hidden w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]"
                />
                <Image
                  src={blackarrow}
                  alt="arrow"
                  width={16}
                  height={16}
                  className="hidden group-hover:block w-[16px] sm:w-[18px] h-[16px] sm:h-[18px] transition-all"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative top-[430px] sm:top-[350px] md:top-[400px] pb-10">
        {Footer}
      </div>
    </section>
  );
};








return (
    <>
      <HomeHero />
      <MakeUs/>
      <Whowant/>
      <Features/>
      <Testimonials/>
      <Trusted/>
      <LastSection/>
    </>
  );
}

