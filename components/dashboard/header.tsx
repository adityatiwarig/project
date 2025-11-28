"use client"

import { Bell, Moon, Sun } from "lucide-react"
import { useState } from "react"

interface DashboardHeaderProps {
  isDark: boolean
  onToggleDark: () => void
}

export function DashboardHeader({ isDark, onToggleDark }: DashboardHeaderProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back, <span className="gradient-text">Arjun</span> 👋
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Student • CSE Department</p>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors relative"
            >
              <Bell size={20} className="text-gray-600 dark:text-gray-400" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Notification Dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 glass-effect rounded-xl shadow-xl">
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Notifications</h3>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="p-3 bg-gray-50 dark:bg-slate-800 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer transition-colors"
                      >
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          New announcement from CSE Department
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2 hours ago</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDark}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-600" />}
          </button>

          {/* Profile */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-semibold cursor-pointer hover:shadow-lg transition-shadow">
            A
          </div>
        </div>
      </div>
    </header>
  )
}
