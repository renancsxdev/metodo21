"use client"

import { useState, useEffect } from "react"
import { Users } from "lucide-react"

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Gerar um número aleatório entre 1 e 4
    const randomVisitors = Math.floor(Math.random() * 4) + 1
    setVisitorCount(randomVisitors)

    // Atualizar o contador a cada 30-60 segundos
    const interval = setInterval(
      () => {
        // Gerar um número aleatório entre 0 e 4
        const newCount = Math.floor(Math.random() * 5)
        setVisitorCount(newCount)
      },
      Math.random() * 30000 + 30000,
    ) // Entre 30 e 60 segundos

    return () => clearInterval(interval)
  }, [])

  if (visitorCount === 0) return null

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-black/80 backdrop-blur-sm border border-[#00e676]/30 rounded-full py-2 px-4 text-sm flex items-center gap-2 shadow-lg animate-pulse">
      <Users className="w-4 h-4 text-[#00e676]" />
      <span>
        <span className="font-bold text-[#00e676]">{visitorCount}</span>{" "}
        {visitorCount === 1 ? "pessoa está" : "pessoas estão"} visualizando agora
      </span>
    </div>
  )
}
