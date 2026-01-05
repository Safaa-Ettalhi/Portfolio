import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Message envoyé avec succès! Je vous répondrai bientôt.' 
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        const errorMessage = data.error || 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
        const errorDetails = data.details ? ` (${data.details})` : ''
        setSubmitStatus({ 
          type: 'error', 
          message: errorMessage + errorDetails
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({ 
        type: 'error', 
        message: 'Erreur de connexion. Veuillez réessayer plus tard.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    { icon: FaEnvelope, text: 'safaeettalhi1@gmail.com', href: 'mailto:safaeettalhi1@gmail.com' },
    { icon: FaPhone, text: '+212 602879678', href: 'tel:+212602879678' },
    { icon: FaGithub, text: 'github.com/Safaa-Ettalhi', href: 'https://github.com/Safaa-Ettalhi' },
    { icon: FaLinkedin, text: 'linkedin.com/in/Safaa-Ettalhi', href: 'https://linkedin.com/in/Safaa-Ettalhi' },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 section-header">
            <span className="gradient-text text-glow">Contactez-moi</span>
          </h2>
          <p className="text-gray-400 text-lg mb-6">Discutons de votre prochain projet</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Informations de contact</h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-xl hover:bg-primary-500/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="p-2 sm:p-3 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors flex-shrink-0">
                      <info.icon className="text-xl sm:text-2xl text-primary-400" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-300 group-hover:text-white transition-colors break-all">{info.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass p-5 sm:p-6 md:p-8 rounded-2xl space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-white text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-white text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-white resize-none text-sm sm:text-base"
                  required
                ></textarea>
              </div>
              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                      : 'bg-red-500/20 border border-red-500/50 text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

