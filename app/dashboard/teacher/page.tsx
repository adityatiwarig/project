"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TeacherQuickActions } from "@/components/dashboard/teacher-quick-actions"
import { TeacherStats } from "@/components/dashboard/teacher-stats"
import { TeacherAnnouncements } from "@/components/dashboard/teacher-announcements"
import { TeacherEvents } from "@/components/dashboard/teacher-events"
import { TeacherCourseGroups } from "@/components/dashboard/teacher-course-groups"
import { TeacherCourses } from "@/components/dashboard/teacher-courses"
import { BookingApprovals } from "@/components/dashboard/booking-approvals"
import { StudentQueries } from "@/components/dashboard/student-queries"

export default function TeacherDashboard() {
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
        <DashboardHeader isDark={isDark} onToggleDark={toggleDarkMode} role="faculty" />

        {/* Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Quick Actions */}
            <TeacherQuickActions />

            {/* Stats */}
            <TeacherStats />

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              {/* Left Column - Announcements & Events */}
              <div className="lg:col-span-2 space-y-6">
                <TeacherAnnouncements />
                <TeacherEvents />
              </div>

              {/* Right Column - Courses & Groups */}
              <div className="space-y-6">
                <TeacherCourses />
              </div>
            </div>

            {/* Course Groups */}
            <div className="mt-8">
              <TeacherCourseGroups />
            </div>

            {/* Booking Approvals & Student Queries */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
              <BookingApprovals />
              <StudentQueries />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
