import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const CircuitAnimation = () => {
  const svgRef = useRef(null)
  const pathRefs = useRef([])

  useEffect(() => {
    if (!svgRef.current) return

    const paths = pathRefs.current
    
    // Set initial state
    paths.forEach(path => {
      if (path) {
        const length = path.getTotalLength()
        path.style.strokeDasharray = length
        path.style.strokeDashoffset = length
      }
    })

    // Create scroll-triggered animations
    paths.forEach((path, index) => {
      if (path) {
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: path,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
          delay: index * 0.2
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      <svg
        ref={svgRef}
        className="w-full h-full opacity-20"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circuit paths */}
        <path
          ref={el => pathRefs.current[0] = el}
          d="M0 200 L300 200 L300 400 L600 400 L600 600 L900 600"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
        />
        <path
          ref={el => pathRefs.current[1] = el}
          d="M1920 300 L1600 300 L1600 500 L1300 500 L1300 700 L1000 700"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
        />
        <path
          ref={el => pathRefs.current[2] = el}
          d="M200 0 L200 300 L400 300 L400 600 L600 600 L600 900"
          stroke="url(#gradient3)"
          strokeWidth="2"
          fill="none"
        />
        <path
          ref={el => pathRefs.current[3] = el}
          d="M1720 0 L1720 400 L1500 400 L1500 700 L1200 700 L1200 1080"
          stroke="url(#gradient4)"
          strokeWidth="2"
          fill="none"
        />
        <path
          ref={el => pathRefs.current[4] = el}
          d="M500 100 L800 100 L800 300 L1100 300 L1100 500 L1400 500"
          stroke="url(#gradient5)"
          strokeWidth="2"
          fill="none"
        />

        {/* Circuit nodes */}
        <circle cx="300" cy="200" r="4" fill="#00f5ff" className="animate-pulse">
          <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="600" cy="400" r="4" fill="#8a2be2" className="animate-pulse">
          <animate attributeName="r" values="4;8;4" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="900" cy="600" r="4" fill="#ff1493" className="animate-pulse">
          <animate attributeName="r" values="4;8;4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="1300" cy="500" r="4" fill="#39ff14" className="animate-pulse">
          <animate attributeName="r" values="4;8;4" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="800" cy="300" r="4" fill="#ffff00" className="animate-pulse">
          <animate attributeName="r" values="4;8;4" dur="2.8s" repeatCount="indefinite" />
        </circle>

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8a2be2" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8a2be2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff1493" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff1493" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#39ff14" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#39ff14" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffff00" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffff00" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00f5ff" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default CircuitAnimation
