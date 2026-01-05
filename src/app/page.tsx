"use client"
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "@/components/Header";
import {StaticImageData} from "next/image"
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';

import arrow from "../assets/arrow.svg";
import Homebg from "../assets/home-page/hero/rock.png";
import line from "../assets/home-page/ourDiffrent/m1.png";
import w1 from "../assets/home-page/deserves/w1.png";
import w2 from "../assets/home-page/deserves/w2.png";
import w3 from "../assets/home-page/deserves/w3.png";
import w4 from "../assets/home-page/deserves/w4.png";
import w5 from "../assets/home-page/deserves/w5.png";
import w6 from "../assets/home-page/deserves/w6.png";
import fi1 from "../assets/home-page/features/Frame.png";
import f1l from "../assets/home-page/features/Line 15.png";
import featureIcon2 from "../assets/home-page/features/gps.png"; // F2 Icon
import dividerImage2 from "../assets/home-page/features/Line 15.png"; 
import featureIcon3 from '../assets/home-page/features/search-normal.png'; // F3 Icon
import dividerImage3 from '../assets/home-page/features/Line 15.png'; // Divider 3
import featureIcon4 from '../assets/home-page/features/task.png'; // F4 Icon
import featureIcon5 from '../assets/home-page/features/video-circle.png';
import featureIcon6 from "../assets/home-page/features/briefcase.png";
import featureIcon7 from "../assets/home-page/features/ai-hospital.png";
import featureIcon8 from "../assets/home-page/features/diagram.png";
import largeLeftImage from '../assets/home-page/testemonial/Ellipse 47.png'; // 225x450px image
import testimonialIcon from '../assets/home-page/testemonial/teste2.jpg'; // 50x50px circular icon
import leftQuoteImage from '../assets/home-page/testemonial/Vector.png'; // 125x125px rotated image
import rightQuoteImage from '../assets/home-page/testemonial/Vector.png'; // 125x125px rotated image
import largeRightImage from '../assets/home-page/testemonial/face.png'; // 584x548px image
import testimonialIcon2 from '../assets/home-page/testemonial/teste1.jpg';
import testimonialImageLarge from '../assets/home-page/testemonial/Ellipse 52.png'; // 160x160 image
import testimonialImageSmall from '../assets/home-page/testemonial/Ellipse 51.png'; // 100
import testimonialImageCircle from '../assets/home-page/testemonial/teste3.jpg'; 
import t1 from "../assets/home-page/trusted/trust1.png";
import t2 from "../assets/home-page/trusted/trust2.png";
import t3 from "../assets/home-page/trusted/trust3.png";
import t4 from "../assets/home-page/trusted/trust4.png";
import t5 from "../assets/home-page/trusted/trust5.png";
import newarrow from '../assets/home-page/Footer/ffoarrow.png'; 
import  rocksImage from "../assets/home-page/Footer/fo1.png";
import blackarrow from '../assets/home-page/Footer/black arr.png';
import CTAButton from "@/components/CTAButton";
import { Footprints } from "lucide-react";

// Placeholder assets
import headerLogo from "@/assets/header-assets/headerLogo.png";
import footerBgLogo from "@/assets/footer-assets/footer-background-logo.png";

// Icon Imports
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

// UPDATED Join Our Team Modal Component - FIXED input issues
const JoinTeamModal = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  formData, 
  handleInputChange, 
  handleFileChange 
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  formData: {
    fullName: string;
    qualification: string;
    experience: string;
    skills: string;
    mobile: string;
    email: string;
    resume: File | null;
    whyJoin: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#5C4737]">Join Our Team</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          
          <form onSubmit={onSubmit} className="space-y-6">
            {/* All input fields with autocomplete disabled to prevent browser interference */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C4737] focus:border-transparent"
                placeholder="Enter your full name"
                autoComplete="name"
                autoCorrect="on"
                spellCheck="true"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Highest Educational Qualification *
              </label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C4737] focus:border-transparent"
                placeholder="e.g., Masters in Psychology"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Total Work Experience (in years) *
              </label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C4737] focus:border-transparent"
                placeholder="e.g., 5"
                autoComplete="off"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Skills and Areas of Expertise *
              </label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C4737] focus:border-transparent"
                placeholder="e.g., Cognitive Behavioral Therapy, Trauma Counseling"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C4737] focus:border-transparent"
                placeholder="Enter your mobile number"
                autoComplete="off"
                inputMode="numeric"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C4737] focus:border-transparent"
                placeholder="your.email@example.com"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Your Resume (PDF/DOC format) *
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C4737] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#5C4737] file:text-white hover:file:bg-[#4A3829]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Why Do You Want to Work With Mind A Lot? (Short answer – 2–3 lines) *
              </label>
              <textarea
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5C4737] focus:border-transparent"
                placeholder="Share your motivation for joining our team..."
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />
            </div>
            
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-[#5C4737] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#4A3829] transition duration-300"
              >
                Submit Application
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

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

export default function Home() {
  const [joinTeamModalOpen, setJoinTeamModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    qualification: '',
    experience: '',
    skills: '',
    mobile: '',
    email: '',
    resume: null as File | null,
    whyJoin: ''
  });

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setJoinTeamModalOpen(false);
    setFormData({
      fullName: '',
      qualification: '',
      experience: '',
      skills: '',
      mobile: '',
      email: '',
      resume: null,
      whyJoin: ''
    });
  };

  // Blank Facebook-style profile images (grey circles with white silhouettes)
  const blankProfileImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Ccircle cx='100' cy='100' r='100' fill='%23E4E6EB'/%3E%3Ccircle cx='100' cy='80' r='40' fill='%23FFFFFF'/%3E%3Cpath d='M40,170 Q100,130 160,170' fill='%23FFFFFF'/%3E%3C/svg%3E";

  // Testimonials data with blank Facebook-style profile images
  const testimonials = [
    {
      id: 0,
      quote: "No one asked me for my name, and yet I've never felt more seen.",
      author: "Student, Chennai",
      profileImage: blankProfileImage,
      quoteHeight: 70 // Estimated height in pixels for short quote
    },
    {
      id: 1,
      quote: "Mind A Lot helped me understand my thoughts and emotions better during a very confusing phase of my academic life. The sessions were comfortable, non-judgmental, and practical. I learned how to manage exam stress and build confidence. It felt good to talk to someone who genuinely listened and guided me.",
      author: "Student, Bengaluru",
      profileImage: blankProfileImage,
      quoteHeight: 140 // Estimated height for medium quote
    },
    {
      id: 2,
      quote: "Balancing work pressure and personal responsibilities had started affecting my mental well-being. Mind A Lot provided structured, professional counseling that helped me regain clarity and emotional balance. The approach was practical and action-oriented, making it easier to apply the learnings in my daily work life.",
      author: "Corporate Professional, Mumbai",
      profileImage: blankProfileImage,
      quoteHeight: 140 // Estimated height for medium quote
    },
    {
      id: 3,
      quote: "As a parent, I was concerned about my child's emotional well-being but didn't know how to approach the situation. Mind A Lot guided us with sensitivity and professionalism. The counselors helped both my child and us as parents understand emotions better and communicate more openly. I truly appreciate their ethical and child-centric approach.",
      author: "Parent, Bengaluru",
      profileImage: blankProfileImage,
      quoteHeight: 140 // Estimated height for medium quote
    },
    {
      id: 4,
      quote: "College life comes with academic pressure, career confusion, and personal challenges. Mind A Lot gave me a safe space to talk openly and think clearly. The sessions helped me gain self-awareness and make informed decisions about my future. I would highly recommend Mind A Lot to students who feel overwhelmed or stuck.",
      author: "College Student, Bengaluru",
      profileImage: blankProfileImage,
      quoteHeight: 140 // Estimated height for medium quote
    }
  ];

  // Start automatic testimonial rotation
  useEffect(() => {
    // Clear any existing interval
    if (testimonialIntervalRef.current) {
      clearInterval(testimonialIntervalRef.current);
    }

    // Set new interval for automatic rotation every 3 seconds
    testimonialIntervalRef.current = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 3000);

    // Cleanup on unmount
    return () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current);
      }
    };
  }, []);

  // Handle manual testimonial selection (stops auto rotation temporarily)
  const handleTestimonialSelect = (index: number) => {
    setActiveTestimonial(index);
    
    // Reset the auto rotation interval
    if (testimonialIntervalRef.current) {
      clearInterval(testimonialIntervalRef.current);
    }
    
    // Restart auto rotation after 10 seconds of inactivity
    setTimeout(() => {
      testimonialIntervalRef.current = setInterval(() => {
        setActiveTestimonial(prev => (prev + 1) % testimonials.length);
      }, 3000);
    }, 10000);
  };

  // INTERACTIVE Testimonials with original design and automatic rotation
  const Testimonials = () => {
    return (
      <section className="relative w-full bg-[#F6F2EB] overflow-hidden">
        
        {/* MOBILE & TABLET LAYOUT */}
        <div className="lg:hidden relative w-full px-6 pt-16 pb-36 sm:px-12 sm:pt-24 sm:pb-64 flex flex-col z-10">
          
          <div className="max-w-2xl mx-auto w-full">
              {/* Title */}
              <h2 className="font-['Inter'] text-[32px] sm:text-[40px] font-semibold text-[#5C4737] mb-8 sm:mb-12 tracking-tight">
              Testimonials
              </h2>

              {/* Interactive Testimonial Card */}
              <div className="relative bg-white/60 backdrop-blur-sm border border-[#5C4737]/10 rounded-2xl p-6 sm:p-10 shadow-sm mb-8">
                  
                  {/* Quote Icon */}
                  <div className="mb-4 sm:mb-6">
                  <Image
                      src={leftQuoteImage}
                      alt="Quote"
                      className="w-10 h-auto opacity-80"
                  />
                  </div>

                  {/* Quote Text */}
                  <p className="text-[#0D0D0D] font-['Inter'] text-[18px] sm:text-[20px] font-normal leading-[1.6] tracking-tight mb-6 sm:mb-8 min-h-[150px]">
                    "{testimonials[activeTestimonial].quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-between border-t border-[#5C4737]/10 pt-6">
                  <span className="text-[#6D6D6F] font-['Inter'] text-[16px] sm:text-[18px] font-normal">
                      — {testimonials[activeTestimonial].author}
                  </span>
                  </div>
              </div>

              {/* Profile Images for Mobile */}
              <div className="flex justify-center space-x-6 mb-8">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => handleTestimonialSelect(index)}
                    className={`relative transition-all duration-300 ${activeTestimonial === index ? 'scale-110 ring-2 ring-[#5C4737]' : 'opacity-70 hover:opacity-90'}`}
                  >
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#F6F2EB] bg-gray-200">
                      <img 
                        src={testimonial.profileImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>

              {/* Progress dots indicator */}
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${activeTestimonial === index ? 'bg-[#5C4737] scale-125' : 'bg-[#5C4737]/30'}`}
                    />
                  ))}
                </div>
              </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT - EXACT ORIGINAL DESIGN with automatic rotation */}
        <div className="hidden lg:block relative w-full h-[712px] xl:h-[750px]">
          
          <div className="w-full h-full origin-top lg:scale-[0.75] xl:scale-[0.9] 2xl:scale-100 transition-transform duration-300">

              {/* LARGE RIGHT IMAGE - Always shows same image */}
              <Image
              src={largeRightImage}
              alt="Testimonial Background Graphic"
              className="absolute w-[390px] h-[548px] opacity-100"
              style={{ top: '70px', left: 'auto', right: '50px' }}
              />

              {/* MAIN CENTERED CONTENT */}
              <div 
              className="relative w-[1323px] h-[616px] opacity-100 mx-auto" 
              style={{ marginTop: '36px' }}
              >
              
              {/* HEADING */}
              <div
                  className="absolute w-[274px] h-[61px] font-['Inter'] text-[50px] font-semibold text-[#5C4737]"
                  style={{ top: '25px', left: '30px', letterSpacing: '-0.06em' }}
              >
                  Testimonials
              </div>

              {/* LARGE LEFT IMAGE */}
              <Image
                  src={largeLeftImage}
                  alt="Testimonial Background Left"
                  className="absolute w-[225px] h-[450px] opacity-100"
                  style={{ top: '115px', left: '30px' }}
              />

              {/* PROFILE BORDER 1 (TOP PROFILE) */}
              <div
                  className="absolute w-[50px] h-[50px] rounded-full"
                  style={{ 
                  top: '129px', 
                  left: '130px', 
                  border: '1px solid rgba(0, 0, 0, 0.25)'
                  }}
              />

              {/* INTERACTIVE PROFILE IMAGE 1 (TOP) - Facebook-style Blank Avatar */}
              <button
                onClick={() => handleTestimonialSelect(0)}
                className={`absolute w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeTestimonial === 0 ? 'ring-2 ring-[#5C4737] scale-110' : 'hover:scale-105'
                }`}
                style={{ top: '129px', left: '130px' }}
              >
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <img 
                    src={blankProfileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>

              {/* PROFILE BORDER 2 - Fixed rotation */}
              <div
                  className="absolute w-[50px] h-[50px] rounded-full"
                  style={{ 
                  top: '501px', 
                  left: '130px', 
                  border: '1px solid rgba(0, 0, 0, 0.25)'
                  }}
              />

              {/* INTERACTIVE PROFILE IMAGE 2 (BOTTOM) - Facebook-style Blank Avatar - Fixed position */}
              <button
                onClick={() => handleTestimonialSelect(1)}
                className={`absolute w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeTestimonial === 1 ? 'ring-2 ring-[#5C4737] scale-110' : 'hover:scale-105'
                }`}
                style={{ top: '501px', left: '130px' }}
              >
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <img 
                    src={blankProfileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>

              {/* SQUARE CONTAINER/BORDER */}
              <div
                  className="absolute w-[100px] h-[100px]"
                  style={{ top: '290px', left: '205px' }}
              />
              
              {/* NEW IMAGE LARGE */}
              <Image
                  src={testimonialImageLarge}
                  alt="Medium decorative element"
                  className="absolute w-[130px] h-[130px] opacity-100"
                  style={{ top: '275px', left: '190px' }}
              />
              
              {/* NEW IMAGE SMALL */}
              <Image
                  src={testimonialImageSmall}
                  alt="Small decorative element"
                  className="absolute w-[100px] h-[100px] opacity-100"
                  style={{ top: '290px', left: '205px' }}
              />

              {/* CENTER PROFILE CIRCLE - Interactive with Facebook-style Blank Avatar */}
              <button
                onClick={() => {
                  const nextIndex = (activeTestimonial + 1) % testimonials.length;
                  handleTestimonialSelect(nextIndex);
                }}
                className={`absolute w-[80px] h-[80px] rounded-full overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeTestimonial >= 2 ? 'ring-2 ring-[#5C4737] scale-110' : 'hover:scale-105'
                }`}
                style={{ 
                  top: '300px', 
                  left: '215px'
                }}
              >
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img 
                      src={blankProfileImage} 
                      alt="Current Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </button>
              
              {/* QUOTE LEFT IMAGE */}
              <div
                  className="absolute w-[125px] h-[125px] opacity-100 flex items-center justify-center"
                  style={{ top: '133px', left: '292px', transform: 'rotate(-180deg)' }}
              >
                  <Image
                  src={leftQuoteImage} 
                  alt="Quote Left" 
                  className="absolute w-[51px] h-[93px] opacity-100"
                  style={{ top: '16.83px', left: '36.72px', transform: 'rotate(-180deg)' }}
                  />
              </div>

              {/* QUOTE RIGHT IMAGE */}
              <div
                  className="absolute w-[125px] h-[125px] opacity-100 flex items-center justify-center"
                  style={{ top: '133px', left: '367px', transform: 'rotate(-180deg)' }}
              >
                  <Image
                  src={rightQuoteImage} 
                  alt="Quote Right" 
                  className="absolute w-[51px] h-[93px] opacity-100"
                  style={{ top: '16.83px', left: '36.72px', transform: 'rotate(-180deg)' }}
                  />
              </div>

              {/* QUOTE TEXT - Dynamic based on active testimonial */}
              <div
                  className="absolute w-[458px] h-auto text-[#0D0D0D] font-['Inter'] text-[24px] font-medium transition-all duration-500"
                  style={{ 
                    top: '250px', // Adjusted to be higher for long text
                    left: '365px', 
                    lineHeight: '35px', 
                    letterSpacing: '-0.03em',
                    minHeight: '200px', // Increased min-height for long text
                    maxHeight: '200px', // Limit max height
                    overflowY: 'auto', // Add scroll if text is too long
                    paddingRight: '10px'
                  }}
              >
                  "{testimonials[activeTestimonial].quote}"
              </div>

              {/* AUTHOR INFO - Dynamic based on active testimonial - Fixed at bottom */}
              <div
                  className="absolute w-[222px] h-[35px] text-[#6D6D6F] font-['Inter'] text-[24px] font-normal transition-all duration-500"
                  style={{ 
                    top: '480px', // Fixed position at bottom
                    left: '365px', 
                    lineHeight: '35px', 
                    letterSpacing: '-0.03em' 
                  }}
              >
                  — {testimonials[activeTestimonial].author}
              </div>

              </div>
          </div>
        </div>
      </section>
    );
  };

const HomeHero = () => {
  const imagePath = Homebg?.src || Homebg || "/path/to/default.jpg";
  const sectionWidth = 1440;
  const sectionHeight = 864;

  return (
        <section
  className="relative w-full overflow-hidden bg-cover bg-top lg:bg-top-right"
  style={{ backgroundImage: `url(${imagePath})` }}
>
      <div className="relative w-full h-auto lg:h-[864px]">
        
        {/* HEADER */}
        <div className="absolute top-0 left-0 w-full z-50">
          <Header textWhite/>
        </div>

        {/* LEFT OVERLAY (Gradient) */}
        <div
          className="absolute top-0 left-0 w-full h-full lg:w-[720px] lg:h-[864px] backdrop-blur-[60px] z-10"
          style={{
            background: `linear-gradient(134.5deg, rgba(91, 74, 62, 0.9) 0%, rgba(117, 88, 64, 0.85) 60%, rgba(50, 40, 30, 0.7) 100%)`,
          }}
        />

        <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 pt-28 pb-16 lg:h-full lg:block lg:p-0">
          
          {/* MOBILE TITLE */}
          <div className="lg:hidden text-center mb-6">
            <h1 className="font-inter text-[15vw] sm:text-[80px] font-bold leading-none tracking-tight text-[#F6F2EB]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#e8dcc8] to-[#9c7e63]">MIND A</span>{" "}
              <span>LOT</span>
            </h1>
          </div>

          {/* DESKTOP TITLES (Hidden on Mobile) */}
          <h1
            className="hidden lg:flex absolute items-center justify-center font-inter pointer-events-none lg:w-[566px] lg:h-[242px] lg:top-[158px] lg:left-[154px] lg:text-[200px] font-semibold leading-[100%] tracking-[0.06em] text-center"
            style={{
              backgroundImage: `url(${imagePath})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundPosition: "-154px -158px",
              backgroundSize: `${sectionWidth}px ${sectionHeight}px`,
              backgroundRepeat: "no-repeat",
            }}
          >
            MIND
          </h1>

          <span
            className="hidden lg:flex absolute items-center justify-center font-inter pointer-events-none lg:w-[145px] lg:h-[242px] lg:top-[400px] lg:left-[575px] lg:text-[200px] font-semibold leading-[100%] tracking-[0.06em] text-center"
            style={{
              backgroundImage: `url(${imagePath})`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundPosition: "-575px -400px",
              backgroundSize: `${sectionWidth}px ${sectionHeight}px`,
              backgroundRepeat: "no-repeat",
            }}
          >
            A
          </span>

           <h2 className="hidden lg:flex absolute items-center justify-center font-inter text-[#F6F2EB] lg:w-[413px] lg:h-[242px] lg:top-[400px] lg:left-[750px] lg:text-[200px] font-semibold leading-[100%] tracking-[0.06em] text-center z-0">
            LOT
          </h2>

          {/* Description Paragraph - CHANGED: "we are" */}
          <p className="font-inter text-[#F6F2EB] lg:text-[#1C1C1BCC] text-[16px] leading-[25px] tracking-[-0.03em] text-center lg:text-right w-full max-w-[400px] lg:w-[373px] lg:h-[75px] mb-8 lg:mb-0 lg:absolute lg:top-[279px] lg:left-[783px] z-0">
            We are an anonymous, app-based counselling platform that
            connects you instantly to a real, <br className="hidden lg:block" /> trained professional
          </p>

          {/* Left Subtitle */}
          <p className="font-inter text-[#FDE2CD] text-[20px] lg:text-[24px] font-normal leading-[120%] lg:leading-[100%] tracking-[-0.06em] text-center lg:text-left w-full max-w-[400px] lg:w-[387px] lg:h-[58px] mb-8 lg:mb-0 lg:absolute lg:top-[512px] lg:left-[160px]">
            You don't have to say who you are to start feeling better
          </p>

          {/* "Safe Space" CTA Text */}
          <p className="font-inter text-[#F6F2EB] text-[16px] font-bold leading-[100%] tracking-[-0.03em] mb-4 lg:mb-0 lg:absolute lg:w-[280px] lg:h-[19px] lg:top-[650px] lg:left-[587px] z-20">
            Your safe space is just one tap away!
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-[20px] w-full lg:w-[467px] lg:h-[60px] lg:absolute lg:top-[725px] lg:left-[490px] z-30">
            
           {/* WhatsApp Chat Button - CHANGED: Updated phone number */}
           <a
  href="https://wa.me/919900655784?text=Hello%20Mindalot%20Team"
  target="_blank"
  rel="noopener noreferrer"
  className="no-underline"
>
  <button
    className="group relative flex items-center justify-start font-nunito transition-all duration-300 w-[280px] lg:w-[212px] h-[60px] rounded-[30px] border-2 border-[#F6F2EB] bg-transparent text-[#F6F2EB] text-[16px] font-medium leading-[100%] tracking-[-0.03em] cursor-pointer pl-[30px] hover:bg-[#5C4737] hover:border-transparent"
  >
    Start chat now
    <div className="absolute flex items-center justify-center transition-transform duration-300 group-hover:rotate-[45deg] w-[50px] h-[50px] top-[3px] right-[5px] lg:left-[155px] bg-[#F6F2EB] rounded-full">
      <Image
        src={blackarrow}
        alt="arrow"
        style={{ width: "20px", height: "20px" }}
      />
    </div>
  </button>
</a>

            {/* Button 2 */}
           
              <button onClick={redirectToAppStore}
                className="group relative flex items-center font-nunito transition-all duration-300 w-[280px] lg:w-[235px] h-[60px] rounded-[30px] bg-[#F6F2EB] border-none cursor-pointer hover:bg-[#5C4737]"
              >
                <span
                  className="btn-text transition-colors duration-300 absolute w-full text-center lg:text-left lg:w-[151px] top-[18px] lg:left-[20px] text-[#5B4A3E] text-[18px] font-medium group-hover:text-[#F6F2EB]"
                >
                  Download the app
                </span>
                <div className="absolute flex items-center justify-center transition-transform duration-300 group-hover:rotate-[45deg] w-[50px] h-[50px] top-[5px] right-[5px] lg:left-[181px] bg-[#F6F2EB] rounded-full">
                  <Image
                    src={blackarrow}
                    alt="arrow"
                    style={{ width: "20px", height: "20px" }}
                  />
                </div>
              </button>
            
          </div>

        </div>
      </div>
    </section>
  );
};


const MakeUs = () => {
  return (
    <section className="w-full  overflow-x-hidden py-12 sm:py-20 px-5 mt-[-30px] sm:px-10 lg:px-20">
      
      {/* HEADER */}
      <h2
        className="
          text-3xl sm:text-4xl lg:text-5xl font-bold
          text-[#5B4A3E]
          mb-10 sm:mb-16 
          max-w-4xl
          font-['Nunito_Sans'] leading-tight
        "
      >
        What makes us different ?
      </h2>

      {/* CARDS GRID with smooth hover effects */}
      <div className="
        grid 
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-y-12 gap-x-8        
        md:gap-y-16 md:gap-x-12
        lg:gap-24
        max-w-7xl mx-auto
      ">
        
        {[ 
          { no: "01", title: "Instant Human Support", desc: "Start chatting the moment you feel overwhelmed. No forms. No queues. No matching wait. A real counsellor responds in seconds." },
          { no: "02", title: "100% Anonymous", desc: "You can choose a nickname. Your real identity stays private. Even our counsellors won't know who you are. Feel safe, share freely." },
          { no: "03", title: "Flexible Access", desc: "Want to choose your own counsellor? Prefer video or voice? You can book that." },
          { no: "04", title: "Goal-Based Nudges", desc: "Set your personal growth goals inside the app. We send you tiny, doable nudges to help you stay on track — one gentle step at a time." },
          { no: "05", title: "Mood Tracker", desc: "Just tap how you're feeling. We'll guide you from there. No mood history shown — because your past doesn't need to hurt you again." },
          { no: "06", title: "Self-Discovery Tools & Library", desc: "Discover your patterns, habits, and emotional needs through quick self-assessments, then explore expert-curated videos, podcasts, stories, and guided journaling." }
        ].map((item) => (
          
          <div 
            key={item.no} 
            className="flex flex-col space-y-3 group cursor-pointer transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl rounded-lg p-6 hover:bg-white/60 hover:backdrop-blur-sm border border-transparent hover:border-[#5C4737]/10"
          >
            
            {/* NUMBER & LINE WRAPPER */}
            <div className="relative">
              {/* Number */}
              <div
                className="
                  text-5xl font-semibold text-[#5B4A3E]
                  leading-none tracking-tighter
                  font-['Inter'] pl-1
                  transition-all duration-500
                  group-hover:text-[#7D5E4A] group-hover:pl-3
                "
              >
                {item.no}
              </div>

              {/* Line Image with hover animation */}
              <div className="relative w-[96px] h-[18px] mt-2 overflow-hidden">
                <Image
                  src={line}
                  alt="decorative line"
                  className="
                    w-full h-full
                    transition-all duration-700
                    group-hover:w-[160px] group-hover:ml-[-10px]
                    group-hover:translate-x-4
                  "
                />
              </div>
            </div>

            {/* TITLE */}
            <div
              className="
                text-xl sm:text-2xl font-semibold text-[#5C4737]
                font-['Inter'] 
                leading-tight
                mb-2 sm:mb-4
                transition-all duration-500
                group-hover:text-[#7D5E4A] group-hover:translate-x-2
              "
            >
              {item.title}
            </div>

            {/* DESCRIPTION */}
            <div
              className="
                text-base sm:text-lg font-normal text-[#6D6D6F]
                leading-relaxed font-['Inter']
                transition-all duration-500
                group-hover:text-[#5C5C5E] group-hover:translate-x-1
              "
            >
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Whowant = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  interface CardProps {
    imageSrc: string | StaticImageData;
    altText: string;
    title: string;
    id: number;
  }

  const cards = [
    { id: 1, imageSrc: w1, altText: "Working Professionals", title: "Working Professionals" },
    { id: 2, imageSrc: w2, altText: "Students & Young Adults", title: "Students & Young Adults" },
    { id: 3, imageSrc: w3, altText: "LGBTQ+ Community", title: "LGBTQ+ Community" },
    { id: 4, imageSrc: w4, altText: "Older Adults", title: "Older Adults" },
    { id: 5, imageSrc: w5, altText: "Neurodivergent Users", title: "Neurodivergent Users" },
    { id: 6, imageSrc: w6, altText: "Anyone Needing Support", title: "Anyone Needing Support" }
  ];

  const HoverCard = ({ imageSrc, altText, title, id }: CardProps) => (
    <div
      className="relative w-full h-full rounded-[12px] overflow-hidden bg-black
        group cursor-pointer transition-transform duration-700 hover:scale-[1.03]"
      onMouseEnter={() => setHoveredCard(id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <Image
        src={imageSrc}
        alt={altText}
        fill
        className="object-cover scale-[1.05] transition-transform duration-700 group-hover:scale-110"
      />
      <div
        className={`absolute inset-0 transition-all duration-700 ease-out
          ${
            hoveredCard === id
              ? "bg-gradient-to-t from-black/95 via-black/70 to-black/10"
              : "bg-gradient-to-t from-black/50 via-black/20 to-transparent"
          }`}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center
          text-white text-center transition-all duration-700 ease-out
          ${
            hoveredCard === id
              ? "opacity-100 translate-y-0 text-3xl font-bold"
              : "opacity-90 translate-y-16 text-xl font-semibold"
          }`}
      >
        {title}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#F6F2EB] py-10 sm:py-24 px-4 sm:px-6 relative flex justify-center">

      {/* ================= DESKTOP / LARGE SCREENS ================= */}
     <div className="hidden lg:grid grid-cols-3 gap-x-6 gap-y-6 w-full 2xl:max-w-[1800px] mx-auto -mb-[420px]">


        {/* Heading and Description */}
        <div className="col-span-3">
          <h2 className="text-[50px] font-bold mb-2">Who it's For</h2>
          <p className="w-[380px] text-[18px] text-black/80 mb-4">
            Mind A Lot is for everyone who wants to feel better, grow stronger, and cope smarter.
          </p>
          <div className="relative w-[410px] h-[113px] mb-12 bg-[#F8F8F8] rounded-md px-4 py-3">
            <p className="italic font-bold text-[16px]">
              " Wherever you are. Whoever you are. However you feel. "
            </p>
            <p className="mt-4 text-[16px]">– Mind A Lot is here for you!</p>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        {/* First row */}
        <div className="w-full h-[380px]">
          <HoverCard {...cards[0]} />
        </div>
        <div className="w-full h-[800px] -translate-y-[415px]">
          <HoverCard {...cards[1]} />
        </div>
        <div className="w-full h-[800px] -translate-y-[415px]">
          <HoverCard {...cards[2]} />
        </div>

        {/* Second row */}
        <div className="w-full h-[416px] -translate-y-[420px]">
          <HoverCard {...cards[3]} />
        </div>
        <div className="w-full h-[416px] -translate-y-[420px]">
          <HoverCard {...cards[4]} />
        </div>
        <div className="w-full h-[416px] -translate-y-[420px]">
          <HoverCard {...cards[5]} />
        </div>

      </div>

      {/* ================= MOBILE / TABLET ================= */}
      <div className="lg:hidden max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Who it's For</h2>
        <p className="mb-8 text-black/80">
          Mind A Lot is for everyone who wants to feel better, grow stronger, and cope smarter.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map(card => (
            <div key={card.id} className="aspect-[4/3]">
              <HoverCard {...card} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};


interface FeatureItemProps {
  iconSrc: string | StaticImageData;
  altText: string;
  title: string;
  isLast?: boolean;
}

const FeatureItem = ({ iconSrc, altText, title, isLast = false }: FeatureItemProps) => {
  return (
    <div 
      className={`
        flex items-center gap-4 sm:gap-5 py-4 sm:py-6 lg:py-8
        ${!isLast ? 'border-b border-gray-200' : ''}
        group cursor-pointer transition-all duration-500 hover:bg-gray-50/80 hover:pl-4 rounded-lg hover:shadow-md
      `}
    >
      <div className="shrink-0 w-12 h-12 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
        <Image
          src={iconSrc} 
          alt={altText} 
          className="w-full h-full object-contain transition-filter duration-500 group-hover:brightness-110 group-hover:drop-shadow-lg"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 
          className="
            font-medium text-black font-['Inter'] leading-snug
            text-base sm:text-xl whitespace-normal
            lg:whitespace-nowrap transition-all duration-500
            group-hover:text-[#5C4737] group-hover:font-bold group-hover:translate-x-2
          "
        >
          {title}
        </h3>
      </div>
    </div>
  );
};
const Features = () => {
  return (
    <section className="relative w-full overflow-hidden mt-11 sm:mt-20">
      
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-[50px] pb-[10px] sm:pb-[80px]">

        {/* HEADER */}
        <div className="mb-2 sm:mb-4 pl-[13px]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black font-['Inter'] mb-2 sm:mb-3 leading-tight">
            Key features
          </h2>
          <p className="text-base sm:text-lg text-black font-medium font-['Nunito_Sans'] max-w-xl leading-relaxed">
            Discover the essential features you need - all in one trusted platform.
          </p>
        </div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 lg:gap-y-0">
          
          {/* LEFT COLUMN LIST */}
          <div className="flex flex-col w-full">
            <FeatureItem iconSrc={fi1} altText="Chat" title="24/7 Live Chat With Human Counsellors" />
            <FeatureItem iconSrc={featureIcon2} altText="Tracker" title="Goal Tracker With Behavioural Nudges" />
            <FeatureItem iconSrc={featureIcon3} altText="Mood" title="Mood-Based Guidance" />
            <FeatureItem iconSrc={featureIcon4} altText="Assessments" title="Bite-Sized Self Assessments" isLast />
          </div>

          {/* RIGHT COLUMN LIST */}
          <div className="flex flex-col w-full">
            <div className="w-full lg:pr-[50px]"> 
               <FeatureItem iconSrc={featureIcon8} altText="Anon" title="100% Anonymity Guaranteed" />
              <FeatureItem iconSrc={featureIcon6} altText="Lang" title="Works Across Countries & Languages" />
              <FeatureItem iconSrc={featureIcon7} altText="Hospital" title="Escalation To Partner Hospitals For Psychiatric Care"  />
           
                <FeatureItem iconSrc={featureIcon5} altText="Video" title="Expert Videos, Podcasts, and Content Drops" isLast />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// const animationStyles = `
// @keyframes scroll-left-to-right {
//   from {
//     transform: translateX(0);
//   }
//   to {
//     transform: translateX(calc(-100% / 2));
//   }
// }
// `;

const animationStyles = `
@keyframes scroll-right-to-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
`;


interface Logo {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}
interface LogoCarouselProps {
  logos: Logo[];
}

// Helper component for the scrolling logo row
const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos }) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap group">
      <style jsx global>{animationStyles}</style>

      <div
        className="flex w-fit"
        style={{
          animation: 'scroll-right-to-left 20s linear infinite'
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-24 sm:h-32 mx-6 sm:mx-10 shrink-0 transition-all duration-500 hover:scale-110 hover:rotate-2"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="max-h-full w-auto object-contain opacity-70 hover:opacity-100 transition duration-500 brightness-110 hover:drop-shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Trusted = () => {
  // Use existing logos
  const logos = [
    { src: t1, alt: "Trusted Client Logo 1", width: 97, height: 96 },
    { src: t2, alt: "Trusted Client Logo 2", width: 135, height: 96 },
    { src: t3, alt: "Trusted Client Logo 3", width: 107, height: 96 },
    { src: t4, alt: "Trusted Client Logo 4", width: 103, height: 96 },
    { src: t5, alt: "Trusted Client Logo 5", width: 105, height: 96 },
  ];

  return (
    <section 
      className="relative w-full bg-[#F6F2EB] lg:mt-[-200px] sm:py-16 lg:h-[290px] overflow-hidden" 
    >
      
      {/* DESKTOP-ONLY LAYOUT */}
      <div className="hidden lg:block w-full h-full relative">
        
        {/* Heading - CHANGED: "institutions" */}
        <p
          className="absolute font-['Nunito_Sans'] font-medium text-[40px] leading-none text-black w-[410px] h-[55px]"
          style={{ top: '66px', left: '86px' }}
        >
          Trusted by 50+ Institutions
        </p>
        
        {/* Description */}
        <p
          className="absolute font-['Nunito_Sans'] font-normal text-[18px] leading-none text-black w-[406px] h-[50px]"
          style={{ top: '145px', left: '86px' }}
        >
          Trusted by leading schools and institutions that care for student well-being.
        </p>

        {/* Images Layout (Carousel) */}
        <div
  className="
    absolute w-[922px] h-[144px]
    xl:h-[160px]
    2xl:h-[180px]
    overflow-hidden
  "
  style={{ top: '49px', left: '530px' }}
>

          <LogoCarousel logos={logos} />
        </div>
      </div>
      
      {/* MOBILE/TABLET LAYOUT */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        
        {/* Header Content - CHANGED: "institutions" */}
        <div className="mb-8">
          <h2 className="font-['Nunito_Sans'] font-medium text-3xl sm:text-4xl text-black mb-3">
            Trusted by 50+ Institutions
          </h2>
          
          <p className="font-['Nunito_Sans'] font-normal text-base sm:text-lg text-black max-w-md">
            Trusted by leading schools and institutions that care for student well-being.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="mt-8">
          <LogoCarousel logos={logos} />
        </div>
      </div>
    </section>
  );
};

const LastSection = () => {
  return (
    <section className="relative w-full bg-white">
      
      {/* Modal is now rendered at the top level of the Home component */}
      
      {/* CTA CARD */}
     <div className="relative z-20 px-4 w-full flex justify-center mt-[100px] mb-[-180px] sm:mb-[-150px] lg:h-[363px]">
        <div
          className="
            relative 
            w-full max-w-[1250px]
            overflow-hidden
            rounded-[20px] md:rounded-[30px]
            bg-[#BFBFBD]
            p-[10px] 
          "
          style={{
            border: "10px solid #FFFFFF",
            background: "linear-gradient(94.54deg, #9C7A64 0.44%, #624D37 19.66%, #D8D0CA 73.19%, #94897F 100%)",
          }}
        >
          {/* Inner Content Container */}
          <div className="relative w-full h-full bg-[#9C7A64] rounded-[12px] md:rounded-[22px] overflow-hidden">
            
            {/* Background Image (Rocks) */}
            <div className="absolute inset-0 z-0">
               <Image
                src={rocksImage}
                alt="CTA Background"
                fill
                className="object-cover object-bottom"
                style={{ transform: "scale(1.2) translateY(28px)" }} 
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" /> 
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center">
              
              <h2 className="font-inter font-semibold text-[#F6F2EB] text-[24px] sm:text-[32px] md:text-[42px] lg:text-[50px] leading-[1.2] mb-4 md:whitespace-nowrap">
                Take the first step toward feeling better.
              </h2>

              <p className="font-inter font-normal text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] mb-8 md:whitespace-nowrap">
                Start talking. Stay anonymous. Feel lighter. Because your mind matters a lot.
              </p>

              {/* Buttons Wrapper */}
              <div className="flex flex-wrap justify-center gap-4 w-full">
                
                {/* Button 1: Talk to our team - CHANGED: Updated phone number */}
                <a href="tel:+919606258596" className="no-underline">
                  <div className="group relative w-[212px] h-[54px] rounded-[30px] border-2 border-[#F6F2EB] flex items-center bg-transparent transition-all duration-300 hover:bg-[#5C4737] hover:border-[#5C4737] cursor-pointer">
                    <span className="pl-6 text-[#F6F2EB] font-inter font-medium text-[15px]">Talk To Our Team</span>
                    <div className="absolute right-[5px] w-[44px] h-[44px] bg-[#5B4A3E] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:rotate-45">
                        <Image src={newarrow} alt="arrow" className="w-4 h-4 block group-hover:hidden" />
                        <Image src={blackarrow} alt="arrow" className="w-4 h-4 hidden group-hover:block" />
                    </div>
                  </div>
                </a>

                {/* Button 2: Join Our Team - CHANGED: Now opens modal */}
                <button
                  onClick={() => setJoinTeamModalOpen(true)}
                  className="no-underline"
                >
                  <div className="group relative w-[212px] h-[54px] rounded-[30px] border-2 border-[#F6F2EB] flex items-center bg-transparent transition-all duration-300 hover:bg-[#5C4737] hover:border-[#5C4737] cursor-pointer">
                    <span className="pl-6 text-[#F6F2EB] font-inter font-medium text-[15px]">Join Our Team</span>
                    <div className="absolute right-[5px] w-[44px] h-[44px] bg-[#5B4A3E] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:rotate-45">
                        <Image src={newarrow} alt="arrow" className="w-4 h-4 block group-hover:hidden" />
                        <Image src={blackarrow} alt="arrow" className="w-4 h-4 hidden group-hover:block" />
                    </div>
                  </div>
                </button>

                {/* Button 3 */}
              <button
  type="button"
  onClick={redirectToAppStore}
  className="group relative w-[212px] h-[54px] rounded-[30px] border-2 border-[#F6F2EB] flex items-center bg-transparent transition-all duration-300 hover:bg-[#5C4737] hover:border-[#5C4737] cursor-pointer"
>
  <span className="pl-6 text-[#F6F2EB] font-inter font-medium text-[15px]">
    Download App
  </span>

  <div className="absolute right-[5px] w-[44px] h-[44px] bg-[#5B4A3E] rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:rotate-45">
    <Image
      src={newarrow}
      alt="arrow"
      className="w-4 h-4 block group-hover:hidden"
    />
    <Image
      src={blackarrow}
      alt="arrow"
      className="w-4 h-4 hidden group-hover:block"
    />
  </div>
</button>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-18">
        <Footer />
      </div>
    </section>
  );
};

return (
    <>
      <JoinTeamModal
        isOpen={joinTeamModalOpen}
        onClose={() => setJoinTeamModalOpen(false)}
        onSubmit={handleSubmit}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
      />
      <HomeHero/>
      <MakeUs/>
      <Whowant/>
      <Features/>
      <Testimonials/>
      <Trusted/>
      <LastSection/>
    </>
  );
}