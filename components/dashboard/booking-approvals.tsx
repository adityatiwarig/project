"use client"

import { CheckCircle, XCircle } from "lucide-react"

export function BookingApprovals() {
  const bookings = [
    {
      id: 1,
      studentName: "Akshay Kumar",
      resource: "Lab 5 - Computer Lab",
      dateTime: "Nov 28, 2024 • 2:00 PM",
      purpose: "AI/ML Project - Dataset Analysis",
    },
    {
      id: 2,
      studentName: "Priya Singh",
      resource: "Equipment: Oscilloscope",
      dateTime: "Nov 29, 2024 • 10:00 AM",
      purpose: "Circuit Lab Experiment",
    },
  ]

  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg hover:shadow-amber-500/10 transition-all">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Booking Approvals</h2>
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-700/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{booking.studentName}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{booking.resource}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{booking.dateTime}</p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 font-medium">Purpose: {booking.purpose}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-green-500/20 text-green-600 dark:text-green-400 hover:bg-green-500/30 transition-colors text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                Approve
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-red-500/20 text-red-600 dark:text-red-400 hover:bg-red-500/30 transition-colors text-sm font-medium">
                <XCircle className="w-4 h-4" />
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
