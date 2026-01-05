import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import profileImage from '../pic/safaa.jpg'
import cvFile from '../cv/safaaEttalhi_Cv.pdf'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Safaa-Ettalhi', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/Safaa-Ettalhi', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:safaeettalhi1@gmail.com', label: 'Email' },
    { icon: FaPhone, href: 'tel:+212602879678', label: 'Phone' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-purple-900 to-pink-900 opacity-25"></div>
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-primary-400 text-lg mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Bonjour, je suis
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text text-glow">Safaa Ettalhi</span>
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-5xl font-semibold mb-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Développeuse Full-Stack
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Passionnée par le développement web et le design d'expériences numériques,
              je conçois des solutions esthétiques et fonctionnelles, centrées sur l'utilisateur.
            </motion.p>

            <motion.div
              className="flex items-center justify-center md:justify-start gap-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-full hover:bg-primary-500 transition-all duration-300 glow"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 btn-primary rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Voir mes projets</span>
              </motion.a>
              <motion.a
                href={cvFile}
                download="safaaEttalhi_Cv.pdf"
                className="px-8 py-4 glass rounded-full font-semibold hover:bg-primary-500/20 transition-all duration-300 border-2 border-primary-500/30 hover:border-primary-500/60 flex items-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="text-lg" />
                Télécharger CV
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 glass rounded-full font-semibold hover:bg-primary-500/20 transition-all duration-300 border-2 border-primary-500/30 hover:border-primary-500/60"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-600 to-pink-500 rounded-full blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-full h-full glass rounded-full p-3 shadow-2xl">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-500/30">
                  <motion.img
                    src={profileImage}
                    alt="Safaa Ettalhi"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
                </div>
                <motion.div
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 glass px-6 py-2 rounded-full border border-primary-500/50"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-sm font-semibold text-primary-400">Full-Stack Developer</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">
            <HiArrowDown className="text-3xl" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

