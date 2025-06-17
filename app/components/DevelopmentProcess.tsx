"use client"

import React, { useEffect, useRef, useState } from "react"

export default function DevelopmentProcess() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We dive deep into understanding your business needs, target audience, and project goals to create a comprehensive roadmap for success.",
      icon: "🔍",
      features: ["Requirements Analysis", "Market Research", "Technology Stack Selection", "Project Timeline"],
      gradient: "from-blue-500 to-cyan-500",
      delay: "0ms"
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Our design team creates stunning visual concepts and interactive prototypes that bring your vision to life with precision.",
      icon: "🎨",
      features: ["UI/UX Design", "Wireframing", "Interactive Prototypes", "Design System"],
      gradient: "from-purple-500 to-pink-500",
      delay: "200ms"
    },
    {
      number: "03",
      title: "Development & Integration",
      description: "Using cutting-edge technologies and best practices, we build scalable, secure, and high-performance solutions tailored to your needs.",
      icon: "⚡",
      features: ["Clean Code", "API Integration", "Database Design", "Security Implementation"],
      gradient: "from-emerald-500 to-green-500",
      delay: "400ms"
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution is bug-free, performs optimally, and delivers exceptional user experience across all platforms.",
      icon: "🧪",
      features: ["Automated Testing", "Performance Testing", "Security Audit", "Cross-platform Testing"],
      gradient: "from-orange-500 to-red-500",
      delay: "600ms"
    },
    {
      number: "05",
      title: "Deployment & Launch",
      description: "We handle the complete deployment process, ensuring a smooth launch and optimal performance from day one with zero downtime.",
      icon: "🚀",
      features: ["Cloud Deployment", "Performance Optimization", "Go-Live Support", "Monitoring Setup"],
      gradient: "from-indigo-500 to-blue-500",
      delay: "800ms"
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Our commitment continues post-launch with ongoing support, updates, and enhancements to keep your solution current and competitive.",
      icon: "🛠️",
      features: ["24/7 Support", "Regular Updates", "Performance Monitoring", "Feature Enhancements"],
      gradient: "from-teal-500 to-emerald-500",
      delay: "1000ms"
    }
  ]

  const stats = [
    { number: "6", label: "Phase Process", suffix: "" },
    { number: "98", label: "On-Time Delivery", suffix: "%" },
    { number: "24", label: "Hour Support", suffix: "/7" },
    { number: "100", label: "Client Satisfaction", suffix: "%" }
  ]

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919847274569?text=Hi! I would like to know more about your development process.', '_blank')
  }

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
            <span className="text-emerald-400 text-sm font-medium">🔄 Our Methodology</span>
          </div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Development <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Process</span>
          </h2>
          
          <p className={`text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our proven 6-phase methodology ensures successful project delivery 
            from initial concept to deployment and beyond.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: step.delay }}
            >
              {/* Card */}
              <div className={`relative h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:border-white/20 ${
                activeStep === index ? 'ring-2 ring-emerald-400/50 shadow-xl' : 'shadow-lg'
              }`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 z-20">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 pt-4">
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm lg:text-base">
                    {step.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs lg:text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active indicator */}
                {activeStep === index && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-pulse" />
                )}
              </div>

              {/* Connection Line */}
              {index < processSteps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-emerald-400/50 to-blue-400/50 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative p-8 lg:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl" />
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8">
                Process Excellence
              </h3>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                      <span className="text-xl lg:text-2xl">{stat.suffix}</span>
                    </div>
                    <div className="text-gray-300 text-sm lg:text-base group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative p-8 lg:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl" />
            
            <div className="relative z-10 space-y-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Experience Our Process?
              </h3>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Let's discuss how our proven methodology can transform your ideas into successful digital solutions 
                that exceed your expectations.
              </p>
              
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleWhatsAppClick}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <span className="relative flex items-center space-x-2">
                    <span>Discuss Your Project</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
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