import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miqr",
  description: "Crea y descarga códigos QR en segundos.",
  keywords: ["QR", "generador QR", "descargar QR", "QR gratis", "WiFi QR", "QR en línea"],
  openGraph: {
    title: "Miqr - Genera y descarga códigos QR",
    description: "Crea y descarga códigos QR personalizados en segundos.",
    url: "https://miqr.com", // 🔥 cambia por tu dominio real
    siteName: "Miqr",
    images: [
      {
        url: "/og-image.png", // ⚡ puedes generar una imagen preview
        width: 1200,
        height: 630,
        alt: "Miqr QR Generator",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miqr - Genera y descarga códigos QR",
    description: "Crea y descarga códigos QR personalizados en segundos.",
    images: ["/og-image.png"], // misma imagen que en openGraph
    creator: "@tuusuario", // si tienes Twitter/X
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
