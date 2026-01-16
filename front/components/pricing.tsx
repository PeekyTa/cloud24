"use client";

import Section from "@/components/layout/Section"
import PageHeader from "@/components/layout/PageHeader"
import FeaturesGrid from "@/components/shared/FeaturesGrid"
import { Server, Zap, Shield, Globe, Database, LucideIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

interface Plan {
  name: string
  price: number
  description: string
  features: string[]
  popular: boolean
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for small websites and blogs",
    features: [
      "10 GB SSD Storage",
      "100 GB Bandwidth",
      "1 Website",
      "Free SSL Certificate",
      "24/7 Support",
      "99.9% Uptime",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: 79,
    description: "Ideal for growing businesses",
    features: [
      "50 GB SSD Storage",
      "500 GB Bandwidth",
      "Unlimited Websites",
      "Free SSL Certificate",
      "Priority Support",
      "99.99% Uptime",
      "Daily Backups",
      "CDN Included",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For high-traffic websites",
    features: [
      "200 GB SSD Storage",
      "Unlimited Bandwidth",
      "Unlimited Websites",
      "Free SSL Certificate",
      "24/7 Priority Support",
      "99.99% Uptime",
      "Daily Backups",
      "CDN Included",
      "Dedicated IP",
      "Advanced Security",
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <Section variant="secondary">
            <PageHeader
              title="Choose Your Plan"
              description="Flexible pricing plans designed to grow with your business"
              className="mb-16"
            />
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`relative h-full flex flex-col ${plan.popular ? "border-blue-600 border-2" : ""}`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-semibold rounded-full">
                        Most Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-white">${plan.price}</span>
                        <span className="text-gray-400">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button
                        variant={plan.popular ? "gradient" : "outline"}
                        className="w-full"
                        asChild
                      >
                        <a href="/pricing">Get Started</a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Section>
  );
}
