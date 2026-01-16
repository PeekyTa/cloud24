"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Section from "@/components/layout/Section"
import PageHeader from "@/components/layout/PageHeader"

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineSectionProps {
  timeline: TimelineItem[]
}

export default function TimelineSection({ timeline }: TimelineSectionProps) {
  return (
    <Section variant="secondary" containerClassName="max-w-5xl">
      <PageHeader
        title="Our Journey"
        description="Milestones in our growth story"
        className="mb-16"
      />

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600" />

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-24"
            >
              <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-gray-900" />

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-2xl font-bold text-blue-400">{item.year}</span>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

