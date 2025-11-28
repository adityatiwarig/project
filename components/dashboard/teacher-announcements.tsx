"use client"

import { Edit2, Trash2, Clock } from "lucide-react"

export function TeacherAnnouncements() {
  const announcements = [
    {
      id: 1,
      title: "Midterm Exam Scheduled",
      description: "The midterm exam for Data Structures has been scheduled for next week.",
      audience: "3rd Year CSE",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Assignment Submission Extended",
      description: "Due to requests, the assignment deadline has been extended by 3 days.",
      audience: "All Students",
      time: "1 day ago",
    },
  ]

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg hover:shadow-indigo-500/10 transition-all">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">My Announcements</h2>
      <div className="space-y-4">
        {announcements.map((ann) => (
          <div
            key={ann.id}
            className="p-4 rounded-lg bg-gray-50 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{ann.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{ann.description}</p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-xs font-medium bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-full">
                    {ann.audience}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="w-3 h-3" />
                    {ann.time}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg hover:bg-red-500/20 text-red-600 dark:text-red-400 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
