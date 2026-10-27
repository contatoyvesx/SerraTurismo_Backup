import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://serraturismo.com.br"),
  title: {
    default: "HA Serra Turismo | Experiências na Serra Gaúcha",
    template: "%s | HA Serra Turismo",
  },
  description:
    "Planeje seus passeios, transfers e experiências em Gramado, Canela e na Serra Gaúcha com atendimento personalizado pelo WhatsApp.",
  applicationName: "HA Serra Turismo",
  keywords: [
    "turismo Serra Gaúcha",
    "passeios Gramado",
    "passeios Canela",
    "transfer Gramado",
    "Maria Fumaça",
    "tour Uva e Vinho",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "HA Serra Turismo",
    title: "HA Serra Turismo | Viva a Serra Gaúcha",
    description:
      "Passeios e transfers na Serra Gaúcha com atendimento personalizado.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HA Serra Turismo | Experiências na Serra Gaúcha",
    description:
      "Planeje seus passeios e transfers na Serra Gaúcha com atendimento personalizado.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
