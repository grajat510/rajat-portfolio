import React from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import CodingSkills from '@/components/CodingSkills'
import MechanicalSkills from '@/components/MechanicalSkills'
import Hobbies from '@/components/Hobbies'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CodingSkills />
      <MechanicalSkills />
      <Hobbies />
      
      {/* Footer */}
      <footer className="bg-secondary-800 text-white py-8">
        <div className="section-container text-center">
          <p className="text-secondary-300">
            © 2024 Professional Portfolio. Built with Next.js, React, and Tailwind CSS.
          </p>
          <p className="text-secondary-400 mt-2">
            Ready to make a positive impact through technology and engineering.
          </p>
        </div>
      </footer>
    </main>
  )
} 