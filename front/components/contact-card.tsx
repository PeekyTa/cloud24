"use client"

import { Mail, Phone, MapPin, LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export interface ContactCardProps {
  icon: "mail" | "phone" | "map-pin"
  title: string
  description: string
  link: string
  linkText: string
  delay?: number
}

const iconMap: Record<"mail" | "phone" | "map-pin", LucideIcon> = {
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
}

export default function ContactCard({
  icon,
  title,
  description,
  link,
  linkText,
  delay = 0,
}: ContactCardProps) {
  const IconComponent = iconMap[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full transition-all hover:border-blue-600">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 flex-shrink-0">
              <IconComponent size={22} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-white mb-1">{title}</h3>
              <p className="text-gray-400 text-sm mb-3">{description}</p>
              <a
                href={link}
                className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors inline-flex items-center"
                aria-label={`${title}: ${linkText}`}
              >
                {linkText}
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

