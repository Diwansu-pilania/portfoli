import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diwansu Pilania | AI & ML Enthusiast",
  description: "Personal portfolio of Diwansu Pilania, an AI & Machine Learning Enthusiast",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'