"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  description?: string
  className?: string
}

export default function PageHeader({
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={className}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 max-w-2xl mx-auto text-center">
          {description}
        </p>
      )}
    </motion.div>
  )
}

