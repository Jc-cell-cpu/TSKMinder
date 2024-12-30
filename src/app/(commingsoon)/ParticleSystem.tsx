'use client'

import { useRef, useEffect } from 'react'

interface Particle {
    x: number
    y: number
    radius: number
    color: string
    vx: number
    vy: number
    originX: number
    originY: number
}

export default function ParticleSystem() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []
        let mouse = { x: 0, y: 0 }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        const initParticles = () => {
            particles = []
            const particleCount = Math.floor((canvas.width * canvas.height) / 9000)
            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * canvas.width
                const y = Math.random() * canvas.height
                particles.push({
                    x,
                    y,
                    radius: Math.random() * 2 + 1,
                    color: `hsl(${Math.random() * 360}, 50%, 50%)`,
                    vx: Math.random() * 2 - 1,
                    vy: Math.random() * 2 - 1,
                    originX: x,
                    originY: y
                })
            }
        }

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(particle => {
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
                ctx.fillStyle = particle.color
                ctx.fill()

                // Update particle position
                particle.x += particle.vx
                particle.y += particle.vy

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

                // Attract to mouse
                const dx = mouse.x - particle.x
                const dy = mouse.y - particle.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                if (distance < 100) {
                    const forceDirectionX = dx / distance
                    const forceDirectionY = dy / distance
                    const force = (100 - distance) / 100
                    particle.vx += forceDirectionX * force * 0.03
                    particle.vy += forceDirectionY * force * 0.03
                }

                // Return to origin
                const homeDx = particle.originX - particle.x
                const homeDy = particle.originY - particle.y
                particle.vx += homeDx * 0.003
                particle.vy += homeDy * 0.003

                // Slow down
                particle.vx *= 0.98
                particle.vy *= 0.98
            })
        }

        const animate = () => {
            drawParticles()
            animationFrameId = requestAnimationFrame(animate)
        }

        resizeCanvas()
        animate()

        window.addEventListener('resize', resizeCanvas)
        canvas.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        })

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return <canvas ref={canvasRef} className="absolute inset-0" />
}

