interface AuthHeaderProps {
  title: string
  subtitle: string
}

export function AuthHeader({ title, subtitle }: AuthHeaderProps) {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground fade-in-up stagger-1">{title}</h1>
      <p className="text-muted-foreground text-sm md:text-base fade-in-up stagger-2">{subtitle}</p>
    </div>
  )
}
