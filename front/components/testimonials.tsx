"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechSpark Inc.",
    text: "Cloud24 has transformed our infrastructure. The uptime and speed are incredible!",
  },
  {
    name: "Ali Ben Ahmed",
    company: "DataFlow",
    text: "I love how simple and scalable their services are. Perfect for startups!",
  },
  {
    name: "Laura Chen",
    company: "PixelWave Studio",
    text: "The support team is always available and super professional. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#11172a] py-24 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          What Our <span className="text-blue-500">Clients</span> Say
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          See how Cloud24 is helping businesses succeed worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#0b0d17] border border-gray-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <p className="text-gray-300 mb-6 italic">“{t.text}”</p>
              <div className="text-white font-semibold">{t.name}</div>
              <div className="text-sm text-gray-500">{t.company}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
