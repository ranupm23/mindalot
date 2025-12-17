"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import all images from assets
import graphic1 from "@/assets/corporate-assets/graphic1.svg";
import cardGraphic from "@/assets/corporate-assets/card-circle-white/card-graphic.svg";
import heroimage from "@/assets/corporate-assets/hero.png";
import roundcircle from "@/assets/corporate-assets/round-circle.png";
import cardExportCircle from "@/assets/contact-page/right-side-image.png";
import cardSecurity from "@/assets/corporate-assets/card-security.svg";
import groupClipPath1 from "@/assets/corporate-assets/group/group-clip-path1.png";
import groupClipPath2 from "@/assets/corporate-assets/group/group-clip-path2.png";
import groupClipPath3 from "@/assets/corporate-assets/group/group-clip-path3.png";
import cardcirclegrpup from "@/assets/corporate-assets/card-export-circle.svg";

export default function CorporatePage() {
  return (
    <div className="bg-[#FDFDFD] text-[#5c4737] overflow-x-hidden">
      

      {/* HERO SECTION */}
      <section className="w-full bg-[#FDFDFD] pt-[100px] pb-[60px] px-20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">
          
          {/* LEFT TEXT */}
          <div className="pt-[40px] text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="relative inline-block mb-[28px]">
              {/* <h1 className="text-[52px] font-semibold leading-[1.15] text-[#4b3729] tracking-[-0.02em]">
                Real Mental Wellness,<br />
                Not Just Another EAP.
              </h1> */}
              {/* <h1
  style={{
    fontFamily: "Inter",
    fontWeight: 600,
    fontSize: "60px",
    lineHeight: "64px",
    letterSpacing: "-0.06em",
    color: "#4b3729",
    maxWidth: "520px",     // 🔑 LIMIT WIDTH
    whiteSpace: "normal",
  }}
>
  Real Mental Wellness,<br />
  Not Just Another EAP.
</h1> */}
<h1
  className="font-semibold text-[#4b3729] tracking-[-0.06em] text-center lg:text-left 
             text-[32px] sm:text-[48px] lg:text-[60px] 
             leading-[36px] sm:leading-[52px] lg:leading-[64px] 
             whitespace-normal lg:whitespace-nowrap"
  style={{ fontFamily: "Inter", fontWeight: 600 }}
>
  <span className="block">Real Mental Wellness,</span>
  <span className="block">Not Just Another EAP.</span>
</h1>



              {/* <div className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 bottom-[-10px] w-[420px] h-[12px]">
                <Image
                  src={graphic1}
                  alt="Decorative underline"
                  className="w-full h-full object-contain"
                />
              </div> */}
            </div>

            {/* <div className="mt-[34px]">
              <p className="text-[#1e1e1e] text-[15px] leading-[1.65] max-w-[460px] font-normal">
                Mind A Lot is built for the modern workforce: instant, anonymous, and effective. Because people don't wait for office hours to break down.
              </p>
              <p className="text-[#8a8a8a] text-[15px] leading-[1.65] max-w-[440px] font-normal">
                Let's discuss how Mind A Lot can fit your organization's wellness strategy in just 15 minutes.
              </p>
            </div> */}

            <div className="mt-[34px]">
  <p
    style={{
      fontFamily: "Inter",
      fontWeight: 400,          // Regular
      fontSize: "18px",
      lineHeight: "100%",
      letterSpacing: "-0.03em", // -3%
      color: "#1e1e1e",
      maxWidth: "460px",
    }}
  >
    Mind A Lot is built for the modern workforce: instant, anonymous, and effective.
    Because people don't wait for office hours to break down.
  </p>

  <p
    style={{
      fontFamily: "Inter",
      fontWeight: 400,          // Regular
      fontSize: "18px",
      lineHeight: "100%",
      letterSpacing: "-0.03em", // -3%
      color: "#8a8a8a",
      maxWidth: "440px",
      marginTop: "12px",        // 👈 spacing between paragraphs
    }}
  >
    Let's discuss how Mind A Lot can fit your organization's wellness strategy
    in just 15 minutes.
  </p>
</div>

{/* CTA BUTTON */}
<div className="mt-[46px] flex justify-center lg:justify-start">
  <Link
    href="/"
    className="group flex items-center gap-[8px] text-[#5B4A3E] text-[18px] font-medium pl-[26px] pr-[4px] py-[4px] rounded-[40px] border border-[#5B4A3E] bg-[#F6F2EB] shadow-sm transition-all duration-300 hover:bg-[#5C4737] hover:text-white hover:border-[#3e3229]"
    style={{
      fontFamily: "'Nunito Sans', sans-serif",
      fontWeight: 500,
      lineHeight: "100%",
      letterSpacing: "0%",
    }}
  >
    <span className="tracking-[-0.01em]">Schedule A Demo</span>

    {/* Circle with arrow */}
    <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center transition-transform duration-300">
      <Image
        src={cardGraphic}
        alt="Arrow"
        className="w-[20px] h-[12px] rotate-[-45deg] transition-transform duration-300 ease-in-out group-hover:rotate-0"
      />
    </div>
  </Link>
</div>


</div>


          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center lg:justify-end items-start pt-[40px]">
            <div className="relative" style={{ width: '540px', height: '400px' }}>
              
   {/* FRAME 1 */}
<div
  className="absolute rounded-[22px] z-[-0] pointer-events-none"
  style={{
    top: '-46px',
    left: '-46px',
    width: '586px',
    height: '446px',
    borderRadius: '22px',
    // Radial gradient at top-left corner
    background: 'radial-gradient(circle at top left, rgba(199,183,169,0.3) 0%, rgba(199,183,169,0.05) 30%, rgba(199,183,169,0) 100%)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    padding: '1px',
    // Remove border entirely
    // border: '1px solid transparent',
  }}
></div>



             {/* FRAME 2 */}
<div
  className="absolute rounded-[20px] z-[-0] pointer-events-none"
  style={{
    top: '-28px',
    left: '-28px',
    width: '568px',
    height: '428px',
    borderRadius: '20px',
    // Radial gradient at top-left corner
    background: 'radial-gradient(circle at top left, rgba(199,183,169,0.45) 0%, rgba(199,183,169,0.05) 30%, rgba(199,183,169,0) 100%)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    padding: '1px',
    border: '1px solid transparent',
  }}
></div>

             {/* FRAME 3 */}
<div
  className="absolute rounded-[18px] z-[0] pointer-events-none"
  style={{
    top: '-14px',
    left: '-14px',
    width: '554px',
    height: '414px',
    borderRadius: '18px',
    // Radial gradient at top-left corner
    background: 'radial-gradient(circle at top left, rgba(199,183,169,0.55) 0%, rgba(199,183,169,0.05) 30%, rgba(199,183,169,0) 100%)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    padding: '1px',
    border: '1px solid transparent',
  }}
></div>

              {/* MAIN IMAGE */}
              <div className="absolute top-0 left-0 w-[620px] h-[460px] -translate-x-[50px] rounded-[16px] overflow-hidden z-[10]">
                <Image
                  src={heroimage}
                  width={620}
                  height={460}
                  alt="Corporate group"
                  className="w-full h-full object-contain bg-transparent"
                />
              </div>

              {/* REPLACED CIRCULAR BADGE WITH IMAGE */}
<div
  className="absolute z-[20]"
  style={{
    top: '-34px',
    right: '-4px',
    width: '88px',
    height: '88px',
  }}
>
  <Image
    src={roundcircle}
    alt="Your Mental Health"
    className="w-full h-full object-contain rounded-full"
  />
</div>

{/* QUOTE CARD */}
<div
  className="absolute rounded-[11px] z-[30]"
  style={{
    bottom: '-265px',
    left: '-156px',
    width: '300px',
    height: '126px',
    borderRadius: '11px',
    backgroundColor: '#BE9B84',
    padding: '16px 18px',
    boxShadow: '0 2px 12px rgba(92, 71, 55, 0.06)',
    position: 'relative', // for internal positioning
  }}
>
  {/* Noise overlay */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'64\' height=\'64\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.5\' numOctaves=\'1\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'64\' height=\'64\' filter=\'url(%23noise)\' fill=\'%2300000059\'/%3E%3C/svg%3E")',
      backgroundRepeat: 'repeat',
      opacity: 0.8, // density 80%
      mixBlendMode: 'overlay', // monotone effect
    }}
  ></div>

  {/* Card content */}
  <div className="flex flex-col h-full justify-between relative z-[10]">
    <div className="flex justify-end">
      <Image
        src={cardExportCircle}
        width={58}
        height={58}
        alt="Decorative Icon"
        className="opacity-70"
        style={{ transform: 'rotate(-10deg)' }}
      />
    </div>
    <p
      style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: '14px',
        lineHeight: '25px',
        letterSpacing: '-0.03em',
        color: '#fff',
      }}
    >
      Investing in mental wellness means<br />investing in lasting success.
    </p>
  </div>

  {/* Image inside quote card */}
  <Image
    src={roundcircle} // replace with your image
    alt="Quote Card Image"
    width={65}
    height={65}
    style={{
      position: 'absolute',
      top: '496px', // relative to the page, not card
      left: '869px', // relative to the page, not card
      borderRadius: '15px',
    }}
  />
</div>


</div>
</div>

        </div>
      </section>

     {/* OFFER SECTION */}
<section className="w-full bg-[#FDFDFD] py-16 sm:py-20 px-6 sm:px-20">
  <div className="max-w-7xl mx-auto">
    <h2
      className="text-[32px] sm:text-[50px] font-semibold text-[#3a2b20] mb-10 sm:mb-14 text-center sm:text-left"
      style={{ fontFamily: "Inter" }}
    >
      What we Offer to Organizations?
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 justify-center">
      {[
        {
          icon: groupClipPath1,
          title: "Always-available, chat-first",
          text: "Get instant support anytime, even during late nights and weekends.",
        },
        {
          icon: cardcirclegrpup,
          title: "No stigma or exposure",
          text: "Employees stay completely anonymous; counsellors never see personal or identifying details.",
        },
        {
          icon: groupClipPath3,
          title: "Global support network",
          text: "Wherever your workforce is located, our professionals are available to help.",
        },
        {
          icon: groupClipPath2,
          title: "Smart goal nudges",
          text: "Gentle reminders and insights designed to reduce burnout, boost focus, and improve sleep and mindset.",
        },
        {
          icon: cardSecurity,
          title: "Insightful, privacy-first reports",
          text: "HR teams receive usage trends and well-being analytics without revealing individual identities.",
        },
      ].map((card, i) => (
        <div
          key={i}
          className="p-[1.5px] rounded-[16px] bg-[linear-gradient(135deg,#d8cfc7_0%,rgba(216,207,199,0)_100%)] w-full sm:w-[390px] h-auto sm:h-[275px] mx-auto"
        >
          <div className="bg-[#F8F8F8] rounded-[15px] w-full h-full flex flex-col justify-between p-4">
            {/* ICON TOP LEFT */}
            <div className="w-[75px] h-[75px] mx-auto sm:mx-0">
              <Image
                src={card.icon}
                width={75}
                height={75}
                alt={card.title}
                className="object-contain"
              />
            </div>

            {/* TITLE AND TEXT BOTTOM */}
            <div className="mt-4 sm:mt-auto text-center sm:text-left">
              <h3
                className="text-[20px] sm:text-[24px] font-semibold text-[#3a2b20] mb-2"
                style={{ fontFamily: "Inter" }}
              >
                {card.title}
              </h3>
              <p
                className="text-[14px] sm:text-[14px] text-[#6d6d6f] leading-5 sm:leading-5"
                style={{ fontFamily: "Inter" }}
              >
                {card.text}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* DARK CARD */}
      <div className="relative p-[1.5px] rounded-[16px] bg-[linear-gradient(135deg,#d8cfc7_0%,rgba(216,207,199,0)_100%)] w-full sm:w-[390px] h-auto sm:h-[275px] mx-auto">
        <div className="relative bg-[#5c4737] text-white rounded-[15px] p-6 flex items-center justify-center text-center w-full h-full">
          <div className="absolute top-3 right-3 flex flex-col gap-[6px]">
            <span className="w-[6px] h-[6px] rounded-full bg-white/40"></span>
            <span className="w-[6px] h-[6px] rounded-full bg-white/40"></span>
          </div>
          <p className="text-[14px] sm:text-sm leading-relaxed px-6 sm:px-20">
            Well-being at work isn't a benefit, it's a strength!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* FINAL CTA */}
      <section className="bg-[#FDFDFD] py-12 sm:py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Let's Build a Healthier Workplace Together
          </h2> */}
      <h2
  className="text-[32px] sm:text-[40px] lg:text-[50px] 
             leading-[36px] sm:leading-[44px] lg:leading-[50px] 
             text-center lg:text-left 
             whitespace-normal lg:whitespace-nowrap"
  style={{ fontFamily: "Inter", fontWeight: 600, letterSpacing: "-0.06em", color: "#3a2b20" }}
>
  Let's Build a Healthier Workplace Together
</h2>


          {/* <p className="text-[#6d6d6f] text-sm sm:text-base max-w-2xl mx-auto">
            Partner with Mind A Lot to provide mental health support that your employees will
            actually use.
          </p> */}

<p
  className="text-[16px] sm:text-[18px] 
             leading-[24px] sm:leading-[28px] 
             text-center 
             whitespace-normal lg:whitespace-nowrap 
             mx-auto"
  style={{ fontFamily: "Inter", fontWeight: 400, letterSpacing: "-0.03em", color: "#6d6d6f" }}
>
  Partner with Mind A Lot to provide mental health support that your employees will actually use.
</p>


         <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-[36px]">
  {/* CTA 1 */}
  <Link
  href="/"
  className="group flex items-center gap-[8px] text-[#5B4A3E] text-[18px] font-medium pl-[26px] pr-[4px] py-[4px] rounded-[40px] border border-[#5B4A3E] bg-[#ffffff] shadow-sm transition-all duration-300 hover:bg-[#5C4737] hover:text-white hover:border-[#3e3229]"
  style={{
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 500,
    lineHeight: "100%",
    letterSpacing: "0%",
  }}
>
  <span className="tracking-[-0.01em]">Book a 15-Min Call</span>

  {/* Circle */}
  <div
    className="
      w-[46px] h-[46px]
      bg-[#5B4A3E]
      rounded-full
      flex items-center justify-center
      transition-colors duration-300
      group-hover:bg-white
    "
  >
    {/* Arrow */}
    <Image
      src={cardGraphic}
      alt="Arrow"
      className="
        w-[20px] h-[12px]
        rotate-[-45deg]
        transition-all duration-300 ease-in-out
        group-hover:rotate-0
        filter brightness-0 invert
        group-hover:invert-0
      "
    />
  </div>
</Link>

 {/* CTA 2 */}
<Link
  href="/"
  className="group flex items-center gap-[8px] text-[#5B4A3E] text-[18px] font-medium pl-[26px] pr-[4px] py-[4px] rounded-[40px] border border-[#5B4A3E] bg-[#ffffff] shadow-sm transition-all duration-300 hover:bg-[#5C4737] hover:text-white hover:border-[#3e3229]"
  style={{
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 500,
    lineHeight: "100%",
    letterSpacing: "0%",
  }}
>
  <span className="tracking-[-0.01em]">Request Corporate Deck</span>

  {/* Circle with arrow */}
  <div
    className="
      w-[46px] h-[46px]
      bg-[#5B4A3E]
      rounded-full
      flex items-center justify-center
      transition-colors duration-300
      group-hover:bg-white
    "
  >
    <Image
      src={cardGraphic}
      alt="Arrow"
      className="
        w-[20px] h-[12px]
        rotate-[-45deg]
        transition-all duration-300 ease-in-out
        group-hover:rotate-0
        filter brightness-0 invert
        group-hover:invert-0
      "
    />
  </div>
</Link>

</div>

        </div>
      </section>

      <Footer />
    </div>
  );
}