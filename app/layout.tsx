import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Poppins as V0_Font_Poppins, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"

// Initialize fonts
const poppins = V0_Font_Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  display: "swap",
  variable: "--font-poppins",
})

const geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-background selection:bg-primary/30">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
