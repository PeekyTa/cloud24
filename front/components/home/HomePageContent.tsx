"use client"

import Features from "@/components/features"
import Pricing from "@/components/pricing"
import Stats from "@/components/stats"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/Newspaper"
import HeroSection from "@/components/home/HeroSection"

export default function HomePageContent() {
  return (
    <>
      <HeroSection />
      <Features />
      <Pricing />
      <Stats />
      <Testimonials />
      <Newsletter />
    </>
  )
}

