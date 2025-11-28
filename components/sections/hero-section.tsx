"use client"

import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 left-10 w-96 h-96 bg-gradient-to-tr from-cyan-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? "fade-in" : "opacity-0"}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 dark:border-indigo-400/30 mb-6">
            <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Welcome to Campus Connect
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 text-balance leading-tight">
            Your Smart <span className="gradient-text">Campus Hub</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 text-balance leading-relaxed max-w-3xl mx-auto">
            A unified platform for announcements, events, bookings, groups, and collaboration — all in one place. Stay
            connected, stay organized, stay informed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary group flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/signin" className="btn-secondary flex items-center justify-center gap-2">
              Login
            </Link>
          </div>
        </div>

        {/* Hero Illustration */}
        <div
          className={`mt-16 transition-all duration-1000 delay-300 ${isVisible ? "fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-700 bg-gradient-to-br from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
            {/* Placeholder dashboard mockup */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-indigo-600 dark:text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
