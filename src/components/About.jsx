import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const statsRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const content = contentRef.current
    const stats = statsRef.current
    const cards = cardsRef.current

    // Title animation
    gsap.fromTo(title, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    )

    // Content animation
    gsap.fromTo(content,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 20%",
        }
      }
    )

    // Stats animation
    gsap.fromTo(stats,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 20%",
        }
      }
    )

    // Cards stagger animation
    gsap.fromTo(cards,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "bottom 20%",
        }
      }
    )
  }, [])

  const features = [
    {
      icon: "🤖",
      title: "AI Research",
      description: "Exploring cutting-edge artificial intelligence technologies and their real-world applications."
    },
    {
      icon: "💻",
      title: "Tech Innovation",
      description: "Building revolutionary software solutions and pushing the boundaries of technology."
    },
    {
      icon: "🚀",
      title: "Future Vision",
      description: "Shaping tomorrow's digital landscape through innovative projects and collaborations."
    },
    {
      icon: "🌐",
      title: "Global Impact",
      description: "Creating solutions that make a difference in communities worldwide through technology."
    }
  ]

  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Industry Partners" },
    { number: "100+", label: "Events Hosted" }
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-20 lg:py-32 bg-gradient-to-b from-dark-bg to-dark-card overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple mb-6">
            About AIEC
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-tech font-bold text-cyber-blue">
              Pioneering the Future of Technology
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              The AI & Technology Society (AIEC) is a vibrant community of innovators, researchers, 
              and tech enthusiasts dedicated to exploring the frontiers of artificial intelligence 
              and emerging technologies. Founded with a vision to bridge the gap between academic 
              research and real-world applications, we foster an environment of learning, 
              collaboration, and innovation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our society brings together students, faculty, and industry professionals to work on 
              cutting-edge projects, participate in hackathons, attend workshops, and engage in 
              research that pushes the boundaries of what's possible with technology.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm font-tech">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-cyber-purple/20 text-cyber-purple rounded-full text-sm font-tech">
                Web Development
              </span>
              <span className="px-4 py-2 bg-cyber-pink/20 text-cyber-pink rounded-full text-sm font-tech">
                Data Science
              </span>
              <span className="px-4 py-2 bg-cyber-green/20 text-cyber-green rounded-full text-sm font-tech">
                Blockchain
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-2xl p-8 backdrop-blur-sm border border-cyber-blue/30">
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-xl font-tech font-bold text-cyber-blue mb-2">
                    Innovation Hub
                  </h4>
                  <p className="text-gray-300">
                    Where ideas transform into reality through collaboration and cutting-edge technology.
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyber-purple rotate-45 animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-cyber-blue rotate-12 animate-float"></div>
          </div>
        </div>

        {/* Statistics */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-tech">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative bg-dark-card/50 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-6 hover:border-cyber-purple/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyber-blue/10"
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">{feature.icon}</div>
              <h4 className="text-xl font-tech font-bold text-cyber-blue mb-3 group-hover:text-cyber-purple transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 to-cyber-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-cyber-blue/10 rotate-45 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-cyber-purple/10 rotate-12 animate-float"></div>
    </section>
  )
}

export default About
