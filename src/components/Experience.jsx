import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaCode } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      company: 'Bytforce – Technopark Casablanca',
      position: 'Développeuse full-stack',
      period: 'Mai 2025 - Juillet 2025',
      type: 'Stage',
      project: 'Plateforme de création de landing pages avec sous-domaines personnalisés, intégration Stripe et emailing',
      technologies: ['Next.js', 'Laravel', 'PostgreSQL', 'Tailwind CSS', 'UML', 'Jira'],
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
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 section-header"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text text-glow">Expérience Professionnelle</span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-base sm:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Parcours et réalisations professionnelles
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-strong p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl hover:bg-primary-500/10 transition-all duration-500 relative overflow-hidden group card-hover"
              initial={{ opacity: 0, y: 60, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{ scale: 1.03, y: -10, rotateY: 2 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/20 via-purple-600/20 to-pink-500/20 blur-xl"></div>
              </div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <motion.div 
                    className="p-3 sm:p-4 md:p-5 bg-gradient-to-br from-primary-500/30 to-purple-600/30 rounded-xl sm:rounded-2xl relative overflow-hidden group/icon flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/50 to-purple-600/50 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                    <FaBriefcase className="text-2xl sm:text-3xl md:text-4xl text-primary-400 relative z-10 drop-shadow-lg" />
                    <div className="absolute inset-0 bg-primary-500/20 blur-xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                  
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-2 sm:gap-3">
                      <motion.h3 
                        className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent group-hover:from-primary-400 group-hover:via-white group-hover:to-primary-400 transition-all duration-500"
                        whileHover={{ x: 5 }}
                      >
                        {exp.company}
                      </motion.h3>
                      <motion.span 
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary-500/30 to-purple-600/30 text-primary-300 rounded-full text-xs sm:text-sm font-semibold border border-primary-500/50 shadow-lg shadow-primary-500/20 self-start sm:self-auto"
                        whileHover={{ scale: 1.1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        {exp.type}
                      </motion.span>
                    </div>
                    
                    <motion.p 
                      className="text-lg sm:text-xl text-primary-400 mb-3 sm:mb-4 font-semibold"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.1 }}
                    >
                      {exp.position}
                    </motion.p>
                    
                    <motion.div 
                      className="flex items-center gap-2 sm:gap-3 text-gray-400 mb-4 sm:mb-5"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.2 }}
                    >
                      <FaCalendarAlt className="text-primary-400 text-sm sm:text-base" />
                      <span className="text-gray-300 font-medium text-sm sm:text-base">{exp.period}</span>
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {exp.project}
                    </motion.p>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 sm:px-4 py-1.5 sm:py-2 glass rounded-full text-xs sm:text-sm text-gray-300 hover:text-white transition-all duration-300 border border-primary-500/30 hover:border-primary-500/60 relative overflow-hidden group/tech"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.2) + (techIndex * 0.05) + 0.4 }}
                          whileHover={{ scale: 1.1, y: -3 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-600/20 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                          <span className="relative z-10 font-medium flex items-center gap-1 sm:gap-2">
                            <FaCode className="text-[10px] sm:text-xs opacity-50" />
                            {tech}
                          </span>
                        </motion.span>
                      ))}
                    </div>
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

