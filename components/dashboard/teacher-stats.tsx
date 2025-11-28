"use client"

export function TeacherStats() {
  const stats = [
    { label: "Total Announcements", value: "24", icon: "📢", color: "indigo" },
    { label: "Events Created", value: "12", icon: "📅", color: "cyan" },
    { label: "Course Groups", value: "5", icon: "👥", color: "amber" },
    { label: "Pending Approvals", value: "3", icon: "⏳", color: "red" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="rounded-xl bg-white dark:bg-slate-800 p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:shadow-indigo-500/10 transition-all"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
            </div>
            <span className="text-3xl">{stat.icon}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
