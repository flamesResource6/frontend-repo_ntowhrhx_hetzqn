import { motion, useScroll, useTransform } from 'framer-motion'

export default function About() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="about" className="relative overflow-hidden bg-black py-24 text-white">
      <motion.div style={{ y }} className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[120%] opacity-60">
        <svg viewBox="0 0 800 200" className="h-full w-full">
          <defs>
            <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F9D976" />
              <stop offset="50%" stopColor="#F39F22" />
              <stop offset="100%" stopColor="#C98900" />
            </linearGradient>
          </defs>
          <path d="M0,120 C160,60 320,180 480,120 C640,60 720,140 800,100" stroke="url(#gold)" strokeWidth="2" fill="none">
            <animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0,120 C160,60 320,180 480,120 C640,60 720,140 800,100; M0,100 C160,140 320,60 480,120 C640,160 720,80 800,120; M0,120 C160,60 320,180 480,120 C640,60 720,140 800,100" />
          </path>
        </svg>
      </motion.div>

      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-[#C98900]/30 bg-gradient-to-b from-[#F9D976]/10 to-transparent p-[2px]">
              <div className="h-full w-full rounded-2xl bg-black/60 backdrop-blur-sm flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 -z-10 rounded-3xl opacity-30 blur-2xl" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(249,217,118,0.25), rgba(0,0,0,0) 60%)' }} />
                  <div className="h-64 w-64 rounded-full border border-[#F39F22]/40" />
                  <div className="absolute inset-0 m-auto h-52 w-52 rounded-full border border-[#C98900]/40" />
                  <div className="absolute inset-0 m-auto h-40 w-40 rounded-full border border-[#F9D976]/40" />
                  <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-[#F9D976] shadow-[0_0_20px_6px_rgba(249,217,118,0.25)]" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#F9D976] via-[#F39F22] to-[#C98900]">Who is Karen</h2>
            <p className="mt-5 text-white/85 leading-relaxed">
              Karen E. Franks is a children’s author, content producer, and creative storyteller, and the founder of ADA Group Holdings Ltd. Her work blends imagination with purpose—building inspiring experiences that encourage young minds to dream, explore, and create.
            </p>
            <ul className="mt-6 space-y-3 text-white/85">
              <li><span className="bg-gradient-to-r from-[#F9D976] to-[#F39F22] bg-clip-text text-transparent font-semibold">Author:</span> Abigail’s Dream Adventures series.</li>
              <li><span className="bg-gradient-to-r from-[#F9D976] to-[#F39F22] bg-clip-text text-transparent font-semibold">Producer:</span> Story-led content and live experiences.</li>
              <li><span className="bg-gradient-to-r from-[#F9D976] to-[#F39F22] bg-clip-text text-transparent font-semibold">Founder:</span> ADA Group Holdings Ltd.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
