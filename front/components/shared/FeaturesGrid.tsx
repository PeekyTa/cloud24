"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import Section from "@/components/layout/Section"
import PageHeader from "@/components/layout/PageHeader"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeaturesGridProps {
  title: string
  description?: string
  features: Feature[]
  columns?: 2 | 3
}

export default function FeaturesGrid({
  title,
  description,
  features,
  columns = 3,
}: FeaturesGridProps) {
  const gridCols = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"

  return (
    <Section>
      <PageHeader title={title} description={description} className="mb-16" />

      <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:border-blue-600 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

