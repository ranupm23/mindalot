import Image from "next/image";
import Link from "next/link";
import emailIcon from '@/assets/email.svg';
import phoneIcon from '@/assets/phone.svg';
import locationIcon from '@/assets/location.svg';
import instagramIcon from '@/assets/instagram.svg';
import linkedInIcon from '@/assets/linkedin.svg';
import appStoreIcon from '@/assets/app-store.svg';
import playStoreIcon from '@/assets/play-store.svg';

export default function Footer() {
  const Links: { name: string, href: string }[] = [
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
    { name: "Blog", href: "#blog" },
    { name: "Terms & Conditions", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
  ];

  return (
    <footer className="border-t relative border-slate-200/70 min-h-[572px] mt-20 font-inter">
      <div className="absolute h-full w-full inset-0 -z-10 bg-[url('/footer-bg.webp')] bg-no-repeat bg-[length:100%_100%]" />
      <div className="container-page py-10 mt-[83px] pt-0 text-sm text-white">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div>
              <h2 className="text-[35px] font-bold tracking-[5%] mb-6">MIND A LOT</h2>
              <p className="text-base leading-[30px]">Anonymous support that listens, nudges, <br />
                and grows with you. When your mind feels too much, <br />
                we’re just a tap away.</p>
            </div>
            <div>
              <h2 className="font-medium text-xl mb-[25.5px] mt-[25px]">Contact</h2>
              <div className="flex flex-col flex-wrap gap-[22px]">
                <div className="flex gap-[6.9px]">
                  <Image src={emailIcon} alt="icon" width={16.6} height={16.6} />support@mindalot.com
                </div>
                <div className="flex gap-[6.9px]">
                  <Image src={phoneIcon} alt="icon" width={16.6} height={16.6} />+91-96062-58596
                </div>
                <div className="flex gap-[6.9px]">
                  <Image src={locationIcon} alt="icon" width={16.6} height={16.6} />
                  <div>#122K, 1st block, 14th cross, 19th ‘B’ Main, <br /> Rajajinagar, Bengaluru - 560010</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full mb-auto">
            <h2 className="font-medium text-xl mb-5">Company</h2>
            <div className="flex flex-col flex-wrap gap-5">
              {Links.map((link) => (
                <Link key={link.name} href={link.href} className="hover:underline">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div></div>
          <div className="h-full mb-auto">
            <h3 className="text-xl font-medium mb-[25.5px]">Get App</h3>
            <div className="w-[216px] h-16 bg-white rounded-full flex items-center justify-between p-1.5 gap-[19px] font-medium">
              <div className="ml-auto text-black">Download Zenit</div>
              <div className="w-[52px] h-[52px] bg-[#6AD4DD] rounded-full flex justify-center items-center">
                <Image src={playStoreIcon} alt="play store icon" width={24.4} height={24.4} />
              </div>
            </div>
            <div className="w-[216px] h-16 bg-white rounded-full flex items-center justify-between p-1.5 gap-[19px] font-medium mt-[17px]">
              <div className="ml-auto text-black">Download Zenit</div>
              <div className="w-[52px] h-[52px] bg-[#6AD4DD] rounded-full flex justify-center items-center">
                <Image src={appStoreIcon} alt="app store icon" width={24.4} height={24.4} />
              </div>
            </div>
            <div className="mt-[54px] flex">
              <div className="mt-auto">
                Follow us on
              </div>
              <div className="ml-[22.15px] flex gap-2.5 items-center">
                <Image src={instagramIcon} alt="instagram icon" width={25} height={25} />
                <Image src={linkedInIcon} alt="linkedin icon" width={25} height={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


