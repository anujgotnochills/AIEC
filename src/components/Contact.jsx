import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const form = formRef.current
    const info = infoRef.current

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

    // Form animation
    gsap.fromTo(form,
      { x: -50, opacity: 0 },
      {
        x: 0,
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

    // Info animation
    gsap.fromTo(info,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 20%",
        }
      }
    )
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "contact@aiec.edu",
      description: "Send us an email anytime"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call us during office hours"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Tech Campus, Room 301",
      description: "Visit us on campus"
    },
    {
      icon: "🕒",
      title: "Office Hours",
      value: "Mon-Fri 9AM-5PM",
      description: "We're here to help"
    }
  ]

  const socialLinks = [
    { name: "Discord", icon: "💬", url: "#", color: "hover:text-purple-400" },
    { name: "LinkedIn", icon: "💼", url: "#", color: "hover:text-blue-400" },
    { name: "Twitter", icon: "🐦", url: "#", color: "hover:text-cyan-400" },
    { name: "GitHub", icon: "🐙", url: "#", color: "hover:text-gray-400" },
    { name: "YouTube", icon: "📺", url: "#", color: "hover:text-red-400" },
    { name: "Instagram", icon: "📸", url: "#", color: "hover:text-pink-400" }
  ]

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 lg:py-32 bg-gradient-to-b from-dark-card to-dark-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink to-neon-yellow mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-tech">
            Ready to join our community or have questions? We'd love to hear from you. 
            Let's build the future of technology together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-pink to-neon-yellow mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div ref={formRef} className="bg-dark-card/50 backdrop-blur-sm border border-cyber-blue/20 rounded-2xl p-8">
            <h3 className="text-2xl font-tech font-bold text-cyber-blue mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-tech text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg/50 border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-tech text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg/50 border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-tech text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-tech text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-bg/50 border border-cyber-blue/30 rounded-lg text-white placeholder-gray-400 focus:border-cyber-blue focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 transition-all duration-300 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-tech font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-blue/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyber-blue/50"
              >
                Send Message 🚀
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-tech font-bold text-cyber-green mb-6">
                Contact Information
              </h3>
              
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-4 bg-dark-card/30 backdrop-blur-sm border border-cyber-green/20 rounded-xl hover:border-cyber-green/50 transition-all duration-300">
                    <div className="text-2xl group-hover:animate-bounce transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-tech font-semibold text-white mb-1 group-hover:text-cyber-green transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-cyber-green font-tech font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-gray-400">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h3 className="text-2xl font-tech font-bold text-cyber-pink mb-6">
                Follow Us
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`group flex flex-col items-center p-4 bg-dark-card/30 backdrop-blur-sm border border-cyber-pink/20 rounded-xl hover:border-cyber-pink/50 transition-all duration-300 transform hover:scale-105 ${social.color}`}
                  >
                    <div className="text-2xl mb-2 group-hover:animate-bounce transition-all duration-300">
                      {social.icon}
                    </div>
                    <span className="text-sm font-tech text-gray-300 group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-r from-cyber-pink/10 to-neon-yellow/10 backdrop-blur-sm border border-cyber-pink/20 rounded-xl p-6">
              <h4 className="text-lg font-tech font-bold text-cyber-pink mb-4">
                Quick Actions
              </h4>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-2 bg-cyber-pink/20 hover:bg-cyber-pink/30 text-cyber-pink rounded-lg transition-all duration-300 font-tech">
                  📝 Join Our Newsletter
                </button>
                <button className="w-full text-left px-4 py-2 bg-neon-yellow/20 hover:bg-neon-yellow/30 text-neon-yellow rounded-lg transition-all duration-300 font-tech">
                  🎫 Upcoming Events
                </button>
                <button className="w-full text-left px-4 py-2 bg-cyber-blue/20 hover:bg-cyber-blue/30 text-cyber-blue rounded-lg transition-all duration-300 font-tech">
                  👥 Become a Member
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-cyber-blue/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-cyber font-bold text-cyber-blue animate-glow">
                AIEC
              </div>
              <div className="text-sm text-gray-400 font-tech">
                AI & Technology Society
              </div>
            </div>
            
            <div className="text-sm text-gray-400 font-tech">
              © 2024 AIEC. Built with ❤️ and cutting-edge technology.
            </div>
            
            <div className="flex space-x-4 text-sm font-tech">
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-cyber-pink/20 rotate-45 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-neon-yellow/20 rotate-12 animate-float"></div>
    </section>
  )
}

export default Contact
