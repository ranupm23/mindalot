import Image from "next/image";
import Link from "next/link";
import emailIcon from '@/assets/email.svg';
import phoneIcon from '@/assets/phone.svg';
import locationIcon from '@/assets/location.svg';
import instagramIcon from '@/assets/instagram.svg';
import linkedInIcon from '@/assets/linkedin.svg';

export default function Footer() {
  return (
    <footer 
      className="mt-20 font-inter"
      style={{
        width: '1440px',
        height: '542px',
        backgroundColor: '#E4D6CD',
        border: '1px solid #BFBFBD',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        boxSizing: 'border-box',
        paddingTop: '60px',
        paddingBottom: '40px',
        paddingLeft: '86px',
        paddingRight: '86px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="w-full h-full flex flex-col" style={{ position: 'relative', zIndex: 2 }}>
        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 flex-1">
          {/* Left Column - MIND A LOT */}
          <div style={{ position: 'relative', zIndex: 3 }}>
            <h2 
              className="mb-4"
              style={{
                width: '220px',
                height: '42px',
                fontFamily: 'var(--font-inter-sans)',
                fontWeight: 700,
                fontSize: '35px',
                lineHeight: '100%',
                letterSpacing: '5%',
                color: '#5C4737',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                zIndex: 3,
              }}
            >
              MIND A LOT
            </h2>
            <p 
              className="mb-6"
              style={{
                width: '299px',
                height: '90px',
                fontFamily: 'var(--font-inter-sans)',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '30px',
                letterSpacing: '-0.03em',
                color: '#755840',
                opacity: 1,
                position: 'relative',
                zIndex: 3,
              }}
            >
              Anonymous support that listens, nudges, and grows with you. When your mind feels too much, we're just a tap away.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition">
                <Image src={instagramIcon} alt="Instagram" width={24} height={24} style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(12%) saturate(1200%) hue-rotate(15deg) brightness(95%) contrast(85%)' }} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition">
                <Image src={linkedInIcon} alt="LinkedIn" width={24} height={24} style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(12%) saturate(1200%) hue-rotate(15deg) brightness(95%) contrast(85%)' }} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:opacity-80 transition">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#5C4737"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Middle Column - Company */}
          <div style={{ position: 'relative', zIndex: 3 }}>
            <h2 
              className="mb-5"
              style={{
                width: '88px',
                height: '24px',
                fontFamily: 'var(--font-inter-sans)',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '-0.03em',
                color: '#5C4737',
                opacity: 1,
                position: 'relative',
                zIndex: 3,
              }}
            >
              Company
            </h2>
            <div className="flex flex-col gap-4" style={{ position: 'relative', zIndex: 3 }}>
              <Link 
                href="#features" 
                style={{
                  width: '63px',
                  height: '19px',
                  fontFamily: 'var(--font-inter-sans)',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-0.03em',
                  color: '#755840',
                  textDecoration: 'none',
                  opacity: 1,
                  position: 'relative',
                  zIndex: 3,
                }}
                className="hover:opacity-80 transition"
              >
                Features
              </Link>
              <Link 
                href="#contact" 
                style={{
                  width: '82px',
                  height: '19px',
                  fontFamily: 'var(--font-inter-sans)',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-0.03em',
                  color: '#755840',
                  textDecoration: 'none',
                  opacity: 1,
                  position: 'relative',
                  zIndex: 3,
                }}
                className="hover:opacity-80 transition"
              >
                Contact Us
              </Link>
              <Link 
                href="#resources" 
                style={{
                  fontFamily: 'var(--font-inter-sans)',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '-3%',
                  color: '#5C4737',
                  textDecoration: 'none',
                  position: 'relative',
                  zIndex: 3,
                }}
                className="hover:opacity-80 transition"
              >
                Resources
              </Link>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div style={{ position: 'relative', zIndex: 3 }}>
            <h2 
              className="mb-5"
              style={{
                fontFamily: 'var(--font-inter-sans)',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '-3%',
                color: '#5C4737',
                position: 'relative',
                zIndex: 3,
              }}
            >
              Contact
            </h2>
            <div className="flex flex-col gap-4" style={{ position: 'relative', zIndex: 3 }}>
              <div className="flex items-start" style={{ gap: '5px', position: 'relative', zIndex: 3 }}>
                <Image src={emailIcon} alt="email" width={20} height={20} className="mt-1 flex-shrink-0" style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(12%) saturate(1200%) hue-rotate(15deg) brightness(95%) contrast(85%)' }} />
                <span 
                  style={{
                    fontFamily: 'var(--font-inter-sans)',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '-3%',
                    color: '#5C4737',
                    position: 'relative',
                    zIndex: 3,
                  }}
                >
                  info@mindalot.care
                </span>
              </div>
              <div className="flex items-start" style={{ gap: '5px', position: 'relative', zIndex: 3 }}>
                <Image src={phoneIcon} alt="phone" width={20} height={20} className="mt-1 flex-shrink-0" style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(12%) saturate(1200%) hue-rotate(15deg) brightness(95%) contrast(85%)' }} />
                <span 
                  style={{
                    fontFamily: 'var(--font-inter-sans)',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '-3%',
                    color: '#5C4737',
                    position: 'relative',
                    zIndex: 3,
                  }}
                >
                  +91-96062-58596
                </span>
              </div>
              <div className="flex items-start" style={{ gap: '5px', position: 'relative', zIndex: 3 }}>
                <Image src={locationIcon} alt="location" width={20} height={20} className="mt-1 flex-shrink-0" style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(12%) saturate(1200%) hue-rotate(15deg) brightness(95%) contrast(85%)' }} />
                <span 
                  style={{
                    fontFamily: 'var(--font-inter-sans)',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '-3%',
                    color: '#5C4737',
                    position: 'relative',
                    zIndex: 3,
                  }}
                >
                  #122K, 1st block, 14th cross, 19th 'B' Main, Rajajinagar, Bengaluru - 560010
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Border Line */}
        <div 
          style={{
            width: '1268px',
            height: '0px',
            borderTop: '1px solid rgba(0, 0, 0, 0.5)',
            marginBottom: '20px',
          }}
        />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4" style={{ position: 'relative', zIndex: 3 }}>
          <div className="flex items-center gap-4" style={{ position: 'relative', zIndex: 3 }}>
            <span 
              style={{
                fontFamily: 'var(--font-inter-sans)',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '100%',
                letterSpacing: '-3%',
                color: '#5C4737',
                position: 'relative',
                zIndex: 3,
              }}
            >
              Follow us on
            </span>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="hover:opacity-80 transition">
                <Image src={instagramIcon} alt="Instagram" width={24} height={24} style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(12%) saturate(1200%) hue-rotate(15deg) brightness(95%) contrast(85%)' }} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition">
                <Image src={linkedInIcon} alt="LinkedIn" width={24} height={24} style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(12%) saturate(1200%) hue-rotate(15deg) brightness(95%) contrast(85%)' }} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:opacity-80 transition">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#5C4737"/>
                </svg>
              </a>
            </div>
          </div>
          <div 
            className="flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-inter-sans)',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '-3%',
              color: '#5C4737',
              position: 'relative',
              zIndex: 3,
            }}
          >
            <Link href="#terms" className="hover:opacity-80 transition" style={{ textDecoration: 'none', position: 'relative', zIndex: 3 }}>
              Terms & Conditions
            </Link>
            <span style={{ position: 'relative', zIndex: 3 }}>•</span>
            <Link href="#privacy" className="hover:opacity-80 transition" style={{ textDecoration: 'none', position: 'relative', zIndex: 3 }}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
