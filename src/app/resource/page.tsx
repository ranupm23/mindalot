
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
import ourResource3 from "@/assets/resource-page/podcost3.png"
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




const ResourcePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
          
          <Header />
            {/* MAIN CONTENT */}
            <div className='flex-1 container-page xl:pr-0 xl:pl-0 px-4 sm:px-6 md:px-8'>
                <div className="flex flex-col lg:flex-row lg:justify-between gap-9">
                    {/* Left Text Section */}
                    <div className="relative z-10 flex flex-col items-center sm:items-start pt-20 lg:pb-20 md:mb-20 text-center sm:text-left whitespace-nowrap">
                        <h1 className="font-inter font-semibold text-[32px] sm:text-[42px] md:text-[50px] lg:text-[55px] leading-[40px] sm:leading-[55px] md:leading-[65px] lg:leading-[80px] tracking-[-0.06em] text-[#5C4737]">
                            Curated resources from<br />
                            real professionals, <span className="whitespace-nowrap">no fluff</span>
                        </h1>
                        <p className='text-[12px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium mt-[20px] sm:mt-[30px] leading-[20px] sm:leading-[28px] md:leading-[32px] lg:leading-[35px] -tracking-[3%] font-inter'>
                            Ever wondered how small daily habits can reshape your mindset? Explore<br /> 
                            resources that make mental wellness simple and actionable.
                        </p>
                        <div className='text-[#6D6D6F] font-inter font-medium text-[16px] sm:text-lg md:text-[24px] gap-2 flex flex-wrap justify-center sm:justify-start mt-[20px] sm:mt-[31px]'>
                            <div className='mb-2 sm:mb-0'>Explore</div>
                            <Image src={subtract} alt="arrow" width={20} height={20} className="sm:w-[30px] sm:h-[30px]" />
                            <div className='mb-2 sm:mb-0'>Reflect</div>
                            <Image src={subtract} alt="arrow" width={20} height={20} className="sm:w-[30px] sm:h-[30px]" />
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
        <div className='lg:mt-[57px] mx-auto lg:mx-0 w-full max-w-[523px] h-[250px] sm:h-[345px] md:h-[500px] flex items-center relative'>
            <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[180px] h-[180px] xl:w-[340px] xl:h-[340px] border-2 border-white/25 rounded-full'></div>
            <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[130px] h-[130px] xl:w-[250px] xl:h-[250px] border-2 border-white/45 rounded-full'></div>
            <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-20 h-20 xl:w-[200px] xl:h-[200px] border-2 border-white/65 rounded-full'></div>
            <div className='absolute left-1/2 top-1/2 -translate-1/2 z-10 w-[50px] h-[50px] xl:w-[120px] xl:h-[120px] border-2 border-white/85 rounded-full'></div>
            <Image src={playIcon} alt="play" width={50} height={60} className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[calc(50%-1.5px)] xl:-translate-x-[calc(50%-5px)] z-20 w-[18px] h-[18px] xl:w-[50px] xl:h-[60px]' />
            <Image src={meditate1} alt="meditate" width={400} height={500} className='object-cover rounded-[20px] absolute left-1/2 -translate-x-1/2 w-[200px] h-[250px] sm:w-[300px] sm:h-[375px] xl:w-[400px] xl:h-[500px]' />
            <Image src={meditate2} alt="meditate" width={400} height={460} className='object-cover rounded-[20px] absolute left-1/2 translate-x-[calc(-50%+30px)] -z-10 w-[200px] h-[230px] sm:w-[300px] sm:h-[345px] xl:w-[400px] xl:h-[460px]' />
            <Image src={meditate3} alt="meditate" width={400} height={460} className='object-cover rounded-[20px] absolute left-1/2 translate-x-[calc(-50%-30px)] -z-20 w-[200px] h-[230px] sm:w-[300px] sm:h-[345px] xl:w-[400px] xl:h-[460px]' />
            <Image src={meditate4} alt="meditate" width={400} height={420} className='object-cover rounded-[20px] absolute left-1/2 translate-x-[calc(-50%-63px)] -z-30 w-[200px] h-[210px] sm:w-[300px] sm:h-[315px] xl:w-[400px] xl:h-[420px]' />
            <Image src={meditate5} alt="meditate" width={400} height={420} className='object-cover rounded-[20px] absolute left-1/2 translate-x-[calc(-50%+63px)] -z-40 w-[200px] h-[210px] sm:w-[300px] sm:h-[315px] xl:w-[400px] xl:h-[420px]' />
            <div className='w-[350px] h-[350px] rounded-full absolute bottom-0 left-0 bg-[#BE9B84] -translate-x-1/2 translate-y-2/8 blur-[200px] -z-50'></div>
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
        className="bg-[#967B6A] hover:bg-[#BE9B84] group w-[30%] absolute bottom-0 right-0 cursor-pointer transition-all text-white pl-6 p-[5px] flex justify-between items-center rounded-full text-xs sm:text-sm xl:text-base inline-flex"
      >
        {btnLabel}

        <div className="w-[30px] h-[30px] sm:w-10 sm:h-10 xl:w-[50px] xl:h-[50px] ml-[5px] lg:ml-[15px] rounded-full bg-white flex justify-center items-center">
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
      {/* Start Listening Button */}
      <button
        onClick={redirectToAppStore}
        className="flex gap-1 sm:gap-2.5 justify-between items-center absolute left-2.5 top-2.5 sm:left-[30px] sm:top-[30px] px-2 py-1 sm:px-4 sm:py-2.5 backdrop-blur-[10px] rounded-full font-medium text-xs sm:text-base shadow-md z-50 bg-white/30 hover:bg-[#BE9B84] transition-all"
      >
        <Image
          src={playIcon}
          alt="play"
          width={20}
          height={20}
          className="w-2 h-2 sm:w-5 sm:h-5 my-auto filter brightness-0"
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

      {/* Avatars */}
      <div className="absolute bottom-2.5 sm:bottom-[30px] right-2.5 sm:right-[30px]">
  <button
    onClick={redirectToAppStore}
    className="w-[60px] h-[30px] sm:w-[120px] sm:h-[60px] flex p-[3px] sm:p-[5px] bg-white/30 backdrop-blur-[10px] rounded-full cursor-pointer group transition-all hover:bg-[#BE9B84]"
  >
    <div className="relative w-full h-full">
      {/* First Avatar */}
      <div className="absolute w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] rounded-full border-2 border-white bg-purple-500 overflow-hidden">
        <Image src={avatar1} alt="avatar-img" width={50} height={50} className="object-cover" />
      </div>

      {/* Second Avatar */}
      <div className="absolute w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] rounded-full border-2 border-white translate-x-[60%] bg-gray-400 overflow-hidden">
        <Image src={avatar2} alt="avatar-img" width={50} height={50} className="object-cover" />
      </div>

      {/* Arrow Circle */}
      <div className="absolute w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] rounded-full bg-white flex justify-center items-center translate-x-[120%] transition-transform group-hover:rotate-45">
        <Image
          src={arrrow}
          alt="arrow"
          width={18}
          height={18}
          className="w-2 h-2 sm:w-[18px] sm:h-[18px]"
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
      <h2 className="text-[30px] lg:text-[40px] xl:text-[50px] text-[#5C4737] font-semibold text-center">
        Access More Resources
      </h2>

      <p className="text-sm md:text-base xl:text-lg font-medium mt-4 mb-[30px] text-center">
        Download the Mind A Lot app to access our complete library of mental health resources, tools, and professional content.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-5 items-center relative mb-10">
        <div className="w-[250px] h-[250px] rounded-full absolute top-full left-1/2 bg-[#BE9B84] -translate-x-1/2 -translate-y-[15%] blur-[130px] -z-50"></div>

        {/* BUTTON 1 - View All Resources (stays same) */}
        <a
          href="/resource"
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
        </a>

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
          <span className="tracking-[-0.01em]">Download free tools</span>

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