import React from 'react'
import HeroSection from '../common/HeroSection'
import Experience from '../common/Experience'
import Projects from '../common/Projects'
import WorkExperience from '../common/WorkExperience'
import Testimonials from '../common/Testimonials'

function Home() {
  return (
    <section>
      <HeroSection />
      <Experience />
      <Projects />
      <WorkExperience  />
      <Testimonials />
      
    </section>
  )
}

export default Home