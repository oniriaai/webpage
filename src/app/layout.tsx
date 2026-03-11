import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import { cn } from "../lib/utils";
import Navbar from "../components/layout/navbar"
import Footer from "../components/layout/footer"

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
    <head> 
      <link rel="icon" type="image/x-icon" href="/icon.svg"></link>
    </head>
      <body>
        <ThemeProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
//<title>{Navbar.name}</title>