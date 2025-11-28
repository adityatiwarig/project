"use client"

import { MessageSquare, Calendar, Users } from "lucide-react"

export function TeacherQuickActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Create Announcement */}
      <button className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 dark:hover:shadow-indigo-500/10 border border-gray-200 dark:border-slate-700">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative flex flex-col items-center gap-3 text-center">
          <div className="rounded-lg bg-indigo-500/20 p-3 group-hover:scale-110 transition-transform">
            <MessageSquare className="w-6 h-6 text-indigo-500" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Create Announcement</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Notify your students</p>
          </div>
        </div>
      </button>

      {/* Create Event */}
      <button className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 dark:hover:shadow-cyan-500/10 border border-gray-200 dark:border-slate-700">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative flex flex-col items-center gap-3 text-center">
          <div className="rounded-lg bg-cyan-500/20 p-3 group-hover:scale-110 transition-transform">
            <Calendar className="w-6 h-6 text-cyan-500" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Create Event</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Schedule a class or meeting</p>
          </div>
        </div>
      </button>

      {/* Manage Course Groups */}
      <button className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 dark:hover:shadow-amber-500/10 border border-gray-200 dark:border-slate-700">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative flex flex-col items-center gap-3 text-center">
          <div className="rounded-lg bg-amber-500/20 p-3 group-hover:scale-110 transition-transform">
            <Users className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Manage Groups</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Handle course discussions</p>
          </div>
        </div>
      </button>
    </div>
  )
}
