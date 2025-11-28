import { BookOpen, Calendar, Users } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      icon: BookOpen,
      label: "Book Resource",
      description: "Study room, lab equipment",
      href: "#",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Calendar,
      label: "View Calendar",
      description: "Events, deadlines, exams",
      href: "#",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Users,
      label: "Join Groups",
      description: "Forums, discussions, teams",
      href: "#",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {actions.map((action, i) => {
        const Icon = action.icon
        return (
          <button
            key={i}
            className={`group relative overflow-hidden rounded-2xl p-6 text-white font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${action.color}`}></div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>

            <div className="relative flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur">
                <Icon size={28} />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold">{action.label}</h3>
                <p className="text-sm text-white/80">{action.description}</p>
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}
