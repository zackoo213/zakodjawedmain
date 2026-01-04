"use client"

import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

// Helper component for each grid slot with static images
function BentoSlot({
  className = "",
  id,
  src,
  isDesktop = false,
}: {
  className?: string
  id: string
  src?: string
  isDesktop?: boolean
}) {
  return (
    <div
      className={`relative group ${isDesktop ? "bg-transparent" : "bg-black"} rounded-[2rem] md:rounded-[2.5rem] overflow-hidden transition-transform hover:scale-[1.01] active:scale-100 ${className}`}
    >
      {src ? (
        <Image src={src || "/placeholder.svg"} alt="Bento content" fill className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center opacity-20 px-0 mx-0 gap-0 py-0">
          <div className="w-12 h-12 border-2 border-white/20 rounded-full" />
        </div>
      )}
    </div>
  )
}

function AnimatedBentoSlot({
  className = "",
  images,
  interval = 3000,
  isDesktop = false,
}: {
  className?: string
  images: string[]
  interval?: number
  isDesktop?: boolean
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images, interval])

  return (
    <div
      className={`relative group ${isDesktop ? "bg-transparent" : "bg-black"} rounded-[2rem] md:rounded-[2.5rem] overflow-hidden transition-transform hover:scale-[1.01] active:scale-100 ${className}`}
    >
      {images.map((src, index) => (
        <Image
          key={src}
          src={src || "/placeholder.svg"}
          alt={`Bento content ${index}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  )
}

export default function FormationPage() {
  const handleRejoindreClick = () => {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=13605162802&text=Je+souhaite+rejoindre+AI+Hub&type=phone_number&app_absent=0"
  }

  return (
    <div className="min-h-screen bg-[#C6F455] p-4 md:p-8 pb-32 bg-lime-950">
      {/* Back Button */}
      <div className="max-w-[1400px] mx-auto mb-6 md:mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-black hover:opacity-70 transition-opacity font-black text-xl md:text-2xl"
        >
          <ArrowLeft className="text-primary" size={28} strokeWidth={4} />
          <span className="tracking-tighter text-primary">RETOUR</span>
        </Link>
      </div>

      {/* Bento Grid - Responsive implementation */}
      <div className="max-w-[1400px] mx-auto">
        {/* Desktop Grid Layout */}
        <div className="hidden md:flex md:flex-col md:gap-6 md:max-w-[800px] md:mx-auto">
          {/* Top Banner */}
          <div className="aspect-[16/9] w-full">
            <BentoSlot id="d-1" className="h-full w-full" src="/images/ugc-13.png" isDesktop={true} />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square">
              <BentoSlot id="d-2" className="h-full w-full" src="/images/FREE.png" isDesktop={true} />
            </div>
            <div className="aspect-square">
              <BentoSlot id="d-3" className="h-full w-full" src="/images/1.png" isDesktop={true} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-[1/2]">
              <BentoSlot id="d-4" className="h-full w-full" src="/images/community-chat-v2.png" isDesktop={true} />
            </div>
            <div className="flex flex-col gap-6">
              <div className="aspect-square">
                <BentoSlot id="d-5" className="h-full w-full" src="/images/2.png" isDesktop={true} />
              </div>
              <div className="aspect-square">
                <BentoSlot id="d-6" className="h-full w-full" src="/images/3.png" isDesktop={true} />
              </div>
            </div>
          </div>

          {/* Full Width Banner */}
          <div className="aspect-[16/8] w-full">
            <BentoSlot id="d-7" className="h-full w-full" src="/images/ugc-14.png" isDesktop={true} />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square">
              <BentoSlot id="d-8" className="h-full w-full" src="/images/4.png" isDesktop={true} />
            </div>
            <div className="aspect-square">
              <BentoSlot id="d-9" className="h-full w-full" src="/images/5.png" isDesktop={true} />
            </div>
          </div>

          {/* Animated Banners */}
          <div className="aspect-[16/9] w-full">
            <AnimatedBentoSlot
              className="h-full w-full"
              interval={2000}
              images={["/images/ugc-4.png", "/images/ugc-8.png", "/images/ugc-7.png"]}
              isDesktop={true}
            />
          </div>
          <div className="aspect-[16/9] w-full">
            <AnimatedBentoSlot
              className="h-full w-full"
              images={["/images/12.png", "/images/10.png", "/images/11.png", "/images/13.png"]}
              isDesktop={true}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square">
              <BentoSlot id="d-12" className="h-full w-full" src="/images/prompt-agents.png" isDesktop={true} />
            </div>
            <div className="aspect-square">
              <BentoSlot id="d-13" className="h-full w-full" src="/images/free-3.png" isDesktop={true} />
            </div>
          </div>
        </div>

        {/* Mobile Grid Layout (Hidden on Desktop) */}
        <div className="md:hidden flex flex-col gap-4">
          {/* Top Banner (from Screen 1) */}
          <div className="aspect-[16/9] w-full">
            <BentoSlot id="m-1" className="h-full w-full" src="/images/ugc-13.png" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square">
              <BentoSlot id="m-2" className="h-full w-full" src="/images/FREE.png" />
            </div>
            <div className="aspect-square">
              <BentoSlot id="m-3" className="h-full w-full" src="/images/1.png" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[1/2]">
              <BentoSlot id="m-4" className="h-full w-full" src="/images/community-chat-v2.png" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="aspect-square">
                <BentoSlot id="m-5" className="h-full w-full" src="/images/2.png" />
              </div>
              <div className="aspect-square">
                <BentoSlot id="m-6" className="h-full w-full" src="/images/3.png" />
              </div>
            </div>
          </div>

          {/* Full Width Banner (from Screen 2) */}
          <div className="aspect-[16/8] w-full">
            <BentoSlot id="m-7" className="h-full w-full" src="/images/ugc-14.png" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square">
              <BentoSlot id="m-8" className="h-full w-full" src="/images/4.png" />
            </div>
            <div className="aspect-square">
              <BentoSlot id="m-9" className="h-full w-full" src="/images/5.png" />
            </div>
          </div>

          {/* Final Banners */}
          <div className="aspect-[16/9] w-full">
            <AnimatedBentoSlot
              className="h-full w-full"
              interval={2000}
              images={["/images/ugc-4.png", "/images/ugc-8.png", "/images/ugc-7.png"]}
            />
          </div>
          <div className="aspect-[16/9] w-full">
            <AnimatedBentoSlot
              className="h-full w-full"
              images={["/images/12.png", "/images/10.png", "/images/11.png", "/images/13.png"]}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square">
              <BentoSlot id="m-12" className="h-full w-full" src="/images/prompt-agents.png" />
            </div>
            <div className="aspect-square">
              <BentoSlot id="m-13" className="h-full w-full" src="/images/free-3.png" />
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Button */}
      <div className="fixed bottom-8 left-0 right-0 px-6 flex justify-center z-50 pointer-events-none">
        <button
          onClick={handleRejoindreClick}
          className="pointer-events-auto text-[#C6F455] font-black py-5 px-14 rounded-full shadow-[0_15px_50px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all text-xl tracking-tighter uppercase bg-lime-300 text-green-900 flex items-center gap-2"
        >
          Rejoindre
          <ChevronRight className="w-5 h-5" strokeWidth={3} />
        </button>
      </div>
    </div>
  )
}
