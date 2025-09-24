import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Events = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const horizontalRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const horizontal = horizontalRef.current

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

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

    // Check if horizontal element exists and has content
    if (horizontal && horizontal.children.length > 0) {
      console.log('Setting up horizontal scroll for Events section')
      console.log('Horizontal container width:', horizontal.scrollWidth)
      console.log('Container offset width:', horizontal.offsetWidth)
      console.log('Number of event cards:', horizontal.children.length)

      const totalWidth = horizontal.scrollWidth - horizontal.offsetWidth

      // Only set up horizontal scroll if we have enough content to scroll
      if (totalWidth > 0) {
        console.log('Total scrollable width:', totalWidth)

        // Horizontal scrolling setup
        const horizontalScrollTween = gsap.to(horizontal, {
          x: () => -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + totalWidth,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              console.log('Horizontal scroll progress:', self.progress)
            },
            onEnter: () => console.log('Entered horizontal scroll section'),
            onLeave: () => console.log('Left horizontal scroll section'),
            onEnterBack: () => console.log('Re-entered horizontal scroll section'),
            onLeaveBack: () => console.log('Left horizontal scroll section backwards'),
          }
        })

        // Cleanup function
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill())
          horizontalScrollTween.kill()
        }
      } else {
        console.warn('No horizontal scroll needed - content fits in container')
      }
    } else {
      console.warn('Horizontal container not found or empty')
    }
  }, [])

  const events = [
    {
      id: 1,
      title: "AI Hackathon 2024",
      date: "March 15-17, 2024",
      type: "Competition",
      status: "upcoming",
      description: "48-hour intensive hackathon focusing on AI solutions for real-world problems. Teams will compete for prizes worth $10,000.",
      image: "🏆",
      tags: ["AI", "Machine Learning", "Competition"],
      participants: "200+ Expected"
    },
    {
      id: 2,
      title: "Web3 Workshop Series",
      date: "February 20-22, 2024",
      type: "Workshop",
      status: "registration-open",
      description: "Comprehensive workshop series covering blockchain technology, smart contracts, and decentralized applications.",
      image: "⛓️",
      tags: ["Blockchain", "Web3", "Smart Contracts"],
      participants: "50 Seats Available"
    },
    {
      id: 3,
      title: "Tech Talk: Future of AI",
      date: "January 28, 2024",
      type: "Seminar",
      status: "completed",
      description: "Industry experts discuss the latest trends and future prospects of artificial intelligence in various sectors.",
      image: "🎤",
      tags: ["AI", "Industry Insights", "Networking"],
      participants: "150 Attended"
    },
    {
      id: 4,
      title: "Code & Coffee",
      date: "Every Friday",
      type: "Meetup",
      status: "ongoing",
      description: "Weekly casual meetups for coding, collaboration, and community building. Open to all skill levels.",
      image: "☕",
      tags: ["Networking", "Coding", "Community"],
      participants: "30-40 Weekly"
    },
    {
      id: 5,
      title: "Data Science Bootcamp",
      date: "April 5-12, 2024",
      type: "Bootcamp",
      status: "upcoming",
      description: "Intensive 7-day bootcamp covering data analysis, visualization, and machine learning fundamentals.",
      image: "📊",
      tags: ["Data Science", "Python", "Analytics"],
      participants: "Registration Soon"
    },
    {
      id: 6,
      title: "Startup Pitch Night",
      date: "May 10, 2024",
      type: "Competition",
      status: "upcoming",
      description: "Student entrepreneurs pitch their tech startups to industry investors and mentors.",
      image: "💡",
      tags: ["Entrepreneurship", "Startups", "Pitching"],
      participants: "20 Startups Expected"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'text-cyber-blue border-cyber-blue/30 bg-cyber-blue/10'
      case 'registration-open': return 'text-cyber-green border-cyber-green/30 bg-cyber-green/10'
      case 'completed': return 'text-gray-400 border-gray-400/30 bg-gray-400/10'
      case 'ongoing': return 'text-cyber-purple border-cyber-purple/30 bg-cyber-purple/10'
      default: return 'text-gray-400 border-gray-400/30 bg-gray-400/10'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'upcoming': return 'Upcoming'
      case 'registration-open': return 'Open Registration'
      case 'completed': return 'Completed'
      case 'ongoing': return 'Ongoing'
      default: return 'TBD'
    }
  }

  return (
    <section id="events" ref={sectionRef} className="relative bg-dark-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>

      <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-pink mb-6">
            Events & Workshops
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-tech">
            Join our exciting events, workshops, and competitions designed to enhance your skills and expand your network.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-pink mx-auto rounded-full mt-6"></div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative w-full overflow-hidden">
          {/* Pinned Section for ScrollTrigger */}
          <div
            ref={horizontalRef}
            className="flex gap-8 pb-8"
            style={{
              width: `${events.length * 400}px`, // Fixed width based on number of events
              minWidth: 'max-content'
            }}
          >
            {events.map((event, index) => (
              <div
                key={event.id}
                ref={el => cardsRef.current[index] = el}
                className="group relative bg-dark-card/50 backdrop-blur-sm border border-cyber-blue/20 rounded-xl overflow-hidden hover:border-cyber-purple/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyber-purple/20 w-80 flex-shrink-0"
                style={{ minWidth: '320px' }}
              >
                {/* Event Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 flex items-center justify-center">
                  <div className="text-6xl group-hover:animate-bounce transition-all duration-300">
                    {event.image}
                  </div>

                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-tech font-semibold border ${getStatusColor(event.status)}`}>
                    {getStatusText(event.status)}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-tech text-cyber-blue">{event.type}</span>
                    <span className="text-sm font-tech text-gray-400">{event.date}</span>
                  </div>

                  <h3 className="text-xl font-tech font-bold text-white mb-3 group-hover:text-cyber-purple transition-colors duration-300">
                    {event.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-cyber-blue/10 text-cyber-blue text-xs rounded-full font-tech"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Participants */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400 font-tech">
                      👥 {event.participants}
                    </span>

                    <button className="px-4 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white text-sm font-tech font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/25">
                      {event.status === 'completed' ? 'View Details' :
                       event.status === 'registration-open' ? 'Register Now' :
                       'Learn More'}
                    </button>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 backdrop-blur-sm border border-cyber-blue/20 rounded-2xl p-8">
            <h3 className="text-2xl font-tech font-bold text-cyber-blue mb-4">
              Don't Miss Out!
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Stay updated with our latest events and workshops. Join our community to receive notifications about upcoming events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-tech font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300 transform hover:scale-105">
                Subscribe to Updates
              </button>
              <button className="px-8 py-3 border-2 border-cyber-blue text-cyber-blue font-tech font-semibold rounded-lg hover:bg-cyber-blue hover:text-dark-bg transition-all duration-300 transform hover:scale-105">
                View Calendar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <div className="bg-dark-card/80 backdrop-blur-sm border border-cyber-blue/20 rounded-lg p-4">
          <div className="text-cyber-blue text-sm font-tech mb-2">Scroll</div>
          <div className="flex flex-col gap-1">
            <div className="w-1 h-3 bg-cyber-blue rounded-full animate-pulse"></div>
            <div className="w-1 h-3 bg-cyber-blue/60 rounded-full"></div>
            <div className="w-1 h-3 bg-cyber-blue/30 rounded-full"></div>
          </div>
          <div className="text-cyber-blue text-xs font-tech mt-2 rotate-90">→</div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-40 left-5 w-20 h-20 border border-cyber-purple/20 rotate-45 animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-5 w-16 h-16 border border-cyber-blue/20 rotate-12 animate-float"></div>
    </section>
  )
}

export default Events
