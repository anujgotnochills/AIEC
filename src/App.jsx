import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Events from './components/Events'
import Team from './components/Team'
import Sponsors from './components/Sponsors'
import Contact from './components/Contact'
import ParticlesBackground from './components/ParticlesBackground'
import CircuitAnimation from './components/CircuitAnimation'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    ScrollTrigger.refresh()
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-dark-bg text-white overflow-x-hidden">
      {/* Background Elements */}
      <ParticlesBackground />
      <CircuitAnimation />
      
      {/* Main Content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Team />
        <Sponsors />
        <Contact />
      </main>
    </div>
  )
}

export default App
