'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-3 left-0 right-0 z-[100] transition-all duration-300`}
    >
      <div className="px-4">
        <div
          className={`mx-auto max-w-6xl rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-slate-900/80 border-cyan-400/30 backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,223,0.15)]'
              : 'bg-slate-900/60 border-cyan-400/20 backdrop-blur-lg'
          }`}
        >
        <div className="flex items-center justify-between h-12 px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium transition-colors duration-300"
                style={{
                  color: pathname === item.href ? '#00ffdf' : '#d1d5db'
                }}
                onMouseEnter={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.color = '#00ffdf'
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== item.href) {
                    e.currentTarget.style.color = '#d1d5db'
                  }
                }}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: '#00ffdf', boxShadow: '0 0 10px rgba(0,255,223,0.8)' }}
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="mx-auto max-w-6xl mt-2 rounded-2xl border border-cyan-400/20 bg-slate-900/70 backdrop-blur-lg py-3 space-y-2 px-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  pathname === item.href
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
