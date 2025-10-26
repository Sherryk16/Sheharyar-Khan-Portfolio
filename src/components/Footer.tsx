'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { resume } from '@/lib/resume'

const socialLinks = [
  { icon: Github, href: resume.socials[0].href, label: 'GitHub' },
  { icon: Linkedin, href: resume.socials[1].href, label: 'LinkedIn' },
  { icon: Mail, href: resume.socials[2].href, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950/50 border-t border-cyan-400/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div>
              <span className="text-xl font-bold text-white">Sheharyar Khan</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Web & Agentic AI Developer crafting modern digital experiences with cutting-edge technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label !== 'Email' ? '_blank' : undefined}
                    rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-slate-800/50 hover:bg-cyan-400/10 border border-cyan-400/20 hover:border-cyan-400/40 rounded-lg transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-cyan-400/20 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Sheharyar Khan. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Built with</span>
            <div className="flex items-center space-x-1">
              <span className="text-red-400">♥</span>
              <span className="text-cyan-400 text-sm">Next.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
