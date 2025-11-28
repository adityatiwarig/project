import { CheckCircle, Clock, XCircle } from "lucide-react"

export function MyBookings() {
  const bookings = [
    {
      id: 1,
      resource: "Study Room 12",
      time: "Today, 3:00 PM - 5:00 PM",
      status: "confirmed",
    },
    {
      id: 2,
      resource: "Lab Equipment: Oscilloscope",
      time: "Tomorrow, 10:00 AM",
      status: "pending",
    },
  ]

  const getStatusIcon = (status: string) => {
    if (status === "confirmed") return <CheckCircle size={16} className="text-green-500" />
    if (status === "pending") return <Clock size={16} className="text-yellow-500" />
    return <XCircle size={16} className="text-red-500" />
  }

  const getStatusColor = (status: string) => {
    if (status === "confirmed") return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    if (status === "pending") return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
  }

  return (
    <div className="glass-effect rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">My Bookings</h3>

      <div className="space-y-3">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{booking.resource}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{booking.time}</p>
              </div>
              <div className="flex items-center gap-1">
                {getStatusIcon(booking.status)}
                <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 rounded-lg border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 font-semibold hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors">
        View All Bookings
      </button>
    </div>
  )
}
