"use client"

import { useState } from "react"

interface RoleSelectorProps {
  onRoleChange: (role: "student" | "faculty" | "admin") => void
}

export function RoleSelector({ onRoleChange }: RoleSelectorProps) {
  const [selectedRole, setSelectedRole] = useState<"student" | "faculty" | "admin">("student")

  const roles: Array<{ id: "student" | "faculty" | "admin"; label: string; icon: string; description: string }> = [
    { id: "student", label: "Student", icon: "👨‍🎓", description: "Access courses & resources" },
    { id: "faculty", label: "Faculty", icon: "👨‍🏫", description: "Manage courses & students" },
    { id: "admin", label: "Admin", icon: "⚙️", description: "Manage platform" },
  ]

  const handleRoleChange = (role: "student" | "faculty" | "admin") => {
    setSelectedRole(role)
    onRoleChange(role)
  }

  return (
    <div className="space-y-3 fade-in-up stagger-4">
      <label className="text-sm font-semibold text-foreground">Select Role</label>
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => handleRoleChange(role.id)}
            className={`p-3 md:p-4 rounded-xl transition-all duration-300 border-2 ${
              selectedRole === role.id
                ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950 dark:border-indigo-400"
                : "border-transparent bg-muted hover:border-indigo-300 dark:hover:border-indigo-600"
            }`}
          >
            <div className="text-2xl md:text-3xl mb-1">{role.icon}</div>
            <div className="text-xs md:text-sm font-semibold text-foreground">{role.label}</div>
            <div className="text-xs text-muted-foreground mt-1 hidden md:block">{role.description}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
