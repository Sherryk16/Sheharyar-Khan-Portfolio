// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ParticlesBackground from '@/components/ParticlesBackground'
import ConditionalFooter from '@/components/ConditionalFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sheharyar Khan - Portfolio',
  description: 'Web & Agentic AI Developer Portfolio',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-white overflow-x-hidden`}>
        <ParticlesBackground />
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <ConditionalFooter />
        </div>
      </body>
    </html>
  )
}