"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
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

  const services = [
    {
      slug: "web-development",
      icon: "🌐",
      title: "Web Development",
      description: "Cutting-edge web applications built with React, Next.js, and modern frameworks for exceptional performance and user experience.",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "Performance Optimized"],
      gradient: "from-blue-500 to-cyan-500",
      delay: "0ms"
    },
    {
      slug: "app-development",
      icon: "📱",
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android platforms.",
      features: ["React Native", "Flutter", "Native iOS/Android", "Cross-Platform"],
      gradient: "from-purple-500 to-pink-500",
      delay: "100ms"
    },
    {
      slug: "ai-business-automation",
      icon: "🤖",
      title: "AI Business Automation",
      description: "Intelligent automation solutions powered by machine learning and AI to streamline your business processes and boost efficiency.",
      features: ["Process Automation", "ML Integration", "AI Chatbots", "Data Analytics"],
      gradient: "from-emerald-500 to-green-500",
      delay: "200ms"
    },
    {
      slug: "digital-marketing",
      icon: "📈",
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies that amplify your brand presence and drive meaningful customer engagement.",
      features: ["Social Media", "Content Strategy", "PPC Campaigns", "Analytics"],
      gradient: "from-orange-500 to-red-500",
      delay: "300ms"
    },
    {
      slug: "branding",
      icon: "🎨",
      title: "Branding",
      description: "Comprehensive brand identity solutions that capture your essence and resonate with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      gradient: "from-pink-500 to-purple-500",
      delay: "400ms"
    },
    {
      slug: "ecommerce-solution",
      icon: "🛒",
      title: "E-commerce Solution",
      description: "Robust e-commerce platforms with advanced features for seamless online shopping experiences and business growth.",
      features: ["Shopify/WooCommerce", "Payment Integration", "Inventory Management", "Analytics"],
      gradient: "from-indigo-500 to-blue-500",
      delay: "500ms"
    },
    {
      slug: "erp-cloud-solution",
      icon: "☁️",
      title: "ERP Cloud Solution",
      description: "Enterprise resource planning solutions in the cloud for streamlined operations and real-time business insights.",
      features: ["Cloud Infrastructure", "System Integration", "Real-time Analytics", "Scalable Architecture"],
      gradient: "from-teal-500 to-emerald-500",
      delay: "600ms"
    },
    {
      slug: "seo",
      icon: "🔍",
      title: "SEO",
      description: "Advanced search engine optimization strategies to boost your online visibility and drive organic traffic growth.",
      features: ["Technical SEO", "Content Optimization", "Link Building", "Performance Monitoring"],
      gradient: "from-yellow-500 to-orange-500",
      delay: "700ms"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [services.length])

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm mb-6">
            <span className="text-emerald-400 text-sm font-medium">💼 Our Expertise</span>
          </div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          
          <p className={`text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Comprehensive digital solutions designed to transform your business 
            and accelerate your growth in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: service.delay }}
            >
              {/* Card */}
              <div className={`relative h-full p-6 lg:p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-white/20 ${
                activeIndex === index ? 'ring-2 ring-emerald-400/50' : ''
              }`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm lg:text-base">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs lg:text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Link
                    href={`/services/${service.slug}`}
                    className={`block w-full py-2.5 px-4 rounded-xl text-center text-sm font-semibold bg-gradient-to-r ${service.gradient} text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300 hover:scale-105`}
                  >
                    Learn More
                  </Link>
                </div>

                {/* Floating indicator */}
                {activeIndex === index && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Service Showcase */}
        <div className={`transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative p-8 lg:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl" />
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Let&apos;s discuss how our services can help you achieve your digital goals 
                and drive unprecedented growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('https://wa.me/919847274569?text=Hi! I would like to get a free consultation for my project.', '_blank')}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <span className="relative">Get Free Consultation</span>
                  <svg className="relative ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-400 bg-white/5 border border-emerald-500/30 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <span>View All Services</span>
                  <svg className="ml-2 w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-32 left-10 w-4 h-4 bg-blue-400/30 rotate-45 animate-bounce" />
      <div className="absolute top-52 right-20 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-20 w-5 h-5 bg-emerald-400/30 rotate-12 animate-bounce" />
      <div className="absolute bottom-52 right-10 w-3 h-3 bg-pink-400/30 rounded-full animate-pulse" />
    </section>
  )
} 