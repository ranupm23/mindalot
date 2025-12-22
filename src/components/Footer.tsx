"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

import headerLogo from "@/assets/header-assets/Mindalotlogo.png";
import footerBgLogo from "@/assets/footer-assets/footer-background-logo.png";

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer
      className={`
        relative w-full text-[#5B4A3E]
        ${isHome ? "pt-24 pb-10" : "pt-20 pb-16"}
        bg-gradient-to-br from-[#5B4B3E] via-[#F6F1EB] via-[#E8DED4] via-[#ABA093] to-[#8A8077]
        overflow-hidden
      `}
      style={{
        background:
          "linear-gradient(125.54deg, #5B4B3E -12.44%, #F6F1EB -2.52%, #E8DED4 19.98%, #ABA093 80.72%, #8A8077 101.75%)",
      }}
    >
      {/* Overlay Image */}
      <div
        className="absolute right-0 pointer-events-none z-0"
        style={{
          top: "140px",
          bottom: "-20px",
          width: "auto",
          
          maxHeight: "calc(100% - 40px)",
        }}
      >
        <Image
          src={footerBgLogo}
          alt="footer overlay logo"
          style={{ height: "80%", width: "auto", objectFit: "contain", opacity: 1 }}
        />
      </div>

     {/* Footer Content */}
<div className="relative z-10 mx-auto max-w-[1350px] px-8 md:px-12 lg:px-16 xl:px-20">
  <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
    {/* LOGO + DESCRIPTION */}
    <div className="flex flex-col justify-start" style={{ marginTop: '-40px' }}>
      <Image
        src={headerLogo}
        alt="logo"
        width={263}
        height={169}
        className="w-[263px] h-auto"
      />
      <p className="mt-2 font-inter font-normal text-[16px] leading-[30px] tracking-[-0.03em] max-w-[300px]">
  Anonymous support that listens, nudges, and grows with you. When
  your mind feels too much, we’re just a tap away.
</p>


      <div className="mt-16 flex flex-wrap items-center gap-10">
        <Link href="/terms-and-condition" className="flex items-center gap-2 hover:text-[#8C7A6B]">
          <span className="text-[28px] leading-none">•</span> Terms & Conditions
        </Link>
        <Link href="/privacy-policy" className="flex items-center gap-2 hover:text-[#8C7A6B]">
          <span className="font-inter font-normal text-[16px] leading-[100%] tracking-[-0.03em]">
  • Privacy Policy
</span>

        </Link>
      </div>
    </div>

    {/* COMPANY SECTION */}
    <div className="flex flex-col justify-start mt-16">
      <h3
  className="
    font-inter
    font-medium
    text-[20px]
    leading-[100%]
    tracking-[-0.03em]
  "
>
  Company
</h3>

   <ul className="flex flex-col gap-4 mt-6 font-inter font-normal text-[16px] leading-[100%] tracking-[-0.03em]">
  <li>
    <Link href="/features" className="hover:text-[#8C7A6B]">
      Features
    </Link>
  </li>
  <li>
    <Link href="/contact" className="hover:text-[#8C7A6B]">
      Contact Us
    </Link>
  </li>
  <li>
    <Link href="/resource" className="hover:text-[#8C7A6B]">
      Resources
    </Link>
  </li>
</ul>

    </div>

    {/* CONTACT SECTION */}
    <div className="flex flex-col justify-start mt-16 max-w-[320px]">
      <h3
  className="
    font-inter
    font-medium
    text-[20px]
    leading-[100%]
    tracking-[-0.03em]
  "
>
  Contact
</h3>
<div className="flex flex-col gap-4 mt-6 font-inter font-normal text-[16px] leading-[100%] tracking-[-0.03em]">
  <div className="flex items-center gap-3 hover:text-[#8C7A6B]">
    <Mail size={18} stroke="#5B4A3E" /> info@mindalot.care
  </div>
  <div className="flex items-center gap-3 hover:text-[#8C7A6B]">
    <Phone size={18} stroke="#5B4A3E" /> +91-96062-58596
  </div>
  <div className="flex items-start gap-3 hover:text-[#8C7A6B] leading-tight">
    <MapPin size={18} stroke="#5B4A3E" />
    #122K, 1st block, 14th cross, 19th 'B' Main,<br />
    Rajajinagar, Bengaluru – 560010
  </div>
</div>
</div>
    {/* SOCIAL MEDIA */}
    <div className="flex flex-col justify-start mt-16 -ml-[-8]">
      <h3
  className="
    font-inter
    font-medium
    text-[20px]
    leading-[100%]
    tracking-[-0.03em]
  "
>
  Follow us on
</h3>

      <div className="flex items-center gap-4 mt-6">
        <a
          href="https://www.instagram.com/mind.alot?igsh=dWh5bGNtc3JoYTNs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram stroke="#5B4A3E" size={26} className="hover:opacity-70" />
        </a>
        <a
          href="https://www.linkedin.com/showcase/mind-a-lot/about/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="#5B4A3E" size={26} className="hover:opacity-70" />
        </a>
        <a
          href="https://youtube.com/@mind_alot?si=Y_E5tD3qxVunQ2e3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoYoutube color="#5B4A3E" size={30} className="hover:opacity-70" />
        </a>
      </div>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
