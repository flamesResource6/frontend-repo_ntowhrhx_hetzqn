import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="relative bg-black py-24 text-white">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F9D976] via-[#F39F22] to-[#C98900]">Let’s inspire dreams together.</span>
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#contact" className="group relative overflow-hidden rounded-full border border-[#C98900]/40 bg-black/30 px-6 py-3">
            <span className="relative z-10">Book Karen for Events</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F9D976]/30 via-[#F39F22]/40 to-[#C98900]/30 opacity-0 transition group-hover:opacity-100" />
          </a>
          <a href="#contact" className="group relative overflow-hidden rounded-full border border-[#C98900]/40 bg-black/30 px-6 py-3">
            <span className="relative z-10">Contact & Collaborations</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F9D976]/30 via-[#F39F22]/40 to-[#C98900]/30 opacity-0 transition group-hover:opacity-100" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
