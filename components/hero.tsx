"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    const offset = 80
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(
            Math.random() * 100 + 100,
          )}, 255, ${Math.random() * 0.5 + 0.3})`,
        })
      }
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(88, 101, 242, ${0.1 - distance / 1500})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x > canvas.width + 10 || p.x < -10) {
          p.speedX = -p.speedX
        }
        if (p.y > canvas.height + 10 || p.y < -10) {
          p.speedY = -p.speedY
        }
      }

      connectParticles()
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.7 }} />

      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <motion.h2
                  className="text-xl md:text-2xl font-light text-blue-400 inline-block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Hi, I&apos;m
                </motion.h2>
                <motion.h1
                  className="text-3xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Diwansu Pilania
                </motion.h1>
              </div>

              <motion.h3
                className="text-lg md:text-2xl font-medium text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                AI & Machine Learning Enthusiast
              </motion.h3>

              <motion.p
                className="text-base md:text-lg text-gray-400 max-w-lg mx-auto md:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Building intelligent solutions for a smarter world
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105"
                >
                  Explore My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 bg-transparent border border-purple-500 rounded-full text-white font-medium hover:bg-purple-500/10 transition-all duration-300"
                >
                  Contact Me
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="w-48 h-48 md:w-80 md:h-80 md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full max-w-[280px] max-h-[280px] rounded-full overflow-hidden border-2 border-purple-500/50 shadow-xl shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-28%20at%2022.21.39_f27c4dd5.jpg-725FqCKd2NOVVKRmT0dyPjHL5XKvud.jpeg"
                alt="Diwansu Pilania"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          aria-label="Scroll down"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <ArrowDown className="text-purple-400 w-6 h-6" />
          </motion.div>
        </button>
      </div>
    </section>
  )
}

