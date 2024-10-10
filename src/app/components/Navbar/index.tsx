import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg dark:bg-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Priscilla
          </h2>
          <div className="flex items-center space-x-20">
            <Link href="#home" className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Home</Link>
            <Link href="#about" className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</Link>
            <Link href="#skills" className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Skills</Link>
            <Link href="#projects" className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Projects</Link>
            <Link href="#contact" className="text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</Link>
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5 text-yellow-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar