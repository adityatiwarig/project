"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { AnnouncementsFeed } from "@/components/dashboard/announcements-feed"
import { UpcomingEvents } from "@/components/dashboard/upcoming-events"
import { RecommendedGroups } from "@/components/dashboard/recommended-groups"
import { MyBookings } from "@/components/dashboard/my-bookings"

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    setIsDark(!isDark)
    localStorage.setItem("theme", isDark ? "light" : "dark")
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-950">
      {/* Sidebar */}
      <DashboardSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader isDark={isDark} onToggleDark={toggleDarkMode} />

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Quick Actions */}
            <QuickActions />

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              {/* Left Column - Announcements */}
              <div className="lg:col-span-2">
                <AnnouncementsFeed />
              </div>

              {/* Right Column - Events & Bookings */}
              <div className="space-y-6">
                <UpcomingEvents />
                <MyBookings />
              </div>
            </div>

            {/* Recommended Groups */}
            <div className="mt-8">
              <RecommendedGroups />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
