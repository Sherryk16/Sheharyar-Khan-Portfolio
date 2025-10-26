'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ExternalLink, Github, Sparkles, Code2, ChevronRight, Layers, Cpu } from 'lucide-react'
import { resume, Project } from "@/data/resume"

// Props type for ProjectCard
interface ProjectCardProps {
  project: Project;
  index: number;
}

// Project Card Component with Scrolling Image
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-scroll on mobile
  useEffect(() => {
    if (isMobile && imageRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              img.style.transform = 'translateY(0%)'
              setTimeout(() => {
                img.style.transform = 'translateY(calc(-100% + 280px))'
              }, 500)
            } else {
              const img = entry.target as HTMLImageElement
              img.style.transform = 'translateY(0%)'
            }
          })
        },
        { threshold: 0.3 }
      )

      observer.observe(imageRef.current)
      return () => observer.disconnect()
    }
  }, [isMobile])

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false)
    }
  }

  const handleLiveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
  }

  const handleGithubClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    window.open(project.githubUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      className="group relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative rounded-2xl overflow-hidden border border-cyan-400/20 bg-slate-900/80 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,223,0.3)]">
        
        {/* Gradient Border Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Scrolling Image Container */}
        <div className="relative h-[280px] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
          {/* Image Wrapper for Scroll */}
          <div className="absolute inset-x-0 top-0">
            <img
              ref={imageRef}
              src={project.image.replace("/public", "")}
              alt={project.name}
              className="w-full transition-transform duration-[4000ms] ease-in-out"
              style={{
                transform: isHovered && !isMobile ? 'translateY(calc(-100% + 280px))' : 'translateY(0)',
                minHeight: '280px',
                objectFit: 'cover',
                objectPosition: 'top'
              }}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = `https://via.placeholder.com/600x1200/0f172a/04d9ff?text=${encodeURIComponent(project.name)}`
              }}
            />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-transparent pointer-events-none" />

          {/* Floating Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm border border-cyan-400/30">
            <span className="text-xs text-cyan-300 font-semibold">Live Preview</span>
          </div>
        </div>

        {/* Project Details */}
        <div className="p-6 space-y-4">
          {/* Title with Icon */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              {project.name}
            </h3>
            <Sparkles className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${
              isHovered ? 'rotate-180' : ''
            }`} />
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag, i) => (
              <span
                key={`${project.name}-${tag}`}
                className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-full hover:bg-cyan-400/20 transition-colors"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-3 py-1 text-xs text-gray-400">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>

          {/* Action Buttons - Always visible under the project details */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={handleLiveClick}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,255,223,0.5)] transition-all transform hover:scale-[1.02]"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </button>
            <button
              onClick={handleGithubClick}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all transform hover:scale-[1.02]"
            >
              <Github className="w-4 h-4" />
              Code
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage(): JSX.Element {
  const [filter, setFilter] = useState<string>('all')

  const filters: string[] = ['all', 'Next.js', 'AI/ML', 'Python', 'Full-Stack', 'E-commerce']

  const filteredProjects: Project[] = resume.projects.filter(project => {
    if (filter === 'all') return true
    return project.tags.some(tag => 
      tag.toLowerCase().includes(filter.toLowerCase()) ||
      (filter === 'AI/ML' && (tag.includes('AI') || tag.includes('Machine Learning')))
    )
  })

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div 
          className="absolute top-1/3 -left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(0,255,223,0.2) 0%, transparent 70%)' }} 
        />
        <div 
          className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(125,255,252,0.2) 0%, transparent 70%)' }} 
        />
      </div>

      {/* Main Content */}
      <section className="px-6 pt-16 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-6">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300 font-medium">{resume.projects.length} Projects Completed</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300"
                style={{
                  textShadow: '0 0 40px rgba(0,255,223,0.4), 0 0 80px rgba(0,255,223,0.2)',
                  WebkitTextStroke: '1px rgba(0,255,223,0.1)'
                }}
              >
                Featured Projects
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Explore my portfolio of full-stack applications, AI-powered tools, and innovative web solutions. 
              Hover over images to see full website previews.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    filter === f
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 shadow-[0_0_20px_rgba(0,255,223,0.3)]'
                      : 'bg-slate-800/50 text-gray-400 border border-slate-700 hover:border-cyan-400/30 hover:text-cyan-300'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resume.projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-24 text-center">
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-cyan-400/20 bg-slate-900/50 backdrop-blur-sm">
              <Cpu className="w-12 h-12 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Have a project in mind?</h3>
              <p className="text-gray-400 max-w-md">
                Let's collaborate and build something amazing together
              </p>
              <button
                onClick={() => window.open('/contact', '_self')}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 rounded-full font-bold hover:shadow-[0_0_30px_rgba(0,255,223,0.5)] transition-all transform hover:scale-105"
              >
                Get In Touch
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}