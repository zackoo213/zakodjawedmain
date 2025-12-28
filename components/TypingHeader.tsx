"use client"

import type React from "react"
import { useState, useEffect } from "react"

const PHRASES = ["Join us :)", "Note: 4.81/5", "Learn AI", "Places Limitées", "FREE Prompts"]

export const TypingHeader: React.FC = () => {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    let timer: NodeJS.Timeout
    const handleType = () => {
      const i = loopNum % PHRASES.length
      const fullText = PHRASES[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      if (isDeleting) {
        setTypingSpeed(80)
      } else {
        setTypingSpeed(100 + Math.random() * 50)
      }

      if (!isDeleting && text === fullText) {
        setTypingSpeed(2500)
        setIsDeleting(true)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(600)
      }
    }

    timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  return (
    <div className="flex flex-wrap items-center justify-center max-w-[90vw] mx-auto">
      <h1 className="md:text-6xl tracking-tight text-center leading-tight font-extrabold font-sans text-4xl text-lime-950">
        {text}
        <span className="cursor-blink inline-block md:w-[12px] h-[0.9em] ml-2 align-middle rounded-sm w-3 bg-lime-950" />
      </h1>
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink {
          animation: blink 0.8s step-end infinite;
        }
      `}</style>
    </div>
  )
}
