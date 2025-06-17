"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ServicesPage() {
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

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.mcodevbytes.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.mcodevbytes.in/services"
      }
    ]
  }

  // Services catalog structured data
  const servicesCatalogData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "MCODEV Bytes Digital Services",
    "description": "Comprehensive digital services offered by MCODEV Bytes",
    "numberOfItems": 8,
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Web Development",
        "description": "Cutting-edge web applications built with React, Next.js, and modern frameworks",
        "provider": {
          "@type": "Organization",
          "name": "MCODEV Bytes"
        },
        "areaServed": "Kerala, India",
        "url": "https://www.mcodevbytes.in/services/web-development"
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Mobile App Development",
        "description": "Native and cross-platform mobile applications for iOS and Android",
        "provider": {
          "@type": "Organization",
          "name": "MCODEV Bytes"
        },
        "areaServed": "Kerala, India",
        "url": "https://www.mcodevbytes.in/services/app-development"
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "AI Business Automation",
        "description": "Intelligent automation solutions powered by machine learning and AI",
        "provider": {
          "@type": "Organization",
          "name": "MCODEV Bytes"
        },
        "areaServed": "Kerala, India",
        "url": "https://www.mcodevbytes.in/services/ai-business-automation"
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Digital Marketing",
        "description": "Data-driven marketing strategies that amplify your brand presence",
        "provider": {
          "@type": "Organization",
          "name": "MCODEV Bytes"
        },
        "areaServed": "Kerala, India",
        "url": "https://www.mcodevbytes.in/services/digital-marketing"
      },
      {
        "@type": "Service",
        "position": 5,
        "name": "Branding",
        "description": "Comprehensive brand identity solutions that capture your essence",
        "provider": {
          "@type": "Organization",
          "name": "MCODEV Bytes"
        },
        "areaServed": "Kerala, India",
        "url": "https://www.mcodevbytes.in/services/branding"
      },
      {
        "@type": "Service",
        "position": 6,
        "name": "E-commerce Solutions",
        "description": "Robust e-commerce platforms with advanced features for online success",
        "provider": {
          "@type": "Organization",
          "name": "MCODEV Bytes"
        },
        "areaServed": "Kerala, India",
        "url": "https://www.mcodevbytes.in/services/ecommerce-solution"
      }
    ]
  }

  const services = [
    {
      slug: "web-development",
      icon: "🌐",
      title: "Web Development",
      shortDescription: "Cutting-edge web applications built with React, Next.js, and modern frameworks.",
      description: "Transform your digital presence with our cutting-edge web development services. We specialize in creating high-performance, scalable web applications using React, Next.js, and modern frameworks that deliver exceptional user experiences and drive business growth.",
      features: ["React/Next.js Development", "TypeScript Integration", "Responsive Design", "Performance Optimization", "SEO-Friendly Architecture", "Modern UI/UX"],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      gradient: "from-blue-500 to-cyan-500",
      pricing: "Starting from ₹25,000",
      deliveryTime: "2-6 weeks",
      benefits: [
        "Faster loading times and better performance",
        "Mobile-responsive across all devices",
        "SEO optimized for better search rankings",
        "Scalable architecture for future growth"
      ]
    },
    {
      slug: "app-development",
      icon: "📱",
      title: "App Development",
      shortDescription: "Native and cross-platform mobile applications for iOS and Android.",
      description: "Bring your ideas to life with our comprehensive mobile app development services. We create native and cross-platform applications that deliver seamless experiences across iOS and Android platforms, ensuring your business reaches customers wherever they are.",
      features: ["React Native Development", "Flutter Development", "Native iOS/Android", "Cross-Platform Solutions", "App Store Optimization", "Push Notifications"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "MongoDB"],
      gradient: "from-purple-500 to-pink-500",
      pricing: "Starting from ₹35,000",
      deliveryTime: "4-8 weeks",
      benefits: [
        "Reach both iOS and Android users",
        "Native performance and user experience",
        "Offline functionality and data sync",
        "Integration with device features"
      ]
    },
    {
      slug: "ai-business-automation",
      icon: "🤖",
      title: "AI Business Automation",
      shortDescription: "Intelligent automation solutions powered by machine learning and AI.",
      description: "Revolutionize your business operations with our AI-powered automation solutions. We implement intelligent systems that streamline processes, reduce manual work, and provide valuable insights through machine learning and artificial intelligence technologies.",
      features: ["Process Automation", "ML Integration", "AI Chatbots", "Data Analytics", "Workflow Optimization", "Predictive Analytics"],
      technologies: ["Python", "TensorFlow", "OpenAI API", "LangChain", "MongoDB", "FastAPI"],
      gradient: "from-emerald-500 to-green-500",
      pricing: "Starting from ₹45,000",
      deliveryTime: "3-10 weeks",
      benefits: [
        "Reduce operational costs by up to 60%",
        "24/7 automated customer support",
        "Data-driven decision making",
        "Improved accuracy and efficiency"
      ]
    },
    {
      slug: "digital-marketing",
      icon: "📈",
      title: "Digital Marketing",
      shortDescription: "Data-driven marketing strategies that amplify your brand presence.",
      description: "Amplify your brand presence and drive meaningful customer engagement with our comprehensive digital marketing services. We create data-driven strategies that deliver measurable results and help your business grow in the digital landscape.",
      features: ["Social Media Marketing", "Content Strategy", "PPC Campaigns", "Email Marketing", "Analytics & Reporting", "Brand Positioning"],
      technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush", "Mailchimp", "Canva"],
      gradient: "from-orange-500 to-red-500",
      pricing: "Starting from ₹15,000/month",
      deliveryTime: "Ongoing",
      benefits: [
        "Increased brand visibility and awareness",
        "Higher conversion rates and ROI",
        "Targeted audience engagement",
        "Measurable results and insights"
      ]
    },
    {
      slug: "branding",
      icon: "🎨",
      title: "Branding",
      shortDescription: "Comprehensive brand identity solutions that capture your essence.",
      description: "Create a lasting impression with our comprehensive branding services. We develop unique brand identities that capture your essence, resonate with your target audience, and differentiate you from the competition in the marketplace.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy", "Marketing Collaterals", "Brand Positioning"],
      technologies: ["Adobe Creative Suite", "Figma", "Canva", "Sketch", "InDesign", "Illustrator"],
      gradient: "from-pink-500 to-purple-500",
      pricing: "Starting from ₹20,000",
      deliveryTime: "2-4 weeks",
      benefits: [
        "Professional and memorable brand image",
        "Consistent brand experience across touchpoints",
        "Increased customer trust and loyalty",
        "Stand out from competitors"
      ]
    },
    {
      slug: "ecommerce-solution",
      icon: "🛒",
      title: "E-commerce Solution",
      shortDescription: "Robust e-commerce platforms with advanced features for online success.",
      description: "Launch and scale your online business with our robust e-commerce solutions. We create feature-rich platforms that provide seamless shopping experiences, advanced inventory management, and comprehensive analytics to drive your business growth.",
      features: ["Custom E-commerce Development", "Payment Gateway Integration", "Inventory Management", "Order Tracking", "Analytics Dashboard", "Mobile Commerce"],
      technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "Google Analytics"],
      gradient: "from-indigo-500 to-blue-500",
      pricing: "Starting from ₹40,000",
      deliveryTime: "4-8 weeks",
      benefits: [
        "Secure and reliable payment processing",
        "Comprehensive inventory management",
        "Mobile-optimized shopping experience",
        "Detailed sales and customer analytics"
      ]
    },
    {
      slug: "erp-cloud-solution",
      icon: "☁️",
      title: "ERP Cloud Solution",
      shortDescription: "Enterprise resource planning solutions for streamlined operations.",
      description: "Streamline your business operations with our comprehensive ERP cloud solutions. We implement integrated systems that provide real-time insights, improve efficiency, and support your business growth with scalable cloud infrastructure.",
      features: ["Cloud Infrastructure", "System Integration", "Real-time Analytics", "Scalable Architecture", "Data Security", "Custom Modules"],
      technologies: ["AWS", "Microsoft Azure", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
      gradient: "from-teal-500 to-emerald-500",
      pricing: "Starting from ₹60,000",
      deliveryTime: "6-12 weeks",
      benefits: [
        "Centralized data and processes",
        "Real-time business insights",
        "Improved operational efficiency",
        "Scalable cloud infrastructure"
      ]
    },
    {
      slug: "seo",
      icon: "🔍",
      title: "SEO",
      shortDescription: "Advanced SEO strategies to boost your online visibility.",
      description: "Boost your online visibility and drive organic traffic growth with our advanced SEO services. We implement comprehensive strategies that improve your search engine rankings, increase website traffic, and deliver sustainable long-term results.",
      features: ["Technical SEO", "Content Optimization", "Link Building", "Keyword Research", "Performance Monitoring", "Local SEO"],
      technologies: ["Google Search Console", "SEMrush", "Ahrefs", "Google Analytics", "Screaming Frog", "GTMetrix"],
      gradient: "from-yellow-500 to-orange-500",
      pricing: "Starting from ₹12,000/month",
      deliveryTime: "3-6 months for results",
      benefits: [
        "Higher search engine rankings",
        "Increased organic website traffic",
        "Better user experience and engagement",
        "Long-term sustainable growth"
      ]
    }
  ]

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesCatalogData)
        }}
      />
      
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
              {[...Array(20)].map((_, i) => {
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
            {/* Breadcrumb Navigation for SEO */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-400">
                <li>
                  <Link href="/" className="hover:text-emerald-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-emerald-400 font-medium">Services</span>
                </li>
              </ol>
            </nav>
            
            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                <span className="text-emerald-400 text-sm font-medium">💼 Our Services</span>
              </div>

              {/* Main heading - SEO optimized */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight">
                  <span className="block bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                    Digital Services
                  </span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-300 mt-4">
                    Kerala's Leading IT Solutions
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  From cutting-edge web development to AI-powered automation, we provide end-to-end digital solutions 
                  that transform businesses and accelerate growth in the digital landscape.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">8+</div>
                  <div className="text-gray-400">Services</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">200+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
                  <div className="text-gray-400">Clients</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">99.8%</div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-emerald-900/30" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our <span className="text-emerald-400">Expertise</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of digital services designed to meet your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service.slug}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Short Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                    
                    {/* Key Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* Pricing and Delivery */}
                    <div className="space-y-2 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Starting from</span>
                        <span className="text-emerald-400 font-semibold">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Delivery</span>
                        <span className="text-white text-sm">{service.deliveryTime}</span>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <Link 
                      href={`/services/${service.slug}`}
                      className={`block w-full py-3 px-4 rounded-xl text-center font-semibold bg-gradient-to-r ${service.gradient} text-white opacity-80 group-hover:opacity-100 transition-all duration-300 hover:scale-105`}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-slate-900/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                  <span className="text-emerald-400 text-sm font-medium">✨ Why Choose Us</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Excellence in Every
                  <span className="block text-emerald-400">Project</span>
                </h2>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  We don&apos;t just deliver services; we create partnerships that drive long-term success. 
                  Our commitment to quality, innovation, and client satisfaction sets us apart.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald-400 text-sm">🚀</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Cutting-edge Technology</h4>
                      <p className="text-gray-300">We use the latest technologies and best practices to ensure your project is future-ready.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald-400 text-sm">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Fast Delivery</h4>
                      <p className="text-gray-300">Efficient development processes ensure quick turnaround without compromising quality.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald-400 text-sm">🤝</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Dedicated Support</h4>
                      <p className="text-gray-300">24/7 support and maintenance to keep your systems running smoothly.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12">
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                    Ready to Get Started?
                  </h3>
                  
                  <p className="text-gray-300 mb-8">
                    Let&apos;s discuss your project requirements and create a customized solution that drives your business forward.
                  </p>
                  
                  <div className="space-y-4">
                    <button
                      onClick={() => window.open('https://wa.me/919847274569?text=Hi! I would like to get a free consultation for my project.', '_blank')}
                      className="w-full group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                      <span className="relative">Get Free Consultation</span>
                      <svg className="relative ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    
                    <Link
                      href="/#contact"
                      className="w-full group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-400 bg-white/5 border border-emerald-500/30 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                    >
                      <span>Contact Us</span>
                      <svg className="ml-2 w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}