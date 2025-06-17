"use client"

import React, { useEffect, useRef, useState } from "react"

export default function WhyMcodev() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast Development",
      description: "We leverage cutting-edge frameworks and methodologies to deliver projects 3x faster than traditional agencies.",
      metric: "3x Faster",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🤖",
      title: "AI-Powered Solutions",
      description: "Integrate machine learning and AI capabilities seamlessly into your applications for next-level user experiences.",
      metric: "AI-First",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "⚡",
      title: "Performance Obsessed",
      description: "Every line of code is optimized for speed, scalability, and efficiency. Your users will notice the difference.",
      metric: "99.9% Uptime",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security protocols and best practices ensure your data and applications are always protected.",
      metric: "Zero Breaches",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: "🌟",
      title: "Innovation First",
      description: "We don&apos;t just follow trends, we create them. Our team pioneers new technologies and approaches.",
      metric: "Industry Leading",
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: "🎯",
      title: "Results Driven",
      description: "Every project is measured against clear KPIs. We focus on delivering measurable business impact.",
      metric: "ROI Focused",
      gradient: "from-indigo-500 to-blue-500"
    }
  ]

  const stats = [
    { number: "200+", label: "Projects Delivered", suffix: "" },
    { number: "99.8", label: "Success Rate", suffix: "%" },
    { number: "24", label: "Hour Support", suffix: "/7" },
    { number: "50+", label: "Happy Clients", suffix: "" }
  ]

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm mb-6">
            <span className="text-emerald-400 text-sm font-medium">✨ Why Choose Us</span>
          </div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Why <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">MCODEV Bytes</span>?
          </h2>
          
          <p className={`text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            We&apos;re not just another development agency. We&apos;re your technology partners, 
            committed to transforming your vision into digital reality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-white/20">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Metric */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${feature.gradient} text-white`}>
                    {feature.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative p-8 lg:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8">
                Trusted by Industry Leaders
              </h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-emerald-400 mb-2">
                      {stat.number}
                      <span className="text-xl lg:text-2xl">{stat.suffix}</span>
                    </div>
                    <div className="text-gray-300 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => window.open('https://wa.me/919847274569?text=Hi! I am ready to get started with my project.', '_blank')}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <span className="relative">Ready to Get Started?</span>
              <svg className="relative ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-400 bg-white/5 border border-emerald-500/30 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              <span>View Case Studies</span>
              <svg className="ml-2 w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-emerald-400/30 rotate-45 animate-bounce" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-purple-400/30 rotate-12 animate-bounce" />
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-pink-400/30 rounded-full animate-pulse" />
    </section>
  )
} 