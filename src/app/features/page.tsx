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
export default function FeaturePage () {
  
const FeatureHome = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto min-h-[570px] bg-[#D9D9D9] opacity-100 overflow-hidden flex flex-col items-center py-1 md:py-0">
      
      {/* Heading */}
      {/* Replaced absolute positioning with margins. text-3xl for mobile, text-[60px] for desktop */}
      <h2 
        className="w-full max-w-[740px] font-['Inter'] font-semibold text-[#5C4737] text-center
                   text-3xl md:text-[60px] 
                   leading-tight md:leading-[80px] 
                   tracking-[-0.06em]
                   mt-8 md:mt-[50px] px-4"
        style={{ fontStyle: 'normal' }}
      >
        All-In-One Support System
      </h2>

      {/* Play Icon */}
      {/* Added cursor-pointer. Used mt- (margin-top) to push it down from the heading */}
      <div className="relative mt-8 md:mt-[100px] cursor-pointer hover:scale-105 transition-transform duration-300">
        <Image 
          src={Play} 
          alt="Support System Icon"
          className="w-[50px] h-[60px] md:w-[73px] md:h-[86.58px] rounded-[3px]"
        />
      </div>

      {/* Button */}
      {/* The button container is now relative to the flex flow (using margin-top), 
          but the insides remain absolute as per your specific design. */}
      <button className="mt-12 md:mt-[145px] w-[235px] h-[60px] rounded-[30px] border border-[#5B4A3E] bg-[#F6F2EB] relative hover:opacity-95 transition-opacity group">
        
        {/* Text */}
        <span className="absolute top-[20px] left-[20px] font-['Nunito_Sans'] font-medium text-[18px] leading-[100%] tracking-normal text-[#5B4A3E]">
          Click to explore
        </span>

        {/* White Circle */}
        <div className="absolute top-[5px] left-[180px] w-[50px] h-[50px] bg-[#FFFFFF] rounded-full shadow-sm group-hover:scale-105 transition-transform"></div>

        {/* Arrow Image */}
        <Image 
          src={arrow} 
          alt="Arrow"
          className="absolute top-[22.03px] left-[195px] w-[20px] border-0" 
        />
        
      </button>

    </section>
  );
};



const FeatureOffer = () => {
  // --- Styling Constants ---
  
  // Base Image Style: Size, Rounded, Shadow-2xl, Left Position
  const baseImgStyle = "absolute left-[96px] w-[538px] h-[500px] rounded-[20px] object-cover shadow-2xl";
  
  // Stack Border: Only for images behind the first one
  const stackBorder = "border-[4px] border-white";

  // Typography Styles
  const numStyle = "font-['Inter'] font-semibold text-[24px] leading-[100%] tracking-[-0.03em] text-right text-[#755840]";
  const titleStyle = "font-['Inter'] font-semibold text-[50px] leading-[100%] tracking-[-0.03em] text-[#5C4737]";
  const descStyle = "font-['Inter'] font-medium text-[18px] leading-[35px] tracking-[-0.03em] text-[#6D6D6F]";

  return (
    // Removed 'relative' so children position based on the body/page
    <section className="w-full h-[230vh]">
      
      {/* ==========================
          LEFT SIDE: IMAGE STACK
         ========================== */}
      
      {/* Main Heading */}
      <h2 className="absolute top-[740px] left-[86px] w-[397px] h-[61px] font-['Inter'] font-semibold text-[50px] leading-[100%] tracking-[-0.06em] text-[#5C4737]">
        Features we offer !
      </h2>

      {/* --- Image 1 (Front) --- */}
      {/* Has Shadow, NO White Border */}
      <Image 
        src={fea1} alt="Feature Highlight 1"
        className={`${baseImgStyle} top-[840px] z-50`}
      />
      
      {/* --- Image 2 --- */}
      {/* Has Shadow + White Border */}
      <Image 
        src={fea2} alt="Feature Highlight 2"
        className={`${baseImgStyle} ${stackBorder} top-[930px] z-40`}
      />
      
      {/* --- Image 3 --- */}
      <Image 
        src={fea3} alt="Feature Highlight 3"
        className={`${baseImgStyle} ${stackBorder} top-[1020px] z-30`}
      />
      
      {/* --- Image 4 --- */}
      <Image 
        src={fea4} alt="Feature Highlight 4"
        className={`${baseImgStyle} ${stackBorder} top-[1110px] z-20`}
      />
      
      {/* --- Image 5 (Back) --- */}
      <Image 
        src={fea5} alt="Feature Highlight 5"
        className={`${baseImgStyle} ${stackBorder} top-[1200px] z-10`}
      />


      {/* ==========================
          RIGHT SIDE: TEXT CONTENT
         ========================== */}

      {/* --- 01: Live chat counselling --- */}
      <div className={`absolute top-[752px] left-[689px] w-[27px] h-[29px] ${numStyle}`}>01</div>
      <h3 className={`absolute top-[744px] left-[736px] w-[479px] h-[61px] ${titleStyle}`}>Live chat counselling</h3>
      <p className={`absolute top-[815px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
        Connect instantly with trained professionals available 24/7, offering real-time emotional support without any waiting or delays.
      </p>

      {/* --- 02: Anonymity first --- */}
      <div className={`absolute top-[939px] left-[685px] w-[31px] h-[29px] ${numStyle}`}>02</div>
      <h3 className={`absolute top-[931px] left-[736px] w-[351px] h-[61px] ${titleStyle}`}>Anonymity first</h3>
      <p className={`absolute top-[1002px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
        Your privacy comes first — use your chosen name at all times. Counsellors never see your personal details or identity.
      </p>

      {/* --- 03: Goal-based nudge --- */}
      <div className={`absolute top-[1126px] left-[685px] w-[31px] h-[29px] ${numStyle}`}>03</div>
      <h3 className={`absolute top-[1118px] left-[736px] w-[426px] h-[61px] ${titleStyle}`}>Goal-based nudge</h3>
      <p className={`absolute top-[1189px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
        Set simple, achievable wellness goals and receive thoughtful nudges. Daily push notifications help you stay mindful and consistent.
      </p>

      {/* --- 04: Mood tracker --- */}
      <div className={`absolute top-[1313px] left-[684px] w-[32px] h-[29px] ${numStyle}`}>04</div>
      <h3 className={`absolute top-[1305px] left-[736px] w-[307px] h-[61px] ${titleStyle}`}>Mood tracker</h3>
      <p className={`absolute top-[1376px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
        Just tap and express how you feel — no overthinking or long forms. Get the right support without judgment or analysis paralysis.
      </p>

      {/* --- 05: Self-assessments --- */}
      <div className={`absolute top-[1500px] left-[685px] w-[31px] h-[29px] ${numStyle}`}>05</div>
      <h3 className={`absolute top-[1492px] left-[736px] w-[413px] h-[61px] ${titleStyle}`}>Self-assessments</h3>
      <p className={`absolute top-[1563px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
        Take quick, reflective assessments to track how you’re really doing. Each check-in gives you insight to understand your mind better.
      </p>

      {/* --- 06: Content hub --- */}
      <div className={`absolute top-[1687px] left-[685px] w-[31px] h-[29px] ${numStyle}`}>06</div>
      <h3 className={`absolute top-[1679px] left-[736px] w-[286px] h-[61px] ${titleStyle}`}>Content hub</h3>
      <p className={`absolute top-[1750px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
        Explore a world of expert videos, podcasts, and blogs crafted to uplift you. Learn, reflect, and grow at your own pace.
      </p>

      {/* --- 07: Escalation ready --- */}
      <div className={`absolute top-[1874px] left-[687px] w-[29px] h-[29px] ${numStyle}`}>07</div>
      <h3 className={`absolute top-[1866px] left-[736px] w-[378px] h-[61px] ${titleStyle}`}>Escalation ready</h3>
      <p className={`absolute top-[1937px] left-[736px] w-[613px] h-[70px] ${descStyle}`}>
        When deeper care is needed, Mind A Lot connects you to licensed partner hospitals. Every referral happens smoothly and only with your consent.
      </p>

    </section>
  );
};



const FeatureLast = () => {
  return (
    <section className="w-[1179px] mt-[-70] mx-auto flex flex-col items-center text-center gap-6 py-20">
      
      {/* Heading */}
      <h2 className="font-inter font-semibold text-[50px] leading-[100%] tracking-[-0.06em] text-[#5C4737]">
        Ready to experience complete mental health support?
      </h2>

      {/* Sub text */}
      <p className="font-inter font-medium text-[18px] leading-[100%] tracking-[-0.03em] text-[#6D6D6F] max-w-[594px] mb-5">
        Download the app and start your journey to better mental wellness today.
      </p>
      
      
      {/* Button */}
      <button className="relative w-[235px] h-[60px] rounded-[30px] border border-[#5B4A3E] bg-[#F6F2EB] flex items-center pl-5">
        
        {/* Button Text */}
        <span className="font-['Nunito_Sans'] font-medium text-[18px] leading-[100%] text-[#5B4A3E]">
          Download the app
        </span>

        {/* Circle with Arrow */}
        <div className="absolute right-[5px] top-[5px] w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
          <Image
            src={arrow}   // <-- replace with your arrow image path
            alt="arrow"
            className="w-4 h-4"
          />
        </div>
      </button>

    </section>
  );
};








    return(
        <>
        <Header/>
       <FeatureHome/>
       <FeatureOffer/>
       <FeatureLast/>
       <Footer/>
        </>
    );
}


