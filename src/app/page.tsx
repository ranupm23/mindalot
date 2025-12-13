import Image from "next/image";
import Footer from "../components/Footer";
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


export default function Home() {


const HomeHero = () => {
  return (
    <section
      className="relative w-full h-[864px] overflow-hidden"
      style={{
        backgroundImage: `url('${Homebg.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1440px 864px",
        backgroundPosition: "0px 0px",
      }}
    >
      {/* GRADIENT OVERLAY */}
      <div
        className="absolute top-0 left-0 w-[720px] h-full z-10 backdrop-blur-[60px]"
        style={{
          background:
            "linear-gradient(134.5deg, rgba(91,74,62,0.7) 2.41%, rgba(117,88,64,0.7) 73.14%, rgba(0,0,0,0.595) 100%)",
        }}
      />

      {/* MIND — IMAGE CUTOUT */}
      <div
        className="
          absolute
          w-[566px]
          h-[242px]
          top-[158px]
          left-[154px]
          z-20
          font-inter
          font-semibold
          text-[200px]
          leading-none
          tracking-[0.06em]
          text-center
          text-transparent
          bg-clip-text
          [-webkit-background-clip:text]
        "
        style={{
          backgroundImage: `url('${Homebg.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "1440px 864px",
          backgroundPosition: "-154px -158px",
        }}
      >
        MIND
      </div>

      {/* SUPPORTING TEXT */}
      <div
        className="
          absolute
          w-[387px]
          h-[58px]
          top-[512px]
          left-[160px]
          z-20
          font-inter
          font-normal
          text-[24px]
          leading-[100%]
          tracking-[-0.06em]
          text-[#FDE2CD]
        "
      >
        You don’t have to say who you are to
        <br />
        start feeling better
      </div>

      {/* A — IMAGE CUTOUT */}
      <div
        className="
          absolute
          w-[145px]
          h-[242px]
          top-[400px]
          left-[575px]
          z-20
          font-inter
          font-semibold
          text-[200px]
          leading-none
          tracking-[0.06em]
          text-center
          text-transparent
          bg-clip-text
          [-webkit-background-clip:text]
        "
        style={{
          backgroundImage: `url('${Homebg.src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "1440px 864px",
          backgroundPosition: "-575px -400px",
        }}
      >
        A
      </div>

      {/* RIGHT DESCRIPTION TEXT */}
      <div
        className="
          absolute
          w-[373px]
          h-[75px]
          top-[279px]
          left-[783px]
          z-20
          font-inter
          font-normal
          text-[16px]
          leading-[25px]
          tracking-[-0.03em]
          text-right
          text-[#1C1C1BCC]
        "
      >
        Mind A Lot is an anonymous, app-based counselling platform that connects
        you instantly to a real, trained professional
      </div>

      {/* LOT — SOLID BACKGROUND */}
      <div
        className="
          absolute
          w-[413px]
          h-[242px]
          top-[400px]
          left-[750px]
          z-20
          flex
          items-center
          justify-center
          font-inter
          font-semibold
          text-[200px]
          leading-none
          tracking-[0.06em]
          text-center
          text-[#F6F2EB]
          
        "
      >
        LOT
      </div>

      {/* BOTTOM TAGLINE */}
      <div
        className="
          absolute
          w-[280px]
          h-[19px]
          top-[697px]
          left-[587px]
          z-20
          font-inter
          font-bold
          text-[16px]
          leading-[100%]
          tracking-[-0.03em]
          text-[#F6F2EB]
          text-center
        "
      >
        Your safe space is just one tap away!
      </div>

      {/* CTA BUTTONS CONTAINER */}
      <div
        className="
          absolute
          w-[467px]
          h-[60px]
          top-[772px]
          left-[490px]
          z-20
          flex
          gap-[20px]
        "
      >
        {/* BUTTON 1 — OUTLINE */}
        <button
  className="
    relative
    w-[212px]
    h-[60px]
    rounded-[30px]
    border-2
    border-[#F6F2EB]
    bg-transparent
  "
>
  {/* BUTTON TEXT */}
  <span
    className="
      absolute
      w-[110px]
      h-[22px]
      top-[19px]
      left-[20px]
      font-['Nunito Sans']
      font-medium
      text-[16px]
      leading-[100%]
      tracking-[-0.03em]
      text-[#F6F2EB]
    "
  >
    Start chat now
  </span>

  {/* CIRCLE */}
  <div
    className="
      absolute
      w-[50px]
      h-[50px]
      top-[3px]
      left-[155px]
      rounded-full
      border
      border-[#F6F2EB]
      bg-[#F6F2EB]
      flex
      items-center
      justify-center
    "
  >
    {/* ARROW IMAGE */}
    <Image
      src= {arrow}  // 🔁 replace with your arrow image path
      alt="arrow"
      className="w-[16px] h-[16px]"
    />
  </div>
</button>


        {/* BUTTON 2 — FILLED */}
        <button
  className="
    relative
    w-[235px]
    h-[60px]
    rounded-[30px]
    bg-[#F6F2EB]
  "
>
  {/* BUTTON TEXT */}
  <span
    className="
      absolute
      w-[159px]
      h-[25px]
      top-[20px]
      left-[20px]

      font-['Nunito Sans']
      font-medium
      text-[18px]
      leading-[100%]
      tracking-[0]
      text-[#5B4A3E]
    "
  >
    Download the app
  </span>

  {/* CIRCLE */}
  <div
    className="
      absolute
      w-[50px]
      h-[50px]
      top-[5px]
      left-[180px]
      rounded-full
      bg-[#FFFFFF]
      flex
      items-center
      justify-center
    "
  >
    {/* ARROW IMAGE */}
    <Image
      src= {arrow} // 🔁 replace with your arrow image path
      alt="arrow"
      className="w-[16px] h-[16px]"
    />
  </div>
</button>

      </div>
    </section>
  );
};

const MakeUs = () => {
  return (
    <section
      className="w-full h-[850px]"
      style={{
        opacity: 1,
      }}
    >
      {/* Heading Layout – body-based positioning */}
      <h2
        style={{
          width: "610px",
          height: "68px",
          position: "absolute",
          top: "915px",
          left: "86px",
          fontFamily: "Nunito Sans, sans-serif",
          fontWeight: 700,
          fontStyle: "Bold",
          fontSize: "50px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#000000",
          opacity: 1,
          margin: 0,
        }}
      >
        What makes us different ?
      </h2>

      {/* First Card */}
      <div
        style={{
          width: "341px",
          height: "244px",
          position: "absolute",
          top: "1033px",
          left: "86px",
          opacity: 1,
          background: "transparent",
        }}
      >
        {/* Number */}
        <div
          style={{
            width: "55px",
            height: "61px",
            position: "absolute",
            top: "0px",
            left: "5px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontStyle: "Semi Bold",
            fontSize: "50px",
            lineHeight: "100%",
            letterSpacing: "-6%",
            color: "#5B4A3E",
            opacity: 1,
          }}
        >
          01
        </div>

        {/* Image */}
        <Image
          src={line} // replace with your image path
          alt="card image"
          style={{
            width: "96px",
            height: "18px",
            position: "absolute",
            top: "61px",
            left: "0px",
            opacity: 1,
          }}
        />
      </div>

      {/* First Card Text */}
      <div
        style={{
          width: "270px",
          height: "29px",
          position: "absolute",
          top: "1126px",
          left: "91px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontStyle: "Semi Bold",
          fontSize: "24px",
          lineHeight: "100%",
          letterSpacing: "-3%",
          color: "#5C4737",
          opacity: 1,
        }}
      >
        Instant Human Support
      </div>
      <div
        style={{
          width: "336px",
          height: "100px",
          position: "absolute",
          top: "1177px",
          left: "91px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontStyle: "Regular",
          fontSize: "18px",
          lineHeight: "25px",
          letterSpacing: "-2%",
          color: "#6D6D6F",
          opacity: 1,
        }}
      >
        Start chatting the moment you feel overwhelmed. No forms. No queues. No matching wait. A real counsellor responds in seconds.
      </div>

      {/* Second Card */}
      <div
        style={{
          width: "326px",
          height: "244px",
          position: "absolute",
          top: "1033px",
          left: "506px",
          opacity: 1,
          background: "transparent",
        }}
      >
        {/* Number */}
        <div
          style={{
            width: "62px",
            height: "61px",
            position: "absolute",
            top: "0px",
            left: "5px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontStyle: "Semi Bold",
            fontSize: "50px",
            lineHeight: "100%",
            letterSpacing: "-6%",
            color: "#5B4A3E",
            opacity: 1,
          }}
        >
          02
        </div>

        {/* Image */}
        <Image
          src={line} // replace with your second image path
          alt="card image 2"
          style={{
            width: "96px",
            height: "18px",
            position: "absolute",
            top: "64px",
            left: "0px",
            opacity: 1,
          }}
        />
      </div>

      {/* Second Card Text */}
      <div
        style={{
          width: "250px",
          height: "29px",
          position: "absolute",
          top: "1126px",
          left: "506px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontStyle: "Semi Bold",
          fontSize: "24px",
          lineHeight: "100%",
          letterSpacing: "-3%",
          color: "#5C4737",
          opacity: 1,
        }}
      >
        100% Anonymous
      </div>
      <div
        style={{
          width: "321px",
          height: "100px",
          position: "absolute",
          top: "1177px",
          left: "506px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontStyle: "Regular",
          fontSize: "18px",
          lineHeight: "25px",
          letterSpacing: "-2%",
          color: "#6D6D6F",
          opacity: 1,
        }}
      >
        You can choose a nickname. Your real identity stays private.. Even our counsellors won’t know who you are. Feel safe, share freely.
      </div>

      {/* Third Card */}
<div
  style={{
    width: "255px",
    height: "219px",
    position: "absolute",
    top: "1033px",
    left: "926px",
    opacity: 1,
    background: "transparent",
  }}
>
  {/* Number */}
  <div
    style={{
      width: "63px",
      height: "61px",
      position: "absolute",
      top: "0px",
      left: "0px",
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontStyle: "Semi Bold",
      fontSize: "50px",
      lineHeight: "100%",
      letterSpacing: "-6%",
      color: "#5B4A3E",
      opacity: 1,
    }}
  >
    03
  </div>

  {/* Image */}
  <Image
    src={line} // replace with your image
    alt="card image 3"
    style={{
      width: "96px",
      height: "18px",
      position: "absolute",
      top: "64px",
      left: "0px",
      opacity: 1,
    }}
  />
</div>

{/* Third Card Title */}
<div
  style={{
    width: "190px",
    height: "29px",
    position: "absolute",
    top: "1126px",
    left: "926px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontStyle: "Semi Bold",
    fontSize: "24px",
    lineHeight: "100%",
    letterSpacing: "-3%",
    color: "#5C4737",
    opacity: 1,
  }}
>
  Flexible Access
</div>

{/* Third Card Description */}
<div
  style={{
    width: "255px",
    height: "75px",
    position: "absolute",
    top: "1177px",
    left: "926px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontStyle: "Regular",
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "-2%",
    color: "#6D6D6F",
    opacity: 1,
  }}
>
  Want to choose your own counsellor? Prefer video or voice? You can book that.
</div>


{/* Card 04 */}
<div
  style={{
    width: "323px",
    height: "244px",
    position: "absolute",
    top: "1377px",
    left: "86px",
    opacity: 1,
    background: "transparent",
  }}
>
  {/* Number */}
  <div
    style={{
      width: "64px",
      height: "61px",
      position: "absolute",
      top: "0px",
      left: "0px",
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "50px",
      lineHeight: "100%",
      letterSpacing: "-6%",
      color: "#5B4A3E",
    }}
  >
    04
  </div>

  {/* Image */}
  <Image
    src={line}
    alt="card image 04"
    style={{
      width: "96px",
      height: "18px",
      position: "absolute",
      top: "64px",
      left: "0px",
    }}
  />
</div>

{/* Card 04 Title */}
<div
  style={{
    width: "240px",
    height: "29px",
    position: "absolute",
    top: "1470px",
    left: "86px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "100%",
    letterSpacing: "-3%",
    color: "#5C4737",
  }}
>
  Goal-Based Nudges
</div>

{/* Card 04 Description */}
<div
  style={{
    width: "323px",
    height: "100px",
    position: "absolute",
    top: "1521px",
    left: "86px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "-2%",
    color: "#6D6D6F",
  }}
>
  Set your personal growth goals inside the app. We send you tiny, doable nudges to help you stay on track — one gentle step at a time.
</div>



{/* Card 05 */}
<div
  style={{
    width: "321px",
    height: "244px",
    position: "absolute",
    top: "1377px",
    left: "506px",
    opacity: 1,
    background: "transparent",
  }}
>
  {/* Number */}
  <div
    style={{
      width: "62px",
      height: "61px",
      position: "absolute",
      top: "0px",
      left: "0px",
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "50px",
      lineHeight: "100%",
      letterSpacing: "-6%",
      color: "#5B4A3E",
    }}
  >
    05
  </div>

  {/* Image */}
  <Image
    src={line}
    alt="card image 05"
    style={{
      width: "96px",
      height: "18px",
      position: "absolute",
      top: "64px",
      left: "0px",
    }}
  />
</div>

{/* Card 05 Title */}
<div
  style={{
    width: "163px",
    height: "29px",
    position: "absolute",
    top: "1470px",
    left: "506px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "100%",
    letterSpacing: "-3%",
    color: "#5C4737",
  }}
>
  Mood Tracker
</div>

{/* Card 05 Description */}
<div
  style={{
    width: "321px",
    height: "100px",
    position: "absolute",
    top: "1521px",
    left: "506px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "-2%",
    color: "#6D6D6F",
  }}
>
  Just tap how you're feeling. We'll guide you from there. No mood history shown — because your past doesn’t need to hurt you again.
</div>



{/* Card 06 */}
<div
  style={{
    width: "330px",
    height: "269px",
    position: "absolute",
    top: "1377px",
    left: "926px",
    opacity: 1,
    background: "transparent",
  }}
>
  {/* Number */}
  <div
    style={{
      width: "63px",
      height: "61px",
      position: "absolute",
      top: "0px",
      left: "0px",
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "50px",
      lineHeight: "100%",
      letterSpacing: "-6%",
      color: "#5B4A3E",
    }}
  >
    06
  </div>

  {/* Image */}
  <Image
    src={line}
    alt="card image 06"
    style={{
      width: "96px",
      height: "18px",
      position: "absolute",
      top: "64px",
      left: "0px",
    }}
  />
</div>

{/* Card 06 Title */}
<div
  style={{
    width: "370px",
    height: "29px",
    position: "absolute",
    top: "1470px",
    left: "926px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "100%",
    letterSpacing: "-3%",
    color: "#5C4737",
  }}
>
  Self-Discovery Tools & Library
</div>

{/* Card 06 Description */}
<div
  style={{
    width: "329px",
    height: "125px",
    position: "absolute",
    top: "1521px",
    left: "926px",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "25px",
    letterSpacing: "-2%",
    color: "#6D6D6F",
  }}
>
  Discover your patterns, habits, and emotional needs through quick self-assessments, then explore expert-curated videos, podcasts, stories, and guided journaling.
</div>
    </section>
  );
};

const Whowant = () => {
  return (
    <section className="w-full h-[1169px] bg-[#F6F2EB] overflow-x-hidden">

      {/* Heading */}
      <h2 className="absolute top-[1787px] left-[44px] w-[321px] h-[68px] font-['Nunito_Sans'] font-bold text-[50px] text-black">
        Who it’s For ?
      </h2>

      {/* Description */}
      <p className="absolute top-[1868px] left-[44px] w-[381px] text-[18px] text-black/80 font-['Nunito_Sans']">
        Mind A Lot is for everyone who wants to feel better, grow stronger, and cope smarter.
      </p>

      {/* Quote Card */}
      <div className="absolute top-[1972px] left-[44px] w-[410px] h-[113px] bg-[#F8F8F8]" />

      {/* Quote */}
      <p className="absolute top-[1991px] left-[59px] w-[331px] italic font-bold text-[16px]">
        “ Wherever you are. Whoever you are. However you feel. ”
      </p>

      {/* Signature */}
      <p className="absolute top-[2054px] left-[239px] text-[16px]">
        – Mind A Lot is here for you!
      </p>

      {/* Working Professionals */}
      <div className="absolute top-[2120px] left-[44px] w-[410px] h-[262px] rounded-[12px] overflow-hidden">
        <Image src={w1} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/90" />
        <div className="absolute bottom-[20px] left-[20px] text-white text-[30px] font-semibold">
          Working Professionals
        </div>
      </div>

      {/* Students */}
      <div className="absolute top-[1787px] left-[476px] w-[410px] h-[594px] rounded-[12px] overflow-hidden">
        <Image src={w2} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_72%,rgba(0,0,0,.6)_83%)]" />
        <div className="absolute bottom-[20px] left-[20px] text-white text-[30px] font-semibold">
          Students & Young Adults
        </div>
      </div>

      {/* Others */}
      <div className="absolute top-[1787px] left-[906px] w-[410px] h-[594px] rounded-[12px] overflow-hidden">
        <Image src={w3} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_76%,rgba(0,0,0,.8)_100%)]" />
        <div className="absolute bottom-[20px] left-[20px] text-white text-[30px] font-semibold">
          LGBTQ+ Community
        </div>
      </div>

    {/* ===== Layout 1 – Older Adults ===== */}
 <div className="absolute top-[2402px] left-[48px] w-[410px] h-[416px] rounded-[12px] overflow-hidden">

  {/* Image */}
  <Image
    src={w4} // 🔁 Older Adults image
    alt="Older Adults"
    className="w-full h-full object-cover"
  />

  {/* Gradient */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 74.16%, rgba(0, 0, 0, 0.7) 100%)",
    }}
  />

  {/* Text */}
  <div
    className="
      absolute
      top-[339px]
      left-[122px]
      w-[181px]
      h-[36px]
      font-['Inter']
      font-semibold
      text-[30px]
      leading-[100%]
      tracking-[-3%]
      text-white
    "
  >
    Older Adults
  </div>
</div>


{/* ===== Layout 2 – Neurodivergent Users ===== */}
<div className="absolute top-[2402px] left-[480px] w-[410px] h-[416px] rounded-[12px] overflow-hidden">

  {/* Image */}
  <Image
    src={w5} // 🔁 Neurodivergent Users image
    alt="Neurodivergent Users"
    className="w-full h-full object-cover"
  />

  {/* Gradient */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 71.88%, rgba(0, 0, 0, 0.8) 100%)",
    }}
  />

  {/* Text */}
  <div
    className="
      absolute
      top-[339px]
      left-[54px]
      w-[322px]
      h-[36px]
      font-['Inter']
      font-semibold
      text-[30px]
      leading-[100%]
      tracking-[-3%]
      text-white
      text-center
    "
  >
    Neurodivergent Users
  </div>
</div>


{/* ===== Layout 3 – Anyone Needing Support ===== */}
<div className="absolute top-[2402px] left-[910px] w-[410px] h-[416px] rounded-[12px] overflow-hidden">

  {/* Image */}
  <Image
    src={w6} // 🔁 Anyone Needing Support image
    alt="Anyone Needing Support"
    className="w-full h-full object-cover"
  />

  {/* Gradient */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(180deg, rgba(0, 0, 0, 0) 71.51%, rgba(0, 0, 0, 0.8) 100%)",
    }}
  />

  {/* Text */}
  <div
    className="
      absolute
      top-[339px]
      left-[32px]
      w-[366px]
      h-[36px]
      font-['Inter']
      font-semibold
      text-[30px]
      leading-[100%]
      tracking-[-3%]
      text-white
      text-center
    "
  >
    Anyone Needing Support
  </div>
</div>

    </section>
  );
};





const Features = () => {
  return (
    // We adjust the min-height to accommodate the new lower elements (up to 3488px)
    <section className="relative w-full overflow-hidden mt-20"> 
      
      {/* MAIN LAYOUT: w: 1249px; h: 559px; left: 96px (using margin-left) */}
      <div 
        className="relative mx-auto w-[1249px] h-[559px] opacity-100" 
        style={{ marginLeft: '60px' }}
      >
        
        {/* === HEADER BLOCK === */}
        <div className="w-full h-full relative"> 
          <div 
            className="absolute w-[407px] h-[61px] text-black font-['Inter'] text-[50px] font-semibold"
            style={{ top: '0', left: '24px' }}
          >
            Key features
          </div>
          <div 
            className="absolute w-[562px] h-[25px] text-black font-['Nunito_Sans'] text-[18px] font-medium"
            style={{ top: '81px', left: '24px' }}
          >
            Discover the essential features you need - all in one trusted platform.
          </div>
        </div>

        {/* --- LEFT COLUMN (F1-F4) - Previous features start here --- */}
        
        {/* === F1 LAYOUT (24/7 Live Chat) === */}
        <div 
          className="absolute w-[553px] h-[80px] flex items-center" 
          style={{ top: '144px', left: '0' }}
        >
          <div className="flex items-center justify-center p-[15px] h-full"> 
            {/* Using a standard <img> tag instead of a placeholder <Image> component for cleaner vanilla React/Next.js compatibility */}
            <Image
              src={fi1} 
              alt="Feature Icon 1" 
              className="w-[50px] h-[50px] "
            />
          </div>
          <div 
            className="h-[33px] text-[#000000] font-['Nunito_Sans'] text-[24px] font-medium flex items-center"
            style={{ width: '445px' ,position: 'absolute', left:'100px'}}
          >
            24/7 Live Chat With Human Counsellors
          </div>
        </div>
        
        {/* === DIVIDER 1 (After F1) === */}
        <Image
          src={f1l} 
          alt="Divider Line 1" 
          className="absolute w-[605px] h-[2px] opacity-100"
          style={{ top: '243px', left: '15px' }}
        />

        {/* === F2 LAYOUT (Goal Tracker) === */}
        <div 
          className="absolute w-[502px] h-[80px] flex items-center" 
          style={{ top: '258px', left: '0' }}
        >
          <div className="flex items-center justify-center h-full w-[80px]"> 
            <Image
              src={featureIcon2} 
              alt="Feature Icon 2" 
              className="w-[50px] h-[50px] "
            />
          </div>
          <div 
            className="h-[35px] text-black font-['Nunito_Sans'] text-[24px] font-semibold flex items-center"
            style={{ 
              width: '420px', 
              lineHeight: '35px', 
              letterSpacing: '-0.03em', 
              marginLeft: '15px' 
            }}
          >
            Goal Tracker With Behavioural Nudges
          </div>
        </div>
        
        {/* === DIVIDER 2 (After F2) === */}
        <Image
          src={dividerImage2} 
          alt="Divider Line 2" 
          className="absolute w-[605px] h-[2px] opacity-100"
          style={{ top: '353px', left: '15px' }}
        />

        {/* === F3 - Mood Guidance === */}
        <div 
            className="absolute w-[500px] h-[80px] flex items-center" 
            style={{ top: '367px', left: '0' }}
        >
          <div className="flex items-center justify-center h-full w-[80px]"> 
            <Image
              src={featureIcon3} 
              alt="Feature Icon 3" 
              className="w-[37.5px] h-[37.5px] "
            />
          </div>
          <div 
            className="h-[35px] text-black font-['Nunito_Sans'] text-[24px] font-semibold flex items-center"
            style={{ 
              width: '245px', 
              lineHeight: '35px', 
              letterSpacing: '-0.03em',
              marginLeft: '15px'
            }}
          >
            Mood-Based Guidance
          </div>
        </div>

        {/* === DIVIDER 3 (After F3) === */}
        <Image
          src={dividerImage3} 
          alt="Divider Line 3" 
          className="absolute w-[605px] h-[2px] opacity-100"
          style={{ top: '463px', left: '15px' }}
        />
        
        {/* === F4 LAYOUT (Bite-Sized Self Assessments) === */}
        <div 
          className="absolute w-[396px] h-[80px] flex items-center" 
          style={{ top: '478px', left: '0' }}
        >
          <div className="flex items-center justify-center h-full w-[80px]"> 
            <Image
              src={featureIcon4} 
              alt="Feature Icon 4" 
              className="w-[50px] h-[50px] "
            />
          </div>
          <div 
            className="h-[35px] text-black font-['Nunito_Sans'] text-[24px] font-semibold flex items-center"
            style={{ 
              width: '301px', 
              lineHeight: '35px', 
              letterSpacing: '-0.03em',
              marginLeft: '15px'
            }}
          >
            Bite-Sized Self Assessments
          </div>
        </div>
        
        {/* --- RIGHT COLUMN (F5-F8) - NEW FEATURES START HERE --- */}

        {/* === F5 LAYOUT (Expert Videos, Podcasts, and Content Drops) === 
            top: 3136px -> 149px; left: 721px -> 625px 
        */}
        <div 
          className="absolute w-[554px] h-[80px] flex items-center" 
          style={{ top: '149px', left: '625px' }}
        >
          <div className="flex items-center justify-center p-[15px] h-full"> 
            {/* IMAGE: 50x50 */}
            <Image
              src={featureIcon5} 
              alt="Feature Icon 5" 
              className="w-[50px] h-[50px]"
            />
          </div>
          <div 
            className="h-[35px] text-black font-['Nunito_Sans'] text-[24px] font-semibold flex items-center"
            style={{ 
              width: '469px', 
              lineHeight: '35px', 
              letterSpacing: '-0.03em',
              position: 'absolute', // Absolute to match the explicit left placement
              left: '95px' // Calculated margin: 816 - 721 = 95px
            }}
          >
            Expert Videos, Podcasts, and Content Drops
          </div>
        </div>
        
        {/* === DIVIDER 4 (After F5) === 
            width: 605px; height: 0px; top: 3230px -> 243px; left: 736px -> 640px
        */}
        <Image
          src={dividerImage2} 
          alt="Divider Line 4" 
          className="absolute w-[605px] h-[2px] opacity-100"
          style={{ top: '243px', left: '640px' }}
        />

        {/* === F6 LAYOUT (Works Across Countries & Languages) === 
            width: 489px; height: 80px; top: 3246px -> 259px; left: 721px -> 625px
        */}
        <div 
          className="absolute w-[489px] h-[80px] flex items-center" 
          style={{ top: '259px', left: '625px' }}
        >
          <div className="flex items-center justify-center p-[15px] h-full"> 
            {/* IMAGE: 50x50 */}
            <Image
              src={featureIcon6} 
              alt="Feature Icon 6" 
              className="w-[50px] h-[50px]"
            />
          </div>
          <div 
            className="h-[35px] text-black font-['Nunito_Sans'] text-[24px] font-semibold flex items-center"
            style={{ 
              width: '404px', 
              lineHeight: '35px', 
              letterSpacing: '-0.03em',
              position: 'absolute',
              left: '95px' // Calculated margin: 816 - 721 = 95px
            }}
          >
            Works Across Countries & Languages
          </div>
        </div>
        
        {/* === DIVIDER 5 (After F6) === 
            width: 605px; height: 0px; top: 3340px -> 353px; left: 736px -> 640px
        */}
        <Image
          src={dividerImage2} 
          alt="Divider Line 5" 
          className="absolute w-[605px] h-[2px] opacity-100"
          style={{ top: '353px', left: '640px' }}
        />
        
        {/* === F7 LAYOUT (Escalation To Partner Hospitals For Psychiatric Care) === 
            width: 624px; height: 80px; top: 3356px -> 369px; left: 721px -> 625px
        */}
        <div 
          className="absolute w-[624px] h-[80px] flex items-center" 
          style={{ top: '369px', left: '625px' }}
        >
          <div className="flex items-center justify-center p-[15px] h-full"> 
            {/* IMAGE: 50x50 */}
            <Image
              src={featureIcon7} 
              alt="Feature Icon 7" 
              className="w-[50px] h-[50px]"
            />
          </div>
          <div 
            className="h-[35px] text-black font-['Nunito_Sans'] text-[24px] font-semibold flex items-center"
            style={{ 
              width: '549px', 
              lineHeight: '35px', 
              letterSpacing: '-0.03em',
              position: 'absolute',
              left: '95px' // Calculated margin: 816 - 721 = 95px
            }}
          >
            Escalation To Partner Hospitals For Psychiatric Care
          </div>
        </div>

        {/* === DIVIDER 6 (After F7) === 
            width: 605px; height: 0px; top: 3450px -> 463px; left: 736px -> 640px
        */}
        <Image
          src={dividerImage2} 
          alt="Divider Line 6" 
          className="absolute w-[605px] h-[2px] opacity-100"
          style={{ top: '463px', left: '640px' }}
        />

        {/* === F8 LAYOUT (100% Anonymity Guaranteed) === 
            width: 410px; height: 80px; top: 3466px -> 479px; left: 721px -> 625px
        */}
        <div 
          className="absolute w-[410px] h-[80px] flex items-center" 
          style={{ top: '479px', left: '625px' }}
        >
          <div className="flex items-center justify-center p-[15px] h-full"> 
            {/* IMAGE: 50x50 */}
            <Image
              src={featureIcon8} 
              alt="Feature Icon 8" 
              className="w-[50px] h-[50px]"
            />
          </div>
          <div 
            className="h-[35px] text-black font-['Nunito_Sans'] text-[24px] font-semibold flex items-center"
            style={{ 
              width: '315px', 
              lineHeight: '35px', 
              letterSpacing: '-0.03em',
              position: 'absolute',
              left: '95px' // Calculated margin: 816 - 721 = 95px
            }}
          >
            100% Anonymity Guaranteed
          </div>
        </div>
        
      </div>
    </section>
  );
};

// const Features = () => {
//   return (
//     // We adjust the min-height to accommodate the new lower elements (up to 3488px)
//     <section className="relative w-full overflow-hidden mt-20"> 
      
//       {/* MAIN LAYOUT: w: 1249px; h: 559px; left: 96px (using margin-left) */}
//       <div 
//         className="relative mx-auto w-[1249px] h-[559px]  opacity-100" 
//         style={{ marginLeft: '96px' }}
//       >
        
//         {/* === HEADER BLOCK === */}
//         <div className="w-full h-full relative"> 
//           <div 
//             className="absolute w-[407px] h-[61px] text-black font-['Inter'] text-[50px] font-semibold"
//             style={{ top: '0', left: '24px' }}
//           >
//             Key features
//           </div>
//           <div 
//             className="absolute w-[562px] h-[25px] text-black font-['Nunito_Sans'] text-[18px] font-medium"
//             style={{ top: '81px', left: '24px' }}
//           >
//             Discover the essential features you need - all in one trusted platform.
//           </div>
//         </div>

//         {/* === F1 LAYOUT (24/7 Live Chat) === */}
//         <div 
//           className="absolute w-[553px] h-[80px] flex items-center" 
//           style={{ top: '144px', left: '0' }}
//         >
//           <div className="flex items-center justify-center p-[15px] h-full"> 
//             <Image
//               src={fi1} 
//               alt="Feature Icon 1" 
//               className="w-[50px] h-[50px] "
//             />
//           </div>
//           <div 
//             className="h-[33px] text-[#000000]  font-['Nunito_Sans'] text-[24px] font-medium flex items-center"
//             style={{ width: '445px' ,position: 'absolute', left:'100px'}}
//           >
//             24/7 Live Chat With Human Counsellors
//           </div>
//         </div>
        
//         {/* === DIVIDER 1 (After F1) === */}
//         <Image
//           src={f1l} 
//           alt="Divider Line 1" 
//           className="absolute w-[605px] h-[2px] opacity-100"
//           style={{ top: '243px', left: '15px' }}
//         />

//         {/* === F2 LAYOUT (Goal Tracker) === 
//             width: 502px; height: 80px; top: 3245px -> 258px; left: 96px -> 0px
//         */}
//         <div 
//           className="absolute w-[502px] h-[80px] flex items-center" 
//           style={{ top: '258px', left: '0' }}
//         >
//           {/* F2 IMAGE LAYOUT (80x80) */}
//           <div className="flex items-center justify-center h-full w-[80px]"> 
//             {/* F2 IMAGE (50x50, top: 15px, left: 15px relative to 80x80 container) */}
//             <Image
//               src={featureIcon2} 
//               alt="Feature Icon 2" 
//               className="w-[50px] h-[50px] "
//               // style={{ padding: '15px 0 0 0' }} // Simulated top: 15px, left: 15px is handled by centered flex
//             />
//           </div>
          
//           {/* F2 TEXT LAYOUT (Goal Tracker)
//               width: 407px; height: 35px; top: 3268px -> 281px; left: 191px -> 95px
//               Typography: Nunito Sans, SemiBold (600), 24px, Black, line-height: 35px, letter-spacing: -3%
//           */}
//           <div 
//             className="h-[35px] text-black font-['Nunito_Sans'] text-[24px] font-semibold flex items-center"
//             style={{ 
//               width: '420px', 
//               lineHeight: '35px', 
//               letterSpacing: '-0.03em', // -3% letter spacing
//               marginLeft: '15px' // Calculated margin for text alignment: 191 - (96 + 80) = 15px
//             }}
//           >
//             Goal Tracker With Behavioural Nudges
//           </div>
//         </div>
        
//         {/* === DIVIDER 2 (After F2) === 
//             width: 605px; height: 0px; top: 3340px -> 353px; left: 111px -> 15px
//         */}
//         <Image
//           src={dividerImage2} 
//           alt="Divider Line 2" 
//           className="absolute w-[605px] h-[2px] opacity-100"
//           style={{ top: '353px', left: '15px' }}
//         />

//         {/* === F3 - Mood Guidance (Elements added directly to Main Layout) === 
//             The structure here is slightly different, the image and text are not explicitly grouped in an F3 layout, 
//             but placed directly into the main container near each other. We will group them for clean code.
//         */}
//         <div 
//             className="absolute w-[500px] h-[80px] flex items-center" // Grouping for cleanliness
//             style={{ top: '367px', left: '0' }} // Image starts at 3354px (367px relative)
//         >
//           {/* F3 IMAGE LAYOUT (Mood Icon)
//               width: 80px; height: 80px; top: 3354px -> 367px; left: 96px -> 0px
//           */}
//           <div className="flex items-center justify-center h-full w-[80px]"> 
//             {/* F3 IMAGE (37.5x37.5, top: 4.17px, left: 4.17px relative to 80x80 container) */}
//             <Image
//               src={featureIcon3} 
//               alt="Feature Icon 3" 
//               className="w-[37.5px] h-[37.5px] "
//               // style={{ padding: '4.17px 0 0 0' }} // Simulated top: 4.17px, left: 4.17px is handled by centered flex
//             />
//           </div>
          
//           {/* F3 TEXT LAYOUT (Mood-Based Guidance)
//               width: 236px; height: 35px; top: 3378px -> 391px; left: 191px -> 95px
//           */}
//           <div 
//             className="h-[35px] text-black font-['Nunito_Sans'] text-[24px] font-semibold flex items-center"
//             style={{ 
//               width: '245px', 
//               lineHeight: '35px', 
//               letterSpacing: '-0.03em',
//               marginLeft: '15px' // Calculated margin: 191 - (96 + 80) = 15px
//             }}
//           >
//             Mood-Based Guidance
//           </div>
//         </div>

//         {/* === DIVIDER 3 (After F3) === 
//             width: 605px; height: 0px; top: 3450px -> 463px; left: 111px -> 15px
//         */}
//         <Image 
//           src={dividerImage3} 
//           alt="Divider Line 3" 
//           className="absolute w-[605px] h-[2px] opacity-100"
//           style={{ top: '463px', left: '15px' }}
//         />
        
//         {/* === F4 LAYOUT (Bite-Sized Self Assessments) === 
//             Note: The user labeled this "f3 layout" but it follows the "Mood-Based Guidance" (F3) section. 
//             I will label it F4 for clarity in sequence.
//             width: 396px; height: 80px; top: 3465px -> 478px; left: 96px -> 0px
//         */}
//         <div 
//           className="absolute w-[396px] h-[80px] flex items-center" 
//           style={{ top: '478px', left: '0' }}
//         >
//           {/* F4 IMAGE LAYOUT (80x80) */}
//           <div className="flex items-center justify-center h-full w-[80px]"> 
//             {/* F4 IMAGE (50x50, top: 17px, left: 15px relative to 80x80 container) */}
//             <Image
//               src={featureIcon4} 
//               alt="Feature Icon 4" 
//               className="w-[50px] h-[50px] "
//               // style={{ padding: '17px 0 0 0' }} // Simulated top: 17px, left: 15px is handled by centered flex
//             />
//           </div>

//           {/* F4 TEXT LAYOUT (Bite-Sized Self Assessments)
//               width: 301px; height: 35px; top: 3488px -> 501px; left: 191px -> 95px
//           */}
//           <div 
//             className="h-[35px] text-black font-['Nunito_Sans'] text-[24px] font-semibold flex items-center"
//             style={{ 
//               width: '301px', 
//               lineHeight: '35px', 
//               letterSpacing: '-0.03em',
//               marginLeft: '15px' // Calculated margin: 191 - (96 + 80) = 15px
//             }}
//           >
//             Bite-Sized Self Assessments
//           </div>
//         </div>
        
//       </div>
//     </section>
//   );
// };

  return (
    <>
      <HomeHero />
      <MakeUs/>
      <Whowant/>
      <Features/>
    </>
  );
}

