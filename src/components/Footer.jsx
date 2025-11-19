export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-black py-10 text-white/85">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm">© {year} Karen E. Franks. All rights reserved.</div>
          <div className="flex items-center gap-5 text-[#F9D976]">
            <a href="#" aria-label="Twitter" className="hover:text-[#F39F22] transition">TW</a>
            <a href="#" aria-label="Instagram" className="hover:text-[#F39F22] transition">IG</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#F39F22] transition">IN</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_70%_100%,rgba(249,217,118,0.08),rgba(0,0,0,0)_60%)]" />
    </footer>
  )
}
