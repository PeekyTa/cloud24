"use client"

import { useState, FormEvent } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateForm = (formData: ContactFormData): FormErrors => {
  const errors: FormErrors = {}

  if (!formData.name.trim()) {
    errors.name = "Name is required"
  } else if (formData.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters"
  }

  if (!formData.email.trim()) {
    errors.email = "Email is required"
  } else if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address"
  }

  if (formData.subject.trim().length > 0 && formData.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters"
  }

  if (!formData.message.trim()) {
    errors.message = "Message is required"
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters"
  }

  return errors
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = validateForm(formData)
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // Here you would typically call your API:
      // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setErrors({})

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Your Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name <span className="text-red-400">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  error={errors.name}
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address <span className="text-red-400">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  error={errors.email}
                  aria-required="true"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help?"
                error={errors.subject}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Comments / Questions <span className="text-red-400">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                required
                error={errors.message}
                aria-required="true"
              />
            </div>

            <AnimatePresence mode="wait">
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-green-900/20 border border-green-700/50 text-green-400"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="text-sm font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 p-4 rounded-lg bg-red-900/20 border border-red-700/50 text-red-400"
                  role="alert"
                  aria-live="assertive"
                >
                  <AlertCircle className="h-5 w-5" />
                  <p className="text-sm font-medium">
                    Something went wrong. Please try again later.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}

