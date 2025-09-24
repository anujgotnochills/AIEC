import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Sponsors = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const logoRefs = useRef([])
  const partnerRefs = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const logos = logoRefs.current
    const partners = partnerRefs.current

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

    // Logos animation
    gsap.fromTo(logos,
      { y: 30, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 20%",
        }
      }
    )

    // Partners animation
    gsap.fromTo(partners,
      { y: 50, opacity: 0, rotationY: 15 },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "bottom 20%",
        }
      }
    )

    // Continuous floating animation for logos
    logos.forEach((logo, index) => {
      if (logo) {
        gsap.to(logo, {
          y: -10,
          duration: 2 + index * 0.2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1
        })
      }
    })
  }, [])

  const sponsors = [
    {
      name: "TechCorp",
      logo: "🏢",
      tier: "platinum",
      description: "Leading technology solutions provider"
    },
    {
      name: "AI Innovations",
      logo: "🤖",
      tier: "platinum",
      description: "Cutting-edge AI research company"
    },
    {
      name: "CloudTech",
      logo: "☁️",
      tier: "gold",
      description: "Cloud computing infrastructure"
    },
    {
      name: "DataFlow",
      logo: "📊",
      tier: "gold",
      description: "Big data analytics platform"
    },
    {
      name: "CyberSecure",
      logo: "🔒",
      tier: "silver",
      description: "Cybersecurity solutions"
    },
    {
      name: "DevTools",
      logo: "🛠️",
      tier: "silver",
      description: "Developer productivity tools"
    },
    {
      name: "StartupHub",
      logo: "🚀",
      tier: "bronze",
      description: "Startup incubator and accelerator"
    },
    {
      name: "EduTech",
      logo: "📚",
      tier: "bronze",
      description: "Educational technology platform"
    }
  ]

  const partners = [
    {
      name: "IEEE Computer Society",
      type: "Academic Partner",
      logo: "🎓",
      description: "Professional association for computing professionals"
    },
    {
      name: "Google Developer Groups",
      type: "Community Partner",
      logo: "🌐",
      description: "Local developer community network"
    },
    {
      name: "Microsoft Student Partners",
      type: "Technology Partner",
      logo: "💻",
      description: "Student technology leadership program"
    },
    {
      name: "AWS Educate",
      type: "Cloud Partner",
      logo: "☁️",
      description: "Cloud computing education program"
    }
  ]

  const getTierColor = (tier) => {
    switch (tier) {
      case 'platinum': return 'from-gray-200 to-gray-400'
      case 'gold': return 'from-yellow-400 to-yellow-600'
      case 'silver': return 'from-gray-300 to-gray-500'
      case 'bronze': return 'from-orange-400 to-orange-600'
      default: return 'from-cyber-blue to-cyber-purple'
    }
  }

  const getTierSize = (tier) => {
    switch (tier) {
      case 'platinum': return 'text-6xl'
      case 'gold': return 'text-5xl'
      case 'silver': return 'text-4xl'
      case 'bronze': return 'text-3xl'
      default: return 'text-4xl'
    }
  }

  return (
    <section id="sponsors" ref={sectionRef} className="relative py-20 lg:py-32 bg-dark-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-cyber-green mb-6">
            Our Sponsors & Partners
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-tech">
            We're proud to collaborate with industry leaders and organizations that share our vision for technological innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-yellow to-cyber-green mx-auto rounded-full mt-6"></div>
        </div>

        {/* Sponsors Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-tech font-bold text-center text-cyber-blue mb-12">
            Our Sponsors
          </h3>
          
          {/* Platinum & Gold Sponsors */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {sponsors.filter(sponsor => sponsor.tier === 'platinum' || sponsor.tier === 'gold').map((sponsor, index) => (
              <div
                key={sponsor.name}
                ref={el => logoRefs.current[index] = el}
                className="group relative bg-dark-card/50 backdrop-blur-sm border border-cyber-blue/20 rounded-xl p-8 hover:border-neon-yellow/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-neon-yellow/20"
              >
                <div className="text-center">
                  <div className={`${getTierSize(sponsor.tier)} mb-4 group-hover:animate-bounce transition-all duration-300`}>
                    {sponsor.logo}
                  </div>
                  <h4 className="text-lg font-tech font-bold text-white mb-2 group-hover:text-neon-yellow transition-colors duration-300">
                    {sponsor.name}
                  </h4>
                  <p className="text-sm text-gray-400 mb-3">{sponsor.description}</p>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-tech font-semibold bg-gradient-to-r ${getTierColor(sponsor.tier)} text-dark-bg`}>
                    {sponsor.tier.toUpperCase()}
                  </div>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-neon-yellow via-cyber-green to-cyber-blue rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>

          {/* Silver & Bronze Sponsors */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsors.filter(sponsor => sponsor.tier === 'silver' || sponsor.tier === 'bronze').map((sponsor, index) => (
              <div
                key={sponsor.name}
                ref={el => logoRefs.current[index + 4] = el}
                className="group relative bg-dark-card/30 backdrop-blur-sm border border-cyber-blue/10 rounded-lg p-6 hover:border-cyber-green/30 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className={`${getTierSize(sponsor.tier)} mb-3 group-hover:animate-pulse transition-all duration-300`}>
                    {sponsor.logo}
                  </div>
                  <h4 className="text-md font-tech font-semibold text-white mb-2 group-hover:text-cyber-green transition-colors duration-300">
                    {sponsor.name}
                  </h4>
                  <p className="text-xs text-gray-400 mb-2">{sponsor.description}</p>
                  <div className={`inline-block px-2 py-1 rounded-full text-xs font-tech bg-gradient-to-r ${getTierColor(sponsor.tier)} text-dark-bg`}>
                    {sponsor.tier.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-tech font-bold text-center text-cyber-green mb-12">
            Strategic Partners
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                ref={el => partnerRefs.current[index] = el}
                className="group relative bg-gradient-to-br from-cyber-green/10 to-cyber-blue/10 backdrop-blur-sm border border-cyber-green/20 rounded-xl p-6 hover:border-cyber-blue/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-cyber-green/20"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:animate-bounce transition-all duration-300">
                    {partner.logo}
                  </div>
                  <h4 className="text-lg font-tech font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors duration-300">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-cyber-green font-tech font-semibold mb-2">
                    {partner.type}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
                
                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-neon-yellow/10 to-cyber-green/10 backdrop-blur-sm border border-neon-yellow/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-tech font-bold text-neon-yellow mb-4">
              Become a Sponsor
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Partner with us to support the next generation of AI and technology innovators. 
              Join our mission to advance technological education and research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-neon-yellow to-cyber-green text-dark-bg font-tech font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-yellow/25 transition-all duration-300 transform hover:scale-105">
                Sponsorship Packages
              </button>
              <button className="px-8 py-3 border-2 border-neon-yellow text-neon-yellow font-tech font-semibold rounded-lg hover:bg-neon-yellow hover:text-dark-bg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-5 w-28 h-28 border border-neon-yellow/20 rotate-45 animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-5 w-20 h-20 border border-cyber-green/20 rotate-12 animate-float"></div>
    </section>
  )
}

export default Sponsors
