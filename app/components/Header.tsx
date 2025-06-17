"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking on nav items
  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/services", label: "Services", icon: "⚡" },
    { href: "/about", label: "About", icon: "👥" },
    { href: "/contact", label: "Contact", icon: "📞" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-slate-900/90 backdrop-blur-xl border-b border-emerald-500/20 shadow-2xl shadow-emerald-500/10" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group">
            <Link 
              href="#home" 
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
              onClick={handleNavClick}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="MCODEV Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
                  MCODEV
                </span>
                <span className="block text-xs text-emerald-400 font-light -mt-1">Bytes</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-4 py-3 text-gray-300 hover:text-white rounded-xl transition-all duration-300 font-medium text-sm xl:text-base"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => window.open('https://wa.me/919847274569?text=Hi! I would like to get started with a project.', '_blank')}
              className="group relative inline-flex items-center justify-center px-6 py-3 text-sm xl:text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <span className="relative flex items-center space-x-2">
                <span>Get Started</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="relative p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span 
                  className={`w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span 
                  className={`w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span 
                  className={`w-6 h-0.5 bg-emerald-400 transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen 
            ? "max-h-screen opacity-100" 
            : "max-h-0 opacity-0"
        }`}>
          <div className="py-6 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-emerald-500/10 mt-4">
            <div className="flex flex-col space-y-2 px-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300 font-medium"
                  onClick={handleNavClick}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                  <span>{item.label}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 px-4">
                <button
                  onClick={() => {
                    window.open('https://wa.me/919847274569?text=Hi! I would like to get started with a project.', '_blank')
                    handleNavClick()
                  }}
                  className="group relative flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <span className="relative flex items-center space-x-2">
                    <span>Get Started</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Background blur effect */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-emerald-900/50 backdrop-blur-xl -z-10" />
      )}
    </header>
  )
} 