"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  variant?: "default" | "secondary"
}

export default function Section({
  children,
  className,
  containerClassName,
  variant = "default",
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-24 px-6 relative z-10",
        variant === "secondary" && "bg-gray-900/30",
        className
      )}
    >
      <div className={cn("max-w-7xl mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  )
}

