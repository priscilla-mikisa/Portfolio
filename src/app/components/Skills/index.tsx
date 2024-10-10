import React from 'react'
import { motion } from 'framer-motion'

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Kotlin', level: 80, category: 'Android' },
    { name: 'Android Development', level: 50, category: 'Android' },
    { name: 'UI Design', level: 85, category: 'Design' },
    { name: 'UX Design', level: 80, category: 'Design' },
    { name: 'UX Research', level: 75, category: 'Design' },
    { name: 'Python', level: 85, category: 'Backend' },
    { name: 'Django', level: 80, category: 'Backend' },
    { name: 'Devops', level: 50, category: 'Backend' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Heroku', level: 60, category: 'Tools' },
    { name: 'Data Cleaning', level: 65, category: 'Data Science and Systems Architecture' },
    { name: 'SQL', level: 85, category: 'Data Science and Systems Architecture' },
    { name: 'Machine Learning', level: 70, category: 'Data Science and Systems Architecture' },
    { name: 'Algorithms', level: 85, category: 'Data Science and Systems Architecture' },
  ]

  const categories = Array.from(new Set(skills.map(skill => skill.category)))

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div 
              key={category}
              className="bg-white dark:bg-gray-800 rounded-lg drop-shadow-[3px_3px_6px_rgba(0,0,0,0.5)] p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{category}</h3>
              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <motion.div 
                        className="bg-blue-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills