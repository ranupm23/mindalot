import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import arrow from "../assets/arrow.svg";
import Homebg from "../assets/home-page/hero/rock.png";
import line from "../assets/home-page/ourDiffrent/m1.png";
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
      className="w-full"
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






// const Whowant = () => {
//   return (
//     <section
//       className="w-full relative"
//       style={{
//         width: "100%",
//         height: "1169px",
//         position: "absolute",
//         background: "#F6F2EB",
//         opacity: 1,
//       }}
//     >
//       {/* Heading Layout */}
//       <h2
//         style={{
//           width: "321px",
//           height: "68px",
//           position: "relative",
//           top:"80px",
//           left: "84px",
//           fontFamily: "Nunito Sans, sans-serif",
//           fontWeight: 700,
//           fontStyle: "Bold",
//           fontSize: "50px",
//           lineHeight: "100%",
//           letterSpacing: "0%",
//           color: "#000000",
//           opacity: 1,
//           margin: 0,
//         }}
//       >
//         Who it’s For ?
//       </h2>
//     </section>
//   );
// };





  return (
    <>
      <HomeHero />
      <MakeUs/>
    </>
  );
}

