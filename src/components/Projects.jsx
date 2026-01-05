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
      logo: 'https://www.pngmart.com/files/23/Truck-Logo-PNG.png',
    },
    {
      title: 'TireDarna',
      subtitle: 'Plateforme immobilière et épargne',
      description: 'Développement d\'une application web pour la gestion d\'annonces immobilières et d\'épargne collective, avec messagerie et notifications en temps réel, gestion des abonnements et espace admin.',
      technologies: ['ReactJS', 'Node.js', 'Express', 'Mongoose', 'MongoDB', 'Tailwind CSS', 'MinIO', 'WebSocket'],
      githubUrl: 'https://github.com/Safaa-Ettalhi/TireDarna.git',
      logo: 'https://th.bing.com/th/id/R.f9b5e5d823af453dbbbb9a9f6cfcf2b8?rik=TmKxt2gzPMz4Ig&riu=http%3a%2f%2fwww.santbio.com%2fuploads%2fimages%2f2c33f33561988cc3cb9010a00910634f.png&ehk=4KU1iDilM6WY1aQPIHfiDA6EXPu%2boaNZEl%2f4zO5bxR0%3d&risl=&pid=ImgRaw&r=0',
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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 section-header"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text text-glow">Projets Réalisés</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg md:text-xl mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-primary-400 font-semibold">+25 projets</span> réalisés avec passion et excellence
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-strong rounded-2xl sm:rounded-3xl overflow-hidden hover:bg-primary-500/10 transition-all duration-500 group relative card-hover project-card transform-3d"
              initial={{ opacity: 0, y: 60, rotateX: -15, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100, damping: 15 }}
              whileHover={{ scale: 1.05, y: -10, rotateY: 2 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Enhanced gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/30 via-purple-600/30 to-pink-500/30 blur-2xl"></div>
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-r from-primary-500/20 via-purple-600/20 to-pink-500/20"></div>
              </div>
              
              <div className="p-5 sm:p-6 md:p-8 relative z-10">
                <motion.div 
                  className="mb-4 sm:mb-6 inline-block relative"
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0], y: -5 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  {project.logo && (
                    <div className="relative">
                      {/* Multiple glow layers */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/40 to-purple-600/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75"></div>
                      
                      <div className="relative glass-strong p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl group-hover:bg-primary-500/25 transition-all duration-500 border-2 border-primary-500/30 group-hover:border-primary-500/70 shadow-xl shadow-primary-500/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-600/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <motion.img 
                          src={project.logo} 
                          alt={project.title}
                          className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain filter drop-shadow-2xl group-hover:brightness-130 group-hover:scale-110 transition-all duration-500 relative z-10"
                          style={{ backgroundColor: 'transparent' }}
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
                
                <motion.h3 
                  className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 group-hover:text-primary-400 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-primary-400 font-semibold mb-3 sm:mb-4 text-base sm:text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1 }}
                >
                  {project.subtitle}
                </motion.p>
                
                <motion.p 
                  className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                >
                  {project.description}
                </motion.p>
                
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 bg-primary-500/20 rounded-full text-xs text-gray-300 font-medium border border-primary-500/40 hover:border-primary-500/70 transition-all duration-300 relative overflow-hidden group/tech"
                      whileHover={{ scale: 1.1, y: -3, backgroundColor: 'rgba(14, 165, 233, 0.35)' }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (techIndex * 0.05) + 0.3, type: "spring" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-purple-600/30 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative z-10">{tech}</span>
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3 sm:gap-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 glass rounded-xl hover:bg-primary-500/40 transition-all duration-300 font-semibold group/btn relative overflow-hidden text-sm sm:text-base w-full sm:w-auto"
                    whileHover={{ scale: 1.05, x: 5, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-purple-600/30 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    <FaGithub className="group-hover/btn:rotate-12 transition-transform relative z-10 text-base sm:text-lg" />
                    <span className="relative z-10">Voir le code</span>
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

