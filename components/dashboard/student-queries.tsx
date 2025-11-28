"use client"

import { MessageCircle, ThumbsUp, Flag } from "lucide-react"

export function StudentQueries() {
  const queries = [
    {
      id: 1,
      studentName: "Rahul Sharma",
      question: "How do we implement AVL Tree balancing?",
      course: "Data Structures",
      likes: 8,
      responses: 3,
    },
    {
      id: 2,
      studentName: "Neha Patel",
      question: "What's the difference between SQL and NoSQL?",
      course: "Database Systems",
      likes: 12,
      responses: 5,
    },
  ]

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Student Queries</h2>
      <div className="space-y-4">
        {queries.map((query) => (
          <div
            key={query.id}
            className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-700/30 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{query.studentName}</p>
                <h3 className="font-semibold text-gray-900 dark:text-white mt-1">{query.question}</h3>
                <p className="text-xs text-cyan-600 dark:text-cyan-400 mt-2">{query.course}</p>
                <div className="flex items-center gap-3 mt-3 text-xs text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="w-3 h-3 text-green-500" />
                    {query.likes}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-blue-500" />
                    {query.responses} responses
                  </div>
                </div>
              </div>
              <button className="p-2 rounded-lg hover:bg-red-500/20 text-red-600 dark:text-red-400 transition-colors">
                <Flag className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
