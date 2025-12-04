import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

  const Footer = () => {
    return (
      <footer className="bg-[#E4D6CD] w-full flex flex-col justify-start items-start mt-[85px] py-8 relative">
        <div className="w-full px-[30px] sm:px-[50px] md:px-[70px] lg:px-[86px]">
          {/* ===== Main Footer Row (No motion added here as it's typically static) ===== */}
          <div className="flex flex-col lg:flex-row justify-start lg:items-start items-center w-full gap-[40px] lg:gap-[0px]">
            {/* ===== Left Section ===== */}
            <div className="flex flex-col text-center lg:text-left mt-[13px]">
              <h2 className="font-inter font-bold text-[28px] md:text-[35px] leading-[100%] tracking-[0.05em] text-[#5C4737] mb-4">
                MIND A LOT
              </h2>
              <p className="font-inter font-normal text-[14px] md:text-[16px] leading-[28px] tracking-[-0.03em] text-[#755840] max-w-[450px] mx-auto lg:mx-0">
                Anonymous support that listens, nudges ,<br />
                and grow with you , When your mind feels too much, we're just a
                tap away.
              </p>
            </div>

            {/* ===== Company Section ===== */}
            <div className="lg:ml-[152px] mt-[20px] lg:mt-[10px] flex flex-col text-center lg:text-left space-y-[10px] md:space-y-[16px]">
              <h3 className="font-inter font-medium text-[18px] md:text-[20px] text-[#5C4737]">
                Company
              </h3>
              <Link href="/features" className={footerLink}>
                Features
              </Link>
              <Link href="/contact" className={footerLink}>
                Contact Us
              </Link>
              <Link href="/resource" className={footerLink}>
                Resources
              </Link>
            </div>

            {/* ===== Contact Section ===== */}
            <div className="lg:ml-[140px] mt-[20px] lg:mt-[10px] flex flex-col text-center lg:text-left space-y-[12px] md:space-y-[16px]">
              <h3 className="font-inter font-medium text-[18px] md:text-[20px] text-[#5C4737]">
                Contact
              </h3>
              <div className="flex justify-center lg:justify-start items-center gap-[5px]">
                <Mail size={16} className="text-[#755840]" />
                <span className={footerText}>hello@mindalot.com</span>
              </div>
              <div className="flex justify-center lg:justify-start items-center gap-[5px]">
                <Phone size={16} className="text-[#755840]" />
                <span className={footerText}>+91-96062-58596</span>
              </div>
              <div className="flex justify-center lg:justify-start items-center gap-[5px]">
                <MapPin size={16} className="text-[#755840] min-w-[16px] mt-[-4px]" />
                <p className={`${footerText} max-w-[323px]`}>
                  #122K, 1st block, 14th cross, 19th 'B' Main, Rajajinagar,
                  Bengaluru - 560010
                </p>
              </div>
            </div>

            {/* ===== Follow Us Section ===== */}
            <div className="lg:ml-[140px] mt-[20px] lg:mt-[10px] flex flex-col items-center lg:items-start">
              <h3 className="font-inter font-medium text-[18px] md:text-[20px] text-[#5C4737] mb-[16px] whitespace-nowrap">
                Follow us on
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-[15px]">
                <Link href="https://instagram.com" target="_blank">
                  <Instagram size={24} className={iconHover} />
                </Link>
                <Link href="https://linkedin.com" target="_blank">
                  <FaLinkedin size={24} className={iconHover} />
                </Link>
                 <Link href="https://youtube.com" target="_blank">
                  <IoLogoYoutube size={24} className={iconHover} />
                </Link>
              </div>
            </div>
          </div>

          {/* ===== Divider Line ===== */}
          <div className="border-t border-[#00000080] mt-[60px]" />
        </div>

        {/* ===== Terms + Privacy (Below Divider) ===== */}
        <div className="w-full px-[30px] sm:px-[50px] md:px-[70px] lg:px-[86px]">
          <div
            className="flex items-center justify-center lg:justify-end gap-[40px] mt-[30px] pb-4"
          >
            {/* ===== Terms + Dot ===== */}
            <div className="flex items-center gap-[6px]">
              <div className="w-[5px] h-[5px] rounded-full bg-[#000000]" />
              <Link
                href="/terms"
                className="font-inter font-normal text-[16px] leading-[100%] tracking-[-0.03em] text-[#755840] hover:text-[#5C4737] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>

            {/* ===== Privacy + Dot ===== */}
            <div className="flex items-center gap-[6px]">
              <div className="w-[5px] h-[5px] rounded-full bg-[#000000]" />
              <Link
                href="/privacy"
                className="font-inter font-normal text-[16px] leading-[100%] tracking-[-0.03em] text-[#755840] hover:text-[#5C4737] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  // Tailwind helper classes
  const footerLink =
    "font-inter font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[-0.03em] text-[#755840] hover:text-[#5C4737] transition-colors";
  const footerText =
    "font-inter font-normal text-[14px] md:text-[16px] leading-[100%] tracking-[-0.03em] text-[#755840]";
  const iconHover =
    "text-[#5C4737] hover:text-[#755840] transition-colors cursor-pointer";



    export default Footer;