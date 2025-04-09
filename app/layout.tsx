import "@/app/globals.css"
import "@/app/responsive.css" // Import additional responsive styles
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Quick Quality Developers | Personal Portfolio",
  description: "Professional developer building high-quality apps with speed and precision",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5", // Improved viewport meta
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'