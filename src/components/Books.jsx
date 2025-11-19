import { motion } from 'framer-motion'

const books = [
  {
    title: "Abigail and the Rainbow Sky",
    desc: "A journey through colors and courage.",
  },
  {
    title: "Abigail and the Ocean Wave",
    desc: "Learning to flow, adapt, and play.",
  },
  {
    title: "Abigail and the Starlight",
    desc: "Wishes, wonder, and the power of belief.",
  },
]

export default function Books() {
  return (
    <section id="books" className="relative bg-black py-24 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40" aria-hidden>
        <svg className="absolute left-1/2 top-0 -translate-x-1/2" width="1200" height="400" viewBox="0 0 1200 400" fill="none">
          <defs>
            <linearGradient id="gold2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#F9D976" />
              <stop offset="50%" stopColor="#F39F22" />
              <stop offset="100%" stopColor="#C98900" />
            </linearGradient>
          </defs>
          <path d="M0 200C200 100 400 300 600 200C800 100 1000 250 1200 180" stroke="url(#gold2)" strokeWidth="2"/>
          <path d="M0 260C220 160 420 320 640 260C860 200 1020 280 1200 220" stroke="url(#gold2)" strokeWidth="1"/>
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-center font-serif text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#F9D976] via-[#F39F22] to-[#C98900]">Abigail’s Dream Adventures</h2>
        <p className="mt-3 text-center text-white/80">Three luminous paths, one magical journey.</p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {books.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-[#C98900]/30 bg-black/40 p-6 backdrop-blur-sm"
            >
              <div className="relative h-56 w-full rounded-xl bg-gradient-to-br from-[#F9D976]/15 via-[#F39F22]/10 to-[#C98900]/15 flex items-center justify-center">
                <motion.div
                  className="h-32 w-24 rounded-md bg-black/60 border border-[#C98900]/40 shadow-[0_0_40px_rgba(249,217,118,0.15)]"
                  whileHover={{ rotate: -3, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
                <motion.span
                  className="absolute -bottom-3 right-6 text-lg"
                  initial={{ opacity: 0, y: 8 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >✨</motion.span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-white/80">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
