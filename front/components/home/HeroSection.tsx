"use client"

import { motion } from "framer-motion"
import VideoBg from "@/components/VideoBg"

export default function HeroSection() {
  return (
    <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-6 text-center">
      <div className="absolute inset-0 -z-10">
        <VideoBg />
      </div>

      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-blue-900/30 border border-blue-700 text-blue-300"
      >
        🚀 New feature <span className="text-white font-semibold">Check out the dashboard</span>
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight"
      >
        High-performing cloud solutions <br />
        The future of business.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 max-w-xl text-gray-400 text-base sm:text-lg"
      >
        Empower your company with next-generation hosting, storage, and security. Scalable. Reliable. Cloud 24.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold shadow hover:from-blue-500 hover:to-blue-700 transition-all"
        >
          Get started for free
        </a>
        <a
          href="#"
          className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition"
        >
          Watch Demo
        </a>
      </motion.div>
    </div>
  )
}

