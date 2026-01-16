"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && checked) {
      setSubmitted(true);
      setEmail("");
      setChecked(false);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="relative py-4 px-6 overflow-hidden rounded-2xl my-16 mx-auto max-w-5xl">
      <div className="relative z-10 text-center max-w-auto mx-auto backdrop-blur-sm bg-white/5 p-10 rounded-2xl border border-white/10 shadow-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-100 mb-4"
        >
          Start Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
            Free Cloud Trial
          </span>
        </motion.h2>

        <p className="text-gray-400 mb-10 leading-relaxed">
          Experience our next-generation cloud platform — secure, scalable, and built
          to elevate your business into the future.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Your business email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-80 px-4 py-3 rounded-lg text-gray-100 bg-[#0f1628]/80 border border-gray-600/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
          >
            Start Free Trial
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="h-4 w-4 accent-blue-600"
          />
          <label>
            By signing up, you agree to our{" "}
            <a href="#" className="underline text-blue-400 hover:text-blue-300">
              Terms & Conditions
            </a>.
          </label>
        </div>

        <AnimatePresence>
          {submitted && (
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-green-400 font-medium mt-6"
            >
              ✅ Thank you! Your free trial has started.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Newsletter;
