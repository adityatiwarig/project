import type React from "react"

interface FormFieldProps {
  label: string
  type?: string
  placeholder: string
  icon?: React.ReactNode
  required?: boolean
}

export function FormField({ label, type = "text", placeholder, icon, required = false }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-foreground flex items-center gap-1">
        {label}
        {required && <span className="text-destructive">*</span>}
      </label>
      <div className="relative">
        {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</div>}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 ${icon ? "pl-10" : ""} py-3 rounded-lg bg-muted border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-300`}
        />
      </div>
    </div>
  )
}
