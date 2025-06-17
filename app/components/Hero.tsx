"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
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

  const techStack = [
    { name: "Next.js", icon: "▲" },
    { name: "React.js", icon: "⚛️" },
    { name: "React Native", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Python", icon: "🐍" },
    { name: "Express.js", icon: "🚀" },
    { name: "FastAPI", icon: "⚡" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Neon Serverless", icon: "⚡" },
    { name: "Supabase", icon: "🔋" },
    { name: "Unreal Engine", icon: "🎮" }
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
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
            // Use deterministic values based on index to avoid hydration mismatch
            const seed = i * 137.508; // Golden angle approximation for good distribution
            const left = ((seed % 97) + 3); // Values between 3-100
            const top = ((seed * 1.3) % 97) + 3; // Values between 3-100
            const delay = (seed % 5000) / 1000; // 0-5 seconds
            const duration = 3 + ((seed % 4000) / 1000); // 3-7 seconds
            
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <span className="text-emerald-400 text-sm font-medium">🚀 Leading Web & App Development Company</span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.9] tracking-tight">
                <span className="block bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                  MCODEV
                </span>
                <span className="block text-emerald-400 font-light">Bytes</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-gray-300 mt-4">
                  Expert Web Development & Digital Solutions
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Premier web development company in Kerala specializing in custom web applications, mobile app development, AI automation, and digital marketing solutions. Transform your business with cutting-edge technology and expert development services.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => window.open('https://wa.me/919847274569?text=Hi! I would like to start a project with you.', '_blank')}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <span className="relative">Start Your Project</span>
                <svg className="relative ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <Link
                href="#services"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-400 bg-white/5 border border-emerald-500/30 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <span>Explore Services</span>
                <svg className="ml-2 w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>

            {/* Tech Stack - Enhanced Layout */}
            <div className="space-y-4">
              <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Powered By</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-4xl mx-auto lg:mx-0">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-emerald-500/30"
                  >
                    <span className="text-base group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{tech.icon}</span>
                    <span className="text-gray-300 text-xs font-medium truncate">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="relative">
            {/* Main glass card */}
            <div className="relative z-20 group">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                  <div className="text-emerald-400 text-sm font-mono">MCODEV.bytes</div>
                </div>

                {/* Code simulation */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="text-purple-300">
                    <span className="text-gray-500">01</span> const <span className="text-blue-300">innovation</span> = {'{'}
                  </div>
                  <div className="text-emerald-300 pl-4">
                    <span className="text-gray-500">02</span>   <span className="text-yellow-300">ai</span>: <span className="text-green-300">&apos;cutting-edge&apos;</span>,
                  </div>
                  <div className="text-emerald-300 pl-4">
                    <span className="text-gray-500">03</span>   <span className="text-yellow-300">performance</span>: <span className="text-green-300">&apos;lightning-fast&apos;</span>,
                  </div>
                  <div className="text-emerald-300 pl-4">
                    <span className="text-gray-500">04</span>   <span className="text-yellow-300">scalability</span>: <span className="text-green-300">&apos;unlimited&apos;</span>
                  </div>
                  <div className="text-purple-300">
                    <span className="text-gray-500">05</span> {'}'}
                  </div>
                </div>

                {/* Progress bars */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span>Project Success Rate</span>
                    <span>99.8%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-2 rounded-full w-[99.8%] animate-pulse" />
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-emerald-400">200+</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-emerald-400">24/7</div>
                    <div className="text-xs text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-1/2 -right-20 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-full blur-xl animate-bounce" />

            {/* Logo integration */}
            <div className="absolute -top-5 -right-5 z-30">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="MCODEV Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  )
} 