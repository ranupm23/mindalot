import Image from "next/image";

export default function CorporatesPage() {
  return (
    <main className="pt-[70px]">
      {/* Hero Section */}
      <section className="bg-[#FFFCF9] py-20 sm:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="font-inter font-semibold text-[60px] leading-[80px] text-[#5C4837] mb-6" style={{ letterSpacing: '-0.06em' }}>
                Real Mental Wellness, Not Just Another EAP.
              </h1>
              <p className="font-inter font-medium text-[18px] leading-[35px] text-[#1E1E1E] mb-6" style={{ width: '538px', height: '105px', letterSpacing: '-0.03em' }}>
                Mind A Lot is built for the modern workforce: instant, anonymous, and effective. Because people don't wait for office hours to break down.
              </p>
              <p className="font-inter font-medium text-[18px] leading-[35px] text-[#6D6D6F] mb-8" style={{ width: '538px', height: '70px', letterSpacing: '-0.03em' }}>
                Let's discuss how Mind A Lot can fit your organization's wellness strategy in just 15 minutes.
              </p>
              <button className="px-6 py-3 rounded-full bg-[#B18972] hover:bg-[#9a755f] text-white font-inter font-medium text-lg transition-colors flex items-center gap-2">
                Book a 15-Min Call
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src="/images/corporates-hero.jpg"
                  alt="Corporate team"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-xl"
                  priority
                />
              </div>
              
              {/* Circular Overlay */}
              <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/90 flex items-center justify-center p-4">
                <p className="text-[#5C4837] font-nunito-sans font-bold text-xs text-center">
                  YOUR MENTAL HEALTH
                </p>
              </div>

              {/* Quote Card */}
              <div className="absolute bottom-4 left-4 bg-white/95 rounded-lg p-4 shadow-lg max-w-xs">
                <p className="text-[#5C4837] font-nunito-sans text-sm mb-2">
                  Investing in mental wellness means investing in lasting success.
                </p>
                <svg className="w-5 h-5 text-[#B18972]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we Offer Section */}
      <section className="bg-white py-20">
        <div className="container-page">
          <h2 className="font-nunito-sans font-bold text-4xl sm:text-5xl text-[#5C4837] text-center mb-12">
            What we Offer to Organizations?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Card 1 */}
            <div className="bg-[#FFFCF9] rounded-xl p-6 border border-[#B18972]/20">
              <div className="w-12 h-12 rounded-lg bg-[#B18972] flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">24</span>
              </div>
              <h3 className="font-nunito-sans font-bold text-xl text-[#5C4837] mb-2">
                Always-available, chat-first
              </h3>
              <p className="font-nunito-sans text-[#5C4837]/80">
                Get instant support anytime, even during late nights and weekends.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFFCF9] rounded-xl p-6 border border-[#B18972]/20">
              <div className="w-12 h-12 rounded-full bg-[#B18972] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-nunito-sans font-bold text-xl text-[#5C4837] mb-2">
                No stigma or exposure
              </h3>
              <p className="font-nunito-sans text-[#5C4837]/80">
                Employees stay completely anonymous; counsellors never see personal or identifying details.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FFFCF9] rounded-xl p-6 border border-[#B18972]/20">
              <div className="w-12 h-12 rounded-lg bg-[#B18972] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-nunito-sans font-bold text-xl text-[#5C4837] mb-2">
                Global support network
              </h3>
              <p className="font-nunito-sans text-[#5C4837]/80">
                Wherever your workforce is located, our professionals are available to help.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FFFCF9] rounded-xl p-6 border border-[#B18972]/20">
              <div className="w-12 h-12 rounded-lg bg-[#B18972] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-nunito-sans font-bold text-xl text-[#5C4837] mb-2">
                Smart goal nudges
              </h3>
              <p className="font-nunito-sans text-[#5C4837]/80">
                Gentle reminders and insights designed to reduce burnout, boost focus, and improve sleep and mindset.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#FFFCF9] rounded-xl p-6 border border-[#B18972]/20">
              <div className="w-12 h-12 rounded-lg bg-[#B18972] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-nunito-sans font-bold text-xl text-[#5C4837] mb-2">
                Insightful, privacy-first reports
              </h3>
              <p className="font-nunito-sans text-[#5C4837]/80">
                HR teams receive usage trends and well-being analytics without revealing individual identities.
              </p>
            </div>

            {/* Card 6 - Special Card */}
            <div className="bg-[#5C4837] rounded-xl p-6 text-white">
              <p className="font-nunito-sans text-lg mb-6">
                Well-being at work isn't a benefit, it's a strength — Request Corporate Deck now.
              </p>
              <button className="px-6 py-3 rounded-full bg-white hover:bg-white/90 text-[#5C4837] font-inter font-medium text-lg transition-colors flex items-center gap-2 w-full justify-center">
                Request Corporate Deck
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#FFFCF9] py-20">
        <div className="container-page text-center">
          <h2 className="font-nunito-sans font-bold text-4xl sm:text-5xl text-[#5C4837] mb-6">
            Let's Build a Healthier Workplace Together
          </h2>
          <p className="font-nunito-sans text-lg leading-relaxed text-[#5C4837] mb-8 max-w-2xl mx-auto">
            Partner with Mind A Lot to provide mental health support that your employees will actually use.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 rounded-full bg-[#B18972] hover:bg-[#9a755f] text-white font-inter font-medium text-lg transition-colors flex items-center gap-2">
              Book a 15-Min Call
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="px-6 py-3 rounded-full bg-[#5C4837] hover:bg-[#4a392d] text-white font-inter font-medium text-lg transition-colors flex items-center gap-2">
              Request Corporate Deck
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

