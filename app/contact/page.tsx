"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ContactPage() {
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

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone",
      subtitle: "Call us directly",
      value: "+91 98472 74569",
      description: "Available 24/7 for urgent inquiries",
      action: () => window.open('tel:+919847274569'),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      subtitle: "Chat with us instantly",
      value: "WhatsApp Business",
      description: "Quick responses within minutes",
      action: () => window.open('https://wa.me/919847274569?text=Hi! I would like to discuss my project requirements.'),
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "✉️",
      title: "Email",
      subtitle: "Send us a message",
      value: "hello@mcodev.com",
      description: "We'll respond within 2-4 hours",
      action: () => window.open('mailto:hello@mcodev.com'),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "📍",
      title: "Location",
      subtitle: "Visit our office",
      value: "Malappuram, Kerala",
      description: "India - 676519",
      action: () => window.open('https://maps.google.com/?q=Malappuram,Kerala,India'),
      gradient: "from-orange-500 to-red-500"
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/company/mcodev-bytes",
      description: "Connect professionally",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      name: "GitHub",
      icon: "💻",
      url: "https://github.com/mcodev-bytes",
      description: "View our projects",
      gradient: "from-gray-700 to-gray-800"
    },
    {
      name: "Instagram",
      icon: "📸",
      url: "https://instagram.com/mcodev.bytes",
      description: "Follow our journey",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/mcodevbytes",
      description: "Latest updates",
      gradient: "from-blue-400 to-blue-500"
    }
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Emergency only" }
  ]

  const quickActions = [
    {
      title: "Free Consultation",
      description: "Get expert advice for your project",
      icon: "🎯",
      action: () => window.open('https://wa.me/919847274569?text=Hi! I would like to schedule a free consultation.'),
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: "Project Quote",
      description: "Get detailed pricing for your requirements",
      icon: "💰",
      action: () => window.open('https://wa.me/919847274569?text=Hi! I would like to get a quote for my project.'),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Portfolio Review",
      description: "See our latest work and case studies",
      icon: "🎨",
      action: () => window.open('https://wa.me/919847274569?text=Hi! I would like to see your portfolio and case studies.'),
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <>
      <Head>
        <title>Contact MCODEV Bytes - Get In Touch | Web Development Company Kerala</title>
        <meta name="description" content="Contact MCODEV Bytes for your web development, mobile app, and digital solution needs. Located in Malappuram, Kerala. Available 24/7 for consultations." />
        <meta name="keywords" content="contact mcodev, web development company kerala, malappuram developers, hire developers kerala, tech company contact" />
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
              {[...Array(25)].map((_, i) => {
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
                <span className="text-emerald-400 text-sm font-medium">📞 Get In Touch</span>
              </div>

              {/* Main heading */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight">
                  <span className="block bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                    Let's Build
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-300 mt-4">
                    Something Amazing Together
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  Ready to transform your ideas into reality? We're here to help you every step of the way. 
                  Reach out to us and let's start your digital journey today.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
                  <div className="text-gray-400">Available</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">&lt;2h</div>
                  <div className="text-gray-400">Response Time</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">200+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">99.8%</div>
                  <div className="text-gray-400">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-emerald-900/30" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Get In <span className="text-emerald-400">Touch</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to connect with us. We're always ready to help!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  onClick={method.action}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center space-y-6">
                    {/* Icon */}
                    <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {method.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-emerald-400 font-medium">{method.subtitle}</p>
                    
                    {/* Value */}
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-white font-semibold">{method.value}</p>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm">{method.description}</p>
                    
                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg className="w-6 h-6 text-emerald-400 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-slate-900/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Quick <span className="text-emerald-400">Actions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Not sure where to start? These quick actions will help you get the information you need.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  onClick={action.action}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center space-y-6">
                    {/* Icon */}
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {action.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {action.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300">{action.description}</p>
                    
                    {/* CTA */}
                    <div className={`inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r ${action.gradient} text-white font-semibold opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                      <span>Get Started</span>
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Office Info & Social Links Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-emerald-900/30" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Office Information */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                  <span className="text-emerald-400 text-sm font-medium">🏢 Office Information</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Visit Our
                  <span className="block text-emerald-400">Digital Hub</span>
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Located in the heart of Malappuram, Kerala, our office is equipped with state-of-the-art 
                  technology and a creative environment that fosters innovation.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald-400 text-sm">📍</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Address</h4>
                      <p className="text-gray-300">MCODEV Bytes<br />Malappuram, Kerala, India - 676519</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald-400 text-sm">🕒</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Office Hours</h4>
                      <div className="space-y-2">
                        {officeHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                            <span className="text-gray-300">{schedule.day}</span>
                            <span className="text-emerald-400 font-medium">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                  <span className="text-blue-400 text-sm font-medium">🌐 Connect With Us</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Follow Our
                  <span className="block text-blue-400">Journey</span>
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Stay connected with us on social media for the latest updates, behind-the-scenes content, 
                  and tech insights from our team.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <div
                      key={index}
                      onClick={() => window.open(social.url, '_blank')}
                      className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer"
                    >
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                      
                      {/* Content */}
                      <div className="relative z-10 text-center space-y-4">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                          {social.icon}
                        </div>
                        <h4 className="text-white font-semibold group-hover:text-emerald-400 transition-colors duration-300">
                          {social.name}
                        </h4>
                        <p className="text-gray-400 text-sm">{social.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
                    <p className="text-gray-300 mb-6">
                      Get the latest tech insights, project updates, and industry news delivered to your inbox.
                    </p>
                    <button
                      onClick={() => window.open('https://wa.me/919847274569?text=Hi! I would like to subscribe to your newsletter.', '_blank')}
                      className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                    >
                      <span className="relative">Subscribe to Newsletter</span>
                      <svg className="relative ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-orange-900/30" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
                <span className="text-red-400 text-sm font-medium">🚨 Emergency Support</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Need Urgent Help?
              </h2>
              
              <p className="text-xl text-gray-300">
                We understand that technical issues can't wait. For urgent support and emergency assistance, 
                we're available 24/7 to help resolve critical problems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('tel:+919847274569')}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 rounded-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-1"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-400 to-red-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <span className="relative">Emergency Call</span>
                  <svg className="relative ml-2 w-5 h-5 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
                
                <button
                  onClick={() => window.open('https://wa.me/919847274569?text=🚨 URGENT: I need immediate technical support for my project.', '_blank')}
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-red-400 bg-white/5 border border-red-500/30 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <span>Emergency WhatsApp</span>
                  <svg className="ml-2 w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}