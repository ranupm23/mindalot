import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import arrow from "../assets/arrow.svg";
import Homebg from "../assets/home-page/hero/rock.png";

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
          bg-[#F6F2EB]
          text-[#1C1C1B]
        "
      >
        LOT
      </div>

      {/* BOTTOM TAGLINE */}
      <div
        className="
          absolute
          w-[270px]
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


  return (
    <>
      <HomeHero />
    </>
  );
}

