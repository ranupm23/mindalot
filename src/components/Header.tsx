"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const menus: { name: string, href: string }[] = [
  { name: "Home", href: "/" },
  { name: "For Educational Institutions", href: "/university" },
  { name: "For Corporates", href: "/corporates" },
  { name: "Features", href: "/#features" },
  { name: "Resources", href: "/resource" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const currentPath = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.includes('#')) {
      e.preventDefault();
      const [path, hash] = href.split('#');
      if (currentPath !== path && path) {
        router.push(href);
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  const getLinkWidth = (name: string) => {
    const widths: { [key: string]: string } = {
      "Home": "46px",
      "For Educational Institutions": "205px",
      "For Corporates": "114px",
      "Features": "66px",
      "Resources": "79px",
      "Contact": "61px",
    };
    return widths[name] || "auto";
  };

  return (
    <header 
      className="fixed inset-x-0 top-0 z-50"
      style={{
        width: '100%',
        backgroundColor: '#FDFDFD',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '0px',
        paddingRight: '86px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="md:hidden flex items-center absolute left-4">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-primary dark:text-white cursor-pointer menu focus:outline-none" 
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>
      
      <div 
        style={{
          width: '1255.910400390625px',
          height: '51px',
          display: 'flex',
          alignItems: 'center',
          gap: '147px',
        }}
      >
        <Link href="/">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={103.91} 
            height={41.03}
            style={{ width: '103.91px', height: '41.03px' }}
          />
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
            <Link 
              key={menu.name} 
              href={menu.href} 
              onClick={(e) => handleLinkClick(menu.href, e)}
              className={`text-xs sm:text-sm lg:text-lg font-inter ${
                currentPath === menu.href || (menu.href === '/' && currentPath === '/') 
                  ? "font-bold text-black" 
                  : "text-[#979797]"
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center">
          <Link
            href="#chat"
            style={{
              width: '124px',
              height: '51px',
              borderRadius: '43px',
              paddingTop: '16px',
              paddingRight: '24px',
              paddingBottom: '16px',
              paddingLeft: '24px',
              gap: '10px',
              backgroundColor: '#967B6A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#FFFFFF',
            }}
          >
            <span style={{ width: '76px', height: '19px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              Chat Now
            </span>
          </Link>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <nav className="fixed h-screen top-[70px] left-0 w-full bg-white border-t border-slate-200/70 flex flex-col items-center py-4 gap-4 md:hidden z-50">
          {menus.map((menu) => {
            const isActive = currentPath === menu.href || (menu.href === '/' && currentPath === '/');
            return (
              <Link 
                key={menu.name} 
                href={menu.href}
                onClick={(e) => {
                  handleLinkClick(menu.href, e);
                  setIsOpen(false);
                }}
                className={`text-base font-inter py-2 ${
                  isActive ? "font-bold text-black" : "text-[#979797]"
                }`}
              >
                {menu.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}