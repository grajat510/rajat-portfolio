'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Briefcase, Star } from 'lucide-react'

const CodingSkills = () => {
  const programmingLanguages = [
    'JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'
  ]

  const frameworks = [
    'React.js', 'Next.js', 'Nuxt.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'Wordpress', 'RestAPI', 'FastAPI', 'Postman', 'Git', 'Selenium' 
  ]

  const databases = [
    'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite'
  ]

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'Completed'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      technologies: ['Next.js', 'Firebase', 'TypeScript'],
      status: 'In Progress'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for business data visualization',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Chart.js'],
      status: 'Completed'
    }
  ]

  const freelanceExperience = [
    {
      company: 'Proqly',
      period: 'Jan 2024 - Present',
      role: 'Frontend Developer',
      responsibilities: [
        'Developed responsive web applications using React and Next.js',
        'Implemented modern UI/UX designs with Tailwind CSS',
        'Collaborated with backend teams for API integration',
        'Optimized application performance and SEO'
      ]
    },
    {
      company: 'Ivanooo',
      period: 'Jan 2024 - Present',
      role: 'Full Stack Developer',
      responsibilities: [
        'Built complete web applications from scratch',
        'Managed database design and implementation',
        'Handled client requirements and project delivery',
        'Maintained code quality and documentation'
      ]
    }
  ]

  return (
    <section id="coding" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Coding Skills</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Programming Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="subtitle flex items-center gap-2">
                <Code className="h-5 w-5 text-primary-600" />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang, index) => (
                  <span key={index} className="skill-tag">
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="subtitle flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary-600" />
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <span key={index} className="skill-tag">
                    {framework}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="subtitle flex items-center gap-2">
                <Database className="h-5 w-5 text-primary-600" />
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {databases.map((db, index) => (
                  <span key={index} className="skill-tag">
                    {db}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-secondary-800 mb-8 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="card p-6 hover:scale-105 transition-transform duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-secondary-800">{project.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-secondary-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Freelance Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary-800 mb-8 text-center flex items-center justify-center gap-2">
              <Briefcase className="h-6 w-6 text-primary-600" />
              Freelance Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {freelanceExperience.map((exp, index) => (
                <div key={index} className="card p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-secondary-800">{exp.company}</h4>
                    <span className="text-sm text-secondary-600">{exp.period}</span>
                  </div>
                  <p className="text-primary-600 font-medium mb-4">{exp.role}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2 text-secondary-700">
                        <Star className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CodingSkills 