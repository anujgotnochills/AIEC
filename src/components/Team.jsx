import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Team = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
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

    // Cards stagger animation with 3D effect
    gsap.fromTo(cards,
      { y: 100, opacity: 0, rotationX: 45, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "bottom 20%",
        }
      }
    )
  }, [])

  const teamMembers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "President & AI Research Lead",
      bio: "PhD candidate in Machine Learning with 5+ years of experience in deep learning and computer vision.",
      avatar: "👨‍💻",
      skills: ["Machine Learning", "Python", "TensorFlow"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      },
      achievements: "Published 12 research papers"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Vice President & Full-Stack Developer",
      bio: "Senior CS student specializing in web technologies and cloud computing architecture.",
      avatar: "👩‍💻",
      skills: ["React", "Node.js", "AWS"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      },
      achievements: "Led 15+ successful projects"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Technical Director",
      bio: "Blockchain enthusiast and cybersecurity expert with experience in smart contract development.",
      avatar: "🧑‍💼",
      skills: ["Blockchain", "Solidity", "Cybersecurity"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      },
      achievements: "Certified Ethical Hacker"
    },
    {
      id: 4,
      name: "Emily Wang",
      role: "Events Coordinator",
      bio: "Master's student in Data Science with a passion for organizing tech events and workshops.",
      avatar: "👩‍🎓",
      skills: ["Data Science", "R", "Event Management"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      },
      achievements: "Organized 50+ events"
    },
    {
      id: 5,
      name: "David Kim",
      role: "Marketing & Outreach Lead",
      bio: "Digital marketing specialist and content creator focused on tech community building.",
      avatar: "👨‍🎨",
      skills: ["Digital Marketing", "Content Creation", "SEO"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      },
      achievements: "Grew community by 300%"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      role: "Research Coordinator",
      bio: "PhD researcher in AI Ethics and Responsible AI with focus on bias detection in ML models.",
      avatar: "👩‍🔬",
      skills: ["AI Ethics", "Research", "Python"],
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      },
      achievements: "AI Ethics Award Winner"
    }
  ]

  return (
    <section id="team" ref={sectionRef} className="relative py-20 lg:py-32 bg-gradient-to-b from-dark-card to-dark-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-green to-cyber-blue mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-tech">
            Passionate innovators, researchers, and leaders driving the future of AI and technology.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto rounded-full mt-6"></div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              ref={el => cardsRef.current[index] = el}
              className="group relative bg-dark-card/50 backdrop-blur-sm border border-cyber-blue/20 rounded-2xl overflow-hidden hover:border-cyber-green/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyber-green/20"
            >
              {/* Card Header */}
              <div className="relative p-6 pb-4">
                {/* Avatar */}
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-cyber-blue/20 to-cyber-green/20 rounded-full flex items-center justify-center text-4xl group-hover:animate-bounce transition-all duration-300">
                  {member.avatar}
                </div>

                {/* Name and Role */}
                <h3 className="text-xl font-tech font-bold text-white text-center mb-2 group-hover:text-cyber-green transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-cyber-blue text-center font-tech font-semibold mb-4">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-gray-300 text-sm leading-relaxed text-center mb-4">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-cyber-green/10 text-cyber-green text-xs rounded-full font-tech"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Achievement */}
                <div className="text-center mb-4">
                  <span className="text-xs text-gray-400 font-tech">
                    🏆 {member.achievements}
                  </span>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-cyber-blue/20 hover:bg-cyber-blue/40 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-cyber-blue text-sm">💼</span>
                  </a>
                  <a
                    href={member.social.github}
                    className="w-8 h-8 bg-cyber-purple/20 hover:bg-cyber-purple/40 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-cyber-purple text-sm">🐙</span>
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 bg-cyber-green/20 hover:bg-cyber-green/40 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <span className="text-cyber-green text-sm">🐦</span>
                  </a>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyber-green via-cyber-blue to-cyber-purple rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

              {/* Floating Particles Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute top-4 left-4 w-2 h-2 bg-cyber-green rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
                <div className="absolute top-8 right-6 w-1 h-1 bg-cyber-blue rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-cyber-purple rounded-full opacity-0 group-hover:opacity-100 animate-bounce"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyber-green/10 to-cyber-blue/10 backdrop-blur-sm border border-cyber-green/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-tech font-bold text-cyber-green mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to make a difference in the world of AI and technology. 
              Join us and be part of something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyber-green to-cyber-blue text-white font-tech font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-green/25 transition-all duration-300 transform hover:scale-105">
                Apply Now
              </button>
              <button className="px-8 py-3 border-2 border-cyber-green text-cyber-green font-tech font-semibold rounded-lg hover:bg-cyber-green hover:text-dark-bg transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 border border-cyber-green/20 rotate-45 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 border border-cyber-blue/20 rotate-12 animate-float"></div>
    </section>
  )
}

export default Team
