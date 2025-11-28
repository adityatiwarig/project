"use client"

import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    quote:
      "Campus Connect changed the way we manage events in our department. Everything is now centralized and accessible.",
    author: "Prof. Sarah Johnson",
    role: "CSE Faculty Head",
    avatar: "👩‍🏫",
  },
  {
    quote: "Resource booking became super smooth and stress-free. I can now find study rooms in seconds.",
    author: "Rajesh Kumar",
    role: "3rd Year Student",
    avatar: "👨‍🎓",
  },
  {
    quote: "The collaboration features helped our hackathon team stay organized and focused. Highly recommended!",
    author: "Priya Sharma",
    role: "Hackathon Organizer",
    avatar: "👩‍💻",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Users Say</h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 sm:p-12 text-center min-h-80 flex flex-col justify-center transition-all duration-500">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl font-medium text-gray-900 dark:text-white mb-8 italic">
              "{testimonials[current].quote}"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">{testimonials[current].avatar}</div>
              <p className="font-semibold text-gray-900 dark:text-white">{testimonials[current].author}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-indigo-600 dark:bg-indigo-400 w-8"
                    : "bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 dark:hover:bg-slate-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
