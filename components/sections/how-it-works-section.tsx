"use client"

import { UserPlus, Zap, Share2 } from "lucide-react"
import { useEffect, useState } from "react"

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Choose your role: Student, Faculty, or Admin. Get your profile ready in minutes.",
  },
  {
    icon: Zap,
    title: "Get Connected",
    description: "Access announcements, events, bookings, and groups instantly from day one.",
  },
  {
    icon: Share2,
    title: "Collaborate & Grow",
    description: "Join discussions, book resources, and build your campus network.",
  },
]

export function HowItWorksSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => {
              setVisibleSteps((prev) => [...prev, i])
            }, i * 200)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    const section = document.getElementById("how-section")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="how"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5 dark:from-indigo-500/10 dark:to-cyan-500/10"
    >
      <div className="max-w-7xl mx-auto" id="how-section">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-balance max-w-2xl mx-auto">
            Get started in three simple steps and become part of the campus community
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  visibleSteps.includes(index) ? "fade-in-up" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                  {index + 1}
                </div>

                {/* Step Icon */}
                <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-indigo-600 dark:text-indigo-400" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
