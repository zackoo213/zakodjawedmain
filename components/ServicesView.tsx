"use client"

import type React from "react"
import { TwoStarsIcon } from "./CustomIcons"
import Image from "next/image"

interface ServicesViewProps {
  onClose: () => void
}

const SERVICES = [
  {
    title: "UGC b' Darja",
    image: "/images/ugc.png",
    description: "khiyer your UGC and we take care of the rest",
  },
  {
    title: "Shooting Photo",
    image: "/images/photoshoot.png",
    description: "No photographer, No expensive cameras. Unlimited possibilities.",
  },
  {
    title: "Cinematic Videos",
    image: "/images/cinematic.png",
    description: "Production vidéo haut de gamme et storytelling.",
  },
]

export const ServicesView: React.FC<ServicesViewProps> = ({ onClose }) => {
  return (
    <div className="w-full min-h-screen flex flex-col max-w-2xl mx-auto bg-background">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-background/90 backdrop-blur-md px-6 py-5 flex items-center justify-between border-b border-border">
        <h2 className="text-xl font-bold text-foreground tracking-tighter flex items-center gap-2">
          <TwoStarsIcon className="w-6 h-6 text-foreground" />
          <span>Nos Services</span>
        </h2>
        <button
          onClick={onClose}
          className="p-3 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors border border-border shadow-sm"
          aria-label="Close services"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Services List */}
      <div className="flex flex-col gap-6 p-4 pb-20">
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className="group relative bg-card rounded-[1.5rem] overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 shadow-sm will-change-transform"
          >
            {/* Image Section */}
            <div className="h-56 w-full overflow-hidden relative bg-black/20">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 672px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content Section */}
            <div className="p-6 relative z-20">
              <h3 className="text-lg font-bold text-foreground mb-1 uppercase tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.description}</p>

              <button
                disabled
                className="w-full py-4 bg-secondary text-muted-foreground rounded-2xl font-bold cursor-not-allowed border border-border flex items-center justify-center gap-2 uppercase tracking-[0.1em] text-xs transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                Coming Soon
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
