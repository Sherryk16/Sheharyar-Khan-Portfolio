// app/page.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail, Twitter, Sparkles, ExternalLink } from 'lucide-react'
import { resume } from '@/data/resume'
import { Project } from "@/data/resume"

// Typewriter Hook - Modified to keep cursor permanently
const useTypewriter = (text: string, speed: number = 50, startDelay: number = 500) => {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    
    const startTyping = () => {
      let currentIndex = 0
      
      const typeCharacter = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          currentIndex++
          timeout = setTimeout(typeCharacter, speed)
        } else {
          setIsComplete(true)
          // Cursor stays visible permanently after completion
        }
      }
      
      typeCharacter()
    }

    // Start typing after delay
    timeout = setTimeout(startTyping, startDelay)

    return () => clearTimeout(timeout)
  }, [text, speed, startDelay])

  return { displayText, isComplete }
}

// Icon mapping using local images from public/skills folder
const getSkillIcon = (skillName: string, iconName: string) => {
  const iconMap: { [key: string]: { type: 'local' | 'devicon' | 'emoji', value: string } } = {
    // Local icons from public/skills folder
    'aws': { type: 'local', value: '/skills/aws.png' },
    'chatgpt': { type: 'local', value: '/skills/chatgpt.png' },
    'clerk': { type: 'local', value: '/skills/clerk.png' },
    'cursor': { type: 'local', value: '/skills/cursor.png' },
    'firebase': { type: 'local', value: '/skills/firebase.png' },
    'framer': { type: 'local', value: '/skills/framermotion.png' },
    'gsap': { type: 'local', value: '/skills/gsap.png' },
    'n8n': { type: 'local', value: '/skills/n8n.png' },
    'paypal': { type: 'local', value: '/skills/paypal.png' },
    'python': { type: 'local', value: '/skills/python.png' },
    'stripe': { type: 'local', value: '/skills/stripe.png' },
    'threejs': { type: 'local', value: '/skills/three.png' },
    
    // Standard Devicon icons for common technologies
    'nextjs': { type: 'devicon', value: 'devicon-nextjs-plain colored' },
    'react': { type: 'devicon', value: 'devicon-react-plain colored' },
    'typescript': { type: 'devicon', value: 'devicon-typescript-plain colored' },
    'javascript': { type: 'devicon', value: 'devicon-javascript-plain colored' },
    'tailwindcss': { type: 'devicon', value: 'devicon-tailwindcss-plain colored' },
    'html5': { type: 'devicon', value: 'devicon-html5-plain colored' },
    'css3': { type: 'devicon', value: 'devicon-css3-plain colored' },
    'nodejs': { type: 'devicon', value: 'devicon-nodejs-plain colored' },
    'postgresql': { type: 'devicon', value: 'devicon-postgresql-plain colored' },
    'mongodb': { type: 'devicon', value: 'devicon-mongodb-plain colored' },
    'supabase': { type: 'devicon', value: 'devicon-supabase-plain colored' },
    'git': { type: 'devicon', value: 'devicon-git-plain colored' },
    'github': { type: 'devicon', value: 'devicon-github-plain colored' },
    'vscode': { type: 'devicon', value: 'devicon-vscode-plain colored' },
    'docker': { type: 'devicon', value: 'devicon-docker-plain colored' },
    'vercel': { type: 'devicon', value: 'devicon-vercel-plain colored' },
    
    // AI icon using emoji
    'ai': { type: 'emoji', value: '🤖' },
  }

  const iconData = iconMap[iconName]
  
  return iconData
}

// Skills organized by categories - only includes skills with available icons
const skillsByCategory = {
  Frontend: [
    { name: "Next.js", icon: "nextjs" },
    { name: "React", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "GSAP", icon: "gsap" },
    { name: "Framer Motion", icon: "framer" },
    { name: "Three.js", icon: "threejs" }
  ],
  Backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Python", icon: "python" }
  ],
  Database: [
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Supabase", icon: "supabase" },
    { name: "Firebase", icon: "firebase" }
  ],
  Tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
    { name: "Cursor", icon: "cursor" },
    { name: "Docker", icon: "docker" },
    { name: "ChatGPT", icon: "chatgpt" },
    { name: "N8N", icon: "n8n" },
    { name: "Vercel", icon: "vercel" },
    { name: "AWS", icon: "aws" }
  ],
  AI: [
    { name: "Agentic AI", icon: "ai" },
    { name: "OpenAgent SDK", icon: "ai" }
  ],
  Services: [
    { name: "Stripe", icon: "stripe" },
    { name: "PayPal", icon: "paypal" },
    { name: "Clerk", icon: "clerk" }
  ]
}

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSkillCategory, setActiveSkillCategory] = useState('Frontend')
  const [showContent, setShowContent] = useState(false)
  
  // Typewriter animation only for the name
  const name = useTypewriter(resume.name, 80, 500)
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Show additional content after name animation
  useEffect(() => {
    if (name.isComplete) {
      setTimeout(() => setShowContent(true), 300)
    }
  }, [name.isComplete])

  const neonHeadingStyle: React.CSSProperties = {
    color: '#00ffdf'
  }

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      {/* Animated Background */}
      

      {/* Global navbar already rendered via layout; removed local navbar to avoid duplicates */}

      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl w-full mx-auto text-center">
          {/* Main Heading with Typewriter Effect only on Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Hi, I'm</span>
            <br />
            <span
              className="inline-block"
              style={{ color: "#00ffdf" }}
            >
              {name.displayText}
              <span className="cursor-blink text-white">|</span>
            </span>
          </h1>

          {/* Role - Static, no animation */}
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
            style={{ color: "#00ffdf" }}
          >
            {resume.role}
          </p>

          {/* Bio - Fade in after typewriter */}
          <div className={`transition-all duration-800 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg md:text-xl leading-relaxed">
              {resume.bio}
            </p>

            {/* Contact Links */}
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://github.com/Sherryk16"
                className="p-3 rounded-full border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,223,0.3)]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/sheharyar-khan10"
                className="p-3 rounded-full border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,223,0.3)]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${resume.email}`}
                className="p-3 rounded-full border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,223,0.3)]"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/Sherryk16"
                className="p-3 rounded-full border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,223,0.3)]"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold text-lg hover:shadow-[0_0_30px_rgba(0,255,223,0.5)] transition-all transform hover:scale-105">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={`mailto:${resume.email}?subject=Hiring Inquiry`}
                className="px-8 py-4 rounded-full font-semibold text-white text-lg border border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all hover:shadow-[0_0_20px_rgba(0,255,223,0.2)]"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Skills Section */}
      <section id="skills" className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={neonHeadingStyle}>Technical Skills</h2>
            <p className="text-gray-400">Click on categories to explore my expertise</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {Object.keys(skillsByCategory).map((category) => (
              <button
                key={category}
                onClick={() => setActiveSkillCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeSkillCategory === category
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 shadow-lg'
                    : 'bg-slate-800/50 text-gray-300 border border-cyan-400/20 hover:border-cyan-400/40 hover:bg-cyan-400/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
              {skillsByCategory[activeSkillCategory as keyof typeof skillsByCategory]?.map((skill, i) => (
                <div 
                  key={skill.name}
                  className="group flex flex-col items-center p-4 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all cursor-pointer"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform flex items-center justify-center">
                    {(() => {
                      const iconData = getSkillIcon(skill.name, skill.icon);
                      if (iconData?.type === 'devicon') {
                        return <i className={iconData.value}></i>;
                      } else if (iconData?.type === 'local') {
                        return <img src={iconData.value} alt={skill.name} className="w-8 h-8 object-contain" />;
                      } else if (iconData?.type === 'emoji') {
                        return <span className="text-2xl">{iconData.value}</span>;
                      } else {
                        return <span className="text-2xl">?</span>;
                      }
                    })()}
                  </div>
                  
                  {/* Skill Name */}
                  <span className="text-cyan-200 group-hover:text-cyan-300 transition-colors text-xs font-medium text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={neonHeadingStyle}>Professional Experience</h2>
            <p className="text-gray-400">My journey in technology and development</p>
          </div>

          <div className="space-y-8">
            {resume.experience.map((exp, i) => (
              <div 
                key={i} 
                className="group relative rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-8 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,223,0.2)]"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{exp.role}</h3>
                      <p className="text-cyan-400 text-lg font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm text-cyan-300 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/30 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">{exp.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects with Scrolling Images */}
      <section id="projects" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={neonHeadingStyle}>Featured Projects</h2>
            <p className="text-gray-400">Hover to preview the full website</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resume.projects.map((project, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden border border-cyan-400/20 bg-slate-900/50 hover:border-cyan-400/40 transition-all hover:shadow-[0_0_30px_rgba(0,255,223,0.2)]">
                {/* Scrolling Image Container */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                  <img 
                    src={project.image.replace("/public", "")} 
                    alt={project.name}
                    className="w-full object-cover object-top transition-all duration-3000 group-hover:transform group-hover:-translate-y-[calc(100%-12rem)]"
                    style={{
                      height: 'auto',
                      minHeight: '100%',
                      transition: 'transform 3s ease-in-out'
                    }}
                  />
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-lg hover:bg-cyan-400/20 hover:border-cyan-400/40 transition-all"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Website
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-300 bg-gray-800/50 border border-gray-600/20 rounded-lg hover:bg-gray-700/50 hover:border-gray-500/40 transition-all"
                    >
                      <Github className="w-3 h-3" />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors text-lg"
            >
              See all projects 
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Add custom CSS for better cursor blinking */}
      <style jsx>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        /* Ensure smooth transitions */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  )
}