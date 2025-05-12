"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar o canvas para ocupar toda a área do header
    const resizeCanvas = () => {
      const headerElement = document.querySelector("header")
      if (headerElement) {
        canvas.width = headerElement.clientWidth
        canvas.height = headerElement.clientHeight
      } else {
        canvas.width = window.innerWidth
        canvas.height = 800 // Altura padrão se não encontrar o header
      }
    }

    // Chamar resize inicialmente e adicionar listener para redimensionamento
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Criar partículas
    const particles: Particle[] = []
    const particleCount = window.innerWidth < 768 ? 30 : 80 // Menos partículas em mobile

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = "#00e676"
        this.opacity = Math.random() * 0.5 + 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Verificar bordas
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX
        }

        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 230, 118, ${this.opacity})`
        ctx.fill()
      }
    }

    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Função para conectar partículas próximas
    function connectParticles() {
      if (!ctx) return

      const maxDistance = 100

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.strokeStyle = `rgba(0, 230, 118, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Loop de animação
    function animate() {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Atualizar e desenhar partículas
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      connectParticles()

      requestAnimationFrame(animate)
    }

    // Iniciar animação apenas em desktop
    if (window.innerWidth >= 768) {
      animate()
    } else {
      // Em mobile, apenas desenhar partículas estáticas
      particles.forEach((particle) => {
        particle.draw()
      })
      connectParticles()
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" aria-hidden="true" />
}
