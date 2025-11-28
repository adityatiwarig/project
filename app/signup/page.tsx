"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { AuthCard } from "@/components/auth/auth-card"
import { AuthHeader } from "@/components/auth/auth-header"
import { RoleSelector } from "@/components/auth/role-selector"
import { GoogleButton } from "@/components/auth/google-button"
import { FormField } from "@/components/auth/form-field"
import { AuthFooter } from "@/components/auth/auth-footer"

export default function SignUpPage() {
  const router = useRouter()
  const [role, setRole] = useState<"student" | "faculty" | "admin">("student")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateAccount = async () => {
    setIsLoading(true)
    console.log("[v0] Creating account for role:", role)
    // Simulate account creation delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (role === "student") {
      router.push("/dashboard/student")
    } else if (role === "faculty") {
      router.push("/dashboard/teacher")
    } else if (role === "admin") {
      router.push("/dashboard/admin")
    }

    setIsLoading(false)
  }

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12 md:py-20 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -z-10 hidden md:block" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -z-10 hidden md:block" />

      {/* Header with logo and dark mode toggle */}
      <div className="w-full max-w-md mx-auto mb-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">CC</span>
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:inline">Campus Connect</span>
        </Link>
      </div>

      {/* Main auth card */}
      <AuthCard>
        <AuthHeader title="Create your account" subtitle="Join your campus digital ecosystem." />

        <div className="space-y-4">
          <FormField label="Full Name" type="text" placeholder="John Doe" icon="👤" required />
          <FormField label="Email" type="email" placeholder="your.email@campus.edu" icon="✉️" required />
          <FormField label="Password" type="password" placeholder="Create a strong password" icon="🔒" required />
        </div>

        <RoleSelector onRoleChange={setRole} />

        {role === "student" && (
          <div className="space-y-4 fade-in-up stagger-4">
            <FormField label="Department" type="text" placeholder="e.g., Computer Science" />
            <FormField label="Year / Semester" type="text" placeholder="e.g., 3rd Year" />
          </div>
        )}

        {role === "faculty" && (
          <div className="space-y-4 fade-in-up stagger-4">
            <FormField label="Department" type="text" placeholder="e.g., Computer Science" />
            <FormField label="Faculty ID" type="text" placeholder="Your employee ID" />
          </div>
        )}

        {role === "admin" && (
          <div className="space-y-4 fade-in-up stagger-4">
            <FormField label="Admin Code" type="password" placeholder="Enter admin invitation code" />
          </div>
        )}

        <button
          onClick={handleCreateAccount}
          disabled={isLoading}
          className="w-full btn-primary fade-in-up stagger-5 text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Google sign up */}
        <GoogleButton />

        {/* Footer with sign in link */}
        <AuthFooter isSignUp={true} />
      </AuthCard>
    </main>
  )
}
