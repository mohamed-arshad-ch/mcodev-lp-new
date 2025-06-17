"use client"

import React, { useEffect, useRef, useState } from "react"

export default function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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

  const faqs = [
    {
      question: "What technologies do you use for development?",
      answer: "We use cutting-edge technologies including React, Next.js, Node.js, Python, TypeScript, and modern cloud platforms like AWS and Azure. Our tech stack is constantly updated to ensure we deliver the most efficient and scalable solutions.",
      category: "Technology",
      icon: "⚡"
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A simple website takes 2-4 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
      category: "Timeline",
      icon: "⏱️"
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! We offer comprehensive post-launch support including 24/7 monitoring, regular updates, security patches, performance optimization, and feature enhancements. Our support packages are tailored to your specific needs.",
      category: "Support",
      icon: "🛠️"
    },
    {
      question: "What is your development process?",
      answer: "We follow a proven 6-phase methodology: Discovery & Planning, Design & Prototyping, Development & Integration, Testing & QA, Deployment & Launch, and ongoing Support & Maintenance. This ensures quality delivery and client satisfaction.",
      category: "Process",
      icon: "🔄"
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We specialize in system integration and can seamlessly connect your new solution with existing databases, APIs, CRM systems, ERP solutions, and third-party services. We ensure minimal disruption to your current operations.",
      category: "Integration",
      icon: "🔗"
    },
    {
      question: "How do you ensure data security?",
      answer: "Security is our top priority. We implement bank-level encryption, secure authentication, regular security audits, compliance with GDPR/HIPAA standards, and follow industry best practices for data protection and privacy.",
      category: "Security",
      icon: "🔒"
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer-based arrangements. Pricing depends on project scope, complexity, and timeline. We provide transparent, detailed quotes with no hidden costs.",
      category: "Pricing",
      icon: "💰"
    },
    {
      question: "Do you provide AI and automation solutions?",
      answer: "Yes! We specialize in AI business automation, machine learning integration, chatbots, process automation, and intelligent data analytics. We help businesses leverage AI to improve efficiency and decision-making.",
      category: "AI/Automation",
      icon: "🤖"
    }
  ]

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919847274569?text=Hi! I have a question that\'s not in your FAQ.', '_blank')
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm mb-6">
            <span className="text-emerald-400 text-sm font-medium">❓ Got Questions?</span>
          </div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Frequently Asked <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
          </h2>
          
          <p className={`text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Find answers to common questions about our services, process, and expertise.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 overflow-hidden">
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 lg:p-8 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      <div className="text-2xl">{faq.icon}</div>
                      <div className="flex-1">
                        <div className="text-xs text-emerald-400 font-medium mb-1 uppercase tracking-wide">
                          {faq.category}
                        </div>
                        <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <div className={`ml-4 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Answer */}
                <div className={`transition-all duration-500 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                    <div className="pl-12">
                      <div className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent mb-4" />
                      <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative p-8 lg:p-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-3xl" />
            
            <div className="relative z-10 space-y-6">
              <div className="text-4xl mb-4">🤔</div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                Can&apos;t find the answer you&apos;re looking for? Our team is here to help! 
                Reach out to us directly and we&apos;ll get back to you promptly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleWhatsAppClick}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <span className="relative flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>Chat on WhatsApp</span>
                  </span>
                </button>
                
                <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-400 bg-white/5 border border-emerald-500/30 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                  <span>Schedule a Call</span>
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
      <div className="absolute top-32 left-10 w-4 h-4 bg-blue-400/30 rotate-45 animate-bounce" />
      <div className="absolute top-52 right-20 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-20 w-5 h-5 bg-emerald-400/30 rotate-12 animate-bounce" />
      <div className="absolute bottom-52 right-10 w-3 h-3 bg-pink-400/30 rounded-full animate-pulse" />
    </section>
  )
} 