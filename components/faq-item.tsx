"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#0a1a14] rounded-xl overflow-hidden border border-[#00e676]/20 md:hover:border-[#00e676]/40 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <h3 className="text-xl font-bold">{question}</h3>
        <div
          className={`w-8 h-8 rounded-full bg-[#00e676]/10 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-[#00e676]" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#00e676]" />
          )}
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-6 pt-0 text-gray-400 border-t border-[#00e676]/10">{answer}</div>
      </div>
    </div>
  )
}
