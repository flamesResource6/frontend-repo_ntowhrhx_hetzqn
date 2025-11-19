import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  { title: 'StoryWalk® Installations', caption: 'Immersive community storytelling.', media: 'storywalk' },
  { title: 'Animation Development', caption: 'Bringing Abigail to life.', media: 'animation' },
  { title: 'Speaking Events', caption: 'Inspiring imagination and courage.', media: 'speaking' },
  { title: 'Workshops', caption: 'Hands-on creativity for young minds.', media: 'workshops' },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative bg-black py-24 text-white">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#F9D976] via-[#F39F22] to-[#C98900]">Projects & Media</h2>
        <p className="mt-3 text-center text-white/80">A gallery of luminous moments.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {items.map((it, idx) => (
            <button
              key={it.title}
              onClick={() => setActive(it)}
              className="group relative overflow-hidden rounded-xl border border-[#C98900]/30 bg-black/40 p-4 text-left backdrop-blur-sm"
            >
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-[#F9D976]/15 via-[#F39F22]/10 to-[#C98900]/15" />
              <div className="mt-3">
                <div className="font-semibold">{it.title}</div>
                <div className="text-white/70 text-sm">{it.caption}</div>
              </div>
              <span className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-r from-[#F9D976]/15 via-[#F39F22]/20 to-[#C98900]/15" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 22 }}
              className="max-w-2xl w-full rounded-2xl border border-[#C98900]/30 bg-black p-6 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-[#F9D976]/15 via-[#F39F22]/10 to-[#C98900]/15" />
              <h3 className="mt-4 text-2xl font-semibold">{active.title}</h3>
              <p className="mt-2 text-white/80">{active.caption}</p>
              <button onClick={() => setActive(null)} className="mt-6 rounded-full border border-[#C98900]/40 px-5 py-2">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
