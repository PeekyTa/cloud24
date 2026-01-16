"use client"

import { Server, Cloud, Database, Shield, Zap, Globe, ArrowRight, LucideIcon } from "lucide-react"
import Hero from "@/components/Hero"
import Section from "@/components/layout/Section"
import PageHeader from "@/components/layout/PageHeader"
import CTASection from "@/components/shared/CTASection"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  href: string
  color: string
}

const services: Service[] = [
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description: "Scalable cloud hosting solutions for websites and applications",
    features: ["SSD Storage", "99.9% Uptime", "Free SSL", "24/7 Support"],
    href: "/cloud-hosting",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: Server,
    title: "VPS Servers",
    description: "Virtual private servers with full root access and control",
    features: ["Custom Configurations", "Full Root Access", "Instant Deployment", "Scalable Resources"],
    href: "/vps-servers",
    color: "from-purple-600 to-pink-600",
  },
  {
    icon: Database,
    title: "Storage Solutions",
    description: "Secure and scalable cloud storage for your data",
    features: ["Object Storage", "Backup Solutions", "CDN Integration", "High Availability"],
    href: "/solutions",
    color: "from-green-600 to-emerald-600",
  },
  {
    icon: Shield,
    title: "Managed Services",
    description: "Fully managed infrastructure with expert support",
    features: ["Server Management", "Security Monitoring", "Automated Backups", "Performance Optimization"],
    href: "/solutions",
    color: "from-orange-600 to-red-600",
  },
  {
    icon: Zap,
    title: "DevOps & Automation",
    description: "Streamline your development workflow with CI/CD pipelines",
    features: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure as Code", "Monitoring & Logging"],
    href: "/solutions",
    color: "from-indigo-600 to-purple-600",
  },
  {
    icon: Globe,
    title: "Consulting Services",
    description: "Expert guidance for cloud migration and architecture",
    features: ["Cloud Strategy", "Migration Planning", "Architecture Design", "Performance Tuning"],
    href: "/Contact",
    color: "from-teal-600 to-cyan-600",
  },
]

export default function ServicesPageContent() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Complete Cloud Solutions"
        description="From hosting to managed services, we provide everything you need to succeed in the cloud."
        primaryCTA={{ text: "View Pricing", href: "/pricing" }}
        secondaryCTA={{ text: "Contact Us", href: "/Contact" }}
        className="pt-32"
      />

      <Section>
        <PageHeader
          title="Everything You Need"
          description="Comprehensive cloud services designed to meet all your infrastructure needs"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-blue-600 transition-all group">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full group-hover:border-blue-600 group-hover:text-blue-400"
                    asChild
                  >
                    <a className="flex items-center" href={service.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Ready to Get Started?"
        description="Choose the perfect service for your needs and deploy in minutes"
        primaryAction={{ text: "View Pricing", href: "/pricing" }}
        secondaryAction={{ text: "Contact Sales", href: "/Contact" }}
      />
    </>
  )
}

