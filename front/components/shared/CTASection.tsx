"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Section from "@/components/layout/Section"

interface CTASectionProps {
  title: string
  description: string
  primaryAction: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
}

export default function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
}: CTASectionProps) {
  return (
    <Section containerClassName="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-600">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl text-white mb-4">
              {title}
            </CardTitle>
            <CardDescription className="text-lg text-gray-300">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <a href={primaryAction.href}>{primaryAction.text}</a>
            </Button>
            {secondaryAction && (
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
                <a href={secondaryAction.href}>{secondaryAction.text}</a>
              </Button>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  )
}

