"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"



export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])



  const milestones = [
    { year: "2023", title: "Company Founded", description: "MCODEV Bytes was established in Malappuram, Kerala" },
    { year: "2023", title: "First 50 Projects", description: "Successfully delivered 50+ projects across various industries" },
    { year: "2024", title: "AI Integration", description: "Pioneered AI-driven development solutions for businesses" },
    { year: "2024", title: "200+ Projects", description: "Reached milestone of 200+ successful project deliveries" }
  ]

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "We embrace cutting-edge technologies and innovative solutions to stay ahead of the curve."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We believe in working closely with our clients as true co-developers in their success journey."
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "We maintain the highest standards of quality in every project we undertake."
    },
    {
      icon: "🎯",
      title: "Results",
      description: "We focus on delivering measurable results that drive real business growth and success."
    }
  ]

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99.8%", label: "Success Rate" },
    { number: "2+", label: "Years Experience" }
  ]

  return (
    <>
      <Head>
        <title>About MCODEV Bytes - Leading Web Development Company in Kerala</title>
        <meta name="description" content="Learn about MCODEV Bytes, a premier web development company in Kerala. Discover our mission, vision, values, and journey in delivering cutting-edge digital solutions." />
        <meta name="keywords" content="about mcodev, web development company kerala, software development team, digital agency malappuram" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
          {isClient && (
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,197,94,0.15) 0%, transparent 50%)`
              }}
            />
          )}
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => {
              const seed = i * 137.508;
              const left = ((seed % 97) + 3);
              const top = ((seed * 1.3) % 97) + 3;
              const delay = (seed % 5000) / 1000;
              const duration = 3 + ((seed % 4000) / 1000);
              
              return (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-float"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <span className="text-emerald-400 text-sm font-medium">👥 About MCODEV Bytes</span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight">
                <span className="block bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                  Building the Future
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-300 mt-4">
                  Together
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                We are MCODEV Bytes - an innovative IT company from Kerala, specializing in cutting-edge web development, 
                mobile applications, and AI-driven business automation solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-emerald-900/30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                <span className="text-emerald-400 text-sm font-medium">🎯 Our Mission</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Transforming Ideas into 
                <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                  Digital Reality
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                At MCODEV Bytes, we bridge the gap between imagination and implementation. We empower businesses 
                with cutting-edge technology solutions that drive growth, efficiency, and innovation in the digital age.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">Deliver scalable, high-performance solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">Integrate AI and modern technologies</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-300">Foster long-term partnerships with clients</p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-all duration-500">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                  <span className="text-blue-400 text-sm font-medium">🔮 Our Vision</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-white">
                  Leading the Digital 
                  <span className="block text-blue-400">Revolution</span>
                </h3>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  To be Kerala&apos;s premier technology partner, recognized globally for our innovative solutions 
                  and commitment to excellence. We envision a future where every business, regardless of size, 
                  has access to world-class digital solutions.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-blue-400">Global</div>
                    <div className="text-sm text-gray-400">Reach</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-blue-400">Innovation</div>
                    <div className="text-sm text-gray-400">First</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-slate-900/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <span className="text-emerald-400 text-sm font-medium">💎 Our Core Values</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              What Drives Us
              <span className="block text-emerald-400">Forward</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-center space-y-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Journey/Timeline Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-slate-900/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <span className="text-emerald-400 text-sm font-medium">📈 Our Journey</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Milestones &
              <span className="block text-emerald-400">Achievements</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-emerald-400">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-emerald-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Start Your 
              <span className="block text-emerald-400">Digital Journey?</span>
            </h2>
            
            <p className="text-xl text-gray-300">
                              Let&apos;s collaborate and bring your ideas to life with cutting-edge technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/919847274569?text=Hi! I would like to start a project with you.', '_blank')}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <span className="relative">Get Started</span>
                <svg className="relative ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-400 bg-white/5 border border-emerald-500/30 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <span>Contact Us</span>
                <svg className="ml-2 w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </>
  )
} 