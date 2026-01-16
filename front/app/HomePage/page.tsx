"use client"

import PageLayout from "@/components/layout/PageLayout"
import HomePageContent from "@/components/home/HomePageContent"

export default function HomePage() {
  return (
    <PageLayout showBackground={true}>
      <HomePageContent />
    </PageLayout>
  )
}
