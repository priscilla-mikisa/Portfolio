"use client"
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'


export default function Portfolio() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar theme={theme as string} setTheme={setTheme} />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-gray-900 text-white text-center py-4">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  )
}