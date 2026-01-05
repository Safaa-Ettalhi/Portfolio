import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaRocket, FaUsers } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Développement',
      description: 'Solutions techniques robustes et performantes',
    },
    {
      icon: FaPalette,
      title: 'Design',
      description: 'Interfaces esthétiques et intuitives',
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Recherche constante de l\'excellence',
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Travail en équipe et communication efficace',
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 section-header">
            <span className="gradient-text text-glow">À propos de moi</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-6 sm:p-8 rounded-2xl card-hover">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Passionnée par le développement web et le design d'expériences numériques,
                je conçois des solutions à la fois esthétiques et fonctionnelles, centrées sur l'utilisateur.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                J'aime transformer des idées en interfaces fluides et intuitives, tout en veillant
                à la performance et à la qualité du produit final.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Créative, organisée et animée par la recherche de l'excellence, j'évolue avec aisance
                dans un environnement collaboratif où innovation et rigueur technique se rencontrent.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-strong p-4 sm:p-6 rounded-2xl hover:bg-primary-500/20 transition-all duration-300 relative overflow-hidden group cursor-pointer card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -10 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <motion.div
                    className="inline-block p-2 sm:p-3 bg-primary-500/20 rounded-xl mb-3 sm:mb-4 group-hover:bg-primary-500/30 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="text-3xl sm:text-4xl text-primary-400" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary-400 transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm group-hover:text-gray-300 transition-colors leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

