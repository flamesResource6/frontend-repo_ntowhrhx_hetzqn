import { useEffect, useRef } from 'react'

// Golden interactive particles that respond to mouse and drift slowly
export default function Particles({ className = '' }) {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', onResize)

    const golds = [
      [249, 217, 118], // #F9D976
      [243, 159, 34],  // #F39F22
      [201, 137, 0],   // #C98900
    ]

    const particleCount = 120
    particlesRef.current = Array.from({ length: particleCount }).map(() => {
      const speed = 0.15 + Math.random() * 0.35
      const size = 1 + Math.random() * 2
      const color = golds[Math.floor(Math.random() * golds.length)]
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size,
        baseSize: size,
        color,
      }
    })

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // soft vignette glow
      const grad = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width,height)/1.2)
      grad.addColorStop(0, 'rgba(255,215,128,0.04)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0,0,width,height)

      const particles = particlesRef.current
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // mouse interaction
        const dx = p.x - mouseRef.current.x
        const dy = p.y - mouseRef.current.y
        const dist = Math.sqrt(dx*dx + dy*dy) || 1
        const force = Math.min(80 / dist, 2)
        p.vx += (dx / dist) * force * 0.005
        p.vy += (dy / dist) * force * 0.005

        // motion update with slight damping
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.98
        p.vy *= 0.98

        // wrap around edges
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        // glow
        ctx.beginPath()
        const [r,g,b] = p.color
        ctx.fillStyle = `rgba(${r},${g},${b},0.9)`
        ctx.shadowColor = `rgba(${r},${g},${b},0.6)`
        ctx.shadowBlur = 8
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }

      // connective lines
      ctx.lineWidth = 0.6
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx*dx + dy*dy
          if (d2 < 180*180) {
            const [r,g,b] = a.color
            ctx.strokeStyle = `rgba(${r},${g},${b},${1 - d2/(180*180)})`
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    canvas.addEventListener('mousemove', onMouseMove)
    draw()

    return () => {
      window.removeEventListener('resize', onResize)
      canvas.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
  )
}
