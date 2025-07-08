'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Settings, Wrench, Factory, Award, Calendar, MapPin } from 'lucide-react'

const MechanicalSkills = () => {
  const software = [
    { name: 'AutoCAD', level: 'Expert', years: '6+' },
    { name: 'SolidWorks', level: 'Advanced', years: '5+' },
    { name: 'CNC Programming', level: 'Advanced', years: '4+' },
    { name: 'MS-Excel with AI Integration', level: 'Intermediate', years: '6+' },
    { name: 'MS-Office', level: 'Intermediate', years: '6+' },
    { name: 'MS-Powerpoint', level: 'Intermediate', years: '3+' },
    { name: 'MS-Outlook', level: 'Intermediate', years: '3+' },
    { name: 'MS-Teams', level: 'Intermediate', years: '3+' },
    { name: 'MS-OneDrive', level: 'Intermediate', years: '3+' },
  ]

  const experiences = [
    {
      company: 'DNHA (Japanese Company)',
      period: '2017-2020',
      duration: '3 Years',
      role: 'Process Mechanical Engineer',
      location: 'Manesar, Haryana, India',
      responsibilities: [
        'Designed and developed mechanical components using CAD software',
        'Collaborated with Japanese team on precision manufacturing projects',
        'Implemented quality control processes and standards',
        'Mentored junior engineers and led project teams',
        'Managed client relationships and project deliverables'
      ],
      achievements: [
        'Reduced manufacturing defects by 25%',
        'Led successful completion of 15+ major projects',
        'Improved production efficiency by 20%'
      ]
    },
    {
      company: 'Golden Agro',
      period: '2020-2023',
      duration: '3 Years',
      role: 'Mechanical Engineer',
      location: 'Khanna, Punjab, India',
      responsibilities: [
        'Designed agricultural machinery and equipment',
        'Performed stress analysis and component testing',
        'Developed manufacturing processes and procedures',
        'Created technical documentation and drawings',
        'Coordinated with production teams for implementation'
      ],
      achievements: [
        'Developed innovative agricultural equipment design',
        'Streamlined manufacturing processes',
        'Achieved 98% client satisfaction rating'
      ]
    }
  ]

  const skills = [
    'Mechanical Design', 'Product Development', 'Manufacturing Processes',
    'Quality Control', 'Project Management', 'Technical Documentation',
    'Assembly Design', 'Cost Optimization',
    'Client Relations', 'Team Leadership', 'Process Improvement'
  ]

  const certifications = [
    'Professional Engineer (PE) License',
    'SolidWorks Certification',
    'AutoCAD Professional Certification'
  ]

  return (
    <section id="mechanical" className="py-20 bg-secondary-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Mechanical Skills</h2>
          
          {/* Software Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-secondary-800 mb-8 text-center flex items-center justify-center gap-2">
              <Settings className="h-6 w-6 text-primary-600" />
              Software Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {software.map((soft, index) => (
                <div key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-200">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-secondary-800 mb-2">{soft.name}</h4>
                  <p className="text-primary-600 font-medium mb-2">{soft.level}</p>
                  <p className="text-secondary-600 text-sm">{soft.years} years experience</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-secondary-800 mb-8 text-center flex items-center justify-center gap-2">
              <Factory className="h-6 w-6 text-primary-600" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="card p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-secondary-800">{exp.company}</h4>
                      <p className="text-primary-600 font-semibold">{exp.role}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-secondary-600">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-secondary-600">
                          <Award className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-secondary-600">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h5 className="font-semibold text-secondary-800 mb-3">Key Responsibilities</h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2 text-secondary-700">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="font-semibold text-secondary-800 mb-3">Key Achievements</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-secondary-700">
                            <Award className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Core Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="subtitle">Core Engineering Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="subtitle">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2 text-secondary-700">
                    <Award className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MechanicalSkills 