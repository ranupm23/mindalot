"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import headerLogo from "@/assets/header-assets/Mindalotlogo.png";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "For Universities", path: "/university" },
  { name: "For Corporates", path: "/corporates" },
  { name: "Features", path: "/#features" },
  { name: "Resources", path: "/resource" },
  { name: "Contact", path: "/contact" },
];

export default function Header({ textWhite = false }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use a string of Tailwind classes
  const linkTextClass = textWhite ? "text-[#F6F2EB]" : "text-[#5B4A3E]";


  return (
    <header className="w-full h-[90px] fixed top-0 left-0 z-50 flex items-center justify-center bg-transparent transition-colors duration-300">
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
                className={`${linkTextClass} font-inter text-[18px] whitespace-nowrap ${isActive ? "font-bold" : "font-normal"} transition-colors duration-200`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* JOIN NOW BUTTON */}
        <div className="hidden md:flex">
          <Link
            href="/join"
            className="group relative overflow-hidden rounded-[30px] flex items-center justify-center text-center border border-current transition-colors duration-300"
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
            <span className="absolute inset-0 bg-[#5B4A3E] rounded-[30px] opacity-0 scale-x-50 group-hover:opacity-100 group-hover:scale-x-100 origin-center transition-all duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Join now
            </span>
          </Link>
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
              className={`font-inter text-[16px] ${pathname === item.path ? "font-bold" : "font-normal"} ${linkTextClass}`}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/join"
            className="group relative overflow-hidden rounded-[30px] border border-[#755840] flex items-center justify-center mt-2"
            style={{
              width: "160px",
              height: "45px",
              background: "#FFFFFF",
              color: "#755840",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            <span className="absolute inset-0 bg-[#5B4A3E] scale-x-0 origin-center rounded-[30px] group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Join now
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
