"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

export default function NotFound() {
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

  // Animated floating particles similar to Hero
  const particles = [...Array(15)].map((_, i) => {
    const seed = i * 137.508;
    return {
      left: ((seed % 97) + 3),
      top: ((seed * 1.3) % 97) + 3,
      delay: (seed % 5000) / 1000,
      duration: 3 + ((seed % 4000) / 1000)
    };
  });

  // Interactive code snippets for the terminal
  const codeSnippets = [
    "const page = '404';",
    "if (!found) {",
    "  return redirect('/');",
    "}",
    "// Lost in cyberspace..."
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      {/* Dynamic background effects */}
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
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>

        {/* Additional geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/2 right-32 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-red-500/20 rounded-full blur-xl animate-bounce" />
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left side - Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
                <span className="text-red-400 text-sm font-medium">🚫 Page Not Found</span>
              </div>

              {/* 404 Display */}
              <div className="space-y-6">
                <div className="relative">
                  <h1 className="text-8xl sm:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold leading-none tracking-tighter">
                    <span className="block bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                      404
                    </span>
                  </h1>
                  
                  {/* Glitch effect overlay */}
                  <div className="absolute inset-0 text-8xl sm:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold leading-none tracking-tighter">
                    <span className="block text-emerald-500/30 animate-glitch">
                      404
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Oops! Page Lost in 
                  <span className="block text-emerald-400 font-light">Cyberspace</span>
                </h2>
                
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  The page you&apos;re looking for seems to have been moved, deleted, or perhaps never existed. 
                  Let&apos;s navigate you back to our digital world.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <svg className="relative mr-2 w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  <span className="relative">Back to Home</span>
                </Link>
                
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-emerald-400 bg-white/5 border border-emerald-500/30 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <span>Explore Services</span>
                  <svg className="ml-2 w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Quick Navigation</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "Services", href: "/services" },
                    { name: "Contact", href: "/contact" }
                  ].map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="group flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-emerald-500/30"
                    >
                      <span className="text-gray-300 text-sm font-medium">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Interactive Visual */}
            <div className="relative">
              {/* Main terminal card */}
              <div className="relative z-20 group">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  {/* Terminal header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                    <div className="text-emerald-400 text-sm font-mono">terminal.mcodev</div>
                  </div>

                  {/* Code simulation */}
                  <div className="space-y-3 font-mono text-sm">
                    <div className="text-emerald-300">
                      <span className="text-gray-500">$</span> <span className="text-white">cd /website/pages</span>
                    </div>
                    <div className="text-red-300">
                      <span className="text-gray-500">!</span> <span className="text-red-400">Error: Page not found</span>
                    </div>
                    {codeSnippets.map((line, index) => (
                      <div key={index} className="text-purple-300">
                        <span className="text-gray-500">{String(index + 1).padStart(2, '0')}</span> {line}
                      </div>
                    ))}
                    <div className="text-emerald-300 mt-4">
                      <span className="text-gray-500">$</span> <span className="text-white">npm run redirect-home</span>
                    </div>
                    <div className="text-green-300">
                      <span className="text-gray-500">✓</span> <span className="text-green-400">Ready for navigation...</span>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <span>System Status</span>
                      <span className="text-emerald-400">Online</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-400 to-emerald-500 h-2 rounded-full w-full animate-pulse" />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-2xl font-bold text-red-400">404</div>
                      <div className="text-xs text-gray-400">Error Code</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-2xl font-bold text-emerald-400">∞</div>
                      <div className="text-xs text-gray-400">Solutions</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-red-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute top-1/2 -right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-xl animate-bounce" />
            </div>
          </div>
        </div>
      </div>


    </div>
  )
} 