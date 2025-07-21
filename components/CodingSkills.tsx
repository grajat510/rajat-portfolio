'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Briefcase, Star, ExternalLink, Video, Monitor, Users, Building2, Calendar, CheckCircle2 } from 'lucide-react'

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
      title: 'LegalNews SkipEngine Scraper',
      description: 'Advanced web scraping engine designed to intelligently extract and process legal news content from multiple sources with sophisticated skip patterns and data validation',
      technologies: ['Python', 'BeautifulSoup', 'Scrapy', 'Selenium'],
      status: 'Completed',
      duration: '6 weeks',
      githubLink: 'https://github.com/grajat510/LegalNews_SkipEngine_Scraper.git'
    },
    {
      title: 'Grand Rapids Realty Chatbot',
      description: 'AI-powered conversational agent for real estate inquiries, featuring natural language processing and property recommendation algorithms for enhanced customer experience',
      technologies: ['Python', 'NLP', 'TensorFlow', 'Flask', 'DialogFlow'],
      status: 'In Progress',
      duration: '8 weeks',
      githubLink: 'https://github.com/grajat510/Grand-Rapids-Realty-Chatbot.git'
    },
    {
      title: 'AI Video & Audio Processing Suite',
      description: 'Cutting-edge multimedia processing platform leveraging deep learning for automated video analysis, speech recognition, and audio enhancement with real-time capabilities',
      technologies: ['Python', 'OpenCV', 'FFmpeg', 'PyTorch', 'MoviePy'],
      status: 'In Progress',
      duration: '10 weeks',
      githubLink: 'https://github.com/grajat510/ai_video_audio.git'
    },
    {
      title: 'Interactive Data Visualization Dashboard',
      description: 'Fully responsive analytics dashboard providing comprehensive insights from massive datasets with dynamic charts, real-time filtering, and interactive data exploration',
      technologies: ['React', 'Flask', 'MongoDB', 'D3.js', 'Chart.js'],
      status: 'Completed',
      duration: '5 weeks',
      githubLink: 'https://github.com/grajat510/Interactive_Visualisation_Dashboard.git'
    },
    {
      title: 'FastAPI Enterprise Backend',
      description: 'High-performance RESTful API service with advanced query optimization, secure authentication, and scalable microservices architecture for enterprise applications',
      technologies: ['FastAPI', 'PostgreSQL', 'JWT', 'Docker', 'Redis'],
      status: 'Completed',
      duration: '4 weeks',
      githubLink: 'https://github.com/grajat510/FastAPI_Project.git'
    },
    {
      title: 'Gericht Restaurant Experience',
      description: 'Elegant and sophisticated restaurant website featuring immersive UI/UX design, responsive layouts, and modern web technologies for premium dining establishments',
      technologies: ['React', 'TypeScript', 'SCSS', 'Framer Motion'],
      status: 'Completed',
      duration: '3 weeks',
      githubLink: 'https://github.com/grajat510/gericht-restaurant.git'
    }
  ]

  const freelanceExperience = [
    {
      company: 'Proqly',
      period: 'Jan 2024 - Jun 2025',
      role: 'Full Stack Developer',
      project: 'MyContactBoss CRM Platform',
      description: 'Developed a comprehensive Customer Relationship Management system featuring advanced contact management, lead tracking, and automated workflow capabilities for enhanced business productivity.',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Python', 'CSS3', 'JavaScript', 'Postman', 'Git'],
      // githubLink: 'https://github.com/proqly/mycontactboss.git',
      websiteLinks: [
        // {
        //   name: 'Production Site',
        //   url: 'https://crm.mikerossgrr.com/core/login/',
        //   description: 'Live CRM Platform (Credentials Protected)'
        // },
        {
          name: 'Watch Project Demo',
          url: 'https://www.loom.com/share/5b99fbcbb8274479a0d2e6ebddae1ec0?sid=8133ee78-62c3-4529-91b9-b7505face13d',
          description: 'Watch the project demonstration video'
        },
        {
          name: 'Company Website',
          url: 'https://mikerossgrr.com/',
          description: 'Official Proqly Website'
        }
      ],
      achievements: [
        'Developed secure authentication and authorization system',
        'Built automated lead management and contact tracking features',
        'Optimized database queries resulting in 40% faster load times',
        'Created RESTful APIs for seamless data integration'
      ],
      status: 'Completed'
    },
    {
      company: 'Ivanooo',
      period: 'Jan 2025 - Present',
      role: 'Frontend Developer',
      project: 'Ivanooo E-commerce Platform',
      description: 'Architected and developed a modern, responsive e-commerce platform using Nuxt.js with advanced features including product catalog, shopping cart, and seamless checkout experience.',
      technologies: ['Nuxt.js', 'Wordpress PHP', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Git'],
      // githubLink: 'https://github.com/Ivanooo-com/ivanooo-nuxt.git',
      websiteLinks: [
        {
          name: 'Live Platform',
          url: 'https://ivanooo.com',
          description: 'Fully Functional E-commerce Platform'
        }
      ],
      achievements: [
        'Built dynamic product catalog with advanced filtering and search',
        'Implemented responsive design ensuring mobile-first approach',
        'Developed shopping cart functionality with persistent state management',
        'Created seamless checkout process with multiple payment integrations',
        'Optimized site performance achieving 95+ Lighthouse scores'
      ],
      status: 'In Progress'
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
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-secondary-800">{project.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="text-sm text-primary-600 font-medium mb-3">
                    ⏱️ Development Time: {project.duration}
                  </div>
                  <p className="text-secondary-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-800 text-white rounded-lg hover:bg-secondary-700 transition-colors duration-200 text-sm font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View on GitHub
                  </a>
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
              Professional Freelance Experience
            </h3>
            
            {/* Project Demo Video */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 mb-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Video className="h-6 w-6 text-primary-600" />
                <h4 className="text-xl font-semibold text-secondary-800">Project Demonstration</h4>
              </div>
              <p className="text-secondary-700 mb-4">
                Watch my comprehensive walkthrough of the Proqly and Ivanooo projects, showcasing key features and development insights.
              </p>
              <a
                href="https://www.loom.com/share/5b99fbcbb8274479a0d2e6ebddae1ec0?sid=8133ee78-62c3-4529-91b9-b7505face13d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
              >
                <Video className="h-5 w-5" />
                Watch Project Demo
              </a>
            </div>

            <div className="space-y-8">
              {freelanceExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center gap-3 mb-4 lg:mb-0">
                      <Building2 className="h-8 w-8 text-primary-600" />
                      <div>
                        <h4 className="text-2xl font-bold text-secondary-800">{exp.company}</h4>
                        <p className="text-lg text-primary-600 font-medium">{exp.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-secondary-600">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exp.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {exp.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="mb-6">
                    <h5 className="text-xl font-semibold text-secondary-800 mb-3 flex items-center gap-2">
                      <Monitor className="h-5 w-5 text-primary-600" />
                      {exp.project}
                    </h5>
                    <p className="text-secondary-700 leading-relaxed">{exp.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-secondary-800 mb-3">Technologies Used</h6>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-800 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h6 className="text-lg font-semibold text-secondary-800 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Key Achievements
                    </h6>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-secondary-700">
                          <Star className="h-4 w-4 text-primary-600 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links Section */}
                  <div className="border-t border-secondary-200 pt-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                      {/* GitHub Link
                      <a
                        // href={exp.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-800 text-white rounded-lg hover:bg-secondary-700 transition-colors duration-200 font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Source Code
                      </a> */}

                      {/* Website Links */}
                      <div className="flex flex-wrap gap-2">
                        {exp.websiteLinks.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-sm"
                            title={link.description}
                          >
                            <Monitor className="h-4 w-4" />
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CodingSkills 