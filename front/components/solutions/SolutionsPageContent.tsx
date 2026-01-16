"use client"

import { Building2, Rocket, Users } from "lucide-react"
import Hero from "@/components/Hero"
import Section from "@/components/layout/Section"
import PageHeader from "@/components/layout/PageHeader"
import CTASection from "@/components/shared/CTASection"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface Solution {
  type: string
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  cta: string
  color: string
}

interface UseCase {
  title: string
  description: string
  icon: string
}

const solutions: Solution[] = [
  {
    type: "startups",
    icon: Rocket,
    title: "For Startups",
    description: "Launch fast with scalable infrastructure that grows with you",
    features: [
      "Cost-effective cloud hosting",
      "Easy scaling as you grow",
      "Developer-friendly tools",
      "24/7 support",
      "Free SSL & CDN",
    ],
    cta: "Start Your Journey",
    color: "from-blue-600 to-cyan-600",
  },
  {
    type: "smes",
    icon: Building2,
    title: "For SMEs",
    description: "Enterprise-grade solutions for growing businesses",
    features: [
      "Managed cloud services",
      "Advanced security features",
      "Dedicated support team",
      "Automated backups",
      "Performance monitoring",
    ],
    cta: "Scale Your Business",
    color: "from-purple-600 to-pink-600",
  },
  {
    type: "enterprises",
    icon: Users,
    title: "For Enterprises",
    description: "Custom solutions for large-scale operations",
    features: [
      "Custom infrastructure",
      "Dedicated account manager",
      "SLA guarantees",
      "Multi-region deployment",
      "Compliance & security",
    ],
    cta: "Contact Sales",
    color: "from-orange-600 to-red-600",
  },
]

const useCases: UseCase[] = [
  {
    title: "Web Hosting",
    description: "Host websites, web applications, and APIs with high availability",
    icon: "🌐",
  },
  {
    title: "Application Development",
    description: "Build and deploy modern applications with CI/CD pipelines",
    icon: "💻",
  },
  {
    title: "Data Storage",
    description: "Secure, scalable storage solutions for your data",
    icon: "💾",
  },
  {
    title: "DevOps & Automation",
    description: "Streamline your development workflow with automation tools",
    icon: "⚙️",
  },
  {
    title: "Disaster Recovery",
    description: "Protect your business with automated backup and recovery",
    icon: "🛡️",
  },
  {
    title: "Content Delivery",
    description: "Deliver content globally with our CDN network",
    icon: "🚀",
  },
]

export default function SolutionsPageContent() {
  return (
    <>
      <Hero
        title="Solutions for Every Business"
        subtitle="Tailored Cloud Services"
        description="From startups to enterprises, we provide the right cloud infrastructure for your needs."
        primaryCTA={{ text: "Get Started", href: "/pricing" }}
        secondaryCTA={{ text: "Contact Sales", href: "/Contact" }}
        className="pt-32"
      />

      <Section>
        <PageHeader
          title="Solutions for Your Business"
          description="Choose the perfect cloud solution based on your business size and needs"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-blue-600 transition-all group">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:border-blue-600 group-hover:text-blue-400"
                    asChild
                  >
                    <a href="/Contact">
                      {solution.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section variant="secondary">
        <PageHeader
          title="Use Cases"
          description="Discover how businesses use our cloud services"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-blue-600 transition-all">
                <CardHeader>
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <CardTitle>{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to Get Started?"
        description="Join thousands of businesses that trust Cloud 24 for their cloud infrastructure needs"
        primaryAction={{ text: "View Pricing", href: "/pricing" }}
        secondaryAction={{ text: "Contact Sales", href: "/Contact" }}
      />
    </>
  )
}

