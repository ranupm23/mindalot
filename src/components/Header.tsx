"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menus: { name: string, href: string }[] = [
  { name: "Home", href: "/" },
  { name: "For Universities", href: "#universities" },
  { name: "For Corporates", href: "#corporates" },
  { name: "Features", href: "#features" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 h-[90px] w-full bg-white flex justify-between items-center z-50 font-inter">
      <div className="flex container-page w-full h-16 items-center justify-between">
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary dark:text-white cursor-pointer menu focus:outline-none" aria-label="Toggle Menu">
            <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" className="w-[90px] lg:w-[130px]" width={130} height={56} />
        </Link>
        <nav className="hidden gap-6 text-sm text-white/90 sm:flex">
          <Link href="#home" className="hover:text-white">
            Home
          </Link>
          <Link href="/university" className="hover:text-white">
            For Universities
          </Link>
          <Link href="#corporates" className="hover:text-white">
            For Corporates
          </Link>
          <Link href="#features" className="hover:text-white">
            Features
          </Link>
          <Link href="#resources" className="hover:text-white">
            Resources
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        <nav className="hidden gap-2 md:gap-4 lg:gap-8 text-lg text-black/90 md:flex">
          {menus.map((menu) => (
            <Link key={menu.name} href={menu.href} className={`text-xs sm:text-sm lg:text-lg font-inter ${menu.href.includes(currentPath) ? "font-bold text-black" : "text-[#979797]"}`}>
              {menu.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#download"
            className="px-5 py-2.5 rounded-full text-white bg-[#6AD4DD] flex justify-center items-center text-xs sm:text-sm lg:text-lg text-nowrap font-medium transition-colors"
          >
            Download now
          </Link>
        </div>
      </div>
      {isOpen && (
        <nav className="fixed h-screen top-[90px] left-0 w-full bg-white border-t border-slate-200/70 flex flex-col items-center py-4 gap-4 md:hidden z-50">
          {menus.map((menu) => (
            <Link key={menu.name} href={menu.href} className={`text-base font-inter py-2 ${menu.href.includes(currentPath) ? "font-bold text-black" : "text-[#979797]"}`}>
              {menu.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}


