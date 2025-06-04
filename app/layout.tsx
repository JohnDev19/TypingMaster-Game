import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TypingMaster - Professional Typing Game",
  description: "Master your typing skills with 50 challenging levels across 4 difficulty modes. Created by JohnDev19",
  authors: [{ name: "JohnDev19" }],
  creator: "JohnDev19",
  keywords: [
    "typing game",
    "typing test",
    "keyboard skills",
    "typing practice",
    "WPM test",
    "typing speed",
    "typing accuracy",
    "educational game",
    "skill development",
    "JohnDev19",
  ],
  openGraph: {
    title: "TypingMaster - Professional Typing Game",
    description: "Master your typing skills with 50 challenging levels across 4 difficulty modes",
    type: "website",
    locale: "en_US",
    siteName: "TypingMaster",
  },
  twitter: {
    card: "summary_large_image",
    title: "TypingMaster - Professional Typing Game",
    description: "Master your typing skills with 50 challenging levels across 4 difficulty modes",
    creator: "@JohnDev19",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/keyboard.png",
    shortcut: "/images/keyboard.png",
    apple: "/images/keyboard.png",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/keyboard.png" />
        <meta name="author" content="JohnDev19" />
        <meta name="creator" content="JohnDev19" />
        <meta name="theme-color" content="#8b5cf6" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
