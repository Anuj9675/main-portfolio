"use client"

import { X } from "lucide-react"
import Image from "next/image"

type MediaModalProps = {
  src: string
  onClose: () => void
}

export default function MediaModal({ src, onClose }: MediaModalProps) {
  return (
    <div className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-8 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl aspect-video animate-fade-in-up">
        <button 
          onClick={onClose} 
          className="absolute -top-16 right-0 text-white hover:opacity-60 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
          <Image src={src} alt="Portfolio item" fill className="object-contain" />
        </div>
      </div>
    </div>
  )
}
