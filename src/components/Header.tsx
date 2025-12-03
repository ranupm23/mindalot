"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { name: "Home", href: "/" },
  { name: "For Educational Institutions", href: "/university" },
  { name: "For Corporates", href: "/corporates" },
  { name: "Features", href: "/#features" },
  { name: "Resources", href: "/resource" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white border-b border-[#f2f2f2]">
      <div
        className="
          max-w-[1500px]
          mx-auto
          flex
          items-center
          justify-between
          py-4
          px-10
        "
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="mind logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </Link>

        {/* Navigation menu */}
        <nav className="hidden md:flex items-center gap-10">
          {menus.map((menu) => {
            const isActive = pathname === menu.href;
            return (
              <Link
                key={menu.name}
                href={menu.href}
                className={`
                  text-[16px]
                  font-medium
                  transition
                  ${isActive ? "text-black" : "text-[#8A817C]"}
                `}
              >
                {menu.name}
              </Link>
            );
          })}
        </nav>

        {/* Chat Now Button */}
        <Link
          href="https://www.instagram.com/"
          className="
            bg-[#967B6A]
            text-white
            px-8
            py-3
            rounded-full
            text-[16px]
            font-semibold
            hover:opacity-90
            transition
          "
        >
          Chat Now
        </Link>
      </div>
    </header>
  );
}
