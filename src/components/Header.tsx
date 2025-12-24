"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import headerLogo from "@/assets/header-assets/Mindalotlogo.png";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "For Educational Institutions", path: "/university" },
  { name: "For Corporates", path: "/corporates" },
  { name: "Features", path: "/features" },
  { name: "Resources", path: "/resource" },
  { name: "Contact", path: "/contact" },
];

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

export default function Header({ textWhite = false }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkTextClass = textWhite ? "text-[#F6F2EB]" : "text-[#5B4A3E]";

  return (
   <header className="w-full h-[90px] relative z-10 flex items-center justify-center bg-transparent transition-colors duration-300">

      <div className="w-[1440px] h-[90px] flex items-center justify-between px-[75px]">
        {/* LOGO */}
        <Link href="/">
          <Image
            src={headerLogo}
            alt="Logo"
            width={112}
            height={68}
            className="cursor-pointer"
            priority
          />
        </Link>

        {/* MENU for Large Screens */}
        <nav className="hidden md:flex items-center gap-[40px]">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`${linkTextClass} font-inter text-[18px] whitespace-nowrap ${
                  isActive ? "font-bold" : "font-normal"
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* JOIN NOW BUTTON */}
        <div className="hidden md:flex">
          <button
            onClick={redirectToAppStore}
            className="group relative overflow-hidden rounded-[30px] flex items-center justify-center text-center border border-[#5B4A3E] transition-colors duration-300"
            style={{
              width: "174px",
              height: "47px",
              background: "#FFFFFF",
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "100%",
            }}
          >
            {/* Hover background */}
            <span
              className="absolute inset-0 bg-[#5B4A3E] rounded-[30px] opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-155 origin-center transition-all duration-1000 ease-in-out"
            />

            {/* Text */}
            <span className="relative z-10 text-[#5B4A3E] group-hover:text-[#F6F2EB] transition-colors duration-1000 ease-in-out">
              Join now
            </span>
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-0.5 bg-current mb-1"></div>
            <div className="w-6 h-0.5 bg-current mb-1"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white absolute top-[90px] left-0 shadow-lg flex flex-col items-center gap-4 py-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`font-inter text-[16px] ${
                pathname === item.path ? "font-bold" : "font-normal"
              } ${linkTextClass}`}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Join Now Button */}
          <button
            onClick={redirectToAppStore}
            className="group relative overflow-hidden rounded-[30px] flex items-center justify-center text-center border border-[#5B4A3E] transition-colors duration-300"
            style={{
              width: "174px",
              height: "47px",
              background: "#FFFFFF",
              fontFamily: "Inter",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "100%",
            }}
          >
            <span
              className="absolute inset-0 bg-[#5B4A3E] rounded-[30px] opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-155 origin-center transition-all duration-1000 ease-in-out"
            />
            <span className="relative z-10 text-[#5B4A3E] group-hover:text-[#F6F2EB] transition-colors duration-1000 ease-in-out">
              Join now
            </span>
          </button>
        </div>
      )}
    </header>
  );
}
