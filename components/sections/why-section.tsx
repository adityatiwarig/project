"use client"

import { Check } from "lucide-react"
import { useEffect, useState } from "react"

const benefits = [
  "One platform for your entire campus life",
  "Real-time updates and smart reminders",
  "Easy collaboration with classmates & faculty",
  "Mobile-friendly and beautifully designed",
  "Secure & role-based access",
  "Works seamlessly across all devices",
]

export function WhySection() {
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

    const section = document.getElementById("why-section")
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="why" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" id="why-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? "fade-in" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Why Choose <span className="gradient-text">Campus Connect?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              We've built Campus Connect with students, faculty, and administrators in mind. It's designed to solve the
              real challenges of campus life.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex gap-4 transition-all duration-500 ${isVisible ? "fade-in-up" : "opacity-0"}`}
                  style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                      <Check size={16} className="text-white" />
                    </div>
                  </div>
                  <p className="text-gray-900 dark:text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-cyan-600 dark:text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Intuitive Platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
