"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Play from "../../assets/feature-assets/Group 2.png";
import arrow from "../../assets/home-page/Footer/black arr.png";
import Header from "@/components/Header";
import fea1 from "../../assets/feature-assets/Rectangle 26.png";
import fea2 from "../../assets/feature-assets/93f85c7802f59769365d4720d0a4834f46ff8ce2.jpg";
import fea3 from "../../assets/feature-assets/d20844d8e41ef9e6b2fdccfb23e095dc956b76a3.jpg";
import fea4 from "../../assets/feature-assets/84551b43aa9d215ba3d2f815ec720bd3fd30b249.jpg";
import fea5 from "../../assets/feature-assets/7fb6dcf525f693bd6a40d3ffce8c375340d5ab1f.jpg";
import Footer from "@/components/Footer";


// Redirect based on device
// const redirectToAppStore = () => {
//   if (typeof window === "undefined") return;

//   const userAgent = navigator.userAgent || navigator.vendor;

//   // iOS devices
//   if (/iPad|iPhone|iPod/.test(userAgent)) {
//     window.location.href =
//       "https://apps.apple.com/in/app/zenit-edu/id6748683332";
//     return;
//   }

//   // Android devices
//   if (/android/i.test(userAgent)) {
//     window.location.href =
//       "https://play.google.com/store/apps/details?id=com.jagrati.zenit&pcampaignid=web_share";
//     return;
//   }

//   // Desktop fallback
//   window.location.href =
//     "https://play.google.com/store/apps/details?id=com.jagrati.zenit&pcampaignid=web_share";
// };


const redirectToAppStore = () => {
  if (typeof window === "undefined") return;

  const userAgent = navigator.userAgent || navigator.vendor || "";
  const platform = navigator.platform || "";

  // 📱 iOS devices
  if (/iPad|iPhone|iPod/.test(userAgent)) {
    window.location.href =
      "https://apps.apple.com/in/app/zenit-edu/id6748683332";
    return;
  }

  // 📱 Android devices
  if (/android/i.test(userAgent)) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.jagrati.zenit&pcampaignid=web_share";
    return;
  }

  // 🖥️ macOS laptops
  if (platform.startsWith("Mac") || /Macintosh|Mac OS X/.test(userAgent)) {
    window.location.href = "https://apps.apple.com/in/app/zenit-edu/id6748683332"; // your website / landing page
    return;
  }

  // 🖥️ Windows laptops
  if (platform.startsWith("Win") || /Windows NT/.test(userAgent)) {
    window.location.href = "https://play.google.com/store/apps/details?id=com.jagrati.zenit&pcampaignid=web_share"; // your website / landing page
    return;
  }

  // 🌐 Fallback (other devices)
  window.location.href = "https://zenit.edu";
};
export default function FeaturePage () {
  const FeatureHome = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto min-h-[320px] md:min-h-[570px] overflow-hidden flex flex-col items-center py-1 md:py-0">

      {/* Background Video */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      > */}
      <video
  className="absolute inset-0 w-full h-full object-cover object-bottom"
  autoPlay
  loop
  muted
  playsInline
>
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <Header navTextColor="#FFFFFF" />

        {/* <h2
          className="w-full max-w-[740px] font-['Inter'] font-semibold text-white text-center
                     text-3xl md:text-[60px]
                     leading-tight md:leading-[80px]
                     tracking-[-0.06em]
                     mt-20 md:mt-[150px] px-4"
        >
          All-In-One Support System
        </h2> */}

        {/* Play Icon */}
        {/* <div className="relative mt-8 md:mt-[100px] cursor-pointer hover:scale-105 transition-transform duration-300">
          <Image
            src={Play}
            alt="Support System Icon"
            className="w-[50px] h-[60px] md:w-[73px] md:h-[86.58px]"
          />
        </div> */}
      </div>

    </section>
  );
};
  
// const FeatureHome = () => {
//   return (
    
//     <section className="relative w-full max-w-[1440px] mx-auto min-h-[320px] md:min-h-[570px] bg-[#D9D9D9] opacity-100 overflow-hidden flex flex-col items-center py-1 md:py-0">
//       <Header navTextColor="#755840"/>
//       {/* Heading */}
//       {/* Replaced absolute positioning with margins. text-3xl for mobile, text-[60px] for desktop */}
//       <h2 
//         className="w-full max-w-[740px] font-['Inter'] font-semibold text-[#5C4737] text-center
//                    text-3xl md:text-[60px] 
//                    leading-tight md:leading-[80px] 
//                    tracking-[-0.06em]
//                    mt-8 md:mt-[50px] px-4"
//         style={{ fontStyle: 'normal' }}
//       >
//         All-In-One Support System
//       </h2>

//       {/* Play Icon */}
//       {/* Added cursor-pointer. Used mt- (margin-top) to push it down from the heading */}
//       <div className="relative mt-8 md:mt-[100px] cursor-pointer hover:scale-105 transition-transform duration-300">
//         <Image 
//           src={Play} 
//           alt="Support System Icon"
//           className="w-[50px] h-[60px] md:w-[73px] md:h-[86.58px] rounded-[3px]"
//         />
//       </div>

//       {/* Button */}
//       {/* The button container is now relative to the flex flow (using margin-top), 
//           but the insides remain absolute as per your specific design. */}
      


//     </section>
//   );
// };

const FeatureOffer = () => {
  const [activeStep, setActiveStep] = useState(0);

  // --- Scroll Listener ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Thresholds based on your text positions
      if (scrollY < 850) setActiveStep(0);
      else if (scrollY < 1050) setActiveStep(1);
      else if (scrollY < 1250) setActiveStep(2);
      else if (scrollY < 1450) setActiveStep(3);
      else setActiveStep(4);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Styling Constants ---
  const baseImgStyle = "absolute left-[96px] w-[538px] h-[500px] rounded-[20px] object-cover shadow-2xl";
  const stackBorder = "border-[4px] border-white";
  const numStyle = "font-['Inter'] font-semibold text-[24px] leading-[100%] tracking-[-0.03em] text-right text-[#755840]";
  const titleStyle = "font-['Inter'] font-semibold text-[50px] leading-[100%] tracking-[-0.03em] text-[#5C4737]";
  const descStyle = "font-['Inter'] font-medium text-[18px] leading-[35px] tracking-[-0.03em] text-[#6D6D6F]";

  // Shared transition string to keep JSX clean
  const transitionStyle = "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";
  const getImageStyle = (index: number) => {
  const offset = (index - activeStep) * 90;

  return {
    transform: `translateY(${offset}px) scale(${index < activeStep ? 0.9 : 1})`,
    opacity: index < activeStep ? 0 : 1,
    transition: transitionStyle,
  };
};


  return (
    <section className="w-full">

      {/* MOBILE / TABLET (UNTOUCHED) */}
      <div className="block md:hidden px-4 py-8">
        <h2 className="font-['Inter'] font-semibold text-[32px] text-center text-[#5C4737] mb-6">Features we offer !</h2>
        <div className="flex justify-center mt-4">
            <div className="relative w-full max-w-[320px] h-[760px] overflow-visible">
              <Image src={fea1} alt="fea-front" className="absolute left-1/2 top-[0px] -translate-x-1/2 w-[100%] h-[260px] rounded-[18px] object-cover shadow-2xl z-50" />
              <Image src={fea2} alt="fea-2" className="absolute left-1/2 top-[90px] -translate-x-1/2 w-[100%] h-[260px] rounded-[18px] object-cover border-[4px] border-white shadow-2xl z-40" />
              <Image src={fea3} alt="fea-3" className="absolute left-1/2 top-[180px] -translate-x-1/2 w-[100%] h-[260px] rounded-[18px] object-cover border-[4px] border-white shadow-2xl z-30" />
              <Image src={fea4} alt="fea-4" className="absolute left-1/2 top-[270px] -translate-x-1/2 w-[100%] h-[260px] rounded-[18px] object-cover border-[4px] border-white shadow-2xl z-20" />
              <Image src={fea5} alt="fea-back" className="absolute left-1/2 top-[360px] -translate-x-1/2 w-[100%] h-[260px] rounded-[18px] object-cover border-[4px] border-white shadow-2xl z-10" />
            </div>
          </div>
       <div className="mt-[-50px] space-y-8">

  {/* 01 */}
  <div className="flex gap-4">
    <div className="text-[20px] font-semibold text-[#755840]">01</div>
    <div>
      <h3 className="text-[22px] font-semibold text-[#5C4737]">
       Live chat with counsellors
      </h3>
      <p className="text-[16px] text-[#6D6D6F]">
        Connect instantly with trained professionals available 24/7, offering real-time emotional support.
      </p>
    </div>
  </div>

  {/* 02 */}
  <div className="flex gap-4">
    <div className="text-[20px] font-semibold text-[#755840]">02</div>
    <div>
      <h3 className="text-[22px] font-semibold text-[#5C4737]">
        Anonymity first
      </h3>
      <p className="text-[16px] text-[#6D6D6F]">
        Your privacy comes first — counsellors never see your personal details.
      </p>
    </div>
  </div>

  {/* 03 */}
  <div className="flex gap-4">
    <div className="text-[20px] font-semibold text-[#755840]">03</div>
    <div>
      <h3 className="text-[22px] font-semibold text-[#5C4737]">
        Goal-based nudge
      </h3>
      <p className="text-[16px] text-[#6D6D6F]">
        Set achievable wellness goals and receive thoughtful reminders.
      </p>
    </div>
  </div>

  {/* 04 */}
  <div className="flex gap-4">
    <div className="text-[20px] font-semibold text-[#755840]">04</div>
    <div>
      <h3 className="text-[22px] font-semibold text-[#5C4737]">
        Mood tracker
      </h3>
      <p className="text-[16px] text-[#6D6D6F]">
        Tap once to express how you feel and get the right support.
      </p>
    </div>
  </div>

  {/* 05 */}
  <div className="flex gap-4">
    <div className="text-[20px] font-semibold text-[#755840]">05</div>
    <div>
      <h3 className="text-[22px] font-semibold text-[#5C4737]">
        Self-reflection check-ins
      </h3>
      <p className="text-[16px] text-[#6D6D6F]">
        Quick reflective assessments to understand your mental health.
      </p>
    </div>
  </div>

  {/* 06 */}
  <div className="flex gap-4">
    <div className="text-[20px] font-semibold text-[#755840]">06</div>
    <div>
      <h3 className="text-[22px] font-semibold text-[#5C4737]">
        Content hub
      </h3>
      <p className="text-[16px] text-[#6D6D6F]">
        Videos, podcasts, and blogs crafted by experts.
      </p>
    </div>
  </div>

  {/* 07 */}
  <div className="flex gap-4">
    <div className="text-[20px] font-semibold text-[#755840]">07</div>
    <div>
      <h3 className="text-[22px] font-semibold text-[#5C4737]">
        Escalation ready
      </h3>
      <p className="text-[16px] text-[#6D6D6F]">
        Smooth referrals to licensed hospitals when deeper care is needed.
      </p>
    </div>
  </div>

</div>

      </div>

      {/* DESKTOP */}
      <div className="hidden md:block w-full h-[260vh]">
        
        {/* ==========================
            LEFT SIDE: IMAGE STACK
           ========================== */}
        <h2 className="absolute top-[740px] left-[86px] w-[397px] h-[61px] font-['Inter'] font-semibold text-[50px] leading-[100%] tracking-[-0.06em] text-[#5C4737]">
          Features we offer !
        </h2>

        {/* --- Image 1 (Index 0) --- */}
       <Image
  src={fea1}
  alt="Feature Highlight 1"
  className={`${baseImgStyle} top-[840px] z-50`}
  style={getImageStyle(0)}
/>

        {/* --- Image 2 (Index 1) --- */}
      
     <Image
  src={fea2}
  alt="Feature Highlight 2"
  className={`${baseImgStyle} ${stackBorder} top-[940px] z-40`}
  style={getImageStyle(1)}
/>

        
        {/* --- Image 3 (Index 2) --- */}
      <Image
  src={fea3}
  alt="Feature Highlight 3"
  className={`${baseImgStyle} ${stackBorder} top-[1040px] z-40`}
  style={getImageStyle(2)}
/>

        
        {/* --- Image 4 (Index 3) --- */}
     <Image
  src={fea4}
  alt="Feature Highlight 4"
  className={`${baseImgStyle} ${stackBorder} top-[1240px] z-40`}
  style={getImageStyle(3)}
/>

        
        {/* --- Image 5 (Index 4) --- */}
        <Image
  src={fea5}
  alt="Feature Highlight 5"
  className={`${baseImgStyle} ${stackBorder} top-[1440px] z-400`}
  style={getImageStyle(4)}
/>



        {/* ==========================
            RIGHT SIDE: TEXT CONTENT (UNCHANGED)
           ========================== */}

        <div className={`absolute top-[752px] left-[689px] w-[27px] h-[29px] ${numStyle}`}>01</div>
        {/* <h3 className={`absolute top-[744px] left-[736px] w-[479px] h-[61px] ${titleStyle}`}>Live chat with counsellors</h3> */}
        <h3
  className={`absolute top-[744px] left-[736px] whitespace-nowrap ${titleStyle}`}
>
  Live chat with counsellors
</h3>

        <p className={`absolute top-[815px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
          Connect instantly with trained professionals available 24/7, offering real-time emotional support without any waiting or delays.
        </p>

        <div className={`absolute top-[939px] left-[685px] w-[31px] h-[29px] ${numStyle}`}>02</div>
        <h3 className={`absolute top-[931px] left-[736px] w-[351px] h-[61px] ${titleStyle}`}>Anonymity first</h3>
        <p className={`absolute top-[1002px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
          Your privacy comes first — use your chosen name at all times. Counsellors never see your personal details or identity.
        </p>

        <div className={`absolute top-[1126px] left-[685px] w-[31px] h-[29px] ${numStyle}`}>03</div>
        <h3 className={`absolute top-[1118px] left-[736px] w-[426px] h-[61px] ${titleStyle}`}>Goal-based nudge</h3>
        <p className={`absolute top-[1189px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
         Set simple, achievable wellness goals and receive thoughtful nudges.
        </p>

        <div className={`absolute top-[1313px] left-[684px] w-[32px] h-[29px] ${numStyle}`}>04</div>
        <h3 className={`absolute top-[1305px] left-[736px] w-[307px] h-[61px] ${titleStyle}`}>Mood tracker</h3>
        <p className={`absolute top-[1376px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
          Just tap and express how you feel — no overthinking or long forms. Get the right support without judgment or analysis paralysis.
        </p>

        <div className={`absolute top-[1500px] left-[685px] w-[31px] h-[29px] ${numStyle}`}>05</div>
        {/* <h3 className={`absolute top-[1492px] left-[736px] w-[413px] h-[61px] ${titleStyle}`}>Self-reflection check-ins</h3> */}
        <h3
  className={`absolute top-[1492px] left-[736px] whitespace-nowrap ${titleStyle}`}
>
  Self-reflection check-ins
</h3>

        <p className={`absolute top-[1563px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
          Take quick, reflective assessments to track how you’re really doing. Each check-in gives you insight to understand your mind better.
        </p>

        <div className={`absolute top-[1687px] left-[685px] w-[31px] h-[29px] ${numStyle}`}>06</div>
        <h3 className={`absolute top-[1679px] left-[736px] w-[286px] h-[61px] ${titleStyle}`}>Content hub</h3>
        <p className={`absolute top-[1750px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
          Explore a world of expert videos, podcasts, and blogs crafted to uplift you. Learn, reflect, and grow at your own pace.
        </p>

        <div className={`absolute top-[1874px] left-[687px] w-[29px] h-[29px] ${numStyle}`}>07</div>
        <h3 className={`absolute top-[1866px] left-[736px] w-[378px] h-[61px] ${titleStyle}`}>Escalation ready</h3>
        <p className={`absolute top-[1937px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
          When deeper care is needed, Mind A Lot connects you to licensed partner hospitals. Every referral happens smoothly and only with your consent.
        </p>
      </div>

    </section>
  );
};





const FeatureLast = () => {
  return (
    <section className="w-full md:w-[1179px] mt-8 md:mt-[-70] mx-auto flex flex-col items-center text-center gap-6 py-12 md:py-20 px-4 md:px-0">

      {/* Heading */}
      <h2 className="font-inter font-semibold text-[28px] md:text-[50px] leading-[36px] md:leading-[100%] tracking-[-0.06em] text-[#5C4737]">
        Ready to experience complete mental health support?
      </h2>

      {/* Sub text */}
      <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[24px] md:leading-[100%] tracking-[-0.03em] text-[#6D6D6F] max-w-[594px] mb-5">
        Download the app and start your journey to better mental wellness today.
      </p>
      
      {/* Button */}
   
  <button   onClick={redirectToAppStore} className="group relative w-[255px] md:w-[255px] h-[60px] rounded-[30px] border border-[#5B4A3E] bg-[#F6F2EB] hover:bg-[#5C4737] inline-flex items-center justify-center pl-6 pr-16 md:pl-5 md:pr-12 whitespace-nowrap overflow-hidden">
    
    {/* Button Text */}
    <span className="font-['Nunito_Sans'] font-medium text-[16px] md:text-[18px] leading-[100%] text-[#5B4A3E] whitespace-nowrap group-hover:text-white">
      Download the app
    </span>

    {/* Circle with Arrow */}
    <div className="absolute right-1 top-1 md:right-1 md:top-[3px] w-[50px] h-[50px] md:w-[50px] md:h-[50px] rounded-full bg-white flex items-center justify-center group-hover:scale-105 transition-transform">
      <Image
        src={arrow}
        alt="arrow"
        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45"
      />
    </div>

  </button>



    </section>
  );
};

    return(
        <>
        
       <FeatureHome/>
       <FeatureOffer/>
       <FeatureLast/>
       <Footer/>
        </>
    );
}


