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
            <Header />
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
                      <div className='text-[#6D6D6F] font-inter font-medium text-[12px] sm:text-[16px] md:text-[20px] gap-2 flex flex-wrap justify-center sm:justify-start mt-3 sm:mt-5'>
                          <div className='mb-2 sm:mb-0'>Explore</div>
                          <Image src={subtract} alt="arrow" width={16} height={16} className="sm:w-[20px] sm:h-[20px]" />
                          <div className='mb-2 sm:mb-0'>Reflect</div>
                          <Image src={subtract} alt="arrow" width={16} height={16} className="sm:w-[20px] sm:h-[20px]" />
                          <div className='mb-2 sm:mb-0'>Learn</div>
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
        <div className='lg:mt-[40px] mx-auto lg:mx-0 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[523px] h-[200px] sm:h-[250px] md:h-[500px] flex items-center relative'>
            <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[120px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[150px] md:h-[180px] border-2 border-white/25 rounded-full'></div>
            <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[80px] sm:w-[120px] md:w-[130px] h-[80px] sm:h-[120px] md:h-[130px] border-2 border-white/45 rounded-full'></div>
            <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[40px] sm:w-[80px] md:w-20 h-[40px] sm:h-[80px] md:h-20 border-2 border-white/65 rounded-full'></div>
            <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[25px] sm:w-[50px] md:w-[50px] h-[25px] sm:h-[50px] md:h-[50px] border-2 border-white/85 rounded-full'></div>
            <Image src={playIcon} alt="play" width={40} height={40} className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[calc(50%-1.5px)] z-20 w-[16px] h-[16px] sm:w-[30px] sm:h-[30px] md:w-[50px] md:h-[50px]' />
            <Image src={meditate1} alt="meditate" width={400} height={500} className='object-cover rounded-[16px] absolute left-1/2 -translate-x-1/2 w-[150px] sm:w-[200px] md:w-[300px] xl:w-[400px] h-[180px] sm:h-[250px] md:h-[375px] xl:h-[500px]' />
            <Image src={meditate2} alt="meditate" width={400} height={460} className='object-cover rounded-[16px] absolute left-1/2 translate-x-[calc(-50%+20px)] -z-10 w-[140px] sm:w-[190px] md:w-[300px] xl:w-[400px] h-[160px] sm:h-[230px] md:h-[345px] xl:h-[460px]' />
            <Image src={meditate3} alt="meditate" width={400} height={460} className='object-cover rounded-[16px] absolute left-1/2 translate-x-[calc(-50%-20px)] -z-20 w-[140px] sm:w-[190px] md:w-[300px] xl:w-[400px] h-[160px] sm:h-[230px] md:h-[345px] xl:h-[460px]' />
            <Image src={meditate4} alt="meditate" width={400} height={420} className='object-cover rounded-[16px] absolute left-1/2 translate-x-[calc(-50%-40px)] -z-30 w-[120px] sm:w-[180px] md:w-[300px] xl:w-[400px] h-[140px] sm:h-[210px] md:h-[315px] xl:h-[420px]' />
            <Image src={meditate5} alt="meditate" width={400} height={420} className='object-cover rounded-[16px] absolute left-1/2 translate-x-[calc(-50%+40px)] -z-40 w-[120px] sm:w-[180px] md:w-[300px] xl:w-[400px] h-[140px] sm:h-[210px] md:h-[315px] xl:h-[420px]' />
            <div className='w-[200px] sm:w-[250px] md:w-[350px] h-[200px] sm:h-[250px] md:h-[350px] rounded-full absolute bottom-0 left-0 bg-[#BE9B84] -translate-x-1/2 translate-y-2/8 blur-[150px] -z-50'></div>
        </div>
    )
}

const OurResourcesSection = () => {
    return (
        <>
            <h2 className='text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[60px] text-[#5C4737] font-semibold -tracking-[6%] font-inter mt-12 md:mt-20'>Our Resources!</h2>
            <div className='mt-5 sm:mt-[46px] grid lg:grid-cols-2 gap-x-5 gap-y-[15px] sm:gap-y-[30px] mb-20 whitespace-nowrap'>
                <ResourceCard btnLabel="Listen Audio" img={ourResource1} btnIcon={waveIcon} rotateIconOnHover={false} />
                <ResourceCard btnLabel="Watch Video" img={ourResource2} btnIcon={brownPlayIcon} />
                <ResourceCard btnLabel="Read more" img={ourResource3} btnIcon={arrrow} />
                <ResourceCard btnLabel="Start Quiz" img={ourResource4} btnIcon={arrrow} />
            </div>
        </>
    )
}

const ResourceCard = ({
  btnLabel,
  img,
  btnIcon,
  rotateIconOnHover = true,
}: {
  btnLabel: string;
  img: StaticImageData;
  btnIcon: StaticImageData;
  rotateIconOnHover?: boolean;
}) => {
  return (
    <div className="relative mx-auto">
      <Image
        src={img}
        alt="meditate"
        height={350}
        className="rounded-[20px] max-h-[350px] mx-auto"
      />

      <button
        onClick={redirectToAppStore}
        className="bg-[#967B6A] hover:bg-[#BE9B84] group w-[30%] absolute bottom-0 right-0 cursor-pointer transition-all text-white pl-6 p-[5px] flex justify-center sm:justify-between items-center rounded-full text-xs sm:text-sm xl:text-base inline-flex"
      >
        {btnLabel}

        {/* White circle with arrow is hidden on very small screens */}
        <div className="hidden sm:flex w-[30px] h-[30px] sm:w-10 sm:h-10 xl:w-[50px] xl:h-[50px] ml-[5px] lg:ml-[15px] rounded-full bg-white flex justify-center items-center">
          <Image
            src={btnIcon}
            alt="arrow"
            width={18}
            height={18}
            className={`m-auto w-3 h-3 sm:w-[18px] sm:h-[18px] ${
              rotateIconOnHover ? "group-hover:rotate-45" : ""
            } transition-all`}
          />
        </div>
      </button>
    </div>
  );
};



// const ResourceCard = ({ btnLabel, img, btnIcon, rotateIconOnHover = true }: { btnLabel: string, img: StaticImageData, btnIcon: StaticImageData, rotateIconOnHover?: boolean }) => {
//     const links: { [key: string]: string } = {
//         'Listen Audio': 'https://www.google.com/',
//         'Watch Video': 'https://www.microsoft.com/',
//         'Read more': 'https://www.apple.com/',
//         'Start Quiz': 'https://www.amazon.com/'
//     };
    
//     return (
//         <div className='relative mx-auto'>
//             <Image src={img} alt="meditate" height={350} className='rounded-[20px] max-h-[350px] mx-auto' />
//             <a href={links[btnLabel]} target="_blank" rel="noopener noreferrer" className='bg-[#967B6A] hover:bg-[#BE9B84] group w-[30%] absolute bottom-0 right-0 cursor-pointer transition-all text-white pl-6 p-[5px] flex justify-between items-center rounded-full text-xs sm:text-sm xl:text-base inline-flex'>
//                 {btnLabel}
//                 <div className={`w-[30px] h-[30px] sm:w-10 sm:h-10 xl:w-[50px] xl:h-[50px] ml-[5px] lg:ml-[15px] rounded-full bg-white flex justify-center items-center`}>
//                     <Image src={btnIcon} alt="arrow" width={18} height={18} className={`m-auto w-3 h-3 sm:w-[18px] sm:h-[18px] ${rotateIconOnHover ? 'group-hover:rotate-45' : ''} transition-all`} />
//                 </div>
//             </a>
//         </div>
//     )
// }

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
   

      {/* Podcast Hero Image */}
      <Image
        src={podcast2}
        alt="podcast"
        width={1268}
        height={504}
        className="object-cover rounded-[20px] w-full mt-10 mb-20"
      />

      {/* Central Play Icon */}
      <button
        onClick={redirectToAppStore}
        className="absolute left-1/2 top-1/2 -translate-1/2 z-20 w-[70px] h-[70px] sm:w-[130px] sm:h-[130px] xl:w-[175px] xl:h-[175px] rounded-full flex items-center justify-center bg-white/30 hover:bg-[#BE9B84] transition-all"
      >
        <Image
          src={playIcon}
          alt="play"
          width={50}
          height={50}
          className="w-[50%] h-[50%] sm:w-[50%] sm:h-[50%] xl:w-[50%] xl:h-[50%]"
        />
      </button>

   
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
      <h2 className="text-[30px] lg:text-[40px] xl:text-[50px] text-[#5C4737] font-semibold text-center">
        Access More Resources
      </h2>

      <p className="text-sm md:text-base xl:text-lg font-medium mt-4 mb-[30px] text-center">
        Download the Mind A Lot app to access our complete library of mental health resources, tools, and professional content.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-5 items-center relative mb-10">
        <div className="w-[250px] h-[250px] rounded-full absolute top-full left-1/2 bg-[#BE9B84] -translate-x-1/2 -translate-y-[15%] blur-[130px] -z-50"></div>

        {/* BUTTON 1 - View All Resources (stays same) */}
        {/* <a
          href="https://youtube.com/@mind_alot?si=Y_E5tD3qxVunQ2e3"
          className="group flex items-center gap-[8px] text-[#5B4A3E] text-[18px] font-medium pl-[26px] pr-[4px] py-[4px] rounded-[40px] border border-[#5B4A3E] bg-[#F6F2EB] shadow-sm transition-all duration-300 hover:bg-[#5C4737] hover:text-white hover:border-[#3e3229]"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          <span className="tracking-[-0.01em]">View all resources</span>

          <div className="w-[46px] h-[46px] bg-[#5B4A3E] rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#8A8077]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              className="text-white transition-colors duration-300 -rotate-45 group-hover:text-[#5B4A3E]"
              fill="none"
            >
              <path d="M0 6h18M12 0l6 6-6 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
        </a> */}

        {/* BUTTON 2 - Download Free Tools (redirects based on device) */}
        <button
          onClick={handleRedirect}
          className="group flex items-center gap-[8px] text-[#5B4A3E] text-[18px] font-medium pl-[26px] pr-[4px] py-[4px] rounded-[40px] border border-[#5B4A3E] bg-[#F6F2EB] shadow-sm transition-all duration-300 hover:bg-[#5C4737] hover:text-white hover:border-[#3e3229]"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 500,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          <span className="tracking-[-0.01em]">Download App</span>

          <div className="w-[46px] h-[46px] bg-[#5B4A3E] rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-[#8A8077]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              className="text-white transition-colors duration-300 -rotate-45 group-hover:text-[#5B4A3E]"
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