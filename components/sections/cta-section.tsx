"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("cta-section")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="cta-section" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-indigo-400/30 bg-gradient-to-br from-indigo-500 to-cyan-500 p-8 sm:p-12 lg:p-16 text-white">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div
            className={`relative z-10 text-center transition-all duration-1000 ${isVisible ? "fade-in" : "opacity-0"}`}
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-balance leading-tight">
              Start Your Campus Journey Today
            </h2>
            <p className="text-lg sm:text-xl opacity-90 mb-8 text-balance">Simple. Connected. Smart.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="px-8 py-4 rounded-full font-semibold bg-white text-indigo-600 hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
              >
                Create Account
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/signin"
                className="px-8 py-4 rounded-full font-semibold border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
