
"use client";


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroimage from "@/assets/blog-page/aboutpage-hero.jpg"
import Image from "next/image";
import Link from "next/link";
import cardGraphic from "@/assets/corporate-assets/card-circle-white/card-graphic.svg";


// Redirect based on device
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



export default function BlogPage() {
  const team = [
    { name: "Dr. CA Sandhya P Nagar", role: "Founder" },
    { name: "Chinmayi Raju", role: "Board Member" },
    { name: "Chitra S V", role: "Director" },
    { name: "Lakshmi Vasudev", role: "Director" },
    { name: "Vindhya P Nagar", role: "Director" },
    { name: "Shankar Nathan", role: "Board Member" },
    { name: "Dr. Sudarshan", role: "Board Member" },
  ];

  return (
    <main className="bg-[#f5f1ec] text-[#5b4636]">
    <Header navTextColor="#755840" />

      <div className="max-w-[1180px] mx-auto px-6 pt-16 pb-24">

        {/* ABOUT */}
        <h1 className="text-[38px] inter font-bold mb-6  tracking-tight">
          About Mind-A-Lot
        </h1>

        <div className="grid grid-cols-3 gap-10">
          {/* Big Image */}
          <div className="col-span-2">
            <div className="w-full h-[400px] rounded-[16px] overflow-hidden">
              <Image
                src={heroimage}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-between">
            <p className="text-[15px] leading-7">
              Mind-A-Lot is built by a team of psychologists, counsellors, and wellness professionals with on-ground experience working with students, families, and working adults.
            </p>

            <div className="w-full h-[240px] rounded-[16px] overflow-hidden mt-6">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* OUR MISSION */}
        <h2 className="text-[38px] font-bold mt-20 mb-8">
          Our Mission
        </h2>

        <div className="grid grid-cols-3 gap-8">

 {[
  {
    title: "Ethical Practice",
    desc: "We follow ethical counselling practices, privacy-first processes, and clear escalation pathways when medical support is needed.",
    icon: "shield",
  },
  {
    title: "Safe Space",
    desc: "A judgement-free environment where people can talk openly and receive practical, human support.",
    icon: "people",
  },
  {
    title: "Human-Centered Care",
    desc: "Our approach focuses on empathy, trust, and real-world outcomes rather than one-size-fits-all solutions.",
    icon: "heart",
  },
].map((item, i) => (
  <div
    key={i}
    className="bg-white border border-[#e8dfd6] rounded-[14px] p-7"
  >
    
    {/* ICON ONLY */}
    <div className="mb-6">
      
      {/* Shield */}
      {item.icon === "shield" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#5C4737]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z"
          />
        </svg>
      )}

      {/* People */}
      {item.icon === "people" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#5C4737]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20v-2a4 4 0 00-3-3.87M7 20v-2a4 4 0 013-3.87M12 12a4 4 0 100-8 4 4 0 000 8z"
          />
        </svg>
      )}

      {/* Heart */}
      {item.icon === "heart" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-[#5C4737]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364 4.318 12.682a4.5 4.5 0 010-6.364z"
          />
        </svg>
      )}

    </div>

    <h3 className="font-semibold mb-4">{item.title}</h3>
    <p className="text-[14px] leading-6 text-[#6c5a4c]">
      {item.desc}
    </p>
  </div>
))}

</div>
          {/* {[
            {
              title: "Ethical Practice",
              desc: "We follow ethical counselling practices, privacy-first processes, and clear escalation pathways when medical support is needed.",
            },
            {
              title: "Safe Space",
              desc: "A judgement-free environment where people can talk openly and receive practical, human support.",
            },
            {
              title: "Human-Centered Care",
              desc: "Our approach focuses on empathy, trust, and real-world outcomes rather than one-size-fits-all solutions.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#e8dfd6] rounded-[14px] p-7"
            >
              <div className="text-xl mb-4">♡</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-[14px] leading-6 text-[#6c5a4c]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* VISION + MISSION STRIP */}
        <div className="grid grid-cols-2 gap-8 mt-12">
          <div className="bg-[#6b4f3a] text-white rounded-[14px] p-8">
            <h3 className="text-4xl font-semibold mb-3">VISION</h3>
            <p className="text-[14px] leading-6 opacity-90">
              A world where seeking emotional support is normal, safe, and
              stigma-free. We strive to create a future where mental well-being
              is integrated into everyday life.
            </p>
          </div>

          <div className="bg-[#6b4f3a] text-white rounded-[14px] p-8">
            <h3 className="text-4xl font-semibold mb-3">MISSION</h3>
            <p className="text-[14px] leading-6 opacity-90">
              Make mental well-being support private, accessible, and trusted
              through trained professionals and thoughtful technology that
              scales with empathy.
            </p>
          </div>
        </div>

        {/* OUR TEAM */}
        <div className="grid grid-cols-3 gap-16 mt-24 items-start">
          <h2 className="text-[45px] font-bold">Our Team</h2>

          <p className="col-span-2 text-[15px] leading-7 text-[#6c5a4c]">
            Mind-A-Lot is powered by 80+ counsellors working across India, the
            USA, Canada, Dubai, and Australia. We operate across geographies and
            time zones so support is available when people need it—not just
            during office hours.
          </p>
        </div>

        {/* TEAM GRID */}
       {/* TEAM GRID */}
<div className="mt-12 px-4 sm:px-0">

  {/* FIRST 4 MEMBERS */}
  <div className="grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      gap-6 sm:gap-8">

    {team.slice(0, 4).map((member, i) => (
      <div
        key={i}
        className="rounded-[14px] p-6 sm:p-8 text-center"
        style={{
          background:
            "linear-gradient(125.54deg, #5B4B3E -12.44%, #F6F1EB -2.52%, #E8DED4 19.98%, #ABA093 80.72%, #8A8077 101.75%)",
        }}
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-4 sm:mb-5 rounded-full overflow-hidden">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="default avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <h4 className="text-[14px] sm:text-[15px] font-medium text-[#3e332a]">
          {member.name}
        </h4>

        <p className="text-sm text-[#5C4737] mt-1">
          {member.role}
        </p>
      </div>
    ))}
  </div>


  {/* LAST 3 MEMBERS (CENTERED ON DESKTOP) */}
  <div className="
      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      gap-6 sm:gap-8 
      mt-8
      lg:flex lg:justify-center lg:gap-8">

    {team.slice(4).map((member, i) => (
      <div
        key={i}
        className="rounded-[14px] p-6 sm:p-8 text-center lg:w-[260px]"
        style={{
          background:
            "linear-gradient(125.54deg, #5B4B3E -12.44%, #F6F1EB -2.52%, #E8DED4 19.98%, #ABA093 80.72%, #8A8077 101.75%)",
        }}
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-4 sm:mb-5 rounded-full overflow-hidden">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="default avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <h4 className="text-[14px] sm:text-[15px] font-medium text-[#3e332a]">
          {member.name}
        </h4>

        <p className="text-sm text-[#5C4737] mt-1">
          {member.role}
        </p>
      </div>
    ))}
  </div>

</div>



{/* FOUNDER CARD CENTERED */}
<div className="flex justify-center mt-24">
  <div className="w-[900px] bg-[#6b4f3a] text-white rounded-[16px] p-12 flex items-center gap-12">
    
    <div className="w-44 h-44 rounded-full overflow-hidden shrink-0">
      <img
  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
  alt="default avatar"
  className="w-full h-full object-cover"
/>

    </div>

    <div>
      <h3 className="text-[26px] font-semibold">
        Dr. CA Sandhya P Nagar
      </h3>
      <p className="opacity-80 mb-5">Founder</p>

      <p className="italic text-[15px] max-w-xl opacity-90 leading-7">
        “We believe that every mind deserves to be heard, understood,
        and supported without fear of judgment.”
      </p>

      <div className="flex gap-12 mt-8 text-[14px] opacity-90">
        <span>Jagriti edtech Private Limited</span>
        <span>+91 9606258596</span>
      </div>
    </div>
  </div>
</div>

<section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
  <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">

                 <h2
  className="text-[32px] sm:text-[38px] lg:text-[46px]
             leading-tight
             text-center"
  style={{
    fontFamily: "Inter",
    fontWeight: 600,
    letterSpacing: "-0.06em",
    color: "#3a2b20",
  }}
>
  Ready to experience complete mental health support?
</h2>

        
                  <p
                    className="text-[16px] sm:text-[18px] 
                               leading-[24px] sm:leading-[28px] 
                               text-center 
                               whitespace-normal lg:whitespace-nowrap 
                               mx-auto"
                    style={{ fontFamily: "Inter", fontWeight: 400, letterSpacing: "-0.03em", color: "#0D0D0D" }}
                  >
                 Download the app and start your journey to better mental wellness today.
                  </p>
        
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-[36px]">
                    {/* CTA 1 */}
                   
        
                  

                     <button
                        onClick={redirectToAppStore}
                      className="group flex items-center gap-[8px] text-[#5B4A3E] text-[18px] font-medium pl-[26px] pr-[4px] py-[4px] rounded-[40px] border border-[#5B4A3E] bg-[#ffffff] shadow-sm transition-all duration-300 hover:bg-[#5C4737] hover:text-white hover:border-[#3e3229] cursor-pointer"
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontWeight: 500,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      <span className="tracking-[-0.01em]">Download the app</span>
        
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
                    </button>
                  </div>
                </div>
              </section>
        
       </div>

      <Footer />
    </main>
  );
}
