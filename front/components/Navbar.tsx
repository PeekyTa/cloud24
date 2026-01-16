'use client'

import { useState, useEffect } from 'react'
import Image from "next/image";
import Logo from "./logo.png";
import { MenuIcon, X, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/HomePage' },
  { name: 'Services', href: '/Services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/Contact' },
]

const serviceLinks = [
  { name: 'Cloud Hosting', href: '/cloud-hosting' },
  { name: 'VPS Servers', href: '/vps-servers' },
  { name: 'All Services', href: '/Services' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-md bg-[#0b0d17]/95 border-b border-gray-800 shadow-lg' 
        : 'backdrop-blur-sm bg-[#0b0d17]/50 border-b border-gray-800/50'
    }`}>
      <nav className="flex items-center justify-between px-6 lg:px-20" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/HomePage" className="flex items-center">
            <Image src={Logo} alt="Logo" width={80} height={80} />
          </a>
        </div>

        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {navigation.map((item) => {
            if (item.name === 'Services') {
              return (
                <div key={item.name} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </a>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[#0b0d17] border border-gray-800 rounded-lg shadow-xl py-2">
                      {serviceLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            }
            return (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            )
          })}
        </div>

        {/* Get started button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/auth"
            className="text-sm font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 shadow hover:from-blue-500 hover:to-blue-700 transition-all"
          >
            Get started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-0 bg-[#0b0d17] p-6 lg:hidden">
          <div className="flex items-center justify-between mb-8">
            <Image src={Logo} alt="Logo" width={40} height={40} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="space-y-4">
            {navigation.map((item) => {
              if (item.name === 'Services') {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between w-full text-lg font-medium text-gray-300 hover:text-white transition"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 mt-2 space-y-2">
                        {serviceLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            className="block text-base text-gray-400 hover:text-white transition"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-lg font-medium text-gray-300 hover:text-white transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            })}
            <a
              href="/auth"
              className="block mt-4 text-center text-white py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 shadow hover:from-blue-500 hover:to-blue-700 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get started
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
