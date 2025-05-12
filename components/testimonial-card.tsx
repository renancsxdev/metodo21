import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  imageSrc: string
}

export default function TestimonialCard({ name, role, content, rating, imageSrc }: TestimonialCardProps) {
  return (
    <div className="bg-[#0a1a14] rounded-xl overflow-hidden border border-[#00e676]/20 md:hover:border-[#00e676]/40 md:hover:shadow-[0_5px_20px_rgba(0,230,118,0.15)] transition-all">
      {/* Header - similar ao Instagram */}
      <div className="flex items-center gap-3 p-4 border-b border-[#00e676]/10">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#00e676]">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-sm">{name}</h4>
          <p className="text-gray-400 text-xs">{role}</p>
        </div>
        <div className="ml-auto flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className={`${i < rating ? "text-[#00e676] fill-[#00e676]" : "text-gray-600"}`} />
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-4">
        <p className="text-gray-300 text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  )
}
