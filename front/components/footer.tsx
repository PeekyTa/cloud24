"use client";

import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Logo from "./LogoCloud24.png";

export default function Footer() {
  return (
    <footer className="bg-[#0b0d17] text-gray-300 pt-16 pb-10 border-t border-gray-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[2px] bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 opacity-60 blur-sm" />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">
              Cloud Solutions
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#cloud-hosting" className="hover:text-blue-400 transition">Cloud Hosting</a></li>
              <li><a href="#vps" className="hover:text-blue-400 transition">VPS Servers</a></li>
              <li><a href="#storage" className="hover:text-blue-400 transition">Cloud Storage</a></li>
              <li><a href="#network" className="hover:text-blue-400 transition">CDN Services</a></li>
              <li><a href="#backup" className="hover:text-blue-400 transition">Backup & Recovery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">
              Managed IT Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#monitoring" className="hover:text-blue-400 transition">Server Monitoring</a></li>
              <li><a href="#security" className="hover:text-blue-400 transition">Security & Firewall</a></li>
              <li><a href="#devops" className="hover:text-blue-400 transition">DevOps & Automation</a></li>
              <li><a href="#migration" className="hover:text-blue-400 transition">Cloud Migration</a></li>
              <li><a href="#support" className="hover:text-blue-400 transition">24/7 Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#solutions" className="hover:text-blue-400 transition">Our Solutions</a></li>
              <li><a href="#partners" className="hover:text-blue-400 transition">Partners</a></li>
              <li><a href="#careers" className="hover:text-blue-400 transition">Careers</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Contact</h3>
            {/* <a href="/HomePage" className="block mb-4">
              <Image
                src={Logo}
                alt="Cloud 24 Logo"
                width={140}
                height={140}
                className="opacity-90 hover:opacity-100 transition"
              />
            </a> */}
            <ul className="space-y-2 text-sm">
              <li>
                <span className="block text-gray-400">
                  123 ISAMM, Manouba, Tunisia
                </span>
              </li>
              <li>
                <a href="tel:+21622999888" className="hover:text-blue-400 transition">
                  (+216) 22 999 888
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@cloud24services.com"
                  className="hover:text-blue-400 transition"
                >
                  support@cloud24services.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Cloud 24 Services. All rights reserved.
          </p>

          <div className="flex space-x-5 text-gray-400">
            <a href="#" className="hover:text-blue-400 transition" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" className="hover:text-blue-400 transition" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" className="hover:text-blue-400 transition" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="mailto:info@cloud24services.com" className="hover:text-blue-400 transition" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-blue-800/10 blur-3xl rounded-full" />
    </footer>
  );
}
