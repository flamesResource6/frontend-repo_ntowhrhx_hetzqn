import { useState } from 'react'
import { motion } from 'framer-motion'

function Line({ d, delay = 0 }) {
  return (
    <svg viewBox="0 0 800 200" className="w-full">
      <defs>
        <linearGradient id="goldline" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F9D976" />
          <stop offset="50%" stopColor="#F39F22" />
          <stop offset="100%" stopColor="#C98900" />
        </linearGradient>
      </defs>
      <motion.path
        d={d}
        stroke="url(#goldline)"
        strokeWidth="1.5"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 2.2, delay }}
      />
    </svg>
  )
}

export default function World() {
  const [hovered, setHovered] = useState(false)

  return (
    <section className="relative bg-black py-24 text-white overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#F9D976] via-[#F39F22] to-[#C98900]">Karen’s Story World</h2>
        <p className="mt-3 text-center text-white/80">Hover to light up paths of imagination.</p>

        <div className="mt-12 grid gap-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="group rounded-2xl border border-[#C98900]/30 bg-black/40 p-6 backdrop-blur-sm">
              <Line d="M0,120 C160,60 320,180 480,120 C640,60 720,140 800,100" />
              <motion.div animate={{ opacity: hovered ? 1 : 0.4 }} className="mt-4 text-white/90">Stars twinkle and paths glow where stories begin.</motion.div>
            </div>
            <div className="group rounded-2xl border border-[#C98900]/30 bg-black/40 p-6 backdrop-blur-sm">
              <Line d="M0,140 C200,120 320,80 520,120 C660,150 740,110 800,140" delay={0.2} />
              <div className="mt-4 text-white/90">Waves flow, books open, and ideas ripple outward.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
