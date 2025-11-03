"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";


export default function University() {
  // ========== HERO SECTION ==========
  const HeroSection = () => {
    const avatars = [
     
      { src: "/2.jpg", w: 60, h: 60, top: 226, left: 1334, rotate: -19.14 },
      { src: "/3.jpg", w: 60, h: 60, top: 93, left: 1178, rotate: -27.33 },
      { src: "/4.jpg", w: 75, h: 75, top: 94, left: 929, rotate: 24.76 },
      { src: "/5.jpg", w: 75, h: 75, top: 109.63, left: 1280.63, rotate: -22.15 },
      { src: "/6.jpg", w: 75, h: 75, top: 434, left: 1316, rotate: -7 },
      { src: "/7.jpg", w: 75, h: 75, top: 350, left: 777, rotate: 10.99 },
      { src: "/8.jpg", w: 65, h: 65, top: 214, left: 914, rotate: 12.58 },
      { src: "/9.jpg", w: 25, h: 25, top: 423, left: 1261, rotate: -27.23 },
      { src: "/10.jpg", w: 25, h: 25, top: 264, left: 1276, rotate: -8.46 },
      { src: "/11.jpg", w: 25, h: 25, top: 305, left: 881, rotate: 11.62 },
      { src: "/12.jpg", w: 50, h: 50, top: 338, left: 1286, rotate: 0 },
      { src: "/13.jpg", w: 50, h: 50, top: 201, left: 1211, rotate: 0 },
      { src: "/14.jpg", w: 50, h: 50, top: 264, left: 772, rotate: 10.88 },
      { src: "/15.jpg", w: 50, h: 50, top: 97, left: 840, rotate: 19.55 },
      { src: "/1.jpg", w: 50, h: 50, top: 194, left: 826, rotate: 12.22 },
    ];

    return (
    <section
  className="
   hero-section
    relative
    flex
    flex-col
    md:flex-row
    justify-between
    items-center
    md:items-start
    w-full
    -ml-0
    md:-ml-[50px]
    px-4
    md:px-0
  "
>

        {/* ===== LEFT COLUMN ===== */}
        <div className="hero-left relative w-full md:w-[695px] mt-[40px] md:mt-[144px] ml-0 md:ml-[86px]">
          {/* Heading Text */}
            <h1 className="hero-heading font-inter font-semibold text-[40px] md:text-[60px] leading-[48px] md:leading-[80px] tracking-[-0.06em] text-[#5C4737]">
            Mental Health on Campus is No Longer Optional.
          </h1>

          {/* Sand Line Image */}
          <div className="relative w-[280px] md:w-[500px] h-[38px] mt-[-19px] ml-[20px] md:ml-[38px] ">
            <Image
              src="/line-1.png"
              alt="Sand underline"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>

          {/* Description Text */}
          <div className="w-full md:w-[538px] mt-[20px] px-4 md:px-0">
            <p className="font-inter font-medium text-[16px] md:text-[18px] leading-[28px] md:leading-[35px] tracking-[-0.03em] text-[#0D0D0D]">
              Students are struggling silently. Depression, anxiety, burnout,
              and identity crises don't wait for counselling center hours. Mind
              A Lot gives your students instant, anonymous access to licensed
              mental health professionals, 24/7. No stigma. No waiting lists.
              Just real support, in real time.
            </p>
          </div>

{/* CTA BUTTON */}
<button
  className="
    group relative mt-[40px] w-[225px] h-[60px] bg-[#967B6A]
    rounded-[43px] flex items-center justify-start pl-[24px] pr-[24px]
    text-white font-inter font-medium text-[16px] tracking-[-0.03em]
    transition-all duration-300 ease-in-out
    hover:bg-[#856a59] hover:-translate-y-[3px] hover:shadow-lg
    cursor-pointer
  "
>
  Schedule a Demo
  <div
    className="
      absolute right-[10px] top-[5px] w-[50px] h-[50px] bg-white
      rounded-full flex items-center justify-center
      transition-transform duration-300 ease-in-out
      group-hover:translate-x-[5px]
      
    "
  >
    <ArrowRight
      className="
        w-[24px] h-[24px] text-[#967B6A]
        transition-transform duration-300 ease-in-out
        group-hover:-rotate-45
      "
      strokeWidth={2.5}
    />
  </div>
</button>

        </div>

        {/* ===== RIGHT SIDE ELEMENTS ===== */}
        <Image
          src="/student.png"
          alt="student"
          width={509}
          height={764}
          className="student-img hidden md:block absolute top-[-100px] left-[820px] opacity-100 pointer-events-none select-none"
        />
        {/* Mobile student image + 7 avatars mapped from desktop positions (mobile-only) */}
        <div className="student-mobile-container block md:hidden w-full mt-8 relative flex justify-center pointer-events-none select-none">
          {/* compute mobile positions by scaling desktop avatar offsets relative to desktop student image */}
          {(() => {
            const desktopStudent = { left: 820, top: -100, width: 509, height: 764 };
            const mobileW = 300;
            const mobileH = 450;
            const scaleX = mobileW / desktopStudent.width;
            const scaleY = mobileH / desktopStudent.height;
            // choose first 8 avatars (add one more on the left to mirror desktop)
            const indices = [0, 1, 2, 3, 4, 5, 6, 12];
            const mapped = indices.map((i) => {
              const a = avatars[i];
              const w = Math.max(28, Math.round(a.w * scaleX));
              const h = Math.max(28, Math.round(a.h * scaleY));
              const left = Math.round((a.left - desktopStudent.left) * scaleX);
              const top = Math.round((a.top - desktopStudent.top) * scaleY);
              return { src: a.src, w, h, left, top, rotate: a.rotate };
            });

            return (
              <div className="relative" style={{ width: mobileW }}>
                <Image src="/student.png" alt="student" width={mobileW} height={mobileH} className="w-full h-auto" />
                {mapped.map((m, idx) => (
                  <div
                    key={idx}
                    className="absolute rounded-full overflow-hidden shadow-md"
                    style={{ width: m.w, height: m.h, left: m.left, top: m.top }}
                  >
                    <Image src={m.src} alt={`m${idx}`} width={m.w} height={m.h} className={`object-cover w-full h-full`} />
                  </div>
                ))}
              </div>
            );
          })()}
        </div>

        {/* Rectangle Layout */}
        <div
          className="
            absolute top-[470px] left-[640px] w-[260px] h-[115px]
            bg-[#BE9B8433] rounded-[10px] opacity-100
          "
        >
          <p
            className="
              absolute top-[58px] left-[16px] w-[220px]
              font-inter font-normal text-[13px] leading-[22px]
              tracking-[-0.03em] text-[#6D6D6F]
            "
          >
            Your mind matters. Take care of it like you do your dreams.
          </p>

          <div
            className="
              absolute top-[-12px] left-[190px] w-[60px] h-[60px]
              rounded-full bg-white border border-[#755840]
              flex items-center justify-center
            "
          >
            <ArrowRight
              className="w-[18px] h-[18px] text-[#755840] rotate-[120deg]"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* ===== AVATARS ===== */}
        {avatars.map((a, i) => (
          <div

            key={i}
            className="avatar absolute rounded-full overflow-hidden shadow-md"
            style={{
              width: `${a.w}px`,
              height: `${a.h}px`,
              top: `${a.top}px`,
              left: `${a.left}px`,
              transform: `rotate(${a.rotate}deg)`,
              opacity: 1,
            }}
          >
            <Image
              src={a.src}
              alt={`Avatar ${i + 1}`}
              width={a.w}
              height={a.h}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </section>
    );
  };

// ========== OFFER SECTION ==========
const OfferSection = () => {
  return (
    <section className="offer-section relative mt-[60px] md:mt-[120px] ml-4 md:ml-[67px]">
      {/* ====== Title ====== */}
      <div className="w-full md:w-[660px] h-auto md:h-[61px] opacity-100 mb-[30px] md:mb-[40px]">
        <h2 className="offer-title font-inter font-semibold text-[32px] md:text-[50px] leading-[120%] md:leading-[100%] tracking-[-0.06em] text-[#5C4737]">
          What we Offer to Universities ?
        </h2>
      </div>

      {/* ====== 1st Row (4 Cards) ====== */}
      <div className="offer-grid flex flex-wrap md:flex-nowrap gap-[13px] mb-[20px] md:mb-[40px] justify-center md:justify-start">
        {/* ====== Card 1 ====== */}
        <div
          className="offer-card relative w-[302px] h-[302px] rounded-md border border-transparent bg-[#F8F8F8]"
          style={{
            borderImage:
              "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%) 1",
          }}
        >
          <div className="absolute top-[20px] left-[20px] w-[75px] h-[75px]">
            <img
              src="/24.png"
              alt="offer icon"
              className="w-[56.25px] h-[62.46px] object-contain"
            />
          </div>

          <div className="absolute top-[139px] left-[20px] w-[195px] h-[58px]">
            <p className="font-inter font-semibold text-[24px] leading-[100%] tracking-[-0.03em] text-[#5C4737]">
              24/7 Anonymous Access
            </p>
          </div>

          <div className="absolute top-[207px] left-[20px] w-[262px] h-[75px]">
            <p className="font-inter font-medium text-[14px] leading-[25px] tracking-[-0.03em] text-[#6D6D6F]">
              Real counselling with no ID or booking needed, ensuring complete
              privacy and immediate support.
            </p>
          </div>
        </div>

        {/* ====== Card 2 ====== */}
        <div
          className="relative w-[302px] h-[302px] rounded-[10px] border border-transparent bg-[#F8F8F8]"
          style={{
            borderImage:
              "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%) 1",
          }}
        >
          <div className="absolute top-[20px] left-[20px] w-[75px] h-[75px]">
            <img
              src="/holistic.png"
              alt="offer icon"
              className="w-[62.5px] h-[56.84px] object-contain"
            />
          </div>

          <div className="absolute top-[164px] left-[20px] w-[196px] h-[58px]">
            <p className="font-inter font-semibold text-[24px] leading-[100%] tracking-[-0.03em] text-[#5C4737]">
              Holistic Student Support
            </p>
          </div>

          <div className="absolute top-[232px] left-[20px] w-[262px] h-[50px]">
            <p className="font-inter font-medium text-[14px] leading-[25px] tracking-[-0.03em] text-[#6D6D6F]">
              Covering exam stress, homesickness, relationships, identity, focus,
              and more.
            </p>
          </div>
        </div>

        {/* ====== Card 3 ====== */}
        <div
          className="relative w-[302px] h-[302px] rounded-[10px] border border-transparent bg-[#F8F8F8]"
          style={{
            borderImage:
              "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%) 1",
          }}
        >
          <div className="absolute top-[20px] left-[20px] w-[75px] h-[75px]">
            <img
              src="/Risk.png"
              alt="offer icon"
              className="w-[62.47px] h-[62.47px] object-contain"
            />
          </div>

          <div className="absolute top-[164px] left-[20px] w-[196px] h-[58px]">
            <p className="font-inter font-semibold text-[24px] leading-[100%] tracking-[-0.03em] text-[#5C4737]">
              High-Risk Case Escalation
            </p>
          </div>

          <div className="absolute top-[232px] left-[20px] w-[262px] h-[50px]">
            <p className="font-inter font-medium text-[14px] leading-[25px] tracking-[-0.03em] text-[#6D6D6F]">
              Built-in protocols for high-risk cases with seamless escalation to partner hospitals.
            </p>
          </div>
        </div>

        {/* ====== Card 4 ====== */}
        <div
          className="relative w-[302px] h-[302px] rounded-[10px] border border-transparent bg-[#F8F8F8]"
          style={{
            borderImage:
              "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%) 1",
          }}
        >
          <div className="absolute top-[20px] left-[20px] w-[75px] h-[75px]">
            <img
              src="/dashboard.png"
              alt="offer icon"
              className="w-[62.5px] h-[62.5px] object-contain"
            />
          </div>

           {/* Title */}
          <div className="absolute top-[139px] left-[20px] w-[198px] h-[58px] opacity-100">
            <p className="font-inter font-semibold text-[24px] leading-[100%] tracking-[-0.03em] text-[#5C4737]">
              Institutional Dashboards
            </p>
          </div>

            {/* Description */}
  <div className="absolute top-[207px] left-[20px] w-[262px] h-[75px]">
    <p className="font-inter font-medium text-[14px] leading-[25px] tracking-[-0.03em] text-[#6D6D6F]">
      Anonymized, real-time wellness insights to inform campus-wide mental
      health strategy.
    </p>
  </div>


        </div>
      </div>

      {/* ====== 2nd Row (4 Cards placeholder) ====== */}
      <div className="flex flex-wrap md:flex-nowrap gap-[13px] justify-center md:justify-start">
      {/* ==== Card 5 ==== */}
      
<div
  className="relative w-[302px] h-[302px] rounded-md border border-transparent bg-[#F8F8F8]"
  style={{
    borderImage:
      "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%) 1",
  }}
>
  {/* Icon */}
  <div className="absolute top-[20px] left-[20px] w-[75px] h-[75px]">
    <img
      src="/global.png"
      alt="offer icon"
      className="w-[62.5px] h-[62.5px] object-contain"
    />
  </div>

  {/* Title */}
  <div className="absolute top-[139px] left-[20px] w-[195px] h-[58px]">
    <p className="font-inter font-semibold text-[24px] leading-[100%] tracking-[-0.03em] text-[#5C4737]">
      Global Accessibility
    </p>
  </div>

  {/* Description */}
  <div className="absolute top-[207px] left-[20px] w-[262px] h-[75px]">
    <p className="font-inter font-medium text-[14px] leading-[25px] tracking-[-0.03em] text-[#6D6D6F]">
      Works seamlessly across devices, time zones, and multiple languages to
      serve all students.
    </p>
  </div>
</div>

      {/* ==== Card 6 ==== */}
<div
  className="relative w-[302px] h-[302px] rounded-md border border-transparent bg-[#F8F8F8]"
  style={{
    borderImage:
      "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%) 1",
  }}
>
  {/* Icon */}
  <div className="absolute top-[20px] left-[20px] w-[75px] h-[75px]">
    <img
      src="/custom.png"
      alt="offer icon"
      className="w-[62.5px] h-[62.5px] object-contain"
    />
  </div>

  {/* Title */}
  <div className="absolute top-[139px] left-[20px] w-[196px] h-[58px]">
    <p className="font-inter font-semibold text-[24px] leading-[100%] tracking-[-0.03em] text-[#5C4737]">
      Custom Content Drops
    </p>
  </div>

  {/* Description */}
  <div className="absolute top-[207px] left-[20px] w-[262px] h-[75px]">
    <p className="font-inter font-medium text-[14px] leading-[25px] tracking-[-0.03em] text-[#6D6D6F]">
      Targeted resources for exam anxiety, burnout, homesickness, and self-harm
      prevention.
    </p>
  </div>
</div>

      {/* ==== Card 7 ==== */}
<div
  className="relative w-[302px] h-[302px] rounded-md border border-transparent bg-[#F8F8F8]"
  style={{
    borderImage:
      "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%) 1",
  }}
>
  {/* Icon */}
  <div className="absolute top-[20px] left-[20px] w-[75px] h-[75px]">
    <img
      src="/Regulatory.png"
      alt="offer icon"
      className="w-[63.5px] h-[63.5px] object-contain"
    />
  </div>

  {/* Title */}
  <div
    className="absolute"
    style={{
      width: "197px",
      height: "58px",
      top: "139px",
      left: "20px",
    }}
  >
    <h3
      className="font-inter font-semibold text-[24px] leading-[100%] tracking-[-0.03em] text-[#5C4737]"
    >
      Regulatory Compliance
    </h3>
  </div>

  {/* Description */}
  <div
    className="absolute"
    style={{
      width: "262px",
      height: "75px",
      top: "207px",
      left: "20px",
    }}
  >
    <p
      className="font-inter font-medium text-[14px] leading-[25px] tracking-[-0.03em] text-[#6D6D6F]"
    >
      Helps your institution stay compliant with UGC/NAAC/AICTE mental health directives.
    </p>
  </div>
</div>

  {/* ==== Card 8 ==== */}
<div
  className="relative w-[302px] h-[302px] rounded-md border border-transparent bg-[#5C4737]"
  style={{
    borderImage:
      "linear-gradient(135deg, #5C4737 0%, rgba(194,150,116,0) 100%) 1",
  }}
>
  {/* Text Content */}
  <div className="absolute w-[227px] h-[140px] top-[20px] left-[20px]">
    <p className="font-inter font-medium text-[18px] leading-[35px] tracking-[-0.03em] text-white">
      Start building a mentally healthy campus — Download the University Partnership Kit now.
    </p>
  </div>

{/* Button */}
<div
  className="
    group absolute top-[222px] left-[20px] w-[262px] h-[60px] bg-[#C29674]
    rounded-full flex items-center justify-between pl-[20px] pr-[5px]
    cursor-pointer transition-all duration-300 ease-in-out
    hover:-translate-y-[3px] hover:shadow-lg hover:bg-[#b18363]
  "
>
  <p
    className="
      font-inter font-medium text-[16px] tracking-[-0.03em] text-white
    "
  >
    Download University Kit
  </p>

  <div
    className="
      flex items-center justify-center w-[50px] h-[50px]
      bg-white rounded-full
    "
  >
    <ArrowRight
      className="
        w-[22px] h-[22px] text-[#5C4737]
        transition-transform duration-300 ease-in-out
        group-hover:-rotate-45
      "
      strokeWidth={2}
    />
  </div>
</div>



 
</div>



      </div>
    </section>
  );
};

// ========== CONNECT SECTION ==========
const ConnectCampus = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-30 space-y-8 px-4 md:px-[128px]">
      {/* Heading */}
      <h2 className="connect-heading font-inter font-semibold text-[32px] md:text-[50px] leading-[120%] md:leading-[100%] tracking-[-0.06em] text-center text-[#5C4737] whitespace-normal md:whitespace-nowrap">
        Bring Mental Wellness to Every Corner of Your Campus.
      </h2>

      {/* Subtext */}
      <p className="connect-subtext font-inter font-medium text-[18px] leading-[100%] tracking-[-0.03em] text-center text-[#000000A6] max-w-[1020px]">
        Empower your students and faculty with 24/7 confidential support, real counselling, and real results — powered by Mind A Lot.
      </p>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 w-full px-4 md:px-0 justify-center">
        {/* Schedule a Demo Button */}
        <div className="group relative w-full md:w-[225px] h-[60px] transition-all duration-300 ease-in-out hover:scale-105">
          <button className="w-full h-full bg-[#967B6A] rounded-[30px] flex items-center pl-[24px] text-white font-inter font-medium text-[16px] tracking-[-0.03em] transition-all duration-300 ease-in-out hover:bg-[#856a59] hover:shadow-lg cursor-pointer">
            Schedule a Demo
          </button>
          <div className="absolute top-[5px] right-[5px] md:right-auto md:left-[170px] w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
            <ArrowRight className="text-[#5C4737] transition-transform duration-300 ease-in-out group-hover:-rotate-45" size={22} strokeWidth={2.5} />
          </div>
        </div>

        {/* Download University Partnership Kit Button */}
        <div className="group relative w-full md:w-[360px] h-[60px] transition-all duration-300 ease-in-out hover:scale-105">
          <button className="w-full h-full cursor-pointer bg-[#967B6A] rounded-[30px] flex items-center pl-[24px] text-white font-inter font-medium text-[16px] tracking-[-0.03em] transition-all duration-300 ease-in-out hover:bg-[#856a59] hover:shadow-lg">
            Download University Partnership Kit
          </button>
          <div className="absolute top-[5px] right-[5px] md:right-auto md:left-[305px] w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
            <ArrowRight className="text-[#967B6A] transition-transform duration-300 ease-in-out group-hover:-rotate-45" size={22} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ========= FOOTER SECTION ==========
//if anyone need footer use this
const Footer = () => {
  return (
    <footer className="bg-[#E4D6CD] w-full flex flex-col justify-start items-start mt-[85px] py-8 relative">
      <div className="w-full px-[30px] sm:px-[50px] md:px-[70px] lg:px-[86px]">
      {/* ===== Main Footer Row ===== */}
      <div className="flex flex-col lg:flex-row justify-start lg:items-start items-center w-full gap-[40px] lg:gap-[0px]">
        {/* ===== Left Section ===== */}
        <div className="flex flex-col text-center lg:text-left mt-[13px]">
          <h2 className="font-inter font-bold text-[28px] md:text-[35px] leading-[100%] tracking-[0.05em] text-[#5C4737] mb-4">
            MIND A LOT
          </h2>
          <p className="font-inter font-normal text-[14px] md:text-[16px] leading-[28px] tracking-[-0.03em] text-[#755840] max-w-[450px] mx-auto lg:mx-0">
          Anonymous support that listens, nudges ,<br/>
          and grow with you , When your mind feels too much, we're just a tap away.
          </p>
        </div>

        {/* ===== Company Section ===== */}
        <div className="lg:ml-[152px] mt-[20px] lg:mt-[10px] flex flex-col text-center lg:text-left space-y-[10px] md:space-y-[16px]">
          <h3 className="font-inter font-medium text-[18px] md:text-[20px] text-[#5C4737]">
            Company
          </h3>
          <Link href="/features" className={footerLink}>Features</Link>
          <Link href="/contact" className={footerLink}>Contact Us</Link>
          <Link href="/resources" className={footerLink}>Resources</Link>
        </div>

        {/* ===== Contact Section ===== */}
        <div className="lg:ml-[140px] mt-[20px] lg:mt-[10px] flex flex-col text-center lg:text-left space-y-[12px] md:space-y-[16px]">
          <h3 className="font-inter font-medium text-[18px] md:text-[20px] text-[#5C4737]">
            Contact
          </h3>
          <div className="flex justify-center lg:justify-start items-center gap-[5px]">
            <Mail size={16} className="text-[#755840]" />
            <span className={footerText}>hello@mindalot.com</span>
          </div>
          <div className="flex justify-center lg:justify-start items-center gap-[5px]">
            <Phone size={16} className="text-[#755840]" />
            <span className={footerText}>+91-96062-58596</span>
          </div>
          <div className="flex justify-center lg:justify-start items-center gap-[5px]">
            <MapPin size={16} className="text-[#755840] min-w-[16px] mt-[-4px]" />
            <p className={`${footerText} max-w-[323px]`}>
              #122K, 1st block, 14th cross, 19th 'B' Main, Rajajinagar, Bengaluru - 560010
            </p>
          </div>
        </div>

        {/* ===== Follow Us Section ===== */}
        <div className="lg:ml-[140px] mt-[20px] lg:mt-[10px] flex flex-col items-center lg:items-start">
          <h3 className="font-inter font-medium text-[18px] md:text-[20px] text-[#5C4737] mb-[16px] whitespace-nowrap">
            Follow us on
          </h3>
          <div className="flex items-center justify-center lg:justify-start gap-[15px]">
            <Link href="https://instagram.com" target="_blank">
              <Instagram size={24} className={iconHover} />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin size={24} className={iconHover} />
            </Link>
          </div>
        </div>
      </div>

   

      </div>
      {/* ===== Divider Line ===== */}
      <div className="w-full px-[30px] sm:px-[50px] md:px-[70px] lg:px-[86px]">
        <div className="border-t border-[#00000080] mt-[60px]" />
      </div>

      {/* ===== Terms + Privacy ===== */}
      <div className="w-full px-[30px] sm:px-[50px] md:px-[70px] lg:px-[86px]">
        <div className="flex items-center justify-center lg:justify-end gap-[40px] mt-[30px] pb-4"
>
  {/* ===== Terms + Dot ===== */}
  <div className="flex items-center gap-[6px]">
    <div className="w-[5px] h-[5px] rounded-full bg-[#000000]" />
    <Link
      href="/terms"
      className="font-inter font-normal text-[16px] leading-[100%] tracking-[-0.03em] text-[#755840] hover:text-[#5C4737] transition-colors"
    >
      Terms & Conditions
    </Link>
  </div>

  {/* ===== Privacy + Dot ===== */}
  <div className="flex items-center gap-[6px]">
    <div className="w-[5px] h-[5px] rounded-full bg-[#000000]" />
    <Link
      href="/privacy"
      className="font-inter font-normal text-[16px] leading-[100%] tracking-[-0.03em] text-[#755840] hover:text-[#5C4737] transition-colors"
    >
      Privacy Policy
    </Link>
  </div>
</div>
</div>


    </footer>
  );
}

// Tailwind helper classes
const footerLink =
  "font-inter font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[-0.03em] text-[#755840] hover:text-[#5C4737] transition-colors";
const footerText =
  "font-inter font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[-0.03em] text-[#755840]";
const iconHover =
  "text-[#5C4737] hover:text-[#755840] transition-colors cursor-pointer";







  // ✅ ALL COMPONENTS
  return (
    <>
      <main className="overflow-hidden bg-[#FDFDFD]">
        <HeroSection />
        <OfferSection />
        <ConnectCampus />
        <Footer />
      </main>
    </>
  );
}


