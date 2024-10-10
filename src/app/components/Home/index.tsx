import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [text, setText] = useState('')
  const fullText = "I'm a passionate developer creating amazing web experiences"

  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, 100)

    return () => clearInterval(typingEffect)
  }, [])

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>
        <p className="text-xl mb-8 h-8">{text}</p>
        <motion.a 
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300"
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  )
}
