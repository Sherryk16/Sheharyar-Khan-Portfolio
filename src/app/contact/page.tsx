'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        const errorData = await response.json()
        alert(`Error: ${errorData.error || 'Failed to send message'}`)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="min-h-screen px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Page Title */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            <span className="gradient-text">Get In Touch</span>
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Send a Message</h2>
                <p className="text-gray-400">
                  Have a project in mind? Let's discuss how we can bring your ideas to life.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg 
                               focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 
                               transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg 
                               focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 
                               transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg 
                             focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 
                             transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg 
                             focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 
                             transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full neon-button flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact Information</h2>
                <p className="text-gray-400">
                  Feel free to reach out through any of these channels. I'm always excited to work on new projects!
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <motion.a
                  href="mailto:sherry258012@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:bg-cyan-400/5 
                           transition-all duration-300 group"
                >
                  <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-gray-400 text-sm">sherry258012@gmail.com</p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="tel:+923252163806"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover:bg-cyan-400/5 
                           transition-all duration-300 group"
                >
                  <div className="p-3 bg-cyan-400/10 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Phone</h3>
                    <p className="text-gray-400 text-sm">+92 325 2163806</p>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-lg"
                >
                  <div className="p-3 bg-cyan-400/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Location</h3>
                    <p className="text-gray-400 text-sm">Karachi, Pakistan</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/Sherryk16"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-slate-800/50 hover:bg-cyan-400/10 border border-cyan-400/20 
                             hover:border-cyan-400/40 rounded-lg transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/sheharyar-khan10"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-slate-800/50 hover:bg-cyan-400/10 border border-cyan-400/20 
                             hover:border-cyan-400/40 rounded-lg transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="fixed top-1/4 -left-10 w-40 h-40 bg-cyan-400/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="fixed bottom-1/4 -right-10 w-60 h-60 bg-blue-400/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}