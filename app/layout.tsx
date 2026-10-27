import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
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
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

const gtmId = "GTM-KD6TX9HZ"
const googleAdsId = "AW-17709711266"

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAdsId}');`}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
