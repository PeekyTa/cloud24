"use client";

import { motion } from "framer-motion";
import { Cloud, ShieldCheck, Zap, Server } from "lucide-react";

const features = [
  {
    icon: <Cloud size={40} className="text-blue-500" />,
    title: "Cloud Hosting",
    desc: "Deploy your apps instantly on high-performing global servers.",
  },
  {
    icon: <ShieldCheck size={40} className="text-green-500" />,
    title: "Advanced Security",
    desc: "24/7 protection with real-time monitoring and data encryption.",
  },
  {
    icon: <Zap size={40} className="text-yellow-400" />,
    title: "99.9% Uptime",
    desc: "Reliable performance guaranteed for your business-critical apps.",
  },
  {
    icon: <Server size={40} className="text-purple-400" />,
    title: "Scalable Infrastructure",
    desc: "Grow your capacity seamlessly as your business expands.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0b0d17] py-20 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
        >
          Why Choose <span className="text-blue-500">Cloud24</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          We provide cutting-edge cloud infrastructure with speed, security, and flexibility at its core.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#11172a] border border-gray-800 rounded-2xl p-8 text-center hover:border-blue-500 transition"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-white text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
