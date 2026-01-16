"use client"

import ContactCard from "@/components/contact-card"

interface ContactInfo {
  icon: "mail" | "phone" | "map-pin"
  title: string
  description: string
  link: string
  linkText: string
  delay: number
}

interface ContactInfoSectionProps {
  contactInfo: ContactInfo[]
}

export default function ContactInfoSection({ contactInfo }: ContactInfoSectionProps) {
  return (
    <div className="space-y-6">
      {contactInfo.map((info, index) => (
        <ContactCard
          key={index}
          icon={info.icon}
          title={info.title}
          description={info.description}
          link={info.link}
          linkText={info.linkText}
          delay={info.delay}
        />
      ))}
    </div>
  )
}

