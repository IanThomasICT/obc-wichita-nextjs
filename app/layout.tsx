import "@/styles/globals.css"
import { Metadata } from "next"
import { League_Spartan as FontSans } from "next/font/google"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import Footer from "@/components/Footer"
import { Header } from "@/components/Header"
import { TailwindIndicator } from "@/components/TailwindIndicator"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/blue-icon.svg",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface Props {
  children: React.ReactNode
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: Props) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />

        <body className={cn("min-h-screen bg-background antialiased overflow-x-hidden", fontSans.className)}>
          <TooltipProvider>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <TailwindIndicator />
          </TooltipProvider>
        </body>
      </html>
    </>
  )
}
