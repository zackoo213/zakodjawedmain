"use client"

import { useState } from "react"
import { TypingHeader } from "@/components/TypingHeader"
import { ActionButton } from "@/components/ActionButton"
import { ThreeStarsIcon, OneStarIcon, TwoStarsIcon } from "@/components/CustomIcons"
import { ServicesView } from "@/components/ServicesView"
import Image from "next/image"

export default function Page() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const handleFormationClick = () => {
    window.location.href = "https://zako-djawed.com/formation"
  }

  const handleResourcesClick = () => {
    window.location.href = "ADD_URL_HERE"
  }

  const handleServicesClick = () => {
    setIsServicesOpen(true)
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-background overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Top Section - Lime Green */}
      <div
        className={`relative bg-[#C6F455] flex items-center justify-center w-full transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden
        ${isServicesOpen ? "h-0 opacity-0" : "h-[45vh] md:h-[50vh] opacity-100"}`}
      >
        <div className={`transition-transform duration-700 ${isServicesOpen ? "-translate-y-20" : "translate-y-0"}`}>
          <TypingHeader />
        </div>
      </div>

      {/* Bottom Section - Black Sheet */}
      <div
        className={`flex-1 bg-background z-10 flex transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] flex-col items-center mx-0 my-0 px-0 w-full h-auto leading-7 gap-0 border-0 ${
          isServicesOpen
            ? "rounded-none mt-0 pt-0 h-screen overflow-y-auto"
            : "rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 pt-6 px-6 pb-0 min-h-[55vh]"
        }`}
      >
        {isServicesOpen ? (
          <div className="w-full h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <ServicesView onClose={() => setIsServicesOpen(false)} />
          </div>
        ) : (
          <div className="w-full flex flex-col items-center h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w-full max-w-sm flex flex-col gap-3 px-0 border-0">
              <ActionButton text="Formation" icon={ThreeStarsIcon} variant="primary" onClick={handleFormationClick} />
              <ActionButton text="Nos services" icon={TwoStarsIcon} variant="secondary" onClick={handleServicesClick} />
              <ActionButton
                text="FREE Resources"
                icon={OneStarIcon}
                variant="secondary"
                onClick={handleResourcesClick}
              />
            </div>

            <div className="mt-1 flex flex-col items-center justify-center gap-0 opacity-100 transition-opacity cursor-default pb-2">
              <Image
                src="/images/zako.png"
                alt="Zako Logo"
                width={120}
                height={120}
                className="w-32 h-auto object-contain"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
