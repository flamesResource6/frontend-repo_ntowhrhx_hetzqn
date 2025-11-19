import { useRef } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Books from './components/Books'
import World from './components/World'
import Projects from './components/Projects'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Particles from './components/Particles'

function App() {
  const aboutRef = useRef(null)
  const booksRef = useRef(null)

  const scrollTo = (ref) => {
    if (ref?.current) ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#F39F22]/30 selection:text-white">
      {/* Background particles across the page */}
      <div className="fixed inset-0 -z-0 opacity-60">
        <Particles />
      </div>

      {/* HERO */}
      <Hero onExplore={() => scrollTo(booksRef)} onAbout={() => scrollTo(aboutRef)} />

      {/* ABOUT */}
      <div ref={aboutRef}><About /></div>

      {/* BOOKS */}
      <div ref={booksRef}><Books /></div>

      {/* WORLD */}
      <World />

      {/* PROJECTS */}
      <Projects />

      {/* CTA */}
      <CTA />

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default App
