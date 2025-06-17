"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { useParams } from "next/navigation"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
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

  const services = [
    {
      slug: "web-development",
      icon: "🌐",
      title: "Web Development",
      shortDescription: "Cutting-edge web applications built with React, Next.js, and modern frameworks.",
      description: "Transform your digital presence with our cutting-edge web development services. We specialize in creating high-performance, scalable web applications using React, Next.js, and modern frameworks that deliver exceptional user experiences and drive business growth.",
      fullDescription: `Our web development services encompass the full spectrum of modern web technologies and methodologies. We don&apos;t just build websites; we create digital experiences that engage users, drive conversions, and grow with your business.

Our team of expert developers leverages the latest technologies including React, Next.js, TypeScript, and modern CSS frameworks to build applications that are not only visually stunning but also highly performant and scalable. Whether you need a simple business website, a complex web application, or an enterprise-level solution, we have the expertise to deliver.

We follow industry best practices including responsive design, SEO optimization, accessibility standards, and performance optimization to ensure your website ranks well in search engines and provides an exceptional user experience across all devices.`,
      features: ["React/Next.js Development", "TypeScript Integration", "Responsive Design", "Performance Optimization", "SEO-Friendly Architecture", "Modern UI/UX", "API Integration", "Database Design", "Security Implementation", "Testing & QA"],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "PostgreSQL", "AWS", "Vercel", "Git"],
      gradient: "from-blue-500 to-cyan-500",
      pricing: "Starting from ₹25,000",
      deliveryTime: "2-6 weeks",
      benefits: [
        "Faster loading times and better performance",
        "Mobile-responsive across all devices", 
        "SEO optimized for better search rankings",
        "Scalable architecture for future growth",
        "Modern and intuitive user interface",
        "Secure and reliable backend systems"
      ],
      process: [
        { step: 1, title: "Discovery & Planning", description: "We understand your requirements, target audience, and business goals" },
        { step: 2, title: "Design & Prototyping", description: "Create wireframes and design mockups for your approval" },
        { step: 3, title: "Development", description: "Build your application using modern technologies and best practices" },
        { step: 4, title: "Testing & QA", description: "Comprehensive testing to ensure quality and performance" },
        { step: 5, title: "Launch & Support", description: "Deploy your application and provide ongoing support" }
      ]
    },
    {
      slug: "app-development",
      icon: "📱",
      title: "App Development",
      shortDescription: "Native and cross-platform mobile applications for iOS and Android.",
      description: "Bring your ideas to life with our comprehensive mobile app development services. We create native and cross-platform applications that deliver seamless experiences across iOS and Android platforms, ensuring your business reaches customers wherever they are.",
      fullDescription: `Mobile applications have become essential for businesses looking to engage with their customers effectively. Our mobile app development services cover the entire lifecycle from concept to deployment and beyond.

We specialize in both native development (iOS and Android) and cross-platform solutions using React Native and Flutter. Our approach ensures that your app not only looks great but also performs exceptionally well across all devices and platforms.

Our apps are designed with user experience at the forefront, incorporating modern design principles, smooth animations, and intuitive navigation. We also focus on performance optimization, security, and scalability to ensure your app can grow with your business.`,
      features: ["React Native Development", "Flutter Development", "Native iOS/Android", "Cross-Platform Solutions", "App Store Optimization", "Push Notifications", "Offline Functionality", "API Integration", "In-App Purchases", "Analytics Integration"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "MongoDB", "AWS", "App Store Connect", "Google Play Console", "TestFlight"],
      gradient: "from-purple-500 to-pink-500",
      pricing: "Starting from ₹35,000",
      deliveryTime: "4-8 weeks",
      benefits: [
        "Reach both iOS and Android users",
        "Native performance and user experience",
        "Offline functionality and data sync",
        "Integration with device features",
        "App store optimization for better visibility",
        "Push notifications for user engagement"
      ],
      process: [
        { step: 1, title: "Concept & Strategy", description: "Define app concept, target audience, and monetization strategy" },
        { step: 2, title: "UI/UX Design", description: "Create user-centered designs optimized for mobile experiences" },
        { step: 3, title: "Development", description: "Build the app using native or cross-platform technologies" },
        { step: 4, title: "Testing", description: "Rigorous testing on multiple devices and operating systems" },
        { step: 5, title: "Deployment", description: "App store submission and launch support" }
      ]
    },
    {
      slug: "ai-business-automation",
      icon: "🤖",
      title: "AI Business Automation",
      shortDescription: "Intelligent automation solutions powered by machine learning and AI.",
      description: "Revolutionize your business operations with our AI-powered automation solutions. We implement intelligent systems that streamline processes, reduce manual work, and provide valuable insights through machine learning and artificial intelligence technologies.",
      fullDescription: `Artificial Intelligence and automation are transforming the way businesses operate. Our AI business automation services help you leverage these technologies to improve efficiency, reduce costs, and gain competitive advantages.

We develop custom AI solutions including chatbots, process automation, predictive analytics, and machine learning models tailored to your specific business needs. Our solutions can automate repetitive tasks, analyze large datasets, provide intelligent insights, and enhance customer experiences.

Our team stays current with the latest AI technologies and frameworks, ensuring that your solutions are built using cutting-edge tools and methodologies. From simple rule-based automation to complex machine learning models, we have the expertise to deliver solutions that drive real business value.`,
      features: ["Process Automation", "ML Integration", "AI Chatbots", "Data Analytics", "Workflow Optimization", "Predictive Analytics", "Natural Language Processing", "Computer Vision", "Robotic Process Automation", "Custom AI Models"],
      technologies: ["Python", "TensorFlow", "OpenAI API", "LangChain", "MongoDB", "FastAPI", "Pandas", "Scikit-learn", "AWS AI Services", "Docker"],
      gradient: "from-emerald-500 to-green-500",
      pricing: "Starting from ₹45,000",
      deliveryTime: "3-10 weeks",
      benefits: [
        "Reduce operational costs by up to 60%",
        "24/7 automated customer support",
        "Data-driven decision making",
        "Improved accuracy and efficiency",
        "Scalable automation solutions",
        "Enhanced customer experiences"
      ],
      process: [
        { step: 1, title: "Process Analysis", description: "Analyze current processes and identify automation opportunities" },
        { step: 2, title: "Solution Design", description: "Design AI/automation solutions tailored to your needs" },
        { step: 3, title: "Development", description: "Build and train AI models and automation workflows" },
        { step: 4, title: "Integration", description: "Integrate solutions with existing systems and processes" },
        { step: 5, title: "Optimization", description: "Continuous monitoring and optimization of AI systems" }
      ]
    },
    {
      slug: "digital-marketing",
      icon: "📈",
      title: "Digital Marketing",
      shortDescription: "Data-driven marketing strategies that amplify your brand presence.",
      description: "Amplify your brand presence and drive meaningful customer engagement with our comprehensive digital marketing services. We create data-driven strategies that deliver measurable results and help your business grow in the digital landscape.",
      fullDescription: `Digital marketing is essential for businesses looking to reach and engage with their target audience in today's connected world. Our comprehensive digital marketing services help you build brand awareness, drive traffic, generate leads, and increase sales.

We develop integrated marketing strategies that leverage multiple channels including social media, search engines, email, and content marketing. Our data-driven approach ensures that every campaign is optimized for maximum ROI and measurable results.

Our team of marketing experts stays current with the latest trends, algorithms, and best practices to ensure your campaigns remain effective and competitive. We provide detailed analytics and reporting so you can see exactly how your marketing investment is performing.`,
      features: ["Social Media Marketing", "Content Strategy", "PPC Campaigns", "Email Marketing", "Analytics & Reporting", "Brand Positioning", "Influencer Marketing", "Conversion Optimization", "Marketing Automation", "Competitor Analysis"],
      technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush", "Mailchimp", "Canva", "Hootsuite", "HubSpot", "Ahrefs", "Hotjar"],
      gradient: "from-orange-500 to-red-500",
      pricing: "Starting from ₹15,000/month",
      deliveryTime: "Ongoing",
      benefits: [
        "Increased brand visibility and awareness",
        "Higher conversion rates and ROI",
        "Targeted audience engagement",
        "Measurable results and insights",
        "Multi-channel marketing approach",
        "Continuous optimization and improvement"
      ],
      process: [
        { step: 1, title: "Strategy Development", description: "Create comprehensive marketing strategy based on your goals" },
        { step: 2, title: "Campaign Setup", description: "Set up campaigns across relevant marketing channels" },
        { step: 3, title: "Content Creation", description: "Develop engaging content tailored to your audience" },
        { step: 4, title: "Campaign Management", description: "Monitor and optimize campaigns for best performance" },
        { step: 5, title: "Analysis & Reporting", description: "Provide detailed reports and insights for continuous improvement" }
      ]
    },
    {
      slug: "branding",
      icon: "🎨",
      title: "Branding",
      shortDescription: "Comprehensive brand identity solutions that capture your essence.",
      description: "Create a lasting impression with our comprehensive branding services. We develop unique brand identities that capture your essence, resonate with your target audience, and differentiate you from the competition in the marketplace.",
      fullDescription: `Your brand is more than just a logo – it's the complete experience your customers have with your business. Our comprehensive branding services help you create a cohesive and memorable brand identity that resonates with your target audience and drives business growth.

We work closely with you to understand your business values, target audience, and competitive landscape to develop a brand strategy that sets you apart. From logo design and color palettes to brand guidelines and marketing materials, we ensure consistency across all touchpoints.

Our branding process is collaborative and iterative, ensuring that the final brand identity truly represents your business and appeals to your target market. We provide comprehensive brand guidelines to ensure consistent application across all platforms and materials.`,
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy", "Marketing Collaterals", "Brand Positioning", "Typography Selection", "Color Palette", "Brand Voice & Messaging", "Website Branding"],
      technologies: ["Adobe Creative Suite", "Figma", "Canva", "Sketch", "InDesign", "Illustrator", "Photoshop", "After Effects", "Principle", "InVision"],
      gradient: "from-pink-500 to-purple-500",
      pricing: "Starting from ₹20,000",
      deliveryTime: "2-4 weeks",
      benefits: [
        "Professional and memorable brand image",
        "Consistent brand experience across touchpoints",
        "Increased customer trust and loyalty",
        "Stand out from competitors",
        "Clear brand messaging and positioning",
        "Scalable brand assets for future growth"
      ],
      process: [
        { step: 1, title: "Brand Discovery", description: "Understand your business, values, and target audience" },
        { step: 2, title: "Research & Analysis", description: "Analyze competitors and market positioning" },
        { step: 3, title: "Brand Strategy", description: "Develop brand positioning and messaging strategy" },
        { step: 4, title: "Visual Identity", description: "Create logo, color palette, and visual elements" },
        { step: 5, title: "Brand Guidelines", description: "Develop comprehensive guidelines for brand application" }
      ]
    },
    {
      slug: "ecommerce-solution",
      icon: "🛒",
      title: "E-commerce Solution",
      shortDescription: "Robust e-commerce platforms with advanced features for online success.",
      description: "Launch and scale your online business with our robust e-commerce solutions. We create feature-rich platforms that provide seamless shopping experiences, advanced inventory management, and comprehensive analytics to drive your business growth.",
      fullDescription: `E-commerce has become essential for businesses looking to reach customers online and drive sales. Our comprehensive e-commerce solutions help you create professional online stores that are optimized for conversions and growth.

We build e-commerce platforms using leading technologies and platforms including Shopify, WooCommerce, and custom solutions. Our approach focuses on user experience, performance, security, and scalability to ensure your online store can handle growth and provide excellent customer experiences.

Our e-commerce solutions include everything from product catalog management and payment processing to inventory management and analytics. We also provide ongoing support and optimization to help you maximize your online sales and grow your business.`,
      features: ["Custom E-commerce Development", "Payment Gateway Integration", "Inventory Management", "Order Tracking", "Analytics Dashboard", "Mobile Commerce", "Multi-vendor Support", "SEO Optimization", "Security Features", "Third-party Integrations"],
      technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "Google Analytics", "AWS", "MongoDB", "Redis", "Elasticsearch"],
      gradient: "from-indigo-500 to-blue-500",
      pricing: "Starting from ₹40,000",
      deliveryTime: "4-8 weeks",
      benefits: [
        "Secure and reliable payment processing",
        "Comprehensive inventory management",
        "Mobile-optimized shopping experience",
        "Detailed sales and customer analytics",
        "Scalable platform for business growth",
        "Integration with popular tools and services"
      ],
      process: [
        { step: 1, title: "Requirements Analysis", description: "Understand your products, target market, and business model" },
        { step: 2, title: "Platform Selection", description: "Choose the best e-commerce platform for your needs" },
        { step: 3, title: "Store Development", description: "Build your online store with custom features and design" },
        { step: 4, title: "Testing & Optimization", description: "Test all functionality and optimize for performance" },
        { step: 5, title: "Launch & Support", description: "Launch your store and provide ongoing support" }
      ]
    },
    {
      slug: "erp-cloud-solution",
      icon: "☁️",
      title: "ERP Cloud Solution",
      shortDescription: "Enterprise resource planning solutions for streamlined operations.",
      description: "Streamline your business operations with our comprehensive ERP cloud solutions. We implement integrated systems that provide real-time insights, improve efficiency, and support your business growth with scalable cloud infrastructure.",
      fullDescription: `Enterprise Resource Planning (ERP) systems are essential for businesses looking to streamline operations, improve efficiency, and gain real-time insights into their business performance. Our cloud-based ERP solutions provide comprehensive business management capabilities while offering the flexibility and scalability of cloud infrastructure.

We develop custom ERP solutions tailored to your specific business needs, whether you're in manufacturing, retail, services, or any other industry. Our solutions integrate all aspects of your business including finance, inventory, CRM, HR, and operations into a single, unified system.

Our cloud-based approach ensures that your ERP system is always accessible, secure, and up-to-date. We handle all the technical aspects including hosting, security, backups, and updates, allowing you to focus on running your business.`,
      features: ["Cloud Infrastructure", "System Integration", "Real-time Analytics", "Scalable Architecture", "Data Security", "Custom Modules", "Financial Management", "Inventory Control", "CRM Integration", "Reporting & Analytics"],
      technologies: ["AWS", "Microsoft Azure", "PostgreSQL", "Redis", "Docker", "Kubernetes", "React", "Node.js", "Python", "Microservices"],
      gradient: "from-teal-500 to-emerald-500",
      pricing: "Starting from ₹60,000",
      deliveryTime: "6-12 weeks",
      benefits: [
        "Centralized data and processes",
        "Real-time business insights",
        "Improved operational efficiency",
        "Scalable cloud infrastructure",
        "Enhanced data security",
        "Reduced operational costs"
      ],
      process: [
        { step: 1, title: "Business Analysis", description: "Analyze your current processes and requirements" },
        { step: 2, title: "System Design", description: "Design ERP architecture and modules" },
        { step: 3, title: "Development", description: "Build custom ERP modules and integrations" },
        { step: 4, title: "Implementation", description: "Deploy and configure the ERP system" },
        { step: 5, title: "Training & Support", description: "Provide user training and ongoing support" }
      ]
    },
    {
      slug: "seo",
      icon: "🔍",
      title: "SEO",
      shortDescription: "Advanced SEO strategies to boost your online visibility.",
      description: "Boost your online visibility and drive organic traffic growth with our advanced SEO services. We implement comprehensive strategies that improve your search engine rankings, increase website traffic, and deliver sustainable long-term results.",
      fullDescription: `Search Engine Optimization (SEO) is crucial for businesses looking to improve their online visibility and drive organic traffic. Our comprehensive SEO services help you rank higher in search engine results, attract more qualified visitors, and increase conversions.

We use a data-driven approach to SEO that includes technical optimization, content strategy, link building, and performance monitoring. Our team stays current with the latest search engine algorithms and best practices to ensure your website maintains and improves its rankings over time.

Our SEO services are designed to deliver sustainable, long-term results. We focus on white-hat techniques that not only improve your rankings but also enhance the overall user experience of your website.`,
      features: ["Technical SEO", "Content Optimization", "Link Building", "Keyword Research", "Performance Monitoring", "Local SEO", "On-page Optimization", "Off-page SEO", "SEO Audits", "Competitor Analysis"],
      technologies: ["Google Search Console", "SEMrush", "Ahrefs", "Google Analytics", "Screaming Frog", "GTMetrix", "Moz", "Yoast SEO", "Schema Markup", "Google Tag Manager"],
      gradient: "from-yellow-500 to-orange-500",
      pricing: "Starting from ₹12,000/month",
      deliveryTime: "3-6 months for results",
      benefits: [
        "Higher search engine rankings",
        "Increased organic website traffic",
        "Better user experience and engagement",
        "Long-term sustainable growth",
        "Improved local search visibility",
        "Better conversion rates from organic traffic"
      ],
      process: [
        { step: 1, title: "SEO Audit", description: "Comprehensive analysis of your current SEO performance" },
        { step: 2, title: "Strategy Development", description: "Create customized SEO strategy based on your goals" },
        { step: 3, title: "Implementation", description: "Execute on-page and technical SEO improvements" },
        { step: 4, title: "Content & Links", description: "Develop content strategy and build quality backlinks" },
        { step: 5, title: "Monitor & Optimize", description: "Continuous monitoring and optimization for better results" }
      ]
    }
  ]

  const service = services.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
                          <p className="text-gray-300 mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/services" className="text-emerald-400 hover:text-emerald-300">
            ← Back to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{service.title} - MCODEV Bytes | Professional {service.title} Services</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content={`${service.title.toLowerCase()}, ${service.features.slice(0, 5).join(', ').toLowerCase()}`} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <Header />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
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
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8">
              <nav className="flex items-center space-x-2 text-gray-400">
                <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                <span>→</span>
                <Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link>
                <span>→</span>
                <span className="text-white">{service.title}</span>
              </nav>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                  <span className="text-emerald-400 text-sm font-medium">{service.icon} {service.title}</span>
                </div>

                {/* Title */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="block bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </h1>
                
                {/* Description */}
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Key benefits */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">{service.pricing}</div>
                    <div className="text-sm text-gray-400">Starting Price</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">{service.deliveryTime}</div>
                    <div className="text-sm text-gray-400">Delivery Time</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => window.open('https://wa.me/919847274569?text=Hi! I would like to get a quote for ' + service.title + ' services.', '_blank')}
                    className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r ${service.gradient} rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl`}
                  >
                    <span className="relative">Get Quote</span>
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

              {/* Service Icon/Visual */}
              <div className="relative">
                <div className={`relative p-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl bg-gradient-to-br ${service.gradient} bg-opacity-10`}>
                  <div className="text-center">
                    <div className="text-9xl mb-8 animate-pulse">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Professional {service.title}</h3>
                    <p className="text-gray-300">High-quality, scalable solutions tailored to your business needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-emerald-900/30" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Features */}
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  What&apos;s <span className="text-emerald-400">Included</span>
                </h2>
                
                <div className="grid gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-4 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  Key <span className="text-emerald-400">Benefits</span>
                </h2>
                
                <div className="space-y-6">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-emerald-400 text-sm">✓</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-slate-900/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Technologies <span className="text-emerald-400">We Use</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage cutting-edge technologies to deliver high-quality, scalable solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {service.technologies.map((tech, index) => (
                <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-white font-semibold">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-emerald-900/30" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our <span className="text-emerald-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {service.process.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="text-center space-y-4">
                      <div className={`w-12 h-12 mx-auto bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                  
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Description Section */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-slate-900/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
                About Our <span className="text-emerald-400">{service.title}</span> Services
              </h2>
              
              <div className="prose prose-lg prose-invert max-w-none">
                {service.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-300 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 lg:py-32">
          <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10`} />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Ready to Get Started with 
                <span className="block text-emerald-400">{service.title}?</span>
              </h2>
              
              <p className="text-xl text-gray-300">
                Let&apos;s discuss your project requirements and create a customized solution that drives your business forward.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/919847274569?text=Hi! I would like to get a free consultation for ' + service.title + ' services.', '_blank')}
                  className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r ${service.gradient} rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl`}
                >
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
        </section>

        <Footer />
      </div>
    </>
  )
}