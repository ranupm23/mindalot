"use client";

import Button from "@/components/Button";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="pt-20 bg-[#A2AAAD] text-[#3a2a24]">
      {/* Header + Form/Image section */}
      <section className="section">
        <div className="container-page grid items-start gap-10 lg:grid-cols-2">
          {/* Left: Title + Form */}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-[#3a2a24] sm:text-4xl">
              Need to Know More?
              <br />
              We’re Here.
            </h1>

            <form className="mt-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-[#3a2a24]/70">First name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name here"
                    className="mt-1 w-full rounded-none border-b border-[#3a2a24]/30 bg-transparent px-0 py-2 text-[#3a2a24] placeholder:text-[#3a2a24]/40 focus:border-[#3a2a24] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#3a2a24]/70">Last name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name here"
                    className="mt-1 w-full rounded-none border-b border-[#3a2a24]/30 bg-transparent px-0 py-2 text-[#3a2a24] placeholder:text-[#3a2a24]/40 focus:border-[#3a2a24] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#3a2a24]/70">Phone number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="mt-1 w-full rounded-none border-b border-[#3a2a24]/30 bg-transparent px-0 py-2 text-[#3a2a24] placeholder:text-[#3a2a24]/40 focus:border-[#3a2a24] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#3a2a24]/70">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-1 w-full rounded-none border-b border-[#3a2a24]/30 bg-transparent px-0 py-2 text-[#3a2a24] placeholder:text-[#3a2a24]/40 focus:border-[#3a2a24] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#3a2a24]/70">Reason</label>
                <select className="mt-1 w-full rounded-none border-b border-[#3a2a24]/30 bg-transparent px-0 py-2 text-[#3a2a24] focus:border-[#3a2a24] focus:outline-none">
                  <option value="">Select your reason</option>
                  <option>Product enquiry</option>
                  <option>Partnership</option>
                  <option>Pricing</option>
                  <option>Support</option>
                </select>
              </div>

              <label className="flex items-start gap-2 text-xs text-[#3a2a24]/70">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-[#3a2a24]/40" />
                <span>
                  By clicking submit, you agree to Mind A Lot Privacy Policy and Terms & Conditions
                </span>
              </label>

              <div>
                <Button className="rounded-md">Get a Call Back</Button>
              </div>
            </form>
          </div>

          {/* Right: Image with badges */}
          <div className="relative min-h-[480px] overflow-hidden rounded-2xl border border-[#3a2a24]/20 bg-white/30">
            <Image
              src="/globe.svg"
              alt="Contact visual"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              className="object-cover"
            />
            {/* Decorative chat bubbles to mimic figma */}
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] text-[#3a2a24]/80 shadow">
              We are waiting to hear from you!
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] text-[#3a2a24]/80 shadow">
              We are waiting to hear from you!
            </span>
            <span className="absolute left-4 top-1/3 rounded-full bg-white/90 px-3 py-1 text-[10px] text-[#3a2a24]/80 shadow">
              We are waiting to hear from you!
            </span>
            <span className="absolute right-6 bottom-1/3 rounded-full bg-white/90 px-3 py-1 text-[10px] text-[#3a2a24]/80 shadow">
              We are waiting to hear from you!
            </span>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section pt-0">
        <div className="container-page">
          <p className="text-center text-sm text-[#3a2a24]/70">
            For institutions, business queries, or partnerships—reach out:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {/* Email */}
            <a
              href="mailto:support@mindalot.com"
              className="flex items-center justify-center gap-3 rounded-xl bg-white/70 p-5 text-center shadow-sm ring-1 ring-[#3a2a24]/20 hover:bg-white/90"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16v12H4z" stroke="#3a2a24" strokeWidth="1.5"/>
                <path d="M4 7l8 6 8-6" stroke="#3a2a24" strokeWidth="1.5"/>
              </svg>
              <span className="text-sm font-medium text-[#3a2a24]">support@mindalot.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+919606258596"
              className="flex items-center justify-center gap-3 rounded-xl bg-white/70 p-5 text-center shadow-sm ring-1 ring-[#3a2a24]/20 hover:bg-white/90"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.22 11.7 11.7 0 003.6 1.1 1 1 0 011 .99V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.94a1 1 0 011 .99 11.7 11.7 0 001.1 3.6 1 1 0 01-.22 1.1l-2.22 2.21z" stroke="#3a2a24" strokeWidth="1.5"/>
              </svg>
              <span className="text-sm font-medium text-[#3a2a24]">+91-96062-58596</span>
            </a>

            {/* Website */}
            <a
              href="https://www.mindalot.care"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-white/70 p-5 text-center shadow-sm ring-1 ring-[#3a2a24]/20 hover:bg-white/90"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="9" stroke="#3a2a24" strokeWidth="1.5"/>
                <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M6 6c4 3 8 3 12 0" stroke="#3a2a24" strokeWidth="1.5"/>
              </svg>
              <span className="text-sm font-medium text-[#3a2a24]">www.mindalot.care</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


