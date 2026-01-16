"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Section from "@/components/layout/Section"
import PageHeader from "@/components/layout/PageHeader"

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
}

interface TeamSectionProps {
  team: TeamMember[]
}

export default function TeamSection({ team }: TeamSectionProps) {
  return (
    <Section>
      <PageHeader
        title="Meet Our Team"
        description="The experts behind Cloud 24"
        className="mb-16"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full text-center hover:border-blue-600 transition-all">
              <CardHeader>
                <div className="text-6xl mb-4">{member.image}</div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-blue-400 font-semibold">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">{member.bio}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

