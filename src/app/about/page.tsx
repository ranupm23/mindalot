
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function AboutPage() {
  return (
    <main className="bg-white text-[#5B4B3E]">
      <Header navTextColor="#755840" />
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Mind-A-Lot
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-[#5B4B3E]/80">
          Mind-A-Lot is built by a team of psychologists, counsellors, and wellness
          professionals with on-ground experience working with students, families,
          and working adults.
        </p>
      </section>

      {/* About Description */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Ethical Practice",
              desc: "We follow ethical counselling practices, privacy-first processes, and clear escalation pathways when medical support is needed.",
            },
            {
              title: "Safe Space",
              desc: "A judgement-free environment where people can talk openly and receive practical, human support.",
            },
            {
              title: "Human-Centered Care",
              desc: "Our approach focuses on empathy, trust, and real-world outcomes rather than one-size-fits-all solutions.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-[#5B4B3E]/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-[#5B4B3E]/80 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#5B4B3E] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="rounded-2xl bg-white/10 p-8">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="leading-relaxed text-white/90">
              A world where seeking emotional support is normal, safe, and stigma-free.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-8">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="leading-relaxed text-white/90">
              Make mental well-being support private, accessible, and trusted through
              trained professionals and thoughtful technology.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-10">Our Team</h2>

        <p className="max-w-4xl mx-auto text-center text-[#5B4B3E]/80 mb-12 leading-relaxed">
          Mind-A-Lot is powered by 80+ counsellors working across India, the USA,
          Canada, Dubai, and Australia. We operate across geographies and time zones
          so support is available when people need it—not just during office hours.
        </p>

        {/* Team Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Dr CA Sandhya P Nagar – Founder",
            "Chinmayi Raju – Board Member",
            "Chitra S V – Director",
            "Lakshmi Vasudev – Director",
            "Vindhya P Nagar – Director",
            "Shankar Nathan – Board Member",
            "Dr Sudarshan – Board Member",
          ].map((name, i) => (
            <div
              key={i}
              className="border border-[#5B4B3E]/20 rounded-2xl p-6 text-center hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{name}</h3>
              <p className="text-sm text-[#5B4B3E]/60 mt-2">
                (Profiles & photos coming soon)
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder Highlight */}
      <section className="bg-[#F7F5F3] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Dr. CA Sandhya P Nagar
          </h2>
          <p className="font-medium mb-2">Founder</p>
          <p className="text-[#5B4B3E]/80 leading-relaxed mb-4">
            Jagrati Edtech Private Limited
          </p>
          <p className="text-[#5B4B3E]/70">
            Contact: <span className="font-medium">98445 33527</span>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
