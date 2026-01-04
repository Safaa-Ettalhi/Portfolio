import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Trackify',
      subtitle: 'Application de gestion de flotte',
      description: 'Application web de gestion de flotte (camions, remorques, pneus, trajets, entretiens) avec tableaux de bord, génération de rapports PDF et suivi opérationnel.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Jest', 'Supertest', 'ReactJS', 'Vite', 'Tailwind CSS', 'Docker'],
      githubUrl: 'https://github.com/Safaa-Ettalhi/Trackify.git',
      logo: 'https://cdn-icons-png.flaticon.com/512/2965/2965879.png',
    },
    {
      title: 'TireDarna',
      subtitle: 'Plateforme immobilière et épargne',
      description: 'Développement d\'une application web pour la gestion d\'annonces immobilières et d\'épargne collective, avec messagerie et notifications en temps réel, gestion des abonnements et espace admin.',
      technologies: ['ReactJS', 'Node.js', 'Express', 'Mongoose', 'MongoDB', 'Tailwind CSS', 'MinIO', 'WebSocket'],
      githubUrl: 'https://github.com/Safaa-Ettalhi/TireDarna.git',
      logo: 'https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/115/2020/07/icon-habitat-500x500.png',
    },
    {
      title: 'MediCare',
      subtitle: 'Gestion de Cabinet Médical',
      description: 'Application web monopage (SPA) pour la gestion complète d\'un cabinet médical. Remplace la gestion Excel par une interface moderne, sécurisée et ergonomique avec gestion des patients, rendez-vous, finances et tableau de bord.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'Web Crypto API', 'SPA', 'Figma', 'Jira'],
      githubUrl: 'https://github.com/Safaa-Ettalhi/ClinicBoard.git',
      logo: 'https://static.vecteezy.com/system/resources/thumbnails/059/067/270/small_2x/modern-healthcare-clinic-free-png.png',
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 section-header">
            <span className="gradient-text text-glow">Projets Réalisés</span>
          </h2>
          <p className="text-gray-400 text-lg mb-6">+25 projets réalisés</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-strong rounded-3xl overflow-hidden hover:bg-primary-500/10 transition-all duration-300 group relative card-hover project-card transform-3d"
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05, y: -15, rotateY: 2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-8 relative z-10">
                <motion.div 
                  className="mb-6 inline-block relative"
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {project.logo && (
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-purple-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative glass-strong p-5 rounded-2xl group-hover:bg-primary-500/20 transition-all duration-300 border-2 border-primary-500/20 group-hover:border-primary-500/50">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img 
                          src={project.logo} 
                          alt={project.title}
                          className="w-28 h-28 object-contain filter drop-shadow-2xl group-hover:brightness-120 group-hover:scale-110 transition-all duration-300 relative z-10"
                          style={{ backgroundColor: 'transparent' }}
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
                <h3 className="text-3xl font-bold mb-3 group-hover:text-primary-400 transition-colors">{project.title}</h3>
                <p className="text-primary-400 font-medium mb-4 text-lg">{project.subtitle}</p>
                <p className="text-gray-300 mb-6 leading-relaxed text-base">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-4 py-1.5 bg-primary-500/20 rounded-full text-xs text-gray-300 font-medium border border-primary-500/30"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(14, 165, 233, 0.3)' }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (techIndex * 0.05) }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 glass rounded-xl hover:bg-primary-500/30 transition-all duration-300 font-medium group/btn"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="group-hover/btn:rotate-12 transition-transform" />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

