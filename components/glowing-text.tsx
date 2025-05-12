import type React from "react"
interface GlowingTextProps {
  children: React.ReactNode
  className?: string
}

export default function GlowingText({ children, className = "" }: GlowingTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 blur-md opacity-50 bg-[#00e676] z-0" aria-hidden="true"></span>
    </span>
  )
}
