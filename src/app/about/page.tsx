'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Instagram, ExternalLink, MapPin, Code2, Heart, Globe } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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

  if (!mounted) return null

  return (
    <section className="min-h-screen px-4 py-12 md:py-24 flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
          {/* Left Column - Profile */}
          <motion.div 
            variants={itemVariants}
            className="text-center lg:text-left"
          >
            {/* Profile Picture */}
            <div className="relative mx-auto lg:mx-0 mb-6 w-48 h-48 lg:w-56 lg:h-56">
              <div className="w-full h-full rounded-full overflow-hidden border-3 border-gray-700 shadow-xl">
                <Image
                  src="/pfpfinal.png"
                  alt="Sheharyar Khan"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Sheharyar Khan
            </h1>
            <p className="text-gray-400 mb-3">
              Web & Agentic AI Developer
            </p>
            <p className="text-gray-500 text-sm mb-6 flex items-center justify-center lg:justify-start gap-2">
              <MapPin className="w-4 h-4" />
              Karachi, Pakistan
            </p>

             {/* Website Link */}
             <div className="mb-6">
               <a 
                 href="https://sherry.xyz"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors justify-center lg:justify-start"
               >
                 <Globe className="w-4 h-4" />
                 <span className="text-sm">sherry.xyz</span>
               </a>
             </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="mailto:sherry258012@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Sherryk16" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/sheharyar-khan10" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/sherryk_10" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Greeting */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                Hi <span className="wave-emoji inline-block">👋</span> I'm Sheharyar!
              </h2>
            </div>

            {/* Professional Summary */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a creative and ambitious developer with <span className="text-cyan-400 font-semibold">over 2 years of experience</span> building 
                modern, high-performance web applications. Based in Karachi, Pakistan, I specialize in the Next.js ecosystem, 
                crafting smooth and responsive user experiences that leave a lasting impression.
              </p>

              <p>
                My expertise spans the full stack — from frontend frameworks like <span className="text-white">React, Tailwind CSS, 
                and GSAP</span> to backend technologies including <span className="text-white">PostgreSQL, Supabase, and Node.js</span>. 
                I'm also experienced in <span className="text-cyan-400">Agentic AI Development</span>, integrating AI models and 
                automation tools like OpenAgent SDK and N8N to build intelligent solutions.
              </p>

              <p>
                Currently, I work as a <span className="text-white font-semibold">Sales Executive & Web Developer at AmH Solutions</span>, 
                where I combine technical expertise with client-facing skills to deliver impactful solutions. My unique background 
                also includes experience as a Solar Inverter Repairing Engineer, which taught me valuable problem-solving and 
                troubleshooting skills.
              </p>

               <p>
                 Beyond coding, I love exploring new technologies and approaching problems from fresh perspectives 
                 to create innovative solutions.
               </p>

              

              <p className="text-cyan-400 font-semibold text-xl">
                Let's build something amazing together <span className="inline-block">🚀</span>
              </p>
            </div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="pt-4">
              <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'TypeScript', 'JavaScript', 'Python', 'Next.js', 'React', 
                  'Tailwind CSS', 'GSAP', 'Framer Motion', 'PostgreSQL', 
                  'Supabase', 'Node.js', 'Prisma', 'Agentic AI', 'N8N',
                  'Clerk', 'Stripe', 'Git', 'Vercel'
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Quick Links or CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-6"
            >
              <a 
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all hover:scale-105"
              >
                <Code2 className="w-5 h-5" />
                View Projects
              </a>
              <a 
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-400 text-white rounded-lg font-medium transition-all hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                Resume
              </a>
            </motion.div>
          </motion.div>
        </div>

      </motion.div>

      <style jsx>{`
        .wave-emoji {
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </section>
  )
}