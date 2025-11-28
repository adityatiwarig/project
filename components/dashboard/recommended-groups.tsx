import { Users, Plus } from "lucide-react"

export function RecommendedGroups() {
  const groups = [
    {
      id: 1,
      name: "AI/ML Enthusiasts",
      description: "Explore artificial intelligence and machine learning projects",
      members: 234,
      matchPercentage: 95,
      icon: "🤖",
    },
    {
      id: 2,
      name: "Web Development Club",
      description: "Build amazing web applications together",
      members: 187,
      matchPercentage: 88,
      icon: "💻",
    },
    {
      id: 3,
      name: "Hackathon Team Formation",
      description: "Find teammates for upcoming hackathons",
      members: 312,
      matchPercentage: 92,
      icon: "🏆",
    },
    {
      id: 4,
      name: "Open Source Contributors",
      description: "Contribute to open source projects",
      members: 156,
      matchPercentage: 85,
      icon: "🔧",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <Users size={28} className="text-indigo-500" />
        Recommended Groups & Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className="glass-effect rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col"
          >
            <div className="text-4xl mb-3">{group.icon}</div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{group.name}</h3>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">{group.description}</p>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Users size={14} />
                  {group.members} members
                </span>
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  {group.matchPercentage}% match
                </span>
              </div>

              <button className="w-full py-2 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2">
                <Plus size={16} />
                Join Group
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
