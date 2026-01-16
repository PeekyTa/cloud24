"use client"

import PageLayout from "@/components/layout/PageLayout"
import Hero from "@/components/Hero"
import Section from "@/components/layout/Section"
import Newsletter from "@/components/Newspaper"
import ContactInfoSection from "@/components/contact/ContactInfoSection"
import ContactForm from "@/components/contact-form"
import ContactMapSection from "@/components/contact/ContactMapSection"

const contactInfo = [
  {
    icon: "mail" as const,
    title: "Email Us",
    description: "Our support team is here to answer your questions.",
    link: "mailto:support@cloud24.com",
    linkText: "support@cloud24.com",
    delay: 0.1,
  },
  {
    icon: "phone" as const,
    title: "Call Us",
    description: "Reach us by phone during business hours.",
    link: "tel:+1234567890",
    linkText: "+1 234 567 890",
    delay: 0.2,
  },
  {
    icon: "map-pin" as const,
    title: "Visit Us",
    description: "We are located in the heart of Tunis.",
    link: "https://www.google.com/maps/place/ISAMM+Higher+Institute+of+Arts+and+Multimedia+Manouba/@36.8152938,10.0610715,17.38z/data=!4m6!3m5!1s0x12fd2d9783ace44f:0xde66d0d8c4b29aa6!8m2!3d36.8163495!4d10.0609607!16s%2Fg%2F120_rj5l?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
    linkText: "View on map",
    delay: 0.3,
  },
]

export default function ContactPage() {
  return (
    <PageLayout>
      <Hero
        title="Contact Us"
        subtitle="Get in Touch"
        description="We're here to help you scale your cloud infrastructure and services with ease."
        className="pt-32"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ContactInfoSection contactInfo={contactInfo} />
          <ContactForm />
        </div>
      </Section>

      <ContactMapSection />
      <Newsletter />
    </PageLayout>
  )
}
