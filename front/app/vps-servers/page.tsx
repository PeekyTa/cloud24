"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/footer"
import Hero from "@/components/Hero"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Check, Server, Cpu, HardDrive, MemoryStick, Globe } from "lucide-react"
import { motion } from "framer-motion"
import InteractiveBg from "@/components/InteractiveBg"

const osOptions = [
  { id: "ubuntu", name: "Ubuntu 22.04 LTS", icon: "🐧" },
  { id: "debian", name: "Debian 12", icon: "🐧" },
  { id: "centos", name: "CentOS Stream", icon: "🐧" },
  { id: "windows", name: "Windows Server 2022", icon: "🪟" },
]

const deploymentSteps = [
  {
    step: 1,
    title: "Choose Configuration",
    description: "Select your CPU, RAM, and storage requirements",
  },
  {
    step: 2,
    title: "Select Operating System",
    description: "Choose from Linux or Windows distributions",
  },
  {
    step: 3,
    title: "Review & Deploy",
    description: "Review your configuration and deploy in minutes",
  },
  {
    step: 4,
    title: "Access Your Server",
    description: "Get instant access via SSH or RDP",
  },
]

export default function VPSServersPage() {
  const [cpu, setCpu] = useState([2])
  const [ram, setRam] = useState([4])
  const [storage, setStorage] = useState([50])

  // Calculate price based on configuration
  const basePrice = 20
  const cpuPrice = cpu[0] * 10
  const ramPrice = ram[0] * 5
  const storagePrice = storage[0] * 0.5
  const totalPrice = basePrice + cpuPrice + ramPrice + storagePrice

  const [selectedOS, setSelectedOS] = useState("ubuntu")

  return (
    <div className="relative min-h-screen overflow-hidden">
      <InteractiveBg />
      <Navbar />

      <Hero
        title="Virtual Private Servers"
        subtitle="Full Control & Flexibility"
        description="Deploy powerful VPS instances with complete root access. Scale resources on-demand and pay only for what you use."
        primaryCTA={{ text: "Deploy Now", href: "#configurator" }}
        secondaryCTA={{ text: "View Pricing", href: "/pricing" }}
        className="pt-32"
      />

      {/* Configurator Section */}
      <section id="configurator" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Configure Your VPS
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Customize your server resources and see real-time pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Configuration Panel */}
            <Card>
              <CardHeader>
                <CardTitle>Server Configuration</CardTitle>
                <CardDescription>Adjust sliders to configure your VPS</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* CPU Slider */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-blue-400" />
                      <span className="text-white font-medium">CPU Cores</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-400">{cpu[0]}</span>
                  </div>
                  <Slider
                    value={cpu}
                    onValueChange={setCpu}
                    min={1}
                    max={16}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>1 Core</span>
                    <span>16 Cores</span>
                  </div>
                </div>

                {/* RAM Slider */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <MemoryStick className="h-5 w-5 text-blue-400" />
                      <span className="text-white font-medium">RAM</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-400">{ram[0]} GB</span>
                  </div>
                  <Slider
                    value={ram}
                    onValueChange={setRam}
                    min={2}
                    max={64}
                    step={2}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>2 GB</span>
                    <span>64 GB</span>
                  </div>
                </div>

                {/* Storage Slider */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <HardDrive className="h-5 w-5 text-blue-400" />
                      <span className="text-white font-medium">Storage</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-400">{storage[0]} GB</span>
                  </div>
                  <Slider
                    value={storage}
                    onValueChange={setStorage}
                    min={20}
                    max={1000}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>20 GB</span>
                    <span>1000 GB</span>
                  </div>
                </div>

                {/* OS Selection */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="h-5 w-5 text-blue-400" />
                    <span className="text-white font-medium">Operating System</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {osOptions.map((os) => (
                      <button
                        key={os.id}
                        onClick={() => setSelectedOS(os.id)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          selectedOS === os.id
                            ? "border-blue-600 bg-blue-600/20"
                            : "border-gray-800 hover:border-gray-700"
                        }`}
                      >
                        <div className="text-2xl mb-1">{os.icon}</div>
                        <div className="text-sm text-white font-medium">{os.name}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Price Summary */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Price Summary</CardTitle>
                <CardDescription>Your monthly cost breakdown</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-400">
                    <span>Base Price</span>
                    <span>${basePrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>CPU ({cpu[0]} cores)</span>
                    <span>${cpuPrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>RAM ({ram[0]} GB)</span>
                    <span>${ramPrice}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Storage ({storage[0]} GB)</span>
                    <span>${storagePrice.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-800 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-white">Total</span>
                      <span className="text-3xl font-bold text-blue-400">${totalPrice.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">per month</p>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <Check className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>99.99% Uptime SLA</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <Check className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>24/7 Support Included</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <Check className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Instant Deployment</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-400">
                    <Check className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Full Root Access</span>
                  </div>
                </div>

                <Button variant="gradient" size="lg" className="w-full mt-6" asChild>
                  <a href="/pricing">Deploy Server</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deployment Steps */}
      <section className="py-24 px-6 relative z-10 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple Deployment Process
            </h2>
            <p className="text-gray-400">
              Get your VPS up and running in minutes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deploymentSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our VPS?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade infrastructure with flexible pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                title: "High Performance",
                description: "NVMe SSD storage and latest generation CPUs for maximum performance",
              },
              {
                icon: Zap,
                title: "Instant Scaling",
                description: "Scale your resources up or down instantly without downtime",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "DDoS protection, firewall, and regular security updates included",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


