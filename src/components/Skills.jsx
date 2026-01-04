import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-end',
      skills: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      ],
    },
    {
      title: 'Back-end',
      skills: [
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
        { name: 'Laravel', icon: 'https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
        { name: 'NestJS', icon: 'https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg' },
        { name: 'REST API', icon: 'https://www.vectorlogo.zone/logos/rest/rest-icon.svg' },
        { name: 'WebSocket', icon: 'https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg' },
        { name: 'Stripe', icon: 'https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg' },
      ],
    },
    {
      title: 'Bases de données',
      skills: [
        { name: 'SQL', icon: 'https://www.nicepng.com/png/full/207-2073547_sql-server-icon-png-29-transparent-background-database.png' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      ],
    },
    {
      title: 'Tests & API',
      skills: [
        { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
        { name: 'Supertest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      ],
    },
    {
      title: 'CI/CD & DevOps',
      skills: [
        { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'MinIO', icon: 'https://sysadmintalks.ru/wp-content/uploads/2023/04/minio-logo-raspberry-1.png' },
      ],
    },
    {
      title: 'Outils',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
        { name: 'NPM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
      ],
    },
    {
      title: 'Design & Conception',
      skills: [
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
        { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' },
        { name: 'UML', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/UML_logo.svg' },
        { name: 'Notion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg' },
      ],
    },
    {
      title: 'Gestion de Projet',
      skills: [
        { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg' },
        { name: 'Scrum', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg' },
        { name: 'Kanban', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
        { name: 'GitHub Projects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 section-header">
            <span className="gradient-text text-glow">Compétences Techniques</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass p-6 rounded-2xl card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary-400">{category.title}</h3>
              <div className="grid grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.15, y: -8 }}
                  >
                    <motion.div 
                      className="glass p-3 rounded-xl mb-2 group-hover:bg-primary-500/30 group-hover:border-primary-500/50 transition-all duration-300 relative overflow-hidden"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 object-contain relative z-10 filter group-hover:brightness-110 transition-all duration-300 drop-shadow-lg"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none'
                          const parent = e.target.parentElement
                          if (parent && !parent.querySelector('.fallback-icon')) {
                            const fallback = document.createElement('div')
                            fallback.className = 'fallback-icon text-primary-400 font-bold text-lg w-8 h-8 flex items-center justify-center'
                            fallback.textContent = skill.name.charAt(0)
                            parent.appendChild(fallback)
                          }
                        }}
                      />
                    </motion.div>
                    <span className="text-xs text-gray-400 text-center group-hover:text-primary-400 transition-colors font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

