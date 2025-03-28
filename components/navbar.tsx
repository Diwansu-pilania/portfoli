"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "./logo"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-purple-500/20 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <SocialIcons />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900/95 backdrop-blur-md border-b border-purple-500/20"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <nav className="flex flex-col gap-4">
                <NavLinks mobile setMobileMenuOpen={setMobileMenuOpen} />
              </nav>
              <div className="flex items-center gap-4 justify-center pt-2">
                <SocialIcons />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLinks({ mobile = false, setMobileMenuOpen = () => {} }) {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return links.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`relative font-medium text-gray-200 hover:text-white transition-colors group ${
        mobile ? "text-lg py-2" : ""
      }`}
      onClick={() => mobile && setMobileMenuOpen(false)}
    >
      {link.label}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform" />
    </Link>
  ))
}

function SocialIcons() {
  const socialLinks = [
    { href: "https://github.com/", icon: <Github size={20} />, label: "GitHub" },
    { href: "https://linkedin.com/in/", icon: <Linkedin size={20} />, label: "LinkedIn" },
    { href: "https://twitter.com/", icon: <Twitter size={20} />, label: "Twitter" },
  ]

  return socialLinks.map((link) => (
    <Link
      key={link.label}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200"
      aria-label={link.label}
    >
      {link.icon}
    </Link>
  ))
}

