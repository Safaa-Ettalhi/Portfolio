import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: 'Bytforce – Technopark Casablanca',
      position: 'Développeuse full-stack',
      period: 'Mai 2025 - Juillet 2025',
      type: 'Stage',
      project: 'Plateforme de création de landing pages avec sous-domaines personnalisés, intégration Stripe et emailing',
      technologies: ['Next.js', 'Laravel', 'PostgreSQL'],
    },
    {
      company: 'Centre Informatique Ville nouvelle Safi',
      position: 'Développeuse full-stack',
      period: 'Avr 2023 - Mai 2023',
      type: 'Stage',
      project: 'Gestion des paiements et des étudiants',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Laravel'],
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 section-header">
            <span className="gradient-text text-glow">Expérience Professionnelle</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-2xl hover:bg-primary-500/10 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-4 bg-primary-500/20 rounded-xl">
                  <FaBriefcase className="text-3xl text-primary-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-semibold">{exp.company}</h3>
                    <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-xl text-primary-400 mb-3">{exp.position}</p>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <FaCalendarAlt />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.project}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 glass rounded-full text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

