"use client"

import { Users } from "lucide-react"

export function TeacherCourses() {
  const courses = [
    {
      id: 1,
      name: "Data Structures",
      code: "CS201",
      section: "A",
      students: 48,
    },
    {
      id: 2,
      name: "Web Development",
      code: "CS301",
      section: "B",
      students: 32,
    },
    {
      id: 3,
      name: "Database Systems",
      code: "CS305",
      section: "A",
      students: 35,
    },
  ]

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg hover:shadow-indigo-500/10 transition-all">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">My Courses</h2>
      <div className="space-y-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-4 rounded-lg bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 dark:from-indigo-500/5 dark:to-cyan-500/5 border border-indigo-200/50 dark:border-indigo-700/50 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{course.name}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {course.code} - Section {course.section}
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-600 dark:text-gray-300">
                  <Users className="w-3 h-3 text-cyan-500" />
                  {course.students} students
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <button className="flex-1 py-1.5 rounded text-xs font-medium bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/30 transition-colors">
                Forum
              </button>
              <button className="flex-1 py-1.5 rounded text-xs font-medium bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/30 transition-colors">
                Announce
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
