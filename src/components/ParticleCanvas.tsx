import { useEffect, useRef } from 'react'

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    class Particle {
      x = 0; y = 0; size = 0; speedY = 0; speedX = 0; alpha = 0

      constructor() { this.reset() }

      reset() {
        this.x      = Math.random() * canvas!.width
        this.y      = Math.random() * canvas!.height
        this.size   = Math.random() * 2 + 0.5
        this.speedY = -(Math.random() * 0.5 + 0.2)
        this.speedX = (Math.random() - 0.5) * 0.3
        this.alpha  = Math.random() * 0.5 + 0.1
      }

      update() {
        this.y += this.speedY
        this.x += this.speedX
        if (this.y < -10) this.reset()
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(255, 183, 124, ${this.alpha})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function resize() {
      canvas!.width  = window.innerWidth
      canvas!.height = window.innerHeight
    }

    function initParticles() {
      particles = []
      const count = window.innerWidth < 768 ? 40 : 100
      for (let i = 0; i < count; i++) particles.push(new Particle())
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      particles.forEach(p => { p.update(); p.draw(ctx!) })
      animId = requestAnimationFrame(animate)
    }

    const handleResize = () => { resize(); initParticles() }
    window.addEventListener('resize', handleResize)

    resize()
    initParticles()
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      id="particle-canvas"
      ref={canvasRef}
    />
  )
}
