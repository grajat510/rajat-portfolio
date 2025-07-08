'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Target, Award } from 'lucide-react'

const HeroSection = () => {
  const personalInfo = [
    { icon: Calendar, label: 'Date of Birth', value: '10-Sept-1995' },
    { icon: MapPin, label: 'Current Location', value: 'Bengaluru, Karnataka, India' },
    { icon: MapPin, label: 'Permanent Address', value: 'Mandi Gobindgarh, Punjab, India' },
    { icon: Target, label: 'Career Goal', value: 'Seeking challenging roles in software development and mechanical engineering' },
  ]

  const achievements = [
    'Freelance Software Developer since Jan 2024',
    'Proficient in Multiple Programming Languages',
    '6 Years of Mechanical Engineering Experience',    
    'Expert in CAD and Manufacturing Software',
    'Multilingual: English, Punjabi, Learning Kannada & Japanese'
  ]

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 pt-20">
      <div className="section-container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-800">
                Welcome to My Portfolio
              </h1>
              <p className="text-xl text-secondary-600">
                Mechanical Engineer | Software Developer | Problem Solver
              </p>
            </div>

            <div className="card p-6 space-y-4">
              <h2 className="subtitle flex items-center gap-2">
                <Award className="h-5 w-5 text-primary-600" />
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <info.icon className="h-5 w-5 text-primary-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-secondary-700">{info.label}</p>
                      <p className="text-secondary-600 text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h2 className="subtitle">Values & Objectives</h2>
              <p className="text-secondary-600 leading-relaxed">
                Passionate about creating innovative solutions through technology and engineering. 
                Committed to continuous learning and applying both mechanical engineering principles 
                and software development skills to solve complex problems. Seeking opportunities 
                to contribute to meaningful projects that make a positive impact.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Video & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Introduction Video */}
            <div className="card p-6">
              <h2 className="subtitle text-center mb-6">Meet Rajat Gupta - Introduction Video</h2>
              <div className="aspect-video bg-secondary-100 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.loom.com/embed/73df9d36d9954d109a7ba5236d34cf70"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                  title="Grajat's Introduction Video"
                ></iframe>
              </div>
              <p className="text-center text-secondary-600 mt-4 text-sm">
                🎥 Watch my personal introduction and learn about my journey as a Full Stack Developer
              </p>
            </div>

            {/* Achievements */}
            <div className="card p-6">
              <h2 className="subtitle">Key Achievements</h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-secondary-700">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="card p-6">
              <h2 className="subtitle">Education</h2>
              <div className="space-y-6">
                {/* Graduation */}
                <div className="border-l-4 border-primary-600 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-secondary-800">Bachelor of Technology (B.Tech)</h3>
                    <span className="text-sm text-secondary-500">2013 - 2017</span>
                  </div>
                  <p className="text-secondary-700 font-medium">Mechanical Engineering</p>
                  <p className="text-secondary-600">Thapar University, Patiala, India</p>
                  <p className="text-secondary-600">CGPA: 6.85</p>
                </div>

                {/* 12th Grade */}
                <div className="border-l-4 border-secondary-400 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-secondary-800">12th Grade (CBSE Board)</h3>
                    <span className="text-sm text-secondary-500">2012 - 2013</span>
                  </div>
                  <p className="text-secondary-700 font-medium">Gobindgarh Public School</p>
                  <p className="text-secondary-600">Percentage: 93.40%</p>
                </div>

                {/* 10th Grade */}
                <div className="border-l-4 border-secondary-400 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-secondary-800">10th Grade (CBSE Board)</h3>
                    <span className="text-sm text-secondary-500">2010 - 2011</span>
                  </div>
                  <p className="text-secondary-700 font-medium">Gobindgarh Public School</p>
                  <p className="text-secondary-600">Percentage: 95.00%</p>
                </div>

                {/* Certifications */}
                <div className="mt-6 pt-4 border-t border-secondary-200">
                  <h3 className="font-semibold text-secondary-800 mb-3">Certifications & Achievements</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-secondary-700">Stood First in School in both 10th and 12th Grade</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-secondary-700">National Go Karting Fabrication and Racing Competition - Bhopal</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-secondary-700">Football Intra College Level Certificate</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-secondary-700">Table Tennis Intra School Level Certificate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 