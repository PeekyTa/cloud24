"use client"

import { Target, Users, Award } from "lucide-react"
import Hero from "@/components/Hero"
import ValuesSection from "@/components/about/ValuesSection"
import TimelineSection from "@/components/about/TimelineSection"
import TeamSection from "@/components/about/TeamSection"
import AboutCTA from "@/components/about/AboutCTA"
import Stats from "@/components/stats"

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses with reliable, scalable cloud infrastructure that drives innovation and growth.",
  },
  {
    icon: Users,
    title: "Vision",
    description: "To be the leading cloud services provider, recognized for excellence in performance, security, and customer support.",
  },
  {
    icon: Award,
    title: "Values",
    description: "We are committed to transparency, reliability, and putting our customers' success at the heart of everything we do.",
  },
]

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "👨‍💼",
    bio: "15+ years in cloud infrastructure",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "👩‍💻",
    bio: "Expert in distributed systems",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Operations",
    image: "👨‍🔧",
    bio: "Infrastructure and DevOps specialist",
  },
  {
    name: "Emily Davis",
    role: "Head of Support",
    image: "👩‍💼",
    bio: "Customer success advocate",
  },
]

const timeline = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Started with a vision to make cloud infrastructure accessible to everyone",
  },
  {
    year: "2021",
    title: "First Data Center",
    description: "Launched our first data center with 99.9% uptime guarantee",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded to multiple regions across North America, Europe, and Asia",
  },
  {
    year: "2023",
    title: "Enterprise Solutions",
    description: "Launched enterprise-grade solutions with dedicated support",
  },
  {
    year: "2024",
    title: "AI & Automation",
    description: "Introduced AI-powered monitoring and automated scaling",
  },
]

export default function AboutPageContent() {
  return (
    <>
      <Hero
        title="About Cloud 24"
        subtitle="Our Story"
        description="We're on a mission to provide world-class cloud infrastructure that helps businesses scale and succeed."
        primaryCTA={{ text: "Get Started", href: "/pricing" }}
        secondaryCTA={{ text: "Contact Us", href: "/Contact" }}
        className="pt-32"
      />

      <ValuesSection values={values} />
      <TimelineSection timeline={timeline} />
      <TeamSection team={team} />
      <Stats />
      <AboutCTA />
    </>
  )
}

