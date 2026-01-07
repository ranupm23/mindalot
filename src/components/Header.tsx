"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import headerLogo from "@/assets/header-assets/Mindalotlogo.png";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Institutions", path: "/university" },
  { name: "Corporates", path: "/corporates" },
  { name: "Features", path: "/features" },
  { name: "Resources", path: "/resource" },
  { name: "Contact", path: "/contact" },
];

// Redirect based on device
const redirectToAppStore = () => {
  if (typeof window === "undefined") return;

  const userAgent = navigator.userAgent || navigator.vendor;

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    window.location.href =
      "https://apps.apple.com/in/app/zenit-edu/id6748683332";
    return;
  }

  if (/android/i.test(userAgent)) {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.jagrati.zenit&pcampaignid=web_share";
    return;
  }

  window.location.href =
    "https://play.google.com/store/apps/details?id=com.jagrati.zenit&pcampaignid=web_share";
};

// Add prop interface
interface HeaderProps {
  navTextColor?: string; // Accept any color value
}

export default function Header({ navTextColor = "#F6F2EB" }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll for header bg
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      document.body.classList.toggle("header-scrolled", scrolled);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full h-[90px] z-[9999]">
        <div className="header-bg" />

        <div className="relative h-full flex items-center justify-center">
          <div className="w-full max-w-[1440px] h-[90px] flex items-center justify-between px-[20px] md:px-[75px]">
            <Link href="/">
              <Image 
                src={headerLogo} 
                alt="Logo" 
                width={112} 
                height={68} 
                priority 
                className="logo-image"
              />
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-[40px]">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`header-link text-[18px] ${
                    pathname === item.path
                      ? "font-bold-selected"
                      : "font-regular-default"
                  }`}
                  style={{ color: navTextColor }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* JOIN NOW BUTTON */}
            <div className="hidden md:flex">
              <button
                onClick={redirectToAppStore}
                className="group relative overflow-hidden rounded-[30px] flex items-center justify-center text-center border border-[#5B4A3E]"
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
                <span className="absolute inset-0 bg-[#5B4A3E] rounded-[30px] opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-155 origin-center transition-all duration-1000 ease-in-out" />
                <span className="relative z-10 text-[#5B4A3E] group-hover:text-[#F6F2EB] transition-colors duration-1000 ease-in-out">
                  Join now
                </span>
              </button>
            </div>

            {/* HAMBURGER */}
            <div className="md:hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMenuOpen((prev) => !prev);
                }}
                className="flex flex-col gap-1"
              >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </button>
            </div>
          </div>
        </div>

        {/* ✅ MOBILE MENU (ALWAYS RENDERED – NO CONDITIONAL RENDERING) */}
        <div
          className={`absolute top-[90px] left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 md:hidden
          transition-all duration-300
          ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-2"
          }`}
          onClick={handleMenuClick}
        >
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="text-[#755840] text-[16px] font-inter font-medium"
            >
              {item.name}
            </Link>
          ))}
          <button
            className="header-button-mobile font-inter font-medium"
            onClick={redirectToAppStore}
          >
            Join now
          </button>
        </div>
      </header>

      <div className="h-[90px]" />

      <style jsx global>{`
        .header-bg {
          position: absolute;
          inset: 0;
          background-color: transparent;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        body.header-scrolled .header-bg {
          background-color: white !important;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1) !important;
        }
        .font-regular-default {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          color: ${navTextColor};
        }
        .font-bold-selected {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          color: ${navTextColor};
        }
        body.header-scrolled .font-regular-default,
        body.header-scrolled .font-bold-selected {
          color: #755840 !important;
        }
        .header-button-mobile {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          border-radius: 30px;
          border: 1px solid #755840;
          width: 174px;
          height: 47px;
          background: transparent;
          color: #755840 !important;
        }
        .hamburger-line {
          width: 24px;
          height: 2px;
          background-color: ${navTextColor};
          transition: background-color 0.3s ease;
        }
        body.header-scrolled .hamburger-line {
          background-color: #755840 !important;
        }
        /* Logo image styling - not affected by navTextColor */
        .logo-image {
          filter: none !important;
        }
      `}</style>
    </>
  );
}