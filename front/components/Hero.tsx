"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  badge?: string
  className?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  className = "",
}: HeroProps) {
  return (
    <section className={`relative flex flex-col items-center justify-center min-h-[80vh] px-6 text-center ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm rounded-full bg-blue-900/30 border border-blue-700 text-blue-300"
        >
          {badge}
        </motion.div>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-6"
      >
        {title}
      </motion.h1>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl text-gray-400 text-base sm:text-lg mb-10"
        >
          {description}
        </motion.p>
      )}

      {(primaryCTA || secondaryCTA) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {primaryCTA && (
            <Button
              asChild
              variant="gradient"
              size="lg"
              className="group"
            >
              <a href={primaryCTA.href} className="flex items-center">
                {primaryCTA.text}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          )}
          {secondaryCTA && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-800 hover:bg-gray-800"
            >
              <a href={secondaryCTA.href}>{secondaryCTA.text}</a>
            </Button>
          )}
        </motion.div>
      )}
    </section>
  )
}


