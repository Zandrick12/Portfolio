import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { portfolioConfig } from "@/config/portfolio.config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${portfolioConfig.person.name} — IT Student & Aspiring Software Engineer`,
  description: portfolioConfig.person.heroSubtext,
  keywords: [
    "Software Engineer",
    "IT Student",
    "Web Developer",
    "Python FastAPI",
    "React TypeScript",
    "ROTC QR Attendance",
    "Systems Engineering",
    "Portfolio",
  ],
  authors: [{ name: portfolioConfig.person.name }],
  openGraph: {
    title: `${portfolioConfig.person.name} — Software Engineering Identity`,
    description: portfolioConfig.person.heroSubtext,
    type: "website",
    locale: "en_US",
    siteName: `${portfolioConfig.person.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioConfig.person.name} — IT & Software Engineering Portfolio`,
    description: portfolioConfig.person.heroSubtext,
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-background text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-white min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
