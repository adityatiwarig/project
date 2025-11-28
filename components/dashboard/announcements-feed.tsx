import { Bookmark, MessageCircle } from "lucide-react"

export function AnnouncementsFeed() {
  const announcements = [
    {
      id: 1,
      title: "Semester Exams Schedule Released",
      description:
        "The final exam schedule for all departments has been released. Please check the academic calendar for timings and hall allocations.",
      postedBy: "CSE Department",
      time: "2h ago",
      tag: "Academic",
      tagColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      id: 2,
      title: "Annual Tech Fest 2024 - Registration Open",
      description:
        "Register your team for our annual tech fest. Categories include hackathon, robotics, and coding competitions. Hurry, limited slots available!",
      postedBy: "Student Affairs",
      time: "4h ago",
      tag: "Event",
      tagColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    },
    {
      id: 3,
      title: "Library Maintenance Notice",
      description:
        "The library will be undergoing maintenance from next Monday to Wednesday. Study rooms and resources will be limited during this period.",
      postedBy: "Library Administration",
      time: "6h ago",
      tag: "Notice",
      tagColor: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Announcements</h2>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="glass-effect p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-102 cursor-pointer group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {announcement.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${announcement.tagColor}`}>
                    {announcement.tag}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{announcement.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-medium">{announcement.postedBy}</span>
                    <span>•</span>
                    <span>{announcement.time}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="p-2 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <MessageCircle size={18} className="text-gray-600 dark:text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg transition-colors">
                      <Bookmark size={18} className="text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
