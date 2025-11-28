"use client"

import { MessageCircle, Users } from "lucide-react"

export function TeacherCourseGroups() {
  const groups = [
    {
      id: 1,
      name: "Data Structures Discussion",
      course: "CS201 - Data Structures",
      students: 48,
      posts: 156,
    },
    {
      id: 2,
      name: "Web Development Forum",
      course: "CS301 - Web Development",
      students: 32,
      posts: 89,
    },
    {
      id: 3,
      name: "Database Design Q&A",
      course: "CS305 - Database Systems",
      students: 35,
      posts: 124,
    },
  ]

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg hover:shadow-indigo-500/10 transition-all">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Course Groups & Forums</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className="p-4 rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700/50 hover:shadow-md transition-all"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">{group.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{group.course}</p>
            <div className="space-y-2 mt-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Users className="w-4 h-4 text-indigo-500" />
                {group.students} students
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <MessageCircle className="w-4 h-4 text-cyan-500" />
                {group.posts} posts
              </div>
            </div>
            <button className="w-full py-2 rounded-lg bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-500/30 transition-colors text-sm font-medium">
              Open Forum
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
