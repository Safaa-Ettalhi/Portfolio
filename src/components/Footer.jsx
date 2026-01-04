import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Safaa-Ettalhi', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/Safaa-Ettalhi', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:safaeettalhi1@gmail.com', label: 'Email' },
    { icon: FaPhone, href: 'tel:+212602879678', label: 'Phone' },
  ]

  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Safaa Ettalhi. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Développeuse Full-Stack passionnée par l'innovation
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="text-2xl" />
              </motion.a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            className="p-3 glass rounded-full hover:bg-primary-500/20 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-xl text-primary-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

