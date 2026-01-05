import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaBolt, FaArrowRight } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import { BsStars } from 'react-icons/bs'
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
      {/* Enhanced background gradients - Modern Professional */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-blue-900/25 to-indigo-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent"></div>
      
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      {/* Enhanced animated orbs - Modern Professional */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 80, 0],
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -80, 0],
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.6, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/12 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 28,
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
              className="text-cyan-400 text-lg md:text-xl mb-4 font-medium tracking-wide flex items-center gap-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-cyan-300"
              >
                <BsStars className="text-xl drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
              </motion.span>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Bonjour, je suis
              </span>
            </motion.p>
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
            >
              <span className="gradient-text text-glow inline-block">
                Safaa Ettalhi
              </span>
            </motion.h1>
            <motion.h2
              className="text-3xl md:text-5xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                Développeuse Full-Stack
              </span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Passionnée par le développement web et le design d'expériences numériques,
              je conçois des solutions esthétiques et fonctionnelles, centrées sur l'utilisateur.
            </motion.p>

            <motion.div
              className="flex items-center justify-center md:justify-start gap-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-4 rounded-full hover:bg-cyan-500/30 transition-all duration-300 glow relative group/social overflow-hidden border border-cyan-500/20"
                  whileHover={{ scale: 1.2, rotate: [0, -15, 15, 0], y: -8 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/60 via-blue-500/50 to-indigo-500/60 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 rounded-full"></div>
                  <social.icon className="text-xl relative z-10 text-cyan-300 group-hover/social:text-white transition-colors drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                  <div className="absolute inset-0 bg-cyan-500/30 blur-xl opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, type: "spring" }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 btn-primary rounded-full font-semibold text-white hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 relative overflow-hidden group/btn"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, type: "spring" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Voir mes projets
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight className="text-sm" />
                  </motion.span>
                </span>
              </motion.a>
              <motion.a
                href={cvFile}
                download="safaaEttalhi_Cv.pdf"
                className="px-8 py-4 glass rounded-full font-semibold hover:bg-cyan-500/20 transition-all duration-300 border-2 border-cyan-500/30 hover:border-cyan-500/60 flex items-center gap-2 group/cv relative overflow-hidden"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, type: "spring" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 opacity-0 group-hover/cv:opacity-100 transition-opacity duration-300"></div>
                <FaDownload className="text-lg relative z-10 group-hover/cv:animate-bounce" />
                <span className="relative z-10">Télécharger CV</span>
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 glass rounded-full font-semibold hover:bg-indigo-500/20 transition-all duration-300 border-2 border-indigo-500/30 hover:border-indigo-500/60 group/contact relative overflow-hidden"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Me contacter</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 group/profile">
              {/* Enhanced animated glow - Modern Professional */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full blur-3xl opacity-60"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 0.8, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-40"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              <div className="relative w-full h-full glass-strong rounded-full p-4 shadow-2xl group-hover/profile:shadow-cyan-500/50 transition-all duration-500">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-500/40 group-hover/profile:border-cyan-500/70 transition-all duration-500">
                  <motion.img
                    src={profileImage}
                    alt="Safaa Ettalhi"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    whileHover={{ scale: 1.08 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-indigo-500/20 opacity-0 group-hover/profile:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Enhanced badge */}
                <motion.div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glass-strong px-8 py-3 rounded-full border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/30"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  whileHover={{ scale: 1.1, y: -15 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-full opacity-0 group-hover/profile:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-sm font-bold text-cyan-300 relative z-10 flex items-center gap-2">
                    <motion.span
                      animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="text-cyan-400"
                    >
                      <FaBolt className="text-base drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    </motion.span>
                    Full-Stack Developer
                  </span>
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

