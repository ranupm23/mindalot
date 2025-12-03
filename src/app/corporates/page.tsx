"use client";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import all images from assets
import graphic1 from "@/assets/corporate-assets/graphic1.svg";
import cardGraphic from "@/assets/corporate-assets/card-circle-white/card-graphic.svg";
import subtract from "@/assets/corporate-assets/subtract.png";
import mentalHealthIcon from "@/assets/corporate-assets/your-mental-health.png";
import cardExportCircle from "@/assets/corporate-assets/card-export-circle.svg";
import cardSecurity from "@/assets/corporate-assets/card-security.svg";
import groupClipPath1 from "@/assets/corporate-assets/group/group-clip-path1.png";
import groupClipPath2 from "@/assets/corporate-assets/group/group-clip-path2.png";
import groupClipPath3 from "@/assets/corporate-assets/group/group-clip-path3.png";

export default function CorporatePage() {
  return (
    <div className="bg-[#FDFDFD] text-[#5c4737] overflow-x-hidden">
      <Header />

      {/* HERO SECTION */}
      <section className="w-full bg-[#FDFDFD] pt-[100px] pb-[60px] px-6">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">
          
          {/* LEFT TEXT */}
          <div className="pt-[40px] text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="relative inline-block mb-[28px]">
              <h1 className="text-[52px] font-semibold leading-[1.15] text-[#4b3729] tracking-[-0.02em]">
                Real Mental Wellness,<br />
                Not Just Another EAP.
              </h1>
              <div className="absolute left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 bottom-[-10px] w-[420px] h-[12px]">
                <Image
                  src={graphic1}
                  alt="Decorative underline"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-[20px] mt-[44px]">
              <p className="text-[#1e1e1e] text-[15px] leading-[1.65] max-w-[460px] font-normal">
                Mind A Lot is built for the modern workforce: instant, anonymous, and effective. Because people don't wait for office hours to break down.
              </p>
              <p className="text-[#8a8a8a] text-[15px] leading-[1.65] max-w-[440px] font-normal">
                Let's discuss how Mind A Lot can fit your organization's wellness strategy in just 15 minutes.
              </p>
            </div>

            {/* CTA BUTTON */}
<div className="mt-[36px] flex justify-center lg:justify-start">
  <Link href="/" className="flex items-center gap-[8px] text-white text-[15px] font-medium bg-[#9a8070] pl-[26px] pr-[4px] py-[4px] rounded-[40px] hover:bg-[#856a59] transition shadow-sm">
    <span className="tracking-[-0.01em]">Schedule A Demo</span>
    <div className="w-[46px] h-[46px] bg-white rounded-full flex items-center justify-center">
      <Image
        src={cardGraphic}
        alt="Arrow"
        className="w-[20px] h-[12px] rotate-[-45deg]"
      />
    </div>
  </Link>
  </div>
</div>


          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center lg:justify-end items-start pt-[20px]">
            <div className="relative" style={{ width: '540px', height: '400px' }}>
              
              {/* FRAME 1 */}
              <div
                className="absolute rounded-[22px] z-[1] pointer-events-none"
                style={{
                  top: '-46px',
                  left: '-46px',
                  width: '586px',
                  height: '446px',
                  borderRadius: '22px',
                  background: 'linear-gradient(180deg, rgba(199,183,169,0.3), rgba(199,183,169,0))',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '1px',
                  border: '1px solid transparent',
                }}
              ></div>

              {/* FRAME 2 */}
              <div
                className="absolute rounded-[20px] z-[2] pointer-events-none"
                style={{
                  top: '-28px',
                  left: '-28px',
                  width: '568px',
                  height: '428px',
                  borderRadius: '20px',
                  background: 'linear-gradient(180deg, rgba(199,183,169,0.45), rgba(199,183,169,0))',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '1px',
                  border: '1px solid transparent',
                }}
              ></div>

              {/* FRAME 3 */}
              <div
                className="absolute rounded-[18px] z-[3] pointer-events-none"
                style={{
                  top: '-14px',
                  left: '-14px',
                  width: '554px',
                  height: '414px',
                  borderRadius: '18px',
                  background: 'linear-gradient(180deg, rgba(199,183,169,0.55), rgba(199,183,169,0))',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '1px',
                  border: '1px solid transparent',
                }}
              ></div>

              {/* MAIN IMAGE */}
              <div className="absolute top-0 left-0 w-[620px] h-[460px] -translate-x-[50px] rounded-[16px] overflow-hidden z-[10]">
                <Image
                  src={subtract}
                  width={620}
                  height={460}
                  alt="Corporate group"
                  className="w-full h-full object-contain bg-transparent"
                />
              </div>

              {/* CIRCULAR BADGE */}
              <div
                className="absolute rounded-full flex items-center justify-center z-[20] bg-white/50 backdrop-blur-[30px] border border-white/40 shadow-[0_8px_24px_rgba(92,71,55,0.12)]"
                style={{
                  top: '-34px',
                  right: '-4px',
                  width: '88px',
                  height: '88px',
                  WebkitBackdropFilter: 'blur(30px)',
                }}
              >
                <Image
                  src={mentalHealthIcon}
                  width={44}
                  height={44}
                  alt="Your Mental Health"
                  className="object-contain"
                />
              </div>

              {/* QUOTE CARD */}
              <div
                className="absolute bg-[#f7f4f0] rounded-[11px] z-[30]"
                style={{
                  bottom: '-35px',
                  left: '-156px',
                  width: '300px',
                  height: '126px',
                  border: '1px solid rgba(227, 217, 210, 0.8)',
                  boxShadow: '0 2px 12px rgba(92, 71, 55, 0.06)',
                  padding: '16px 18px',
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div className="flex justify-end">
                    <Image
                      src={cardExportCircle}
                      width={28}
                      height={28}
                      alt="Decorative Icon"
                      className="opacity-70"
                      style={{ transform: 'rotate(160deg)' }}
                    />
                  </div>
                  <p className="text-[15px] leading-[1.5] text-[#74726f] font-normal tracking-[-0.01em]">
                    Investing in mental wellness means<br />investing in lasting success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER SECTION */}
      <section className="w-full bg-[#FDFDFD] py-16 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#3a2b20] text-left mb-10 sm:mb-14">
            What we Offer to Organizations?
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: groupClipPath1,
                title: "Always-available, chat-first",
                text: "Get instant support anytime, even during late nights and weekends.",
              },
              {
                icon: cardExportCircle,
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
                className="p-[1.5px] rounded-[16px] bg-[linear-gradient(135deg,#d8cfc7_0%,rgba(216,207,199,0)_100%)]"
              >
                <div className="bg-[#FDFDFD] rounded-[15px] p-6 h-full">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 mb-3 sm:mb-4">
                    <Image src={card.icon} width={40} height={40} alt={card.title} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#3a2b20] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#6d6d6f] text-sm leading-relaxed">{card.text}</p>
                </div>
              </div>
            ))}

            {/* DARK CARD */}
            <div className="relative p-[1.5px] rounded-[16px] bg-[linear-gradient(135deg,#d8cfc7_0%,rgba(216,207,199,0)_100%)]">
              <div className="relative bg-[#5c4737] text-white rounded-[15px] p-6 flex items-center justify-center text-center h-full">
                <div className="absolute top-3 right-3 flex flex-col gap-[6px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-white/40"></span>
                  <span className="w-[6px] h-[6px] rounded-full bg-white/40"></span>
                </div>
                <p className="text-sm sm:text-base leading-relaxed">
                  Well-being at work isn't a benefit, it's a strength!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#FDFDFD] py-16 sm:py-20 mt-10 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Let's Build a Healthier Workplace Together
          </h2>
          <p className="text-[#6d6d6f] text-sm sm:text-base max-w-2xl mx-auto">
            Partner with Mind A Lot to provide mental health support that your employees will
            actually use.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* CTA 1 */}
         <Link
  href="/"
  className="flex items-center justify-between bg-[#967b6a] text-white pl-6 pr-2 py-4 rounded-full font-medium hover:bg-[#856a59] transition h-[56px] sm:h-[60px] w-full sm:w-auto"
>
  <span className="mr-4 whitespace-nowrap">Book a 15-Min Call</span>
  <div className="w-[44px] sm:w-[50px] h-[44px] sm:h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
    <Image
      src={cardGraphic}
      alt="Arrow"
      className="w-[22px] sm:w-[26px] h-[12px] sm:h-[15px] rotate-[-45deg]"
    />
  </div>
</Link>


            {/* CTA 2 */}
          <Link
  href="/"
  className="flex items-center justify-between bg-[#967b6a] text-white pl-6 pr-2 py-4 rounded-full font-medium hover:bg-[#856a59] transition h-[56px] sm:h-[60px] w-full sm:w-auto"
>
  <span className="mr-4 whitespace-nowrap">Request Corporate Deck</span>

  <div className="w-[44px] sm:w-[50px] h-[44px] sm:h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
    <Image
      src={cardGraphic}
      alt="Arrow"
      className="w-[22px] sm:w-[26px] h-[12px] sm:h-[15px] rotate-[-45deg]"
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