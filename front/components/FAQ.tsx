"use client";

import { useState } from "react";
import Hero from "@/components/Hero"
import Section from "@/components/layout/Section"
import PageHeader from "@/components/layout/PageHeader"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQ {
  q: string
  a: string
}

const faqs : FAQ[] = [
  {
    q: "What is cloud hosting?",
    a: "Cloud hosting uses multiple servers working together to host your website, providing better reliability, scalability, and performance compared to traditional hosting.",
  },
  {
    q: "Can I upgrade my plan later?",
    a: "Yes, you can upgrade your hosting plan at any time. Your data will be migrated seamlessly, and you'll only pay the prorated difference.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, we'll refund your payment in full.",
  },
  {
    q: "What kind of support do you provide?",
    a: "We provide 24/7 support via email, live chat, and phone. Business and Enterprise plans include priority support with faster response times.",
  },
  {
    q: "Can I host multiple websites?",
    a: "Yes, Business and Enterprise plans allow unlimited websites. The Starter plan includes one website, but you can add more for a small fee.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <Section variant="secondary" containerClassName="max-w-3xl">
        <PageHeader
          title="Frequently Asked Questions"
          description="Everything you need to know about our cloud hosting"
          className="mb-16"
        />

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
  );
}