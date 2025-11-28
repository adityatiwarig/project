"use client"

import { Calendar, MapPin, Users, Edit2, X } from "lucide-react"

export function TeacherEvents() {
  const events = [
    {
      id: 1,
      title: "Data Structures Lecture",
      date: "Nov 28, 2024",
      time: "10:00 AM - 11:30 AM",
      location: "Room 201, Block A",
      rsvp: 45,
    },
    {
      id: 2,
      title: "Lab Session - Binary Trees",
      date: "Nov 29, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Lab 5, Block B",
      rsvp: 30,
    },
  ]

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 dark:from-cyan-500/5 dark:to-indigo-500/5 border border-cyan-200/50 dark:border-cyan-700/50 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4 text-cyan-500" />
                    {event.date} • {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Users className="w-4 h-4 text-cyan-500" />
                    {event.rsvp} RSVPs
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg hover:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-2 rounded-lg hover:bg-red-500/20 text-red-600 dark:text-red-400 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
