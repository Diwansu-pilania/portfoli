import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Diwansu Pilania | AI & ML Enthusiast",
  description: "Personal portfolio of Diwansu Pilania, an AI & Machine Learning Enthusiast",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-900/50 to-black -z-10" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

