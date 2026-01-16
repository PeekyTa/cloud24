"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-[#010A20] to-[#001436] text-white overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-[140%] rounded-full bg-gradient-to-t from-blue-800/60 to-transparent blur-3xl opacity-70" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-6"
      >
        <h2 className="text-5xl sm:text-6xl font-bold mb-4">404</h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          We can’t find the page that you’re looking for :(
        </p>

        <Link
          href="/"
          className="px-6 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
        >
          Back to Homepage
        </Link>
      </motion.div>

    </div>
  );
}
