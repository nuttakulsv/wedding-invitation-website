import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Wedding Invitation | เรียนเชิญร่วมงานฉลองมงคลสมรส",
  description: "เรียนเชิญร่วมงานฉลองมงคลสมรส",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Wedding Invitation | เรียนเชิญร่วมงานฉลองมงคลสมรส",
    description: "เรียนเชิญร่วมงานฉลองมงคลสมรส",
    images: [
      {
        url: "/images/card-front.png",
        width: 1200,
        height: 630,
        alt: "Wedding Invitation",
      },
    ],
    type: "website",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Invitation | เรียนเชิญร่วมงานฉลองมงคลสมรส",
    description: "เรียนเชิญร่วมงานฉลองมงคลสมรส",
    images: ["/images/card-front.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th">
      <body className={`${geist.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
