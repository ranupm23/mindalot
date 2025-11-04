"use client";

import { useState } from "react";
import Button from "@/components/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setError(false);
    setSuccess(false);

    const formData = new FormData(form);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // replace with Web3Forms key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setLoading(false);

      if (result.success) {
        setSuccess(true);
        form.reset();
        setTimeout(() => setSuccess(false), 4000);
      } else {
        setError(true);
      }
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  // multiple bubble positions
  const bubbles = [
    { top: "8%", left: "6%" },
    { top: "15%", right: "10%" },
    { top: "35%", left: "12%" },
    { bottom: "28%", right: "8%" },
    { bottom: "12%", left: "18%" },
    { top: "60%", right: "15%" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#EEDAC8] to-[#D8C3A5] text-[#3E2723] pt-24 pb-16 overflow-hidden">
      <section className="mx-auto max-w-6xl px-5 md:px-10 grid gap-14 lg:grid-cols-2 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#6D4C41] to-[#3E2723]">
            Need to Know More? <br />
            We’re Here.
          </h1>
          <p className="text-[#5D4037]/80 text-sm mb-10 max-w-md leading-relaxed">
            Fill out the form below and our team will get in touch with you soon.
          </p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-[#5D4037]/10 hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {["first_name", "last_name"].map((field, idx) => (
                <div key={field}>
                  <label className="block text-xs font-medium text-[#5D4037]/80 capitalize">
                    {field.replace("_", " ")}
                  </label>
                  <input
                    type="text"
                    name={field}
                    required={idx === 0}
                    placeholder={`Enter your ${field.replace("_", " ")}`}
                    className="mt-1 w-full border-b border-[#5D4037]/40 bg-transparent py-2 text-sm text-[#3E2723] placeholder:text-[#5D4037]/50 focus:border-[#5D4037] focus:outline-none"
                  />
                </div>
              ))}
            </div>

            {[
              { name: "phone", type: "tel", placeholder: "Enter your phone number" },
              { name: "email", type: "email", placeholder: "Enter your email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-xs font-medium text-[#5D4037]/80 capitalize">
                  {field.name}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required={field.name === "email"}
                  placeholder={field.placeholder}
                  className="mt-1 w-full border-b border-[#5D4037]/40 bg-transparent py-2 text-sm text-[#3E2723] placeholder:text-[#5D4037]/50 focus:border-[#5D4037] focus:outline-none"
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-medium text-[#5D4037]/80">Reason</label>
              <select
                name="reason"
                className="mt-1 w-full border-b border-[#5D4037]/40 bg-transparent py-2 text-sm text-[#3E2723] focus:border-[#5D4037] focus:outline-none"
              >
                <option value="">Select your reason</option>
                <option>Product enquiry</option>
                <option>Partnership</option>
                <option>Pricing</option>
                <option>Support</option>
              </select>
            </div>

            <label className="flex items-start gap-2 text-xs text-[#5D4037]/80">
              <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-[#5D4037]/40" />
              <span>
                By clicking submit, you agree to our Privacy Policy and Terms & Conditions.
              </span>
            </label>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#8D6E63] to-[#6D4C41] text-white hover:from-[#7B5B4B] hover:to-[#4E342E] transition-all duration-300 px-8 py-2 shadow-md hover:shadow-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "🚀 Get a Call Back"}
              </Button>
            </motion.div>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-700 text-sm font-medium pt-2"
              >
                🎉 Your message has been sent successfully!
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-600 text-sm font-medium pt-2"
              >
                ❌ Something went wrong. Please try again later.
              </motion.div>
            )}
          </motion.form>
        </motion.div>

        {/* Right Section - Image + floating bubbles */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-72 sm:h-96 lg:h-[540px] rounded-3xl overflow-hidden border border-[#5D4037]/30 shadow-lg hover:shadow-2xl transition-all duration-500"
        >
          <Image
            src="https://cdn.pixabay.com/photo/2024/01/22/19/33/stones-8526152_1280.jpg"
            alt="Stacked stones background"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#D8C3A5]/40 via-transparent to-transparent" />

          {bubbles.map((pos, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: i % 2 === 0 ? -15 : 15 }}
              animate={{
                opacity: [0.6, 1, 0.6],
                y: [0, i % 2 === 0 ? -8 : 8, 0],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={pos}
              className="absolute rounded-full bg-white/90 px-3 py-1 text-[10px] sm:text-xs text-[#3E2723]/80 shadow-md backdrop-blur-sm"
            >
              We are waiting to hear from you!
            </motion.span>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
