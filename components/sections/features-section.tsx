"use client"

import { Bell, Calendar, BookOpen, Users, Zap, MessageSquare } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: Bell,
    title: "Announcements & Notifications",
    description: "Never miss important updates from faculty or administration.",
  },
  {
    icon: Calendar,
    title: "Events & Calendar",
    description: "Stay organized with a unified academic and campus event calendar.",
  },
  {
    icon: BookOpen,
    title: "Resource Booking",
    description: "Book study rooms, labs, and equipment seamlessly.",
  },
  {
    icon: Users,
    title: "Group Discussion",
    description: "Join forums, project groups, and hackathon matchmaking.",
  },
  {
    icon: Zap,
    title: "Library & Lab Tools",
    description: "Easy access to digital resources and equipment management.",
  },
  {
    icon: MessageSquare,
    title: "Student–Faculty Interaction",
    description: "Clear communication channels for queries and support.",
  },
]

export function FeaturesSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          features.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, i])
            }, i * 100)
          })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features, Simple Interface
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-balance max-w-2xl mx-auto">
            Everything you need to stay connected with your campus community
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`p-6 rounded-xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover-lift transition-all duration-500 ${
                  visibleItems.includes(index) ? "fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
