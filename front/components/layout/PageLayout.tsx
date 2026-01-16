"use client"

import { ReactNode } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import InteractiveBg from "@/components/InteractiveBg"

interface PageLayoutProps {
  children: ReactNode
  showBackground?: boolean
}

export default function PageLayout({ 
  children, 
  showBackground = true 
}: PageLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {showBackground && <InteractiveBg />}
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

