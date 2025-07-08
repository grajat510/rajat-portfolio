'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, BookOpen, Zap, Globe, Languages, Trophy } from 'lucide-react'

const Hobbies = () => {
  const hobbies = [
    {
      title: 'Meditation',
      icon: Heart,
      description: 'Daily practice of mindfulness and meditation for mental clarity and peace',
      benefits: ['Improved focus', 'Stress reduction', 'Enhanced creativity', 'Better decision making'],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Playing Football',
      icon: Trophy,
      description: 'Passionate about football, playing regularly and following international leagues',
      benefits: ['Team collaboration', 'Physical fitness', 'Strategic thinking', 'Leadership skills'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Reading',
      icon: BookOpen,
      description: 'Avid reader with diverse interests in literature, spirituality, and self-development',
      benefits: ['Knowledge expansion', 'Vocabulary enhancement', 'Critical thinking', 'Emotional intelligence'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Language Learning',
      icon: Languages,
      description: 'Passionate about learning new languages and understanding different cultures',
      benefits: ['Cultural awareness', 'Enhanced communication', 'Cognitive flexibility', 'Global perspective'],
      color: 'from-orange-400 to-orange-600'
    }
  ]

  const books = [
    {
      category: 'Fiction',
      titles: ['Harry Potter Series', 'Sidney Sheldon Collection'],
      description: 'Love for storytelling and imaginative narratives'
    },
    {
      category: 'Spiritual',
      titles: ['Bhagavad Gita', 'Autobiography of a Yogi'],
      description: 'Exploring spiritual wisdom and philosophy'
    },
    {
      category: 'Biography',
      titles: ['Books on Mahavatar Babaji', 'Spiritual Leaders Biographies'],
      description: 'Learning from the lives of great spiritual masters'
    }
  ]

  const languages = [
    {
      language: 'English',
      proficiency: 'Native/Fluent',
      status: 'Primary Language',
      flag: '🇺🇸'
    },
    {
      language: 'Punjabi',
      proficiency: 'Fluent',
      status: 'Learned Successfully',
      flag: '🇮🇳'
    },
    {
      language: 'Kannada',
      proficiency: 'Learning',
      status: 'Currently Learning',
      flag: '🇮🇳'
    },
    {
      language: 'Japanese',
      proficiency: 'Basic Understanding',
      status: 'From DNHA Experience',
      flag: '🇯🇵'
    }
  ]

  return (
    <section id="hobbies" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Hobbies & Interests</h2>
          
          {/* Main Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hobbies.map((hobby, index) => (
                <div key={index} className="card p-6 hover:scale-105 transition-transform duration-200">
                  <div className={`w-16 h-16 bg-gradient-to-r ${hobby.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <hobby.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 text-center mb-4">{hobby.title}</h3>
                  <p className="text-secondary-600 text-center mb-6">{hobby.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-secondary-700 text-center">Benefits:</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {hobby.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reading Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-secondary-800 mb-8 text-center flex items-center justify-center gap-2">
              <BookOpen className="h-6 w-6 text-primary-600" />
              Reading Interests
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <div key={index} className="card p-6 text-center">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-4">{book.category}</h4>
                  <div className="space-y-2 mb-4">
                    {book.titles.map((title, titleIndex) => (
                      <p key={titleIndex} className="text-primary-600 font-medium">{title}</p>
                    ))}
                  </div>
                  <p className="text-secondary-600 text-sm">{book.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Language Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-secondary-800 mb-8 text-center flex items-center justify-center gap-2">
              <Globe className="h-6 w-6 text-primary-600" />
              Language Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="card p-6 text-center hover:scale-105 transition-transform duration-200">
                  <div className="text-4xl mb-4">{lang.flag}</div>
                  <h4 className="text-lg font-semibold text-secondary-800 mb-2">{lang.language}</h4>
                  <p className="text-primary-600 font-medium mb-2">{lang.proficiency}</p>
                  <p className="text-secondary-600 text-sm">{lang.status}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Personal Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="card p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-secondary-800 mb-6">Personal Philosophy</h3>
            <p className="text-secondary-600 leading-relaxed max-w-4xl mx-auto">
              I believe in continuous learning and personal growth. My diverse interests in meditation, sports, literature, 
              and languages reflect my commitment to developing both mind and body. Through meditation, I cultivate inner peace 
              and clarity. Through sports, I learn teamwork and perseverance. Through reading, I expand my knowledge and empathy. 
              Through language learning, I connect with different cultures and perspectives. This holistic approach to personal 
              development complements my professional skills and helps me bring creativity, focus, and cultural awareness to every project.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hobbies 