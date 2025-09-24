import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SplineRobot from './SplineRobot'

const GlitchText = ({ children, className }) => {
  return (
    <h1 
      className={`glitch-text ${className}`}
      data-text={children}
    >
      {children}
    </h1>
  )
}

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()
    
    // Initial animations
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    })
    .from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5")
    .from(ctaRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3")

    // Floating animation for the entire hero content
    gsap.to(heroRef.current, {
      y: -10,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    })
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      {/* 3D Spline Robot Background */}
      <div className="absolute inset-0 z-10 opacity-80">
        <SplineRobot 
          fallbackIcon="🤖"
          loadingText="Loading AI Robot"
        />
      </div>

      {/* Hero Content */}
      <div ref={heroRef} className="relative z-30 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mt-32 sm:mt-40 lg:mt-48">
        <div ref={titleRef} className="mb-6">
          <GlitchText className="text-4xl sm:text-6xl lg:text-8xl font-cyber font-black mb-4">
            AIEC
          </GlitchText>
          <div className="text-xl sm:text-2xl lg:text-4xl font-tech font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink animate-glow">
            AI & TECHNOLOGY SOCIETY
          </div>
        </div>

        <div ref={subtitleRef} className="mb-8">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-tech max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of artificial intelligence and technology. 
            Join us in exploring cutting-edge innovations, building revolutionary projects, 
            and shaping tomorrow's digital landscape.
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('about')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-tech font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyber-blue/25"
          >
            <span className="relative z-10">Explore Our Vision</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => scrollToSection('events')}
            className="group px-8 py-4 border-2 border-cyber-blue text-cyber-blue font-tech font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-cyber-blue hover:text-dark-bg hover:shadow-lg hover:shadow-cyber-blue/25"
          >
            View Events
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyber-blue rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-cyber-blue text-sm font-tech mt-2">Scroll Down</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-cyber-blue/30 rotate-45 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-cyber-purple/30 rotate-12 animate-float"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 border border-cyber-pink/30 rotate-45 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-5 w-14 h-14 border border-cyber-green/30 rotate-12 animate-float"></div>
    </section>
  )
}

export default Hero
