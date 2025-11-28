"use client"

import { useState } from "react"
import Link from "next/link"
import { AuthCard } from "@/components/auth/auth-card"
import { AuthHeader } from "@/components/auth/auth-header"
import { GoogleButton } from "@/components/auth/google-button"
import { FormField } from "@/components/auth/form-field"
import { AuthFooter } from "@/components/auth/auth-footer"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

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
        <AuthHeader title="Welcome Back" subtitle="Sign in to continue to your campus hub." />

        <div className="space-y-4">
          <FormField label="Email" type="email" placeholder="your.email@campus.edu" icon="✉️" required />
          <FormField label="Password" type="password" placeholder="Enter your password" icon="🔒" required />
        </div>

        {/* Forgot password link */}
        <Link
          href="#"
          className="text-sm text-indigo-500 dark:text-indigo-400 hover:underline fade-in-up stagger-3 block text-right"
        >
          Forgot password?
        </Link>

        <button className="w-full btn-primary fade-in-up stagger-4 text-base md:text-lg">Sign In</button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Google sign in */}
        <GoogleButton />

        {/* Footer with sign up link */}
        <AuthFooter isSignUp={false} />
      </AuthCard>
    </main>
  )
}
