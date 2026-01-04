import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'

const Education = () => {
  const educations = [
    {
      institution: 'YOUCODE - UM6P',
      period: '2024-2026',
      degree: 'Développement web full stack',
      description: 'Formation intensive en développement web full stack',
    },
    {
      institution: 'OFPPT-ISTA NTIC SAFI',
      period: '2021-2023',
      degree: 'Développement Digital',
      description: 'Formation en développement digital',
    },
    {
      institution: 'IBN MOULAY EL HAJ-SAFI',
      period: '2020-2021',
      degree: 'Baccalauréat en Physique-Chimie',
      description: 'Baccalauréat scientifique',
    },
  ]

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 section-header">
            <span className="gradient-text text-glow">Formation</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-600"></div>

            {educations.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-20 pb-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute left-6 top-2 w-4 h-4 bg-primary-500 rounded-full glow"></div>

                <div className="glass p-6 rounded-xl hover:bg-primary-500/10 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary-500/20 rounded-lg">
                      <FaGraduationCap className="text-2xl text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-2">{edu.institution}</h3>
                      <p className="text-primary-400 font-medium mb-2">{edu.degree}</p>
                      <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

