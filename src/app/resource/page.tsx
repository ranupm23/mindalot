"use client";
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import subtract from "@/assets/subtract.svg"
import meditate1 from "@/assets/resource-page/meditate1.webp"
import meditate2 from "@/assets/resource-page/meditate2.webp"
import meditate3 from "@/assets/resource-page/meditate3.webp"
import meditate4 from "@/assets/resource-page/meditate4.webp"
import meditate5 from "@/assets/resource-page/meditate5.webp"
import playIcon from "@/assets/play-icon.svg"
import ourResource1 from "@/assets/resource-page/podcost1.png"
import ourResource2 from "@/assets/resource-page/podcost2.png"
import ourResource3 from "@/assets/resource-page/Mask group.png"
import ourResource4 from "@/assets/resource-page/podcost4.png"
import podcast1 from "@/assets/resource-page/man-woman-talking-podcast.webp"
import podcast2 from "@/assets/resource-page/podcost-hero.png"
import arrrow from '@/assets/arrow.svg'
import avatar1 from '@/assets/resource-page/avatar1.webp'
import avatar2 from '@/assets/resource-page/avatar2.webp'
import borderImg from '@/assets/resource-page/border.svg'
import waveIcon from '@/assets/resource-page/wave.svg'
import brownPlayIcon from '@/assets/resource-page/play.svg'
import React from 'react'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const redirectToAppStore = () => {
  if (typeof window === "undefined") return;

  const userAgent = navigator.userAgent || navigator.vendor;

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    window.location.href =
      "https://apps.apple.com/in/app/zenit-edu/id6748683332";
    return;
  }

  if (/android/i.test(userAgent)) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.jagrati.zenit&pcampaignid=web_share";
    return;
  }

  window.location.href =
    "https://play.google.com/store/apps/details?id=com.jagrati.zenit&pcampaignid=web_share";
};

const ResourcePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
          <div className="relative z-[1000]">
            <Header navTextColor="#755840"/>
          </div>
          
          {/* MAIN CONTENT */}
          <div className='flex-1 container-page xl:pr-0 xl:pl-0 px-4 sm:px-6 md:px-8'>
              <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-9">
                  {/* Left Text Section */}
                  <div className="relative z-10 flex flex-col items-center sm:items-start pt-16 sm:pt-20 lg:pb-20 text-center sm:text-left whitespace-normal">
                      <h1 className="font-inter font-semibold text-[26px] sm:text-[32px] md:text-[42px] lg:text-[55px] leading-[32px] sm:leading-[40px] md:leading-[55px] lg:leading-[80px] tracking-[-0.06em] text-[#5C4737]">
                          Curated resources from<br />
                          real professionals, <span className="whitespace-nowrap">no fluff.</span>
                      </h1>
                      <p className='text-[10px] sm:text-[12px] md:text-sm lg:text-base xl:text-lg font-medium mt-3 sm:mt-5 leading-[18px] sm:leading-[20px] md:leading-[28px] lg:leading-[35px] tracking-[-0.03em] font-inter'>
                          Ever wondered how small daily habits can reshape your mindset? Explore<br /> 
                          resources that make mental wellness simple and actionable.
                      </p>
                      <div className='text-[#6D6D6F] font-inter font-medium text-[14px] sm:text-[20px] md:text-[24px] lg:text-[28px] leading-tight gap-2 sm:gap-3 flex flex-wrap items-center justify-center sm:justify-start mt-4 sm:mt-6'>
  <div className='mb-2 sm:mb-0 leading-relaxed'>Explore</div>
  <Image src={subtract} alt="arrow" width={16} height={20} className="w-4 h-4 sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]" />
  <div className='mb-2 sm:mb-0 leading-relaxed'>Reflect</div>
  <Image src={subtract} alt="arrow" width={16} height={20} className="w-4 h-4 sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] lg:w-[32px] lg:h-[32px]" />
  <div className='mb-2 sm:mb-0 leading-relaxed'>Learn</div>
</div>
                  </div>
                  {/* Slide Images */}
                  <SlideImages />
              </div>

              {/* Sections */}
              <OurResourcesSection />
              <PodcastSection />
              <AccessMoreResourceSection />
          </div>

          {/* FOOTER */}
          <Footer />
      </div>
    )
}
const SlideImages = () => {
    return (
        <div className='lg:mt-[40px] mx-auto lg:mx-0 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[523px] h-[200px] sm:h-[250px] md:h-[500px] flex items-center relative group hover:[&>img]:scale-110 hover:[&>div:not(.blur-bg)]:scale-115 transition-all duration-500'>
            {/* Circles */}
            <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[120px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[150px] md:h-[180px] border-2 border-white/25 rounded-full'></div>
            <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[80px] sm:w-[120px] md:w-[130px] h-[80px] sm:h-[120px] md:h-[130px] border-2 border-white/45 rounded-full'></div>
            <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[40px] sm:w-[80px] md:w-20 h-[40px] sm:h-[80px] md:h-20 border-2 border-white/65 rounded-full'></div>
            <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[25px] sm:w-[50px] md:w-[50px] h-[25px] sm:h-[50px] md:h-[50px] border-2 border-white/85 rounded-full'></div>
            
            {/* Play icon */}
            <Image 
                src={playIcon} 
                alt="play" 
                width={40} 
                height={40} 
                className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[calc(50%-1.5px)] z-20 w-[16px] h-[16px] sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px] transition-transform duration-300' 
            />
            
            {/* Images */}
            <Image 
                src={meditate1} 
                alt="meditate" 
                width={400} 
                height={500} 
                className='object-cover rounded-[16px] absolute left-1/2 -translate-x-1/2 w-[150px] sm:w-[200px] md:w-[300px] xl:w-[400px] h-[180px] sm:h-[250px] md:h-[375px] xl:h-[500px] transition-transform duration-300' 
            />
            
            <Image 
                src={meditate2} 
                alt="meditate" 
                width={400} 
                height={460} 
                className='object-cover rounded-[16px] absolute left-1/2 translate-x-[calc(-50%+20px)] -z-10 w-[140px] sm:w-[190px] md:w-[300px] xl:w-[400px] h-[160px] sm:h-[230px] md:h-[345px] xl:h-[460px] transition-transform duration-300 delay-50' 
            />
            
            <Image 
                src={meditate3} 
                alt="meditate" 
                width={400} 
                height={460} 
                className='object-cover rounded-[16px] absolute left-1/2 translate-x-[calc(-50%-20px)] -z-20 w-[140px] sm:w-[190px] md:w-[300px] xl:w-[400px] h-[160px] sm:h-[230px] md:h-[345px] xl:h-[460px] transition-transform duration-300 delay-50' 
            />
            
            <Image 
                src={meditate4} 
                alt="meditate" 
                width={400} 
                height={420} 
                className='object-cover rounded-[16px] absolute left-1/2 translate-x-[calc(-50%-40px)] -z-30 w-[120px] sm:w-[180px] md:w-[300px] xl:w-[400px] h-[140px] sm:h-[210px] md:h-[315px] xl:h-[420px] transition-transform duration-300 delay-100' 
            />
            
            <Image 
                src={meditate5} 
                alt="meditate" 
                width={400} 
                height={420} 
                className='object-cover rounded-[16px] absolute left-1/2 translate-x-[calc(-50%+40px)] -z-40 w-[120px] sm:w-[180px] md:w-[300px] xl:w-[400px] h-[140px] sm:h-[210px] md:h-[315px] xl:h-[420px] transition-transform duration-300 delay-100' 
            />
            
            {/* Background */}
            <div className='blur-bg w-[200px] sm:w-[250px] md:w-[350px] h-[200px] sm:h-[250px] md:h-[350px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 bg-[#BE9B84] blur-[150px] -z-50 group-hover:scale-135 group-hover:blur-[200px] transition-all duration-700'></div>
        </div>
    )
}

const ResourceCard = ({
  btnLabel,
  img,
  btnIcon,
  rotateIconOnHover = true,
  hoverText = "5-Min Breathing Reset for Overthinkers",
}: {
  btnLabel: string;
  img: StaticImageData;
  btnIcon: StaticImageData;
  rotateIconOnHover?: boolean;
  hoverText?: string;
}) => {
  return (
    <div className="relative mx-auto">
      {/* Image container with hover effect */}
      <div className="relative overflow-hidden rounded-[20px] group">
        <Image
          src={img}
          alt="meditate"
          height={350}
          className="rounded-[20px] max-h-[350px] mx-auto w-full object-cover"
        />
        
        {/* Black fade overlay - ONLY on image */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-[20px] flex items-center justify-center">
          {/* Centered text */}
          <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center px-2 sm:px-4 md:px-6">
            {hoverText}
          </span>
        </div>
      </div>

      {/* Button - outside the image overlay container */}
      <button
        onClick={redirectToAppStore}
        className="bg-[#967B6A] hover:bg-[#BE9B84] group w-[30%] min-w-[100px] sm:min-w-[120px] md:min-w-[140px] absolute bottom-0 right-0 cursor-pointer transition-all text-white pl-4 sm:pl-6 p-[5px] flex justify-center sm:justify-between items-center rounded-full text-xs sm:text-sm md:text-base xl:text-base inline-flex"
      >
        {btnLabel}

        {/* White circle with arrow is hidden on very small screens */}
        <div className="hidden sm:flex w-8 h-8 sm:w-[30px] sm:h-[30px] md:w-10 md:h-10 xl:w-[50px] xl:h-[50px] ml-[5px] lg:ml-[15px] rounded-full bg-white flex justify-center items-center">
          <Image
            src={btnIcon}
            alt="arrow"
            width={18}
            height={18}
            className={`m-auto w-3 h-3 sm:w-3 sm:h-3 md:w-[18px] md:h-[18px] ${
              rotateIconOnHover ? "group-hover:rotate-45" : ""
            } transition-all`}
          />
        </div>
      </button>
    </div>
  );
};

const OurResourcesSection = () => {
    return (
        <>
            <h2 className='text-[30px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[60px] text-[#5C4737] font-semibold -tracking-[6%] font-inter mt-12 md:mt-20'>Our Resources!</h2>
            <div className='mt-5 sm:mt-[46px] grid lg:grid-cols-2 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-[15px] sm:gap-y-[25px] md:gap-y-[30px] mb-20 whitespace-nowrap'>
                <ResourceCard 
                    btnLabel="Listen Audio" 
                    img={ourResource1} 
                    btnIcon={waveIcon} 
                    rotateIconOnHover={false}
                    hoverText="5-min Breathing reset for Overthinkers"
                />
                <ResourceCard 
                    btnLabel="Watch Video" 
                    img={ourResource2} 
                    btnIcon={brownPlayIcon}
                    hoverText="What to Do When Motivation dies"
                />
                <ResourceCard 
                    btnLabel="Read more" 
                    img={ourResource3} 
                    btnIcon={arrrow}
                    hoverText="Breakup Survival Guide"
                />
                <ResourceCard 
                    btnLabel="Start Quiz" 
                    img={ourResource4} 
                    btnIcon={arrrow}
                    hoverText="Am I Stressed or Just Tired ?"
                />
            </div>
        </>
    )
}

const PodcastSection = () => {
  const redirectToAppStore = () => {
    if (typeof window === "undefined") return;

    const userAgent = navigator.userAgent || navigator.vendor;

    if (/iPad|iPhone|iPod/.test(userAgent)) {
      window.open(
        "https://apps.apple.com/in/app/zenit-edu/id6748683332",
        "_blank"
      );
      return;
    }

    if (/android/i.test(userAgent)) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.jagrati.zenit&pcampaignid=web_share",
        "_blank"
      );
      return;
    }

    // fallback desktop link
    window.open(
      "https://play.google.com/store/apps/details?id=com.jagrati.zenit&pcampaignid=web_share",
      "_blank"
    );
  };

  return (
    <div className="relative w-full">
         {/* Start Listening Button */}
      <button
        onClick={redirectToAppStore}
        className="flex gap-1 sm:gap-2.5 justify-between items-center absolute left-2.5 top-2.5 sm:left-[30px] sm:top-[30px] px-2 py-1 sm:px-4 sm:py-2.5 backdrop-blur-[10px] rounded-full font-medium text-xs sm:text-base md:text-lg shadow-md z-50 bg-[#5C483799] hover:bg-[#5C483799] transition-all"
      >
        <Image
          src={playIcon}
          alt="play"
          width={20}
          height={20}
          className="w-2 h-2 sm:w-4 sm:h-4 md:w-5 md:h-5 my-auto filter brightness-0"
        />
        Start Listening
      </button>
   

      {/* Podcast Hero Image */}
      <Image
        src={podcast2}
        alt="podcast"
        width={1268}
        height={504}
        className="object-cover rounded-[20px] w-full mt-10 mb-20"
      />

      {/* Central Play Icon */}
      <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] xl:w-[225px] xl:h-[225px] border-2 border-white/25 rounded-full'></div>
                <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[70px] h-[70px] sm:w-[130px] sm:h-[130px] xl:w-[175px] xl:h-[175px] border-2 border-white/50 rounded-full'></div>
                <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-10 h-10 sm:w-20 sm:h-20 xl:w-[125px] xl:h-[125px] border-2 border-white rounded-full'></div>
                <Image src={playIcon} alt="play" width={50} height={60} className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[calc(50%-1.5px)] xl:-translate-x-[calc(50%-5px)] z-20 w-[18px] h-[18px] sm:w-[25px] sm:h-[25px] xl:w-[50px] xl:h-[60px]' />
                <div className='absolute bottom-2.5 sm:bottom-[30px] right-2.5 sm:right-[30px] w-[60px] h-[30px] sm:w-[120px] sm:h-[60px] flex p-[3px] sm:p-[5px] bg-white/30 backdrop-blur-[10px] rounded-full cursor-pointer group'></div>
      {/* Avatars */}
      <div className="absolute bottom-2.5 sm:bottom-[20px] md:bottom-[30px] right-2.5 sm:right-[20px] md:right-[30px]">
  <button
    onClick={redirectToAppStore}
    className="w-[60px] h-[30px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] flex p-[3px] sm:p-[4px] md:p-[5px] bg-white/30 backdrop-blur-[10px] rounded-full cursor-pointer group transition-all hover:bg-[#BE9B84]"
  >
    <div className="relative w-full h-full">
      {/* First Avatar */}
      <div className="absolute w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] rounded-full border-2 border-white bg-purple-500 overflow-hidden">
        <Image src={avatar1} alt="avatar-img" width={50} height={50} className="object-cover w-full h-full" />
      </div>

      {/* Second Avatar */}
      <div className="absolute w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] rounded-full border-2 border-white translate-x-[60%] sm:translate-x-[70%] md:translate-x-[60%] bg-gray-400 overflow-hidden">
        <Image src={avatar2} alt="avatar-img" width={50} height={50} className="object-cover w-full h-full" />
      </div>

      {/* Arrow Circle */}
      <div className="absolute w-[20px] h-[20px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-white flex justify-center items-center translate-x-[120%] sm:translate-x-[140%] md:translate-x-[120%] transition-transform group-hover:rotate-45">
        <Image
          src={arrrow}
          alt="arrow"
          width={18}
          height={18}
          className="w-2 h-2 sm:w-3 sm:h-3 md:w-[18px] md:h-[18px]"
        />
      </div>
    </div>
  </button>
</div>
</div>
  );
};



const AccessMoreResourceSection = () => {
  const handleRedirect = () => {
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

  return (
    <div className="pb-20">
      <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] text-[#5C4737] font-semibold text-center">
        Access More Resources
      </h2>

      <p className="text-sm md:text-base lg:text-lg xl:text-lg font-medium mt-4 mb-[25px] md:mb-[30px] text-center max-w-[800px] mx-auto px-4">
        Download the Mind A Lot app to access our complete library of mental health resources, tools, and professional content.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 items-center relative mb-10">
        <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-full absolute top-full left-1/2 bg-[#BE9B84] -translate-x-1/2 -translate-y-[15%] blur-[100px] sm:blur-[130px] -z-50"></div>

        {/* BUTTON 2 - Download Free Tools (redirects based on device) */}
        <button
          onClick={handleRedirect}
          className="group flex items-center gap-[6px] sm:gap-[8px] text-[#5B4A3E] text-[16px] sm:text-[18px] font-medium pl-[20px] sm:pl-[26px] pr-[4px] py-[4px] rounded-[40px] border border-[#5B4A3E] bg-[#F6F2EB] shadow-sm transition-all duration-300 hover:bg-[#5C4737] hover:text-white hover:border-[#3e3229]"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          <span className="tracking-[-0.01em]">Download App</span>

          <div className="w-10 h-10 sm:w-[46px] sm:h-[46px] bg-[#5B4A3E] rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#8A8077]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              className="text-white transition-colors duration-300 -rotate-45 group-hover:text-[#5B4A3E] w-4 h-3 sm:w-5 sm:h-3"
              fill="none"
            >
              <path d="M0 6h18M12 0l6 6-6 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};


export default ResourcePage;