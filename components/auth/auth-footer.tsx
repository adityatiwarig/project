import Link from "next/link"

interface AuthFooterProps {
  isSignUp: boolean
}

export function AuthFooter({ isSignUp }: AuthFooterProps) {
  return (
    <div className="text-center space-y-3 fade-in-up stagger-6">
      {isSignUp ? (
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/signin" className="text-indigo-500 dark:text-indigo-400 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      ) : (
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/signup" className="text-indigo-500 dark:text-indigo-400 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      )}
      <div className="pt-4 border-t border-border flex gap-4 justify-center text-xs text-muted-foreground">
        <Link href="/terms" className="hover:text-foreground transition-colors">
          Terms
        </Link>
        <Link href="/privacy" className="hover:text-foreground transition-colors">
          Privacy
        </Link>
        <Link href="/contact" className="hover:text-foreground transition-colors">
          Contact
        </Link>
      </div>
    </div>
  )
}
