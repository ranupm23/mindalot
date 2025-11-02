"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-white">
          <span className="inline-block h-3 w-3 rounded-full bg-white" />
          <span>Mind A Lot</span>
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
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#download"
            className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#2f1f1a] shadow-sm transition-colors hover:bg-white"
          >
            Download now
          </Link>
        </div>
      </div>
    </header>
  );
}


