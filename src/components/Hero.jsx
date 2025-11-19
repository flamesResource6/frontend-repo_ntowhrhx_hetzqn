import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero({ onExplore, onAbout }) {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-black text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Golden gradient overlay for cinematic depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(249,217,118,0.12),rgba(0,0,0,0)_70%)]"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F9D976] via-[#F39F22] to-[#C98900] drop-shadow-[0_0_30px_rgba(249,217,118,0.25)]"
        >
          Karen E. Franks
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-white/90"
        >
          Author • Content Producer • Creative Storyteller
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onExplore}
            className="group relative overflow-hidden rounded-full border border-[#C98900]/40 bg-black/30 px-6 py-3 text-white shadow-[0_0_30px_rgba(249,217,118,0.15)] backdrop-blur-sm transition"
          >
            <span className="relative z-10">Explore Abigail’s World</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F9D976]/30 via-[#F39F22]/40 to-[#C98900]/30 opacity-0 transition group-hover:opacity-100" />
          </button>
          <button
            onClick={onAbout}
            className="group relative overflow-hidden rounded-full border border-[#C98900]/40 bg-black/30 px-6 py-3 text-white shadow-[0_0_30px_rgba(249,217,118,0.15)] backdrop-blur-sm transition"
          >
            <span className="relative z-10">About Karen</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F9D976]/30 via-[#F39F22]/40 to-[#C98900]/30 opacity-0 transition group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
