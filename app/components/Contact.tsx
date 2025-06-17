"use client"

import React, { useEffect, useRef, useState } from "react"

export default function Contact() {
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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919847274569?text=Hi! I would like to discuss a project with you.', '_blank')
  }

  const handleEmailClick = () => {
    window.open('mailto:hello@mcodev.com?subject=Project Inquiry&body=Hi! I would like to discuss a project with you.', '_blank')
  }

  const handlePhoneClick = () => {
    window.open('tel:+919847274569', '_blank')
  }

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      title: "WhatsApp",
      subtitle: "Instant messaging",
      value: "+91 984 727 4569",
      description: "Get instant responses and real-time project discussions. Our team is always ready to chat.",
      action: handleWhatsAppClick,
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      textColor: "text-green-400",
      borderColor: "border-green-500/20",
      delay: "0ms"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      subtitle: "Professional inquiry",
      value: "hello@mcodev.com",
      description: "Send detailed project requirements and get comprehensive proposals within 24 hours.",
      action: handleEmailClick,
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-400",
      borderColor: "border-blue-500/20",
      delay: "200ms"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone Call",
      subtitle: "Direct conversation",
      value: "+91 984 727 4569",
      description: "Schedule a call for in-depth discussions about your project requirements and goals.",
      action: handlePhoneClick,
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/20",
      delay: "400ms"
    }
  ]

  const businessFeatures = [
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 availability"
    },
    {
      icon: "⚡",
      title: "Quick Response",
      description: "Average response time under 2 hours"
    },
    {
      icon: "🔒",
      title: "Confidential",
      description: "All communications are secure and private"
    },
    {
      icon: "🎯",
      title: "Tailored Solutions",
      description: "Custom approaches for every unique project"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="contact" 
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
            <span className="text-emerald-400 text-sm font-medium">💬 Let&apos;s Connect</span>
          </div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Let&apos;s Build Something <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Amazing</span>
          </h2>
          
          <p className={`text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Ready to transform your vision into reality? Choose your preferred way to connect 
            and let&apos;s start building the future together.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: method.delay }}
            >
              <div 
                onClick={method.action}
                className={`relative h-full p-8 bg-white/5 backdrop-blur-xl border ${method.borderColor} rounded-3xl hover:bg-white/10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl shadow-lg cursor-pointer group-hover:border-white/20`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${method.bgColor} backdrop-blur-sm border ${method.borderColor} rounded-2xl flex items-center justify-center ${method.textColor} mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {method.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-sm text-gray-400 mb-3 uppercase tracking-wide">
                    {method.subtitle}
                  </p>
                  
                  {/* Value */}
                  <p className={`text-lg font-semibold ${method.textColor} mb-4`}>
                    {method.value}
                  </p>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm mb-6">
                    {method.description}
                  </p>
                  
                  {/* CTA */}
                  <div className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${method.gradient} text-white rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 font-semibold`}>
                    <span>Connect Now</span>
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Business Features */}
        <div className={`transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative p-8 lg:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
                Why Choose Our Communication
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {businessFeatures.map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative p-8 lg:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl" />
            
            <div className="relative z-10 space-y-6">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Join hundreds of satisfied clients who&apos;ve transformed their businesses with our solutions. 
                Let&apos;s make your vision a reality.
              </p>
              
              <button 
                onClick={handleWhatsAppClick}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <span className="relative flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Start Your Project Today</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-32 left-10 w-4 h-4 bg-emerald-400/30 rotate-45 animate-bounce" />
      <div className="absolute top-52 right-20 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-20 w-5 h-5 bg-purple-400/30 rotate-12 animate-bounce" />
      <div className="absolute bottom-52 right-10 w-3 h-3 bg-pink-400/30 rounded-full animate-pulse" />
    </section>
  )
} 