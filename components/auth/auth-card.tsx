import type React from "react"

interface AuthCardProps {
  children: React.ReactNode
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-effect rounded-2xl p-8 md:p-10 space-y-6 fade-in">{children}</div>
    </div>
  )
}
