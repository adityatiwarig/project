import { Calendar, Clock, MapPin, Bell } from "lucide-react"

export function UpcomingEvents() {
  const events = [
    {
      id: 1,
      name: "Guest Lecture: AI in Industry",
      date: "Nov 30",
      time: "2:00 PM",
      location: "Auditorium A",
      icon: "🎤",
    },
    {
      id: 2,
      name: "Code Review Session",
      date: "Dec 1",
      time: "4:00 PM",
      location: "Lab 5",
      icon: "💻",
    },
    {
      id: 3,
      name: "Department Seminar",
      date: "Dec 2",
      time: "3:30 PM",
      location: "Conference Hall",
      icon: "📚",
    },
  ]

  return (
    <div className="glass-effect rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Calendar size={24} className="text-indigo-500" />
        Upcoming Events
      </h3>

      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors group cursor-pointer"
          >
            <p className="text-sm font-semibold text-gray-900 dark:text-white">{event.name}</p>
            <div className="space-y-2 mt-2 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Clock size={14} />
                {event.date} at {event.time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                {event.location}
              </div>
            </div>
            <button className="mt-3 w-full py-2 rounded-lg bg-indigo-500 text-white text-xs font-semibold hover:bg-indigo-600 transition-colors group-hover:shadow-lg">
              <Bell size={14} className="inline mr-1" />
              Remind Me
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
