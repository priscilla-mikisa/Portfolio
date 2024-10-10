import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
             src="/images/24.07.24-172.jpg" alt="Profile"
              className="rounded-full mx-auto drop-shadow-[3px_3px_6px_rgba(0,0,0,0.5)]"
              width="300" 
              height="300" 
             />
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a passionate web developer with a keen eye for design and a love for creating seamless user experiences. 
              With expertise in modern web technologies, I strive to build applications that not only look great but also 
              perform exceptionally well. My journey in web development has been driven by curiosity and a constant desire 
              to learn and improve.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
