"use client"

import Link from "next/link"
import { useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"

export function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    setIsDark(!isDark)
    localStorage.setItem("theme", isDark ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold gradient-text">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold">
            CC
          </div>
          <span className="hidden sm:inline">Campus Connect</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#why"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Why
          </Link>
          <Link
            href="#how"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            How
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Auth Buttons */}
          <div className="hidden sm:flex gap-2">
            <Link
              href="/signin"
              className="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 text-sm font-medium bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-500 dark:text-slate-900 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 p-4 space-y-3">
          <Link
            href="#features"
            className="block text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
          >
            Features
          </Link>
          <Link
            href="#why"
            className="block text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
          >
            Why
          </Link>
          <Link
            href="#how"
            className="block text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
          >
            How
          </Link>
          <div className="flex gap-2 pt-2">
            <Link
              href="/signin"
              className="flex-1 px-4 py-2 text-sm font-medium border border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-lg text-center"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="flex-1 px-4 py-2 text-sm font-medium bg-indigo-500 text-white rounded-lg text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
