"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import Section from "@/components/layout/Section"
import PageHeader from "@/components/layout/PageHeader"

interface Value {
  icon: LucideIcon
  title: string
  description: string
}

interface ValuesSectionProps {
  values: Value[]
}

export default function ValuesSection({ values }: ValuesSectionProps) {
  return (
    <Section>
      <PageHeader
        title="Who We Are"
        description="Driven by innovation and committed to your success"
        className="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{value.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

