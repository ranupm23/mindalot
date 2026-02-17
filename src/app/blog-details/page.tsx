"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import image1 from "@/assets/blog-page/1.png"
import image2 from "@/assets/blog-page/2...png"
import image4 from "@/assets/blog-page/4.png"
import Image from "next/image";
import Link from "next/link";

export default function BlogDetails() {
  const router = useRouter();

  return (
    <>
      <Header navTextColor="#755840" />

      <main className="bg-[#f4f1ed] text-[#3a2b20]">

        {/* HERO / Back Button */}
        <section className="max-w-[900px] mx-auto px-6 pt-16 sm:pt-20 pb-10">
          
          {/* BACK BUTTON */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#7b5b3f] hover:text-[#a97c50] transition-colors font-medium mb-6"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Blogs
          </button>

          {/* BLOG TITLE */}
          <h1 className="text-[32px] sm:text-[42px] md:text-[48px] font-bold leading-tight tracking-[-0.04em] text-[#5b4636]">
            Mental Wellness Without Overthinking:
            <br /> 7 Micro-Habits That Actually Stick
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-[#6d6a67] leading-relaxed">
            Seven small, realistic habits that reduce mental load, improve focus,
            and help you feel more in control — without dramatic routines.
          </p>
        </section>

        {/* BLOG CONTENT */}
        <section className="max-w-[760px] mx-auto px-6 pb-24 text-[17px] sm:text-[18px] leading-[32px] sm:leading-[36px] space-y-10">

          <p>
            Most people quit “self-care” because it’s designed like a new personality.
            You don’t need an hour-long morning routine, a perfect diet,
            or total screen detox to feel better.
          </p>

          <p>
            What you need is small, repeatable actions that reduce mental load
            and increase control.
          </p>

          <p className="font-medium text-[#7b5b3f] text-lg sm:text-xl">
            Here are 7 micro-habits that work because they’re practical — not inspirational.
          </p>

          {/* MICRO-HABITS */}
          <div className="space-y-8">

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#a97c50]">
                1) The 90-second reset (when emotions spike)
              </h2>
              <ul className="list-decimal list-inside space-y-2 text-[#5b4636]">
                <li>Sit still for 90 seconds</li>
                <li>Inhale normally</li>
                <li>Exhale slightly longer</li>
              </ul>
               <div className="mt-4 w-full h-[320px] rounded-lg overflow-hidden shadow-md">
        <Image
          src={image1}
          alt="habit 1"
          className="w-full h-full object-cover"
        />
      </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#a97c50]">
                2) The “one-tab rule”
              </h2>
              <p className="text-[#5b4636]">
                Work with only one active tab. Multitasking increases mental load and reduces clarity.
              </p>

              <div className="mt-4 w-full h-[320px] rounded-lg overflow-hidden shadow-md">
        <Image
          src={image2}
          alt="habit 1"
          className="w-full h-full object-cover"
        />
      </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#a97c50]">
                3) Two-line journaling
              </h2>
              <ul className="list-decimal list-inside space-y-2 text-[#5b4636]">
                <li>“Today, my mind is stuck on ___.”</li>
                <li>“One small step I can take is ___.”</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#a97c50]">
                4) 10-minute cleanup block
              </h2>
              <p className="text-[#5b4636]">
                Clear one small mess daily. Physical clarity supports mental clarity.
              </p>
                <div className="mt-4 w-full h-[320px] rounded-lg overflow-hidden shadow-md">
        <Image
          src={image4}
          alt="habit 1"
          className="w-full h-full object-cover"
        />
      </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#a97c50]">
                5) The 3-2-1 screen landing
              </h2>
              <ul className="list-decimal list-inside space-y-2 text-[#5b4636]">
                <li>3 deep breaths</li>
                <li>2 sentences: “What am I doing next?”</li>
                <li>1 physical action (drink water / stand / open a book)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#a97c50]">
                6) First 5 minutes only rule
              </h2>
              <p className="text-[#5b4636]">
                Start for just 5 minutes. Motivation is unreliable. Most times, you won’t stop.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#a97c50]">
                7) One honest conversation
              </h2>
              <ul className="list-decimal list-inside space-y-2 text-[#5b4636]">
                <li>“I’m overloaded today.”</li>
                <li>“I’m avoiding something.”</li>
                <li>“I need 10 minutes.”</li>
              </ul>
            </div>

          </div>

          {/* PRACTICAL NOTE */}
          <div className="bg-[#fff8f0] p-6 rounded-xl border-l-4 border-[#a97c50] shadow-sm mt-10">
            <h3 className="font-semibold mb-2 text-[#7b5b3f] text-lg">
              A practical note
            </h3>
            <p className="text-[#5b4636]">
              If your sleep, appetite, panic symptoms, or functioning is severely affected for weeks,
              don’t rely on tips alone — use professional support.
            </p>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
