"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/mcodev-bytes",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      gradient: "from-blue-600 to-blue-700"
    },
    {
      name: "X",
      href: "https://x.com/MCODEVBYTES",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      gradient: "from-gray-800 to-black"
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/mcodevbytes",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      gradient: "from-blue-600 to-blue-800"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mcodev_bytes/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.059 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      gradient: "from-pink-500 to-purple-600"
    }
  ]

  const footerSections = [
    {
      title: "Services",
      icon: "⚡",
      links: [
        { name: "Web Development", href: "#services" },
        { name: "App Development", href: "#services" },
        { name: "AI Business Automation", href: "#services" },
        { name: "Digital Marketing", href: "#services" },
        { name: "Branding", href: "#services" },
        { name: "E-commerce Solution", href: "#services" },
        { name: "ERP Cloud Solution", href: "#services" },
        { name: "SEO", href: "#services" }
      ]
    },
    {
      title: "Company",
      icon: "🏢",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/about" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#contact" },
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#projects" }
      ]
    },
    {
      title: "Resources",
      icon: "📚",
      links: [
        { name: "Documentation", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Support Center", href: "#contact" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" }
      ]
    }
  ]

  const quickStats = [
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99.8%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Logo and Brand */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Image
                      src="/logo.png"
                      alt="MCODEV Logo"
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
                      MCODEV
                    </h3>
                    <span className="block text-emerald-400 font-light -mt-1">Bytes</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg">
                  Transforming ideas into digital reality with cutting-edge technology solutions. 
                  We build the future, one line of code at a time.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`group relative w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110`}
                      aria-label={social.name}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300`} />
                      <span className="relative text-gray-300 group-hover:text-white transition-colors duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">{section.icon}</span>
                  <h4 className="text-lg lg:text-xl font-bold text-white">{section.title}</h4>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-gray-300 hover:text-emerald-400 transition-all duration-300 text-sm lg:text-base"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 py-12">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="space-y-4">
              <h4 className="text-2xl lg:text-3xl font-bold text-white">Stay Updated</h4>
              <p className="text-gray-300 text-lg">
                Subscribe to our newsletter for the latest tech insights, project updates, and industry trends.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:border-emerald-400 focus:bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <button className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-semibold text-white shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-0.5">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <span className="relative flex items-center space-x-2">
                  <span>Subscribe</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 text-sm">
              <p>© {currentYear} MCODEV Bytes. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <Link href="#" className="hover:text-emerald-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <Link href="#" className="hover:text-emerald-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <span className="w-1 h-1 bg-gray-600 rounded-full" />
                <Link href="#" className="hover:text-emerald-400 transition-colors duration-300">
                  Cookies
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
              <span>by MCODEV Team</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-400/20 rotate-45 animate-bounce" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-purple-400/20 rotate-12 animate-bounce" />
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-pink-400/20 rounded-full animate-pulse" />
    </footer>
  )
} 