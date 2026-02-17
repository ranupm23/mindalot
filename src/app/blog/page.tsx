
"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import leftsideimage from "@/assets/blog-page/rightimage.jpg"
import icon1 from "@/assets/blog-page/Icon-1.png"
import icon2 from "@/assets/blog-page/Icon-2.png"
import icon3 from "@/assets/blog-page/icon-3.png"
import icon4 from "@/assets/blog-page/icon-4.png"
import Link from "next/link";
import cardGraphic from "@/assets/corporate-assets/card-circle-white/card-graphic.svg";

type Category = "All" | "Podcasts" | "Videos" | "Quizzes";


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


const blogData = [
  {
    id: 1,
    title: "Mental Wellness Without Overthinking: 7 Micro-Habits That Actually Stick",
    category: "Podcasts",
  },
];


export default function BlogPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? blogData
      : blogData.filter((item) => item.category === active);

  const btn =
    "w-full border border-[#cfc6bd] bg-white py-3 rounded-lg text-left px-5 transition";

  return (
    <>
      <Header navTextColor="#755840" />

      <main className="bg-[#f4efea] text-[#5b4636]">

        {/* HERO */}
        {/* <section className="max-w-[1200px] mx-auto px-6 pt-16 pb-14 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-[44px] leading-[1.1] font-semibold mb-6">
              Curated resources from real professionals, no fluff
            </h1>

            <p className="text-[#6d6a67] mb-6 max-w-[520px]">
              Ever wondered how small daily habits can reshape your mindset?
              Explore resources that make mental wellness simple and actionable.
            </p>

            <div className="flex gap-6 text-[#7b7772]">
              <span>Explore ✦</span>
              <span>Reflect ✦</span>
              <span>Learn</span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-md relative">
            <img
              src="https://picsum.photos/800/500"
              alt="hero"
              className="w-full h-[340px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-white p-5">
              <p className="font-semibold text-lg">Therapeutic Classes</p>
              <p className="text-sm opacity-90">
                Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              </p>
            </div>
          </div>

        </section> */}
<section className="bg-[#f4efea]">
  <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-[50px] sm:pt-[60px] lg:pt-[70px] pb-[40px] sm:pb-[50px] lg:pb-[60px] 
                  grid lg:grid-cols-[1fr_514px] gap-[40px] md:gap-[60px] lg:gap-[90px] items-center">

    {/* LEFT CONTENT */}
    <div className="w-full max-w-[722px]">

      <h1
        className="
          text-[#5b4636]
          font-semibold
          text-[28px] leading-[36px]
          sm:text-[34px] sm:leading-[46px]
          md:text-[44px] md:leading-[58px]
          lg:text-[60px] lg:leading-[80px]
          tracking-[-0.06em]
        "
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Curated resources from real professionals, no fluff
      </h1>

      <p
        className="
          mt-[20px] sm:mt-[24px] md:mt-[28px]
          text-[#6d6a67]
          text-[15px] leading-[24px]
          sm:text-[16px] sm:leading-[28px]
          md:text-[17px] md:leading-[30px]
          lg:text-[18px] lg:leading-[35px]
          tracking-[-0.03em]
          max-w-[622px]
        "
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
      >
        Ever wondered how small daily habits can reshape your mindset?
        Explore resources that make mental wellness simple and actionable.
      </p>

      {/* Explore Row */}
      <div
        className="
          mt-[20px] sm:mt-[24px] md:mt-[28px]
          flex flex-wrap items-center
          gap-[10px] sm:gap-[14px]
          text-[#8a847e]
          text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px]
          leading-none
          font-medium
        "
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <span>Explore</span>

        <svg
          width="26"
          height="36"
          viewBox="0 0 24 24"
          fill="#BE9B84"
          className="mx-[2px]"
        >
          <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z"/>
        </svg>

        <span>Reflect</span>

        <svg
          width="26"
          height="36"
          viewBox="0 0 24 24"
          fill="#BE9B84"
          className="mx-[2px]"
        >
          <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z"/>
        </svg>

        <span>Learn</span>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full flex justify-center lg:justify-end">
      <div className="w-full max-w-[514px] aspect-[514/411] rounded-[8px] overflow-hidden shadow-md relative">

        <Image
          src={leftsideimage}
          alt="hero"
          fill
          className="object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-black/45 text-white p-4 sm:p-5 lg:p-6">
          <p className="font-semibold text-[16px] sm:text-[18px] lg:text-[20px]">
            Therapeutic Classes
          </p>
          <p className="text-[12px] sm:text-[13px] opacity-90">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
        </div>

      </div>
    </div>

  </div>
</section>



        {/* BLOG + SIDEBAR */}
        <section className="max-w-[1200px] mx-auto px-6 pb-20 mt-20 grid md:grid-cols-[250px_1fr] gap-12">

          {/* SIDEBAR */}
  <aside className="space-y-4">

  {/* ALL */}
<button
  onClick={() => setActive("All")}
  className={`flex items-center gap-3 w-full py-4 rounded-xl px-5 text-left transition
    ${active === "All"
      ? "bg-[#7b5b3f] text-white"
      : "border border-[#bfae9f] bg-white text-[#5b4636]"
    }`}
>
  <Image
    src={icon1}
    alt="all"
    className="w-[20px] h-[20px] object-contain transition"
    style={
      active === "All"
        ? { filter: "brightness(0) invert(1)" }   // WHITE when active
        : {
            filter:
              "invert(34%) sepia(17%) saturate(483%) hue-rotate(346deg) brightness(92%) contrast(88%)"
          } // #755840 when inactive
    }
  />
  All
</button>


  {/* PODCASTS */}
  <button
    onClick={() => setActive("Podcasts")}
    className={`flex items-center gap-3 w-full py-4 rounded-xl px-5 text-left transition
      ${active === "Podcasts"
        ? "bg-[#7b5b3f] text-white"
        : "border border-[#bfae9f] bg-white text-[#5b4636]"
      }`}
  >
    <Image
      src={icon2}
      alt="podcasts"
      className={`w-[20px] h-[20px] object-contain transition
        ${active === "Podcasts"
          ? "brightness-0 invert"
          : ""
        }`}
    />
    Podcasts
  </button>

  {/* VIDEOS */}
  <button
    onClick={() => setActive("Videos")}
    className={`flex items-center gap-3 w-full py-4 rounded-xl px-5 text-left transition
      ${active === "Videos"
        ? "bg-[#7b5b3f] text-white"
        : "border border-[#bfae9f] bg-white text-[#5b4636]"
      }`}
  >
    <Image
      src={icon3}
      alt="videos"
      className={`w-[20px] h-[20px] object-contain transition
        ${active === "Videos"
          ? "brightness-0 invert"
          : ""
        }`}
    />
    Videos
  </button>

  {/* QUIZZES */}
  <button
    onClick={() => setActive("Quizzes")}
    className={`flex items-center gap-3 w-full py-4 rounded-xl px-5 text-left transition
      ${active === "Quizzes"
        ? "bg-[#7b5b3f] text-white"
        : "border border-[#bfae9f] bg-white text-[#5b4636]"
      }`}
  >
    <Image
      src={icon4}
      alt="quizzes"
      className={`w-[20px] h-[20px] object-contain transition
        ${active === "Quizzes"
          ? "brightness-0 invert"
          : ""
        }`}
    />
    Quizzes
  </button>

</aside>





          {/* <aside className="space-y-4">

            <button
              onClick={() => setActive("All")}
              className={`${
                active === "All"
                  ? "bg-[#7b5b3f] text-white"
                  : btn
              } py-3 rounded-lg text-left px-5 w-full`}
            >
              ✦ All
            </button>

            <button
              onClick={() => setActive("Podcasts")}
              className={active === "Podcasts" ? "bg-[#7b5b3f] text-white py-3 rounded-lg text-left px-5 w-full" : btn}
            >
              Podcasts
            </button>

            <button
              onClick={() => setActive("Videos")}
              className={active === "Videos" ? "bg-[#7b5b3f] text-white py-3 rounded-lg text-left px-5 w-full" : btn}
            >
              Videos
            </button>

            <button
              onClick={() => setActive("Quizzes")}
              className={active === "Quizzes" ? "bg-[#7b5b3f] text-white py-3 rounded-lg text-left px-5 w-full" : btn}
            >
              Quizzes
            </button>

          </aside> */}

          {/* CONTENT */}
          <div>

            <h2 className="text-[40px] font-semibold mb-8">
              Blogs & Articles
            </h2>

            {/* GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
{/* 
              {filtered.map((item, i) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden border border-[#e6e0da] shadow-sm"
                >
                  <img
                    src={`https://picsum.photos/600/400?random=${i + 1}`}
                    alt="blog"
                    className="w-full h-[220px] object-cover"
                  />

                  <div className="p-5">
                    <span className="inline-block text-xs bg-[#ebe6e1] text-[#6b625b] px-3 py-1 rounded-full mb-3">
                      {item.category.slice(0, -1)}
                    </span>

                    <h3 className="font-semibold text-lg mb-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#8a847e]">
                      Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p>
                  </div>
                </div>
              ))} */}
              {filtered.map((item, i) => (
  <Link
    key={item.id}
    href="/blog-details"
    className="bg-white rounded-xl overflow-hidden border border-[#e6e0da] shadow-sm hover:shadow-md transition-all duration-300"
  >
    <img
      src={`https://picsum.photos/600/400?random=${i + 1}`}
      alt="blog"
      className="w-full h-[220px] object-cover"
    />

    <div className="p-5">
      <span className="inline-block text-xs bg-[#ebe6e1] text-[#6b625b] px-3 py-1 rounded-full mb-3">
        Blog
      </span>

      <h3 className="font-semibold text-lg mb-2 leading-snug">
        {item.title}
      </h3>

      <p className="text-sm text-[#8a847e]">
        Seven small, realistic habits that reduce mental load and improve focus.
      </p>
    </div>
  </Link>
))}


            </div>

            {filtered.length === 0 && (
              <p className="text-gray-500 mt-10">No content found.</p>
            )}

          </div>

        </section>

        {/* CTA */}
        {/* <section className="max-w-[820px] mx-auto text-center pb-24 px-6">

          <h2 className="text-[36px] font-semibold mb-4">
            Access more resources
          </h2>

          <p className="text-[#6d6a67] mb-10">
            Download the Mind A Lot app to access our complete library of mental
            health resources, tools, and professional content.
          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <button className="border border-[#7b5b3f] text-[#7b5b3f] px-7 py-3 rounded-full flex items-center gap-3 hover:bg-[#7b5b3f] hover:text-white transition">
              View all resources
              <span className="border border-current rounded-full w-7 h-7 flex items-center justify-center">
                ↗
              </span>
            </button>

            <button className="bg-[#7b5b3f] text-white px-7 py-3 rounded-full flex items-center gap-3 hover:opacity-90 transition">
              Download the app
              <span className="border border-white rounded-full w-7 h-7 flex items-center justify-center">
                ↗
              </span>
            </button>

          </div>

        </section> */}


        <section className="py-12 sm:py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
                  <h2
                    className="text-[32px] sm:text-[40px] lg:text-[50px] 
                               leading-[36px] sm:leading-[44px] lg:leading-[50px] 
                               text-center lg:text-center
                               whitespace-normal lg:whitespace-nowrap"
                    style={{ fontFamily: "Inter", fontWeight: 600, letterSpacing: "-0.06em", color: "#3a2b20" }}
                  >
                    Access more resources
                  </h2>
        
                  <p
                    className="text-[16px] sm:text-[18px] 
                               leading-[24px] sm:leading-[28px] 
                               text-center 
                               whitespace-normal lg:whitespace-nowrap 
                               mx-auto"
                    style={{ fontFamily: "Inter", fontWeight: 400, letterSpacing: "-0.03em", color: "#0D0D0D" }}
                  >
                  Download the Mind A Lot app to access our complete library of mental health resources, tools, and professional content.
                  </p>
        
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-[36px]">
                    {/* CTA 1 */}
                   
        
                    {/* CTA 2 */}
                    <Link
                      href="https://drive.google.com/file/d/18979mEF_zw9ba3gkqkPJP_uSX6ePTcIo/view"
                      className="group flex items-center gap-[8px] text-[#5B4A3E] text-[18px] font-medium pl-[26px] pr-[4px] py-[4px] rounded-[40px] border border-[#5B4A3E] bg-[#ffffff] shadow-sm transition-all duration-300 hover:bg-[#5C4737] hover:text-white hover:border-[#3e3229]"
                      style={{
                        fontFamily: "'Nunito Sans', sans-serif",
                        fontWeight: 500,
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      <span className="tracking-[-0.01em]">View all resources</span>
        
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
        

      </main>

      <Footer />
    </>
  );
}
