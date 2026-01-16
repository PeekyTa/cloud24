"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Section from "@/components/layout/Section"

export default function AboutCTA() {
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
              Join Us on Our Mission
            </CardTitle>
            <CardDescription className="text-lg text-gray-300">
              Experience the difference that world-class cloud infrastructure can make for your business
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg" asChild>
              <a href="/pricing" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
              <a href="/Contact" className="text-gray-800">Contact Us</a>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Section>
  )
}

