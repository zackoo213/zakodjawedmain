"use client"

import type React from "react"

interface ActionButtonProps {
  text: string
  icon?: React.ElementType
  variant: "primary" | "secondary"
  onClick?: () => void
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text, icon: Icon, variant, onClick }) => {
  const baseStyles =
    "w-full py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] font-semibold border duration-200 group overflow-hidden"

  const variants = {
    primary: "bg-white text-black hover:bg-zinc-50 border-transparent",
    secondary: "bg-[#111111] text-white hover:bg-[#181818] border-[#222222]",
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {Icon && (
        <Icon
          className={`w-5 h-5 transition-transform group-hover:scale-110 ${variant === "primary" ? "text-black" : "text-white"}`}
        />
      )}
      <span className="tracking-tight whitespace-nowrap leading-7 text-xl">{text}</span>
    </button>
  )
}
