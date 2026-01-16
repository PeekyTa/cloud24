"use client"

import Hero from "@/components/Hero"
import Section from "@/components/layout/Section"
import PageHeader from "@/components/layout/PageHeader"
import FeaturesGrid from "@/components/shared/FeaturesGrid"
import { Server, Zap, Shield, Globe, Database, LucideIcon } from "lucide-react"
import Pricing from "../pricing"
import FAQSection from "../FAQ"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}


const features: Feature[] = [
  {
    icon: Server,
    title: "High Performance",
    description: "SSD storage and optimized servers for lightning-fast load times",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Get your website online in minutes with our automated setup process",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "DDoS protection, SSL certificates, and daily security scans included",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Content delivery network ensures fast loading worldwide",
  },
  {
    icon: Database,
    title: "Automated Backups",
    description: "Daily automated backups with 30-day retention period",
  },
]

export default function CloudHostingPageContent() {
  return (
    <>
      <Hero
        title="Cloud Hosting Solutions"
        subtitle="Reliable & Scalable"
        description="Deploy your websites on our high-performance cloud infrastructure. Fast, secure, and backed by 24/7 support."
        primaryCTA={{ text: "Get Started", href: "/pricing" }}
        secondaryCTA={{ text: "View Plans", href: "#pricing" }}
        className="pt-32"
      />

      <FeaturesGrid
        title="Everything You Need to Succeed"
        description="Our cloud hosting platform includes all the tools and features you need to run a successful website."
        features={features}
      />

      <Pricing/>

      <Section>
        <PageHeader
          title="Compare Plans"
          description="See how our plans stack up against each other"
          className="mb-16"
        />

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-4 px-6 text-gray-400 font-semibold">Feature</th>
                <th className="text-center py-4 px-6 text-white font-semibold">Starter</th>
                <th className="text-center py-4 px-6 text-white font-semibold">Business</th>
                <th className="text-center py-4 px-6 text-white font-semibold">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">Storage</td>
                <td className="py-4 px-6 text-center text-gray-400">10 GB</td>
                <td className="py-4 px-6 text-center text-gray-400">50 GB</td>
                <td className="py-4 px-6 text-center text-gray-400">200 GB</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">Bandwidth</td>
                <td className="py-4 px-6 text-center text-gray-400">100 GB</td>
                <td className="py-4 px-6 text-center text-gray-400">500 GB</td>
                <td className="py-4 px-6 text-center text-gray-400">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">Websites</td>
                <td className="py-4 px-6 text-center text-gray-400">1</td>
                <td className="py-4 px-6 text-center text-gray-400">Unlimited</td>
                <td className="py-4 px-6 text-center text-gray-400">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">SSL Certificate</td>
                <td className="py-4 px-6 text-center text-blue-400">✓</td>
                <td className="py-4 px-6 text-center text-blue-400">✓</td>
                <td className="py-4 px-6 text-center text-blue-400">✓</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">Daily Backups</td>
                <td className="py-4 px-6 text-center text-gray-400">—</td>
                <td className="py-4 px-6 text-center text-blue-400">✓</td>
                <td className="py-4 px-6 text-center text-blue-400">✓</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-4 px-6 text-gray-300">CDN</td>
                <td className="py-4 px-6 text-center text-gray-400">—</td>
                <td className="py-4 px-6 text-center text-blue-400">✓</td>
                <td className="py-4 px-6 text-center text-blue-400">✓</td>
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-300">Support</td>
                <td className="py-4 px-6 text-center text-gray-400">24/7</td>
                <td className="py-4 px-6 text-center text-gray-400">Priority</td>
                <td className="py-4 px-6 text-center text-gray-400">Priority</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <FAQSection/>
    </>
  )
}

